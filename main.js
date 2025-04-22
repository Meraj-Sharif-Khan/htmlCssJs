const porjectSl = document.querySelectorAll(".projectTitle");

porjectSl.forEach((e, i) => {
  const title = e.innerText;
  e.innerHTML = `<h2>#${i + 1} ${title}</h2>`;
});
