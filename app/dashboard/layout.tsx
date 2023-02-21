import Nav from '../components/Nav';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Nav />
      <div className="border-2 p-2 rounded border-rose-600  w-40 mx-auto">
        {children}
      </div>
    </section>
  );
}
