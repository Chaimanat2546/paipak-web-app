# Home Desktop-r6 · ตรวจจากภาพทั้งหน้า

4 พฤศจิกายน 2026 · ตรวจ static Pencil ภายในขอบเขต Home Desktop

ใช้ Taste Skill / references/critique.md ตรวจ composition, type, colour, imagery และการเรียง 4 ใบ โดยคง Direction A, Header-r11, UX และข้อมูลเดิม ไม่ใช้ browser inspector, motion หรือ functional checks ที่ต้องสร้าง Frontend นอกขอบเขต

## ROUND 1

Seen in one second: Hero ยังเป็นจุดนำ แต่เมื่อเลื่อนลงพบฐานราคาฟ้าสี่แท่งที่คล้ายปุ่ม

Idea (one sentence): ให้ภาพบ้านและผิวน้ำพาเข้าสู่การเลือกบ้าน โดยข้อมูลทำหน้าที่ช่วยเปรียบเทียบ

Live thing: แบบ static; search, photo carousel และ listing rail เป็นข้อกำหนดพฤติกรรม ยังไม่ทำงานจริง

Layout words by section: hero=panorama / categories=flat navigation / villas=4-card rail / footer=plain close

Scores: design 5.5 · usability 6.0 · creativity 5.5 · content 5.0 → overall 5.6 (subjective static-study review)

Caps applied: ภาพบ้าน AI และ fixtures ไม่ใช่ production content; usability ประเมินจากภาพเท่านั้น ไม่ใช่ keyboard/runtime/AA acceptance

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `../home-card-row-4/kJSyu.png`: ฐานฟ้าทุกใบแย่งน้ำหนักจากภาพและดูคล้าย action ย้ายพื้นสีไปเป็นบรรยากาศร่วมของ section แทนการทำแถบเด่นสี่แท่ง
2. `../home-card-row-4/kJSyu.png`: รูปจบด้วยขอบตรงแล้วแยกเป็นรายการข้อความ ทำให้ดูเหมือนประกอบชิ้นส่วน จัดภาพและข้อมูลให้เป็นการ์ดเดียวด้วยสัดส่วนและมุมที่ต่อเนื่อง
3. `../home-card-row-3/OvTYW.png`: จำนวนคน ห้องนอน และราคาอยู่ติดกันในบรรทัดเดียว แยกราคาเป็นกลุ่มที่มีระยะชัด พร้อมตรวจในแถวจริงและหน้าเต็ม

## ROUND 2

Seen in one second: ภาพ Hero และผิวน้ำยังเป็นจุดนำ เมื่อลงมาถึงรายการเห็นภาพบ้านสี่ใบก่อนข้อมูล

Idea (one sentence): ใช้ภาพบ้านต่อเนื่องจาก Hero เข้าสู่แถวบ้านที่มีจังหวะข้อมูลเดียวกัน โดยพื้นอ่อนเป็นบรรยากาศร่วมของ section

Live thing: ยังคงเป็น static UI; ภาพสถานะปกติ/โฟกัสและท้ายแถวแสดงข้อกำหนดการทำงาน ไม่ใช่ผลทดสอบ interaction

Layout words by section: hero=panorama / categories=flat navigation / villas=white cards on one quiet field / footer=plain close

Scores: design 6.5 · usability 6.0 · creativity 6.0 · content 5.0 → overall 6.1 (subjective static-study review, constrained by the items below)

Caps applied: ภาพบ้านทั้งหมดเป็น AI study, ข้อมูลเป็น fixtures, OPEN-001 ยังเปิด และยังไม่มี functional prototype จึงไม่ประเมินราวกับเว็บ production ที่ผ่าน accessibility/runtime แล้ว คะแนนนี้ไม่ใช่ผลรับรองจากผู้ใช้หรือ Awwwards

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. `A1ks07.png`: ภาพและข้อมูลยังเป็นของจำลอง ต้องแทนด้วย inventory จริงในขั้นที่ได้รับอนุญาต ไม่สร้างคะแนนรีวิวหรือคุณสมบัติเพิ่มเพื่อทำให้ดูสมจริง
2. `A1ks07.png`: ข้อความขาวบนปุ่มชมพูยังไม่ผ่านประเด็น contrast เดิม รักษาตามคำเลือกเจ้าของและคง OPEN-001 ไว้ ไม่แก้สีเองในรอบนี้
3. `A1ks07.png`: สถานะชื่อยาว/hover/keyboard/scroll ยังไม่ทำงานจริง มีภาพ state แยกสำหรับตรวจ แต่ไม่อ้างว่า behavior ผ่าน

ผลการแก้สามข้อจาก Round 1: เอาฐานราคาฟ้าทั้งสี่ออก, รวมภาพกับข้อมูลเป็นการ์ดขาวที่มีสัดส่วนร่วมกัน, แยกกลุ่มข้อมูลกับราคาและเปิดระยะที่ไม่ชนกัน ตรวจหน้าเต็มกับแถวจริงแล้ว ไม่พบการทับหรือข้อมูลขาดในภาพที่ส่งรอบนี้ หยุดการปรับ appearance รอบนี้เพื่อให้เจ้าของประเมินแบบเดียวในภาพรวมก่อน
