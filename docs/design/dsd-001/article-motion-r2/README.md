# DSD-001 / Article-motion-r2

4 พฤศจิกายน 2026 · ร่าง motion รอตรวจรับ

ตามคำขอ “อันใหญ่อยากได้เป็นยกรูปขึ้นด้วยไม่ใช่ zoom” เปลี่ยนเฉพาะเรื่องเด่นให้กรอบรูปและแผงข้อความยกขึ้นพร้อมกัน6px ใน336ms โดยรูปไม่ขยาย เรื่องรองและจังหวะอื่นคงจากr1

พื้นที่กดทั้งรูปและข้อความยังเป็นลิงก์เดียว ภาพและเนื้อหาเดิมคงไว้ Reduced motionหยุดการยกทั้งรูปและแผงข้อความ และยังคงfeedbackที่ไม่เคลื่อน

Previewปัจจุบันอยู่ที่ C:/Users/chaym/.codex/visualizations/2026/11/03/01a1a0a6-78fc-7dd3-9a64-5c1d42b618ee/papaipak-article-motion-r2.html เป็นstudyในแชต ไม่ใช่applicationimplementation เก็บ [r1](../article-motion-r1/README.md) ไว้เป็นประวัติ

ตรวจsyntaxJavaScriptผ่าน ตรวจsourceว่ารูปเรื่องเด่นไม่เข้าzoomselectorและใช้ระยะ/เวลาเดียวกับแผงข้อความ ยังไม่ได้ตรวจhover/keyboard/reducedmotionจริงในbrowserรอบนี้ ข้อจำกัดbrowserในr1ยังคงอยู่

ดู [manifest](review-manifest.json) สำหรับscopeและค่า ชื่อยาวและfallbackยังไม่ได้คำตอบ ไม่อนุมัติmotionversionทั้งชุดจากคำขอแก้เฉพาะนี้ ไม่แก้Pencilต้นฉบับ/applicationcode/sharedtokens และไม่เริ่มFrontend MobileพักและOPEN-001เปิด
