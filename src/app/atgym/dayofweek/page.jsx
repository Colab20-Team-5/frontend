import HeaderText from '@/app/components/HeaderText'
import HomeNavButton from '@/app/components/HomeNavButton'
import React from 'react'

const page = () => {
  return (
    <div className=>
        <HeaderText
        headerText={"At the Gym"}
        paraText={"Choose the day of your week to workout"}
      />

      <HomeNavButton 
        text={"Monday"}
        url={"/atgym/spotify"}
        arrow={"/nextarrow.svg"}
      />

     <HomeNavButton 
        text={"Wednesday"}
        url={"/atgym/spotify"}
        arrow={"/nextarrow.svg"}
      />

    <HomeNavButton 
        text={"Thursday"}
        url={"/atgym/spotify"}
        arrow={"/nextarrow.svg"}
      />

      <HomeNavButton 
        text={"Thursday"}
        url={"/atgym/spotify"}
        arrow={"/nextarrow.svg"}
      />

    </div>
  )
}

export default page