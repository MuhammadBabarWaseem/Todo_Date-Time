var list=[];
var input=document.getElementById('inp');
var todoList=document.getElementById('todoList');


document.getElementById('btn').addEventListener('click', function(e){
    var today = new Date();
    var time = today.getHours()+ ':'+ today.getMinutes() + ':' +today.getSeconds();
    var date=new Date();
    var lol= date.getDate() + '/'+(date.getMonth()+1) + '/' +date.getFullYear();

    e.preventDefault();    
    
       list.push(input.value + '  '+ time + ', '+lol);
        input.value='';
        showList();

      
          
});


function showList(){
   
    // console.log(list);
    todoList.innerHTML='';
    list.forEach(function(n,index){
    todoList.innerHTML +='<li id=liID'+index+'>' +n+
    '<a onclick=editItem('+index+') >Edit</a> <a onclick=deleteItem('+index+')>Delete</a><a onclick=markDone('+index+')>Complete</a></li>';
   
});

}

function deleteItem(index){
    // console.log(index)
    list.splice(index,1);
    showList();
}


function delAll(){
    list = [];
    showList();
}

function editItem(index){
    // console.log(index)
    var editValue = prompt('Enter Value To Update');
    list.splice(index,1,editValue);
    showList();
}

function markDone(index){
    
    var element = document.getElementById('liID'+index);
    
    element.classList.add('completed-btn')

    if(element.classList[0]==='completed-btn'){
    
        var todo=element.parentElement;
        // localCompletedTodo(todo);
        todo.classList.toggle('completed');
      }

}



