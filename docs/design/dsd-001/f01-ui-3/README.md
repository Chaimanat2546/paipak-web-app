# papaipak · F01-ui-3

4 พฤศจิกายน 2026 · แบบ static ใน Pencil · รับ appearance ของ Home Desktop-r8 แล้ว; รุ่นรวม F-01 และ final foundation ยังรอตรวจรับ

ผลการตรวจ Home อยู่ใน [บันทึกทีละส่วน](home-guided-review/README.md) และ [Home Desktop-r8](home-guided-review/home-desktop-r8/README.md) เจ้าของรับหน้าตารวมพร้อม Footer-r3 และคง CTAเดิม โดย OPEN-001ยังเปิด Mobileยังพัก

เอกสารทั้ง4ชิ้นของ DSD-001 จัดให้ตรงกับ A และข้อสรุปล่าสุดแล้วใน [foundation-2-desktop](../foundation-2-desktop/README.md) ตามคำสั่งเจ้าของ Final foundation approval ยัง pending; การรับ Homeไม่อนุมัติหน้าอื่นหรือFrontend ประวัติ Results/search ด้านล่างยังเก็บไว้ตามขอบเขตแต่ละรุ่น

ขอบเขตตรวจต่อจากนี้: **Desktop เท่านั้น** ตามคำสั่งเจ้าของให้พัก Mobile ไว้ก่อน ปัจจุบันเป็น [Results-upper-r3](results-upper-r3/README.md) ที่ปรับเฉพาะส่วนบนต่อจาก Results-r2 เก็บ Mobile ไว้ที่ Results-r2 และรอเจ้าของให้กลับมาตรวจต่อ การพักนี้ไม่ถือเป็นการตรวจรับแบบมือถือ

หน้าที่กำลังตรวจ: [Results-r2](results-r2/README.md) เจ้าของสั่ง “จัดการ” หลัง [Results review-1](results-review-1/README.md) จึงปรับการ์ดให้เข้าชุดกับ Home ย่อค้นหาบนมือถือ และแก้เลขหน้าในหกสถานะ Desktop/Mobile แล้ว รุ่นแก้ยังรอเจ้าของตรวจรับ ไม่อนุมัติ Home ที่ตรวจไปก่อนหน้า

ส่วนบน Desktop ล่าสุด: เจ้าของให้ทำส่วนบนก่อน จึงรวมบริบทพื้นที่/จำนวนบ้าน, แถบค้นหา และคำแนะนำเป็น [Results-upper-r3](results-upper-r3/README.md) ทั้งสาม Desktop state รูปบ้านแรกขึ้นจาก y=531 เป็น y=364 ตัวกรองและการ์ดไม่ได้เปลี่ยนในรอบนี้

กำลังตรวจช่องค้นหาตั้งแต่ Home: [Search-states-r4](search-states-r4/README.md) เพิ่มภาพเปิดสถานที่ วันเข้าพัก และผู้เข้าพักบน Home/Results รวมกรณีค้นหาว่างและช่วงวันที่ไม่ครบ เก้าภาพกับ overview หนึ่ง board เป็น static Desktop รอเจ้าของตรวจรับ หน้าหลักและ Mobile เดิมคงไว้ ยังไม่ได้ทดสอบปุ่มทำงานจริง

ข้อเสนอปุ่มในแผงค้นหา: [Search-confirmation-study-r1](search-confirmation-study-r1/README.md) เทียบ A “เสร็จสิ้น”, B “ใช้จำนวนนี้/ใช้วันที่นี้” และ C ไม่มีปุ่มบันทึก รอเจ้าของเลือกก่อนเปลี่ยน behavior ในชุดหลัก

ช่องค้นหารุ่นตรวจล่าสุด: [Legacy-search-r5](legacy-search-r5/README.md) ตามคำสั่งให้นำจากโค้ดเดิม ใช้ input สถานที่บนแถบหลัก ปฏิทิน Desktop สองเดือน และช่องตัวเลขคนรวม/สัตว์เลี้ยงโดยไม่มีบันทึกหรือล้างจำนวน มีแปด contextual scenes และ overview ใหม่ คงแบบหลัก/งานก่อนหน้าและ Mobile ไว้ทั้งหมด ยังรอตรวจรับและไม่ได้ทดสอบปุ่มจริง

เจ้าของยืนยันชื่อ **papaipak** และเลือกไอคอนจาก Header-icons-r4 พร้อมสั่งให้ปรับทุกจุดที่มีภาษา/LINE รวมถึงชื่อในแบบและเอกสาร รอบนี้ครอบคลุม canvas F-01 ที่มีอยู่, supporting states และข้อความชื่อแบรนด์บนบอร์ดที่ยังแสดงอยู่ ไม่มีการเริ่ม Task อื่นหรือ Frontend

## สิ่งที่ปรับ

- เปลี่ยนชื่อใน canvas 67 ข้อความ รวม wordmark 62 จุดที่ Header/Footer/บอร์ดตัวอย่าง และข้อความติดต่อ/หมายเหตุที่อ้างแบรนด์
- ตรวจรายการภาษา 44 ป้ายและ LINE OA 22 ป้ายครบ 66 จุด ทุกป้ายภาษาใช้ธงไทย/UK วงกลม 22px และ LINE OA ใช้ PNG ทางการสีเดิม 32px บน Desktop, 40px ในเมนู Mobile ตามขั้นต่ำของคู่มือ LINE ไม่มี EN แบบตัวอักษรหรือ message-circle ตัวแทน LINE เหลือใน canvas
- ชื่อปัจจุบันใน README, AGENTS, governance, task/manifest และเอกสารข้อกำหนดใช้ papaipak เก็บพาธจริง ชื่อไฟล์ technical identifiers, source URLs, คำพูดอ้างอิง และ JSON/ภาพ snapshot รุ่นเก่าไว้ตามต้นฉบับ
- แก้ลิงก์ Wireframe ในเอกสารให้ตรงไฟล์ `docs/design/uxd-002/papaipak-wireframe.pen` ที่มีอยู่ เป็นการแก้ลิงก์เท่านั้น ไม่เปิดแก้หรืออนุมัติ UXD-002

