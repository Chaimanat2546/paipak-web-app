# Wireframe Guidelines — papaipak

> เอกสารแนวทางสำหรับ UX/UI Designer และ AI Design Agent  
> ขอบเขต: การวางโครงสร้างหน้าจอ (Wireframe) ก่อนออกแบบ High-Fidelity UI หรือเริ่มเขียน Frontend

## 1. วัตถุประสงค์

Wireframe มีหน้าที่สื่อสาร **โครงสร้างเนื้อหา ลำดับความสำคัญของข้อมูล องค์ประกอบที่มองเห็นได้ และจุดที่ผู้ใช้โต้ตอบ** ไม่ใช่ภาพหน้าตาสุดท้ายของเว็บไซต์

**เป้าหมายของ papaipak:** ผู้ใช้เข้าหน้าเว็บแล้วมองเห็นพูลวิลล่า เริ่มสำรวจ เลือกดูรายละเอียด และเข้าสู่ขั้นตอนจองได้รวดเร็ว โดย **ไม่จำเป็นต้องเลือกวันเข้าพักหรือจำนวนคนก่อนเริ่มดูรายการบ้าน**

Wireframe ต้องชัดพอให้ผู้ตรวจงานและผู้พัฒนาระบุได้ว่าแต่ละส่วนทำอะไร โดยไม่ต้องเดา แต่ไม่จำเป็นต้องกำหนดสี ฟอนต์ เงา หรือการตกแต่งขั้นสุดท้าย

## 2. ลำดับกระบวนการออกแบบ

1. **User Tasks / UX Requirements** — นิยามสิ่งที่ผู้ใช้ต้องทำ เช่น ค้นหา ดูบ้าน กดถูกใจ และจอง
2. **Information Architecture / Sitemap** — แยกหน้าและจัดกลุ่มข้อมูล
3. **User Flow** — วางเส้นทางหลักและทางแยกของการทำงาน
4. **Content Priority** — ตัดสินใจว่าข้อมูลใดสำคัญและต้องเห็นก่อน
5. **Low-Fidelity Wireframes** — วางตำแหน่งองค์ประกอบและ affordance ที่สำคัญ
6. **Wireflow / Interaction Annotations** — เชื่อมหน้าจอและอธิบายพฤติกรรมเมื่อกด/เลื่อน/เกิดข้อผิดพลาด
7. **Review & Usability Check** — ตรวจว่าผู้ใช้ทำงานหลักสำเร็จได้
8. **Approved Wireframes** — อนุมัติเป็นฐานก่อนทำ High-Fidelity Design

> ลำดับเป็นกระบวนการที่วนปรับแก้ได้ ไม่ใช่ขั้นตอนตายตัว

## 3. วิธีเรียงส่วนประกอบภายในหน้า (Page Structure)

ใช้หลักดังนี้ร่วมกัน:

- **Task-first:** เนื้อหาที่ช่วยให้ผู้ใช้ทำงานหลักควรเข้าถึงได้เร็ว
- **Content hierarchy:** ให้สิ่งสำคัญเด่นกว่าเนื้อหารอง
- **Progressive disclosure:** ไม่ยัดรายละเอียดทั้งหมดลงในจุดเดียว
- **Grouping / Proximity:** วางข้อมูลที่เกี่ยวข้องไว้ด้วยกัน
- **Responsive priority:** จัดลำดับใหม่บนมือถือโดยไม่ทำให้ภารกิจหลักหายไป

### ตัวอย่างลำดับหน้า Home (สมมติฐานสำหรับทดสอบ ไม่ใช่ข้อบังคับ)

1. **Header** — โลโก้ เมนูหลัก บัญชีผู้ใช้
2. **Discovery / Search** — เลือกสถานที่ และตัวกรองที่เป็น *ตัวเลือกเสริม* เช่น วันพัก/จำนวนผู้เข้าพัก
3. **Categories** — ทางลัดเลือกพูลวิลล่าตามลักษณะ
4. **Villa Listings** — รูป ราคาเริ่มต้น สถานที่ ความจุ และทางเข้าสู่รายละเอียด
5. **Supporting Content / Footer** — ข้อมูลช่วยตัดสินใจ/ช่วยเหลือและข้อมูลบริษัท

