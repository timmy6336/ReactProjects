export class SearchNode  {
    static nextorder = 0
    static increaseNextOrder = () =>{
        this.nextorder++
    }
    static getNextOrder = () => {
        return this.getNextOrder
    }
    constructor(parent,square,heuristic){
        this.parent = parent
        this.square = square
        this.heuristic = heuristic
        if(parent == null){
            this.level = 0
        }else{
            this.level = parent.getLevel() +1
        }
        this.order = SearchNode.nextorder
        SearchNode.nextorder++
    }
    getOrder = () =>{
        return this.order
    }
    getLevel = () => {
        return this.level
    }
    getSquare = () => {
        return this.square
    }
    getHeuristic = () => {
        return this.heuristic
    }
    getParent = () => {
        return this.parent
    }
    compareTo(otherNode){
        let result = 0
        result = (this.getHeuristic() + this.getLevel()) - (otherNode.getHeuristic() + otherNode.getLevel())
        if(result === 0){
            result = this.getOrder() - otherNode.getOrder()
        }
        return result
    }
    
}