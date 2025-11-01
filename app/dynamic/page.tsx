import { Suspense } from "react";
import { headers } from "next/headers";
import { Navigation } from "../components/Navigation";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DelayedContent() {
  const headersList = await headers();
  const randomString = headersList.get('x-forwarded-for');
  await sleep(3000);
  return (
    <p className="max-w-lg text-lg leading-8 text-zinc-400">
      This content was delayed by 3 seconds.
      X-Forwarded-For: {randomString}
    </p>
  );
}

export default function DynamicPage() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-black sm:items-start">
        <Navigation />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Dynamic Page
          </h1>
          <Suspense fallback={<div className="text-lg text-zinc-400">Loading...</div>}>
            <DelayedContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

