import '@/assets/styles/globals.css'
import NavBar from "@/components/Navbar";

export const metaData = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find a perfect rental property'
}

const MainLayout = ({children}) => {
    return (
        <html>
        <body>
        <NavBar/>
        <main>{children}</main>
        </body>
        </html>);
};

export default MainLayout;