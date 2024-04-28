import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>App</Text>
                        <Text style={styles.titleText}>Estelar</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Nave Espacial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Mapa Estelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Imagens Diárias</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    routeCard: {
        flex: 0.12,
        marginLeft: 30,
        marginRight: 30,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        
    },
    titleText: {
        
        fontSize: 40,
        color: "white",
        fontWeight: "bold"
       
       
        
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#D11583",
        alignItems: "center",
        justifyContent: "center"
    }
  }
);