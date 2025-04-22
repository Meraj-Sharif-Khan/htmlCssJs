const porjectSl = document.querySelectorAll(".projectTitle");
const link = document.querySelectorAll("a");
console.log(link);
porjectSl.forEach((e, i) => {
  const title = e.innerText;
  e.innerHTML = `<h2>#${i + 1} ${title}</h2>`;
});

link.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("visited");
  });
});
