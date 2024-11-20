import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('IndexPage');

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minus praesentium repudiandae sed totam, saepe quis eveniet natus consectetur distinctio ex officiis vitae nulla accusamus consequatur atque est tempora consequuntur?
      </p>
    </div>
  );
}
