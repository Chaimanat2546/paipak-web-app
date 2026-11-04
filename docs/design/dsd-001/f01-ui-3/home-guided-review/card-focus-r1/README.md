# Home 3D.1 / Card-focus-r1

สถานะ: ร่างก่อนแก้ เจ้าของสั่งเปลี่ยนหัวใจเป็นสีชมพูและไม่มีกรอบวงกลม ดู Card-focus-r2 ไม่ใช่การรับรอง Home ทั้งหน้า

Native root ITiqO ใน papaipak-ui.pen เดิม จำนวน 109 nodes เทียบ default IWw2A, photo-focus n4NEr จาก hM8pe ที่รับแล้วใน 2B.1 และ favorite-focus P0ZBD จาก yG6KY ปกติไม่เปลี่ยน ลูกศรยังแสดงตาม hover/focus และหัวใจยังไม่ใช่รายการที่บันทึก

ข้อเสนอหัวใจเมื่อมี keyboard focus: target 44×44px โปร่งใส, white separation halo 36px, face 28px พร้อมวง navy 2px outer, ไอคอนหัวใจเส้น navy 22px วงแสดงเฉพาะ focus-visible ไม่เปลี่ยน default ของ Main Home และไม่ใช้สีนี้แทนสถานะ saved การ activate ของ Guest ยังเปิด Login modal ตาม 2D

Contrast คำนวณด้วย sRGB relative luminance: navy #072D59 กับ white #FFFFFF = 13.737680109134693:1 ใช้ยืนยันคู่สี solid ภายในปุ่มเท่านั้น ไม่รับรองวง focus หรือหัวใจ default บนทุกภาพ ไม่อ้าง WCAG compliance ทั้งหน้า และไม่แก้/ปิด OPEN-001 ของข้อความขาวบนชมพู ยังต้องตรวจ actual keyboard navigation, accessible name, focus return และภาพสว่าง/มืดหลากหลายในขั้นที่อนุญาต

ตรวจ screenshot และ PNG เต็มแล้ว กรอบ/ข้อมูลการ์ดเท่ากัน ปุ่มไม่ทับชื่อและวงหัวใจมองเห็นบนภาพศึกษา Readback ยืนยัน target หัวใจทั้งสาม 44×44px มี bounds warnings ของ columns/halo/face/icon/review note แม้ PNG แสดงครบ เก็บใน snapshot ไม่อ้างว่าทุก bounds ผ่าน ไม่แก้ Main Home, Mobile, Results, UXD-002 หรือ application code

คำถามหนึ่งข้อ: ใช้วงโฟกัสหัวใจตามภาพไหม? 1 ใช้ตามนี้ / 2 ลดความเด่นแต่ยังเห็น focus / 3 เพิ่มความชัด
