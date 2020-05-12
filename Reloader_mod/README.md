# Reloader


Удаленное с AMO расширение, видимо в связи убийством традиционного nav-bar. Добавляет в nav-bar совмещенную (перезагрузка/остановка) кнопку перезагрузки текущей страницы с меню ПКМ - перезагрузить / перезагрузить минуя кэш / перезагрузить удалив кэш. Работать будет только в версиях Firefox где nav-bar существует, т.е., предположительно, до 75 включительно.

* Firefox locale strings:
    + page_action_idle_title
    + page_action_busy_title

* Chromium locale strings:
    + page_action_context_normal_reload_title
    + page_action_context_hard_reload_title
    + page_action_context_empty_cache_and_hard_reload_title


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
