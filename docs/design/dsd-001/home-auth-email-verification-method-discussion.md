# วิธียืนยันอีเมลหลังlocal signup

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของเลือกOTP6หลักทางอีเมลแล้ว ไม่เริ่มAuthจริง

เจ้าของรับ [reminder-r19](home-auth-email-verification-g2-r19/owner-reminder-acceptance.json) สำหรับสมัครด้วยอีเมลและรหัสผ่านแล้ว ข้ามหรือปิดได้ ไม่บังคับemail verificationก่อนเข้าใช้บัญชีในHome Google signup/Loginข้ามขั้นยืนยันของเว็บตาม [ข้อยืนยัน](home-auth-google-no-extra-email-verification.json)

คำถามที่เจ้าของเลือก1แล้ว: กด “ยืนยันอีเมลตอนนี้” แล้วให้ใช้วิธีไหน?

1. OTP6หลักทางอีเมล (แนะนำ ใช้รูปแบบ6ช่องที่มีอยู่ให้เข้าชุด)
2. ลิงก์ยืนยันในอีเมล (กดลิงก์แทนกรอกรหัส ต้องมีสถานะลิงก์และปลายทางกลับ)
3. ให้เลือกทั้งOTPและลิงก์ (สะดวกเพิ่มแต่มีตัวเลือกและstatesเพิ่ม)

เจ้าของเลือก1แล้วตาม [คำตัดสิน](home-auth-email-verification-otp-decision.json) การเลือกLogin OTPก่อนหน้านี้ไม่ได้ยืนยันวิธีverifyของsignupโดยอัตโนมัติ และForgot/reset email linkที่รับไว้ไม่กำหนดverification methodนี้เอง การใช้UIเดิมไม่ใช่การเลือกAPI/session/tokenหรือรับรองว่ารหัสLoginใช้ยืนยันอีเมลได้ การตรวจprovider/อายุรหัสหรือquotaเป็นcontractแยก

เมื่อเลือกวิธีจึงวางflow/statesเฉพาะที่จำเป็นในขอบเขตHome Auth Desktopเดิม ไม่เริ่มAccount/Profile/Mobile/UID-005หรือBackend/Frontend การรับreminderไม่รับG2รวม
