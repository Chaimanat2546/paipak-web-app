# Home Auth OTP Input G2-r16

DSD-001/C2 · 5 พฤศจิกายน 2026 · รับภาพลำดับBackspaceแล้วพิมพ์ตาม [คำตอบ1](owner-backspace-sequence-acceptance.json)

เจ้าของเลือก2และชี้แจง “แต่ถ้าพิมพ์ก็พิมพ์ไปช่อง3” ตาม [หลักฐาน](../home-auth-otp-filled-backspace-decision.json) ให้ลบเลขช่อง3แล้วถอยมาช่อง2 แต่เลขที่พิมพ์ต่อเติมช่อง3ที่เพิ่งลบ ไม่ทับเลข2 จากนั้นเลื่อนไปช่อง4ตามกฎพิมพ์เดิม

[ภาพลำดับ](Im1AA.png) · [บอร์ดพร้อมโน้ต](fLEJd.png) · [manifest/hash](review-manifest.json)

ภาพนิ่ง3ช่วงใช้เลขตัวอย่าง ไม่เริ่มตรวจเพราะยังไม่ครบ6หลัก เส้นเข้มแสดงตำแหน่งในลำดับ ไม่รับรองkeyboard runtimeหรือfinal focus treatment ข้อกำหนดBackspaceช่องว่างและpasteครบ6หลักที่รับแล้วคงเดิม

ยังต้องระบุเมื่อมีclick/arrowเปลี่ยนตำแหน่งหลังลบ/Delete/การวางผิดรูปแบบ/autofill ไม่อนุมานคำตอบนี้เป็นการเลือกทุกพฤติกรรม ภาพลำดับใหม่นี้รับแล้วเฉพาะส่วนข้างต้นและG2รวมยังไม่รับ

Native root `fLEJd`, sequence `Im1AA`, examples `CvY0d`/`J06PvU`/`mTsI6` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแล้ว6ช่องแต่ละแผงครบ ไม่เห็นล้นและไม่มีexecute warnings ไม่เปลี่ยนHome/State library/UXD-002 ไม่มีAuthจริง/High-Fi/Frontend/backend
