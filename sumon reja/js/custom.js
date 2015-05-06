

    $(document).ready(function() {
     
$("#owl-demo").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    pagination:false,
    navigationText : false,
    singleItem:true
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });
 
});
// $(document).ready(function(){
//     $(".moreitem").change(function(){
//       window.location.href = $(this).find("option:selected").attr("id") + '.html';
//     });
// });
