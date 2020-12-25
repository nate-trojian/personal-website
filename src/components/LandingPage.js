import React from 'react'

const lineMap = {
    "1": ["18%", "62%"],
    "2": ["40%", "18%"],
    "3": ["53%", "35%"],
    "4": ["50%", "50%"],
    "5": ["calc(50% + 55px)", "50%"],
    "6": ["55%", "13%"],
    "7": ["67%", "75%"],
    "8": ["71%", "49%"],
    "9": ["75%", "20%"],
    "10": ["90%", "35%"],
}

const Line = (data) => {
    var s = lineMap[data["start"]]
    var e = lineMap[data["end"]]
    return (
        <line className="edge" x1={s[0]} y1={s[1]} x2={e[0]} y2={e[1]} />
    )
}

const Circle = (data) => {
    var n = lineMap[data["node"]]
    return (
        <circle className="node" cx={n[0]} cy={n[1]} fill={data['fill'] || 'none'} />
    )
}

const LandingPage = () => {
    return (
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
            
            <Circle node="1" fill="green" />
            <Circle node="2" fill="#a2c0d9" />
            
            <svg x="53%" y="35%">
                <text className="name" x="-400" y="70">Nathaniel</text>
                <circle className="node" cx="0" cy="0" fill="red" />
            </svg>
            
            <svg x="50%" y="50%">
                <line className="edge" x1="0" y1="0" x2="55" y2="0" />
                <text className="name" x="-225" y="70">Trojian</text>
                <circle className="node" cx="0" cy="0" fill="#ffbf58" />
                <circle className="node" cx="55" cy="0" fill="green" />
            </svg>

            <Circle node="6" fill="green" />
            <Circle node="7" fill="red" />
            <Circle node="8" fill="#a2c0d9" />
            <Circle node="9" fill="#ffbf58" />
            <Circle node="10" fill="green" />
        </svg>
    )
}
export default LandingPage