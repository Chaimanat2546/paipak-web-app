# Home 4C.2 / Header-contact-r2

เจ้าของเลือก1ในคำถามแผงติดต่อ: ย่อให้เข้าชุดกับภาษา จึงสร้าง context สำเนาใหม่ ZrguB จาก wthCi ของ Header-icons-r4 ใน papaipak-ui.pen เก็บร่างเดิมและ official assets ไว้ ไม่ใช่การรับขนาดเดิมตามภาพก่อนแก้

Popover R3zSU ลด336×220pxเป็น280×176px, x148→204เพื่อคงขอบขวา484ตรง trigger เดิม, y96คงเดิม ใช้padding8/gap2/radius16เท่าระบบแผงภาษากะทัดรัด หัวข้อ18→16pxและglyphปิด18→16px แต่ปุ่มปิดยัง44×44px แถวติดต่อ72→56px/gap12→10px/paddingแนวนอน12→8px คงชื่อช่องทาง16px คำอธิบาย13pxและลูกศรexternal18px

LINE official icon32×32pxในพื้นที่ขาว44×44pxและรูปไอคอนโทร22pxคงเดิม แผงติดต่อกว้างกว่าแผงภาษาเพราะมีข้อมูลสองบรรทัด ไม่บีบชื่อ/คำอธิบายให้ตัดหรือใช้โลโก้แชตแทน ไม่มี LINE account, URL, เบอร์โทรหรือเวลาบริการสมมติ

ตรวจ screenshot จาก Pencil และ PNG เต็มแล้ว ชื่อ/คำอธิบาย/ไอคอนไม่เบียดกัน Popup readback ยืนยัน280×176px, แถว264×56px, close44×44px, LINE32px และไม่พบ bounds problems ภายใน popup ไม่อ้างว่าทั้ง crop/canvasผ่าน Context77nodes, canvas103roots/23462nodes

Behaviorเปิดทีละแผง/X/คลิกนอก/Esc/คืนfocusอ้าง contract เดิม ยังไม่ส่งข้อความ โทรออก หรือทดสอบkeyboardจริง ปลายทาง LINE/โทรยังรอยืนยัน ไม่แก้ Main Home, Results, Mobile, UXD-002 หรือapplication code/backend/deploy และไม่ปิด OPEN-001

สถานะ: เจ้าของเลือก1รับขนาด/ช่องไฟเฉพาะแผงนี้แล้ว ไม่ใช่ final Header/Home/F-01/DSD-001 approval
