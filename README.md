# Задание на вёрстку с использованием только CSS

В файле [psd/ForexEdition.psd](./psd/ForexEdition.psd) дан макет веб-страницы. Требуется воссоздать данную страницу с помощью CSS. Делать разметку не требуется. Задание состоит только в создании стилей к готовой разметке. Макет сохранён в формате для Adobe PhotoShop. 

Можно воспользоваться пробной 30 дневной версией [Adobe PhotoShop CC](http://www.adobe.com/ru/products/photoshop.html)

Задание нужно выполнить в файле [src/css/style.css](./src/css/style.css). Он пустой. В нём требуется создать все необходимые стили для оформления HTML документа:

- использовать только классы и теги в селекторах из уже имеющихся в документе;
- не менять HTML;
- использовать заранее приготовленные графические ресурсы из папок [src/images](./src/images) и [src/gallery](./src/gallery)
- максимально соблюдать отступы и цвета как в макете

### Какие CSS свойства понадобятся

`width`, `height`, `min-heigt`, `background`, `display`, `position`, `color`, `font`, `margin`, `padding`, `box-sizing`, `line-height`, `cursor`, `text-decoration`, `list-style`, `border-radius`, `text-align`, `border`, `white-space`, `vertical-align`

### Что требуется знать

1. CSS селекторы
2. Каскадирование и приоритетность стилей CSS
3. Схлопывание внешних отступов (margin collapsing)
3. Абсолютное позиционирование элементов
4. Псевдо-элементы и Псевдо-селекторы
5. Множественные фоны (CSS Multiple backgrounds)
6. Вендорные префиксы

Правильный код должен получится примерно на 300 строк.

Превью выполненного задание можно посмотреть на скриншоте [src/preview.png](./src/preview.png). Допускается, что получившийся результат может не на 100% соответствовать скриншоту.

В проект включён статический анализ кода. Подробности настройки окружения можно почитать в [HELP.md](https://github.com/fabrikaodua/frontend-css-fairhyip/blob/master/HELP.md). Но задание можно выполнить и без этого, имея только браузер и редактор кода.

### Требуется поддержка браузеров:

- IE11+
- Chrome latest
- Firefox Latest
- Opera latest
- Safari 5+