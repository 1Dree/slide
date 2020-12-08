// ((doc) => {
//     const $ = (el) => doc.querySelector(el),
//       slideItems = $("#slide #slide-items"),
//       slideItem = doc.querySelectorAll("#slide-items .slide-item"),
//       slideBtns = doc.querySelectorAll("#slide-btns button"),
//       slideMap = $("#slide #slide-map");
//     let counter = 0;

//     slideMap.textContent = `1° / ${slideItem.length}`;

//     const preventMultipleClicks = (elBtn, bool) => (elBtn.disabled = bool);

//     function slide({ target }, receiver, slideLimit, _slideMap) {
//       preventMultipleClicks(target, true);
//       receiver.addEventListener("transitionend", () =>
//         preventMultipleClicks(target, false)
//       );

//       if (target.id === "next") {
//         counter++;
//         if (counter === slideLimit) counter = 0;
//       } else {
//         if (counter === 0) counter = slideLimit;
//         counter--;
//       }

//       _slideMap.textContent = `${counter + 1}° / ${slideLimit}`;

//       receiver.style.transform = `translateX(${-100 * counter}%)`;
//     }

//     slideBtns.forEach((btn) =>
//       btn.addEventListener("click", (event) =>
//         slide(event, slideItems, slideItem.length, slideMap)
//       )
//     );
//   })(document);
