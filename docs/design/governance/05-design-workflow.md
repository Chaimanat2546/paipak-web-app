# 05 — Design Execution Workflow & Approval Gates

**Mode:** Task-Based AI Handoff with Manual Execution

**Status:** Approved project standard v1.0 · **Approved on:** 2026-11-03 (Asia/Bangkok) เจ้าของอนุมัติกติกากลางพร้อมลำดับ Visual Direction ก่อน Wireframe ส่วน direction และแบบแต่ละ Task/เวอร์ชันยังต้องให้เจ้าของอนุมัติแยกก่อนทำ Frontend ที่เกี่ยวข้อง

**ข้อชี้แจงการเริ่มงาน:** เจ้าของยืนยันเพิ่มเติมเมื่อ 3 พฤศจิกายน 2026 ว่าต้องอนุมัติก่อนทำ UI Design ด้วย ให้เสนอแผนและขอบเขต Task แล้วรออนุมัติ G0 ก่อนสร้างหรือแก้ direction studies, Wireframe, High-Fi, Design Tokens และ Component/States การอนุมัติชุด governance หรือเลือก Task ID ไม่ถือเป็นอนุญาตเริ่มออกแบบ ผลงานที่เสร็จแล้วยังต้องอนุมัติแบบ/version ก่อนทำ Frontend

## Roles

- **Product Owner (Human):** เลือก Task, อนุมัติ scope, UX decisions, Visual Direction, Final Baseline
- **AI Design Agent:** วิเคราะห์/เสนอ/ออกแบบ/ทดสอบตามที่ทำได้/บันทึก decisions; **ไม่มีสิทธิ์ self-approve**
- **Frontend Agent/Developer:** รับเฉพาะ Approved Visual Baseline และ Contract ที่ชัด; แจ้งข้อขัดแย้ง ไม่เปลี่ยน UX เอง

## State machine

`BACKLOG → BRIEFED → SCOPE_APPROVED (G0) → UX_READY → DIRECTION_REVIEW → WIREFRAME_REVIEW (ถ้าจำเป็น) → HIGH_FI_REVIEW → APPROVED → FRONTEND_READY`

หาก fail ที่ gate ใด → `REVISION_REQUIRED` → กลับ gate เดิม ไม่ข้ามไป implement โดยอัตโนมัติ

`UX_READY` หมายถึงมี requirements/IA/flow และ constraints พร้อมพิจารณาทิศทาง ไม่ได้หมายถึง Wireframe ผ่านแล้ว ลำดับคือ G0 Scope → G1 Visual Direction → G2 UX/Wireframe → G3 High-Fi/Components → G4 Final Visual Baseline

## Gates

### G0 — Scope & Dependency Approved

**Input:** Task Brief, แผนงาน, UX requirements, dependencies และหลักฐานอนุมัติ output ที่ต้องใช้
**Output:** แผนและขอบเขตที่เจ้าของอนุมัติ พร้อม Task ID, plan/version, วัตถุประสงค์, boundaries, non-goals, deliverables และ acceptance targets
**Approve when:** เจ้าของยืนยันให้เริ่ม UI Design ตามแผนและขอบเขตนั้นอย่างชัดเจน ไม่มีการแอบเพิ่มฟีเจอร์/เปลี่ยน business logic

ก่อน G0 ให้อ่านเอกสาร วิเคราะห์ และหารือเพื่อจัดทำ Brief/แผนได้ แต่ยังไม่สร้างหรือแก้ชิ้นงานออกแบบ หลัง G0 ทำได้เฉพาะขอบเขตที่อนุมัติและยังต้องผ่าน G1–G4 ตาม Task หากมีการอนุญาตเฉพาะ Task ไว้แล้ว ให้ใช้อ้างอิงภายในขอบเขตเดิมโดยไม่ขออนุมัติซ้ำ การชี้แจงนี้ไม่เพิกถอนการอนุญาตเดิมหรือเริ่ม Task ถัดไป

### G1 — Visual Direction Approved

**Input:** ≥2 directions ถ้ายังไม่ล็อกทิศทาง, comparisons/trade-offs, visual rationale
**Output:** approved direction; ไม่ใช่แค่ palette
**Approve when:** เจ้าของเลือก direction/version ชัดเจน; hierarchy และบุคลิกสัมพันธ์กับงานจริง อยู่ภายใน palette, Mitr เป็นหลัก, selected layouts และ UX/business rules ที่อนุมัติแล้ว

