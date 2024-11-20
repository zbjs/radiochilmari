// src/components/local-switcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Get the current path
    const currentPath = window.location.pathname;

    // Switch the language by replacing the locale part in the URL
    startTransition(() => {
      router.replace(`/${nextLocale}${currentPath.substring(3)}`);  // Remove the first 3 characters ('/en' or '/bn') and add the new locale
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
      </select>
    </label>
  );
}
