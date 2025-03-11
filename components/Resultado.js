import { View, Text } from "react-native";

export default function ResultadoAumentoProduto({valorOriginalProduto, aumentoPercentualProduto, novoValorProduto}){
 return <View>
    <Text>Resultado:</Text>
    <Text>Valor original do produto: R${valorOriginalProduto}</Text>
    <Text>O percentual de aumento do produto: {aumentoPercentualProduto}%</Text>
    <Text>O novo valor do produto: R${novoValorProduto}</Text>
    <Text>O Valor de aumento do produto: + R${novoValorProduto-valorOriginalProduto}</Text>
 </View>
}