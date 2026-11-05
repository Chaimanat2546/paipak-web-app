# Register reasons G2-r24

> ข้อแก้ไขล่าสุด: field errorต้องอยู่ใต้inputโดยไม่มีกล่องสรุปซ้ำ ดู [r25](../home-auth-register-input-errors-g2-r25/README.md) ภาพเดิมเก็บเป็นประวัติ

DSD-001/C2 · 5 พฤศจิกายน 2026 · รอตรวจข้อความที่ระบุสาเหตุ

เจ้าของชี้แจง [ต้องบอกว่าอะไรไม่ถูก](owner-cause-clarification.json) ร่างgeneric failure-r23จึงไม่รับ ต่อมาเจ้าของรับsubmittingและconnectionผ่าน [r27](../home-auth-register-request-review-r27/owner-request-states-acceptance.json) แล้ว ส่วนfield presentationใช้r25ที่รับแยก คงภาพเดิมไว้เป็นประวัติ

[เทียบข้อมูลผิด/เชื่อมต่อ](ju8mL.png) · [ข้อมูลผิด](ZhY9o.png) · [เชื่อมต่อไม่ได้](Wi5mP.png) · [โน้ต](KkkJa.png) · [manifest/hash](review-manifest.json)

ตัวอย่างข้อมูลผิดใช้กฎconfirmationเดิม บอก “ยืนยันรหัสผ่านไม่ตรงกัน” ก่อนปุ่มหลัก พร้อมชี้ช่องยืนยันและคำแนะนำ “กรอกให้ตรงกับช่องรหัสผ่าน” คงช่องอื่น ไม่มีการลองส่งฟอร์มที่ยังผิดซ้ำ

ตัวอย่างเชื่อมต่อบอก “เชื่อมต่อระบบสมัครสมาชิกไม่ได้ / กรุณาลองอีกครั้ง” เฉพาะเมื่อเป็นสาเหตุจริง ไม่ทำfieldsเป็นinvalid คงข้อมูลและให้ลองเอง หากผลครั้งก่อนกำกวมต้องตรวจผลก่อนส่งสร้างบัญชีซ้ำ ไม่รับรองว่าไม่มีบัญชีถูกสร้างแล้ว

หากรู้เหตุผลจากระบบให้แปลงเป็นข้อความที่ผู้ใช้แก้ได้ ไม่เผยraw errorหรือแต่งสาเหตุที่ไม่รู้ ไม่เพิ่มกฎอีเมล/เบอร์ซ้ำหรือaccount-linkingเอง ภาพนี้ไม่ได้ถอนvalidation-r21ที่รับแล้ว แต่ทำให้ข้อความกรณีนี้ตรงสาเหตุมากขึ้น

Native root `KkkJa`, comparison `ju8mL`, field `ZhY9o`, connection `Wi5mP` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้วไม่เห็นล้นและไม่มีwarnings connectionรับผ่านr27แล้ว ส่วนfield presentationใช้r25ที่รับแยก ไม่รับG2รวม/High-Fi/Frontend/backend คงHome/State library/UXD-002เดิม
