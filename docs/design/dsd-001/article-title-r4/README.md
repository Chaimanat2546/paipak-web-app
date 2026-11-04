# DSD-001 / Article-title-r4

4 พฤศจิกายน 2026 · กติกาชื่อเรื่องรอง1บรรทัดยืนยันแล้ว · ภาพร่างรอตรวจรับ

เจ้าของขอ “งั้นเปลี่ยนเป็น 1 แล้ว... ยกเว้นอันฬหญ่” จึงเปลี่ยนเฉพาะเรื่องรองเป็น1บรรทัดแล้วใช้ellipsis คงเรื่องเด่นสูงสุด2บรรทัด กลุ่มชื่อ/คำโปรยยังตามเนื้อหา ไม่ใช้ช่องว่างบังคับแบบr1

- [ชื่อที่พอดีบรรทัด](yt4Rc.png)
- [ตัวอย่างชื่อยาวแล้วใช้ellipsis](vbHEI.png)
- [Default frame](GH7LG.png) · [Overflow frame](SdSdm.png)
- [Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [ผลตรวจ](verification.json)

คงปก16:9 safe-area layout ภาพและฟอนต์22/Regularของเรื่องรองจากr3 ใช้พื้นที่ชื่อหนึ่งบรรทัด32pxตามtypographyเดิม ร่างoverflowแสดงprefixและellipsisของชื่อศึกษาแบบยาว ซึ่งเก็บชื่อเต็มไว้ในmanifest ไม่ได้แก้ข้อมูลบทความจริง

ชื่อเต็มต้องใช้ในหน้าอ่านและaccessible nameของลิงก์ทั้งเรื่อง จุดTabยังหนึ่งจุดต่อเรื่อง ปุ่มอ่าน/ลูกศรเป็นส่วนหนึ่งของลิงก์เดียว

Pencilเป็นstaticdesign ตัวอย่างellipsisพิมพ์เป็นdisplayfixtureเพื่อให้ตรวจหน้าตา ไม่อ้างว่าได้ทำautomatictext-overflowในแอปหรือรับรองทุกชื่อไทยแล้ว ตรวจภาพnativeสองกรณีและPNGoverflowขนาดจริง ข้อความตัวอย่างอยู่ในแถวเดียวและเรื่องเด่นคงสองบรรทัด

MainHomeและvariablesไม่เปลี่ยน ยังไม่ตรวจรับบทความ/motionทั้งชุด ไม่เริ่มFrontendหรือTaskอื่น Mobileพัก OPEN-001เปิด

