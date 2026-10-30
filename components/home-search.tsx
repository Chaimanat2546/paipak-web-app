"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  CalendarDaysIcon,
  MapIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { type DateRange } from "react-day-picker";
import { th } from "react-day-picker/locale";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pill } from "@/components/kibo-ui/pill";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { normalizeGuestCount } from "@/lib/home-demo";
import { villas } from "@/app/home-data";

export type SearchCriteria = { location: string; guests: number };
type SearchSection = "location" | "dates" | "guests";
type GuestCounts = { adults: number; children: number; pets: number };
const guestRows: { key: keyof GuestCounts; title: string; subtitle: string }[] =
  [
    { key: "adults", title: "ผู้ใหญ่", subtitle: "อายุ 18 ปีขึ้นไป" },
    { key: "children", title: "เด็ก", subtitle: "ต่ำกว่า 18 ปี" },
    { key: "pets", title: "สัตว์เลี้ยง", subtitle: "หมา แมว ฯลฯ" },
  ];
const destinations = [...new Set(villas.map((villa) => villa.location))].map(
  (name) => ({
    name,
    count: villas.filter((villa) => villa.location === name).length,
  }),
);
const shortDate = (date: Date) =>
  date.toLocaleDateString("th-TH-u-ca-gregory", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function HomeSearch({
  onSearch,
  mobileOpen,
  setMobileOpen,
}: {
  onSearch: (criteria: SearchCriteria) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const [location, setLocation] = useState("");
  const [counts, setCounts] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    pets: 0,
  });
  const [range, setRange] = useState<DateRange>();
  const [dateError, setDateError] = useState(false);
  const [active, setActive] = useState<SearchSection | null>(null);
  const [highlighted, setHighlighted] = useState(-1);
  const opener = useRef<HTMLElement | null>(null);
  const desktopLocation = useRef<HTMLInputElement>(null);
  const mobileLocation = useRef<HTMLInputElement>(null);
  const mobileDate = useRef<HTMLButtonElement>(null);
  const mobileGuests = useRef<HTMLButtonElement>(null);
  const submitted = useRef(false);
  const outsideClose = useRef(false);
  const restoringFocus = useRef(false);
  const mobileDialogId = useId();
  const destinationListId = useId();
  const searchFormId = useId();
  const dateErrorId = useId();
  const matches = destinations.filter((item) =>
    item.name.includes(location.trim()),
  );
  const total = counts.adults + counts.children;
  const dateLabel = range?.from
    ? `${shortDate(range.from)}${range.to ? ` - ${shortDate(range.to)}` : " - เลือกวันเช็คเอาท์"}`
    : "เพิ่มวันที่";
  const guestLabel =
    total || counts.pets
      ? `${total} คน${counts.pets ? ` · สัตว์เลี้ยง ${counts.pets}` : ""}`
      : "ผู้เข้าพัก";

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const close = () => {
      setActive(null);
      setMobileOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, [setMobileOpen]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);
  function openSection(section: SearchSection) {
    if (restoringFocus.current) return;
    if (document.activeElement instanceof HTMLElement)
      opener.current = document.activeElement;
    submitted.current = false;
    outsideClose.current = false;
    setMobileOpen(window.matchMedia("(max-width: 767px)").matches);
    setActive(section);
    setHighlighted(-1);
  }
  function closeMobile() {
    setActive(null);
    setMobileOpen(false);
  }
  function closePopover(section: SearchSection) {
    setActive((current) => (current === section ? null : current));
  }
  function restorePopoverFocus(event: Event, section: SearchSection) {
    const focused = document.activeElement;
    // A closing animation must not dismiss or steal focus from a newer field.
    if (
      (active !== null && active !== section) ||
      (focused instanceof HTMLElement &&
        focused !== document.body &&
        !focused.closest(`[data-search-popup="${section}"]`))
    )
      event.preventDefault();
  }
  function chooseDestination(name: string) {
    setLocation(name);
    setHighlighted(-1);
    setActive("dates");
    if (mobileOpen) {
      mobileDate.current?.focus({ preventScroll: true });
    }
  }
  function chooseRange(next: DateRange | undefined) {
    setRange(next);
    if (!next?.from || next.to) setDateError(false);
    if (next?.from && next.to) {
      setActive("guests");
      if (mobileOpen) mobileGuests.current?.focus({ preventScroll: true });
    }
  }
  function locationKey(event: KeyboardEvent<HTMLInputElement>) {
    if (
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      matches.length
    ) {
      event.preventDefault();
      if (active !== "location") openSection("location");
      setHighlighted((current) =>
        event.key === "ArrowDown"
          ? (current + 1) % matches.length
          : current <= 0
            ? matches.length - 1
            : current - 1,
      );
    } else if (
      event.key === "Enter" &&
      active === "location" &&
      matches.length > 0
    ) {
      const item = matches[highlighted >= 0 ? highlighted : 0];
      if (item) {
        event.preventDefault();
        chooseDestination(item.name);
      }
    } else if (event.key === "Escape" && active === "location" && !mobileOpen) {
      setActive(null);
    }
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (range?.from && !range.to) {
      setDateError(true);
      if (mobileOpen) {
        setActive("dates");
        mobileDate.current?.focus({ preventScroll: true });
      } else {
        openSection("dates");
      }
      return;
    }
    submitted.current = true;
    closeMobile();
    onSearch({ location: location.trim(), guests: total });
  }
  function locationField(mobile = false) {
    const id = mobile ? "mobile-search-location" : "search-location";
    return (
      <Label
        className="search-field location-field"
        htmlFor={id}
        data-active={active === "location"}
      >
        <MapPinIcon aria-hidden="true" className="search-icon" />
        <span className="min-w-0 flex-1">
          <span className="search-label">สถานที่</span>
          <Input
            ref={mobile ? mobileLocation : desktopLocation}
            id={id}
            name="location"
            role="combobox"
            autoComplete="off"
            aria-autocomplete="list"
            aria-expanded={active === "location"}
            aria-controls={
              active === "location" ? destinationListId : undefined
            }
            aria-activedescendant={
              active === "location" && highlighted >= 0
                ? `${destinationListId}-${highlighted}`
                : undefined
            }
            value={location}
            onFocus={() =>
              mobile ? setActive("location") : openSection("location")
            }
            onClick={() => {
              if (!mobile && active !== "location") openSection("location");
            }}
            onChange={(event) => {
              setLocation(event.target.value);
              setActive("location");
              setHighlighted(-1);
            }}
            onKeyDown={locationKey}
            placeholder="ค้นหาสถานที่..."
            className="search-location"
          />
        </span>
      </Label>
    );
  }
  function destinationMenu() {
    return (
      <div className="destination-menu">
        <p className="mb-3 pl-2 text-sm font-bold tracking-wide text-soft">
          พื้นที่ในข้อมูลตัวอย่าง
        </p>
        <div
          id={destinationListId}
          role="listbox"
          aria-label="พื้นที่ตัวอย่าง"
          className="destination-list"
        >
          {matches.map((item, index) => (
            <Button
              key={item.name}
              id={`${destinationListId}-${index}`}
              role="option"
              aria-selected={location === item.name}
              variant="plain"
              size="plain"
              type="button"
              data-highlighted={highlighted === index}
              className="destination-option"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseDestination(item.name)}
            >
              <span className="flex min-w-0 items-center gap-2">
                <MapIcon
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-soft"
                />
                <span className="truncate">{item.name}</span>
              </span>
              <Pill className="destination-count">
                {item.count} หลัง
              </Pill>
            </Button>
          ))}
        </div>
        {!matches.length && (
          <p
            role="status"
            className="py-4 text-center text-sm text-muted-foreground"
          >
            ไม่พบพื้นที่ตัวอย่าง
          </p>
        )}
      </div>
    );
  }
  function dateField() {
    return (
      <>
        <CalendarDaysIcon aria-hidden="true" className="search-icon" />
        <span className="min-w-0">
          <span className="search-label">เช็คอิน - เช็คเอาท์</span>
          <span
            className="search-value"
            data-filled={Boolean(range?.from)}
            title={dateLabel}
          >
            {dateLabel}
          </span>
        </span>
      </>
    );
  }
  function clearDates() {
    return range?.from ? (
      <Button
        variant="ghost"
        size="plain"
        type="button"
        aria-label="ล้างวันที่"
        className="clear-dates"
        onClick={(event) => {
          const field =
            event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(
              ".search-field",
            );
          setRange(undefined);
          setDateError(false);
          requestAnimationFrame(() => field?.focus({ preventScroll: true }));
        }}
      >
        <XIcon aria-hidden="true" className="size-3.5" />
      </Button>
    ) : null;
  }
  function guestField() {
    return (
      <>
        <UsersIcon aria-hidden="true" className="search-icon" />
        <span className="min-w-0">
          <span className="search-label">ผู้เข้าพัก</span>
          <span
            className="search-value"
            data-filled={Boolean(total || counts.pets)}
          >
            {guestLabel}
          </span>
        </span>
      </>
    );
  }
  function guestPicker(mobile = false) {
    return (
      <div className="guest-picker" aria-label="จำนวนผู้เข้าพักตัวอย่าง">
        {guestRows.map((row) => (
          <div key={row.key} className="guest-row">
            <div>
              <p className="font-bold text-ink">{row.title}</p>
              <p className="text-xs text-muted-foreground">{row.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="plain"
                className="guest-step"
                aria-label={`ลด${row.title}`}
                disabled={counts[row.key] === 0}
                onClick={() =>
                  setCounts((current) => ({
                    ...current,
                    [row.key]: normalizeGuestCount(
                      String(current[row.key] - 1),
                    ),
                  }))
                }
              >
                <MinusIcon aria-hidden="true" className="size-3.5" />
              </Button>
              <Input
                type="number"
                form={mobile ? undefined : searchFormId}
                min={0}
                max={50}
                step={1}
                inputMode="numeric"
                className="guest-count"
                aria-label={`จำนวน${row.title}`}
                value={counts[row.key]}
                onFocus={(event) => event.currentTarget.select()}
                onChange={(event) =>
                  setCounts((current) => ({
                    ...current,
                    [row.key]: normalizeGuestCount(event.target.value),
                  }))
                }
              />
              <Button
                type="button"
                variant="outline"
                size="plain"
                className="guest-step"
                aria-label={`เพิ่ม${row.title}`}
                disabled={counts[row.key] >= 50}
                onClick={() =>
                  setCounts((current) => ({
                    ...current,
                    [row.key]: normalizeGuestCount(
                      String(current[row.key] + 1),
                    ),
                  }))
                }
              >
                <PlusIcon aria-hidden="true" className="size-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  function calendar(mobile: boolean) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
      <div className="calendar-picker">
        {dateError && (
          <p
            id={`${dateErrorId}-${mobile ? "mobile" : "desktop"}`}
            role="alert"
            className="border-b border-line px-4 py-3 text-sm text-destructive"
          >
            กรุณาเลือกวันเช็คเอาท์ หรือล้างวันที่เพื่อค้นหาแบบไม่ระบุวัน
          </p>
        )}
        <div className="calendar-scroll">
          <Calendar
            mode="range"
            selected={range}
            onSelect={chooseRange}
            min={1}
            resetOnSelect
            numberOfMonths={mobile ? 1 : 2}
            defaultMonth={range?.from ?? today}
            disabled={{ before: today }}
            showOutsideDays={false}
            locale={th}
            weekStartsOn={0}
            className="home-calendar"
            formatters={{
              formatCaption: (date) =>
                date.toLocaleDateString("th-TH-u-ca-gregory", {
                  month: "long",
                  year: "numeric",
                }),
              formatWeekdayName: (date) =>
                ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"][date.getDay()] ?? "",
            }}
            classNames={{
              today: "rdp-today",
              month: "home-calendar-month flex min-w-0 flex-1 flex-col gap-6",
              caption_label: "text-[15px] font-bold text-ink",
              weekday: "flex-1 text-xs font-bold leading-[18px] text-soft",
              months: "relative flex flex-col gap-8 md:flex-row",
            }}
          />
        </div>
      </div>
    );
  }
  function searchButton() {
    return (
      <Button
        type="submit"
        aria-label="ค้นหาพูลวิลล่าตัวอย่าง"
        className="search-submit"
      >
        <SearchIcon aria-hidden="true" className="size-5" />
        <span>ค้นหาพูลวิลล่า</span>
      </Button>
    );
  }

  return (
    <>
      <form
        id={searchFormId}
        onSubmit={submit}
        aria-label="ค้นหาพูลวิลล่าตัวอย่าง"
        className="search-panel"
        inert={mobileOpen}
        data-mobile-open={mobileOpen}
      >
        <div className="search-fields">
          <Popover
            open={active === "location" && !mobileOpen}
            onOpenChange={(next) => {
              if (!next) closePopover("location");
            }}
          >
            <div className="search-field-shell location-shell">
              <PopoverAnchor asChild>{locationField()}</PopoverAnchor>
            </div>
            <PopoverContent
              align="start"
              sideOffset={12}
              collisionPadding={16}
              aria-label="เลือกพื้นที่ตัวอย่าง"
              className="destination-popover max-w-[calc(100vw-32px)] rounded-[24px] p-6 shadow-search"
              onOpenAutoFocus={(event) => event.preventDefault()}
              onCloseAutoFocus={(event) => event.preventDefault()}
              onInteractOutside={(event) => {
                if (
                  event.target instanceof Element &&
                  event.target.closest(".location-field")
                )
                  event.preventDefault();
              }}
            >
              {destinationMenu()}
            </PopoverContent>
          </Popover>
          <div className="search-field-shell">
            <Popover
              open={active === "dates" && !mobileOpen}
              onOpenChange={(next) =>
                next ? openSection("dates") : closePopover("dates")
              }
            >
              <PopoverTrigger asChild>
                <Button
                  variant="plain"
                  size="plain"
                  type="button"
                  className="search-field"
                  aria-label={`เช็คอิน - เช็คเอาท์ ${dateLabel}`}
                  aria-invalid={dateError || undefined}
                  aria-describedby={
                    dateError && active === "dates"
                      ? `${dateErrorId}-desktop`
                      : undefined
                  }
                  data-active={active === "dates"}
                  aria-expanded={active === "dates"}
                  {...(mobileOpen ? { "aria-controls": mobileDialogId } : {})}
                >
                  {dateField()}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                aria-label="เลือกวันที่เข้าพักตัวอย่าง"
                data-search-popup="dates"
                onCloseAutoFocus={(event) =>
                  restorePopoverFocus(event, "dates")
                }
                align="center"
                sideOffset={12}
                collisionPadding={16}
                className="date-popover w-[720px] max-w-[calc(100vw-32px)] rounded-[24px] border-line bg-white p-0 shadow-search"
              >
                {calendar(false)}
              </PopoverContent>
            </Popover>
            {clearDates()}
          </div>
          <div className="search-field-shell">
            <Popover
              open={active === "guests" && !mobileOpen}
              onOpenChange={(next) =>
                next ? openSection("guests") : closePopover("guests")
              }
            >
              <PopoverTrigger asChild>
                <Button
                  variant="plain"
                  size="plain"
                  type="button"
                  className="search-field"
                  aria-label={`ผู้เข้าพัก ${guestLabel}`}
                  data-active={active === "guests"}
                  aria-expanded={active === "guests"}
                  {...(mobileOpen ? { "aria-controls": mobileDialogId } : {})}
                >
                  {guestField()}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                aria-label="เลือกผู้เข้าพักตัวอย่าง"
                data-search-popup="guests"
                onCloseAutoFocus={(event) =>
                  restorePopoverFocus(event, "guests")
                }
                align="end"
                sideOffset={12}
                collisionPadding={16}
                className="w-[380px] max-w-[calc(100vw-32px)] rounded-[24px] border-line bg-white p-6 shadow-search"
              >
                {guestPicker()}
                <Button
                  type="submit"
                  form={searchFormId}
                  aria-label="ค้นหาพูลวิลล่าจากผู้เข้าพัก"
                  className="mt-4 w-full"
                >
                  ค้นหาพูลวิลล่า
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {searchButton()}
      </form>
      <span role="status" className="sr-only">
        {range?.from ? dateLabel : ""}
      </span>
      <Dialog
        modal={false}
        open={mobileOpen}
        onOpenChange={(next) => {
          if (!next) closeMobile();
        }}
      >
        <DialogContent
          id={mobileDialogId}
          showCloseButton={false}
          onOpenAutoFocus={(event) => {
            if (active === "location") {
              event.preventDefault();
              mobileLocation.current?.focus({ preventScroll: true });
            }
          }}
          onInteractOutside={() => {
            outsideClose.current = true;
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            const focused = document.activeElement;
            const focusedDialog = focused?.closest('[role="dialog"]');
            if (focusedDialog && focusedDialog.id !== mobileDialogId) return;
            if (
              !submitted.current &&
              !outsideClose.current &&
              opener.current?.isConnected
            ) {
              restoringFocus.current = true;
              opener.current.focus({ preventScroll: true });
              restoringFocus.current = false;
            }
          }}
          className="mobile-search-sheet left-0 top-[76px] block max-h-[calc(100dvh-76px)] w-full max-w-none translate-x-0 translate-y-0 overflow-y-auto rounded-t-none rounded-b-[32px] border-0 bg-canvas px-4 pb-6 pt-0 sm:max-w-none"
        >
          <div className="mobile-search-header mb-4 flex items-center justify-between pl-1">
            <DialogTitle className="text-lg font-bold leading-[27px] text-ink">
              ค้นหาพูลวิลล่า
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon-sm"
              type="button"
              aria-label="ปิดหน้าต่างค้นหา"
              onClick={closeMobile}
            >
              <XIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground"
              />
            </Button>
          </div>
          <DialogDescription className="sr-only">
            ตัวอย่างค้นหาที่พัก ยังไม่ตรวจวันว่างและยังไม่เปิดรับจอง
          </DialogDescription>
          <form onSubmit={submit} className="mobile-search-form">
            <div className="search-fields">
              {locationField(true)}
              {active === "location" && (
                <div className="mobile-destinations">{destinationMenu()}</div>
              )}
              <div className="search-field-shell">
                <Button
                  ref={mobileDate}
                  variant="plain"
                  size="plain"
                  type="button"
                  className="search-field"
                  data-active={active === "dates"}
                  aria-invalid={dateError || undefined}
                  aria-describedby={
                    dateError && active === "dates"
                      ? `${dateErrorId}-mobile`
                      : undefined
                  }
                  onClick={() => setActive("dates")}
                >
                  {dateField()}
                </Button>
                {clearDates()}
              </div>
              {active === "dates" && calendar(true)}
              <div className="search-field-shell">
                <Button
                  ref={mobileGuests}
                  variant="plain"
                  size="plain"
                  type="button"
                  className="search-field"
                  data-active={active === "guests"}
                  onClick={() => setActive("guests")}
                >
                  {guestField()}
                </Button>
              </div>
              {active === "guests" && (
                <div className="mobile-guests">{guestPicker(true)}</div>
              )}
            </div>
            {searchButton()}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
