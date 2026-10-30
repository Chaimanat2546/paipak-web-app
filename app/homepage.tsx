"use client";

import Image from "next/image";
import {
  BathIcon,
  BedDoubleIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  CookieIcon,
  FlameIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
  ThumbsUpIcon,
  UsersIcon,
  WavesIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { HomeSearch, type SearchCriteria } from "@/components/home-search";
import { AuthDemo } from "@/components/auth-demo";
import { LineIcon, SocialIcon } from "@/components/social-icon";
import { Brand } from "@/components/brand";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Pill } from "@/components/kibo-ui/pill";
import { cn } from "@/lib/utils";

import { useRef, useState, useSyncExternalStore } from "react";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
const getScrolled = () => window.scrollY > 24;
const serverScrolled = () => false;
import {
  priceLabel,
  sections,
  villas,
  type Badge,
  type Villa,
} from "./home-data";

const icons = {
  search: SearchIcon,
  pin: MapPinIcon,
  calendar: CalendarDaysIcon,
  users: UsersIcon,
  bed: BedDoubleIcon,
  bath: BathIcon,
  heart: HeartIcon,
  arrow: ChevronRightIcon,
  sparkles: SparklesIcon,
  flame: FlameIcon,
  thumb: ThumbsUpIcon,
  wave: WavesIcon,
  phone: PhoneIcon,
  cookie: CookieIcon,
  settings: SlidersHorizontalIcon,
  close: XIcon,
};
type IconName = keyof typeof icons;
function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden="true"
      strokeWidth={1.7}
      className={cn("size-5 shrink-0", className)}
    />
  );
}

const badgeIcons: Record<Badge, IconName> = {
  แนะนำ: "thumb",
  เปิดใหม่: "sparkles",
  ราคาสุดคุ้ม: "flame",
  ใกล้หาด: "wave",
  ติดหาด: "wave",
};
const badgeColors: Record<Badge, string> = {
  แนะนำ: "bg-brand-blue text-white",
  เปิดใหม่: "bg-brand-yellow text-white",
  ราคาสุดคุ้ม: "bg-brand-rose text-white",
  ใกล้หาด: "bg-brand-teal text-white",
  ติดหาด: "bg-brand-cyan text-white",
};

