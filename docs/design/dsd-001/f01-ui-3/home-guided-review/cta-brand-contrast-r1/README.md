# OPEN-001 / Brand-palette CTA contrast review

หลังเจ้าของรับappearanceรวมHomeDesktop-r8 จึงตรวจOPEN-001ที่TaskDSD-001กำหนดให้ต้องมีทางเลือกพร้อมหลักฐานก่อนfinalCTA sign-off คงข้อสรุปแบรนด์เดิมและภาพHomeที่รับไว้ ไม่เปลี่ยนปุ่มในหน้าเองหรือเสนอชมพูเข้มชุดที่เจ้าของเคยไม่เลือก

Native root F9LoP ใน papaipak-ui.pen มี35nodes เปรียบเทียบ3คู่สีจากpaletteเดิมเท่านั้น ทุกคอลัมน์copyปุ่มค้นหา164×60px/Mitr22/500 และเข้าสู่ระบบ148×48px/Mitr16/500จากHome-r8 ใช้รูปทรง ขนาด ฟอนต์และข้อความเดิม เปลี่ยนเฉพาะsurface/foregroundในตัวอย่าง

| ตัวเลือก | พื้น | ข้อความ/ไอคอน | Contrastเต็มprecision | เกณฑ์ข้อความทั่วไป4.5:1 |
| --- | --- | --- | --- | --- |
| ชมพู/นาวี (แนะนำ) | #FD6E88 | #072D59 | 5.077980501367648 | ผ่านเฉพาะคู่สี |
| นาวี/ขาว | #072D59 | #FFFFFF | 13.737680109134693 | ผ่านเฉพาะคู่สี |
| เดิมชมพู/ขาว | #FD6E88 | #FFFFFF | 2.705343217728925 | ไม่ผ่าน และต่ำกว่า3:1ด้วย |

คำนวณจากค่าsRGB foreground/background ไม่ใช้pixelที่antialiasแล้ว ใช้precisionเต็มในการตัดสินและปัดเพื่อแสดงเท่านั้น หลักฐานอ้าง[W3C WCAG2.2 SC1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) ตรวจ4พฤศจิกายน2026: ข้อความทั่วไปอย่างน้อย4.5:1 ข้อความขนาดใหญ่อย่างน้อย3:1 ตัวเลขเป็นผลของเรา ไม่ใช่ตัวเลขที่W3Cระบุให้แบรนด์นี้

ตัวเลือก3เป็นการคงvisual referenceที่เจ้าของเลือกก่อนหน้าและให้OPEN-001เปิดต่อ ไม่ใช่การอนุมัติaccessibility exceptionหรือการแก้ปัญหา การเลือก1หรือ2ยังต้องกำหนดscope/นำไปใช้กับstatesที่เกี่ยวข้องก่อนfinalfoundation acceptance ไม่อ้างว่าhover/focus/disabledหรือทั้งหน้าได้รับรองAAจากคู่สีdefault

ตรวจscreenshot/PNGเต็มและnativefillของปุ่มครบทั้ง6แล้ว สีและขนาดตรงตาราง Textไม่ซ้อนกัน Nativeboundsreadbackยังมีwarnings16รายการแม้PNGแสดงครบ เก็บในsnapshot ไม่อ้างว่าทุกboundsผ่าน Contextcanvas108roots/29712nodes ไม่แก้Home-r8, Results, Mobile, UXD-002, applicationcode/CSS/backendหรือdeploy OPEN-001คงเปิดรอคำตอบ


## คำตอบเจ้าของ

เลือก3คง#FD6E88/#FFFFFFและให้OPEN-001เปิดต่อ ดูowner-choice.json ไม่เปลี่ยนHomeที่รับแล้ว ไม่ย้ายตัวเลือก1/2ไปเป็นapprovedtoken และไม่ถือว่าเป็นaccessibility exception Nativeboardเปลี่ยนชื่อเป็นDECISION; ภาพเทียบเดิมเก็บเป็นหลักฐานก่อนเลือก
