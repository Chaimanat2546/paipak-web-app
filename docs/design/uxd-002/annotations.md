# UXD-002 — Wireframes และ Annotations

> **ชุดล่าสุด review-5 วันที่ 3 พฤศจิกายน 2026:** [ดัชนีภาพ 40 ไฟล์และหลักฐาน](review-5/README.md), [component inventory / entry-exit / states / acceptance](review-5/component-inventory.md), [Pencil source](papaipak-wireframe.pen), [layer snapshot](review-5/editable-snapshot.json) ภาพและสเปกยังรอเจ้าของตรวจรับ เจ้าของแจ้งบันทึก native source หลังแก้ครบแล้ว ชื่อไฟล์ในลิงก์แก้ให้ตรงไฟล์ที่มีอยู่เมื่อ 4 พฤศจิกายน 2026 โดยไม่ตรวจรับ layout รุ่นนี้

Review-5 มี Desktop 18 / Mobile 22 ภาพ และ external annotation panels 40 แผง ใช้ Q-01–Q-12 และ F-01 ใน [review-decisions](review-decisions.md) แยก customer-facing UI ออกจาก notes ตาม guidelines; State sheets เป็น supporting artifacts ไม่ใช่ routes เพิ่ม

## Historical record — review-4

เนื้อหาด้านล่างและ [rebuilt-1](rebuilt-1/README.md) เป็นประวัติ ไม่ใช่ image/spec index ล่าสุด ลิงก์ต้นฉบับภายนอกในส่วนประวัติไม่ใช่ตำแหน่ง editable source ปัจจุบัน

วันที่: 2 พฤศจิกายน 2026 · Asia/Bangkok · รุ่น: review-4 · สถานะ: รอภูตรวจรับ

