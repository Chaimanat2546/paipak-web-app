# DSD-001 / foundation-2-desktop

4 พฤศจิกายน 2026 (Asia/Bangkok) · **รอตรวจรับ foundation เป็นชุด**

ปรับเอกสารทั้ง 4 ชิ้นตามคำสั่ง “ปรับให้ตรงกับที่เราคุยกันเมื่อกี้” โดยใช้ **A / Holiday Panorama / review-2** และ **Home Desktop-r8** ที่เจ้าของรับด้านหน้าตาแล้วเป็นฐาน เก็บข้อเสนอที่ยังไม่ได้ตรวจแยกจากค่าที่อ่านจาก Pencil งานนี้จัดเอกสารให้ตรงกัน ไม่มีการแก้แบบหรือแอปเพิ่ม

## เอกสารปัจจุบัน

| Deliverable | เนื้อหาและขอบเขต |
| --- | --- |
| [Visual Direction](../visual-direction.md) | A เป็นทิศทางปัจจุบัน; หลักฐาน G0/G1 และการรับ Home; B/C เป็นประวัติ |
| [Token sheet](../token-sheet.md) | สี spacing radii elevation motion และ focus แยก Locked / Home reference / Proposed / Open |
| [Typography](../typography-spec.md) | Mitr และ numeric roles ของ Home; ชื่อบ้านหนึ่งบรรทัด; แยก native-auto จาก line-height ที่ระบุ |
| [Responsive visual guidelines](../responsive-visual-guidelines.md) | Reference ที่ 1440px; สูตรสำหรับ Desktop อื่นยังเสนอ; Mobile พักไว้ |

ร่างเดิมทั้ง 4 ชิ้นและ README เดิมเก็บแบบ byte-for-byte พร้อม SHA-256 ใน [archive](../foundation-1/pre-a-alignment-2026-11-04/README.md) หลักฐานสีและฟอนต์ใน [foundation-1](../foundation-1/README.md) ยังอยู่ แต่ composition ของ B และ Mobile matrix เดิมไม่ใช่ข้อกำหนด A ปัจจุบัน

## สิ่งที่จัดให้ตรงกับข้อสรุปล่าสุด

- Hero เป็น panoramic ภาพเดียว หัวเรื่อง Mitr 96/600 ทั้งสองบรรทัด พร้อมแถบค้นหา 1040×88px; ตัดกฎ B inset/collage ออกจากข้อกำหนดปัจจุบัน
- ที่ 1440px ใช้ขอบเนื้อหา 56px, gap24px และการ์ด 314×362px สี่ใบเต็ม รูปสูง210px, radius16px ชื่อบ้านหนึ่งบรรทัด ข้อมูลไม่ครบไม่แสดงการ์ดบน Home
- คงเจ็ดหมวด การเลื่อนแถวทีละสองหลัง ปุ่มเลื่อนรูปที่ไม่แย่งภาพ focus ที่ตรวจแยกแล้ว และ Login modal สำหรับ Guest favorites
- ใช้ Footer-detail-r3 ที่เจ้าของเลือกกลับมา แผงภาษาขนาด224×152px และติดต่อ280×176px; ปลายทาง Footer Contact และข้อมูลจริงยังค้าง
- คงสีชมพู #FD6E88 กับข้อความขาว #FFFFFF ตามคำตอบล่าสุด โดย OPEN-001 ยังเปิด ไม่มีการเลือกเฉดใหม่หรืออ้างว่าผ่าน contrast
- ไม่ย้ายค่าของ Home ไปแทน planning defaults ของทุกหน้า และไม่รับรองจออื่นหรือ motion จากภาพนิ่ง

## หลักฐานและสถานะอนุมัติ

