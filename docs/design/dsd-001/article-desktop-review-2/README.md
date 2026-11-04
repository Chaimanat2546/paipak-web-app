# Article Desktop review-2

5 พฤศจิกายน 2026 · ฉบับรวมแก้ตามคำตอบล่าสุด · รอตรวจรับภาพและพฤติกรรมบทความก่อนรวม Home

คงภาพปกติที่รับเป็นรายส่วนไว้ Native `L4FBX` และ PNG ตรงกับ ready body-fallback-r2 ภาพปกเป็นไฟล์สำเร็จจากภายนอก ไม่จัดข้อความในปกด้วยเว็บ ถอนตัวอย่างจัดปกและการเพิ่มพื้นเข้มให้บทความรอง/ลิงก์ทั้งหมดที่ยังไม่ได้ตกลงออกจากชุดนี้แล้ว

## พฤติกรรมที่อ้างอิงในฉบับนี้

| จุด | ข้อสรุป |
| --- | --- |
| เรื่องเด่น | hover-r7 ตามที่รับ; กดแล้วแผ่สีจากจุดคลิกพร้อมเด้ง420ms ตาม press-r4 |
| เรื่องรอง | รูปคงเดิม supporting hover-r8; กดเด้งอย่างเดียว420ms ไม่มีสีแผ่ |
| บทความทั้งหมด | ลิงก์กดตามปกติ ไม่มีแอนิเมชัน/hover motion/delay เอฟเฟกต์พักไว้ตามคำสั่งเจ้าของ |

เจ้าของรับ secondary-r3 แล้วตาม [หลักฐาน](../article-secondary-interaction-r3/owner-secondary-acceptance.json) คำตอบนี้ยังไม่ถูกยกเป็นการรับภาพรวมบทความ รุ่นนี้ขอรับภาพและสัญญาการกดรวมโดยไม่เปิดแบบย่อยเดิมอีก

คง ready/count/loading/hidden และกติกาเนื้อหาที่รับแล้วตาม state inventory ใน manifest: ปก16:9/no auto crop-zoom, ชื่อเด่น2/รอง1, body2 ไม่จองบรรทัดว่าง, คัดก่อนเติมจากวันที่แก้ไขไม่ซ้ำ, ข้ามเรื่องไม่พร้อม, ใช้ layout1/2เมื่อข้อมูลไม่พอ, ซ่อน section เมื่อไม่มีข้อมูลพร้อมหรือ optional list ล้มเหลว ตามข้อกำหนดที่บันทึกไว้ ไม่ย้อนใช้ retry/error หรือข้อความแต่งแทน body จริง ตัวอย่างปัจจุบันเป็น mock ตามขั้นงานที่เจ้าของยืนยัน

## ขอบเขตตรวจและสิ่งที่ยังไม่รับรอง

ภาพ/หลักฐาน motion และคำตอบรายส่วนอ้างเวอร์ชันกับ hash ใน manifest ตัวอย่างกั้นลิงก์เพื่อทดสอบ feedback เท่านั้น ยังไม่มีการนำทาง/ฟีเจอร์บทความจริง คำว่าเปิดหลัง420ms ใช้กับ activation เรื่องเด่นและเรื่องรองเท่านั้น ลิงก์บทความทั้งหมดต้องไปต่อทันที Reduced motion/ไม่รองรับ animation ไม่หน่วงเทียม และต้องรักษา modifier/new-tab ตาม browser ในงานพัฒนาภายหลัง

Supporting/index dark keyboard treatment ที่เพิ่มเองใน review-1 ถูกถอน ไม่รวมใน appearance ที่ขอรับ และไม่เลือก custom cue ใหม่แทนเอง ประเด็นการตรวจ keyboard/focus/accessibility ในแอปยังแยกติดตาม ตัวอย่างล่าสุดคง browser focus ปกติ ไม่อ้างว่าสรุป custom focus ทั้งระบบแล้ว Featured selected focus ยังอยู่ในขอบเขตเรื่องเด่นเดิม ไม่ขยายไปฝั่งขวาอีก

เปิด PNG1440×746 ตรวจภาพล่าสุด และตรวจ hash เทียบ ready เดิมและ prototypes ที่รับแล้ว ภาพนี้ไม่ยืนยัน browser runtime/font loading/keyboard-screen reader/navigation/data หรือทุกขนาดหน้าจอ ปกจริงยังต้องตรวจข้อจำกัดการซ้อนรายภาพ ไม่รับรองจาก mock ว่าทุกภาพพ้นพื้นที่ซ้อน

การรับรุ่นนี้เป็น visual/specification acceptance ในขอบเขตที่แสดง ก่อนรวมหน้า Home ไม่ปิด DSD-001 หรือประเด็น accessibility ที่ยังไม่ผ่าน Whole Home และ foundation ยังแยกตรวจตาม R2/R3 ไม่เริ่ม Frontend/Taskอื่น/backend/deploy Main Home/variables ไม่เปลี่ยน Mobile พัก OPEN-001 เปิด UXD-002 review-5 ไม่เปลี่ยน

[ภาพ](L4FBX.png) · [Snapshot](editable-snapshot.json) · [Manifest](review-manifest.json)

เจ้าของเลือก `1` รับภาพและพฤติกรรมรุ่นนี้เพื่อนำไปรวม Home ตาม [หลักฐานและ hash](owner-article-acceptance.json) เฉพาะ visual/specification scope ที่ระบุ ข้อค้าง keyboard/accessibility, Whole Home, foundation และ Frontend คงแยกอยู่ ไม่ยกเป็นผ่านทั้งหมด
