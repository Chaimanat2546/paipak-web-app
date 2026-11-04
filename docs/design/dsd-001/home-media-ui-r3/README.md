# DSD-001 / Home-media-ui-r3

4 พฤศจิกายน 2026 · **ร่าง Desktop รอเจ้าของตรวจรับ**

ปรับตามคำตอบ “ประมาณนี้” พร้อม [ภาพอ้างอิงของเจ้าของ](reference-owner.png) เป็นการแก้ส่วน TikTok ในขอบเขตเดิม ยังไม่ใช่การอนุมัติแบบ/version หรือ foundation

- [TikTok ที่ปรับตามภาพ](MIdin.png)
- [TikTok กับบทความ](YGt3D.png) · [Home ทั้งหน้า](eMYWM.png)
- [Native snapshot](editable-snapshot.json) · [review manifest](review-manifest.json) · [ผลตรวจ](verification.json) · [critique](critique.md)

## สิ่งที่ปรับ

ใช้พื้นขาว ข้อความและปุ่มอยู่ซ้าย คลิปหลักอยู่ขวา คลิปถัดไปซ้อนถอยลึกเฉพาะด้านขวาของคลิปหลัก พร้อมลูกศรขนาบและจุดบอกตำแหน่งใต้ภาพ ใช้มุม perspective ของ Pencil กับภาพที่แก้แยกเลเยอร์ได้

คง Navy/Pink/Mitr ของ papaipak แทนสีส้มในตัวอย่าง ป้ายใช้ “คลิปคัดสรรจาก TikTok” ตามแหล่งเนื้อหาที่เจ้าของยืนยัน ไม่คัดลอกคำรับรองลูกค้าจริง รายการสิ่งอำนวยความสะดวก หรือคำรับรองราคา/การจองในภาพมาเป็นข้อเท็จจริงของเว็บ

ปุ่ม “ดูที่พักทั้งหมด” เป็นข้อเสนอทางเข้า Results เดิมในร่าง ไม่ใช่การสร้างระบบจอง/หน้าใหม่ ใช้ Pink/White ตาม visual choice เดิมและคง OPEN-001 เปิด จุดบอกตำแหน่งใช้ Navy เพื่อให้มองเห็นบนขาว ไม่ใช่ปุ่มกดที่รับ interaction แล้ว

ร่างนี้แสดงคลิปแรก จึงมี previous แบบ disabled และ next แบบ enabled จุดทั้ง5เป็น fixture pagination ไม่ใช่จำนวนคลิปจริงที่ยืนยันแล้ว การกดเล่นยังเป็น manual และทีละคลิปตาม requirement

## ขอบเขตและหลักฐาน

Native Home-r11 node **eMYWM**, TikTok **MIdin**, บริบทสองส่วน **YGt3D** อยู่ต้นรายการใน Pencil เก็บ r2/r1/Home-r8 เดิมไว้ เปรียบเทียบ source แล้ว บทความและเนื้อหานอก TikTok ตรงกับ r2 หลังไม่นับ ID ที่ copy

ภาพปกเป็น generated study images เดิม ไม่ใช่ภาพ TikTok จริง ภาพอ้างอิงที่แนบเก็บไว้แบบเดิมเพื่อระบุ composition ไม่รับรองว่าเป็น production asset หรือหลักฐานของ business claims

เอฟเฟกต์ใช้ [design shader ของ r2](../home-media-ui-r2/depth-projection.glsl) ไม่มี dependency หรือ application code เพิ่ม แก้คำเตือน sizing ของสอง container ที่ซ่อนไว้จาก r2 แล้ว ไม่มีการเปลี่ยน source r2 เพื่อแก้ร่างใหม่

ตรวจ PNG ของ TikTok และภาพคู่บทความแล้ว กรอบภาพ เงา ข้อความ ลูกศรและตัวบอกตำแหน่งไม่ชนกันที่1440px ไม่ใช่ browser/keyboard/player pass

Mobile ยังพัก, OPEN-001 ยังเปิด และ foundation-2-desktop ยัง pending_owner_review ร่างนี้ไม่แก้ global tokens ไม่เริ่ม Task อื่นหรือ Frontend

