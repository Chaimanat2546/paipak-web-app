# Shared Login Country G2-r34

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับpresentationเบอร์ต่างประเทศแล้วตาม [บันทึก](owner-Login-country-acceptance.json)

เจ้าของรับ [ชื่อประเทศร33ที่แสดง](../home-auth-register-country-labels-g2-r33/owner-country-labels-acceptance.json) แล้ว ต่อการแสดงเบอร์ต่างประเทศในโครงLoginร่วมที่รับในร30 โดยใช้country selectorเดียวกับRegister ไม่เปลี่ยนวิธีAuthหรือสร้างidentifierแยกอีกช่อง

[เทียบอีเมลและเบอร์](j5Nwm.png) · [อีเมล](Nlwvr.png) · [เบอร์ต่างประเทศ](w5F1PX.png) · [OTPอ้างอิงเดิม](ASYeh.png) · [เบอร์ในขั้นรหัสผ่าน](yzbLX.png) · [บอร์ด](NHg9c.png) · [manifest/IDs/hash](review-manifest.json)

เสนอให้phone-entry stateมีตัวเลือกรหัสประเทศในช่องเดียว อีเมลไม่มีตัวเลือกประเทศ ตัวอย่างแสดงUK+44ที่ผู้ใช้เลือกและตัวเลขจำลอง จากนั้นขั้นpasswordแสดงประเทศ+เบอร์ครบ กดแก้ไขกลับช่องร่วมโดยคงdraftในmodalที่ยังเปิด ไม่เพิ่มemailOTPให้เบอร์/SMSหรือส่งคำขอเพียงเพราะเปลี่ยนประเทศ

เมนูใช้ชื่อประเทศที่รับแล้ว: ไทยใช้ “ไทย” ประเทศอื่นใช้English ไม่อนุมานประเทศจากเลขตัวอย่าง จังหวะที่UIแยกemail/phone, การparse/paste/+prefix/normalizationและความถูกต้องของเบอร์ยังต้องกำหนดในcontractระบบ ไม่ใช้fixtureเป็นregexหรือการยืนยันบัญชี ปิดAuthล้างdraftตามเดิม

Native root `NHg9c`, comparison `j5Nwm`, email `Nlwvr`, phone `w5F1PX`, OTP reference `ASYeh`, phonepassword `yzbLX` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจPNGเต็ม/บอร์ดและจำนวนcountry triggerแล้ว: email0/phone1 ขนาด108×44px ขั้นpasswordคง+44 fixture ไม่มีexecute warnings ภาพเดิมLogin/country11ไฟล์hashไม่เปลี่ยน OTPexportตรงร30ทุกbyte ไม่อ้างruntime/keyboard/contrastจากภาพนิ่ง

รับเฉพาะphone-entry presentationและทางไปpasswordในร34แล้ว อีเมล/OTPที่รับแล้วคงเดิม 00:45เป็นfixture ไม่รับwholeG2/High-Fi/Frontend/backend ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่เริ่มTaskอื่นหรือcommit/push/deploy