**ข้อควรทดสอบ:** ถ้าส่วน Hero มีความสูงมากจนทำให้ผู้ใช้ไม่เห็นบ้านพักในจอแรก ให้ลองลดความสูงหรือเปลี่ยนลำดับ ไม่ต้องยึด Layout ข้างต้นอย่างเคร่งครัด

## 4. วิธีเรียงหน้าจอ (Screen Flow)

เริ่มจาก **Critical User Flow** ไม่ใช่เริ่มออกแบบทุกหน้าพร้อมกัน:

```text
Home
 ├─ เลือกหมวดหมู่ / ค้นหา → Search Results
 └─ คลิกการ์ดบ้านพัก ─────────┐
                              ▼
                         Villa Detail
                              ↓
                    เลือกวัน / ตรวจสอบราคา
                              ↓
                       Booking / Checkout
                              ↓
                     Booking Confirmation
```

หน้าหรือสถานะเสริม เช่น Login, Favorites, Member, Empty Results, No Availability, Payment Failed ควรเพิ่มเติมใน User Flow ตามข้อกำหนดจริงของระบบ **อย่าสมมติว่าต้องล็อกอินก่อนจองหรือกด Favorite จนกว่าจะได้รับการยืนยัน**

## 5. ระดับความละเอียดของ Wireframe

| สิ่งที่ต้องสื่อสาร | Low-Fi Wireframe | Annotation / Interaction Spec | High-Fi UI |
|---|---|---|---|
| ตำแหน่งและขนาดสัมพัทธ์ขององค์ประกอบ | ต้องมี | — | ปรับละเอียด |
| หัวข้อ ข้อมูล ราคา และข้อความสำคัญที่ผู้ใช้เห็น | ต้องมี (ใช้ตัวอย่างได้) | ระบุเงื่อนไขหากจำเป็น | ข้อความและรูปแบบจริง |
| ปุ่ม ไอคอน ช่องกรอก แท็บ และตัวกรอง | ต้องมี | ระบุการทำงาน | รูปแบบจริง |
| Pagination dots / ลูกศรของ Carousel | ต้องวาด หากตั้งใจให้ผู้ใช้เห็น | ระบุกฎการเลื่อน | รูปแบบและ motion |
| คลิกแล้วไปหน้าใด / เปิด Modal อะไร | แสดงจุดกด | ต้องอธิบาย | Prototype |
| Loading / Empty / Error / Disabled | ระบุสถานะที่สำคัญ | เงื่อนไขและข้อความ | ดีไซน์ทุกสถานะ |
| สี ฟอนต์ เงา ระยะห่างระดับพิกเซล | ไม่จำเป็น | — | กำหนด |
| Responsive behavior | ต้องมี Wireframe ของขนาดหน้าจอสำคัญ | ระบุกฎเปลี่ยน Layout | ปรับรายละเอียด |

**กฎ:** สิ่งที่ผู้ใช้เห็นหรือกดได้ควรปรากฏใน Wireframe; พฤติกรรมเบื้องหลังให้แยกใน Annotation/Spec

## 6. ตัวอย่าง: Villa Image Carousel

### 6.1 ไม่ชัดพอ

```text
┌────────────────────────────┐
│       พื้นที่ภาพที่พัก      │
│        carousel 1–5        │
└────────────────────────────┘
```

ข้อความ `carousel 1–5` เพียงอย่างเดียวไม่ยืนยันว่าผู้ใช้จะเห็นตัวควบคุมอะไร

### 6.2 ชัดพอสำหรับ Low-Fi

```text
┌────────────────────────────────┐
│ แนะนำ                       ♡  │
│                                │
│         [ Villa Image ]        │
│                                │
│     ‹   ●  ○  ○  ○  ○   ›      │
└────────────────────────────────┘
พูลวิลล่าตัวอย่าง 01
พัทยา · 8 คน · 3 ห้องนอน
เริ่มต้น ฿8,900 / คืน
```

ตัวอย่างนี้สื่อว่ามีภาพหลายภาพ จุดแสดงภาพปัจจุบัน และปุ่มซ้าย–ขวา **แต่ถ้าไม่ต้องการลูกศรจริง ก็ไม่ควรวาดลูกศรลงไป**

