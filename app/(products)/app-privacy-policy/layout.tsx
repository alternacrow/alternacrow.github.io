import { Noto_Sans_JP } from "next/font/google";

import "~/assets/reset.css";
import "~/assets/globals.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "利用規約・プライバシーポリシー",
  description:
    "alternacrowの開発・運用するスマートフォン用アプリケーションの利用規約・プライバシーポリシーです。",
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
