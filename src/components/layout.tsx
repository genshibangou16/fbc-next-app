export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>
      {children}
    </>
  );
}
