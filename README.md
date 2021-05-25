# Моды веб-расширений Firefox  

Форки расширений. Без подписи.  
Описание изменений как правило есть в папках.  
  
## Как установить неподписанное расширение  
- Инструкция здесь - https://forum.mozilla-russia.org/viewtopic.php?id=70326
  
## Как самостоятельно подписать свое или измененное вами расширение на AMO (addons.mozilla.org)  

Откройте целевое расширение архиватором 7-zip  
- Удалите папку META-INF  
--  и, если есть, файл mozilla-recommendation.json  
- Откройте для редактирования файл manifest.json  
		Найдите строку "id":  "**********************"  
--			Если такой нет, то ничего более делать не нужно.  
---				_В этом случае ID будет добавлен автоматически при установке  
---				расширения. Недостатком такого подхода является новый ID при  
---				каждой новой установке расширения._  
- Измените ID расширения на свой уникальный вариант  
--			ID может быть или https://ru.wikipedia.org/wiki/GUID или строка текста, похожая на e-mail,  
--			например, `super_extension@ruboard.com`  
- Сохраните документ и закройте редактор,  
--			при этом должно появится предложение сохранить изменения в архиве.  
  
Теперь идем на AMO и авторизируемся под своим логином.  
- Наводим курсор на свой ник и в выпавшем меню выбираем "Представить новое дополнение"  
--		Ставим флаг "Самостоятельно" и жмем "Продолжить"  
- На следующей странице нажимаем "Выбрать файл...",  
--		в открывшемся окне находим и выбираем свое расширение, жмем "Открыть"  
- На следующей странице читаем что нам пишут в обведенном рамкой поле  
--		Там будут перечислены все ошибки и предупреждения  
---			Предупреждения как правило можно игнорировать  
---			Ошибки не позволят продолжить подписание  
- Жмем "Подписать дополнение"  
- Следующая страница мутная и просто не читайте ее, отмечайте "Нет" и жмите "Продолжить"  
- На следующей странице жмем кнопку "Перейти в мои представления"  
--		Появится страница со списком ваших расширений  
--		Жмем на нужное расширение  
--		Слева жмем "Посмотреть все"  
- Дожидаемся пока статус расширения не сменится на "Одобрено"  
- Под кнопкой "Загрузить новую версию" жмем на "Версия х.х.х"  
- На открывшейся странице, в первой строке секции "Файлы",  
--		можете забрать свой подписанный шедевр.  
