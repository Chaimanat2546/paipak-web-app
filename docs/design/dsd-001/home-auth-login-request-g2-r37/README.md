# Current Login Request States G2-r37

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับ4สถานะส่งคำขอLoginที่แสดงแล้วตาม [บันทึก](owner-Login-request-states-acceptance.json)

เจ้าของเลือก1รับ [เบอร์แบบยืดหยุ่น](../home-auth-phone-input-decision.json): เบอร์ปกติ/+รหัสประเทศ รวมเว้นวรรคและขีดแล้วจัดรูปแบบให้ ไม่เลือกparser/provider/จำนวนหลักจากfixture ชุดนี้ต่อ [readiness](../home-auth-g2-readiness.md) ส่วนrequest states โดยใช้current Loginแทนsingle-page submittingเก่า

[เทียบ4สถานะ](PNaVg.png) · [ขอOTPกำลังส่ง](wp6Gt.png) · [ขอOTPเชื่อมต่อไม่ได้](TYi9y.png) · [passwordกำลังส่ง](fS0KD.png) · [passwordเชื่อมต่อไม่ได้](F5y0ir.png) · [บอร์ด](uuYAg.png) · [manifest/IDs/hash](review-manifest.json)

แถวบนคือขอLogin OTPจากขั้นอีเมลก่อนเปิดหน้ากรอกรหัส ช่วงส่งใช้spinnerในprimaryและพักfields/ส่งซ้ำ/สลับช่องทางชั่วคราว เมื่อทราบว่าเชื่อมต่อไม่ได้ แจ้งสาเหตุระดับฟอร์มก่อนprimary คงอีเมล ให้กดลองขอรหัสเองและใช้ทางเลือกอื่นได้ ไม่ทำemailผิดเองหรือรับรองinbox delivery

แถวล่างคือphone/passwordและใช้patternเดียวกันกับexplicit email/password ช่วงส่งพักcontrolsปัจจุบัน กรณีเชื่อมต่อไม่ได้คงค่าและให้ลองเอง ไม่ใช้แทนcredential-pair error-r26ที่รับแล้ว จุด8ตัวเป็นfixture ไม่บังคับminimum8ใหม่ในLogin

ปิด/กลับออกจากUIไม่อ้างว่าย้อนคำขอserver ปิดAuthล้างdraftและกลับHomeตามกฎเดิม ไม่เพิ่มtimeout/quota/providerหรือauto retry ด้านขวาเป็นknown connection causeเท่านั้น ไม่เหมารวมAuth errorsทุกชนิด

Native root `uuYAg`, comparison `PNaVg`, states `wp6Gt`/`TYi9y`/`fS0KD`/`F5y0ir` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพเทียบขนาดจริงและfull screenshotsทั้ง4แล้วครบ ตรวจfeedbackอยู่ก่อนprimary ไม่มีexecute warnings ภาพแหล่งLogin/Register/Google12ไฟล์hashไม่เปลี่ยน ไม่อ้างruntime/keyboard/contrastจากภาพนิ่ง

รับ4statesร37ที่แสดงแล้ว Recovery/current Register reconciliationและinteraction/version inventoryยังต้องตรวจต่อก่อนG2รวม ไม่เริ่มHigh-Fi/Frontend/backend/Taskอื่น ไม่แก้MainHome/State library54รายการ/UXD-002 ไม่commit/push/deploy
