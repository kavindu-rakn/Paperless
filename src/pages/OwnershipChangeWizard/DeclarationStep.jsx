import React from 'react';

export default function DeclarationStep() {
  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>Declarations & Consents</h3>

      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Current Customer Consent</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          I hereby authorize the transfer of the telephone connection to the applicant detailed in the previous step. 
          I understand that this action transfers the service and associated facilities.
        </p>
        <label className="checkbox-label" style={{ fontWeight: '500' }}>
          <input type="checkbox" className="checkbox-input" required /> I, the current customer, consent to this transfer.
        </label>
      </div>

      <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)' }}>
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>New Applicant Declaration</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Kindly transfer the above telephone to my/our name. I am willing to take over the telephone service with existing all 
          facilities and service already provided by SLT. I take responsibility of settling the bills with the outstanding balance.
        </p>
        <label className="checkbox-label" style={{ fontWeight: '500' }}>
          <input type="checkbox" className="checkbox-input" required /> I, the new applicant, accept responsibility and agree to the terms.
        </label>
      </div>

      <div style={{ marginTop: '1.5rem', padding: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
          <li>The changing of the ownership shall be at the sole discretion of SLT and SLT reserves the right to request any further documents if SLT so wishes.</li>
          <li>The applicant shall be responsible to resolve any dispute which may arise between Customer and the Applicant and arise regarding the eligibility of the customer to transfer the telephone service in Applicants name and shall indemnify and keep SLT indemnified over any such disputes.</li>
          <li>In the event of applicant's request being cancelled at any subsequent stage he shall with immediate effect settle all outstanding dues and shall at all times be liable to settle such outstanding dues.</li>
        </ul>
      </div>

    </div>
  );
}
