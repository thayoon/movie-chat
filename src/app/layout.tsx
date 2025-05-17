import Link from "next/link";
import "./globals.css";
import style from "./layout.module.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header className={style.header}>
            <Link href={"/"}>M-Chat</Link>
          </header>
          <main>{children}</main>
          <footer className={style.footer}>
            Movie data provided by
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/tmdb_logo.svg"
                alt="TMDB Logo"
                width={80}
                height={30}
                className={style.logo}
              />
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
