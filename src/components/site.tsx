import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export const PHONE = "+359 885 491 656";
export const PHONE_HREF = "tel:+359885491656";
export const ADDRESS = "ул. „Данаил Дечев“ 1, София 1407";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("ул. Данаил Дечев 1, 1407 София, България");

const NAV = [
  { to: "/", label: "Начало" },
  { to: "/za-nas", label: "За нас" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/ceni", label: "Цени" },
  { to: "/galeriya", label: "Галерия" },
  { to: "/kontakti", label: "Контакти" },
] as const;

/* ---------- hand-drawn marks ---------- */
export function Paw({ className = "", kind = "dog" }: { className?: string; kind?: "dog" | "cat" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden>
      {kind === "dog" ? (
        <>
          <ellipse cx="20" cy="27" rx="9" ry="7.5" />
          <ellipse cx="8.5" cy="16" rx="3.6" ry="4.6" transform="rotate(-20 8.5 16)" />
          <ellipse cx="15.5" cy="9.5" rx="3.6" ry="4.8" />
          <ellipse cx="24.5" cy="9.5" rx="3.6" ry="4.8" />
          <ellipse cx="31.5" cy="16" rx="3.6" ry="4.6" transform="rotate(20 31.5 16)" />
        </>
      ) : (
        <>
          <path d="M20 21c-6 0-10 5-10 9 0 3 3 4 5 3s3-1 5-1 3 0 5 1 5 0 5-3c0-4-4-9-10-9z" />
          <circle cx="10" cy="15" r="3" />
          <circle cx="16.5" cy="10" r="3" />
          <circle cx="23.5" cy="10" r="3" />
          <circle cx="30" cy="15" r="3" />
        </>
      )}
    </svg>
  );
}

export function PawTrail({ className = "", count = 7 }: { className?: string; count?: number }) {
  return (
    <div className={`pointer-events-none flex items-end gap-5 ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Paw
          key={i}
          kind={i % 3 === 2 ? "cat" : "dog"}
          className="h-4 w-4"
          // alternating left/right steps
        />
      )).map((el, i) => (
        <span key={i} style={{ transform: `translateY(${i % 2 ? -10 : 0}px) rotate(${70 + (i % 2 ? 12 : -8)}deg)`, opacity: 0.25 + i * 0.07 }}>
          {el}
        </span>
      ))}
    </div>
  );
}

export function CatPeek({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 68 C 14 40, 22 30, 28 12 L 40 30 C 50 26, 70 26, 80 30 L 92 12 C 98 30, 106 40, 110 68" />
      <circle cx="46" cy="46" r="3" fill="currentColor" />
      <circle cx="74" cy="46" r="3" fill="currentColor" />
      <path d="M57 55 l3 3 l3 -3" />
      <path d="M44 56 L18 52 M44 59 L20 62 M76 56 L102 52 M76 59 L100 62" strokeWidth="1.2" />
    </svg>
  );
}

export function SleepingDog({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 70" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 62 H152" strokeWidth="1.2" />
      <path d="M20 62 C 18 40, 50 28, 90 32 C 120 34, 136 44, 138 62" />
      <path d="M90 32 C 96 18, 120 16, 128 28 C 136 30, 144 38, 140 46 C 136 52, 124 50, 118 46" />
      <path d="M112 22 C 104 28, 104 40, 112 44" />
      <path d="M124 38 q3 2 6 0" />
      <path d="M20 62 C 8 58, 4 48, 12 44" />
      <text x="140" y="16" fontFamily="Caveat" fontSize="14" fill="currentColor" stroke="none">z z</text>
    </svg>
  );
}

export function SittingCat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 90" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M30 88 C 26 60, 30 44, 40 36 L 36 14 L 48 26 C 52 24, 58 24, 62 26 L 74 14 L 70 36 C 80 44, 84 60, 80 88" />
      <circle cx="49" cy="38" r="1.8" fill="currentColor" />
      <circle cx="61" cy="38" r="1.8" fill="currentColor" />
      <path d="M80 86 C 110 92, 140 70, 170 80 S 210 88, 218 84" />
    </svg>
  );
}

export function Mouse({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M8 24 C 8 12, 30 8, 40 18 L 46 20 L 40 22 C 34 26, 16 26, 8 24 Z" />
      <circle cx="28" cy="13" r="3" />
      <path d="M8 24 C 2 22, 2 14, 6 12" />
    </svg>
  );
}

export function VetCross({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className={`grid h-11 w-11 shrink-0 place-items-center ${light ? "bg-primary-foreground/95" : ""}`}>
        <img
          src={`${import.meta.env.BASE_URL}ursus-bul-mark.png`}
          alt=""
          width={512}
          height={512}
          className="h-11 w-11 object-contain"
        />
      </span>
      <span className="leading-none">
        <span className="block font-display text-2xl tracking-wide">Урсус Бул</span>
        <span className={`block text-[0.62rem] uppercase tracking-[0.25em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Ветеринарна практика
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="py-1 hover:text-primary" activeProps={{ className: "border-b border-accent text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="ml-3 border-l border-border pl-6 text-primary">{PHONE}</a>
        </nav>
        <button className="text-sm uppercase tracking-widest lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Затвори" : "Меню"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display text-2xl">
              {n.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="mt-4 block text-primary">☎ {PHONE}</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24">
      <SittingCat className="absolute -top-[86px] left-[8%] h-[90px] w-[220px] text-primary" />
      <div className="section-dark">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm text-primary-foreground/75">
              Малка ветеринарна практика в София за кучета, котки и техните стопани.
            </p>
          </div>
          <div className="text-sm">
            <p className="eyebrow mb-3">Адрес</p>
            <p>ул. „Данаил Дечев“ 1<br />София 1407, България</p>
            <p className="eyebrow mb-3 mt-6">Телефон</p>
            <a href={PHONE_HREF} className="font-display text-2xl">{PHONE}</a>
            <p className="eyebrow mb-2 mt-6">Работно време</p>
            <p className="text-primary-foreground/75">
              Понеделник – петък<br />09:30–13:00 · 14:00–18:30
            </p>
            <p className="mt-2 text-primary-foreground/60">Събота и неделя: затворено</p>
          </div>
          <nav className="grid content-start gap-2 text-sm">
            {NAV.map((n) => <Link key={n.to} to={n.to} className="hover:text-accent">{n.label}</Link>)}
          </nav>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-primary-foreground/15 px-5 py-5 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Урсус Бул · Ветеринарна практика</span>
          <Mouse className="h-5 w-10 text-primary-foreground/50" />
        </div>
      </div>
    </footer>
  );
}

export function PageHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 md:pt-24">
      <p className="eyebrow flex items-center gap-2"><Paw className="h-3 w-3" />{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-xl text-muted-foreground">{children}</div>}
      <PawTrail className="absolute right-6 top-24 hidden text-primary md:flex" />
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="border-b border-dashed border-accent text-muted-foreground">{children}</span>;
}
