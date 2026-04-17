import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <title>All Done Pest Control | Eco-Friendly Pest Control in NY, NJ & CT</title>
        <meta name="description" content="All Done Pest Control offers eco-friendly, family-safe pest control for homes and businesses across New York, New Jersey, and Connecticut. Get your free quote today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-full flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
