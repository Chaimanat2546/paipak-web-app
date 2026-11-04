# F01-ui-2 · QA

3 พฤศจิกายน 2026

ตรวจแบบใน Pencil และภาพส่งออก ไม่ใช่ผลทดสอบเว็บหรือ functional prototype

- ตรวจ Header ครบ 5 Desktop page instances และ 10 Mobile instances รวม 3 feedback screens ภายในหนึ่ง review group บอร์ด Utility states มี Header ตัวอย่างเพิ่มอีกหนึ่ง รวมจำนวนใน snapshot เป็น Desktop 6 / Mobile 10
- ตรวจภาพ Header และ Footer contact sheets ครบทุก instance, Home Mobile หน้าเต็ม, Results Desktop หน้าเต็ม, เมนูมือถือ, Detail Desktop และ Detail fixed viewport รวมถึงบอร์ดภาษา/ติดต่อ/โฟกัสแล้ว ไม่พบการทับหรือข้อความล้นในส่วนที่ปรับจากภาพเหล่านี้
- เก็บ Header มือถือสูง 98px เท่าเดิม ธงและ menu icon 22px อยู่ใน target 44×44px โลโก้ Header มือถือ 32px และ Footer 32px; Desktop Header ใช้โลโก้ 42px ส่วน Footer 38px
- ตรวจโครงสร้างก่อนและหลังของ 27 content groups: นอก Header, Footer brand lockup และ Navigation panel ของมือถือ ข้อมูล/IDs/geometry ของ body ตรงเดิมทั้งหมด บอร์ด review index และสถานะปรับข้อความรุ่นเท่านั้น
- ค้นใน 29 review groups ไม่พบข้อความเมนู “ค้นหาที่พัก/จอง”, globe icon หรือ user-round avatar; ตัวแปรฟอนต์เป็น Mitr, layers มีชื่อและไม่มี path geometry placeholder ผลอยู่ใน verification.json
- ตรวจไฟล์ PNG ครบ 29 กลุ่ม ขนาดภาพตรง native frame bounds และ SHA-256 ของ assets เดิมทั้ง 11 ไฟล์ตรง manifest ของ F01-ui-1
- เครื่องมือ Pencil รายงานปัญหา fit_content ของ Footer text ขณะประกอบ แก้เป็นค่าความกว้างตัวเลขแล้ว หลังแก้ไม่พบ warning ใน execute ที่ตามมา และ targeted Header/branding bounds diagnostic ให้รายการว่าง ไม่ถือเป็นการรับรอง clipping ของทุกองค์ประกอบทั้งแคนวาส

การวางโลโก้และเมนูเป็น native editable layers ชุดภาพรวม contact sheets ประกอบจาก PNG ที่ส่งออกเพื่อช่วยตรวจ ไม่ใช้แทน native design

Pencil ใช้ autosave ที่ native source นอก repository ยังไม่ได้ทดสอบปิดแอปและเปิดใหม่ ไม่มีการทดสอบ pointer, keyboard, route navigation, Login, change-language, request, booking หรือ runtime จริง

คงข้อจำกัดของ fixtures และภาพ AI จากชุดเดิม ไม่มีการรับรอง asset production rights หรือข้อมูลบ้านจริง OPEN-001 ยังเปิดและยังไม่รับรอง AA ข้อความขาวบน #FD6E88
