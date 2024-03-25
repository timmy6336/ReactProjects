const START = 's'
const END = 'e'
const MOUSE = 'mouse'
const OPEN = 'o'

const Square = ({square,index,updateNode,pressedKeys}) => {
  const {open,isStart,isEnd,onPath,expanded} = square
    const handleClick = (event) => {
      let close = pressedKeys[OPEN]
        let type = 'open'
        if(pressedKeys[START]){
          type = 'start'
        }
        else if(pressedKeys[END]){
          type = 'end'
        }
        updateNode(index,type,close)
    }
    const handleScroll = (event) => {
      if(pressedKeys[MOUSE]){
        handleClick(event)
      }
    }

    const colorCheck = () =>{
      if(isStart){
        return 'green'
      }
      if(isEnd){
        return 'red'
      }
      if(onPath){
        return '	#B22222'
      }
      if(expanded){
        return '#00ffff'
      }
      return open?'white':'black'
    }
  return (
    <div className="square" style={{background: colorCheck()}} onMouseEnter={handleScroll} onClick={handleClick}/>
  )
}

export default Square