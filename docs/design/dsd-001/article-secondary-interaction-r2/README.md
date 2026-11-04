# Article-secondary-interaction-r2

5 พฤศจิกายน 2026 · ตอนกดเด้งอย่างเดียว · รอตรวจ

เจ้าของระบุ “อันนี้ไม่ต้องเด้งเฉยๆพอ” รับเป็นคำแก้สองจุดล่าสุดให้เด้งอย่างเดียวโดยไม่แผ่สี และแจ้งความเข้าใจนี้ในแชตแล้ว ถ้าเจ้าของแก้ความหมายให้ยึดคำชี้แจงล่าสุด ไม่ยกถ้อยคำนี้เป็นการอนุมัติ preview ที่ยังไม่ได้แสดง

เรื่องรองและลิงก์บทความทั้งหมดใช้เด้ง +3/-4/0px ครั้งเดียว 420ms และ press entry 140ms คงสีปกติระหว่าง activation ตัดการคำนวณพิกัด วงสี และ animation ของสีออกจาก click handler รูปและตำแหน่งข้อมูลเดิม คง supporting hover r8 ตามที่รับไว้

เรื่องเด่น press-r4 ที่รับแล้วไม่เปลี่ยน ยังแผ่สีจากจุดกดพร้อมเด้ง 420ms ก่อนเปิดบทความ ส่วนสองจุดนี้ถึงจังหวะเปิดปลายทางหลังเด้ง 420ms ตามแนวเดียวกัน เมื่อ reduced motion หรือไม่รองรับ animation ให้ไปต่อทันที ตัวอย่างไม่เปิดปลายทางจริง

Keyboard focus แยกจาก activation ยังเก็บ cue พื้นเข้มที่เสนอไว้สำหรับ Tab เพื่อไม่ให้หาตำแหน่งไม่เจอ การขอเด้งอย่างเดียวไม่ได้ยืนยันหรือถอด keyboard cue โดยอัตโนมัติ supporting/index focus ทั้งชุดยังรอตรวจ ไม่ใช้กรอบล้อมการ์ดเก่าที่ถูกปฏิเสธ

Native board `lnXuU` แสดงสีปกติและปิดผิว Navy ที่เสนอใน r1 ไว้ ไม่ลบประวัติ [ภาพ](lnXuU.png) · [Snapshot](editable-snapshot.json) · [Manifest](review-manifest.json) ภาพนิ่งไม่พิสูจน์จังหวะเด้ง/navigation

ตรวจ syntax และ source ว่า click handler มีเฉพาะ bounce โดยไม่มี color animation และ source ที่รับก่อนหน้า hash เดิม ยังไม่ทดสอบ browser interaction/font loading/keyboard runtime หรือรับรอง WCAG ทั้งชุด Main Home, variables และแหล่งที่รับไว้คงเดิม ไม่เริ่ม Frontend/backend/deploy Mobile พัก OPEN-001 เปิด

เจ้าของยืนยัน “แบบนี้แหละ” รับ activation เรื่องรอง/ลิงก์ทั้งหมดแบบเด้งอย่างเดียว ตาม [หลักฐานและ hash](owner-secondary-acceptance.json) ไม่ยกเป็นการรับ keyboard focus หรือบทความ/Home/foundation ทั้งชุด

หลังส่ง Article Desktop review-1 เจ้าของส่งกลับฝั่งขวา ผู้จัดทำถอนพื้นเข้มของ secondary/index ที่ขยายเพิ่มเอง รายการรับ r2 ยังคงเฉพาะ bounce-only activation การมี cue พื้นเข้มใน demo เก่าหรือข้อเสนอ keyboard ด้านบนไม่ใช่ approval และห้ามนำส่วนที่ถอนไปใช้ใน final package ดู [คำแก้](../article-desktop-review-1/right-side-correction/owner-right-side-correction.json)
