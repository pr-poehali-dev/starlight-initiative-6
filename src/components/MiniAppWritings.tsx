export function MiniAppWritings() {
  const features = [
    {
      title: "Кроссплатформенная синхронизация",
      badge: "Windows + Android",
      description:
        "Данные автоматически синхронизируются между вашим ПК и смартфоном. Начните работу на компьютере — продолжите на телефоне.",
    },
    {
      title: "Офлайн-режим",
      badge: "Без интернета",
      description: "Все основные функции работают без подключения к сети. Интернет нужен только для синхронизации.",
    },
    {
      title: "Высокая производительность",
      badge: "Быстро и стабильно",
      description:
        "Оптимизировано для слабых устройств — работает быстро даже на бюджетных Android-смартфонах и старых ПК.",
    },
    {
      title: "Безопасность данных",
      badge: "Шифрование",
      description: "Все данные шифруются по стандарту AES-256. Ваша информация защищена на устройстве и при передаче.",
    },
    {
      title: "Гибкая настройка",
      badge: "Персонализация",
      description: "Широкие настройки интерфейса, уведомлений и поведения. Адаптируйте программу под свои задачи.",
    },
    {
      title: "Регулярные обновления",
      badge: "Поддержка",
      description: "Новые версии выходят каждый месяц. Исправления ошибок, улучшения и новые функции.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Возможности</h2>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{feature.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black whitespace-nowrap ml-2">
                {feature.badge}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
