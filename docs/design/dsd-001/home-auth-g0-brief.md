# Home Auth Desktop · แผน G0 รุ่น1

5 พฤศจิกายน2026 (Asia/Bangkok) · Task ที่กำลังหารือ: DSD-001 / C2 · **G0 อนุมัติแล้ว — รอตกลงรายละเอียดฟอร์มก่อนวางแบบ**

## เป้าหมายและข้อสรุปจากเจ้าของ

ทำให้ผู้ใช้เปิด Auth จาก Home Desktop เพื่อเข้าสู่ระบบ สมัครสมาชิก หรือกู้รหัสผ่าน แล้วกลับบริบทเดิมได้ตามสัญญา UX ที่รับแล้ว เจ้าของเลือก3ให้ครอบคลุมทั้งสาม flow และเลือก2ให้ใช้ **อีเมล + รหัสผ่าน และ Google** การเลือกเหล่านี้ยืนยันขอบเขตหารือและช่องทาง ไม่ใช่การรับแบบหรืออนุมัติเริ่ม UI Design

## ขอบเขต Task ที่ขออนุมัติเพิ่ม

เสนอเป็นขอบเขตย่อย DSD-001 สำหรับ Home Auth Desktop เท่านั้น เพื่อปิดช่องว่าง C2 ที่พบระหว่างตรวจ Home โดยใช้แนวทางภาพที่รับแล้ว

ตาม [UID-005](../../../tasks/design/UID-005.md) งาน Auth/Account เต็มชุดมีทั้ง Mobile และ Profile และพึ่ง UXD-002, DSD-002, UXD-001 ยังไม่ถือว่าเริ่มหรือพร้อมจากแผนนี้ UXD-002 review-5 ยังรอตรวจ และ DSD-002 ไม่ถูกเริ่ม หากเจ้าของอนุมัติ G0 รุ่นนี้ ให้ถือเป็นการเพิ่มขอบเขตย่อยเฉพาะที่ระบุใน DSD-001 ไม่ยกสถานะหรือข้ามการตรวจรับ dependency ของ UID-005 ทั้ง Task ผลชุดนี้เป็นหลักฐานให้ task ที่เกี่ยวข้องพิจารณาภายหลัง

## งานในขอบเขต

- Modal กลางจอบน Home Desktop1440px เปิดจากปุ่มเข้าสู่ระบบและ Guest กดหัวใจ โดยใช้ modal เดียวตามบริบทต้นทาง
- Email/password login และ register; ปุ่มเข้าสู่ระบบด้วย Google โดยแสดงเส้นทางยกเลิก/กลับมา/ไม่สำเร็จเป็นข้อกำหนดและ mock เท่านั้น
- ลืมรหัสผ่าน: ระบุอีเมล, สถานะขอส่งลิงก์, ตั้งรหัสใหม่, สำเร็จ และลิงก์ใช้ไม่ได้/หมดอายุ เสนอวิธีผ่านลิงก์อีเมลเป็นแนวทางให้เจ้าของยืนยันก่อนวางฟอร์ม ไม่กำหนดอายุลิงก์เอง
- States ที่จำเป็น: empty/filled/focus/show-hide password/invalid/submitting/error/success; เปิด/ปิด/ย้อนกลับ/สลับฟอร์ม และการกลับต้นทาง
- คำอธิบาย focus/Tab/Escape/คืนfocus, การพักHeroขณะมีmodal และ reduced motion เป็นข้อกำหนดที่ต้องตรวจ ไม่รับรองจากภาพนิ่ง
- แยกข้อความจากฟอร์มผิดรูปแบบ ปัญหาการเชื่อมต่อ และผลจำลองหลังส่ง ไม่เปิดเผยข้อมูลบัญชีอื่น; ไม่แสดงว่ามีการส่งอีเมล/สร้างบัญชีจริงในเดโม

## งานนอกขอบเขต

Mobile/Tablet, Profile, Favorites page, Booking/Checkout/Authจากหน้าอื่น, ออกแบบหน้าของGoogle, การตั้งค่าOAuth/credentials, Supabase/Auth/API/sessionจริง, ส่งอีเมลจริง, รหัสผ่าน/ข้อมูลผู้ใช้จริง, code/CSS, deploy และการทำ UID-005 ทั้งชุด ไม่มี LINE login ในขอบเขตที่เลือก

## สิ่งที่รักษาและ Dependencies

