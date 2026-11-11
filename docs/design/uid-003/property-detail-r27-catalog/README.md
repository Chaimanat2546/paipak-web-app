# UID-003 · Property Detail r27

แบบใช้โครงร่วมของ r25/r26: แกลเลอรีด้านบน รายละเอียดคู่กับกล่องจองบน Desktop และปฏิทินก่อนรายละเอียดบนมือถือ เพิ่มหน้าตัวอย่างเต็มหน้าอีก 3 หลัง และบอร์ดสำหรับตรวจสถานะข้อมูล ใช้ไฟล์ [Pencil](../../dsd-001/papaipak-ui.pen) ค้นหา `UID-003 r27` แบบชุดนี้รอตรวจรับ

| หมวดที่ใช้ตรวจแบบ | บ้านตัวอย่างและส่วนที่เน้น | Desktop | มือถือ |
| --- | --- | --- | --- |
| แนะนำ | Celuna DV-9: รูปหลายหมวด สไลเดอร์และผังห้อง | [เต็มหน้า](../property-detail-r26-other-homes/celuna-desktop.png) | [เต็มหน้า](../property-detail-r26-other-homes/celuna-mobile.png) |
| ใกล้ทะเล | RimLay DV-55: ติดทะเลตามหลักฐานและปฏิทินเต็มทั้งเดือนในรอบตรวจ | [เต็มหน้า](../property-detail-r25-shared-layout/rimlay-desktop.png) | [เต็มหน้า](../property-detail-r25-shared-layout/rimlay-mobile.png) |
| สายปาร์ตี้ | 91 CLEAR DV-1328: คาราโอเกะกับข้อจำกัดเสียงก่อนและหลัง 22:00 น. | [เต็มหน้า](91-clear-desktop.png) · `Sfw94` | [เต็มหน้า](91-clear-mobile.png) · `AKIU3` |
| ราคาพิเศษ | In2 DV-2222: โปรไฟลุกบนวันที่มีโปร ค่าประกันและเงื่อนไขสัตว์เลี้ยง | [เต็มหน้า](../property-detail-r26-other-homes/in2-desktop.png) | [เต็มหน้า](../property-detail-r26-other-homes/in2-mobile.png) |
| Outing | Great Oasis DV-2122: ห้องนอนสองฝั่ง สระสองโซน และจำนวนห้องที่เปิดต่างกันตามวัน | [เต็มหน้า](great-oasis-desktop.png) · `F3hBhQ` | [เต็มหน้า](great-oasis-mobile.png) · `O5dFT` |
| Pet Friendly | Prime Asia A4 DV-269: ฿500 ต่อตัวต่อคืน เงื่อนไขของที่ต้องเตรียม และคาราโอเกะเป็นบริการเสริม | [เต็มหน้า](prime-asia-desktop.png) · `lMwUS` | [เต็มหน้า](prime-asia-mobile.png) · `SYte6` |
| Luxury | LYYA DV-3178: จากุซซี่และสระน้ำเกลือ เว้นความลึกที่ยังยืนยันไม่ได้ | [เต็มหน้า](../property-detail-r26-other-homes/lyya-desktop.png) | [เต็มหน้า](../property-detail-r26-other-homes/lyya-mobile.png) |

หมวดข้างต้นใช้จัดกรณีทดสอบของ papaipak ข้อมูลต้นทางยืนยันรายละเอียดของแต่ละบ้านและแถวใน Home เดิม แถว Home เดิมไม่ได้กำหนดสมาชิก 7 หมวดของ papaipak รายบ้าน ป้ายบนหน้าพักใช้ข้อเท็จจริงที่ตรวจสอบได้

[บอร์ดกรณีข้อมูล Desktop](data-states-desktop.png) · [มือถือ](data-states-mobile.png) · [กติกาสำหรับตอนทำโค้ด](handoff.md)

บอร์ดแสดงกรณีจริง DV-1200 ไม่มีรูป, DV-3209 มีรูปเดียว, DV-611 ไม่มีราคาเริ่มต้น, DV-1945 ใช้ข้อมูลสำรอง, DV-113 มีกฎยาว และตัวอย่างหน่วยความลึกของ DV-2122/DV-3178 สถานะปฏิทินในบอร์ดเป็นตัวอย่างจำลองที่ทำเครื่องหมายไว้ ส่วนปฏิทินในหน้าบ้านใช้ข้อมูล API เดือนพฤศจิกายน 2569

