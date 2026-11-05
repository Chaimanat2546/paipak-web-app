# เช็กลิสต์ข้อค้าง Home Desktop

วันที่เริ่ม: 5 พฤศจิกายน 2026 (Asia/Bangkok) · Task DSD-001 · สถานะ: ตรวจทีละข้อ

เจ้าของสั่ง: “ทำ check list แล้วมาทำกันทีละอย่าง”

ฐานที่รับแล้วคือ [Home Desktop-r20 / Footer-r5](footer-contact-r5/owner-home-acceptance.json) พร้อม FAQ-r4 และข้อค้างเดิม ปิดรอบหน้าตาที่1440pxแล้ว เช็กลิสต์นี้ติดตามความพร้อมส่งต่อ ไม่ยกเลิกการรับเดิมหรือเปิดเลือกทิศทางใหม่ DSD-001 ทั้ง Task ยังไม่เสร็จ

## วิธีตรวจ

- ทำครั้งละหนึ่งจุด แสดงภาพใน Pencil ก่อนถามเรื่องหน้าตา และถามทีละข้อพร้อมสามตัวเลือก
- แยกผลตรวจของเอเจนต์ออกจากคำตอบตรวจรับของเจ้าของ ระบุเวอร์ชัน/ภาพ/ขอบเขตทุกครั้ง
- คง papaipak, Mitr, Navy #072D59, Light Blue #DBF2FC, Pink #FD6E88 และ UX ที่รับแล้ว
- ไม่เริ่ม Task อื่น, Frontend/CSS, backend, Auth จริง หรือ deploy; Mobile ยังพัก
- ไม่ถือว่าภาพนิ่งหรือโน้ตเท่ากับการทดสอบ click, keyboard, network หรือ accessibility จริง
- ไม่ commit/push อัตโนมัติจากคำสั่งทำเช็กลิสต์นี้

## ลำดับงาน

### C1 · Search ให้ตรง Home-r20 — รับภาพ/สเป็กและปรับ Library แล้ว

- [x] C1.1 ช่องสถานที่: รับภาพเปิดรายการแนะนำแบบAบน Home-r20 ตาม [หลักฐาน](search-home-r20-r2/owner-location-acceptance.json) คงช่องกรอกเดียวและสัญญาเดิม ไม่รับรองการพิมพ์/เลือก/ปิดจริงหรือSearchทั้งชุด
- [x] C1.2 ช่องวันที่: รับชุดภาพเปิด/วันเข้า/ช่วงครบ/ล้างวันตาม [หลักฐานรวมอ้างอิง](search-dates-home-r20-r4/owner-clear-acceptance.json) คงคู่เดือนและไม่มีบันทึก; ใช้กฎSearchวันเข้าอย่างเดียวล่าสุดในC1.4 การกดจริงยังไม่รับรอง
- [x] C1.3 ช่องผู้เข้าพัก: รับ [ชุดภาพจำนวนปกติ/สรุป/ปิดแผง](search-guests-home-r20-r1/owner-normal-count-acceptance.json) คงคนรวม/petsและพิมพ์ตัวเลข/+− ไม่มีบันทึกหรือล้างจำนวน; inputผิดรูปแบบ/เพดานและการกดจริงยังไม่ผ่าน
- [x] C1.4 รับ [กฎและภาพวันเข้าอย่างเดียว](search-checkin-only-home-r20-r1/owner-visual-acceptance.json), ช่วงครบต่อผู้เข้าพัก และคงค่าระหว่างแผง; ไม่เติมวันออก/จำนวนคืนเอง ไม่รับรองquery/availability/runtime
- [x] C1.5 รับ [Search Desktop-r2](search-desktop-review-r2/owner-search-acceptance.json): Searchใช้criteriaที่กรอก; ไม่เลือกข้อความสถานที่ที่ยังไม่ยืนยันถือว่าunsetและค้นหาได้; ทางลัดใช้เฉพาะหมวด คงฟอร์มHome ไม่กำหนดroute/query/rankingจริงจากfixture
- [x] C1.6 รับรุ่นรวม Search Desktop-r2 และ [ปรับState library](search-desktop-review-r2/library-rollout.json) แล้ว: Search9/รวม54รายการ พร้อมโน้ต54ชุด เก็บภาพเก่าในArchive การกดจริงและข้อมูลยังค้าง

ฐาน: [Legacy-search-r5](f01-ui-3/legacy-search-r5/README.md), [Month-nav-r6](f01-ui-3/legacy-search-r5/month-nav-r6/README.md), [guided review](f01-ui-3/home-guided-review/README.md)

เกณฑ์ผ่าน: ภาพอ้าง Home-r20; ไม่มี live title Hero เก่ากลับมา; Search/popup/controlsไม่ซ้อนผิด; กฎเดิมไม่เปลี่ยน; เจ้าของรับภาพ/เวอร์ชันที่ระบุ การรับไม่รับรองการค้นหาจริง

### C2 · ขอบเขต Login modal และการกลับหน้าเดิม

- [ ] ตรวจสัญญาจากปุ่มเข้าสู่ระบบและ Guest กดหัวใจ: เปิด modal ทับหน้าเดิม ไม่บันทึก Guest favorites
- [ ] ระบุการยกเลิก/กลับ origin และค่าที่ยังคงใน flow ต่อเนื่อง โดยไม่เพิ่มการกู้หลัง reload/หมดอายุ
- [ ] ทำขอบเขตย่อยHome Auth Desktopตาม [G0ที่เจ้าของอนุมัติ](home-auth-g0-approval.json): Login/Register/Forgot-reset, อีเมล+รหัสผ่าน/Google; เริ่มตกลงfieldsก่อนG2/G3 แบบปลายทางยังไม่รับ ไม่เริ่มUID-005ทั้งTask/Profile/MobileหรือระบบAuthจริง

เกณฑ์ผ่าน: แยกสิ่งที่ Home ต้องรักษากับแบบ/งาน Auth ที่ยังค้าง และมีคำตัดสินส่งต่อที่ชัด ไม่อ้างว่ามี modal พร้อมพัฒนาแล้ว

### C3 · การเข้าถึงและรายละเอียด Motion

- [ ] ทบทวน focus/keyboard ของ controls ใน Home โดยรักษาภาพเฉพาะจุดที่รับแล้ว
- [ ] ระบุสัญญา reduced motion, Hero เมื่อสลับแท็บ และการพัก/กลับมาเล่นตามกฎ7วินาที/800msเดิม
- [ ] แยก hover ของ Hero ที่ยังไม่รับ และประเด็น screen reader/ชื่อทดแทนภาพออกจากสิ่งที่อนุมัติแล้ว

เกณฑ์ผ่าน: รายละเอียดที่ยังขาดมีข้อสรุปหรือสถานะส่งต่อชัด ไม่มีการรับรอง accessibility/runtime จากภาพนิ่ง

### C4 · Desktop ความกว้างอื่น

- [ ] ให้เจ้าของเลือกขอบเขตความกว้าง Desktop ที่จะตรวจเพิ่มเติมเมื่อถึงข้อนี้
- [ ] ตรวจ Header, Hero/Search, แถวบ้าน, TikTok, บทความ, FAQ และ Footer ในขอบเขตนั้น
- [ ] บันทึกความกว้างที่รับจริง ไม่อ้างว่าครอบคลุมทุกจอ; Mobile/Tablet ไม่ถูกเริ่มจากเช็กลิสต์นี้

ฐาน: [responsive guidelines](responsive-visual-guidelines.md)

### C5 · ข้อมูล เนื้อหา ไฟล์ และปลายทางจริง

