import React from 'react';

export default function NewApplicantStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>Form B - New Applicant Details</h3>
      
      <div className="form-group">
        <label className="form-label">Full Name / Company Name</label>
        <input type="text" className="form-control" required />
      </div>

      <div className="form-group flex gap-4">
        <div style={{ flex: '1' }}>
          <label className="form-label">N.I.C / B.R.C No</label>
          <input type="text" className="form-control" required />
        </div>
        <div style={{ flex: '1' }}>
          <label className="form-label">Contact No.</label>
          <input type="tel" className="form-control" required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" required />
      </div>

      <div className="form-group">
        <label className="form-label">Remarks *</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          (* absence of the Customer, Changes in Billing Address / Packages type etc...)
        </p>
        <textarea className="form-control" rows="3"></textarea>
      </div>

    </div>
  );
}
