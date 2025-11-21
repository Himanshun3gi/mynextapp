import Link from "next/link";
import LogoutButton from "./LogoutButton";


const NavBar = () => {
    const session = false;
    return <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold text-gray-800">Contact Manager</Link>
       
        <div className="flex items-center space-x-4">
            {session ? (
                <>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-800 mr-8">Contacts</Link>
                    <LogoutButton/>
                </>
            ) : (
                <Link href="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
            )}
            
        </div>
        </div>
        
    </nav>;
};

export default NavBar;