### 6.3 Annotation แยกจากตัวหน้าจอ

**WF-HOME-CARD-01 — Villa Image Carousel**

- ภาพเริ่มต้น: ภาพที่ 1
- Pagination dots แสดงตำแหน่งภาพปัจจุบัน
- จำนวนจุด: เท่ากับจำนวนภาพจริง (ตัวอย่าง Wireframe ใช้ 5 ภาพ)
- คลิกจุดหรือลูกศร: ไปยังภาพเป้าหมาย ตามรูปแบบการควบคุมที่ได้รับอนุมัติ
- Touch/swipe, keyboard navigation, loop, autoplay และการซ่อนปุ่ม: **ต้องระบุ/อนุมัติใน Interaction Spec** ไม่ควรให้ AI เดา
- คลิกพื้นที่ภาพเพื่อเปิด Villa Detail หรือไม่: **ต้องกำหนดให้ชัด** เพราะอาจชนกับการเลื่อน Carousel
- ถ้ามีรูปเดียว: กำหนดว่าจะซ่อน dots/ลูกศรหรือไม่
- หากรูปโหลดไม่สำเร็จ: ระบุ fallback

## 7. การเขียน Annotation อย่างถูกที่

**อย่าวางข้อความอธิบายการทำงานเป็นแถบในหน้า UI** เช่น:

```text
01 ค้นหาไม่บังคับวันที่/จำนวนคน · 02 หมวด → Results
03 การ์ด → Detail · หัวใจ → Login ก่อน
```

ให้นำไปไว้ในเอกสารหรือพื้นที่ annotation ด้านนอกกรอบหน้าจอ เช่น:

| ID | Component | Trigger | Expected behavior | หมายเหตุ |
|---|---|---|---|---|
| WF-HOME-01 | Search | กดค้นหา | เปิด Results โดยใช้เฉพาะ Filter ที่ผู้ใช้กรอก | วันและจำนวนคนไม่บังคับ |
| WF-HOME-02 | Category | กดหมวด | เปิด Results พร้อมหมวดที่เลือก | ตรวจสอบว่าหน้าปลายทางใช้ตัวกรองอะไร |
| WF-HOME-03 | Villa Card | กดพื้นที่เปิดรายละเอียด | เปิด Villa Detail | ต้องกำหนด click target |
| WF-HOME-04 | Favorite | กดหัวใจ | **รอการตัดสินใจเรื่อง Auth และการบันทึก** | ห้ามสมมติว่าเปิด Login เสมอ |

> **แยก User-facing copy ออกจาก Note:** ตัวอย่าง “ราคาตัวอย่าง · ยังไม่ยืนยันวันว่าง” ให้อยู่ในหน้าจอ *เฉพาะเมื่อเป็นข้อความที่ผู้ใช้จริงควรเห็น*; ถ้าเป็นหมายเหตุภายในให้นำออก

## 8. กติกาสำหรับ AI Design Agent

1. ห้ามเปลี่ยนลำดับและพฤติกรรมสำคัญที่ผ่านการอนุมัติแล้วโดยไม่เสนอเหตุผลและขออนุมัติ
2. ห้ามแสดง Annotation, Requirement ID, ชื่อ State หรือ Developer Notes เป็นองค์ประกอบของหน้าเว็บจริง
3. หาก Component ถูกระบุว่าเป็น Carousel, Dropdown, Tabs หรือ Modal ต้องวาด **ตัวบ่งชี้การโต้ตอบที่ผู้ใช้เห็นจริง** ให้ชัด
4. ห้ามแต่งการทำงานที่ยังไม่ตกลง เช่น Auto-slide, Loop, Auth Gate, การคัดกรองราคา หรือการบังคับเลือกวัน
5. แต่ละหน้าควรมีทั้ง Default และ States ที่มีผลสำคัญต่อการใช้งาน
6. สร้าง Responsive Wireframes อย่างน้อย Desktop + Mobile สำหรับหน้าหลัก
7. ส่งรายการประเด็นที่ยังไม่ได้ตัดสินใจ (Open Questions) แยกต่างหาก ไม่ซ่อนสมมติฐานไว้ในแบบ
8. ก่อนเริ่ม High-Fi ให้ผู้ใช้ตรวจอนุมัติ Wireframe + Interaction Spec

