import React from "react";

const Loading = () => {
  return (
    <>
      <svg width="400" height="240" xmlns="http://www.w3.org/2000/svg">
        <title>Chris's awesome loader</title>
        {/* <!-- 
    IN THIS PEN WE:
    - Adjusted the height of the "viewbox" to
      hide the extra "lines" down below
  --> */}

        <g id="group1" y="0" x="0" visibility="visible">
          <rect
            id="line1"
            width="50"
            height="20"
            style={{ fill: "#3092ec" }}
            x="0"
            y="0"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="50"
              to="350"
              dur="0.3s"
              fill="freeze"
              id="line1_anim"
            />
          </rect>
          <rect
            id="line2"
            width="0"
            height="20"
            style={{ fill: "#ab6cfe" }}
            x="30"
            y="30"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.3s"
              fill="freeze"
              begin="line1_anim.end"
              id="line2_anim"
            />
          </rect>
          <rect
            id="line3"
            width="0"
            height="20"
            style={{ fill: "#fd8085" }}
            x="60"
            y="60"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="160"
              dur="0.3s"
              fill="freeze"
              begin="line2_anim.end"
              id="line3_anim"
            />
          </rect>
          <rect
            id="line4"
            width="0"
            height="20"
            style={{ fill: "lightgray" }}
            x="90"
            y="90"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.2s"
              fill="freeze"
              begin="line3_anim.end"
              id="line4_anim"
            />
          </rect>
          <rect
            id="line5"
            width="0"
            height="20"
            style={{ fill: "lightgray" }}
            x="90"
            y="120"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.2s"
              fill="freeze"
              begin="line4_anim.end"
              id="line5_anim"
            />
          </rect>
          <rect
            id="line6"
            width="0"
            height="20"
            style={{ fill: "#fd8085" }}
            x="60"
            y="150"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="120"
              dur="0.2s"
              fill="freeze"
              begin="line5_anim.end"
              id="line6_anim"
            />
          </rect>
          <rect
            id="line7"
            width="0"
            height="20"
            style={{ fill: "#ab6cfe" }}
            x="30"
            y="180"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="90"
              dur="0.2s"
              fill="freeze"
              begin="line6_anim.end"
              id="line7_anim"
            />
          </rect>
          <rect
            id="line8"
            width="0"
            height="20"
            style={{ fill: "#3092ec" }}
            x="0"
            y="210"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="50"
              to="130"
              dur="0.3s"
              fill="freeze"
              begin="line7_anim.end"
              id="line8_anim"
            />
          </rect>

          <animateMotion
            from="0,0"
            to="0,-250"
            dur="2s"
            begin="line8_anim.end"
            repeatCount="indefinite"
          />
        </g>

        <g id="group2">
          <rect
            id="line9"
            width="0"
            height="20"
            style={{ fill: "#3092ec" }}
            x="0"
            y="250"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="350"
              dur="0.25s"
              fill="freeze"
              id="line9_anim"
              begin="line8_anim.end;line9_anim.end+1.75"
            />
          </rect>

          <rect
            id="line10"
            width="0"
            height="20"
            style={{ fill: "#ab6cfe" }}
            x="30"
            y="280"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.25s"
              fill="freeze"
              begin="line9_anim.end"
              id="line10_anim"
            />
          </rect>
          <rect
            id="line11"
            width="0"
            height="20"
            style={{ fill: "#fd8085" }}
            x="60"
            y="310"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="160"
              dur="0.25s"
              fill="freeze"
              begin="line10_anim.end"
              id="line11_anim"
            />
          </rect>
          <rect
            id="line12"
            width="0"
            height="20"
            style={{ fill: "lightgrey" }}
            x="90"
            y="340"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.25s"
              fill="freeze"
              begin="line11_anim.end"
              id="line12_anim"
            />
          </rect>
          <rect
            id="line13"
            width="0"
            height="20"
            style={{ fill: "lightgrey" }}
            x="90"
            y="370"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="200"
              dur="0.25s"
              fill="freeze"
              begin="line12_anim.end"
              id="line13_anim"
            />
          </rect>
          <rect
            id="line14"
            width="0"
            height="20"
            style={{ fill: "#fd8085" }}
            x="60"
            y="400"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="120"
              dur="0.25s"
              fill="freeze"
              begin="line13_anim.end"
              id="line14_anim"
            />
          </rect>
          <rect
            id="line15"
            width="0"
            height="20"
            style={{ fill: "#ab6cfe" }}
            x="30"
            y="430"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="90"
              dur="0.25s"
              fill="freeze"
              begin="line14_anim.end"
              id="line15_anim"
            />
          </rect>
          <rect
            id="line16"
            width="0"
            height="20"
            style={{ fill: "#3092ec" }}
            x="0"
            y="460"
            rx="10"
            ry="10"
          >
            <animate
              attributeName="width"
              from="0"
              to="130"
              dur="0.25s"
              fill="freeze"
              begin="line15_anim.end"
              id="line16_anim"
            />
          </rect>

          <animateMotion
            from="0,0"
            to="0,-250"
            dur="2s"
            begin="2s"
            id="scroll_anim"
            repeatCount="indefinite"
          />

          {/* <!-- <set attributeName="visibility" attributeType="CSS" to="hidden" begin="4s" fill="freeze"/>   --> */}
        </g>
      </svg>
    </>
  );
};

export default Loading;
