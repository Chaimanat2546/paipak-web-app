# DSD-001 / Home-media-ui-r1

4 พฤศจิกายน 2026 · **ร่าง Desktop รอเจ้าของตรวจรับ**

เจ้าของขอ “ออกแบบ ui เลยได้ไหม” หลังยืนยัน [ความต้องการ](../home-content-requirements.md) และอ่าน [ผลต่อ foundation](../home-content-foundation-impact.md) จึงเริ่ม UI สองส่วนนี้บนสำเนา Home-r8 ภายใน DSD-001 ตามคำขอล่าสุด เปลี่ยนจากลำดับเสนอเดิมที่ให้ตรวจรับ foundation ก่อนเป็นการทำร่างภาพเพื่อใช้ตรวจร่วมกัน คำขอนี้อนุญาตให้ทำร่างในขอบเขตดังกล่าว ไม่อนุมัติ foundation/แบบขั้นสุดท้ายหรือ Frontend

## แบบสำหรับตรวจ

- [TikTok และบทความที่เพิ่ม](QYUtP.png)
- [Home ทั้งหน้า](fSC7S.png)
- [TikTok](U85bZz.png) · [บทความ](XuqNc.png)
- [Native snapshot](editable-snapshot.json) · [review manifest และขอบเขต](review-manifest.json) · [ตรวจภาพ](critique.md) · [verification](verification.json)

Native source อยู่ใน papaipak-ui.pen ที่เปิดอยู่ ร่าง Home-r9 node **fSC7S** อยู่ต้นรายการ ส่วน Home-r8 node iQ3YE ที่รับแล้วเก็บไว้เดิม ตรวจ source equality แล้ว ไม่มีการเปลี่ยน Header/Hero/เจ็ดหมวด/การ์ดบ้านหรือ Footer เดิม

## สิ่งที่เสนอในร่างนี้

TikTok ใช้หัวข้อและคำแนะนำทางซ้ายกับคลิปแนวตั้ง3ใบที่มองเห็น มี fixture ใบที่4อยู่ใน track และปุ่มเลื่อนแยก ภาพปกนิ่งกับปุ่มเล่นสื่อ requirement ว่ากดเล่นเอง โดยไม่มีจำนวนวิวหรือ rating สมมติ

บทความใช้เรื่องเด่น1เรื่องและเรื่องรอง2เรื่องเพื่อให้ลำดับภาพต่างจากแถวบ้าน ชื่อเรื่องรองรับสองบรรทัดตามเนื้อหา ไม่คัดลอกกฎชื่อบ้านหนึ่งบรรทัด หัวข้อใช้ Mitr Regular และสี/กรอบ/ไอคอนต่อจาก A

ตำแหน่งก่อน Footer, จำนวนที่เห็น, สัดส่วนปกและขนาดตัวอักษรของส่วนเพิ่มเป็นข้อเสนอในร่าง ไม่ใช่ design tokens ที่เจ้าของรับแล้ว ไม่ย้ายค่าเหล่านี้เข้าชุด foundation-2-desktop หรือ shared defaults โดยอัตโนมัติ

## ภาพและเนื้อหา

ใช้ภาพศึกษา generated-1/3/4/5 ที่มีอยู่ใน Home-r8 ครอปประกอบร่าง ชื่อคลิป บทความ และเครดิตผู้สร้างเป็นตัวอย่าง ไม่มีการแอบอ้างว่าภาพเหล่านี้มาจาก TikTok หรือบทความเผยแพร่จริง ยังต้องเลือก URL/ปก/เครดิตและเนื้อหาจริง

การวิจัยก่อนทำร่างอ่านและดู [POOLA Journal](https://www.poolapoolvilla.com/blog) ผ่าน browser/CDP พบการ์ดที่ใช้รูป หมวด หัวเรื่อง คำโปรย และ metadata จึงแยกข้อมูลที่จำเป็นออกจากตัวเลข/ป้ายที่ไม่ต้องนำเข้ามา ไม่คัดลอกสี ฟอนต์ หรือทรัพย์สินของเว็บอ้างอิง และไม่ถือว่าเว็บเดิมเป็น visual baseline ปัจจุบัน

อ่าน [TikTok Embed Player](https://developers.tiktok.com/docs/en/embed-player) เพื่อกำหนดขอบเขตการเล่นในหน้า ส่วน interface ภายในตัวเล่นจริงยังต้องตรวจตาม provider ไม่อ้างว่าหน้าปกในร่างคือ native TikTok chrome ที่ทดสอบแล้ว

ใช้ Awesome DESIGN.md / Airbnb snapshot เป็นข้อมูลประกอบเรื่องภาพและ hierarchy ภายใต้ A เท่านั้น ไม่เปลี่ยน palette/type ของ papaipak

## ตรวจแล้วและข้อจำกัด

ตรวจ PNG ของสองส่วนแยก ภาพรวมสองส่วน และ Home ทั้งหน้าแล้ว การ์ด/หัวข้อไม่ชนกัน รอยต่อ Footer ยังต่อเนื่อง ภาพรวมใช้ขอบ56pxเท่ากัน Source เดิมและเนื้อหาที่คัดมาทั้ง11ส่วนเทียบแล้วตรงกันหลังไม่นับ ID

Pencil visitor bounds มีตำแหน่งและ clipped flags ที่ไม่ตรงภาพ render เช่น Footer ยังถูกรายงาน y4230 ทั้งที่อยู่หลังส่วนเพิ่มใน PNG จึงใช้ลำดับ layer กับ PNG เป็นหลัก และเก็บข้อจำกัดไว้ ไม่อ้างว่า warnings ทั้งหมดเป็น browser pass

ยังไม่มีการเล่นคลิปจริง การสั่งหยุดคลิปอื่น การเลื่อนแถว หรือ navigation ที่ทำงาน States ตอนเล่น/focus/loading/unavailable ยังไม่ครบ ไม่มี Mobile ใหม่ ไม่มี runtime/AA acceptance และยังไม่ถือว่า DSD-001 เสร็จ

Foundation-2-desktop ยัง pending_owner_review, OPEN-001 ยังเปิด และ CTA เดิมยังคงตามที่เลือก ต้องให้เจ้าของอนุมัติแบบ/version ก่อน Frontend ตามเดิม

