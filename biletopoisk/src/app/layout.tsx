import "./globals.css";
import { Roboto } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import { Layout } from "@/components/Layout/Layout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Билетопоиск",
  description: "ШРИ React Домашнее Задание 2023",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
