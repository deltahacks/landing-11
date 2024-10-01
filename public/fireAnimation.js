const locatePos = () => {
  var fire = document.getElementById("fire");

  if (fire) {
    var firePosX, firePosY;
    if (window.innerWidth >= 768) {
      // desktop
      firePosX = (915 / 1440) * window.innerWidth;
      firePosY = (600 / 1617) * ((1617 / 1440) * window.innerWidth);
      fire.style.transform = `translate(-50%, -50%) scale(${window.innerWidth / 1440})`;
    } else {
      // mobile
      firePosX = (165 / 375) * window.innerWidth;
      firePosY = (365 / 821) * ((821 / 375) * window.innerWidth);
      fire.style.transform = `translate(-50%, -50%) scale(${(window.innerWidth / 375) * 0.5})`;
    }

    fire.style.left = `${firePosX}px`;
    fire.style.top = `${firePosY}px`;
  }

  var tree1 = document.getElementById("tree-1");

  if (tree1) {
    var tree1PosX, tree1PosY;

    if (window.innerWidth >= 768) {
      // desktop
      tree1PosX = (0 / 1440) * window.innerWidth;
      tree1PosY = (1050 / 1617) * ((1617 / 1440) * window.innerWidth);
      tree1.style.transform = `translate(-50%, -50%) scale(${window.innerWidth / 1440})`;
    } else {
      // mobile
      tree1PosX = (12 / 375) * window.innerWidth;
      tree1PosY = (650 / 821) * ((821 / 375) * window.innerWidth);
      tree1.style.transform = `translate(-50%, -50%) scale(${window.innerWidth / 375})`;
    }

    tree1.style.left = `${tree1PosX}px`;
    tree1.style.top = `${tree1PosY}px`;
  }

  var tree2 = document.getElementById("tree-2");

  if (tree2) {
    var tree2PosX, tree2PosY;

    if (window.innerWidth >= 768) {
      // desktop
      tree2PosX = (932 / 1440) * window.innerWidth;
      tree2PosY = (1000 / 1617) * ((1617 / 1440) * window.innerWidth);
      tree2.style.transform = `translate(50%, -50%) scale(${window.innerWidth / 1440})`;
    } else {
      // mobile
      tree2PosX = (275 / 375) * window.innerWidth;
      tree2PosY = (560 / 821) * ((821 / 375) * window.innerWidth);
      tree2.style.transform = `translate(50%, -50%) scale(${window.innerWidth / 375})`;
    }

    tree2.style.left = `${tree2PosX}px`;
    tree2.style.top = `${tree2PosY}px`;

    console.log(tree2PosX, tree2PosY, tree2.style.transform, "!");
  }
};

locatePos();

window.addEventListener("resize", locatePos);
