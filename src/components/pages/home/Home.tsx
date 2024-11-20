import React from 'react'
import { Alert } from "flowbite-react";
import TopRegularProgramSlider from '@/components/ui/TopRegularProgramSlider';
import FacebookVideoEmbed from '@/components/ui/FacebookVideoEmbed';
import RadioChilmariFacebookPage from '@/components/ui/FacebookPage';



const Home = () => {
  return (
    <div className=''>

<Alert color="info">Alert!</Alert>

<TopRegularProgramSlider />



<RadioChilmariFacebookPage />

<hr className='my-4' />
<FacebookVideoEmbed />

    </div>
  )
}

export default Home