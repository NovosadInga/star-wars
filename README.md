# Star Wars Aplication

## Links
 - [Project](https://novosadinga.github.io/star-wars/)
- [Storybook](https://novosadinga.github.io/star-wars/storybook/?path=/story/ui-kit-uibutton--light)
 - [Repository](https://github.com/NovosadInga/star-wars)

![](https://github.com/NovosadInga/star-wars/blob/master/screen.png)
## Опис
	Додаток про персонажів Star Wars. Реалізовано пошук пессонажів та додавання персонажів в вибрані. Також додано зміну теми додатку.

## API
- https://swapi.dev/

## Структура проєкту

![](https://github.com/NovosadInga/star-wars/blob/master/structure.png)

## Використані технології
- `React`
    + `Context API` (для зміни теми додатку)
    + `HOC` для обробки процесу завантаження данних і виведення помилок
- `React Router`
- `PropTypes`
- `Storybook`
- `Redux, Redux Thunk`
	для зберігання бізнес логіки та асихронних запитів
- `classname`, `scss`, робота з css змінними
- `axios`
	для http-запитів
- `lodash`
	набор функций, для работы с данными
- - `react-app-rewire-alias`, `react-app-rewired`
	для налаштування маршрутів проєкту
 ## Скрипты
 ```
 npm run start
 npm run deploy
 ```