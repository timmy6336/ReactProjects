import { PriorityQueue } from "./PriorityQueue"
import { SearchNode } from "./SearchNode"

export const findPath = (squares,size) => {
    let start = -1
    let end = -1
    let grid = []
    let expanded = new Set()
    let fringe = new PriorityQueue()
    squares.map((square) => {
        const {id,open,isStart,isEnd} = square
        if(isStart){start = id}
        if(isEnd){end = id}
        grid[id] = {
            open:open,
            id:id
        }
    })
    let root = new SearchNode(null,grid[start],calcHeuristic(start,end,size))
    fringe.enqueue(root)
    while(!fringe.isEmpty()){
        let currentNode = fringe.dequeue()
        let square = currentNode.getSquare()
        let check = expanded.size
        let id = square.id
        expanded.add(id)
        if(check != expanded.size){
            let heuristic = currentNode.getHeuristic()
            if(heuristic === 0){
                let path = findEndPath(currentNode)
                return [[...path],expanded]
            }
            expand(id,fringe,grid,size,currentNode,end)
        }
    }
    return [null,expanded]
}


const findXYPos = (index,size) => {
    let x = Math.floor(index/size)
    let y = index % size
    return [x,y]
}

const calcHeuristic = (index,end,size) => {
    const [startX,startY] = findXYPos(index,size)
    const [endX,endY] = findXYPos(end,size)
    const xDif = Math.abs(endX-startX)
    const yDif = Math.abs(endY-startY)
    return xDif + yDif
}

const expand = (id,fringe,grid,size,currentNode,end) => {
    let [validL,indL] = getLeft(id,grid,size)
    let [validR,indR] = getRight(id,grid,size)
    let [validU,indU] = getUp(id,grid,size)
    let [validD,indD] = getDown(id,grid,size)
    if(validL){fringe.enqueue(new SearchNode(currentNode,grid[indL],calcHeuristic(indL,end,size)))}
    if(validR){fringe.enqueue(new SearchNode(currentNode,grid[indR],calcHeuristic(indR,end,size)))}
    if(validU){fringe.enqueue(new SearchNode(currentNode,grid[indU],calcHeuristic(indU,end,size)))}
    if(validD){fringe.enqueue(new SearchNode(currentNode,grid[indD],calcHeuristic(indD,end,size)))}
}

const getLeft = (index,grid,size) => {
    if(index % size === 0){return [false,-1]}
    const {open,id} = grid[index-1]
    return [open,id]
}
const getRight = (index,grid,size) => {
    if((index + 1) % size === 0){return [false,-1]}
    const {open,id} = grid[index+1]
    return [open,id]
}
const getUp = (index,grid,size) => {
    if((index - size) < 0){return [false,-1]}
    const {open,id} = grid[index - size]
    return [open,id]
}
const getDown = (index,grid,size) => {
    if((index + size) >= (size*size)){return [false,-1]}
    const {open,id} = grid[index + size]
    return [open,id]
}

const findEndPath = (start) => {
    const path = []
    while(start != null){
        path.push(start.getSquare().id)
        start = start.getParent()
    }
    return path
} 