# Home Auth Login G3-r1

DSD-001/C2 · 5 พฤศจิกายน 2026 · พักร่างUIที่ยังไม่รับ ตามคำสั่งจบวันนี้ที่Wireframe

เจ้าของเลือก1รับ [G2-r40พร้อมinteraction contract](../home-auth-consolidated-g2-r40/owner-G2-r40-acceptance.json) และให้ทำหน้าตาจริงต่อ ชุดนี้เริ่มเฉพาะLogin entryตามโครงที่รับแล้ว ไม่เปลี่ยนวิธีLoginหรือเริ่มFrontend

[ภาพบนHome](dPzQ6.png) · [เทียบสามสถานะ](kqfiW.png) · [ยังไม่กรอก](iDgCH.png) · [กรอกอีเมลแล้ว](CZKPp.png) · [เลือกช่องกรอก](I6T8j.png) · [manifest/IDs/hash](review-manifest.json)

Native board `kqfiW`, context `dPzQ6`, modals `iDgCH`/`CZKPp`/`I6T8j` ในpapaipak-ui.penผ่านPencil MCP ใช้Home-r20/a8keiเป็นcopyหลังฉาก ไม่แก้MainHomeหรือทับowner-assets/Home-r21ที่รอตรวจแยกอยู่

เสนอlocal Auth panelขาวกว้าง520padding32/radius24พร้อมshadowระดับoverlayที่ใช้ในHome ข้อความMitr26/400และNavy ช่องสูง52/radius12 เส้นสี#8093A8 ปุ่มหลักPink/Whiteสูง52/radius16ตามvisual referenceที่เจ้าของคงไว้ ไม่ประกาศtokensเหล่านี้เป็นshared approved systemจากการมีตัวอย่าง

คงลำดับidentifier/ดำเนินการต่อ/password alternative/Google/registerตามG2 Phoneใช้รหัสผ่าน Emailใช้OTPหลัก ตัวอย่างfocusแสดงcaretและเส้นNavy2pxเป็นภาพนิ่ง ไม่ใช่keyboard prototype กรอกอีเมลเป็นข้อมูลจำลอง

Google Gมาจาก [ชุดassetทางการ](https://developers.google.com/identity/branding-guidelines) ไม่วาดโลโก้ใหม่ เก็บPNGต้นฉบับไม่แก้bytes ใช้image-fill cropเฉพาะกลางGพร้อมสัดส่วน/สีเดิมและข้อความactionบนขาว [แหล่งและhash](assets/source-record.json) Site labelยังMitr ไม่มีfontเสริม การผ่านbranding/provider/runtimeจริงยังไม่ได้รับรอง

คำนวณnominalคู่สีเส้นช่อง/White3.1547, helper/White5.9654, Navy/White13.7377 สีWhite/Pinkเดิม2.7053ไม่ผ่านทั้ง4.5และ3 OPEN-001ยังเปิด ไม่ขอเลือกแบรนด์ใหม่หรือปิดissueจากภาพนี้ ไม่ใช่G3/G4ผ่านพร้อมblockerนี้

ตรวจภาพบนHomeและฟอร์มทั้ง3แล้ว layoutครบ ตรวจภาพเต็มcontext/default/focus ไอคอนแสดงถูก ไม่ล้นหรือข้อความทับกันในภาพที่ตรวจ แก้Google label sizingแล้วexecuteสุดท้ายไม่มีwarnings ไม่อ้างผลkeyboard/scroll/contrastทั้งหน้า/runtime

รอบนี้ขอรับเฉพาะหน้าตา3ตัวอย่างเพื่อใช้ทำOTP/passwordและstatesถัดไป ยังเหลือG3ส่วนอื่น/จอเตี้ย/GoogleและCTA constraints/full-page favorite feedback และFinal G4ก่อนFrontend Mobileพัก ไม่แก้UXD-002/backend/SDK/deploy ไม่commit/push

## คำแก้ไขขอบเขตล่าสุด

เจ้าของระบุ “Ui ยังไม่ทำวันนี้จะจบแค่ wireframe” ตาม [หลักฐาน](../home-auth-wireframe-only-stop-decision.json) หยุดUI/High-Fiและซ่อนnative roots `kqfiW`/`dPzQ6` แล้ว เก็บไฟล์เป็นประวัติที่ไม่อนุมัติ ไม่รวมในbaselineหรือคิวตรวจปัจจุบัน รอคำสั่งเจ้าของก่อนกลับมาทำUI ไม่เริ่มเองในวันถัดไป สถานะรอตรวจ/ไปทำUIต่อในข้อความก่อนหน้าเป็นประวัติก่อนคำแก้ไขนี้
