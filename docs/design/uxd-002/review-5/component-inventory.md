# UXD-002 review-5 — Component inventory and screen acceptance

วันที่ 3 พฤศจิกายน 2026 (Asia/Bangkok) · รอตรวจรับแบบ ไม่ใช่ผลทดสอบ runtime

ใช้คู่กับ [interaction-specification](../interaction-specification.md), [UX requirements](../ux-requirements.md) และ [owner confirmations](../review-decisions.md) Component ID เป็นชื่อเชิงความหมายสำหรับ wireframe; ไม่สร้าง design-system specification แทน DSD-002

Required/Optional: location/date/guests ในการค้นหาเป็น optional; ข้อมูลที่จำเป็นก่อนจองต้องครบก่อนเข้าสู่ Member Checkout; ตัวกรองราคาและห้องนอนเป็น optional; ข้อกำหนด required ของข้อมูลสมาชิกและ password policy ยังต้องยืนยันในงาน domain ที่เกี่ยวข้อง ไม่อนุมานจากตัวอย่างฟอร์ม

## WF-01 — Home

[Desktop](desktop/wf-01.png) · [Mobile](mobile/wf-01.png)

- Components: LOCATION-01, DATE-01, GUEST-01, CATEGORY-01, CAROUSEL-01
- Entry: Direct / Logo
- Exit: Search → WF-02; Card → WF-03; Favorite Guest → WF-05
- States: Default; picker states → WF-02A/WF-02P
- Trace: I-01–05 / UXR-01,07,19
- Acceptance: แสดงบ้านได้โดยไม่เลือกวันหรือ login; Desktop 4 columns
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-01N — Mobile navigation

[Mobile](mobile/wf-01n.png)

- Components: NAV-01
- Entry: ปุ่มเมนูจากหน้าปัจจุบัน
- Exit: Close → origin; เมนู → route ที่ระบุ
- States: Open menu; Member ใช้ account entry
- Trace: I-19–22 / UXR-15–18
- Acceptance: เมนูครบและมีทางปิด; ไม่เติม URL/contact จริง
- Responsive: Mobile supporting state; viewport states ระบุ 390×844 ในภาพ

## WF-02 — Search Results

[Desktop](desktop/wf-02.png) · [Mobile](mobile/wf-02.png)

- Components: LOCATION-01, FILTER-PRICE-01, BEDROOM-MIN-01, BEDROOM-MAX-01, CAROUSEL-01, PAGINATION-01
- Entry: Home / Category / Search URL
- Exit: Card → WF-03; Mobile filters → WF-02F
- States: Results; empty/loading/error → WF-10
- Trace: I-01–07 / UXR-08,09,19,21
- Acceptance: Suggested Search Chips; Apply จึงเปลี่ยนผล; ช่วงห้องนอน −/+
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-02A — Location autocomplete

[Desktop](desktop/wf-02a.png) · [Mobile](mobile/wf-02a.png)

- Components: LOCATION-01, LOCATION-LIST-01
- Entry: Location field ใน WF-01/WF-02
- Exit: เลือกคำแนะนำ → origin พร้อมค่า; Escape → origin
- States: Open / Selected / No suggestions
- Trace: I-25 / UXR-19
- Acceptance: ชนิด autocomplete ชัด; วัน/จำนวนยัง optional
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-02F — Mobile filter drawer

[Mobile](mobile/wf-02f.png)

- Components: FILTER-PRICE-01, BEDROOM-MIN-01, BEDROOM-MAX-01, FILTER-APPLY-01
- Entry: ตัวกรองใน WF-02
- Exit: Apply → Results; Close → Applied ล่าสุด
- States: Open; draft edits
- Trace: I-06 / UXR-08,21,22
- Acceptance: ทิ้งค่าที่ยังไม่ Apply เมื่อปิด; ต่ำสุด–สูงสุดแยก counter
- Responsive: Mobile supporting state; viewport states ระบุ 390×844 ในภาพ

## WF-02P — Search date and guest pickers

