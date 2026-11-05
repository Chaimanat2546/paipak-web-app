# Home Auth OTP G2-r7

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับสถานะกำลังตรวจรหัสตาม [คำตอบ1](owner-checking-state-acceptance.json); statesอื่นยังรอตรวจ

เจ้าของเลือก2ให้เลื่อนช่องอัตโนมัติและตรวจทันทีเมื่อครบ6หลักตาม [หลักฐาน](../home-auth-otp-auto-verification-decision.json) จึงเอาปุ่มยืนยันออกจากร่างใหม่ คงรูปแบบ6ช่องที่รับไว้และภาพr6เดิม

[เปรียบเทียบก่อน/ระหว่างตรวจ](hkVe5.png) · [ระหว่างกรอก](ynlC3.png) · [กำลังตรวจรหัส](PmCdx.png) · [โน้ต](wCZid.png) · [manifest/hash](review-manifest.json)

Native root `wCZid`, comparison `hkVe5`, entry `ynlC3`, checking `PmCdx` ในpapaipak-ui.pen ผ่านPencil MCP รูปแสดงสถานะนิ่ง ไม่ใช่การตรวจOTPจริง ตัวเลข123456เป็นfixture

ร่างที่เสนอ: ระหว่างตรวจแสดงวงโหลดและข้อความ “กำลังตรวจรหัส…” พักช่องกรอก/ส่งซ้ำ/สลับรหัสผ่านชั่วคราว ปิด/ย้อนกลับ/แก้ไขอีเมลยังยกเลิกได้ ต้องยกเลิกattemptเดิมและไม่ให้responseล่าช้าพาออกจากflowใหม่ ป้องกันคำขอซ้อนและไม่ตรวจวนเองหลังผิด รายละเอียดretry/errorยังต้องตรวจ ไม่กำหนดอายุOTPหรือcooldownจากการพักปุ่มระหว่างrequest

คำตอบ2รับเฉพาะauto advanceและauto verify ไม่รับภาพloading/การพักcontrolsเอง ไม่เลือกกฎpaste/autofill/backspaceหรือretryทั้งหมด ต่อรับสถานะนี้ก่อนerror และยังต้องรับG2รวมก่อนHigh-Fi ไม่มีcode/Authจริง/Frontend/backendหรือTaskอื่น

ตรวจภาพและ6ช่องครบ รอบexecuteสุดท้ายไม่มีwarnings คงหลักฐานr6และMain Home/State libraryเดิม
