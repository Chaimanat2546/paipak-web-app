# DSD-001 · A Holiday Panorama · pencil-A-1

3 พฤศจิกายน 2026 (Asia/Bangkok) · **ร่าง native Pencil รอเจ้าของตรวจรับ**

รอบถัดมาเจ้าของสั่งให้เติม UI ตาม F-01 มีชุด [F01-ui-1](../f01-ui-1/README.md) สำหรับตรวจปัจจุบัน ชุด pencil-A-1 นี้เก็บเป็นประวัติของ visual study ก่อนขยาย flow

เจ้าของขอ “ทำ ui ใน pencil ต่อ” แล้วระบุ “ขอเปลี่ยนเป็นแบบ A” จึงทำ A / Holiday Panorama ต่อผ่าน Pencil MCP และเก็บ B ที่ทำก่อนหน้าไว้เป็นประวัติ สีแบรนด์ Mitr และ CTA ชมพูเดิม #FD6E88 / ข้อความขาว #FFFFFF คงเดิม การเลือก A แทน B ไม่ใช่การอนุมัติรุ่น native นี้หรือ final foundation specifications

## เปิดดูและแก้ไข

- [Desktop 1440 × 1048](desktop.png) · node `diQ8i`
- [Mobile 390 × 1306](mobile.png) · node `vRrpq`
- [ไฟล์ native Pencil ที่ใช้งานจริง](C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen)
- [Editable layer snapshot จาก MCP](editable-snapshot.json) พร้อม [ภาพที่ใช้](images/)

ไฟล์ native ปัจจุบันอยู่ใน documents ของ Pencil ชื่อ `papaipak-ui.pen` (เริ่มงานในชื่อ untitled.pen) ตรวจพบไฟล์บนดิสก์และอ่านเลเยอร์ผ่าน MCP ได้ ยังไม่ได้ย้ายหรือรับรองว่า Save As เข้า repository สำเร็จ จึงเก็บ snapshot และ assets ใน repository ด้วย Snapshot เป็น JSON ของเลเยอร์ที่อ่านผ่าน MCP ไม่ใช่ไฟล์ .pen และไม่ควรเปลี่ยนนามสกุลเพื่อเปิดแทนไฟล์ native

แคนวาสมีบอร์ดสถานะ, A Desktop/Mobile ด้านบน และ B Desktop/Mobile ที่ระบุ HISTORY ด้านล่าง ไม่ได้เพิ่มเลเยอร์ลงไฟล์ UXD-002

## สิ่งที่ตรวจได้

- A Desktop มี 116 nodes และ A Mobile มี 77 nodes รวมข้อความ ไอคอน forms presentation, card information และ photo masks ไม่ใช่การวางภาพหน้าจอสำเร็จรูปแทนทั้ง UI
- ข้อความใช้ `$font.primary` ซึ่งผูกกับ Mitr; ไม่มีฟอนต์เสริม
- ภาพเต็มกว้างนำสายตา มี headline บนพื้นที่สว่าง เส้นน้ำสีชมพู ขอบสระสีขาวโค้งและ centered optional search มือถือใช้ภาพที่จัดองค์ประกอบสำหรับจอแคบโดยเฉพาะ ไม่มี inset ของ B
- Desktop มีเจ็ดหมวดและการ์ดสี่คอลัมน์ Mobile มีเจ็ดหมวดในแถบที่ตั้งใจให้เลื่อนแนวนอนและการ์ดหนึ่งคอลัมน์สองใบ การเลื่อนและการกดยังเป็น static presentation
- Favorite ใช้ Navy บนพื้นขาวพร้อมกรอบพื้นที่ 44px; ราคาและลิงก์ดูทั้งหมดใช้ Navy ไม่เพิ่ม ratings/reviews หรือคำรับรอง
- CTA ใช้สีที่เจ้าของเลือกตามเดิม OPEN-001 ยังเปิด ไม่มีการอ้างว่าคู่สีผ่าน AA หรือปิดประเด็นเอง

## ค่าที่เสนอในรุ่น native นี้

| รายการ | Desktop | Mobile |
|---|---|---|
| Hero heading | Mitr 600, 96px, line-height 1.13 ทั้งสองบรรทัด | Mitr 600, 48px, line-height 1.18 ทั้งสองบรรทัด |
| Supporting copy | 22px / 500 | 16px / 500 |
| Section heading | 32px / 500 | 24px / 500 |
| Card title / metadata / price | 18 / 14 / 22px | 18 / 14 / 22px |
| Listing outer gutter / gap | 56 / 24px | 24 / 24px ระหว่างการ์ด |
| Hero scene height | 470px | 386px |
| Search | 1040 × 88px | 342 × 72px |

เป็น geometry สำหรับตรวจภาพรุ่นนี้เท่านั้น ยังไม่แทน role scale หรือ responsive matrix ที่อนุมัติแล้ว ร่าง foundation-1 จัดทำตาม B ก่อนเจ้าของเปลี่ยนทิศทาง ต้องทบทวนให้ตรง A ก่อน final approval

## Assets และข้อจำกัด

ภาพ A สร้างด้วย `Generate("ai", ...)` ของ Pencil MCP เป็นบ้านสมมติสำหรับศึกษา ไม่ใช่ inventory หรือ production assets; ราคา ทำเลและความจุเป็น fixtures ดู [บันทึกภาพและรอบปรับ](asset-record.md) และ [ไฟล์ manifest](asset-manifest.json)

Wordmark เป็นข้อความ Mitr สำหรับศึกษา ไม่มีการสร้างหรือรับรองโลโก้แบรนด์ใหม่ ภาพใน B history มี stock จากชุด public/mock เดิมพร้อม credits ซึ่งเก็บแยกใน asset record

ตรวจภาพที่ export ขนาดจริงทั้งสองจอและ screenshot จาก MCP แล้ว ตรวจ topology, named nodes, font variable, จำนวนหมวด/การ์ดและ image fills ผ่าน MCP ไม่ได้ทดสอบ browser runtime, 320px, Tablet, keyboard, screen reader, zoom, real carousel, search/auth/booking หรือ motion และยังไม่มี final owner approval

งานนี้เป็นตัวอย่าง visual foundations ภายใน DSD-001 ไม่ใช่ Final Homepage ของ UID-001 ไม่แก้ UXD-002 review-5 ไม่เริ่ม DSD-002 หรือ Frontend
