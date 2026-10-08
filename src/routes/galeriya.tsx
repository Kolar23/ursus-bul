import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-dog.jpg";
import cat from "@/assets/cat.png";
import catTable from "@/assets/cat-table.jpg";
import dogOwner from "@/assets/dog-owner.jpg";
import { CatPeek, PageHead, PawTrail } from "@/components/site";

export const Route = createFileRoute("/galeriya")({
  head: () => ({
    meta: [
      { title: "Галерия — Нашите пациенти | Урсус Бул" },
      { name: "description", content: "Снимки на кучетата и котките, за които се грижим в Урсус Бул, София." },
      { property: "og:title", content: "Нашите пациенти — Урсус Бул" },
      { property: "og:description", content: "Истински животни, истински моменти от практиката." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHead eyebrow="Галерия" title="Нашите пациенти">
        Смели, любопитни, понякога малко обидени след ваксината — но винаги обичани.
      </PageHead>
      <section className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-12">
          <figure className="col-span-2 md:col-span-5">
            <img src={hero} alt="Куче на преглед" loading="lazy" width={1280} height={1600} className="aspect-[4/5] w-full object-cover" />
            <figcaption className="hand mt-2 text-2xl">Лъки след прегледа</figcaption>
          </figure>
          <figure className="col-span-2 md:col-span-6 md:col-start-7 md:mt-24">
            <img src={dogOwner} alt="Куче със стопанката си" loading="lazy" width={1408} height={960} className="aspect-[3/2] w-full -rotate-1 object-cover" />
            <figcaption className="hand mt-2 text-right text-2xl">Рони 🐾</figcaption>
            <PawTrail className="mt-10 hidden text-accent md:flex" />
          </figure>
          <figure className="relative col-span-1 md:col-span-4 md:col-start-2">
            <CatPeek className="absolute -top-[46px] right-6 h-[60px] w-[100px] text-primary" />
            <img src={catTable} alt="Котка и стетоскоп" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
            <figcaption className="hand mt-2 text-2xl">Един много смел пациент</figcaption>
          </figure>
          <figure className="col-span-1 md:col-span-4 md:col-start-8 md:-mt-10">
            <img src={cat} alt="Ветеринар с котка" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rotate-1 object-cover" />
            <figcaption className="hand mt-2 text-2xl">Мая</figcaption>
          </figure>
        </div>
        <p className="mt-16 max-w-md text-sm text-muted-foreground">Публикуваме снимки и имена на пациенти само със съгласието на техните стопани.</p>
      </section>
    </>
  );
}
