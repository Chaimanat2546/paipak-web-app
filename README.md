# paipak-web-app

Application repository สำหรับเว็บไซต์ pool villa **paipak.com** ใช้ Next.js, Tailwind CSS และ TypeScript strict เตรียมรันบน Cloudflare Workers ผ่าน OpenNext

## ขอบเขตและสถานะ

Repository นี้มีแอปและชุดเอกสารส่งต่องาน โดย `package.json`, `app/`, `public/`, config และ tests อยู่ที่ root โดยตรง เอกสารวางแผนอยู่ใน `docs/`, task packets อยู่ใน `tasks/` และสคริปต์ตรวจโครงสร้างอยู่ใน `scripts/` ส่วนไฟล์ภาพอ้างอิงและงาน Pencil ต้นฉบับไม่ได้รวมมาด้วย

- ภูยืนยันเมื่อ 2 พฤศจิกายน 2026 ให้ยึดเอกสารชุดใหม่ทั้งหมดเป็นข้อสรุปล่าสุดของโครงการ แนวทางใหม่มีผลเหนือข้อกำหนดเดิมที่ขัดกัน การยืนยันนี้เป็นการรับรองทิศทางและแผนงาน ส่วนแบบหน้าจอสุดท้าย งานที่เสร็จ และการเปิดระบบจริงยังต้องมีหลักฐานและการอนุมัติตาม task
- เป้าหมายดีไซน์ปัจจุบันคือ Pink Accent Premium: กรม `#072D59`, ฟ้าอ่อน `#DBF2FC`, ชมพู `#FD6E88`, พื้นหลักสีขาวและฟอนต์ Mitr พร้อมเมนูลัด 7 หมวดและองค์ประกอบตาม [ข้อกำหนด UX/UI](docs/design/approved-ux-ui-scope.md)
- มีหน้าแรก paipak ด้วยข้อมูลจำลองจากแนวทางเดิมแล้ว ปัจจุบันยังเป็นน้ำเงิน–เหลืองและฟอนต์ Kanit จึงยังไม่ตรงข้อสรุปใหม่ และไม่ถือเป็นแบบหน้าจอที่ได้รับอนุมัติสำหรับทิศทางใหม่นี้
- ใช้ shadcn/ui (Radix) เป็นฐาน Button, Input, Label, Checkbox, Card, Dialog, Popover, Switch และ Tabs พร้อม Calendar (React DayPicker) และ Kibo UI Pill สำหรับป้ายที่พัก; source อยู่ใน `components/ui/` และ `components/kibo-ui/` พร้อมใบอนุญาตต้นฉบับ โดยจะปรับผ่าน semantic tokens ใน `app/globals.css` และ variants ตามแบบที่อนุมัติใน task ที่เกี่ยวข้อง
- `components.json` ตั้งค่า aliases และ registry `@kibo-ui` แล้ว เพิ่ม component ตามความจำเป็นและปรับผ่าน semantic tokens/variants ของ paipak แทนการสร้าง primitive ซ้ำ
- โค้ดหน้าแรกเดิมอ้างอิง Desktop/Tablet/Mobile ใน `paipak.pen` และ https://www.poolapoolvilla.com/ โดยใช้ชื่อ paipak และภาพสต็อกแยกจาก POOLA (ที่มาอยู่ใน `public/mock/credits.json`) ใช้เป็นประวัติการพัฒนา ไม่ใช่ข้อกำหนดทับแนวทางใหม่
- ค้นหาข้อมูลจำลองจากรายการสถานที่ที่สร้างตาม fixtures เลือกด้วยเมาส์หรือปุ่มลูกศร/Enter ได้ ปฏิทิน Desktop แสดงสองเดือน ส่วน Mobile แสดงครั้งละหนึ่งเดือนและใช้ลูกศรเปลี่ยนเดือนตามคำขอล่าสุด พิมพ์จำนวนผู้ใหญ่ เด็ก สัตว์เลี้ยง 0–50 หรือใช้ปุ่มเพิ่ม/ลดได้ การกรองความจุนับเฉพาะผู้ใหญ่และเด็ก ยังไม่ตรวจวันว่างหรือนโยบายสัตว์เลี้ยง
- กดได้ทั้งการ์ดที่พักเพื่อเปิดรายละเอียดตัวอย่าง ส่วนหัวใจทำงานแยกกัน การล้างผลค้นหาคืนโฟกัสให้ช่องสถานที่ ฟอร์มสมัครสมาชิกตัวอย่างมีชื่อ นามสกุล อีเมล โทรศัพท์ รหัสผ่าน และยืนยันรหัสผ่าน พร้อมตรวจข้อมูลเฉพาะในหน้านี้
- ฟอร์มค้นหาส่งต่อสถานที่ → วันเข้า–ออก → ผู้เข้าพักอัตโนมัติทั้ง Desktop/Mobile เมื่อเลือกวันที่ครบแล้วเท่านั้นจึงเปิดจำนวนคน ย้อนแก้แต่ละช่องได้โดยไม่ล้างข้อมูลเดิม และกดปุ่มค้นหาเองเพื่อกรองข้อมูลจำลอง
- ไม่ระบุวันที่ได้ แต่ถ้าเริ่มเลือกวันเข้าแล้วต้องเลือกวันออกให้ครบหรือล้างวันที่ก่อนค้นหา Desktop กด Enter ในช่องจำนวนคนเพื่อค้นหาได้ หรือใช้ Tab ไปปุ่มค้นหาในแผงผู้เข้าพักโดยไม่ต้องกด Escape ก่อน
- มี Header ตรึงด้านบนและเปลี่ยนพื้นหลังเมื่อเลื่อน ฟอร์มเข้าสู่ระบบ/สมัครสมาชิกตัวอย่าง ที่พักโปรด หน้าต่างข้อมูล และคุกกี้สามหมวด สถานะทั้งหมดล้างเมื่อโหลดหน้าใหม่ ฟอร์มไม่ส่งข้อมูลและไม่สร้างบัญชี ไม่มีระบบจอง สมาชิก การติดตาม หรือการติดต่อภายนอกจริง
- Local Workers smoke test ล่าสุดผ่านเมื่อ 30 ตุลาคม 2026: HTTP 18 checks รวม SSR, assets, local font, query/header, 404, redirect และคำขอพร้อมกัน ตรวจ hydration ของหน้าแรกด้วย browser เพิ่มต่างหาก
- ตรวจหน้าแรกที่ 320, 390, 834 และ 1440px หลังปรับเทียบแบบแล้ว รวมช่วงวันที่ข้ามเดือน/วันย้อนหลัง ตัวนับผู้เข้าพักและการกรองความจุ ฟอร์มสมาชิกเดโม สวิตช์คุกกี้ Escape/การคืนโฟกัส และปิดแผงค้นหาเมื่อเปลี่ยน breakpoint หลังนำ diagnostic routes ออกแล้ว build Workers ใหม่และตรวจว่า routes เหล่านั้นตอบ 404 ตรวจ hydration/interaction บน Workers ซ้ำและไม่พบ JavaScript error ในหน้าที่ตรวจ
- ปิด `cacheComponents` และ `partialPrefetching` เพราะ config เดิมทำให้ rendering ค้างบนชุดเวอร์ชันที่ทดสอบ
- Supabase SDK ติดตั้งเตรียมไว้ แต่ยังไม่ได้เชื่อม Auth, Database หรือ Storage
- ยังไม่มีระบบสมาชิก การจอง หลังบ้าน หรือ Beam Checkout ที่ใช้งานจริง และยังไม่ deploy หรือสร้าง cloud resources

