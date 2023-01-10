import gsap from "gsap";
import "../styles/loading.css";

const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: "true",
});
tl.from(".title", {
  duration: 0.5,
  opacity: 0,
  y: 10,
});
tl.from(".bracket", {
  duration: 0.3,
  scale: 0,
  margin: 0,
});
tl.from("#loader", {
  duration: 0.2,
  scale: 0,
});
tl.from("img", {
  duration: 0.8,
  y: 150,
  opacity: 0,
  stagger: {
    amount: 0.1,
  },
});
tl.from(
  ".bottom-line",
  {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: {
      amount: 0.1,
    },
  },
  "-=.5"
);

// initializing loader
let id,
  i = 0;
function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

// welcome screen
welcomeScreen.to(".loading-section, .loading-images-container", {
  y: -10,
  opacity: 0,
});
welcomeScreen.to(".loading-screen", {
  duration: 0.8,
  y: -2000,
  ease: "Power4.out",
});
welcomeScreen.from(
  ".welcome-screen h1",
  {
    y: 200,
    duration: 0.5,
    stagger: {
      amount: 0.2,
    },
  },
  "-=.8"
);

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-section">
        <div className="title">Turnos</div>
        <div className="bracket bracket1">(</div>
        <div id="loader"></div>
        <div className="bracket bracket2">)</div>
        <div className="title">Consulado</div>
      </div>
      <div className="loading-images-container">
        <div className="bottom-section">
          <div className="bottom-line">Turnos Consulado</div>
          <div className="bottom-line">2023 &#169;</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
