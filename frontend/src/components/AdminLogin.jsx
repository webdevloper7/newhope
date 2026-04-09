import React, { useState } from 'react';
import { X, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onLogin();
      if (onClose) onClose();
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3>Admin Access</h3>
          {onClose && <X onClick={onClose} style={{ cursor: 'pointer' }} />}
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'var(--error)', marginBottom: '15px' }}>{error}</p>}
          <div className="form-group">
            <label>Username</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                type="text" 
                style={{ paddingLeft: '40px' }}
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input 
                type="password" 
                style={{ paddingLeft: '40px' }}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required 
              />
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
          <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            (Default: admin / admin123)
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