ผล local runtime test ไม่ใช่การรับรอง Production หรือการตรวจรับ Foundation ทั้งหมด

## ชุดเอกสารส่งต่องานที่นำเข้า

นำเข้า `paipak-project-handoff-complete.zip` ตามคำขอเมื่อ 2 พฤศจิกายน 2026 โดยเก็บเอกสารใน `docs/`, task packets ใน `tasks/` และสคริปต์ตรวจโครงสร้างใน `scripts/` คู่มือของชุดอยู่ที่ [README.handoff.md](README.handoff.md) ส่วนไฟล์คำแนะนำสำหรับ agent จากชุดเก็บเป็น [AGENTS.handoff.md](AGENTS.handoff.md) เพื่อไม่ทับ `AGENTS.md` ปัจจุบัน

หลังนำเข้า ภูยืนยันให้ใช้ชุดนี้เป็นข้อกำหนดวางแผนหลักเมื่อ 2 พฤศจิกายน 2026 จึงให้ยึดเอกสารใหม่เมื่อขัดกับโค้ดหรือแนวทางเดิม โดยเก็บโค้ดเดิมไว้ปรับใน task ที่ได้รับอนุญาต ข้อมูลต้นทางย้อนหลังและภาพอ้างอิงยังต้องตรวจสอบ การยืนยันทิศทางไม่ใช่การรับรองภาพหน้าจอหรือผลทดสอบ

