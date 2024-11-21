import React from 'react';
import TopRegularProgramSlider from '@/components/ui/TopRegularProgramSlider';
import FacebookVideoEmbed from '@/components/ui/FacebookVideoEmbed';
import RadioChilmariFacebookPage from '@/components/ui/FacebookPage';
import HoursCard from '@/components/ui/HoursCard';
import OurFacebookNews from '@/components/ui/OurFacebookNews';
import RdrsProgram from '@/components/ui/RdrsProgram';
import BackgroundHero from '@/components/ui/BackgroundHero';

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">


      {/* Main Content */}
      <main className="p-6">
      <BackgroundHero />
        {/* Slider Section */}
        <section>
          <TopRegularProgramSlider />
        </section>

        {/* Facebook Page Section */}
        <section className="my-8">
          <RadioChilmariFacebookPage pageHref={''} />
        </section>

        {/* Facebook News Section */}
        <section className="my-8">
          <OurFacebookNews />
        </section>

        

        {/* Hours Card Section */}
        <section className="my-8">
          <HoursCard />
        </section>

        <RdrsProgram />
        {/* Video Embed Section */}
        <section className="my-8">
          {/* Uncomment if needed */}
          <FacebookVideoEmbed />
        </section>

      </main>

    </div>
  );
};

export default Home;