- papaipak, Mitr, Navy #072D59, Light Blue #DBF2FC, Pink #FD6E88 และ A / Holiday Panorama / review-2; ไม่เปิดเลือกVisual Directionใหม่
- [UXD-001 review-2 และ Q-01–Q-03](../uxd-001/edge-flows.md): ดูบ้านไม่ต้องlogin, Favoritesต้องlogin ไม่มีGuest favorites; ยกเลิกกลับต้นทางพร้อมค่าที่ใช้ได้ในflowต่อเนื่อง ไม่กู้Booking Intentหลังreload/ปิดแท็บ/หมดอายุ
- [Home Desktop-r20](footer-contact-r5/owner-home-acceptance.json), [foundation-3-desktop](foundation-3-desktop/owner-foundation-acceptance.json), [Search Desktop-r2](search-desktop-review-r2/owner-search-acceptance.json) เป็นฐานภาพ/สเป็กที่รับแล้วในขอบเขตเดิม ไม่ยกการรับนั้นเป็นอนุมัติAuthใหม่
- ไม่ถือว่าGoogle loginรับประกันflowต่อเนื่อง กลไกpopup/redirect/sessionและการยืนยันตัวตนต้องตัดสินใจในงานระบบที่เกี่ยวข้อง; ถ้าต้องreloadยังเคารพQ-03 ไม่มีการกู้intentแฝง
- OPEN-001ยังเปิด ใช้หลักฐานcontrastเดิมและตรวจองค์ประกอบใหม่ ไม่เปลี่ยนสีแบรนด์หรืออ้างผ่านAAเอง

## ลำดับงานและจุดตัดสินใจ

1. **G0:** เจ้าของอนุมัติแผนรุ่น1พร้อมการเพิ่มขอบเขตย่อย DSD-001 นี้ ก่อนสร้างUI
2. **ก่อนวางฟอร์ม:** คุยทีละข้อเรื่องข้อมูลสมัคร/required fields, นโยบายรหัสผ่าน/ยืนยันอีเมลที่กระทบUI, ขั้นกู้รหัสผ่านผ่านลิงก์ และพฤติกรรมกลับจากGoogle ไม่ยกfields/กฎจำฉันไว้/ขั้นต่ำ8ตัวจากโค้ดเดโมเป็นข้อกำหนดที่รับแล้ว
3. **G2:** ทำแผนผังและร่างโครงmodalภายใต้G1เดิม แสดงลำดับทั้งสามflowและเปรียบเทียบโครงเฉพาะจุดถ้าจำเป็น ตรวจรับก่อนHigh-Fi ไม่แก้UXD-002 review-5
4. **G3:** ทำHigh-FiในPencilกับstatesที่ตกลง แสดงบนHomeจริง ใช้ไอคอนGoogleจากแหล่งทางการที่ตรวจแล้ว สี/ตัวอักษร/ระยะเข้าชุดHome ตรวจภาพก่อนถามแต่ละจุด
5. **G4:** รวมแพ็กเกจและรายการข้อค้าง ให้เจ้าของรับแบบ/เวอร์ชันโดยเฉพาะ แล้วค่อยวางในState library การทำFrontendต้องมีคำสั่งแยกอีกขั้น

## Deliverables และเกณฑ์ตรวจ

- Editable Pencil: Home/Auth context, Login, Register, Forgot/reset และstates boardที่ตกลง พร้อมชื่อframe/เวอร์ชันชัดเจน
- Flow/interaction specification, ตารางfield/validation, data/provider assumptions และบันทึกคำตัดสิน
- ภาพส่งออกพร้อมviewport/IDs/hash, checklist และบันทึกการรับรุ่น
- AC-01 เปิดจากHeader/หัวใจและปิดกลับต้นทางได้ตามสัญญา ไม่เปลี่ยนSearchที่รับแล้ว
- AC-02 ทั้งสามflowและGoogle entryมีจุดต่อไป/กลับ/ยกเลิก/ไม่สำเร็จชัด ไม่มีstateที่สื่อว่าจองหรือบันทึกGuest favoritesสำเร็จ
- AC-03 Forms/statesครอบคลุมfieldที่เจ้าของตกลง ข้อความผิดพลาดบอกวิธีแก้ ไม่อ้างผลproviderจริงจากmock
- AC-04 ภาพเข้าชุดHome มีfocus/keyboard/reduced-motion contract; แยกข้อกำหนดออกจากผลทดสอบจริง
- AC-05 ระบุสิ่งที่ยังรอระบบ/ข้อมูล/สิทธิ์asset/OPEN-001และMobile ไม่ปิดประเด็นจากภาพนิ่ง
- AC-06 เจ้าของรับเวอร์ชันสุดท้ายชัดเจนก่อนFrontend; ไม่ถือว่าDSD-001หรือUID-005ทั้งTaskเสร็จ

