$(document).ready(function() {
    piuGet();

});

function piuGet(){
    $.get("http://www.json-generator.com/api/json/get/ceycmRLqWa?indent=2", function(data){
    i = 0;
    console.log("fiz a requisicao");
    console.log(data);
    while (i < data.length){
        
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
        if (data[i].imagem == ""){
            data[i].imagem = "images/defaultpic.png"
        }
        var piu = $(piutemp.replace("texto", data[i].mensagem)
            .replace("John Smith", data[i].nome)
            .replace("@TheGenericMan", data[i].username)
            .replace("images/homem.png", data[i].imagem));
        $(".piusgerais").prepend(piu);
        i += 1;
        };

    $(".likebutton").click(likePiu);
    $(".closebutton").click(closePiu);
    $(".editbutton").click(editPiu);
    $(".likebutton").click(likePiu);
    $(".expandbutton").click(expandPiu);
    resetLike();

    });
};