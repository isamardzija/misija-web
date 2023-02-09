// KONTAKT

function contact() {
  const kontaktForma = document.querySelector("#kontakt");

  kontaktForma.addEventListener("submit", procKontakt);
  async function procKontakt(e) {
    e.preventDefault();

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
      const successMessage = document.createElement("p");
      successMessage.classList.add("success");
      successMessage.textContent =
        "Hvala na poruci! Potruditi ćemo se odgovoriti u najbržem mogućem roku.";
      kontaktForma.appendChild(successMessage);
    } catch (error) {
      console.log(`Došlo je do pogreške! `, error);
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Slanje nije uspjelo!";
      kontaktForma.appendChild(errorMessage);
    }
  }
}

contact();
