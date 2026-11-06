// Structured data for the homepage, generated from the original index.html during the Astro migration.
// Organization + FAQPage.
export default [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lucid Cashflow",
    "legalName": "Lending Logic Ltd",
    "url": "https://lucidcashflow.co.uk/",
    "logo": "https://lucidcashflow.co.uk/assets/logo/lucid-cashflow-primary-600.png",
    "description": "Lucid connects to Xero, forecasts a business's cash 13 weeks ahead, and tells the owner each day whether they need to do anything, and what.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Lending Logic",
      "legalName": "Lending Logic Ltd",
      "url": "https://lendinglogic.co.uk/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Lucid work with Xero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You connect Xero in a couple of clicks with read-only access. Lucid reads your invoices, bills, bank transactions and payroll, and never changes your books or moves money. QuickBooks and Sage are on the roadmap."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from the forecast in Xero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Xero shows a projection of your bank balance. Lucid builds a 13-week forecast from how your customers actually pay, adds tax and payroll on their real dates, then tells you each day whether you need to act, and what the cheapest fix is."
        }
      },
      {
        "@type": "Question",
        "name": "Is Lucid trying to sell me a loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Most days Lucid tells you there is nothing to do. When a squeeze is coming, it shows the free fixes first. Funding only appears when it is genuinely the right answer, and only goes to a lender if you say yes."
        }
      },
      {
        "@type": "Question",
        "name": "Who builds the numbers, a person or AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lucid’s AI writes the forecast as code, and the code calculates every figure from your ledger. That makes the numbers reproducible and checkable. The AI explains the results; it never makes up a figure."
        }
      },
      {
        "@type": "Question",
        "name": "What size of business is Lucid for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Founder-led UK limited companies, typically with 10 to 200 staff, using Xero and without a full-time finance director."
        }
      },
      {
        "@type": "Question",
        "name": "Will Lucid replace my accountant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your accountant keeps your books right and your tax filed. Lucid looks forward, week by week, and you can share your forecast with your accountant."
        }
      }
    ]
  }
];
