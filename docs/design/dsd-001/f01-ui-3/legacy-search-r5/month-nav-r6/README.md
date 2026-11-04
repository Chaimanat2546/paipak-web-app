# Month-nav-r6

4 พฤศจิกายน 2026 · ปรับตามคำสั่ง “ปุ่มเลื่อนเดือนมันต้องครอบ 2 เดือนสิ่” · Desktop draft รอตรวจรับ

[ภาพปฏิทินล่าสุด](c5AYHL.png) · [native snapshot](after-snapshot.json) · [ก่อนแก้](../after-snapshot.json)

ย้ายปุ่มย้อนเดือนจากหัวแผงไปขอบซ้ายของ caption เดือนแรก และปุ่มถัดไปไปขอบขวาของ caption เดือนที่สอง ปุ่มปิดแยกไว้ขวาบน หัวข้อเดือนทั้งสองยังอยู่กึ่งกลางคอลัมน์ ใช้ spacer สมมาตรเพื่อไม่ให้ label ขยับเพราะลูกศร

Navigation เป็นของคู่เดือนเดียวกัน: ธันวาคม/มกราคม → กดถัดไป → มกราคม/กุมภาพันธ์ หรือกดย้อน → พฤศจิกายน/ธันวาคม ไม่ใช่การเลื่อนแต่ละคอลัมน์แยกกัน นี่เป็นข้อกำหนดของแบบ static ยังไม่มี click handlers

แก้ครบ overview BI46M, Home jhTNh, Results swZck และ missing-checkout hyLBr ส่วน location/guests และเนื้อหานอก date popup ของสี่ roots ตรงกับก่อนแก้ตาม snapshot

ปุ่มเดือนใช้ target 36px ตามแนวโค้ดเดิม ปุ่มปิด 32px จัด caption สูง 36px และหัวแผง 32px ทำให้ popup สูงประมาณ 356px อยู่ใน Home viewport เดิม ตรวจ PNG ปฏิทินเต็มขนาดแล้ว ลูกศรอยู่คนละริมครอบสองเดือนตามคำขอ

Native visitor ยังรายงานตำแหน่งเดิมบางส่วนหลัง Move แม้ PNG แสดงลูกศรในตำแหน่งใหม่ และยังมี warnings ของ overview/error จากรอบก่อน ลองล้าง x/y ของปุ่มที่ย้ายแล้ว warnings ยังอยู่ จึงเก็บข้อมูลจริงใน snapshot และไม่อ้างว่า native bounds validation ผ่านทั้งหมด ไม่มี application code, Mobile, backend, deploy หรือการอนุมัติ Frontend ในรอบนี้