| เรื่อง | หลักฐาน | สถานะ |
| --- | --- | --- |
| G0-plan-2 | [Task Packet](../../../../tasks/design/DSD-001.md) / คำตอบ “อนุมัติเลย” หลังปรับเป็น3ตัวอย่าง | อนุมัติ scope เดิม |
| G1 A / review-2 | [manifest](../../../../tasks/design/manifest.yaml) / “ขอเปลี่ยนเป็นแบบ A” | ทิศทางปัจจุบัน; ไม่ใช่ final foundation |
| Home Desktop-r8 | [ภาพรวมและ source comparison](../f01-ui-3/home-guided-review/home-desktop-r8/README.md) | รับ combined appearance เท่านั้น |
| Numeric reference | [observed-values.json](observed-values.json) | อ่านจาก native ผ่าน Pencil MCP แบบ read-only ในรอบจัดเอกสาร |
| Guided decisions | [บันทึกทีละส่วน](../f01-ui-3/home-guided-review/README.md) | ใช้เฉพาะขอบเขตที่ตอบรับไว้ |
| CTA | [owner-choice](../f01-ui-3/home-guided-review/cta-brand-contrast-r1/owner-choice.json) / [contrast](../f01-ui-3/home-guided-review/cta-brand-contrast-r1/contrast-evidence.json) | คงเดิม 2.705343:1; OPEN-001 เปิด |
| UXD-001 | [edge flows / review-2](../../uxd-001/edge-flows.md) / [manifest พร้อมคำอนุมัติ](../../../../tasks/design/manifest.yaml) | Dependency อนุมัติแล้ว; รักษา UX/business rules |
| UXD-002 review-5 | [review-5](../../uxd-002/review-5/README.md) | ยังรอตรวจรับ ไม่แก้จากงานนี้ |
| foundation-2-desktop | เอกสาร4ชิ้นด้านบน | pending_owner_review |
| Mobile / จออื่น | [responsive guide](../responsive-visual-guidelines.md) | Mobile พัก; Desktop อื่นยังเสนอ |

## เกณฑ์ตรวจเอกสารและข้อค้าง

เอกสารต้องครอบคลุม typography, colors, spacing, radii, elevation, motion และ responsive layout; ใช้แบรนด์และ Mitr เดิม; trace numeric reference กลับ native ได้; แยกค่าเสนอและข้อค้าง; ลิงก์และ Task metadata ต้องชี้รุ่นเดียวกัน ผลตรวจทางเทคนิคอยู่ใน [verification.json](verification.json) ซึ่งตรวจเอกสาร ไม่ใช่ผลทดสอบผลิตภัณฑ์

ยังต้องตรวจรับ foundation version นี้แยก OPEN-001 ยังไม่ผ่านเกณฑ์ที่เกี่ยวข้อง จออื่น, text zoom, keyboard, screen reader, reduced motion และ runtime ยังไม่ทดสอบ ภาพ/โลโก้/เนื้อหาบ้านเป็นข้อมูลศึกษา ส่วน contact destinations และ data contracts ยังไม่รับรอง

**DSD-001 ยัง in progress** การจัดเอกสารนี้ไม่ปิด Task ไม่อนุมัติ Frontend และไม่เริ่ม DSD-002, UXD-002, UID หรือ Task อื่น

## ความต้องการ Home ที่หารือเพิ่มภายหลัง

เจ้าของยืนยัน [ความต้องการ TikTok และบทความ](../home-content-requirements.md) แล้ว ดู [ผลตรวจต่อ foundation](../home-content-foundation-impact.md) ซึ่งเป็น analysis ของขอบเขตเพิ่ม ยังไม่รวมเป็น UI/specification ที่อนุมัติในชุดนี้ ไม่แก้ค่าของ deliverables ทั้ง4ชิ้นหรือสถานะ pending_owner_review จากการยืนยัน requirement

หลังผลตรวจ เจ้าของขอเริ่ม UI จึงมี [Home-media-ui-r1](../home-media-ui-r1/README.md) เป็นร่างสำหรับตรวจภาพจริงก่อน final foundation acceptance ร่างนี้ยังไม่ถูกเลือกเป็น approved token/component หรือ Home version ใหม่

