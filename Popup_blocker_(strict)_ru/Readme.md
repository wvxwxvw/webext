## Popup Blocker (strict)
[AMO](https://addons.mozilla.org/ru/firefox/addon/popup-blocker/)
  
По умолчанию строго блокирует все запросы всплывающих окон с любого веб-сайта и показывает уведомления, позволяющее принять, отклонить, открыть всплывающее окно в фоновой вкладке или перенаправить на открытие в текущей вкладке. Имеет разные белые и черные списки, а также ручной режим обмана слишком хитрых сайтов.  
  
Перевел и чуть облегчил. Расширение может оказаться полезным для тех кто не пользуется NoScript
  
Темный стиль для [этого профиля](https://github.com/wvxwxvw/LibPortablePlus/tree/main/profiles_91esr):
```
@-moz-document url-prefix(moz-extension://uuid/) {
.button {
	color: var(--clr) !important;
	background-color: var(--button) !important;
}
.button:hover {
	color: Highlight !important;
	background-color: #35373C !important;
}
/* настройки */
select, td input {
	appearance: none !important;
	border: 1px inset #4F525A !important;
	border-color: none !important;
	background-color: rgba(12,14,16,.6) !important;
	color: silver !important;
}
body p textarea {
	appearance: none !important;
	border: 1px inset #4F525A !important;
	background-color: rgba(12,14,16,.6) !important;
	color: #e3dede !important;
}
button {
	color: var(--clr) !important;
	text-shadow: none !important;
	background-image: linear-gradient(rgb(32,33,36), rgb(32,33,36) 38%, rgb(32,33,36)) !important;
}
button:hover {
	color: Highlight !important;
	background-image: linear-gradient(rgb(53,55,60), rgb(53,55,60) 38%, rgb(53,55,60)) !important;
}
button#save {
	color: white !important;
	background-image: linear-gradient(rgb(178,0,0), rgb(178,0,0) 38%, rgb(178,0,0)) !important;
}
button#save:hover {
	color: white !important;
	background-image: linear-gradient(rgb(0,136,98), rgb(0,136,98) 38%, rgb(0,136,98)) !important;
}
}
```
