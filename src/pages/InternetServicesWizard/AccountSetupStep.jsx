import React, { useState } from 'react';

export default function AccountSetupStep() {
  const [needInstall, setNeedInstall] = useState('no');

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>3. Account Setup & Agreement</h3>
      
      <div className="form-group">
        <label className="form-label" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
          7. For customers without SLTnet Internet or email account
        </label>
        
        <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
          
          <div className="flex gap-4" style={{ marginBottom: '1.5rem' }}>
            <div style={{ flex: '1' }}>
              <label className="form-label" style={{ color: 'var(--text-secondary)' }}>User Name OP-1</label>
              <input type="text" className="form-control" placeholder="14 chars max, 4 min" maxLength={14} minLength={4} />
            </div>
            <div style={{ flex: '1' }}>
              <label className="form-label" style={{ color: 'var(--text-secondary)' }}>Password OP-1</label>
              <input type="text" className="form-control" placeholder="8 chars max, 6 min" maxLength={8} minLength={6} />
            </div>
          </div>
          
          <div className="flex gap-4">
            <div style={{ flex: '1' }}>
              <label className="form-label" style={{ color: 'var(--text-secondary)' }}>User Name OP-2</label>
              <input type="text" className="form-control" placeholder="14 chars max, 4 min" maxLength={14} minLength={4} />
            </div>
            <div style={{ flex: '1' }}>
              <label className="form-label" style={{ color: 'var(--text-secondary)' }}>Password OP-2</label>
              <input type="text" className="form-control" placeholder="8 chars max, 6 min" maxLength={8} minLength={6} />
            </div>
          </div>
          
        </div>
      </div>

      <div className="form-group mt-4">
        <label className="form-label">8. Do you require software installation by SLT?</label>
        <div className="radio-group" style={{ marginBottom: '1rem' }}>
          <label className="radio-label">
            <input type="radio" name="needInstall" value="yes" checked={needInstall === 'yes'} onChange={(e) => setNeedInstall(e.target.value)} className="radio-input" /> Yes
          </label>
          <label className="radio-label">
            <input type="radio" name="needInstall" value="no" checked={needInstall === 'no'} onChange={(e) => setNeedInstall(e.target.value)} className="radio-input" /> No
          </label>
        </div>

        {needInstall === 'yes' && (
          <div className="card" style={{ padding: '1rem', backgroundColor: 'rgba(0, 166, 80, 0.05)', border: '1px solid var(--slt-green)', boxShadow: 'none' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--slt-green)', fontWeight: '500', marginBottom: '0.5rem' }}>
              * If yes the following charges should be paid with the application (Excluding Taxes):
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Pop 3 only : Rs. 8,000/=</li>
              <li>Proxy only : Rs. 4,000/=</li>
              <li>DNS only : Rs. 4,000/=</li>
              <li>POP3 + Proxy : Rs. 10,000/=</li>
              <li>POP3 + Proxy + DNS : Rs. 12,000/=</li>
            </ul>
          </div>
        )}
      </div>

      <h4 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Customer Declaration</h4>
      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '1rem' }}>
          I/We do hereby declare that the information furnished by me/us are true and correct and agree to abide by terms & conditions that are presently enforced and those which will be enforced in future by Sri Lanka Telecom Limited.
        </p>
        <label className="checkbox-label" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
          <input type="checkbox" className="checkbox-input" required /> I agree to the Declaration and Terms
        </label>
      </div>
      
    </div>
  );
}
