# DSD-001 review-2 · Review evidence

3 พฤศจิกายน 2026 · บันทึกการตรวจภาพก่อนเลือก G1; ต่อมาเจ้าของอนุมัติ B / review-2 ตาม visual-direction.md แล้ว Findings และข้อจำกัดด้าน final UI ยังมีผล ไม่ใช่ผลทดสอบระบบ

## สิ่งที่ตรวจจริง

- เปิดดูผล render ของ Desktop และ Mobile ครบหกภาพจาก ImageGen เปรียบเทียบ hierarchy, composition, ภาพบ้าน, search, หมวด, cards และข้อความราคา
- Desktop ทั้งสามภาพมีหมวดเจ็ดรายการและการ์ดสี่คอลัมน์ Mobile เป็นการจัดใหม่หนึ่งคอลัมน์และแถบหมวดที่มีรายการต่อออกขอบ ไม่ใช่การย่อ Desktop
- A ใช้ฉากภาพต่อเนื่อง B ใช้ภาพหลักกับรายละเอียดซ้อนแบบวารสาร C ใช้หัวเรื่องกลางและ photo masks ที่อ้างอิงรูปสระ ทั้งสามรักษา search/category/listing section order
- แก้ A Desktop ราคาและ badge จากสีที่มี contrast ต่ำเป็น Navy ก่อนเลือกไฟล์ปัจจุบัน
- Nominal Navy/Pink contrast คำนวณได้ 5.077980501367648:1; White/Pink 2.705343217728925:1 ผลนี้ไม่ใช่การรับรองทุก pixel/state ของภาพ
- ต้นฉบับ review-2 เป็น raster images เท่านั้น ไม่มี native editable source ที่ยืนยันแล้ว ไม่ได้เรียกว่าภาพ font specimen ที่โหลด Mitr จริง

## Findings / ประเด็นที่ยังต้องทำ

| ID | Observation | Impact / required outcome | Status |
|---|---|---|---|
| F-01 | B Mobile ใช้ชมพูบนขาวกับ “ดูทั้งหมด” | ใช้ Navy หรือ treatment ที่ผ่าน contrast ในแบบละเอียด; ห้ามถือเป็น approved link token | open |
| F-02 | C ใช้ favorite icon สีชมพูบนขาว | ตรวจ non-text contrast และ selected/default affordance ใน component task; ไม่ใช้สีอย่างเดียว | open |
| F-03 | A Mobile มี magnifier สองตำแหน่งใน search entry | เหลือ action affordance เดียวในแบบละเอียด ไม่เปลี่ยน optional search behavior | open |
| F-04 | ภาพเป็น bitmap ที่ร้องขอ Mitr และ brand palette | ยืนยัน font family, actual token values, text/image contrast และ icon consistency ใน foundation ไม่อ้างว่าผ่านแล้ว | open |
| F-05 | Hero ขนาด/การ crop แตกต่างระหว่างแนวทาง | หลังเลือก direction ให้กำหนด crop safe area, discovery visibility และ narrow-width fallback ใน responsive spec | open |
| F-06 | ไม่มี rendered interactive states | Focus/keyboard/carousel และผล reflow จริงยังไม่ผ่านการทดสอบ; ส่งต่อในขอบเขต Task ที่เกี่ยวข้อง | not tested |

OPEN-001 ยังคงเปิด การเลือก Art Direction ไม่อนุมัติ CTA treatment หรือปิด findings เหล่านี้ ไม่ขอรับรอง final UI จากรอบนี้

## Governance rubric

ประเมินเฉพาะภาพศึกษา ไม่ใช้คะแนนแทนเจ้าของอนุมัติ:

| หมวด | A | B | C | ข้อจำกัด |
|---|---:|---:|---:|---|
| Task clarity | 2 | 2 | 2 | เห็น search และบ้าน; ยังไม่ใช่ usability test |
| Visual hierarchy | 2 | 3 | 2 | A ภาพนำ, B กลุ่มหัวเรื่อง/ภาพชัด, C ลูกเล่นต้องคุม |
| Information design | 2 | 2 | 2 | มีชื่อ ที่ตั้ง capacity และราคาเริ่มต้นตัวอย่าง |
| Brand expression | 3 | 2 | 3 | มีภาษาภาพที่ต่างกัน; font/color precision ยังไม่ยืนยัน |
| Component clarity | 2 | 2 | 2 | ค่าเฉพาะ affordance ที่เห็น; states ไม่ได้ตรวจ |
| Responsive | 2 | 2 | 2 | มีภาพ Mobile ที่จัดใหม่; runtime ยังไม่ตรวจ |
| Inclusive design | 1 | 1 | 1 | มี color evidence แต่มี findings และไม่มี interaction test |
| Visual rhythm | 3 | 3 | 3 | ฉากต่อเนื่อง / ภาพซ้อน / ภาษารูปสระต่างกัน |

