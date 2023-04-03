import React from 'react'
import {Image, Text, TouchableOpacity, View, Linking} from 'react-native'
import styles from "./DetailCard.style"

const DetailCard = ({detail}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:detail.strMealThumb}}/>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{detail.strMeal}</Text>
                <Text style={styles.area}>{detail.strArea}</Text>
            </View>
            <Text style={styles.text}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {Linking.openURL(detail.strYoutube)}}>
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailCard;