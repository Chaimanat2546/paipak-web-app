ROUND 2
Seen in one second: คลิปกลางลอยอยู่หน้าแนวการ์ดที่เอียงถอยลึกบนพื้นฟ้าอ่อน
Idea (one sentence): จัดคลิปคัดสรรเป็นเวทีให้เลือกชมทีละคลิป โดยให้ภาพกลางเป็นจุดกดเล่นที่ชัด
Live thing: ยังเป็น static Pencil visual; ไม่มี slider/player ที่ทำงานจริง
Layout words by section: TikTok=3D coverflow stage / articles=unchanged feature+supporting list
Scores: design 7.5 · usability 7.0 · creativity 6.5 · content 4.0 → overall 6.8
Caps applied: creativity เป็น known coverflow approach; content เป็น fixture; scope เป็น Desktop static ไม่ใช่ browser/runtime score; shadow/depth เป็นข้อแก้ที่เจ้าของขอเฉพาะ section
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. e2IyY7.png: คลิปข้างถูกซ้อนและไม่มีชื่อ จึงเป็นเพียง preview ต้องตรวจ selection/keyboard/focus และวิธีเลือกก่อนรับ interaction
2. e2IyY7.png: ปุ่มเล่นยังเป็น idle cover ไม่มี native TikTok player controls ต้องออกแบบและทดสอบ state ตอนเล่นก่อนรับการใช้งาน
3. Dn6ah.png: ภาพหลายใบซ้ำกับการ์ดบ้านและเครดิตเป็นตัวอย่าง ต้องแทนด้วยคลิปจริงที่คัดก่อนตรวจ content/crop ขั้นสุดท้าย

แก้ในรอบนี้: เปลี่ยนภาพแบนเรียงเท่ากันเป็น perspective ที่มีระยะใกล้/ไกลและเงา; ใช้ปุ่มเล่นเฉพาะคลิปกลาง; ปรับลูกศรจาก disabled ที่สืบจากแถวบ้านให้ enabled ทั้งคู่ตาม middle-position pose

ตรวจ focal point, layer order, edges, spacing, type, palette, crops, fullness และรอยต่อบทความจากPNGแล้ว; ส่วนphone, motion, collisionขณะเลื่อนจริงและlive thingยังไม่ตรวจ ไม่รัน Taste browser inspector กับแอปเพราะไม่มี Frontend ที่ได้รับอนุญาต

