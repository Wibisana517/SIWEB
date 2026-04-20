export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0A2A5E] min-h-screen">
      {children}
    </div>
  );
}