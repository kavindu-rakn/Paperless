import React from 'react';

export default function ContactDetailsStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>2. Contact Details</h3>
      
      <div className="form-group">
        <label className="form-label">2.1 Name of the person / Company</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          (Name should be the same as it appears under the agreement for provisioning of telecom services)
        </p>
        <input type="text" className="form-control" required />
      </div>

      <div className="form-group mt-4">
        <label className="form-label">2.2 N.I.C. No. / Passport No. / Business Registration No.</label>
        <div style={{ maxWidth: '400px' }}>
          <input type="text" className="form-control" required />
        </div>
      </div>

      <div className="card mt-6" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>2.3 Contact Numbers</h4>
        
        <div className="form-group flex gap-4">
          <div style={{ flex: '1' }}>
            <label className="form-label">Mobile</label>
            <input type="tel" className="form-control" required />
          </div>
          <div style={{ flex: '1' }}>
            <label className="form-label">Fixed</label>
            <input type="tel" className="form-control" />
          </div>
        </div>

        <div className="form-group flex gap-4 mt-4">
          <div style={{ flex: '1' }}>
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control" required />
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
