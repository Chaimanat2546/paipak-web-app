# ภาพและรอบปรับ · pencil-A-1

ใช้ Pencil MCP Generate สร้างเฉพาะ photography fills ข้อความ ไอคอน ปุ่ม ขอบสระและ layout เป็น native layers ไม่มีการนำ raster concept ทั้งหน้าไปแทน UI

## ภาพ A ที่ใช้

| Node | ภาพ | บทบาท |
|---|---|---|
| R9s6iC | ดู asset-manifest.json | Desktop hero รุ่นสุดท้าย ภาพ coastal villa, pale sky ด้านซ้าย, บ้านทรงโค้งด้านขวาและสระ foreground |
| n4aOwE | images/generated-8.png | Mobile hero จัดภาพใหม่ให้มี sky สำหรับ heading, บ้านตรงกลางขวาและสระด้านหน้า |
| O4XVYT | images/generated-3.png | บ้านทรงโค้งกับสระ ช่วงเย็น |
| FlAuD | images/generated-5.png | บ้านพร้อมสไลเดอร์ลงสระ ช่วงเย็น |
| lz9kp | images/generated-1.png | บ้านหลังคาธรรมชาติ ช่วง blue hour |
| v2AMTg | images/generated-4.png | บ้าน contemporary และสระริมทะเล ช่วงเย็น |

รูปการ์ดสองใบแรกใช้ซ้ำใน Mobile ภาพทั้งหมดข้างต้นเป็น AI-generated fictional imagery ไม่ยืนยันว่ารูป Desktop/Mobile เป็นบ้านจริงแห่งเดียวกัน ไม่มีการรับรอง provenance หรือสิทธิ์ production จากภาพศึกษา

## Prompt และเหตุผลการปรับ

Hero Desktop เริ่มจากภาพกว้าง 3:1, Thai coastal villa ทางขวา, white curved roof, warm pendant lights, pink cushions, bougainvillea, small pink flamingo, turquoise pool และ pale blue/peach sky ทางซ้าย โดยสั่งไม่ให้มีข้อความ โลโก้หรือ UI ผลแรกสระอยู่ต่ำเกินไปจนถูก search/curve บัง จึงแก้องค์ประกอบให้มีน้ำ foreground มากขึ้น

รอบแก้ที่สั่งแบ่ง depth เป็นสามช่วงได้เส้นขาวสองเส้นในภาพ (`generated-7.png`) ตรวจพบและไม่ใช้เป็นผลสุดท้าย จึงสร้างภาพใหม่ด้วย prompt:

> ONE single seamless uninterrupted wide panoramic photograph, 3:1 ratio, absolutely NO horizontal divider lines, NO bands, NO overlays, NO borders, NO panels, NO section markers, NO split screen. Realistic luxury tropical Thai coastal pool villa in warm late afternoon sunlight. Raised wide camera angle looking across a very large clear turquoise infinity swimming pool occupying the lower 40 percent of the entire picture. White organic curved-roof villa modest in size at upper right, large glass doors glowing warm amber, pink cushions, lush tropical garden at far right with bougainvillea. Open pale blue and peach sky across left half, a soft distant sea horizon at left. Small pink flamingo inflatable in pool right of centre. Sky and architecture and pool must all belong to the same natural continuous photographic scene, no graphic separation between them. Plenty of water visible in foreground and plenty of pale sky in upper left for navy headline. No people, text, logos, typography, interface, collage or graphic elements.

Hero Mobile รอบแรกนำภาพ Desktop มา crop แล้วพื้นที่ใต้ข้อความเป็นต้นไม้ จึงสร้างภาพ square สำหรับพื้นที่นี้โดยเฉพาะ ต่อมาปรับให้เห็นน้ำมากขึ้น ใช้ prompt สุดท้าย:

> Square architectural holiday photograph with deliberate balanced composition: TOP 40 percent is pure very pale blue sky, open and uncluttered across upper left, suitable for navy text overlay. White organic curved-roof villa SMALL and fully visible at middle right between 40 and 65 percent of image height, warm amber window light and pink cushions, lush garden only far right. Bottom 35 percent MUST be bright clear turquoise infinity swimming pool, lots of pool water clearly visible below the villa. Sea and sunset on far left. Raised wide camera framing: do not zoom in on the house. A small pink flamingo inflatable in pool. Imagined Thai coastal villa at golden hour, photorealistic elegant inviting holiday setting. No people, text, logos, typography, interface or border.

Card prompts ใช้ architectural holiday photography ที่ไม่มีข้อความ/UI/คน แยกเป็น curved villa, villa with waterslide, thatched-roof villa at blue hour และ contemporary villa by sea รายละเอียดสี/แสงข้างต้นเป็นภาพศึกษา ไม่สร้างคำรับรองเกี่ยวกับบ้านจริง

## ประวัติ B ในไฟล์เดียวกัน

`images/generated.png` เป็นภาพ B ที่สร้างด้วย MCP ก่อนเจ้าของเปลี่ยนทิศทาง ส่วน `villa-01.webp` ถึง `villa-04.webp` คัดลอกจาก public/mock เพื่อใช้ใน B history เท่านั้น บันทึกเดิมระบุ [Unsplash license](https://unsplash.com/license) และแหล่งตามลำดับ: [ภาพ 1](https://unsplash.com/photos/Id7u0EkTjBE), [ภาพ 2](https://unsplash.com/photos/tVzyDSV84w8), [ภาพ 3](https://unsplash.com/photos/g39p1kDjvSY), [ภาพ 4](https://unsplash.com/photos/y3_AHHrxUBY) ไม่ได้ตรวจสิทธิ์ซ้ำหรือรับรองเป็น production assets ในรอบนี้

รูปอื่นที่ไม่ได้อ้างใน active A fills เป็นรอบทดลองหรือ history ไม่ใช่ baseline ที่เลือก
