# Register validation G2-r21

> ข้อแก้ไขล่าสุด: field errorต้องอยู่ใต้inputโดยไม่มีกล่องสรุปซ้ำ ดู [r25](../home-auth-register-input-errors-g2-r25/README.md) ภาพเดิมเก็บเป็นประวัติ

รับสองภาพหลังตรวจflowแล้วตาม [คำตอบ1ล่าสุด](owner-register-validation-acceptance.json) ข้อความรอตรวจด้านล่างเป็นประวัติก่อนรับ ไม่รับstatesส่งคำขอหรือG2รวม

> เจ้าของรับ [Signup flow-r22](../home-auth-signup-flow-g2-r22/owner-signup-flow-acceptance.json) แล้ว กลับมาตรวจสองstates-r21นี้ ซึ่งยังไม่ได้รับ

> เจ้าของขอเช็คflowก่อน สองstatesนี้ยังไม่รับ ดู [Signup flow-r22](../home-auth-signup-flow-g2-r22/README.md)

DSD-001/C2 · 5 พฤศจิกายน 2026 · รอตรวจสองกรณีvalidation

เจ้าของรับ [ยืนยันอีเมลกรอก/สำเร็จr20](../home-auth-email-verification-otp-g2-r20/owner-verification-screens-acceptance.json) แล้วเฉพาะภาพที่แสดง ไม่รับG2รวม ต่อสถานะสมัครตาม [โครงที่รับไว้](../home-auth-register-g2-r1/owner-register-structure-acceptance.json)

[เทียบสองกรณี](LhNUV.png) · [ข้อมูลไม่ครบ](l5oguz.png) · [รหัสผ่าน](JuD5C.png) · [โน้ต](zxwLB.png) · [manifest/hash](review-manifest.json)

เสนอหลังผู้ใช้กดสมัคร: ชี้ใต้ช่องที่ต้องแก้และแสดงสรุปก่อนปุ่มสมัครตำแหน่งเดิม ตัวอย่างแรกขาดUsername/โทร แต่คงอีเมล/ช่องรหัสที่กรอก ตัวอย่างสองรหัสใหม่สั้นกว่า8และconfirmationไม่ตรงกัน คงค่าเพื่อแก้ ไม่แทรกconsent/termsหรือเงื่อนไขตั้งรหัสอื่นเอง

ใช้กฎที่ตกลงแล้วว่าlocal signupบังคับUsername/โทร/อีเมล/password/confirmation ชื่อแสดงซ้ำได้ ขั้นต่ำ8และconfirmationตรงกัน ไม่กำหนดความยาวชื่อ/ประเทศ/จำนวนหลัก/ความซ้ำเบอร์หรือownershipเอง ตัวเลขโทรเป็นfixtureภาพ ไม่ใช่ข้อมูลติดต่อจริงหรือหลักฐานผ่านvalidator จุดรหัสเป็นภาพจำลองไม่มีsecret

Googleเป็นทางเลือกแยกไม่ถูกlocal formบังคับfields/password/ยืนยันอีเมลเพิ่ม เส้นเข้มเป็นmarkerของerrorในlow-fi ไม่ใช่focus/error systemขั้นสุดท้าย ไม่มีการส่งฟอร์มจริง

Native root `zxwLB`, comparison `LhNUV`, required `l5oguz`, password `JuD5C` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้วไม่เห็นล้นและไม่มีwarnings ยังรอตรวจสองstates ไม่รับsubmitting/provider errors/whole G2/High-Fi/Frontend/backend คงภาพเก่าที่รับ Home/State library54รายการ/UXD-002เดิม
