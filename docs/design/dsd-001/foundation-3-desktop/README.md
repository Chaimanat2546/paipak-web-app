# DSD-001 / foundation-3-desktop

> บันทึกหลังเปลี่ยน Hero: เอกสารหลักปัจจุบันมีข้อกำหนดภาพสำเร็จรูปเพิ่มเติมแล้ว การอนุมัติ foundation-3 เดิมอ้างฉบับที่ตรึงไว้ใน [archive ก่อนแก้ Hero](pre-hero-reconciliation-2026-11-05/README.md) ไม่ขยายไปอนุมัติ [ร่าง Hero-r2](../hero-banner-carousel-r2/README.md) หน้าตา/สถานะใหม่ยังรอเจ้าของตรวจ หลักฐานอนุมัติและ reviewed content เดิมไม่แก้

5 พฤศจิกายน 2026 (Asia/Bangkok) · **อนุมัติสเปก Desktop พร้อมคงรายการค้างแล้ว (R3)**

จัดเอกสารทั้งสี่ให้ตรงกับ A / Holiday Panorama / review-2 และ [Home Desktop-r15 ที่รับภาพรวมแล้ว](../home-desktop-r15/owner-home-acceptance.json) รอบนี้เป็นการปรับ specification ไม่มี UI ใหม่ ไม่มี CSS/tokens เข้าแอป และยังไม่อนุมัติ Frontend

## เอกสารที่รับในขอบเขต Desktop

| Deliverable | สิ่งที่ปรับในรุ่นนี้ |
| --- | --- |
| [Visual Direction](pre-hero-reconciliation-2026-11-05/visual-direction.md) | ใช้ Home-r15 เป็นฐาน รวม TikTok/บทความ/Footer รุ่นที่รับแล้ว คงทิศทาง A |
| [Token sheet](pre-hero-reconciliation-2026-11-05/token-sheet.md) | เพิ่ม roles ของสื่อ/แผงอ่าน/ช่องทาง Footer และ local motion ที่รับ แยก planning tokens ที่ยังเสนอ |
| [Typography](pre-hero-reconciliation-2026-11-05/typography-spec.md) | เพิ่ม Mitr roles ของ TikTok/บทความ/ช่องทางติดต่อ อัปเดต source IDs ของ Home-r15 |
| [Responsive guidelines](pre-hero-reconciliation-2026-11-05/responsive-visual-guidelines.md) | เพิ่ม geometry ของสื่อ/Footer ปัจจุบัน คงการรับเฉพาะ Desktop1440; widthอื่น/Mobileยังไม่รับรอง |

## สถานะที่อ่านแยกกัน

- Locked: แบรนด์ Navy #072D59 / Light Blue #DBF2FC / Pink #FD6E88 / White, Mitr และ UX/business rules ที่รับแล้ว
- Home reference: ค่าของ Home-r15 และ states/interaction ที่รับเฉพาะจุด ไม่แทน shared system ทุกหน้า
- Proposed: ค่า mapping/generic motion/สูตรจออื่นที่ยังไม่รับ ไม่เปลี่ยนเป็น approved เพราะรับเอกสารที่บันทึกข้อเสนอนั้น
- Open/deferred: ข้อค้างที่ยังไม่ผ่านหรือยังไม่ได้ทดสอบ การรับเอกสารไม่ปิดประเด็นเหล่านี้

## ข้อสรุปล่าสุดที่รักษา

เรื่องเด่นบทความ hoverยกกรอบ/เอียง/ขยายทั้งกรอบตาม r7 และกดแผ่สีจากจุดคลิกพร้อมเด้ง420msตาม r4 เรื่องรองคง hover-r8 และเด้งอย่างเดียว420ms “บทความทั้งหมด” เป็นลิงก์ปกติ delay0 ไม่มีแอนิเมชัน เอฟเฟกต์ลิงก์นี้พักไว้ ไม่เพิ่มกลับเป็น gate ของรอบปัจจุบัน

ปกบทความเป็นภาพสำเร็จรวมข้อความจากภายนอก เว็บไม่จัดข้อความในปก ชื่อ/เนื้อหานอกภาพใช้ typography spec มี16:9เป็นฐานและไม่ crop/zoomอัตโนมัติ ตัวอย่างจัดปกเองและ secondary/index dark focus ที่ไม่ได้ตกลงถูกถอน ไม่รวมกลับใน foundation