เจ้าของยืนยันโดเมน **papaipak.com** เมื่อ 4 พฤศจิกายน 2026 ด้วยคำตอบ “papaipak.com — เปลี่ยนให้ตรงชื่อเว็บ” เอกสารปัจจุบันใช้ชื่อแบรนด์ papaipak และโดเมนนี้ ชื่อ directory `paipak-web-app` และชื่อแพ็กเกจ/โค้ด legacy ไม่ได้เปลี่ยนจากคำสั่งออกแบบรอบนี้

## ภาพและไฟล์แก้ไขได้

[Pencil source](C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen) · Main Home `A1ks07` ที่ 0,0 · Utility preview `IfMTi` ที่ 0,-3088 · Mobile menu `E3Tu4`

| หน้าหรือสถานะ | Desktop | Mobile |
|---|---|---|
| Home | [ภาพ](screens/A1ks07.png) | [ภาพ](screens/PiA4h.png) |
| Results | [ภาพ](results-upper-r3/screens/osaIa.png) | [ภาพ](results-r2/screens/L8ev6.png) |
| Detail | [ภาพ](screens/qcEOf.png) | [ภาพ](screens/S3VaWy.png) |
| Applied filters | [ภาพ](results-upper-r3/screens/NmzZ4.png) | [ภาพ](results-r2/screens/YQRxl.png) |
| Pagination page 2 | [ภาพ](results-upper-r3/screens/HpR7z.png) | [ภาพ](results-r2/screens/P62IV.png) |
| ภาษา/ติดต่อ/เมนู | [บอร์ดสถานะ](screens/h9ExoH.png), [ใต้ Header](review/IfMTi.png) | [เมนูเปิด](screens/E3Tu4.png) |

โฟลเดอร์ [screens](screens/) เก็บ baseline F01-ui-3 เดิมครบ 29 review groups ส่วนหกหน้า Results ล่าสุดและ state board ให้ใช้ลิงก์ Results-r2 ด้านบน ดู [snapshot ก่อนปรับชื่อ/ไอคอน](before-snapshot.json), [full base snapshot](editable-snapshot.json), [Results revision snapshot](results-r2/after-snapshot.json), [ผลตรวจ baseline](verification.json) และ [ตรวจไอคอนรายจุด](placement-checks.json)

ภาพตรวจ wordmark ครบ 62 ตำแหน่ง: [ชุด 1](wordmarks-sheet-1.png), [ชุด 2](wordmarks-sheet-2.png) ภาพเหล่านี้ crop บริเวณชื่อจาก native export เพื่อให้อ่านเทียบได้ ข้อความรองอาจถูกตัดใน sheet ให้ใช้ PNG รายจุดหรือภาพเต็มเมื่อตรวจ layout

ภาพตรวจแถวภาษา/LINE: [ชุด 1](icon-rows-sheet-1.png), [ชุด 2](icon-rows-sheet-2.png) มี 58 แถว เพราะบางแถวรวมหลายป้ายไว้ด้วยกัน

## ผลตรวจและขอบเขตการอนุมัติ

ตรวจข้อมูล native แล้ว Hero, category shortcuts และแถวบ้าน 7 หมวดใน Home-r7 ตรงกับก่อนปรับทั้งหมด การเปลี่ยนข้อความนอกชื่อแบรนด์มีเพียงหมายเหตุรุ่นบนบอร์ดสถานะ ตรวจภาพ Header Desktop, Home Mobile, Footer, เมนู Mobile, บอร์ด utility และ sheet ทุกชุดแล้ว

ตรวจด้วย `validate-registry.py` และ `validate-handoff.py` หลังปรับแล้วผ่านทั้งคู่: 110 decision records, 14 design tasks, ไม่มี missing references หรือ dependency cycles ผลนี้ไม่แทนการอนุมัติแบบ ดู [รายการภาพรุ่นใหม่](review-manifest.json), [การปรับชื่อในเอกสาร](document-reconciliation.json) และ [ข้อความก่อนแก้](before-document-text.json)

เจ้าของเลือกไอคอนและสั่ง rollout แล้ว การอนุมัติรุ่น F01-ui-3 ทั้งชุดยังรอแยกต่างหาก OPEN-001 ยังเปิด ไม่ทดสอบการเปลี่ยนภาษาจริง, LINE/โทร, keyboard หรือ backend ใน Pencil และยังไม่มี Frontend/deploy การทำงานต่อใน Frontend ต้องอนุมัติแบบ/เวอร์ชันและอนุญาตอีกขั้น

แหล่งไอคอน: [LINE ทางการ](https://www.line.me/en/logo), [flag-icons / UK SVG / MIT](https://github.com/lipis/flag-icons/blob/main/flags/1x1/gb.svg) ใช้ไฟล์ต้นทางที่เก็บไว้ใน [Header-icons-r4](../f01-ui-2/header-icons-r4/README.md)


Home Desktop รุ่นรวมล่าสุด: [Home Desktop-r8](home-guided-review/home-desktop-r8/README.md) รวมFooterที่เจ้าของรับแล้วและแผงภาษา/ติดต่อขนาดล่าสุด รอรับภาพรวมappearanceเท่านั้น OPEN-001และข้อค้างตามแผนยังเปิด ไม่ใช่final task/versionหรือFrontend approval
