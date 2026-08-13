// chapter navigation, shared by every page: the fixed sidebar on wide screens
// and a folding chapter list at the top of the page on narrow ones.
// Adding a chapter = one new line in this array.
(function () {
  const chapters = [
    ["index.html", "Chapter 1: Neural Networks, One Lego Block at a Time"],
    ["chapter2.html", "Chapter 2: Non-linear Regression with Gradient Descent"],
    ["chapter3.html", "Chapter 3: A Second Hidden Layer"],
    ["chapter4.html", "Chapter 4: Classification with Softmax"],
    ["chapter5.html", "Chapter 5: Generalization"],
  ];
  const here = location.pathname.split("/").pop() || "index.html";

  // sidebar (shown >= 1120px by site.css)
  let nav = '<a class="site" href="index.html">Neural nets from scratch</a>';
  for (const [page, title] of chapters) {
    const on = page === here;
    nav += `<a href="${page}"${on ? ' class="here"' : ""}>${title}</a>`;
    if (on) {
      nav += '<div class="secs">';
      document.querySelectorAll("main h2").forEach((h, i) => {
        if (!h.id) h.id = "sec" + i;
        nav += `<a href="#${h.id}">${h.textContent}</a>`;
      });
      nav += "</div>";
    }
  }
  const side = document.getElementById("sidenav");
  if (side) side.innerHTML = nav;

  // folding chapter list for narrow screens (hidden >= 1120px by site.css)
  const details = document.createElement("details");
  details.className = "chapnav";
  details.innerHTML = "<summary>All chapters</summary>" +
    chapters.map(([page, title]) =>
      `<a href="${page}"${page === here ? ' class="here"' : ""}>${title}</a>`).join("");
  const main = document.querySelector("main");
  if (main) main.insertBefore(details, main.firstChild);
})();
