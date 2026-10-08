import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-dog.jpg";
import vetCat from "@/assets/vet-cat.jpg";
import catTable from "@/assets/cat-table.jpg";
import dogOwner from "@/assets/dog-owner.jpg";
import { CatPeek, Paw, PawTrail, PHONE, PHONE_HREF, SleepingDog } from "@/components/site";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Урсус Бул — Ветеринарна практика в София" },
      { name: "description", content: "Професионална и топла грижа за кучета и котки в София. д-р Веселин Цветанов, ул. „Данаил Дечев“ 1." },
      { property: "og:title", content: "Урсус Бул — Ветеринарна практика в София" },
      { property: "og:description", content: "Грижа за тези, които не могат да кажат къде ги боли." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-20 pt-10 md:grid-cols-12 md:pt-16">
        <div className="relative z-10 md:col-span-6 md:pt-16">
          <p className="eyebrow">Урсус Бул · Ветеринарна практика · София</p>
          <h1 className="mt-6 text-5xl md:-mr-24 md:text-[5.2rem]">
            Грижа за тези, които <em className="text-primary">не могат да кажат</em> къде ги боли.
          </h1>
          <p className="mt-8 max-w-md text-muted-foreground">
            Ветеринарна практика Урсус Бул — професионална грижа за домашните любимци в София.
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <a href={PHONE_HREF} className="font-display text-3xl text-primary underline decoration-accent decoration-1 underline-offset-8">{PHONE}</a>
            <a href="#dobre-doshli" className="text-sm uppercase tracking-widest">Научете повече ↓</a>
          </div>
        </div>
        <div className="relative md:col-span-6">
          <img src={hero} alt="Куче, отпуснато в ръцете на ветеринар" width={1280} height={1600} className="aspect-[4/5] w-full object-cover md:-rotate-1" />
          {/* <span className="hand absolute -bottom-8 left-4 rotate-[-4deg] text-2xl text-primary">спокойно, в добри ръце</span> */}
          <PawTrail className="absolute -left-40 bottom-24 hidden text-accent md:flex" count={6} />
        </div>
      </section>

      {/* Intro */}
      <section id="dobre-doshli" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12">
        <div className="relative md:col-span-5 md:col-start-1">
          <CatPeek className="absolute -top-[46px] right-10 h-[60px] w-[100px] text-primary" />
          <img src={vetCat} alt="д-р Веселин Цветанов с котка" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <p className="eyebrow">Нашият подход</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Добре дошли в Урсус Бул</h2>
          <div className="mt-8 space-y-5 text-lg">
            <p>Ние сме малка практика и това ни харесва. Тук познаваме пациентите си по име, помним кой се страхува от кантара и кой обича лакомства след ваксината.</p>
            <p className="text-muted-foreground">Отделяме време да прегледаме животното внимателно и да обясним на стопанина какво виждаме — без излишни процедури и без бързане.</p>
          </div>
          <Link to="/za-nas" className="mt-8 inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest">За практиката →</Link>
        </div>
      </section>

      {/* Vet */}
      <section className="section-dark relative overflow-hidden">
        <Paw className="absolute -right-10 -top-10 h-64 w-64 text-primary-foreground/5" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Ветеринарният лекар</p>
            <h2 className="mt-4 text-5xl">д-р Веселин Цветанов</h2>
          </div>
          <blockquote className="font-display text-3xl italic leading-snug md:col-span-7 md:col-start-6 md:text-4xl">
            „Животното не може да ми каже какво го боли. Затова трябва да слушам по-внимателно — и него, и стопанина му.“
          </blockquote>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-4xl md:text-5xl">Как се грижим за вашите любимци</h2>
          <Link to="/uslugi" className="border-b border-foreground pb-1 text-sm uppercase tracking-widest">Всички услуги →</Link>
        </div>
        <ol className="mt-12 border-t border-border">
          {SERVICES.slice(0, 5).map((s, i) => (
            <li key={s.title} className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:items-baseline">
              <span className="hand text-2xl text-accent md:col-span-1">0{i + 1}</span>
              <h3 className="text-3xl md:col-span-4">{s.title}</h3>
              <p className="text-muted-foreground md:col-span-6 md:col-start-7">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Patients */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Галерия</p>
        <h2 className="mt-4 text-4xl md:text-5xl">Нашите пациенти</h2>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-12">
          <figure className="col-span-2 md:col-span-7">
            <img src={dogOwner} alt="Щастливо куче със стопанката си" loading="lazy" width={1408} height={960} className="aspect-[3/2] w-full object-cover" />
            <figcaption className="hand mt-2 text-2xl">След прегледа — само усмивки 🐾</figcaption>
          </figure>
          <figure className="col-span-2 md:col-span-4 md:col-start-9 md:mt-20">
            <img src={catTable} alt="Любопитна котка на масата за преглед" loading="lazy" width={1024} height={1024} className="aspect-square w-full rotate-1 object-cover" />
            <figcaption className="hand mt-2 text-2xl">Един много смел пациент</figcaption>
          </figure>
        </div>
        <Link to="/galeriya" className="mt-10 inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest">Към галерията →</Link>
      </section>

      {/* Prices + contact */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div className="border border-border p-8">
          <SleepingDog className="h-14 w-32 text-primary" />
          <h2 className="mt-4 text-4xl">Цени</h2>
          <p className="mt-3 text-muted-foreground">Ясен ценоразпис на основните услуги — без изненади.</p>
          <Link to="/ceni" className="mt-6 inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest">Виж цените →</Link>
        </div>
        <div className="p-8 md:pt-16">
          <p className="eyebrow">Къде сме</p>
          <p className="mt-4 font-display text-3xl">ул. „Данаил Дечев“ 1<br />София 1407</p>
          <a href={PHONE_HREF} className="mt-4 block text-xl text-primary">{PHONE}</a>
          <Link to="/kontakti" className="mt-6 inline-block border-b border-foreground pb-1 text-sm uppercase tracking-widest">Контакти и карта →</Link>
        </div>
      </section>
    </>
  );
}
