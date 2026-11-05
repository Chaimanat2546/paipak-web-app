# Home Auth G2: ผลรับรวมและข้อค้าง

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของเลือก1รับG2-r40พร้อมinteraction draft-1แล้ว · วันนี้จบเฉพาะWireframe ไม่ทำUI

อ้าง [G0 plan-1](home-auth-g0-approval.json) และGovernance G2ซึ่งต้องมีuse cases/optional fields/navigation/statesชัดและเจ้าของรับWireframe version หนึ่งชุด ไม่ใช้จำนวนapprovalรายจุดเป็นการรับรวมอัตโนมัติ

## ฐานที่รับรายส่วนแล้ว

- Login shared identifier/Email OTP/email password/phone password และinternational-phone presentation: r30/r34
- Register fields/Username3–20/required-password validation/country selectorชื่อไทย-อังกฤษ และGoogle return: r25/r31/r33/r35 พร้อมคำตัดสินก่อนหน้า
- Recovery core request/ack/reset/success/unusable-linkและinline field errors: Recovery-r1/r2และerror-audit-r26
- Email OTP input/checking/invalid/expiry/resend/failure patterns: หลักฐานร6–ร16และinput decisions; verificationหลังสมัครentry/success-r20, invalid-r26, adaptations-r36
- เปิด/ปิดนอกmodal, clear-all Auth draft, Home originและfavorite continuation: decision recordsและr28; Favorite error UI-r29ถูกตัด ไม่คืนมาในแพ็กปัจจุบัน

รายการนี้สรุปฐานรายส่วน ไม่รับรองว่าทุกstateถูกrolloutเป็นรุ่นปัจจุบันหรือruntimeทำงานแล้ว

## ผลรายการตรวจรับ G2

| จุด | สถานะ/งานถัดไป |
|---|---|
| รูปแบบเบอร์ที่กรอกได้ | เจ้าของเลือก1รับ [เบอร์ปกติ/+codeรวมเว้นวรรค/ขีด](home-auth-phone-input-decision.json) แล้ว ไม่ใช้fixtureเลือกจำนวนหลัก/parser/provider |
| Coverageของการส่งคำขอ | [Login-r37](home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) รับ4statesแล้ว; [Recovery-r38](home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) รับ4statesแล้ว; [Register-r39](home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) เจ้าของตอบ1รับ4statesที่reconcilefieldsล่าสุดแล้ว ไม่ใช้single-page submittingเก่าแทนเอง |
| Interaction contractรวม | เตรียม [draft-1](home-auth-interaction-contract.md) แล้ว แยกที่รับเดิมกับข้อเสนอfocus/Tab/Escape/Enter/viewport/Auth-Hero/reduced-motion เจ้าของรับพร้อม [G2-r40](home-auth-consolidated-g2-r40/owner-G2-r40-acceptance.json) แล้ว แยกสัญญาจากfunctional test ไม่ถามกฎมาตรฐานทุกปุ่มซ้ำ |
| รุ่นรวม/annotated inventory | จัด [G2-r40](home-auth-consolidated-g2-r40/README.md) พร้อม57native referencesที่ตรวจว่ามีจริง, flow/interaction overviews, immutable reviewed snapshotsและsource hashes เจ้าของรับG2รวมพร้อมcontract draft-1แล้วตาม [หลักฐาน](home-auth-consolidated-g2-r40/owner-G2-r40-acceptance.json) จบที่Wireframeตาม [คำแก้ไขขอบเขต](home-auth-wireframe-only-stop-decision.json) ไม่อยู่ในคิวตรวจUI |

## เรื่องที่ยังแยกไว้จากG2 wireframe

API/provider/account matching/verification/sessionจริง, ประเทศที่รองรับจริง, จำนวนหลักตามประเทศและnormalization implementation, OTP expiry/cooldown/quota/delivery, runtime/keyboard/accessibility testและGoogle assetในHigh-Fi ไม่ถูกอนุมัติจากภาพนิ่ง ต้องระบุข้อค้างและเจ้าของงานให้ชัด ไม่แต่งผลสำเร็จหรือสิทธิ์ใช้งานเอง

OPEN-001ยังเปิด Mobileพัก ไม่มีFrontend/backend/SDK/deploy/commit/pushหรือTaskใหม่จากการตรวจนี้ G2-r40ที่รับแล้วไม่ใช่Final G4/DSD-001เสร็จหรืออนุญาตFrontend
