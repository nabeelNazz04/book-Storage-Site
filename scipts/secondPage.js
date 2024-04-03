var selectedBooks=JSON.parse(localStorage.getItem('selectedBooks'))||[];
      function addBook(title,author){
        // let selectedBooks=JSON.parse(localStorage.getItem('selectedBooks'))||[];
          selectedBooks.push({title:title,author:author});
          updateLocalStorage();
        //redirect to the main page
        window.location.href="mainPage.html";
      }
      function updateLocalStorage(){
        localStorage.setItem('selectedBooks',JSON.stringify(selectedBooks));
      }