import { useMemo, useState } from "react";
import { Check, Minus } from "lucide-react";

type ToolItem = {
  key: string;
  label: string;
  sub: string;
};

const TODAY_TOOLS: ToolItem[] = [
  { key: "lms", label: "LMS", sub: "Course content & grades" },
  { key: "sis", label: "SIS / student records", sub: "Records, enrollment, billing" },
  { key: "sched", label: "Scheduling tool", sub: "Classes, rooms, rosters" },
  { key: "compliance", label: "Compliance / reporting", sub: "State & accreditation reports" },
  { key: "payments", label: "Payments / billing", sub: "Tuition & invoicing" },
  { key: "sheets", label: "Spreadsheets & staff time", sub: "The hidden glue holding it together" },
];

const GO_INCLUDES = [
  "Enrollment",
  "Sponsor tracking",
  "Payments",
  "Loan options via Fortify Education",
  "Learning management",
  "Certificate tracking",
  "Attendance",
  "Grades",
];

export const CostComparison = () => {
  const [active, setActive] = useState<Record<string, boolean>>(
    Object.fromEntries(TODAY_TOOLS.map((i) => [i.key, true]))
  );

  const activeCount = useMemo(
    () => Object.values(active).filter(Boolean).length,
    [active]
  );

  const toggle = (key: string) => {
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="heading-xxl text-4xl lg:text-5xl mb-4">
          The systems you juggle today vs. <span className="text-primary">GO ACADEMIX</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Toggle the tools your school uses. The real win is replacing them with one platform so your team can focus on students.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Today */}
        <div className="bg-[hsl(48,33%,97%)] rounded-2xl border border-border p-7 flex flex-col shadow-sm">
          <div className="mb-6">
            <div className="mono-label mb-2">/ Today &nbsp;·&nbsp; fragmented_tools</div>
            <h4 className="text-2xl font-semibold tracking-tight">
              You run <span className="text-primary">{activeCount}</span> separate systems
            </h4>
            <p className="text-sm text-muted-foreground mt-1">Each one needs its own login, data entry, and reconciliation.</p>
          </div>

          <div className="divide-y divide-border/60 flex-1">
            {TODAY_TOOLS.map((item) => {
              const isActive = active[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggle(item.key)}
                  className={`w-full flex items-center justify-between py-4 gap-4 text-left transition-opacity ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-md border shrink-0 ${
                        isActive ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground"
                      }`}
                    >
                      {isActive ? <Check className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                    </span>
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
            <div>
              <div className="mono-label">/ Systems_count</div>
              <div className="text-xs text-muted-foreground mt-1">Multiple logins, vendors, and data handoffs</div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold tabular-nums tracking-tight">
              {activeCount}
              <span className="text-sm font-normal text-muted-foreground ml-1">tools</span>
            </div>
          </div>
        </div>

        {/* GO ACADEMIX */}
        <div className="bg-primary/[0.08] rounded-2xl border border-primary/30 p-7 flex flex-col shadow-sm shadow-primary/5">
          <div className="mb-6">
            <div className="mono-label text-primary mb-2">/ Go_academix &nbsp;·&nbsp; one_platform</div>
            <h4 className="text-2xl font-semibold tracking-tight">One platform, one student record</h4>
            <p className="text-sm text-muted-foreground mt-1">Everything below, connected from enrollment to certificate.</p>
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

          <div className="mt-6 pt-6 border-t border-primary/30 flex items-end justify-between">
            <div>
              <div className="mono-label">/ Result</div>
              <div className="text-xs text-muted-foreground mt-1">One login, one invoice, one source of truth</div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-primary tabular-nums tracking-tight">
              1
              <span className="text-sm font-normal text-muted-foreground ml-1">platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Consolidation summary */}
      <div className="mt-5 rounded-2xl p-8 bg-gradient-to-br from-[hsl(var(--brand-ink))] to-[hsl(222,47%,16%)] text-white flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-lg shadow-foreground/5">
        <div className="md:max-w-xl">
          <div className="mono-label text-white/70 mb-2">/ The_real_value</div>
          <div className="text-xl lg:text-2xl font-semibold leading-snug tracking-tight">
            Replace {activeCount} disconnected tools with one platform so your team can focus on students, not software.
          </div>
        </div>
        <div className="text-sm md:text-right md:max-w-xs text-white/80 shrink-0">
          Fewer logins, less re-entry, and one place to see every student from enrollment to certificate.
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};
