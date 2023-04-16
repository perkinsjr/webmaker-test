'use client'
// use client é necessário
import { ConfigProvider } from "antd";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token:{
              colorBgContainer: '#111727',
              colorTextBase: '#ffffff',
              colorPrimary: '#18BFAB',
              colorPrimaryBg: '#1d263d',
              colorBgElevated: '#1d263d',
              colorBorder: '#ffffff',
              colorIcon: '#ffffff',
            }
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
