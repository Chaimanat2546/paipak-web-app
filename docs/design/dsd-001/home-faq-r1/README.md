# Home FAQ-r1 · Home Desktop-r17 draft

สถานะล่าสุด: เจ้าของเลือก2ให้ปรับหน้าตาก่อน จึงส่งกลับร่างนี้ ยังไม่รับFAQหรือHome-r17 ดู [FAQ-r2สามตัวเลือก](../home-faq-r2/README.md) โดยG0และพฤติกรรมที่เลือกไว้ยังมีผล

5 พฤศจิกายน2026 (Asia/Bangkok) · G0รับแล้ว / หน้าตาFAQและHomeรุ่นใหม่รอเจ้าของตรวจ

เพิ่มFAQหลังบทความ ก่อนFooter ตาม [แผนที่รับ](../home-faq-g0-approval.json) โดยใช้คำถาม/คำตอบจำลองสำหรับการจัดวาง เนื้อหาจริงให้ผู้ดูแลเขียนจากหลังบ้าน ไม่ล็อกคำถามเหล่านี้ไว้ในเว็บและไม่สร้างCMS/APIจากงานนี้

## แบบและภาพตรวจ

| แบบ | Native ID | ภาพ |
| --- | --- | --- |
| ปิดทุกข้อเริ่มต้น | `J71Dw` | [default](J71Dw.png) |
| เปิดคำตอบหนึ่งข้อ | `O7BHrA` | [expanded](O7BHrA.png) |
| คำถาม/คำตอบยาว | `Qhx2S` | [long content](Qhx2S.png) |
| บทความ → FAQ → Footer | `Jmwp6` | [บริบทท้ายหน้า](Jmwp6.png) |
| ไม่มีFAQพร้อม · ซ่อนทั้งส่วน | `Evcv7` | [empty context](Evcv7.png) |
| Home Desktop-r17 draft | `Tz5so` | [ทั้งหน้า](Tz5so.png) |

หัวข้ออยู่ซ้าย รายการอยู่บนพื้นฟ้าอ่อนเดียวกันทางขวา แต่ละข้อไม่มีกล่องแยกซ้ำ ข้อที่เปิดเปลี่ยนเป็นพื้นขาวและไอคอนลบ ส่วนอื่นคงเครื่องหมายบวก แยกบทบาทด้วยสีพื้นและระยะห่าง ไม่เพิ่มshadowหรือสีaccentใหม่

## สเป็กเฉพาะFAQที่เสนอ

- ที่1440px: paddingบน56/ข้าง56/ล่าง72px; คอลัมน์ซ้าย360px +gap80 +รายการ888px
- พื้นหน้าWhite;กลุ่มรายการ#F2FAFEตามquiet surfaceที่มีในHome;หัวข้อ/คำถาม/ไอคอนNavy#072D59;ข้อความรอง#53657C
- Mitrทั้งหมด:หัวข้อ40/400/line-height1.35;คำเกริ่น18/400/1.6;คำถาม20/400/1.5;คำตอบ18/400/1.65 ไม่มีฟอนต์เสริมหรือการเปลี่ยนtypographyส่วนอื่น
- กลุ่มรายการradius24 padding8×12 gap4;แต่ละข้อpadding18×20 gap12/radius16 ข้อปิดไม่มีพื้นแยก ข้อเปิดพื้นWhite
- หัวคำถามเป็นพื้นที่กดเดียวร่วมกับไอคอน เป้าหมายไอคอน44×44 ไอคอนLucide20px ไม่ทำเครื่องหมายบวกเป็นปุ่มTabแยกจากคำถาม
- ความสูงตามเนื้อหา ไม่ตัดคำถาม/คำตอบหรือจำกัดบรรทัดเพื่อให้สูงเท่ากัน default560px/open602px/long828pxเป็นผลจากfixtures ไม่ใช่fixed section heights

## เนื้อหาและพฤติกรรมตามแผน

