# Signup Email Verification States G2-r36

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับ6สถานะที่แสดงแล้วตาม [บันทึก](owner-verification-states-acceptance.json)

เจ้าของรับ [Register Google return-r35](../home-auth-register-google-g2-r35/owner-Register-Google-return-acceptance.json) แล้ว ชุดนี้ปิดช่องว่างภาพสถานะยืนยันอีเมลหลังlocal signupที่ยังไม่ผ่านจากการรับmethod/r20 ใช้patternOTPที่รับแล้ว ไม่เปลี่ยนวิธีLoginและไม่สร้างขั้นยืนยันเพิ่มให้Google

[ภาพรวม6สถานะ](mrPVu.png) · [manifest/IDs/hash](review-manifest.json)

| สถานะ | แบบเต็ม | จุดที่คง/ปรับ |
|---|---|---|
| กำลังตรวจ | [nQ4yF](nQ4yF.png) | พักcode/resendชั่วคราว มีspinner แต่ใช้งานก่อนได้ |
| หมดอายุ | [s0dZ8](s0dZ8.png) | ล้าง/พักช่อง เหตุผลใต้กลุ่มcode ขอใหม่เอง |
| กำลังขอรหัสใหม่ | [lNeof](lNeof.png) | พักส่งซ้ำและแสดงกำลังขอ ไม่อ้างว่าส่งถึงinboxแล้ว |
| รอส่งซ้ำ | [CsOgQ](CsOgQ.png) | ช่องcodeสำหรับคำขอที่รับแล้วใช้งานได้ นับในปุ่มส่งซ้ำเท่านั้น |
| ขอรหัสไม่สำเร็จ | [n8M20](n8M20.png) | กรณีไม่มีcodeที่ใช้ได้ ขอใหม่ล้มเหลว แสดงform feedbackและลองส่งเอง |
| ตรวจไม่ได้ | [LsUq3](LsUq3.png) | เก็บcodeไว้ ลองตรวจเอง ไม่ทำเป็นรหัสผิด/ไม่retryวน |

ทุกแบบมีหัวข้อยืนยันอีเมลกับอีเมลบัญชีปัจจุบัน ไม่มีแก้identifierหรือใช้passwordแทน และมีใช้งานก่อนให้กลับHomeตามpolicyเดิม การข้ามไม่ทำให้verifiedเอง การออกจากUIไม่สัญญาย้อนผลคำขอserver ช่อง6หลัก/ตรวจอัตโนมัติ/paste/Backspaceเดิมคงไว้

รูปแบบready/successร20และinvalid-inlineร26ที่รับแล้วคงเป็นreference ไม่ถามรับซ้ำ 00:45เป็นfixture ไม่เลือกอายุรหัส/เวลารอ/quota/providerหรือdelivery policy ไม่มีGoogle verificationใหม่

Native master `OCQ2x`, overview `mrPVu`, full board `eMKtx` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพรวมขนาดจริงและfull screenshotsทั้ง6แล้วไม่เห็นตัด ตรวจทุกmodalพบtitle/ใช้งานก่อนอย่างละหนึ่งและไม่มีข้อความLogin/แก้อีเมล/passwordหลงมา ไม่มีexecute warnings ภาพแหล่งเก่า35ไฟล์hashไม่เปลี่ยน ไม่อ้างruntime/keyboard/contrastจากภาพนิ่ง

รับเฉพาะ6adaptationsที่แสดงแล้ว ส่วนwholeG2ยังไม่รับ ไม่เริ่มHigh-Fi/Frontend/backend/Taskอื่น ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่commit/push/deploy
