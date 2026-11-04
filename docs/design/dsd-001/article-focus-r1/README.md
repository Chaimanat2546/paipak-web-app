# Article-focus-r1

5 พฤศจิกายน 2026 · ภาพ keyboard focus สำหรับตรวจใน R1 · รอเจ้าของรับ

ผลตรวจ: เจ้าของไม่ชอบกรอบแบบนี้และให้หาแบบอื่น จึงระบุรุ่นนี้เป็นประวัติที่ถูกส่งกลับแก้ ปิดการแสดง native review roots เดิม และเสนอ [Article-focus-r2](../article-focus-r2/README.md) แทน ไม่มีภาพใน r1 ที่อนุมัติจากคำตอบนี้

หลังรับ motion เรื่องเด่น r7 และเรื่องรอง r8 จึงแสดง focus appearance แยกให้ตรวจ โดยคง static ready state ที่รับแล้ว ไม่ยกการรับ hover เป็นการรับภาพ focus ที่ยังไม่ได้แสดง

| ตัวอย่าง | Native root | ภาพ |
| --- | --- | --- |
| เรื่องเด่น | mbFLJ | [featured](mbFLJ.png) |
| เรื่องรอง | g3HELa | [supporting](g3HELa.png) |
| ลิงก์บทความทั้งหมด | Dl1Qq | [index](Dl1Qq.png) |

ใช้เส้น Navy 2px ห่างจาก target 6px ให้เห็นขอบเขตลิงก์ทั้งเรื่อง ลูกศรและข้อความอ่านเรื่องนี้ยังเป็นส่วนตกแต่งของลิงก์เดียว ไม่เพิ่มจุดกด Tab กรอบโค้งตามขนาดองค์ประกอบ: เรื่องเด่น 30px, รอง 22px, ลิงก์ทั้งหมด 12px ภาพทั้งสามเป็นตัวอย่างคนละจังหวะ ไม่แสดง focus พร้อมกันสามตำแหน่งในผลิตภัณฑ์

เรื่องเด่นใช้ focus endpoint จาก r7 พร้อม backing ที่ตัดมุมเดิม เรื่องรองใช้ภาพ/ข้อความเดิม เพิ่มเส้นใต้ชื่อสีชมพูตาม feedback ใน r8 และกรอบรอบเรื่อง ลิงก์ทั้งหมดใช้กรอบรอบ target เดิม ข้อความบนสุดของแต่ละภาพเป็น review label นอก product UI

Design contract: Tab/Shift+Tab เลื่อนโฟกัสตามลำดับ DOM ของ section ได้แก่ลิงก์บทความทั้งหมด เรื่องเด่น เรื่องรองแรกและเรื่องรองถัดไป Enter ใช้ลิงก์อ่านตาม flow ที่รับไว้ จุด focus ไม่ทำให้ layout ขยับ ใช้ภาพนิ่งเมื่อ reduced motion ไม่มีการซูมหรือเอียงที่จำเป็นต่อการเข้าใจตำแหน่งที่เลือก

เปิดตรวจ PNG ทั้งสามที่ขนาด native หลังแก้ล่าสุดแล้ว เห็นกรอบครบ ไม่มีการตัดกรอบที่เห็นในภาพ อ่าน contrast ของสีจากค่า hex แยกใน manifest การทดสอบ Tab/Shift+Tab, Enter, screen reader และ browser จริงยังไม่ได้ทำในแอป ภาพนิ่งไม่รับรอง functional accessibility และยังคง bounds diagnostics ตามข้อจำกัด Pencil เดิม

[Manifest](review-manifest.json) · [Native snapshots](editable-snapshots.json) · [Bounds diagnostics](bounds-diagnostics.json)

ใช้ review copies เท่านั้น Main Home, ready-state source, Footer, TikTok และ motion ที่รับแล้วไม่เปลี่ยน ไม่เลือก supplementary font หรือแก้ global token ภาพนี้ยังรอตรวจ ไม่อนุมัติ article/Home/foundation ทั้งชุดหรือ Frontend Mobile พัก OPEN-001 เปิด
