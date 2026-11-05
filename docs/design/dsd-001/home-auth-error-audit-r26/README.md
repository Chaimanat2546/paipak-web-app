# Home Auth: ทบทวนข้อผิดพลาด G2-r26

DSD-001/C2 · 5 พฤศจิกายน 2026 · เจ้าของรับ8ตัวอย่างที่แสดงในภาพรวมแล้วตาม [บันทึก](owner-error-audit-acceptance.json); G2รวมยังไม่รับ

เจ้าของให้ [ทบทวนแบบเก่าด้วย](owner-review-request.json) ตามกฎล่าสุดที่ข้อผิดพลาดของข้อมูลต้องบอกเหตุผลตรงinputนั้นและไม่มีกล่องซ้ำก่อนปุ่ม

[ภาพรวมจุดที่แก้](e5s61.png) · [ผลทบทวน](audit-findings.md) · [manifest/IDs/hash](review-manifest.json) · [รายการรุ่นเดิม](source-inventory.json)

ปรับ/เติม8ตัวอย่างในPencil: Login identifierว่าง, ช่องpasswordว่างในวิธีpasswordที่เลือกเอง, OTPผิด, OTPหมดอายุ, อีเมลขอลิงก์ยังว่าง, ตั้งรหัสใหม่สั้น/ยืนยันไม่ตรง, OTPยืนยันอีเมลหลังสมัครผิด และคำอธิบายคู่ข้อมูลLoginไม่ผ่าน แบบเต็มอยู่บอร์ดข้างภาพรวม ไม่มีการส่งAuthจริง

ที่เป็นข้อมูลช่องใดผิดใช้ข้อความใต้ช่องนั้น ที่ระบบไม่ระบุว่าช่องใดผิดไม่เดาชี้input เช่นคู่ข้อมูลLoginไม่ผ่านคงpatternCระดับฟอร์มและไม่เปิดเผยว่ามีบัญชีหรือไม่ Google/การเชื่อมต่อและลิงก์ใช้ไม่ได้ยังคงระดับฟอร์มตามประเภทเหตุ ไม่เพิ่มกฎความซ้ำอีเมล/โทรหรือproviderเอง

แบบLoginรวมหน้าเดียว/บังคับpasswordเป็นค่าเริ่มต้นเป็นประวัติ ใช้flowปัจจุบัน emailOTPหลัก/phonepassword/emailpasswordเลือกเอง ไม่ย้อนกลับไปใช้flowเก่า Signup-r25ใช้inlineแล้วและยังรอตรวจแยก ไม่อยู่ใน8ตัวอย่างที่รับรอบนี้

Native master `LKPA7`, overview `e5s61`, full modal board `c7WrJm` ในpapaipak-ui.pen ผ่านPencil MCP ตรวจภาพแบบเต็มทั้ง8และตรวจparentของinline messagesแล้ว ไม่เห็นเนื้อหาตัดและไม่มีexecute warnings ตรวจhashภาพAuthเดิม100ไฟล์พบไม่เปลี่ยนตาม [หลักฐาน](historical-image-verification.json) เก็บapproval/PNGเดิมไว้ เจ้าของรับ8ตัวอย่างในภาพรวมแล้ว ไม่ใช่การรับโครงฟอร์มเต็มทุกส่วนหรือstatesอื่นแทน ไม่มีG2รวม/High-Fi/Frontend/backend/commit/push/deploy ไม่เปลี่ยนHome/State library54รายการหรือUXD-002
