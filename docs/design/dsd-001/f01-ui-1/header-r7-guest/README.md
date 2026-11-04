# Home Desktop · Guest Header-r7

3 พฤศจิกายน 2026 · **ก่อนเข้าสู่ระบบ / รอเจ้าของตรวจ**

เจ้าของระบุ “เอาแบบยังไม่ login ก่อนสิ่” หลังดู r6 ไอคอนบัญชีแบบวงกลมในร่างก่อนมีเจตนาเป็นทางเข้า Login แต่ทำให้สถานะ Guest ไม่ชัด จึงเปลี่ยนเป็นปุ่มข้อความ “เข้าสู่ระบบ” พร้อม log-in icon แทนรูปผู้ใช้

[Home ก่อนเข้าสู่ระบบ](MLepw.png) · [Header เต็ม](SBf2x.png) · [เทียบกับร่างก่อน](S8hlA.png) · [Pencil](C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen)

- ปุ่มเข้าสู่ระบบ 148×48px, Navy/White, Mitr 16px/500 และมุม 16px ให้ความหมาย Guest ชัด ไม่มี avatar หรือชื่อสมาชิก
- ใช้ Login-first ของ I-22 ต่อ กดแล้วต้องเข้า WF-05 Login ก่อนสลับสมัครสมาชิก ไม่เพิ่ม account-menu step หรือ member navigation
- คง menu text สองรายการและ toolbar ภาษา/ติดต่อของ r6; มีข้อความ action เข้าสู่ระบบเพิ่มอีกหนึ่งรายการตามสถานะ Guest
- คงฝั่งซ้าย, Header 124px, Hero, การ์ดและ Footer เดิม Favorites ของ Guest ยังต้อง Login และไม่มี Guest favorites ชั่วคราว

Candidate Home `MLepw`, Header `SBf2x`, sign-in action `EY9Qa`, comparison `S8hlA` เป็น native editable layers มี [snapshot](layer-snapshot.json) และ [ผลตรวจ](verification.json) ใช้ [assets เดิม](../images/) ไม่มีการเปลี่ยน backend auth state หรือสร้าง Frontend

ยังไม่อนุมัติ Guest Header-r7 หรือ Home/F01-ui-1 ทั้งชุด ไม่ใช้แทน Header ของหน้าอื่น/มือถืออัตโนมัติ และ OPEN-001 ยังคงเปิด
