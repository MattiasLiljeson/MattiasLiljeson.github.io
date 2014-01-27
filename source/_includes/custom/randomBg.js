$(document).ready(function(){
    var classCycle=['images/base.jpg','images/artificialLife.gif'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

});