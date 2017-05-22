$(document).ready(function(){

/////// EXPERIENCE DISPLAY
    
    $(".exper").click(function(){
        $(".experience").fadeIn(600);
    });

    $(".closeScreenExperience").click(function(){
        $(".experience").fadeOut();
    });

/////// COMPETENCES DISPLAY
    $(".skill").click(function(){
        $(".competences").fadeIn(600);
    });

    $(".closeScreenCompetences").click(function(){
        $(".competences").fadeOut();
    });

///////FOLIO DISPLAY
    $(".portFolio").click(function(){
        $(".screenFolio").fadeIn(600);
    });

    $(".closeScreenFolio").click(function(){
        $(".screenFolio").fadeOut();
    });

/////// Folio img DISPLAY
    $("#img01link").click(function(){
        $("#img01").fadeIn(600);
    });
    $("#img02link").click(function(){
        $("#img02").fadeIn(600);
    });
    $("#img03link").click(function(){
        $("#img03").fadeIn(600);
    });
     $("#img04link").click(function(){
        $("#img04").fadeIn(600);
    });
    $("#img05link").click(function(){
        $("#img05").fadeIn(600);
    });
    $("#img06link").click(function(){
        $("#img06").fadeIn(600);
    });
      $("#img07link").click(function(){
        $("#img07").fadeIn(600);
    });
    $("#img08link").click(function(){
        $("#img08").fadeIn(600);
    });
    $("#img09link").click(function(){
        $("#img09").fadeIn(600);
    });
    $(".imgLightbox").click(function(){
        $(".lightbox").fadeOut();
    });

/////// CONTACT DISPLAY
    $('.lienContact').click(function(){
        $('.contact').fadeIn(600);
    });

    $('.closeScreenContact').click(function(){
        $('.contact').fadeOut();
    });

/////// Carousel experience
    $('.carsl').slick({
        speed: 500,
        infinite: false,
        dots: true,
        centerMode: true,
        slidesToShow:1,
        draggable: true,
        variableWidth: true,
        accessibility: true
    });

/////// Carousel Competences 
   $('.slideCompetences').slick({
        speed: 500,
        infinite: false,
        dots: true,
        centerMode: true,
        slidesToShow:1,
        draggable: true,
        variableWidth: true,
        accessibility: true
    });

/////// Carousel Folio
   $('.slideFolio').slick({
        autoplay: true,
        autoplaySpeed:1800,
        speed: 500,
        infinite: true,
        dots: true,
        slidesToShow:1,
        draggable: true,
        accessibility: true
    });
    
//// fermer les lightbox avec echap
   $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
            $(".lightbox").fadeOut();
            $(".screen").fadeOut();
        }
    });
    
    
});


