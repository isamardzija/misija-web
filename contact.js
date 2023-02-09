// KONTAKT
const kontaktForma = document.querySelector("#kontakt");

kontaktForma.addEventListener("submit", procKontakt);

async function procKontakt(e) {
  e.preventDefault();

  const data = new FormData(kontaktForma);

  const res = await fetch(`https://cms.udrugamisija.hr/api/contact-messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(data)),
  }).then((res) => res.json());
  kontaktForma.reset();
}
