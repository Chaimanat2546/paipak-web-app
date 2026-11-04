# 03 — Page Composition Guidelines

**Status:** Approved project standard v1.0 · **Approved on:** 2026-11-03 (Asia/Bangkok) แบบของแต่ละ Task ยังต้องให้เจ้าของอนุมัติก่อนทำ Frontend

## กฎตั้งต้น: เรียงตามงาน ไม่เรียงตาม template

ก่อนวางหน้าให้เขียน **task, decision, content priority, primary CTA, page entry point, exit path** แล้วกำหนด hierarchy จากข้อมูลนั้น

## Workflow การจัด Composition

1. **Content inventory:** รวบรวมข้อความและข้อมูลที่ต้องมี รวมกรณีข้อมูลจริงไม่ครบ
2. **Priority tiers:** `Primary` = ต้องเห็นเร็ว; `Secondary` = ช่วยเลือก; `Tertiary` = ขยายข้อมูล
3. **Page outline:** ระบุ section order และเหตุผล; อย่าเริ่มจากทำภาพตกแต่ง
4. **Low-Fi:** วางส่วนสำคัญเป็น black/grey; ตรวจว่ามี focal point แม้ไม่มีสี
5. **Compare alternatives:** เปรียบเทียบอย่างน้อย 2 ลำดับถ้ายังไม่แน่ว่าควรให้ category หรือ listing มาก่อน
6. **High-Fi:** เติมภาพและ visual treatment อย่างมีเจตนา
7. **Responsive:** ตรวจลำดับและความหนาแน่นใหม่ใน mobile

## ความสำคัญบน Homepage (baseline ไม่ใช่ Layout บังคับ)

- ผู้ใช้เริ่มสำรวจบ้านได้ทันทีโดยไม่กรอกฟอร์ม
- Search และรายการพูลวิลล่าต้องเข้าถึงได้ง่าย; hero ไม่ควรผลัก listings ออกไปไกลโดยไม่จำเป็น
- Category เป็นทางลัด ไม่ใช่การบังคับให้ต้องเลือกหมวด
- Property cards ต้องอ่านราคา/ชื่อ/ทำเล/ความจุได้ง่ายและรูปภาพช่วยตัดสินใจ
- Curated sections ต้องมีความแตกต่างเชิงวัตถุประสงค์ ไม่ใช่โครงเดิมซ้ำโดยเปลี่ยนหัวข้ออย่างเดียว

## Pattern guidance by page

| Page | Primary goal | Compose around | Avoid |
|---|---|---|---|
| Home | discover immediately | search + curated listings | hero-only first screen |
| Search Results | scan/compare/filter | result count, filters, sortable cards | decorative intro large |
| Detail | evaluate a villa | gallery, key facts, price/booking entry | key booking info buried |
| Booking/Checkout | complete booking confidently | booking summary, forms, payment state | distraction and excessive decoration |
| Favorites | revisit saved options | recognizable cards, empty state | unclear login state |
| Account / My Bookings | manage existing orders | status, action, support | marketplace-style hero |

## Visual hierarchy methods (choose intentionally)

- **Position:** จุดเริ่มอ่านตาม reading pattern และการวางจุดสำคัญ
- **Type:** แตกต่างทาง size/weight/line-height ไม่ใช่แค่ bold ทุกอย่าง
- **Contrast:** high-contrast เมื่อจำเป็น ไม่ใช้ accent สีหลายจุดแข่งกัน
- **Whitespace:** grouping ที่เหมาะสมช่วยลดความแน่น
- **Imagery:** aspect ratio และ crop ช่วยทำให้ card scan ได้
- **Depth:** ใช้ชั้นพื้นผิวเมื่อมีหน้าที่แยก interactive/search overlays
- **Rhythm:** สลับความหนาแน่นและรูปแบบ section อย่างตั้งใจ โดยไม่รบกวนความต่อเนื่อง

## Responsive checks

Desktop / tablet / mobile ต้องบอก: section order, breakpoints ตามเนื้อหาที่แตก, listing columns, horizontal scrolling, filters/modal behavior, sticky CTA, touch targets, menu behavior, carousel visibility. **อย่าคิดว่า mobile คือย่อ desktop ลง**

## Density and real content test

ทดสอบชื่อบ้านยาว 2 บรรทัด, ราคาไม่พร้อม, 1 รูป, ไม่มีรูป, 0 ผลลัพธ์, หมวดชื่อยาว, ผู้ใช้ตัวอักษรขยาย, viewport แคบ และ 200% zoom

## Anti-pattern review

หากหน้า “เรียบเกิน”: ให้แก้ก่อนตามลำดับ (1) hierarchy (2) information grouping (3) scale/spacing (4) imagery (5) expressive brand treatment; **ห้ามแก้เพียงเติม shadow/gradient**
