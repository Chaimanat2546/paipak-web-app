# papaipak — UX/UI Design Governance Kit

**Version:** 1.0 · **Status:** Approved project standard · **Approved on:** 2026-11-03 (Asia/Bangkok) · **Audience:** Product Owner, UX/UI Designer, AI Design Agent, Frontend Developer

## สถานะใน repository และข้อสรุปวันที่ 3 พฤศจิกายน 2026

นำเข้าจาก `paipak-design-governance-kit.zip` และปรับตามข้อสรุป 3 ข้อด้านล่างเมื่อ 3 พฤศจิกายน 2026 (Asia/Bangkok) ต่อมาเจ้าของโปรเจกต์อนุมัติชุด v1.0 ที่ปรับแล้วเป็นมาตรฐานกลางของโปรเจกต์ในแชตนี้:

> อนุมัติ Design Governance Kit v1.0 เป็นมาตรฐานกลางของโปรเจกต์ โดยแบบแต่ละ Task ยังต้องให้ฉันอนุมัติก่อนทำ Frontend

เจ้าของชี้แจงเพิ่มเติมในวันเดียวกันว่า “ก่อนทำรวมถึง ui design ด้วย” จึงต้องให้เจ้าของอนุมัติแผนและขอบเขตของ Task ก่อนเริ่มสร้างหรือแก้ UI Design ด้วย แล้วจึงตรวจรับแบบแต่ละเวอร์ชันก่อนทำ Frontend อีกขั้น

บันทึกการอนุมัติอยู่ใน [decision registry](../../decisions/registry.yaml) หัวข้อ `governance_approval` โดยมีขอบเขตเป็นหลักการ วิธีทำงาน เกณฑ์ตรวจรับ และ template ของชุดนี้ ทุกหน้าและ Component ใช้มาตรฐานร่วมกันตามหน้าที่ของเอกสารแต่ละไฟล์

| เรื่อง | ข้อสรุปที่เจ้าของเลือก | ผลต่อเอกสาร |
|---|---|---|
| Typography | ใช้ Mitr เป็นหลัก เสนอฟอนต์เสริมได้ แต่ต้องอนุมัติก่อนใช้ | ปรับ `02` และ DSD-001 |
| ลำดับงาน | เลือก Visual Direction ก่อน Wireframe | ใช้ G1 สำหรับ Direction และ G2 สำหรับ Wireframe; ปรับ roadmap และ dependency ของ UXD-002 |
| ตัวอย่าง Homepage | เก็บ `07` เป็นตัวอย่างประกอบ | ไม่ถือเป็นผลรีวิว Homepage เวอร์ชันปัจจุบัน |

ก่อนเริ่ม UI Design ให้เสนอแผนและขอบเขต Task เพื่อขออนุมัติที่ G0 ครอบคลุมการสร้างหรือแก้ Visual Direction, Wireframe, High-Fi, Design Tokens และ Component/States เมื่อได้แบบแล้ว แบบและเวอร์ชันของแต่ละ Task ยังต้องให้เจ้าของอนุมัติอย่างชัดเจนก่อนทำ Frontend ที่เกี่ยวข้อง การอนุมัติมาตรฐานหรือเลือก Task ID เพียงอย่างเดียวไม่เริ่มงานออกแบบ การอนุญาตเฉพาะ Task ที่มีอยู่แล้วยังใช้ได้ภายในขอบเขตเดิม ไม่ต้องขอซ้ำ เอกสาร `07` ยังคงเป็นตัวอย่างประกอบ

อ่าน [AGENTS.md](../../../AGENTS.md), [ข้อกำหนด UX/UI ปัจจุบัน](../approved-ux-ui-scope.md), [task-order](../../roadmap/task-order.md) และ Task Packet/manifest ร่วมด้วย ก่อนเริ่ม Design Task ให้อ่าน README นี้และเอกสาร `01` ถึง `05` แล้วใช้ `06` เสริม Task Packet เดิม ข้อเสนอและผลลัพธ์ของ Task ที่ยังไม่อนุมัติต้องระบุสถานะให้ชัด

`wireframe_guidelines_paipak.md` เป็นสำเนาคู่มือจาก ZIP เพื่อเก็บต้นทาง ฉบับใช้งานกลางคือ [wireframe-guidelines.md](../wireframe-guidelines.md) ซึ่งรวมการปรับลำดับงานครั้งนี้แล้ว แก้คู่มือกลางที่ฉบับใช้งาน ไม่แก้สำเนาต้นทางตามทุก revision

## จุดประสงค์

ชุดเอกสารนี้เป็น **มาตรฐานการตัดสินใจและตรวจรับงานออกแบบระยะยาว** ไม่ใช่คำสั่งให้ทุกหน้าใช้ Layout เดียวกัน เป้าหมายคือแก้ปัญหา “ออกแบบครบองค์ประกอบแต่แบน ไม่มีลำดับสายตา” โดยไม่บังคับให้เติม Gradient/Shadow ทุกส่วน

## อ่านและใช้ตามลำดับ