เริ่มต้นปิดทุกข้อ เปิดได้สูงสุดหนึ่งคำตอบ กดข้อใหม่ปิดข้อเดิม;กดข้อที่เปิดซ้ำปิดกลับได้ คำตอบอยู่ใต้คำถามในหน้า ไม่เปิดmodalหรือเปลี่ยนหน้า จำนวน5ข้อใน [fixtures](fixtures.json) เป็นเพียงตัวอย่าง ไม่ตั้งmaximumของข้อมูลหลังบ้าน ไม่มีปุ่มดูทั้งหมดหรือหน้ารวมFAQเพิ่มเอง

แสดงข้อมูลที่พร้อมตามลำดับจากหลังบ้าน คำถาม/คำตอบที่ว่างไม่สร้างข้อความแทน;ข้อกำหนดfield validation/รูปแบบrich text/ลิงก์/การโหลดจริงยังเป็นงานต่อเนื่อง ไม่อ้างว่าเลือกCMS schemaหรือAPIแล้ว เมื่อไม่มีรายการพร้อมให้ซ่อนFAQรวมช่องว่าง ตามG0ที่รับไว้

คำตอบจำลองใช้กติกาUXที่รับแล้ว เช่นดูบ้านไม่ต้องloginหรือเลือกวัน favorites/bookingผ่านlogin และจำนวนคนรวมกับpetsแยก ไม่กำหนดค่ามัดจำ นโยบายคืนเงิน การยกเลิก หรือเงื่อนไขบ้านจริง

## การตรวจ

[Preservation audit](verification.json) ยืนยันอีก12ส่วนของHome-r16ตรงกับdraftทั้งหมด โดยFAQเพิ่มที่index11และFooterเลื่อนเป็นindex12 Home-r16ที่รับและsourceเดิมไม่แก้

[Final state checks](state-checks-final.json) ยืนยันclosed/open/longมีคำตอบและไอคอนลบ0/1/1ตามลำดับ ดู [editable states ล่าสุด](editable-states-final.json) และ [โครงสร้างHome](home-structure.json) Initial snapshot/verificationเก็บไว้เป็นประวัติ;queryแรกที่อ่านmetadataไม่นับexpandedได้ จึงใช้ชื่อrow ไอคอนminus และจำนวนanswerที่อ่านได้ตรวจซ้ำ ไม่ใช้ค่าopenCount0ในรายงานแรกไปอ้างว่าระบบAccordionทำงานแล้ว

ตรวจPNGเปิด/ข้อความยาวแบบเต็ม1440pxแล้ว ไม่เห็นข้อความถูกตัดหรือชนไอคอน Reportsจากgeometryยังแจ้งclippingบางรายการด้วยพิกัดที่ไม่ตรงภาพ เช่นoffsetแนวตั้งที่เพิ่มขึ้น ไม่อ้างว่าdiagnosticsสะอาด และไม่ขยับเนื้อหาที่ภาพแสดงถูกต้องเพื่อไล่report ภาพemptyคงarticle/Footerตามต้นฉบับโดยไม่มีFAQหรือช่องว่างของFAQ

[Review manifest](review-manifest.json) เก็บhashของภาพ/snapshots/brief/fixtures หลักฐานเหล่านี้เป็นstatic design ไม่ใช่click/keyboard/screen-reader/backendหรือmotion runtime test

## ข้อค้างและขอบเขต

หน้าตารุ่นนี้ยังรอเจ้าของรับ การอนุมัติG0ไม่อนุมัติFAQหรือHome-r17โดยอัตโนมัติ ต้องตรวจkeyboard/focus/expanded semantics/motionและข้อมูลจริงต่อในขอบเขตที่เกี่ยวข้อง ไม่มีcustom focus/motionที่เลือกแล้วจากภาพนี้ Mobileพัก OPEN-001และข้อค้างเดิมไม่เปลี่ยน ไม่มีapplication code/CSS/backend/deploy/Taskอื่น และยังไม่commit/pushFAQรอบนี้

Native UI source `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` เข้าถึงผ่านPencil MCPเท่านั้น snapshotFAQไม่ใช่ไฟล์UIทั้งชุด ส่วนที่รับแล้วอ้าง [Home-r16](../home-desktop-r16-final-review/owner-home-acceptance.json) แยกจากdraftนี้
