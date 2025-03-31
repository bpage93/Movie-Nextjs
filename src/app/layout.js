import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Movie-App",
    description: "This is a movie app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="">
                <Providers />

                <Header />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
