# Design Task Brief — TEMPLATE (copy per task)

**Task ID:** `<ID>`  
**Page / flow:** `<HOME | SEARCH | DETAIL | CHECKOUT | ACCOUNT | ...>`  
**Version / date:** `<v / YYYY-MM-DD>`  
**Status:** `DRAFT`  
**Requested gate:** `<G0–G4>`

**Approval to start UI Design (G0):** `<PENDING | APPROVED; owner/date; approved plan/version and scope>`

ให้เจ้าของอนุมัติแผนและขอบเขตก่อนสร้างหรือแก้ชิ้นงาน UI Design รวม directions, Wireframe, High-Fi, tokens และ Component/States การอนุมัติมาตรฐานหรือเลือก Task ID ไม่แทน G0 อ้างอิงการอนุญาต Task เดิมได้เมื่อยังอยู่ในขอบเขตที่อนุมัติ และยังต้องขออนุมัติแบบ/version ก่อนทำ Frontend

Template นี้เป็นส่วนหนึ่งของมาตรฐานกลาง v1.0 ที่เจ้าของอนุมัติเมื่อ 3 พฤศจิกายน 2026 (Asia/Bangkok) เมื่อคัดลอกใช้ ให้คงสถานะ Brief เป็น DRAFT จนกว่าจะผ่านการอนุมัติของ Task นั้น ใช้ร่วมกับ Task Packet/manifest เดิม: G0 Scope, G1 Visual Direction, G2 UX/Wireframe, G3 High-Fi/Components, G4 Final Visual Baseline แบบแต่ละ Task ยังต้องให้เจ้าของอนุมัติก่อนทำ Frontend

## 1. Outcome

- **User goal:** `<ผู้ใช้ทำอะไรสำเร็จ?>`
- **Business goal:** `<ทำไมจึงสำคัญ?>`
- **Success signals:** `<พฤติกรรมที่สังเกต/ทดสอบได้ ไม่จำเป็นต้องแต่ง KPI>`

## 2. Scope and boundaries

- **In scope:**
  - `<...>`
- **Out of scope:**
  - `<...>`
- **Must preserve:** `<approved UX / business rules / shared component>`
- **Dependencies:** `<approved flow, data contract, content, page>`
- **Approved direction/version (required before Wireframe):** `<G1 approval record; pending ถ้ายังไม่อนุมัติ>`

## 3. Key content & interactions

| Element | Priority | Behavior / states | Content/data constraints |
|---|---|---|---|
| `<element>` | Primary/Secondary/Tertiary | `<click/open/submit/error>` | `<unknown/long/missing>` |

## 4. Required frames and states

- Desktop viewport: `<...>`
- Mobile viewport: `<...>`
- Default/hover/focus/expanded/selected/loading/error/empty: `<choose what matters>`
- Responsive behavior: `<stack/reorder/scroll/sticky>`
- Accessibility considerations: `<...>`

## 5. Visual direction

- **Page personality:** `<...>`
- **Primary focal point:** `<...>`
- **Hierarchy rationale:** `<...>`
- **Forbidden generic solutions:** `<e.g. same-weight grid / decorative clutter>`
- **Allowed exploration:** `<what agent may vary without asking>`
- **Typography:** `Mitr เป็นหลัก; ฟอนต์เสริมต้องเสนอและอนุมัติก่อนใช้`
- **Reference to governance:** `01`–`05` and approved token/component version

## 6. Deliverables

- [ ] Screen(s) / variants
- [ ] Component states
- [ ] Design Decisions Log
- [ ] Acceptance evidence
- [ ] Open issues + handoff notes

## 7. Task-specific acceptance criteria

- [ ] AC-01 `<testable outcome>`
- [ ] AC-02 `<testable outcome>`
- [ ] AC-03 `<testable outcome>`

## 8. Review outcome (human only)

- **Decision:** `APPROVED | REVISION_REQUIRED | REJECTED`
- **Gate:** `<G0–G4>`
- **Reviewer/date:** `<...>`
- **Findings:** `<ID / evidence / required outcome>`
- **Exceptions and follow-up:** `<...>`

> **Agent instruction:** ห้ามสรุปว่าได้รับการอนุมัติเอง หากข้อมูลไม่พอให้ระบุ `ASSUMPTION` และสร้างทางเลือกที่ชัด โดยไม่แอบเปลี่ยน requirement
