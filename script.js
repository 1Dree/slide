((doc) => {
  const $ = (el) => doc.querySelector(el),
    slideItems = $("#slide #slide-items"),
    slideItem = doc.querySelectorAll("#slide-items .slide-item"),
    prevBtn = $("#slide #slide-btns button#previous"),
    nextBtn = $("#slide #slide-btns button#next");
  let counter = 0;

  nextBtn.addEventListener("click", function (e) {
    counter++;
    if (counter === slideItem.length) counter = 0;
    nextBtn.disabled = true;

    slideItems.style.transform = `translateX(${-100 * counter}%)`;

    slideItems.addEventListener("transitionend", () => {
      nextBtn.disabled = false;
    });
  });

  prevBtn.addEventListener("click", function (e) {
    if (counter === 0) counter = slideItem.length;
    counter--;

    prevBtn.disabled = true;

    slideItems.style.transform = `translateX(${-100 * counter}%)`;

    slideItems.addEventListener("transitionend", () => {
      prevBtn.disabled = false;
    });
  });
})(document);
