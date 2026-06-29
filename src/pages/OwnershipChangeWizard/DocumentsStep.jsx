import React, { useState } from 'react';

export default function DocumentsStep() {
  const [transferType, setTransferType] = useState('person-to-person');

  const getDocuments = () => {
    switch(transferType) {
      case 'person-to-person':
        return [
          "Form A in overleaf or letter of consent from present owner",
          "New owner's consent letter",
          "Photo copy of NIC of new owner"
        ];
      case 'person-to-company':
        return [
          "Form A or letter of consent from present owner",
          "A copy of the form 20 obtained from the registrar of companies",
          "A Copy of the Business Registration with the original",
          "Request letter from the company with two signatures of Directors (Embossed seal required)",
          "Company resolution to settle any outstanding arrears"
        ];
      case 'company-to-company':
        return [
          "A copy of the form 20 obtained from the registrar of companies",
          "Company resolution to settle any outstanding arrears",
          "A Copy of the Business Registration with the original",
          "Request letter from the company with two signatures of Directors (Embossed seal is required)"
        ];
      case 'private-to-official':
        return [
          "Authorization letter of the respective organization",
          "Consent letter from the present owner"
        ];
      case 'official-to-private':
        return [
          "Authorization letter of the respective organization",
          "Consent letter from the present owner"
        ];
      case 'spouse-demise':
        return [
          "A copy of the Marriage Certificate with the original",
          "A copy of the Death Certificate with the original",
          "If above is not available Birth certificate of a legitimate child",
          "A request letter of the spouse"
        ];
      case 'family-demise':
        return [
          "A copy of the Death Certificate with the original or if the same is not available a letter from the GS certifying the death.",
          "A copy of the Marriage Certificate or if the same is not available, Birth Certificate of a legitimate child.",
          "Request letter of the closest relation (eg.-mother) certified the signature by JP (if unable to come)"
        ];
      case 'both-demise':
        return [
          "A copy of the Death Certificate with the original",
          "Request letter and a copy of the Birth Certificate with original of the present user",
          "Consent letter from the family members",
          "Certification of the G.S. or JP about the family members"
        ];
      case 'temporary':
        return [
          "Legal owner unable to trace, not in the island or is dead",
          "Temporarily Transfer Forms from SLT (Indemnity Bond)",
          "Request letter from the present user"
        ];
      default:
        return [];
    }
  };

  return (
    <div>
      <h3 style={{ color: 'var(--slt-blue)', marginBottom: '1.5rem' }}>Required Documents Checklist</h3>
      
      <div className="form-group">
        <label className="form-label">Transfer Scenario</label>
        <select 
          className="form-control" 
          value={transferType} 
          onChange={(e) => setTransferType(e.target.value)}
          style={{ padding: '0.8rem' }}
        >
          <optgroup label="General Transfers">
            <option value="person-to-person">Person to Person</option>
            <option value="person-to-company">Person to Company</option>
            <option value="company-to-company">Company to Company</option>
            <option value="private-to-official">Private to Official</option>
            <option value="official-to-private">Official to Private</option>
          </optgroup>
          <optgroup label="Demise of Customer">
            <option value="spouse-demise">Transfer to Spouse</option>
            <option value="family-demise">To other family members</option>
            <option value="both-demise">Both owner and spouse are dead</option>
          </optgroup>
          <optgroup label="Other">
            <option value="temporary">To Third party - Temporary Transfer</option>
          </optgroup>
        </select>
      </div>

      <div className="card mt-4" style={{ backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Please provide the following documents:</h4>
        
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {getDocuments().map((doc, idx) => (
            <li key={idx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
              <input type="checkbox" className="checkbox-input" style={{ marginTop: '0.2rem' }} required />
              <span style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>{doc}</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(0, 166, 80, 0.05)', borderLeft: '4px solid var(--slt-green)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <strong>Note:</strong> In case the above specified documents are unavailable, you may contact the Regional Telecom Manager or the Manager of the nearest SLT Teleshop in your area.
        </div>
      </div>
    </div>
  );
}
