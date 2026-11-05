# F01-ui-3 / Legacy-search-r5

> ข้อแก้ไขล่าสุดC1.5/C1.6วันที่5พฤศจิกายน2026: กรณีท้ายที่พิมพ์สถานที่ไม่ครบแต่ไม่เลือกคำแนะนำ ให้ถือว่ายังไม่ระบุสถานที่และค้นหาได้ด้วยเงื่อนไขอื่น ไม่ส่งข้อความที่ยังไม่ยืนยันเป็นสถานที่ ไม่เลือกคำแนะนำแทน และไม่สั่งล้างฟอร์ม Home จากข้อนี้ กติกาชื่อตรงเดิมคงไว้ในส่วนที่ไม่ใช่กรณีแก้ไขนี้ รับภาพและสเป็ก Search Desktop-r2 รวมแล้วพร้อมข้อค้าง ดู [หลักฐาน](../../search-desktop-review-r2/owner-location-correction.json) ส่วนกฎบังคับเลือกด้านล่างเป็นประวัติที่ถูกแทนแล้ว ไม่ใช่ข้อกำหนดปัจจุบัน

> ข้อเปลี่ยนจากเจ้าของ5พฤศจิกายน2026: [Searchใช้วันเข้าอย่างเดียวได้](../../search-checkin-only-home-r20-r1/owner-rule-change.json) โค้ด/ภาพmissing-checkoutในแพ็กเกจนี้เป็นประวัติ ไม่ใช้เป็นกฎSearchล่าสุด ไม่เติมวันออก/จำนวนคืนเอง กฎจองยังเดิม และยังไม่แก้โค้ดเก่าในรอบออกแบบนี้

สถานะ: Desktop draft รอตรวจรับ · 4 พฤศจิกายน 2026 · Static Pencil

เจ้าของสั่ง “ไปเอามาจากโค้ดเก่า” หลังตรวจช่องค้นหาทั้งสาม จึงอ่านโค้ดเดิมใน repository และนำโครง Search มาใช้กับแบบใน Pencil โดยคง Direction A, Mitr และ palette ปัจจุบัน ไม่แก้ application code หรือเริ่ม Frontend

[ภาพรวม](BI46M.png) · [native snapshot](after-snapshot.json) · [ก่อนทำ](before-snapshot.json) · [regression และข้อจำกัดเครื่องมือ](verification.json)

แก้ตำแหน่งลูกศรล่าสุด: [Month-nav-r6](month-nav-r6/README.md) ย้ายปุ่มย้อน/ถัดไปไว้คนละริมครอบทั้งสองเดือน แก้ทั้ง overview, Home, Results และ missing-checkout ใช้ snapshot ใน amendment ทับเฉพาะสี่ roots ที่ระบุ

## ต้นทางที่อ่านจริง

- [components/home-search.tsx](../../../../../components/home-search.tsx): locationField / destinationMenu, chooseDestination ที่บรรทัด 153, chooseRange ที่ 161, clearDates ที่ 327, guestPicker ที่ 365 และ Calendar numberOfMonths ที่ 456
- [app/globals.css](../../../../../app/globals.css): search fields, calendar และ numeric counter styles; Desktop date popover กว้าง 720px, calendar day min-height 36px และ guest numeric input
- [app/home-data.ts](../../../../../app/home-data.ts): สถานที่สี่แห่งจาก fixtures เดิม

ลองรัน `npm run dev -- --hostname 127.0.0.1 --port 3000` แล้วคำสั่งล้มเหลวเพราะไม่มี next executable จึงไม่มี live preview ของโค้ดเก่าในรอบนี้ ไม่ติดตั้ง dependencies หรือสร้างโปรแกรมเลียนแบบเพื่ออ้างว่าเป็นภาพจากโค้ดเดิม งานนี้เป็นการอ่าน source และปรับเป็น native design เท่านั้น

## สิ่งที่นำมาใช้และสิ่งที่ปรับตามข้อสรุปล่าสุด

