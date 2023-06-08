document.addEventListener(
  "webkitfullscreenchange",
  function () {
    var vid = document.getElementById("background-video");
    if (document.webkitIsFullScreen == true) {
      vid.play();
    } else {
      vid.pause();
    }
  },
  false
);

document.addEventListener(
  "fullscreenchange",
  function () {
    console.log(document.fullscreen);
    var vid = document.getElementById("background-video");
    if (document.fullscreen == true) {
      vid.play();
    } else {
      vid.pause();
    }
  },
  false
);
document.addEventListener(
  "mozfullscreenchange",
  function () {
    console.log(document.mozFullScreen);
    var vid = document.getElementById("background-video");
    if (document.mozFullScreen == true) {
      vid.play();
    } else {
      vid.pause();
    }
  },
  false
);
