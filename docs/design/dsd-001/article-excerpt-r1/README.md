# DSD-001 / Article-excerpt-r1

4 พฤศจิกายน 2026 · คำโปรยเรื่องเด่น/เรื่องรองสูงสุด2บรรทัดยืนยันแล้ว · ภาพร่างรอตรวจ

เจ้าของเลือก1ต่อคำถามเรื่องคำโปรยของเรื่องเด่น จากนั้นเลือก1ต่อคำถามเรื่องคำโปรยของเรื่องรองแยกอีกครั้ง จึงจำกัดทั้งสองประเภท2บรรทัดแล้วellipsis โดยไม่จองบรรทัดว่างสำหรับข้อความสั้น ตัวอย่างเรื่องรองเดิมมี2บรรทัดอยู่แล้วจึงไม่แก้ภาพจากการยืนยันกติกาครั้งหลัง

- [คำโปรยสั้น](W0z7U.png) · [คำโปรย2บรรทัด](AEeDw.png)
- [แผงเรื่องเด่นขนาดจริง](ZAJPG.png)
- [Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [ผลตรวจ](verification.json)

ในPencilมีshort26pxและoverflow52pxตามMitr16/line-height1.6เดิม แผงWhiteและbackingขยายตามข้อความจริงโดยคงlayoutซ้อนเดิม ไม่เพิ่มช่องว่างใต้คำโปรยสั้น

คงชื่อเด่น2/รอง1บรรทัด ปก16:9และsafe-area MainHome/variablesไม่เปลี่ยน คำโปรยยาวเป็นfixtureศึกษาและellipsisในPencilเป็นdisplaytext ไม่อ้างว่าทำautomaticclampในแอป ชื่อและคำโปรยเต็มต้องเก็บไว้ในข้อมูล/หน้าอ่าน

ตรวจnative renderสองกรณีและPNGแผงoverflowขนาดจริง ไม่มีbrowserclamp/keyboard/screenreader test ยังไม่ตรวจรับarticleversion ไม่เริ่มFrontend Mobileพัก OPEN-001เปิด

