"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const DOWNLOAD_URL =
    "https://drive.google.com/file/d/1UW8kLpZXhu_L7UAnbsgmqg4Xwn098i7F/view?usp=sharing";

const links = [
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        const handler = () => { if (window.innerWidth >= 768) setOpen(false); };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass" : "bg-transparent"
                    }`}
            >
                <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center sm:justify-around justify-between rounded-4xl">

                    <Link href="/" className="group flex items-center gap-2 select-none">
                        <span className="text-lg font-semibold tracking-tight text-[#1c1917]">
                            Reci<span className="text-[#ff6b00]">PI</span>
                        </span>
                    </Link>

                    <ul className="hidden md:flex items-center gap-1">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="navbar-link">{l.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex">
                        <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="navbar-cta">
                            <DownloadIcon />
                            Download
                        </a>
                    </div>

                    <button
                        id="navbar-menu-toggle"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                        <Bar className={open ? "hidden" : ""} />
                        <Bar className={open ? "hidden" : ""} />
                        <Bar className={open ? "hidden" : ""} />
                    </button>
                </nav>
            </header>

            <div
                onClick={() => setOpen(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-40 bg-black/20 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            <aside
                aria-label="Mobile navigation"
                className={`mobile-drawer fixed top-0 right-0 z-50 h-full w-72 flex flex-col pt-20 px-4 pb-8 md:hidden
          transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg text-[#57534e] hover:bg-orange-50 transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                </button>

                <nav>
                    <ul className="flex flex-col gap-1">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="navbar-mobile-link" onClick={() => setOpen(false)}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto">
                    <a
                        href={DOWNLOAD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-cta justify-center w-full"
                        onClick={() => setOpen(false)}
                    >
                        <DownloadIcon />
                        Download the App
                    </a>
                </div>
            </aside>
        </>
    );
}

function Bar({ className = "" }: { className?: string }) {
    return (
        <span
            className={`block h-[1.5px] w-5 bg-[#1c1917] rounded-full transition-all duration-300 origin-center ${className}`}
        />
    );
}

function DownloadIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path
                d="M7.5 1v9M4 7l3.5 3.5L11 7M2 13h11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
