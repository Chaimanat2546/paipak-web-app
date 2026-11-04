# Foundation alignment / Home Desktop-r15

5 พฤศจิกายน 2026 · documentation reconciliation ภายใน DSD-001

| เรื่อง | ก่อนปรับ foundation-2 | foundation-3 ปัจจุบัน |
| --- | --- | --- |
| Home reference | Home-r8 /1440×4578 | owner-accepted Home-r15 /1440×6091; ไม่กำหนดfixed page height |
| Direction | A / Holiday Panorama | คง A ไม่เสนอ Direction ใหม่ |
| Footer | Footer-detail-r3/ปุ่มติดต่อ/geometryเก่า | contact-column-r4/LINEและโทรตรง/สูง299 |
| TikTok | ยังไม่รวมในสเปกฐาน | states-r3/local geometry/fonts/provider UI |
| บทความ | ยังไม่รวมในสเปกฐาน | Article Desktop review-2; 16:9/ชื่อ2-1/body2/จำนวน-โหลด-ซ่อน ตาม content rules |
| Motion | generic proposals รวมข้อความไม่bounce | แยกบทความ336/140/420msที่รับ; indexไม่มีแอนิเมชัน; generic proposalsยังแยก |
| ปก | ตัวอย่าง/หลักการเตรียมปก | ปกสำเร็จรวมข้อความจากภายนอก ไม่สร้างweb cover editor; sampleจัดปกถูกถอน |
| Keyboard | referencesของvilla/header | คงเดิมตามขอบเขต; ไม่ขยายพื้นเข้มไปsecondary/index; ยังไม่รับรองruntime |
| Other widths/Mobile | proposed/paused | คงสถานะ ไม่มีการสร้าง/รับหน้าจอเพิ่ม |
| OPEN-001 | เปิด | คงเปิด ไม่เปลี่ยน paletteหรือปิด issue |

ตัวเลขส่วนบนที่คงอยู่ตรวจเทียบกับ native source ใน Home-r15 แล้ว ข้อความ/geometryใหม่อ่านผ่าน Pencil Get และ GetVariables ไม่อ่าน/แก้ไฟล์ .pen ผ่าน filesystem ไม่มีการแก้ UI/application code/CSS/resources

การรับภาพ Home-r15 อ้าง [owner-home-acceptance](../home-desktop-r15/owner-home-acceptance.json) การรับ foundation-3 ยังแยก pending ไม่ใช้ audit นี้เป็น approval หรือหลักฐาน Task complete
