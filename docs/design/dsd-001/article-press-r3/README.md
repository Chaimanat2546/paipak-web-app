# Article-press-r3

5 พฤศจิกายน 2026 · คืนระยะเด้งเดิมแล้วปรับให้ช้าลง · เจ้าของรับจังหวะนี้แล้ว

เจ้าของแก้คำสั่งว่าไม่ได้ต้องการลดแรง แต่ต้องการให้ช้าลง จึงคืนระยะ r1: ตอนกดลง 3px ตอนคืนผ่านเหนือจุดเริ่ม 4px แล้วกลับศูนย์ เปลี่ยนเฉพาะเวลา release จาก 240 เป็น 420ms และ press entry จาก 80 เป็น 140ms คง easing เดิม เด้งครั้งเดียว และไม่เปลี่ยน hover ที่รับแล้ว ดู [คำแก้ไขของเจ้าของ](owner-correction.json)

แก้ native board `m0I12` เดิมเป็น r3 คืน story ใน pressed phase ไป y59 และ rebound phase ไป y52 ที่ baseline y56 ภาพนิ่งยืนยันตำแหน่งได้ ส่วนจังหวะเวลาต้องดูตัวอย่างเคลื่อนไหว ไม่อ้าง PNG ว่าพิสูจน์เวลา animation แล้ว ภาพ/snapshot/prototypes r1 และ r2 เก็บเป็นประวัติ

ตัวอย่างในแชตยังมี reduced-motion และไม่เปิดหน้าอ่านจริง คง navigation contract ว่าเมื่อพัฒนาภายหลังไม่บังคับรอ animation จบก่อนเปลี่ยนหน้า ไม่เพิ่ม popup และไม่ถือว่าคำขอนี้เลือก focus alternative แล้ว

เปิด PNG pressed/rebound ล่าสุดแล้ว ตรวจ script syntax ด้วย `node --check` และตรวจ source ว่าระยะกลับเป็นค่าเดิมและเวลาเพิ่มตามที่ระบุ ยังไม่ทดสอบ browser interaction หรือ application runtime จริง

[Manifest](review-manifest.json) · [Native snapshot](editable-snapshot.json) · [Bounds diagnostics](bounds-diagnostics.json)

เจ้าของเลือก `1` รับจังหวะนี้ตาม [หลักฐานอนุมัติ](owner-press-acceptance.json) เฉพาะ press r3 ยังไม่เลือก persistent focus หรือรับบทความ/Home/foundation ทั้งชุด ไม่เริ่ม Frontend/backend/deploy ไม่แก้ Main Home หรือ approved sources/variables Mobile พัก OPEN-001 เปิด
