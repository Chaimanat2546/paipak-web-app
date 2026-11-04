# Home Desktop-r7 · บ้านหลายหมวด

4 พฤศจิกายน 2026 · ปรับบนหน้า Home ตัวหลักใน Pencil · รอเจ้าของตรวจรับ

เจ้าของระบุ “งั้นโอเคอยู่ ในหน้าแรกอยากมีหลายๆหมวดหน่อย” หลังตรวจการซ้อนเลเยอร์ส่วนบน จึงเพิ่มแถวบ้านครบตามชื่อ 7 หมวดเดิม ไม่เพิ่ม taxonomy ใหม่และไม่เปลี่ยน Header/Hero/เมนูลัดที่เพิ่งตรวจ

[หน้า Home เต็ม](A1ks07.png) · [หลักฐาน native layers](after-snapshot.json) · [ผลตรวจ](verification.json)

หลังตรวจ Header เพิ่ม [ภาพสถานะกดธงไทย/หูฟัง](../header-popovers-r1/README.md) แยกไว้ด้านขวาของ Home ใน Pencil หน้า default ในโฟลเดอร์นี้คงเดิม

## หมวดบนหน้า

| หมวด | ภาพ | จำนวนการ์ดตัวอย่างใน track |
|---|---|---|
| พูลวิลล่าแนะนำ | [ดู](PANR1.png) | 8 |
| พูลวิลล่าใกล้ทะเล | [ดู](Z5pz3j.png) | 8 |
| พูลวิลล่าสายปาร์ตี้ | [ดู](aPN85.png) | 8 |
| พูลวิลล่าราคาพิเศษ | [ดู](Q99ieY.png) | 8 |
| พูลวิลล่า Outing | [ดู](Wak43.png) | 8 |
| พูลวิลล่า Pet Friendly | [ดู](a7hyPs.png) | 6 |
| พูลวิลล่า Luxury | [ดู](YRNYJ.png) | 8 |

ทุกหมวดเห็นเต็ม 4 ใบ ขนาด 314×362px และ gap 24px ใช้การ์ด r6 ร่วมกัน แต่มี viewport, track และปุ่มเลื่อนของตัวเอง ดูทั้งหมดอยู่ข้างหัวข้อ ไม่มีตัวนับรายการบน UI ราคาและรูปของการ์ดคงรูปแบบเดิม

ใช้พื้นอ่อนกับแนะนำ พื้นชมพูอ่อน #FFF5F7 กับราคาพิเศษ และพื้น Navy กับ Luxury เพื่อแบ่งจังหวะของหน้าที่ยาวขึ้น หมวดที่เหลือใช้พื้นขาว ไม่เพิ่มกล่องหรือ action บนการ์ด สีชมพูอ่อนเป็น tint ในข้อเสนอรอบนี้ ไม่ใช่การอนุมัติ token ใหม่

## ข้อมูลจำลองและพฤติกรรม

54 card instances ใช้ fixtures เดิม 24 รายการ มีการใช้รายการซ้ำข้ามหมวดเพื่อแสดง layout ไม่ใช่ 54 บ้านจริง ดู [presentation-fixtures.json](presentation-fixtures.json) การจัดเข้าหมวดและลำดับในแถวเป็นตัวอย่างทางภาพ ไม่ใช่ catalog classification, ranking หรือ query contract ที่ยืนยันแล้ว

Pet Friendly ใช้เฉพาะ IDs 1–6 ที่ fixture เดิมระบุ pet_friendly_example=true แต่ยังไม่ใช่นโยบายสัตว์เลี้ยงจริง หมวดราคาพิเศษไม่แสดงส่วนลด เปอร์เซ็นต์ลดราคา หรือราคาเดิมขีดฆ่าที่ไม่มีหลักฐาน ไม่มีการเพิ่มคะแนนรีวิว/availability

ปุ่มเลื่อนรายการควบคุมเฉพาะแถวนั้น เลื่อนทีละหนึ่งการ์ด ไม่ autoplay หรือ loop ส่วนปุ่มบนรูปเปลี่ยนรูปเฉพาะการ์ดและกดหัวใจของ Guest ยังต้อง Login คงกฎเดิม ดูทั้งหมดเป็นทางไป Results ของหมวดที่เกี่ยวข้องเมื่อยืนยัน category mapping แล้ว รอบนี้ไม่กำหนด route/query หรือเชื่อมข้อมูลจริง

## ตรวจและเก็บหลักฐาน

Main frame `A1ks07` อยู่ 0,0 ใน `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` ชื่อ **F01 · WF-01 Home · Desktop · Home-Desktop-r7 seven categories** ขนาด 1440×4427

- Header, Hero, เมนูลัด, Footer และแถวแนะนำ r6 เทียบกับก่อนปรับตรงทุก field รวม IDs
- อ่านตำแหน่ง track ทั้ง 7 แล้วเลื่อนพิกัดเฉพาะใกล้ทะเลเป็น -1352 เพื่อส่งออก [ภาพท้ายแถว](sea-end-state/Z5pz3j.png) อีก 6 แถวยังคง x=0 จากนั้นคืนทุกแถวเป็น x=0 ดู [state evidence](independent-row-state-evidence.json) เป็นหลักฐาน static layout independence ไม่ใช่ functional scroll test
- ตรวจภาพหน้าเต็มและแต่ละหมวดแล้ว หัวข้อ ข้อมูลและราคาครบ มุม/ขนาด/ตำแหน่งการ์ดร่วมกันทั้งหน้า Native canvas ไม่ทับ root อื่นในพื้นที่ Home ที่ขยาย
- ย้ายเฉพาะตำแหน่ง history roots `I8Ydc7` และ `Xvgbv` ออกเพื่อให้ Home ยาวขึ้น เก็บ artwork และ IDs เดิม มี [ก่อนย้าย](history-before-snapshot.json) และ after snapshot รวมทั้งสอง roots

[ก่อนปรับ](before-snapshot.json) และ [หลังปรับ](after-snapshot.json) เป็น incremental backups ใช้ร่วมกับฐาน F01-ui-2 และ assets เดิม ไม่ใช่ไฟล์ .pen ใน repository

## ขอบเขตการตรวจรับ

ยังรออนุมัติ Home Desktop-r7 ไม่ใช่การอนุมัติ F-01 ทั้งชุดหรือปิด DSD-001 ปรับเฉพาะ Home Desktop ตามลำดับตรวจทีละหน้า มือถือและหน้าอื่นคงเดิม UXD-002 review-5 ยังรอตรวจรับ ภาพ AI/fixtures/โลโก้สมมติและ OPEN-001 ยังคงข้อจำกัดเดิม ไม่มี Frontend/backend/deploy หรือ interaction จริงใน Pencil
