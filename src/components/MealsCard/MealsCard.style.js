import { Dimensions, StyleSheet } from 'react-native'

const height = Dimensions.get("window").height

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10,
    },
    image:{
        flex:1,
        justifyContent:"center",
        height:height/4,
        justifyContent:"flex-end"
    },
    inner_container:{
        backgroundColor:"#000000c0",
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
    },
    text:{
        fontSize:35,
        textAlign:"right",
        color:"white",
        maxHeight:70,
        marginRight:3
    }
})