## 9. Template สำหรับส่งงาน Wireframe หนึ่งหน้า

```markdown
# WF-HOME — Home

## Objective
ผู้ใช้ค้นหา/สำรวจพูลวิลล่าได้โดยไม่ต้องกรอกวันก่อน

## Target viewport
Desktop: [ระบุขนาด] / Mobile: [ระบุขนาด]

## Content order
1. Header
2. Search / Discovery
3. Categories
4. Villa Listings
5. Footer

## Main interactions
- WF-HOME-01: Search → Results
- WF-HOME-02: Category → Filtered Results
- WF-HOME-03: Card → Villa Detail
- WF-HOME-CARD-01: Image Carousel → เปลี่ยนภาพในการ์ด

## States
Default / Loading / Empty / Error / Selected Filter

## Open questions
- กดภาพการ์ดแล้วเลื่อนภาพหรือเข้าหน้า Detail?
- Carousel บนมือถือรองรับ swipe หรือไม่?
- Favorite ต้องเข้าสู่ระบบก่อนหรือไม่?

## Acceptance checklist
- [ ] ผู้ใช้เห็นรายการพูลวิลล่าได้โดยไม่ต้องเลือกวัน
- [ ] สิ่งที่กดได้มีตัวบ่งชี้ชัดเจน
- [ ] Carousel แสดงรูปแบบการควบคุมตามข้อกำหนด
- [ ] Annotation แยกจาก UI
- [ ] มี Desktop และ Mobile
- [ ] ผู้ใช้อนุมัติก่อนทำ High-Fi
```

## 10. Checklist ตรวจรับ Wireframe ก่อนเริ่ม High-Fi

- [ ] โครงสร้างตรงกับ UX Requirements และ User Flow
- [ ] ลำดับข้อมูลตอบโจทย์งานหลักของผู้ใช้
- [ ] ไม่บังคับเลือกวัน/จำนวนคนก่อนดูรายการบ้านในหน้า Home
- [ ] องค์ประกอบ Interactive มี affordance ที่มองเห็นได้
- [ ] Carousel มีจุดบอกตำแหน่ง หากกำหนดให้มี
- [ ] ไม่มีข้อความ Developer Notes ปะปนในตัวหน้าเว็บ
- [ ] มีชื่อ Component และ Interaction ID ที่ใช้อ้างอิงได้
- [ ] ครอบคลุมสถานะสำคัญและการใช้งานบนมือถือ
- [ ] สิ่งที่ยังไม่ตกลงถูกระบุเป็น Open Questions
- [ ] ผู้ตรวจงานอนุมัติ Wireframe และ Interaction Rules ก่อนสร้าง Visual Design

---

**สรุป:** Wireframe ไม่จำเป็นต้องสวยหรือสมจริง แต่ต้อง **ชัดเจนในสิ่งที่ผู้ใช้เห็น ลำดับเนื้อหา และวิธีโต้ตอบ** ส่วนกฎการทำงานที่ซับซ้อนให้แยกเป็น Annotation/Interaction Spec เพื่อให้ AI และ Developer ไม่ตีความเอง


---

## 11. Form & Input Wireframe Guidelines (เพิ่มเติมจากการศึกษามาตรฐาน)

### 11.1 ข้อมูลขั้นต่ำของ Input ใน Wireframe

ทุก Input ที่เกี่ยวกับงานสำคัญต้องสื่อสาร:

