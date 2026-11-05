# ผลทบทวน Auth เดิม

ทบทวน metadataทุกรุ่นในsource-inventory และตรวจnativeของfamiliesที่เกี่ยวข้อง ไม่ใช่การรับรองpixelทุกภาพประวัติหรือทดสอบruntime

| ส่วน | สิ่งที่พบ | รุ่นแก้/การจัดการ |
|---|---|---|
| Loginช่องว่าง | แบบเดิมมีinlineแล้วแต่ยังรวมidentifier/passwordหน้าเดียว | qNVoN/omNK0 แยกตามflowปัจจุบัน ไม่สร้างminimum8สำหรับLoginเอง |
| OTPผิด/หมดอายุ | เหตุผลอยู่ในกล่องแยกหลังกลุ่มช่อง | wxEwE/iLmVt ย้ายเข้ากลุ่ม6ช่องแบบinline คงกฎclear/focus/requestใหม่ |
| ลืมรหัสผ่าน | มีdefault formแต่ยังไม่มีภาพemail required | a2w6D เพิ่มข้อความใต้input ไม่ตรวจว่าบัญชีมีอยู่แล้วในข้อความ |
| ตั้งรหัสใหม่ | มีdefault formแต่ภาพshort/mismatchยังไม่ครบ | WAeyG แสดงใต้password/confirmation ใช้ขั้นต่ำ8และตรงกันที่รับไว้ |
| ยืนยันอีเมลหลังสมัคร | มีentry/successแต่error adaptationยังไม่วาง | Cb1DW ใช้ข้อความตรงกลุ่มOTP คงใช้งานก่อนและGoogleข้าม |
| คู่ข้อมูลLoginถูกปฏิเสธ | ร่างเก่าทั้งflowและcopyกว้าง | zA7HA ใช้password alternativeปัจจุบัน บอกอีเมลหรือpasswordไม่ถูกต้อง แต่ไม่เดาว่าช่องใดผิด/ไม่เปิดเผยบัญชี |
| Signup | r21/r24ยังมีsummaryซ้ำในหลักฐานเดิม | ใช้r25เป็นcandidateที่ถอนsummaryแล้ว ไม่แก้PNGที่เคยรับย้อนหลัง |
| Google/การเชื่อมต่อ/ส่งคำขอ | ไม่มีinputที่ระบบระบุว่าผิด | คงform-level feedback ไม่ทำช่องemailเป็นinvalidเอง |
| ลิงก์ใช้ไม่ได้ | เป็นเงื่อนไขของลิงก์ ไม่มีinputให้แก้ | คงหน้าขอลิงก์ใหม่และLogin return |
| Countdown/ack | กฎที่รับแล้วไม่ใช่field error | คงcountdownในปุ่ม ไม่ใส่กล่องเพิ่ม/ไม่คืนChange emailในack |

รูปแบบphone passwordต้องใช้alternativeที่ตรงช่องทาง ไม่แทรกemail OTPให้เบอร์โทรเอง แบบr26passwordใช้fixtureอีเมลและยังไม่ได้รับรองphone/account/providerจริง

เจ้าของรับ8ตัวอย่างที่แสดงแล้วตาม [บันทึก](owner-error-audit-acceptance.json) ภายในขอบเขตG0เดิม ไม่อนุมัติstatesอื่นหรือG2รวม อายุOTP/เวลา/quota/providerและการทดสอบkeyboard/runtimeยังค้าง ไม่มีการแต่งกฎชื่อ/เบอร์หรือยืนยันสำเร็จจากภาพนิ่ง
