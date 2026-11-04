# DSD-001 / TikTok-states-r3

4 พฤศจิกายน 2026 · เจ้าของตรวจรับชุดแบบ TikTok states-r3 แล้ว

หลังเห็นการปรับล่าสุด เจ้าของตอบ “โอเคครบละ” จึงบันทึกการตรวจรับความครบของแบบ TikTok states-r3 รวม host-state visuals ที่คงจากr2 ดู [หลักฐานตรวจรับ](owner-acceptance.json) ขอบเขตนี้ไม่ใช่การตรวจรับตัวเล่นที่ทำงานจริงหรือการอนุมัติ foundation/Homeทั้งชุด และยังไม่ได้สั่งเริ่มFrontend

ตามคำสั่งเจ้าของ: Playing, Paused และ Buffering ใช้ UI ของ TikTok โดยตรง เว็บไม่วาด controls/spinner/pause overlay ทับตัวเล่นในสามสถานะนี้ เก็บ schematic เดิมเป็นประวัติ ไม่ใช้เป็นแบบสำหรับ Frontend

ปรับ deck ให้มีคลิปก่อนหน้า **หนึ่งใบทางซ้าย** ของคลิปที่เลือก/กำลังเล่น คลิปหลักไม่เปลี่ยนตำแหน่ง ขนาด320×568 และพื้นที่832×688เดิม

- [คลิปแรก](v9qG0.png): ไม่มีคลิปก่อนหน้า มีpreviewถัดไปทางขวา
- [คลิปกลาง](Mc8Rp.png): ก่อนหน้า1ใบซ้าย และคลิปถัดไปทางขวา
- [คลิปสุดท้าย](cadzh.png): ก่อนหน้า1ใบซ้าย ไม่มีpreviewถัดไป และnext disabled
- [Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [ผลตรวจ](verification.json)

ใบก่อนหน้าใช้พื้นผิว/เงา/ความโปร่งแบบเดียวกับใบถัดไป แต่หันมุมเข้าหาคลิปหลัก วางหลังคลิปหลักในลำดับlayer ลูกศรซ้ายอยู่ขอบนอกเดิมทุกตำแหน่งในr3 ไม่บังภาพกลาง และmiddle/lastมีprevious previewหนึ่งใบตามคำขอ

ภาพที่นำเสนอเป็นปกขณะเลือกคลิป ปุ่มPlayที่เห็นเป็นhost triggerก่อนเปิดตัวเล่นจริง ไม่ใช่การออกแบบปุ่มเล่นของTikTok การเลือกคลิปยังไม่เปลี่ยนเป็นAutoplay; เมื่อกดเล่น ให้ใช้nativeTikTokplayerในตำแหน่งกลาง โดยpreviewด้านข้างยังอิงindexที่เลือก สถานะPlaying/Paused/Bufferingไม่ต้องมีหน้าตาcustomแยกอีก

ลำดับภาพศึกษาห้าคลิปถูกจัดให้first/middle/lastสัมพันธ์กันจริง ไม่มีคลิปเดียวกันปรากฏทั้งตำแหน่งหลักและpreviewใกล้กัน ภาพมาจากfixturesเดิมของHome ไม่ใช่TikTokURLหรือmetadataผู้สร้างจริง previewแสดงภาพนิ่งเท่านั้น; ข้อกำหนดเล่นทีละคลิปยังคงอยู่

คำสั่งแก้ก่อนตรวจรับยืนยันสองเรื่องข้างต้น จากนั้น “โอเคครบละ” ตรวจรับชุดแบบTikTokปัจจุบัน ส่วนค่าพฤติกรรมruntimeที่ยังเป็นข้อเสนอใน [state-specร่างเดิม](../tiktok-states-r1/state-spec.md) ไม่ถูกยกเป็นbusiness ruleที่อนุมัติจากการตรวจรับภาพ โดยr3มีลำดับเหนือกว่า [ภาพร2](../tiktok-states-r2/README.md) กรณีcustomUIของสามสถานะprovider

ตรวจnative sourceเทียบแล้วMainHome Oftfq, บทความและvariablesไม่เปลี่ยน ตรวจภาพfullsectionทั้ง3ตำแหน่งและPNGmiddle/lastขนาดจริง ยังไม่มีfunctionalplayerหรือanimationที่ทดสอบแล้ว

Mobileพัก, OPEN-001เปิด, ไม่แก้code/CSS/backend/deploy และยังต้องอนุมัติแบบ/เวอร์ชันก่อนFrontend

