import React from 'react';

export default function AgreementStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>2.0 Customer Agreement</h3>

      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
          I / We, being the legal customer/s of the existing SLT service indicated in 1.1 above do hereby declare that the information furnished by me/us are true and correct and agree to abide by the terms and conditions of the telecommunication service agreement entered into in respect of the existing SLT services and the said terms and conditions shall continue to govern this relocation service.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
          I / we have read and understood the further terms and conditions received herewith for the relocation and those which may be enforced in future by Sri Lanka Telecom PLC (SLT) and agree to abide by the same.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          I hereby absolve SLT of any liability of its failure or inability to transfer all the existing services that I/We have requested to be transferred to the new location due to any technical constrains or otherwise. Further I/We indemnify SLT of any loss or damage caused to me/us due to such difficulty or constraint on the part of SLT in provisioning any of the services at the new location.
        </p>
        
        <label className="checkbox-label" style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
          <input type="checkbox" className="checkbox-input" required /> I agree to the Declaration and Terms & Conditions
        </label>
      </div>

    </div>
  );
}
