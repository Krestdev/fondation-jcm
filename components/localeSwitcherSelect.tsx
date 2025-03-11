'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { ReactNode, useTransition } from 'react';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';

type Props = {
  children: ReactNode;
  defaultValue: string;
  className?:string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  className
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value as "fr"|"en";
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onValueChange={onSelectChange}
      >
        <SelectTrigger className={`uppercase ${className}`}>
            <SelectValue/>
        </SelectTrigger>
        <SelectContent>
        {children}
        </SelectContent>
      </Select>
  );
}