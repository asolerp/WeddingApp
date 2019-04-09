import { tween, easing } from "popmotion";

const animateForm = (widthView, posIniY, posEndY, id, time) => {
    tween({
      from: {
        transalteX: widthView/2,
        transalteY: 600,
        scaleX: 1.5,
        scaleY: 1.2
      },
      to: {
        transalteX: widthView/2,
        transalteY: 650,
        scaleX: 1.7,
        scaleY: 1.5
      },
      duration: time,
      ease: easing.easeInOut,
      flip: Infinity
    }).start(v => {
      if (document.getElementById(id) !== null) {
        document.getElementById(id).style.webkitTransform = `translate(${
          v.transalteX
        }px, ${v.transalteY}px) scale(${v.scaleX}, ${v.scaleY}) `;
      }
    });
  };

  export default animateForm