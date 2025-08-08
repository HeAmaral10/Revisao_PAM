import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import dog from '../imagens/casual_dog.png';
import google from '../imagens/Google.png';

export default function TelaPrincipal({ onGooglePress, onOtherPress }) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.conteudo}>
        <Image source={dog} />

        <Text style={styles.titulo}>Ótimo dia!</Text>
        <Text style={styles.subtitulo}>Como deseja acessar?</Text>

        <TouchableOpacity style={styles.googleBotao} activeOpacity={0.8} onPress={onGooglePress}>
          <View style={styles.google}>
            <Image source={google} style={styles.googleIcone} resizeMode='contain'/>
            <Text style={styles.googleTexto}>Como deseja acessar?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcaoBotao} activeOpacity={0.8} onPress={onOtherPress}>
          <Text style={styles.opcaoTexto}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    marginTop: 70,
  },
  titulo: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 14,
    color: '#1F2937',
    marginBottom: 24,
  },
  googleBotao: {
    width: '90%',
    marginTop: 24,
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    elevation: 2,
  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  googleIcone: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginRight: 65,
  },
  googleTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  opcaoBotao: {
    width: '90%',
    height: 60,
    marginTop: 12,
    borderRadius: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcaoTexto: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: '600',
  },
});
