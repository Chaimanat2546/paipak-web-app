# Home 3C.3 / Listing-error-r1

สถานะ: เจ้าของปฏิเสธ error panel บน Home และเลือกซ่อนทั้ง section ที่โหลดไม่สำเร็จในคำถามยืนยัน ข้อเสนอนี้เก็บเป็น HISTORY ไม่ใช่แบบที่อนุมัติ

Native root z9TUD5 / section s7RXM ใน papaipak-ui.pen เดิม มี 283 nodes ใช้สำเนา PANR1 ซ่อน viewport การ์ดและลูกศรแถว แสดง panel tCMgd ขนาด 1328×160px ข้อความ “โหลดรายการบ้านไม่สำเร็จ” กับ “ลองโหลดส่วนนี้อีกครั้ง ข้อมูลที่คุณเลือกยังอยู่” และปุ่ม g66WH “ลองอีกครั้ง” ขนาด 152×44px คงหัวข้อ/ดูทั้งหมด ไม่มีราคา รูปบ้าน fixture หรือจำนวนผลลัพธ์หลอกว่าพร้อมใช้งาน

ใช้ UXD-001 edge-flows E-18 เป็นฐาน: error ต่างจาก empty ต้องลองใหม่โดยรักษาบริบท ไม่สรุปว่าไม่มีบ้าน ไม่แสดงผลสำเร็จจากข้อมูลเก่า เสนอ retry เฉพาะหมวดที่ผิดพลาด ไม่ reload ทั้งหน้า ไม่ล้างสถานที่/วันที่/จำนวนคน/pets และไม่รีเซ็ตแถวอื่นที่พร้อมอยู่ เป็นเงื่อนไขใน flow ต่อเนื่อง ไม่เพิ่มการกู้ Booking Intent หลัง reload หรือ expiry

Retry → loading ของหมวดนั้น → สำเร็จแสดงเฉพาะการ์ดข้อมูลครบ/รูปใช้ได้; สำเร็จแต่ไม่มีการ์ดซ่อน section ตาม 3C.1; ล้มเหลวคง error และลองใหม่ได้ ไม่เพิ่มจำนวน retry อัตโนมัติ/timeout ที่ไม่ได้หารือ ไม่ถือว่า search จะโหลดได้หากบริการเดียวกันล่ม แต่ UI ค้นหาและทางลัดยังเข้าถึงได้ตาม flow เดิม

ปุ่ม navy/white เป็นข้อเสนอ recovery control เฉพาะจุด ไม่แก้ primary pink CTA หรือปิด OPEN-001 การกดซ้ำ/สถานะระหว่าง retry/focus announcement ต้องตรวจในขั้น functional ที่ได้รับอนุญาต ยังไม่มี click/network/keyboard test

ตรวจ screenshot จาก Pencil และ PNG เต็มแล้ว panel สั้นกว่าพื้นที่แถวปกติ ไม่ซ้อนข้อความ ปุ่มชัดทางขวา Readback ยืนยัน panel 1328×160px และปุ่ม 152×44px แก้ disabled viewport width เป็น1328px แทน fill_container แล้ว ยังมี bounds warnings ของ caption/panel/hidden viewport แม้ PNG แสดงครบ เก็บใน snapshot ไม่อ้างว่าทุก bounds ผ่าน ไม่แก้ Main Home, Results, Mobile, UXD-002 หรือ application code

คำถามหนึ่งข้อ: ใช้ error แบบไหน? 1 Panel ตามภาพ / 2 ย่อเป็นข้อความและปุ่มในบรรทัดเดียว / 3 คงพื้นที่สูงเท่าแถวการ์ด
