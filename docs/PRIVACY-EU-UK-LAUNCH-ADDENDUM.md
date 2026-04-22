# EU/UK Launch — Privacy Policy swap-in

Checklist + ready-to-paste copy for the day we expand Screen Time Hero into the EEA, UK, or Switzerland. The engineering-side GDPR compliance (self-export, self-delete, retention purge, in-app Art. 13/14 disclosure) is already shipped, so this is a policy + ops motion, not a code motion.

---

## Pre-launch checklist

1. **Engage an Art. 27 representative.** Budget ~$700-1,000/yr for EU+UK combined. Vetted options:
   - Prighter &mdash; established, decent UI
   - GDPRLocal &mdash; often the cheapest legit option
   - EDPO &mdash; law-firm-backed
   - VeraSafe &mdash; enterprise-leaning, more expensive
2. **Collect the rep&apos;s full address.** EU rep needs an EU-member-state street address; UK rep needs a UK address. Some vendors provide both under one plan; others are separate.
3. **Update the Privacy Policy**: replace Section 14 with the copy below, restore Section 8&apos;s Irish DPC reference (it was trimmed at initial launch), and bump the Effective Date.
4. **Update the Terms of Service**: governing-law Section 15 is fine as-is (Delaware + non-US consumer carve-out). No changes required.
5. **App Store territory update**: re-submit `screentimehero` with EEA, UK, and Switzerland territories enabled.
6. **Railway / Supabase**: no infrastructure change &mdash; we&apos;re already under SCCs + UK IDTA per Section 6 of the policy.
7. **Communicate the change** to existing users at least 30 days before activating EU/UK availability (Section 12 notice requirement).

---

## Section 14 swap-in (replaces the current &quot;Where the Service is offered&quot; block)

```tsx
<section>
  <h2 className="text-2xl font-bold text-[#1C1F26] mb-3">14. EU / UK representative</h2>
  <p className="text-gray-600 leading-relaxed">
    Under Article 27 of the GDPR and Article 27 of the UK GDPR, we have
    appointed a representative in the European Union and the United
    Kingdom. If you are in the EEA, the UK, or Switzerland, you may
    contact our representative directly for any question about how we
    handle your personal information.
  </p>
  <div className="text-gray-600 leading-relaxed mt-3">
    <p><strong>EU representative:</strong></p>
    <p>
      [Rep legal name]<br />
      [Street address]<br />
      [Postal code, City]<br />
      [EU member state]<br />
      Email: <a href="mailto:eu-rep@screentimehero.com" className="text-[#3A7BFA] hover:underline">eu-rep@screentimehero.com</a>
    </p>
    <p className="mt-3"><strong>UK representative:</strong></p>
    <p>
      [Rep legal name]<br />
      [Street address]<br />
      [Postal code, City]<br />
      United Kingdom<br />
      Email: <a href="mailto:uk-rep@screentimehero.com" className="text-[#3A7BFA] hover:underline">uk-rep@screentimehero.com</a>
    </p>
  </div>
</section>
```

## Section 8 augmentation (add Irish DPC reference back to the complaints bullet)

The current complaints bullet reads:

> **Lodge a complaint** with your local supervisory authority. In the UK it is the Information Commissioner&apos;s Office (ico.org.uk).

Replace with:

> **Lodge a complaint** with your local supervisory authority. In Ireland (where our EU representative is located) the authority is the Data Protection Commission (dataprotection.ie). In the UK it is the Information Commissioner&apos;s Office (ico.org.uk).

(Swap &quot;Ireland&quot; for the actual member state of the chosen EU rep.)

## Section 1 scope paragraph

The current first paragraph ends with:

> Screen Time Hero is the data controller / business for the personal information described in this policy.

No change required &mdash; this is already accurate globally.

---

## Routing the rep inboxes

Set up `eu-rep@screentimehero.com` and `uk-rep@screentimehero.com` to forward to the vendor&apos;s ticketing queue (most vendors provide this). Keep the addresses stable even if we change vendors, so the published Privacy Policy doesn&apos;t need to be re-issued every contract renewal.
