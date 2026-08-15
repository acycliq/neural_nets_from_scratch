// chapter navigation, shared by every page: the fixed sidebar on wide screens
// and a folding chapter list at the top of the page on narrow ones.
// Adding a chapter = one new line in this array; a null page renders as a
// part divider instead of a link.
(function () {
  const chapters = [
    [null, "Part I: Neural Nets from Scratch"],
    ["index.html", "Chapter 1: Neural Networks, One Lego Block at a Time"],
    ["chapter2.html", "Chapter 2: Non-linear Regression with Gradient Descent"],
    ["chapter3.html", "Chapter 3: A Second Hidden Layer"],
    ["chapter4.html", "Chapter 4: Classification with Softmax"],
    ["chapter5.html", "Chapter 5: Generalization"],
    ["chapter6.html", "Chapter 6: The Training Toolkit"],
    [null, "Part II: Topics in ML"],
    ["sparse-coding.html", "Sparse Coding and Matching Pursuit"],
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const entry = ([page, title]) =>
    page === null ? `<span class="part">${title}</span>`
    : `<a href="${page}"${page === here ? ' class="here"' : ""}>${title}</a>`;

  // sidebar (shown >= 1120px by site.css)
  let nav = '<a class="site" href="index.html">Neural nets from scratch</a>';
  for (const [page, title] of chapters) {
    nav += entry([page, title]);
    if (page === here) {
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
  details.innerHTML = "<summary>Contents</summary>" + chapters.map(entry).join("");
  const main = document.querySelector("main");
  if (main) main.insertBefore(details, main.firstChild);
})();
