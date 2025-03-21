import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "FurniFlex",
  description: "A e-commerce online furniture shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
