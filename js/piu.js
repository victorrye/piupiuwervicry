    var campo = $("#piuform");
    var texto = campo.val();
    var qtdChar = texto.length;
    $("#contador-char").text(qtdChar);
    var lks = 0;
    var i = 0;

$(document).ready(function() {
    disableInicial();
    contaCaracteres();
    $("#postbutton").click(postarPiu);
    $("#postbutton").click(resetPiu);
    $("#postbutton").click(clickColor);
    $(".likebutton").click(likePiu);
    $(".closebutton").click(closePiu);
    $(".editbutton").click(editPiu);
});

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
    $(".contador").addClass(".abaixode140");
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
    var piutemp = '<div class="post"> \
                    <img src="images/homem.png" height = 50px ID="imagemperfil2"> \
                    <div ID="size"> \
                        <div class="identifier"> \
                            <div class="name" ID="name2">John Smith</div> \
                            <div class="handle" ID="handle2">@TheGenericMan</div> \
                            <div class="handle" ID="timedot" >·</div> \
                            <div class="handle">just now</div> \
                        </div>  \
                        <div class="piu">texto</div> \
                    </div> \
                </div> \
                <div class="linhahorizontal2" ID="linhavermelha"></div> ';
    var piu = $(piutemp.replace("texto", texto));
    $(".piusgerais").prepend(piu);
    console.log(texto);
}

function likePiu(){
    if(i % 2 == 0){
        lks = 1;
    }
    if(i % 2 != 0){
        lks = -1;
    }
    $(this).toggleClass("likebuttonactive");
    var qtdlikes = $(this).closest(".likesbarra").children(".likes");
    $(qtdlikes).text(parseInt($(qtdlikes).text()) + lks);
    console.log(lks);
    console.log(i);
    i += 1;
}

function closePiu(){
    $(this).closest(".postao").remove(".postao");
}
3
function editPiu(){
    var oldtext = $(this).closest(".size").find(".piu").text();
    var piu = $(this).closest(".size").find(".piu");
    var editabletext = $('<textarea/>').prop({class: "editbox"})
    $(piu).replaceWith(editabletext);
    editabletext.val(oldtext);

}
