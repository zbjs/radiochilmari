import React from 'react'
import { Alert } from "flowbite-react";
import TopRegularProgramSlider from '@/components/ui/TopRegularProgramSlider';
import FacebookVideoEmbed from '@/components/ui/FacebookVideoEmbed';
import RadioChilmariFacebookPage from '@/components/ui/FacebookPage';



const Home = () => {
  return (
    <div>

<Alert color="info">Alert!</Alert>;

<TopRegularProgramSlider />

<FacebookVideoEmbed />

<RadioChilmariFacebookPage />


    </div>
  )
}

export default Home