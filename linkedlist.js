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

// constant space and constant time
var reverseLinkedList = function(list){ // 7 9 
  var ref = null;
  if(list.head.next)
    ref = list.head.next;

  while(ref){
    var temp = list.head;
    console.log(temp);
    list.head = ref;
    ref = ref.next; //null
    if(list.head)
      list.head.next = temp;
  }
  console.log(list.head);
  return list;
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

console.log('\n\n');
list.removeHead();

printAll(list);
console.log(list.contains(10));

console.log('\n\n');
reverseLinkedList(list);
printAll(list);

