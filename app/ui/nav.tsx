import Image from "next/image";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row justify-center items-center bg-slate-800">
            {/* Logo */}
            <Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={50} height={50} className="items-start" />
            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-20">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}