- [ ] สรุปสัญญาจำนวนSearchที่ยังค้างจากC1.3: ค่าว่าง/ติดลบ/ทศนิยม/ตัวอักษร และเพดานที่สัมพันธ์กับcatalog ไม่ยกmax50จากlegacy; ภาพจำนวนปกติที่รับแล้วไม่ปิดประเด็นเหล่านี้
- [ ] สรุปdata/query/availabilityของSearchวันเข้าอย่างเดียวกับงานข้อมูลที่เกี่ยวข้อง โดยคงวันออกunset ไม่อนุมานจำนวนคืนหรือราคา ไม่เปลี่ยนวันจองจากคำสั่งSearchนี้
- [ ] สรุปชื่อพื้นที่จริง/alias/normalization/ชื่อกำกวม/ไม่มีคำแนะนำตามข้อแก้ไขC1.5ล่าสุด ไม่ใช้ข้อความสถานที่ที่ยังไม่ยืนยันเป็นcriteria ไม่ยกfixture4แห่งเป็นรายการจริงหรือเลือกคำแนะนำแรกแทนผู้ใช้
- [ ] ทำรายการ fixture/placeholder และสิ่งที่ต้องเปลี่ยนก่อนใช้งานจริง: โลโก้ รูป Hero/บ้าน/ปกบทความ คลิปและเนื้อหา FAQ
- [ ] ตรวจชื่อ/URL LINE, โทรศัพท์, Facebook Page และ TikTok เมื่อมีข้อมูลจากเจ้าของ ไม่สร้างบัญชีหรือ URL ขึ้นเอง
- [ ] ระบุแหล่งข้อมูล/สิทธิ์ไฟล์และสัญญาที่ยังขาด แยกจากการรับ layout ด้วย mock

เกณฑ์ผ่าน: รู้ว่าอะไรเป็น mock อะไรตรวจจริงแล้ว และอะไรยังรอเจ้าของ/งานข้อมูล ไม่เชื่อม backend

### C6 · OPEN-001

- [ ] ติดตามข้อความขาวบนชมพูตาม [ประเด็นเปิด](../../decisions/open-decisions.yaml) และหลักฐานเดิม
- [ ] คงภาพอ้างอิงที่เจ้าของเลือก ไม่เปลี่ยนสีแบรนด์ ปิดประเด็น หรืออ้างผ่าน AA เอง
- [ ] เมื่อถึงข้อนี้ให้เจ้าของตัดสินใจขอบเขตการดำเนินการต่อ โดยแยก visual reference ออกจาก implementation/accessibility acceptance

### C7 · เก็บแพ็กเกจส่งต่อและหลักฐานล่าสุด

- [ ] บันทึก mapping ของพื้นที่ Pencil ปัจจุบัน: Home ที่รับแล้ว, State library/โน้ต54รายการ และ Archive (เริ่มต้น227เฟรม พร้อมหลักฐานรอบC1ที่เพิ่มภายหลังโดยคงID)
- [ ] เก็บ editable snapshots/ภาพ/manifest ที่จำเป็นผ่าน Pencil MCP พร้อมอ้างอิงเวอร์ชันและ hashes โดยรักษาหลักฐานเก่า
- [ ] ปรับเอกสารชี้ทางและเช็กลิสต์ให้ตรงสิ่งที่รับจริง พร้อมรายการข้อค้างส่งต่อ
- [ ] ให้เจ้าของตรวจขอบเขตส่งต่อสุดท้าย; การทำ Frontend ยังต้องมีคำสั่งแยก ไม่ใช่ผลอัตโนมัติของการปิดเช็กลิสต์

## จุดปัจจุบันและผลตรวจ

**C1 รับ Search Desktop-r2 และปรับState libraryแล้ว · ถัดไป C2 ตรวจขอบเขต Login modal/กลับorigin ภายในHome โดยยังไม่ออกแบบAuthแยก**

