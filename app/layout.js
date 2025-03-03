import Footer from "@/components/global/footer";
import "./globals.css";


export const metadata = {
  title: "Granduer Smart",
  description: "Granduer Smart unified system",
  icons: {
    icon: "/images/grandeurFavIcon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className=" bg-[#F5F5F5] overflow-hidden">
          {/* <div className=" bg-red-500 "> */}

          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
