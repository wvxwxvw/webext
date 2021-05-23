# Reloader

Удаленное с AMO расширение. Добавляет в nav-bar совмещенную (перезагрузка/остановка) кнопку перезагрузки текущей страницы с меню ПКМ - перезагрузить / перезагрузить минуя кэш / перезагрузить удалив кэш.  
  
Цвет значка настраивается через userChrome.css  
````css
/* Example colors, you can use whatever you want */
#reloader_matt_tf-page-action,
#pageAction-urlbar-reloader_matt_tf {
    fill: red;
    fill-opacity: 0.75;
}
/* Page action ID */
#reloader_matt_tf-browser-action {
    /* ... */
}
````

## Вместо этого расширения лучше использовать скрипт UCF для ff75+

В custom_script_win.js:
```
        // Функция Ctrl+Shift+R по ПКМ на стандартной кнопке обновления страницы
        try {
          (() => {
            var node = CustomizableUI.getWidget("stop-reload-button").forWindow(window).node.querySelector("#reload-button"),
            tooltipid = "reload-button-shortcut-tooltip", tooltiporig = node.tooltip;
            if (!document.querySelector(`#${tooltipid}`)) {
              document.querySelector("#dynamic-shortcut-tooltip").after(MozXULElement.parseXULToFragment(`
                <tooltip id="${tooltipid}">
                  <description class="tooltip-label">ЛКМ  Обновить страницу (Ctrl+R)</description>
                  <description class="tooltip-label">СКМ  Дублировать вкладку (Ctrl+ЛКМ)</description>
                  <description class="tooltip-label">ПКМ  Обновить минуя кэш (Ctrl+Shift+R)</description>
                </tooltip>
              `));
            }
            node.tooltip = tooltipid;
            node.setAttribute("context", "false");
            var click = e => {
              if (e.button != 2) return;
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              BrowserReloadSkipCache();
            };
            node.addEventListener("click", click);
            this.browserreloadskipcache = {
              destructor() {
                node.removeEventListener("click", click);
                node.tooltip = tooltiporig;
                node.removeAttribute("context");
              }
            };
            this.unloadlisteners.push("browserreloadskipcache");
          })();
        } catch(e) {}
```
