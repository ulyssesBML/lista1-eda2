$(document).ready(function(){


    function binary_search(chave,vet){
        setTimeout(function(){

            let meio
            let inf = 0
            let sup = vet.length

            
            meio = parseInt((0 + sup)/2);
            
            if(sup%2==0 && vet[meio] < chave ){
                meio++; 
            }

            if(sup<=1 && vet[meio]!=chave){
                alert("Numero não encontrado")
                return -1
            }
            if (chave == vet[meio]){
                $("#"+vet[meio]).toggleClass("bg-success");
                return meio;
            }
            if (chave < vet[meio]){
                $("#"+vet[meio]).toggleClass("bg-danger");
                binary_search(chave,vet.slice(inf,meio))
            }
            else if (chave > vet[meio]){
                $("#"+vet[meio]).toggleClass("bg-danger");
                binary_search(chave,vet.slice(meio+1,sup))
            }
        }, 500)

    }

    $( "#confirm_button" ).click(function() {
        vet = [4, 14, 23, 38, 42, 55, 63, 70, 74, 97, 100] 
        $("#mytable").toggleClass("bg-secondary");
        var nToFind = $('#input').val();
        binary_search(nToFind,vet);
    });
});
