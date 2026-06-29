import React, { useState } from 'react';

export default function ServiceDetailsStep() {
  const [terminationType, setTerminationType] = useState('permanent');

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>1. Service Details</h3>
      
      <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'none', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Disconnection Type</h4>
        
        <div className="form-group">
          <label className="form-label">a. Required disconnection of SLT Telephone facility type</label>
          <div className="flex gap-4 flex-wrap mt-2">
            <label className="checkbox-label" style={{ margin: 0 }}><input type="checkbox" className="checkbox-input" /> Megaline</label>
            <label className="checkbox-label" style={{ margin: 0 }}><input type="checkbox" className="checkbox-input" /> Citylink</label>
            <label className="checkbox-label" style={{ margin: 0 }}><input type="checkbox" className="checkbox-input" /> FTTH</label>
            <label className="checkbox-label" style={{ margin: 0 }}><input type="checkbox" className="checkbox-input" /> LTE</label>
          </div>
        </div>

        <div className="form-group mt-4">
          <label className="form-label">b. Disconnect the telephone line with all facilities</label>
          <div className="radio-group mt-2">
            <label className="radio-label">
              <input type="radio" name="terminationType" value="permanent" checked={terminationType === 'permanent'} onChange={(e) => setTerminationType(e.target.value)} className="radio-input" /> Disconnect Permanently
            </label>
            <label className="radio-label">
              <input type="radio" name="terminationType" value="temporary" checked={terminationType === 'temporary'} onChange={(e) => setTerminationType(e.target.value)} className="radio-input" /> Temporary
            </label>
          </div>
        </div>

        <div className="form-group mt-4">
          <label className="form-label">c. Present Telephone number (to be disconnected)</label>
          <input type="tel" className="form-control" required />
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            (If more, attach separately or list in remarks)
          </p>
        </div>
      </div>

      <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Specific Services to Disconnect</h4>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="checkbox-label" style={{ margin: 0, flex: '1' }}>
              <input type="checkbox" className="checkbox-input" /> SLT Broadband Internet
            </label>
            <div className="flex items-center gap-2" style={{ flex: '1.5' }}>
              <span style={{ fontSize: '0.9rem' }}>User name:</span>
              <input type="text" className="form-control" style={{ padding: '0.4rem' }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="checkbox-label" style={{ margin: 0, flex: '1' }}>
              <input type="checkbox" className="checkbox-input" /> Dial-up Internet
            </label>
            <div className="flex items-center gap-2" style={{ flex: '1.5' }}>
              <span style={{ fontSize: '0.9rem' }}>User name:</span>
              <input type="text" className="form-control" style={{ padding: '0.4rem' }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="checkbox-label" style={{ margin: 0, flex: '1' }}>
              <input type="checkbox" className="checkbox-input" /> Email
            </label>
            <div className="flex items-center gap-2" style={{ flex: '1.5' }}>
              <span style={{ fontSize: '0.9rem' }}>User name:</span>
              <input type="text" className="form-control" style={{ padding: '0.4rem' }} />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6 flex-wrap">
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> PeoTV</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> SLTPlus</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> IDD</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> CRBT</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> Quick Meet</label>
          <label className="checkbox-label"><input type="checkbox" className="checkbox-input" /> CLI</label>
        </div>

        <div className="form-group mt-4">
          <label className="form-label">Other:</label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group mt-4">
        <label className="form-label">1.2 Disconnect the above requested service with effect from (Date)</label>
        <div style={{ maxWidth: '200px' }}>
          <input type="date" className="form-control" required />
        </div>
      </div>

    </div>
  );
}
