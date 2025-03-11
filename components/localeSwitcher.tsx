import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import LocaleSwitcherSelect from './localeSwitcherSelect';
import { SelectItem } from './ui/select';

export default function LocaleSwitcher({className=""}:{className?:string}) {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} className={className}>
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur} className='uppercase inline-flex gap-1'>
            <img src={`/${cur}.svg`} alt={cur} className='h-3 w-auto aspect-[4/3] object-cover'/>
          {cur}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}