export const metadata = {
  title: "隱私權政策 - 壽司日檢",
  description: "壽司日檢 - 5 分鐘 N5 N4 N3 N2 N1 單字 隱私權政策",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900">隱私權政策</h1>
        <p className="mt-2 text-sm text-gray-500">最後更新日期：2025 年 6 月 5 日</p>

        <p className="mt-8 leading-relaxed">
          感謝您使用<strong>壽司日檢 - 5 分鐘 N5 N4 N3 N2 N1 單字</strong>（以下簡稱「本
          App」）。本隱私權政策說明我們如何處理您的資料。本 App 由獨立開發者開發與維護。
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">1. 資料蒐集</h2>
          <p className="mt-3 leading-relaxed">
            本 App
            不蒐集任何個人資料。所有學習紀錄與收藏單字均儲存於使用者裝置本機（AsyncStorage），不會上傳至任何伺服器。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">2. 應用程式內購買</h2>
          <p className="mt-3 leading-relaxed">
            本 App
            提供一次性買斷的應用程式內購買（解鎖無限使用次數）。付款由 Google Play
            處理，開發者不會取得您的付款資訊。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">3. 第三方服務</h2>
          <p className="mt-3 leading-relaxed">
            本 App 不使用任何第三方分析、廣告或追蹤服務。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">4. 兒童隱私</h2>
          <p className="mt-3 leading-relaxed">
            本 App 不針對 13 歲以下兒童蒐集資料。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">5. 政策變更</h2>
          <p className="mt-3 leading-relaxed">
            如本隱私權政策有任何變更，我們將於本頁面更新內容。建議您定期查閱本頁面以了解最新資訊。
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">6. 聯絡方式</h2>
          <p className="mt-3 leading-relaxed">
            如您對本隱私權政策有任何疑問，請透過以下電子郵件與我們聯繫：
          </p>
          <p className="mt-2">
            <a
              href="mailto:connect.ptalk@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              connect.ptalk@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <a href="/" className="text-blue-600 underline hover:text-blue-800">
            返回首頁
          </a>
        </footer>
      </div>
    </main>
  );
}
