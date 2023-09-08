// This Function Get The Click ( Keydown) On Keyboard Or Buttons (div in container)
function playSpecificAudio(e) {
  if (e == "a" || (typeof e != "string" && e.key.toLowerCase() === "a")) {
    document.getElementById("a").currentTime = 0;
    document.getElementById("a").play();
    document.querySelector(".a").classList.add("light");
    setTimeout(() => {
      document.querySelector(".a").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "s" || (typeof e != "string" && e.key.toLowerCase() === "s")) {
    document.getElementById("s").currentTime = 0;
    document.getElementById("s").play();
    document.querySelector(".s").classList.add("light");
    setTimeout(() => {
      document.querySelector(".s").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "d" || (typeof e != "string" && e.key.toLowerCase() === "d")) {
    document.getElementById("d").currentTime = 0;
    document.getElementById("d").play();
    document.querySelector(".d").classList.add("light");
    setTimeout(() => {
      document.querySelector(".d").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "f" || (typeof e != "string" && e.key.toLowerCase() === "f")) {
    document.getElementById("f").currentTime = 0;
    document.getElementById("f").play();
    document.querySelector(".f").classList.add("light");
    setTimeout(() => {
      document.querySelector(".f").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "g" || (typeof e != "string" && e.key.toLowerCase() === "g")) {
    document.getElementById("g").currentTime = 0;
    document.getElementById("g").play();
    document.querySelector(".g").classList.add("light");
    setTimeout(() => {
      document.querySelector(".g").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "h" || (typeof e != "string" && e.key.toLowerCase() === "h")) {
    document.getElementById("h").currentTime = 0;
    document.getElementById("h").play();
    document.querySelector(".h").classList.add("light");
    setTimeout(() => {
      document.querySelector(".h").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "j" || (typeof e != "string" && e.key.toLowerCase() === "j")) {
    document.getElementById("j").currentTime = 0;
    document.getElementById("j").play();
    document.querySelector(".j").classList.add("light");
    setTimeout(() => {
      document.querySelector(".j").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "k" || (typeof e != "string" && e.key.toLowerCase() === "k")) {
    document.getElementById("k").currentTime = 0;
    document.getElementById("k").play();
    document.querySelector(".k").classList.add("light");
    setTimeout(() => {
      document.querySelector(".k").classList.remove("light");
    }, 100);
    return;
  }
  if (e == "l" || (typeof e != "string" && e.key.toLowerCase() === "l")) {
    document.getElementById("l").currentTime = 0;
    document.getElementById("l").play();
    document.querySelector(".l").classList.add("light");
    setTimeout(() => {
      document.querySelector(".l").classList.remove("light");
    }, 100);
    return;
  }
}
let allDiv = Array.from(document.querySelectorAll(".container div"));
allDiv.forEach((element) => {
  element.onclick = function () {
    playSpecificAudio(element.className);
  };
});
document.addEventListener("keydown", playSpecificAudio);
