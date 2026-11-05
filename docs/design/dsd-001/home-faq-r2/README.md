# Home FAQ-r2 · สามตัวเลือกหลังส่งกลับร่างแรก

อัปเดต: เจ้าของไม่ได้เลือกA/B/C แต่ขอให้styleเข้ากับเว็บ จึงปรับตามHomeโดยตรงที่ [FAQ-r3](../home-faq-r3/README.md) ตัวเลือกในโฟลเดอร์นี้เก็บเป็นประวัติที่ยังไม่ได้รับ ไม่เป็นapproved directionของFAQ

5 พฤศจิกายน2026 (Asia/Bangkok) · รอเจ้าของเลือกหน้าตา

เจ้าของเลือก2 “ปรับหน้าตาก่อน” ไม่รับFAQ-r1 จึงสร้างสามตัวเลือกภายใน [G0เดิม](../home-faq-g0-approval.json) โดยคงคำถามจำลองชุดเดียวกัน ตำแหน่งก่อนFooter single-open และเนื้อหาจากหลังบ้าน ดู [คำขอแก้](owner-revision-request.json)

## ตัวเลือก

| แบบ | แนวทางและtrade-off | Native | ภาพ | บริบทก่อนFooter |
| --- | --- | --- | --- | --- |
| A · Open editorial list | หัวข้ออยู่บน รายการเต็มแนว ไม่มีsurfaceรวมครอบทุกข้อ คำถาม24px พื้นฟ้าเน้นเฉพาะข้อที่เปิด โปร่งแต่ใช้พื้นที่แนวนอนมาก | `F1T9Y` | [A](F1T9Y.png) | [context A](y6qOVB.png) |
| B · Navy split composition | พื้นNavyเต็มsection หัวข้อ56pxสองบรรทัดด้านซ้าย คำถาม22pxสีขาวและข้อเปิดเป็นพื้นWhite เห็นsectionชัดแต่มีน้ำหนักภาพมากกว่าแบบอื่น | `g2vg6` | [B](g2vg6.png) | [context B](F1v7q1.png) |
| C · Centered white reading panel | พื้นLight Blue หัวข้อกึ่งกลาง และแผงWhite1000px คำถาม22px เหมาะกับการอ่านเป็นกลุ่ม แต่sectionสูงและมีพื้นสีมากกว่าA | `a4GfF` | [C](a4GfF.png) | [context C](gB8KC.png) |

Mitr400ทุกตัวเลือก ไม่มีฟอนต์เสริม ทุกแบบใช้ข้อความNavy/White/Light Blueตามพื้นและbody#53657C ไม่เพิ่มคู่สีWhite/Pinkหรือเปลี่ยนOPEN-001 สี#F2FAFEเป็นquiet surfaceเฉพาะข้อเปิดของตัวเลือกA/C ไม่ใช่การเพิ่มglobaltokenที่รับแล้ว

ทั้งสามแสดงข้อแรกเปิดไว้เพื่อเทียบหน้าตาเท่านั้น **defaultจริงยังปิดทุกข้อ** ตามG0 ตัวอย่าง5ข้อไม่ใช่maximumของหลังบ้าน ไม่เพิ่มFAQ index page ดูทั้งหมด CMS/API หรือเงื่อนไขธุรกิจใหม่

## หลักฐานและขอบเขต

อ่าน [verification](verification.json) และ [editable options](editable-options.json) ได้ ทั้งสามมี5คำถาม/1คำตอบ/1ไอคอนลบ และเนื้อหาชุดเดียวกัน ตรวจPNGเต็ม1440pxทั้งสามแล้ว ตัวอย่างเป็นstatic designs ไม่ใช่ผลทดสอบการคลิก/keyboard/motion/backend

บริบทแต่ละแบบคัดบทความและFooterจากHome-r16 ไม่แก้ต้นทาง Home-r17ที่มีFAQ-r1เปลี่ยนชื่อเป็นhistory/returned draft ไม่ถือเป็นรุ่นที่รับ Home-r16ยังเป็นฐานที่รับล่าสุด ไม่มีการเลือกหรือรับFAQ-r2จากการสร้างภาพเหล่านี้

เมื่อเลือกแบบแล้วจึงทำclosed/open/long/emptyและรวมHome review copyตามแบบนั้น ไม่ทำสามHomeเต็มหน้าหรือสามชุดstateล่วงหน้า Mobileยังพัก ไม่มีFrontend/backend/deployหรือTaskอื่น
