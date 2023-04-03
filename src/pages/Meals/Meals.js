import React from 'react'
import { View,FlatList, Text, ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import styles from "./Meals.style"
import MealsCard from '../../components/MealsCard/MealsCard'

const Meals = ({route,navigation}) => {
    const {strCategory} = route.params
    console.log(strCategory);
    const {data, loading} = useFetch(Config.API_MEAL+strCategory)

    if(loading){
        return <ActivityIndicator size="large"/>
    }

    const handleMealsSelect = (idMeal) => {
        navigation.navigate("Detail",{idMeal})
    }

    const renderMeals = ({item}) => <MealsCard meals={item} onSelect={()=>handleMealsSelect(item.idMeal)}/>
    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals}
            />
        </View>
    )
}

export default Meals;