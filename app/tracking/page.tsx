export default function Tracking() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/plane.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0A2A5E]/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center pt-20 text-white">

        {/* TITLE */}
        <h1 className="text-[40px] font-bold mb-6">
          Input Your Cargo ID
        </h1>

        {/* SEARCH */}
        <div className="flex items-center gap-3 mb-12">

          <input
            placeholder="Enter AWB Number..."
            className="w-[450px] h-[50px] px-5 rounded-md text-black bg-white outline-none shadow"
          />

          <button className="bg-[#3B82F6] h-[50px] px-6 rounded-md flex items-center gap-2 shadow-lg hover:scale-105 transition">
            🔍 SEND
          </button>

        </div>

        {/* STATUS BOX */}
        <div className="bg-[#E5E7EB] w-[950px] rounded-2xl py-12 px-16 text-black shadow-xl">

          <h2 className="text-center text-[22px] font-bold mb-12">
            STATUS CARGO
          </h2>

          {/* LINE + DOT */}
          <div className="relative flex justify-between items-center mb-6">

            {/* LINE */}
            <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>

            {/* DOTS */}
            <div className="w-5 h-5 bg-green-500 rounded-full z-10"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full z-10"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full z-10"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full z-10"></div>
            <div className="w-5 h-5 bg-red-500 rounded-full z-10"></div>
            <div className="w-5 h-5 bg-red-500 rounded-full z-10"></div>

          </div>

          {/* TEXT */}
          <div className="flex justify-between text-center text-[12px] font-semibold">

            <div>
              <p className="text-gray-500">Atma Jaya (14.00 WIB)</p>
              <p>SHIPMENT CREATE</p>
            </div>

            <div>
              <p className="text-gray-500">ADI (16.00 WIB)</p>
              <p>LOADING</p>
            </div>

            <div>
              <p className="text-gray-500">18.00 WIB</p>
              <p>DEPARTED</p>
            </div>

            <div>
              <p className="text-gray-500">CGK (20.00 WIB)</p>
              <p>TRANSIT</p>
            </div>

            <div>
              <p>ARRIVED</p>
            </div>

            <div>
              <p>SEND TO DESTINATION</p>
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER (FIXED DI DALAM SCREEN) */}
      <div className="absolute bottom-0 w-full bg-[#E5E7EB] py-4 px-20 text-gray-500 text-[14px]">
        @ 2026 TERBANGIN AJA CARGO JAKARTA
      </div>

    </section>
  );
}