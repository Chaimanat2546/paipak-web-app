# Header utility study-r2 · สองรูปแบบเพิ่มเติม

4 พฤศจิกายน 2026 · ข้อเสนอใหม่ ยังไม่เลือกหรือแทนสถานะเดิม

เจ้าของถาม “มีแบบอื่นเสนอไหม” หลังดู Header-popovers-r1 จึงทำสองรูปแบบให้เทียบ ทั้งภาษาและติดต่อใช้รายการเดิม ไม่มีการเพิ่มช่องทางหรือระบบจริง

[ภาพเปรียบเทียบ A/B](UD3QN.png) · [native layers](layer-snapshot.json) · [ผลตรวจ](verification.json)

| ทางเลือก | ภาษา | ติดต่อ | เหตุผล/ข้อแลกเปลี่ยน |
|---|---|---|---|
| A Popup ช่องเลือกคู่ | [ดู](r1qLaC.png) | [ดู](YUpao.png) | อยู่ใต้ไอคอน เลือกสองรายการได้เร็วโดยยังเห็นหน้า Home แนะนำสำหรับรายการน้อย |
| B Modal กลางจอ | [ขยาย](incnS.png), [เต็มจอ](jnc1x.png) | [ขยาย](VWNOR.png), [เต็มจอ](qDe5n.png) | เห็นชัดและมีพื้นที่คำอธิบาย แต่กั้นการใช้งานหน้า Home จนกว่าจะปิด |
| แบบเดิม รายการแนวตั้ง | [R1](../header-popovers-r1/topfZ.png) | [R1](../header-popovers-r1/nDcVo.png) | ใช้พื้นที่น้อย รูปแบบเมนูคุ้นเคย ยังเก็บไว้เปรียบเทียบ |

## รายละเอียด

- A กว้าง 304px ใช้ช่องเลือกสองช่องสูง 88px, flag 22px และ EN marker เดิม ไทยที่เลือกอยู่มี check, contact มี LINE OA/โทร ใช้ close target 44px
- B กว้าง 420px อยู่กึ่งกลาง Desktop viewport 1440×900 พื้นหลัง Navy โปร่งแสง ภาษาใช้รายการ 56px ส่วนติดต่อใช้รายการ 72px พร้อมคำอธิบายการเปิดแอป ไม่เพิ่มบัญชี LINE หรือหมายเลขโทรศัพท์
- ภาพขยาย B เป็น crop พิกัดเดียวกับภาพเต็ม ไม่ใช่หน้า responsive ใหม่ native dialog ภาษา 420×228 อยู่ x=510,y=336 และ contact 420×260 อยู่ x=510,y=320 ทั้งคู่มีจุดกึ่งกลาง 720,450
- ทุกแบบปิดด้วย X / คลิกนอก / Esc และคืน focus ที่ trigger ตามข้อกำหนดภาพ สำหรับ B ต้องควบคุม focus ให้อยู่ใน dialog ระหว่างเปิดในขั้น implementation ไม่ได้ทำงานจริงใน Pencil

บอร์ด `UD3QN` ชื่อ **REVIEW · Header utility alternatives · paired popup and centered modal** อยู่เหนือ Home ใน native source `C:/Users/chaym/.pencil/documents/5738e270-25e4-4bf2-9d22-fad4c0b58275/papaipak-ui.pen` มี full-viewport B ภาษา `jnc1x` และติดต่อ `qDe5n` แยกไว้ด้วย

ตรวจภาพเปรียบเทียบและภาพเต็มแล้ว ตำแหน่ง B อยู่กลางจอจริง ข้อความและปุ่มในแผงแสดงครบ Main Home-r7 และบอร์ด R1 เดิมไม่เปลี่ยน ทั้งหมดเป็น native editable static proposals ไม่ใช่ prototype ที่เปิด/ปิดหรือเปลี่ยนภาษาจริง ยังไม่เลือกแบบ ไม่อนุมัติ Header open states หรือ Home ทั้งหน้า ไม่มีการเริ่ม i18n/Auth task, Frontend/backend/contact integration และ OPEN-001 ยังคงเปิด