| หัวข้อ | สิ่งที่ต้องระบุ | อยู่ที่ใด |
|---|---|---|
| Purpose | ช่องนี้ใช้กรอก/เลือกอะไร | Wireframe: Label |
| Component Type | Text Input, Search Suggestion, Select, Date Range Picker, Counter ฯลฯ | Wireframe + Component ID |
| Requirement | Required / Optional และค่าเริ่มต้น | Label หรือ Annotation |
| Helpful Content | Hint text เฉพาะเมื่อจำเป็น; Placeholder ใช้ตัวอย่างสั้น ๆ ไม่ใช่ Label | Wireframe |
| Affordance | ไอคอน/ลูกศร/ปุ่มล้างค่าที่ผู้ใช้จะเห็นจริง | Wireframe |
| Main Interaction | คลิกหรือพิมพ์แล้วเปิดอะไร | Wireflow / Annotation |
| Constraints | ค่าขั้นต่ำ-สูงสุด, วันที่เลือกไม่ได้, การขึ้นกับช่องอื่น | Interaction Specification |
| Validation | เมื่อไรตรวจ, ข้อความ Error และวิธีกู้คืน | State Wireframe + Specification |
| Accessibility | ชื่อที่โปรแกรมอ่านหน้าจอรับรู้, keyboard/focus, ข้อความแจ้งสถานะ | Interaction / Implementation Notes |

**กฎ:** ถ้าเลือกชนิด Component แล้ว ไม่ให้ AI เปลี่ยนเป็นรูปแบบอื่นเองเพียงเพื่อความสวย แต่ถ้ายังไม่ตัดสินใจให้บันทึก `Open Decision` แล้วสร้างทางเลือกเพื่อรีวิว ไม่สมมติว่าได้รับอนุมัติแล้ว

### 11.2 ตัวอย่าง Search Form ของ papaipak

- **Location Search**: ระบุว่าเป็น free text พร้อม autocomplete หรือเลือกจากรายการ (ต้องตัดสินใจใน UX) และวาดสถานะรายการคำแนะนำเมื่อเปิด
- **Check-in / Check-out**: ถ้าเลือกเป็น date-range picker ให้แสดงปฏิทินที่เปิด, ช่วงวันที่เลือก และการแจ้งวันที่ใช้ไม่ได้ แยกกติกาการเลือกไว้ใน Spec
- **Guests**: ถ้าใช้ counter ให้แสดงปุ่มลด/เพิ่ม ตัวเลข และขอบเขตจำนวนคน; ถ้าใช้ Select ต้องวาดเป็น Select ตามจริง
- **Search**: ปุ่มค้นหาไม่ควรถูกวาดเป็นกล่อง Input; แยก action ออกจาก field
- **Optional Search**: ในโครงการนี้ ผู้ใช้ต้องสามารถเปิดดูพูลวิลล่าได้โดยไม่เลือกวันและจำนวนคนก่อน; อย่าออกแบบให้ form บล็อกการเริ่มสำรวจ

### 11.3 Label, Hint และ Placeholder

- ใช้ **Label ที่ชัดเจนและมองเห็นได้** ตามปกติ ไม่ใช้ Placeholder เป็น Label
- Hint ใช้เฉพาะเมื่อช่วยตอบคำถามจริง และเขียนสั้น ไม่ฝัง requirement สำคัญไว้เฉพาะใน Hint
- Error ต้องอธิบายว่าเกิดอะไรและแก้ไขอย่างไร; ไม่ใช้แต่ขอบสีแดงหรือข้อความกว้าง ๆ เช่น `Invalid`
- การตรวจสอบข้อมูลควรกำหนดเวลาที่เหมาะสม ไม่แสดง Error รบกวนทันทีในทุกจังหวะขณะพิมพ์โดยไร้เหตุผล

### 11.4 State Coverage Matrix

| Component | State ที่ควรมีใน Wireframe | State/เงื่อนไขที่ระบุใน Spec ได้ |
|---|---|---|
| Location autocomplete | Default, Open suggestions, Selected, No results (ถ้าเปลี่ยน layout) | Debounce, ranking, keyboard shortcuts |
| Date range picker | Closed, Open calendar, Range selected, Error/unavailable | min/max, blocked dates, timezone rules |
| Guest counter | Closed, Expanded, min/max feedback เมื่อมีผลต่อ UI | ขอบเขตจำนวน, กติกาเด็ก/ผู้ใหญ่ถ้ามี |
| Generic text field | Default, Error และ Disabled ถ้าใช้จริง | ฟอร์แมต, trimming, timing ของ validation |
| Search action | Enabled, Loading/Empty results (ที่หน้าปลายทาง) | Submit/navigation/data fetch |

ไม่ต้องสร้างหน้าแยกให้ทุก combination ของ states; วาดเฉพาะ state ที่แสดงพฤติกรรมใหม่ ความเสี่ยง หรือการเปลี่ยน layout สำคัญ

