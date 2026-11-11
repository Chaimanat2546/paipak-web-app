# UID-003 · Property Detail r26 — Celuna, LYYA และ In2

ใช้โครงหน้า r25 ร่วมกัน: แกลเลอรี แถบข้อมูลสำคัญ จุดเด่น เมนูรายละเอียด และปฏิทินบนหน้า กล่องจองอยู่คอลัมน์ขวาบน Desktop และก่อนรายละเอียดบนมือถือ

| ที่พัก | Desktop | Mobile | หลักฐาน |
|---|---|---|---|
| RimLay DV-55 | [r25](../property-detail-r25-shared-layout/rimlay-desktop.png) | [r25](../property-detail-r25-shared-layout/rimlay-mobile.png) | [รายละเอียด](https://www.pmheevilla.com/api/villas/55) · [ปฏิทิน](https://www.pmheevilla.com/api/villas/55/calendar?month=2026-11) |
| In2 DV-2222 | [r26](in2-desktop.png) · `KuV4N` | [r26](in2-mobile.png) · `c5U0F` | [รายละเอียด](https://www.pmheevilla.com/api/villas/2222) · [ปฏิทิน](https://www.pmheevilla.com/api/villas/2222/calendar?month=2026-11) |
| Celuna DV-9 | [r26](celuna-desktop.png) · `iktlv` | [r26](celuna-mobile.png) · `L7ykN` | [รายละเอียด](https://www.pmheevilla.com/api/villas/9) · [ปฏิทิน](https://www.pmheevilla.com/api/villas/9/calendar?month=2026-11) |
| LYYA DV-3178 | [r26](lyya-desktop.png) · `ZcoA3` | [r26](lyya-mobile.png) · `jKk4V` | [รายละเอียด](https://www.pmheevilla.com/api/villas/3178) · [ปฏิทิน](https://www.pmheevilla.com/api/villas/3178/calendar?month=2026-11) |

เรียก API สาธารณะจากหน้าที่พักของ baan-pool-villa เมื่อ 10 พฤศจิกายน 2569 ทั้ง 8 คำขอได้ HTTP 200 และ API ปฏิทินคืนข้อมูลครบ 30 วันต่อบ้าน แบบปิดการเลือกวันที่ผ่านไปแล้วและไม่แสดงราคาของวันที่จองแล้ว

- Celuna: วันที่ 13 แสดง ฿13,900 วันที่ว่างอื่นแสดง ฿9,900 ค่าประกัน ฿3,000
- LYYA: วันที่ 10 แสดงโปรโมชัน ฿10,900 วันที่ 27 แสดงราคาวันหยุด ฿24,900 ค่าประกัน ฿10,000 ไม่แสดงความลึกสระเพราะหน่วยต้นทางยังไม่ยืนยัน
- In2: คงโปรไฟลุกวันที่ 10 ที่ ฿4,900 เติมค่าประกัน ฿3,000 และค่าบริการสุนัข/แมว ฿300 หรือ ฿500 เมื่อหนักเกิน 10 กก. API ไม่ระบุรอบการคิดค่าบริการสัตว์เลี้ยงของ In2 และ Celuna จึงไม่เติมหน่วยต่อวันหรือต่อคืน
- RimLay: ทั้ง 30 วันเป็นสถานะติดจองในข้อมูลรอบนี้

จำนวนคนตามราคาเริ่มต้นของ [Celuna](https://www.pmheevilla.com/villas/9) และ [LYYA](https://www.pmheevilla.com/villas/3178) อ่านจากข้อความบนหน้าสาธารณะ รูป Celuna ที่เพิ่มคือ [ด้านนอก 127114](https://www.pmheevilla.com/api/villas/9/images?imageId=127114&w=640&q=60) และ [ห้องน้ำ 121641](https://www.pmheevilla.com/api/villas/9/images?imageId=121641&w=640&q=60) ทั้งสองรายการมาจากแกลเลอรีของ DV-9

งานนี้เป็นแบบใน [Pencil](../../dsd-001/papaipak-ui.pen) ปฏิทินเป็นภาพข้อมูล ณ วันที่ตรวจ
