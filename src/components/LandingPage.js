import React from 'react'
import ReactTooltip from 'react-tooltip'

const lineMap = {
    "1": { "cx": "18%", "cy": "72%" },
    "2": { "cx": "40%", "cy": "28%" },
    "3": { "cx": "53%", "cy": "45%" },
    "4": { "cx": "50%", "cy": "60%" },
    "5": { "cx": "calc(50% + 55px)", "cy": "60%" },
    "6": { "cx": "55%", "cy": "23%" },
    "7": { "cx": "67%", "cy": "85%" },
    "8": { "cx": "71%", "cy": "59%" },
    "9": { "cx": "75%", "cy": "30%" },
    "10": { "cx": "90%", "cy": "45%" },
}

const colorMap = {
    "A": { "fill": "green" },
    "B": { "fill": "red" },
    "C": { "fill": "#ffbf58" },
    "D": { "fill": "#a2c0d9" },
}

const dataMap = {
    "A": { "data-tip": "Blog", "href": "#blog" },
    "B": { "data-tip": "Resume", "href": "#resume" },
    "C": { "data-tip": "About Me", "href": "#about" },
    "D": { "data-tip": "Github", "href": "https://github.com/nate-trojian" },
}

const Line = (data) => {
    var s = lineMap[data["start"]]
    var e = lineMap[data["end"]]
    return (
        <line className="edge" x1={s.cx} y1={s.cy} x2={e.cx} y2={e.cy} {...data} />
    )
}

const Circle = (props) => {
    var n = lineMap[props["node"]]
    var c = colorMap[props["type"]]
    var d = dataMap[props["type"]]
    return (
        <a data-event="focus mouseover" data-event-off="focusout mouseout" data-for="svg-tooltip" {...d}>
            <circle className="node" {...n} {...c} {...props} />
        </a>
    )
}

const LandingPage = () => {
    return (
        <div className="container">
            <svg id="landing-page">
                <Line start="1" end="2" />
                <Line start="1" end="4" />
                <Line start="1" end="7" />

                <Line start="2" end="3" />
                <Line start="2" end="4" />
                <Line start="2" end="6" />

                <Line start="3" end="6" />
                <Line start="3" end="4" />
                <Line start="3" end="9" />

                <Line start="4" end="5" />

                <Line start="5" end="7" />
                <Line start="5" end="8" />
                <Line start="5" end="9" />

                <Line start="6" end="9" />

                <Line start="7" end="8" />
                <Line start="7" end="10" />

                <Line start="8" end="9" />
                <Line start="8" end="10" />

                <Line start="9" end="10" />

                <svg className="name" x="53%" y="45%">
                    <text x="-400" y="70">Nathaniel</text>
                </svg>

                <svg className="name" x="50%" y="60%">
                    <text x="-225" y="70">Trojian</text>
                </svg>

                <Circle node="1" type="A" />
                <Circle node="2" type="D" />
                <Circle node="3" type="B" />
                <Circle node="4" type="C" />
                <Circle node="5" type="A" />
                <Circle node="6" type="A" />
                <Circle node="7" type="B" />
                <Circle node="8" type="D" />
                <Circle node="9" type="C" />
                <Circle node="10" type="A" />
            </svg>
            <ReactTooltip id='svg-tooltip' place="top" type="dark" effect="solid" />
        </div>
    )
}
export default LandingPage