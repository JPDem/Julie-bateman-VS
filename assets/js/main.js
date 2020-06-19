const btns = document.querySelectorAll(".btn");
const column = document.querySelectorAll(".column");

//FILTER
const filter = () => {
  //ACTIVE BUTTON
  const toggleActiveClass = (activeClass) => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    activeClass.classList.add("active");
  };

  //TOGGLE IMAGES
  const toggleArt = (artStyle) => {
    if (artStyle === "all") {
      column.forEach((item) => {
        item.style.display = "flex";
        item.classList.add("fade-in");
      });
    } else {
      column.forEach((item) => {
        if (item.dataset.style === artStyle) {
          console.log(item.classList);
          item.classList.add("fade-in");
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    }
  };

  //FILTER FOR PICTURE STYLES
  const filterListener = () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => {
        resetAnimation();
        toggleActiveClass(btns[i]);
        toggleArt(btns[i].dataset.style);
      });
    }
  };

  filterListener();
};

filter();

//RESTART ANIMATION
const resetAnimation = () => {
  column.forEach((el) => {
    el.style.animation = "none";
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
  });
};
