import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Paw, SleepingDog } from "@/components/site";
import { PRICES, formatBgn, formatEur } from "@/data/prices";

export const Route = createFileRoute("/ceni")({
  head: () => ({
    meta: [
      { title: "Цени — Урсус Бул, ветеринарна практика" },
      { name: "description", content: "Цени на ветеринарните услуги в Урсус Бул, София — прегледи, ваксинации, профилактика, диагностика." },
      { property: "og:title", content: "Цени на ветеринарните услуги — Урсус Бул" },
      { property: "og:description", content: "Ясен ценоразпис в евро и лева." },
    ],
  }),
  component: Prices,
});

function Prices() {
  return (
    <>
      <PageHead eyebrow="Ценоразпис" title="Цени на ветеринарните услуги" />
      <section className="mx-auto max-w-4xl px-5">
        <div className="relative border border-foreground/40 bg-card px-6 py-10 md:px-14">
          <SleepingDog className="absolute -top-[54px] right-8 h-14 w-32 text-primary" />
          <div className="flex justify-between border-b-2 border-foreground pb-2 text-xs uppercase tracking-[0.25em]">
            <span>Услуга</span><span>Цена</span>
          </div>
          {PRICES.map((cat) => (
            <div key={cat.title} className="mt-10">
              <h2 className="flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                <Paw className="h-3.5 w-3.5 text-accent" />{cat.title}
              </h2>
              <ul className="mt-3">
                {cat.rows.map((r) => (
                  <li key={r.name} className="flex items-baseline gap-3 py-2.5">
                    <span className="text-lg">{r.name}{r.note && <span className="ml-2 text-sm italic text-muted-foreground">({r.note})</span>}</span>
                    <span className="rule-dotted h-2 flex-1" aria-hidden />
                    <span className="text-right">
                      <span className="font-display text-xl">{formatEur(r.price)}</span>
                      {r.price != null && <span className="block text-xs text-muted-foreground">{formatBgn(r.price)}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-12 border-t border-border pt-6 text-sm italic text-muted-foreground">
            За някои процедури крайната цена се определя след преглед и зависи от индивидуалния случай.
          </p>
        </div>
      </section>
    </>
  );
}
