export function MiniAppArt() {
  const screenshots = [
    { title: "Главный экран", platform: "Windows", year: "v2.5" },
    { title: "Панель управления", platform: "Windows", year: "v2.5" },
    { title: "Настройки", platform: "Windows", year: "v2.5" },
    { title: "Главный экран", platform: "Android", year: "v2.5" },
    { title: "Мобильное меню", platform: "Android", year: "v2.5" },
    { title: "Синхронизация", platform: "Android", year: "v2.5" },
  ]

  const platformColors: Record<string, string> = {
    Windows: "from-[#0078D4] to-[#00BCF2]",
    Android: "from-[#3DDC84] to-[#00C853]",
  }

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Скриншоты</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((screen, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className={`aspect-video bg-gradient-to-br ${platformColors[screen.platform]} border-b-[3px] border-black flex flex-col items-center justify-center gap-2`}>
              <span className="text-white font-black text-lg">{screen.platform}</span>
              <span className="text-white/80 text-xs font-bold border border-white/40 px-2 py-0.5">{screen.title}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{screen.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{screen.platform}</p>
              <p className="text-sm font-bold">{screen.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-gray-600 text-center font-medium">
          Хотите увидеть живую демонстрацию? Свяжитесь с нами для бесплатного онлайн-показа.
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
            Запросить демо
          </button>
        </div>
      </div>
    </div>
  )
}
