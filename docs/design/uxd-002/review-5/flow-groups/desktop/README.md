# UXD-002 review-5 — Desktop flow review

3 พฤศจิกายน 2026 (Asia/Bangkok) · รอเจ้าของตรวจรับ

ครบ 8 กลุ่มคู่กับ Mobile ภายใน Pencil: เริ่มที่ `FLOW-REVIEW — INDEX · DESKTOP · 8 user tasks` ทางขวาของชุด Mobile แล้วเปิด `FLOW-REVIEW DESKTOP F-01` ถึง `F-08` ภาพย่อทั้งหมดมาจาก Desktop 1440px ไม่มีการใช้ภาพ Mobile แทน Desktop

[ภาพดัชนี Desktop](index.png) · [Mobile และรายละเอียดกฎทั้ง 8 กลุ่ม](../README.md) · [Editable snapshot ล่าสุดทั้ง canvas](editable-snapshot.json) · [Export index](flow-index.json)

| กลุ่ม | Desktop | Mobile | จุดทบทวนเฉพาะ Desktop |
|---|---|---|---|
| F-01 ค้นหาและเลือกที่พัก | [Desktop](f-01.png) | [Mobile](../f-01.png) | ผลค้นหามี sidebar ตัวกรอง; ช่องค้นหาเปิด popover; ใช้ภาพ Desktop 1440px |
| F-02 เลือกข้อมูลเข้าพัก | [Desktop](f-02.png) | [Mobile](../f-02.png) | Gallery และรายละเอียดด้านซ้าย; booking panel ด้านขวา; date/guest controls เปิดใน context |
| F-03 เข้าสู่ระบบและสมัครสมาชิก | [Desktop](f-03.png) | [Mobile](../f-03.png) | Login/Register เป็น modal บน Desktop; มีทางปิด; focus อยู่ภายในและคืนจุดเปิดเมื่อปิด |
| F-04 ตรวจรายการ จอง และชำระเงิน | [Desktop](f-04.png) | [Mobile](../f-04.png) | Review แสดงข้อมูลจองและสรุปยอด; WF-04C เป็น modal บน Desktop ก่อนขั้น Payment |
| F-05 รับผลและตรวจสถานะการจอง | [Desktop](f-05.png) | [Mobile](../f-05.png) | WF-07 แสดงรายละเอียดรายการและสถานะจอง/ชำระเงินแยกกันใน layout Desktop |
| F-06 บันทึกและจัดการรายการโปรด | [Desktop](f-06.png) | [Mobile](../f-06.png) | Favorites grid บน Desktop; การ์ดใช้หัวใจ/Carousel เดียวกับ Home และ Results |
| F-07 ดูการจองของฉัน | [Desktop](f-07.png) | [Mobile](../f-07.png) | เปิด My Bookings จากเมนูบัญชีใน Header; มีแท็บและรายการจองแบบ Desktop |
| F-08 ดูและแก้ไขโปรไฟล์ | [Desktop](f-08.png) | [Mobile](../f-08.png) | Modern Split แสดงข้อมูลและฟอร์มใน layout Desktop; validation อยู่ใกล้ช่อง |

## การจัดและหลักฐาน

- Desktop 8 boards ที่ 3200×2700 และ index 6700×1400; Mobile 8 boards เดิมที่ 3200×2300 และ index แยก
- ภาพย่อ Desktop อ้าง 18 หน้าจอเดิม; date picker ใช้ WF-02P อ้าง anatomy ของปฏิทิน/จำนวน และ WF-03 อ้างช่องวันที่ใน booking panel ไม่ใช้ภาพ date editor Mobile
- Search ใช้ sidebar และ popover ตามหน้าจอ; Detail มี booking panel ด้านขวา; Auth และ confirmation ใช้ modal; Profile ใช้ Modern Split
- แต่ละกลุ่มมีจุดเริ่ม เส้นทางหลัก ทางแยก ย้อนกลับ/ยกเลิก ทางไปต่อ จุดทบทวน และประเด็นเปิด ไม่เปลี่ยน Auth-before-Review, intent lifecycle หรือกฎชำระเงินเดิม
- รวม 21 major containers: 3 flow boards เดิม + 16 review boards + 2 review indexes; ภายในยังมี 40 หน้าจอจริงและ 40 annotation panels เดิม
- ตรวจภาพ Desktop ครบ 8 กลุ่มและ index; ตรวจขนาด PNG, geometry, ป้ายข้อความ และภาพย่อว่าใช้ source Desktop จริง
- Latest full public-layer snapshot อยู่ในโฟลเดอร์นี้; snapshot ที่ parent คือ checkpoint ก่อนเพิ่ม Desktop เจ้าของเลือกบันทึก native file เองเมื่อพร้อม
- รูปทั้งหมดเป็น wireframe/annotation สำหรับตรวจรับ ยังไม่ใช่ prototype หรือผลทดสอบ Auth/booking/payment จริง; OPEN-001–007 และ D-01–06 ยังเปิดตามเอกสารเดิม
