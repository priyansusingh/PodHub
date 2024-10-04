import LeftSideBar from "@/components/LeftSideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LeftSideBar/>
      {children}
      <p>RIGHT SIDEBAR</p>
    </div>
  );
}