## สถานะขณะเสนอ

มีเฉพาะการอ่านเอกสารและแผนนี้ ยังไม่สร้างหรือแก้AuthในPencil ไม่มีการเชื่อมระบบหรือcommit/push การรับG0เป็นการเริ่มเฉพาะขอบเขตที่ระบุ ไม่ใช่การรับผลงานปลายทาง

## ผล G0 และลำดับดำเนินการ

เจ้าของเลือก1อนุมัติแผนรุ่น1และเพิ่มขอบเขตย่อยนี้ในDSD-001 ตาม [หลักฐาน](home-auth-g0-approval.json) ต้นฉบับขณะตรวจเก็บ [bytesเดิม](home-auth-g0-plan-1-reviewed.md.txt) ข้อความเงื่อนไขก่อนอนุมัติด้านบนเป็นบริบทแผนเดิม การรับG0นี้ยังไม่รับแบบปลายทางหรือเริ่มFrontend

ดำเนินการในแชทนี้ตามลำดับที่เจ้าของขอ ไม่เปลี่ยนไปเป็นแผนเขียนโค้ด:

- [x] A0 บันทึกG0/ขอบเขตที่เพิ่ม พร้อมhashต้นฉบับ
- [ ] A1 ตกลงข้อมูลสมัคร/required fields และกติกาAuthที่กระทบUIทีละข้อ ลง `home-auth-desktop-spec.md` เมื่อมีข้อสรุป; ไม่ยกfields/รหัสผ่านขั้นต่ำจากเดโมมาอนุมัติเอง
- [ ] A2 กำลังทำ [G2-r1](home-auth-g2-r1/README.md): แผนผังกับโครงLoginพร้อมรอตรวจ ยังเหลือRegister/Forgot-reset/statesและการรับรวมG2 โดยคงG1เดิม
- [ ] A3 ทำHigh-Fi/statesที่อนุมัติขอบเขตแล้วหลังG2 ใช้ไฟล์Pencilเดิมและโฟลเดอร์หลักฐาน `home-auth-desktop-r1/`; ไม่แก้โค้ดแอป
- [ ] A4 ตรวจภาพ/ข้อมูลยาว/ข้อผิดพลาด/keyboard contractและcontrast พร้อมบันทึกผลที่ทดสอบได้จริง
- [ ] A5 รับเวอร์ชันG4โดยเจ้าของ แล้วปรับState libraryเฉพาะที่รับแล้ว

เอกสาร brief นี้เก็บขอบเขต/หลักฐานเริ่มงาน ส่วนspecที่จะจัดทำเก็บfield/flow/states และโฟลเดอร์หลักฐานเก็บภาพ/IDs/hash/ผลตรวจ แต่ละช่วงต้องมีผลที่ตรวจได้ก่อนข้ามช่วง ไม่มีการสร้างAuthUIในขั้นA0

## ความคืบหน้า A1

A1.1 เจ้าของเลือกข้อมูลสมัครด้วยอีเมลเป็นชื่อ/นามสกุล/เบอร์โทร/อีเมล/รหัสผ่านแล้ว ดู [specระหว่างหารือ](home-auth-desktop-spec.md) และ [หลักฐาน](home-auth-registration-fields-decision.json) ยังไม่ปิดA1: required fields/validation/Googleและกู้รหัสผ่านยังต้องตัดสินใจ

A1.2 เจ้าของเลือก1ให้ข้อมูลสมัครด้วยอีเมลทั้งห้าช่องบังคับกรอก ตาม [หลักฐาน](home-auth-registration-required-decision.json) แล้ว รายละเอียดvalidation/รหัสผ่าน/Googleและresetยังค้างในA1

A1.3 เจ้าของเลือก1ให้มีช่องยืนยันรหัสผ่านบังคับทั้งสมัครด้วยอีเมลและตั้งรหัสใหม่ ตาม [หลักฐาน](home-auth-password-confirmation-decision.json) ไม่เพิ่มช่องยืนยันในLogin นโยบายรหัสผ่าน/ยืนยันอีเมล/Googleและresetยังต้องหารือต่อก่อนโครงฟอร์ม

