# Home 2B.1 / Photo-quiet-r1

4 พฤศจิกายน 2026 · เจ้าของเลือก 2 “ลดความเด่น” · ปรับแล้วรอตรวจภาพแก้

[ภาพเทียบ default/focus ล่าสุด](step-2b.png) · [Home](A1ks07.png) · [state board](iAeye.png) · [verification](verification.json)

ลดหน้าปุ่มลูกศรจาก 32px เหลือ 28px และ glyph จาก 18px เหลือ 16px ใช้พื้นขาวกับขอบ navy อ่อน 1px คง target 44×44px เดิม ปุ่ม focus เลิกเติมพื้นขาวทั้ง target 44px และย้ายวง focus navy 2px มาครอบหน้าปุ่ม 28px ทำให้ขนาดที่มองเห็นลดลง แต่ยังแยก focus ออกจาก hover ได้ในภาพ

ปรับ faces ครบ 108 จุดใน 54 การ์ดบน Main Home ทั้งเจ็ดแถว และ 6 จุดใน iAeye ซึ่งเป็น state samples ปัจจุบัน ค่า opacity ของ arrows ใน default และ disabled edge เดิมคงไว้ ไม่เปลี่ยนเป็นแสดงตลอด ไม่มีการเปลี่ยนหัวใจ ปุ่มเลื่อนแถว รูป ราคา typography ที่เพิ่งรับ หรือส่วนอื่นของการ์ด

ก่อน/หลังรวม Home และ iAeye; verification ยืนยันว่าเปลี่ยนเฉพาะ nodes ของ photo controls และ Main Home targets ทั้ง 108 จุดยังเป็น 44×44px อ่าน PNG crop เต็มขนาดแล้ว Default ยังให้ภาพนำ และ focus ยังเห็นขอบ navy ชัดในตัวอย่างนี้ ไม่รับรอง contrast กับภาพทุกชนิดหรือ keyboard จริงจากภาพ static และไม่ปิด OPEN-001

Results, Mobile, generic/historical state boards คงเดิม รอการตรวจและจัดชุดตามแผน ไม่แก้ application code/CSS ไม่เชื่อม backend หรือ deploy การเลือก 2 คืออนุญาตให้แก้ ยังไม่ถือว่ารับภาพใหม่หรือผ่าน 2B ทั้งหมด
