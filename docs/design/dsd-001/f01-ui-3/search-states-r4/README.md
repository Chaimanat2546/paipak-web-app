# F01-ui-3 / Search-states-r4

สถานะ: แบบ Desktop รอเจ้าของตรวจรับ · 4 พฤศจิกายน 2026 · ไม่ใช่ functional prototype

เจ้าของแจ้งว่า “ลืมเช็คการกดช่องค้นหาเลยตั้งแต่หน้าแรก” รอบนี้จึงตรวจและเติมภาพเปิดจากตำแหน่งจริงของ Search บน Home และ Results ภายใน DSD-001 / F-01 ที่ได้รับอนุญาตไว้แล้ว Mobile ยังคงพักตามคำสั่งเจ้าของ

[ภาพรวมสามช่อง](c9whv.png) · [รายการ frame IDs](review-manifest.json) · [native snapshot เฉพาะงานเพิ่ม](after-snapshot.json) · [ผลเทียบก่อน/หลัง](verification.json)

## สิ่งที่พบและแก้

เดิมมี Location, Calendar และ Guest panels แยกใน boards แต่ยังไม่มีภาพแผงเปิดบน Home และ Results-upper-r3 จึงเพิ่มเก้าภาพสถานะและ overview หนึ่ง board ใน Pencil ต้นฉบับ แผงเปิดชิดช่องที่กด ใช้พื้นขาว กรอบโค้ง และเงาเฉพาะ overlay ช่องที่กำลังใช้มี navy outline กับ light blue fill

Home หลัก `A1ks07`, Results ทั้งสามหน้าหลัก, Mobile ทั้งสามหน้า และ generic picker/error boards เดิมตรงกับ snapshot ก่อนทำทุก property ไม่มี application code, CSS, backend หรือ deploy และไม่ได้แก้ UXD-002 source

## ตัวอย่างจริงก่อนจัดแบบ