[Desktop](desktop/wf-02p.png) · [Mobile](mobile/wf-02p.png)

- Components: DATE-01, GUEST-01, PET-01
- Entry: Search fields
- Exit: Save/search → origin/Results; Clear → unset
- States: Calendar open / Range selected / Counter expanded
- Trace: I-01,02 / UXR-01,06
- Acceptance: คนรวม + pets แยก; error → WF-10F; limits จริงยังเปิด
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-03 — Property detail

[Desktop](desktop/wf-03.png) · [Mobile](mobile/wf-03.png)

- Components: GALLERY-01, DATE-01, GUEST-01, BOOK-01, BOOK-STICKY-01
- Entry: Card / direct URL
- Exit: Book Guest → Auth; Member → revalidate → WF-04
- States: Default; availability/price → WF-03S
- Trace: I-08,24 / UXR-02,10,20,25
- Acceptance: ปุ่มหลักจองที่พักนี้; ราคาเริ่มต้นไม่ใช่ quote
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-03V — Mobile detail viewport

[Mobile](mobile/wf-03v.png)

- Components: BOOK-STICKY-01, PRICE-DATE-01
- Entry: WF-03 ใน viewport 390×844
- Exit: เพิ่ม/แก้วัน → WF-03D; Book → ตาม I-08
- States: Fixed viewport; no dates selected
- Trace: I-08,24 / UXR-20,25
- Acceptance: แถบจองไม่บังเนื้อหาหรือ focus; Runtime ยังไม่ทดสอบ
- Responsive: Mobile supporting state; viewport states ระบุ 390×844 ในภาพ

## WF-03D — Mobile date editor

[Mobile](mobile/wf-03d.png)

- Components: DATE-EDITOR-01, DATE-SCROLL-01, DATE-SAVE-01
- Entry: แก้วันใน Detail/Review; ข้อมูลวันยังไม่ครบ
- Exit: Save → origin และตรวจราคาใหม่; Close → origin
- States: Near-fullscreen / Range selected
- Trace: I-24 / UXR-25
- Acceptance: Calendar เกือบเต็มจอพร้อม Close/Clear/Save; ไม่ยืนยัน booking
- Responsive: Mobile supporting state; viewport states ระบุ 390×844 ในภาพ

## WF-03S — Availability and quote states

[Desktop](desktop/wf-03s.png) · [Mobile](mobile/wf-03s.png)

- Components: BOOK-01, PRICE-SUMMARY-01
- Entry: ตรวจวันว่าง/ราคาใน WF-03
- Exit: Available → Auth/revalidate/Review; ไม่พร้อม → แก้วัน/retry
- States: Available / Unavailable / Unknown / Price changed
- Trace: I-08,11 / UXR-10
- Acceptance: แยกไม่ว่างกับตรวจไม่ได้; ราคาเปลี่ยนต้องตรวจใหม่
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-04 — Member booking review

[Desktop](desktop/wf-04.png) · [Mobile](mobile/wf-04.png)

- Components: STAY-SUMMARY-01, REVIEW-DATES-01, REVIEW-GUESTS-01, MEMBER-CONTACT-01, PRICE-SUMMARY-01, PAY-OPEN-CONFIRM-01
- Entry: Auth สำเร็จ หรือ Member จาก Detail หลัง revalidate
- Exit: แก้วัน/จำนวน → revalidate; ชำระเงิน → WF-04C
- States: Review; missing-field/error → WF-10F
- Trace: I-11,23 / UXR-11,20,24
- Acceptance: เข้าสู่ระบบก่อนหน้านี้; ไม่กรอก contact ซ้ำ; สรุปก่อน action
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-04C — Confirm before payment

[Desktop](desktop/wf-04c.png) · [Mobile](mobile/wf-04c.png)

