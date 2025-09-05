// Конфигурация cookie баннера на русском языке v1.2
// Устанавливаем конфигурацию ДО автоматической инициализации
window.silktideCookieBannerManager = window.silktideCookieBannerManager || {};

// Настройка конфигурации до инициализации
(function() {
  function setRussianConfig() {
    if (window.silktideCookieBannerManager && window.silktideCookieBannerManager.updateCookieBannerConfig) {
      window.silktideCookieBannerManager.updateCookieBannerConfig({
        background: {
          showBackground: true
        },
        cookieIcon: {
          position: "bottomLeft"
        },
        cookieTypes: [
          {
            id: "necessary",
            name: "Необходимые",
            description: "Эти файлы cookie необходимы для правильного функционирования веб-сайта и не могут быть отключены. Они помогают с такими задачами, как вход в систему и установка настроек конфиденциальности.",
            canToggle: false,
            defaultState: "accepted"
          },
          {
            id: "analytics", 
            name: "Аналитические",
            description: "Эти файлы cookie помогают нам улучшить сайт, отслеживая, какие страницы наиболее популярны и как посетители перемещаются по сайту.",
            canToggle: true,
            defaultState: "rejected"
          },
          {
            id: "marketing",
            name: "Рекламные", 
            description: "Эти файлы cookie предоставляют дополнительные функции и персонализацию для улучшения вашего опыта. Они могут быть установлены нами или партнерами, чьи услуги мы используем.",
            canToggle: true,
            defaultState: "rejected"
          }
        ],
        text: {
          banner: {
            title: "Мы используем файлы cookie",
            description: "Этот веб-сайт использует файлы cookie для улучшения вашего опыта. Мы будем считать, что вы согласны с этим, но вы можете отказаться, если хотите.",
            acceptAllButtonText: "Принять все",
            acceptAllButtonAccessibleLabel: "Принять все файлы cookie",
            rejectNonEssentialButtonText: "Отклонить",
            rejectNonEssentialButtonAccessibleLabel: "Отклонить",
            preferencesButtonText: "Настройки",
            preferencesButtonAccessibleLabel: "Открыть настройки"
          },
          preferences: {
            title: "Настройте предпочтения cookie",
            description: "<p>Мы уважаем ваше право на конфиденциальность. Вы можете выбрать, не разрешать некоторые типы cookie. Ваши предпочтения cookie будут применяться по всему нашему веб-сайту.</p>",
            creditLinkText: "Ознакомиться с ПК",
            creditLinkAccessibleLabel: "Ознакомиться с ПК",
            creditLinkUrl: "/privacy-policy"
          }
        }
      });
    }
  }

  // Пытаемся установить конфигурацию сразу
  setRussianConfig();
  
  // Если не получилось, ждем загрузки скрипта
  if (!window.silktideCookieBannerManager.updateCookieBannerConfig) {
    const checkInterval = setInterval(() => {
      if (window.silktideCookieBannerManager && window.silktideCookieBannerManager.updateCookieBannerConfig) {
        setRussianConfig();
        clearInterval(checkInterval);
      }
    }, 50);
    
    // Прекращаем попытки через 5 секунд
    setTimeout(() => clearInterval(checkInterval), 5000);
  }
})();