# Results-r2 · papaipak.com

4 พฤศจิกายน 2026 · DSD-001 / F-01 · native static UI · รอเจ้าของตรวจรับ

เจ้าของสั่ง “จัดการ” หลัง Results-review-1 เสนอแก้การ์ดบ้าน ส่วนค้นหามือถือ และ pagination จึงปรับครบสามประเด็นใน Results ปกติ ผลกรองแล้ว และหน้าที่ 2 ทั้ง Desktop/Mobile รวม 6 หน้ากับการ์ด 44 ใบ ใช้ Home-r6/r7 ปัจจุบันเป็น visual reference ภายใน Direction A ที่เลือกไว้

[ก่อน–หลัง Mobile](mobile-before-after.png) · [Desktop จอแรก](desktop-fold.png) · [Mobile จอแรก](mobile-fold.png) · [สถานะ controls](ok6Vg.png) · [ผลตรวจ](verification.json)

## สิ่งที่ปรับ

- การ์ดใช้ภาพ 210px และข้อมูล 152px รวม 362px ตาม Home แยกชื่อ ทำเล ความจุ/ห้องนอน และราคา ลดน้ำหนักหัวใจเป็นเส้นขาวบนพื้นที่กดโปร่งใส 44px
- Desktop ซ่อนลูกศรในสถานะปกติ แสดงหน้าปุ่ม 32px บนพื้นที่กด 44px เมื่อ hover/focus; มีภาพ default/hover/keyboard focus ให้ตรวจ Mobile ใช้ลูกศรเส้นเล็กที่เห็นตลอดและข้อกำหนด swipe จึงไม่ต้องพึ่ง hover
- Mobile จัดช่องค้นหาเป็นสองแถว: สถานที่กับปุ่มค้นหา จากนั้นวันเข้าพักกับผู้เข้าพัก คงข้อมูลและ entry points เดิม ปุ่มค้นหาเป็น icon action ขนาด 52px ซึ่งต้องมี accessible label “ค้นหาที่พัก” ในขั้น implementation
- ลดความสูง search panel จาก 314px เป็น 136px และย่อช่องว่างก่อนรายการ คง Suggested Search Chips ทั้งสามรายการ ตัดเฉพาะประโยคแนะนำบน Mobile รูปบ้านแรกของหน้า Results ปกติ/หน้า 2 เริ่มที่ y=480 แทน 761px เห็นเร็วขึ้น 281px ในจอ 390×844 พร้อมข้อมูลถึงราคา
- รายการตัวอย่าง 24 หลังมีเลข 1/2/3 ทั้งสองขนาด และหน้าที่ 2 เลือกเลข 2 ตรงกัน ผลกรองตัวอย่าง 6 หลังคงหน้าเดียวและ arrows ปิดใช้งานตามเดิม ไม่กำหนด page-size ให้ backend จาก fixtures

Desktop คง sidebar กับ grid 3 คอลัมน์ในพื้นที่รายการ 1016px การ์ดกว้าง 322.67px; Mobile กว้าง 342px ไม่เปลี่ยน UX หรือเลือก layout ใหม่

## ภาพปัจจุบัน

| หน้าหรือสถานะ | Desktop | Mobile |
|---|---|---|
| Results ปกติ | [osaIa](screens/osaIa.png) | [L8ev6](screens/L8ev6.png) |
| Apply filters แล้ว | [NmzZ4](screens/NmzZ4.png) | [YQRxl](screens/YQRxl.png) |
| Results หน้า 2 | [HpR7z](screens/HpR7z.png) | [P62IV](screens/P62IV.png) |

Native source: `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` ใช้ page IDs เดิมทั้งหก บอร์ด `ok6Vg` **REVIEW · Results-r2 · Desktop default hover focus and Mobile controls** อยู่ x=4200,y=-820 และอยู่ต้น layer tree

[ก่อนปรับ](before-snapshot.json) และ [หลังปรับ](after-snapshot.json) เก็บครบหกหน้า รวม Home สำหรับเทียบ regression; หลังปรับมี state board เพิ่มด้วย เป็น revision snapshot ที่ใช้ประกอบกับ [full base snapshot ของ F01-ui-3](../editable-snapshot.json) ไม่อ้างว่า revision snapshot นี้แทน canvas ทั้งหมด

## ผลตรวจ

