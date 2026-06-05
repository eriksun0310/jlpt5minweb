import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          壽司日檢 - 5 分鐘 N5 N4 N3 N2 N1 單字
        </h1>
        <div className="mt-6">
          <Link
            href="/privacy"
            className="text-blue-600 underline hover:text-blue-800"
          >
            隱私權政策
          </Link>
        </div>
      </div>
    </main>
  );
}
