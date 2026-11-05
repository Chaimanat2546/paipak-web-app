# Home Auth G2-r19: ชวนยืนยันอีเมล

> เจ้าของยืนยัน “Google ไม่ต้องยืนยัน” ตาม [หลักฐาน](../home-auth-google-no-extra-email-verification.json) ไม่แสดงreminderนี้สำหรับGoogle signup/Login ภาพนี้เฉพาะสมัครด้วยอีเมลและรหัสผ่าน รูปแบบรับแล้วตามคำยืนยันล่าสุด ต่อมาเลือกOTPอีเมล6หลักตาม [หลักฐาน](../home-auth-email-verification-otp-decision.json)

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับหน้าต่างหลังสมัครอีเมลตาม [คำยืนยันเจ้าของ](owner-reminder-acceptance.json); วิธียืนยันเลือกOTP6แล้ว; หน้ากรอก/สำเร็จr20รอตรวจ

ต่อจากการรับ [Google failure-r18](../home-auth-google-g2-r18/owner-Google-error-acceptance.json) เฉพาะภาพที่แสดง กรณียกเลิกGoogleและG2รวมยังไม่ได้รับจากคำตอบนั้น

[หน้าชวนยืนยัน](vDPf8.png) · [โน้ต](zZbIa.png) · [manifest/hash](review-manifest.json)

ตาม [policyที่เลือกแล้ว](../home-auth-email-verification-decision.json) สมัครด้วยอีเมลแล้วเข้าใช้บัญชีในHomeได้ก่อนยืนยัน ข้อความชวนยืนยันต้องปิดหรือข้ามได้ และผู้ใช้กลับมายืนยันเองภายหลังได้

ร่างเสนอหลังlocal email signup: “สมัครสมาชิกสำเร็จ”, อีเมลตัวอย่าง, “ยืนยันอีเมลตอนนี้” และ “ใช้งานก่อน” พร้อมปิดX ใช้งานก่อน/ปิดกลับHomeต้นทางโดยไม่ทำให้email_verifiedเป็นจริงและไม่ขวางการเข้าใช้บัญชีนี้ ไม่เปลี่ยนBooking gateหรือpolicyของGoogle/OTP Login

เจ้าของเลือกOTPอีเมล6หลักสำหรับVerify-nowแล้วตาม [หลักฐาน](../home-auth-email-verification-otp-decision.json) ดู [หน้าถัดไปร20](../home-auth-email-verification-otp-g2-r20/README.md) ไม่อ้างว่าส่งอีเมล/สมัคร/sessionจริง ทางยืนยันภายหลังจากบัญชีเป็นข้อกำหนดส่งต่อAccount ไม่เริ่มสร้างProfile/Account pageหรือroute และไม่ตั้งความถี่เด้งซ้ำเอง

Native root `zZbIa`, modal `vDPf8` ในpapaipak-ui.pen ผ่านPencil MCP ใช้โครงAuth520px/Mitr/low-fiเดิม ตรวจภาพแล้วไม่เห็นล้นและไม่มีexecute warnings ภาพใหม่รับเฉพาะreminderแล้ว ไม่รับG2รวม/High-Fi/Frontend/backend คงMain Home/State library54รายการ/UXD-002เดิม
