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
              colorPrimary: '#434CE6',
              colorPrimaryBg: '#344153',
              colorBorder: '#ffffff',
              colorIcon: '#1D04BF'
            }
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
