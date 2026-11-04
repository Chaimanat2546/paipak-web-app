# Article Desktop review-1

5 พฤศจิกายน 2026 · ชุดตรวจ R1 บทความ Desktop · ส่งกลับแก้ฝั่งขวา

รวมข้อสรุปบทความ Home ที่รับเป็นรายส่วนไว้เพื่อขอรับชุด appearance/specification ก่อนรวมหน้า Home ตาม closeout plan ไม่เริ่มฟีเจอร์บทความ หน้าอ่าน ระบบจัดปก หรือ Frontend

## ภาพที่ใช้ตรวจ

- Default `L4FBX` คัดจาก ready `l5kvNr` ไม่เปลี่ยนหน้าตา รูป/ชื่อ/เนื้อหาจำลองคงเดิม [ภาพ](L4FBX.png)
- Keyboard `y6U0w` แสดง supporting/index คนละตัวอย่าง พื้น Navy เฉพาะข้อมูลหรือลิงก์ ชื่อขาว เนื้อหา Light Blue และลิงก์/ลูกศร Pink ไม่ใช้กรอบล้อมที่ถูกปฏิเสธ ภาพนี้เป็นการปรับใช้แนว focus ที่เลือกแล้วและยังรอรับ ไม่ได้หมายถึงสอง focus พร้อมกันในหน้า Home [ภาพ](y6U0w.png)
- Featured keyboard endpoint ใช้ `qV3Kf` และภาพ Article-focus-r3 ที่เลือกแบบพื้นเข้มไว้ คงแยกจาก pointer hover/activation

## Interaction รุ่นที่รวม

| ส่วน | รุ่น/ข้อสรุปที่รับแล้ว |
| --- | --- |
| เรื่องเด่น hover | Article-motion-r7: ยกกรอบรูป 6px เอียงตามที่รับ ขยายทั้งกรอบ 1.035; ไม่ซูมด้านใน; caption ยก 6px; 336ms |
| เรื่องเด่นกด | Article-press-r4: สีแผ่จากจุดคลิกพร้อมเด้ง +3/-4/0px, 420ms; press entry 140ms; จากนั้นถึงจังหวะเปิดหน้า |
| เรื่องรอง hover | Article-supporting-motion-r8: รูปคงที่ ข้อความขวา 3px เส้นใต้ชมพู ลูกศรขวา 2px/ขึ้น 2px; 336ms |
| เรื่องรอง/บทความทั้งหมดกด | Article-secondary-interaction-r2: เด้งอย่างเดียว 420ms ไม่มีสีแผ่ตอนคลิก |
| Keyboard | Tab order: บทความทั้งหมด → เรื่องเด่น → เรื่องรองตามลำดับ แต่ละเรื่องลิงก์เดียว; cue พื้นเข้มที่คงอยู่ระหว่าง focus; supporting/index adaptation รอรับในชุดนี้ |
| Reduced motion | ไม่มีการเด้ง/ยก/เอียง/ขยับ รูปคงที่ focus cue ยังมองเห็น เปลี่ยนปลายทางสีทันทีและไม่หน่วง navigation เทียม |

ตัวอย่าง interaction ในแชตเดิมยังเป็น design demonstration ที่กั้นลิงก์ไว้ ไม่ใช่ navigation จริง ข้อเสนอ same-tab activation รอจังหวะ 420ms ตามที่เจ้าของรับแล้ว ส่วน modifier/new-tab ต้องรักษาพฤติกรรม browser ในงานพัฒนาภายหลัง

## Content และสถานะ

คงกติกาที่รับแล้ว: ปกสำเร็จรูปจากภายนอกเป็นภาพเดียว ใช้ 16:9 เป็นฐาน ไม่ crop/zoom อัตโนมัติ ไม่จัดตัวหนังสือในปกด้วยเว็บ ชื่อเด่นสูงสุด 2 บรรทัด รอง 1 บรรทัด เนื้อหาสูงสุด 2 บรรทัดและไม่จองบรรทัดว่าง เนื้อหาตัวอย่างเป็น mock; เมื่อมีข้อมูลจริงใช้จาก body ของบทความนั้น

