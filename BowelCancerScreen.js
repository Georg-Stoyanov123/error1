import * as React from 'react'
import {Text, StyleSheet, Platform, OS, Dimensions, StatusBar, TouchableOpacity} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-view';
import LinearGradient from 'react-native-linear-gradient'
export default class BowelCancerScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeAreaViewStyle}>

                <TouchableOpacity style={styles.symptomStyle1}><Text style={styles.textStyle}>Symptoms</Text></TouchableOpacity>
                <TouchableOpacity style={styles.precautionStyle1}><Text style={styles.textStyle}>Precautions</Text></TouchableOpacity>
                <TouchableOpacity style={styles.treatmentStyle1}><Text style={styles.textStyle}>Treatments</Text></TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    safeAreaViewStyle:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    symptomStyle1:{
        flex: 0.2,
    },
    precautionStyle1:{
        flex: 0.2,
    },
    treatmentStyle1:{
        flex: 0.2,
    }
})