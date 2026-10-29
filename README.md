# paipak-web-app

Application repository สำหรับเว็บไซต์ pool villa **paipak.com** ใช้ Next.js, Tailwind CSS และ TypeScript strict เตรียมรันบน Cloudflare Workers ผ่าน OpenNext

## ขอบเขตและสถานะ

Repository นี้มีเฉพาะแอป โดย `package.json`, `app/`, `public/`, config และ tests อยู่ที่ root โดยตรง เอกสาร audit, design reference, งาน Pencil และไฟล์สำรวจเว็บไซต์ต้นฉบับเป็นอีกส่วนหนึ่งและไม่รวมใน repository นี้

- มี Next.js starter และ dependencies แล้ว ยังไม่ได้สร้าง UI ของ paipak
- Local Workers smoke test ผ่านเมื่อ 29 ตุลาคม 2026: HTTP 18 checks รวม SSR, assets, local font, query/header, 404, redirect และคำขอพร้อมกัน ตรวจ hydration ด้วย browser เพิ่มต่างหาก
- ปิด `cacheComponents` และ `partialPrefetching` เพราะ config เดิมทำให้ rendering ค้างบนชุดเวอร์ชันที่ทดสอบ
- Supabase SDK ติดตั้งเตรียมไว้ แต่ยังไม่ได้เชื่อม Auth, Database หรือ Storage
- ยังไม่มีระบบสมาชิก การจอง หลังบ้าน หรือ Beam Checkout ที่ใช้งานจริง และยังไม่ deploy หรือสร้าง cloud resources

ผล local runtime test ไม่ใช่การรับรอง Production หรือการตรวจรับ Foundation ทั้งหมด

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
