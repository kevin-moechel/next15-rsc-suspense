import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-black sm:items-start">
        <Navigation />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Static Page
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            This is the static page.
          </p>
        </div>
      </main>
    </div>
  );
}
