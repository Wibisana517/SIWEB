"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-[#0A2A5E] py-10">

      {/* CARD LOGIN */}
      <div className="relative bg-white w-[420px] max-w-[420px] rounded-2xl shadow-xl p-10 overflow-hidden">

        {/* BACK BUTTON */}
<button
  onClick={() => router.push("/")}
  className="absolute top-4 left-4 z-50 px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#0A2A5E] transition"
>
  Back
</button>

        {/* LOGO */}
        <div className="flex justify-center mt-6 mb-2">
          <img
            src="/logo2.png"
            alt="logo"
            className="w-[200px] scale-225 object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-[32px] font-bold text-center mb-6 text-black">
          Login
        </h1>

        {/* FORM */}
        <div className="flex flex-col gap-4">

          <div>
            <p className="text-sm mb-1 text-black">Username / Email</p>
            <input
              type="text"
              placeholder="Enter username..."
              className="w-full h-[45px] px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          <div>
            <p className="text-sm mb-1 text-black">Password</p>
            <input
              type="password"
              placeholder="Enter password..."
              className="w-full h-[45px] px-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

        </div>

        {/* OPTIONS */}
        <div className="flex justify-between items-center text-sm mt-4">

          <label className="flex items-center gap-2 text-black">
            <input type="checkbox" />
            Remember me
          </label>

          <p className="text-blue-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>

        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 h-[45px] rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-900 transition">
          Sign In
        </button>

        {/* FOOT TEXT */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Forgot Account? <Link href="/report" className="text-blue-600 cursor-pointer hover:underline">
  Contact IT
</Link>
        </p>

      </div>

    </main>
  );
}