TikTok ใช้ states-r3 คลิปหลัก320×568ในstage832×688 แรกไม่มีภาพก่อนหน้า กลาง/สุดท้ายมีหนึ่งใบซ้าย Playing/Paused/Bufferingใช้ของTikTok ไม่เพิ่มautoplayหรือcustom controlsเอง Footer-contact-column-r4 สูง299px แสดง LINE/โทรศัพท์โดยตรง ข้อมูลยังเป็นmock

## หลักฐานและการตรวจ

อ่านค่าแบบ read-only จาก native Home-r15 `ZfZvJ`: ข้อความ447รายการและgeometry112รายการ ดู [observed-values](observed-values.json) รักษา native-auto line-height เมื่อไม่มีค่าระบุ ไม่เอาความสูงกล่องไปประกาศเป็น CSS line-height การอ่านครั้งนี้ไม่เปลี่ยน source

Header panels เป็น accepted references นอก defaultHome และยังอ้าง [หลักฐานเดิม](../foundation-2-desktop/observed-values.json) อย่างระบุขอบเขต ไม่อ้างว่า re-read อยู่ใน root ZfZvJ ทั้งหมด [Motion evidence](motion-evidence.json) ตรวจ hash กับตัวอย่างที่รับแล้ว ไม่ใช่ browser/runtime test

ตัวบท foundation-2 ทั้งสี่ก่อนปรับเก็บ byte-for-byte พร้อม SHA-256 ใน [archive](../foundation-2-desktop/pre-r15-reconciliation-2026-11-05/archive-manifest.json) รุ่น2ไม่เคยผ่านการรับเป็นชุด รุ่น3นี้รับเฉพาะสเปก Desktop พร้อมคงรายการค้างแล้ว ดู [alignment audit](alignment-audit.md) และ [verification](verification.json)

## ขอบเขตที่อนุมัติ

เจ้าของเลือก1รับเอกสาร foundation-3-desktop ในส่วน Desktop specification ที่ตรงกับแบบ/ข้อสรุปที่ยืนยันแล้ว พร้อมคง Proposed/Open/deferred ตามสถานะ การรับนี้ไม่เปลี่ยน planning defaults ของหน้าอื่น ไม่รับค่าจออื่นอัตโนมัติ ไม่ใช่ production tokens และไม่อนุญาต Frontend จากตัวเอกสาร

| เรื่องที่ยังค้าง | สถานะ |
| --- | --- |
| OPEN-001 | White/Pinkเดิม 2.705343:1 ไม่ผ่านเกณฑ์ที่เกี่ยวข้อง เจ้าของคงภาพเดิม ประเด็นยังเปิด ไม่ขอเลือกเฉดซ้ำ |
| Secondary custom keyboard cue | พื้นเข้มที่เพิ่มเองถูกถอน ยังไม่ได้เลือกแบบแทน ไม่รับรอง keyboard/accessibility ทั้งชุด |
| Browser/keyboard/screen reader/text zoom/motion runtime | ยังไม่ทดสอบ รวมถึงข้อมูล Auth/TikTok embed/navigationจริง |
| จออื่นและ Mobile | Desktopอื่นยัง proposed; Mobileพัก ไม่รับรอง responsiveครบ |
| Assets/data/contacts | ภาพ คลิป บทความ โลโก้และช่องทางติดต่อยังเป็นข้อมูลศึกษา/ปลายทางไม่ยืนยัน |
| DSD-001 completion / Frontend | ยังไม่ผ่านทั้งหมด ต้องจัดการเกณฑ์/ข้อค้างที่เกี่ยวข้อง และต้องมีการเลือกงาน Frontend แยก |

UXD-001 review-2คงเป็นฐานอนุมัติ UXD-002 review-5ยังรอตรวจ ไม่แก้หรือรับแทนจากรอบนี้ ไม่เริ่ม DSD-002 หรือ Taskอื่น/backend/deploy

เจ้าของเลือก `1` ตาม [หลักฐานอนุมัติ](owner-foundation-acceptance.json) เก็บข้อความทั้งสี่ฉบับที่ส่งตรวจก่อนเพิ่มสถานะอนุมัติไว้ใน approved-review-content พร้อม SHA-256 การเผยแพร่หลังรับแก้เฉพาะสถานะและลิงก์หลักฐาน ไม่เปลี่ยน specification ค่าที่เสนอ/เปิด/พักไว้ไม่เปลี่ยนสถานะ และ DSD-001 ยังไม่ complete/ไม่มี Frontend authorization
