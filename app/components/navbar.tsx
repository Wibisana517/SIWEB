"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // ⛔ Sembunyikan di halaman tertentu
  if (pathname === "/login" || pathname === "/report") return null;

  return (
    <nav className="w-full flex items-center bg-[#F3F4F6] border-b-[3px] border-[#0A2A5E] px-24 py-5">

      <div className="flex items-center gap-32 text-[23px] font-semibold">

        <Link href="/" className="text-black hover:text-[#0A2A5E]">
          About Us
        </Link>

        <Link href="/tracking" className="text-black hover:text-[#0A2A5E]">
          Track Your Cargo
        </Link>

        <Link href="/privacy" className="text-black hover:text-[#0A2A5E]">
          Privacy Policy
        </Link>

        <Link href="/contact" className="text-black hover:text-[#0A2A5E]">
          Contact Us!
        </Link>

      </div>

      <div className="ml-auto">
        <Link href="/login">
          <button className="bg-[#1D3A6E] text-white px-7 py-2 rounded-lg shadow hover:opacity-90">
            Login
          </button>
        </Link>
      </div>

    </nav>
  );
}