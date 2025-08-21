import{View, TouchableOpacity, Text, StyleSheet}from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Cabecalho(){

    return(
        <View style={styles.container}>           
               <AntDesign name="windows" size={45} color="#05638fff" />                   
            
        </View>
    )  

}

const styles = StyleSheet.create({
    container:{        
        backgroundColor: '#4d4d4dff',
        paddingBottom: 10,
        paddingTop: 10,
        height:100,
        alignItems:'center',
        justifyContent:'center',           
    }
})