# Home Desktop-r16 · desktop-closeout-review-1

5 พฤศจิกายน2026 (Asia/Bangkok) · เจ้าของรับแพ็กเกจออกแบบDesktopพร้อมข้อค้างเดิมแล้ว

[หลักฐานรับแพ็กเกจ](owner-home-acceptance.json) บันทึกคำตอบ1และhashของภาพ/ตัวบทที่ตรวจ ฉบับก่อนใส่สถานะรับเก็บที่ [approved-review-content/README.md.txt](approved-review-content/README.md.txt) Review manifest/verificationเดิมเก็บสถานะก่อนรับไว้เป็นประวัติ

## สิ่งที่รวมและฐานที่รักษา

Native `f7ZIg` ที่1440×6091px รวมHomeเดิมกับHeroภาพสำเร็จรูป โดยอีก11ส่วนของHomeตรงกับHome-r15ทุกส่วนเมื่อเทียบschemaยกเว้นIDs ไม่มีการออกแบบHeader/หมวด/การ์ด/TikTok/บทความ/Footerใหม่ ไม่ต้องรับข้อเดิมซ้ำ

| ส่วน | ข้อสรุป/หลักฐาน |
| --- | --- |
| Homeก่อนเพิ่มHero | [Home-r15รับภาพรวมแล้ว](../home-desktop-r15/owner-home-acceptance.json) |
| Foundation Desktopฐานเดิม | [รับพร้อมข้อค้าง](../foundation-3-desktop/owner-foundation-acceptance.json);ฉบับเดิมเก็บbyte-for-byte สเป็กหลักปัจจุบันเพิ่มHeroตามข้อสรุปล่าสุด |
| Heroภาพรวมสำเร็จรูป | ภาพรวมพื้นหลัง/ตัวหนังสือหนึ่งไฟล์ ไม่มีlive title/supportทับภาพ; [spec](../hero-banner-carousel-spec.md) |
| ลูกศร/จุดเลือก/ปุ่มพัก | [รับdefaultที่แสดงแล้ว](../hero-banner-carousel-r3/owner-multislide-controls-acceptance.json) |
| เวลาและรูปแบบเลื่อน | ค้าง7วินาที เลื่อนแนวนอน800msตาม [ตัวอย่างที่เลือก](../hero-motion-review-r1/owner-motion-acceptance.json) |
| เล่นต่อ | [เริ่มนับ7วินาทีใหม่](../hero-motion-review-r1/owner-restart-policy-decision.json)เมื่อเหตุพักเคลียร์ การพักเองรอPlay |
| ภาพเสียบางรูป | [ข้ามรูปเสียใช้รูปพร้อม](../hero-banner-carousel-r3/owner-partial-image-decision.json);จำนวนจุดเลือกตามภาพพร้อม |
| ไม่มีภาพพร้อมเหลือ | [ภาพสำรองมาตรฐานรับแล้ว](../hero-banner-carousel-r3/owner-fallback-appearance-acceptance.json);คงภาพปัจจุบัน ขอบโค้งขาวและSearch |

## สองกรณีที่เสนอให้รับพร้อมแพ็กเกจนี้

1. มีภาพที่กำหนดไว้พร้อมเพียงภาพเดียว: แสดงภาพนั้นและซ่อนลูกศร/dots/pause ไม่เล่นอัตโนมัติ ใช้รูปแบบเดียวกับfallbackหนึ่งภาพที่รับไว้ ดู [ภาพเดียว](zQbBj.png)
2. ระหว่างรอภาพที่กำหนดไว้: แสดงภาพสำรองมาตรฐานให้หน้าไม่ว่าง Searchพร้อมใช้งาน เมื่อมีภาพพร้อมจึงใช้ภาพนั้นตามกติกาจำนวนภาพ และเริ่มค้าง7วินาทีหลังภาพพร้อม/การเปลี่ยนภาพเสร็จเมื่อไม่มีเหตุพักค้าง ไม่เปิดautoplayทับexplicit Pause ดู [ช่วงโหลด](QHSWV.png)

เจ้าของรับสองกรณีนี้พร้อมแพ็กเกจด้วยตัวเลือก1แล้ว การรับจำกัดตามขอบเขตDesktopและข้อค้างที่บันทึก

## ภาพและหลักฐาน

- [Homeเต็มหน้า](f7ZIg.png)
- [ส่วนบนหลายภาพ](G1nPut.png)
- [มีภาพเดียว](zQbBj.png) / [ช่วงรอภาพ](QHSWV.png) / [เสียบางรูป](LnbWh.png)
- [Editable snapshotจากPencil MCP](editable-snapshot.json) / [ตรวจโครงสร้างและรักษาส่วนเดิม](verification.json) / [manifestพร้อมhash](review-manifest.json)

การตรวจยืนยันว่าไม่มีtext nodeนอกSearchในHero และอีก11ส่วนตรงกับฐานเดิม ภาพนิ่งและสเป็กนี้ไม่ใช่การทดสอบautoplay/โหลดภาพ/keyboardจริง Source UI `.pen`หลักยังอยู่นอกrepo เข้าถึงผ่านPencil MCPเท่านั้น ไม่มีไฟล์UIทั้งชุดในcommitเพียงเพราะมีsnapshot

## ขอบเขตปิดรอบที่ขอ

รับเฉพาะแพ็กเกจออกแบบHome Desktopตามreference1440pxและข้อกำหนดที่ระบุ พร้อมสองกรณีด้านบนและข้อค้างเดิม ไม่ใช่ full accessibility/functional readiness หรือการอนุมัติFrontend

| ข้อค้างเดิม/งานที่ไม่ขยายในรอบนี้ | สถานะ |
| --- | --- |
| OPEN-001 ชมพู/ขาว | คงเปิดและคงภาพเดิมตามคำตอบเดิม ไม่อ้างผ่านAAหรือเปิดให้เลือกสีใหม่ |
| Keyboard/focus,screen reader,reduced-motion/background-tabรายละเอียด | ยังต้องกำหนด/ตรวจในขอบเขตที่เกี่ยวข้อง ไม่รับรองจากmotion sampleหรือภาพนิ่ง |
| Hero hoverแยกที่เสนอ | ร่างNavy-faceเป็นประวัติ ไม่รวมรับอัตโนมัติจากdefault controls;ไม่เป็นเหตุให้รื้อdefaultที่รับ |
| Desktopความกว้างอื่น/Tablet/Mobile | ยังไม่รับรองจออื่น Mobileพักตามเดิม |
| Runtime,asset packaging,ข้อมูล/ปลายทางจริง | ไม่ได้ทำในรอบdesignนี้ |
| DSD-001ทั้งTask/Taskถัดไป/Frontend/backend/deploy | ไม่ถือว่าเสร็จหรือเริ่มจากการรับแพ็กเกจนี้ |

สถานะการรับแพ็กเกจ: **OWNER ACCEPTED — BOUNDED HOME DESKTOP CLOSEOUT WITH OPEN ITEMS** ปิดเฉพาะรอบออกแบบDesktopนี้ ไม่ปิดDSD-001ทั้งTaskและไม่อนุญาตFrontend
