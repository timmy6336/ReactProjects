import React, { useEffect, useState} from 'react'
import { findPath } from '../classes/search'
import Square from './Square'
import { editSquares, updateOpenState } from '../classes/GridHelper'

const Grid = () => {
    const [gridSize,setGridSize] = useState(70)
    const [squares,setSquares] = useState(editSquares(gridSize))
    const [pressedKeys,setPressedKeys] = useState({})
    const [hasStart,setHasStart] = useState(false)
    const [hasEnd,setHasEnd] = useState(false)
    const [path,setPath] = useState([])
    const [expanded,setExpanded] = useState(null)
    const [isSetPath,setIsSetPath] = useState(false)
    const clear = () => {
        setSquares(editSquares(gridSize))
        setHasStart(false)
        setHasEnd(false)
        setPath([])
        setExpanded(null)
        setIsSetPath(false)
    }
    window.onmousedown = (event) => {
        let newPressed = pressedKeys
        newPressed['mouse'] = true
        setPressedKeys(newPressed)
    }
    window.onmouseup = () => {
        let newPressed = pressedKeys
        newPressed['mouse'] = false
        setPressedKeys(newPressed)
    }
    window.onkeydown = (e) => {
        let newPressed = pressedKeys
        newPressed[e.key] = true
        setPressedKeys(newPressed)
    }
    window.onkeyup = (e) => {
        let newPressed = pressedKeys
        newPressed[e.key] = false
        setPressedKeys(newPressed)
    }

    const updateNode = (index,type,close) => {
        const [newSquares,isStart,isEnd] = updateOpenState(index,type,close,squares)
        setIsSetPath(false)
        setSquares([...newSquares])
        if(isStart){setHasStart(true)}
        if(isEnd){setHasEnd(true)}
    }

    useEffect(() =>{
        const newSquares = [...squares]
        for(const square of newSquares){
            square.onPath = false
            square.expanded = false
        }
        for(const index of path){
            newSquares[index].onPath = true
        }
        if(expanded != null){
            for(const index of expanded){
                newSquares[index].expanded = true
            }
        }
        setIsSetPath(true)
        setSquares([...newSquares])

    },[path])

    useEffect(()=> {
        if(hasStart && hasEnd && !isSetPath){
            const [newPath,newExpanded] = findPath(squares,gridSize)
            setPath([])
            if(newPath != null){
                setPath([...newPath])
            }
            setExpanded(newExpanded)
        }
    },[squares])

    return (
        <div>
            <div className='grid' id='grid' 
            style={{ 'gridTemplateColumns': `repeat(${gridSize},auto)`}}>
            {squares.map((square,index) => {
                const {id} = square
                return <Square key={id} square={square} index={index} updateNode={updateNode} pressedKeys={pressedKeys}/>
            })}
            </div>
            <button className='btn' onClick={(clear)}>Clear</button>
        </div>
    )
}

export default Grid