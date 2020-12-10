((doc) => {
  const $ = (el) => doc.querySelector(el),
    contentItems = $("#slide-content #content-items"),
    slideItem = doc.querySelectorAll("#slide-content .slide-item"),
    slideBtns = doc.querySelectorAll("#slide-btns i"),
    slideMap = $("#slide #slide-map");
  let counter = 0;

  // renderizando o mapa do slide
  const HTMLslideMap = (ref) => ref.map(() => "<span></span>").join("");

  function renderSlideMap([...auxVector], target) {
    const content = HTMLslideMap(auxVector);

    target.innerHTML = content;
    target.children[0].classList.add("current");
  }

  renderSlideMap(slideItem, slideMap);
  // fim

  const preventMultipleClicks = (elBtn, bool, fn) => {
    bool === true
      ? elBtn.removeEventListener("click", fn)
      : elBtn.addEventListener("click", fn);
  };

  function counterConfigOfIncrement(direction, limit) {
    if (direction === "next") {
      counter++;
      if (counter === limit) counter = 0;
    } else {
      if (counter === 0) counter = limit;
      counter--;
    }
  }

  function changeLocations([...points], arrPosition) {
    points.forEach((item) => item.classList.remove("current"));

    points[arrPosition].classList.add("current");
  }

  function slide({ target }, receiver, _slideMap, slideLimit) {
    preventMultipleClicks(target, true, execute);
    receiver.addEventListener("transitionend", () =>
      preventMultipleClicks(target, false, execute)
    );

    counterConfigOfIncrement(target.id, slideLimit);
    changeLocations(_slideMap.children, counter);

    receiver.style.transform = `translateX(${-100 * counter}%)`;
  }

  const execute = (event) =>
    slide(event, contentItems, slideMap, slideItem.length);

  slideBtns.forEach((btn) => btn.addEventListener("click", execute));
})(document);
