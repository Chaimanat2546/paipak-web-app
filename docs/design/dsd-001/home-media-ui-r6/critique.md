ROUND 6 / owner-requested article revision
Seen in one second: ภาพเรื่องเด่นใหญ่กับแผงข้อความลอยซ้อน ตามด้วยเรื่องรองสองเรื่อง
Idea (one sentence): เปลี่ยนบทความคัดสรรเป็นหน้ารวมอ่านแบบ editorial โดยใช้ขอบสระจากภาษาภาพเดิมรองเรื่องเด่น
Live thing: ยังเป็น static navigation affordance ไม่มี reader หรือ CMS
Layout words by section: TikTok=unchanged poolside deck / articles=featured floating panel+supporting list / Footer=unchanged
Scores: design 7.5 · usability 7.0 · creativity 6.5 · content 4.0 → overall 6.8
Caps applied: sample content; no browser/runtime/Mobile acceptance; OPEN-001 outside this section remains open
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. DsgG9.png: รูปและบทความยังเป็นfixture ต้องตรวจภาพปกและชื่อจริงที่เขียน/คัดแล้วก่อนรับcontent
2. DsgG9.png: ปุ่มเรื่องเด่นแสดงเพียงarrow ต้องกำหนดaccessible nameจากชื่อเต็มในรอบstate/handoff ไม่อ้างว่ามีscreen-reader implementationแล้ว
3. DsgG9.png: ภาพรองเป็นสี่เหลี่ยมจัตุรัส ต้องตรวจcropเมื่อใช้บทความที่ไม่เกี่ยวกับบ้าน และตรวจชื่อยาว/widthอื่นในขอบเขตที่อนุญาต

เปิดภาพบทความขนาดจริงและดูHomeรวมแล้ว: ตัวหนังสือไม่ชน, captionอยู่บนพื้นขาว, ปุ่ม44px, เรื่องรองมีจังหวะห่าง, ขอบฟ้าเชื่อมกับFooterเดิม ไม่มีการรับรองhover/focus/keyboard/zoom/runtimeจากPNG

