# Home Auth Register G2-r1

5 พฤศจิกายน2026 · DSD-001/C2 · **รับโครงRegisterแล้ว; G2รวมยังไม่ผ่าน**

ต่อจาก [Login-r2ที่รับแล้ว](../home-auth-g2-r2/owner-login-structure-acceptance.json) ภายใต้ [G0 plan-1](../home-auth-g0-approval.json) และ [specปัจจุบัน](../home-auth-desktop-spec.md) ไม่ใช่การเริ่มUID-005/Profile/MobileหรือAuthจริง

## ภาพ

[Register modal](V9XgD.png) · [บนHome1440×960](T8ZNE0.png) · [บอร์ดพร้อมโน้ต](jfNA7.png) · [IDs/hash](review-manifest.json)

Native root `jfNA7`, scene `T8ZNE0`, modal `V9XgD` ผ่านPencil MCP ใน `papaipak-ui.pen` ไม่มีการแก้UXD-002 pen, HomeหลักหรือState library54รายการ

## ข้อมูลและการจัดกลุ่ม

- Username → เบอร์โทร → อีเมล → รหัสผ่าน → ยืนยันรหัสผ่าน บังคับครบตามคำตอบล่าสุด
- Usernameใช้ชื่อแสดงซ้ำได้ ไม่ใช้ชื่อ/นามสกุลหรือเพิ่มusername login
- รหัสผ่านplaceholder “อย่างน้อย8ตัวอักษร” ตามเจ้าของ confirmationกรอกซ้ำและต้องตรงกัน ไม่สร้างกฎผสมตัวอักษร/โทร/เพดานที่ยังไม่ตกลง
- ปุ่มสมัครสมาชิกเป็นprimary ตามด้วย “หรือ”/Google และลิงก์กลับLogin เข้าชุดโครงLogin-r2ที่รับแล้ว
- Googleคงทางเลือกเดิม โดยไม่ใช้ฟอร์มนี้บังคับเติมusername/โทรสำหรับGoogle และไม่เพิ่มlocal passwordให้ผู้ใช้Google
- หลังสมัครemailเข้าสู่บัญชีได้ก่อน ข้อความชวนยืนยันอีเมลต้องข้ามได้; stateหลังสมัครยังต้องออกแบบ/ตรวจ ไม่อ้างว่าภาพนี้ครอบคลุมแล้ว
- ไม่เพิ่มcheckboxยินยอมหรือแต่งข้อความทางกฎหมาย ข้อความ/จุดเชื่อมนโยบายต้องหารือในขอบเขตที่เกี่ยวข้องก่อนสรุป

## จุดตรวจและขอบเขต

รับเฉพาะโครงRegisterรุ่นนี้หรือขอแก้ ก่อนForgot/Reset/statesและรับG2รวม ภาพสีเทาเป็นLow-Fi ไม่ใช่High-Fiหรือtokenใหม่ ขนาด520×791เป็นproposalในviewport1440×960 ไม่รับรองจออื่น/runtime/keyboardจากภาพนิ่ง

ตรวจlabelทั้งห้าช่องและลำดับแล้ว รวมclose/eye/primary/Google/กลับLogin แก้สำเนาlabelที่ติดชื่อเดิมก่อนส่งตรวจ ภาพHome contextทั้ง13sectionsหลักไม่ถูกแก้ OPEN-001เปิด Mobileพัก ไม่มีcode/CSS/backend/commit/push/deploy

เจ้าของเลือก1รับRegisterเฉพาะโครงตาม [หลักฐาน](owner-register-structure-acceptance.json) และขอเพิ่มphone+passwordในLoginเป็นข้อแก้ไขแยก ดู [Login-r3](../home-auth-login-g2-r3/README.md) ไม่แก้ภาพRegisterที่รับแล้วหรืออนุมัติG2รวม/High-Fi
