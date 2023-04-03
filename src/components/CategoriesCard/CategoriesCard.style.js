import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"#eceff1",
        flexDirection:"row",
        alignItems:"center",
        margin:7,
        padding:3,
        borderTopStartRadius:50,
        borderBottomStartRadius:50,
        
    },
    image:{
        height:100,
        width:100,
        resizeMode:"contain",
        marginLeft:10
    },
    text:{
        marginLeft:12,
        fontSize:20
    }
})