- ตรวจ Search ใน Hero Home-r20 (`DJmfy`) เทียบ Legacy Home-location (`M0kNSg`): ตำแหน่ง x200/y330, ขนาด1040×88 และตำแหน่งสามช่องตรงกัน
- ความต่างของบริบทหลักคือ Hero รุ่นเก่าใช้ข้อความเว็บ ส่วน Home-r20 ใช้ภาพรวมสำเร็จรูปและมี carousel controls
- ทำ [ภาพทบทวนช่องสถานที่บน Home-r20](search-home-r20-r1/README.md) แล้ว: native screen `lCVCf`, review board `D2xk3p`, popup `AVOks` คงแผงและกติกาเดิม รอเจ้าของตรวจเฉพาะจุดนี้ ยังไม่รับชุด Search รวม
- เจ้าของเลือก2ส่งr1กลับปรับpresentationตาม [หลักฐาน](search-home-r20-r1/owner-revision-request.json) จึงทำ [r2ตัวเลือกA/B/C](search-home-r20-r2/README.md) ให้เทียบแผง360/560/1040px ทุกแบบคงSearch/flowเดิม รอเลือก ยังไม่รับC1.1หรือเริ่มC1.2 ร่างr1ย้ายเข้าArchiveโดยเก็บIDเดิม
- เจ้าของตอบAรับภาพเปิดแผงสถานที่r2เฉพาะC1.1แล้ว ตาม [หลักฐาน](search-home-r20-r2/owner-location-acceptance.json) B/Cไม่ได้เลือก รูปในState libraryยังคงเดิมจนC1.6 ไม่ขยายเป็นการรับSearchทั้งชุดหรือสถานะพิมพ์/เลือก
- C1.2–C1.6 และC2–C7ยังค้าง การรับC1.1ไม่ตรวจรับหรือเริ่มFrontend
- ทำ [ภาพเปิดปฏิทิน C1.2](search-dates-home-r20-r1/README.md) แล้ว: screen `cDYPs`, popup `CnwHT`, board `FQapV` บนHome-r20 ภายในคู่เดือนคงMonth-nav-r6; เสนอกรอบ/เงาเข้าชุดAและเว้น8pxใต้Search รอตรวจภาพเปิดก่อนช่วงวัน/ล้างวัน
- เจ้าของเลือก1รับภาพเปิดตาม [หลักฐาน](search-dates-home-r20-r1/owner-open-acceptance.json) แล้ว C1.2ยังไม่ผ่านทั้งข้อ เหลือวันเข้าอย่างเดียว/ช่วงครบ/ล้างวันและการคงค่า ไม่รับC1.3หรือruntimeจากคำตอบนี้
- ทำ [ภาพเลือกวันเข้าแล้วรอวันออก](search-dates-home-r20-r2/README.md) แล้ว: screen `w7JOD`, popup `aM6In`, board `Nv3TS` ใช้วันเข้า12ธ.ค.ตามfixtureเดิม ไม่มีerrorก่อนsubmitและมีXล้างเฉพาะวัน รอเจ้าของตรวจ ภาพเปิดเดิม `FQapV` เก็บในArchive/sourceโดยคงID
- เจ้าของเลือก1รับภาพวันเข้าตาม [หลักฐาน](search-dates-home-r20-r2/owner-checkin-acceptance.json) แล้ว ต่อภาพช่วงวันครบ12–14ธ.ค.และเปิดผู้เข้าพักตามflowเดิม ยังเหลือล้างวันและC1.2/C1.3ยังไม่ผ่านทั้งข้อ
- ทำ [ภาพช่วงวันครบและเปิดผู้เข้าพัก](search-dates-home-r20-r3/README.md) แล้ว: screen `jlt1S`, popup `lut4c`, board `Uc4tR` คงค่าอื่นที่ยังunsetและใช้counter0/0ตามความหมายSearchเดิม ไม่เติม12คน/pets1จากfixtureต้นทางเอง รอตรวจภาพนี้ ก่อนการล้างวัน
- เจ้าของเลือก1รับ [ช่วงวันครบและภาพต่อผู้เข้าพัก](search-dates-home-r20-r3/owner-complete-range-acceptance.json) แล้ว ไม่ถามรับภาพเปิดguestsเดิมซ้ำในC1.3 แต่counterรายละเอียดและการล้างวันยังไม่ผ่าน
- ทำ [ภาพล้างวันก่อน/หลัง](search-dates-home-r20-r4/README.md) แล้ว: board `CQbub`, comparison `KlZFQ`, before `Qb5fQ`, after `MWWBP` ตั้งพัทยา/12คน/pets1ไว้ก่อนเพื่อพิสูจน์การคงค่า ตัวอย่างทุกแผงปิดอยู่ ล้างเฉพาะrange/Xแล้วค่าอื่นไม่เปลี่ยน รอตรวจเพื่อสรุปC1.2ด้านภาพ
- เจ้าของเลือก1รับ [ภาพล้างวัน](search-dates-home-r20-r4/owner-clear-acceptance.json) แล้ว ปิดC1.2เฉพาะภาพที่ตรวจ ไม่รับruntimeหรือvalidationC1.4 ต่อC1.3ภาพก่อน/หลังปรับจำนวน โดยรักษาวันที่12–14ธ.ค.เดิม ไม่ถามรับภาพเปิดguestsเดิมซ้ำ
- ทำ [ภาพC1.3จำนวนปกติ](search-guests-home-r20-r1/README.md) แล้ว: board `pUi81`, comparison `CAmWZ`, before `FSo2c`, after `XogVz`, closed `OzyK9` เปรียบเทียบ0/0→12/1และการปิดแผงโดยคงวัน รอตรวจ การกรอกค่าว่าง/ติดลบ/ทศนิยม/ตัวอักษร/ค่าสูงสุดยังไม่สรุปจากภาพนี้และไม่ยกmax50จากlegacyมาใช้
- เจ้าของเลือก1รับ [ภาพC1.3จำนวนปกติ](search-guests-home-r20-r1/owner-normal-count-acceptance.json) แล้ว ติดตามข้อค้างinputในC5และruntime/keyboardในC3 ไม่ถามรับภาพเดิมซ้ำ ต่อC1.4เฉพาะincomplete-date submit error ส่วนช่วงครบ/คงค่าระหว่างแผงรับในC1.2แล้ว
- ทำ [ภาพC1.4วันไม่ครบหลังsubmit](search-validation-home-r20-r1/README.md) แล้ว: board `LFTu8`, screen `qslTI`, popup `oCvGE` ใช้semantic errorเดิม/ข้อความบอกทางแก้ คงสถานที่และ12คน/pets1 รอตรวจ ไม่บังคับวันเพื่อสำรวจหรือขวางcategory shortcut
- เจ้าของแก้กฎว่า “เอาแค่วันเข้าก็ค้นหาได้” ตาม [หลักฐาน](search-checkin-only-home-r20-r1/owner-rule-change.json) จึงยกเลิกerrorproposalข้างต้นและกฎrejectSearchส่วนE-02เดิม ไม่เติมวันออก/จำนวนคืนเอง กฎวันจองยังเดิม พฤติกรรมนี้ยืนยันแล้ว ภาพปรับใหม่ยังต้องตรวจ ไม่เริ่มC1.5หรือแก้โค้ดจากคำสั่งนี้
- ทำ [ภาพปัจจุบันตามกฎวันเข้าอย่างเดียว](search-checkin-only-home-r20-r1/README.md) แล้ว: board `lozLh`, screen `fLKGL`, popup `SLLhR`; ถอนerrorล่าสุดเข้าArchive และแทนLibrary slotเฉพาะกฎผิดด้วย `NlbMq` ที่ระบุภาพรอตรวจ บันทึกกติกา/เก็บประวัติแล้วแต่ยังไม่รับหน้าตารุ่นนี้หรือSearchรวม
- เจ้าของเลือก1รับ [ภาพC1.4วันเข้าอย่างเดียว](search-checkin-only-home-r20-r1/owner-visual-acceptance.json) แล้ว อัปเดตป้ายLibrary slotนี้ตามการรับเฉพาะจุด ไม่รับSearchรวม ต่อC1.5แสดงความต่างเงื่อนไขส่งต่อ ไม่เปิดเลือกcategory-only policyเดิมซ้ำ
- ทำ [ภาพอธิบายC1.5](search-handoff-home-r20-r1/README.md) แล้ว: board `YXi4f`, comparison `RhfPI`, fragment `QLHzT` คงSearchใช้ค่าที่เลือก/category-onlyและBackตามเดิม คำถามที่ยังจำเป็นคือfree textที่ไม่เลือกsuggestion (C1.5-Q1) รอคำตอบ ไม่ออกแบบResultsหรือกำหนดquery/rankingจากfixture
- เจ้าของเลือก3ตาม [หลักฐานC1.5-Q1](search-location-match-home-r20-r1/owner-location-rule.json) กติกานี้ยืนยันแล้ว ไม่เปิดเลือกซ้ำ ต่อภาพสองกรณีและขอรับเฉพาะpresentation ข้อมูลชื่อจริง/alias/normalization/ไม่มีคำแนะนำยังค้างในC5 ไม่รับSearchรวมหรือFrontendจากคำตอบ3
- ทำ [ภาพC1.5ชื่อตรง/ข้อความไม่ตรง](search-location-match-home-r20-r1/README.md) แล้ว: board `DV0Ub`, comparison `O0HR8U`, exact `Iuh5g`, partial `pJCjU`, popup `hU8Vq` แสดงหลังsubmitด้วยพัให้เลือกพัทยาจากfixture โดยไม่เลือกเองและคงcriteriaอื่น รอรับภาพก่อนC1.6
- เจ้าของย้ำ “ค้นหาได้หากไม่ใส่” ตาม [หลักฐานเว้นว่าง](search-location-match-home-r20-r2/owner-empty-search-confirmation.json) ยืนยันสถานที่ว่างใช้ได้ และสัญญาเดิมทุกช่องoptionalยังมีผล กติกาชื่อไม่ตรงให้เลือกใช้เฉพาะเมื่อกรอกสถานที่ ไม่ถือว่ารับภาพใหม่จากคำย้ำนี้
- เพิ่ม [C1.5ภาพเว้นว่างและครบ4กรณี](search-location-match-home-r20-r2/README.md) แล้ว: board `jPqa4`, full comparison `Ou35C`, empty comparison `mMr0L`, location empty `E3f0t`, all empty `bFjcq` ปุ่มค้นหาใช้ได้ในภาพว่างและคงcriteriaอื่น รอรับpresentationก่อนรวบรวมC1.6

- เจ้าของเลือก1รับ [สองภาพเว้นว่าง](search-location-match-home-r20-r2/owner-empty-visual-acceptance.json) แล้ว และให้รวบรวมชุด Search ต่อ ไม่รับภาพชื่อตรง/ชื่อไม่ตรงหรือ Search รวมจากคำตอบนี้
- จัด [Search Desktop-r1](search-desktop-review-r1/README.md) native `vOXl6` เป็น3กลุ่ม `q8XTl`/`KNJWD`/`EmhJ7` สำหรับ C1.6แล้ว รอตรวจรับรวม C1.5/C1.6ยังไม่ปิด State libraryยังไม่rollout ภาพHomeหลัก/งานอื่นไม่เปลี่ยน

- เจ้าของแก้กรณีท้ายของ Search-r1 ว่าไม่เลือกสถานที่ต้องค้นหาได้ ตาม [หลักฐาน](search-desktop-review-r2/owner-location-correction.json) ถอนข้อบังคับเลือกคำแนะนำของข้อความไม่ครบ และทำ [Search Desktop-r2](search-desktop-review-r2/README.md) ไม่มีกรอบแดง/ข้อความบังคับ ไม่ส่งคำที่ยังไม่ยืนยันเป็นสถานที่ คงcriteriaอื่น ภาพและชุดรวมรอตรวจ ไม่รับr1ย้อนหลังหรือเปลี่ยนState libraryก่อนรับรวม

- เจ้าของเลือก1รับ [ภาพแก้ไขกรณีไม่เลือกสถานที่](search-desktop-review-r2/owner-unselected-visual-acceptance.json) native `sdNaQ` / viewport `PsGZV` แล้ว ไม่ขยายเป็นการรับกรณีชื่อตรง/ทั้งSearch-r2 เตรียมขอรับรุ่นรวม C1.6; C1.5/C1.6และState libraryrolloutยังไม่ปิด

