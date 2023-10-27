

let nota1 = prompt('Digite a primeira nota...');
let nota2 = prompt('Digite a segunda nota...');
let nota3 = prompt('Digite a terceira nota...');
let nota4 = prompt('Digite a quarta nota...');

mediaNotas = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

Boolean(Notas = nota1 >= 0 && nota1 <= 10
    && nota2 >= 0 && nota2 <= 10
    && nota3 >= 0 && nota3 <= 10
    && nota4 >= 0 && nota4 <= 10)


    if (Notas)
    {
        media = ( Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) )/ 4;
    
        
        if (media < 5)
        {
            resultado = "Reprovado";    
        }
        else if (media > 6)
        {
            resultado = "Aprovado";
        }
        else 
        {
            resultado = "Em recuperação";
        }
    
    
        alert(`Você ficou com média ${media}. Resultado: ${resultado}`);
    }
    else
    {
        alert("Digite somente notas entre 0 e 10.");
    }





  