## 12. Interactive Components และ Carousel

### 12.1 Carousel ที่อยู่ในการ์ดพูลวิลล่า

วาด image region, ตำแหน่ง favorite, pagination dots และ arrows **เฉพาะเมื่อมีใน UI ที่ตั้งใจออกแบบ**; ถ้าต้องการ dots ต้องวาดให้เห็นจริง ไม่เขียนแค่ `carousel 1–5` ทับภาพ

ระบุใน Interaction Specification อย่างน้อย:

- จุด (dots) กดไปยังรูปโดยตรงหรือใช้บอกสถานะอย่างเดียว?
- มีลูกศร Prev/Next หรือไม่; desktop/mobile ต่างกันหรือไม่?
- Swipe/drag ใช้ได้บนอุปกรณ์ใด?
- เมื่อกดที่รูปจะไปหน้ารายละเอียด หรือเฉพาะการ์ด/ชื่อบ้านเป็นลิงก์? ต้องไม่เกิดการกดสลับรูปแล้วเปิดหน้า Detail ผิดพลาด
- เมื่อถึงรูปสุดท้าย จะวนกลับรูปแรกหรือหยุด?
- ต้องการ autoplay หรือไม่? **แนะนำเริ่มจากไม่ autoplay** สำหรับรูปบ้านในการ์ด เพราะหลีกเลี่ยงการเคลื่อนไหวที่รบกวนการสำรวจ; หากใช้ autoplay ต้องมีการหยุดและรองรับข้อกำหนด accessibility
- Loading, image error, จำนวนรูปน้อยกว่า 2 จะจัดการอย่างไร?

W3C แนะนำให้ควบคุม Carousel ผ่านคีย์บอร์ดและสื่อสารรูปปัจจุบันอย่างเข้าถึงได้; ถ้า autoplay ต้องมีปุ่ม pause และหยุดเมื่อ focus/hover ตาม pattern ที่ใช้

### 12.2 Component อื่นที่ต้องพิจารณา

| Component | สิ่งที่ต้องวาดเมื่อสำคัญ | Spec เพิ่มเติม |
|---|---|---|
| Favorite | heart และสถานะ selected | login gate, toggle, feedback |
| Filter | filter summary, expanded panel | apply/reset, filter persistence |
| Modal/Dialog | เนื้อหา, action, close | focus trap/return, dismiss |
| Tabs | selected tab และ panel content | keyboard behavior, content switch |
| Pagination/Load more | ตัวควบคุมจริง | loading, no-more-results |
| Booking CTA | ชื่อ action และสถานะสำคัญ | ราคา/availability ที่ต้องตรวจใหม่ |

## 13. Responsive Wireframes และ Accessibility

ทำ Desktop และ Mobile สำหรับหน้าหลักก่อนอนุมัติ High-Fi โดยเน้นการ **เปลี่ยนพฤติกรรม** ไม่ใช่แค่ลดความกว้าง เช่น Search 4 คอลัมน์บน Desktop อาจย้ายเป็น stacked fields หรือ modal บน Mobile; ภาพการ์ดอาจเปลี่ยนอัตราส่วน; control arrows อาจแทนด้วย swipe แต่ต้องมีวิธีใช้งานที่เข้าถึงได้

สำหรับทุกหน้าหลัก ตรวจอย่างน้อย:

- ลำดับอ่านด้วยสายตาและลำดับใช้งานผ่านคีย์บอร์ดสอดคล้องกัน
- ปุ่มและ control มีชื่อ/ข้อความบ่งบอกการใช้งาน ไม่พึ่งไอคอนอย่างเดียวเมื่อความหมายกำกวม
- Validation ไม่สื่อผ่านสีอย่างเดียว
- Dialog, dropdown และ carousel มี state และ focus behavior ที่สื่อสารใน Spec
- เค้าโครงไม่ตัดข้อมูลจำเป็นเมื่อหน้าจอแคบหรือซูมตัวอักษร

## 14. Decision Log, Handoff และ Acceptance Criteria

ทุกหน้าควรแนบ:

