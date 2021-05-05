/*** point, vector, radian, and degree converters ***/

point = (x, y) => ({x: x, y: y});
vector = (p1, p2) => ({p1: p1, p2: p2});
radians_to_degrees = d => d * 180 / Math.PI;
vector_to_radians = v => Math.atan2(v.p2.y - v.p1.y, v.p2.x - v.p1.x);
vector_to_degrees = v => radians_to_degrees(vector_to_radians(v));

result = vector_to_degrees(vector(point(0, 0), point(1, 1)))
log("result:", result)
log(expand(["a", "b", "c"]))
text = dot("inset container", [
    dot("outset one", "one"),
    dot("outset two", "two"),
    dot("outset three", "three"),
])
body(text)
text2 = svg(
    [`
<filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
<feComponentTransfer in=SourceAlpha>
    <feFuncA type="table" tableValues="1 0" />
    </feComponentTransfer>
    <feGaussianBlur stdDeviation="4"/>
    <feOffset dx="0" dy="5" result="offsetblur"/>
    <feFlood flood-color="rgb(0, 0, 0)" result="color"/>
    <feComposite in2="offsetblur" operator="in"/>
    <feComposite in2="SourceAlpha" operator="in" />
    <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode />
    </feMerge>
</filter>
<filter id="bevel1" filterUnits="objectBoundingBox" x="-10%" y="-10%" width="150%" height="150%">
<feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
<feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.5" specularExponent="10" result="specOut" lighting-color="white">
<fePointLight x="-5000" y="-10000" z="20000"/>
</feSpecularLighting>
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
<feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
</filter>
<filter id="bevel2" filterUnits="objectBoundingBox" x="-10%" y="-10%" width="150%" height="150%">
<feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"/>
<feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.5" specularExponent="10" result="specOut" lighting-color="white">
<fePointLight x="-5000" y="-5000" z="8000"/>
</feSpecularLighting>
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
<feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
</filter>
 <filter id="emboss">
        <feFlood result="gray"/>
        <feComposite in="SourceGraphic" in2="gray"/>
        <feConvolveMatrix preserveAlpha="true" bias="0"
        kernelMatrix="1   0  0 
                      0 0 0
                      0  0 -1" >
      </feConvolveMatrix>
        <feComposite in2="SourceGraphic" operator="in"/>
    </filter>
    
    <filter id="multishadow" x="-40%" y="-40%" height="160%" width="160%">
     <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/> 
      <feOffset dx="12" dy="12" result="offsetblur"/>
      <feOffset dx="-18" dy="-5" result="offsetblur2" in="blur"/>
      <feComponentTransfer result="shadow1" in="offsetblur">
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feComponentTransfer result="shadow2" in="offsetblur2">
        <feFuncA type="linear" slope="0.2"/>
      </feComponentTransfer>
      <feMerge> 
        <feMergeNode in="shadow1"/>
        <feMergeNode in="shadow2"/>
        <feMergeNode in="SourceGraphic"/> 
      </feMerge>
    </filter>
`,
        circle({cx: "500", cy: "500", r: "230", fill: "#dddddddd", filter:"url(#bevel1)"}),
        circle({cx: "250", cy: "250", r: "120", fill: "#dddddddd",filter:"url(#bevel2)"}),
        circle({cx: "250", cy: "750", r: "120", fill: "#dddddddd",filter:"url(#inset-shadow)"}),
        circle({cx: "750", cy: "250", r: "120", fill: "#dddddddd",filter:"url(#inset-shadow)"}),
        circle({cx: "750", cy: "750", r: "120", fill: "#dddddddd",filter:"url(#inset-shadow)"}),
    ], {viewBox: "0 0 1000 1000", xmlns: "http://www.w3.org/2000/svg",width:1000, height:1000}
)
log(text2)
append(text2)
// <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="50" cy="50" r="50"/>
//     </svg>