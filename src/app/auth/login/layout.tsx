import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
     <body style={{ minHeight: "100vh" }}>{children}</body>
    </html>
  );
};

export default Layout;
