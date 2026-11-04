# Home Desktop-r15

5 พฤศจิกายน 2026 · หน้า Home รวมล่าสุด · รอตรวจภาพรวม R2

หลังเจ้าของรับ [Article Desktop review-2](../article-desktop-review-2/owner-article-acceptance.json) จึงทำสำเนาหน้า Home รวมเพื่อขอตรวจ appearance เวอร์ชันเดียว ไม่แก้ต้นฉบับ `Oftfq` และไม่เริ่ม application code หรือ Frontend

## รุ่นที่รวมและส่วนที่คงเดิม

| ส่วน | แหล่งและผลตรวจ |
| --- | --- |
| Header/Hero/Search/เจ็ดหมวด | คัดจาก Home-r14 `Oftfq` ที่สืบแบบ guided review เดิม ไม่ปรับเลย์เอาต์ ข้อความหรือสไตล์ |
| แถวบ้าน 7 แถว | คง recommended และอีก 6 หมวดตามต้นฉบับ รวมสัดส่วน การเรียง ข้อความ controls และ viewport ที่คลิป track เพื่อเลื่อน |
| TikTok | ใช้ accepted states-r3 `v9qG0` ตำแหน่งคลิปแรก ไม่มีคลิปก่อนหน้าทางซ้าย ไม่ใช้ custom Playing/Paused/Buffering ที่ถอนแล้ว |
| บทความ | ใช้ accepted Article Desktop review-2 `L4FBX` รูปและข้อความแบบที่รับ เรื่องเด่นแผ่สีพร้อมเด้ง420ms เรื่องรองเด้งอย่างเดียว420ms บทความทั้งหมดเป็นลิงก์ปกติไม่เคลื่อนไหว/ไม่หน่วง |
| Footer | ใช้ accepted contact-column-r4 `kengy` แสดง LINE/โทรศัพท์โดยตรงตามภาพที่รับ ข้อมูลยังเป็น mock ที่ระบุไว้ ไม่ใช่ช่องทางจริงที่ตรวจแล้ว |

Root รวม `ZfZvJ` ขนาด1440×6091 ส่วน TikTok `Lejko`, บทความ `s4H6L`, Footer `kXTfu` คัดจากแหล่งที่รับแล้ว ไม่ยกแหล่ง draft เก่าเป็นภาพรุ่นรวมนี้

## ภาพสำหรับตรวจ

- [ภาพเต็ม](ZfZvJ.png)
- [ส่วนบน Header/Hero/Search/หมวด](L8Zk0.png)
- [ช่วงแถวบ้านแนะนำ/ใกล้ทะเล/ปาร์ตี้](bE4i5.png)
- [ช่วงล่าง TikTok/บทความ/Footer](Y4J5Wn.png)

ภาพแยกช่วงเป็น review copies เพื่อดูรายละเอียด ไม่ใช่หลายหน้าและไม่ได้เพิ่ม section ในผลิตภัณฑ์

## หลักฐานตรวจ

เปรียบเทียบ schema ของส่วนบน/แถวบ้าน10ส่วนกับ `Oftfq` โดยตัดเฉพาะ IDs ผลตรงกัน10/10 เปรียบเทียบ TikTok/บทความ/Footer กับแหล่งที่รับโดยละ root position/name/width ที่เปลี่ยนตาม parent และ IDs ผลตรงกัน3/3 ตรวจ PNG ของชิ้นที่รวมเทียบ hash กับ PNG accepted sources และเปิดภาพเต็ม/บน/กลาง/ล่างครบแล้ว รายละเอียดใน manifest

ต้นฉบับ `Oftfq` และ variables ไม่เปลี่ยน ลบค่า x/y ที่ไม่ใช้ใน flex ของชิ้นที่คัดเข้าใหม่แล้ว Bounds ที่ยังรายงานเป็น listing tracks ซึ่งตั้งใจเกิน viewport ของ horizontal rails และคงเหมือนต้นฉบับ ไม่อ้างว่า diagnostics สะอาดหรือว่าภาพนิ่งทดสอบ carousel แล้ว

## ขอบเขตที่ขอรับและสิ่งที่ยังค้าง

รอบนี้ขอรับภาพรวม Home Desktop-r15 และการประกอบรุ่นที่เจ้าของรับไว้เป็น R2 appearance review ไม่ใช่รับรองการทำงานใน browser/backend, keyboard/screen reader, TikTok embed, animation/navigation จริง, network/data behavior หรือทุกขนาดหน้าจอ Header/ปุ่ม/ลิงก์ในภาพ Pencil เป็นแบบ ไม่อ้างว่าเชื่อมหน้าจริงแล้ว

คงข้อกำหนดโมดัล login/ช่องค้นหา/แผงภาษาและติดต่อ และ state inventory ที่รับก่อนหน้า ไม่แก้ UI ย่อยเหล่านั้นในรอบรวมนี้ ไม่แอบนำ secondary/index dark focus หรือ sample จัดปกที่ถอนกลับมา Secondary custom keyboard cue ยังไม่ได้เลือกแทน และการตรวจ accessibility จริงยังแยกอยู่ ปกเป็นภาพสำเร็จรวมข้อความจากภายนอก เว็บไม่จัดตัวหนังสือในปก

OPEN-001 ยังเปิด คงสี CTA เดิมตามคำตอบเจ้าของ ไม่ขอเลือกเฉดซ้ำหรืออ้างว่าผ่าน contrast ทั้งหมด ตัวอย่างภาพ/คลิป/บทความ/โลโก้และ contacts ยังไม่ใช่ assets/data ที่ยืนยันใช้งานจริง Foundation-2-desktop ยังอ้าง Home-r8 ต้อง reconcile หลังเจ้าของรับ Home รุ่นรวมนี้แล้วค่อยขอรับเอกสาร R3 แยก

Mobile พัก UXD-002 review-5 ไม่เปลี่ยน การรับภาพ Home ไม่ปิด DSD-001 ทั้ง Task และไม่อนุมัติ Frontend/backend/deploy หรือ Task อื่น

[Manifest](review-manifest.json) · [Snapshot](editable-snapshot.json) · [Upper preservation](upper-section-preservation.json) · [Integrated equivalence](integration-equivalence.json) · [Bounds](bounds-diagnostics.json)

รายละเอียด PNG: บทความและ Footer hash ตรง accepted PNG ส่วน TikTok hash ไม่ตรงแบบ byte-for-byte แม้ schema/style ตรง เมื่อตรวจ decoded pixels เทียบ fresh native source ต่าง78ช่องสีจาก4,700,160ช่อง ต่างสูงสุด1/255; เทียบภาพเก่าต่าง87ช่อง ต่างสูงสุด1/255 เปิดดู source และภาพรวมแล้ว เก็บ [ผลเทียบพิกเซล](tiktok-pixel-comparison.json) ไว้ ไม่อ้างว่าทั้งสามภาพเท่ากันทุกพิกเซล

เจ้าของเลือก1รับภาพรวม Home Desktop-r15 ตาม [หลักฐานและ hash](owner-home-acceptance.json) เฉพาะ combined appearance R2 จากนี้ปรับ foundation ทั้ง4และขอรับ R3 แยก โดยไม่ปิด accessibility/OPEN-001 หรืออนุญาต Frontend

ภายหลังเจ้าของรับ [foundation-3-desktop](../foundation-3-desktop/owner-foundation-acceptance.json) ในขอบเขตสเปก Desktop พร้อมคงข้อค้างแล้ว ไม่เปลี่ยน Home appearance ที่รับไว้และไม่ปิด full-task/accessibility/Frontend gates
