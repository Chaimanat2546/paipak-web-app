# Home Auth Recovery G2-r1

> ทบทวนข้อผิดพลาดตามinputแล้ว ดู [r26](../home-auth-error-audit-r26/README.md) ภาพ/approvalเดิมคงเป็นประวัติ ไม่อนุมัติรุ่นแก้แทนเอง

5 พฤศจิกายน2026 · DSD-001/C2 · **รับโครงRecovery coreรายจุดแล้ว; ยังไม่รับG2รวมและstatesอื่น**

ต่อจาก [Login-r3ที่รับโครงแล้ว](../home-auth-login-g2-r3/owner-login-structure-acceptance.json) ใช้ [วิธีลิงก์ทางอีเมลที่เลือกแล้ว](../home-auth-reset-link-decision.json) ภายใต้ [G0 plan-1](../home-auth-g0-approval.json)

## ภาพและสถานะ

| ภาพ | Native | สถานะ |
|---|---|---|
| [ขอรับลิงก์ทางอีเมล](tJxL1.png) | tJxL1 | รับเฉพาะโครงแล้ว |
| [หลังรับคำขอ](z5EJtN.png) | z5EJtN | ประวัติ; ใช้ [Ack-r2](../home-auth-recovery-g2-r2/README.md) ที่ถอนเปลี่ยนอีเมลและรับแล้ว |
| [ตั้งรหัสใหม่](ZsOMo.png) | ZsOMo | รับเฉพาะโครงฟอร์มแล้ว |
| [ตั้งสำเร็จ](MKMGi.png) | MKMGi | รับหน้าสำเร็จและปุ่มเปิดLoginแล้ว |
| [ลิงก์ใช้ไม่ได้](l0YcM.png) | l0YcM | รับหน้านี้และปุ่มกลับไปขอลิงก์ใหม่แล้ว |

[บนHome1440×960](W2GLH.png) · [บอร์ดรวม](n2gWyS.png) · [IDs/hash](review-manifest.json)

Source `papaipak-ui.pen` ผ่านPencil MCP; root `n2gWyS` แยกจากหลักฐานที่รับแล้วและState library ไม่มีการแก้UXD-002 pen หรือHomeหลัก

## สัญญาและข้อเสนอ

- ขอรับลิงก์ด้วยอีเมลตามที่เลือก ไม่เปลี่ยนเป็นOTP/SMSจากการเพิ่มphone login
- แบบหลังส่งใช้ข้อความมีเงื่อนไขว่าหากอีเมลนี้มีบัญชีจะได้รับลิงก์ ไม่เปิดเผยข้อมูลบัญชีอื่นและไม่กล่าวว่าmockส่งอีเมลจริง
- ปุ่มส่งซ้ำ/เปลี่ยนอีเมลในภาพหลังส่งเป็นข้อเสนอที่จะตรวจถัดไป ยังไม่กำหนดcooldown/จำนวนครั้ง/อายุลิงก์
- ตั้งรหัสใหม่ขั้นต่ำ8ตัว พร้อมconfirmationต้องตรงกัน แสดง/ซ่อนเป็นcontrolsในโครง ไม่ใช้กฎตั้งรหัสไปขวางLoginเอง
- ตั้งสำเร็จยังไม่แสดงว่าเข้าสู่ระบบแล้ว เสนอให้กดกลับLogin ไม่auto-loginจากการเลือกemail-link
- ลิงก์ใช้ไม่ได้แสดงทางขอลิงก์ใหม่และกลับLogin ไม่กำหนดเหตุผลtoken/สถานะproviderจริงจากภาพ
- Homeเป็นฉากประกอบแบบ การเปิดemail linkที่มีreload/แท็บใหม่ไม่กู้Booking IntentจากstorageตามQ-03 ความคงอยู่ของSearch/originจริงยังต้องตรวจแยก

## การตรวจและขอบเขต

โครงต่อจากLogin/Registerที่รับแล้ว ใช้Mitr400, label16, input48, eye/close44 และgrayLow-Fi ไม่เพิ่มcolor/font/globaltokenใหม่ ยังไม่รับHigh-Fi/OPEN-001

รับฟอร์มขอรับลิงก์ครั้งนี้ไม่เท่ากับรับอีกสี่statesหรือG2รวม Validation/loading/error/Google/email-verification/focusยังต้องทำต่อ ไม่อ้างว่าทั้งAuthเสร็จหรือruntimeพร้อม ไม่มีemail/token/session/backendจริง Mobileพัก ไม่มีcode/CSS/commit/push/deploy

## ผลตรวจฟอร์มขอรับลิงก์

เจ้าของเลือก1รับ `tJxL1` ตาม [หลักฐาน](owner-forgot-request-acceptance.json) แล้ว ไม่รับอีกสี่statesจากคำตอบนี้ ต่อ `z5EJtN` ซึ่งมีข้อความแบบมีเงื่อนไขและปุ่มกลับLogin/ส่งซ้ำ/เปลี่ยนอีเมล รอรับเฉพาะหน้าและทางไปต่อ ไม่กำหนดcooldown/จำนวนครั้งหรือรับรองmailจริง

เจ้าของรับackพร้อมให้เอาเปลี่ยนอีเมลออก ใช้ [R2ที่แก้ตรงตามคำสั่ง](../home-auth-recovery-g2-r2/owner-acknowledgement-acceptance.json) เป็นcurrent ack ไม่ใช้ปุ่มเปลี่ยนอีเมลจากPNGเก่าในตาราง ข้อเสนอนี้ถูกถอนแล้ว ส่วนโครงResetยังรอตรวจ

เจ้าของเลือก1รับโครงReset `ZsOMo` ตาม [หลักฐาน](owner-reset-form-acceptance.json) แล้ว ยังไม่รับหน้าสำเร็จ/การกลับLoginจากคำตอบนี้ ขั้นถัดไปเสนอ `MKMGi` และปุ่มเข้าสู่ระบบไปLogin ไม่สร้างsessionหรือบอกว่าloginสำเร็จเอง

เจ้าของเลือก1รับ `MKMGi` และทางกดเปิดLoginตาม [หลักฐาน](owner-reset-success-acceptance.json) แล้ว ไม่มีauto-loginจากการตั้งรหัสเพียงอย่างเดียว ข้อเสนอเดิมเรื่องทางกลับLoginจึงมีคำตัดสินแล้ว ต่อ `l0YcM`: ปุ่มขอลิงก์ใหม่เสนอให้เปิดฟอร์มขออีเมลเดิม; กลับLoginและปิดตามบริบท ทางนี้ยังรอตรวจและไม่กำหนดเหตุผล/อายุtokenจริง

เจ้าของเลือก1รับ [unusable-linkและทางขอลิงก์ใหม่](owner-unusable-link-acceptance.json) แล้ว จบเฉพาะการรับโครงRecovery coreรายจุด ไม่เท่ากับG2รวม ต่อ [Login states-r1](../home-auth-login-states-g2-r1/README.md) บอร์ดRecoveryเก็บArchive/source `n2gWyS` โดยคงIDsและภาพเดิม
