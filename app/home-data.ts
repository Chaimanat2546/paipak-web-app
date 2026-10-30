export type Badge = "แนะนำ" | "เปิดใหม่" | "ราคาสุดคุ้ม" | "ใกล้หาด" | "ติดหาด";
export type Villa = {
  id: number;
  name: string;
  location: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  badges: Badge[];
};

// Fictional fixtures; photographs do not represent these properties or locations.
export const villas: Villa[] = [
  { id: 1, name: "Paipak 01", location: "พัทยา", guests: 20, bedrooms: 5, bathrooms: 6, price: 8900, image: "villa-02", badges: ["แนะนำ", "เปิดใหม่", "ราคาสุดคุ้ม"] },
  { id: 2, name: "Paipak 02", location: "พัทยา", guests: 18, bedrooms: 5, bathrooms: 6, price: 10900, image: "villa-03", badges: ["แนะนำ", "เปิดใหม่"] },
  { id: 3, name: "Paipak 03", location: "หัวหิน", guests: 12, bedrooms: 4, bathrooms: 4, price: 7900, image: "villa-04", badges: ["แนะนำ"] },
  { id: 4, name: "Paipak 04", location: "พัทยา", guests: 16, bedrooms: 6, bathrooms: 6, price: 13900, image: "villa-05", badges: ["แนะนำ", "เปิดใหม่"] },
  { id: 5, name: "Paipak 05", location: "เขาใหญ่", guests: 10, bedrooms: 3, bathrooms: 4, price: 6900, image: "villa-06", badges: ["ราคาสุดคุ้ม"] },
  { id: 6, name: "Paipak 06", location: "หัวหิน", guests: 15, bedrooms: 4, bathrooms: 5, price: 15900, image: "villa-07", badges: ["ใกล้หาด"] },
  { id: 7, name: "Paipak 07", location: "เชียงใหม่", guests: 12, bedrooms: 4, bathrooms: 4, price: 5900, image: "villa-08", badges: ["เปิดใหม่", "ราคาสุดคุ้ม"] },
  { id: 8, name: "Paipak 08", location: "พัทยา", guests: 25, bedrooms: 8, bathrooms: 8, price: 21900, image: "villa-01", badges: ["แนะนำ"] },
  { id: 9, name: "Paipak 09", location: "หัวหิน", guests: 14, bedrooms: 4, bathrooms: 5, price: 12900, image: "villa-02", badges: ["ใกล้หาด"] },
  { id: 10, name: "Paipak 10", location: "พัทยา", guests: 18, bedrooms: 5, bathrooms: 5, price: 17900, image: "villa-05", badges: ["ติดหาด"] },
  { id: 11, name: "Paipak 11", location: "หัวหิน", guests: 10, bedrooms: 3, bathrooms: 3, price: 9900, image: "villa-04", badges: ["ใกล้หาด"] },
  { id: 12, name: "Paipak 12", location: "พัทยา", guests: 16, bedrooms: 5, bathrooms: 6, price: 14900, image: "villa-07", badges: ["ใกล้หาด"] },
];

export const sections = [
  { id: "recommended", title: "แนะนำ/เปิดใหม่", tone: "blue", ids: [1, 2, 3, 4, 5, 8, 7, 6] },
  { id: "beach", title: "ติดหาด / ใกล้หาด", tone: "cyan", ids: [10, 6, 9, 12, 11, 2, 4, 8] },
  { id: "value", title: "ราคาสุดคุ้ม", tone: "rose", ids: [1, 3, 5, 7, 2, 9, 11, 6] },
  { id: "all-villas", title: "พูลวิลล่าทั้งหมด", tone: "blue", ids: [2, 1, 7, 4, 8, 10, 11, 12] },
];

export const priceLabel = (price: number) => new Intl.NumberFormat("th-TH").format(price);
