# Login error placement G2-r2

5 พฤศจิกายน2026 · DSD-001/C2 · **รอเลือกตำแหน่ง/รูปแบบข้อความ**

เจ้าของถามว่าปกติวางแบบนี้หรือไม่ ยังไม่ถือว่าอนุมัติหรือปฏิเสธภาพเดิม จึงอ่าน [WAI User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/) และทำตัวเลือกเฉพาะตำแหน่ง/กล่อง ไม่มีการเปลี่ยนAuth methods/business rules

WAIแยกoverall feedbackก่อนformและinline feedbackใกล้field ไม่กำหนดตำแหน่งเฉพาะสำหรับinvalid-credentials Login เอเจนต์เสนอAเป็นการประยุกต์กับmodalนี้ ไม่อ้างว่าทุกเว็บใช้หรือกฎWCAGบังคับA และไม่ได้วัดความนิยมของแต่ละแบบ ดู [บันทึกแหล่งอ้างอิง/คำถาม](reference-and-owner-question.json)

## ภาพ

[เทียบสามแบบ](u0aE4E.png) · [A เหนือช่องกรอก](W7bxCs.png) · [B ใต้รหัสผ่านไม่มีกล่อง](Tc3zT.png) · [C กล่องก่อนปุ่มแบบเดิม](C8pW5.png) · [manifest](review-manifest.json)

ทั้งสามใช้ข้อความเดียวกัน: เข้าสู่ระบบไม่สำเร็จ/ให้ตรวจอีเมลหรือเบอร์และรหัสผ่าน ไม่เปิดเผยว่าบัญชีใดมีอยู่ ไม่ทำให้ช่องเฉพาะเป็นinvalidโดยเดาว่าช่องนั้นผิด A/Cต่างตำแหน่ง ส่วนBเอาพื้นกล่องและpaddingออกโดยคงข้อความ

Native root `u0aE4E` ผ่านPencil MCP ใน `papaipak-ui.pen` Current initial state `W6UVRW` ยังเก็บเป็นdraft ไม่มีภาพใดรับจนเจ้าของเลือก ทั้งหมดLow-Fi สีgrayไม่ใช่error tokenสุดท้าย ร่างrequired/loading, G2รวม, High-Fiและruntimeยังไม่รับ State library54รายการ/Homeหลัก/UXD-002ไม่เปลี่ยน ไม่มีcode/backend/Frontend
