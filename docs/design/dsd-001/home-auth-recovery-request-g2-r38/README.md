# Recovery Request States G2-r38

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับ4สถานะส่งคำขอRecoveryแล้ว

เจ้าของรับ [Login request-r37](../home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) แล้ว ชุดนี้ใช้ฟอร์มForgot/resetที่รับไว้ เติมbusy/known connection failureตามpatternเดียวกัน ไม่เปิดเลือกวิธีกู้รหัสใหม่

[เทียบ4สถานะ](VYEnh.png) · [ขอลิงก์กำลังส่ง](e90Mg.png) · [ขอลิงก์เชื่อมต่อไม่ได้](wmhoz.png) · [บันทึกกำลังส่ง](WQbH9.png) · [บันทึกเชื่อมต่อไม่ได้](rhTqa.png) · [บอร์ด](q2EE0Y.png) · [manifest/IDs/hash](review-manifest.json)

Forgotช่วงส่งพักemail/ส่งซ้ำ/กลับLoginชั่วคราว แต่ปิดได้ เมื่อทราบว่าเชื่อมต่อไม่ได้คงอีเมล แจ้งก่อนprimaryและลองส่งเอง ไม่ทำemailผิดเอง หลังรับคำขอใช้generic ack-IvrCQที่รับแล้ว ไม่เปิดเผยว่ามีบัญชีหรือส่งถึงinboxแล้ว และไม่คืนปุ่มChange email

Resetช่วงส่งพักpassword/confirmation/show-hide/บันทึก แต่ปิดได้ กรณีเชื่อมต่อไม่ได้คงdraftแบบปิดบัง แจ้งก่อนprimaryและลองเองเมื่อlink/บริบท/ผลครั้งก่อนอนุญาต ไม่ตีความnetwork failureเป็นรหัสผ่านหรือลิงก์ผิด ไม่retryผลกำกวมโดยไม่ตรวจ หากลิงก์ใช้ไม่ได้ใช้หน้าที่รับเดิม ผลสำเร็จยังให้กดเปิดLogin ไม่auto-login

คงminimum8และconfirmationตรงกันสำหรับตั้งรหัสใหม่ จุดรหัสเป็นfixture ไม่ใช่credentialsจริง ปิดUIไม่รับรองย้อนคำขอserver ปิดAuthล้างdraft/กลับHomeตามเดิม ไม่เลือกอายุลิงก์/provider/timeout/quotaหรือส่งอีเมลจริง

Native root `q2EE0Y`, comparison `VYEnh`, states `e90Mg`/`wmhoz`/`WQbH9`/`rhTqa` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพเต็มทั้ง4และเทียบขนาดจริงแล้วเนื้อหาครบ ตรวจfeedbackก่อนprimary ไม่มีexecute warnings ภาพแหล่งRecovery/Login13ไฟล์hashไม่เปลี่ยน ไม่อ้างruntime/keyboard/contrastจากภาพนิ่ง

เจ้าของตอบ1รับ4statesที่แสดงแล้ว ดู [หลักฐาน](owner-Recovery-request-states-acceptance.json) ยังต้องreconcileRegister fieldsล่าสุดและรวมinteraction/version inventoryก่อนG2รวม ไม่เริ่มHigh-Fi/Frontend/backend/Taskอื่น ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่commit/push/deploy
