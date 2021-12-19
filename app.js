// Delgetstei ajillah Controller
var uiController = (function(){
  
  
})();
// Sankhuutei ajillah Controller
var financeController = (function(){

})();


// Programmin holbogch Controller
var appController = (function(uiController, financeController){

  var ctrlAddItem = function(){
    // 1. Oruulah ogogdliig delgetsees olj awna

    // 2. Olj awsan ogogdluudee sankhuugiin Controllert damjuulj tend hadgalna.
    alert("Дэлгэцээс өгөгдлөө хүлээж авах хэсэг")
    // 3. Olj awsan ogogdluudee web deeree tohiroh hesegt ni gargana.

    // 4. Togswiig tootsoolno.

    // 5. Etssiin uldegdel tootsoog delgetsend gargana.
  };
  document.querySelector(".add__btn").addEventListener("click", function(){
    ctrlAddItem();
  });
  document.addEventListener("keypress", function(event){
     if(event.keyCode === 13 || event.which === 13){
       ctrlAddItem();
     }
  });

})(uiController, financeController);