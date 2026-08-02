"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { SITE } from "@/constants/site";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <a href="/" className="text-xl font-bold">
                        {SITE.name}
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-slate-600 transition hover:text-blue-600"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button>Hire Me</Button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>

                </div>
            </Container>

            {isOpen && (
                <div className="border-t bg-white md:hidden">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-4 hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}