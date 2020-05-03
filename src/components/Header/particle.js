import React from "react";
import Particles from "react-particles-js";

class Particle extends React.Component {
  render() {
    return (
      <Particles
        ClassName="example"
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 100,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: false,
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["circle"],
            },
            color: {
              value: ["#1f4068", "#c3edea", "#ff0000", "#a0ff00"],
            },
            size: {
              value: 10,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    );
  }
}
export default Particle;
