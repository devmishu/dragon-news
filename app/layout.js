import { Montserrat, Montserrat_Alternates, Poppins } from 'next/font/google'
import "./globals.css";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"
  ]
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  //   weight: [ "100", "200", "300", "400", "500", "600", "700", "800", "900"
  // ]
});



export const metadata = {
  title: "dragon news",
  description: "this is dragon news webapp",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={` h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>

        <main className="container mx-auto my-10 px-5 ">
          {children}
        </main>
      </body>
    </html>
  );
}
