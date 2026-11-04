# DSD-001 / Home-media-ui-r2

4 พฤศจิกายน 2026 · **ร่าง Desktop รอเจ้าของตรวจรับ**

ปรับตาม “tiktok อยากได้เป็น section 3D” ภายในขอบเขต Home ที่กำลังตรวจ ใช้ A สีแบรนด์ และ Mitr เดิม รุ่นนี้เปลี่ยนเฉพาะ TikTok เป็น 3D Coverflow; บทความและเนื้อหาอื่นเทียบกับ r1 แล้วตรงกัน

- [ดู TikTok 3D](e2IyY7.png)
- [TikTok พร้อมบทความ](Dn6ah.png) · [Home ทั้งหน้า](V9yDq1.png)
- [Native snapshot](editable-snapshot.json) · [review manifest](review-manifest.json) · [ผลตรวจ](verification.json) · [critique](critique.md)

## สิ่งที่ออกแบบ

คลิปกลางหันตรงและมีปุ่มเล่นเพียงจุดเดียว คลิปข้างเอียงเข้าหาศูนย์กลางและลดขนาดเป็นชั้นใกล้/ไกล เงาของการ์ดกับเงาตกบนพื้นฟ้าอ่อนทำให้เห็นระยะและการซ้อนกัน กรอบเวทีใช้ Light Blue เดิม ไม่มีฟอนต์หรือสีแบรนด์ใหม่

ด้านข้างใช้ native frames พร้อม perspective shader ของ Pencil จึงยังแก้รูปและเลเยอร์ได้ ไม่ใช่ภาพ collage ที่รวมทุกอย่างเป็น bitmap กดเลือกและกดเล่นเป็น proposed interaction; ปุ่มเลื่อนทั้งสองข้างแสดง enabled เพราะภาพนี้เป็นตำแหน่งกลางที่มีคลิปก่อนและหลัง

ข้อเสนอคือเลื่อนเลือกคลิปมาอยู่กลางแล้วกดเล่นทีละคลิป ยังไม่ได้อนุมัติ transition, loop, edge states หรือพฤติกรรมเลือกคลิปทุกกรณีจากภาพนี้

## Native และหลักฐานเดิม

Home-r10 node **V9yDq1** อยู่ต้นรายการ; TikTok node **e2IyY7** และเวที **KaJbF** ส่วน [ร่าง r1](../home-media-ui-r1/README.md) node fSC7S กับ Home-r8 ที่รับแล้ว node iQ3YE ยังอยู่

ภาพ/ชื่อคลิป/เครดิตเป็นข้อมูลศึกษา ใช้ generated-1/3/4/5/9 ที่มีอยู่เดิม ไม่อ้างว่าเป็นคลิปจริงหรือภาพปกจากช่องใด ไม่มีการเชื่อม TikTok หรือหน้าอ่านบทความ

ไฟล์เอฟเฟกต์ของ Pencil อยู่ที่ images/dsd-001-tiktok-depth-r2.glsl ข้าง native document และเก็บสำเนา [depth-projection.glsl](depth-projection.glsl) ไว้สำหรับตรวจ/ย้ายไฟล์ ไม่ใช่ shader ที่นำเข้าแอป Frontend และไม่มีการเพิ่ม dependency

ค้นและเปิด [Swiper Coverflow demo](https://swiperjs.com/demos/240-effect-coverflow/core.html) เป็นที่มาของรูปแบบคลิปกลางกับด้านข้าง แต่การจับภาพ browser timeout จึงไม่อ้างว่า screenshot ต้นทางผ่าน visual inspection ไม่มีการนำสี ฟอนต์ หรือภาพจาก demo มาใช้

## การตรวจและขอบเขต

เปิด PNG ของ section และภาพคู่บทความตรวจแล้ว การซ้อนเป็นลำดับและตัวหนังสืออยู่นอกภาพที่บิด perspective; ชื่อ/เครดิตอ่านได้ ปุ่มเล่นยัง56px และลูกศร44px ขอบหน้า56pxยังตรงกับบทความ

ตรวจ source r1, เนื้อหาเดิมนอก TikTok, บทความ และ variables เทียบกันแล้วตรงกัน หลังไม่นับ ID ที่เกิดจากการ copy Native frames ยังเป็นภาพร่าง ไม่ใช่ functional/browser/accessibility pass

Mobile ยังพัก, foundation-2-desktop และร่าง UI ยัง pending_owner_review, OPEN-001 ยังเปิด ไม่ย้าย shadow/geometry ของเวที3Dไปเป็น global tokens ไม่เริ่ม Task อื่นหรือ Frontend

