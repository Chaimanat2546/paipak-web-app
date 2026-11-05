# C1.4 · วันเข้าอย่างเดียวค้นหาได้

5 พฤศจิกายน 2026 (Asia/Bangkok) · DSD-001 · **เจ้าของยืนยันกติกาและรับภาพC1.4แล้ว**

[หลักฐานรับภาพ](owner-visual-acceptance.json) บันทึกคำตอบ1และhashภาพ ไม่รับSearchรวมหรืออนุญาตFrontend ข้อความเสนอภาพด้านล่างเก็บเป็นประวัติก่อนรับ

เจ้าของระบุ “เอาแค่วันเข้าก็ค้นหาได้” ตาม [บันทึกข้อเปลี่ยน](owner-rule-change.json) จึงยกเลิกกฎrejectSearchเมื่อไม่มีวันออกและ [ข้อเสนอerrorก่อนหน้า](../search-validation-home-r20-r1/README.md) ไม่ถามยืนยันกติกาที่เจ้าของสั่งแล้วซ้ำ

## ภาพปัจจุบัน

- [ภาพวันเข้าอย่างเดียว](fLKGL.png), native screen `fLKGL`, 1440×960
- [ภาพพร้อมโน้ต](lozLh.png), native board `lozLh`
- Popup `SLLhR`; สำเนาในState library `NlbMq` ติดป้ายภาพปรับใหม่รอตรวจ
- Source `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen`, ผ่านPencil MCP

Copyจากstateวันเข้าเดิมที่ไม่มีerror ใช้วันเข้า12ธ.ค.ในช่องวันโดยไม่มีลูกศร/ellipsisชวนให้ต้องกรอกวันออก หัวปฏิทินเป็น “เลือกวันออก (ไม่บังคับ)” ใช้Navyปกติแทนกรอบ/ข้อความerror กดค้นหาหลักได้โดยเก็บวันออกเป็นunset ค่า12คน/pets1และสถานที่เดิมไม่เปลี่ยน

หากเลือกวันออกด้วยยังต่อผู้เข้าพักตามflowเดิม Xล้างเฉพาะวันที่ยังอยู่ การใช้วันเข้าอย่างเดียวไม่เติมวันออกหรือจำนวนคืน ไม่ถือว่ามีavailabilityหรือราคาจองยืนยันและไม่กำหนดวิธีกรองcatalog/queryแทนงานข้อมูล การจองยังต้องมีช่วงวันที่ครบและตรวจใหม่ ไม่มีการเปลี่ยนกฎBooking/Auth/Intent

## เก็บประวัติและอัปเดตข้อสรุป

- Registryบันทึกowner clarificationผูกกับUX-001 และsuperseded mappingแยกเฉพาะSearch
- ขอบเขตUX/UIและE-02ปัจจุบันระบุกฎใหม่ แผนผังโค้ดเดิมยังเก็บเป็นประวัติ ไม่แก้UXD-002 review-5หรือเริ่มTaskอื่น
- เก็บ [published documents Home-r20เดิมทั้ง6ไฟล์](../footer-contact-r5/pre-checkin-only-reconciliation-2026-11-05/archive-manifest.json) ตรงhashอนุมัติเดิมก่อนแก้responsive spec ไม่แก้approval recordย้อนหลัง
- เก็บ [UX contractsก่อนแก้และmetadata](previous-contracts/manifest.json) แบบbyteเดิม และอัปเดต [hash indexปัจจุบัน](document-reconciliation.json)
- Error board `LFTu8` และสำเนาerrorในLibrary `XO9il` ย้ายเข้าArchiveพร้อมป้ายถอน/ประวัติ คงIDและไฟล์ภาพเดิม ในLibraryแทนเฉพาะslotที่กฎผิดด้วยภาพปัจจุบันรอตรวจ ไม่ใช่rolloutSearchทั้งชุดก่อนC1.6

## ขอบเขตการตรวจต่อ

กติกาวันเข้าอย่างเดียวได้รับคำสั่งชัดแล้ว รอบถัดไปตรวจเฉพาะหน้าตา: 1) รับภาพปรับใหม่นี้แล้วไปC1.5 2) ปรับข้อความหรือหน้าตา 3) ดูภาพแถบค้นหาตอนปิดปฏิทินก่อน ไม่เปิดโหวตว่าจะบังคับวันออกอีก

ยังไม่แก้โค้ด `components/home-search.tsx` ซึ่งเป็นlegacyและยังมีเงื่อนไขเดิมอยู่ ไม่มีการทดสอบSearch/routing/keyboard/networkจริง ไม่อ้างว่าระบบค้นหาใช้งานตามกฎใหม่แล้ว Frontendต้องมีคำสั่งแยก Mobileพัก OPEN-001เปิด DSD-001ยังไม่เสร็จ
