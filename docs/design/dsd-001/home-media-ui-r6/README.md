# DSD-001 / Home-media-ui-r6

4 พฤศจิกายน 2026 · **ร่าง Desktop รอตรวจรับ**

ตามคำขอ “ต่อด้วยบทความ” ปรับเฉพาะบทความให้เข้ากับ A และรอยต่อ TikTok/Footer โดยยังใช้เรื่องเด่น1เรื่องกับเรื่องรอง2เรื่อง

- [บทความรอบปรับ](DsgG9.png) · [TikTok ต่อกับบทความ](YGt3D.png) · [Home ทั้งหน้า](eMYWM.png)
- [Native snapshot](editable-snapshot.json) · [manifest](review-manifest.json) · [ผลตรวจ](verification.json) · [critique](critique.md)

เรื่องเด่นใช้ภาพใหญ่และแผงอ่านสีขาวลอยซ้อน ขอบฟ้าอ่อนรองด้านล่างใช้ path SoKpn เดียวกับ Hero เรื่องรองแยกเป็นสองแถวไร้กรอบทางขวา ปุ่มอ่านเรื่องเด่นใช้ Navy/White44px และคงลิงก์บทความทั้งหมดเดิม

หัวข้อยังใช้ Mitr Regular ตัวเลข/geometry ใหม่นี้เป็นข้อเสนอเฉพาะร่าง ไม่ได้เปลี่ยน shared tokens หรืออนุมัติ typography ทุกหน้า เนื้อหาเดิมคงไว้ ไม่มีการเพิ่มผู้เขียน วันที่ ยอดอ่าน หรือ business claims สมมติ

ตรวจ source เทียบแล้ว TikTok, Header/Hero/เจ็ดหมวด/Footer และ variables ไม่เปลี่ยน ข้อความบทความเดิมอยู่ครบ การจัดลำดับยังเป็นการคัดเรื่องเองตาม requirement ไม่แปลงเป็น feed ล่าสุดอัตโนมัติ

Current native root eMYWM ใช้ชื่อ Home-r14; บทความ node DsgG9 มี snapshot พร้อม geometry เก็บไว้ ภาพและเรื่องยังเป็นข้อมูลศึกษา ร่างนี้ไม่สร้างหน้าอ่านบทความ/CMS/Backend หรือ navigation ที่ทำงานจริง

Mobileยังพัก, OPEN-001ยังเปิด และ foundation/UI versionยังรอตรวจรับก่อน Frontend ไม่เริ่ม Task อื่นจากรอบนี้

