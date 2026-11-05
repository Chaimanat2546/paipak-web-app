# Home Auth Login states G2-r1

> ทบทวนข้อผิดพลาดตามinputแล้ว ดู [r26](../home-auth-error-audit-r26/README.md) ภาพ/approvalเดิมคงเป็นประวัติ ไม่อนุมัติรุ่นแก้แทนเอง

5 พฤศจิกายน2026 · DSD-001/C2 · **รอตรวจเฉพาะสถานะข้อมูลLoginไม่ถูกต้อง**

ต่อจาก [Login-r3โครงที่รับแล้ว](../home-auth-login-g2-r3/owner-login-structure-acceptance.json) และ [Recovery coreที่รับรายจุดแล้ว](../home-auth-recovery-g2-r1/README.md) อยู่ในstatesตาม [G0เดิม](../home-auth-g0-approval.json) ไม่ใช่High-FiหรือAuthจริง

## ภาพ

| สถานะ | ภาพ/Native | การรับ |
|---|---|---|
| ผลLoginไม่ผ่านแบบรวม | [W6UVRW](W6UVRW.png) | รอตรวจเฉพาะสถานะนี้ |
| เว้นช่องว่างแล้วsubmit | [b9XFG](b9XFG.png) | ร่างสำหรับตรวจถัดไป |
| ระหว่างส่งคำขอ | [f7pjh2](f7pjh2.png) | ร่างสำหรับตรวจถัดไป |

[บนHome1440×960](j2lvK.png) · [บอร์ดพร้อมโน้ต](XWgqE.png) · [manifest](review-manifest.json)

## สิ่งที่เสนอ

- ข้อผิดพลาดรวมใต้passwordก่อนปุ่มLogin: แจ้งว่าเข้าสู่ระบบไม่สำเร็จ ให้ตรวจอีเมล/เบอร์/รหัส ไม่ระบุว่าบัญชีมีอยู่หรือส่วนใดผิด ตามprivacy contractเดิม
- คงidentifierสำหรับแก้และแสดงช่องpasswordแบบปิดบังในmock ไม่เก็บหรือกู้รหัสผ่านจากintent/storage ข้อมูล `tawan@example.com` เป็นfixture ไม่ใช่บัญชีจริง
- Required-stateแยกจากผลตรวจcredentials: แสดงหลังsubmitที่ยังกรอกไม่ครบ ให้แก้ช่องแรก ไม่ใช้กฎตั้งรหัสขั้นต่ำ8มาปฏิเสธLoginบัญชีเดิม
- Submitting-stateเสนอป้องกันส่งซ้ำและสลับGoogleขณะรอผล แต่อยู่ในร่างที่ยังไม่รับ ไม่อ้างว่ายกเลิกงานฝั่งserverได้จากการปิดmodal
- ตัวเลข/รูปแบบโทร/username/data/providerยังตามข้อค้าง ไม่เพิ่มregexหรือแสดงว่าตรวจชื่อบัญชีจริงแล้ว

## การตรวจ

อ่านภาพทั้งสามstatesแล้ว ตรวจfield labels, ลำดับfeedbackและcontrols โดยแยกสถานะที่กำลังขอรับจากร่างถัดไป Feedbackอยู่ในform ไม่ใช่developer noteบนUI ขนาดและระดับสีเป็นLow-Fi ไม่ใช่globaltoken/OPEN-001 resolution

Native root `XWgqE`, scene `j2lvK` ผ่านPencil MCP ใน `papaipak-ui.pen` สำเนาจากLogin-r3 ไม่เปลี่ยนHomeหลัก/UXD-002 penหรือState library54รายการ ไม่มีprovider/request/credentialsจริงและไม่ทดสอบkeyboard/click/network

การรับerrorนี้ไม่รับrequired/loading/Googlecancel/email-verification/errorเครือข่ายหรือG2รวม Mobileพัก ยังไม่เริ่มHigh-Fi/code/CSS/backend/Frontend/commit/push/deploy

เจ้าของถามตำแหน่งfeedback ยังไม่อนุมัติสถานะนี้ ดู [placement-r2เทียบA/B/C](../home-auth-login-error-placement-g2-r2/README.md) เป็นคำถามปัจจุบัน required/loadingยังไม่รับ
