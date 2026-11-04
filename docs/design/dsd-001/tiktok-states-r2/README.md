# DSD-001 / TikTok-states-r2

4 พฤศจิกายน 2026 · ร่าง Desktop รอตรวจรับ

คำสั่งล่าสุดอยู่ใน [TikTok-states-r3](../tiktok-states-r3/README.md): Playing/Paused/Bufferingใช้TikTokจริง และmiddle/lastมีคลิปก่อนหน้าหนึ่งใบทางซ้าย ภาพcustom playbackและตำแหน่งเดิมในr2เป็นประวัติ ส่วนhost statesอื่นยังคงรอตรวจรับ

เจ้าของส่งคืน r1 ด้วย “ไม่สวยเลยมันดูไม่เข้ากับเว็บ” รอบนี้ปรับให้เห็น state ภายใน section เต็มและข้างบทความจริง โดยยึด direction A และองค์ประกอบ Home เดิม

[เริ่มดู TikTok ต่อกับบทความ](cmquC.png) · [สถานะโหลด](sQ3Y4.png) · [สถานะผิดพลาด](B5TkkF.png)

## สิ่งที่เปลี่ยน

ภาพบ้านยังนำสายตาระหว่างโหลดและเกิดปัญหา ยกเลิกการแทนทั้ง portrait ด้วยแผง Light Blue ใช้แผงสีขาวขนาด296×204 ซ้อนใกล้ขอบล่างแบบเดียวกับ reading panel ของบทความ มีเส้นน้ำ Pink จาก pathเดิม หัวข้อ Mitr Regular และ action Navy/White44px

Loading ใช้พื้นผิววงกลม56px เดียวกับ Play และข้อความเล็กบนภาพ ไม่มี scrim ทึบทั้งใบ กรณีภาพปกโหลดไม่ได้เพิ่มภาพ state แยก ใช้พื้น Navy และเส้นน้ำเดิม โดยคลิปยังเล่นได้

ข้อกำหนดพฤติกรรมร่างใน [r1 state-spec](../tiktok-states-r1/state-spec.md) คงเดิม ส่วน visual ของ r2 ใช้แทน r1; ข้อเสนอ no-wrap, pauseนอกจอ, ไม่เล่นคลิปใหม่เอง และยุบส่วนเมื่อไม่มีคลิปยังรอเจ้าของตรวจรับ การซ่อน TikTok ใช้ภาพส่วน Luxury ต่อกับบทความจริง ไม่ใช้ diagram กล่องแทนหน้าเว็บ

## ภาพตรวจแต่ละสถานะ

| สถานะ | ภาพเต็ม section |
|---|---|
| พร้อมเล่น | [Ready](JihO7.png) |
| เตรียมตัวเล่น | [Loading](KIDC4.png) |
| เล่นอยู่ | [Playing](y8Gp9.png) |
| หยุดชั่วคราว | [Paused](ZPna1.png) |
| Buffering | [Buffering](kXsfW.png) |
| เล่นจบ | [Ended](y2IlT.png) |
| เลือกคลิปกลาง | [Middle](tnlzw.png) |
| คลิปสุดท้าย | [Last](y6Lsb.png) |
| โหลดไม่สำเร็จ | [Retry](UsmNk.png) |
| คลิปไม่พร้อม | [Unavailable](Rtmrv.png) |
| กำลังเตรียมรายการ | [List loading](yRzQ8.png) |
| ภาพปกไม่พร้อมแต่คลิปเล่นได้ | [Cover fallback](x1IS3.png) |
| ไม่มีคลิป | [Actual adjacent Home sections](Eat45.png) |

[Default/Hover/Pressed/Focus บนภาพบ้านจริง](vBjZ3.png) · [manifest](review-manifest.json) · [native snapshot](editable-snapshot.json) · [ผลตรวจ](verification.json) · [critique](critique.md)

มี13สถานะและ15review roots รวม context และ control feedback Main Home Oftfq, บทความ jWUz7 และ variables ไม่เปลี่ยนตาม source comparison เก็บ r1 เป็นประวัติที่ถูกส่งคืน ไม่บันทึกเป็นงานอนุมัติ

Provider region ที่เล่น/หยุด/จบเป็น schematic เช่นเดิม ไม่ได้ยืนยันหน้าตาจริงหรือสิทธิ์ปรับ controls/branding ภาพบ้านและเวลาเป็น study fixtures ไม่ใช่คลิปที่เชื่อมแล้ว เส้นขอบPinkและ CTAเดิมคงอยู่; OPEN-001ยังเปิด ไม่มีการแก้ shared tokens

Mobileยังพัก ไม่มี application code, iframe integration, Backend หรือ deploy ชุดนี้ยังต้องตรวจรับ design/versionก่อน Frontend

