export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

const terms: GlossaryTerm[] = [
  {
    "id": "cashflow-forecast",
    "term": "Cashflow forecast",
    "definition": "An estimate of the money coming into and going out of your bank account over a future period, showing the balance you’ll have at each point."
  },
  {
    "id": "13-week-cashflow-forecast",
    "term": "13-week cashflow forecast",
    "definition": "A week-by-week forecast covering the next quarter. Long enough to see VAT, payroll and quarterly bills coming; short enough to be accurate."
  },
  {
    "id": "cash-runway",
    "term": "Cash runway",
    "definition": "How long your current cash would last at your current rate of spending, if nothing else came in."
  },
  {
    "id": "lowest-point",
    "term": "Lowest point",
    "definition": "The smallest balance your forecast shows over the period. The single most useful number in any cashflow forecast."
  },
  {
    "id": "cash-buffer",
    "term": "Cash buffer",
    "definition": "The minimum balance you choose to keep for safety. Many owners aim for at least one month of fixed costs."
  },
  {
    "id": "direct-method",
    "term": "Direct method",
    "definition": "Building a forecast from the actual receipts and payments you expect, rather than adjusting profit figures. Best for short-term forecasts."
  },
  {
    "id": "aged-debtors",
    "term": "Aged debtors",
    "definition": "A list of unpaid customer invoices grouped by how overdue they are, for example 0–30, 31–60 and 61–90 days."
  },
  {
    "id": "debtor-days",
    "term": "Debtor days",
    "definition": "The average number of days customers take to pay you. Lucid works this out for each customer separately."
  },
  {
    "id": "working-capital",
    "term": "Working capital",
    "definition": "Your current assets (cash, money owed to you, stock) minus your current liabilities (bills, tax and short-term debt due within a year)."
  },
  {
    "id": "paye",
    "term": "PAYE",
    "definition": "Income tax and National Insurance deducted from wages. Usually due to HMRC by the 22nd of the following tax month if you pay electronically."
  },
  {
    "id": "vat-quarter",
    "term": "VAT quarter",
    "definition": "The three-month period a VAT return covers. Payment is normally due one calendar month and seven days after the period ends."
  },
  {
    "id": "time-to-pay",
    "term": "Time to Pay",
    "definition": "An arrangement with HMRC to pay a tax bill in instalments. Ask before the payment is due."
  },
  {
    "id": "invoice-finance",
    "term": "Invoice finance",
    "definition": "Borrowing against unpaid customer invoices, so you get most of the money before the customer pays."
  },
  {
    "id": "statutory-interest-on-late-payment",
    "term": "Statutory interest on late payment",
    "definition": "Interest a business can claim on late business-to-business invoices under UK late payment law, currently 8% above the Bank of England base rate."
  },
  {
    "id": "payroll-safety-light",
    "term": "Payroll Safety Light",
    "definition": "Lucid’s at-a-glance signal showing whether your next payroll, and the PAYE and pension that follow it, are covered."
  },
  {
    "id": "verdict",
    "term": "Verdict",
    "definition": "Lucid’s plain-English daily answer: nothing to do, or act this week, with the reason and the amount."
  }
];

export default terms;
