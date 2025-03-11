import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
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
       <Image
        style={styles.imagem}
        source={require('./assets/calculadora.png')}
      />
        <View style={styles.containerFormulario}>
          <Text style={styles.title}>Calculadora de porcentagem</Text>
          <TextInput style={styles.inputContainer} onChangeText={setNomeProduto} value={nomeProduto} placeholder='Digite o nome do produto' keyboardType='text'/>
          <TextInput style={styles.inputContainer} onChangeText={setValorProduto} value={valorProduto} placeholder='Digite o valor original do produto' keyboardType='numeric'/>
          <TextInput style={styles.inputContainer} onChangeText={setAumentoPercentualProduto} value={aumentoPercentualProduto} placeholder='Digite a porcentagem% de aumento do produto' keyboardType='numeric'/> 
          <Button style={styles.calcButton} title='Calcular' onPress={()=>{setValorResultado(CalcularAumentoProduto(valorProduto, aumentoPercentualProduto))}}/>
      </View>
      { (valorResultado == null) ? <></> : <ResultadoAumentoProduto valorOriginalProduto={valorProduto} aumentoPercentualProduto={aumentoPercentualProduto} novoValorProduto={valorResultado} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerFormulario: {
    padding: 16,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 16
  },

  inputContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 16,
    width: '100vw'
  },

  title: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold'
  },

  calcButton: {
    marginBottom: 16
  },

  imagem: {
    width: 100,
    height: 150
  }
});
