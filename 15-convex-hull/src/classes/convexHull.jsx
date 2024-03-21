const X_OFFSET = 13
const Y_OFFSET = 12

export const findConvexHull = (points) => {
    points = sortPoints(points)
    let hull = []
    hull.push(points[0])
    hull.push(points[1])
    for(let i = 2; i < points.length; i++){
        let top = hull.pop()
        while(ccw(hull[hull.length-1],top,points[i],false) <= 0){
            top = hull.pop()
        }
        hull.push(top)
        hull.push(points[i])
    }
    return hull
}

export const addDot = (event,dots,points,document) => {
    let [x,y] = getClickCoords(event,document)

    let newDot = (
        <circle
            key={dots.length+1}
            cx={x}
            cy={y}
            r="1.5"
            stroke="black"
            strokeWidth="1"
            fill="black"
        />
    )
    let newPoint = {
        x,
        y:-(y-500)%500,
        angle: -1
    }
    return [[...dots,newDot],[...points,newPoint]]
}

export const getBorder = (hull) => {
    let m = `M ${hull[0].x} ${500 - hull[0].y}`
    for(let i = 1; i < hull.length; i++){
        const l = `L ${hull[i].x} ${500 - hull[i].y}`
        m = m + l;
    }
    const l = `L ${hull[0].x} ${500 - hull[0].y} Z`
    m = m + l
    return m
}

const getClickCoords = (event,document) => {
    let e = event.target;
    if(e.tagName == 'path'){
        e = document.getElementById('canvas')
    }
    const dim = e.getBoundingClientRect();

    const x = event.clientX - dim.left - X_OFFSET;
    const y = event.clientY - dim.top - Y_OFFSET;
    return [x, y];
}

const ccw = (a,b,c,visual) => {
    if(visual){
        console.log("hello")
        sleep(1000)
    }
    const area = (b.x-a.x)*(c.y-a.y) - (b.y-a.y)*(c.x-a.x)
    if(area > 0) return 1  // counter clockwise
    if(area < 0) return -1 // clockwise
    return 0               // colinear
}

const calculateAngles = (points) => {
    let ancor = points[0]
    let x2 = ancor.x
    let y2 = ancor.y
    for(let i = 1; i < points.length; i++){
        let {x,y} = points[i]
        let xDif = x - x2
        let yDif = y - y2
        const angle = Math.acos(xDif/Math.sqrt((xDif*xDif)+(yDif*yDif)))
        points[i].angle = angle * (180/Math.PI)
    }
}

export const findConvexHullVisual = (points,setHull) => {
    points = sortPoints(points)
    let hull = []
    hull.push(points[0])
    hull.push(points[1])
    setHull(hull)
    for(let i = 2; i < points.length; i++){
        let top = hull.pop()
        setHull(hull)
        while(ccw(hull[hull.length-1],top,points[i],true) <= 0){
            top = hull.pop()
            setHull(hull)
        }
        hull.push(top)
        hull.push(points[i])
        setHull(hull)
    }
    return hull
}


const sortPoints = (points) => {
    points.sort((a,b) => {
        return a.y - b.y
    })
    const ancor = points[0]
    calculateAngles(points)
    const newPoints = points.slice(1,points.length)
    newPoints.sort((a,b) => {
        return a.angle - b.angle
    })   
    points = [ancor,...newPoints]
    return points
}

const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }