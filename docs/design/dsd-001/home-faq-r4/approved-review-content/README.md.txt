# Home FAQ-r4 · หัวข้ออยู่บน รายการเต็มแนว

5 พฤศจิกายน2026 (Asia/Bangkok) · Home Desktop-r19 draft · รอเจ้าของตรวจ

เจ้าของเลือก3ให้ปรับการจัดวางจากFAQ-r3 ดู [คำขอแก้](owner-layout-revision.json) รอบนี้เสนอให้หัวข้ออยู่เหนือรายการและใช้พื้นที่แนวนอนของHome ลดพื้นที่ว่างซ้าย โดยคงภาษาภาพที่ยึดHomeเดิม ไม่ตีความคำตอบ3ว่าอนุมัติFAQ-r3หรือระบุlayoutใหม่ไว้อย่างละเอียดแล้ว

## แบบและภาพ

| แบบ | Native | ภาพ |
| --- | --- | --- |
| defaultปิดทุกข้อ | `P5cic` | [closed](P5cic.png) |
| เปิดหนึ่งคำตอบ | `O6RB2r` | [open](O6RB2r.png) |
| ข้อความยาว | `qluxT` | [long](qluxT.png) |
| บทความ → FAQปิด → Footer | `x7KMb` | [closed context](x7KMb.png) |
| บทความ → FAQเปิด → Footer | `zOUR2` | [open context](zOUR2.png) |
| Home Desktop-r19 draft | `ILpa2` | [ทั้งหน้า](ILpa2.png) |
| ไม่มีรายการพร้อม | ใช้ `Evcv7` | [contextเดิมที่ไม่มีFAQ](../home-faq-r1/Evcv7.png) |

## การจัดวางที่เปลี่ยน

- section1440px/padding40บน56ข้าง72ล่าง;หัวข้อและคำเกริ่นอยู่บน gap12 แล้วเว้น24ก่อนกลุ่มคำถาม
- กลุ่มคำถามใช้content1328px ไม่มีคอลัมน์หัวข้อซ้ายแยก แผงWhiteกว้าง1280px inset24pxจากpool backing จัดแนวข้อความเริ่มx104เหมือนแผงอ่านบทความ
- ยังคงหัวข้อ36/400 คำถาม22/400 คำตอบ18/400เป็นMitrทั้งหมด พื้นWhite/ขอบโค้งLight Blue/ไอคอนNavyตามr3 ไม่เปลี่ยนสีหรือเพิ่มฟอนต์
- แผงradius20/เงาเดิมจากบทความ;กรอบนอกradius24และgeometryขอบสระเดิม คำตอบมีmeasure904pxเพื่อไม่ลากข้อความตามความกว้างทั้งหมด
- ความสูงfixtureclosed594/open636/long846pxเป็นผลจากเนื้อหา ไม่ใช้fixedheightในระบบจริง จออื่นยังไม่รับรอง

พฤติกรรมและเนื้อหาคงตาม [G0ที่รับแล้ว](../home-faq-g0-approval.json): เนื้อหาจากหลังบ้าน/fixturesรอบออกแบบ เปิดทีละข้อ defaultปิดทั้งหมด ไม่มีรายการพร้อมซ่อนทั้งsection ไม่เพิ่มFAQ index/ปุ่มดูทั้งหมด/CMS/APIหรือนโยบายธุรกิจใหม่

## หลักฐานและขอบเขต

[Verification](verification.json) ยืนยัน12ส่วนเดิมของHome-r16ตรงกับHome-r19draftทั้งหมด และคำตอบ/minusในclosed/open/longเป็น0/1/1 ดู [editable states](editable-states.json), [โครงสร้างHome](home-structure.json) และ [manifest](review-manifest.json)

ตรวจภาพopenเต็ม1440pxและภาพcontextแล้ว ไม่เห็นข้อความชนcontrolsหรือถูกตัด ตรวจเป็นstatic native design ไม่ใช่browser/keyboard/motion/backend test FAQ-r3และHome-r18ไม่ได้รับอนุมัติจากคำขอแก้layout; Home-r16ยังเป็นฐานที่รับล่าสุด

FAQ-r4/Home-r19รอเจ้าของรับเวอร์ชันแยก Mobileพัก OPEN-001/ข้อค้างเดิมคงไว้ ไม่มีFrontend/backend/deploy/Taskอื่น และยังไม่commit/pushรอบนี้
