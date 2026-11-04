# Home Desktop-r8 / Consolidated visual review

เจ้าของยืนยัน “โอเคแล้วสำหรับ footer” หลังเลือกคืน Footer-detail-r3 จึงรวมร่าง Home Desktop รุ่นใหม่สำหรับขั้น5 ตามแผนตรวจทีละส่วน ไม่ใช่การอนุมัติทั้งHome, F-01, DSD-001 หรือ Frontend

Native source: `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen`

| ภาพ | Native root | ขนาด | Nodes |
| --- | --- | --- | --- |
| Home Desktop-r8 ทั้งหน้า | iQ3YE | 1440×4578 | 1954 |
| เปิดภาษา | NpGoy / popup iBrrX | 1440×900 /224×152 | 1976 |
| เปิดติดต่อ | SLKXi / popup n3Uwxy | 1440×900 /280×176 | 1973 |

Copyจาก A1ks07 โดยเก็บร่างเดิมไว้ เปลี่ยนเฉพาะFooterเป็น r9F19E ที่copyจากแบบA5wVpmซึ่งเจ้าของรับแล้ว สองภาพเปิดutilityใช้Homeรุ่นเดียวกัน แผงภาษาที่x932,y96และติดต่อx924,y96ตรงtriggerในHeaderจริง เปิดทีละแผง ไม่ย่อภาพcropให้กลายเป็นviewportใหม่ Rootทั้งสามอยู่ต้นlayer list ส่วนป้ายCURRENTของr7ถูกระบุHISTORY

ตรวจเชิงโครงสร้างแล้วทุกส่วนก่อนFooterตรงกับต้นฉบับเมื่อไม่นับIDsและการserializeค่าfontWeightปกติ มี7tracks/54fixture cards (เห็น4ใบต่อแถวรวม28ใบตอนเริ่ม) ตำแหน่งtracksเริ่มx0 ปุ่มรูป108facesขนาด28pxครบ FooterPNGที่exportแยกตรงไฟล์ที่เลือกทุกbyte SHA256 FB75B6EEAEC67BF71F6C20873822A9C2CF6783212A22B516622FC36A4E4CC1D1 Popupทั้งสองไม่พบbounds problemsภายในpopup ข้อความฟอร์ม/ภาพ/ฟอนต์ก่อนFooterไม่ได้ปรับใหม่ในรุ่นรวมนี้

เปิดตรวจPNGทั้งหน้าผ่าน3ภาพcropที่ตัดต่อเนื่องที่y0/1600/3200 โดยไม่ย่อหรือเปลี่ยนartworkแล้ว พบข้อมูลครบ ไม่มีการซ้อนที่เห็นในภาพ Footerไม่ถูกตัด ส่วนtrackที่กว้างกว่าviewportถูกclipตามตั้งใจ Native readbackไม่ได้รับรองทุกboundsหรือevery node; ไม่ตีความภาพนิ่งเป็นการทดสอบclick, keyboard, scroll, URL, Auth, locale, API หรือระบบกรองจริง

สถานะเปิดSearchยังอ้าง Legacy-search-r5 พร้อมMonth-nav-r6 ส่วนcard focus/edges/step-two/filtered-image/loadingอ้างภาพที่เจ้าของรับตามguided review และmanifest ไม่ทำให้defaultHomeกลายเป็นhover/focusตลอดเวลา และไม่สร้างแถวที่ซ่อนจากข้อมูลจริง เพราะชุดfixtureปัจจุบันไม่ได้จำลองdata/APIจริง

ยังค้างก่อนรับรองงานขั้นสุดท้าย: OPEN-001ข้อความขาวบนชมพู(contrast2.705343:1), ContactFooter behaviorที่ยังไม่ได้ตัดสินแยก/ปลายทางLINEและเบอร์โทรจริง, category mapping/required data fieldsและแหล่งราคา, สิทธิ์ภาพ/โลโก้placeholderและข้อความบัญชีบริษัทplaceholder, functional/accessibility checks ในขั้นที่ได้รับอนุญาต ร่างภาษาอังกฤษไม่ได้ยืนยันการแปลทั้งเว็บ การรับภาพรวมครั้งต่อไปต้องระบุว่าเป็นappearance reviewและไม่ปิดประเด็นเหล่านี้

ไม่เริ่มMobile, UXD-002, DSD-002หรือTaskอื่น ไม่แก้application code/CSS/backend ไม่deploy และไม่ถือว่าG1หรือการรับFooterทำให้DSD-001ครบdeliverablesทั้งสี่ Foundation specificationsและfinal task/version approvalยังต้องครบตามTaskเดิม

สถานะ: เจ้าของเลือก1รับภาพรวม Home Desktop-r8 เฉพาะหน้าตาและความสอดคล้องแล้ว ข้อค้างยังเปิด
