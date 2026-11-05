# Home FAQ-r3 · ใช้ภาษาภาพเดียวกับHomeที่รับไว้

อัปเดต: เจ้าของเลือก3ให้ปรับการจัดวางต่อ ยังไม่รับรุ่นนี้ ดู [FAQ-r4 / Home Desktop-r19 draft](../home-faq-r4/README.md) ที่เสนอหัวข้ออยู่บนและรายการเต็มแนว โดยคงstyleของHomeตามคำขอเดิม

5 พฤศจิกายน2026 (Asia/Bangkok) · ร่างปรับตามคำขอ “ขอแบบให้ style เข้ากับเว็บหน่อย” · รอเจ้าของรับแบบ

ใช้Home Desktop-r16เป็นแหล่งอ้างอิงโดยตรง ไม่เลือกภาพลักษณ์แบรนด์ใหม่หรือเริ่มG1ใหม่ FAQยังใช้ [G0เดิม](../home-faq-g0-approval.json) และ [คำขอปรับ](owner-alignment-request.json) เนื้อหาในแบบเป็นfixturesเพื่อจัดวาง ไม่ใช่คำถามจริงที่ล็อกแทนหลังบ้าน

## สิ่งที่ปรับให้ตรงHome

| ภาษาภาพที่มีอยู่ | ใช้กับFAQรุ่นนี้ |
| --- | --- |
| หัวข้อบทความ `bRQsh` | Mitr36/400/line-height1.35 และขอบซ้าย56pxเหมือนกัน ไม่ใช้หัวข้อ40/56pxของร่างก่อน |
| Floating reading panel `ZTUZY` | แผงWhite radius20 เงา#072D591F offset0/8 blur24 แยกเป็นชั้นเดียว ไม่ใส่กล่องฟ้าให้ทุกคำถาม |
| ขอบสระFooter `TAE49` และ backingบทความ | ใช้geometryเดิมเป็นฐานLight Blueใต้แผงFAQ;ขอบนอกradius24เหมือนกรอบภาพเดิม ไม่วาดลายแบรนด์ใหม่ |
| ปุ่มวงกลมNavyในบทความ | ข้อเปิดใช้วงNavy44px/ไอคอนminusขาว20px ข้อปิดเป็นplusNavy พื้นที่44px |
| คอลัมน์narrativeและstageของHome | ซ้าย448 +gap48 +ขวา832 ภายในcontent1328px |
| Typographyเรื่องรอง/เนื้อหา | คำถามMitr22/400/1.5 คำตอบ18/400/1.65 และข้อความรอง#53657C |

พื้นหลักคงWhite ปล่อยFAQเป็นส่วนอ่านต่อก่อนFooter ไม่สร้างNavybandเต็มsectionหรือแผงกลางLight Blueขนาดใหญ่แบบตัวเลือกที่ยังไม่ได้เลือก สีแบรนด์ไม่เปลี่ยน ไม่มีWhite/Pinkใหม่หรือฟอนต์เสริม

## ภาพและPencil

| แบบ | Native ID | ภาพ |
| --- | --- | --- |
| ปิดทุกข้อเริ่มต้น | `CLWR9` | [closed](CLWR9.png) |
| เปิดหนึ่งคำตอบ | `D3TyXR` | [open](D3TyXR.png) |
| คำถามและคำตอบยาว | `T92l9t` | [long](T92l9t.png) |
| บริบทบทความ → FAQปิด → Footer | `qZAuj` | [closed context](qZAuj.png) |
| บริบทบทความ → FAQเปิด → Footer | `DchY5` | [open context](DchY5.png) |
| Home Desktop-r18 draft | `twDNW` | [ทั้งหน้า](twDNW.png) |
| ไม่มีข้อมูลพร้อม | ใช้บริบทเดิม `Evcv7` | [ไม่มีFAQ](../home-faq-r1/Evcv7.png) เพราะซ่อนทั้งsectionและspacingตามG0 ไม่มีหน้าemptyใหม่ที่ต้องออกแบบต่างจากเดิม |

ห้าคำถามเป็นข้อมูลจำลองชุดเดิมตาม [fixtures](../home-faq-r1/fixtures.json) ไม่ใช่จำนวนจำกัด เนื้อหาจริงให้หลังบ้านจัดลำดับและเขียนตามที่เจ้าของยืนยัน ไม่สร้างCMS/API/FAQ index pageหรือเงื่อนไขธุรกิจใหม่

## Behaviorและขอบเขตการรับ

defaultปิดทุกข้อ เปิดสูงสุดหนึ่งข้อ กดข้อใหม่ปิดข้อเดิม กดข้อที่เปิดซ้ำปิดกลับได้ คำตอบแสดงinlineไม่เปิดmodalหรือเปลี่ยนหน้า หัวคำถามรวมiconเป็นปุ่มเดียว ไม่มีTabstopที่plus/minusแยกอีกจุด ความสูงแผงและพื้นที่โค้งต้องตามเนื้อหาในimplementation ไม่ใช้ค่าความสูงของfixtureเป็นfixedheightทุกคำตอบ

ตัวอย่างclosed516px/open588px/long790pxเป็นผลจากข้อมูลศึกษา paddingsection56/56/72และgap48;กรอบคลื่นในnativeคำนวณจากความสูงfixtureเมื่อจัดแบบ ข้อมูลจริง/widthอื่น/keyboard-focus/semantics/motionยังต้องออกแบบหรือทดสอบในขอบเขตที่เกี่ยวข้อง ไม่อ้างการทำงานจริงจากภาพนิ่ง

## การตรวจ

[Verification](verification.json) ยืนยันทั้ง12ส่วนเดิมของHome-r16ตรงกับHome-r18draftเมื่อเทียบschemaยกเว้นIDs FAQเพิ่มก่อนFooterเท่านั้น ตรวจคำตอบและminusของclosed/open/longได้0/1/1 ดู [editable states](editable-states.json), [โครงสร้างHome](home-structure.json) และ [manifestพร้อมhash](review-manifest.json)

ตรวจPNGเปิด/บริบทก่อนFooterแบบเต็ม1440pxแล้ว หัวข้อขนาดเดียวกับบทความ คำตอบไม่เห็นถูกตัดและcontrolsไม่ชนข้อความ แผงและpool backingใช้รูปทรงจากsourceเดิม การตรวจเป็นnative/static visual review ไม่ใช่browser/keyboard/backend test และไม่อ้างว่าgeometry diagnosticsหรือaccessibilityผ่านทั้งหมด

Home-r16ยังเป็นแพ็กเกจที่รับแล้ว FAQ-r1ถูกส่งกลับ FAQ-r2ไม่มีตัวเลือกที่รับ ยังไม่อนุมัติFAQ-r3/Home-r18จากการสร้างร่างนี้ Mobileพัก OPEN-001และข้อค้างเดิมคงไว้ ไม่มีFrontend/backend/deploy/Taskอื่น และยังไม่commit/pushการปรับรอบนี้
