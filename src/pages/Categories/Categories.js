import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList,Text,View } from 'react-native'
import styles from "./Categories.style"
import CategoriesCard from "./../../components/CategoriesCard"
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch/useFetch'

const Categories = ({navigation}) => {
    const {data, loading} = useFetch(Config.API_CATEGORY)

    if(loading){
        return <ActivityIndicator size="large"/>
    }

    const handleCategoriesSelect = (strCategory) => {
        navigation.navigate("Meals",{strCategory})
    }

    const renderCategories = ({item}) =><CategoriesCard categories={item} onSelect={()=>handleCategoriesSelect(item.strCategory)}/>
    return(
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategories}
            />
        </View>
    )
}

export default Categories;