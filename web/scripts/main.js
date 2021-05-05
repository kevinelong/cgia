text2 = svg(
    [`
    <filter
       style="color-interpolation-filters:sRGB;"
       id="inset_filter"
       x="-0.030666666"
       y="-0.030666666"
       width="1.0613333"
       height="1.0613333">
      <feMorphology
         result="result1"
         in="SourceAlpha"
         operator="dilate"
         radius="3.6"
         id="feMorphology44044" />
      <feGaussianBlur
         stdDeviation="3.6"
         in="result1"
         result="result0"
         id="feGaussianBlur44046" />
      <feDiffuseLighting
         surfaceScale="-5"
         id="feDiffuseLighting44050">
        <feDistantLight
           elevation="45"
           azimuth="225"
           id="feDistantLight44048" />
      </feDiffuseLighting>
      <feComposite
         in2="result0"
         operator="in"
         result="result91"
         id="feComposite44052" />
      <feComposite
         in="SourceGraphic"
         in2="result91"
         id="feComposite44054"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix44544" />
      <feGaussianBlur
         id="feGaussianBlur44546"
         stdDeviation="1 1"
         result="blur"
         in="fbSourceGraphic" />
    </filter>
`,
        circle({cx: "400", cy: "400", r: "220", fill: "#dddddddd", filter: "url(#inset_filter)"}),
        circle({cx: "150", cy: "150", r: "110", fill: "#dddddddd", filter: "url(#inset_filter)"}),
        circle({cx: "150", cy: "650", r: "110", fill: "#dddddddd", filter: "url(#inset_filter)"}),
        circle({cx: "650", cy: "150", r: "110", fill: "#dddddddd", filter: "url(#inset_filter)"}),
        circle({cx: "650", cy: "650", r: "110", fill: "#dddddddd", filter: "url(#inset_filter)"}),
        `
  <g transform="translate(300 350) scale(1 1) rotate(45,175,75)">
    <circle class="draggable" cx="0" cy="0" r="30" fill="blue" />
  </g>
  <g transform="translate(400 500) scale(1 1) rotate(45,175,75)">
    <rect class="draggable" x="0" y="0" width="60" height="60" fill="green" />
  </g>
  <g transform="translate(400 400) scale(1 1)">
    <g class="draggable">
      <circle cx="0" cy="0" r="30" fill="yellow"/>
    </g>
  </g>
        `
    ], {id: "svg", viewBox: "0 0 800 800", xmlns: "http://www.w3.org/2000/svg"}
)

log(text2)
append(text2)

let draggables =  document.querySelectorAll(".draggable")
for (let i = 0; i < draggables.length; i++) {
        let o = new Draggable(draggables[i])
}
