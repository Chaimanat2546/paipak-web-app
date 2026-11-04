# 01 — Design Principles

**Applies to:** ทุกหน้า ทุก Component ทุก Design Task · **Status:** Approved project standard v1.0 · **Approved on:** 2026-11-03 (Asia/Bangkok)

## North Star

**“ผู้ใช้พบพูลวิลล่าที่ตรงใจได้เร็ว เข้าใจตัวเลือกได้ง่าย และมั่นใจพอจะเดินหน้าจอง”**

## หลักการที่ใช้ตัดสินใจ (เรียงตามความสำคัญ)

### P1 — Discovery before decoration

หน้า Home ต้องมีบ้านพักให้ดูได้โดยไม่กรอก Search; รูป/ราคา/ข้อมูลตัดสินใจเข้าถึงได้รวดเร็ว ตกแต่งได้ตราบที่ไม่บังงานหลัก

**Do:** ใช้ภาพจริงและข้อมูลที่ช่วยเปรียบเทียบ · **Don't:** Hero สูงล้นหรือเพิ่ม section โฆษณาก่อนรายการบ้านโดยไร้เหตุผล

### P2 — Clear hierarchy, not equal-weight UI

แต่ละหน้าต้องประกาศ **Primary task**, **Primary visual focal point**, และ **Supporting content**; ใช้ scale, typography, position, whitespace, contrast แทนการทำให้ทุกอย่างเด่น

**ทดสอบ:** มองภาพแบบย่อ/หรี่ตา ยังเห็นจุดเริ่มงานหลักและข้อมูลสำคัญหรือไม่

### P3 — Friendly with credible premium character

อารมณ์ vacation สดใส เป็นมิตร และน่าเชื่อถือ ไม่เป็นระบบ Admin/Dashboard และไม่เป็น Landing Page ที่ใส่ลูกเล่นเต็มจอโดยไม่มีจุดหมาย

**Do:** เลือกสีเน้นและภาพสื่อบรรยากาศอย่างตั้งใจ · **Don't:** ใช้ glassmorphism/gradient/emoji/blob ตกแต่งทุกบล็อก

### P4 — Make real choices easy

องค์ประกอบช่วยตัดสินใจ: รูปบ้าน ชื่อ ที่ตั้ง ความจุ ราคาเริ่มต้น/เงื่อนไขราคา และสถานะที่ได้รับการยืนยัน; ความน่าเชื่อถือสำคัญกว่าตัวเลขสมมติ

### P5 — Behavior before beauty

ถ้า Input เป็น counter, date-range picker หรือ carousel ต้องสื่อ interaction อย่างถูกต้องใน Wireframe/State; Visual Design ไม่ใช่ข้ออ้างเปลี่ยน affordance หรือ behavior โดยไม่มี approval

### P6 — Expressive yet controlled

แต่ละหน้าควรมีจังหวะเนื้อหา (visual rhythm) ไม่จำเป็นต้องเปลี่ยน Background ทุก section; ใช้ decorative treatment เฉพาะเมื่อเสริมความหมายและความเด่น

### P7 — Responsive by intent

Mobile ไม่ใช่ Desktop ย่อส่วน; ยืนยันลำดับความสำคัญ, tap targets, overflow, image cropping, sticky behavior เป็นราย breakpoint

### P8 — Accessibility and performance are design quality

คอนทราสต์, keyboard focus, การอ่านข้อความบนภาพ, reduced motion, ขนาดภาพและความเร็วโหลด เป็นส่วนของการออกแบบ ไม่ใช่งานแก้หลัง frontend

## Design anti-patterns ที่ต้องท้าทาย

- กล่องสีขาวเรียงต่อกันทุก section โดยไม่มี visual rhythm
- ทุก card text weight เท่ากัน; ราคาไม่ต่างจาก metadata
- เพิ่ม shadow/gradient เพื่อแก้ความเรียบโดยไม่แก้ hierarchy
- ทุก section มี accent เท่ากันจนไม่มี focal point
- Navbar/Hero แย่งพื้นที่ค้นหาบ้านมากเกินไป
- ไม่ออกแบบ empty/loading/error/hover/focus/expanded state
- คัดลอก Mockup สีสันจัดมาโดยไม่ได้ตรวจ use case จริง

## Decision checklist ก่อนเลือกแบบ

1. ผู้ใช้หน้านี้พยายามทำอะไร?
2. มองภายในไม่กี่วินาที จุดแรกที่ควรเห็นคืออะไร?
3. ข้อมูลใดทำให้ตัดสินใจต่อได้?
4. อะไรควรสงบลงหรือย้ายลงไป?
5. รูปแบบนี้ยังใช้ได้บนมือถือ/คีย์บอร์ด/ภาพจริงที่หลากหลายหรือไม่?
6. ถ้าเอา decoration ออก UI ยังชัดไหม? ถ้าไม่ ให้แก้โครงก่อน

## การยกเว้น

หากมีเหตุผลให้ละเมิดหลักการข้อใด ให้เขียน `Exception / Reason / Impact / Approver` ใน Design Decision Log
