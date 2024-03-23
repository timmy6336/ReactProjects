import { MinHeap } from "./MinHeap"

export class PriorityQueue {

    constructor() {
        this.queue = new MinHeap()
    }

    enqueue = (node) => {
        if(node === null){
            throw new Error("Invalid Input")
        }
        this.queue.add(node)
    }

    dequeue = () => {
        if(this.queue.isEmpty()){
            throw new Error("Queue is empty!")
        }
        const returnNode = this.queue.remove()
        return returnNode
    }

    isEmpty = () => {
        return this.queue.isEmpty()
    }
}