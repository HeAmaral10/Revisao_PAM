import React, { useState } from 'react';
import { View, Dimensions, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { CheckBox } from 'react-native-web';
import google from '../imagens/Google.png';
import facebook from '../imagens/Facebook.png';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

const { width } = Dimensions.get('window');


export default function TelaLogin({ onGooglePress, onFacebookPress, onForgotPasswordPress}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10, marginLeft: 5 }}>
                <ArrowLeft size={24} color="#14c871" />
            </TouchableOpacity>
            <Text style={{ fontSize: 40, color: '#000000', fontWeight: 'bold', textAlign: 'left', marginTop: 10, marginLeft: 5 }}>
                Acesse
            </Text>
            <Text style={{ fontSize: 10, color: '#000000', textAlign: 'left', marginLeft: 5, marginBottom: 20 }}>
                com E-mail e senha
            </Text>

            <Text style={{ fontSize: 16, color: '#000000', textAlign: 'left', marginTop: 10, marginLeft: 5 }}>
                E-mail
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={{ fontSize: 16, color: '#000000', textAlign: 'left', marginTop: 10, marginLeft: 5 }}>
                Senha
            </Text>

            <View style={styles.senhaContainer}>
                <TextInput
                    style={styles.inputSenha}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!mostrarSenha}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                    <Text style={styles.iconeOlho}>{mostrarSenha ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    style={{ marginRight: 6, borderColor: '#14c871', borderWidth: 1, borderRadius: 4, width: 20, height: 20 }}
                />
                <Text style={{ fontSize: 14, color: '#000000' }}>Lembrar senha</Text>
                <TouchableOpacity onPress={onForgotPasswordPress} style={{ marginLeft: 'auto' }}>
                    <Text style={{ fontSize: 14, color: '#000000' }}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <TouchableOpacity style={styles.acessar} activeOpacity={0.8}>
                    <Text style={styles.acessarTexto}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cadastrar} activeOpacity={0.8}>
                    <Text style={styles.cadastrarTexto}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.linhaContainer}>
                <View style={styles.linha} />
                <Text style={styles.ouContinue}>Ou continue com</Text>
                <View style={styles.linha} />
            </View>

            <View style={styles.socialContainer}>
                <TouchableOpacity onPress={onGooglePress} style={styles.socialBotao}>
                    <Image source={google} style={styles.socialIcone} resizeMode='contain'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onFacebookPress} style={styles.socialBotao}>
                    <Image source={facebook} style={styles.socialIcone} resizeMode='contain'/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#dbdbdb',
    },
    senhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: '#F9FAFB',
        paddingRight: 10,
    },
    inputSenha: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        color: '#dbdbdb',
    },
    iconeOlho: {
        fontSize: 20,
        color: '#6B7280',
    },
    acessar: {
        flex: 1,
        height: 50,      
        marginRight: 8,
        borderRadius: 8,
        backgroundColor: '#10B981',
        alignItems: 'center',
        justifyContent: 'center',
    },
    acessarTexto: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    cadastrar: {
        flex: 1,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#10B981',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cadastrarTexto: {
        color: '#1F2937',
        fontSize: 16,
    },
    linhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    linha: {
        flex: 1,
        height: 1,
        backgroundColor: '#D1D5DB',
    },
    ouContinue: {
        marginHorizontal: 8,
        fontSize: 14,
        color: '#000000',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    socialBotao: {
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    socialIcone: {
        width: 36,
        height: 36,
    },
});
