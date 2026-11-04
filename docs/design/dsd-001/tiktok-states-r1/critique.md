# TikTok-states-r1 · Visual review

ขอบเขตเป็น state board ใน Pencil จึงใช้ native render/PNG แทนการสร้างเว็บเพื่อรัน inspector ไม่ได้อ้าง browser หรือ runtime pass

ภาพหลักคง portrait320×568 และ deck832×688 เดิม ทำให้เห็นว่า error/loading อยู่ตำแหน่งเดียวกับตัวเล่น ไม่มี modal หรือ layout jump ระหว่างภาพตัวอย่าง Recoveryใช้ Light Blue/Navy อ่านง่ายและแยกจากพื้นที่สื่อ ส่วน control feedback แสดงลำดับที่พร้อมตรวจโดยไม่เปลี่ยนหน้า Home

ตรวจภาพรวมและทั้ง6คู่ผ่าน native screenshot แล้วดู PNGขนาดจริงของ overview/recovery ข้อความไม่ชนปุ่ม แผงและภาพไม่ตัด Controlsแยกจาก providerในหัว board; เพิ่มปุ่มreplay/nextนอกframeหลังจบเพื่อไม่อ้างว่าซ่อน native end recommendations ได้

แก้รอบตรวจ: ทำภาพpreviewของstateกลางให้ต่างจากคลิปที่เลือก, ทำPressedของลูกศรหดเหลือ44pxพร้อมชดเชยตำแหน่ง, ปรับPlayPressedให้อยู่กึ่งกลาง การใช้shadowและโค้งในdeckคงตามcompositionที่เจ้าของเลือก

คะแนนประเมินเฉพาะstaticreview: Design7.5/10, Usability7/10, Creativity6.5/10, Content7/10; ถ่วงน้ำหนัก40/30/20/10ได้7.1/10 ไม่ใช่คะแนนของเว็บที่ทำงานจริง คะแนนถูกจำกัดเพราะตัวเล่นเป็น schematic ภาพ/เวลา/creditเป็นfixtureและยังไม่มีคลิปจริง

ข้อจำกัดที่คงอยู่: provider UIยังไม่ผ่านการเทียบภาพจริง, ตัวอย่างภาพปกโหลดไม่ได้ยังไม่มีภาพแยก, initial-list errorใช้ข้อเสนอยุบส่วนเดียวกับempty, motion/keyboard/accessibilityยังตรวจไม่ได้จากPNG และ OPEN-001ยังเปิดในหน้าHomeเดิม

