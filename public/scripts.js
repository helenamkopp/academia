//essa lógica deixa a página atual "marcada"!! - pede em alguns desafios!
//ele ta indo la no layout.njk e comparando os dois nomes 
// ele vai manter marcado inclusive nas páginas 'filhas'
const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}
