    var campo = $("#piuform");
    var texto = campo.val();
    var qtdChar = texto.length;
    var lks = 0;
    $("#contador-char").text(qtdChar);
    $(".likebutton").click(likePiu);

$(document).ready(function() {
    disableInicial();
    contaCaracteres();
    $("#postbutton").click(postarPiu);
    $("#postbutton").click(resetPiu);
    $("#postbutton").click(clickColor);
    $(".closebutton").click(closePiu);
    $(".editbutton").click(editPiu);
    $(".expandbutton").click(expandPiu);
});

function resetLike(){
    $(".likebutton").off("click", likePiu);
    $(".likebutton").on("click", likePiu);
}

resetLike();

function disableInicial(){
    if (qtdChar == 0) {
        $("#postbutton").prop("disabled", true);
        $("#postbutton").removeClass("postbuttondefault");
        $("#postbutton").addClass("postbuttoninvalid");
    }
}

function contaCaracteres() {
    campo.on("input", function() {
        var texto = campo.val();
        var qtdChar = texto.length;
        $("#contador-char").text(qtdChar);
        if(qtdChar > 140) {
            $(".contador").removeClass("abaixode140cont");
            $(".contador").addClass("acimade140cont");
            $("#postbutton").prop("disabled", true);
            $("#postbutton").removeClass("postbuttondefault");
            $("#postbutton").addClass("postbuttoninvalid");
            $("#piuform").removeClass("abaixode140texto");
            $("#piuform").addClass("acimade140texto");
            i = "A mensagem ultrapassa a quantidade de caracteres permitido!";
            erro(i);
        }
        if(qtdChar < 141) {
            $(".contador").removeClass("acimade140cont");
            $(".contador").addClass("abaixode140cont");
            $("#postbutton").prop("disabled", false);
            $("#postbutton").removeClass("postbuttoninvalid");
            $("#postbutton").addClass("postbuttondefault");
            $("#piuform").removeClass("acimade140texto");
            $("#piuform").addClass("abaixode140texto");
            i = "";
            erro(i);

            if (qtdChar == 0) {
                $("#postbutton").prop("disabled", true);
                $("#postbutton").removeClass("postbuttondefault");
                $("#postbutton").addClass("postbuttoninvalid");
                i = "";
                erro(i);
            }
        }
    })
}

function resetPiu() {
    campo.val("");
    $(qtdChar).val(0)
    $("#contador-char").text(qtdChar);
    $(".contador").removeClass("acimade140");
    $(".contador").addClass("abaixode140");
    disableInicial();
}

function clickColor(){
    setTimeout(function(){
        $("#postbutton").toggleClass("postbuttonclicked");
    }, 150)
    $("#postbutton").toggleClass("postbuttonclicked");
}

function erro(erromsg){
    $(".aviso").text(erromsg)
}

function postarPiu(){
    var campo = $("#piuform");
    var texto = campo.val();
    var piutemp = '<div class="postao">\
                    <div class="post">\
                        <img src="images/homem.png" height = 50px ID="imagemperfil2">\
                        <div class="size">\
                            <div class="identifier">\
                                <div class="name" ID="name2">John Smith</div>\
                                <div class="handle" ID="handle2">@TheGenericMan</div>\
                                <div class="handle" ID="timedot" >·</div>\
                                <div class="handle">just now</div>\
                                <div class="buttons">\
                                    <button class="editbutton"></button>\
                                    <button class="closebutton"></button>\
                                </div>\
                            </div>\
                            <div class="piu">texto\
                            </div>\
                            <div class="likesbarra">\
                                <button class="likebuttondefault likebutton"></button>\
                                <span class="likes">0</span>\
                                <button class="expandbutton"></button>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="linhahorizontal2" ID="linhavermelha"></div>\
                </div>';
                
    var piu = $(piutemp.replace("texto", texto));
    $(".piusgerais").prepend(piu);
    $(".likebutton").click(likePiu);
    $(".closebutton").click(closePiu);
    $(".editbutton").click(editPiu);
    $(".likebutton").click(likePiu);
    $(".expandbutton").click(expandPiu);
    resetLike();
}

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
