# Footer-contact-r5 · เพิ่มFacebook PageและTikTok

5 พฤศจิกายน2026 (Asia/Bangkok) · Home Desktop-r20 draft · รอเจ้าของรับหน้าตา

เจ้าของขอ “ติดต่อเรา Page FB Tiktok เพิ่มไปหน่อย” จึงเพิ่มสองช่องทางในคอลัมน์ติดต่อเราเดิม ตาม [คำขอ](owner-addition-request.json) เป็นbounded revisionของFooter ไม่เริ่มbackend/APIหรือส่งข้อความติดต่อใคร

## แบบและข้อมูล

| แบบ | Native | ภาพ |
| --- | --- | --- |
| Footerสี่ช่องทาง | `lYPMw` | [Footer](lYPMw.png) |
| บทความ/FAQเดิมต่อFooterใหม่ | `i6nBJD` | [บริบท](i6nBJD.png) |
| Home Desktop-r20 draft | `ZRyFB` | [ทั้งหน้า](ZRyFB.png) |

ลำดับ: LINE OA → Facebook Page → TikTok → โทรหาเรา คงrow48px/gap4/icon-field32pxและข้อความ16/500กับ14/400เหมือนเดิม ไอคอนFB/TikTok24pxให้ใกล้กับLINE24px ส่วนphone20pxคงเดิม Footerที่1440pxสูง392pxตามเนื้อหาที่เพิ่ม ไม่กำหนด392pxเป็นfixedheightทุกจอ

Facebook PageและTikTokแสดงชื่อpapaipakเป็นfixture ยังไม่มีURLบัญชีที่เจ้าของส่งให้ ไม่สร้างfacebook.com/tiktok.comปลายทางหรือusernameเอง LINE/โทรศัพท์เดิมยังเป็นmockเช่นกัน ต้องแทนด้วยข้อมูลยืนยันในงานที่เกี่ยวข้องก่อนเชื่อมลิงก์จริง

## ไอคอน

ใช้brand glyphsจากPhosphorที่Pencilรองรับ ไม่ใช้ตัวอักษรFหรือไอคอนmusicทั่วไปแทนFacebook/TikTok Facebookใช้ `facebook-logo-fill` สี#0866FF;TikTokใช้ `tiktok-logo` สีBlackเหมือนglyphที่มีอยู่ในTikTok section ไม่อ้างว่าสีเหล่านี้เป็นการเปลี่ยนpaletteหลักของpapaipakหรือเป็นการรับรองguidelineแบรนด์ภายนอกทั้งหมด

ไฟล์upstreamเก็บใน [assets/provenance.json](assets/provenance.json) พร้อมsource/hash:

- [Facebook fill upstream](https://raw.githubusercontent.com/phosphor-icons/core/main/assets/fill/facebook-logo-fill.svg)
- [TikTok fill upstream reference](https://raw.githubusercontent.com/phosphor-icons/core/main/assets/fill/tiktok-logo-fill.svg)

Firecrawl searchไม่พบผลและscrapeไม่รองรับimage/svg+xml จึงตรวจไฟล์SVGสาธารณะด้วยการดึงตรงและparseสำเร็จ ไม่ใช้providerค้นหาบัญชีบุคคล ไฟล์TikTok-fillเป็นreferenceเท่านั้น:ชื่อglyphแบบfillไม่แสดงในPencilรุ่นนี้ จึงเทียบกับworking `tiktok-logo` ในหน้าเดิมและใช้ชื่อนั้น ตรวจPNGเต็ม1440pxหลังแก้แล้วไอคอนทั้งสองแสดงจริง

## การตรวจและขอบเขต

[Verification](verification.json) ยืนยัน12ส่วนที่ไม่ใช่FooterของHome-r19ตรงกันทั้งหมด ขอบโค้ง แบรนด์ เมนูสองคอลัมน์ domain/กลับบนสุด และLINE/โทรศัพท์เดิมตรงต้นฉบับเช่นกัน เพิ่มเฉพาะสองrowและเลื่อนโทรศัพท์ลงท้าย ดู [editable Footer](editable-footer.json), [Home structure](home-structure.json) และ [review manifest](review-manifest.json)

Home-r19/FAQ-r4ยังเป็นแพ็กเกจที่รับแล้ว Footer-r5/Home-r20ยังรอเจ้าของรับ ไม่เชื่อมบัญชีจริง ไม่แก้โค้ด/CSS ไม่ทำbackend/Mobile/deployหรือTaskอื่น และไม่อ้างclick/runtime/accessibilityผ่านจากภาพนิ่ง OPEN-001และข้อค้างเดิมคงอยู่ ยังไม่commit/pushรอบนี้
