let screen = document.querySelector("#screen");
let button = document.querySelectorAll("button");

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let value = btn.innerText;
    if (value === "C") {
      screen.value = "";
    } else if (value === "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else if (value === "=") {
      if (screen.value === "") {
        // alert("لا يوجد عملية حسابية ");
         screen.value = ` اين العملية ؟`;
      }else{
         try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = ` !االمنطق خطأ `;
      }
      }
    } else {
      screen.value += value;
    }
  });
});
