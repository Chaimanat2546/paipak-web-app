# Home 3D.1 / Card-focus-r3

เจ้าของขอ “ขอแบบ fill” ต่อจากหัวใจสีชมพูไม่มีวงกลม จึงเปลี่ยนเฉพาะหัวใจด้านขวาใน ITiqO เป็น icon GZiYb: phosphor/heart-fill, 22×22px, #FD6E88 คง target44×44px โปร่งใส ไม่มีกรอบวงกลม ไม่มี halo หรือ face อื่น ไม่เปลี่ยน default/photo-focus หรือ rollout ไป Main Home, Results, Mobile

ตรวจ screenshot และ PNG เต็มแล้วเห็นหัวใจทึบจริง Native readback ยืนยัน icon heart-fill และ target ไม่มี fill/stroke ที่มองเห็น ใช้ icon library ที่รองรับ ไม่วาดไอคอนเอง เก็บ r1/r2 PNG และ snapshot เป็นประวัติ Native root เดิมเป็น r3 แล้ว จำนวน nodes ไม่เปลี่ยนจาก r2 (106 nodes)

เป็นการแก้ appearance ตามคำสั่ง ไม่ใช่การบันทึก favorite ของ Guest หรือแก้ข้อกำหนด Login modal ไม่ตัดสิน state semantics ทุกกรณีจากภาพนี้ เจ้าของตอบ “โอเค ไปต่อ” รับ appearance ภาพนี้เฉพาะจุดแล้ว ส่วนการทดสอบ keyboard/contrast บนภาพหลากหลายยังรอ ไม่อ้าง WCAG หรือปิด OPEN-001 ไม่แก้ application code/backend/deploy
