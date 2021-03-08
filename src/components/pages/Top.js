import React, {useEffect, useContext} from 'react'
import ProductGrid from '../ProductGrid/ProductGrid'
import Layout from '../Layout/Layout'
import ProductGridItem from '../ProductGridItem/ProductGridItem'
import { fetchPopularData } from '../../apis/index'
import { Store } from '../../store/index'

const Top = () => {

  const {globalState, setGlobalState} = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((response) => {
      setGlobalState({type: "SET_RANKING", ranking: response})
    }, []).catch(() => {
      console.log('通信に失敗しました。');
    })
  })
  return (
    <div>
      <Layout/>
      <ProductGrid>
        {console.log(globalState)}
        { globalState.ranking && globalState.ranking.map((rank) => {
          return (
            <ProductGridItem id="">
              
            </ProductGridItem>
          )
        })}
      </ProductGrid>
    </div>
  )
}

export default Top
