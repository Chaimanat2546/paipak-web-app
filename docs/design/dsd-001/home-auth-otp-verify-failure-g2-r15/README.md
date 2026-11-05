# Home Auth OTP G2-r15

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับกรณีระบบตรวจรหัสขัดข้องตาม [คำตอบ1](owner-verification-failure-acceptance.json)

เจ้าของรับ [countdown-only-r14](../home-auth-otp-countdown-only-g2-r14/owner-countdown-only-acceptance.json) แล้วเฉพาะรูปแบบ ไม่เลือก00:45เป็นเวลาจริง ภาพและhashเดิมคงไว้

[หน้าตรวจรหัสขัดข้อง](d0PtEH.png) · [โน้ต](CdSeA.png) · [manifest/hash](review-manifest.json)

เสนอกรณีผลตรวจไม่สำเร็จ/ไม่แน่ชัด: คงอีเมลและรหัสในflowนี้ให้แก้ได้ แสดง “ตรวจรหัสไม่สำเร็จ กรุณาลองอีกครั้ง” พร้อมปุ่ม “ลองตรวจอีกครั้ง” ไม่แจ้งว่ารหัสผิดหรือหมดอายุโดยไม่มีผลยืนยัน

รหัสเดิมที่ไม่เปลี่ยนต้องกดลองเองจึงตรวจอีกครั้ง ไม่ตรวจวนหลังerror ส่วนรหัสที่แก้แล้วครบ6หลักใช้auto verifyตามเดิม ทางเลือกส่งรหัสใหม่/รหัสผ่าน/ย้อนกลับ/แก้ไขอีเมล/ปิดยังอยู่โดยเคารพข้อจำกัดที่เกี่ยวข้อง ไม่อนุมานว่าauthenticatedจากผลที่กำกวม ไม่กู้OTPข้ามreload ตัวเลข123456เป็นfixture ไม่มีการส่งรหัสหรือเรียกAuthจริง

กรณีรหัสผิดและหมดอายุที่รับก่อนหน้าคงเดิม ร่างระบบตรวจขัดข้องรับเฉพาะส่วนข้างต้นแล้ว ไม่มีการรับprovider/session contract/เวลารอ/quotaหรือG2รวม Native root `CdSeA`, modal `d0PtEH` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้วไม่เห็นล้น มี6ช่องครบและไม่มีexecute warnings ไม่เปลี่ยนHome/State library/UXD-002 ไม่มีHigh-Fi/Frontend/backend
