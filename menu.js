// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// Позволяет плавно перемещаться по якорям на странице. У ссылки a должен быть установлен атрибут href, он начинается с # и дальше идет идентификатор блока к которому нужно переместиться. Если атрибут href пустой то переместимся к body (но не плавно).

// У блока к которому нужно переместиться нужно добавить id, текст как и в href ссылки но без решетки.

// Данный код работает во всех современных браузерах кроме IE и старого Edge (в новом Edge все работает так как движок у него Chromium)