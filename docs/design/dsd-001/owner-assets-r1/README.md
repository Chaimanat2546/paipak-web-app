# Owner assets-r1

ข้อมูลโลโก้ บัญชี และเงื่อนไขจริงยืนยันโดยเจ้าของแล้ว แบบPencilแก้รอตรวจ

[สเปค](brand-and-transfer-spec.md) · [หลักฐานยืนยันข้อมูล](owner-content-confirmation.json) · [ไฟล์ต้นฉบับ/hash](asset-manifest.json) · [review manifest](review-manifest.json)

[Header](KEBjP.png) · [Footer](L3Fop2.png) · [โลโก้3แบบ](w1bhDv.png) · [ข้อมูลบัญชีและเงื่อนไข](yIVr1.png) · [Home-r21เต็มหน้า](Wgw2h.png)

Pencil `papaipak-ui.pen` บอร์ด `WHN8T` / Home `Wgw2h` / payment-content `yIVr1` ใช้MCPปรับจริงและเก็บแยกจากแบบรับเดิม ไม่แตะงานAuthในแชตหลัก ไม่เริ่มCheckoutทั้งหน้า/Frontend/backend/commit/push/deploy

แก้ไขr1.1: คืนข้อความใต้โลโก้ตามภาพเจ้าของแล้ว ดู [หลักฐานแก้ไข](header-notice-correction.json) คงHeader124pxและโลโก้จริง โดยลดกรอบโลโก้ให้พอดีกับข้อความเดิม แบบก่อนคืนข้อความเก็บใน `before-notice-restoration/`

แก้ไขr1.2: เติมชื่อบัญชีจริงใต้โลโก้แทนจุดไข่ปลาแล้ว ดู [คำแก้ไข](header-notice-real-data.json) และ [Headerล่าสุด](header-real-recipient.png) แบบก่อนเติมเก็บใน `before-real-name-fill/`

แก้ไขr1.3: เพิ่มธนาคารและเลขบัญชีใต้ชื่อผู้รับแล้ว ดู [คำขอ](header-bank-details-addition.json) และ [Headerล่าสุด](header-bank-details.png) จัดสองบรรทัดและปรับHeaderเป็น128pxเพื่อให้อ่านครบ แบบก่อนเพิ่มเก็บใน `before-header-bank-line/`

แก้ไขr1.4: ขยายโลโก้112×100pxไว้ซ้าย และซ้อนชื่อเว็บ/ชื่อผู้รับ/ธนาคารเลขบัญชีทางขวา ดู [ข้อกำหนดล่าสุด](header-large-logo-stack.json) และ [Headerล่าสุด](header-large-logo-stacked.png) Headerยัง128px แบบก่อนจัดเก็บใน `before-large-logo-stack/`

เจ้าของรับHeader Desktop-r1.4แล้วด้วย “โอเคแบบนี้เลย” ตาม [หลักฐานรับเฉพาะHeader](owner-header-r1-4-acceptance.json) ภาพที่รับเก็บใน `accepted-header-r1-4/` ไม่ยกเป็นการรับFooter/transfer-module/Home-r21ทั้งชุดหรือFrontend
