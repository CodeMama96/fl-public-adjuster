class Node {
    constructor(data) {
        this.data = data; //data property
        this.next = null; //next property
  
        console.log(data)
        
      }
  
      
  }
  
  const firstNode = new Node('i am a new instance')
  // const nextNode = this.Node
  // console.log(nextNode)
  
  console.log(firstNode.data);
  console.log(firstNode.next); //prints out next Node property
  
  module.exports = Node;