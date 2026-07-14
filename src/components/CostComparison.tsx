import { useMemo, useState } from "react";
import { Check } from "lucide-react";

type LineItem = {
  key: string;
  label: string;
  sub: string;
  default: number;
};

const DEFAULT_ITEMS: LineItem[] = [
  { key: "lms", label: "LMS subscription", sub: "Course content & grades", default: 200 },
  { key: "sis", label: "SIS / student records", sub: "Records, enrollment, billing", default: 250 },
  { key: "sched", label: "Scheduling tool", sub: "Classes, rooms, rosters", default: 90 },
  { key: "compliance", label: "Compliance / reporting", sub: "State & accreditation reports", default: 150 },
  { key: "payments", label: "Payments / billing", sub: "Tuition & invoicing", default: 120 },
  { key: "sheets", label: "Spreadsheets & staff time", sub: "The hidden glue cost", default: 400 },
];

const GO_PRICE = 499;

const GO_INCLUDES = [
  "Enrollment",
  "Sponsor tracking",
  "Payments",
  "Loan options via Fortify",
  "Learning management",
  "Certificate tracking",
  "Attendance",
  "Grades",
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const CostComparison = () => {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(DEFAULT_ITEMS.map((i) => [i.key, i.default]))
  );

  const total = useMemo(
    () => Object.values(values).reduce((s, v) => s + (Number(v) || 0), 0),
    [values]
  );

  const savings = Math.max(0, total - GO_PRICE);
  const pct = total > 0 ? Math.round((savings / total) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
          The stack you pay for today vs. <span className="text-primary">GO ACADEMIX</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Type in what your school pays for each tool. The totals and your savings update live.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Today */}
        <div className="bg-card rounded-lg border border-border p-6 flex flex-col">
          <div className="mb-6">
            <div className="text-xs tracking-wider text-muted-foreground mb-1">TODAY · A TOOL FOR EVERY JOB</div>
            <h4 className="text-xl font-semibold">You juggle {DEFAULT_ITEMS.length} vendors</h4>
            <p className="text-sm text-muted-foreground">Separate logins, separate bills, data everywhere.</p>
          </div>

          <div className="divide-y divide-border flex-1">
            {DEFAULT_ITEMS.map((item) => (
              <div key={item.key} className="flex items-center justify-between py-3 gap-4">
                <div className="min-w-0">
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-muted-foreground">$</span>
                  <input
                    type="number"
                    min={0}
                    value={values[item.key]}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, [item.key]: Math.max(0, Number(e.target.value) || 0) }))
                    }
                    className="w-20 px-2 py-1 text-right rounded border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <span className="text-xs text-muted-foreground">/mo</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t-2 border-foreground/80 flex items-end justify-between">
            <div>
              <div className="text-[11px] tracking-wider text-muted-foreground">MONTHLY TOTAL</div>
              <div className="text-xs text-muted-foreground">{fmt(total * 12)} a year</div>
            </div>
            <div className="text-3xl lg:text-4xl font-bold tabular-nums">
              {fmt(total)}
              <span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
          </div>
        </div>

        {/* GO ACADEMIX */}
        <div className="bg-primary/5 rounded-lg border border-primary/30 p-6 flex flex-col">
          <div className="mb-6">
            <div className="text-xs tracking-wider text-primary mb-1">GO ACADEMIX · ONE PLATFORM</div>
            <h4 className="text-xl font-semibold">One platform, one login</h4>
            <p className="text-sm text-muted-foreground">Everything below, in one place.</p>
          </div>

          <ul className="space-y-3 flex-1">
            {GO_INCLUDES.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-primary/40 flex items-end justify-between">
            <div>
              <div className="text-[11px] tracking-wider text-muted-foreground">ONE PRICE</div>
              <div className="text-xs text-muted-foreground">{fmt(GO_PRICE * 12)} a year</div>
            </div>
            <div className="text-3xl lg:text-4xl font-bold text-primary tabular-nums">
              {fmt(GO_PRICE)}
              <span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings bar */}
      <div className="mt-6 rounded-lg p-6 bg-gradient-to-r from-secondary to-primary text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="text-[11px] tracking-wider opacity-80">YOU SAVE</div>
          <div className="text-2xl lg:text-3xl font-bold tabular-nums">
            {fmt(savings)}/mo · {pct}% less
          </div>
        </div>
        <div className="text-sm md:text-right md:max-w-xs opacity-95">
          That's {fmt(savings * 12)} a year back in your pocket, and {DEFAULT_ITEMS.length} fewer vendors to manage.
        </div>
      </div>
    </div>
  );
};
