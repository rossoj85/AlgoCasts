// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

 // here we are using 2015 class 
 class Queue{
    //constructor is automatically called whenever we define a new instance
    constructor(){
      this.data=[]
    }
    add(data){
      this.data.unshift(data);
    }
    remove(){
      return this.data.pop();
    }
    
  }
module.exports = Queue;