| ส่วน | จากโค้ดเดิม | แบบ Pencil รุ่นนี้ |
| --- | --- | --- |
| สถานที่ | input อยู่ในแถบหลัก เมนูมีรายการพื้นที่ ไม่มี input ซ้ำ | พิมพ์ที่แถบเดียว แล้วเลือกใน popover; แสดงพัทยา หัวหิน เขาใหญ่ เชียงใหม่จาก fixtures |
| วันเข้าพัก | Desktop สองเดือน ไม่มี Save; เลือกช่วงครบแล้วเปิด guests | ปฏิทินสองเดือน 720px แสดงเดือนที่มีหกแถวด้วย ไม่มีบันทึก; มีภาพต่อไป guests หลังช่วงวันครบ |
| ล้างวัน | X ใน field เมื่อมีวันเลือกแล้ว | X target 32px อยู่ในช่องวัน เฉพาะตัวอย่างที่มีค่า; ไม่ล้างสถานที่หรือคน |
| ผู้เข้าพัก | ตัวเลขพิมพ์ได้ มี plus/minus ไม่ใช้ Save | ช่องตัวเลขกับ plus/minus; คนรวมหนึ่งแถวและ pets อีกแถว ไม่มี helper, Save หรือล้างจำนวน |
| ส่งค้นหา | มี submit หลักและปุ่มค้นหาซ้ำใน guest popover | คง “ค้นหา” นอกแผงเป็น action หลักตามการหารือรอบล่าสุด |
| visual identity | legacy blue/yellow/Kanit | คง navy/light blue/pink, white และ Mitr ที่อนุมัติเป็นทิศทาง |
| ข้อจำกัดจำนวน | legacy มี max 50 และแยก adults/children | ไม่ยก max 50 หรือการแยกอายุมาเป็น product contract; min 0 ใน search หมายถึงยังไม่ระบุ ไม่ใช่จำนวนจอง |

วันในภาพเป็น fixture ธันวาคม 2569 / มกราคม 2570 ใช้ชื่อเดือนภาษาไทยและปี พ.ศ. ต่อจากแบบปัจจุบัน ส่วนลำดับสัปดาห์เริ่มอาทิตย์ตามโค้ดเดิม ไม่มีข้อมูลวันว่างหรือราคาแฝงในปฏิทิน ไม่มีจำนวนผลแต่ละพื้นที่จาก fixture แสดงเป็น catalog จริง

## ภาพในบริบทจริง

| สถานะ | Native root | PNG |
| --- | --- | --- |
| Home: สถานที่ | a3iOx | [ภาพ](screens/a3iOx.png) |
| Home: วันเข้าพัก | jhTNh | [ภาพ](screens/jhTNh.png) |
| Home: ผู้เข้าพัก | jSj9V | [ภาพ](screens/jSj9V.png) |
| Results: สถานที่ | DnMEK | [ภาพ](screens/DnMEK.png) |
| Results: วันเข้าพัก | swZck | [ภาพ](screens/swZck.png) |
| Results: ผู้เข้าพัก | vZlhp | [ภาพ](screens/vZlhp.png) |
| Home: วันออกไม่ครบ | hyLBr | [ภาพ](screens/hyLBr.png) |
| Home: วันครบแล้วต่อผู้เข้าพัก | S366d | [ภาพ](screens/S366d.png) |

Overview root: BI46M ใน `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen`

ทั้งหมดเป็น 1440×900 viewport ยกเว้น overview เนื้อหาหน้าด้านล่างถูก crop ตาม viewport โดยตั้งใจ หน้าหลัก Home/Results และ Mobile เดิมไม่ได้เปลี่ยนในรอบนี้ ชุดใหม่เป็น opened-state draft ล่าสุดสำหรับตรวจรับ ไม่ใช้ชื่อ root เดิมมาสื่อว่าไฟล์เดิมถูกอนุมัติแล้ว

## เส้นทางที่ระบุในแบบ

