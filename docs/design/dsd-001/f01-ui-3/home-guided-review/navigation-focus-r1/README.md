# Home 3D.2 / Navigation-focus-r1

สถานะ: เจ้าของสั่งปรับใหม่ทั้งหมดในจุดนี้ เก็บ r1 เป็นร่างก่อนแก้ ดู Navigation-focus-r2 ไม่ใช่อนุมัติ Home ทั้งหน้า

Native root oYzOn ใน papaipak-ui.pen เดิม จำนวน41 nodes แถวบน default/แถวล่าง focused เป็น copies จาก A74Zl, UoqLM และ yJUQ7 ของ Main Home ปัจจุบัน พื้นขาวทั้งหกช่องเป็นพื้นที่จัดภาพเทียบ ไม่ใช่การเพิ่มกล่องเหล่านี้ในหน้าเว็บ

Category focus gOj5d คงขนาด104×65px พร้อม navy2px outer outline/radius8px; View-all focus S6iDI คงเนื้อหาและพื้นที่สูง44px พร้อม navy2px outer outline/radius8px; Listing focus axtqK ให้ next button outline navy2px บนพื้นที่44×44px เดิม ส่วน previous disabled คง opacity.35 กรอบ keyboard focus ไม่ใช่ selected filter state และไม่เปลี่ยนปลายทาง category-only Results ที่รับไว้

ข้อเสนอใช้ focus-visible เท่านั้น ไม่เพิ่มกรอบใน default/hover และข้าม disabled listing controls จาก Tab การจัด focus ต้องไม่ขยับ layout หรือทำให้ Enter/Space ของ controls เปิดการ์ดตาม ยังไม่มี actual Tab/keyboard test หรือรับรอง semantics จาก Pencil

สี navy #072D59 บน white #FFFFFF contrast13.74:1 ตามการคำนวณคู่สี solid ของ Card-focus-r1 ใช้ได้กับสีของกรอบ/ไอคอนตัวอย่างนี้เท่านั้น ไม่รวม disabled-opacity indicator หรือหัวใจชมพูบนภาพ และไม่ปิด OPEN-001

ตรวจ screenshot/PNG เต็มแล้ว กรอบไม่ทับข้อความและ controls อยู่กึ่งกลาง ไม่แก้ Main Home, Results, Mobile, UXD-002 หรือ application code Native readback ยังมี bounds warnings ของ columns/แถวล่าง/review note แม้ PNG แสดงครบ เก็บใน snapshot ไม่อ้างว่าทุก native bounds ผ่าน

ถามหนึ่งข้อ: ใช้กรอบโฟกัสตามภาพไหม? 1 ใช้ตามนี้ / 2 ลดความเด่น / 3 เพิ่มความชัด
