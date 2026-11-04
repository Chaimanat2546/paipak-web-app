# Article-press-r1

5 พฤศจิกายน 2026 · ตัวอย่างกดแล้วเด้งกลับ · รอเจ้าของตรวจ

ผลตรวจ: เจ้าของเลือก `2` ให้เด้งเบาลง จึงแก้ board `m0I12` เป็น [Article-press-r2](../article-press-r2/README.md) แล้ว ภาพ/snapshot และ prototype r1 นี้เก็บเป็นประวัติ ยังไม่ถือว่ารับแรงเดิม

เจ้าของถาม “กดแล้วเด้งอะไรเงี้ยมีไหม” จึงทำตัวอย่าง press feedback ของเรื่องเด่นให้ลองกด ไม่ถือว่าคำถามนี้อนุมัติรูปแบบหรือแรง motion ล่วงหน้า และไม่ตีความเป็นการขอ popup/หน้าอ่านใหม่ ดู [คำขอ](owner-request.json)

## ข้อเสนอ

- ตอนกด: เลื่อน story ทั้งชิ้นลง 3px โดยไม่เปลี่ยนขนาดหรือครอปเนื้อหาภายใน
- ตอนปล่อย/activate: จากลง 3px ขึ้นเหนือจุดเริ่ม 4px แล้วคืนตำแหน่งเดิม ภายใน 240ms ครั้งเดียว ไม่มีการเด้งวน
- คง hover เรื่องเด่น r7 ที่รับแล้วเป็นอีกชั้นของรูปและแผงข้อความ ไม่แก้ต้นแบบที่อนุมัติไว้
- Reduced motion ปิดการเคลื่อนที่ทั้ง press และ hover ในตัวอย่าง แต่ยังรับการกดและแสดงจุดโฟกัสได้

ตัวอย่างในแชตกดที่รูปหรือปุ่มลองกดได้ ยกเลิกการกดที่ออกนอก target แล้วไม่แสดงการเด้งยืนยัน ส่วน Enter ใช้ activation ของลิงก์ ไม่เปลี่ยน Space ของลิงก์ให้เป็นพฤติกรรมปุ่ม

ใช้ [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) สำหรับ prototype เฉพาะในแชต และรองรับ [prefers-reduced-motion](https://www.w3.org/WAI/WCAG22/Techniques/css/C39) เพื่อปิด motion ที่ไม่จำเป็น ไม่มีบริการหรือ library animation ใหม่ในแอป

## Focus และ navigation แยกจาก feedback นี้

การเด้งชั่วคราวไม่แทนตัวบ่งชี้ว่า keyboard focus อยู่ที่ใด ดูแนวคิดสถานะที่คงอยู่ระหว่าง focus ใน [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) ตัวอย่างนี้ใช้เส้นใต้ชื่อเมื่อ Tab เป็น cue ชั่วคราวเพื่อให้ลองกดได้ ไม่ถือว่าเลือกหนึ่งในสาม focus alternatives ของ Article-focus-r2 แล้ว

ลิงก์ใน prototype ไม่เปิดหน้าอ่าน เพื่อให้มองเห็นจังหวะซ้ำได้ เมื่อพัฒนา navigation จริงต้องเริ่มตาม flow ปกติ ไม่บังคับรอเล่น animation ให้จบก่อนเปลี่ยนหน้า ไม่เพิ่ม modal หรือเปลี่ยนพฤติกรรม whole-story link จากคำขอนี้

## Native reference

Board `m0I12` เป็นภาพอ้างอิงสามจังหวะ ไม่ใช่สามทิศทางออกแบบหรือ viewport ผลิตภัณฑ์ใหม่:

| จังหวะ | Native frame | ภาพ |
| --- | --- | --- |
| ปกติ | Kwt2w | [normal](Kwt2w.png) |
| กดลง 3px | LpOM6 | [pressed](LpOM6.png) |
| คืนผ่านตำแหน่งเหนือจุดเริ่ม 4px | fp1Jj | [rebound](fp1Jj.png) |

แต่ละภาพคัด story ที่รับแล้ว ไม่แก้ geometry ภายใน เพียงเปลี่ยนตำแหน่ง y ของทั้งชิ้นใน review frame รูป/ข้อความยังเป็น fixture เดิม ไม่เริ่มฟีเจอร์บทความจริง

## การตรวจ

เปิด PNG ทั้งสามหลังแก้พื้น export เป็นสีขาวแล้ว เห็นข้อความและป้าย review ครบ ตรวจ script syntax ด้วย `node --check` และตรวจ fragment/assets/ขนาดจาก source ยังไม่ได้ยืนยัน browser interaction, animation performance, font loading หรือ keyboard/screen reader ในแอป Bounds diagnostics จาก Pencil เก็บแยกและไม่อ้างว่าทุก bounds ผ่าน

[Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [Bounds diagnostics](bounds-diagnostics.json)

Main Home และ approved sources ไม่เปลี่ยน Focus alternatives ยังรอเลือก รวมทั้ง safe-area study และ article/Home version ตามแผน ไม่เริ่ม Frontend/backend/deploy Mobile พัก OPEN-001 เปิด
