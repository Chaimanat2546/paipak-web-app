# Current Login Structure G2-r30

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับโครงและทางไปต่อ/ย้อนกลับแล้วตาม [บันทึก](owner-Login-structure-acceptance.json)

หลังเจ้าของให้ไปข้อต่อไป ตรวจทะเบียนแล้วพบว่าโครงLoginปัจจุบันยังไม่รับรวมหลังการแก้OTPเป็นหลัก จึงรวมช่องแรก/OTP/รหัสผ่านอีเมล/รหัสผ่านโทรศัพท์ให้ตรวจด้วยกัน คงวิธีที่เลือกไว้ ไม่เปิดเลือกวิธีAuthใหม่ ไม่คืนสองUI Favorite-r29ที่เจ้าของไม่ใช้

[เทียบสี่หน้า](LnXw4.png) · [ช่องแรก](dFI8d.png) · [Email OTP](bFCHU.png) · [อีเมลใช้รหัสผ่าน](mmSkV.png) · [โทรใช้รหัสผ่าน](q6GNt.png) · [บอร์ดพร้อมคำอธิบาย](g43q8y.png) · [manifest/IDs/hash](review-manifest.json)

- ช่องแรกใช้อีเมลหรือเบอร์โทรช่องเดียว ดำเนินการต่อพาอีเมลไปOTP6หลักและเบอร์ไปรหัสผ่าน Googleยังเลือกได้จากขั้นแรก
- อีเมลเลือกใช้รหัสผ่านเองได้ทั้งจากช่องแรกและหน้าOTP และสลับกลับOTPจากหน้าpasswordได้
- เบอร์โทรใช้passwordเท่านั้น ไม่มีตัวเลือกemailOTPในหน้ารหัสผ่านเบอร์โทร ลืมรหัสผ่านยังเข้าฟอร์มอีเมลขอลิงก์เดิม ไม่เพิ่มSMS
- แก้ไข/ย้อนกลับพากลับidentifierเดิมในflowต่อเนื่อง ไม่ส่งOTPเองเพราะย้อนกลับ/แก้ไข ไม่กู้ข้อมูลAuthหลังreload

OTPใช้ช่องที่กรอกได้ของr7 ไม่ใช้ช่องพักจากหน้าขอรหัสใหม่-r14 นำcountdownในปุ่มตามกฎที่รับแล้วมาประกอบ แยกการกรอกOTPกับการพักปุ่มส่งซ้ำให้ถูก ย้ายข้อความอธิบายตรวจอัตโนมัติไปรวมกับคำอธิบายOTP ไม่มีปุ่มยืนยันหรือกล่องรอแยก ตัวเลข00:45เป็นfixtureไม่ใช่เวลาใช้งานที่เลือกแล้ว

Native root `g43q8y`, comparison `LnXw4`, entry `dFI8d`, OTP `bFCHU`, emailpassword `mmSkV`, phonepassword `q6GNt` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจPNGเต็มและบอร์ดแล้วเห็นทั้งสี่ฟอร์มครบ ตรวจ6slotsและไม่มีOTP actionในphone branch ไม่มีexecute warnings เก็บPNG/hashแหล่งเก่าไม่เปลี่ยน

รับเฉพาะสี่โครงและทางต่อ/กลับของLoginฉบับนี้แล้ว Google Register-return layouts/validation contractsที่ยังไม่สรุป/keyboard/contrast/wholeG2ยังไม่รับ ไม่เริ่มHigh-Fi/Frontend/backend/Taskอื่น ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่commit/push/deploy