A1ล่าสุด: เจ้าของเปลี่ยนชื่อ/นามสกุลเป็นusernameตาม [หลักฐานแก้ไข](home-auth-username-amendment.json) คงphone/email/passwordบังคับและconfirmationเดิม ใช้ [specปัจจุบัน](home-auth-desktop-spec.md) เป็นข้อมูลสมัครล่าสุด ไม่เพิ่มusername loginหรืออนุมัตินโยบายGoogleจากคำเปลี่ยนนี้

A1.4 เจ้าของเลือก3ให้Googleผู้ใช้ที่ขาดusername/โทรไปเติมในบัญชีภายหลัง ตาม [หลักฐาน](home-auth-google-profile-decision.json) ไม่มีฟอร์มแทรก/บังคับเติมในsignup ไม่เริ่มProfile และไม่เปลี่ยนrequired fieldsของสมัครด้วยอีเมล กฎusername/รหัสผ่าน/ยืนยันอีเมลและresetยังหารือต่อ

Username: เจ้าของเลือก1ให้เป็นชื่อแสดงซ้ำได้ตาม [หลักฐาน](home-auth-username-role-decision.json) ไม่เพิ่มusername login ส่วน [ข้อเสนอรหัสผ่านรุ่น1](home-auth-password-policy-proposal.md) อิงNISTและยังรอคำตอบ ไม่ยกรหัสขั้นต่ำจากเดโมเอง

รหัสผ่าน: เจ้าของกำหนดสมัครและตั้งใหม่ขั้นต่ำ8ตัวตาม [คำตัดสิน](home-auth-password-minimum-decision.json) แทน15ที่เอเจนต์เสนอ คงconfirmationเดิม ไม่ขยายเป็นการรับข้อเสนออื่น/ระบบจริงหรือNIST compliance

ยืนยันอีเมล: เจ้าของเลือก2พร้อมกำหนดให้ปิด/ข้ามข้อความชวนยืนยันและยืนยันเองภายหลังได้ ตาม [หลักฐาน](home-auth-email-verification-decision.json) ให้เข้าใช้บัญชีหลังสมัครอีเมลได้ก่อน ไม่ถือว่าการข้ามทำให้อีเมลverified ไม่เพิ่มกฎสิทธิ์Bookingหรือความถี่popupจากคำตอบนี้

G2-r1: ทำแผนผังและโครงLoginบนHome1440×960แล้วตาม [หลักฐาน](home-auth-g2-r1/README.md) ตรวจทีละส่วน เริ่มรับเฉพาะLogin ไม่รับG2ทั้งชุด/High-Fiจากการมีร่าง

G2ความคืบหน้า: Login-r2รับโครงแล้วตาม [หลักฐาน](home-auth-g2-r2/owner-login-structure-acceptance.json) ต่อ [Register-r1](home-auth-register-g2-r1/README.md) ที่รอตรวจ ยังไม่ปิดA2หรือเริ่มA3

ขอบเขตแก้ไขล่าสุดโดยเจ้าของ: รับRegister-r1โครงแล้ว และเพิ่มPhone+Password Loginตาม [หลักฐาน](home-auth-phone-login-amendment.json) ภายในHomeAuthDesktopDSD-001เดิม ไม่แก้ต้นฉบับG0ที่freeze ไม่เพิ่มOTP/SMSหรือbackend/UIปลายทางโดยอัตโนมัติ [Login-r3](home-auth-login-g2-r3/README.md) รอตรวจ

G2: Login-r3รับโครงแล้ว ต่อ [Recovery-r1](home-auth-recovery-g2-r1/README.md) เริ่มจากขอรับลิงก์ก่อน หน้าหลังส่ง/ตั้งรหัส/สำเร็จ/ลิงก์ใช้ไม่ได้ยังเป็นร่าง ไม่ปิดA2หรือเริ่มA3

Flowแก้ไขโดยเจ้าของ: เลือก [Loginสองขั้นโดยคงรหัสผ่าน/Google](home-auth-two-step-login-decision.json) แล้ว ใช้ [G2-r4](home-auth-login-g2-r4/README.md) เป็นร่างปัจจุบัน ไม่เพิ่มOTP ไม่เปลี่ยนscopeRegister/Recovery ยังต้องรับโครงใหม่และG2รวมก่อนHigh-Fi

OTP scope: เจ้าของเลือก2ให้ [Email OTPก่อน](home-auth-email-otp-scope-decision.json) Phoneยังpassword, Emailpasswordเป็นทางเลือกและGoogleคงเดิม ไม่มีSMS/providerจริง การปรับpasswordในRegisterยังต้องคำตอบก่อนโครงใหม่
