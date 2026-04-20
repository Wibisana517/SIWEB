"use client";
import { useRouter } from "next/navigation";

export default function ReportPage() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen bg-[#0A2A5E] flex flex-col items-center pt-16">

      {/* BACK BUTTON (KANAN ATAS - LEBIH PRESISI) */}
<button
  onClick={() => router.push("/login")}
  className="absolute top-5 left-5 z-50 px-4 py-1.5 rounded-md border border-white text-sm text-white hover:bg-white hover:text-[#0A2A5E] transition"
>
  Back
</button>

{/* LOGO */}
<div className="absolute top-1 z-10">
  <img
    src="/logo3.png"
    alt="logo"
    className="w-[650px] object-contain"
  />
</div>

      {/* ID BOX (DIPANJANGIN) */}
      <div className="bg-white text-black px-10 py-2 rounded-md mb-10 mt-70 text-[27px] text-center w-[500px]">
        SI241712895632
      </div>

      {/* CARD (DINAIKKAN DIKIT) */}
      <div className="bg-[#E5E7EB] w-[800px] rounded-2xl py-10 px-10 shadow-lg mt-[-10px]">

        {/* TITLE (SEDIKIT NAIK) */}
        <h2 className="text-center text-[28px] font-semibold mb-6 text-black">
          Report Your Problem
        </h2>

        {/* INPUT + BUTTON */}
        <div className="flex items-center gap-4">

          <input
            type="text"
            className="flex-1 h-[45px] px-4 rounded-md bg-gray-300 outline-none text-black"
          />

          <button className="bg-[#0A2A5E] text-white px-6 h-[45px] rounded-md flex items-center gap-2 hover:opacity-90 transition">
            🔍 SEND
          </button>

        </div>

      </div>

    </main>
  );
}