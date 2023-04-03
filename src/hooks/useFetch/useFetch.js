import { useEffect,useState } from "react";
import axios from "axios"

function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            loading(false);
        } catch (err) {
            console.log(err)
            setLoading(false) 
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {loading, data}
}

export default useFetch;