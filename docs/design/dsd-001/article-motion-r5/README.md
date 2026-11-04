# DSD-001 / Article-motion-r5

4 พฤศจิกายน 2026 · ร่างภาพและmotionรอตรวจรับ

เจ้าของชี้แจงว่ารูปปกบทความไม่จำเป็นต้องเป็นภาพบ้าน และอาจมีตัวหนังสือ/องค์ประกอบสำคัญในภาพ จึงต้องแสดงครบ ห้ามzoomหรือcropข้อสรุปนี้ใช้แทนข้อเสนอcrop/focal-pointที่ไม่ได้เลือก

## กติกาปกที่ยืนยันและการปรับร่าง

- ใช้ความกว้างตามlayoutและความสูงตามสัดส่วนภาพจริง ไม่บังคับ16:9หรือ1:1จนตัดภาพ
- แสดงภาพครบด้วยheight:autoและcontain ไม่ใช้cover และไม่มีscaleในmotionทั้งเรื่องเด่น/เรื่องรอง
- ย้ายแผงข้อความลงใต้ภาพ ไม่ซ้อนบังตัวหนังสือบนปก และไม่ตัดมุมภาพปกด้วยrounded clipping
- Hoverยังยก/เอียงกรอบเรื่องเด่นไปด้านที่แก้ในr4 ข้อความตรงและยกตาม ไม่มีการขยายภาพ ส่วนการเคลื่อนของข้อความ/ลูกศรเรื่องรองคงเดิม
- Reduced motionหยุดการเคลื่อนแต่คงเนื้อหาและfeedbackที่อ่านได้

ไม่มีรูปปกจริงที่เจ้าของส่งมาสำหรับทดสอบหลายสัดส่วนในรอบนี้ ภาพตัวอย่างยังเป็นstudy fixtureเดิม ไม่ใช้เป็นเหตุผลบังคับว่าบทความต้องมีภาพบ้าน

## หลักฐาน

Preview: C:/Users/chaym/.codex/visualizations/2026/11/03/01a1a0a6-78fc-7dd3-9a64-5c1d42b618ee/papaipak-article-motion-r5.html

JPEGthumbnailเรื่องรองในpreviewเดิมเคยexportผ่านกรอบจัตุรัสจึงถูกcropไปแล้ว รอบนี้อ่านmetadataไฟล์ภาพต้นฉบับและexportใหม่ผ่านPencilMCPตามสัดส่วนเต็ม1408×768ที่ขนาด704×384 จึงไม่ใช้thumbnailที่ถูกcropมาอ้างว่าเห็นภาพเต็ม ไฟล์ต้นฉบับนามสกุล.pngเหล่านี้มีข้อมูลเป็นJPEGจริง ตรวจformatก่อนอ่านขนาดแล้ว

เก็บassetboard YWTf5 แยกในPencilและ [native asset snapshot](asset-snapshot.json) โดยMainHome/บทความต้นฉบับและvariablesไม่เปลี่ยนตามsource comparison การexportย่อJPEGนี้ใช้เฉพาะภาพศึกษาของpreview ไม่กำหนดasset pipelineหรือคุณภาพปกจริง

ตรวจsyntaxJavaScriptผ่าน ตรวจsourceว่าไม่มีimage-scale/cover/negative marginซ้อนปกและยังมีReduced motion ยังไม่ตรวจbrowserhover/keyboard/text-in-imageจริง ข้อจำกัดbrowserเดิมยังคงอยู่ ดู [manifest](review-manifest.json)

คำขอนี้ยืนยันการแสดงภาพปกครบ ไม่ใช่การตรวจรับmotion/บทความทั้งชุด ชื่อยาว กรณีไม่มีภาพ/ข้อมูลไม่ครบ และloading/errorยังค้าง Mobileพัก OPEN-001เปิด ไม่แก้applicationcodeหรือเริ่มFrontend
