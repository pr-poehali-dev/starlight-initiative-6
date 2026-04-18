export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">О продукте</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Профессиональное ПО для Windows и Android</h3>
          <p className="text-lg leading-relaxed mb-4">
            Мы создаём надёжное и удобное программное обеспечение, которое работает как на вашем компьютере под Windows,
            так и на смартфоне Android. Один продукт — две платформы.
          </p>
          <p className="text-lg leading-relaxed">
            Наше ПО разработано с фокусом на производительность, безопасность и простоту использования.
            Подходит как для частных пользователей, так и для бизнеса.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Поддерживаемые платформы</h3>
          <div className="flex flex-wrap gap-2">
            {["Windows 10", "Windows 11", "Android 8+", "Android 12+", "64-bit", "ARM64", "Русский язык", "Тёмная тема"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Почему выбирают нас</h3>
          <ul className="space-y-3">
            {[
              "Синхронизация данных между Windows и Android",
              "Регулярные обновления и поддержка",
              "Работа без интернета в офлайн-режиме",
              "Простая установка — готово за 2 минуты",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="bg-[#FF2E63] text-white border-[2px] border-black w-6 h-6 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