- เจ้าของเลือก1รับ [Search Desktop-r2 ทั้งชุด](search-desktop-review-r2/owner-search-acceptance.json) แล้ว rolloutSearch9รายการ/Library54รายการพร้อมโน้ตตาม [mapping](search-desktop-review-r2/library-rollout.json) ปิดC1.5/C1.6เฉพาะภาพ/สเป็ก1440px ย้าย4ภาพเก่าและโน้ตเดิมเข้าArchive เก็บID ไม่ลบ เปิดC2เป็นเรื่องถัดไปในเช็กลิสต์เดิมโดยไม่เริ่มAuthTaskหรือFrontend

- C2: เจ้าของเลือกหารือขอบเขตmodalตอนนี้ แล้วเลือก3สำหรับLogin/Register/Forgot และเลือก2สำหรับอีเมล+รหัสผ่าน/Google ตาม [บันทึก](home-auth-discussion-selections.json) เสนอ [G0รุ่น1](home-auth-g0-brief.md) เป็นขอบเขตย่อยHome Auth DesktopในDSD-001 รออนุมัติก่อนสร้างUI ยังไม่เริ่มUID-005หรือระบบAuthจริง

- C2: เจ้าของเลือก1อนุมัติ [Home Auth Desktop G0 plan-1](home-auth-g0-approval.json) และเพิ่มขอบเขตย่อยในDSD-001แล้ว เก็บแผนขณะตรวจbytesเดิม ขั้นA1คือข้อมูลสมัครทีละข้อ ก่อนทำโครง/High-Fi ไม่เปลี่ยนสถานะUID-005หรือdependencyเดิม ไม่รับแบบสุดท้าย/FrontendจากG0

- C2/A1.1: เจ้าของเลือก3ให้ฟอร์มสมัครด้วยอีเมลมีชื่อ/นามสกุล/เบอร์โทร/อีเมล/รหัสผ่าน ตาม [หลักฐาน](home-auth-registration-fields-decision.json) บันทึก [Auth specระหว่างหารือ](home-auth-desktop-spec.md) แล้ว รอตัดสินใจrequired fields ไม่เพิ่มphone login/OTPหรือรับvalidationของเดโมเอง C2ยังไม่ปิด

- C2/A1.2: เจ้าของเลือก1ให้บังคับกรอกชื่อ/นามสกุล/เบอร์โทร/อีเมล/รหัสผ่านครบสำหรับสมัครด้วยอีเมล ตาม [หลักฐาน](home-auth-registration-required-decision.json) ไม่ขยายเป็นphone login/OTPหรือGoogle completion policy รายละเอียดรหัสผ่านและvalidationยังค้าง C2ยังไม่ปิด

- C2/A1.3: เจ้าของเลือก1รับช่องยืนยันรหัสผ่านทั้งสมัครด้วยอีเมลและตั้งรหัสใหม่ ต้องตรงกัน ตาม [หลักฐาน](home-auth-password-confirmation-decision.json) ยังไม่เลือกรหัสผ่านขั้นต่ำหรือยืนยันอีเมล/Google completion และไม่เพิ่มconfirmationในLogin ไม่มีการแก้UI/codeจากการบันทึกนี้

- C2/A1แก้ไข: เจ้าของให้ใช้usernameแทนชื่อ/นามสกุล ตาม [หลักฐาน](home-auth-username-amendment.json) บังคับusername/โทร/อีเมล/รหัสผ่านและconfirmationตามกฎเดิมในขอบเขตที่คงไว้ ถามGoogleต่อโดยใช้username/โทรเป็นข้อมูลที่อาจขาด ไม่เพิ่มusername login/OTPและไม่แก้Taskอื่น ยังไม่ปิดC2

- C2/A1.4: เจ้าของเลือก3ให้Googleผู้ใช้ไปเติมusername/เบอร์โทรที่ขาดในบัญชีภายหลัง ตาม [หลักฐาน](home-auth-google-profile-decision.json) ไม่แทรกcompletion formหรือบังคับสองข้อมูลนี้ในGoogle signup ไม่แก้required email signup/เพิ่มlocal password/สร้างusernameอัตโนมัติ และไม่เริ่มProfile Task C2ยังไม่ปิด

- C2/Username: เจ้าของเลือก1ให้ชื่อแสดงซ้ำได้ตาม [หลักฐาน](home-auth-username-role-decision.json) ไม่มีavailability/duplicate-errorหรือsuffixอัตโนมัติ loginยังอีเมล/Google อ่านNISTเพื่อเสนอ [password-policy-r1](home-auth-password-policy-proposal.md) ขั้นต่ำ15สำหรับตั้งรหัสใหม่ ยังรอตัดสินใจ ไม่เพิ่มMFAหรืออ้างcompliance/runtime

- C2/Password: เจ้าของระบุสมัครและตั้งรหัสใหม่ขั้นต่ำ8ตัวตาม [หลักฐาน](home-auth-password-minimum-decision.json) คงช่องยืนยันและการตรงกัน ถอนminimum15จากข้อเสนอเดิม ไม่ยกข้อเสนออื่นเป็นอนุมัติหรืออ้างNIST compliance การยืนยันอีเมลและflowอื่นยังค้างก่อนG2

- C2/Email verification: เจ้าของเลือก2และระบุว่าปฏิเสธได้/ยืนยันเองทีหลัง ตาม [หลักฐาน](home-auth-email-verification-decision.json) เข้าใช้บัญชีหลังสมัครอีเมลได้ก่อน ข้อความชวนยืนยันข้ามได้ สถานะยังunverified ไม่เพิ่มสิทธิ์Booking/เวลาแสดงซ้ำเอง ทางเข้ายืนยันภายหลังต้องอยู่ในspec/ส่งต่อ ไม่เริ่มProfileหรือระบบส่งอีเมลจริง

- C2/Reset: เจ้าของเลือก1รับการส่งลิงก์อีเมลตั้งรหัสใหม่ตาม [หลักฐาน](home-auth-reset-link-decision.json) ขั้นต่ำ8และconfirmationเดิม ไม่กำหนดอายุลิงก์หรือauto-loginเอง เริ่มร่างG2แผนผัง/โครงLoginภายใต้G0แล้ว ส่วนฟอร์มอื่น/ภาพรวม/High-Fiยังต้องตรวจรับ

- C2/G2-r1: สร้าง [แผนผังและโครงLogin](home-auth-g2-r1/README.md) native `OgKpW`/`Df2ip`/`Sljji`/`VAqjR` ในpapaipak-ui.penตามG0 แล้ว รอรับเฉพาะโครงLoginก่อนRegister/Forgot-reset ไม่แก้UXD-002 pen/ไม่เริ่มHigh-Fi/ไม่rolloutState libraryหรือAuthจริง

- C2/G2รอบแก้: เจ้าของส่งLogin-r1กลับเรื่องโครงที่ไม่คุ้นเคย อ่านofficialBooking/Airbnb entry textโดยระบุข้อจำกัดscreenshotและทำ [G2-r2](home-auth-g2-r2/README.md) native `yh2Wm`/`f2TAg`/`Pu3jT` เปลี่ยนลำดับและจัดกลุ่มเท่านั้น รอรับLogin r1ย้ายArchiveไม่ลบ ไม่มีHigh-FiหรือUIอนุมัติจากfeedbackนี้

- C2/G2: เจ้าของเลือก1รับ [Login-r2เฉพาะโครง](home-auth-g2-r2/owner-login-structure-acceptance.json) แล้ว ทำ [Register-r1](home-auth-register-g2-r1/README.md) native `jfNA7`/`T8ZNE0`/`V9XgD` ตามfieldsล่าสุด รอรับRegisterก่อนForgot/Reset/states บอร์ดLoginย้ายArchive/sourceโดยคงIDs ไม่รับG2รวมหรือHigh-Fi

