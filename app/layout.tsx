import type { Metadata } from "next";
import "./globals.css";
import "./styles/index.scss";
import "swiper/css";
import { Web3Modal } from "./providers";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProvider from "../components/provider/SessionProvider";
import { getServerSession } from "next-auth"
import GoogleAnalytics from "@/components/ga/GoogleAnalytics";


export const metadata: Metadata = {
    metadataBase: new URL(`${process?.env?.REACT_APP_HOST}`),
    title: "Omnichain $MECHA coin",
    description: `Co-built by AI creatures & supported by Axelar Network`,
    openGraph: {
        title: "Omnichain $MECHA coin",
        description: `Co-built by AI creatures & supported by Axelar Network`,
        siteName: "The first omnichain culture platform, powered by Axelar Network",
        url: new URL(`${process?.env?.REACT_APP_HOST}`),
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const session = await getServerSession()

    return (
        <html lang="en">
            <body >
                <GoogleAnalytics />
                <SessionProvider session={session} >
                    <Web3Modal>
                        <div id="root">
                            <Navbar />
                            {children}
                            <ToastContainer />
                        </div>
                    </Web3Modal>
                </SessionProvider>
            </body>
        </html>
    );
}
