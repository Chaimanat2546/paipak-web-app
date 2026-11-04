# Header popovers-r1 · ภาษาและติดต่อ

4 พฤศจิกายน 2026 · native open-state previews · รอเจ้าของตรวจรับ

เจ้าของทักว่าไม่เห็นสถานะกดธงไทย/หูฟังและถามว่ามี modal แยกหรือไม่ ก่อนหน้านี้มีแผงตัวอย่างในบอร์ด `h9ExoH` แต่ยังไม่มีภาพการเปิดใต้ Header บนฉาก Home จึงทำสองสถานะที่แสดงตำแหน่งจริงของ popup

วางบอร์ด **F01 · Header · ภาษาและติดต่อเปิด · Desktop** (`vQzxp`) ที่ x=1560,y=0 ด้านขวาของ Home ตัวหลักใน `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` และไว้ต้น layer list เพื่อหาเจอง่าย

[กดธงไทย](topfZ.png) · [กดหูฟัง](nDcVo.png) · [บอร์ดรวม](vQzxp.png) · [native layers](layer-snapshot.json)

มี [ข้อเสนอเพิ่มเติม A/B](../header-utility-study-r2/README.md) ตามคำถามเจ้าของ ยังไม่ได้เลือกหรือแทนแบบ R1 นี้

- ธงไทย: popup เลือกภาษา กว้าง 256px แสดงไทยที่เลือกอยู่กับ English ตาม inventory เดิม ไม่เพิ่มสกุลเงินหรือระบบหลายภาษาจริง
- หูฟัง: popup ติดต่อ กว้าง 280px มี LINE OA และโทร ไม่ใส่บัญชี หมายเลขโทรศัพท์ หรือ URL ที่ยังไม่ยืนยัน
- ทั้งสองเป็นแผงเล็กใต้ไอคอน ไม่ใช้ modal กลางจอหรือฉากหลังมืด เปิดทีละแผง มีปุ่ม X พื้นที่กด 44px และรายการเลือกสูง 48px
- ข้อกำหนดปิด: X, คลิกนอก หรือ Esc ปิดแล้วคืน focus ปุ่มต้นทาง สำหรับขั้น implementation ที่ได้รับอนุญาต ยังไม่มี handler จริงใน Pencil

ภาพ preview เป็น crop ด้านขวาของ Header/Home ขนาด 640×340 ไม่ใช่หน้า responsive ใหม่ Main Home-r7 `A1ks07` และ Header default ที่อนุมัติไว้ไม่เปลี่ยน ตรวจเทียบข้อมูลก่อน/หลังจาก source snapshot แล้วตรงกันทั้งหมด ตรวจภาพทั้งสองแล้ว popup อยู่ใต้ trigger และข้อมูลไม่ทับกัน

Board ใหม่และ popup เป็น native editable frames/text/icons ภาพพื้นหลังเป็น asset เดิม ไม่ใช่การแปะรูป popup ทั้งชิ้นเป็น UI สถานะนี้ยังต้องตรวจรับแยก ไม่อนุมัติ Home-r7 ทั้งหน้า ไม่เริ่ม Auth task, Frontend, i18n integration, ติดต่อจริง หรือ backend และ OPEN-001 ยังคงเปิด
