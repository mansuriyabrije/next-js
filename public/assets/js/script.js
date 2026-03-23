$(document).ready(function(){
    // Menu Js
    $(function(){
        $('#menuOpenBtn').click(function(){
            $('.mobile-menu, #overlay').toggleClass('active');
        });
        $('#closeMenuBtn, #overlay').click(function(){
            $('.mobile-menu, #overlay').removeClass('active');
        });
    });

    // Dropdown Js
     $('.dropdown-btn').click(function(e){
        e.stopPropagation();
        $('.dropdown-menu').not($(this).next()).slideUp(200);
        $(this).next('.dropdown-menu').slideToggle(200);

        $('.dropdown-btn').not(this).removeClass('active');
        $(this).toggleClass('active');
    });
    $(document).click(function(){
        $('.dropdown-menu').slideUp(200);
        $('.dropdown-btn').removeClass('active');
    });
});