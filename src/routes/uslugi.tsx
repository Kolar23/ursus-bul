import { createFileRoute } from "@tanstack/react-router";
import catTable from "@/assets/cat-table.jpg";
import dogOwner from "@/assets/dog-owner.jpg";
import { PageHead, Paw, VetCross } from "@/components/site";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Услуги — Урсус Бул, ветеринарна практика" },
      { name: "description", content: "Прегледи, ваксинации, обезпаразитяване, диагностика и манипулации за кучета и котки в София." },
      { property: "og:title", content: "Ветеринарни услуги — Урсус Бул" },
      { property: "og:description", content: "Как се грижим за вашите любимци." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHead eyebrow="Услуги" title="Как се грижим за вашите любимци">
        Списъкът по-долу е ориентировъчен. Ако не виждате това, което търсите — обадете ни се.
      </PageHead>
      <section className="mx-auto max-w-6xl px-5">
        {SERVICES.map((s, i) => (
          <div key={s.title} className="contents">
            <article className={`grid gap-4 border-t border-border py-10 md:grid-cols-12 ${i % 2 ? "md:text-right" : ""}`}>
              <div className={`flex items-center gap-3 text-primary md:col-span-2 ${i % 2 ? "md:order-3 md:col-start-11 md:justify-end" : ""}`}>
                {i % 2 ? <VetCross className="h-5 w-5 text-accent" /> : <Paw kind={i % 4 === 0 ? "dog" : "cat"} className="h-7 w-7" />}
              </div>
              <h2 className={`text-4xl md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>{s.title}</h2>
              <p className={`text-lg text-muted-foreground md:col-span-5 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>{s.text}</p>
            </article>
            {i === 2 && <img src={catTable} alt="Котка на преглед" loading="lazy" width={1024} height={1024} className="my-6 aspect-[16/7] w-full object-cover md:w-3/4" />}
            {i === 5 && <img src={dogOwner} alt="Куче със стопанка" loading="lazy" width={1408} height={960} className="my-6 ml-auto aspect-[16/7] w-full object-cover md:w-2/3" />}
          </div>
        ))}
      </section>
    </>
  );
}
