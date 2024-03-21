import { useEffect, useState } from "react";
import { addDot, findConvexHull, findConvexHullVisual, getBorder } from "../classes/convexHull";

const Canvas = () => {
    const [dots,setDots] = useState([])
    const [points,setPoints] = useState([])
    const [hull,setHull] = useState([])
    const [line,setLine] = useState('')
    const [showHull,setShowHull] = useState(true)

    useEffect(()=>{
        if(dots.length > 2){
            setHull(findConvexHull(points))
        }
    },[dots])

    useEffect(() => {
        if(hull.length > 0){
            setLine(getBorder(hull))
        }
    },[hull])

    const handleClick = (event) =>{
        const [newDots,newPoints] = addDot(event,dots,points,document)
        setDots(newDots)
        setPoints(newPoints)
    }

    const showHullCreation = () => {
        findConvexHullVisual(points,setHull)
    }

    return (
        <div>
            <div>
                <h2>Click to add dot</h2>
                <svg className="canvas" id="canvas" onClick={handleClick}>
                    {dots}
                    {showHull && <path id="border" d={line} stroke="red" fill="transparent"/>}
                </svg>
            </div>
            <button className="btn" onClick={() => setShowHull(!showHull)}>Show Convex Hull</button>
            {/* <button className="btn" onClick={() => showHullCreation()}>Show Hull Creation</button>*/}
        </div>
    )
}

export default Canvas