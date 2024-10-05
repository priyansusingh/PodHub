import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="relative h-screen w-full">
        <div>
          <Image src="/images/bg-img.png" alt="background" fill className="size-full"/>
        </div>
        {children}
      </main>
    );
  }
  