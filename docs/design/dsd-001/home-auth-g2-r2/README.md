# Home Auth G2-r2 · ปรับลำดับ Login

5 พฤศจิกายน2026 · DSD-001/C2 · **รับโครงLoginแล้ว; G2รวมยังรอตรวจ**

เจ้าของส่ง [r1กลับ](../home-auth-g2-r1/owner-revision-request.json) เพราะการจัดวางไม่คุ้นเคย รอบนี้ตรวจprimary-source Auth entryก่อนแก้ แยกสิ่งที่อ่านได้จริงจากข้อจำกัดเครื่องมือใน [reference research](reference-research.json)

## ภาพ

[Login modal](Pu3jT.png) · [Home context](f2TAg.png) · [บอร์ดรวม](yh2Wm.png) · [IDs/hash](review-manifest.json)

Native `yh2Wm` / scene `f2TAg` / modal `Pu3jT` ใน `papaipak-ui.pen` ผ่านPencil MCP; r1เก็บในArchive/historyโดยคงIDsและภาพเดิม ไม่แก้HomeหลักหรือUXD-002 pen

## สิ่งที่แก้และหลักฐาน

- กลุ่มอีเมล/รหัสผ่านอยู่ก่อนปุ่มLogin ไม่มีGoogleมาแทรกทางเลือกหลัก
- ลืมรหัสผ่านอยู่ขวาของlabelรหัสผ่าน เพื่อลดแถวเดี่ยวที่ดูแยกจากช่อง
- ทางเลือกGoogleอยู่หลังปุ่มLoginและคำว่า “หรือ”
- หัวข้อกลางและลิงก์สมัครสมาชิกขีดเส้นใต้แยกจากข้อความถามให้เห็นหน้าที่

หน้า [Booking.com](https://account.booking.com/sign-in) ที่อ่านได้เรียงช่องอีเมลและปุ่มดำเนินการก่อนกลุ่มตัวเลือกGoogle/ผู้ให้บริการอื่น จึงใช้หลักการจัดกลุ่มนี้ ไม่คัดลอกflowสองขั้นหรือเพิ่มผู้ให้บริการใหม่ ไม่สรุปว่าทุกเว็บต้องจัดแบบเดียวกัน หน้า [Airbnb](https://www.airbnb.com/login) อ่านได้เฉพาะentryphone/emailกับContinueและseparator จึงไม่ใช้ยืนยันตำแหน่งpassword/Google

Reference screenshotได้มาเป็นURLแต่ไม่ได้ตรวจภาพ ส่วนPencil browser screenshotหมดเวลา จึงไม่อ้างว่าได้ตรวจvisualของสองเว็บครบแล้ว ไม่เก็บsession-token URLsหรือsigned media URLsในRepo

## ขอบเขตตรวจ

ยังเป็นLow-Fiในสีเทา ใช้Mitr400 ไม่ใช่หน้าตาสุดท้าย ปุ่มGoogleยังใช้ข้อความwireframe ไม่วาดGปลอม assetทางการและสีจริงอยู่ในHigh-FiหลังรับG2 การจัดวางใหม่ไม่เปลี่ยนemail/password/Google, signupข้อมูลล่าสุด, confirmation, minimum8, email verificationข้ามได้, Google profileภายหลังหรือforgotผ่านลิงก์

รับเฉพาะโครงLoginรุ่นนี้ก่อนRegister/Forgot-reset/statesและการรับG2รวม ไม่ตีความเป็นHigh-Fi/ทั้งAuth/Frontend approval ยังไม่มีruntime/click/keyboard/networkจริง OPEN-001เปิด Mobileพัก State library54รายการยังเดิม

## ผลตรวจเฉพาะLogin

เจ้าของเลือก1รับโครงLogin-r2ตาม [หลักฐาน](owner-login-structure-acceptance.json) แล้ว ภาพ/orderingนี้รับเฉพาะG2Login ไม่รับflowรวม/Register/Reset/High-Fi บอร์ดหลักฐานเก็บArchive/sourceโดยคงIDs ขั้นถัดไป [Register-r1](../home-auth-register-g2-r1/README.md)
