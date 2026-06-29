import React from 'react';

export default function CustomerInfoStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>1. Customer Information</h3>
      
      <div className="form-group flex gap-4">
        <div style={{ flex: '2' }}>
          <label className="form-label">1(a) Full Name of the customer / Company</label>
          <input type="text" className="form-control" required />
        </div>
        <div style={{ flex: '1' }}>
          <label className="form-label">1(b) NIC / Passport / BR No.</label>
          <input type="text" className="form-control" required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">2. Billing Address</label>
        <textarea className="form-control" rows="3" required></textarea>
      </div>

      <div className="form-group flex gap-4">
        <div style={{ flex: '1' }}>
          <label className="form-label">3(a) Contact Phone No.</label>
          <input type="tel" className="form-control" required />
        </div>
        <div style={{ flex: '1' }}>
          <label className="form-label">3(b) Fax No.</label>
          <input type="tel" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">3(c) Email Address</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type="text" className="form-control" style={{ flex: '1' }} required />
          <span style={{ fontWeight: '500', color: 'var(--text-secondary)' }}>@ sltnet.lk / slt.lk</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          ** Pls note that the given email address should be an email only or an Internet Main acct of the customer.
        </p>
      </div>

    </div>
  );
}
