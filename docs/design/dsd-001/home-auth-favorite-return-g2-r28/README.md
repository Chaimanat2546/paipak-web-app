# Home Auth Favorite Return G2-r28

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับภาพกำลังบันทึก/สำเร็จแล้วตาม [บันทึก](owner-favorite-return-states-acceptance.json)

เจ้าของเลือก1ให้ [บันทึกบ้านที่กดไว้ต่อทันทีหลังLoginสำเร็จ](../home-auth-favorite-return-decision.json) โดยไม่ต้องกดหัวใจซ้ำ ไม่สร้างGuest favoritesและไม่ถือว่าLoginผ่านแปลว่าบันทึกสำเร็จแล้ว

[เทียบสองสถานะ](yZwwg.png) · [กำลังบันทึก](xB6Hu.png) · [บันทึกสำเร็จ](e65FIF.png) · [บอร์ดพร้อมโน้ต](oADPo.png) · [manifest/IDs/hash](review-manifest.json)

ซ้ายเสนอเปลี่ยนหัวใจเป็นวงกำลังโหลดขนาด22pxในtarget44pxเดิมชั่วคราว พักการกดซ้ำ ยังไม่ประกาศว่าบันทึกแล้ว ขวาเสนอหัวใจชมพูทึบไม่มีกรอบวงกลมและข้อความ “บันทึกบ้านแล้ว” หลังผลบันทึกยืนยัน หากมีบันทึกเดิมอยู่แล้วให้คงไว้ ไม่ตีความเจตนานี้เป็นสลับลบ

เป็นภาพเฉพาะการ์ดในHome ใช้สำเนา `X8ifq` พร้อมภาพ/ข้อมูลเดิม ไม่ออกแบบHeaderสมาชิกหรือหน้ารายการโปรด ไม่เปลี่ยนlayoutต้นทาง ตำแหน่งเลื่อนHome/แถว/รูปคงตามcontractเดิม การวางข้อความยืนยันในภาพเป็นตัวอย่างเฉพาะส่วน ยังไม่กำหนดตำแหน่งทั้งหน้า/อายุข้อความหรืออ้างว่าการคืนfocus/announcementทำงานจริง

Native root `oADPo`, comparison `yZwwg`, pending `xB6Hu`/`ITEzN`, saved `e65FIF`/`r8YoO5` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจicon IDsและPNGแล้วไม่เห็นตัด ไม่มีexecute warnings ผลgeometry visitorมีflagsที่ไม่ตรงการrender จึงไม่อ้างว่าผ่านgeometryหรือcontrastทุกภาพ

รับสองสถานะที่แสดงแล้ว; กรณีไม่สำเร็จ/ผลไม่แน่ชัดยังรอตรวจ ไม่รับG2รวม/High-Fi/Frontend/backend ไม่แก้MainHome/State library54รายการ/UXD-002 และไม่commit/push/deploy
