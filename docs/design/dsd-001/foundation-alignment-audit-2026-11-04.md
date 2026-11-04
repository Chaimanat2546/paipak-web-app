# DSD-001 / Foundation alignment audit

4 พฤศจิกายน2026 · ตรวจเอกสารหลังรับหน้าตาHome Desktop-r8 · ไม่ใช่foundation versionที่อนุมัติแล้ว

## ผลการจัดเอกสารตามคำสั่งล่าสุด

เจ้าของสั่ง “ปรับให้ตรงกับที่เราคุยกันเมื่อกี้” จึงจัด deliverables ทั้ง4ชิ้นเป็น [foundation-2-desktop](foundation-2-desktop/README.md) ให้ตรงกับ A และ Home Desktop-r8 แล้ว เก็บข้อความร่างเดิมแบบ byte-for-byte ใน [archive](foundation-1/pre-a-alignment-2026-11-04/README.md) และอ่าน numeric reference จาก Pencil แบบ read-only ใน [observed-values](foundation-2-desktop/observed-values.json)

ข้อไม่ตรงด้านเอกสารในตารางข้างล่างได้รับการจัดใหม่แล้ว โดยแยก Home reference จาก planning defaults และค่าที่เสนอ Motion/จออื่นยังไม่ผ่านการตรวจ Mobileยังพัก และ OPEN-001ยังเปิด Final foundation approval ยัง pending การจัดเอกสารไม่ใช่การทดสอบ runtime หรือปิด Task

## ข้อค้นพบก่อนจัดเอกสาร (ประวัติ)

เจ้าของรับappearanceรวมHome Desktop-r8 และเลือกคงCTA #FD6E88/#FFFFFF โดยให้OPEN-001เปิดต่อ ตัวเลือกCTAที่เสนอไม่ได้รับเลือก ไม่สำรวจคู่สีหรือเฉดใหม่ต่อโดยอัตโนมัติ สถานะนี้ไม่อนุมัติaccessibility exceptionหรือFrontend

ก่อนจัดเอกสารพบว่า root token-sheet, typography-spec และ responsive-visual-guidelines ยังมีร่างfoundation-1ของBพร้อมnoticeว่าต้องปรับเป็นA จึงใช้เป็นcurrent A specificationไม่ได้เพียงเพราะHomeผ่านappearance review ข้อค้นพบนี้เป็นฐานของfoundation-2-desktop; G1 A/review-2ยังคงเดิม

| ประเด็น | ร่างเก่าfoundation-1 | หลักฐานปัจจุบัน/งานที่ต้องจัดให้ตรง |
| --- | --- | --- |
| Hero type | B lead64px/continuation40px | A Homeสองบรรทัด96px/Mitr600/line-height1.13 จากnative ZClla,QvP46 |
| หัวข้อแนะนำ | section32px/500 | Homeแนะนำ32px/400; หมวดอื่นเก็บค่าที่แสดงในรุ่นที่รับ ไม่เปลี่ยนweightทั้งเว็บเอง |
| ชื่อบ้านยาว | สองบรรทัด | Homeเลือกหนึ่งบรรทัดย่อด้วย… ชื่อเต็มเข้าถึงในDetail; behaviortext zoomยังไม่ทดสอบ |
| Gridที่1440 | ขอบ64px/content1312px | ขอบ56px/content1328px การ์ด314px gap24px สี่ใบเต็ม |
| การ์ด | radiusภาพ12px | Homeradius16px รูปสูง210px ข้อมูลสูง152px; ต้องแยกroleจากข้อเสนอB |
| Hero/search | B collage/insetและcurved image cut | A panoramic1440×470, centeredsearch1040×88/radius32 และpool-edgecurve ไม่มีinset |
| Surface | ร่างBไม่ใช้พื้นsectionแบบปัจจุบัน | Homeที่รับมีพื้นที่แนะนำ/ราคาพิเศษ/LuxuryและFooterblue ต้องระบุroleตามA ไม่ลบพื้นเพื่อกลับไปตามB |
| Focus | universalnavy ring/white gapที่ยังเสนอ | Homeที่รับมีunderlines, filledlistingarrow, photo-arrowface28ในtarget44, หัวใจชมพูfillไม่มีวง ต้องระบุscopeและข้อจำกัดแทนการอ้างuniversalring |
| Overlay | ร่างnavy18%,offset12,blur32 | แผงHomeที่รับใช้#072D5926,offset8,blur24; ภาษา224×152/ติดต่อ280×176 |
| ภาพ/ข้อมูลไม่ครบ | fallbackบนlistingทั่วไป | Homeไม่แสดงการ์ดที่ข้อมูล/รูปไม่พร้อม แต่ยังค้นเจอ; ข้ามรูปเสียเมื่อมีรูปใช้ได้ หมวดว่าง/errorซ่อนตามคำตอบเจ้าของ |
| Motion | 120/180/240/400msเสนอไว้ | Nativeยังเป็นstatic ไม่มีmotion test ไม่ถือว่าHomeappearanceเลือกduration/easingแล้ว |
| Responsive | ตาราง320–1536และcompositionB | เก็บเป็นประวัติข้อเสนอ ไม่สร้างหรือรับMobileใหม่ระหว่างที่เจ้าของพักMobile;1440Desktopคือภาพที่ตรวจแล้ว widthอื่นยังต้องแยกตรวจ |

หลักฐาน: [Home-r8 snapshot/verification](f01-ui-3/home-guided-review/home-desktop-r8/README.md), [แผงภาษา](f01-ui-3/home-guided-review/header-language-r2/README.md), [แผงติดต่อ](f01-ui-3/home-guided-review/header-contact-r2/README.md), [owner CTA choice](f01-ui-3/home-guided-review/cta-brand-contrast-r1/owner-choice.json)

งานจัดเอกสารที่ระบุในauditนี้ดำเนินการแล้วในfoundation-2-desktop ส่วนการตรวจรับversionและข้อค้างยังแยกตามสถานะด้านบน ไม่ต้องเลือกbrandหรือfontหลักใหม่ ไม่เริ่มDSD-002/UXD-002/Taskอื่น ไม่แก้แอป/CSS/backendหรือdeploy และไม่ถือว่าDSD-001เสร็จจากHomeหรือG1อย่างเดียว
