async function fetchNews() {
  const vijestiContainer = document.querySelector(".novosti");
  const news = await fetch("https://cms.udrugamisija.hr/api/posts");
  const newsList = await news.json();
  const vijesti = newsList.docs;
  console.log(vijesti);

  vijesti.forEach((vijest) => {
    //
    const novaVijest = document.createElement("article");
    const h2 = document.createElement("h2");
    const image = document.createElement('img')
    const p = document.createElement("p");
    const author = document.createElement('span')
    const date = document.createElement('span')
    //
    vijestiContainer.appendChild(novaVijest);
    h2.textContent = vijest.title;
    p.textContent = vijest.content;
    date.textContent = vijest.publishedDate.slice(0, 10)
    image.setAttribute('src', vijest.image.sizes.tablet.url)
    author.textContent = vijest.author.name
    //
    author.classList.add('author')
    date.classList.add('date')

    novaVijest.append(image, h2, author, date, p );
  });
}

fetchNews();
