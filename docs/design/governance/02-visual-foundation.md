# 02 — Visual Foundation & Design System Rules

**Status:** Approved project standard v1.0 · **Approved on:** 2026-11-03 (Asia/Bangkok) การอนุมัตินี้รับรองกติกา Visual Foundation ส่วน Design Tokens, Component specs และฟอนต์เสริมแต่ละเวอร์ชันยังต้องได้รับอนุมัติใน Task ที่เกี่ยวข้อง

## 1. Brand anchors

| Token role (suggested) | Value | Intended use |
|---|---|---|
| Brand Navy | `#072D59` | เนื้อหาสำคัญ/heading/primary brand |
| Brand Pink | `#FD6E88` | selected accents / conversion emphasis เมื่อ contrast ผ่าน |
| Brand Light | `#DBF2FC` | selective quiet surfaces / visual relief |

**ห้าม** ใช้ pink เป็นสีตัวอักษรหรือพื้นหลัง CTA พร้อมข้อความขาวโดยสรุปว่าผ่าน accessibility โดยไม่ทดสอบ contrast จริง สี neutrals, semantic (success/error/warning), overlays และ focus rings ต้องนิยามพร้อมตรวจภายหลัง

## 2. Visual language — what to design

- **Type:** ใช้ Mitr เป็นฟอนต์หลักตามข้อสรุปเดิม กำหนด heading scale, body scale, line height และ weights โดยดูการอ่านภาษาไทยจริง เสนอฟอนต์เสริมได้พร้อมบทบาท ตัวอย่างคู่กับ Mitr และผลต่อการอ่าน/การโหลด แต่ต้องให้เจ้าของอนุมัติชื่อฟอนต์และขอบเขตการใช้ก่อนใช้ในแบบหรือ frontend; ยังไม่มีฟอนต์เสริมใดได้รับอนุมัติจากชุดนี้
- **Spacing:** ใช้ spacing scale ที่สอดคล้องกัน; อนุญาต deliberate exceptions เฉพาะจุดนำสายตาหลัก
- **Radii:** ตกลงระดับของ field/card/panel; หลีกเลี่ยงทั้ง sharp dashboard และ pill ทุกส่วน
- **Elevation:** อย่างน้อย 3 ระดับเชิงหน้าที่ `flat`, `raised`, `overlay`; ไม่บังคับใช้ shadow ทุก Card
- **Borders:** ใช้ border เมื่อจำเป็นต่อการแยก surface/focus ไม่ใช่แทน hierarchy ทั้งหน้า
- **Imagery:** รูปบ้านจริงต้องเป็น hero ของ listing; ระบุ aspect ratio/crop/safe areas/placeholder/fallback
- **Icons:** ใช้ icon family เดียวกัน, ขนาดและ stroke สม่ำเสมอ; ทุก icon ที่มีหน้าที่ต้องมี accessible label
- **Motion:** feedback สั้นและมีเหตุผล, เคารพ reduced-motion, ไม่ใช้ autoplay เป็นค่าเริ่มต้นโดยไม่มีเหตุผล

## 3. Page-specific expression ≠ global token

เอกลักษณ์ของ Home อาจใช้ภาพ Hero ใหญ่และ floating search แต่ Search Results ไม่จำเป็นต้องมี Hero; Checkout ต้องเน้นความชัด ความปลอดภัย และความต่อเนื่องมากกว่าการตกแต่ง

**Global tokens** = สี ฟอนต์ spacing/radius/elevation และ states; **Page patterns** = การวางองค์ประกอบตามงานของหน้านั้น

## 4. Core component contract

ทุก Component ที่ส่งมอบต้องระบุ:

| Field | Example |
|---|---|
| Name | `PropertyImageCarousel` |
| Intent | เลือกดูภาพก่อนเข้า Detail |
| Anatomy | image, badge, favorite, previous/next, dots |
| Variants | desktop/mobile, compact/standard (ถ้ามี) |
| States | default, hover, focus-visible, loading, disabled/empty ตามจริง |
| Behavior | click arrows/dots, swipe, edge behavior |
| Accessibility | keyboard, aria labels, focus, reduced motion |
| Responsive | controls/touch areas/image crop |
| Data constraints | 0/1/many images, long name, no price, missing metadata |

**Search examples:** `LocationCombobox`, `DateRangePicker`, `GuestCounter`; แยก field label, hint, placeholder, selection, opened overlay, validation, reset/clear, no-results, outside click และ mobile presentation

## 5. Card information priority (starting hypothesis)

1. ภาพบ้านพักที่มีคุณภาพ
2. ชื่อบ้าน
3. ราคาเริ่มต้นต่อคืนและคุณสมบัติ/ข้อจำกัดของราคาที่เกี่ยวข้อง
4. ทำเล + รองรับจำนวนคน
5. ข้อมูลอื่นที่ยืนยันแล้ว เช่นจำนวนห้องนอน/สิ่งอำนวยความสะดวก

การวางลำดับจริงขึ้นอยู่กับบริบทและผลทดสอบ ห้ามสร้าง rating/reviews, discount หรือ scarcity ที่ไม่มีข้อมูลรองรับ

## 6. State coverage baseline

- Buttons: default/hover/focus/pressed/disabled/loading (เฉพาะที่เกี่ยวข้อง)
- Inputs: empty/filled/focused/expanded/selected/invalid/disabled
- Cards: loading, unavailable info, image fallback, interaction focus
- Overlays: opened, closed, dismiss, keyboard/focus handling
- Feedback: empty, success, error, retry

## 7. Visual direction exploration protocol

ออกอย่างน้อย 2 directions **เมื่อ Art Direction ยังไม่ได้รับการอนุมัติ** โดยต่างกันด้าน composition, type hierarchy, image treatment หรือ visual rhythm ไม่ใช่แค่ swap สี; คง Mitr เป็นหลัก สีแบรนด์ selected layouts และ UX/business rules ที่อนุมัติแล้ว บอก trade-offs และให้เจ้าของเลือกหนึ่ง direction ที่ G1 ก่อนทำ Wireframe ที่ G2 ตาม `05-design-workflow.md` ห้าม Agent เลือกอนุมัติเองหรือรื้อ direction ที่ล็อกไว้โดยไม่มีคำขอเปลี่ยน

## 8. Design token governance

เสนอ token ใหม่พร้อมชื่อ/role/usage/contrast/result/impact; ห้ามสร้าง arbitrary one-off values จำนวนมากโดยไม่มีเหตุผล; ทุก change ส่งผลต่อ shared components ต้อง review ก่อน merge เป็น foundation
