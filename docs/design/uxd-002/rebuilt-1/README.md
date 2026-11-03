# UXD-002 — Wireframes rebuilt-1

วันที่ 2 พฤศจิกายน 2026 (Asia/Bangkok) · **รอเจ้าของตรวจรับ**

> ชุดนี้เป็นประวัติ ปัจจุบันใช้ [review-5](../review-5/README.md) วันที่ 3 พฤศจิกายน 2026; native source ปัจจุบันบันทึกหลังปรับ review-5 แล้ว ข้อจำกัด checkpoint ด้านล่างอธิบายสถานะ rebuilt-1 ในเวลานั้น

> คำตอบเจ้าของระหว่างรีวิวล่าสุดอยู่ใน [Task-local owner confirmations](../review-decisions.md) ใช้กำกับการแก้แบบรอบถัดไป ภาพ rebuilt-1 ชุดนี้ยังไม่สะท้อนคำตอบใหม่ทั้งหมด

สร้าง wireframe ที่แก้ไขได้ใหม่ตามคำขอของเจ้าของ หลังยืนยัน Task UXD-002 โดยอ้าง PNG และเอกสาร review-4 ที่มีใน repository ไม่ใช่การกู้ต้นฉบับเก่าหรือรับรองว่าเหมือนเดิมทุกพิกเซล ไม่แก้ application code และไม่เริ่ม task ถัดไป

## ไฟล์และรุ่น

- [Pencil source](../paipak-wireframe.pen): native checkpoint ที่บันทึกผ่าน Save As หลังสร้างครบ 30 กรอบและ 30 แผง Annotation; เปิดแก้ผ่าน Pencil ได้
- [Editable layer snapshot](editable-snapshot.json): สำเนาชั้นงาน **ล่าสุดหลังเก็บระยะรอบท้าย** อ่านจาก Pencil MCP มี 60 root frames รวม UI และ annotations แยกกัน ไม่ใช่ไฟล์ .pen ที่เข้ารหัส และไม่ควรเปลี่ยนนามสกุลแทนการนำเข้าผ่าน MCP
- [PNG index](export-index.json): รายชื่อไฟล์และขนาดของภาพส่งออกล่าสุด
- Canvas ที่เปิดใน Pencil มีการเก็บระยะปฏิทินและตัวบอกตำแหน่งหมวดบน Mobile เพิ่มจาก native checkpoint; ไม่ได้ใช้ Computer Use เพื่อสั่ง Save ซ้ำหลังเจ้าของทักท้วง ข้อมูลรอบท้ายจึงสำรองใน JSON และ PNG ชุดนี้ ไม่รับรองว่า native checkpoint มีการปรับรอบท้ายทั้งหมด
- PNG review-4 ใน `../wireframes-desktop/` และ `../wireframes-mobile/` คงไว้เป็นหลักฐานเดิม

## ดัชนีภาพล่าสุด

| Screen | Desktop 1440px | Mobile 390px |
|---|---|---|
| WF-01 Home | [ภาพ](desktop/wf-01.png) | [ภาพ](mobile/wf-01.png) |
| WF-02 Results | [ภาพ](desktop/wf-02.png) | [ภาพ](mobile/wf-02.png) |
| WF-03 Property Detail | [ภาพ](desktop/wf-03.png) | [ภาพ](mobile/wf-03.png) |
| WF-04 Checkout Review | [ภาพ](desktop/wf-04.png) | [ภาพ](mobile/wf-04.png) |
| WF-04P Payment | [ภาพ](desktop/wf-04p.png) | [ภาพ](mobile/wf-04p.png) |
| WF-05 Login | [ภาพ](desktop/wf-05.png) | [ภาพ](mobile/wf-05.png) |
| WF-05R Register | [ภาพ](desktop/wf-05r.png) | [ภาพ](mobile/wf-05r.png) |
| WF-06 My Bookings | [ภาพ](desktop/wf-06.png) | [ภาพ](mobile/wf-06.png) |
| WF-07 Booking Detail / Confirmation | [ภาพ](desktop/wf-07.png) | [ภาพ](mobile/wf-07.png) |
| WF-08 Favorites | [ภาพ](desktop/wf-08.png) | [ภาพ](mobile/wf-08.png) |
| WF-09 Profile | [ภาพ](desktop/wf-09.png) | [ภาพ](mobile/wf-09.png) |
| WF-02P Date / Guest Pickers | [ภาพ](desktop/wf-02p.png) | [ภาพ](mobile/wf-02p.png) |
| WF-03S Availability / Price | [ภาพ](desktop/wf-03s.png) | [ภาพ](mobile/wf-03s.png) |
| WF-10 Contextual States | [ภาพ](desktop/wf-10.png) | [ภาพ](mobile/wf-10.png) |
| WF-01N Open Navigation | — | [ภาพ](mobile/wf-01n.png) |
| WF-02F Filter Drawer | Sidebar ใน Results | [ภาพ](mobile/wf-02f.png) |

