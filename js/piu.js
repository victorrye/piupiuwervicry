var campo = $("#piuform");
var texto = campo.val();
var qtdChar = texto.length;
$("#contador-char").text(qtdChar)


$(function() {
    disableInicial();
    contaCaracteres();
    $("#postbutton").click(resetPiu);
    $("#postbutton").click(clickColor);
})

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
    
}