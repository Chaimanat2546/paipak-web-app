# ตรวจภาพ · pencil-A-1

ตรวจภาพ native และ exports ล่าสุด Desktop 1440×1048 และ Mobile 390×1306 เมื่อ 3 พฤศจิกายน 2026 ไม่ใช่ผลตรวจ browser/runtime

## การปรับที่มีหลักฐานจากภาพ

1. เปลี่ยนจาก composition B เป็น A ตามเจ้าของ: full-width scene, headline บนภาพ, white pool-edge curve และ centered search ไม่มี inset ของ B ใน active A
2. ภาพ Mobile ที่ crop จาก Desktop ทำให้ต้นไม้เข้าหาข้อความ จึงสร้างภาพ Mobile โดยเฉพาะและตรวจภาพเต็มอีกครั้ง
3. Hero Desktop รอบแรกมีน้ำถูกบังมากเกินไป จึงเพิ่มพื้นที่ foreground pool รอบทดลอง generated-7 มีเส้นแบ่งในภาพและถูกแทนด้วย generated-9 ตรวจภาพสุดท้ายไม่พบเส้นแบ่งนั้น
4. แยกเส้นชมพูจากท้ายตัวอักษร ไม่ให้ชนหัวเรื่อง คง navigation, labels, ราคาและหมวดไว้เป็น native layers

## ผลตรวจปัจจุบัน

- อ่านแคนวาสผ่าน MCP ได้: A Desktop 116 nodes / Mobile 77 nodes; ทั้งคู่มี named layers และตัวอักษรผูก `$font.primary` = Mitr
- เจ็ดหมวดมีครบทั้งสองจอ Desktop สี่การ์ดในแถว Mobile หนึ่งคอลัมน์สองการ์ด ส่วนหมวดที่พ้น viewport Mobile ถูกตัดตาม presentation ของ horizontal scroll อย่างตั้งใจ
- Image fills ของ A ทุกตำแหน่งมีไฟล์ local ใน backup; ไม่มีทั้งหน้าเป็นภาพ raster แทน UI
- เปิดตรวจ exported images ทั้งสองขนาดล่าสุดแล้ว ไม่พบข้อความหลัก/ราคา/CTA ถูกตัดหรือองค์ประกอบซ้อนทับข้อความ ภาพสระนำสายตาและ search อยู่กึ่งกลาง
- Original review-2 ทั้งหกภาพมี SHA-256 ตรง manifest เดิม ไม่เขียนทับภาพที่เจ้าของใช้เลือกทิศทาง
- `python scripts/validate-handoff.py` ผ่านโครงสร้าง 110 decision records / 14 tasks; `git diff --check` ผ่านสำหรับไฟล์ task/design ที่เกี่ยวข้อง

## ข้อจำกัดในการตัดสินใจ

Native typography และความเข้มของภาพต่างจาก raster concept A เดิม จึงต้องให้เจ้าของตรวจรุ่น pencil-A-1 แยก ภาพบ้านแต่ละจอและรายการเป็น AI imagery สมมติ ไม่มีการรับรอง property identity หรือ production rights

CTA ชมพูเดิม/ขาวเป็น visual reference ที่เจ้าของเลือก nominal contrast 2.705343:1 และ OPEN-001 ยังเปิด ไม่อ้างว่าผ่าน AA สำหรับข้อความปกติหรือไอคอนที่จำเป็นต่อการใช้ปุ่ม

ไม่ได้รัน Taste browser inspector เพราะเป็น native Pencil canvas ไม่มีหน้า DOM ที่สร้างขึ้นในรอบนี้ ไม่ได้ทดสอบ Tablet/320px, text zoom, keyboard, screen reader, real scroll/carousel, interaction states, reduced motion, search/auth/booking หรือ contrast บนภาพทุก pixel/state ไม่ให้คะแนน runtime หรือ production readiness จากภาพ

## สถานะ

เจ้าของเลือก A แทน B แล้ว แต่ native pencil-A-1 และ final foundation version ยังไม่อนุมัติ ร่าง foundation-1 ต้องทบทวน alignment กับ A จึงยังไม่ทำเครื่องหมาย DSD-001 complete และไม่เริ่ม Frontend