- C2/G2: เจ้าของเลือก1รับ [Register-r1เฉพาะโครง](home-auth-register-g2-r1/owner-register-structure-acceptance.json) แล้ว และขอ [Phone+Password Login](home-auth-phone-login-amendment.json) เพิ่มแบบidentifierช่องเดียวใน [Login-r3](home-auth-login-g2-r3/README.md) รอตรวจ ไม่เพิ่มOTP/username login/วิธีกู้ทางโทรหรือbackend ยังไม่รับG2รวม/High-Fi

- C2/G2: เจ้าของเลือก1รับ [Login-r3โครง](home-auth-login-g2-r3/owner-login-structure-acceptance.json) แล้ว ทำ [Recovery-r1](home-auth-recovery-g2-r1/README.md) root `n2gWyS` มีrequest `tJxL1`/ack `z5EJtN`/reset `ZsOMo`/success `MKMGi`/unusable `l0YcM` รอรับเฉพาะrequestก่อน รูปอื่นและG2รวมยังไม่รับ ไม่มีAuthจริง/High-Fi/Libraryrollout

- C2/G2: เจ้าของเลือก1รับ [Forgot request `tJxL1` เฉพาะโครง](home-auth-recovery-g2-r1/owner-forgot-request-acceptance.json) แล้ว ต่อack `z5EJtN` รอตรวจ ไม่รับstatesถัดไปหรือG2รวม/High-Fi ไม่กำหนดเวลาresendหรือส่งmailจริง

- C2/G2: เจ้าของเลือก1รับackโดยสั่งถอนเปลี่ยนอีเมล ทำ [Ack-r2 `IvrCQ`](home-auth-recovery-g2-r2/owner-acknowledgement-acceptance.json) คงLogin/ส่งซ้ำ/ปิด และเก็บr1เดิมเข้าArchive Current reset `ZsOMo` รอตรวจ ไม่ถือว่ารับsuccess/unusable/G2รวมหรือกำหนดเวลาส่งซ้ำ

- C2/G2: เจ้าของเลือก1รับ [Reset form `ZsOMo`](home-auth-recovery-g2-r1/owner-reset-form-acceptance.json) เฉพาะโครงขั้นต่ำ8/confirmation/controls ต่อsuccess `MKMGi` และทางกลับLoginที่ยังเสนอ ไม่อนุมัติauto-login/เปลี่ยนรหัสจริง/error states/G2รวมหรือHigh-Fi

- C2/G2: เจ้าของเลือก1รับ [Reset success `MKMGi` และปุ่มเปิดLogin](home-auth-recovery-g2-r1/owner-reset-success-acceptance.json) แล้ว ไม่มีauto-login ต่อunusable-link `l0YcM` รอตรวจ ไม่รับG2รวมหรือstatesอื่นจากคำตอบนี้

- C2/G2: เจ้าของเลือก1รับ [unusable-link `l0YcM`/ขอลิงก์ใหม่](home-auth-recovery-g2-r1/owner-unusable-link-acceptance.json) แล้ว Recovery coreรับเฉพาะโครงรายจุด ต่อ [Login states-r1](home-auth-login-states-g2-r1/README.md) native `XWgqE`/`W6UVRW`(รอตรวจgenericerror)/`b9XFG`(required)/`f7pjh2`(submitting) ส่วนสองสถานะหลังยังไม่รับ ไม่ถือว่ารับG2รวม/High-Fi/ระบบจริง

- C2/G2 Login error: เจ้าของถามตำแหน่งปกติ ไม่ถือว่ารับหรือปฏิเสธ จัด [placement-r2](home-auth-login-error-placement-g2-r2/README.md) root `u0aE4E`, A `W7bxCs`/B `Tc3zT`/C `C8pW5` หลังอ่านprimaryWAI แยกguidanceกับข้อเสนอ ไม่อ้างทุกเว็บต้องA รอเลือก error/required/loading/G2รวมยังไม่ผ่าน

- C2: เจ้าของเลือกCerrorก่อนปุ่มตาม [บันทึก](home-auth-login-error-placement-g2-r2/owner-C-selection.json) แล้วถามใช้flowAirbnb เปิด [หารือflow](home-auth-airbnb-flow-discussion.md) จากofficialLogin/helpโดยไม่ส่งฟอร์มจริง ยังไม่เปลี่ยนวิธีAuth/เพิ่มOTP/รื้อแบบหรือรับG2รวมจากคำถามนี้

- C2/G2: เจ้าของเลือก1จากหารือAirbnb ให้แบ่งLoginเป็นอีเมล/โทร → รหัสผ่านโดยคงGoogle ตาม [หลักฐาน](home-auth-two-step-login-decision.json) ทำ [G2-r4](home-auth-login-g2-r4/README.md) root `UXSzw`/step1 `TxO8X`/step2 `y9BBA`/errorC `o9jws` รอรับโครงใหม่ ร่างstatesหน้าเดียวก่อนหน้าเก็บArchive ไม่เลือกOTPหรือยกเลิกRegister/Recovery ไม่รับG2รวม/High-Fi

- C2/G2เปลี่ยนflow: เจ้าของระบุOTPเป็นหลัก รหัสผ่านเฉพาะเมื่อเลือกLoginด้วยรหัส ตาม [หลักฐาน](home-auth-otp-primary-amendment.json) ร่างr4ไม่ใช่defaultล่าสุด เก็บArchiveไม่ลบและยังไม่รับภาพ รอ [เลือกขอบเขตช่องทางOTP](home-auth-otp-primary-discussion.md) แล้วหารือSignup/passwordและstateใหม่ ไม่กำหนดSMS/provider/จำนวนหลัก/expiryเองหรือเริ่มระบบจริง

- C2/Auth methods: เจ้าของเลือก2รับ [Email OTPเฉพาะอีเมลก่อน](home-auth-email-otp-scope-decision.json) Phoneยังpassword / Emailpasswordเลือกเอง / Googleเดิม ไม่เลือกSMSหรือOTPโทร ยังไม่กำหนดจำนวนหลัก/เวลา/ส่งซ้ำ ต่อหารือpasswordในSignupก่อนร่างOTPใหม่ ไม่รับG2รวมหรือbackend

- C2/Signup: เจ้าของเลือก3คงpasswordและconfirmationบังคับขั้นต่ำ8ตาม [หลักฐาน](home-auth-signup-password-retained-decision.json) โดยคงemail OTP default Login/phone password/Google ทำ [Login-r5](home-auth-login-g2-r5/README.md) รอตรวจโครงใหม่ ยังไม่รับstates/G2รวม/High-Fiหรือระบบจริง

- C2/OTP: เจ้าของขอแยกช่องและเลือก6หลักตาม [หลักฐาน](home-auth-otp-six-digit-decision.json) ทำ [G2-r6](home-auth-login-g2-r6/README.md) modal `IRBZ2` รอตรวจโครง6ช่อง อายุรหัส/ส่งซ้ำ/input behavior/statesและG2รวมยังไม่รับ

- C2/OTP-r6: เจ้าของเลือก1รับ [รูปแบบ6ช่อง](home-auth-login-g2-r6/owner-otp-layout-acceptance.json) เฉพาะภาพ `IRBZ2` และขนาด/ระยะที่แสดง ต่อพฤติกรรมการกรอก; states/expiry/resend/G2รวมยังค้าง ไม่เริ่มHigh-FiหรือFrontend

- C2/OTP interaction: เจ้าของเลือก2รับauto advanceและตรวจทันทีเมื่อครบ6หลักตาม [หลักฐาน](home-auth-otp-auto-verification-decision.json) ทำ [OTP-r7](home-auth-otp-auto-g2-r7/README.md) ไม่มีปุ่มยืนยัน รอตรวจchecking-stateและการพักcontrols; error/retry/inputรายละเอียดอื่นและG2รวมยังค้าง

- C2/OTP: เจ้าของเลือก1รับ [checking-state-r7](home-auth-otp-auto-g2-r7/owner-checking-state-acceptance.json) แล้ว ต่อ [invalid-r8](home-auth-otp-invalid-g2-r8/README.md) modal `yA4C7` เสนอล้าง6ช่อง/โฟกัสแรก รอรับเฉพาะกรณีรหัสผิด ไม่รับG2รวม/expired/resendหรือระบบจริง