ผล: มีหลักฐานให้พิจารณาและเลือกแนวคิด G1; ไม่ผ่านการรับรอง final visual/component accessibility หรือ frontend readiness

## Taste critique (ภาพนิ่ง; คะแนนเป็นความเห็นของผู้ตรวจ)

ROUND 2 — A
Seen in one second: ภาพวันพักและหัวเรื่องไทย
Idea (one sentence): ใช้ฉากบ้านและสระเป็นพื้นที่ต่อเนื่องที่พาผู้ใช้ลงมาค้นหาและเลือกบ้าน
Live thing: ยังไม่มี; search เป็นภาพศึกษา
Layout words by section: hero=panorama / search=overlap / category=flat strip / listings=dense grid
Scores: design 7.5 · usability 7 · creativity 7 · content 6 → overall 7.15
Caps applied: Static image ไม่มี live interaction; imagery/content เป็นตัวอย่าง จึงไม่อ้าง performance หรือ authenticity
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Mobile search มี magnifier สองตำแหน่ง (`direction-a-mobile.png`); ลดเหลือจุด action เดียว
2. Hero ขึ้นอยู่กับ crop ที่เว้นพื้นที่หัวเรื่อง (`direction-a-desktop.png`); ต้องกำหนด safe area และ fallback
3. Rendering ไม่พิสูจน์ Mitr/brand token precision (ทั้งคู่); ต้องมี measured foundation spec

ROUND 2 — B
Seen in one second: หัวเรื่องใหญ่กับภาพสถาปัตยกรรมซ้อน
Idea (one sentence): ใช้รายละเอียดของบ้านทำหน้าที่เหมือนภาพในวารสารท่องเที่ยว โดยยังให้ search และ listings เข้าถึงง่าย
Live thing: ยังไม่มี; search เป็นภาพศึกษา
Layout words by section: hero=editorial collage / search=overlap / category=inline strip / listings=dense grid
Scores: design 7.5 · usability 7 · creativity 7 · content 6 → overall 7.15
Caps applied: Static image; photographic inset ต้องมีแหล่งภาพที่สัมพันธ์กันจริงก่อนใช้กับ listing
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Mobile “ดูทั้งหมด” ใช้สีชมพูบนขาว (`direction-b-mobile.png`); ใช้ Navy ใน specification
2. ภาพ inset อาจทำให้เข้าใจว่าเป็นบ้านเดียวกัน (`direction-b-desktop.png`); ใช้เฉพาะภาพที่ตรวจแล้วหรือระบุเป็น mood imagery
3. Hero/collage ใช้พื้นที่บนมือถือ (`direction-b-mobile.png`); ตรวจ discovery visibility ที่ viewport จริงหลังเลือกแนว

ROUND 2 — C
Seen in one second: หัวเรื่องกลางและขอบภาพรูปสระ
Idea (one sentence): แปลงเส้นโค้งของสระเป็นวิธีเชื่อมรูปบ้าน หัวเรื่องและ search ให้จำได้
Live thing: ยังไม่มี; search เป็นภาพศึกษา
Layout words by section: hero=flowing photo masks / search=overlap / category=duotone strip / listings=dense grid
Scores: design 7.5 · usability 7 · creativity 7 · content 6 → overall 7.15
Caps applied: Static image; ความคิดยังใช้กับคู่แข่งได้ จึงไม่อ้างเอกลักษณ์เฉพาะ papaipak ที่พิสูจน์แล้ว
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. Favorite icon สีชมพูบนขาว (Desktop/Mobile); ตรวจ contrast และใช้ Navy/default ที่ชัดเจน
2. เส้น path และ masks มีต้นทุนในการจัดวางทุก breakpoint (ทั้งคู่); กำหนด reduced detail/narrow fallback
3. Duotone icons ยังเป็น raster study (ทั้งคู่); ใช้ icon family เดียวใน component specification

## ไม่ได้ทดสอบ

ไม่มี browser inspector, functional prototype, Tablet, 320px, 200% zoom/reflow, screen reader, keyboard, focus order, motion/reduced-motion, actual carousel, backend, payment หรือ Workers runtime ไม่รัน application build/runtime suite เพราะไม่มี application changes

การควบคุมหน้าจอถูกหยุดด้วย Esc จึงไม่ทำ Computer Use ต่อ ชุดนี้ส่งเป็นภาพศึกษาและเอกสาร ไม่มีการบันทึก review-2 ทับไฟล์ UXD-002 หรือเปลี่ยนสถานะอนุมัติของงานนั้น