เลือก suggestion → เปิด dates → เลือกวันเข้า/ออกครบ → เปิด guests → ปรับจำนวน → ค้นหา ผู้ใช้ข้าม field ที่ไม่ต้องการระบุหรือกลับไปแก้ field อื่นได้ ทุกช่องยัง optional และไม่เพิ่ม Auth ก่อนดูบ้าน

การกด X/outside/Esc ปิด popover ไม่ submit Search ค่าที่เลือกอยู่ใน search form ต่อไป ผล Results เปลี่ยนเมื่อส่งค้นหา ไม่เปลี่ยนตามการกด counter ทุกครั้ง การเลือกวันเข้าแต่ไม่มีวันออกยังใช้ error/recovery เดิม พร้อมทางล้างเฉพาะวันที่

ลำดับเปลี่ยนแผงตาม chooseDestination/chooseRange เป็น reference จาก source ตามคำสั่งรอบนี้ ยังต้องตรวจรับเวอร์ชันแบบ ไม่เปลี่ยน date editor ของการจองหรือ Filter Apply และไม่ปิด D-02/D-03 โดยอัตโนมัติ พฤติกรรม free query ที่ไม่เลือก suggestion และ ranking ยังคงเปิด ไม่ใช้ mock filter เป็นสัญญาของระบบจริง

โค้ดเก่า submit ส่งเพียง location/guests และไม่ได้ส่ง dates/pets ใน SearchCriteria จึงไม่ยกโค้ดเก่าเป็น API/query contract หรืออ้างว่าค้นหาวันว่างได้แล้ว

## หลักฐานตรวจและข้อจำกัด

- เปิดดู PNG เต็มขนาด overview และทั้งแปด scenes แล้ว แผง/ข้อความ/ไอคอนแสดงครบ แก้รูปแบบ decrement ของค่า 12 คนให้ไม่ดู disabled แล้ว export และตรวจซ้ำ
- native bounds ของ popovers เจ็ด scenes ไม่พบ clipping: location Home 320×300, Results 400×300; dates 720×354; guests 380×236 แผง Home เริ่ม y=532 และอยู่ในภาพ 900px
- overview และ missing-checkout ที่สร้างใหม่มี visitor bounds warnings ไม่ตรงกับภาพ เช่น error panel ที่กำหนด y=532 ถูก visitor รายงาน y=582 แต่ PNG แสดงแผงเริ่มต่อ field ที่ y=532 และแสดงครบ จึงเก็บ warnings ใน verification.json ไม่อ้างว่า native validation ผ่านทั้งชุด การปรับ sizing/การจัดแนวใน overview ไม่แก้ warnings นี้
- เทียบ snapshots สิบ roots แล้ว Home หลัก, Results ทั้งสามหน้า, Mobile ทั้งสามหน้า และ studies ก่อนหน้าทั้งสามตรงก่อนทำทุก property
- ไม่มี live legacy preview, click/keyboard/screen-reader test หรือทดสอบ query จริง ทั้งสองปฏิทินและช่องตัวเลขเป็น native layers ที่แก้ไขได้ ไม่ใช่ functional inputs
- Mobile ยังพักไว้ ไม่ติดตั้ง dependency ไม่แก้โค้ด/CSS ไม่เชื่อม backend และไม่ deploy OPEN-001 ของ CTA pink/white ยังเปิด

## สรุปสำหรับการตรวจรับ

แก้จุดพิมพ์ซ้ำ ใช้ Calendar สองเดือนจาก source และลดการยืนยันซ้ำในแผง Search โดยรักษากฎคนรวม+สัตว์เลี้ยงกับเงื่อนไข optional ข้อแลกเปลี่ยนคือแผงวันกว้างกว่าเดิม แต่แสดงข้ามเดือนได้ชัดขึ้น

หลักฐานรอบนี้รองรับการตรวจภาพ Desktop ของ Legacy-search-r5 เท่านั้น ยังไม่รับรอง interaction จริง ไม่อนุมัติ DSD-001 ทั้ง Task และยังต้องให้เจ้าของอนุมัติแบบ/เวอร์ชันก่อน Frontend อีกขั้น
