import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { ptBR } from "@clerk/localizations";
import { dark } from '@clerk/themes';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR} appearance={{baseTheme: dark}}>
      <html className="bg-dk-gray1" lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
