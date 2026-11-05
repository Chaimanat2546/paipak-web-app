# Signup flow G2-r22

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับflowตาม [คำตอบ1](owner-signup-flow-acceptance.json); กลับไปตรวจstates-r21

เจ้าของขอ [เช็คflowก่อน](owner-flow-review-request.json) ขณะตรวจRegister validation-r21 จึงพักการรับสองstatesนั้นไว้และเรียงflowสมัครอีเมล/Google ไม่ถือว่ารับr21หรือG2รวม

[แผนผังในPencil](wnFtn.png) · [เฉพาะflow](l3YDNm.png) · [flowแบบข้อความ](flow.md) · [manifest/hash](review-manifest.json)

ภาพเริ่มHome→Login→เลือกสมัคร แล้วแยกlocal email/passwordกับGoogle กฎข้อมูลที่บังคับ/min8/confirmationตรงและยืนยันอีเมลข้ามได้เป็นข้อสรุปเดิม ภาพไม่ได้เปิดเลือกแบรนด์/ฟอนต์/กฎเหล่านี้ใหม่

ทางส่งคำขอสมัครไม่สำเร็จและGoogleกลับRegisterเป็นข้อเสนอให้ตรวจ ไม่ถือว่าGoogle cancellation-r17หรือRegister error statesรับแล้ว การยืนยันอีเมลใช้OTP6ตามที่รับไว้ แต่unshown error adaptationsยังต้องรวมตรวจ ไม่อนุมานว่ากรอกครบหรือclient validationเท่ากับสร้างบัญชี/verifiedจริง

กลับHomeเฉพาะบริบทที่ยังใช้ได้ในflowต่อเนื่อง ไม่กู้หลังreload/ปิดแท็บ/หมดอายุ ไม่แสดงว่าบันทึกGuest favoritesหรือจองสำเร็จ Account/Profileยังเป็นงานส่งต่อไม่เริ่มจากแผนผังนี้

Native root `wnFtn`, diagram `l3YDNm` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพและลูกศรแล้วไม่เห็นเนื้อหาล้น ไม่มีexecute warnings เก็บr21เดิมไม่แก้Home/State library/UXD-002 ไม่มีHigh-Fi/Frontend/backend/commit/push/deploy

คำตอบ1รับลำดับและทางกลับในภาพเท่านั้น คำว่าเสนอในภาพเป็นสถานะเมื่อส่งตรวจ ไม่ทำให้Register-r21/Google-return/OTP-error layoutsได้รับการรับภาพไปด้วย ภาพและhashr22คงbytesเดิม
