# 07 — Homepage Review Example (Task-specific, illustrative)

**Status:** ตัวอย่างประกอบเท่านั้น ตามที่เจ้าของเลือกเมื่อ 3 พฤศจิกายน 2026 (Asia/Bangkok) ไม่ใช่ผลรีวิว Homepage เวอร์ชันปัจจุบัน ไม่ใช่ผล usability test และไม่ใช่แบบที่ได้รับอนุมัติ

ชุด governance v1.0 ได้รับอนุมัติเป็นมาตรฐานกลางเมื่อ 3 พฤศจิกายน 2026 การอนุมัตินั้นคงบทบาทของไฟล์นี้เป็นตัวอย่างประกอบ และไม่ได้รับรอง findings หรือเลือก direction A/B ให้ Homepage

**Source limitation:** เอกสารต้นทางไม่ได้ระบุ screenshot/version ที่ตรวจสอบได้ ข้อสังเกต HOME-01 ถึง HOME-05 และตัวเลือก A/B ด้านล่างจึงใช้สาธิตวิธีเขียน review เท่านั้น ห้ามนำไปยืนยันข้อบกพร่องของหน้าปัจจุบัน เลือก direction แทนเจ้าของ หรือเริ่ม UID-001 โดยอัตโนมัติ

**ภาพสถานการณ์สำหรับตัวอย่าง:** มี Hero ที่ภาพบ้านและ Search กล่องใหญ่, หมวดหมู่ icon/label, หลาย section รายการบ้านแบบ 4 columns และ carousel controls บนการ์ด

## Findings (illustrative, ไม่ใช่ผล usability test)

| ID | Priority | Finding | Required outcome |
|---|---|---|---|
| HOME-01 | High | Search/Hero ยังไม่สร้างลำดับสายตาชัด | จุดเริ่มค้นหาอ่านออกโดยเร็วและไม่บัง listing |
| HOME-02 | High | ราคาและชื่อบ้านยังน้ำหนักใกล้ metadata | Title/price สแกนและเปรียบเทียบได้เร็ว |
| HOME-03 | Medium | หมวด icon-label ดูเบาและอาจไม่ชวนกด | State/affordance ชัด โดยไม่เพิ่มความรก |
| HOME-04 | Medium | Grid/section คล้ายกันซ้ำ | มี visual rhythm ที่ช่วยแยกจุดประสงค์ sections |
| HOME-05 | High | ยังไม่เห็น mobile และ edge states จาก screenshot | ส่ง mobile + long/missing-data states |

## What not to prescribe

ไม่บังคับ Hero gradient, glassmorphism, wave bottom, shadow ทุกใบ หรือ chip ทุกหมวด เพราะเป็น **วิธี** ไม่ใช่ **ผลลัพธ์**; Agent ต้องเสนอ solution ที่ตอบ problem และอธิบาย trade-off

## Example task ACs

- [ ] เข้า Home โดยไม่กรอก search แล้วยังเห็นรายการบ้านและเข้า Detail ได้
- [ ] Search fields optional ตาม requirement
- [ ] ชื่อบ้าน/ราคา/ทำเล/ความจุอ่านได้ชัดในรูป card ที่มีข้อความยาว
- [ ] Carousel dots และ arrows มี states/interaction spec ที่ไม่ขัดกัน
- [ ] Category selected/focus-visible ดูออก
- [ ] Mobile มีลำดับเนื้อหาที่เหมาะสมและไม่ overflow
- [ ] สีบนภาพ/ปุ่มผ่านการตรวจ contrast และ state ที่เกี่ยวข้อง

## Example G1 direction comparison

**A — Cinematic discovery:** ใช้ imagery/typography เล่า vacation โดยยังเปิดทางเข้ารายการบ้านเร็ว; ความเสี่ยงคือ Hero กินพื้นที่

**B — Editorial marketplace:** เน้นบ้านและราคาเป็นพระเอก ใช้ typography/section rhythm ชัด; ความเสี่ยงคือบุคลิกอาจแห้ง หาก imagery และ accent อ่อนเกิน

สองแบบนี้เป็น **ตัวเลือกให้ทดสอบ/ให้คนเลือก** ไม่ใช่คำสั่งให้ Agent ตัดสินเอง
