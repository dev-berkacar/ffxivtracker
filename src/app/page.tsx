import Dropdown from "@/components/Dropdown";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Next.js!</h1>
        <p className="mt-3 text-2xl">
          Get started by editing <code>app/page.tsx</code>
        </p>
        <Dropdown />
      </main>
    </div>
  );
}
