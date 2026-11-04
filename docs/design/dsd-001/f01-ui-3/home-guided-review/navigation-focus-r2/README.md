# Home 3D.2 / Navigation-focus-r2

คำสั่งเจ้าของ: “ปรับใหม่หมด” หลังภาพ Navigation-focus-r1 จึงตีความตามจุดที่กำลังตรวจว่าออกแบบ focus ทั้งสาม control ใหม่ ไม่ขยายเป็น redesign หน้า Home ทั้งหน้า

Native root oYzOn ใน papaipak-ui.pen เดิม เปลี่ยนเป็น r2 จำนวน43 nodes โดยเก็บ PNG/snapshot r1 ไว้ก่อนแก้ เอากล่องพื้นหลังของภาพเปรียบเทียบออกเพื่อให้เห็นตัว controls โดยตรง ใช้พื้นขาวทั้ง board

- ทางลัดหมวด: เอากรอบล้อมออก ใช้เส้นเน้น navy36×3px ใต้ label เฉพาะ keyboard focus ตั้ง target สูง82px เท่ากันในตัวอย่าง default/focused เพื่อไม่เปลี่ยนตำแหน่งเมื่อ focus ภายใน slot หมวดสูง82px ที่มีอยู่
- ดูทั้งหมด: เอากรอบล้อมออก ใช้เส้น navy77×3px ใต้ข้อความ/ลูกศร คง target สูง44px เส้นเป็น absolute จึงไม่ดัน layout
- เลื่อนแถว: ปุ่ม next focused เป็น navy fill พร้อมไอคอนขาว22px คง target44×44px เอา outer focus ring เดิมออก ปุ่มก่อนหน้าที่ disabled คงจางและไม่รับ Tab

แถวบนเป็น default แถวล่างเป็นข้อเสนอ focused; ทุกอย่างเป็น native static samples กรอบ/เส้นใหม่แสดงเฉพาะ focus-visible ไม่เปลี่ยน category shortcut เป็น filter toggle หรือเปลี่ยนปลายทาง/step การเลื่อนแถว หัวใจที่รับใน Card-focus-r3 ไม่เปลี่ยน

ตรวจ screenshot และ PNG เต็มแล้ว เส้นไม่ชนข้อความ ปุ่มเลื่อนมี contrast navy/white13.74:1 สำหรับคู่สี solid ไม่อ้าง WCAG ทั้งหน้า ไม่มี actual Tab, focus restoration หรือ animation test Native readback มี bounds warnings ของ columns/underline/review note แม้ PNG แสดงครบ เก็บ warnings ใน snapshot ไม่อ้างว่าทุก bounds ผ่าน ไม่แก้ Main Home, Results, Mobile, UXD-002, application code/backend/deploy และไม่ปิด OPEN-001

สถานะ: เจ้าของเลือก 1 รับภาพชุดใหม่เฉพาะ 3D.2 แล้ว ไม่ใช่ final Home/F-01/DSD-001 approval หรือ actual keyboard test
