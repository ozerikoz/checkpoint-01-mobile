import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import CalcularAumentoProduto from './components/Calcular_Aumento_Produto';
import ResultadoAumentoProduto from './components/Resultado';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState(0.0);
  const [aumentoPercentualProduto, setAumentoPercentualProduto] = useState(0.0);
  const [valorResultado, setValorResultado] = useState();

  return (
    <View style={styles.container}>
      <Text>Calculadora de porcentagem</Text>
      <TextInput onChangeText={setNomeProduto} value={nomeProduto} placeholder='Digite o nome do produto' keyboardType='text'/>
      <TextInput onChangeText={setValorProduto} value={valorProduto} placeholder='Digite o valor original do produto' keyboardType='numeric'/>
      <TextInput onChangeText={setAumentoPercentualProduto} value={aumentoPercentualProduto} placeholder='Digite a porcentagem% de aumento do produto' keyboardType='numeric'/> 
      <Button title='Calcular' onPress={()=>{setValorResultado(CalcularAumentoProduto(valorProduto, aumentoPercentualProduto))}}/>
    { (valorResultado == null) ? <></> : <ResultadoAumentoProduto valorOriginalProduto={valorProduto} aumentoPercentualProduto={aumentoPercentualProduto} novoValorProduto={valorResultado} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
