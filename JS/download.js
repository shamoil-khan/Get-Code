const downloadBtn = document.querySelectorAll(".downloadBtn");
const watchBtn = document.querySelectorAll(".watchBtn");

downloadBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let aTag = document.createElement("a");
    aTag.setAttribute("href", e.target.getAttribute("data-src"));
    aTag.setAttribute("download", "download");
    document.body.appendChild(aTag);

    aTag.click();

    aTag.remove();
  });
});

for (var i = 0; i < watchBtn.length; i++) {
  watchBtn[i].addEventListener("click", (e) => {
    var target = e.target;
    window.open(target.getAttribute("data-src"));
  });
}
