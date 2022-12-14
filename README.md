# PetManager - менеджер домашних питомцев

Приложение предназначено для владельцев домашних питомцев, приютов и грумеров. Оно поможет полностью контролировать уход и медицинское состояние любимцев.

Приложение позволяет хранить всю информацию из ветеринарного паспорта. Благодаря ему всегда можно посмотреть номер микрочипа или клейма своего любимца. Также пользователю больше не понадобится считать сколько же пушистику лет, ведь PetManager сделает это за него.

PetManager предоставляет пользователю калькулятор суточной нормы сухого корма, благодаря которому он сможет рассчитать количество корма в граммах и столовых ложках. Все расчеты производятся по методике FEDIAF и основаны на исследованиях Федерации производителей кормов для домашних животных.

Удобная функция напоминания о ветеринарных процедурах поможет всегда контролировать здоровье любимцев. Пользователь может сам задать дату следующей процедуры или же ввести дату последней процедуры и приложение рассчитает, когда необходимо в следующий раз посетить ветеринарный кабинет.

**SPA создано с помощью [Create React App](https://github.com/facebook/create-react-app).**

## Начало работы

Для начала работы с проектом надо установить зависимость введя в консоль `npm install` или короткую версию `npm i`.

После в каталоге проекта необходимо запустить:

### `npm start`

Запускает приложение в режиме разработки (живая dev-сборка). \
Откройте [http://localhost:3000/pet-manager](http://localhost:3000/pet-manager), чтобы просмотреть его в браузере. Страница перезагрузится, если вы внесете правки.

### `npm run test`

Запускает тесты в интерактивном режиме.

### `npm run build`

Собирает проeкт в папку `build`.

### `npm run deploy`

Используется для публикации проекта в ветке `gh-pages` на GitHub.

## Выполенные критерии

### Динамичность веб-страниц

Внешний вид изменяется при изменении роутингов:

1. [https://ekaterinakunskaya.github.io/pet-manager/#/](https://ekaterinakunskaya.github.io/pet-manager/) - Главная страница.\
   При удалении карточки питомца изменяется таблица со списком всех карточек. Кнопка "Добавить любимца" анимирована.

2. [https://ekaterinakunskaya.github.io/pet-manager/#/add-pet](https://ekaterinakunskaya.github.io/pet-manager/#/add-pet) - Страница добавления новой карточки питомца.\
Реализована валидация полей ввода данных. При введении невалидной информации о питомце для пользователя отображается статус ошибки в виде красного крестика, границы поля окрашиваются в красный цвет и появляется подсказка. Когда данные введены верно, появляется зеленая галочка.
Также при нажатии на кнопку "Добавить карточку", некорректно заполненные поля формы будут подствечиваться.
При нажатии на кнопку "На главную" появляется информация о потере данных.

3. [https://ekaterinakunskaya.github.io/pet-manager/#/pet-card/000ABC](https://ekaterinakunskaya.github.io/pet-manager/#/pet-card/000ABC) - Карточка питомца.\
   Кнопки "Главная", "Редактировать" и "Удалить" анимированы. При нажатии на кнопку "Удалить" появляется диалоговое окно с подтверждением действия.
   Карточка представляет собой табы с тремя вкладками: "Общая информация", "Расчет корма", "Ветеринарная карта". \
   + "Общая информация" - отображает всю введенную ранее информацию, а также аватар питомца. При отсутствии аватара подставляется картинка. Тут же реализуется подсчет возраста питомца. \
   + "Расчет корма" - при указании калорийности корма, активности и веса животного и нажатии на кнопку "Рассчитать", обновляется информация о необходимой суточной норме корма. При нажатии на кнопку "Очистить" поля ввода и отображения количества корма очищаются. \
   + "Ветеринарная карта" - можно добавлять ветеринарные процедуры из предложенного списка двумя способами. При нажатии на кнопку-текст "встроенным подсчетом даты" пользователь выбирает последнюю дату проведения процедуры, и алгоритм приложения сам выставит, когда необходимо в следующий раз повторить процедуру. При нажатии на кнопку-текст "установить дату вручную" пользователь сам выбирает дату процедуры. Кнопки при этом являются взаимозапрещающими. При нажатии на одну форма ввода второй запрещается. Перечень процедур реализован в виде таблицы. При удалении процедуры таблица изменяется, подстраиваясь под действие.

4. [https://ekaterinakunskaya.github.io/pet-manager/#/pet-card/000ABC/edit](https://ekaterinakunskaya.github.io/pet-manager/#/pet-card/000ABC/edit)  - Редактирование карточки питомца.\
   Реализован такой же функционал, как и на странице добавления новой карточки.

Таким образом, веб-страницы подстраиваются под действия пользователя, под ситуацию - изменяется вёрстка элементов, запрещаются, подсвечиваются интерфейсные элементы, всплывают контекстные подсказки.

### Производительность отрисовки

1. Для повышения производительности активно использовался хук **React.memo**.
2. На [главной странице](https://ekaterinakunskaya.github.io/pet-manager/) и во вкладке ["Ветеринарные процедуры"](https://ekaterinakunskaya.github.io/pet-manager/#/pet-card/000ABC) можно отобразить до 5, 10, 20, ** 50 и 100 одинаковых элементов**. Для этого необходимо выбрать подходящее количество в выпадающем списке.
4. Есть **css анимация** стрелки на главной странице, а также анимированные кнопки.

### Навигация в приложении

1. **Кнопки браузера "вперёд", "назад", "освежить" работают корректно**. Отображение сильно зависит от изменений URL.
2. Реализован **постраничный просмотр** каждой карточки питомца.
### Кроссбраузерность

1. Приложение **работоспособно на современных десктопных браузерах** - на последних версиях Chrome, Firefox, Edge, Safari (*возможности Create React App позволяют добавлять в CSS автоматически префиксы, поэтому нет необходимости в использовании -webkit-других префиксов*). \
При оформлении верстки применялись принципы отзывчивого дизайна: применение гибкого макета на основе сетки (flex), использование гибких изображений, относительные единицы измерения.
2. **Реализован адаптивный дизайн** для max-width: 320px. При просмотре с мобильного устройства изменяется дизайн кнопок в приложении, а также состав колонок таблиц, пропадают некоторые кнопки, изменяется порядок отображения элементов.
### Коммуникации

Для хранения всех данных используется <a href='https://firebase.google.com/'>Firebase</a>. **Пользователи могут сохранять и просматривать данные**. Эта база данных работает в режиме реального времени и при любых изменениях пользователь сразу узнает об этом. Это позволяет **обмениваться данными с другими пользователями**. \
Также использован инструмент <a href='https://ant.design/'>Ant Design</a> для **отображения процесса загрузки объёмных данных**.

### Модель данных

1. Данные всех созданных карточек питомцев хранятся в [Firebase](https://firebase.google.com/).
2. Для работы с данными и объёмной логикой использовалась [MobX](https://mobx.js.org/README.html).

### Сборка проекта

1. Проект собирается полностью автоматически (**"живая" dev-сборка**). Реализуется при помощи скрипта `npm start`.
2. **Полная работоспособность prod-сборки проекта**. Работающий проект размещен по ссылке [https://ekaterinakunskaya.github.io/pet-manager/#/](https://ekaterinakunskaya.github.io/pet-manager/#/). При необходимости можно собрать prod-сборку для запуска на своём сервере при помощи команды `npm run build`.

### Тесты

Для запуска тестов надо ввести в консоль скрипт `npm run test`.
Были написаны следующие **тесты**:
   - [СountFeed.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/components/helpers/%D0%A1ountFeed.test.js)
   - [CountVetDate.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/components/helpers/CountVetDate.test.js)
   - [ShowRecomendation.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/components/helpers/ShowRecomendation.test.js)
   - [App.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/App.test.js)
   - [PetInfo.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/components/card/PetInfo.test.js)
   - [PetFeedCalc.test.js](https://github.com/EkaterinaKunskaya/pet-manager/blob/main/src/components/card/PetFeedCalc.test.js)