| ไฟล์ | ใช้เมื่อไร | ใครใช้ |
|---|---|---|
| `01-design-principles.md` | ก่อนเริ่มงานทุก Task | Product / Designer / Agent |
| `02-visual-foundation.md` | เลือกสไตล์และสร้าง Component | Designer / Agent / Frontend |
| `03-composition-guidelines.md` | จัดโครงหน้า/ลำดับข้อมูล | UX / Designer / Agent |
| `04-design-quality-standards.md` | ตรวจแบบก่อนอนุมัติ | Reviewer / Agent |
| `05-design-workflow.md` | แบ่งงาน ส่งมอบ และอนุมัติ | Product / Agent |
| `06-task-brief-template.md` | คัดลอกใช้กับงานออกแบบแต่ละหน้า | Product / Agent |
| `07-homepage-review-example.md` | ตัวอย่างวิธีใช้เกณฑ์; ไม่ใช่ผลรีวิวหน้าปัจจุบัน | Product / Agent |
| `wireframe_guidelines_paipak.md` | สำเนาต้นทาง; ใช้คู่มือกลางที่ลิงก์ไว้ด้านบนสำหรับงานจริง | UX / Agent |

## ลำดับความสำคัญเมื่อข้อกำหนดขัดกัน

1. ข้อกำหนดผลิตภัณฑ์ที่ผู้ใช้อนุมัติล่าสุด และข้อบังคับด้านการเข้าถึง/ความปลอดภัย
2. UX Requirements / User Flow และ Wireframe ที่อนุมัติของ Task นั้น
3. มาตรฐานกลาง Design Governance Kit v1.0 และ Design Tokens/Components ที่อนุมัติจริง
4. Task brief และสมมติฐานที่ยังไม่ได้อนุมัติ
5. ความชอบหรือแนวทางที่ AI เสนอเอง

ใช้ `01` ถึง `05` เป็นมาตรฐานกลางร่วมกับ Acceptance Criteria ของ Task การอนุมัติชุดนี้คง UX, business rules, palette และ selected layouts ที่ล็อกไว้ การเปลี่ยนข้อสรุปเหล่านั้นยังต้องเสนอและขออนุมัติแยกตาม change control

**ห้าม AI เปลี่ยน User Flow, Input behavior หรือ Business Logic ที่อนุมัติแล้วเพื่อความสวยงาม** หากพบข้อขัดแย้ง ให้บันทึกทางเลือกและขออนุมัติผ่านขั้น Review

## ข้อกำหนดผลิตภัณฑ์ที่ถือเป็นฐาน

- เว็บไซต์ marketplace สำหรับค้นหาและจองพูลวิลล่าในไทย
- หน้า Home แสดงรายการบ้านได้ทันที; ไม่บังคับเลือกวันหรือจำนวนคนก่อนสำรวจ
- Search inputs เป็น optional ตาม UX ที่อนุมัติ
- หมวด curated หลัก: แนะนำ, ใกล้ทะเล, สายปาร์ตี้, ราคาพิเศษ, Outing, Pet Friendly, Luxury
- Brand foundation: `#072D59` navy, `#FD6E88` pink, `#DBF2FC` light; **บทบาทการใช้งาน/สีรองยังเป็นข้อเสนอจนอนุมัติใน Visual Foundation**
- Typography: Mitr เป็นหลัก; ฟอนต์เสริมต้องเสนอพร้อมบทบาทและให้เจ้าของอนุมัติก่อนใช้
- Favorites ต้อง login; Booking Intent เก็บเฉพาะ flow ที่ต่อเนื่องและไม่กู้คืนหลัง reload/ปิดแท็บ/หมดอายุ; ใช้จำนวนผู้เข้าพักรวมและแยกสัตว์เลี้ยงตาม UXD-001 ที่อนุมัติแล้ว
- Design Execution มาก่อน Frontend Implementation; Product Owner เลือก Task และอนุมัติแต่ละ Gate ด้วยตนเอง

## วิธีเริ่มในแต่ละ Task

ใช้ Task ID และ Task Packet เดิมร่วมกับ `06-task-brief-template.md` → เสนอแผน scope/dependencies และ UX constraints → เจ้าของอนุมัติ G0 ก่อนเริ่ม UI Design → เสนอ Visual Directions เฉพาะส่วนที่ยังไม่ล็อก → เจ้าของอนุมัติ G1 Direction → ทำและอนุมัติ G2 Wireframe → G3 High-Fi/Components → G4 Final Visual Baseline จึงส่งต่อ Frontend ที่ผู้ใช้เลือก

DSD-001 รับผิดชอบ direction และ foundation; UXD-002 ต้องอ้างอิง direction version ที่เจ้าของอนุมัติก่อนเริ่ม wireframe revision ใหม่และก่อนตรวจรับขั้น G2 รายละเอียดการใช้กับ review-5 ที่มีอยู่แล้วอยู่ใน [task-order](../../roadmap/task-order.md) การมี draft เดิมไม่ใช่หลักฐานว่า G1 ผ่านแล้ว

## กฎการอัปเดตเอกสารกลาง

หาก Feedback ใช้ได้กับหลายหน้า ให้เสนอแก้ `01`–`04` พร้อมเหตุผลและผลกระทบ; หากเป็นปัญหาเฉพาะหน้า ให้บันทึกไว้ใน Task Review **อย่าแก้มาตรฐานกลางทุกครั้งที่ไม่ชอบหน้าจอหนึ่งหน้า**

## แหล่งอ้างอิงสำหรับตรวจสอบแนวปฏิบัติเพิ่มเติม

- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI ARIA Authoring Practices — Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [GOV.UK Design System — Text Input](https://design-system.service.gov.uk/components/text-input/)
- [Nielsen Norman Group](https://www.nngroup.com/)

แหล่งเหล่านี้ใช้ประกอบการตัดสินใจ ไม่ได้แปลว่าทุกคำแนะนำด้านสไตล์เป็นข้อกำหนดตามมาตรฐาน
