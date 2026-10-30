import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "paipak · พูลวิลล่า พื้นที่ความสุขส่วนตัว",
  description: "ค้นพบพูลวิลล่าสำหรับครอบครัว กลุ่มเพื่อน และทุกวันพักผ่อน — หน้าแรกข้อมูลตัวอย่างของ paipak",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
