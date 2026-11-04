# Article-press-r2

5 พฤศจิกายน 2026 · ลดแรงเด้งตามตัวเลือก 2 · รอตรวจภาพเคลื่อนไหวใหม่

คำแก้ไขล่าสุด: เจ้าของระบุว่าที่ต้องการคือช้าลง ไม่ใช่เบาลง จึงยกเลิกระยะครึ่งหนึ่งของ r2 และทำ [Article-press-r3](../article-press-r3/README.md) คืนระยะ r1 พร้อมเพิ่มเวลาแทน Native board ปัจจุบันเป็น r3 ส่วนภาพ/snapshot/prototype r2 เก็บเป็นประวัติ ไม่ถือว่าเจ้าของรับแรงแบบ r2

เจ้าของเลือก `2` ให้เด้งเบาลงจาก r1 จึงลดระยะลงครึ่งหนึ่ง: ตอนกดลง 1.5px ตอนปล่อยขึ้นเหนือจุดเริ่ม 2px แล้วคืนตำแหน่งเดิม ยังใช้เวลา 240ms และ easing เดิม เด้งครั้งเดียว ไม่เปลี่ยนความเร็ว hover ที่รับไว้ ขนาดรูป/ข้อความและการไม่ซูมภาพด้านในคงเดิม ดู [คำสั่งแก้](owner-revision-request.json)

แก้ reference board `m0I12` เดิมโดยตรงเป็น r2 เฟรมปกติ Kwt2w ไม่เปลี่ยนตำแหน่ง story ส่วน pressed LpOM6 เปลี่ยน y จาก 59 เป็น 57.5 และ rebound fp1Jj จาก 52 เป็น 54 ที่ baseline y56 ภาพ/snapshot r1 เก็บเป็นประวัติ ไม่ใช่ภาพของ board ปัจจุบัน

ตัวอย่างในแชตใช้ root ใหม่แยกจาก r1 กดรูป/ปุ่มลองกดได้ คง reduced-motion และยกเลิก motion ปัจจุบันเมื่อเปลี่ยนโหมด ไม่เปิดหน้าอ่านจริงในตัวอย่าง และการพัฒนา navigation ภายหลังต้องไม่บังคับรอ animation จบ

เปิด native PNG ของจังหวะที่เปลี่ยนทั้งสองแล้ว เห็นการเลื่อนทั้งชิ้นโดยไม่เปลี่ยนเนื้อหาภายใน ตรวจ script syntax ด้วย `node --check` และตรวจ source ว่าระยะลดครึ่งหนึ่งแต่เวลาเดิม ยังไม่ได้ทดสอบ interaction/browser/runtime จริง และไม่อ้างว่าทุก bounds ผ่าน

[Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [Bounds diagnostics](bounds-diagnostics.json) · [r1 ก่อนแก้](../article-press-r1/README.md)

การเลือกเบาลงเป็นคำสั่งแก้ ยังไม่รับ r2 ที่ยังไม่ได้เห็น Focus แบบคงอยู่ยังไม่ได้เลือกจากสามทางเลือกเดิม ไม่เพิ่มกรอบล้อมจากรอบนี้ Main Home และ approved sources/variables ไม่เปลี่ยน ไม่เริ่ม Frontend/backend/deploy Mobile พัก OPEN-001 เปิด
