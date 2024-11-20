import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); 

  return (
    <header className='p-4'>
      <nav className='flex items-center justify-between'>
        <Link href='/'>{t('home')}</Link>
        <Link href={`/${useLocale()}/about`}>{t('about')}</Link>
        <Link href={`/${useLocale()}/contact`}>{t('contact')}</Link>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
