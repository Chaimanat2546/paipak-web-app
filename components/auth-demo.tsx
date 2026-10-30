"use client";

import { useState, type FormEvent } from "react";
import { EyeIcon, EyeOffIcon, XIcon } from "lucide-react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthDemo({ onClose }: { onClose: () => void }) {
  const [mode, setMode] = useState("login");
  const [visible, setVisible] = useState(false);
  const [notice, setNotice] = useState("");
  const [invalid, setInvalid] = useState(false);
  function changeMode(value: string) {
    setMode(value);
    setNotice("");
    setInvalid(false);
    setVisible(false);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mode === "register") {
      const data = new FormData(event.currentTarget);
      const password = data.get("password");
      if (
        typeof password !== "string" ||
        password !== data.get("confirmation")
      ) {
        setInvalid(true);
        setNotice("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
        return;
      }
    }
    event.currentTarget.reset();
    setInvalid(false);
    setVisible(false);
    setNotice(
      mode === "login"
        ? "ทดลองเข้าสู่ระบบแล้ว ยังไม่มีการเข้าสู่ระบบจริง"
        : "ทดลองสมัครสมาชิกแล้ว ยังไม่มีการสร้างบัญชีจริง",
    );
  }
  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        type="button"
        className="auth-close absolute right-4 top-4 z-10 rounded-full bg-canvas text-slate"
        aria-label="ปิดหน้าต่าง"
        onClick={onClose}
      >
        <XIcon aria-hidden="true" className="size-4" />
      </Button>
      <div className="auth-demo">
        <div className="mb-4 flex justify-center">
          <Brand compact />
        </div>
        <DialogTitle className="text-center text-xl font-bold leading-7 text-ink">
          {mode === "login" ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
        </DialogTitle>
        <p className="mt-1 text-center text-sm leading-5 text-muted-foreground">
          {mode === "login"
            ? "ยินดีต้อนรับกลับมา · ตัวอย่าง"
            : "เริ่มต้นการพักผ่อนกับ paipak · ตัวอย่าง"}
        </p>
        <Tabs value={mode} onValueChange={changeMode} className="mt-5 gap-6">
          <TabsList className="h-11 w-full rounded-2xl bg-canvas p-1">
            <TabsTrigger value="login" className="rounded-xl font-semibold">
              เข้าสู่ระบบ
            </TabsTrigger>
            <TabsTrigger value="register" className="rounded-xl font-semibold">
              สมัครสมาชิก
            </TabsTrigger>
          </TabsList>
          {["login", "register"].map((tab) => (
            <TabsContent value={tab} key={tab}>
              <form onSubmit={submit} autoComplete="off" className="space-y-4">
                {tab === "register" && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="demo-first-name" className="auth-label">
                        ชื่อ
                      </Label>
                      <Input
                        id="demo-first-name"
                        name="firstName"
                        placeholder="ชื่อ"
                        required
                        className="auth-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-last-name" className="auth-label">
                        นามสกุล
                      </Label>
                      <Input
                        id="demo-last-name"
                        name="lastName"
                        placeholder="นามสกุล"
                        required
                        className="auth-input"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <Label htmlFor={`demo-email-${tab}`} className="auth-label">
                    {tab === "login" ? "Email / Username" : "Email"}
                  </Label>
                  <Input
                    id={`demo-email-${tab}`}
                    name="email"
                    type={tab === "register" ? "email" : "text"}
                    placeholder="your@email.com"
                    required
                    autoComplete="off"
                    className="auth-input"
                  />
                </div>
                {tab === "register" && (
                  <div>
                    <Label htmlFor="demo-phone" className="auth-label">
                      เบอร์โทรศัพท์
                    </Label>
                    <Input
                      id="demo-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="0812345678"
                      pattern="[0-9]{9,10}"
                      title="กรอกหมายเลข 9–10 หลัก"
                      required
                      className="auth-input"
                    />
                  </div>
                )}
                <div>
                  <Label
                    htmlFor={`demo-password-${tab}`}
                    className="auth-label"
                  >
                    รหัสผ่าน
                  </Label>
                  <div className="relative">
                    <Input
                      id={`demo-password-${tab}`}
                      name="password"
                      type={visible ? "text" : "password"}
                      placeholder={
                        tab === "register" ? "อย่างน้อย 8 ตัวอักษร" : "••••••••"
                      }
                      minLength={tab === "register" ? 8 : undefined}
                      required
                      autoComplete="new-password"
                      className="auth-input pr-12"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      aria-label={visible ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
                      className="absolute right-1 top-0.5 text-soft"
                      onClick={() => setVisible(!visible)}
                    >
                      {visible ? (
                        <EyeOffIcon aria-hidden="true" />
                      ) : (
                        <EyeIcon aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </div>
                {tab === "register" && (
                  <div>
                    <Label htmlFor="demo-confirmation" className="auth-label">
                      ยืนยันรหัสผ่าน
                    </Label>
                    <Input
                      id="demo-confirmation"
                      name="confirmation"
                      type="password"
                      placeholder="••••••••"
                      required
                      autoComplete="new-password"
                      aria-invalid={invalid}
                      aria-describedby={
                        invalid ? "auth-demo-notice" : undefined
                      }
                      className="auth-input"
                    />
                  </div>
                )}
                {tab === "login" && (
                  <div className="flex min-h-6 items-center justify-between gap-2 text-sm">
                    <Label className="flex items-center gap-2 font-normal text-slate">
                      <Checkbox />
                      จำฉันไว้
                    </Label>
                    <Button
                      type="button"
                      variant="link"
                      size="plain"
                      className="text-sm"
                      onClick={() => {
                        setInvalid(false);
                        setNotice(
                          "การกู้รหัสผ่านเป็น UI ตัวอย่าง ยังไม่ส่งอีเมล",
                        );
                      }}
                    >
                      ลืมรหัสผ่าน?
                    </Button>
                  </div>
                )}
                <Button
                  type="submit"
                  className="h-[52px] w-full rounded-xl text-base font-bold"
                >
                  {tab === "login" ? "เข้าสู่ระบบ" : "สมัครสมาชิกฟรี"}
                </Button>
                {tab === "login" ? (
                  <p className="flex min-h-6 items-center justify-center gap-1 text-sm text-muted-foreground">
                    ยังไม่มีบัญชี?{" "}
                    <Button
                      type="button"
                      variant="link"
                      size="plain"
                      className="text-sm font-semibold"
                      onClick={() => changeMode("register")}
                    >
                      สมัครสมาชิกฟรี
                    </Button>
                  </p>
                ) : (
                  <p className="text-center text-xs leading-5 text-muted-foreground">
                    การสมัครสมาชิกตัวอย่าง ไม่มีการสร้างบัญชีจริง
                    <br />
                    <Button
                      variant="link"
                      size="plain"
                      type="button"
                      className="text-xs"
                      onClick={() => {
                        setInvalid(false);
                        setNotice(
                          "นโยบายและเงื่อนไขเป็น UI ตัวอย่าง ยังไม่เปิดระบบสมาชิก",
                        );
                      }}
                    >
                      นโยบายความเป็นส่วนตัว และเงื่อนไขการใช้งาน
                    </Button>
                  </p>
                )}
              </form>
            </TabsContent>
          ))}
        </Tabs>
        {notice && (
          <p
            id="auth-demo-notice"
            role={invalid ? "alert" : "status"}
            className={`mt-4 rounded-xl p-3 text-sm ${invalid ? "bg-rose-50 text-destructive" : "bg-blue-50 text-brand-blue"}`}
          >
            {notice}
          </p>
        )}
      </div>
    </>
  );
}
