// Ценоразпис — редактирайте тук. price: число в евро, или null докато клиниката не потвърди цена.
export const BGN_RATE = 1.95583;

export type PriceRow = { name: string; price: number | null; note?: string };
export type PriceCategory = { title: string; rows: PriceRow[] };

export const PRICES: PriceCategory[] = [
  { title: "Прегледи и консултации", rows: [
    { name: "Първичен преглед", price: null },
    { name: "Контролен преглед", price: null },
    { name: "Консултация", price: null },
  ]},
  { title: "Ваксинации", rows: [
    { name: "Ваксинация — куче", price: null },
    { name: "Ваксинация — котка", price: null },
    { name: "Ваксинация против бяс", price: null },
  ]},
  { title: "Профилактика", rows: [
    { name: "Вътрешно обезпаразитяване", price: null },
    { name: "Външно обезпаразитяване", price: null },
    { name: "Микрочип и паспорт", price: null },
  ]},
  { title: "Диагностика", rows: [
    { name: "Кръвна проба", price: null },
    { name: "Ехография", price: null, note: "след преглед" },
  ]},
  { title: "Манипулации", rows: [
    { name: "Инжекция", price: null },
    { name: "Подрязване на нокти", price: null },
    { name: "Почистване на уши", price: null },
  ]},
  { title: "Други услуги", rows: [
    { name: "Посещение на адрес", price: null, note: "по договаряне" },
  ]},
];

export function formatEur(p: number | null) {
  return p == null ? "€ —" : `€${p.toFixed(2).replace(".00", "")}`;
}
export function formatBgn(p: number | null) {
  return p == null ? "" : `${(p * BGN_RATE).toFixed(2)} лв.`;
}
