import React, { useState } from 'react';

export default function PreferencesStep() {
  const [disconnectAction, setDisconnectAction] = useState('all');
  const [callForwarding, setCallForwarding] = useState('no');

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>Transfer Preferences</h3>

      <div className="form-group">
        <label className="form-label">1.4 Disconnect the existing telephone line with effect from</label>
        <div style={{ maxWidth: '200px' }}>
          <input type="date" className="form-control" required />
        </div>
      </div>

      <div className="form-group mt-4">
        <label className="form-label">1.5 Present services</label>
        
        <div className="radio-group" style={{ marginBottom: '1rem' }}>
          <label className="radio-label">
            <input type="radio" name="disconnectAction" value="all" checked={disconnectAction === 'all'} onChange={(e) => setDisconnectAction(e.target.value)} className="radio-input" /> 
            a. Disconnect all existing services immediately
          </label>
          <label className="radio-label">
            <input type="radio" name="disconnectAction" value="keep" checked={disconnectAction === 'keep'} onChange={(e) => setDisconnectAction(e.target.value)} className="radio-input" /> 
            b. Keep the following services until new telephone line is given
          </label>
        </div>

        {disconnectAction === 'keep' && (
          <div className="card flex gap-4 flex-wrap" style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
            <label className="checkbox-label" style={{ margin: 0, minWidth: '120px' }}>
              <input type="checkbox" className="checkbox-input" /> Incoming Only
            </label>
            <label className="checkbox-label" style={{ margin: 0, minWidth: '120px' }}>
              <input type="checkbox" className="checkbox-input" /> Outgoing Only
            </label>
            <label className="checkbox-label" style={{ margin: 0, minWidth: '120px' }}>
              <input type="checkbox" className="checkbox-input" /> Broadband
            </label>
            <label className="checkbox-label" style={{ margin: 0, minWidth: '120px' }}>
              <input type="checkbox" className="checkbox-input" /> PeoTV
            </label>
          </div>
        )}
      </div>

      <div className="form-group mt-4">
        <label className="form-label">1.6 Required Call Forwarding Facility (charges applicable)</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          (transfer calls from existing number to new number)
        </p>
        
        <div className="radio-group" style={{ marginBottom: '1rem' }}>
          <label className="radio-label">
            <input type="radio" name="callForwarding" value="yes" checked={callForwarding === 'yes'} onChange={(e) => setCallForwarding(e.target.value)} className="radio-input" /> Yes
          </label>
          <label className="radio-label">
            <input type="radio" name="callForwarding" value="no" checked={callForwarding === 'no'} onChange={(e) => setCallForwarding(e.target.value)} className="radio-input" /> No
          </label>
        </div>

        {callForwarding === 'yes' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>If Yes, required time duration:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '150px' }}>
              <input type="number" min="1" max="12" className="form-control" required={callForwarding === 'yes'} />
              <span style={{ color: 'var(--text-secondary)' }}>Months</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
