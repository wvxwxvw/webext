# Spoof Timezone
версия от <a href="https://github.com/VitaliyVstyle/VitaliyVstyle.github.io/tree/master/files/temp" target="_blank">VitaliyV</a>

Изменяет часовой пояс браузера на случайное или определяемое пользователем значение, например по геолокации текущего сетевого соединения (по IP браузера).

Способен обмануть некоторые методы определения локального времени, но как правило со своей задачей справляется, всякие тесты типа 2ip проходит. Подробнее о методах и их тесты <a href="https://webbrowsertools.com/timezone/" target="_blank">здесь</a> (первое дроп-меню).

Кривой (для Firefox) исходник  
<a href="https://addons.mozilla.org/ru/firefox/addon/spoof-timezone/" target="_blank">https://addons.mozilla.org/ru/firefox/addon/spoof-timezone/</a>

* При запуске браузера должен менять локальное время браузера случайно или в соответствии с текущим IP (если это задано в настройках)  
* Переход на зимнее/летнее время рассчитывается автоматически (в отличии от <a href="https://addons.mozilla.org/ru/firefox/addon/change-timezone-time-shift/" target="_blank">этого</a>)

Отличия версии VitaliyV от исходника
* Оптимизированы код и структура расширения
* Обновлены компоненты (<a href="https://github.com/moment/moment" target="_blank">сторонний скрипт</a>)
* Добавлен функциональный клик по кнопке панели инструментов (меняет локальное время браузера по IP)
* Добавлено функциональное меню ПКМ кнопки панели инструментов
* Работает смена локального времени по IP при запуске браузера (в оригинале нет)
