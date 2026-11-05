# Home Auth G2-r1 · Flow และโครง Login

> เจ้าของส่งโครงLoginรุ่นนี้กลับตรวจตาม [หลักฐาน](owner-revision-request.json) ดู [r2](../home-auth-g2-r2/README.md) เป็นร่างปัจจุบัน r1ไม่ได้รับอนุมัติ

5 พฤศจิกายน2026 · DSD-001/C2 · **ร่างG2 รอตรวจเฉพาะโครงLogin**

อ้าง [G0 plan-1ที่รับแล้ว](../home-auth-g0-approval.json) และ [specล่าสุด](../home-auth-desktop-spec.md) รวมคำตอบล่าสุด [Forgotผ่านลิงก์อีเมล](../home-auth-reset-link-decision.json) ไม่ใช่การเริ่มUID-005หรือแก้UXD-002 review-5

## ภาพและเลเยอร์

- [โครงLogin](VAqjR.png) `VAqjR`: Googleก่อน, อีเมล/รหัสผ่าน, ลืมรหัสผ่าน, ปุ่มLogin, สมัครสมาชิก; มีปิดและแสดง/ซ่อนรหัส ไม่เพิ่มremember-meหรือusername login
- [บนHomeจริง](Sljji.png) `Sljji`:1440×960 ใช้สำเนาHeader/Hero/หมวด/แถวบ้านของHome-r20 ไม่มีการแก้Homeหลัก
- [แผนผังสามflow](Df2ip.png) `Df2ip`: ภาพทบทวนคำตัดสินพร้อมจุดต่อที่ยังเสนอ ไม่ใช่การรับG2ทั้งflow
- [บอร์ดรวม](OgKpW.png) `OgKpW` · [IDsและhash](review-manifest.json)

Source `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` ผ่านPencil MCP เปิดเป้าหมายไฟล์นี้โดยเฉพาะ แม้canvasที่เปิดก่อนเริ่มรอบเป็นUXD-002ก็ไม่ได้แก้ไฟล์นั้น

## หลักที่ใช้วางโครง

อ่านmaintained [Wireframe Guidelines](../../wireframe-guidelines.md) แยกannotationไว้ภายนอกจอ ใช้ระดับสีเทาในmodalเพื่อทดสอบลำดับ ส่วนพื้นหลังHomeคงภาพจริงที่รับแล้ว ไม่ตีความสีเทาเป็นtokenใหม่หรือแก้OPEN-001

ตรวจreferenceFormsจากAwesome DESIGN.md / Airbnb snapshot (`C:/Users/chaym/.agents/skills/awesome-design-md/references/design-md/airbnb/DESIGN.md`) เรื่องlabelเหนือfield, formที่อ่านง่ายและความโค้งนุ่ม เป็นreferenceโครงฟอร์มเท่านั้น ไม่อ้างว่าได้ตรวจLoginปัจจุบันของAirbnb ไม่เปลี่ยนpalette/font papaipak และไม่คัดลอกแบรนด์Airbnb ในwireframeGoogleใช้ชื่อปุ่มอย่างเดียว ไม่มีGปลอม; assetทางการต้องตรวจในHigh-Fiตามแผน

## Interaction และจุดค้าง

- ปิดmodalกลับต้นทางพร้อมค่าที่ใช้ได้ในflowต่อเนื่อง ไม่เก็บGuest favorites การกดจริงยังไม่ทดสอบ
- Email signup: Usernameซ้ำได้/โทร/อีเมล/รหัสผ่านบังคับ พร้อมconfirmationตรงกัน รหัสสมัคร/resetขั้นต่ำ8
- Google: ข้อมูลUsername/โทรที่ขาดไปเติมในบัญชีภายหลัง ไม่มีcompletion formแทรก ไม่มีlocal passwordformเพิ่มให้เอง
- สมัครemailเข้าได้ก่อนยืนยัน ข้อความชวนยืนยันปิด/ข้ามได้และกลับมายืนยันเองภายหลัง; รูปแบบและจุดเข้าUIยังต้องตรวจ
- Resetผ่านอีเมลลิงก์ ไม่กำหนดอายุลิงก์; **กลับLoginหลังresetสำเร็จเป็นข้อเสนอร่าง** ยังไม่อนุมัติauto-loginหรือdestinationจากคำตอบเลือกช่องทาง
- รูปแบบข้อมูล/provider/ความถี่reminderยังเป็นcontractเปิด ไม่แต่งกฎในข้อความUI

## ขอบเขตตรวจครั้งนี้

ถามรับเฉพาะโครงLoginและลำดับGoogle/อีเมล/รหัสผ่าน/ลิงก์ ก่อนทำRegister/Forgot-resetและstatesต่อ ต่อให้รับLoginนี้ยังไม่รับG2ทั้งชุดหรือเริ่มHigh-Fi ต้องตรวจรวมภายหลัง

ตรวจภาพmodalและflowแล้ว ปุ่มGoogle/primary48px close/eye44pxเป็นร่างlayout แต่ยังไม่กำหนดเป็นglobaltokens ไม่มีการทดสอบclick/input/keyboard/networkจริง ใช้Mitr400 ไม่มีฟอนต์ใหม่

Mobileพัก, OPEN-001เปิด, State library54รายการยังเดิม ไม่มีcode/CSS/backend/จริงAuth/commit/push/deploy
