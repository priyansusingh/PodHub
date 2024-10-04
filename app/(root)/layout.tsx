

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>LEFT SIDEBAR</p>
      {children}
      <p>RIGHT SIDEBAR</p>
    </div>
  );
}
