export default function PrivacyPage() {
  return (
    <main className="w-full">

      {/* HERO / BACKGROUND */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/plane.jpeg"
            alt="plane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0A2A5E]/90"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-24 py-16 text-white max-w-[1500px]">

          {/* TITLE */}
          <h1 className="text-[50px] font-bold text-center mb-10 tracking-wide">
            PRIVACY POLICY
          </h1>

          {/* TEXT */}
<div className="text-[20px] leading-[1.9] space-y-4">

  <p className="font-bold">PRIVACY POLICY</p>

  <p>
    PT Ekspedisi TerbanginajaLast Updated: April 12, 2026
  </p>

  <p>
    PT Ekspedisi Terbanginaja ("We," "Our," or "The Company") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our website, operational portal, and air cargo services.
  </p>

  <p className="font-semibold">1. Information We Collect</p>

  <p>
    To provide safe and efficient logistics services, we collect several types of information:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Account & Contact Information: Full name, email address, phone number, and password when you register or log in to our portal.</li>
    <li>Shipment Information (Manifest): Details of the Shipper and Consignee, including names, full addresses, contact numbers, and corporate identities.</li>
    <li>Cargo Details: Item descriptions, weight, dimensions, and cargo categories (including General Cargo, Perishable Goods, or Dangerous Goods).</li>
    <li>Payment Data: Transaction information for billing purposes and administration of shipping services.</li>
    <li>Technical & Tracking Data: IP addresses, device types, access times, and activity logs when you use the "Track Your Cargo" feature.</li>
  </ul>

  <p className="font-semibold">2. How We Use Your Information</p>

  <p>
    We use the collected information for operational and legal purposes, including:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Service Execution: Processing cargo shipment orders for domestic (inter-island and intra-island) and international routes.</li>
    <li>Operational Management: Preparing flight manifests, calculating aircraft Weight & Balance, and providing special handling instructions for flight crews and ground operators.</li>
    <li>Tracking & Communication: Providing real-time cargo status updates to customers and responding to customer service inquiries.</li>
    <li>Security & Legal Compliance: Ensuring aviation safety, preventing fraud, and complying with civil aviation regulations and customs requirements.</li>
  </ul>

  <p className="font-semibold">3. Sharing Information with Third Parties</p>

  <p>
    We do not sell or rent your personal data. We only share information with authorized third parties relevant to cargo operations:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Airport Authorities & Airlines: Manifest data is shared with airport authorities and Air Engineers for flight permits and safety purposes.</li>
    <li>Legal & Customs Authorities: For international shipments, cargo information and shipper/consignee identities must be reported to Customs in the origin and destination countries in accordance with international law.</li>
    <li>Ground Logistics Partners: Third parties that assist in the loading/unloading process or last-mile delivery.</li>
  </ul>

  <p className="font-semibold">4. Data Security</p>

  <p>
    We implement strict technical and organizational security standards to protect your digital manifest data and personal information from unauthorized access, use, or disclosure. Our system utilizes data encryption and role-based access control (e.g., only authorized Operators and Supervisors can modify cargo status).
  </p>

  <p className="font-semibold">5. Data Retention</p>

  <p>
    We will store your personal data and shipment history for as long as necessary to fulfill our operational service goals, or as required by applicable tax laws and civil aviation regulations.
  </p>

  <p className="font-semibold">6. User Rights</p>

  <p>You have the right to:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Access and review the profile information we store about you.</li>
    <li>Request corrections or updates to inaccurate contact data.</li>
    <li>Contact our customer service regarding the management of your cargo data.</li>
  </ul>

  <p className="font-semibold">7. Changes to the Privacy Policy</p>

  <p>
    We may update this Privacy Policy from time to time to comply with legal regulations or improvements to our operational systems. Changes will be announced through the Ekspedisi Terbanginaja web portal.
  </p>

</div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#E5E7EB] py-6 px-20 text-[16px] text-gray-500">
        <p>@ 2026 TERBANGIN AJA CARGO JAKARTA</p>
      </footer>

    </main>
  );
}