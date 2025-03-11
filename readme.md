# РЕЗУЛЬТАТ выполнения тестового задания

## Уточнения к результатам выполнения:

- Т.к. Wildberries API KEY не был передан, метод для получения данных с WB отдает моковые данные.
- Был добавлен Web Server для получения/редактирования списка таблиц и настройки работы приложения.
- Т.к. я не понял по какому коэффициенту делать сортировку (Данные отсортировать по возрастанию коэффициента.),
  был добавлен endpoint для выбора стоблца, по которому будет производиться сортировка.
- Возможно неверно понял (решил сделать так чтобы показать мои способности), но логика записи в таблицы такая,
  что данные для записи не дублируются в таблицах, а равномерно распределяются между ними

## Работающее приложение

Приложение запущенно на облачном сервере, эндпоинты для управления доступны по: [адресу](http://109.71.247.175:5000/docs/)

## Google таблицы

- при запуске приложения в БД записывается список таблиц для выгрузки, см. в src/postgres/seeds
- список таблиц, в которых можно посмотреть записанные данные:
  https://docs.google.com/spreadsheets/d/1FhCqAKpPgFMjTAKHvdvLKBpqJWh8ugQPPcwJVKy7xlU,
  https://docs.google.com/spreadsheets/d/1jihbGMDKoPjm8Ch44QuZoSKPWEbizUP_59-Id4PEHAQ,
  https://docs.google.com/spreadsheets/d/1AKi2ROHj9hXB2HIqWn85buN8bwu5bHtPzOcHo33YFbs,
  https://docs.google.com/spreadsheets/d/1g1pT60rnGvwKrhYa1SAK7_Tz5qFxZJyDkhFSyXs-AN"

## Команды:

Запуск приложения:

```bash
docker compose up -d
```

Запуск базы данных:

```bash
docker compose up -d --build postgres
```

Для выполнения миграций и сидов не из контейнера:

```bash
npm run knex:dev migrate latest
```

```bash
npm run knex:dev seed run
```

Также можно использовать и остальные команды (`migrate make <name>`,`migrate up`, `migrate down` и т.д.)

Для запуска приложения в режиме разработки:

```bash
npm run dev
```
