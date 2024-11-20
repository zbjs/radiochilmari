import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); // Get the active locale

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        <Link href={`/${locale}`}>{t('home')}</Link>
        <Link href={`/${locale}/about`}>{t('about')}</Link>
        <Link href={`/${locale}/contact`}>{t('contact')}</Link>
        <LocalSwitcher />
      </nav>
    </header>
  );
}