ลำดับงานปัจจุบันยึด [task-order.md](docs/roadmap/task-order.md) แทนลำดับตรวจรับหน้าแรกเดิม: เริ่มจาก UX/IA → wireframe และ visual foundations → component/page designs → ตรวจและอนุมัติแบบที่เกี่ยวข้อง → งาน implementation ที่ภูเลือก แต่ละ task เริ่มและอนุมัติแยกกันตาม [owner-approval-policy.md](docs/roadmap/owner-approval-policy.md) โดยภูตรวจรับ [UXD-001 review-2](tasks/design/UXD-001.md#owner-acceptance) แล้วเมื่อ 2 พฤศจิกายน 2026 ส่วน [UXD-002 review-4](docs/design/uxd-002/annotations.md) มี wireframe Desktop/Mobile และ annotations แล้ว อยู่ระหว่างรอภูตรวจรับ DSD-001 และ task อื่นยังไม่ได้เริ่ม

## ชุดเวอร์ชันที่ทดสอบ

| รายการ | เวอร์ชัน |
|---|---|
| Node.js / npm | 24.18.0 / 11.16.0 |
| Next.js / React | 16.4.3 / 19.3.0 |
| Tailwind CSS / TypeScript | 4.3.3 / 5.9.3 |
| OpenNext Cloudflare / Wrangler | 1.20.14 / 4.155.0 |
| workerd | 1.20261023.1 |
| Workers compatibility date | 2026-10-23 |

ตารางนี้บันทึกชุดที่ตรวจบน Windows 11 ยึด dependencies จาก `package.json` และ `package-lock.json` ไม่ต้องมีบัญชีหรือ API keys เพื่อเริ่ม local preview

## รันในเครื่อง

ทุกคำสั่งรันจาก root ของ repository:

```powershell
npm ci
npm run preview
```

รอ Wrangler แจ้ง Ready แล้วเปิด `http://127.0.0.1:8787` ใช้ Ctrl+C เพื่อหยุด `preview` จะ build Next.js, adapt ด้วย OpenNext แล้วเปิด Workers runtime ในเครื่อง โดยมีเพียง ASSETS binding

สำหรับพัฒนาเร็ว ใช้ `npm run dev` แล้วเปิด `http://localhost:3000` คำสั่งนี้รันผ่าน Node.js และใช้แทนการตรวจ Workers compatibility ไม่ได้

## คำสั่งตรวจสอบ

| คำสั่ง | หน้าที่ |
|---|---|
| `npm run lint` | ตรวจ ESLint |
| `node --test tests/homepage/demo-state.test.mjs` | ตรวจขอบเขตจำนวนผู้เข้าพักที่พิมพ์ รวมค่าว่าง ค่าผิดรูปแบบ ทศนิยม และเกินช่วง |
| `node tests/homepage/http-smoke.mjs` | ตรวจหน้าแรก SSR, ข้อมูลจำลอง, ภาพ และ 404 ขณะ dev server ทำงาน (ตั้ง `HOMEPAGE_BASE_URL` เพื่อเปลี่ยนไปตรวจ Workers) |
| `npm run typecheck` | ตรวจ TypeScript โดยไม่ emit |
| `npm run build` | Native Next.js production build |
| `npm run build:workers` | Build และ adapt เป็น `.open-next/worker.js` |
| `npm run preview:workers` | เปิด adapted artifact ที่ build ไว้แล้วบน Workers ในเครื่อง |

หลัง clone ใหม่ให้รัน build ก่อน typecheck เพื่อสร้าง Next.js generated types

## ทดสอบ Workers runtime ซ้ำ

เริ่มจาก preview ที่หยุดอยู่และยังไม่มี temporary diagnostic routes:

```powershell
npm run test:runtime:prepare
npm run preview
```

เมื่อ Ready เปิด terminal อีกอันที่ root ของ repository:

```powershell
npm run test:runtime
```

ตรวจ hydration เพิ่มโดยเปิด `http://127.0.0.1:8787/runtime-probe?value=browser-query` แล้วกดปุ่ม `Count: 0` ให้เปลี่ยนเป็น `Count: 1` ชุด HTTP test ไม่ได้ทดสอบ browser interaction ให้อัตโนมัติ

หลังตรวจเสร็จ หยุด preview ด้วย Ctrl+C ก่อนนำ temporary routes ออกและ build ใหม่:

```powershell
npm run test:runtime:clean
npm run build:workers
npm run typecheck
npm run lint
```

Fixtures อยู่ใน `tests/runtime/` ส่วน helper เพิ่ม route wrappers ชั่วคราวใน `app/runtime-probe/` และ `app/runtime-request/` คำสั่ง prepare ไม่ overwrite ไฟล์เดิม และ clean ตรวจเนื้อหาก่อนลบ ต้อง clean และ build ใหม่เสมอเพื่อไม่ให้ diagnostic routes ค้างใน artifact

## Environment และงานระยะถัดไป

Local starter ใช้ได้โดยไม่มี `.env` หรือ credentials จริง ส่วน `.env*`, `.dev.vars*`, dependencies และ generated output ถูก ignore ไว้

เมื่อได้รับอนุญาตให้เชื่อมระบบจริง ต้องใช้ Cloudflare และ Supabase ของ paipak แยกจากเว็บอื่น รวมถึงแยกข้อมูลทดสอบ/Production และเก็บ secrets ฝั่ง server เท่านั้น Beam Checkout เป็นงานระยะถัดไป

ยังไม่ได้รับรอง persistent cache, ISR/revalidation, Cache Components/PPR, Cloudflare Images optimization หรือ backend จริง Local image test ใช้ static assets และ `unoptimized` เท่านั้น

ข้อกำหนดการทำงานและลำดับตรวจรับอยู่ใน [AGENTS.md](AGENTS.md)