ยึด [UXD-001 review-2 ที่อนุมัติแล้ว](../../../tasks/design/UXD-001.md#owner-acceptance) และ [ขอบเขต UX/UI](../approved-ux-ui-scope.md) รุ่นนี้แก้การปะปนของคำอธิบายกับหน้าจอ โดยย้ายหมายเหตุออกจากพื้นที่ UI และแยกเอกสารตามหน้าที่ ไม่เปลี่ยนข้อสรุป Q-01 ถึง Q-05

การแยกเนื้อหาสอดคล้องกับ [Wireframe Guidelines](../wireframe-guidelines.md) โดยยึดข้อสรุปที่อนุมัติแล้วเหนือกรณีตัวอย่างที่ยังเปิดคำถามใน guidelines

## การแยกชิ้นงาน

| ประเภท | อยู่ที่ไหน |
|---|---|
| เนื้อหาและองค์ประกอบที่ผู้ใช้เห็นจริง | Wireframe และ PNG หน้าจอ |
| คำอธิบายองค์ประกอบ/การจัดวาง | แผง Annotation ข้าง Wireframe ใน Pencil และเอกสารนี้ |
| เงื่อนไขปุ่ม การเปลี่ยนสถานะ และ navigation | [Interaction Specification](interaction-specification.md) |
| กฎธุรกิจ/ข้อกำหนด เช่น ไม่บังคับวันที่ | [UX / Functional Requirements](ux-requirements.md) ซึ่งอ้างข้อสรุปที่อนุมัติแล้ว |

ข้อความแจ้งผู้ใช้ เช่น “กรุณาเลือกวันเช็คเอาท์” อยู่ในภาพของสถานะนั้นได้ ส่วนคำอธิบายวิธีตรวจ เงื่อนไข และปลายทางของปุ่มอยู่ใน Interaction Specification

## แหล่งชิ้นงาน

- แก้ไขได้ใน [paipak-wireframe.pen](C:/Users/USER/.pencil/documents/2d950f8a-3698-4a79-b265-862d2fc9b90f/paipak-wireframe.pen) ผ่าน Pencil MCP เท่านั้น ไฟล์ต้นฉบับอยู่นอก application repository
- 30 หน้าจอ: Desktop 14 ภาพ กว้าง 1440px และ Mobile 16 ภาพ กว้าง 390px รวมหน้าหลัก 18 ภาพและแบบย่อย/แผ่นสถานะ 12 ภาพ
- แต่ละหน้าจอมีแผง Annotation สีเหลืองอ่อนแยกข้างภาพ รวม 30 แผง ไม่อยู่ในกรอบ UI และไม่รวมใน PNG หน้าจอ
- รหัสหน้าจอและรุ่นอยู่ในชื่อ frame/แผง Annotation ไม่เป็นแถบหัวเว็บ หมายเหตุรุ่นเดิมเก็บในกลุ่มที่ซ่อนไว้นอกหน้าจอเพื่อรักษาประวัติ
- ภาพเต็มหน้ามีความสูงตามเนื้อหา ไม่ใช่ viewport ที่เลื่อนได้หรือ prototype ที่กดทำงานแล้ว
- ใช้ขาว–เทาและ Mitr เพื่อพิจารณาโครงสร้าง ยังไม่กำหนดสี ระยะ ตัวอักษร และรูปลักษณ์ขั้นสุดท้ายแทน DSD-001
- ชื่อที่พัก ราคา วันที่ ข้อมูลสมาชิก และสถานะเป็นข้อมูลตัวอย่างทั้งหมด ช่องภาพเป็น placeholder ไม่ใช่ทรัพย์สินจากเว็บอ้างอิงหรือหลักฐานธุรกรรมจริง

## รายการภาพ

| รหัส / หน้าที่ | Desktop 1440px | Mobile 390px | ประเภท |
|---|---|---|---|
| WF-01N Navigation Menu | — | [ภาพ](wireframes-mobile/wf-01n.png) | สถานะเปิดเมนู Mobile |
| WF-01 Home | [ภาพ](wireframes-desktop/wf-01.png) | [ภาพ](wireframes-mobile/wf-01.png) | หน้าหลัก |
| WF-02 Results | [ภาพ](wireframes-desktop/wf-02.png) | [ภาพ](wireframes-mobile/wf-02.png) | หน้าหลัก |
| WF-03 Property Detail | [ภาพ](wireframes-desktop/wf-03.png) | [ภาพ](wireframes-mobile/wf-03.png) | หน้าหลัก |
| WF-04 Checkout Review | [ภาพ](wireframes-desktop/wf-04.png) | [ภาพ](wireframes-mobile/wf-04.png) | หน้าหลัก |
| WF-05 Authentication | [ภาพ](wireframes-desktop/wf-05.png) | [ภาพ](wireframes-mobile/wf-05.png) | หน้าหลัก |
| WF-06 My Bookings | [ภาพ](wireframes-desktop/wf-06.png) | [ภาพ](wireframes-mobile/wf-06.png) | หน้าหลัก |
| WF-07 Booking Detail/Confirmation | [ภาพ](wireframes-desktop/wf-07.png) | [ภาพ](wireframes-mobile/wf-07.png) | หน้าหลัก |
| WF-08 Favorites | [ภาพ](wireframes-desktop/wf-08.png) | [ภาพ](wireframes-mobile/wf-08.png) | หน้าหลัก |
| WF-09 Member Profile | [ภาพ](wireframes-desktop/wf-09.png) | [ภาพ](wireframes-mobile/wf-09.png) | หน้าหลัก |
| WF-02P Date/Guest Pickers | [ภาพ](wireframes-desktop/wf-02p.png) | [ภาพ](wireframes-mobile/wf-02p.png) | สถานะค้นหา |
| WF-02F Filter Drawer | Sidebar ใน WF-02 | [ภาพ](wireframes-mobile/wf-02f.png) | สถานะ Mobile |
| WF-03S Availability/Price | [ภาพ](wireframes-desktop/wf-03s.png) | [ภาพ](wireframes-mobile/wf-03s.png) | สถานะ booking panel |
| WF-04P Payment Step | [ภาพ](wireframes-desktop/wf-04p.png) | [ภาพ](wireframes-mobile/wf-04p.png) | ขั้นชำระเงิน |
| WF-05R Register | [ภาพ](wireframes-desktop/wf-05r.png) | [ภาพ](wireframes-mobile/wf-05r.png) | สถานะ Auth |
| WF-10 Contextual States | [ภาพ](wireframes-desktop/wf-10.png) | [ภาพ](wireframes-mobile/wf-10.png) | แผ่นรวมสถานะ |

WF-10 เป็นแผ่นรวมสถานะประกอบหน้าที่เกี่ยวข้อง ไม่ใช่ route เพิ่ม จึงครอบคลุม 10 templates โดยมี 9 templates เป็นหน้าหลักและกลุ่มสถานะเป็น template ที่ 10

## Navigation ที่ภูยืนยันล่าสุด

- ซ้ายบน: โลโก้ papaipak พร้อมข้อความ **“กรุณาโอนเงิน ชื่อ ...... แบบบริษัท”** ข้างโลโก้ ใช้ข้อความตามที่ภูยืนยัน ไม่แทนชื่อบริษัทหรือข้อมูลบัญชีด้วยข้อมูลที่แต่งขึ้น
- Desktop ขวาบน: ตัวเลือกไทย/English และ LINE OA/โทร; ขวาล่าง: หน้าแรก, ค้นหาที่พัก/จอง, บทความ และเข้าสู่ระบบ
- Mobile: โลโก้และข้อความอยู่ซ้าย ปุ่มเมนูอยู่ขวา สถานะเปิดใน WF-01N แสดงภาษา ช่องทางติดต่อ และเมนูครบตามรายการ
- Guest กดเข้าสู่ระบบเปิด Login ก่อน มีทางสลับไปสมัครสมาชิกตามคำตอบล่าสุด ไม่เปิด Register เป็นค่าเริ่มต้น
- หน้าสมาชิกคงปุ่มบัญชีสมาชิกแทนเข้าสู่ระบบ และยังเข้าถึงรายการจอง/ที่พักโปรดผ่านบัญชีเดิม
- Auth fullscreen, modal และ Filter Drawer คงโครงสร้างเฉพาะ flow ไม่เพิ่ม global navigation ทับ overlay
- ชื่อบริษัทจริง LINE OA และเบอร์โทรยังไม่ได้รับ ส่วนภาษาอังกฤษและบทความระบุเฉพาะ control/ปลายทาง ยังไม่เพิ่มการแปลทุกหน้าหรือออกแบบหน้าบทความ

## Annotations ขององค์ประกอบ

ตารางนี้อธิบายตำแหน่งและการจัดกลุ่ม ไม่ใช้แทนเงื่อนไขการทำงานในเอกสาร I-01 ถึง I-22 หรือกฎใน UXR-01 ถึง UXR-18

| หน้าจอ | คำอธิบายข้างภาพ | อ้างอิงการทำงาน |
|---|---|---|
| WF-01N | เมนู Mobile แบบเปิด มีปุ่มปิดขวาบน ภาษาและติดต่ออยู่ก่อนเมนูหลัก แต่ละรายการเป็นพื้นที่กดแยก | I-19 ถึง I-22 |
| WF-01 | Header → hero/search → แถบ 7 หมวด → การ์ดที่พัก → Footer; Mobile เรียงค้นหาลงและคงแถบหมวดแนวนอนใน canvas ปัจจุบัน | I-01 ถึง I-05 |
| WF-02 | หัวข้อ/ค้นหาอยู่เหนือ suggested chips; Desktop sidebar ซ้ายและ grid ขวา Mobile ใช้ปุ่มตัวกรองกับการ์ดคอลัมน์เดียว Pagination อยู่ใต้ผลลัพธ์ | I-02 ถึง I-07 |
| การ์ด WF-01/02/08 | ภาพอยู่เหนือชื่อและราคา หัวใจมุมภาพ ลูกศรกับจุด 5 จุดอยู่ในภาพ จุดทึบระบุภาพปัจจุบัน ขนาดสัญลักษณ์ยังไม่ใช่ขนาดพื้นที่กดขั้นสุดท้าย | I-04/I-05/I-15 |
| WF-03 | Gallery ด้านบน รายละเอียดซ้ายและ booking panel ขวา Mobile เรียงข้อมูลและมีแถบ CTA ขอบล่าง ต้องเผื่อพื้นที่เนื้อหาสำหรับแถบนี้ | I-08 |
| WF-04 | รายละเอียดการเข้าพัก/ผู้จองและสรุปยอดเป็นกลุ่มแยก Desktop สองคอลัมน์ Mobile เรียงลง มีทางแก้ข้อมูลใกล้กลุ่มนั้น | I-11 |
| WF-04P | ขั้นชำระเงินแยกจาก Review มีสรุปรายการ พื้นที่แทนส่วนชำระเงิน และปุ่มกลับในลำดับเดียวกัน | I-12/I-13 |
| WF-05/WF-05R | Desktop modal กลางฉากหลัง Mobile fullscreen กลุ่มชื่อฟอร์ม → ช่องกรอก → feedback → ปุ่มหลัก/ทางเลือกสมัครหรือเข้าสู่ระบบ | I-09/I-10/I-18 |
| WF-06 | ชื่อหน้าและแท็บอยู่เหนือรายการ แต่ละรายการมีข้อมูลการเข้าพัก ป้ายสถานะจอง/ชำระเงินแยกกัน และปุ่มรายละเอียด | I-14 |
| WF-07 | กลุ่มสถานะอยู่ก่อนเลขอ้างอิง รายละเอียดเข้าพัก ผู้จอง และยอดชำระ ปุ่มอ่านสถานะ/ดูรายการอยู่หลังข้อมูลหลัก | I-12/I-13 |
| WF-08 | ชื่อหน้าและจำนวนรายการอยู่เหนือ grid ใช้โครงสร้างการ์ดร่วมกับ Home/Results หัวใจเต็มแสดงรายการที่บันทึกแล้ว | I-04/I-15 |
| WF-09 | Desktop เมนูบัญชีซ้าย/ข้อมูลขวา Mobile เมนูอยู่ก่อนข้อมูล Label แยกจากค่าฟอร์มและมีพื้นที่ feedback ใกล้กลุ่มบันทึก | I-16 |
| WF-02P | แผ่นแสดง picker วันที่และ picker จำนวนเป็นคนละสถานะ ปฏิทิน Desktop สองเดือน Mobile หนึ่งเดือน จำนวนผู้เข้าพักและสัตว์เลี้ยงแยกแถว | I-01/I-02 |
| WF-02F | Drawer Mobile มีชื่อและปิดด้านบน กลุ่มตัวกรองตรงกลาง ล้าง/Apply ด้านล่าง | I-06 |
| WF-03S | แผ่นรวม booking panel หลายสถานะ แต่ละช่องแยกหัวข้อ ข้อความราคา/วัน และพื้นที่ปุ่ม | I-08/I-11 |
| WF-10 | แผ่นรวม loading, empty, error, Auth/ข้อมูลจองใช้ต่อไม่ได้, payment และ feedback ฟอร์ม แต่ละกลุ่มเป็นภาพของคนละบริบท ไม่ใช่หน้ารวมให้ผู้ใช้เห็นพร้อมกัน | I-13/I-16 ถึง I-18 |

## การปรับตามพื้นที่

| ส่วน | Desktop ที่วาด | Tablet — แนวทาง ยังไม่มีภาพ | Mobile ที่วาด |
|---|---|---|---|
| Navigation | Logo/ข้อความซ้าย Utility และเมนูขวาสองแถว | รวมเป็นเมนูเปิด–ปิดเมื่อพื้นที่ไม่พอ | Header ย่อและแผงเมนู WF-01N |
| Listing grid | 4 คอลัมน์เมื่อพื้นที่พอ | 2–3 คอลัมน์ตามพื้นที่จริง | 1 คอลัมน์ |
| Search/picker | ฟิลด์แนวนอน ปฏิทินสองเดือน | ลดการเรียงแนวนอนเมื่อพื้นที่ไม่พอ | ฟิลด์เรียงลง ปฏิทินหนึ่งเดือน |
| Filters | Sidebar | Drawer เมื่อ sidebar เบียดผลค้นหา | Drawer |
| Detail | Gallery grid และสองคอลัมน์ | ย้าย booking ลงเมื่อพื้นที่ไม่พอ | ภาพหลัก เนื้อหาเรียงลง แถบ CTA ล่าง |
| Checkout | รายละเอียด/สรุปสองคอลัมน์ | คอลัมน์เดียวเมื่อจำเป็น | คอลัมน์เดียว |
| Auth | Modal | เลือก modal/fullscreen ตามพื้นที่ | Fullscreen |
| Profile | เมนูซ้าย/ข้อมูลขวา | สองคอลัมน์เฉพาะเมื่อพื้นที่พอ | เมนูก่อนข้อมูล |

ยังไม่ล็อก production breakpoint หรือรับรองการทำงาน sticky จากภาพนิ่ง เงื่อนไข focus, overlay, carousel และ navigation อยู่ใน Interaction Specification

## Revision และหลักฐานตรวจ

- review-2: เปลี่ยนตัวบอกภาพเป็นจุดทั้ง 22 การ์ด รวม 110 จุด พร้อมลูกศรซ้าย–ขวา
- review-3: ย้าย banner/หมายเหตุเลขเดิมและคำอธิบายทางเทคนิคออกจากหน้าจอ สร้าง Annotation ข้างภาพทั้ง 29 แผง และใช้ข้อความสำหรับผู้ใช้ในหน้าจอ
- review-3 รักษาจุดทั้ง 22 การ์ดและแถบหมวด Mobile Home ปัจจุบัน การเอาหมายเหตุออกทำให้ความสูงภาพลดลง จึงส่งออก PNG ใหม่ทั้ง 29 ภาพ
- แยก Interaction Specification และ UX Requirements พร้อมลิงก์อ้างอิง ไม่เปลี่ยนเอกสาร UXD-001 ที่อนุมัติแล้ว

ตรวจโครงสร้างและภาพที่ Desktop 1440 / Mobile 390 รวมขนาด PNG ตำแหน่งแผงภายนอก ข้อความที่หลงอยู่ใน UI และโครงสร้างจุดบนการ์ด ยังต้องให้ภูตรวจรับความเหมาะสมของแบบ

- review-4: ปรับ Navigation ตามรายการและคำตอบล่าสุดของภูทั้ง 24 Header เพิ่ม WF-01N สถานะเปิดเมนู Mobile พร้อม Annotation แยกข้างภาพ รวม 30 PNG / 30 แผง ปุ่มเข้าสู่ระบบเปิด Login ก่อน

## ข้อจำกัดและการตรวจรับ

ภาพนิ่งยังไม่ทดสอบ Tab, focus trap, screen reader, motion, scrolling, validation หรือธุรกรรมจริง ไม่มีภาพ Tablet และยังไม่ตรวจอุปกรณ์จริง/zoom/320px

[OPEN-001 ถึง OPEN-007](../../decisions/open-decisions.yaml) ยังไม่ถูกปิดจากงานนี้ โดยเฉพาะ contrast CTA, สัญญาชำระเงิน, inventory และราคา/วันว่างจริง ข้อเสนอ interaction ที่ยังรอตรวจรับระบุแยกไว้ใน Interaction Specification

UXD-002 review-4 รอภูตรวจรับ ไม่ถือเป็น final UI หรืออนุญาตให้เริ่มโค้ดอัตโนมัติ ไม่ได้แก้ application code, dependencies, database, cloud resources หรือ deploy และไม่เริ่ม task ถัดไป