1. `Screen ID` และเป้าหมายผู้ใช้
2. `User Entry / Exit` และลิงก์ไปหน้าที่เกี่ยวข้อง
3. `Component Inventory` เช่น `SEARCH-01`, `DATE-01`, `VILLA-CAROUSEL-01`
4. `States covered` และ states ที่ยังต้องออกแบบ
5. `Interaction annotations` ไม่อยู่ใน UI canvas ที่เป็นภาพหน้าจอ
6. `Responsive differences`
7. `Open Decisions / Assumptions` ที่ยังไม่ได้อนุมัติ
8. `Acceptance Criteria` ตรวจได้จริง เช่น “การ์ดแสดงจุดบอกตำแหน่งเมื่อมีหลายภาพ”

**ห้าม AI อ้างว่าออกแบบเสร็จเมื่อ:** ยังมี control ที่ไม่ทราบชนิด, มีข้อความ annotation ปะปนใน UI, ไม่แสดง state สำคัญ, ไม่กำหนดเส้นทางออกจากหน้า หรือใช้ภาพสวยแทนการสื่อสาร interaction

## 15. Template: Component Specification (นำไปใช้ซ้ำ)

```md
### [COMPONENT-ID] — [Component name]
- Goal:
- Type: (Text / Combobox / Date Range / Counter / Carousel / ...)
- Visible anatomy: (Label, Hint, Icon, Input, Dots, Buttons, ...)
- Default value / Required or optional:
- Wireframe states: (Default, Open, Selected, Error, Empty, ...)
- On click / keyboard / touch:
- Validation / Constraints:
- Responsive variation:
- Accessibility notes:
- Open decisions:
- Acceptance criteria:
```

## 16. ตัวอย่าง Acceptance Criteria สำหรับ papaipak

```md
### Search controls
- Home แสดงรายการบ้านได้แม้ยังไม่เลือกวันเข้าพัก/จำนวนผู้เข้าพัก
- Wireframe แสดง Label ของทุก Search field ที่ผู้ใช้จำเป็นต้องเข้าใจ
- เมื่อ UX ตัดสินใจชนิด Date Picker และ Guest Picker แล้ว ต้องวาด expanded state อย่างน้อยหนึ่งกรณี
- เงื่อนไขตรวจสอบช่วงวันที่และจำนวนคนถูกบันทึกไว้ ไม่ให้ Agent คิดขึ้นเอง

### Villa card carousel
- แสดง image placeholder, favorite และ pagination dots ที่สื่อได้ว่าเป็น carousel
- ระบุชัดว่า dots เป็น interactive หรือ indicator อย่างเดียว
- ระบุ behavior เมื่อมี 1 รูป, หลายรูป, โหลดรูปไม่สำเร็จ
- การเลื่อนภาพไม่ควรเผลอนำทางไป Villa Detail

### Handoff
- ข้อความเชิงเทคนิคและ navigation rules อยู่ใน annotations/spec ไม่อยู่ใน UI จริง
- Desktop/Mobile ระบุการเปลี่ยน layout และ controls ที่สำคัญ
- มีรายการ assumption และคำถามที่ยังต้องตัดสินใจก่อน High-Fi
```

## 17. แหล่งอ้างอิงสำหรับแนวปฏิบัติ

- GOV.UK Design System — Text input: https://design-system.service.gov.uk/components/text-input/
- GOV.UK Design System — Error message: https://design-system.service.gov.uk/components/error-message/
- GOV.UK Design System — Date input: https://design-system.service.gov.uk/components/date-input/
- UK Parliament Design System — Text input: https://designsystem.parliament.uk/forms/text-input/
- W3C WAI — Carousels Tutorial: https://www.w3.org/WAI/tutorials/carousels/
- W3C WAI ARIA APG — Carousel Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/

> ส่วนแนวปฏิบัติเฉพาะ papaipak เช่น การไม่บังคับวันก่อนเปิดดูบ้าน การเลือก state ที่ต้องวาด และกฎห้าม AI เปลี่ยนชนิด component โดยไม่อนุมัติ เป็น **ข้อกำหนดกระบวนการที่แนะนำสำหรับโครงการ** ไม่ใช่ข้อกำหนดที่แหล่งอ้างอิงเหล่านี้กำหนดเป็นสากล
