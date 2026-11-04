# QA · F01-ui-1

ตรวจเมื่อ 3 พฤศจิกายน 2026 (Asia/Bangkok) สำหรับ static Pencil UI เท่านั้น

## ฐานอ้างอิง

อ่าน F-01 Desktop (`m7LoAf`) และ Mobile (`J3Jbgz`) รวมโครง WF-01/02/03, Header/Footer, Gallery และ Mobile filter ใน `papaipak-wireframe.pen` ผ่าน MCP ร่วมกับ interaction-specification, component inventory และ flow contract ไม่ส่งคำสั่ง mutation ไปไฟล์ Wireframe

## ตรวจภาพและแก้ระหว่างทำ

- Home ใช้ cinematic scene ของ A เดิม เพิ่ม Header/Navigation/Footer ให้ตรง inventory ของ Wireframe และเพิ่ม controls ของ carousel
- Results ใช้ Desktop sidebar กับ grid สามคอลัมน์เมื่อหักพื้นที่ตัวกรอง; Home ยังคงสี่คอลัมน์ Mobile คง search fields เรียงลงตาม Wireframe และการ์ดหนึ่งคอลัมน์
- Detail ใช้ gallery ใหญ่กับ thumbnails, information และ booking panel; มี Mobile full-page และ viewport 390×844 สำหรับดูพื้นที่ sticky bar แยก
- Autocomplete selected state ปรับไม่ให้มีขั้นยืนยันสถานที่เพิ่มจาก UX เดิม ปุ่มค้นหาเป็น presentation หลังกลับ origin พร้อมค่าที่เลือก
- แก้ความสอดคล้องของ count/pagination: main results มี 24 records, หน้าละ 8, page 2 เป็น 09–16; ตัวอย่าง applied เหลือ 6 และมี page 1 หน้าเดียว Next disabled
- ตัดปุ่ม sort ที่ยังไม่มี contract ใน Wireframe ออกจาก Default/Applied/Page 2 ทั้งสองขนาด ไม่เพิ่มพฤติกรรมจัดอันดับใหม่
- ปฏิทินตัวอย่าง ธันวาคม 2569 ใช้ offset วันจาก Date.UTC; แสดงช่วง 12–14 ธันวาคม 2026 และกรณีขาดวันออกแยก
- เปิด screenshot ของหน้าหลักและ supporting groups ทั้ง autocomplete, date/guests, filters/menu, feedback, validation, carousel, gallery, applied results, back context และ index เพื่อตรวจ composition และข้อความ ไม่มีการรับรอง interaction จากภาพ
- คำเตือน sizing สาม IDs ใน call ที่คัดลอก Home ไม่พบ nodes เหล่านั้นเมื่ออ่านซ้ำ จึงไม่แก้เนื้อหาอื่นจาก IDs ที่ไม่มีอยู่ ใช้ภาพและข้อมูล node ปัจจุบันตรวจแทน

## ตรวจไฟล์และข้อมูล

- 28 F01 review groups export PNG สำเร็จครบ; root placeholder=false ทุกกลุ่ม
- 3,130 native nodes; ไม่มี node dimension เป็นศูนย์ในการอ่าน computed bounds ที่ตรวจ ข้อมูล bounds ของบาง nested copies มี offset ไม่สม่ำเสมอ จึงไม่อ้างว่าผ่าน clipping ทุก node จาก diagnostics อย่างเดียว
- Text nodes ใน F01 ใช้ `$font.primary` ทั้งหมด และตัวแปรมีค่า Mitr
- ภาพที่อ้างใน snapshot มีไฟล์ local ครบพร้อม SHA-256; snapshot สำรองทั้ง 33 roots รวมประวัติเดิม
- ตรวจ Home 4 cards ต่อขนาด, default results 8 ต่อขนาด, applied results 6 ต่อขนาด, page 2 เป็นบ้าน 09–16 ทั้งคู่
- ข้อมูล A/B roots ก่อนรอบนี้ทั้งห้าเท่ากับ backup เดิมทุก field; review-2 ทั้งหกภาพตรง SHA-256 เดิม
- ตรวจโครงสร้าง planning links ด้วย validate-handoff.py และ whitespace ด้วย git diff --check หลังอัปเดตเอกสาร

## ข้อจำกัดก่อนตรวจรับ

- เป็น native UI layouts และ visual states ไม่มี click navigation, URL state, filtering, search, carousel/swipe, focus/keyboard, screen-reader behavior หรือ backend จริง
- ไม่ได้รัน browser inspector ของ Taste เพราะไม่มี DOM/page implementation ในรอบนี้ ไม่ทดสอบ Tablet, 320px, zoom/reflow, motion หรือ runtime และไม่ให้คะแนน production readiness จากภาพ
- Gallery ใช้ crops ของภาพ AI เดิมเพื่อศึกษา ไม่ใช่ asset library สำหรับ inventory จริง
- OPEN-001 ยังเปิด: CTA Pink/White ใช้ตาม visual choice ของเจ้าของ nominal ratio เดิม 2.705343:1 ไม่รับรอง AA
- First-photo Previous disabled ยังเป็น designer proposal D-01; free-query/ranking ยัง D-03 ไม่ตัดสินเอง จำนวน/ราคา/pet flags ใน fixtures ไม่ใช่นโยบายจริง
- Supporting search/feedback states เป็นขอบเขต F-01 ไม่รับรอง Auth, Checkout หรือ flow อื่นครบแล้ว
- ยังรอเจ้าของอนุมัติ **F01-ui-1** แยกจาก G1 A และ final foundation approval ไม่มี Frontend authorization จากชุดนี้