function VillaCard({
  villa,
  saved,
  onSave,
  onOpen,
}: {
  villa: Villa;
  saved: boolean;
  onSave: () => void;
  onOpen: () => void;
}) {
  return (
    <Card
      role="article"
      className="villa-card group relative gap-0 py-0 overflow-hidden rounded-[32px] border border-line bg-white shadow-card"
    >
      <Button
        variant="plain"
        size="plain"
        type="button"
        onClick={onOpen}
        aria-label={`ดูข้อมูลตัวอย่าง ${villa.name}`}
        className="villa-open absolute inset-0 z-10 size-full rounded-[32px] focus-visible:ring-inset"
      />
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={`/mock/${villa.image}.webp`}
          alt={`ภาพประกอบวิลล่าจำลอง ${villa.name}`}
          width={800}
          height={600}
          unoptimized
          className="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="pointer-events-none absolute left-4 top-4 flex max-w-[calc(100%-76px)] flex-wrap gap-2">
          {villa.badges.map((badge) => (
            <Pill
              key={badge}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold shadow-badge md:text-xs ${badgeColors[badge]}`}
            >
              <Icon name={badgeIcons[badge]} className="size-3.5" />
              {badge}
            </Pill>
          ))}
        </div>
        <Button
          variant="plain"
          size="plain"
          type="button"
          onClick={onSave}
          aria-label={`${saved ? "นำออกจาก" : "เพิ่มใน"}ที่พักโปรด ${villa.name}`}
          aria-pressed={saved}
          className={`absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full border border-white/50 shadow-sm backdrop-blur-md transition-colors ${saved ? "bg-white text-brand-rose" : "bg-white/25 text-white hover:bg-white/50"}`}
        >
          <Icon name="heart" className={saved ? "fill-current" : ""} />
        </Button>
      </div>
      <CardContent className="flex flex-col p-5">
        <h3 className="text-lg font-semibold leading-[27px]">{villa.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Icon name="pin" className="size-4 text-soft" />
          {villa.location}
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-2 text-[13px] font-medium text-slate">
          <li className="stat" aria-label={`รองรับ ${villa.guests} คน`}>
            <Icon name="users" className="size-4 text-soft" />
            {villa.guests} คน
          </li>
          <li className="stat" aria-label={`${villa.bedrooms} ห้องนอน`}>
            <Icon name="bed" className="size-4 text-soft" />
            {villa.bedrooms}
          </li>
          <li className="stat" aria-label={`${villa.bathrooms} ห้องน้ำ`}>
            <Icon name="bath" className="size-4 text-soft" />
            {villa.bathrooms}
          </li>
        </ul>
        <div className="mt-5 flex items-end justify-between gap-2 border-t border-canvas pt-4">
          <p>
            <span className="block text-xs text-muted-foreground">
              เริ่มต้น
            </span>
            <span className="text-[24px] font-black leading-[26px] tracking-tight text-brand-blue">
              ฿{priceLabel(villa.price)}
            </span>
            <span className="block text-xs leading-[18px] text-muted-foreground md:ml-1 md:inline">
              /คืน{" "}
              <span className="text-[11px] font-bold text-brand-blue">
                ({priceLabel(Math.round(villa.price / villa.guests))}/คน)
              </span>
            </span>
          </p>
          <span
            aria-hidden="true"
            className="villa-arrow flex size-11 shrink-0 items-center justify-center rounded-full border border-canvas bg-surface text-soft shadow-sm transition-colors group-hover:bg-brand-blue group-hover:text-white group-focus-within:bg-brand-blue group-focus-within:text-white"
          >
            <Icon name="arrow" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

type Panel =
  | { kind: "info"; title: string; description: string }
  | { kind: "auth" }
  | { kind: "favorites" }
  | { kind: "cookies" }
  | { kind: "villa"; villa: Villa };

export function Homepage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolled,
    serverScrolled,
  );
  const [search, setSearch] = useState<{
    location: string;
    guests: number;
  } | null>(null);
  const [cookieVisible, setCookieVisible] = useState(true);
  const [analyticsDemo, setAnalyticsDemo] = useState(false);
  const [marketingDemo, setMarketingDemo] = useState(false);
  const [panel, setPanel] = useState<Panel>({
    kind: "info",
    title: "",
    description: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const results = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  function open(next: Panel) {
    if (document.activeElement instanceof HTMLElement)
      opener.current = document.activeElement;
    setPanel(next);
    setMobileSearchOpen(false);
    setDialogOpen(true);
  }
  function info(
    title: string,
    description = "ส่วนนี้เป็น UI ตัวอย่าง ยังไม่เชื่อมต่อระบบจริง",
  ) {
    open({ kind: "info", title, description });
  }
  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }
  function submitSearch(criteria: SearchCriteria) {
    setSearch(criteria);
    requestAnimationFrame(() => {
      results.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      results.current?.focus({ preventScroll: true });
    });
  }
  function cookieChoice(analytics: boolean, marketing = analytics) {
    setAnalyticsDemo(analytics);
    setMarketingDemo(marketing);
    setCookieVisible(false);
    setDialogOpen(false);
  }
  const filtered = search
    ? villas.filter(
        (villa) =>
          villa.location.includes(search.location) &&
          villa.guests >= search.guests,
      )
    : [];
  const panelTitle =
    panel.kind === "auth"
      ? "เข้าสู่ระบบ"
      : panel.kind === "favorites"
        ? "ที่พักโปรดของคุณ"
        : panel.kind === "cookies"
          ? "ตั้งค่าคุกกี้ตัวอย่าง"
          : panel.kind === "villa"
            ? panel.villa.name
            : panel.title;

  return (
    <>
      <a href="#main-content" className="skip-link">
        ข้ามไปเนื้อหาหลัก
      </a>
      <header
        className="site-header fixed inset-x-0 top-0 z-40"
        data-scrolled={scrolled}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
          <a href="#" aria-label="paipak หน้าแรก">
            <Brand />
          </a>
          <nav
            aria-label="เมนูหลัก"
            className="flex items-center gap-2 sm:gap-3 lg:gap-5"
          >
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() =>
                info(
                  "สกุลเงิน",
                  "ตัวอย่างนี้แสดงราคาเป็นเงินบาท (THB) เท่านั้น",
                )
              }
              className="header-currency hidden min-h-11 px-1 text-sm font-semibold text-white sm:block"
            >
              THB
            </Button>
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() => info("ภาษา", "ตัวอย่างนี้รองรับภาษาไทยเท่านั้น")}
              aria-label="ภาษาไทย"
              className="hidden size-11 items-center justify-center sm:flex"
            >
              <span className="thai-flag" />
            </Button>
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() => open({ kind: "favorites" })}
              aria-label={`ที่พักโปรด ${favorites.length} รายการ`}
              className="header-favorite relative flex size-11 items-center justify-center text-white"
            >
              <Icon name="heart" />
              {favorites.length > 0 && (
                <span className="absolute right-0 top-0 flex min-w-4 items-center justify-center rounded-full bg-brand-rose px-1 text-[10px]">
                  {favorites.length}
                </span>
              )}
            </Button>
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() =>
                info(
                  "ติดต่อ paipak",
                  "ปุ่ม LINE เป็นตัวอย่าง ยังไม่ได้กำหนดบัญชีติดต่อของ paipak",
                )
              }
              className="flex min-h-11 items-center gap-2 rounded-full bg-line-green px-3 text-xs font-semibold text-white sm:px-5 sm:text-sm"
            >
              <LineIcon className="size-5 shrink-0" />
              <span>LINE</span>
            </Button>
            <Button
              type="button"
              onClick={() => open({ kind: "auth" })}
              className="min-h-11 rounded-full bg-brand-blue px-3 text-[11px] font-semibold text-white shadow-button transition-colors hover:bg-brand-blue-dark sm:px-6 sm:text-sm"
            >
              <span className="sm:hidden">
                เข้าสู่ระบบ /<br />
                ลงทะเบียน
              </span>
              <span className="hidden sm:inline">เข้าสู่ระบบ / ลงทะเบียน</span>
            </Button>
          </nav>
        </div>
      </header>

      <section
        aria-labelledby="hero-heading"
        className="hero relative isolate flex flex-col justify-end bg-brand-navy pb-6 md:pb-20"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/mock/villa-01.webp"
            alt=""
            fill
            unoptimized
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="hero-photo object-cover"
          />
          <div className="hero-shade absolute inset-0" />
        </div>
        <div className="mx-auto w-full max-w-5xl px-4">
          <h1
            id="hero-heading"
            className="hero-heading font-black tracking-tight text-white"
          >
            <span className="text-brand-yellow">ไปพัก พูลวิลล่า</span>{" "}
            <span className="block sm:inline">พื้นที่ความสุขส่วนตัว</span>
          </h1>
          <p className="hero-subtitle">
            ตอบโจทย์ทุกการรวมเพื่อน ครอบครัว องค์กร
          </p>
        </div>
        <HomeSearch
          onSearch={submitSearch}
          mobileOpen={mobileSearchOpen}
          setMobileOpen={setMobileSearchOpen}
        />
      </section>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-6 md:pt-16"
      >
        {search && (
          <section className="mb-16" aria-labelledby="search-results">
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2
                id="search-results"
                ref={results}
                tabIndex={-1}
                className="scroll-mt-24 text-2xl font-bold text-brand-blue"
              >
                ผลการค้นหาตัวอย่าง
              </h2>
              <Button
                variant="plain"
                size="plain"
                type="button"
                onClick={() => {
                  setSearch(null);
                  requestAnimationFrame(() =>
                    document.getElementById("search-location")?.focus(),
                  );
                }}
                className="min-h-11 text-sm text-brand-blue underline underline-offset-4"
              >
                ล้างผลค้นหา
              </Button>
            </div>
            <p role="status" className="mb-6 text-sm text-muted-foreground">
              พบ {filtered.length} หลัง · ผลตัวอย่างกรองเฉพาะสถานที่และจำนวนคน
              ยังไม่ตรวจวันว่างหรือเงื่อนไขรับสัตว์เลี้ยง
            </p>
            {filtered.length ? (
              <div className="villa-grid">
                {filtered.map((villa) => (
                  <VillaCard
                    key={villa.id}
                    villa={villa}
                    saved={favorites.includes(villa.id)}
                    onSave={() => toggleFavorite(villa.id)}
                    onOpen={() => open({ kind: "villa", villa })}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-line bg-white p-8 text-center">
                <p className="font-medium">
                  ยังไม่พบที่พักตัวอย่างที่ตรงกับการค้นหา
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  ลองเปลี่ยนสถานที่หรือลดจำนวนผู้เข้าพัก
                </p>
              </div>
            )}
          </section>
        )}
        <div className="space-y-16">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="section-header mb-6 flex items-center justify-between gap-3">
                <h2
                  id={`${section.id}-heading`}
                  className={`section-heading text-[24px] font-black leading-8 tracking-tight md:text-[30px] md:leading-9 ${section.tone === "cyan" ? "text-brand-cyan" : section.tone === "rose" ? "text-brand-rose" : "text-brand-blue"}`}
                >
                  {section.title}
                </h2>
                <Button
                  type="button"
                  onClick={() =>
                    info(
                      section.title,
                      "หน้านี้แสดงที่พักตัวอย่าง ส่วนหน้ารวมที่พักจะพัฒนาเมื่อผ่านการตรวจรับหน้าแรกแล้ว",
                    )
                  }
                  size="plain"
                  className="view-all shrink-0 rounded-full bg-brand-blue px-5 py-2 text-[11px] font-bold text-white shadow-sm transition-colors hover:bg-brand-blue-dark md:text-xs"
                >
                  ดูทั้งหมด
                </Button>
              </div>
              <div className="villa-grid">
                {section.ids.map((id) => {
                  const villa = villas.find((item) => item.id === id);
                  return villa ? (
                    <VillaCard
                      key={id}
                      villa={villa}
                      saved={favorites.includes(id)}
                      onSave={() => toggleFavorite(id)}
                      onOpen={() => open({ kind: "villa", villa })}
                    />
                  ) : null;
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-brand-navy text-white/70">
        <div className="footer-rule h-1" />
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-14 md:px-8 md:pt-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
            <div className="col-span-2 lg:col-span-1">
              <a href="#" aria-label="paipak หน้าแรก">
                <Brand />
              </a>
              <p className="mt-5 max-w-72 text-[13px] leading-relaxed">
                พูลวิลล่าสระว่ายน้ำส่วนตัว พัทยา และทั่วประเทศ
                <br />
                เลือกได้ตามสไตล์ รองรับทุกกลุ่ม ครอบครัว เพื่อน องค์กร
              </p>
              <div className="mt-5 flex gap-2">
                {["Facebook", "TikTok", "Instagram", "YouTube", "LINE"].map(
                  (label) => (
                    <Button
                      variant="plain"
                      size="plain"
                      key={label}
                      type="button"
                      onClick={() =>
                        info(label, "ยังไม่ได้กำหนดช่องทางโซเชียลของ paipak")
                      }
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      <SocialIcon name={label} />
                    </Button>
                  ),
                )}
              </div>
            </div>
            <div>
              <h2 className="footer-heading">ค้นหาวิลล่า</h2>
              <ul className="mt-4 space-y-1">
                {[
                  "ค้นหาพูลวิลล่า",
                  "พูลวิลล่าพัทยา",
                  "พูลวิลล่าหัวหิน",
                  "พูลวิลล่าเขาใหญ่",
                  "พูลวิลล่าเชียงใหม่",
                  "วิลล่า 4 ห้องนอน+",
                ].map((label) => (
                  <li key={label}>
                    <Button
                      variant="plain"
                      size="plain"
                      type="button"
                      onClick={() => info(label)}
                      className="footer-link"
                    >
                      <Icon name="arrow" className="size-3 text-blue-300/60" />
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">เกี่ยวกับเรา</h2>
              <ul className="mt-4 space-y-1">
                {[
                  "เกี่ยวกับ paipak",
                  "วิธีการจอง",
                  "เงื่อนไขการจอง",
                  "นโยบายความเป็นส่วนตัว",
                  "ข้อกำหนดและเงื่อนไข",
                  "ลงประกาศวิลล่า",
                ].map((label) => (
                  <li key={label}>
                    <Button
                      variant="plain"
                      size="plain"
                      type="button"
                      onClick={() =>
                        info(
                          label,
                          label.includes("จอง")
                            ? "ยังไม่เปิดระบบจองออนไลน์ หน้านี้เป็นตัวอย่างสำหรับตรวจหน้าตาเว็บไซต์"
                            : "หน้านี้จะพัฒนาในระยะถัดไป",
                        )
                      }
                      className="footer-link"
                    >
                      <Icon name="arrow" className="size-3 text-blue-300/60" />
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="footer-heading">ติดต่อเรา</h2>
              <p className="mt-5 text-[13px] leading-relaxed">
                ข้อมูลติดต่อจะแสดงเมื่อเปิดให้บริการ
                <br />
                ขณะนี้เป็นเว็บไซต์ข้อมูลตัวอย่าง
              </p>
              <Button
                variant="plain"
                size="plain"
                type="button"
                onClick={() =>
                  info("โทรศัพท์", "ยังไม่ได้กำหนดหมายเลขติดต่อของ paipak")
                }
                className="footer-link mt-2"
              >
                <Icon name="phone" className="size-4 text-blue-300/70" />
                ติดต่อทางโทรศัพท์
              </Button>
              <Button
                variant="plain"
                size="plain"
                type="button"
                onClick={() =>
                  info("LINE", "ยังไม่ได้กำหนดบัญชี LINE ของ paipak")
                }
                className="footer-link"
              >
                <LineIcon className="size-4 shrink-0 text-blue-300/70" />
                สอบถามผ่าน LINE
              </Button>
              <p className="mt-4 text-xs text-white/45">
                รูปภาพประกอบจาก Unsplash
                <br />
                ชื่อที่พัก ทำเล และราคาเป็นข้อมูลจำลอง
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 py-6 text-center text-[11px] leading-relaxed text-white/50">
            พูลวิลล่าพัทยา · พูลวิลล่าหัวหิน · พูลวิลล่าเขาใหญ่ ·
            บ้านพักสระส่วนตัว · Pool Villa Pattaya · Pool Villa Hua Hin ·
            ที่พักกลุ่มใหญ่
          </p>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-[11px] text-white/55 sm:flex-row">
            <p>© 2026 paipak · หน้าแรกตัวอย่าง</p>
            <div className="flex flex-wrap justify-center gap-x-4">
              {[
                "นโยบายความเป็นส่วนตัว",
                "ข้อกำหนดการใช้งาน",
                "ตั้งค่าคุกกี้",
                "FAQ",
              ].map((label) => (
                <Button
                  variant="plain"
                  size="plain"
                  type="button"
                  key={label}
                  onClick={() =>
                    label === "ตั้งค่าคุกกี้"
                      ? open({ kind: "cookies" })
                      : info(label)
                  }
                  className="min-h-7 hover:text-white"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {cookieVisible && (
        <aside aria-labelledby="cookie-heading" className="cookie-banner">
          <div className="cookie-copy flex gap-4">
            <span className="hidden size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-brand-yellow sm:flex">
              <Icon name="cookie" />
            </span>
            <div>
              <h2 id="cookie-heading" className="text-base font-semibold">
                เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/75 md:text-[13px]">
                แบนเนอร์คุกกี้ตัวอย่างสำหรับ paipak
                ยังไม่มีการติดตั้งคุกกี้วิเคราะห์หรือติดตามการใช้งาน{" "}
                <Button
                  variant="plain"
                  size="plain"
                  type="button"
                  onClick={() =>
                    info(
                      "ความเป็นส่วนตัว",
                      "ตัวอย่างนี้ไม่มี analytics และไม่ส่งข้อมูลการค้นหาหรือการเลือกของคุณไปยังบริการภายนอก",
                    )
                  }
                  className="font-medium text-brand-yellow underline underline-offset-2"
                >
                  รายละเอียด
                </Button>
              </p>
            </div>
          </div>
          <div className="cookie-actions">
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() => open({ kind: "cookies" })}
              className="cookie-button cookie-settings"
            >
              <Icon name="settings" className="size-4" />
              ตั้งค่า
            </Button>
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() => cookieChoice(false)}
              className="cookie-button"
            >
              ปฏิเสธที่ไม่จำเป็น
            </Button>
            <Button
              variant="plain"
              size="plain"
              type="button"
              onClick={() => cookieChoice(true)}
              className="cookie-button border-brand-yellow! bg-brand-yellow text-ink hover:bg-yellow-300!"
            >
              ยอมรับทั้งหมด
            </Button>
          </div>
        </aside>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          showCloseButton={false}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (opener.current?.isConnected)
              opener.current.focus({ preventScroll: true });
            else
              document
                .getElementById("main-content")
                ?.focus({ preventScroll: true });
          }}
          className={cn(
            "demo-dialog max-h-[85dvh] w-[calc(100%-32px)] max-w-lg overflow-y-auto rounded-3xl border-line bg-white p-6 text-ink shadow-cookie sm:p-8",
            panel.kind === "auth" &&
              "auth-dialog max-h-[calc(100dvh-32px)] max-w-[448px] overflow-hidden p-0 sm:max-w-[448px] sm:p-0",
          )}
        >
          {panel.kind !== "auth" && (
            <div className="mb-5 flex items-center justify-between gap-4">
              <DialogTitle
                className={cn(
                  "text-xl font-semibold text-brand-blue",
                  panel.kind === "cookies" && "text-lg text-brand-navy",
                )}
              >
                {panelTitle}
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={() => setDialogOpen(false)}
                aria-label="ปิดหน้าต่าง"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-canvas text-muted-foreground hover:bg-line"
              >
                <Icon name="close" />
              </Button>
            </div>
          )}
          <DialogDescription className="sr-only">
            หน้าต่างข้อมูลตัวอย่างของ paipak ยังไม่เชื่อมต่อระบบจริง
          </DialogDescription>
          {panel.kind === "info" && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {panel.description}
            </p>
          )}
          {panel.kind === "auth" && (
            <AuthDemo onClose={() => setDialogOpen(false)} />
          )}
          {panel.kind === "favorites" && (
            <>
              <p className="mb-5 text-sm text-muted-foreground">
                รายการตัวอย่างในหน้านี้จะล้างเมื่อโหลดหน้าใหม่
              </p>
              {favorites.length ? (
                <ul className="divide-y divide-line">
                  {villas
                    .filter((villa) => favorites.includes(villa.id))
                    .map((villa) => (
                      <li
                        key={villa.id}
                        className="flex items-center gap-3 py-3"
                      >
                        <Image
                          src={`/mock/${villa.image}.webp`}
                          alt=""
                          width={72}
                          height={54}
                          unoptimized
                          className="h-[54px] w-[72px] rounded-xl object-cover"
                        />
                        <span className="flex-1 text-sm font-medium">
                          {villa.name}
                          <span className="block text-xs text-muted-foreground">
                            {villa.location}
                          </span>
                        </span>
                        <Button
                          variant="plain"
                          size="plain"
                          type="button"
                          aria-label={`นำ ${villa.name} ออกจากที่พักโปรด`}
                          onClick={() => toggleFavorite(villa.id)}
                          className="flex size-11 items-center justify-center rounded-full bg-canvas text-brand-rose"
                        >
                          <Icon name="heart" className="fill-current" />
                        </Button>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="rounded-2xl bg-canvas p-6 text-center text-sm text-muted-foreground">
                  ยังไม่มีที่พักโปรด กดหัวใจบนรูปที่พักเพื่อทดลองบันทึก
                </p>
              )}
            </>
          )}
          {panel.kind === "cookies" && (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                การตั้งค่านี้เป็นตัวอย่าง ไม่มีการสร้างคุกกี้วิเคราะห์
                และตัวเลือกจะล้างเมื่อโหลดหน้าใหม่
              </p>
              <div className="mt-5 space-y-3">
                <div className="cookie-category">
                  <div>
                    <h3>คุกกี้ที่จำเป็น</h3>
                    <p>ตัวอย่างสำหรับฟังก์ชันหลักของเว็บไซต์</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-brand-blue">
                    เปิดเสมอ
                  </span>
                  <Switch
                    checked
                    disabled
                    aria-label="คุกกี้ที่จำเป็น เปิดเสมอ"
                  />
                </div>
                <div className="cookie-category">
                  <div>
                    <Label htmlFor="analytics-demo">คุกกี้วิเคราะห์</Label>
                    <p>ตัวเลือกตัวอย่างสำหรับปรับปรุงการใช้งานเว็บไซต์</p>
                  </div>
                  <Switch
                    id="analytics-demo"
                    checked={analyticsDemo}
                    onCheckedChange={setAnalyticsDemo}
                  />
                </div>
                <div className="cookie-category">
                  <div>
                    <Label htmlFor="marketing-demo">คุกกี้การตลาด</Label>
                    <p>ตัวเลือกตัวอย่างสำหรับเนื้อหาและแคมเปญที่สนใจ</p>
                  </div>
                  <Switch
                    id="marketing-demo"
                    checked={marketingDemo}
                    onCheckedChange={setMarketingDemo}
                  />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  type="button"
                  className="rounded-xl text-xs"
                  onClick={() => cookieChoice(false)}
                >
                  ปฏิเสธที่ไม่จำเป็น
                </Button>
                <Button
                  type="button"
                  className="rounded-xl text-xs"
                  onClick={() => cookieChoice(analyticsDemo, marketingDemo)}
                >
                  บันทึกการตั้งค่า
                </Button>
              </div>
            </>
          )}
          {panel.kind === "villa" && (
            <>
              <Image
                src={`/mock/${panel.villa.image}.webp`}
                alt={`ภาพประกอบ ${panel.villa.name}`}
                width={800}
                height={600}
                unoptimized
                className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <p className="text-sm text-muted-foreground">
                {panel.villa.location} · {panel.villa.guests} คน ·{" "}
                {panel.villa.bedrooms} ห้องนอน · {panel.villa.bathrooms} ห้องน้ำ
              </p>
              <p className="mt-3 text-xl font-bold text-brand-blue">
                ฿{priceLabel(panel.villa.price)}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  /คืน
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                ข้อมูลและรูปภาพประกอบเป็นตัวอย่าง ยังไม่เปิดรับจอง
                หน้ารายละเอียดที่พักจะพัฒนาในระยะถัดไป
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
