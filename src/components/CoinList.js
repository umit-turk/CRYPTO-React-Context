import React, { useContext, useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from './context/watchListContext';
const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList} = useContext(WatchListContext)
    console.log(watchList)
    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "TRY",
                    ids: "bitcoin,ethereum"
                }
            })
            console.log(response.data);
        }
        fetchData()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default CoinList
