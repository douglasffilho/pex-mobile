import { View, ImageBackground, StyleSheet, Text } from "react-native";

import frameImage from '../assets/Frame.png';
import vectorImage from '../assets/Vector.png';
import buttonImage from '../assets/Circle.png';

const Home = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={vectorImage} style={styles.vectorImageBackground} imageStyle={styles.vectorImageSize} />
        <ImageBackground source={frameImage} style={styles.frameImageBackground} imageStyle={styles.frameImageSize} />
        <View style={styles.welcomeView} >
            <Text style={styles.welcomeTitle} >Bem vindo a PEX</Text>
            <Text style={styles.welcomeMessage} >Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.</Text>
        </View>
        <ImageBackground source={buttonImage} style={styles.buttonImageBackground} imageStyle={styles.buttonImageSize} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#EFEFEF'
    },
    frameImageBackground: {
        width: 224,
        height: 121,
        marginTop: 241,
        position: 'absolute',
        resizeMode: 'contain',
        left: 76
    },
    frameImageSize: {
        height: 121,
        width: 224
    },
    vectorImageBackground: {
        width: 285,
        height: 443,
        marginTop: -17,
        position: 'absolute',
        resizeMode: 'contain',
        left: 22
    },
    vectorImageSize: {
        height: 443,
        width: 285
    },
    welcomeView: {
        flex: 1,
        width: 311,
        height: 117,
        marginTop: 484
    },
    welcomeTitle: {
        width: 311,
        height: 41,
        fontFamily: 'PlusJakartaDisplay',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    welcomeMessage: {
        width: 311,
        height: 60,
        fontFamily: 'PlusJakartaDisplay',
        fontSize: 14,
        fontWeight: 'normal',
        color: '#999999',
        textAlign: 'center',
        marginTop: 16
    },
    buttonImageBackground: {
        width: 62,
        height: 62,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 63,
        right: 47
    },
    buttonImageSize: {
        height: 62,
        width: 62
    }
});

export default Home;
