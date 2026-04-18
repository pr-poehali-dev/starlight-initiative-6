export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Загрузки</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Windows</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Актуальная версия</h4>
              <p className="text-gray-600 font-medium">Версия 2.5.0 — Апрель 2025</p>
              <p className="mt-2">Поддержка Windows 10 и Windows 11 (64-bit). Требуется не менее 4 ГБ ОЗУ.</p>
              <button className="mt-3 bg-[#FF2E63] text-white px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-sm">
                Скачать .exe (64-bit)
              </button>
            </div>

            <div className="border-l-[4px] border-gray-300 pl-4">
              <h4 className="text-xl font-bold text-gray-600">Предыдущая версия</h4>
              <p className="text-gray-500 font-medium">Версия 2.4.1 — Февраль 2025</p>
              <p className="mt-2 text-gray-600">Для систем с ограниченными ресурсами.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Android</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Google Play</h4>
              <p className="text-sm text-gray-600 mb-2">Android 8.0 и выше</p>
              <p className="mb-3">Устанавливайте напрямую из Google Play — автоматические обновления включены.</p>
              <button className="bg-[#FF2E63] text-white px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-sm">
                Открыть в Google Play
              </button>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">APK-файл</h4>
              <p className="text-sm text-gray-600 mb-2">Версия 2.5.0 — для ручной установки</p>
              <p className="mb-3">Для устройств без Google Play или корпоративного использования.</p>
              <button className="bg-white text-black px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-sm">
                Скачать APK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
