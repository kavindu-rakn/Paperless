import React, { useState } from 'react';

export default function ServiceDetailsStep() {
  const [appType, setAppType] = useState('new');

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>2. Service Details</h3>
      
      <div className="form-group">
        <label className="form-label">4. Type of Application</label>
        <div className="radio-group" style={{ marginBottom: '1rem' }}>
          <label className="radio-label">
            <input type="radio" name="appType" value="new" checked={appType === 'new'} onChange={(e) => setAppType(e.target.value)} className="radio-input" /> (a) New Application
          </label>
          <label className="radio-label">
            <input type="radio" name="appType" value="existing" checked={appType === 'existing'} onChange={(e) => setAppType(e.target.value)} className="radio-input" /> (b) Existing Customers
          </label>
        </div>

        {appType === 'existing' && (
          <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
            <div className="flex gap-4">
              <div style={{ flex: '1' }}>
                <label className="form-label">Existing User name</label>
                <input type="text" className="form-control" />
              </div>
              <div style={{ flex: '1' }}>
                <label className="form-label">Existing Package / Service</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="form-group mt-4">
        <label className="form-label">5. Type of Service</label>
        
        <div style={{ marginBottom: '1rem' }}>
          <label className="form-label" style={{ fontWeight: 'normal' }}>Domain Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" /> 5.1 Hosting DNS
          </label>
          
          <div className="flex gap-4 items-center">
            <label className="checkbox-label" style={{ flex: '1', margin: 0 }}>
              <input type="checkbox" className="checkbox-input" /> 5.2 Virtual Mail Service
            </label>
            <div className="flex items-center gap-2" style={{ flex: '2' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Internet/Email Package:</span>
              <input type="text" className="form-control" style={{ padding: '0.5rem' }} />
            </div>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" /> 5.3 POP 3 Service
          </label>

          <div className="flex gap-4 items-center">
            <label className="checkbox-label" style={{ flex: '1', margin: 0 }}>
              <input type="checkbox" className="checkbox-input" /> 5.4 Virtual Web Service
            </label>
            <div className="flex items-center gap-2" style={{ flex: '2' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>Web Capacity (MB):</span>
              <input type="number" className="form-control" style={{ padding: '0.5rem' }} />
            </div>
          </div>

        </div>
      </div>

      <div className="form-group mt-4">
        <label className="form-label">6. Type of Access</label>
        <div className="radio-group">
          <label className="radio-label">
            <input type="radio" name="accessType" value="analog" className="radio-input" /> (a) Analog telephone line
          </label>
          <label className="radio-label">
            <input type="radio" name="accessType" value="isdn" className="radio-input" /> (b) ISDN Telephone line
          </label>
        </div>
      </div>

    </div>
  );
}
