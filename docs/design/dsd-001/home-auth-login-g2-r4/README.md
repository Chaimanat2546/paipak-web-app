# Home Auth Login G2-r4 · แบ่งสองขั้น

> เจ้าของแก้ให้OTPเป็นหลัก รหัสผ่านเฉพาะเมื่อเลือกเอง ตาม [หลักฐานล่าสุด](../home-auth-otp-primary-amendment.json) ร่างนี้ไม่ใช่defaultปัจจุบันและยังไม่รับภาพ เก็บไว้พิจารณาสาขารหัสผ่าน; ช่องทางOTPรอเลือก

5 พฤศจิกายน2026 · DSD-001/C2 · **แนวคิดflowยืนยันแล้ว ภาพสองขั้นรอตรวจ**

เจ้าของเลือก1จาก [การหารืออ้างอิงAirbnb](../home-auth-airbnb-flow-discussion.md) ให้ยืมการแบ่งขั้น แต่คงอีเมล/เบอร์+รหัสผ่านและGoogle ตาม [หลักฐาน](../home-auth-two-step-login-decision.json) ไม่เลือกวิธีOTP ไม่คัดลอกAirbnbทุกพฤติกรรม ไม่ยกเลิกข้อมูลsignupหรือreset-linkเดิม

## ภาพและเลเยอร์

[เทียบสองขั้น](TBu2c.png) · [ขั้นแรก](TxO8X.png) · [ขั้นรหัสผ่าน](y9BBA.png) · [error C ในขั้นรหัสผ่าน](o9jws.png) · [Home context](Gptse.png) · [บอร์ดพร้อมโน้ต](UXSzw.png)

Native `UXSzw`, first-stage scene `Gptse` / modal `TxO8X`, password `y9BBA`, error `o9jws` ผ่านPencil MCPใน `papaipak-ui.pen` / [manifestและhash](review-manifest.json)

## โครงที่เสนอให้รับรอบนี้

1. ขั้นแรก: อีเมลหรือเบอร์โทรหนึ่งช่อง → ดำเนินการต่อ; Googleและลิงก์สมัครสมาชิกอยู่ด้านล่างตามโครงที่เคยรับ
2. ขั้นรหัสผ่าน: แสดงidentifierที่กรอกพร้อมแก้ไข, ช่องรหัสผ่าน/ลืมรหัสผ่าน, ปุ่มเข้าสู่ระบบ มีลูกศรย้อนกลับกับปิด
3. ย้อนกลับ/แก้ไขคงidentifierในflowต่อเนื่อง ปิดกลับoriginตามกฎเดิม ไม่สร้างการกู้ข้ามreloadหรือเก็บรหัสผ่านในintent
4. การกดต่อไม่แสดงว่าบัญชีมีอยู่หรือไม่ และไม่ส่งOTPเพราะการแบ่งขั้น รูปแบบ/การจับคู่เบอร์/providerยังเป็นcontractเปิด
5. Google/Signupอยู่ขั้นแรก; ปุ่มกลับLoginจากRegister/Resetเสนอให้เปิดขั้นแรกตามflowปัจจุบัน ไม่มีauto-loginจากreset

ตัวอย่างขั้นถัดไปใช้ `tawan@example.com` เป็นfixture ไม่ใช่บัญชีจริง ปุ่มแก้ไขคือแก้identifierก่อนLogin ไม่ใช่การเพิ่มเปลี่ยนอีเมลบัญชี หรือคืนปุ่มเปลี่ยนอีเมลที่เจ้าของเอาออกจากreset-ack

## สถานะการรับและหลักฐานเดิม

แนวคิดสองขั้นเลือกแล้ว แต่ร่างใหม่ยังไม่รับ โครงLoginหน้าเดียวr3เก็บเป็นประวัติที่เคยรับโดยไม่แก้PNG/หลักฐานเดิม ร่างstatesหน้าเดียวที่ยังไม่รับย้ายArchive/history `XWgqE` ส่วน [ตัวเลือกerrorCที่เลือกไว้](../home-auth-login-error-placement-g2-r2/owner-C-selection.json) ย้ายหลักฐานไปArchive/source `u0aE4E` และนำตำแหน่งCไปเสนอในขั้นรหัสผ่าน ยังไม่อ้างว่าภาพerrorใหม่ผ่านG2รวม

Register/Recoveryที่รับโครงรายจุดไว้คงเดิม และยังต้องรับG2รวม/required/loading/Googlecancel/verification/keyboardก่อนHigh-Fi ไม่มีการเปลี่ยนHomeหลัก/State library54รายการหรือUXD-002 pen Mobileพัก OPEN-001เปิด ไม่มีcode/backend/Frontend/commit/push/deploy
