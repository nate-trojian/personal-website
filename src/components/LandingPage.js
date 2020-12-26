import React from 'react'
import ReactTooltip from 'react-tooltip'

const lineMap = {
    "1": {"cx": "18%", "cy": "62%"},
    "2": {"cx": "40%", "cy": "18%"},
    "3": {"cx": "53%", "cy": "35%"},
    "4": {"cx": "50%", "cy": "50%"},
    "5": {"cx": "calc(50% + 55px)", "cy": "50%"},
    "6": {"cx": "55%", "cy": "13%"},
    "7": {"cx": "67%", "cy": "75%"},
    "8": {"cx": "71%", "cy": "49%"},
    "9": {"cx": "75%", "cy": "20%"},
    "10": {"cx": "90%", "cy": "35%"},
}

const colorMap = {
    "A": {"fill": "green", "data-for": "svg-tooltip", "data-tip": "Blog", "href": "/blog"},
    "B": {"fill": "red", "data-for": "svg-tooltip", "data-tip": "Resume", "href": "/resume"},
    "C": {"fill": "#ffbf58", "data-for": "svg-tooltip", "data-tip": "About Me", "href": "/about"},
    "D": {"fill": "#a2c0d9", "data-for": "svg-tooltip", "data-tip": "Github", "href": "https://github.com/nate-trojian"},
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
    return (
        <a href={c.href}>
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

            <Line start="5" end="7" />
            <Line start="5" end="8" />
            <Line start="5" end="9" />

            <Line start="6" end="9" />

            <Line start="7" end="8" />
            <Line start="7" end="10" />

            <Line start="8" end="9" />
            <Line start="8" end="10" />

            <Line start="9" end="10" />
            
            <Circle node="1" type="A" />
            <Circle node="2" type="D" />

            <svg x="53%" y="35%">
                <text className="name" x="-400" y="70">Nathaniel</text>
                <circle className="node" cx="0" cy="0" {...colorMap["B"]} />
            </svg>
            
            <svg x="50%" y="50%">
                <line className="edge" x1="0" y1="0" x2="55" y2="0" />
                <text className="name" x="-225" y="70">Trojian</text>
                <circle className="node" cx="0" cy="0" {...colorMap["C"]} />
                <circle className="node" cx="55" cy="0" {...colorMap["A"]} />
            </svg>

            <Circle node="6" type="A" />
            <Circle node="7" type="B" />
            <Circle node="8" type="D" />
            <Circle node="9" type="C" />
            <Circle node="10" type="A" />
        </svg>
        <ReactTooltip id='svg-tooltip' place="top" type="dark" effect="solid" componentDidUpdate={ReactTooltip.rebuild()} />
        </div>
    )
}
export default LandingPage