| ประเด็น | หลักฐาน/ผล |
|---|---|
| RSL-01 การ์ดไม่เข้าชุดกับ Home | ปรับครบ 44 ใบ; ตรวจภาพ default และ state board สี่สถานะแล้ว |
| RSL-02 Mobile ก่อนถึงรายการสูง | search 136px; บ้านแรก y=480px ตาม native bounds และภาพ crop 390×844 |
| RSL-03 เลขหน้าไม่ตรงกัน | ตรวจปุ่มและ selected state ของทั้งหกหน้า; 24 หลัง 3 หน้า / 6 หลัง 1 หน้า ตรง Desktop/Mobile |
| ข้อมูลและภาพบ้าน | ชื่อ/ทำเล/คน/ห้องนอน/ราคา/รูปตรงก่อนปรับทั้ง 44 ใบ |
| ส่วนที่ต้องรักษา | Header/Footer ทั้งหกหน้า และ Main Home-r7 ตรง snapshot ก่อนปรับทุก field |
| ภาพส่งตรวจ | ดู Desktop/Mobile ปกติ, Mobile กรองแล้ว, Desktop หน้า 2, ภาพ fold และ state board; supporting state ข้อมูล/selected pagination ตรวจจาก native snapshot |

บอร์ดเป็น native editable frames/text/icons; ภาพบ้านยังเป็น AI study และข้อมูลยังเป็น fixtures ไม่มีการเปลี่ยน branding, Mitr, guest browsing, login-only Favorites, Apply Filters หรือการเก็บ search context

ข้อจำกัด: ภาพ hover/focus/swipe เป็น static specification ยังไม่ใช่ผลทดสอบปุ่ม keyboard/touch, URL state หรือระบบจริง OPEN-001 ข้อความขาวบนชมพูยังเปิด จึงไม่อ้างว่าผ่าน AA หรือปิด acceptance ทุกข้อ รุ่น Results-r2 และ F01-ui-3 ยังต้องให้เจ้าของตรวจรับก่อน Frontend แยกอีกขั้น ไม่มี Task อื่นหรือ deploy

## Critique หลังแก้

ROUND 2

Seen in one second: Mobile เห็นชุดค้นหาแบบกระชับและบ้านแรกครบข้อมูลในจอเดียว; Desktop เห็นรูปบ้านสามใบโดยวงปุ่มไม่แย่งภาพ

Idea (one sentence): ใช้ภาพบ้านนำการเปรียบเทียบ โดยเงื่อนไขค้นหาและราคาอ่านได้เร็วใน visual language เดียวกับ Home

Live thing: ยังเป็น static Pencil; มีสถานะ hover/focus และ Mobile quiet arrows สำหรับกำหนดพฤติกรรมภายหลัง

Layout words by section: header=plain navigation / search=compact two-row Mobile / suggestions=chips / listings=sidebar+grid หรือ single-column cards / footer=plain close

Scores: design 6.5 · usability 6.5 · creativity 5.5 · content 5.0 → overall 6.2

Caps applied: subjective static review; fixtures/AI images และ OPEN-001 ยังเปิด ไม่ใช้คะแนนแทน usability/accessibility/runtime acceptance

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. [Mobile controls](ok6Vg.png): ลูกศร/หัวใจเส้นขาวต้องตรวจ contrast บนภาพจริงหลากหลายและทดสอบ touch/focus ในขั้นที่ได้รับอนุญาต ภาพตัวอย่างนี้ไม่รับรองทุกภาพ
2. [Applied Mobile](screens/YQRxl.png): applied chips เดิมยังเพิ่มความสูงก่อนรายการ คงความหมายและข้อกำหนดการล้างรายเงื่อนไขไว้สำหรับเจ้าของตรวจ ไม่ลดข้อมูลที่เลือกเอง
3. [Desktop จอแรก](desktop-fold.png): OPEN-001 ของ pink/white CTA ยังเป็นข้อจำกัดเดิมที่ต้องตัดสินใจแยก ไม่เปลี่ยนสีเองในรอบนี้

สามประเด็นจาก review-1 ถูกแก้ในแบบและมีหลักฐานตรวจข้างต้น รุ่นนี้รอ human review ไม่อนุมัติ Home, Results หรือ DSD-001 ทั้ง Task ด้วยตนเอง
