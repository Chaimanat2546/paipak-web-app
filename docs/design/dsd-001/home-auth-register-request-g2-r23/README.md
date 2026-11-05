# Register request G2-r23

> เจ้าของให้บอกสาเหตุที่ผิด ดู [r24](../home-auth-register-reasons-g2-r24/README.md) Generic failureถูกส่งกลับ ส่วนกำลังสมัครรับผ่าน [r27](../home-auth-register-request-review-r27/owner-request-states-acceptance.json) ภายหลัง

DSD-001/C2 · 5 พฤศจิกายน 2026 · รอตรวจระหว่างสมัครและไม่สำเร็จ

เจ้าของรับ [validation-r21ทั้งคู่](../home-auth-register-validation-g2-r21/owner-register-validation-acceptance.json) หลัง [flow-r22](../home-auth-signup-flow-g2-r22/owner-signup-flow-acceptance.json) แล้ว คงภาพและhashเดิม

[เทียบสองสถานะ](w5RC8.png) · [กำลังสมัคร](sv8oc.png) · [ไม่สำเร็จ](AUaUi.png) · [โน้ต](O5RmV.png) · [manifest/hash](review-manifest.json)

เสนอระหว่างรอคำขอให้พักfields/show-password/ปุ่มส่ง/Google/สลับLogin และแสดงวงโหลดในปุ่ม ปิดmodalเพื่อกลับต้นทางได้โดยไม่สื่อว่าย้อนคืนคำขอserverหรือยกเลิกการสร้างบัญชีจริงแล้ว

เมื่อได้รับผลไม่สำเร็จที่ยืนยันได้ให้หยุดโหลด คงข้อมูลในflowเดิม ไม่ทำให้ช่องที่ไม่ผิดเป็นinvalid แจ้งก่อนปุ่มหลักและให้กดลองสมัครอีกครั้งเอง ไม่มีretryวน หากผลตอบกลับขาดหายหรือกำกวมต้องตรวจผลกับproviderก่อนส่งสร้างบัญชีซ้ำ ไม่อ้างว่าบัญชียังไม่ถูกสร้างหรือเพิ่มaccount-linking policyเอง

สำเร็จไปreminder-r19ที่รับแล้ว ไม่เพิ่มการบังคับยืนยันอีเมล Googleยังเป็นทางเลือกแยกเมื่อไม่ได้รอlocal signup ข้อมูลโทร/จุดรหัสเป็นfixtureภาพ ไม่มีsecretหรือการส่งจริง

Native root `O5RmV`, comparison `w5RC8`, submitting `sv8oc`, failure `AUaUi` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้วไม่เห็นล้นและไม่มีwarnings กำลังสมัครรับผ่านr27แล้ว ส่วนfailureเก่าถูกส่งกลับ ไม่รับprovider/เวลา/quota/G2รวม/High-Fi/Frontend/backend คงHome/State library54รายการ/UXD-002เดิม
