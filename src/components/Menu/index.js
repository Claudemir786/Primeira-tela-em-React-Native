import{View, TouchableOpacity, Text, StyleSheet}from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Opcoes({nome="default", Icon = 'default'}){
    
    
    return(
        
        <View style={styles.container}>                    
            <TouchableOpacity style={styles.opcao}>
                <View style={styles.conteudo}>
                     
                    <Text style={{color:"#fff"}}>{Icon && <Icon/>}    {nome}</Text> 
                </View>                                           
                           
            </TouchableOpacity>
              <View style={styles.seta}>
                   <MaterialIcons name="arrow-forward-ios" size={24} color="#fff" />   
                </View>
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#4d4d4dff',
        alignItems:'center',
        marginStart:15,
        marginEnd:15,
        borderRadius:4, 
        height:50,
        flexDirection:'row',  
        paddingEnd:6,   
       

    },
    opcao:{
        marginStart:20,
        flexDirection:'row',   
    },
   
    seta:{
        marginLeft:'auto'
    }
      
})