- Components: CONFIRM-BOOKING-01
- Entry: กดชำระเงินจาก WF-04
- Exit: Confirm → WF-04P; Close/แก้ไข → WF-04
- States: Desktop modal / Mobile bottom sheet
- Trace: I-23 / UXR-24
- Acceptance: แสดงวัน/จำนวน/ยอดครบ; ยังไม่เรียกเก็บจริงจากการเปิด dialog
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-04P — Payment step

[Desktop](desktop/wf-04p.png) · [Mobile](mobile/wf-04p.png)

- Components: PAYMENT-AREA-01, PRICE-SUMMARY-01
- Entry: ยืนยันจาก WF-04C
- Exit: Back → Review; status ที่ตรวจสอบได้ → WF-07/WF-10
- States: Payment placeholder; pending/failure/cancel → WF-10
- Trace: I-12,13 / UXR-12,24
- Acceptance: ไม่คัดลอก Klarna/ผ่อนชำระ; OPEN-003 ยังเปิด
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-05 — Login

[Desktop](desktop/wf-05.png) · [Mobile](mobile/wf-05.png)

- Components: AUTH-EMAIL-01, AUTH-PASSWORD-01, AUTH-SWITCH-01
- Entry: Header / Book Guest / Favorites Guest
- Exit: Success → active origin และ revalidate; Cancel → origin
- States: Login default; inline error → WF-10F
- Trace: I-09,10,27 / UXR-02–05,20,23
- Acceptance: Login-first; ไม่กู้ intent หลัง reload/close/expiry
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-05R — Register

[Desktop](desktop/wf-05r.png) · [Mobile](mobile/wf-05r.png)

- Components: REGISTER-PASSWORD-01, REGISTER-CONFIRM-01, AUTH-SWITCH-01
- Entry: สลับจาก Login
- Exit: Success → active origin; Cancel → origin
- States: Register; mismatch error → WF-10F
- Trace: I-09,10,27 / UXR-02–05,23
- Acceptance: ฟิลด์เป็นตัวอย่าง; ไม่ล็อก domain validation policy
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-06 — My bookings

[Desktop](desktop/wf-06.png) · [Mobile](mobile/wf-06.png)

- Components: BOOKING-TABS-01, BOOKING-STATUS-01
- Entry: Member account
- Exit: รายการ → WF-07; empty → WF-10
- States: Upcoming / Past / Cancelled tab
- Trace: I-14 / UXR-12
- Acceptance: booking/payment status แยก; ชื่อแท็บไม่เพิ่ม cancellation service
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-07 — Booking detail and confirmation

[Desktop](desktop/wf-07.png) · [Mobile](mobile/wf-07.png)

- Components: BOOKING-STATUS-01, PAYMENT-STATUS-01, STAY-SUMMARY-01
- Entry: My bookings / payment return หลังตรวจสถานะ
- Exit: ตรวจสถานะอีกครั้ง / My bookings / Search
- States: Pending example; verified success/failure ตามข้อมูลจริง
- Trace: I-12,13 / UXR-12
- Acceptance: ไม่ยืนยันธุรกรรมจาก redirect อย่างเดียว
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-08 — Favorites

[Desktop](desktop/wf-08.png) · [Mobile](mobile/wf-08.png)

- Components: CAROUSEL-01, FAVORITE-01
- Entry: Member account; Guest ผ่าน Auth
- Exit: Card → Detail; remove → อยู่หน้าเดิม; ศูนย์ → Empty
- States: Saved / Removed / Empty ใน WF-10
- Trace: I-15 / UXR-03,13,22
- Acceptance: เอาออกทันที ไม่มี confirm หรือ Undo; จำนวนตรงกับการ์ดที่แสดง
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-09 — Member profile

[Desktop](desktop/wf-09.png) · [Mobile](mobile/wf-09.png)

- Components: PROFILE-NAME-01, PROFILE-EMAIL-01, PROFILE-SAVE-01
- Entry: Member account
- Exit: Save → same page; account nav → Bookings/Favorites
- States: Default; save success/error → WF-10/WF-10F
- Trace: I-16,27 / UXR-11,13,23
- Acceptance: Modern Split; คงค่าที่แก้เมื่อผิดพลาด
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-10 — Contextual states

