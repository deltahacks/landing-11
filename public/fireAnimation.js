const locateFirePos = () => {
  var recalculatedPosX = (915 / 1440) * window.innerWidth;
  var recalculatedPosY = (600 / 1617) * ((1617 / 1440) * window.innerWidth);

  var fire = document.getElementById("fire");

  if (fire) {
    fire.style.left = `${recalculatedPosX}px`;
    fire.style.top = `${recalculatedPosY}px`;
    fire.style.transform = `translate(-50%, -50%) scale(${window.innerWidth / 1440})`;
  }
};

locateFirePos();

window.addEventListener("resize", locateFirePos);
