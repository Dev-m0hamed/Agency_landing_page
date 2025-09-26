const toggleMenu = document
  .getElementById("toggleMenu")
  .addEventListener("click", () => {
    const links = document
      .getElementById("links")
      .classList.toggle("scale-100");
  });
