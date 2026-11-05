# Home Auth OTP G2-r8

> ทบทวนข้อผิดพลาดตามinputแล้ว ดู [r26](../home-auth-error-audit-r26/README.md) ภาพ/approvalเดิมคงเป็นประวัติ ไม่อนุมัติรุ่นแก้แทนเอง

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับกรณีรหัสไม่ถูกต้องแบบล้าง6ช่องตาม [คำตอบ1](owner-invalid-code-acceptance.json)

รับ [สถานะกำลังตรวจr7](../home-auth-otp-auto-g2-r7/owner-checking-state-acceptance.json) แล้วเฉพาะส่วนที่แสดง ทำร่างกรณีรหัสผิดแยกจากหมดอายุหรือระบบขัดข้อง

[หน้ารหัสผิด](yA4C7.png) · [บอร์ดพร้อมโน้ต](b5e3O.png) · [manifest/hash](review-manifest.json)

เสนอให้ล้างรหัสที่ถูกปฏิเสธทั้ง6ช่อง โฟกัสช่องแรก แสดง “รหัสไม่ถูกต้อง กรุณากรอกใหม่” ใต้ช่อง คงอีเมลและคืนปุ่มส่งซ้ำ/ใช้รหัสผ่าน เมื่อเริ่มกรอกใหม่เอาข้อความผิดออก และครบ6หลักจึงตรวจใหม่ตามauto verifyที่เลือกไว้ ไม่ตรวจวนรหัสเดิมหรือส่งรหัสใหม่เอง

เส้นเข้มช่องแรกเป็นสัญลักษณ์focusในlow-fi ยังไม่รับรองkeyboard runtimeหรือfocus systemขั้นสุดท้าย ข้อเสนอclear/refocus/error-clearนี้รับแล้วเฉพาะรหัสผิดตามคำตอบ1ล่าสุด ไม่ยกคำตอบรับloadingเป็นการรับerror/retry/expiry/resendหรือG2รวม

Native root `b5e3O`, modal `yA4C7` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้วไม่เห็นเนื้อหาล้นและมี6ช่องครบ เก็บภาพr6/r7และhashที่รับไว้เดิม Main Home/State library/UXD-002ไม่เปลี่ยน ไม่มีAuthจริง/High-Fi/Frontend/backend
