# Home 2C.2 / Listing-step-two-r1

เจ้าของเลือก 2 ในจุด 2C.1: เลื่อนแถวบ้านทีละสองหลัง ร่างนี้แสดงผล static เพื่อให้ตรวจต้น/กลาง/ท้ายแถว เจ้าของตอบ 1 รับเฉพาะจุด 2C.2 แล้ว ไม่ใช่การอนุมัติ Home ทั้งหน้า

Native source: `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen`

| ตัวอย่าง | Native root | Track offset | บ้านที่เห็น | ปุ่มย้อน / ถัดไป |
| --- | --- | --- | --- | --- |
| เริ่มต้น 8 หลัง | xOs4G | 0px | 1–4 | จาง / ใช้ได้ |
| กดถัดไปหนึ่งครั้ง | F23f9S | -676px | 3–6 | ใช้ได้ / ใช้ได้ |
| ท้ายแถว 8 หลัง | SFvsa | -1352px | 5–8 | ใช้ได้ / จาง |
| ตัวอย่างสมมติ 7 หลัง | xv7Ce | -1014px | 4–7 | ใช้ได้ / จาง |

การ์ด 314px, gap 24px, viewport 1328px แสดงเต็มสี่ใบ, step สองใบ 676px ท้ายแถว clamp ที่ track width ลบ viewport width: 8 หลัง 1352px; 7 หลัง 1014px กรณีเจ็ดหลังจึงขยับครั้งสุดท้าย 338px จาก offset -676px เพื่อไม่เหลือช่องว่าง เจ้าของรับข้อนี้ใน 2C.2 ไม่เพิ่ม autoplay หรือ loop

ทั้งสี่ root เป็น copies ของ PANR1 และมี 274 native nodes ต่อ root รวมโหนดที่ปิดไว้ในกรณีเจ็ดหลัง Snapshot ตรวจ enabled card count เป็น 8/8/8/7 และ offsets ตรงตาราง ปุ่มเลื่อนรูปในการ์ดยังคง opacity 0 ใน default ภาพเดิมและข้อมูลเดิมไม่เปลี่ยนตาม listing offset

Main Home ทั้งเจ็ด track ยังคง x=0 และแยก node กัน (K8MB2z, idwYA, yFfMl, KmSjY, P87Yf, AOrG1, hABX1) Pet Friendly มีหก fixtures จึงใช้ตัวอย่างสมมติเจ็ดหลังสำหรับกรณีเหลือไม่ครบสอง ไม่อ้างว่าเป็นจำนวน catalog จริง การมี track แยกในแบบไม่แทนการทดสอบความเป็นอิสระตอนใช้งานจริง

ภาพ PNG ทั้งสี่ export จาก Pencil; step-2c.png รวม crop 1440×396 จากด้านบนของแต่ละ PNG เพื่อเทียบ controls/ภาพ/ชื่อ ตัดข้อมูลซ้ำด้านล่างออกโดยไม่แก้ artwork ตรวจภาพรวมและ PNG เต็มกรณีเจ็ดหลังแล้ว ปลายแถวพอดีสี่ใบและปุ่มจางตามข้อเสนอ Readback ของ source tracks มี partially clipped เพราะ track กว้างกว่า viewport โดยตั้งใจ ไม่อ้างว่า native bounds ทุก node ผ่าน

หลักฐานโครงสร้างอยู่ใน editable-snapshot.json พร้อม source row readback และจำนวนทั้ง canvas 93 roots / 21780 nodes ไม่มี functional click, keyboard, animation หรือ scroll test และไม่ได้แก้ application code, Mobile หรือ UXD-002
