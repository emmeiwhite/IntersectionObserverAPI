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
// observer.observe(header);

// Observing the red div to use our animation on

const box = document.querySelector("div");
const para = document.querySelector(".para");

const callbackFunction = function (entries) {
  const [entry] = entries; // first element in the entries array
  console.log(entry);

  // Total 4 intersection cases:

  // While Scrolling down 2 intersection cases

  if (entry.isIntersecting === true && entry.intersectionRatio > 0.5) {
    window.addEventListener("scroll", function () {
      console.log("Entered the view port the first time");

      let boxTop = box.getBoundingClientRect().top;
      const boxHeight = box.getBoundingClientRect().height;
      //   console.log(boxTop);
      let boxInViewHeight = window.innerHeight - boxTop;

      let scrollPercentage = parseInt(
        (boxInViewHeight / boxHeight) * 100 - 100
      );
      console.log(`translateX(${scrollPercentage}%)`);

      para.style.transform = `translate(${scrollPercentage}%)`;
    });
  }
};

const boxObserver = new IntersectionObserver(callbackFunction, {
  threshold: 0.5,
  root: null,
  //   rootMargin: "-100px",
});

boxObserver.observe(box);