ตรวจ Location, Date และ Guest states ของ [Airbnb Results / Pattaya](https://www.airbnb.com/s/Pattaya--Thailand/homes) ผ่าน browser ใน Pencil เมื่อ 4 พฤศจิกายน 2026 ก่อนสร้างชิ้นงานรอบนี้ พบการผูก active segment กับ popover, การเลือกช่วงวัน และ stepper ที่ปุ่มลด disabled เมื่อยังเป็นศูนย์ มี [ภาพ Guest row จากเว็บไซต์จริง](reference-airbnb-guest-row.jpg) และ [หลักฐาน compact Header ของรอบก่อน](../results-upper-r3/reference-airbnb-header.jpg)

ภาพเต็ม viewport ของ browser ในรอบนี้เกิดภาพซ้ำเป็นช่วง จึงไม่ใช้เป็น screenshot อ้างอิงที่สะอาด ใช้ DOM bounds ประกอบการกดและภาพเฉพาะ row ที่อ่านได้ ไม่ได้ส่งฟอร์ม จองที่พัก หรือเข้าสู่ระบบ

ใช้ Awesome DESIGN.md / Airbnb เป็น reference snapshot ด้านการจัดกลุ่มเท่านั้น คง palette, Mitr, Direction A และกฎคนรวมกับสัตว์เลี้ยงของ papaipak ไม่ยกการแยก adults/children ของ Airbnb มาใช้

## ภาพสำหรับตรวจทีละจุด

| ภาพ | Native review root / viewport | จุดที่ตรวจ |
| --- | --- | --- |
| [Home: สถานที่](screens/A2GPL.png) | A68V1a / A2GPL | กดสถานที่ พิมพ์ “พั” แล้วเห็น suggestions ใต้ช่อง |
| [Home: วันเข้าพัก](screens/nMQkj.png) | oFsJ2 / nMQkj | ปฏิทินเปิด ช่อง active และบันทึกยัง disabled |
| [Home: ผู้เข้าพัก](screens/nGvi5.png) | PqFiC / nGvi5 | คนรวมและสัตว์เลี้ยงแยกกัน ปุ่มลดที่ศูนย์ disabled |
| [Results: สถานที่](screens/JKflR.png) | CQW4f / JKflR | แก้ค่า draft โดยหัวข้อ Results ยังเป็นบริบทที่ค้นหาอยู่ |
| [Results: วันเข้าพัก](screens/kFGpj.png) | KoHUN / kFGpj | แผงเดิมวางต่อจาก Results bar รุ่นใหม่ |
| [Results: ผู้เข้าพัก](screens/fmuXZ.png) | j8iwM / fmuXZ | แผงไม่ล้นด้านขวา |
| [ค้นหาว่าง](screens/SYKeI.png) | xentK / SYKeI | ไม่กรอกอะไรแล้วไป “พูลวิลล่าทั้งหมด” ไม่แอบเลือกพัทยา |
| [วันออกยังไม่ครบ](screens/HEwd6.png) | S0ricW / HEwd6 | มีข้อความแก้ไขและกรอบ error คงสถานที่และจำนวนคนเดิม |
| [ช่วงวันครบ](screens/LVh4t.png) | l8wTjw / LVh4t | ตัวอย่าง 12 ถึง 14 ธ.ค. 2569, 2 คืน และปุ่มบันทึก |

ทั้งเก้าภาพเป็น viewport 1440×900 ส่วนเนื้อหาด้านล่างถูก crop ที่ขอบ viewport โดยตั้งใจ ไม่ได้ลบจากหน้าหลัก ภาพบ้านและข้อมูลใช้ fixtures เดิม ไม่ใช่รายการจริง ราคา quote หรือหลักฐาน availability

## เส้นทางกดและขอบเขตที่ยังต้องทดสอบ

| การกระทำ | ผลที่ระบุให้แบบรองรับ | หลักฐาน / สถานะ |
| --- | --- | --- |
| Home → กดสถานที่ | เปิด suggestions ชิด field โดยยังอยู่ Home | H-LOCATION |
| เลือก suggestion | คืน origin พร้อมชื่อที่เลือก แล้วค่อยกดค้นหา | generic selected-location R2mHV เดิมและข้อกำหนดนี้; ยังไม่คลิกจริง |
| พิมพ์แล้วไม่เลือก suggestion | ยังไม่สรุป free-query behavior หรือ ranking | D-03 คงเปิด ไม่สร้าง query contract |
| ไม่พบ suggestion | เสนอแก้คำหรือล้าง ไม่แสดงเป็นระบบล่ม | V0qGQi ใน generic board เดิม; ยังไม่ได้จัด anchored variant ในรอบนี้ |
| กดวันเข้าพัก | เปิดเดือนพร้อมเลือกวันเข้าและวันออก | H-DATES / R-DATES |
| เลือกวันเข้ากับวันออกครบ → บันทึก | กลับต้นทางพร้อมช่วงวันที่ ยังไม่ submit Search อัตโนมัติ | H-DATE-SELECTED; ภาพช่วงวันเป็น fixture |
| ยังไม่มีวันออก → ค้นหา | อยู่ต้นทางและให้แก้วันออก หรือล้างวัน โดยคงสถานที่และคนเดิม | H-DATE-ERROR; validation จริงยังไม่ทดสอบ |
| ไม่ระบุวัน | คืนค่าช่องวันที่เป็น unset และคงช่องอื่น ไม่บังคับวันก่อนดูบ้าน | ปุ่มไม่ระบุวันในทุก Date popover; ยังไม่ทดสอบจริง |
| กดผู้เข้าพัก | คนรวมหนึ่งค่า และ pets แยก; 0 ในแบบหมายถึงยังไม่ระบุ | H-GUESTS / R-GUESTS; 0 ไม่ใช่จำนวนคนสำหรับการจอง |
| เพิ่ม/ลด/ล้าง/บันทึกจำนวน | ลดต่ำกว่า 0 ไม่ได้; ล้างกลับ unset; ไม่เพิ่มการแยกผู้ใหญ่/เด็กหรือกำหนด max เอง | expanded/disabled visual; กติกา max และ catalog ยังเปิด |
| ไม่กรอกอะไร → ค้นหา | Results “พูลวิลล่าทั้งหมด” โดยไม่บังคับ Auth | SEARCH-EMPTY |
| เลือกเฉพาะพัทยา → ค้นหา | ใช้ Results fixture พัทยาที่มีอยู่ วันและคนยัง optional | osaIa เดิม ไม่อ้างจำนวนผลจริง |
| เปลี่ยน field ระหว่างเปิดแผง | ข้อเสนอให้เปิดครั้งละแผง ไม่วางทับกันหลายแผง | แต่ละ contextual scene แสดงหนึ่งแผง; รอตรวจรับ |
| Close / outside click / Esc | คืน origin และ focus ที่ trigger ไม่ submit Search | ไม่มี runtime handlers; การทิ้งหรือคืน unsaved draft ยังต้องตรวจรับ ไม่ปิด D-02 ของ date editor เดิม |
| Results draft → ค้นหา | หัวข้อ/รายการเปลี่ยนตามเงื่อนไขที่ส่ง ไม่เปลี่ยนตามทุก keystroke | ตัวอย่าง R-LOCATION คงหัวข้อ “พูลวิลล่าในพัทยา”; ไม่มี query engine |

Keyboard ที่ต้องตรวจใน prototype/implementation: combobox ใช้ลูกศร/Enter เลือก suggestion, ปฏิทินนำทางวันได้, counters มีชื่อ accessible, Tab order และ focus return ชัด การเขียนข้อกำหนดไม่ใช่หลักฐานว่าผ่าน keyboard หรือ screen reader แล้ว

## เหตุผลและ trade-offs

เลือก anchored popovers แทน centered modal เพราะเห็น field ต้นทางและกลับไปแก้ได้ต่อเนื่อง ทั้ง Home กับ Results ใช้ anatomy เดียวกัน แต่ตำแหน่งต่างกันตาม search bar ของแต่ละหน้า ไม่รื้อ Header/Hero/layout เดิม

Date popup ใช้เดือนเดียวเพื่อให้อยู่ในจอแรกของ Home ขนาดที่ตรวจคือ 440×350 ที่ y=532 จึงจบที่ y=882 ภาพเดือนธันวาคม 2569 มีห้าแถว ปุ่มวันสูง 30px และกว้างประมาณ 57px ปุ่ม action/close/navigation สูง 44px ยังไม่ตรวจเดือนหกแถว, viewport เตี้ยกว่า 900px หรือ zoom 200% ต้องตรวจการ reposition/พื้นที่แผงก่อนอนุมัติครบ ไม่อ้างว่าครอบคลุม responsive ทั้งหมด

ขนาด popovers ที่ตรวจ:
- Home: location 400×333, dates 440×350, guests 440×258; เริ่ม y=532
- Results: ขนาดเดียวกัน เริ่ม y=284
- native visitor ไม่พบ clipping ภายใน popovers ทั้งแปดภาพและ overview; ข้อความ/ไอคอนตรวจจาก PNG เต็มขนาดทุกภาพแล้ว

## ผลตรวจและเรื่องค้าง

| เกณฑ์ | ผลจริง |
| --- | --- |
| มี opened states จาก Home และ Results รุ่นปัจจุบัน | ผ่านในระดับภาพ static หกสถานะ |
| Optional search / ไม่บังคับ login / คนรวม+สัตว์เลี้ยง | รักษาข้อสรุปเดิมในแบบ |
| ค้นหาว่างและวันออกยังไม่ครบ | มีภาพให้ตรวจ ไม่อ้าง validation ทำงาน |
| ตำแหน่งและ clipping ที่ 1440×900 | ผ่าน native bounds และ visual inspection |
| Regression หน้าหลัก/สาม Mobile/boards เดิม | ตรงก่อนทำทั้งสิบ roots ตาม verification.json |
| ปุ่มค้นหา, การเลือกค่า, clear, close, keyboard, URL และผลค้นหาจริง | ยังไม่ได้ทดสอบ เพราะ Pencil นี้เป็น static |
| Mobile / เตี้ยกว่า 900px / หกแถวเดือน / 200% zoom | ไม่ตรวจในรอบนี้; Mobile เจ้าของสั่งพัก |
| CTA pink/white | OPEN-001 ยังเปิด ไม่เปลี่ยนแบรนด์หรือรับรอง AA |
| Owner acceptance / Frontend | รอตรวจรับ Search-states-r4; ไม่มี Frontend authorization |

ภาพ/brand/fixtures เดิมเป็นงานศึกษา ไม่เพิ่มรูป รีวิว โปรโมชันหรือคำรับรองใหม่ เอกสาร UXD-002 review-5 ใช้ศึกษาจุดเข้า/ออกของ picker เท่านั้น ยังคง pending owner review

## Critique รอบส่งตรวจ

Seen in one second: ช่อง active กับแผงที่เปิดเชื่อมกันชัด ผู้ใช้ยังเห็นต้นทางและปุ่มค้นหา

Priority: field label → ค่าหรือคำแนะนำ → ตัวเลือกในแผง → บันทึก/ล้าง; ข้อความ error บอกสิ่งที่แก้แทนการใช้สีอย่างเดียว

Strongest change: จาก panels แยกนอกหน้าเป็นภาพเปิดตามตำแหน่งจริงทั้งสองหน้า โดยไม่เปลี่ยนส่วนบนที่เพิ่งจัด

Remaining limitation: static states ไม่พิสูจน์การกด คีย์บอร์ด query และ viewport อื่น OPEN-001 ยังขวางการรับรอง accessibility ของ CTA จึงไม่ให้คะแนนผ่านรวมแทนเจ้าของ

Requested decision: ตรวจภาพสามช่องจาก Home ก่อน แล้วแจ้งจุดที่ต้องแก้หรือยืนยันแบบรุ่นนี้ การตรวจรับรอบนี้ไม่ทำให้ DSD-001 เสร็จทั้งหมดและยังไม่เริ่ม Frontend
