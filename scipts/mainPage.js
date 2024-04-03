let selectedBooks=JSON.parse(localStorage.getItem('selectedBooks'))||[];
let clickedBookContainer=document.querySelector('.clickedBookContainer');
if(selectedBooks.length>0){
clickedBookContainer.innerHTML='<h2>Selected Books</h2>';
  selectedBooks.forEach(function(book){
    clickedBookContainer.innerHTML+='<p class="title">Title:'+book.title+'</p>'+
                                    '<div class="border-bottom styles">Author:'+book.author+'</div>';
    
  });
}
else{
clickedBookContainer.innerHTML='<p>No Books Selected</p>';
}
function removeBook(index){
selectedBooks.splice(index,1);
updateLocalStorage();
refreshDisplay();
}
function updateLocalStorage(){
localStorage.setItem('selectedBooks',JSON.stringify(selectedBooks));
}
function clearLocalStorage(){
localStorage.clear('selectedBooks');
location.reload();//Reload the page
}