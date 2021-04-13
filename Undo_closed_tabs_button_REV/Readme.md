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
try { CustomizableUI.addListener({
    onWidgetBeforeDOMChange(node) {
        if (node.id == "undoclosedtabsrev_button-browser-action" && !node._ucf_change) {
            node._ucf_change = true;
            node.setAttribute("context", "false");
            node.addEventListener("click", function(e) {
                if (e.button == 2) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    e.view.undoCloseTab();
                }
            });
        }
    },
}); } catch(e) {}
```
