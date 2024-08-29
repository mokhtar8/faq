const btn = document.querySelectorAll(".accord-btn");
const javabsoalaval = document.querySelectorAll(".javabsoalaval");

btn.forEach((item, index) => {
  item.onclick = () => {
    let iconplus = item.querySelector(".icon-plus");
    let iconminus = item.querySelector(".icon-minus");

    javabsoalaval[index].classList.toggle("active");
    if (javabsoalaval[index].classList.contains("active")) {
      iconminus.style.display = "block";
      iconplus.style.display = "none";
    } else {
      iconminus.style.display = "none";
      iconplus.style.display = "block";
    }
  };
});

