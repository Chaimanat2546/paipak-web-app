# Results review-1 · papaipak.com

ตรวจ 4 พฤศจิกายน 2026 ตามคำสั่ง “ตรวจหน้าต่อไป” ภายใน DSD-001 / F-01 page-by-page review ต่อจาก Home ใช้แบบ F01-ui-3 ปัจจุบันใน Pencil ไม่แก้ UI ในรอบตรวจนี้ ไม่ถือว่า Home ผ่านการตรวจรับทั้งหน้า

[Desktop 1440×1763](osaIa.png) · [Mobile 390×3860](L8ev6.png) · [Desktop จอแรก 1440×900](desktop-fold.png) · [Mobile จอแรก 390×844](mobile-fold.png) · [เทียบการ์ดกับ Home](cards-comparison.png)

## Findings

| ID | จุดตรวจ | สิ่งที่พบและผลต่อผู้ใช้ | ระดับ | ผลลัพธ์ที่เสนอ |
|---|---|---|---|---|
| RSL-01 | การ์ด Desktop/Mobile `vEMvJ`, `SihTH` | ยังใช้หัวใจและลูกศรวงขาว 44px บนทุกรูป ต่างจาก Home รุ่นปัจจุบันที่ลดการแย่งสายตาจากภาพบ้าน ข้อมูลใต้รูปยังใช้การจัดกลุ่มรุ่นก่อน | medium / directional feedback | ปรับการ์ด Results ให้เข้าชุดกับ Home ที่กำลังตรวจ โดยคง favorite ที่ต้อง login และ carousel; Desktop เสนอ controls เฉพาะ hover/focus ส่วน Mobile ต้องสื่อ swipe/เลื่อนภาพโดยไม่พึ่ง hover |
| RSL-02 | Mobile `L8ev6` | Header 98px และส่วนค้นหา/คำแนะนำ/เครื่องมือทำให้รูปบ้านแรกเริ่มที่ y=761px ในจอ 390×844 เห็นเพียง 83px ของรูป และยังไม่เห็นชื่อ/ราคาในจอแรก | high / composition | ทบทวนความสูงส่วนค้นหาและระยะก่อนรายการ ให้เข้าถึงบ้านแรกได้เร็วขึ้น โดยคงสถานที่/วันที่/จำนวนคนและ pets, optional browsing และเส้นทางแก้เงื่อนไขเดิม การเปลี่ยน presentation ต้องแสดงให้เจ้าของตรวจอีกครั้ง |
| RSL-03 | Pagination `FDL8h`, `WzNa4` | ทั้งสองแบบแสดงผลค้นหา 24 หลังและการ์ด 8 ใบ แต่ Desktop แสดงหน้า 1/2/3 ส่วน Mobile มีเพียง 1/2 ใน native source | high / state consistency | ทำ pagination ของข้อมูลตัวอย่างชุดเดียวกันให้สอดคล้องกัน และตรวจ supporting page-2 states ก่อนรับรุ่นแก้ นี่เป็นข้อผิดพลาดความสอดคล้องของแบบ ไม่ใช่การกำหนด page-size ของ backend |

การจัด Desktop 3 คอลัมน์คู่ sidebar ไม่ถูกตัดสินว่าเป็นข้อผิดพลาดเพียงเพราะ Home มี 4 ใบ พื้นที่รายการจริงกว้าง 1016px แยกจาก sidebar และต้องประเมินความกว้างการ์ดกับข้อมูลก่อนเปลี่ยนจำนวนคอลัมน์

## Critique ตาม Taste Skill

ROUND 1

Seen in one second: Desktop เห็นฟอร์มค้นหาและชุดรูปบ้าน; Mobile เห็นฟอร์มก่อนรายการบ้าน

Idea (one sentence): ให้ผู้ใช้ปรับเงื่อนไขและเปรียบเทียบบ้านที่ตรงใจได้เร็ว โดยรูปบ้านและราคาเป็นข้อมูลนำการตัดสินใจ

Live thing: static Pencil; ค้นหา ตัวกรอง carousel favorite และ pagination ยังไม่เป็น prototype ที่ทำงานจริง

Layout words by section: header=plain navigation / search=form / suggestions=chips / listings=sidebar+grid หรือ mobile list / footer=plain close

Scores: design 6.0 · usability 5.5 · creativity 5.5 · content 5.0 → overall 5.7

Caps applied: เป็น subjective review จากภาพ static; ภาพบ้าน/ข้อมูลเป็น AI study/fixtures และ OPEN-001 ยังเปิด คะแนนไม่ใช่ usability test หรือการรับรอง accessibility

Top three problems (most visible first), each with the screenshot it shows in and the fix:

1. [cards-comparison.png](cards-comparison.png): การ์ด Results ยังมี controls เด่นและจัดกลุ่มข้อมูลต่างจาก Home ปรับให้ใช้ visual language ร่วมกันโดยรักษาการเข้าถึง carousel/favorite
2. [mobile-fold.png](mobile-fold.png): ส่วนบนผลักรูปบ้านแรกลงไป y=761 ลดความสูงก่อนรายการ โดยต้องรักษา optional inputs และการแก้เงื่อนไข
3. [Desktop pagination](FDL8h.png) กับ [Mobile pagination](WzNa4.png): จำนวนปุ่มหน้าไม่ตรงกัน แก้ state consistency ก่อนตรวจรับรุ่นหน้า Results

## Evidence และสถานะ

อ่าน native roots `osaIa`/`L8ev6`, การ์ด `vEMvJ`/`SihTH` และ pagination แล้ว export สดผ่าน Pencil MCP ภาพ fold เป็น crop จากภาพเต็ม และ comparison เป็นการวาง native card exports คู่กันบนพื้นขาว ไม่มีการสร้างแบบใหม่เพื่ออ้างว่าเป็นของเดิม

ชื่อ papaipak และ Header/icon rollout แสดงครบในภาพที่ตรวจ Guest ยังเห็นทางเข้าสู่การค้นหาโดยไม่ login และวันที่/ผู้เข้าพักยังเป็น optional ไม่เสนอเปลี่ยน business rules ไม่มีการแก้ UXD-002, Frontend หรือ backend รอบนี้

OPEN-001 ข้อความขาวบนชมพูยังเปิดตามข้อสรุปเดิม ไม่เปิดหารือสีแบรนด์ใหม่ คะแนนภาพอย่างเดียวไม่ยืนยัน keyboard, touch/swipe, focus, URL state หรือการทำงานของ pagination ยังไม่อนุมัติ Results หรือ F01-ui-3 ทั้งชุด

ข้อเสนอเริ่มหารือ: RSL-01 การ์ดบ้าน ให้เจ้าของเทียบกับ Home ก่อนปรับ ตามด้วยส่วนค้นหาบนมือถือและความสอดคล้องของเลขหน้า
