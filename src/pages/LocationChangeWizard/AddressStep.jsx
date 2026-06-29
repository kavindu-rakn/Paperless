import React, { useState } from 'react';

export default function AddressStep() {
  const [billingEffective, setBillingEffective] = useState('immediately');

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>1.2 & 1.3 Address Information</h3>
      
      <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'none', marginBottom: '2rem' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>1.2 Service Address</h4>
        
        <div className="form-group">
          <label className="form-label">a. New Service Address with postal code</label>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            (If service address is different from the below billing address)
          </p>
          <textarea className="form-control" rows="3" required></textarea>
          <div style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: 'rgba(0, 166, 80, 0.05)', borderLeft: '3px solid var(--slt-green)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <strong>Note:</strong> 1) Present telephone number may change if the new location is served from a different exchange.<br />
            2) Service provisioning will be depended on the service availability.
          </div>
        </div>

        <div className="form-group mt-4">
          <label className="form-label">b. Route Diagram (Optional)</label>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            Upload an image of a sketched map or Google Maps screenshot indicating the new service address.
          </p>
          <input type="file" className="form-control" accept="image/*" />
        </div>

        <div className="form-group flex gap-4 mt-4">
          <div style={{ flex: '1' }}>
            <label className="form-label">c. Nearest SLT wireline number (i)</label>
            <input type="tel" className="form-control" placeholder="Not required for 4G LTE" />
          </div>
          <div style={{ flex: '1' }}>
            <label className="form-label">c. Nearest SLT wireline number (ii)</label>
            <input type="tel" className="form-control" placeholder="Not required for 4G LTE" />
          </div>
        </div>
      </div>


      <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'none' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>1.3 Billing Address</h4>
        
        <div className="form-group">
          <label className="form-label">a. New billing address with Postal Code</label>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            (If billing address is different from service address)
          </p>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div className="form-group mt-4">
          <label className="form-label">b. New billing address should be effective:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="billingEffective" value="immediately" checked={billingEffective === 'immediately'} onChange={(e) => setBillingEffective(e.target.value)} className="radio-input" /> 1. Immediately
            </label>
            <label className="radio-label">
              <input type="radio" name="billingEffective" value="after-service" checked={billingEffective === 'after-service'} onChange={(e) => setBillingEffective(e.target.value)} className="radio-input" /> 2. After providing service to the new location
            </label>
          </div>
        </div>
      </div>

    </div>
  );
}
