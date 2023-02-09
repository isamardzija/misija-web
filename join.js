// UCLANI SE

const uclaniSeForma = document.querySelector("#uclaniSe");

uclaniSeForma.addEventListener("submit", procUclanjenje);

async function procUclanjenje(e) {
  e.preventDefault();
  const noviClanData = new FormData(uclaniSeForma);
  console.log(noviClanData);

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
}
