# Results-upper-r3 · papaipak.com

4 พฤศจิกายน 2026 · DSD-001 / F-01 · Desktop ส่วนบนเท่านั้น · รอเจ้าของตรวจรับ

เจ้าของเลือกให้ทำส่วนบนก่อนด้วยคำสั่ง “โอเคเดี๋ยวเรามาทำส่วนบนกันก่อน” หลังหารือเรื่องความสูงก่อนรายการบน Results Desktop รอบนี้จัดหัวข้อ แถบค้นหา และ Suggested Search Chips ใหม่ โดยใช้ Direction A, Mitr และ palette เดิม Mobile ยังคงพักตามคำสั่งเจ้าของ

[Desktop จอแรก](desktop-fold.png) · [เฉพาะส่วนบน](upper-section.png) · [ก่อน–หลัง](desktop-before-after.png) · [native ก่อนปรับ](before-snapshot.json) · [native หลังปรับ](after-snapshot.json) · [ผลตรวจ](verification.json)

## ตัวอย่างที่ศึกษาก่อนออกแบบ

เปิด [Airbnb Results / Pattaya](https://www.airbnb.com/s/Pattaya--Thailand/homes) ใน browser ของ Pencil และตรวจ [ภาพ Header จริง](reference-airbnb-header.jpg) เมื่อ 4 พฤศจิกายน 2026: สถานที่ วัน และผู้เข้าพักอยู่ใน search bar เดียว โดยมีทางลัดใกล้ search นำหลักการจัดกลุ่มและความกระชับมาใช้ ไม่คัดลอกโลโก้ สี ฟอนต์ ตัวกรอง หรือ business rules ของ Airbnb

[หน้า Airbnb Pattaya ที่ค้นพบจากการค้น](https://www.airbnb.com/pattaya-city-thailand/stays) เป็น destination landing page จึงไม่นำ screenshot หน้ายาวหรือ skeleton ระหว่างโหลดมาอ้างว่าเป็นแบบ Results ที่เสร็จแล้ว หลักฐาน compact bar ใช้ Header ของหน้า Results ที่โหลดเสร็จ ภาพนี้เป็น research reference ไม่ใช่ asset ของ papaipak สำหรับนำขึ้นเว็บ

## สิ่งที่ปรับ

- หัวข้อเปลี่ยนจาก “ค้นหาพูลวิลล่า” เป็น “พูลวิลล่าในพัทยา” ตามสถานที่ของ mock search ปัจจุบัน แล้ววางจำนวนที่พักเป็นข้อมูลรองในบรรทัดเดียว เช่น “ที่พักตัวอย่าง 24 หลัง” คงคำระบุข้อมูลสมมติ
- รวมสถานที่ วันเข้าพัก ผู้เข้าพัก และปุ่มค้นหาไว้ในกรอบเดียวสูง 80px ตัดกรอบย่อยสามช่องเดิม ใช้ไอคอนและ label/value แยกหน้าที่ พื้นที่กดแต่ละ field สูง 64px ปุ่มค้นหาสูง 56px คง field IDs และค่าที่มีอยู่
- ย้ายคำแนะนำกับ chips ทั้งสามรายการให้อยู่ในแถวเดียวสูง 40px ไม่เพิ่ม/เปลี่ยน search categories
- นำจำนวนบ้านจากหัวคอลัมน์รายการมารวมกับหัวข้อด้านบน รูปบ้านกับแผงตัวกรองจึงเริ่มในแนวเดียวกัน ส่วน Active Filter Chips ของสถานะกรองแล้วยังคงอยู่และทำหน้าที่เดิม

ชื่อสถานที่ในหัวข้อเป็นบริบทของผลค้นหาที่ใช้อยู่ ไม่ควรเปลี่ยนตาม draft ที่ยังไม่ได้ค้นหา เมื่อไม่ระบุสถานที่ให้ใช้ “พูลวิลล่าทั้งหมด” วันที่/ผู้เข้าพักยัง optional และไม่เพิ่มการ login ก่อนสำรวจ

## ภาพปัจจุบันและขนาด

| Desktop state | ภาพ | ขนาด | รูปบ้านแรก |
|---|---|---|---|
| Results ปกติ `osaIa` | [ดูภาพ](screens/osaIa.png) | 1440×1815 | y=364 |
| Apply filters แล้ว `NmzZ4` | [ดูภาพ](screens/NmzZ4.png) | 1440×1501 | y=436 เนื่องจากมี Active Filter Chips เดิม |
| Results หน้า 2 `HpR7z` | [ดูภาพ](screens/HpR7z.png) | 1440×1815 | y=364 |

Native source: `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` ใช้ page IDs เดิมทั้งสาม โดย `osaIa` อยู่รายการแรกใน layer tree ไม่สร้างหน้าใหม่มาทับ Results ปัจจุบัน

หน้า Results ปกติเห็นรูปบ้านเร็วขึ้น 167px จาก y=531 เป็น y=364 ในจอ 1440×900 เห็นการ์ดแถวแรกครบและรูปแถวถัดไปเริ่มเข้าจอ คง grid 3 คอลัมน์และขนาดการ์ดเดิม

## หลักฐานตรวจและข้อจำกัด

เทียบ native snapshots ก่อน/หลังแล้ว Header, Footer, Filter draft panel, การ์ดทั้งหมดใน Desktop ทั้งสาม state, ค่า search ทั้งสามช่อง และ label Suggested Search Chips ตรงกันทุก field ที่ต้องรักษา Mobile ทั้งสามหน้าและ Main Home ตรงกันทั้งหมด ส่วนที่ย้ายตาม layout มีเพียงตำแหน่งสัมพันธ์บนหน้า ไม่แก้ตัวกรองหรือข้อมูลบ้าน

ตรวจภาพ default ทั้งหน้าและจอแรกแล้ว ข้อความ/ไอคอนของ search แสดงครบ ตัวอย่าง Header จริงของ Airbnb ตรวจจากภาพที่โหลดเสร็จแล้ว ภาพ fold และ before/after เป็น crop ของ native exports เพื่อให้เทียบตำแหน่งได้ ไม่ใช่ functional prototype

opened location/date/guest overlays ยังไม่ได้วาดซ้ำตามตำแหน่งใหม่ และยังไม่ทดสอบ keyboard/focus หรือ search จริง ขั้นนี้เป็นการตรวจ visual ของส่วนบน การอนุมัติส่วนบนและเวอร์ชันยังรอเจ้าของ ไม่อ้างว่าพร้อม Frontend OPEN-001 ของ pink/white CTA ยังเปิดตามข้อสรุปเดิม ไม่มี application code, backend หรือ deploy

## Critique

ROUND 1

Seen in one second: หัวข้อบอกพื้นที่ ก่อนสายตาไปยังแถบค้นหารวมและรูปบ้านที่ขึ้นมาสูงกว่าเดิม

Idea (one sentence): รวมบริบทและการแก้เงื่อนไขให้กระชับ เพื่อให้รายการบ้านเป็นพื้นที่หลักของ Results Desktop

Live thing: static Pencil; field IDs/values เดิมยังอยู่ แต่ไม่ใช่ search ที่ทำงานจริง

Layout words by section: header=approved plain navigation / context=destination+count / search=one segmented bar / suggestions=inline shortcuts / body=existing sidebar+grid

Scores: design 6.8 · usability 6.5 · creativity 5.5 · content 5.0 → overall 6.3

Caps applied: subjective static review, fixtures/AI imagery, functional focus/overlay anchors ยังไม่ทดสอบ และ OPEN-001 ยังเปิด

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. [Desktop จอแรก](desktop-fold.png): ตัวกรองยังสูงและมีช่องราคาซ้อนตามรุ่นเดิม เก็บไว้ตามขอบเขตที่เจ้าของให้ทำส่วนบนก่อน
2. [ส่วนบน](upper-section.png): ต้องตรวจการเปิดและ focus ของ location/date/guest overlays ที่ตำแหน่งใหม่ในรอบ state review หลังเลือก visual
3. [Desktop จอแรก](desktop-fold.png): ข้อความขาวบนชมพูยังเป็น OPEN-001 ไม่เปลี่ยน branding หรือปิดประเด็นเอง
