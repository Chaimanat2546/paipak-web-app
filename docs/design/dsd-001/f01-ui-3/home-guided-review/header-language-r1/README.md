# Home 4C.1 / Header language popover review

ตรวจแผงภาษาเดิมจาก Header-icons-r4: native n3Qds ใต้ IfMTi ใน papaipak-ui.pen ขนาด688×414px เป็นภาพ crop บริบทด้านขวา Desktop ไม่ใช่หน้า responsive ใหม่ Export โดยไม่แก้ native nodes หรือ Header appearance

ภาพเป็น popover ใต้ธง มีไทย/English ใช้ธงวงกลม22px ที่เจ้าของเลือกแล้ว ไทยเป็นภาษาปัจจุบันด้วยพื้นฟ้าและเครื่องหมายถูก มีปุ่ม X ด้านบน แสดงขนาด/ตำแหน่งแผงในบริบทจริง ไม่เปิดเลือกธงหรือโลโก้ใหม่

ฐาน behavior จาก Header-reference-r3: เปิดทีละแผง ปิดด้วย X/คลิกนอก/Esc และคืน focus ที่ trigger; เลือกภาษาแล้วปิดแผง เป็น static contract ยังไม่ได้ทดสอบจริง การเลือกไอคอนและตรวจแผงไม่เปลี่ยน locale inventory, อนุมัติคำแปล/translation pipeline, currency, CMS หรือเริ่ม implementation i18n OPEN-001 ยังเปิด

คำถามหนึ่งข้อ: ใช้แผงเลือกภาษาแบบนี้ไหม? 1 Popover ตามภาพ / 2 ย่อแผงให้กะทัดรัด / 3 ใช้หน้าต่างกลางจอ รอเจ้าของเลือกเฉพาะ presentation ไม่ขยายเป็นการรับรองภาษาอังกฤษทั้งเว็บหรือ Header ทั้งชุด


เจ้าของเลือก2ให้ย่อแผง ภาพเดิมเก็บก่อนแก้ ดู Header-language-r2 สำหรับรุ่นเสนอปัจจุบัน ยังไม่ถือว่าแผงเดิมได้รับอนุมัติ