รวม Desktop 14 และ Mobile 16 ภาพ: 18 main-page frames และ 12 supporting/state frames ครอบคลุม 10 templates โดย WF-10 เป็น state sheet ไม่ใช่ route เพิ่ม

## ขอบเขตและข้อกำหนดที่รักษา

- ใช้ UXD-001 review-2 ที่อนุมัติแล้วเป็น dependency; Browse/Search ไม่บังคับวัน จำนวนคน หรือ login
- 7 หมวดเดิม; 4-column grid เมื่อพื้นที่ Desktop เพียงพอ; Suggested Search Chips; Apply Filters และ pagination
- Favorites ต้อง login ไม่มี Guest favorites; Auth เริ่มที่ Login; cancel กลับ origin พร้อมค่าที่ยังใช้ได้; ไม่กู้ Booking Intent หลัง reload/ปิดแท็บ/หมดอายุ
- จำนวนผู้เข้าพักรวมหนึ่งค่าและ pets แยก; Checkout ใช้ข้อมูลสมาชิกและแยก Review/Payment; booking/payment status แยกกัน
- Navigation และข้อความข้าง logo ตาม review-4 ทุกตัวอักษร ไม่เติมบริษัท เบอร์โทร URL บทความ หรือ locale routing ที่ยังไม่ยืนยัน
- White/gray + Mitr สำหรับ low-fidelity เท่านั้น ไม่ล็อก visual foundations แทน DSD-001
- รายละเอียดโครงสร้างดู [Annotations](../annotations.md), การทำงานดู [Interaction Specification](../interaction-specification.md), กฎที่ยืนยันแล้วดู [UX Requirements](../ux-requirements.md) ทั้งสามไฟล์ยังเก็บเนื้อหา review-4 เป็นฐาน

## การตรวจและข้อจำกัด

- ตรวจ static render ทั้ง 30 กรอบระหว่างสร้าง; ตรวจไฟล์ PNG 30 ไฟล์ และความกว้าง 1440/390px จาก PNG header
- ตรวจผ่าน Pencil: 30 screen frames + 30 external annotation panels, 22 listing carousels, 110 photo dots และไม่มี placeholder ที่ค้าง
- การตรวจ layout ล่าสุดไม่พบ clipping นอกแถบหมวด Mobile ที่ตั้งใจให้เลื่อนแนวนอน มีตัวบอกตำแหน่งแยกใต้แถบ; การเลื่อนจริงยังไม่ได้ implement
- ปฏิทิน จำนวนคน ราคา ชื่อที่พัก และข้อมูลสมาชิกเป็น sample ไม่ใช่วันว่าง ราคา หรือกฎความจุที่ยืนยันจากระบบจริง
- Accessibility เป็นการทบทวน labels, feedback, separate annotations และข้อกำหนด focus ในเอกสาร ไม่ใช่การทดสอบ keyboard, screen reader, contrast certification หรือ touch targets ในแอป
- Tablet เป็นแนวทางใน annotations เท่านั้น; sticky CTA, navigation, forms, Auth, booking และ payment ยังไม่ได้ทดสอบเป็น interaction จริง
- Mobile cards แสดงตัวอย่างบางรายการ ไม่ใช่การยืนยัน page size หรือข้อมูล catalog จริง
- ข้อเสนอเรื่องปิด drawer แล้วทิ้ง draft filters, Favorites undo และกติกา carousel ที่ยังเปิดอยู่ใน Interaction Specification ยังรอตรวจรับ; OPEN-001 ถึง OPEN-007 ไม่ถูกปิดจากงานนี้
- ไม่มี application/runtime changes จึงไม่รัน Next.js build หรือ Workers suite และไม่อ้างผล backend/payment/production

## ตรวจรับ

โปรดรีวิวภาพรุ่น **rebuilt-1** พร้อม Interaction Specification ก่อนอนุมัติ งานยังเป็น `awaiting_owner_review` และยังไม่อนุญาต dependent frontend implementation
