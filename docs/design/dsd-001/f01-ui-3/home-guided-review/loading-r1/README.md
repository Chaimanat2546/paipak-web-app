# Home 3C.2 / Loading-r1

สถานะ: เจ้าของเลือก 1 รับภาพ Loading-r1 เฉพาะสถานะโหลดครั้งแรก ไม่ใช่การรับรอง Home ทั้งหน้า หรือ functional loading test

Native root NOXpV / section K5g7u ใน papaipak-ui.pen เดิม มี 291 nodes ใช้สำเนา PANR1 เปลี่ยนสี่การ์ดแรกเป็น skeleton 314×362px รูปสูง 210px พื้นที่ข้อมูล 152px ซ่อนรูป ข้อมูล fixture หัวใจ ลูกศร และ dots ขณะโหลด ไม่ใช้ skeleton เป็นข้อมูลบ้านจริงหรือแสดงจำนวนผลลัพธ์ หัวข้อ/ดูทั้งหมวดยังคงอยู่ และมีข้อความ “กำลังโหลด…” แทนปุ่มเลื่อนแถว

Skeleton เป็นสถานะกำลังโหลดเท่านั้น จึงไม่ขัดกับการไม่แสดงบ้านข้อมูลไม่ครบที่โหลดเสร็จแล้ว หากโหลดสำเร็จและไม่มีการ์ดพร้อมแสดง ซ่อนทั้งส่วนตามข้อสรุป 3C.1; error ต้องแยกตรวจใน 3C.3 ไม่แสดงเป็นหมวดว่าง ไม่รอทุกหมวดก่อนแสดงหมวดที่พร้อม ข้อเสนอนี้ยังไม่กำหนด behavior ของ background refresh หรือ timeout

ในขั้น Frontend ที่อนุญาต skeleton ต้องไม่รับ focus หรือเปิด Detail, ซ่อนรูปทรงตกแต่งจาก screen reader และประกาศสถานะกำลังโหลดอย่างเหมาะสม มีทางลัดหมวด/ค้นหาที่ใช้งานได้ตาม flow เดิม ยังไม่มี animation, network หรือ keyboard test ใน Pencil

ตรวจ screenshot และ PNG เต็มแล้ว สี่ใบอยู่ในกริด 1328px และไม่แสดงข้อมูล fixture ระหว่างโหลด แก้ width ของ hidden text/price nodes แปดจุดจาก fill_container เป็น 286px เพราะ parent เป็น layout none แล้ว Native readback ยังมี bounds warnings ของ captions/status/skeleton bars แม้ PNG แสดงครบ จึงไม่อ้างว่า bounds ทุก node ผ่าน Snapshot เก็บ warnings ไว้แล้ว ไม่แก้ Main Home, Mobile, Results, UXD-002 หรือ application code

คำถามหนึ่งข้อ: ระหว่างโหลดครั้งแรกใช้แบบไหน? 1 Skeleton ตามภาพ / 2 ข้อความกำลังโหลดอย่างเดียว / 3 ซ่อนส่วนนี้จนโหลดเสร็จ
