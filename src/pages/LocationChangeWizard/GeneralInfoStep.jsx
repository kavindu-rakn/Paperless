import React from 'react';

export default function GeneralInfoStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>1. General Information (Mandatory)</h3>
      
      <div className="form-group flex gap-4">
        <div style={{ flex: '1' }}>
          <label className="form-label">1.1 Telephone number to be transferred</label>
          <input type="tel" className="form-control" required />
        </div>
        <div style={{ flex: '2' }}>
          <label className="form-label">Legal owner name</label>
          <input type="text" className="form-control" required />
        </div>
      </div>

      <h4 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>1.7 Contact Information</h4>
      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
        
        <div className="form-group">
          <label className="form-label">Name of the contact person</label>
          <input type="text" className="form-control" required />
        </div>

        <div className="form-group flex gap-4 mt-4">
          <div style={{ flex: '1' }}>
            <label className="form-label">Telephone</label>
            <input type="tel" className="form-control" required />
          </div>
          <div style={{ flex: '1' }}>
            <label className="form-label">Mobile</label>
            <input type="tel" className="form-control" />
          </div>
        </div>

        <div className="form-group flex gap-4 mt-4">
          <div style={{ flex: '1' }}>
            <label className="form-label">E-mail Address</label>
            <input type="email" className="form-control" />
          </div>
          <div style={{ flex: '1' }}>
            <label className="form-label">Fax</label>
            <input type="tel" className="form-control" />
          </div>
        </div>

      </div>

    </div>
  );
}
