// komentar
$('.page-scroll').on('click', function(e){
   
   // komentar
   var tujuan =$(this).attr('href')
   
   // tangkap elemen ybs
   var elemenTujuan = $(tujuan);
console.log(elemenTujuan)

   $('body').animate({
      
      scrollTop: elemenTujuan.offset().top - 50
      
   }, 1250, 'easeInOutExpo');
   
   e.preventDefault();
});


// Paralax

$(window).scroll(function() {
   var wScroll = $(this).scrollTop();
   
   $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
   });
   
   // jumbotron
   
      $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
   });
   
      $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
   });
   
   // Portfolio
   if( wScroll > $('.portfolio').offset().top - 250 ) {
      
   $('.portfolio .thumbnail').each(function(i){
      
      setTimeout(function() {
         
   $('.portfolio .thumbnail').eq(i).addClass('muncul');

         
      }, 500 * (i + 1));
      
   });
      
      
   }
   
   
});




