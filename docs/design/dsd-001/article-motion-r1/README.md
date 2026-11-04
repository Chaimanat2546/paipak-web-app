# DSD-001 / Article-motion-r1

4 พฤศจิกายน 2026 · ข้อเสนอ motion รอตรวจรับ

เจ้าของส่งคืนหน้าตา Hover/Focus เดิมด้วย “ไม่เข้ากัน พอจะดีไซต์ให้เป็นแบบ motion ได้ไหม” จึงทำ interactive study ในแชต โดยคงข้อตกลงรูปและข้อความเป็นลิงก์เดียวต่อเรื่อง

ใช้ภาพที่exportจากPencilต้นฉบับ KVouE/J241b8/Rfisd ผ่านMCP ไม่แก้ภาพต้นฉบับ ไม่เพิ่มภาพหรือbrandใหม่ องค์ประกอบเป็นเรื่องเด่นหนึ่งเรื่องและเรื่องรองสองเรื่อง ใช้Mitrและสีที่รับไว้ ไม่เปลี่ยนMainHome, TikTokหรือบทความต้นฉบับ

## Motion ที่เสนอ

- ภาพขยายเบาๆถึง1.035เท่าในกรอบเดิม420ms
- แผงข้อความเรื่องเด่นยกขึ้น6pxใน336ms
- ข้อความเรื่องรองขยับไปขวา3px ลูกศรขยับ2pxตามแนวชี้273ms
- เส้นใต้Pinkปรากฏตามจังหวะ ไม่ใช้กรอบNavycustomครอบทั้งการ์ดแบบร่างเดิม
- ทำงานเมื่อhover/focus และมีปุ่มดูตัวอย่างทีละเรื่องหนึ่งรอบ ไม่มีการวนหรือเปิดหน้าอ่านจริง
- คงbrowserfocusที่เข้าถึงได้และลิงก์เดียวต่อเรื่อง ลดmotionตามระบบและtoggleในpreviewโดยยังเห็นเนื้อหาและfeedback

ระยะเวลา/ระยะขยับทั้งหมดเป็นข้อเสนอเฉพาะstudy ผู้ใช้ยังไม่อนุมัติmotionversionนี้ การย่อ/เรียงในพื้นที่แชตมีไว้ให้ตรวจmotion ไม่ใช่การอนุมัติMobileหรือresponsivebreakpoints

## Source และผลตรวจ

ไฟล์fragmentอยู่ที่ C:/Users/chaym/.codex/visualizations/2026/11/03/01a1a0a6-78fc-7dd3-9a64-5c1d42b618ee/papaipak-article-motion.html แสดงผ่านconversationvisualization ไม่ใช่เว็บที่publishหรือapplicationcodeในrepository ดู [manifest](review-manifest.json) สำหรับpathและค่าจังหวะ

ตรวจsyntaxJavaScriptผ่านและfragmentเล็กกว่า1MB BrowserDOMก่อนการบล็อกพบ3เรื่อง รูป3ภาพโหลดครบ icon4ตัวและไม่ล้นแนวนอนที่720px การจับภาพPenciltimeout และbrowserfallbackปฏิเสธfileURLตามsecuritypolicy จึงหยุดเส้นทางนั้น ไม่อ้างว่าทดสอบhover/keyboard/reducedmotionจริงหรือดูscreenshotสำเร็จ

ยังไม่ได้ข้อสรุปชื่อยาว รูป/ข้อมูลไม่พร้อม initial loading/empty/error ไม่ตีความคำขอmotionเป็นคำตอบคำถามชื่อยาวเดิม ไม่รับรองclicknavigationหรือหน้าอ่านบทความจริง

Mobileพัก, OPEN-001เปิด, foundation/แบบรวมยังไม่ตรวจรับ และไม่เริ่มFrontend/Taskอื่นจากstudyนี้

