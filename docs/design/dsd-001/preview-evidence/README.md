# Portable design preview evidence

5 พฤศจิกายน 2026 · เก็บสำเนา HTML fragments ที่เอกสารอ้างถึงสำหรับ checkpoint ใน Git

ไฟล์ทั้ง11คัดลอกจากต้นฉบับที่อยู่ในพื้นที่ visualization ของแชตแบบ byte-for-byte ตรวจ SHA-256 ตรงค่าที่ระบุใน records เดิม ดู [index](index.json) ไม่แก้ approval records ย้อนหลังและไม่เปลี่ยนแบบ/สถานะจากการคัดลอกนี้ รุ่นเก่า ร่าง และแบบที่ถอนยังเป็นประวัติตาม manifest ของแต่ละรุ่น

ไฟล์เป็น fragments สำหรับบริบท preview เดิม ไม่ใช่ application pages หรือเว็บที่ deploy แล้ว บางส่วนอาศัย styles/icons ของ host จึงไม่อ้างว่าเปิดไฟล์เดี่ยวแล้วทดสอบ browser/runtime ครบ การเก็บไฟล์ไม่อนุมัติ Frontend

Pencil UI หลัก `papaipak-ui.pen` ยังอยู่ที่ external path ที่ลงทะเบียนไว้ ไม่ใช่ native UI checkpoint ภายใน repo ชุดนี้เก็บ PNG และ editable snapshots ของงานที่อ้างถึง ไฟล์ `docs/design/uxd-002/papaipak-wireframe.pen` เป็นแหล่ง wireframe ที่มีขอบเขต/สถานะของตน ไม่ถือว่าแทน native UI ล่าสุด

Git attributes ของ evidence directory ปิด text normalization เพื่อรักษาไบต์ของไฟล์ที่มี hash อ้างอิง ไม่ปรับภาพ/ข้อความที่รับแล้วเพื่อให้เข้ากับ line endings ของเครื่อง
