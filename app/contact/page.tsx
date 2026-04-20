export default function ContactPage() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/plane.jpeg"
            alt="plane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0A2A5E]/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-start pt-7 px-24 text-white">

          {/* TITLE */}
          <h1 className="text-[35px] font-bold text-center mb-12 tracking-wide">
            OUR CONTACT
          </h1>

          {/* CONTENT GRID */}
          <div className="max-w-[900px]">

            {/* CUSTOMER SUPPORT */}
            <div className="mb-10">
              <p className="text-[28px] font-semibold mb-4">
                Customer & Operational Support
              </p>

              <div className="space-y-3 text-[24px]">
                <p>📷 @terbanginaja</p>
                <p>✉️ operasional@terbanginaja.co.id</p>
                <p>📞 +62 811-0000-888</p>
                <p>🌐 ops.terbanginaja.co.id</p>
              </div>
            </div>

            {/* HEAD OFFICE */}
            <div>
              <p className="text-[28px] font-semibold mb-3">
                Head Office
              </p>

              <p className="text-[24px] leading-[1.7]">
                Soekarno-Hatta International Airport <br />
                Cargo Village (CGK), Banten, Indonesia
              </p>
            </div>

          </div>

        </div>

        {/* FOOTER (FIXED) */}
<div className="absolute bottom-0 w-full bg-[#E5E7EB] py-4 px-20 text-gray-500 text-[14px]">
  <p>@ 2026 TERBANGIN AJA CARGO JAKARTA</p>
</div>

      </section>

    </main>
  );
}