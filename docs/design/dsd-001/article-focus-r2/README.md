# Article-focus-r2

5 พฤศจิกายน 2026 · เปรียบเทียบ focus ที่ไม่ล้อมกรอบการ์ด · รอเจ้าของเลือก

หลังนำเสนอสามแบบ เจ้าของถามถึงแบบกดแล้วเด้ง จึงเตรียม [Article-press-r1](../article-press-r1/README.md) เป็นตัวอย่าง press feedback แยกต่างหาก คำถามนี้ยังไม่เลือก focus alternative และการเด้งไม่แทน cue ที่คงอยู่ระหว่าง keyboard focus

เจ้าของไม่ชอบกรอบล้อมทั้งองค์ประกอบใน Article-focus-r1 และให้หาแบบอื่น จึงปิดการแสดง review roots ของกรอบเดิมและคงภาพ/snapshots เป็นประวัติ ไม่เปลี่ยน motion หรือภาพปกติที่รับแล้ว ดู [คำขอแก้](owner-revision-request.json)

## ตัวอย่างที่ศึกษาก่อนทำแบบ

[ICDS](https://design.sis.gov.uk/styles/focus-indicator/) ใช้เส้นใต้หนาสำหรับลิงก์ จึงนำหลักการเน้นแนวล่างมาทำตัวเลือกแถบใต้ข้อมูลให้ขนาดเหมาะกับ story ขนาดใหญ่ ไม่ยกความหนาเดิมจากลิงก์ข้อความมาใช้โดยไม่พิจารณาขนาด target

[GOV.UK](https://design-system.service.gov.uk/get-started/focus-states/) ใช้พื้นหลังข้อความร่วมกับแนวล่างเพื่อแยก focused link ชัด ตัวเลือกไฮไลต์ชื่อใช้หลักเน้นข้อความ แต่เปลี่ยนเป็น Navy/White ของ papaipak ไม่ยกสีเหลือง/ดำมาเปลี่ยนแบรนด์ ดู [ภาพตัวอย่างต้นทาง](https://design-system.service.gov.uk/get-started/focus-states/link-focus.png)

[W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) อธิบายว่าตัวบ่งชี้ไม่จำเป็นต้องเป็นเส้นรอบรูปเสมอไป และยกการเปลี่ยนสีพื้นที่เป็นทางเลือกเมื่อคอนทราสต์เพียงพอ จึงเสนอพื้นที่ข้อมูล Navy เป็นตัวเลือกที่สาม นี่เป็นการประยุกต์เพื่อศึกษา ไม่ได้สรุปว่าการดัดแปลงนี้ผ่านเกณฑ์ทั้งหมดโดยอัตโนมัติ เป้าหมายโครงการคือ WCAG 2.2 AA; ไม่เพิ่ม AAA เป็นเงื่อนไขใหม่จากตัวอย่างนี้

## สามตัวเลือก

| ชื่อ | สิ่งที่เปลี่ยนเฉพาะเมื่อมี focus | Native root |
| --- | --- | --- |
| แถบใต้ข้อมูล | Navy 10px ใต้แผงอ่าน คงพื้นขาว รูปและข้อความเดิม | ppGZS |
| ไฮไลต์ชื่อ | พื้น Navy ตามข้อความชื่อแต่ละบรรทัด ตัวอักษรขาว ไม่เปลี่ยนแผงทั้งใบ | Ujklx |
| พื้นข้อมูลเข้ม | แผงอ่าน Navy ชื่อ/หมวดขาว เนื้อหา Light Blue ปุ่มลูกศร Pink พร้อมลูกศร Navy | qV3Kf |

ทั้งสามไม่ล้อมกรอบภาพหรือการ์ด ไม่ทำให้ layout ขยับ และคงรูป/ข้อความ/ขนาดของ ready state เดิม ตัวอย่างในแชตเป็น carousel ของเรื่องเด่นเพียงเรื่องเดียว ใช้ asset จาก native export เดิมร่วมกันเพื่อให้เทียบพื้นที่ที่ใช้บอก focus ได้ชัด หากเลือกแล้วจึงปรับใช้กับเรื่องรองและลิงก์ทั้งหมดและตรวจความสอดคล้องก่อนรวม Home

รูปใน carousel เป็น study asset และข้อความเป็น mock body ตามขั้นงานที่เจ้าของยืนยัน ไม่เชื่อมหน้าอ่าน มี optional host control เปิด/ปิดสถานะโฟกัสเพื่อเทียบกับภาพปกติ การจัดให้พอดีขนาด preview ไม่ใช่ Mobile acceptance

## หลักฐาน

เปิด native PNG ทั้งสามที่ 1440px แล้ว เห็นทั้งแผงและข้อความครบ ไม่มีกรอบล้อมเรื่องเด่นในตัวเลือกใหม่ รูปและส่วนอื่นของ section คงเดิม ตรวจ script syntax ด้วย `node --check` และตรวจ fragment/inline assets/ขนาดจาก source การเปรียบเทียบสีจาก hex อยู่ใน manifest ไม่ใช่การรับรอง keyboard, focus area, screen reader หรือ browser runtime ทั้งหมด

[ภาพแถบล่าง](ppGZS.png) · [ภาพไฮไลต์ชื่อ](Ujklx.png) · [ภาพพื้นข้อมูลเข้ม](qV3Kf.png)

[Manifest](review-manifest.json) · [Native snapshots](editable-snapshots.json) · [Bounds diagnostics](bounds-diagnostics.json)

เก็บ prototype ของ motion r7/r8 ที่เจ้าของรับไว้ตาม hash เดิม ส่วนกรอบ keyboard focus ในตัวอย่างเก่าไม่ใช่ตัวเลือกที่รับแล้ว และจะใช้แบบที่เลือกจากรอบนี้ในการรวมงาน ไม่ย้อนยกทั้ง motion approval เป็นการรับกรอบเดิม

Main Home, approved source states, Footer, TikTok และ variables ไม่เปลี่ยน ไม่เพิ่ม shared token หรือ supplementary font ไม่เริ่ม Frontend/backend/deploy Mobile พัก OPEN-001 เปิด รวมถึงกรณี Pink ในตัวเลือกนี้ไม่ถือว่าแก้ white-on-Pink CTA ของประเด็นนั้น

เจ้าของเลือกแบบ 3 พื้นข้อมูลเข้มพร้อมให้ค่อย ๆ เปลี่ยนสี ดู [Article-focus-r3](../article-focus-r3/README.md) ตัวเลือกไม่ค้างแล้ว ส่วนจังหวะ 500ms เป็นข้อเสนอรอตรวจ
