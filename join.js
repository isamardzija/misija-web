// UCLANI SE
function join() {
  const uclaniSeForma = document.querySelector("#uclaniSe");

  uclaniSeForma.addEventListener("submit", procUclanjenje);
  async function procUclanjenje(e) {
    e.preventDefault();
    const noviClanData = new FormData(uclaniSeForma);
    try {
      const res = await fetch(
        "https://cms.udrugamisija.hr/api/membership-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(noviClanData)),
        }
      ).then((res) => res.json());
      uclaniSeForma.reset();
      const successMessage = document.createElement("p");
      successMessage.classList.add("success");
      successMessage.textContent =
        "Hvala na interesu! Javiti ćemo ti se ubrzo.";
      uclaniSeForma.appendChild(successMessage);
    } catch (error) {
      console.log("Došlo je do pogreške!", error);
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Došlo je do pogreške!";
      uclaniSeForma.appendChild(errorMessage);
    }
  }
}

join();
