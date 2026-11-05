# Home Auth Login G2-r3 · อีเมลหรือเบอร์โทร + รหัสผ่าน

5 พฤศจิกายน2026 · DSD-001/C2 · **รับโครงLogin-r3แล้ว; G2รวมยังไม่ผ่าน**

เจ้าของรับ [Register-r1เฉพาะโครง](../home-auth-register-g2-r1/owner-register-structure-acceptance.json) แล้วและขอเพิ่ม [Phone + Password Login](../home-auth-phone-login-amendment.json) รอบนี้แก้ช่องอีเมลเดิมให้รับอีเมลหรือเบอร์โทรในช่องเดียว คงpassword/Google/forgot/registerและorderingของ [Login-r2](../home-auth-g2-r2/owner-login-structure-acceptance.json)

ดูภาพ/IDs/hashใน [manifest](review-manifest.json) ไฟล์Pencilเดิม `papaipak-ui.pen` ผ่านMCP ไม่แก้Homeหลัก/UXD-002/State library ภาพacceptedLogin-r2และRegister-r1คงเดิม

ไม่มีusername login, OTPหรือSMS; Forgotยังรับอีเมลแล้วส่งลิงก์ตามคำตอบเดิม ยังไม่กำหนดcountry code/normalization/เบอร์ซ้ำ/การยืนยันเบอร์หรือการจับคู่บัญชีจริงจากภาพนี้ Google-only accountไม่ถูกเพิ่มlocal passwordเอง

ขอรับเฉพาะภาพLogin-r3ก่อนForgot/Reset/statesและG2รวม ยังเป็นLow-Fi ไม่ใช่High-Fi/FrontendหรือAuthจริง Mobileพัก OPEN-001เปิด ไม่มีcode/CSS/backend/commit/push/deploy

[Login modal](r5hMgj.png) · [บนHome](C2V7pa.png) · [บอร์ดและโน้ต](VD0Hr.png) / Native `VD0Hr` / `C2V7pa` / `r5hMgj`

เจ้าของเลือก1รับLogin-r3เฉพาะโครงตาม [หลักฐาน](owner-login-structure-acceptance.json) แล้ว ไม่อนุมัติระบบเบอร์โทรจริงหรือRecovery/High-Fi บอร์ดเก็บArchive/sourceคงID ต่อ [Recovery-r1](../home-auth-recovery-g2-r1/README.md)
