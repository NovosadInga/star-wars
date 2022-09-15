/*
Формат CSS-переманной:
--theme-default-Уникальное имя #дефолтная переменная
--theme-light-Уникальное имя # для light
--theme-dark-Уникальное имя #для dark
--theme-neitral-Уникальное имя #для neitral
*/
export const changeCssVariables = theme => {
    const root = document.querySelector(":root")
    const cssVariables = ['header', 'bgimage']
    cssVariables.forEach(el =>{
        root.style.setProperty(
            `--theme-default-${el}`, 
            `var(--theme-${theme}-${el})`
        )
    })
 }