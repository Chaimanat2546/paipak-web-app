# Design task index (manual execution)

- **UXD-001 — User journeys and IA audit** | Depends on: none | Status: completed / owner-approved review-2 on 2026-11-02 | [Deliverables](UXD-001.md#deliverables)
- **DSD-001 — Visual foundations and design token specification** | Depends on: UXD-001 | First output: owner-approved G1 Visual Direction before Wireframe; remaining token specs follow | Status: in progress; A/review-2, Home Desktop-r20 with Footer-r5 and FAQ-r4 bounded Desktop design closeout and Desktop foundation-3 accepted within recorded scope; open items retained; task remains in progress; no Frontend authorization
- **UXD-002 — Detailed responsive wireframes** | Depends on: UXD-001 and approved DSD-001 G1 direction/version (not all token specs) | Status: draft review-5 / awaiting owner review; retain existing evidence and review alignment after G1 | [Deliverables](UXD-002.md#deliverables)
- **DSD-002 — Component visual states and interaction specs** | Depends on: DSD-001, UXD-002 | Status: planned/not started
- **UID-001 — Homepage high-fidelity design** | Depends on: UXD-002, DSD-002 | Status: G4-r1 visual baseline approved at six widths on 2026-11-11 | [G4-r1 package](../../docs/design/dsd-001/home-g4-r1/README.md)
- **UID-002 — หน้าผลค้นหาที่พัก** | อนุมัติ G4-r1 ทั้ง Desktop และ Mobile และปิดงานออกแบบ 19 พฤศจิกายน 2026 | [ภาพสองจอหลัก](../../docs/design/uid-002/g4-r1-review/README.md)
- **UID-003 — Property detail and availability high-fidelity** | Depends on: UXD-002, DSD-002 | Status: r31 desktop and mobile G4-r1 visual baseline approved on 2026-11-11 | [G4-r1 package](../../docs/design/uid-003/property-detail-g4-r1/README.md)
- **UID-004 — Checkout and confirmation high-fidelity** | Depends on: UXD-002, DSD-002, UXD-001 | Status: planned/not started
- **UID-005 — Authentication and account high-fidelity** | Depends on: UXD-002, DSD-002, UXD-001 | Status: Home Auth G4-r1 approved on 2026-11-11; profile review pending | [G4-r1 package](../../docs/design/dsd-001/home-auth-g4-r1/README.md)
- **UID-006 — Favorites and bookings high-fidelity** | Depends on: UXD-002, DSD-002 | Status: planned/not started
- **UID-007 — Empty loading error and offline feedback design** | Depends on: DSD-002, UID-001, UID-002, UID-003, UID-004, UID-005, UID-006 | Status: planned/not started
- **UID-008 — Accessibility and responsive design review** | Depends on: UID-001, UID-002, UID-003, UID-004, UID-005, UID-006, UID-007 | Status: planned/not started
- **UID-009 — Final visual reference approval and handoff** | Depends on: UID-008 | Status: planned/not started
- **UID-010 — ระบบจัดการหมวดหมู่บ้านพัก** | G4-r4 อนุมัติแล้ว · 18 พฤศจิกายน 2026 | [แบบที่อนุมัติ](../../docs/design/admin-g4-r4-review/README.md)
- **UID-011 — ระบบจัดการคลิป TikTok บนหน้าแรก** | G4-r4 อนุมัติแล้ว · 18 พฤศจิกายน 2026 | [แบบที่อนุมัติ](../../docs/design/admin-g4-r4-review/README.md)
- **UID-012 — ระบบจัดการบทความ** | ภูอนุมัติ G4-r1 ครบสามเฟรมมือถือและปิดงานออกแบบเมื่อ 18 พฤศจิกายน 2026 | [ชุดแบบ G4-r1](../../docs/design/uid-012/g4-review/README.md)
- **UID-013 — ระบบจัดการคำถามที่พบบ่อย** | G4-r5 อนุมัติแล้ว · 18 พฤศจิกายน 2026 | [มือถือ G4-r5](../../docs/design/uid-013/g4-r5-mobile-order-review/README.md) · [เดสก์ท็อป G4-r4](../../docs/design/admin-g4-r4-review/README.md)
- **UXD-003 — Usability prototype and user testing spec** | Depends on: UXD-002 | Status: planned/not started

## Section งานออกแบบใน Pencil

บอร์ดที่มีในไฟล์เรียงตาม UID จากซ้ายไปขวา แต่ละ section วาง Wireframe ทางซ้ายและ Mockup สุดท้ายทางขวา [เปิด Pencil](../../docs/design/dsd-001/papaipak-ui.pen)

| งาน | Section | Wireframe |
| --- | --- | --- |
| UID-001 · หน้าแรก | `Y4TBa` | ภาพอ้างอิง UXD-002 review-5 รอตรวจรับ |
| UID-002 · หน้าผลค้นหาที่พัก | `tYF4Q` | Wireframe G2-r30 ทางซ้าย `Jpzxu` · Hi-Fi G4-r1 ทางขวา `MilCd` |
| UID-003 · รายละเอียดบ้านพัก | `rqZz8` | ภาพอ้างอิง UXD-002 review-5 รอตรวจรับ |
| UID-005 · สมัครสมาชิกและเข้าสู่ระบบ | `R5IaVO` | แผนผัง Home Auth Desktop G2-r40 ที่อนุมัติ |
| UID-010 · จัดการหมวดหมู่บ้านพัก | `jNYEs` | ไวร์เฟรมทางซ้าย · G4-r4 เดสก์ท็อปทางขวา · มือถือ หน้าแรก และสถานะฟอร์มด้านล่าง |
| UID-011 · คลิป TikTok หน้าแรก | `FvFoc` | ไวร์เฟรมทางซ้าย · G4-r4 เดสก์ท็อปทางขวา · แบบเพิ่มและแก้คลิป มือถือ และหน้าแรกด้านล่าง |
| UID-012 · ระบบจัดการบทความ | `qVhG8` | Wireframe G2-r18 ทางซ้าย · High-Fi G3-r1 ตรงกลาง แยก 6 เส้นทาง · แบบมือถือ G4-r1 ที่อนุมัติทางขวา |
| UID-013 · ระบบจัดการคำถามที่พบบ่อย | `nev4k` | ไวร์เฟรมทางซ้าย · G4-r4 เดสก์ท็อปทางขวา · มือถือ G4-r5 และ FAQ หน้าแรกด้านล่าง |

Header และ Footer อยู่ใน section ใช้ร่วมกัน `pnnKH` คลังสถานะ Home Desktop อยู่ใน Archive `ysmkc`

## บันทึกปิดรอบ G4 · 11 พฤศจิกายน 2026

- **หน้ารายละเอียดบ้านพัก (UID-003)** ปิดชุดแบบ G4-r1 ตามแบบ r31 ที่เจ้าของอนุมัติทั้งเดสก์ท็อปและมือถือ [ชุดแบบที่อนุมัติ](../../docs/design/uid-003/property-detail-g4-r1/README.md)
- **ระบบจัดการหมวดหมู่บ้านพัก (UID-010)** ปิดชุดแบบ G4-r1 รวมแบบลบหมวดฉบับแก้ และเก็บชุดไว้ตามที่เจ้าของขอ [ชุดแบบที่อนุมัติ](../../docs/design/admin-category-g4-r1/README.md)
- **หน้าแรก (UID-001)** ปิดชุดแบบ G4-r1 ตามที่เจ้าของอนุมัติทั้งหกขนาด พร้อมภาพสถานะการค้นหา ทางลัดหมวด และการโหลดรายการบ้าน [ชุดแบบที่อนุมัติ](../../docs/design/dsd-001/home-g4-r1/README.md)
- **สมัครสมาชิกและเข้าสู่ระบบ** ปิดชุดแบบ Home Auth G4-r1 ตามที่เจ้าของอนุมัติทั้งเดสก์ท็อปและมือถือ โปรไฟล์บัญชีอยู่ในขอบเขตตรวจแยก [ชุดแบบที่อนุมัติ](../../docs/design/dsd-001/home-auth-g4-r1/README.md)
- **ระบบจอง** เจ้าของให้พักไว้ก่อน ประเด็นการถือสิทธิ์จองและการป้องกันจองซ้อน รวมถึงแหล่งข้อมูลราคาและวันว่าง ยังเปิดอยู่ [ทะเบียนประเด็นเปิด](../../docs/decisions/open-decisions.yaml)

Use task-specific `.md` file for scope. User starts and approves one task per separate agent conversation.

Order amendment and transition handling were confirmed on 3 November 2026; see [task-order](../../docs/roadmap/task-order.md) and [Governance README](../../docs/design/governance/README.md). The owner approved the integrated v1.0 kit as the project-wide standard on the same date. Each task's design/version still requires explicit owner approval before related frontend implementation; task statuses and existing deliverable approvals remain unchanged.
