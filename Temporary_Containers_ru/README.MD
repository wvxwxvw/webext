# Temporary Containers
  
[GitHub](https://github.com/stoically/temporary-containers) | [AMO](https://addons.mozilla.org/ru/firefox/addon/temporary-containers/)
   
Легко открываемые одноразовые контейнеры, которые изолируют собственные данные и удаляются после использования:
* автоматический режим,
* на основе сопоставления домена/адреса,
* для указанных сайтов,
* через контекстное меню,
* по настроенным кликам мыши на ссылках
* или просто с помощью значка на панели инструментов или в строке адреса.  
* Также позволяет добавить пункт в меню закладок.  
   
Здесь почти полный перевод, пару мелочей просто нельзя переводить.

### Темный тиль для userContent.css
На базе устаревшего или изначально неполного стиля от [Izheil](https://github.com/Izheil/Quantum-Nox-Firefox-Dark-Full-Theme)
```
/*------ Temporary Containers --------*/
@-moz-document url-prefix(moz-extension://вписать uuid/) {

html, body, .dropdown.selection, .menu .item, .ui.menu {
    background: #222 !important
  }

.ui.small.message.visible, [data-tooltip]:hover::after, [data-tooltip]:hover::before {
    background-color: #222 !important; 
    border: 1px solid #888 !important;
    color: #ccc !important}
  }

input[type="text"], #scriptCode {
  background-color: #444 !important; 
  border: 1px solid #666 !important;
  color: #ddd !important}

input[type="text"]:focus, #scriptCode:focus {border: 1px solid #0a84ff !important}

.ui.segment, .pusher  {
  background: #303030 !important;
  color: #ccc !important}

.ui.segment.active, .item.active {background: #353535 !important}
.item, label, h4, h3 {color: #ccc !important}
.item.active, .dropdown.selection, .text, .label {color: #ddd !important}

i.icon {
    color: #ccc !important
}

.item:not(.active):hover{background: #282828 !important}

.ui.selection.dropdown .menu > .item, .ui.tabular.menu, .ui.menu,
.item.active, .ui.popup, .ui.segment {border-color: #666 !important}

.ui.negative.message {
  background-color: #2A1407 !important;
  color: #f66 !important;
  box-shadow: 0 0 0 1px #522 inset,0 0 0 0 transparent !important}

.ui.notice.message, .ui.tiny.button {
  background-color: #555 !important;
  color: #fff !important;
  border-color: #ccc !important}

.ui.tiny.button:hover {
  background-color: #666 !important;
  color: #fff !important;
  }

.ui.notice.message a:link, .ui.notice.message a {color: #09f !important}
.ui.notice.message a:visited {color: #0070aa !important}
.ui.notice.message a:hover {color: #0ff !important}
.ui.notice.message a:active {color: #0050aa !important}

#tmpButton svg {filter: invert(90%) !important}

label::before, .ui.popup {filter: invert(75%)}

.ui.checkbox input:checked ~ label::after {
    color: #09f !important;
  }

a.ui.label.transition.visible {
    background-color: #111 !important;
}

}
```
