# Artist Portfolio

Веб-портфолио художника, построенное на **Angular 18** с использованием контент-ориентированной (content-driven) архитектуры.

![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-18.19+-339933?logo=nodedotjs)

## 🚀 Запуск проекта

### Установка зависимостей:
`npm install`

### Запуск приложеня
`npm run demo`,
где `demo` в `package.json`:</br>
`"demo": "ng serve --configuration=demo"`.

### Сборка проекта
`ng build`

## 🧠 Архитектура
Проект построен вокруг контент-ориентированного подхода.

Каждая страница строится по следующей структуре:

Page → Groups → Sections → Components:
```
export const ABOUT_PAGE: Page = {
  groups: [
    {
      sections: [
        createTextSection(...),
        createSplitSection(...),
        createTimelineSection(...),
      ]
    }
  ]
};
```
Страницы состоят из групп, а группы состоят из секций.

Рендеринг происходит динамически через PageRenderer, который выбирает Angular-компонент по типу секции.

### 🧩 Система секций

Поддерживаемые типы секций:

- Text
- Split (изображение + текст)
- Gallery
- Timeline
- Image

Каждая секция реализована как отдельный Angular-компонент и создаётся через factory-функции.

### ➕ Добавление новой секции

1. Добавить интерфейс секции
2. Добавить тип в `SectionTypeEnum`
3. Создать Angular компонент
4. Добавить factory функцию
5. Зарегистрировать в `PageRenderer`

## 🏗 Структура проекта
```
src/
├── app/
│   ├── content/
│   │   ├── demo/        # демо-данные (публичная версия)
│   │   ├── dev/         # рабочие данные (закрытая версия)
│   │   └── shared/      # общие утилиты и модели
│   ├── shared/          # переиспользуемые UI и логика
│   ├── pages/           # страницы приложения
│   └── core/            # сервисы и инфраструктура
├── assets/
│   ├── demo/            # демо-изображения
│   └── dev/             # реальные изображения
```

## 🔧 Ключевые особенности
- Полностью контент-ориентированная архитектура
- Разделение demo / dev данных
- Page-driven подход
- Dynamic component rendering через NgComponentOutlet
- Factory-паттерн для секций
- Строгая типизация TypeScript
- Angular Signals для реактивности
- Отсутствие логики страниц в компонентах
