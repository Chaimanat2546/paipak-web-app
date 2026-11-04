# DSD-001 / Article-motion-r6

4 พฤศจิกายน 2026 · ร่างรอตรวจรับ

เจ้าของส่งคืนlayoutของr5 โดยต้องการจัดแบบเดิมและแก้เฉพาะสัดส่วนปก จึงคืนกรอบเรื่องเด่นแนวนอน กรอบเรื่องรองจัตุรัส และแผงข้อความWhiteที่ซ้อนด้านล่าง ไม่ใช้ความสูงการ์ดตามรูปแบบr5

แก้เฉพาะfitภายในกรอบให้containภาพต้นฉบับครบ ไม่crop/zoom ภาพที่สัดส่วนไม่ตรงมีพื้นLight Blueในกรอบแทนส่วนที่ขาด กรอบเรื่องเด่นสงวนพื้นที่ด้านล่าง60pxสำหรับบริเวณแผงข้อความซ้อน48pxพร้อมช่อง12px เพื่อไม่ใช้แผงข้อความบังปก Padding8pxช่วยไม่ให้การclipมุมกรอบตัดตัวหนังสือริมภาพ ค่าเหล่านี้เป็นข้อเสนอเฉพาะpreview ไม่ใช่sharedtokensที่อนุมัติ

ยังใช้ภาพเต็มจากassetboardในr5 ไม่มีการแก้pixelของภาพต้นฉบับ คงmotionยก/เอียงด้านที่แก้แล้ว ไม่มีscaleภาพหรือกรอบ และคงพื้นที่กดทั้งเรื่อง

Preview: C:/Users/chaym/.codex/visualizations/2026/11/03/01a1a0a6-78fc-7dd3-9a64-5c1d42b618ee/papaipak-article-motion-r6.html

เก็บ [r5](../article-motion-r5/README.md) เป็นประวัติlayoutที่เจ้าของส่งคืน ดู [manifest](review-manifest.json) สำหรับscope ตรวจsourceเรื่องfixedframes/contain/พื้นที่เว้น/การซ้อนแล้ว ยังไม่ตรวจbrowserภาพปกจริงหรือสัดส่วนอื่น runtimeยังไม่รับรอง

การคงlayoutเดิมเป็นคำสั่งเจ้าของ แต่ยังไม่ตรวจรับappearanceของfitใหม่นี้ ชื่อยาวและmissing-data policiesยังค้าง MainHome/Pencilต้นฉบับและapplicationcodeไม่เปลี่ยน ไม่เริ่มFrontend Mobileพัก OPEN-001เปิด