[แค็ตตาล็อก API](https://www.pmheevilla.com/api/houses?guests=1&bedrooms=1&maxPrice=100000&limit=24&page=1) · [Sitemap](https://www.pmheevilla.com/sitemap.xml) · [แถว Home เดิม](https://www.pmheevilla.com/api/home-sections) · [การตรวจแกลเลอรีเต็มรายบ้าน r2](../property-detail-audit-r2/README.md)

รายละเอียดต้นทางของแบบ r27: [91 CLEAR](https://www.pmheevilla.com/api/villas/1328) · [Great Oasis](https://www.pmheevilla.com/api/villas/2122) · [Prime Asia A4](https://www.pmheevilla.com/api/villas/269)

## ผลตรวจ API รายบ้าน

10 พฤศจิกายน 2569 เวลา 16:14–16:29 น. (ไทย) · รหัสจาก sitemap ตรงกับ API ค้นหาครบ 47 หน้า รวม 1,128 รหัสไม่ซ้ำ เรียก `GET /api/villas/{id}` ครบทุกหลัง ทั้งหมดได้ HTTP 200 โดย 1,119 หลังมี `detailStatus: available` และ 9 หลังได้ข้อมูลสำรอง `unavailable` ได้แก่ DV-1251, DV-1421, DV-1653, DV-1857, DV-1858, DV-1945, DV-1953, DV-1964, DV-2445

| สิ่งที่ต่างกันในข้อมูล | พบ | ผลต่อแบบ |
| --- | ---: | --- |
| ราคาเริ่มต้นว่าง | 9 หลัง | มีสถานะราคาไม่ระบุ แต่ยังดูปฏิทินได้ |
| รูปปกแค็ตตาล็อกว่าง | 12 หลัง | ตรวจแกลเลอรีจริงก่อนสรุปว่าไม่มีรูป |
| มีข้อความเปิดห้องหรือราคาแยก | 65 หลัง | รองรับห้องหลายฝั่งและกติกาตามวัน |
| มีข้อความเกี่ยวกับการใช้เสียง | 900 หลัง | มีที่สำหรับบอกเวลาและขอบเขตใน/นอกบ้าน |
| ธงอนุญาตสัตว์เลี้ยง / ไม่ทราบ | 681 / 9 หลัง | อ่านเงื่อนไขประกอบ ตัวกรองส่ง 53 หลังให้ตรวจธงเทียบข้อความ |
| ข้อความสัตว์เลี้ยงมีสัญญาณเรื่องค่าใช้จ่ายแต่ไม่พบหน่วยต่อวัน/คืน | 234 หลัง | เก็บข้อความเดิม ไม่เติมรอบการคิดเงินเอง |
| มีรายละเอียดห้อง / กฎบ้าน / ค่าใช้จ่ายเพิ่มเติม | 1,117 / 276 / 913 หลัง | แสดงหัวข้อและแท็บเท่าที่มีข้อมูล รองรับหลายบรรทัด |
| กล่าวถึงความลึกแต่ตัวกรองไม่พบหน่วย | 114 หลัง | เว้นค่าที่แยกหน่วยไม่ได้และส่งตรวจ |
| ตัวกรองพบความลึกผิดปกติ | 21 หลัง (22 จุด) | เว้นค่าที่มีปัญหา เก็บชนิดสระและสไลเดอร์ที่ยืนยันได้ |

เวลาเข้าพักที่พบอยู่ระหว่าง 10:00–15:00 น. และเวลาออก 10:00–13:00 น. จึงแสดงตามรายบ้านโดยไม่ตั้ง 14:00/11:00 เป็นค่าแทนเมื่อข้อมูลว่าง ข้อความภาพรวมยาวสุด 66 บรรทัด กฎบ้านยาวสุด 60 บรรทัดตามวิธีนับของรอบนี้

รายการความลึกที่เข้าเกณฑ์ส่งตรวจ: [DV-1137](https://www.pmheevilla.com/api/villas/1137), [DV-1158](https://www.pmheevilla.com/api/villas/1158), [DV-1382](https://www.pmheevilla.com/api/villas/1382), [DV-1507](https://www.pmheevilla.com/api/villas/1507), [DV-1539](https://www.pmheevilla.com/api/villas/1539), [DV-1962](https://www.pmheevilla.com/api/villas/1962), [DV-2145](https://www.pmheevilla.com/api/villas/2145), [DV-2224](https://www.pmheevilla.com/api/villas/2224), [DV-2314](https://www.pmheevilla.com/api/villas/2314), [DV-2322](https://www.pmheevilla.com/api/villas/2322), [DV-2406](https://www.pmheevilla.com/api/villas/2406), [DV-2444](https://www.pmheevilla.com/api/villas/2444), [DV-2455](https://www.pmheevilla.com/api/villas/2455), [DV-2467](https://www.pmheevilla.com/api/villas/2467), [DV-2621](https://www.pmheevilla.com/api/villas/2621), [DV-2735](https://www.pmheevilla.com/api/villas/2735), [DV-2908](https://www.pmheevilla.com/api/villas/2908), [DV-3073](https://www.pmheevilla.com/api/villas/3073), [DV-3109](https://www.pmheevilla.com/api/villas/3109), [DV-3170](https://www.pmheevilla.com/api/villas/3170), [DV-3178](https://www.pmheevilla.com/api/villas/3178) ตัวกรองอ่านบริเวณคำว่า “ลึก” และส่งตรวจเมื่อพบค่ามากกว่า 5 เมตรหรือช่วงไม่สมเหตุผล เกณฑ์นี้ใช้หาตัวอย่างเพื่อให้คนตรวจ ส่วนการตรวจนโยบายสัตว์เลี้ยงและข้อความเสียงใช้การค้นคำ จึงไม่ได้สรุปว่านโยบายขัดกันหรือจัดปาร์ตี้ได้ทุกหลัง

ปฏิทินรายเดือนตรวจแยก 13 บ้านตัวอย่าง ได้ HTTP 200 และ 30 วันครบทุกตัวอย่าง จำนวนรูปเต็มแค็ตตาล็อกอ้างการตรวจ r2 ส่วนรูปที่เพิ่มใน r27 เทียบรหัสกับแกลเลอรีรายบ้านอีกครั้ง

[บัญชีตรวจ 1,128 หลัง (JSONL)](catalog-audit.jsonl) · [สรุปและรหัสที่ต้องตรวจ (JSON)](audit-summary.json) · [แหล่งที่มารูป r27](../../dsd-001/papaipak-ui-assets/uid-003/r27-api-cases/source-record.json)

บัญชีรายบ้านเก็บผลตอบกลับ ชนิดและความครบของฟิลด์ สัญญาณสำหรับเลือกแบบ และตำแหน่งในแค็ตตาล็อก `categorySignals` คือหลักฐานประกอบการออกแบบ `legacyRails` คือแถวใน Home เดิม
