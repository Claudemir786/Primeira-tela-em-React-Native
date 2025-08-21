import{View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../../components/Header';
import Opcoes from '../../components/Menu';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
export default function Home(){
  return(
      <View style={styles.container}>
        <Cabecalho/>
        <View style={styles.menu}>
          <Opcoes nome="Perfil" Icon={()=><Octicons name="person" size={24} color="#fff" />}/>
          <Opcoes nome="Locais" Icon={()=><Octicons name="location" size={24} color="#fff" />}/>
          <Opcoes nome="Mapa geral" Icon={()=><AntDesign name="setting" size={24} color="#fff" />}/>
          <Opcoes nome="Histórico" Icon={()=><Octicons name="history" size={24} color="#fff" />}/>
          <Opcoes nome="Instruções" Icon={()=><Octicons name="book" size={24} color="#fff" />}/>
          <Opcoes nome="Configurações" Icon={()=><Feather name="map" size={24} color="#fff" />}/>
          <Opcoes nome="Baixe o ebook" Icon={()=><Octicons name="download" size={24} color="#fff" />}/>     
        

        </View>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#353535ff',   
    gap: 50    
  },
  menu:{
    gap:20
  }

})