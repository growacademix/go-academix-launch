import { useMemo, useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

type ToolItem = {
  key: string;
  label: string;
  sub: string;
  defaultCost: number;
};

const TODAY_TOOLS: ToolItem[] = [
  { key: "lms", label: "LMS", sub: "Course content & grades", defaultCost: 200 },
  { key: "sis", label: "SIS / student records", sub: "Records, enrollment, billing", defaultCost: 250 },
  { key: "sched", label: "Scheduling tool", sub: "Classes, rooms, rosters", defaultCost: 90 },
  { key: "compliance", label: "Compliance / reporting", sub: "State & accreditation reports", defaultCost: 150 },
  { key: "payments", label: "Payments / billing", sub: "Tuition & invoicing", defaultCost: 120 },
  { key: "sheets", label: "Spreadsheets & staff time", sub: "The hidden glue cost", defaultCost: 400 },
];

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

const GO_PRICE = 499;

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const CostComparison = () => {
  const [active, setActive] = useState<Record<string, boolean>>(
    Object.fromEntries(TODAY_TOOLS.map((i) => [i.key, true]))
  );

  const activeCount = useMemo(
    () => Object.values(active).filter(Boolean).length,
    [active]
  );

  const total = useMemo(
    () => TODAY_TOOLS.reduce((sum, item) => sum + (active[item.key] ? item.defaultCost : 0), 0),
    [active]
  );

  const savings = Math.max(0, total - GO_PRICE);

  const toggle = (key: string) => {
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-3">
          The systems you juggle today vs. <span className="text-primary">GO ACADEMIX</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Toggle the tools your school uses. The real win is replacing them with one platform. The savings are a side effect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Today */}
        <div className="bg-card rounded-lg border border-border p-6 flex flex-col">
          <div className="mb-6">
            <div className="text-xs tracking-wider text-muted-foreground mb-1">TODAY · FRAGMENTED TOOLS</div>
            <h4 className="text-xl font-semibold">You run {activeCount} separate systems</h4>
            <p className="text-sm text-muted-foreground">Each one needs its own login, data entry, and reconciliation.</p>
          </div>

          <div className="divide-y divide-border flex-1">
            {TODAY_TOOLS.map((item) => {
              const isActive = active[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggle(item.key)}
                  className={`w-full flex items-center justify-between py-3 gap-4 text-left transition-colors ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded border shrink-0 ${
                        isActive
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {isActive ? <Check className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                    </span>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                  <div className="text-sm tabular-nums text-muted-foreground shrink-0">
                    {fmt(item.defaultCost)}/mo
                  </div>
                </button>
              );
            })}
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
            <h4 className="text-xl font-semibold">One platform, one student record</h4>
            <p className="text-sm text-muted-foreground">Everything below, connected from enrollment to certificate.</p>
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

      {/* Consolidation summary */}
      <div className="mt-6 rounded-lg p-6 bg-gradient-to-r from-secondary to-primary text-primary-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:max-w-xl">
          <div className="text-[11px] tracking-wider opacity-80 mb-1">THE REAL VALUE</div>
          <div className="text-lg font-medium leading-snug">
            Replace {activeCount} disconnected tools with one platform so your team can focus on students, not software.
          </div>
        </div>
        {savings > 0 && (
          <div className="text-sm md:text-right md:max-w-xs opacity-95 shrink-0">
            Estimated savings: <span className="font-semibold">{fmt(savings)}/mo</span> ({fmt(savings * 12)} a year). That's money and hours you can put back into quality and growth.
          </div>
        )}
      </div>
    </div>
  );
};
