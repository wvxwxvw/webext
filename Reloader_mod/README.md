# Reloader


Удаленное с AMO расширение, видимо в связи убийством традиционного nav-bar. Добавляет в nav-bar совмещенную (перезагрузка/остановка) кнопку перезагрузки текущей страницы с меню ПКМ - перезагрузить / перезагрузить минуя кэш / перезагрузить удалив кэш. Работать будет только в версиях Firefox где nav-bar существует, т.е., предположительно, до 75 включительно.

## Customizing

The icon color is customizable via userChrome.css. The icons use `context-fill` and `context-fill-opacity` to inherit colors from the stylesheet. By default, this functionality isn't enabled for anything but `chrome://` and `resource://` URLs. For it to work, you need to flip the `svg.context-properties.content.enabled` pref.

Then, in your stylesheet:

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

## Скрипт UCF для ff75+

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
