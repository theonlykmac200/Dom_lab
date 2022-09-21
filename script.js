// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = ("<h1>SEI Rocks!</h1>");

mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")



  menuLinks.forEach((item) => {
    let newLink =document.createElement("a")
    newLink.setAttribute("href", item.href)
    newLink.textContent = (item.text)
    topMenuEl.append(newLink)

    console.log(newLink)
});
