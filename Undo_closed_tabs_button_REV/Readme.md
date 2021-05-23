# Undo Closed Tabs Button
  
Простое меню со списком закрытых вкладок и парой сопутствующих функций - очистить, открыть все, восстановить окно. В настройках можно назначить количество отображаемых закрытых вкладок.  
  
Отличия от оригинала:  
* Два варианта - темное и светлое меню  
* Переведено на Русский  
* Изменен CSS (добавлена подсветка при наведении, изменен (невменяемый) размер элементов и т.п.)  
* Изменен ID (оригинал удалить перед установкой мода, иначе будет две кнопки)  
* Удален адрес обновлений  
  
Если хотите что бы ПКМ по кнопке расширения открывал последнюю закрытую вкладку, то добавьте в custom_script.js UCF секцию:  
```csharp
// Действие ПКМ для Undo_closed_tabs_button_REV
((btnID, btnTitle) => ({
    init() {
        ChromeUtils.defineModuleGetter(this, "ExtensionParent", "resource://gre/modules/ExtensionParent.jsm");
        XPCOMUtils.defineLazyGetter(this, "browserActionFor", () => {
            return this.ExtensionParent.apiManager.global.browserActionFor;
        });
        var getW = CustomizableUI.getWidget(btnID);
        if (getW?.instances?.length)
            for(let {node} of getW.instances)
                this.addNodeListener(node);
        CustomizableUI.addListener(this);
    },
    onWidgetAfterDOMChange(node) {
        if (node.id == btnID && !node._ucf_change)
            this.addNodeListener(node);
    },
    addNodeListener(node) {
        node._ucf_change = true;
        try {
            this.browserActionFor(this.ExtensionParent.WebExtensionPolicy.getByID(node.dataset.extensionid).extension)
            .action.defaults.title = btnTitle;
        } catch (e) {}
        node.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            e.stopPropagation();
        }, true);
        node.addEventListener("click", function(e) {
            if (e.button == 2) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.view.undoCloseTab();
            }
        });
    },
}).init())(
    "undoclosedtabsrev_button-browser-action",
    "ЛКМ: Меню закрытых вкладок\nПКМ: Восстановить последнюю",
);
```
