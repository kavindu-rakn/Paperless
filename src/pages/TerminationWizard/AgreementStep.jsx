import React from 'react';

export default function AgreementStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>4. Customer Agreement</h3>

      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
          I do hereby declare that the information furnished by me are true and confirm that I have settled all the dues to SLT outstanding under the account number/s mentioned in this application.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          I further agree to indemnify and hold harmless SLT against any claim, action, demand, expense, loss or other liabilities which may arise in future due to negligence and /or omission and /or failure to fulfill any obligation on our part or for the using there service for illegal or immoral purpose or for the transmission and /or introduction of harmful computer viruses or programs into telecommunication network, computer systems, computers and computer apparatus, any unauthorized use of the service and the violation of any applicable laws and regulations by my self, during the tenor of the agreement.
        </p>
        
        <label className="checkbox-label" style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
          <input type="checkbox" className="checkbox-input" required /> I accept the Declaration and agree to the Terms & Conditions
        </label>
      </div>

    </div>
  );
}
