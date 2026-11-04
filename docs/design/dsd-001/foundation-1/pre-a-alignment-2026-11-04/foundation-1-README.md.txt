# DSD-001 · foundation-1

> เก็บเป็นหลักฐานร่างก่อนเปลี่ยนจาก B เป็น A เจ้าของเลือก A / review-2 ในภายหลังด้วยข้อความ “ขอเปลี่ยนเป็นแบบ A” สี/ฟอนต์/CTA evidence ยังเก็บไว้ แต่ composition-specific specifications ต้องปรับให้ตรง A ก่อน final approval ดู [แบบ Pencil ปัจจุบัน](../pencil-A-1/README.md)

3 พฤศจิกายน 2026 (Asia/Bangkok) · **PROPOSED / รอ final foundation approval**

Direction **B / Villa Journal / review-2** ผ่าน G1 จาก owner selection ในแชตนี้แล้ว ชุดนี้จัดทำต่อภายใต้ G0-plan-2 และไม่เริ่ม Task อื่น

## Deliverables

| เอกสาร | สถานะ |
|---|---|
| [visual-direction.md](../visual-direction.md) | G1 อนุมัติ B / review-2; สถานะส่วน foundation แยก |
| [token-sheet.md](../token-sheet.md) | proposed / foundation-1 |
| [typography-spec.md](../typography-spec.md) | proposed / foundation-1 |
| [responsive-visual-guidelines.md](../responsive-visual-guidelines.md) | proposed / foundation-1 |

## หลักฐานสำหรับตรวจ

- [ภาพเทียบ CTA รอบแรก](cta-options.png): เก็บเป็นประวัติ ยังไม่ใช่คู่สีที่เจ้าของต้องการ
- [ภาพปุ่มชมพูข้อความขาว CTA-review-2](pink-white-options.png): ประวัติการเปรียบเทียบ เจ้าของเลือกชมพูเดิมในแถวอ้างอิง ไม่เลือกสามเฉดเข้ม
- [CTA-review-3 selection record](cta-selection.json): เจ้าของยืนยันพื้น #FD6E88 / ข้อความ #FFFFFF เป็น visual reference; OPEN-001 ยังเปิด
- [Pink/White contrast evidence](pink-white-contrast.json): ผลคำนวณเฉด CTA ทั้งสามและสีแบรนด์เดิม; ไม่เปลี่ยน brand.pink
- [Mitr specimen](typography-specimen.png): render จากไฟล์ Mitr 400/500/600 ที่ระบุใน source record บน Windows GDI+; ไม่รับรอง font-loading ใน browser
- [Font sources และ SHA-256](font-sources.json) · [SIL OFL](fonts/OFL.txt)
- [Color contrast evidence](contrast-evidence.json): สูตร sRGB, เก็บ unrounded ratio/ผล threshold และข้อจำกัด
- [Responsive design matrix](layout-matrix.json): คำนวณพื้นที่/column targets เท่านั้น ไม่ใช่ screenshot หรือ responsive runtime pass
- [Render evidence](render-evidence.json): loaded families และ text measurement ของภาพตัวอย่าง
- [render-review.ps1](render-review.ps1): สคริปต์สร้างหลักฐานภาพในโฟลเดอร์นี้ ไม่ใช่ application/production CSS

## Acceptance review

| เกณฑ์ | ผล |
|---|---|
| Brand anchors เดิม | คง Navy/Pink/Light Blue/White; semantic roles ยัง proposed |
| Mitr primary | คงเดิม; specimen ใช้ไฟล์จริง; ไม่มี supplementary font |
| Direction ก่อน Wireframe | G1 B / review-2 อนุมัติแล้ว; ไม่แก้/อนุมัติ UXD-002 review-5 |
| ข้อกำหนด foundation ครบหมวด | typography/colors/spacing/radius/elevation/motion/responsive ระบุในชุดเสนอ |
| CTA visual choice | เจ้าของเลือก #FD6E88 / #FFFFFF แล้ว; สามเฉดเข้มไม่เลือก |
| CTA contrast | 2.705343:1 สำหรับคู่สีทึบที่เลือก; OPEN-001 ยังเปิดและยัง block acceptance ตามเดิม |
| Final foundation approval | pending; ยังไม่ถือว่า DSD-001 complete หรือ frontend-ready |
| Browser/accessibility/business runtime | ไม่ได้ทดสอบ; ไม่มีการรับรองจากภาพหรือคำนวณนี้ |

## สิ่งที่รอเจ้าของตัดสินใจ

คู่สีและเฉด CTA visual reference ได้ข้อสรุปแล้ว ไม่ถามให้เลือกเฉดเข้มซ้ำ งานที่ยังเหลือคือการตรวจรับ `foundation-1` ทั้งชุดและการจัดการ OPEN-001 ก่อนผ่าน acceptance ที่เกี่ยวข้อง การเลือก B และ CTA visual reference ไม่อนุมัติ foundation ทั้งชุดหรือ frontend ล่วงหน้า

## ขอบเขตที่คงไว้

ไม่แก้ภาพ B ที่เลือกเพื่อทำให้เหมือนผ่านการตรวจทุก state ไม่เปลี่ยน OPEN-001/002/005 เป็น resolved ไม่แก้ UI/CSS/backend/dependencies ของแอป ไม่ deploy และไม่เริ่ม UXD-002, DSD-002 หรือ UID tasks
