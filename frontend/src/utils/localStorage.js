export const STORAGE_KEYS = {
  SERVICES: 'nhv_services_v3',
  DOCTORS: 'nhv_doctors_v3',
  APPOINTMENTS: 'nhv_appointments_v3',
  CLINIC_INFO: 'nhv_clinic_info_v3',
  NOTIFICATIONS: 'nhv_notifications_v3'
};

export const loadData = (key, initialValue) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) return initialValue;
    
    const parsed = JSON.parse(data);
    
    // Safety check: If clinic info has placeholders (v2 or earlier), force update to v3
    if (key === STORAGE_KEYS.CLINIC_INFO) {
      if (!parsed.contacts || parsed.contacts.some(c => c.includes('XXXXX') || c.includes('2222222222'))) {
        saveData(key, initialValue);
        return initialValue;
      }
    }

    // Force update doctors if they have placeholder images or generic info
    if (key === STORAGE_KEYS.DOCTORS && parsed.length > 0 && parsed[0].name.includes('Dr. Jane')) {
       saveData(key, initialValue);
       return initialValue;
    }

    return parsed;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return initialValue;
  }
};

export const saveData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export const manageData = {
  appointments: {
    getAll: () => loadData(STORAGE_KEYS.APPOINTMENTS, []),
    add: (appointment) => {
      const all = loadData(STORAGE_KEYS.APPOINTMENTS, []);
      const newAppt = { 
        ...appointment, 
        id: Date.now(), 
        status: 'scheduled', 
        createdAt: new Date().toISOString() 
      };
      const updated = [...all, newAppt];
      saveData(STORAGE_KEYS.APPOINTMENTS, updated);
      
      // Auto notification for scheduling
      manageData.notifications.add({
        type: 'user',
        userId: newAppt.phone, // Using phone as a simple identifier
        message: `Your appointment for ${newAppt.petName} is scheduled for ${newAppt.date} at ${newAppt.time}.`,
        title: 'Appointment Scheduled'
      });
      manageData.notifications.add({
        type: 'admin',
        message: `New appointment scheduled by ${newAppt.name} for ${newAppt.petName} on ${newAppt.date}.`,
        title: 'New Appointment'
      });
      
      return updated;
    },
    updateStatus: (id, status) => {
      const all = loadData(STORAGE_KEYS.APPOINTMENTS, []);
      const apptIndex = all.findIndex(a => a.id === id);
      if (apptIndex === -1) return all;
      
      const appt = all[apptIndex];
      const oldStatus = appt.status;
      all[apptIndex] = { ...appt, status };
      saveData(STORAGE_KEYS.APPOINTMENTS, all);
      
      if (oldStatus !== status) {
        let message = '';
        let title = '';
        
        switch(status) {
          case 'allotted':
            title = 'Appointment Allotted';
            message = `Good news! Your appointment for ${appt.petName} has been allotted for ${appt.date} at ${appt.time}.`;
            break;
          case 'cancelled':
            title = 'Appointment Cancelled';
            message = `Your appointment for ${appt.petName} on ${appt.date} has been cancelled.`;
            break;
          case 'delayed':
            title = 'Appointment Delayed';
            message = `Your appointment for ${appt.petName} on ${appt.date} has been delayed. Please contact the clinic for a new time.`;
            break;
        }
        
        if (message) {
          manageData.notifications.add({
            type: 'user',
            userId: appt.phone,
            message,
            title
          });
          manageData.notifications.add({
            type: 'admin',
            message: `Appointment for ${appt.petName} (${appt.name}) status changed to: ${status}.`,
            title: 'Status Updated'
          });
        }
      }
      
      return all;
    },
    delete: (id) => {
      const all = loadData(STORAGE_KEYS.APPOINTMENTS, []);
      const updated = all.filter(a => a.id !== id);
      saveData(STORAGE_KEYS.APPOINTMENTS, updated);
      return updated;
    }
  },
  notifications: {
    getAll: () => loadData(STORAGE_KEYS.NOTIFICATIONS, []),
    getUserNotifications: (phone) => loadData(STORAGE_KEYS.NOTIFICATIONS, []).filter(n => n.type === 'user' && n.userId === phone),
    getAdminNotifications: () => loadData(STORAGE_KEYS.NOTIFICATIONS, []).filter(n => n.type === 'admin'),
    add: (notification) => {
      const all = loadData(STORAGE_KEYS.NOTIFICATIONS, []);
      const updated = [{ ...notification, id: Date.now(), date: new Date().toISOString(), read: false }, ...all];
      saveData(STORAGE_KEYS.NOTIFICATIONS, updated);
      return updated;
    },
    markAsRead: (id) => {
      const all = loadData(STORAGE_KEYS.NOTIFICATIONS, []);
      const updated = all.map(n => n.id === id ? { ...n, read: true } : n);
      saveData(STORAGE_KEYS.NOTIFICATIONS, updated);
      return updated;
    }
  },
  services: {
    getAll: (initial) => loadData(STORAGE_KEYS.SERVICES, initial),
    save: (services) => saveData(STORAGE_KEYS.SERVICES, services)
  },
  doctors: {
    getAll: (initial) => loadData(STORAGE_KEYS.DOCTORS, initial),
    save: (doctors) => saveData(STORAGE_KEYS.DOCTORS, doctors)
  },
  clinicInfo: {
    get: (initial) => loadData(STORAGE_KEYS.CLINIC_INFO, initial),
    save: (info) => saveData(STORAGE_KEYS.CLINIC_INFO, info)
  }
};
