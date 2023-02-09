// KONTAKT

function contact() {
  const kontaktForma = document.querySelector("#kontakt");

  kontaktForma.addEventListener("submit", procKontakt);
  async function procKontakt(e) {
    e.preventDefault();
    const kontaktButton = document.querySelector("#kontaktButton");

    kontaktButton.textContent = "Šaljem...";
    const data = new FormData(kontaktForma);
    try {
      const res = await fetch(
        `https://cms.udrugamisija.hr/api/contact-messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(data)),
        }
      ).then((res) => res.json());
      kontaktForma.reset();
      kontaktButton.textContent = "Pošalji";

      const successMessage = document.createElement("p");
      successMessage.classList.add("success");
      successMessage.textContent =
        "Hvala na poruci! Potruditi ćemo se odgovoriti u najbržem mogućem roku.";
      kontaktForma.appendChild(successMessage);
    } catch (error) {
      kontaktButton.textContent = "Pošalji";

      console.log(`Došlo je do pogreške! `, error);
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Slanje nije uspjelo!";
      kontaktForma.appendChild(errorMessage);
    }
  }
}

contact();
