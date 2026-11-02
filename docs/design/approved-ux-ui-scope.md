# Approved UX/UI direction — condensed handoff (not final design artifact)

## Product and behavior
Thai pool-villa booking marketplace paipak.com. Browse/search all homes without selecting check-in/check-out dates. Booking requires a member account. Preserve Property ID, date range and guests when prompted to log in, then **revalidate** price and availability. Search includes destination/date/guest fields; date/guest optional for browsing.

### Owner-confirmed UXD-001 clarifications — 2 November 2026

- **Q-01:** Viewing or managing Favorites requires login. Do not save temporary Guest favorites or merge Guest lists into an account. Browsing properties remains public.
- **Q-02:** Cancelling authentication returns to the Property Detail and selected values when booking initiated the flow; Header-initiated authentication returns to its originating page, subject to Q-03.
- **Q-03:** Preserve Booking Intent only during the uninterrupted navigation/authentication flow. Do not retain or recover it after reload, tab close, or intent/session expiry; restart booking inputs. Results URL state and existing booking/payment records are separate and are not deleted by clearing draft intent.
- **Q-04:** Existing supporting Footer links remain an inventory for separately scoped content work. They do not add a listing-owner portal to the ten selected templates.
- **Q-05:** Use one total guest count without adult/child separation, plus pets separately, across search, detail, checkout and active booking intent. Actual capacity/pet policies and incomplete member-contact fields remain details for the relevant domain/member tasks.

These clarifications supersede conflicting review-1 proposals. See [UXD-001 review-2](uxd-001/edge-flows.md#3-ข้อสรุปเฉพาะงานที่ภูยืนยัน). The owner separately approved the three UXD-001 review-2 documents on 2 November 2026; this is UX/IA acceptance, not final screen approval or authorization to start another task.

## Brand
Pink Accent Premium; navy `#072D59`; light-blue `#DBF2FC`; crimson-pink `#FD6E88`; white base; Mitr typeface. Modern & vibrant, cinematic photography, slightly rounded and elevated surfaces, expressive motion with reduced-motion support. Avoid default SaaS templates.

## Approved 7 villa category shortcuts
1. พูลวิลล่าแนะนำ
2. พูลวิลล่าใกล้ทะเล
3. พูลวิลล่าสายปาร์ตี้
4. พูลวิลล่าราคาพิเศษ
5. พูลวิลล่า Outing
6. พูลวิลล่า Pet Friendly
7. พูลวิลล่า Luxury

## Listing/search requirements
Hero overlay centered search bar; flat icon category navigation; 4-column dense cards on sufficiently wide desktop. Overlay Property Card with carousel, pink badge, favorite, name, location, guest count, starting price (truthful). Search results use **Suggested Search Chips**, not the prior applied-filters chips in that location. Desktop contained sidebar and mobile filter drawer. Users adjust multiple filters then press **Apply Filters**. Traditional results pagination, preserve state in URL.

## 10 page templates
1. Home — Premium Marketplace
2. Results — Modern Marketplace Results + Suggested Search Chips
3. Property Detail — Premium Booking Focus (gallery grid, details left, booking panel right)
4. Booking/Checkout — Premium Member Checkout (autofill member contact details, review then pay)
5. Login/Register — Adaptive Authentication (desktop modal/mobile full-screen)
6. My Bookings — Tabbed Booking List
7. Booking Detail/Confirmation — Hybrid Booking Confirmation, truthful separate booking/payment status
8. Favorites — Favorites Grid, no collections
9. Member Profile — Modern Split Profile (left nav, right details), NOT SaaS dashboard
10. Empty/Loading/Error — Contextual Premium States

## Accessibility caveat
WCAG 2.2 AA minimum; pink `#FD6E88` with white normal text fails contrast. Do not claim a compliant CTA or silently change approved brand. Explore accessible option with project owner in the relevant design task.

## Design production process
User manually starts each `UXD-*`, `DSD-*`, or `UID-*` task with Design Agent; task-local discussion and final owner design approval; only then unblock corresponding frontend coding work. Existing screenshots in planning are not approved regression baselines.
