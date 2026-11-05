# C1.5 · ปุ่มค้นหาหลักเทียบทางลัดหมวด

5 พฤศจิกายน 2026 (Asia/Bangkok) · DSD-001 · **flowเดิมคงเดิม; เจ้าของเลือก3กำหนดกติกาชื่อสถานที่แล้ว**

[หลักฐานคำตอบ3](../search-location-match-home-r20-r1/owner-location-rule.json) รับเฉพาะกติกา ไม่ใช่การรับภาพdiagramหรือภาพสถานะใหม่ ข้อความคำถามด้านล่างเก็บเป็นประวัติ

หลังเจ้าของรับ [ภาพC1.4วันเข้าอย่างเดียว](../search-checkin-only-home-r20-r1/owner-visual-acceptance.json) ด้วยคำตอบ1 จึงตรวจC1.5ตาม [เช็กลิสต์](../home-desktop-remaining-checklist.md) ไม่เปิดเลือกcategory-only policyที่รับในguided review1B/1Cใหม่

## ภาพอธิบาย

- [ภาพเทียบเงื่อนไขส่งต่อ](RhfPI.png), native `RhfPI`
- [ภาพพร้อมโน้ต](YXi4f.png), native board `YXi4f`
- Native Search fragment `QLHzT`
- Source `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen`, ผ่านPencil MCP

เป็นภาพอธิบายข้อมูลส่งต่อจากUI Homeเดิม ไม่ใช่การออกแบบหน้าResultsหรือผลค้นหาจริง แถบSearchมาจากภาพที่รับแล้วโดยปิดปฏิทินและใช้สถานที่พัทยาที่เลือกจากsuggestionเป็นfixture แถวหมวดCopyจาก `W1QIL` และหัวข้อ/ดูทั้งหมดใกล้ทะเลจาก `b3dYX2` ไม่สร้างtaxonomyหรือcategory mappingจริงจากภาพนี้

## ข้อที่ตกลงแล้ว

- ปุ่มค้นหาหลักใช้เงื่อนไขที่กรอก/เลือกไว้ ตัวอย่างพัทยา วันเข้า12ธ.ค. วันออกunset คน12 pets1 ไม่เติมจำนวนคืนและไม่บังคับcheckout
- ทางลัดหมวดและดูทั้งหมดข้างหัวข้อของหมวดเปิดResultsเฉพาะหมวดนั้นทั่วทุกพื้นที่ โดยสถานที่/วัน/คน/petsเริ่มunsetที่ปลายทาง ให้ค้นหาหรือกรองเพิ่มในResults ไม่ใช่คำสั่งล้างฟอร์มHome
- Browser Backคืนsectionและตำแหน่งเลื่อนแถวเดิมในflowต่อเนื่องตามguided review1C ไม่เพิ่มการกู้หลังreload/ปิดแท็บหรือBooking Intent

อ้าง [guided review1B/1C](../f01-ui-3/home-guided-review/README.md) ข้อความในส่วนเสนอเดิมเรื่องpartial-date errorถูกแทนโดยกฎล่าสุดในC1.4แล้ว ไม่ใช้กลับมาขวางSearchหรือทางลัด

## คำถามที่ยังต้องตัดสินใจ

[Legacy-search-r5](../f01-ui-3/legacy-search-r5/README.md) ระบุfree queryที่ไม่เลือกsuggestionและrankingยังเปิด การนำcodeเก่ามาอ่านไม่ใช่การรับbusiness ruleนี้

คำถามC1.5-Q1: เมื่อพิมพ์สถานที่ เช่น “พั” แต่ยังไม่เลือกรายการแนะนำแล้วกดค้นหา ให้ทำอย่างไร?

1. ใช้ข้อความที่พิมพ์ค้นหาต่อ ไม่บังคับเลือกsuggestion เหมาะกับการค้นหาได้ทันที โดยวิธีmatching/rankingจริงยังต้องกำหนดกับข้อมูล
2. ต้องเลือกสถานที่จากรายการแนะนำก่อน หากกรอกข้อความไว้ ลดความกำกวมของพื้นที่; ถ้าเว้นช่องว่างยังค้นหาทุกพื้นที่ได้
3. ถ้าตรงชื่อพื้นที่ที่ระบบรู้จักใช้ได้เลย ถ้าไม่ตรงให้เลือกคำแนะนำก่อน ลดการเลือกซ้ำเมื่อชื่อชัด; ไม่เดาสถานที่จากpartial textเอง

ยังไม่มีข้อใดถูกเลือกจากคำตอบ1ก่อนหน้า ซึ่งรับเฉพาะภาพC1.4 ไม่กำหนดURL/query keys/API/ranking/availabilityจากภาพหรือคำถามนี้ ไม่เริ่มหน้าResults/Taskอื่น การเลือกคำตอบใช้เฉพาะfree-text behaviorของSearch

## ขอบเขต

Home-r20หลัก/State library50ภาพยังคงเดิมนอกslotC1.4ที่รับแล้ว ภาพนี้ไม่ทดสอบclick/route/Browser Back/keyboard/networkจริง Mobileพัก OPEN-001เปิด ไม่แก้application code/CSS/Auth/backend/commit/push/deploy