- C2/OTP: เจ้าของเลือก1รับ [invalid-r8](home-auth-otp-invalid-g2-r8/owner-invalid-code-acceptance.json) แล้ว ต่อ [expired-r9](home-auth-otp-expired-g2-r9/README.md) modal `t8JxU` รอตรวจการขอรหัสใหม่เอง ยังไม่เลือกexpiry/resend policyหรือรับG2รวม

- C2/OTP: เจ้าของเลือก1รับ [expired-r9](home-auth-otp-expired-g2-r9/owner-expired-code-acceptance.json) แล้ว ต่อ [resend-r10](home-auth-otp-resend-g2-r10/README.md) pending `LRyGj` / ready `TiPIP` รอตรวจ ไม่กำหนดcooldown/providerจากร่างและยังไม่รับG2รวม

- C2/OTP: เจ้าของเลือก1รับ [resend-r10ทั้งคู่](home-auth-otp-resend-g2-r10/owner-resend-states-acceptance.json) แล้ว ต่อ [request failure-r11](home-auth-otp-resend-failure-g2-r11/README.md) modal `cZWL1` รอตรวจ explicit retry ไม่เลือกquota/cooldown/providerหรือรับG2รวม

- C2/OTP: เจ้าของเลือก1รับ [request-failure-r11](home-auth-otp-resend-failure-g2-r11/owner-resend-failure-acceptance.json) แล้ว ต่อ [resend-wait-r12](home-auth-otp-resend-wait-g2-r12/README.md) modal `Q3S76` รอตรวจ ยังไม่เลือกเวลารอ/quota/providerหรือรับG2รวม

- C2/OTP waitแก้ไข: เจ้าของขอนับในปุ่มตาม [หลักฐาน](home-auth-otp-button-countdown-decision.json) ทำ [r13](home-auth-otp-button-countdown-g2-r13/README.md) modal `QsMQ8` รอตรวจ ไม่รับr12หรือถือ00:45เป็นเวลาจริง ยังไม่รับG2รวม

- C2/OTP wait: เจ้าของเลือก3ถอนกล่องแจ้งรอ ทำ [countdown-only-r14](home-auth-otp-countdown-only-g2-r14/README.md) modal `E3yBs` รอตรวจ ไม่ถือว่ารับr13หรือเลือกเวลาจริง

- C2/OTP: เจ้าของเลือก1รับ [countdown-only-r14](home-auth-otp-countdown-only-g2-r14/owner-countdown-only-acceptance.json) แล้ว ต่อ [verify-failure-r15](home-auth-otp-verify-failure-g2-r15/README.md) modal `d0PtEH` รอตรวจ ค่าเวลารอ/provider/inputรายละเอียดอื่นและG2รวมยังค้าง

- C2/OTP: เจ้าของเลือก1รับ [verify-failure-r15](home-auth-otp-verify-failure-g2-r15/owner-verification-failure-acceptance.json) แล้ว ต่อ [input discussion](home-auth-otp-input-discussion.md) เริ่มการวางก่อนBackspace ไม่ถือว่ารับinputทุกกฎหรือG2รวม

- C2/OTP input: เจ้าของเลือก1รับ [pasteครบ6หลักจากทุกช่อง](home-auth-otp-paste-decision.json) แล้ว ต่อ [Backspaceช่องว่าง](home-auth-otp-input-discussion.md) การวางผิดรูปแบบ/autofill/ลบรายละเอียดอื่นและG2รวมยังค้าง

- C2/OTP input: เจ้าของเลือก1รับ [Backspaceที่ช่องว่าง](home-auth-otp-empty-backspace-decision.json) ถอยลบตัวก่อนหน้าแล้ว ต่อ [Backspaceช่องมีเลข](home-auth-otp-input-discussion.md) ไม่ถือว่ารับกฎลบทุกแบบหรือG2รวม

- C2/OTP input: เจ้าของเลือก2พร้อมชี้แจง [filled Backspace](home-auth-otp-filled-backspace-decision.json) ถอยตำแหน่งลบแต่เลขใหม่เติมช่องที่เพิ่งลบ ทำ [r16](home-auth-otp-backspace-g2-r16/README.md) sequence `Im1AA` รอตรวจ ไม่ถือว่ารับinputทุกแบบ/G2รวม

- C2/OTP input: เจ้าของเลือก1รับ [ลำดับr16](home-auth-otp-backspace-g2-r16/owner-backspace-sequence-acceptance.json) แล้ว ต่อ [การวางมีตัวคั่น/ข้อความอื่น](home-auth-otp-input-discussion.md) ไม่ถือว่ารับกฎnormalizeหรือG2รวม

- C2/OTP paste: เจ้าของเลือก2รับ [ดึงรหัส6หลักชุดเดียวจากข้อความ](home-auth-otp-text-extraction-decision.json) แล้ว ต่อ [วางแล้วดึงรหัสไม่ได้ชัดเจน](home-auth-otp-input-discussion.md) ไม่เลือกselector/การล้างข้อมูลหรือรับG2รวมจากวิธีextract

- C2/OTP paste: เจ้าของชี้แจง [รับได้ใส่ รับไม่ได้ไม่ใส่](home-auth-otp-quiet-paste-clarification.json) คงค่าเดิม ไม่มีwarning/selectorเพิ่ม จบคำถามrejected pasteและเพิ่มโน้ตPencil `GGu0r` ไม่ย้อนแก้ภาพที่รับไว้หรือรับG2รวม

- C2/Google: เจ้าของให้ไปข้อต่อไป ทำ [Google-r17](home-auth-google-g2-r17/README.md) comparison `Nnfb4` / cancellation `EjvEz` / failure `lDH8c` รอตรวจสองสถานะLoginในขอบเขตG0เดิม ไม่ถือว่ารับGoogleทั้งflow/G2รวม/OAuthจริง

- C2/Googleแก้ตำแหน่ง: เจ้าของขอให้errorอยู่ตำแหน่งเดียวกัน ทำ [r18](home-auth-google-g2-r18/README.md) failure `sbCLw` ใต้fieldก่อนprimary คงcancellation `EjvEz` ทั้งคู่ยังรอตรวจ ไม่ถือว่ารับG2รวม

- C2: เจ้าของตอบได้ รับ [Google failure-r18](home-auth-google-g2-r18/owner-Google-error-acceptance.json) เฉพาะที่แสดง cancellationยังค้าง ต่อ [email verification reminder-r19](home-auth-email-verification-g2-r19/README.md) modal `vDPf8` รอตรวจ ไม่เลือกวิธียืนยัน/providerหรือรับG2รวม

- C2/Verification: เจ้าของยืนยัน [Googleไม่ต้องยืนยันอีเมลกับเว็บเพิ่ม](home-auth-google-no-extra-email-verification.json) ใช้reminder-r19เฉพาะlocal email/password signup เพิ่มโน้ต `tmk7i` ภาพr19ยังรอตรวจ ไม่ถือว่าเลือกmodalหรือรับG2รวม

- C2/Verification: เจ้าของรับ [reminder-r19เฉพาะสมัครอีเมล](home-auth-email-verification-g2-r19/owner-reminder-acceptance.json) แล้ว Googleข้าม ต่อ [วิธียืนยันอีเมล](home-auth-email-verification-method-discussion.md) ยังไม่เลือกmethod/providerหรือรับG2รวม

- C2/Verification: เจ้าของเลือก1รับ [วิธีOTPอีเมล6หลัก](home-auth-email-verification-otp-decision.json) ทำ [r20](home-auth-email-verification-otp-g2-r20/README.md) OTP `RukQJ` / success `ip2bA` รอตรวจ methodไม่ใช่การรับstatesทั้งหมดหรือG2รวม

