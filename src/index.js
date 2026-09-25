function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Hořící obručí slunce proskakují cvičení psi"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
