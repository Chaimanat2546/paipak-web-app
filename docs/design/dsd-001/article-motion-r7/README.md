# Article-motion-r7

5 พฤศจิกายน 2026 · อัปเดต motion ให้ตรง ready state ที่รับแล้ว · รอตรวจ motion

ผลตรวจภายหลัง: เจ้าของเลือก `1` ใช้การเคลื่อนไหวตามตัวอย่าง รับเฉพาะ featured motion ที่แสดงใน r7 ตาม [หลักฐานพร้อม hash ตัวอย่าง](owner-featured-motion-acceptance.json) ส่วน supporting interaction และภาพ native focus ที่ยังไม่ได้แสดงให้ตรวจแยกยังไม่ถูกอนุมัติจากคำตอบนี้

เจ้าของเลือก `1` รับภาพ Article-body-fallback-r2 เมื่อบทความโหลดสำเร็จแล้ว จึงเตรียม motion review ต่อใน R1 โดยรักษา layout ปก 16:9 ข้อความเด่นสองบรรทัด/รองหนึ่งบรรทัด และเนื้อหาที่แสดงสูงสุดสองบรรทัด

รอบนี้ตรวจเฉพาะ hover ของรูปเรื่องเด่น และมีภาพ focus/reduced-motion ประกอบ ไม่ใช้ preview r4 เก่าที่สัดส่วน/กติกาข้อความยังไม่ตรงรุ่นล่าสุด

## ข้อเสนอที่นำมาตรวจ

- ยกกรอบรูปเด่นขึ้น 6px เอียงตามทิศที่เจ้าของแก้ไว้ใน r4 และขยายทั้งกรอบ 1.035 เท่า
- แสดงภาพภายในกรอบแบบเดิม ไม่เพิ่มการซูม/ครอปภาพด้านใน แผงข้อความยกตาม 6px แต่ยังตั้งตรง
- ใช้ระยะเปลี่ยนสถานะ 336ms และ easing จาก preview เดิม ค่านี้เป็นข้อเสนอสำหรับตรวจ ไม่ใช่ shared token ที่อนุมัติแล้ว
- ลดการเคลื่อนไหวให้แสดงภาพคงที่และยังอ่าน/เข้าถึงเรื่องได้ Focus ใช้เส้น Navy 2px รอบลิงก์ทั้งเรื่อง ไม่เพิ่ม Tab stop ให้ลูกศร

มุม CSS ใช้ +1.5° ตาม r4 ส่วน Pencil ใช้ -1.5° เพราะพิกัดการหมุนของเครื่องมือนับสวนทางกัน เก็บภาพ endpoint เพื่อเทียบด้วยตา ไม่ใช้เพียงตัวเลขเป็นหลักฐานทิศทาง

| ภาพ | Native root | สถานะ |
| --- | --- | --- |
| ปกติ | l5kvNr | [เจ้าของรับ appearance แล้ว](../article-body-fallback-r2/owner-ready-state-acceptance.json) |
| Hover endpoint | VXGI6 | [ภาพ hover](VXGI6.png) รอตรวจ |
| Focus / ภาพนิ่งเมื่อใช้ reduced motion | ppdaN | [ภาพ focus](ppdaN.png) รอตรวจ |

Copy จาก ready state โดยไม่แก้ต้นฉบับ อนุญาตรูปขยับออกนอกขอบ story แต่คงการตัดมุม backing ด้านล่างเฉพาะชั้น เพื่อไม่ตัดส่วนรูปที่ขยับและไม่เปลี่ยน silhouette เดิม

ตัวอย่างเคลื่อนไหวในแชตแสดงเฉพาะเรื่องเด่นเพื่อให้ตรวจทิศทาง/แรงได้ชัด รูปและ backing เป็น native exports จากแบบปัจจุบัน ข้อความเป็น mock body เดิม มีปุ่มจำลอง hover และลดการเคลื่อนไหว ลิงก์ไม่มีการนำทางจริง การปรับให้พอดีกับขนาด preview ไม่ใช่การรับ Mobile ซึ่งยังพักอยู่

## หลักฐานและข้อจำกัด

เปิดตรวจ native PNG ทั้งสองหลังแก้ล่าสุดแล้ว รูปไม่ชนเรื่องรอง แผงข้อความยังตั้งตรง และ focus outline อยู่รอบเรื่องเด่น ไม่อ้างว่าภาพนิ่งพิสูจน์ animation/runtime ได้

ตรวจ syntax ของ script ในตัวอย่างด้วย `node --check` และตรวจ fragment/ขนาด/asset references จาก source แล้ว ยังไม่ได้ทดสอบ interaction ใน browser จริงหรือยืนยัน font loading และ browser compatibility การตรวจ runtime ของแอปยังไม่อยู่ในรอบนี้ Bounds diagnostics จาก Pencil เก็บไว้ตามเดิม ไม่อ้างว่าทุก bounds ผ่าน

[Manifest](review-manifest.json) · [Native snapshots](editable-snapshots.json) · [Bounds diagnostics](bounds-diagnostics.json)

ยังต้องตรวจ supporting interaction, safe-area study ที่มีข้อความบนปก และ article version รวม ก่อนนำไปตรวจ Home ตามแผน ภาพ ready state ที่รับไม่เท่ากับการรับ motion นี้ Main Home, Footer, TikTok, loading และ hidden-context ที่รับแล้วไม่เปลี่ยน ไม่มี application code/backend/deploy Mobile พัก OPEN-001 เปิด
