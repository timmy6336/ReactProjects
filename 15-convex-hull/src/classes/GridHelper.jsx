export const editSquares = (gridSize) => {
    let newSquares = []
    for(let i = 0; i < gridSize*gridSize; i++){
        newSquares[i] = {
            id:i,
            open:true,
            isStart:false,
            isEnd:false, 
            onPath:false,
            expanded:false
        }
    }
    return newSquares
}

export const updateOpenState = (index,type,close,squares) => {
    const newSquares = [...squares]
    let isStart = false
    let isEnd = false
    if(type == 'start'){
        newSquares.forEach((square) => {
            if(square.id == index){square.isStart = true}
            else{square.isStart = false}
            return square
        })
        isStart = true
    }
    else if(type == 'end'){
        newSquares.forEach((square) => {
            if(square.id == index){square.isEnd = true}
            else{square.isEnd = false}
            return square
        })
        isEnd = true
    }
    else{
        newSquares[index].open = close
    }
    return [newSquares,isStart,isEnd]
}