- C2: เจ้าของเลือก1รับ [verification-r20สองหน้า](home-auth-email-verification-otp-g2-r20/owner-verification-screens-acceptance.json) แล้ว ต่อ [Register validation-r21](home-auth-register-validation-g2-r21/README.md) required `l5oguz` / password `JuD5C` รอตรวจ ไม่รับG2รวม

- C2/Signup: เจ้าของขอ [เช็คflowก่อน](home-auth-signup-flow-g2-r22/owner-flow-review-request.json) ทำ [r22](home-auth-signup-flow-g2-r22/README.md) diagram `l3YDNm` รอตรวจ พักการรับr21โดยไม่ลบภาพเดิม ไม่รับG2รวมหรือเริ่มTaskอื่น

- C2/Signup: เจ้าของเลือก1รับ [flow-r22](home-auth-signup-flow-g2-r22/owner-signup-flow-acceptance.json) เฉพาะflowแล้ว กลับตรวจ [states-r21](home-auth-register-validation-g2-r21/README.md) comparison `LhNUV` เดิม ยังไม่รับสองstatesหรือG2รวม

- C2/Register: เจ้าของเลือก1รับ [validation-r21](home-auth-register-validation-g2-r21/owner-register-validation-acceptance.json) ทั้งคู่แล้ว ต่อ [request-r23](home-auth-register-request-g2-r23/README.md) submitting `sv8oc` / failure `AUaUi` รอตรวจ ไม่รับG2รวมหรือระบบจริง

- C2/Register error: เจ้าของชี้แจง [ต้องบอกสาเหตุที่ผิด](home-auth-register-reasons-g2-r24/owner-cause-clarification.json) ทำ [r24](home-auth-register-reasons-g2-r24/README.md) comparison `ju8mL` รอตรวจ Generic failure-r23ไม่รับและsubmittingยังค้าง ไม่รับG2รวม

- C2/Input errors: เจ้าของให้ [ไว้ตรงinput](home-auth-register-input-errors-g2-r25/owner-input-placement-clarification.json) ถอนsummaryซ้ำก่อนปุ่ม ทำ [r25](home-auth-register-input-errors-g2-r25/README.md) comparison `lFRIn` รอตรวจ คงกฎvalidationเดิม ไม่รับconnection/submitting/G2รวม

- C2/Auth error audit: เจ้าของให้ [ทบทวนแบบเก่า](home-auth-error-audit-r26/owner-review-request.json) ตรวจแล้วและปรับ/เติม8ตัวอย่างใน [r26](home-auth-error-audit-r26/README.md) overview `e5s61`/full board `c7WrJm` ภาพเดิม100ไฟล์คงhashเดิม เจ้าของรับ [8ตัวอย่างr26ที่แสดง](home-auth-error-audit-r26/owner-error-audit-acceptance.json) แล้วด้วย “โอเค แบบนี้ได้ ไปข้อต่อไป” ต่อr25สองกรณีใต้inputที่ยังรอตรวจ ไม่รับstatesอื่นหรือG2รวม

- C2/Register inline-r25: เจ้าของเลือก1รับ [สองกรณีใต้input](home-auth-register-input-errors-g2-r25/owner-register-inline-acceptance.json) ตามภาพ `lFRIn` แล้ว คงกฎr21และถอนsummaryซ้ำ ไม่รับconnection-r24/submitting-r23หรือG2รวมจากคำตอบนี้ ข้อต่อไปตรวจสองสถานะคำขอสมัครสมาชิกด้วยกัน

- C2/Register request pair: [r27](home-auth-register-request-review-r27/README.md) comparison `SWUdD` รวมกำลังสมัคร-r23กับเชื่อมต่อไม่ได้-r24ที่ยังรอตรวจ โดยคัดลอกแหล่งเดิมและคง12PNGhashเดิม ไม่รวมgeneric failureเก่าหรือรับG2รวม

- C2/Register request-r27: เจ้าของเลือก1รับ [กำลังสมัครและknown connection failureทั้งคู่](home-auth-register-request-review-r27/owner-request-states-acceptance.json) ตามภาพ `SWUdD` แล้ว ไม่รับgeneric failureเก่าหรือprovider policy ข้อต่อไปตรวจ [Google cancellation-r17 `EjvEz`](home-auth-google-g2-r17/EjvEz.png) ที่ยังค้าง โดยfailure-r18รับแล้ว

- C2/Google Login cancel: เจ้าของเลือก1รับ [กลับLoginเดิมโดยเงียบ](home-auth-google-g2-r17/owner-Google-cancellation-acceptance.json) ตาม `EjvEz` คงค่าและไม่ส่งOTPเอง ไม่รับGoogle Register return/G2รวม ข้อต่อไป [การทำรายการต่อหลังLoginที่เปิดด้วยหัวใจ](home-auth-favorite-return-discussion.md) ยังไม่มีคำตัดสินauto-saveในฐานเดิม

- C2/Home heart continuation: เจ้าของเลือก1รับ [ทำรายการต่อหลังAuthสำเร็จ](home-auth-favorite-return-decision.json) โดยไม่ต้องกดซ้ำ ไม่มีGuest favorites; Loginสำเร็จไม่เท่ากับบันทึกสำเร็จ ทำ [r28](home-auth-favorite-return-g2-r28/README.md) comparison `yZwwg` เสนอpending/savedและข้อความยืนยัน รอตรวจภาพ ส่วนไม่สำเร็จ/ผลกำกวมและG2รวมยังค้าง

- C2/Favorite-r28: เจ้าของเลือก1รับ [pending/savedที่แสดง](home-auth-favorite-return-g2-r28/owner-favorite-return-states-acceptance.json) แล้ว ต่อ [r29](home-auth-favorite-result-g2-r29/README.md) comparison `N1kDoM` เสนอknown-not-savedให้ลองใหม่ กับunknownให้ตรวจผลก่อนส่งซ้ำ ยังรอตรวจสองกรณี/G2รวม ไม่เลือกproviderหรือระบบจริง

- C2/Favorite-r29: เจ้าของระบุ [ไม่เอาไม่จำเป็น](home-auth-favorite-result-g2-r29/owner-not-needed-rejection.json) ไม่ใช้ทั้งสองUI/ข้อความ/ปุ่มลองใหม่และตรวจสอบ ซ่อนnative `K0Jdw` เก็บหลักฐานเดิม คงr28ที่รับแล้ว ไม่กลับมาขอรับร29ซ้ำโดยไม่มีคำขอใหม่ และไม่ถือว่าอนุมัติwholeG2หรือระบบจัดการerrorจริง

- C2/Current Login-r30: หลังเจ้าของให้ไปข้อต่อไป นำ [สี่โครงปัจจุบัน](home-auth-login-flow-g2-r30/README.md) comparison `LnXw4` มาตรวจentry/emailOTP/emailpassword/phonepasswordและทางย้อนกลับ วิธีAuthเดิมคงไว้ รอตรวจโครงร30 ไม่คืนFavorite-r29 ไม่รับG2รวมหรือHigh-Fi

- C2/Login-r30: เจ้าของเลือก1รับ [สี่โครงและทางไปต่อ/ย้อนกลับ](home-auth-login-flow-g2-r30/owner-Login-structure-acceptance.json) ตาม `LnXw4` แล้ว คงวิธีAuthเดิมและ00:45fixture ข้อต่อไป [คลิกพื้นที่มืดนอกAuth](home-auth-modal-dismissal-discussion.md) ที่ยังไม่พบคำตัดสิน ไม่คืนFavorite-r29หรือรับG2รวม

- C2/Auth outside click: เจ้าของเลือก2รับ [คลิกนอกปิดได้](home-auth-modal-dismissal-decision.json) โดยไม่จำกัดฟอร์มว่าง ไม่เพิ่มconfirmation ไม่อนุมานserver rollback ต่อ [ข้อมูลAuthเมื่อปิดแล้วเปิดใหม่](home-auth-reopen-draft-discussion.md) ที่ยังไม่เลือก ต่างจากการคงSearch/Home originและไม่กู้intentที่ยกเลิก

