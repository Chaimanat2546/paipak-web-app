# TikTok-states-r1 · State and interaction specification

สถานะ: ข้อเสนอ Desktop ภายใน DSD-001 รอตรวจรับ เก็บสี Navy #072D59, Light Blue #DBF2FC, Pink #FD6E88 และ Mitr ตาม direction A ไม่มีการเปลี่ยน shared tokens

## ขอบเขตการควบคุม

เว็บควบคุมการเลือกคลิป ภาพปก ปุ่มเริ่มเล่นก่อน mount ตัวเล่น จุดบอกตำแหน่ง credit/link และสถานะที่โหลดไม่ได้ ตัวเล่น TikTok ควบคุม playback, progress, volume, fullscreen, branding และ end region ของตนเอง ภาพ controls ใน review เป็น schematic เท่านั้น ไม่รับรองว่าปรับแต่งหรือปิด native end recommendations ได้ทั้งหมด

ใช้เอกสาร [Embed Player](https://developers.tiktok.com/docs/en/embed-player) และ [Embed Videos](https://developers.tiktok.com/docs/en/embed-videos) ที่อ่านไว้ในรอบนี้เป็น reference เชิงพฤติกรรม ความสามารถและข้อจำกัดยังต้องตรวจด้วยคลิปจริงในขั้นที่ได้รับอนุญาตให้เชื่อมต่อ

ไม่มีการส่งฟอร์ม TikTok ดึงบัญชี หรือสร้าง integration ในงานรอบนี้

## สถานะและการเปลี่ยน

| State | สิ่งที่เห็น | เข้าเมื่อ | ออกเมื่อ / การกด |
|---|---|---|---|
| รายการกำลังโหลด | พื้นที่ portrait คงขนาด ไม่มีปุ่มที่ใช้ไม่ได้ | รายการยังไม่พร้อม | ได้รายการที่มีสิทธิ์แสดง → ภาพปก; ไม่มีรายการ/โหลดรายการล้มเหลว → ใช้นโยบายยุบ section ที่เสนอ |
| ภาพปกพร้อมเล่น | ภาพปก ปุ่มเล่น 56px, credit, arrows และ dots | เริ่มต้นหรือเลือกคลิปใหม่ | กด Play → เตรียมตัวเล่น |
| กำลังเตรียมตัวเล่น | scrim และ loading status ในกรอบเดิม | คลิก Play | player ready → ส่งคำสั่งเล่นตามความตั้งใจของผู้ใช้และรอยืนยัน playing; error → recovery |
| กำลังเล่น | ตัวเล่น inline | provider ยืนยัน playing | pause → paused; buffering → buffering; ended → ended |
| หยุดชั่วคราว | ตัวเล่นคงเวลาเดิม มี resume | ผู้ใช้หยุด หรือเว็บสั่งหยุดตามเงื่อนไขที่เสนอ | ผู้ใช้กดเล่นต่อ → playing; ไม่ resume เองเมื่อกลับมามอง section |
| Buffering | คงภาพ/เวลา มี loading feedback | provider แจ้ง buffering | ได้ playing/paused → ใช้สถานะจริง; provider error → recovery |
| เล่นจบ | native end region และ host actions ใต้ตัวเล่น | provider แจ้ง ended | เล่นอีกครั้ง → เริ่มคลิปเดิมตามคำสั่งผู้ใช้; คลิปถัดไป → ภาพปกใหม่ |
| เลือกคลิปกลาง | ปกใหม่, previous/next เปิด, dot ใหม่ | กด arrow เลือก index อื่น | รอคลิก Play; ไม่เล่นคลิปใหม่อัตโนมัติ |
| คลิปสุดท้าย | ไม่มี preview ที่เกินชุด, next disabled | index สุดท้าย | previous → ปกก่อนหน้า; ไม่วนเป็นรายการแรก |
| โหลดคลิปไม่สำเร็จ | แผง Light Blue, ลองใหม่, arrows ยังคงอยู่ | ข้อผิดพลาดชั่วคราว/เล่นไม่ได้ที่ยังอาจลองใหม่ | retry → loading; next/previous → ปกที่เลือก |
| คลิปไม่พร้อม | ข้อความกลาง ไม่ฟันธงว่าถูกลบ/ส่วนตัว | provider แจ้งใช้คลิปไม่ได้ | เลือกคลิปอื่น; หากไม่มีรายการที่แสดงได้เหลือ → ยุบ section ตามข้อเสนอ |
| ไม่มีรายการ | ไม่มี TikTok section และช่องว่างค้าง | ไม่มีคลิปที่ผ่านเงื่อนไข | ส่วนบทความต่อจากเนื้อหาก่อนหน้า; ไม่เพิ่ม CTA หรือคลิปสมมติ |

การซ่อน section เมื่อโหลดรายการล้มเหลวเป็นข้อเสนอเฉพาะ TikTok; ไม่ได้ยืมสถานะอนุมัติจาก listing มาใช้ ถ้ารายการโหลดได้แล้วและคลิปหนึ่งโหลดล้มเหลว ให้คง deck และ recovery ของคลิปนั้นไว้

## ลำดับที่ต้องรักษา

- การเริ่มเล่นคลิปใหม่ต้องหยุด/ปลด player เดิมก่อน ทำให้มีคลิปที่ส่งเสียงได้ไม่เกินหนึ่งคลิป
- ระหว่างเปลี่ยน index ให้แสดงปกใหม่ก่อน ไม่ย้ายตัวเล่นเก่าหรือเสียงเก่าตามการ์ด ถ้ามีหลายคำสั่งค้าง ให้ใช้ผลของคลิปที่เลือกปัจจุบันเท่านั้น
- Previous/Next เป็นการเลือก ไม่ใช่คำสั่ง Play ปุ่มก่อนหน้าที่ต้นรายการและถัดไปที่ท้ายรายการ disabled จริงและไม่รับ Tab
- ถ้ามีคลิปเดียว ปิดทั้งสองลูกศรและไม่แสดง preview ซ้ำ; ถ้ามีสองคลิป แสดง preview ตามจำนวนจริง จุดบอกตำแหน่งมีเท่ารายการจริง ตัวอย่างห้าจุดเป็น fixture
- จุดบอกตำแหน่งเป็น indicator ไม่ใช่ปุ่ม จึงไม่รับ Tab ไม่ใช้พื้นที่กด 8px เป็น interaction
- ปุ่ม “คลิปถัดไป” ใต้ ended/unavailable แสดงเฉพาะเมื่อมีคลิปถัดไป หากเป็นรายการสุดท้ายใช้ “เลือกคลิปก่อนหน้า” แทน; ถ้าไม่มีคลิปที่ใช้ได้เหลือ ยุบตามข้อเสนอ
- เมื่อเลือกคลิปด้วยคีย์บอร์ด ให้โฟกัสคงที่ปุ่มเดิมและประกาศคลิปที่เลือกอย่างสุภาพ ไม่โยนโฟกัสเข้าตัวเล่นโดยไม่มีคำสั่ง
- Credit ต้องมาจาก metadata/link ของเจ้าของคลิปจริงและใช้ได้ทั้งเมาส์/คีย์บอร์ด ข้อความผู้สร้างในภาพเป็นตัวอย่าง ห้ามนำไปเป็น attribution จริง
- ถ้าภาพปกโหลดไม่ได้แต่คลิปยังใช้ได้ ให้ใช้พื้น Navy กับปุ่ม Play และชื่อคลิปที่เข้าถึงได้ ไม่ตัดคลิปออกเพราะปกอย่างเดียว; visual variant นี้ยังไม่มีภาพแยกใน r1
- หลังออกนอก viewport/tab hidden/ออกจากหน้า เสนอให้ pause หรือ dispose ตามกรณี กลับมาไม่เล่นต่อเอง; ต้องตรวจ cross-origin player จริงก่อนรับรอง
- ไม่กำหนด timeout หรือ retry count แบบสมมติ ใช้ผล/error จาก provider และ UI recovery; ห้ามปล่อย spinner ค้างเมื่อได้รับ terminal error

## Provider contract ที่ใช้เป็น reference

Embed Player มี autoplay default ปิด และมี message สำหรับ play/pause/seekTo/mute/unMute พร้อม onPlayerReady, onStateChange และ onPlayerError สถานะ provider ได้แก่ init(-1), ended(0), playing(1), paused(2), buffering(3) การใช้งานจริงต้องตรวจ origin/source ของ message และผูกกับ player ปัจจุบันก่อนเชื่อถือ event

rel=0 ไม่ได้หมายถึงปิด end recommendations ทั้งหมด และ muted=1 ตามเอกสารจะไม่ให้เปลี่ยน volume จึงยังไม่ระบุว่าต้องเริ่มเงียบด้วยพารามิเตอร์นี้ การเริ่มเสียง การข้าม iframeด้วยคีย์บอร์ด Fullscreen และคลิปแนวนอน/อัตราส่วนอื่นต้องทดสอบจริง ไม่วาด host controls ทับเพื่ออ้างแทน provider

## Feedback, motion และ accessibility ที่เสนอ

Host Play 56px, arrows48px, recovery/end actions44px แสดง Default/Hover/Pressed/Focus ใน board wMtDm ใช้ White/Light Blue/Navy เดิม ไม่เพิ่ม CTA Pink/White ใหม่ใน recovery

Focus ใช้วง White พร้อมช่อง Navy เพื่อแยกจากปุ่ม และต้องตรวจจริงบนพื้นภาพที่แปรผัน ปุ่มใช้ชื่ออ่านออกเสียงชัด เช่น เล่นคลิป, คลิปก่อนหน้า, คลิปถัดไป Enter/Space ทำงานตาม button semantics; loading/error ผูกข้อความสถานะกับคลิปที่กำลังเลือก ไม่รบกวนการอ่านทุกเฟรม ไม่ประกาศเวลา playback ต่อเนื่อง

Motion ของ deck เสนอ transform/opacity200ms ease-out ไม่เลื่อนหน้า ไม่ shimmer skeleton โดยจำเป็น Loading arc ในภาพเป็น keyframe คงที่ สำหรับ Reduced motion ใช้ภาพนิ่งพร้อมข้อความและเปลี่ยนคลิปทันที ยังไม่ถือเป็น motion ที่รับรองหรือ implemented

## สิ่งที่ตรวจในรอบนี้และสิ่งที่ยังขาด

ตรวจ native source ว่า Home/บทความและ variables เท่าก่อนเพิ่ม boards, export PNGครบและอ่านภาพ ตรวจชื่อ/ขนาด control ด้วย native schema และคำนวณ contrast คู่สีพื้นฐาน ยังไม่ได้ตรวจ DOM, screen reader, keyboardจริง, network failure, browser audio policy, iframe fullscreen, actualTikTokbranding หรือ eventrace บนเว็บ

ยังไม่มี URL ที่เจ้าของคัดและข้อมูลผู้สร้างจริง ไม่เริ่ม CMS, analytics, API, Frontend หรือ Mobile การรับรองพฤติกรรม/appearanceของproviderและ final version แยกจากการอนุมัติ Visual Direction G1

