// Конфигурация cookie баннера на русском языке
document.addEventListener('DOMContentLoaded', function() {
  if (typeof window.silktideCookieBannerManager !== 'undefined') {
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
          description: "<p>Эти файлы cookie необходимы для правильного функционирования веб-сайта и не могут быть отключены. Они помогают с такими задачами, как вход в систему и установка настроек конфиденциальности.</p>",
          required: true,
          onAccept: function() {
            console.log('Add logic for the required Necessary here');
          }
        },
        {
          id: "analytical",
          name: "Аналитические",
          description: "<p>Эти файлы cookie помогают нам улучшить сайт, отслеживая, какие страницы наиболее популярны и как посетители перемещаются по сайту.</p>",
          required: false,
          onAccept: function() {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            });
            dataLayer.push({
              'event': 'consent_accepted_analytical',
            });
          },
          onReject: function() {
            gtag('consent', 'update', {
              analytics_storage: 'denied',
            });
          }
        },
        {
          id: "advertising",
          name: "Рекламные",
          description: "<p>Эти файлы cookie предоставляют дополнительные функции и персонализацию для улучшения вашего опыта. Они могут быть установлены нами или партнерами, чьи услуги мы используем.</p>",
          required: false,
          onAccept: function() {
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            });
            dataLayer.push({
              'event': 'consent_accepted_advertising',
            });
          },
          onReject: function() {
            gtag('consent', 'update', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            });
          }
        }
      ],
      text: {
        banner: {
          description: "<p>Мы используем cookie на нашем сайте для улучшения пользовательского опыта, предоставления персонализированного контента и анализа трафика. <a href=\"/privacy-policy\" target=\"_blank\">Политика конфиденциальности.</a></p>",
          acceptAllButtonText: "Принять все",
          acceptAllButtonAccessibleLabel: "Принять все файлы cookie",
          rejectNonEssentialButtonText: "Отклонить необязательные",
          rejectNonEssentialButtonAccessibleLabel: "Отклонить необязательные",
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
});