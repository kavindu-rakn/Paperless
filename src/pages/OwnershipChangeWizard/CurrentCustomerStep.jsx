import React from 'react';

export default function CurrentCustomerStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>Form A - Current Customer Details</h3>
      
      <div className="form-group">
        <label className="form-label">1. Telephone number to be transferred</label>
        <input type="tel" className="form-control" required />
      </div>

      <div className="form-group">
        <label className="form-label">2. Name of the Customer</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          (as stated under the existing telephone application/agreement)
        </p>
        <input type="text" className="form-control" placeholder="Full name / Company name" required />
      </div>

      <div className="form-group">
        <label className="form-label">Partnership / Sole Proprietorship Info</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          (If applicable, provide full names of all partners or the sole proprietor)
        </p>
        <textarea className="form-control" rows="3" placeholder="Partner 1&#10;Partner 2..."></textarea>
      </div>

      <div className="form-group flex gap-4">
        <div style={{ flex: '1' }}>
          <label className="form-label">3. N.I.C / B.R.C No</label>
          <input type="text" className="form-control" required />
        </div>
        <div style={{ flex: '1' }}>
          <label className="form-label">4. Contact No.</label>
          <input type="tel" className="form-control" required />
        </div>
      </div>

      <div className="form-group mt-4">
        <label className="form-label">Kindly transfer the above telephone to following person/Company</label>
        <input type="text" className="form-control" placeholder="Rev. / Mr. / Mrs. / Ms. / Company" required />
      </div>

      <div className="form-group">
        <label className="form-label">Remarks</label>
        <textarea className="form-control" rows="2"></textarea>
      </div>

    </div>
  );
}
