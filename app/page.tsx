export default function Home() {
  return (
    <main className="w-full">

      {/* NAVBAR */}
      <nav className="w-full flex items-center bg-[#F3F4F6] border-b-[3px] border-[#0A2A5E] relative">

        {/* LOGO */}
        <div className="flex items-center gap-3 px-8 py-4 border-r border-gray-300">
          <span className="text-[36px]">✈️</span>
          <div className="leading-tight">
            <p className="font-bold text-[28px] text-[#0A2A5E] tracking-wide">
              EKSPEDISI
            </p>
            <p className="font-bold text-[28px] text-[#0A2A5E] tracking-wide">
              TERBANGINAJA
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="absolute left-1/2 -translate-x-[30%] flex items-center gap-52 text-[32px] font-semibold">
          <a className="text-[#0A2A5E]">About Us</a>
          <a className="text-black">Track Your Cargo</a>
        </div>

        {/* BUTTON */}
        <div className="ml-auto pr-10">
          <button className="bg-[#1D3A6E] text-white px-6 py-2 rounded-lg text-[14px] shadow">
            Login
          </button>
        </div>

      </nav>

      {/* HERO */}
      <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="plane.jpeg"
            alt="plane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY (dibikin lebih transparan) */}
        <div className="absolute inset-0 bg-[#0A2A5E]/50 z-0"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-24 pt-5 text-white w-full">

          {/* TITLE */}
          <h1 className="text-[52px] font-bold mb-3">
            About Us
          </h1>

          {/* DESC */}
          <p className="text-[22px] leading-[1.7] mb-5 w-[1300px]">
            PT Ekspedisi Terbanginaja is a leading air freight service provider focused on inter-island logistics delivery with high-level speed, precision, and security. Born from the need for rapid distribution systems in the modern era, we combine a reliable air fleet with digital payload management and tracking technology. From fresh agricultural produce to large-scale industrial cargo, we ensure every item arrives at its destination on time, every time.
          </p>

          {/* SUBTITLE */}
          <h2 className="text-[40px] font-bold mb-1">
            Vision & Mission
          </h2>

          {/* DESC */}
          <p className="text-[23px] mb-2 w-[1300px] leading-[1.7]">
            To be the pioneer of the most innovative and trusted air cargo logistics solutions in the archipelago, connecting every regional economic potential without distance barriers.
          </p>

          <p className="text-[25px] font-semibold mb-1">
            Mission:
          </p>

          {/* LIST */}
          <ul className="text-[22px] space-y-2 w-[1300px] leading-[1.7]">
            <li>• Punctuality: Guaranteeing delivery SLAs (Service Level Agreements) with measurable and disciplined cargo flight schedules.</li>
            <li>• Technology Driven: Providing real-time information tracking systems and transparent digital manifest management for every client.</li>
            <li>• Cargo Integrity: Applying the highest aviation operational standards in handling every type of cargo, ensuring goods arrive in perfect condition.</li>
          </ul>

        </div>
      </section>

{/* CORE SERVICES */}
<section className="w-full bg-[#F3F4F6] py-16 px-20">

  {/* TITLE */}
  <h2 className="text-[60px] font-bold text-center text-[#1D3A6E] mb-12">
    Core Services
  </h2>

  {/* IMAGE CARDS */}
  <div className="flex justify-center gap-55 mb-14">

    <div className="text-center">
      <img
        src="service1.jpeg"
        className="w-[600px] h-[250px] object-cover rounded-2xl mb-3"
      />
      <p className="font-semibold text-[25px] text-black">Priority Air Freight</p>
    </div>

    <div className="text-center">
      <img
        src="service2.jpeg"
        className="w-[600px] h-[250px] object-cover rounded-2xl mb-3"
      />
      <p className="font-semibold text-[25px] text-black">Perishable Goods Handling</p>
    </div>

    <div className="text-center">
      <img
        src="service3.jpeg"
        className="w-[600px] h-[250px] object-cover rounded-2xl mb-3"
      />
      <p className="font-semibold text-[25px] text-black">Integrated Tracking</p>
    </div>

  </div>

{/* WHY CHOOSE US */}
<div className="w-full text-[#1D3A6E] mb-14">

  <p className="font-bold text-[35px] mb-4">
    Why Choose Us?
  </p>

  <ul className="space-y-4 text-[25px] leading-[1.9] font-semibold max-w-[1500px]">
    <li>
      • Centralized Digital Manifest System: No more lost or scattered paperwork. 
      All shipper data, assigned crew, and detailed weight per item are recorded 
      in real-time within the Ekspedisi Terbanginaja system.
    </li>

    <li>
      • Flexible Payload Capacity: Capable of accommodating ton-scale cargo volumes 
      with precise weight & balance calculations controlled by experienced Air Engineers.
    </li>

    <li>
      • Operational Transparency: Displaying the real-time status of cargo, 
      providing complete peace of mind for retail and corporate business partners.
    </li>
  </ul>

</div>

{/* BOXES */}
<div className="flex justify-center gap-32 mt-10">

  <div className="bg-[#1D3A6E] text-white rounded-[26px] px-14 py-12 w-[460px] text-center shadow-xl">
    <h3 className="text-[30px] font-bold mb-6">
      Headquarters
    </h3>
    <p className="text-[17px] leading-[1.8]">
      Soekarno-Hatta International Airport <br/>
      Cargo Village (CGK) Air Logistics <br/>
      Building Block A2, Banten, Indonesia
    </p>
  </div>

  <div className="bg-[#1D3A6E] text-white rounded-[26px] px-14 py-12 w-[460px] text-center shadow-xl">
    <h3 className="text-[28px] font-bold mb-6">
      Customer & Ops Center
    </h3>
    <p className="text-[17px] leading-[1.8]">
      Email: operasional@terbanginaja.co.id <br/>
      Phone/WhatsApp: +62 811-0000-888 <br/>
      Website Portal: ops.terbanginaja.co.id
    </p>
  </div>

</div>

</section>

{/* PACKAGE SERVICES */}
<section className="w-full bg-[#F3F4F6] py-24 px-28">

  {/* TITLE */}
  <div className="mb-16">
    <h2 className="text-[56px] font-bold text-[#1D3A6E] leading-tight">
      PACKAGE <br /> SERVICES 
    </h2>
  </div>

  {/* CARDS */}
  <div className="flex justify-center gap-16">

    {/* CARD 1 */}
    <div className="bg-[#B7C6D9] rounded-2xl shadow-lg w-[360px] p-8 text-center">

      <div className="bg-white rounded-xl p-4 mb-6">
        <img src="indo1.jpeg" className="mx-auto h-[130px] object-contain"/>
      </div>

      <p className="font-semibold text-[20px] mb-4 text-black">
        Domestic Island Delivery
      </p>

      <p className="font-semibold text-[17px] tracking-wide mb-2 text-black">
        START FROM
      </p>

      <p className="font-semibold text-[17px] text-black">
        1 MILLION - 5 MILLION (IDR)
      </p>

    </div>

    {/* CARD 2 */}
    <div className="bg-[#B7C6D9] rounded-2xl shadow-lg w-[360px] p-8 text-center">

      <div className="bg-white rounded-xl p-4 mb-6">
        <img src="indo2.jpeg" className="mx-auto h-[130px] object-contain"/>
      </div>

      <p className="font-semibold text-[20px] mb-4 text-black">
        Delivery to other islands
      </p>

      <p className="font-semibold text-[17px] tracking-wide mb-2 text-black">
        START FROM
      </p>

      <p className="font-semibold text-[17px] text-black">
        8 MILLION - 10 MILLION (IDR)
      </p>

    </div>

    {/* CARD 3 */}
    <div className="bg-[#B7C6D9] rounded-2xl shadow-lg w-[360px] p-8 text-center">

      <div className="bg-white rounded-xl p-4 mb-6">
        <img src="global1.jpeg" className="mx-auto h-[130px] object-contain"/>
      </div>

      <p className="font-semibold text-[20px] mb-4 text-black">
        International Shipping
      </p>

      <p className="font-semibold text-[17px] tracking-wide mb-2 text-black">
        START FROM
      </p>

      <p className="font-semibold text-[17px] text-black">
        15 MILLION - 35 MILLION (IDR)
      </p>

    </div>

  </div>

</section>


{/* FOOTER */}
<footer className="w-full bg-[#E5E7EB] py-6 px-20 flex justify-between items-center text-[13px] text-gray-500">

  <p>@ 2026 TERBANGIN AJA CARGO JAKARTA</p>

  <div className="flex gap-10">
    <p>PRIVACY POLICY</p>
    <p>CONTACT US!</p>
  </div>

</footer>

    </main>
  );
}