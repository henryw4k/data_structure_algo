//Goal: create a linked list and add values to it. Also taking values away. 

var Node = function(num){
  var node = {}
  node.value = num;
  node.next = null;

  return node;
}

var linkedList = function(){
  var obj = {}; //stores all nodes
  obj.head = null;
  obj.tail = null;

  obj.addToTail = function(num){
    var newNode = new Node(num);
    if(!obj.tail){
      //tail doesn't exists meaning there aren't any nodes
      obj.head = newNode;
      obj.tail = newNode;
    } else {
      obj.tail.next = newNode;
      obj.tail = newNode;//the new tail
    }
  };
  obj.removeHead = function(){
    if(obj.head){
      obj.head = obj.head.next;
    }
  };
  obj.contains = function(num){
    var currentNode = obj.head;
    if(currentNode){
      while(currentNode !== null){
        if(currentNode.value === num)
          return true;
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return obj;
}

//******TESTING*******
var list = linkedList();
list.addToTail(5);
list.addToTail(7);
list.addToTail(9);

//print out linkedlist
var printAll = function(list){
  if(list.head){
    var currentNode = list.head;
    while(currentNode !== null){
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
};

printAll(list);
list.removeHead();
printAll(list);
console.log(list.contains(10));

