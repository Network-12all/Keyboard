document.addEventListener("DOMContentLoaded", function() {
  const keys = document.querySelectorAll(".key");
  const output = document.getElementById("output");

  keys.forEach(key => {
    key.addEventListener("click", function() {
      const keyValue = key.dataset.key;
      output.value += keyValue;
    });
  });
});
