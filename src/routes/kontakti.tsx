import { createFileRoute } from "@tanstack/react-router";
import { MAPS_URL, PageHead, PHONE, PHONE_HREF } from "@/components/site";

export const Route = createFileRoute("/kontakti")({
  head: () => ({
    meta: [
      { title: "Контакти — Урсус Бул, ул. „Данаил Дечев“ 1, София" },
      { name: "description", content: "Телефон +359 885 491 656. Ветеринарна практика Урсус Бул, ул. „Данаил Дечев“ 1, София 1407." },
      { property: "og:title", content: "Контакти — Урсус Бул" },
      { property: "og:description", content: "Обадете ни се или ни намерете на картата." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHead eyebrow="Контакти" title="Обадете се или елате" />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">Урсус Бул</p>
          <p className="eyebrow mt-1">Ветеринарна практика</p>
          <p className="mt-8 text-lg">ул. „Данаил Дечев“ 1<br />София 1407<br />България</p>
          <p className="eyebrow mt-8">Телефон</p>
          <a href={PHONE_HREF} className="mt-2 block font-display text-4xl text-primary">{PHONE}</a>
          <p className="eyebrow mt-8">Работно време</p>
          <dl className="mt-3 max-w-md border-t border-border text-base">
            <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-border py-3">
              <dt>Понеделник – петък</dt>
              <dd className="text-right text-muted-foreground">
                09:30–13:00<br />14:00–18:30
              </dd>
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-5 border-b border-border py-3">
              <dt>Събота и неделя</dt>
              <dd className="text-muted-foreground">Затворено</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90">Обади се</a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="border border-foreground px-6 py-3 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background">Отвори в Google Maps</a>
          </div>
        </div>
        <div className="md:col-span-7">
          <iframe
            title="Карта — Урсус Бул"
            src="https://www.google.com/maps?q=%D1%83%D0%BB.+%D0%94%D0%B0%D0%BD%D0%B0%D0%B8%D0%BB+%D0%94%D0%B5%D1%87%D0%B5%D0%B2+1,+1407+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F&output=embed"
            className="aspect-[4/3] w-full border border-border grayscale-[40%]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
