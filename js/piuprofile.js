var lks = 0;
$(document).ready(function() {
    $(".closebutton").click(closePiu);
    $(".editbutton").click(editPiu);
    $(".expandbutton").click(expandPiu);
    $(".likebutton").click(likePiu);
});

function likePiu(){
    if($(this).hasClass("likebuttondefault")){
        lks = 1;
    }
    if($(this).hasClass("likebuttonactive")){
        lks = -1;
    }
    $(this).toggleClass("likebuttonactive");
    var qtdlikes = $(this).closest(".likesbarra").find(".likes");
    $(qtdlikes).text(parseInt($(qtdlikes).text()) + lks);
    console.log(lks);
}

function closePiu(){
    $(this).closest(".postao").fadeOut(".postao");
}

function editPiu(){
    var oldtext = $(this).closest(".size").find(".piu").text();
    var piu = $(this).closest(".size").find(".piu");
    var editabletext = $('<textarea/>').prop({class: "editbox"})
    editabletext.val(oldtext);
    $(piu).replaceWith(editabletext);
    editabletext.focus();
    $(editabletext).blur(function(){
        console.log("aaaaa");
        var newtext = $(this).val();
        var novopiu = $("<div>").prop({class: "piu"});
        novopiu.text(newtext);
        $(this).replaceWith(novopiu);
    })
}

function expandPiu(){
    var post = $(this).closest(".postao").find(".post");
    $(post).toggleClass("expand");
}