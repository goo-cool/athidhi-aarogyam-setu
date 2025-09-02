import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'or', name: 'Oriya', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
];

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {currentLanguage.nativeName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setCurrentLanguage(language)}
            className={currentLanguage.code === language.code ? 'bg-primary/10' : ''}
          >
            <span className="font-medium">{language.nativeName}</span>
            <span className="text-sm text-muted-foreground ml-2">
              ({language.name})
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};