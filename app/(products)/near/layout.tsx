import { Noto_Sans_JP } from "next/font/google";

import "~/assets/reset.css";
import "~/assets/globals.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "alternacrow",
  description: "alternacrow's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className}`}>{children}</body>
    </html>
  );
}
