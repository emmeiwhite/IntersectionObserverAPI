const header = document.querySelector("header");
const nav = document.querySelector("nav");
const callback = function (entries, observer) {
  const [entry] = entries; // entries[0]

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const navHeight = nav.getBoundingClientRect().height;
const obsOptions = {
  root: null, // Viewport being observed w.r.t target
  threshold: 0, // 0 threshold means when the header goes completely out of viewport
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(callback, obsOptions);
observer.observe(header);
