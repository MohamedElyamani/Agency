// ده السطر الي بحدد منه النقطه الي انا عايز اوصل عندها عشان اعمل الاكشن
let scrollPoint = $('.scrollPoint').offset().top;

// لما بعمل سكرول في الشاشه كلها بيحصل فانكشن

$(window).scroll(function(){
    let scrollForNav = $(window).scrollTop();
/* بنعمل شرط لو السكرول الي عملته اكبر من النقطة الي انا عايز اوصلها ببدأ اعمل الاكشن الي انا عايزة 
فالشرط بيكون علي الناف بار نفسه
*/
        if(scrollForNav > scrollPoint){
            $('.navbar').css('background' , '#212529')
            $('.navbar .navbar-nav a').css('color' , '#fff')
        } else{
            $('.navbar').css('background' , 'transparent')
            $('.navbar .navbar-nav a').css('color' , '#fff')
        }
})

$(window).scroll(function(){

    $('section').each(function(){
        if($(window).scrollTop() >= $(this).offset().top){
            let secID = $(this).attr('id');

            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link [data-scroll="'+ secID +'"]').addClass('active')
        }
    })


})