### G2 — UX / Wireframe Approved

**Input:** Approved G1 direction/version, Flow, sitemap/page outline, low-fi/annotations, states
**Output:** Structure/interaction baseline
**Approve when:** use cases ครบ, optional fields ถูกต้อง, navigation/states ชัด และเจ้าของอนุมัติ Wireframe version นั้น

Wireframe ยังคงเป็น Low-Fi; direction กำหนดบุคลิกและลำดับสายตา ไม่บังคับให้เติมสี เงา หรือ visual effects ใน Low-Fi

### G3 — High-Fidelity & Component Review

**Input:** Desktop/Mobile, component states, real-content edge cases
**Output:** revised screens + review report
**Approve when:** ผ่าน `04-design-quality-standards.md` และ Task ACs ไม่มี blocker

### G4 — Final Visual Baseline / Handoff

**Input:** Final screens, tokens/components, interaction spec, decisions, known gaps
**Output:** versioned approved package for frontend
**Approve when:** Product Owner ยืนยันชัด; หมายเหตุทุก exception ถูกบันทึก

## Mandatory AI agent response format for each gate

1. **What changed** (สิ่งที่แก้จากรอบก่อน)
2. **Why** (เหตุผลเชื่อมหลักการและเป้าหมายผู้ใช้)
3. **Artifacts** (ชื่อหน้าจอ/variants/states)
4. **Evidence** (ชี้จุดในแบบ)
5. **Trade-offs**
6. **Open questions / unresolved assumptions**
7. **Pass/fail vs Acceptance Criteria**
8. **Requested human decision** (อนุมัติ/ขอแก้/เลือกแนวทาง)

## Change control หลังอนุมัติ

- เปลี่ยน token global หรือ component shared → impact review ก่อน
- เปลี่ยน layout เล็กน้อยแต่ไม่เปลี่ยน behavior → แจ้งและตรวจ regression
- เปลี่ยน flow, field validation, checkout logic, pricing representation → ขอ Product Owner approve ใหม่
- เก็บ version/date/owner/decision summary ให้ย้อนตรวจได้

## Anti-shortcuts

- ห้ามส่ง CSS ที่ implement เสร็จแทน design evidence
- ห้ามตอบว่า “done” โดยไม่มี mobile/states/evidence ตามขอบเขต
- ห้ามนำ Home direction ไปบังคับทุกหน้า (โดยเฉพาะ Checkout)
- ห้ามใช้ความชอบส่วนตัวของ Agent เป็นเหตุผลหลักโดยไม่เปรียบเทียบทางเลือก

## Review cadence

ตรวจหลัง G1/G2/G3/G4 ตาม Task ไม่ต้องรอทั้งโปรเจกต์; จบงานทีละ Task ตามที่ผู้ใช้เลือก ไม่เริ่ม Task ถัดไปเอง

## การใช้กับ Task และงานเดิม

- DSD-001 เสนอและขออนุมัติ G1 direction พร้อม version ก่อน UXD-002 สร้างหรือแก้ Wireframe รอบใหม่; typography/tokens ที่เหลือยังเป็น deliverables ของ DSD-001
- UXD-002 ต้องมี G1 direction ที่อนุมัติก่อนอนุมัติ G2; การมีชื่อ dependency หรือ draft ไม่ถือว่าผ่าน gate
- UXD-002 review-5 ที่มีอยู่ก่อนการเปลี่ยนลำดับให้เก็บเป็นหลักฐานเดิมและคงสถานะรอเจ้าของตรวจรับ เมื่อ G1 ผ่าน ให้ตรวจความสอดคล้องและบันทึกผล/จุดที่ต้องแก้ภายใน UXD-002 ที่ผู้ใช้เลือก ไม่เริ่มแก้อัตโนมัติ
- ขั้น G1 ไม่ได้อนุมัติ G2 หรือ G4 และไม่เปลี่ยนสถานะ task อื่น การอนุมัติ UXD-001 review-2 และข้อสรุป business/interaction เดิมยังมีผล
