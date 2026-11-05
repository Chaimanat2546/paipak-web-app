# Home Auth OTP G2-r12

> เจ้าของขอ “นับในปุ่มแทน” ตาม [คำแก้ไข](../home-auth-otp-button-countdown-decision.json) ร่างนี้ไม่รับและเก็บเป็นประวัติ ดู [r13](../home-auth-otp-button-countdown-g2-r13/README.md)

DSD-001/C2 · 5 พฤศจิกายน 2026 · รอตรวจกรณีรอก่อนส่งซ้ำ

เจ้าของรับ [request-failure-r11](../home-auth-otp-resend-failure-g2-r11/owner-resend-failure-acceptance.json) แล้ว คงภาพและhashเดิม

[หน้ารอก่อนส่งซ้ำ](Q3S76.png) · [โน้ต](T2uTL.png) · [manifest/hash](review-manifest.json)

เสนอเมื่อระบบแจ้งพักการส่งซ้ำ: แสดง “ยังขอรหัสใหม่ไม่ได้ กรุณารอสักครู่” พร้อมไอคอนนาฬิกาและปุ่มส่งรหัสใหม่ที่ยังใช้ไม่ได้ ไม่มีวงโหลดหรือนับถอยหลัง คงอีเมลและทางเลือกใช้รหัสผ่าน/แก้ไข/ย้อนกลับ/ปิด

เมื่อระบบอนุญาตจึงเปิดปุ่มให้ผู้ใช้กดเอง ไม่ส่งอัตโนมัติ ไม่กำหนดระยะเวลา/quota/อายุOTP/providerหรือสัญญาปลดพักจากร่างนี้ ภาพต่อจากรหัสเดิมหมดอายุจึงพักช่อง ไม่ยกไปปิดรหัสที่ยังใช้ได้ในบริบทอื่น

ภาพและพฤติกรรมรอก่อนส่งซ้ำยังรอตรวจ ไม่รับpolicyจริง/verify failureหรือG2รวม Native root `T2uTL`, modal `Q3S76` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้ว6ช่องครบ ไม่เห็นล้นและไม่มีexecute warnings ไม่เปลี่ยนHome/State library/UXD-002 ไม่มีAuthจริง/High-Fi/Frontend/backend
