import React from 'react'
import { TouchableWithoutFeedback, View, ImageBackground,Text, Image } from 'react-native'
import styles from "./MealsCard.style"

const MealsCard = ({meals, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground resizeMode='cover' source={{uri:meals.strMealThumb}} style={styles.image} imageStyle={{borderRadius:15}}>
                    <View style={styles.inner_container}><Text style={styles.text}>{meals.strMeal}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealsCard;