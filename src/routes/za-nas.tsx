import { createFileRoute } from "@tanstack/react-router";
import vetCat from "@/assets/vet-cat.jpg";
import hero from "@/assets/hero-dog.jpg";
import { CatPeek, PageHead, Placeholder } from "@/components/site";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За нас — Урсус Бул, ветеринарна практика" },
      { name: "description", content: "Историята на Урсус Бул и д-р Веселин Цветанов — ветеринарна грижа в София." },
      { property: "og:title", content: "За нас — Урсус Бул" },
      { property: "og:description", content: "Малка практика, голямо внимание към всяко животно." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHead eyebrow="За нас" title="Практика, в която познаваме пациентите по име">
      </PageHead>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-12">
        <img src={hero} alt="Преглед на куче" loading="lazy" width={1280} height={1600} className="aspect-[4/5] w-full object-cover md:col-span-5" />
        <div className="space-y-5 text-lg md:col-span-6 md:col-start-7 md:pt-12">
          <p className="eyebrow">Грижа, на която можете да разчитате</p>
          <h2 className="text-4xl">Утвърдена практика с лично отношение</h2>
          <p>
            Ветеринарна практика Урсус Бул на ул. „Данаил Дечев“ 1 в София предлага широк спектър от специализирани услуги, съобразени с индивидуалните потребности на всяко животно и неговия стопанин. Професионализмът и отдадеността на екипа са в основата на целенасочената грижа за здравето и благополучието на пациентите.
          </p>
          <p className="text-muted-foreground">
            Работим с индивидуален подход към всеки случай, прецизна диагностика и внимателно отношение. Многобройните положителни оценки от клиенти подчертават отговорността на екипа и дават на стопаните увереност, че техните любимци са в сигурни ръце.
          </p>
        </div>
      </section>

      <section id="lekar" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12">
        <div className="md:col-span-6 md:order-2 md:col-start-7 relative">
          <CatPeek className="absolute -top-[46px] left-10 h-[60px] w-[100px] text-primary" />
          <img src={vetCat} alt="д-р Веселин Цветанов" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="md:col-span-5 md:order-1">
          <p className="eyebrow">Ветеринарният лекар</p>
          <h2 className="mt-4 text-5xl">д-р Веселин Цветанов</h2>
          <p className="mt-6 font-display text-2xl italic">„Работата ми е да бъда гласът на животното.“</p>
          <dl className="mt-10 space-y-5 text-base">
            {["Биография", "Образование", "Квалификации", "Професионални интереси", "Опит"].map((k) => (
              <div key={k} className="grid grid-cols-[10rem_1fr] gap-4 border-b border-border pb-4">
                <dt className="eyebrow pt-1">{k}</dt>
                <dd><Placeholder>Предстои да бъде добавено от клиниката</Placeholder></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
