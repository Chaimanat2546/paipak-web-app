# Home Auth Desktop G2-r40: รุ่นรวมสำหรับตรวจ

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับG2ทั้งชุดและinteraction contract draft-1แล้ว

เจ้าของรับ [Register-r39ทั้ง4states](../home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json) แล้ว จึงรวมflow/ฟอร์ม/state patternsที่รับไว้เป็นรุ่นนี้ ไม่ถือว่าคำตอบรับRegisterรับG2ทั้งชุดด้วย

ดู [แผนผังรวม](v0fodR.png), [กติกาการใช้งานที่เสนอเพิ่ม](geey5.png), [annotated inventory](inventory.md), [manifest/hash](review-manifest.json) ในPencilมีroot `xqrsT`, flow `v0fodR`, interaction `geey5` ไม่ย้าย/แก้ฟอร์มที่รับก่อนหน้าและไม่คืนFavorite-r29

## สิ่งที่เสนอรับพร้อมกัน

1. โครง/เส้นทางLogin, Register, local-email verification, Recoveryและกลับไปบันทึกบ้านตามส่วนที่รับแล้ว อ้างcurrent form/state inventoryอย่างชัดเจน
2. [Interaction contract draft-1 snapshot](interaction-contract.reviewed.md.txt): focusอยู่ในmodal, Tabตามลำดับ, Escapeปิดcountry pickerก่อนAuth, Enterตามขั้น, คืนfocus, คงdraftภายในแต่ล้างเมื่อdismiss, เลื่อนformยาว, พักHeroระหว่างAuth/เริ่มนับใหม่เมื่อไม่มีเหตุพักอื่น และreduced-motion/assistive feedback
3. ขอบเขตที่ยังต้องตรวจในG3/ระบบจริงตามด้านล่าง โดยไม่อ้างว่าภาพนิ่งทดสอบการทำงานแล้ว

## เกณฑ์ตรวจรับ G2 รุ่นนี้

- วิธีLoginและrequired fieldsตรงคำตัดสินล่าสุด ไม่มีUsername Login/SMS/Profile gateหรือบังคับGoogleยืนยันอีเมลเว็บซ้ำ
- Usernameแสดงซ้ำได้English/digits3–20; Signup/reset passwordขั้นต่ำ8+confirmationตรงกัน ไม่ใช้กฎรหัสใหม่ปิดกั้นLoginเก่า
- OTP Loginและยืนยันหลังสมัครแยกpurpose มีchecking/invalid/expired/resend/wait/failureและกฎinputที่รับ; recoveryใช้ลิงก์และackกลาง
- known field errorอยู่ใต้ช่อง; form/provider/credential-pair/known connection feedbackก่อนprimary; pendingไม่ส่งซ้ำ ไม่แต่งผลสำเร็จหรือretryผลกำกวม
- เปิด/ปิด/สลับ/กลับต้นทาง/focus/keyboard/Hero/viewportมีข้อกำหนดและเจ้าของรับสัญญารวมชัดเจน
- Native IDs/หลักฐาน/history/exclusionsตรงกัน ไม่มีการรับUI-r29ที่ตัดหรือการเก็บGuest favorites

เป็นcomposed low-fi baseline: current formsรวมกับfield/state patternsที่รับ ไม่อ้างว่าทุกmethod/error combinationมีภาพเต็มใหม่ แบบหน้าตาจริง/keyboard prototype/High-Fi statesยังต้องตรวจในG3

## คงแยกไว้

G3ยังต้องตรวจfocus/hover/show-hideในแบรนด์, Desktopจอเตี้ย, full-page favorite feedbackตำแหน่ง/เวลาและGoogleHigh-Fi assets ไม่ใช้cropรับแทน OPEN-001ยังเปิด ไม่เลือกprovider/ประเทศที่รองรับจริง/parser/account matching/session/OTP timing/quotaจากfixture ไม่มีruntime/accessibility testจริง

การรับG2-r40ในอนาคตเป็นเพียงgateโครงและinteractionของHomeAuthDesktop ไม่ใช่Final G4/DSD-001หรือHomeทั้งหมดเสร็จ ไม่อนุมัติFrontend/backend/SDK/deployหรือเริ่มTaskอื่น Mobileยังพัก UXD-002 review-5ยังคงเดิม ไม่มีcommit/pushจากรอบนี้

เจ้าของตอบ1รับG2-r40พร้อมกติกาแล้ว ดู [หลักฐาน](owner-G2-r40-acceptance.json) และให้ไปทำHigh-FiในขอบเขตHomeAuthDesktopเดิมได้ ยังต้องรับแบบ/เวอร์ชันG4ก่อนFrontend ไม่รับรองprovider/runtime/OPEN-001หรือDSD-001ทั้งTask

คำแก้ไขล่าสุด: เจ้าของให้จบวันนี้เฉพาะWireframe ตาม [หลักฐาน](../home-auth-wireframe-only-stop-decision.json) คงG2-r40พร้อมกติกาที่รับแล้ว หยุดUI/G3และแยกร่างที่ทำเกินไว้เป็นประวัติ ไม่ใช้คำตอบ1ก่อนหน้าเริ่มUIต่อหลังคำแก้ไขนี้
