# Hero banner carousel-r2 · ตรวจเอกสารและเพิ่มสถานะ Pencil

> ข้อเสนอzero-readyแบบแถบ136pxในr2ไม่ใช้งานแล้ว เจ้าของเลือกภาพปัจจุบันเป็นfallbackมาตรฐาน ดู [r3](../hero-banner-carousel-r3/README.md) ภาพr2ด้านล่างเป็นประวัติข้อเสนอเท่านั้น ส่วนloadingได้รับการปรับต่อในr3และยังรอตรวจพฤติกรรมช่วงโหลด

5 พฤศจิกายน2026 (Asia/Bangkok) · UI/states รอเจ้าของตรวจ

เจ้าของระบุ “โอเคจัดการเลยแล้วก็จัดการตัว pencil ต่อ” หลังพบค่าฟอนต์ Hero เก่าในสเป็กหลัก จึงจัดเอกสารทั้งสี่ให้ใช้ภาพรวมสำเร็จรูปและเพิ่มสถานะใน Pencil ต่อ ข้อกำหนดที่เจ้าของเลือกอยู่ใน [Hero spec](../hero-banner-carousel-spec.md) หน้าตา default จากร่างr1คงเดิม

## เอกสาร

- สเป็กหลักทั้งสี่มีรุ่น `foundation-3-desktop + hero-banner-carousel-1` และแยกฐานที่รับแล้วกับร่าง Hero รอตรวจ
- `home.hero.title` / `home.hero.support` ย้ายออกจากตาราง typography ที่ใช้งานไปเป็นประวัติ Home-r15 ไม่กำหนดให้เว็บพิมพ์หัวเรื่อง/คำโปรยทับภาพ
- ปรับ Visual Direction, token sheet และ responsive guide ให้ตรงกัน: ภาพรวมหนึ่งไฟล์ต่อสไลด์,7วินาที,เลื่อนแนวนอน,วนอัตโนมัติ/กดเอง,ไม่มีลิงก์บนภาพ,Searchอยู่คงที่
- ไม่เปลี่ยนฟอนต์MitrของSearch/ส่วนอื่น และไม่กำหนดฟอนต์ภายในภาพจริงจากตัวอย่างที่จัดทำ
- เก็บ [ฉบับอนุมัติเดิม](../foundation-3-desktop/pre-hero-reconciliation-2026-11-05/README.md) แบบbyte-for-byteตรงกับpublished hashes หลักฐานอนุมัติเดิมไม่แก้ ดู [reconciliation](../hero-banner-carousel-r1/document-reconciliation.json)

## แบบปัจจุบัน

| แบบ | Native ID | ภาพตรวจ | สถานะ |
| --- | --- | --- | --- |
| Home Desktop-r16 ทั้งหน้า | `f7ZIg` | [ทั้งหน้า](f7ZIg.png) | ร่าง Hero; ส่วนอื่นคงเดิม |
| หลายภาพ/ภาพแรก | `G1nPut` | [default](G1nPut.png) | หน้าตาcontrolsรอตรวจ |
| มีภาพพร้อมหนึ่งภาพ | `zQbBj` | [single](zQbBj.png) | เสนอซ่อนcontrolsและไม่เล่นอัตโนมัติ |
| ไม่มีภาพพร้อมเลย | `HZP8R` | [empty](HZP8R.png) | เสนอตัดส่วนภาพ เหลือSearchในแถบฟ้า136px หมวด/รายการขึ้นมาใกล้ขึ้น |
| กำลังโหลดครั้งแรก | `QHSWV` | [loading](QHSWV.png) | เสนอจองพื้นที่470px พื้นฟ้าสงบ Searchใช้งานได้ ไม่มีcontrolsหรือข้อความปลอม |
| เสียหนึ่งภาพ เหลือสองภาพพร้อม | `LnbWh` | [partial](LnbWh.png) | เสนอข้ามรูปเสีย มีสองจุดเลือก ไม่โยนretryให้ผู้ใช้ |
| เปิดค้นหาสถานที่แล้วพักภาพ | `caugb` | [search pause](caugb.png) | ใช้Search panelเดิม ไม่แก้เนื้อหา/พฤติกรรมช่องค้นหา |
| Hoverลูกศรถัดไป | `z3mDJ2` | [hover](z3mDJ2.png) | เสนอพื้นNavy/ไอคอนขาว ไม่มีzoomรูป |

ภาพ2/3, paused และจุดกึ่งกลางการเลื่อนจาก [ร่างr1](../hero-banner-carousel-r1/README.md) ยังคงอยู่ ภาพสำเร็จรูปและeditable artworkต้นทางอยู่ในr1 ตัวหนังสือในartwork preparation framesมีไว้ส่งออกเป็นrasterเท่านั้น ไม่ใช่ข้อความเว็บในHero ไม่ลบประวัติหรือไฟล์ต้นทางเพื่อทำให้ตรวจไม่พบคำเดิม

## ขอบเขตการตรวจ

ตรวจภาพnativeและโครงสร้าง: ภายในHeroที่ใช้ภาพสำเร็จรูปมีtext nodesเฉพาะSearch ไม่มีหัวเรื่อง/คำโปรยทับภาพ; single/empty/loadingไม่มีcarousel controls; partialมีสองจุดเลือก; panelค้นหาและSearchใช้ต้นทางเดิม สถานะที่ออกแบบใหม่ยังเป็นข้อเสนอ ไม่ได้รับอนุมัติพฤติกรรมfallbackจากคำสั่งให้ทำงานต่อ

เก็บ [ผลตรวจ](verification.json) และ [snapshotสถานะใหม่](state-snapshots.json) เป็นหลักฐาน ไม่เท่ากับการทดสอบโปรแกรม

ไม่มีcarouselที่กดหรือเลื่อนจริงในภาพนิ่ง ยังไม่ได้ทดสอบ7วินาที/keyboard/screen reader/reduced-motion/โหลดจริง ระยะเวลาeasingและการเริ่มนับใหม่/กลับมาเล่นต่อยังไม่เลือก การรับfoundationเดิมไม่อนุมัติHeroนี้อัตโนมัติ Mobileพัก OPEN-001คงเดิม ไม่มีFrontend/backend/deploy และยังไม่commit/pushรอบนี้