- C2/Auth reopen draft: เจ้าของเลือก2รับ [ล้างข้อมูลAuthทั้งหมดเมื่อปิด](home-auth-reopen-draft-decision.json) เปิดใหม่เป็นฟอร์มว่าง คงHome selectionsตามเดิม ไม่กู้favorite intentหรือส่งOTPเอง ต่อ [ชุดอักขระUsername](home-auth-username-format-discussion.md) ที่ยังเปิด โดยไม่ถามrole/ชื่อซ้ำใหม่

- C2/Username characters: เจ้าของระบุ [อังกฤษ ตัวเลข](home-auth-username-format-decision.json) เท่านั้น ไม่รวมเว้นวรรค/จุด/ขีดล่างหรือสัญลักษณ์ คงชื่อแสดงซ้ำได้ ไม่ใช้Login ไม่บังคับให้ผสมสองชนิด ต่อ [ช่วงความยาว](home-auth-username-length-discussion.md) ที่ยังเปิด แล้วรวมแก้Register fixtures/helper/validationโดยเก็บภาพเก่า

- C2/Username length: เจ้าของเลือก1รับ [3–20ตัว](home-auth-username-length-decision.json) คงอังกฤษ/ตัวเลขและซ้ำได้ ทำ [Register-r31](home-auth-register-username-g2-r31/README.md) comparison `IVcGY` helper/fixtureและ3ข้อความผิดเฉพาะสาเหตุ รอตรวจภาพ ไม่เลือกตัดข้อความ/providerหรือรับG2รวม

- C2/Username-r31: เจ้าของเลือก1รับ [helper/English fixture/สามinline errors](home-auth-register-username-g2-r31/owner-Username-states-acceptance.json) ตาม `IVcGY` แล้ว ต่อ [ขอบเขต/วิธีกรอกเบอร์โทร](home-auth-phone-format-discussion.md) ที่ยังเปิด โดยคงrequired/phone-password/noSMSและช่องLoginร่วมตามเดิม ไม่รับG2รวม

- C2/Phone coverage: เจ้าของเลือก2รับ [ไทย/ต่างประเทศพร้อมเลือกcode](home-auth-phone-format-decision.json) ทำ [Register-r32](home-auth-register-phone-g2-r32/README.md) comparison `gR7CL` เสนอช่อง/เมนูพร้อมค้นหาและเริ่มไทย+66 รอตรวจภาพ/initial proposal รายการประเทศจริงและnormalizationยังไม่เลือก Loginร่วมอีเมล/โทรต้องตรวจต่อ ไม่รับG2รวม

- C2/Country labels-r33: เจ้าของเลือกชุด1พร้อมชี้แจง [ไทยใช้ไทย อื่นๆให้ภาษา en](home-auth-country-label-language-decision.json) ปรับ [ร33](home-auth-register-country-labels-g2-r33/README.md) open `ZWbVr` เป็นไทย/United Kingdomแล้ว คงธง/code/formและเริ่มไทย+66 ไม่ตีความเป็นเปลี่ยนภาษาเว็บ ไม่อ้างรับร33แยกหรือG2รวมจากคำสั่งแก้copyนี้

- C2/Country-r33: เจ้าของตอบโอเครับ [ภาพชื่อประเทศ](home-auth-register-country-labels-g2-r33/owner-country-labels-acceptance.json) แล้ว ต่อ [Login-country-r34](home-auth-login-country-g2-r34/README.md) comparison `j5Nwm` เสนอselectorเฉพาะเบอร์และคงประเทศ+เลขไปpassword รอตรวจphone presentation ไม่รับกฎตัวเลข/providerหรือG2รวม

- C2/Login country-r34: เจ้าของเลือก1รับ [presentationในช่องร่วมและเบอร์ไปpassword](home-auth-login-country-g2-r34/owner-Login-country-acceptance.json) แล้ว ต่อ [Register Google return-r35](home-auth-register-google-g2-r35/README.md) comparison `h7jRHX` สองlayoutsยกเลิก/ไม่สำเร็จจากpatternsเดิม รอตรวจ ไม่รับG2รวมหรือระบบจริง

- C2/Register Google-r35: เจ้าของเลือก1รับ [สองreturn layouts](home-auth-register-google-g2-r35/owner-Register-Google-return-acceptance.json) แล้ว ต่อ [Verification states-r36](home-auth-email-verification-states-g2-r36/README.md) overview `mrPVu` รวม6adaptationsจากpatternเดิมที่ยังรอตรวจ มีใช้งานก่อนทุกแบบ ไม่ถามready/success/invalidที่รับแล้วซ้ำ ไม่รับG2รวม

- C2/Verification-r36: เจ้าของเลือก1รับ [6adaptationsที่แสดง](home-auth-email-verification-states-g2-r36/owner-verification-states-acceptance.json) แล้ว ทำ [G2 readiness](home-auth-g2-readiness.md) โดยไม่ปิดG2รวม ยังต้องตกลงphone-input/เทียบcurrent request states/รวมinteractionและเวอร์ชัน เริ่ม [phone-input](home-auth-phone-input-discussion.md) ไม่คืนFavorite-r29หรือถามaccepted OTP micro-rulesซ้ำ

- C2/Phone input: เจ้าของเลือก1รับ [เบอร์แบบยืดหยุ่น](home-auth-phone-input-decision.json) แล้ว ต่อ [Current Login request-r37](home-auth-login-request-g2-r37/README.md) comparison `PNaVg` 4statesOTP request/password busy/known connection failure รอตรวจ จากนั้นRecovery/current Register reconciliationและinteraction inventoryยังค้าง ไม่รับG2รวม

- C2/Login requests-r37: เจ้าของเลือก1รับ [4states](home-auth-login-request-g2-r37/owner-Login-request-states-acceptance.json) แล้ว เจ้าของตอบ1รับ [Recovery requests-r38](home-auth-recovery-request-g2-r38/owner-Recovery-request-states-acceptance.json) Forgot/resetทั้ง4ด้วย โดยคงack/link-error/successเดิม ไม่รับG2รวม

- C2/Register-r39: [4statesฟอร์มปัจจุบัน](home-auth-register-current-g2-r39/README.md) overview `k6ruuh` และfull forms `vLCXH`/`NKyzd`/`EoViL`/`VVLL4` เจ้าของตอบ1รับแล้ว ดู [หลักฐาน](home-auth-register-current-g2-r39/owner-Register-current-states-acceptance.json); [interaction draft](home-auth-interaction-contract.md) เตรียมสำหรับรับพร้อมG2รวม ไม่รับkeyboard/Heroเพิ่มเติมจากภาพ4states ไม่เริ่มHigh-Fi

- C2/G2-r40: [แพ็กรวม](home-auth-consolidated-g2-r40/README.md) flow `v0fodR`/interaction `geey5` พร้อม57native references, source acceptances/hashและsnapshots รอตรวจรับG2ทั้งชุด ไม่ถือว่าHigh-Fi/FrontendหรือDSD-001เสร็จ

- C2/G2-r40: เจ้าของเลือก1รับG2ทั้งชุดพร้อมinteraction draft-1แล้ว ดู [หลักฐาน](home-auth-consolidated-g2-r40/owner-G2-r40-acceptance.json) สถานะรอตรวจG2ในบันทึกก่อนหน้านี้เป็นประวัติ เริ่ม [G3 Login-r1](home-auth-login-g3-r1/README.md) มีentry empty/filled/focusและHome overlayรอตรวจหน้าตา ยังไม่รับG3/G4รวมและOPEN-001ยังเปิด

- จุดหยุดล่าสุด: วันนี้จบที่Wireframe G2-r40ที่รับแล้วตาม [คำสั่งเจ้าของ](home-auth-wireframe-only-stop-decision.json) ไม่ทำUI/G3ต่อ ร่างLogin-r1ซ่อน/แยกประวัติ ไม่อยู่ในคิวตรวจและไม่ใช่baseline รอคำสั่งใหม่ก่อนUI
