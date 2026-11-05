# Register Country Phone G2-r32

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของเลือกชุด1พร้อมข้อแก้ชื่อประเทศ ดู [ร33ที่ปรับตามคำสั่ง](../home-auth-register-country-labels-g2-r33/README.md); ภาพร32เก็บเป็นประวัติ

เจ้าของเลือก2ให้ [รองรับเบอร์ไทย/ต่างประเทศพร้อมเลือกรหัสประเทศ](../home-auth-phone-format-decision.json) จึงทำช่องเบอร์ในRegisterที่รับโครงไว้ ไม่เพิ่มSMSหรือเปลี่ยนphone/password และยังไม่เปลี่ยนช่องLoginที่รับอีเมลหรือโทรร่วมกัน

[เทียบฟอร์ม/เปิดรายการ/เปลี่ยนประเทศ](gR7CL.png) · [Register](pdQA1.png) · [เปิดรายการ](wpvex.png) · [ตัวอย่างเลือกUK](Zvph7.png) · [บอร์ดพร้อมโน้ต](iKwNj.png) · [manifest/IDs/hash](review-manifest.json)

เสนอเริ่มที่ไทย+66โดยไม่อ่านตำแหน่ง ธง22pxใช้assetในHeaderที่รับไว้ มีtrigger108×44px เมนูมีช่องค้นหาและเครื่องหมายประเทศปัจจุบัน เมื่อเลือกให้เปลี่ยนธง/codeและปิดรายการกลับช่องโทร ตัวอย่างแสดงไทย+66และสหราชอาณาจักร+44 ไม่ใช่การอนุมัติว่าระบบจริงรองรับเฉพาะหรือครบประเทศใดบ้าง

ส่วนเบอร์ปล่อยว่างเพื่อไม่แต่งกฎตัด0/แปลงเบอร์/จำนวนหลัก การเลือกประเทศไม่อนุญาตให้เปลี่ยนหรือล้างตัวเลขที่กรอกไว้เงียบๆ ใช้กฎคลิกนอกAuthปิดและล้างdraftเดิม; พื้นที่ในAuthแต่นอกเมนูปิดเพียงรายการประเทศ ข้อเสนอเริ่มไทยเป็นส่วนที่ให้ตรวจรอบนี้ ยังไม่ถือว่ารับจากคำตอบเลือกcoverageก่อนหน้า

คงUsername-r31และช่องอื่น/Googleตามเดิม Loginร่วมอีเมล/โทรยังต้องตรวจinternational presentationให้สอดคล้อง ไม่ใส่country selectorให้ช่องอีเมลเองจากภาพนี้ ไม่เลือกprovider/account matching/phone verification/phone recoveryหรือSMS

Native root `iKwNj`, comparison `gR7CL`, Register `pdQA1`, open `wpvex`, selected `Zvph7` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจPNGเต็ม/บอร์ดและขนาดtarget/ธงแล้วเนื้อหาครบ ไม่มีexecute warnings ภาพr31เดิม6ไฟล์hashไม่เปลี่ยน ไม่อ้างruntime/keyboard/contrastจากภาพนิ่ง

รอตรวจเฉพาะRegister phone pickerและinitial-TH proposal ยังไม่รับwholeG2/High-Fi/Frontend/backend ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่เริ่มTaskอื่นหรือcommit/push/deploy
