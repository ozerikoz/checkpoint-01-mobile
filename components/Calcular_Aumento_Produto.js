export default function CalcularAumentoProduto(valorProduto, aumentoPercentualProduto){
    valorProduto = Number.parseFloat(valorProduto); 
    aumentoPercentualProduto = Number.parseFloat(aumentoPercentualProduto); 

    return valorProduto + (valorProduto * (aumentoPercentualProduto/100));
}