คัดเรื่องก่อน เติมเรื่องล่าสุดจากวันที่แก้ไขให้ครบ 3 โดยไม่ซ้ำ หากมีจริงเพียง 1/2 เรื่องใช้ layout ที่รับแล้ว ถ้าไม่มีเรื่องพร้อมหรือ optional article list ล้มเหลวให้ซ่อน section/spacing ไม่แสดง retry/error ให้ผู้ใช้แก้ รูปโหลดเสียข้ามเรื่องและเลื่อนเรื่องพร้อมถัดไปขึ้น ไม่แก้สถานะคลังถาวรจากความล้มเหลวชั่วคราว เก็บ requirement logging ไว้สำหรับงานภายหลัง ไม่มี service จริง

ภาพ/หลักฐาน states ที่รับเป็นรายส่วนอ้างใน manifest: ready body-fallback-r2, count-r1, loading BvlEu และ hidden q1Q2w ไม่ย้อนใช้ error/retry f6x4t หรือ no-excerpt treatment เก่า Sample safe-area-r2 ที่จัดปกขึ้นเองถูกถอน ไม่เป็นงานค้างหรือ prerequisite ของชุดนี้ ส่วนข้อจำกัด panel ซ้อนปกยังคงเป็นข้อกำหนดตรวจภาพจริง ไม่มีการรับรองทุกภาพจาก mock

## การตรวจและจุดที่ยังไม่รับรอง

เปิด native PNG ทั้ง default และ keyboard ตรวจครบแล้ว รูปและข้อความในภาพครบ อ่านขนาดจากไฟล์และตรวจ hash sources ที่รับแล้ว แหล่งเดิม/Main Home/variables ไม่เปลี่ยน Snapshot และ bounds เก็บไว้: พื้น focus ขยายออกจาก text frame ถูก Get รายงาน clipped แต่ภาพ export เห็นครบ และ clip:false ของ parent ถูกระบุแล้ว ไม่รับรอง diagnostics สะอาด

ยังไม่ทดสอบ application/browser keyboard, screen reader, font loading, motion/navigation จริง, data fallback หรือ responsive ทุกขนาด การรับชุดนี้เป็น visual/specification acceptance ตามภาพและหลักฐานที่ระบุ ไม่ใช่ functional accessibility certification

บทความ/Home/foundation ทั้งชุดยังรอ gate ของตนเอง การรับ article review-1 ไม่ปิด DSD-001 ไม่เริ่ม Task อื่นหรือ Frontend/backend/deploy Mobile พัก OPEN-001 เปิด UXD-002 review-5 ไม่เปลี่ยน

[Manifest](review-manifest.json) · [Default snapshot](default-snapshot.json) · [Keyboard snapshot](keyboard-snapshot.json) · [Bounds](bounds-diagnostics.json)

## คำแก้ล่าสุดของเจ้าของ

เจ้าของระบุว่าฝั่งขวาไม่ตรงกับที่คุย ผู้จัดทำถอนการขยายพื้นเข้มจากเรื่องเด่นไปยัง supporting/index ที่เพิ่มเอง ซ่อน y6U0w ภาพ/ข้อเสนอ keyboard ด้านบนเป็นประวัติที่ไม่ใช้ขอรับแล้ว คงฝั่งขวาแบบเดิมไม่มีพื้นเข้มและ activation เด้งอย่างเดียว 420ms ที่รับไว้ ไม่เลือก focus รูปแบบใหม่แทนเอง ทั้งชุดยังไม่ได้รับอนุมัติ ดู [คำแก้และภาพอ้างอิง](right-side-correction/owner-right-side-correction.json) / [ภาพฝั่งขวาเดิม](right-side-correction/T93FT.png)

คำสั่งล่าสุด: “บทความทั้งหมด” กดได้ตามปกติ ไม่มีแอนิเมชัน ไม่รอ420ms และพักการออกแบบเอฟเฟกต์ไว้ คำสั่งนี้แทนเฉพาะ index ในแถวรวมเดิม เรื่องรอง/เรื่องเด่นคงเดิม ดู [secondary-r3](../article-secondary-interaction-r3/README.md) ยังไม่มี navigation จริงหรือการรับชุดบทความ
