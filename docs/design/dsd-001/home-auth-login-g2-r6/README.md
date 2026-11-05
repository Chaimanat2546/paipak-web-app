# Home Auth Login G2-r6

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับเฉพาะรูปแบบ OTP 6 ช่องแล้วตาม [คำตอบ1](owner-otp-layout-acceptance.json); พฤติกรรมและstatesยังรอตรวจ

เจ้าของขอ OTP แยกช่องและเลือก6หลักตาม [หลักฐาน](../home-auth-otp-six-digit-decision.json) ปรับเป็น6ช่องขนาด56×56px ช่องว่าง12px ในmodalเดิม ไม่กำหนดอายุรหัส/เวลารอส่งซ้ำหรือproviderจากคำตอบนี้

[หน้า OTP](IRBZ2.png) · [เทียบขั้นแรกกับ OTP](CqdcY.png) · [บอร์ดพร้อมโน้ต](Cnd8Z.png) · [manifest/hash](review-manifest.json)

Native root `Cnd8Z`, comparison `CqdcY`, entry `d0mD4f`, OTP `IRBZ2`, row `F331yz` ในpapaipak-ui.pen ผ่านPencil MCP คงร่างr5และภาพเดิมไว้เป็นประวัติ ทางเลือกรหัสผ่านยังอ้างr5 `mswk5` ไม่แก้Home/State library/UXD-002

OTPยังเฉพาะอีเมล เบอร์โทรใช้รหัสผ่าน สมัครอีเมลยังตั้งรหัสผ่านขั้นต่ำ8ตัวและconfirmationตรงกัน Googleคงเดิม รับเฉพาะรูปแบบช่องตามภาพแล้ว การกรอก/วางทั้งรหัส/autofill/เลื่อนช่อง/ลบ/submitและstatesยังต้องระบุและตรวจในรอบถัดไป ไม่ถือว่ากดทำงานจริงหรือรับG2รวม/High-Fi/Frontend/backend

ตรวจภาพพบ6ช่องครบและไม่เห็นเนื้อหาตัด คำเตือนflex x/yแก้ด้วยfixed viewportแล้ว รอบสุดท้ายไม่มีexecute warnings
