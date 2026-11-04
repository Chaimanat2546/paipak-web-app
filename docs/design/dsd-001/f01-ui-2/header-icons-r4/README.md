# Header-icons-r4 · ธง English และโลโก้ LINE

4 พฤศจิกายน 2026 · รอเจ้าของตรวจรับ

แก้ตามคำถามเจ้าของว่าเหตุใด English ไม่มีรูปและ LINE ใช้ไอคอนแชตแทนโลโก้จริง รอบนี้เปลี่ยนเฉพาะสองจุดจาก Header-reference-r3 ในบอร์ดใหม่ เก็บ r3 และ Main Home เดิมไว้

[ภาพหลังแก้](IfMTi.png) · [native layers](layer-snapshot.json) · [ผลตรวจ](verification.json)

- English: ธงสหราชอาณาจักรจาก [flag-icons](https://github.com/lipis/flag-icons/blob/main/flags/1x1/gb.svg), MIT license นำ path จาก SVG ต้นฉบับเข้า Pencil และ clip วงกลม 22×22px เท่าธงไทย มีชื่อ English กำกับ ธงเป็นเครื่องหมายภาพสำหรับภาษาตามตัวอย่างที่ศึกษา ไม่เปลี่ยน locale inventory หรือระบบแปลภาษา
- LINE OA: ใช้ PNG จาก [LINE ทางการ](https://www.line.me/en/logo), [ไฟล์ดาวน์โหลดต้นฉบับ](https://www.line.me/static/logo/top/LINE_Brand_icon.zip) ขนาดใน Desktop 32×32px บนพื้นที่ขาว 44×44px คงสี/สัดส่วนและรูปโลโก้เดิม แทนไอคอน message-circle สี navy ไม่ใช้วงกลมพื้นฟ้ารองโลโก้ LINE

สำเนาไฟล์ต้นทางและ license อยู่ใน [assets](../header-reference-r3/assets/) Native asset ที่ใช้งานคือ `images/paipak-line-official.png`; ธงเป็น native vector paths ใน snapshot

บอร์ด `IfMTi` ชื่อ **REVIEW · Header utilities-r4 · official LINE and English flag** อยู่ x=0,y=-3088 ใน `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` และอยู่รายการแรกของ layer tree

ตรวจภาพเต็ม 1472×674px หลังแก้แล้ว เห็นธง UK และโลโก้ LINE จริงครบ ไม่เบียดข้อความ ตรวจ native size และเทียบ source: Main Home-r7 กับ r3 เดิมตรงกันทั้งหมด การเปิดเมนู/เปลี่ยนภาษา/LINE/keyboard ยังเป็นข้อกำหนด static ไม่ได้เชื่อมจริง Mobile ไม่แก้ในรอบนี้ OPEN-001 ยังเปิด ไม่มี Frontend หรือ Task อื่น