[Desktop](desktop/wf-10.png) · [Mobile](mobile/wf-10.png)

- Components: CONTEXT-STATE-01, PAYMENT-CANCELLED-01
- Entry: แต่ละ context เมื่อเกิดเหตุ
- Exit: Retry/แก้เงื่อนไข/เลือกข้อมูลใหม่/ดูสถานะรายการเดิม
- States: Loading / Empty / Error / Expired intent / Pending / Failed / Cancelled / Success feedback
- Trace: I-13,17,18 / UXR-05,12
- Acceptance: ไม่รวมเป็น route ใหม่; no auto payment retry
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-10F — Inline form validation states

[Desktop](desktop/wf-10f.png) · [Mobile](mobile/wf-10f.png)

- Components: FORM-ERROR-01, AUTH-EMAIL-01, REGISTER-CONFIRM-01, PROFILE-SAVE-01, DATE-01
- Entry: Auth/Profile/Search field error
- Exit: แก้ช่องที่ผิดแล้วดำเนินการต่อ / retry ใน context
- States: Email error / Password mismatch / Save error / Missing checkout
- Trace: I-27 / UXR-23
- Acceptance: ตรวจขณะพิมพ์ Client + Server ตอนส่ง; inline text ไม่ใช้สีอย่างเดียว
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## WF-10I — Carousel edge and image states

[Desktop](desktop/wf-10i.png) · [Mobile](mobile/wf-10i.png)

- Components: CAROUSEL-01, CAROUSEL-NEXT-01, IMAGE-ERROR-01
- Entry: Listing image
- Exit: Dots/arrows/swipe → same card; Card link → Detail
- States: Last photo / Single photo / Image failure
- Trace: I-04,26 / UXR-26
- Acceptance: ไม่วน/ไม่ autoplay; ภาพเดียวไม่มี controls; failed ไม่มี Retry
- Responsive: Desktop 1440px / Mobile 390px; state sheets จัดแนวนอนบน Desktop และเรียงลงบน Mobile

## Designer proposals / domain deferrals

- D-01: ปิดใช้งานลูกศรย้อนกลับที่รูปแรกให้สมมาตรกับขอบรูปสุดท้าย; เจ้าของยืนยันขอบรูปสุดท้ายโดยตรง ส่วนความสมมาตรนี้เป็นข้อเสนอของผู้จัดทำรอตรวจแบบ
- D-02: Close date editor กลับ origin โดยไม่ยืนยัน booking; วิธีทิ้งหรือคืน draft วันที่ที่ยังไม่ Save ต้องตรวจรับในแบบ ไม่เหมารวมกับคำตอบเรื่อง Filter Drawer
- D-03: พฤติกรรมเมื่อพิมพ์ location แล้วไม่เลือก suggestion, จำนวนคำแนะนำ และการจัดอันดับ ยังไม่กำหนดเป็น business/query contract
- D-04: ค่า 3–5 ห้อง, วันที่ 10–12 พ.ย., 8 คน, 0 pets และราคาทั้งหมดเป็น fixture ไม่ใช่ขอบเขตต่ำสุด/สูงสุดหรือ availability จริง
- D-05: วิธีแก้ contact ที่ขาดและฟิลด์ required ตามระบบสมาชิกจริงยังเป็นงาน domain; ภาพแสดงการใช้ข้อมูลที่มีแล้วและทางแก้เฉพาะจุด
- D-06: ความสูง Hero เดิมคงไว้ตามทิศทางเดิม รอบนี้ไม่ได้ยืนยันข้อเสนอให้ย่อ Hero เป็นคำสั่งใหม่
- OPEN-001 ถึง OPEN-007 ยังคงเปิด ไม่รับรอง contrast ของ final CTA, provider, runtime, hold หรือ catalog authority

ภาพทั้งหมดเป็น static wireframes; ไม่มีการทดสอบ tab/focus/scroll/validation จริงหรือ booking/payment E2E
