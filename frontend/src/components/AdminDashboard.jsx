import React, { useState, useEffect } from 'react';
import { manageData } from '../utils/localStorage';
import { Trash2, Edit2, Plus, Save, X, LogOut, LayoutDashboard, Settings, Stethoscope, Users, Bell, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ clinicInfo, services, doctors, onUpdateClinic, onUpdateServices, onUpdateDoctors }) => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  // Editing States
  const [editClinic, setEditClinic] = useState(clinicInfo);
  const [editServices, setEditServices] = useState(services);
  const [editDoctors, setEditDoctors] = useState(doctors);

  useEffect(() => {
    setAppointments(manageData.appointments.getAll());
    setNotifications(manageData.notifications.getAdminNotifications());
  }, []);

  const handleDeleteAppointment = (id) => {
    if (window.confirm('Delete this appointment?')) {
      const updated = manageData.appointments.delete(id);
      setAppointments(updated);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = manageData.appointments.updateStatus(id, newStatus);
    setAppointments(updated);
    setNotifications(manageData.notifications.getAdminNotifications());
  };

  const handleSaveClinic = (e) => {
    e.preventDefault();
    onUpdateClinic(editClinic);
    alert('Clinic Info Updated!');
  };

  const handleUpdateService = (id, field, value) => {
    const updated = editServices.map(s => s.id === id ? { ...s, [field]: value } : s);
    setEditServices(updated);
  };

  const handleSaveServices = () => {
    onUpdateServices(editServices);
    alert('Services Updated!');
  };

  const handleUpdateDoctor = (id, field, value) => {
    const updated = editDoctors.map(d => d.id === id ? { ...d, [field]: value } : d);
    setEditDoctors(updated);
  };

  const handleSaveDoctors = () => {
    onUpdateDoctors(editDoctors);
    alert('Doctors Updated!');
  };

  const handleLogout = () => {
    navigate('/');
    window.location.reload();
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'scheduled': return <span style={{ background: '#e3f2fd', color: '#1976d2', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Scheduled</span>;
      case 'allotted': return <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Allotted</span>;
      case 'delayed': return <span style={{ background: '#fff3e0', color: '#f57c00', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Delayed</span>;
      case 'cancelled': return <span style={{ background: '#ffebee', color: '#c62828', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>Cancelled</span>;
      default: return <span>{status}</span>;
    }
  };

  return (
    <div className="dashboard-container" style={{ minHeight: '80vh', padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Admin Dashboard</h2>
          <button onClick={handleLogout} className="btn-primary" style={{ background: 'var(--error)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '10px', overflowX: 'auto' }}>
          <button onClick={() => setActiveTab('appointments')} style={{ padding: '10px 20px', background: activeTab === 'appointments' ? 'var(--primary)' : 'none', color: activeTab === 'appointments' ? 'white' : 'inherit', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
            <LayoutDashboard size={18} /> Appointments
          </button>
          <button onClick={() => setActiveTab('notifications')} style={{ padding: '10px 20px', background: activeTab === 'notifications' ? 'var(--primary)' : 'none', color: activeTab === 'notifications' ? 'white' : 'inherit', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
            <Bell size={18} /> Notifications
          </button>
          <button onClick={() => setActiveTab('clinic')} style={{ padding: '10px 20px', background: activeTab === 'clinic' ? 'var(--primary)' : 'none', color: activeTab === 'clinic' ? 'white' : 'inherit', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
            <Settings size={18} /> Clinic Info
          </button>
          <button onClick={() => setActiveTab('services')} style={{ padding: '10px 20px', background: activeTab === 'services' ? 'var(--primary)' : 'none', color: activeTab === 'services' ? 'white' : 'inherit', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
            <Stethoscope size={18} /> Services
          </button>
          <button onClick={() => setActiveTab('doctors')} style={{ padding: '10px 20px', background: activeTab === 'doctors' ? 'var(--primary)' : 'none', color: activeTab === 'doctors' ? 'white' : 'inherit', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer' }}>
            <Users size={18} /> Doctors
          </button>
        </div>

        {/* Content */}
        {activeTab === 'appointments' && (
          <div className="table-container" style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '15px' }}>Owner & Pet</th>
                  <th style={{ padding: '15px' }}>Service</th>
                  <th style={{ padding: '15px' }}>Date & Time</th>
                  <th style={{ padding: '15px' }}>Status</th>
                  <th style={{ padding: '15px' }}>Manage Status</th>
                  <th style={{ padding: '15px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(appt => (
                  <tr key={appt.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px' }}><strong>{appt.name}</strong><br/>{appt.petName} ({appt.petType})<br/><small>{appt.phone}</small></td>
                    <td style={{ padding: '15px' }}>{appt.service}</td>
                    <td style={{ padding: '15px' }}>{appt.date} at {appt.time}</td>
                    <td style={{ padding: '15px' }}>{getStatusBadge(appt.status)}</td>
                    <td style={{ padding: '15px' }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button title="Allot" onClick={() => handleStatusChange(appt.id, 'allotted')} style={{ color: '#2e7d32', background: 'none', border: 'none', cursor: 'pointer' }}><CheckCircle size={18}/></button>
                        <button title="Delay" onClick={() => handleStatusChange(appt.id, 'delayed')} style={{ color: '#f57c00', background: 'none', border: 'none', cursor: 'pointer' }}><Clock size={18}/></button>
                        <button title="Cancel" onClick={() => handleStatusChange(appt.id, 'cancelled')} style={{ color: '#c62828', background: 'none', border: 'none', cursor: 'pointer' }}><XCircle size={18}/></button>
                      </div>
                    </td>
                    <td style={{ padding: '15px' }}>
                      <button onClick={() => handleDeleteAppointment(appt.id)} style={{ color: 'var(--error)', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={18}/></button>
                    </td>
                  </tr>
                ))}
                {appointments.length === 0 && <tr><td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)' }}>No appointments found.</td></tr>}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ marginBottom: '20px' }}>System Logs & Notifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {notifications.map(n => (
                <div key={n.id} style={{ padding: '15px', borderLeft: '4px solid var(--primary)', background: '#f9f9f9', borderRadius: '0 4px 4px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold' }}>{n.title}</span>
                    <small style={{ color: '#999' }}>{new Date(n.date).toLocaleString()}</small>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{n.message}</p>
                </div>
              ))}
              {notifications.length === 0 && <p style={{ textAlign: 'center', padding: '40px', color: '#999' }}>No admin notifications yet.</p>}
            </div>
          </div>
        )}

        {activeTab === 'clinic' && (
          <form onSubmit={handleSaveClinic} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
            <div className="form-group">
              <label>Clinic Name</label>
              <input type="text" value={editClinic.name} onChange={e => setEditClinic({...editClinic, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" value={editClinic.address} onChange={e => setEditClinic({...editClinic, address: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Working Hours</label>
              <input type="text" value={editClinic.workingHours || ""} onChange={e => setEditClinic({...editClinic, workingHours: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Tagline 1 (Headline)</label>
              <input type="text" value={editClinic.taglines[0] || ""} onChange={e => {
                const newTags = [...editClinic.taglines]; newTags[0] = e.target.value; setEditClinic({...editClinic, taglines: newTags});
              }} />
            </div>
            <div className="form-group">
              <label>Tagline 2 (Description)</label>
              <input type="text" value={editClinic.taglines[1] || ""} onChange={e => {
                const newTags = [...editClinic.taglines]; newTags[1] = e.target.value; setEditClinic({...editClinic, taglines: newTags});
              }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label>Contact Phone</label>
                <input type="text" value={editClinic.contacts[0] || ""} onChange={e => {
                  const newContacts = [...editClinic.contacts]; newContacts[0] = e.target.value; setEditClinic({...editClinic, contacts: newContacts});
                }} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={editClinic.email || ""} onChange={e => setEditClinic({...editClinic, email: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              <Save size={18} /> Save Clinic Changes
            </button>
          </form>
        )}

        {activeTab === 'services' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {editServices.map(service => (
                <div key={service.id} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={service.title} onChange={e => handleUpdateService(service.id, 'title', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea value={service.description} onChange={e => handleUpdateService(service.id, 'description', e.target.value)} rows="3" />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleSaveServices} className="btn-primary" style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Save size={18} /> Save All Services
            </button>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {editDoctors.map(doctor => (
                <div key={doctor.id} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: 'var(--shadow)' }}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={doctor.name} onChange={e => handleUpdateDoctor(doctor.id, 'name', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Specialty / Qualification</label>
                    <input type="text" value={doctor.specialty} onChange={e => handleUpdateDoctor(doctor.id, 'specialty', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" value={doctor.image} onChange={e => handleUpdateDoctor(doctor.id, 'image', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea value={doctor.description} onChange={e => handleUpdateDoctor(doctor.id, 'description', e.target.value)} rows="3" />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleSaveDoctors} className="btn-primary" style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Save size={18} /> Save All Doctors
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
