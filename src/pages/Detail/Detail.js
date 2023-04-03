import React from 'react'
import { View, Image, Text, FlatList } from 'react-native'
import styles from "./Detail.style"
import useFetch from '../../hooks/useFetch/useFetch'
import Config from 'react-native-config'
import DetailCard from '../../components/DetailCard/DetailCard'

const Detail = ({route}) => {
    const {idMeal} = route.params
    console.log(idMeal)

    const {loading, data} = useFetch(Config.API_DETAILS+idMeal)

    const renderDetail = ({item}) => <DetailCard detail={item}/>
    return(
        <FlatList
            data={data.meals}
            renderItem={renderDetail}
        />
    )
}

export default Detail