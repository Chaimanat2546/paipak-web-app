# 04 — Design Quality Standards & Review Rubric

**Status:** Approved project standard v1.0 · **Approved on:** 2026-11-03 (Asia/Bangkok) คะแนนหรือคำแนะนำจาก Agent ไม่แทนการอนุมัติแบบแต่ละ Task โดยเจ้าของ

**Purpose:** เกณฑ์ตรวจรับข้ามทุกหน้า; ใช้ร่วมกับ Acceptance Criteria เฉพาะ Task

## Blocking issues — ต้องแก้ก่อนอนุมัติ

- เส้นทางหลักถูกบังคับเพิ่มโดยไม่ตรงข้อกำหนด เช่น Home ต้องกรอกวันก่อนเห็นบ้าน
- Primary CTA/ข้อมูลตัดสินใจหาไม่เจอหรือสับสน
- Component behavior หรือ states สำคัญหายไป (เช่น Date Picker opened, Carousel controls)
- แสดงราคาหรือสถานะยืนยันแบบทำให้เข้าใจผิด; สร้างรีวิว/โปรโมชันสมมติเป็นข้อมูลจริง
- ภาพ/ข้อความคอนทราสต์ไม่เหมาะสม, keyboard focus ใช้งานไม่ได้, mobile overflow ขัดขวางงานหลัก
- ส่งแค่ Desktop โดยขอบเขตบังคับ Mobile หรือไม่ส่งคำอธิบาย decisions

## Rubric 0–3 ต่อหมวด (ใช้เป็นเครื่องมือ review ไม่ใช่การให้คะแนนความสวยเชิงวิทยาศาสตร์)

| Category | 0 = Fails | 1 = Weak | 2 = Acceptable | 3 = Strong |
|---|---|---|---|---|
| Task clarity | จุดเริ่มงานไม่พบ | ต้องคิดนาน | มองเห็นงานหลัก | มองชัดและไหลลื่น |
| Visual hierarchy | ทุกอย่างแข่งกัน | น้ำหนักคล้ายกัน | มี 1 focus หลัก | ชัดทั้ง primary/secondary |
| Information design | ข้อมูลตัดสินใจหาย | ครบแต่สแกนยาก | สแกนได้ | ช่วยเปรียบเทียบรวดเร็ว |
| Brand expression | template ทั่วไป | มีแค่สีแบรนด์ | มีบุคลิก | มีเอกลักษณ์โดยไม่ล้น |
| Component clarity | ไม่เห็น affordance | states ไม่พอ | controls/states ชัด | ใช้ซ้ำสอดคล้อง |
| Responsive | ใช้งานไม่ได้ | บีบ/ล้น | ใช้งานได้ | ปรับตาม intent |
| Inclusive design | อุปสรรคเด่นชัด | ข้อบกพร่องสำคัญ | ตรวจพื้นฐานแล้ว | มีหลักฐานทดสอบ |
| Visual rhythm | รก/แบนจนหลง | ซ้ำมาก | แบ่ง sections ดี | จังหวะช่วยอ่าน |

**Pass recommendation:** ไม่มี Blocking Issues, ทุกหมวด >=2, มี evidence และ human approval; คะแนนไม่แทนการตัดสินจากผู้ใช้จริง

## Review questions (ต้องตอบพร้อมหลักฐาน)

1. Primary task และ primary focal point คืออะไร? ชี้ตำแหน่งในแบบ
2. ลำดับการอ่าน title/price/metadata เป็นอย่างไร? เทียบ Card จริง 2–3 แบบ
3. Hero ช่วย discovery หรือกินพื้นที่จนบัง listings?
4. Section มีความต่างที่ช่วยนำทาง หรือเป็น card grid ซ้ำไปมา?
5. Selected, hover, focus-visible, loading, expanded, error states ครบตามขอบเขต?
6. มี case long content / missing content / mobile narrow / keyboard?
7. อะไรเป็น global component และอะไรเป็น page-specific art direction?
8. ข้อใดเป็น assumption ยังไม่ได้อนุมัติ?

## Evidence required

- ภาพเต็มหน้า Desktop + Mobile พร้อม viewport ที่ระบุ
- Component states board (เฉพาะที่เกี่ยวข้อง)
- Design Decisions Log (choice, alternative, rationale, trade-off)
- Checklist pass/fail พร้อมตำแหน่งของหลักฐาน
- Open issues / unknowns / exceptions

## Accessibility review targets

- ตรวจ WCAG 2.2 AA ตามเกณฑ์ที่เกี่ยวข้องกับหน้าและ interaction (การผ่านจริงต้องทดสอบ ไม่ใช่ดูภาพอย่างเดียว)
- Text contrast, text on images, non-text contrast, focus indicators, keyboard navigation, target size, labels/error instructions
- Motion/auto-advance controls, zoom/reflow, touch interactions, screen reader semantics ในขั้น prototype/implementation

## Feedback schema

`Finding ID | screen/component | observation | impact | severity (blocker/high/medium/low) | required outcome | evidence | owner | status`

Severity ระบุผลกระทบ ไม่ใช่ความชอบด้านสไตล์ล้วน ๆ; ถ้าเป็น subjective taste ให้เรียก `directional feedback` และเชื่อมกับหลักการ/ผู้ใช้เป้าหมาย
