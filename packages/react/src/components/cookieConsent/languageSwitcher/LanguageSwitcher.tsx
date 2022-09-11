import React from 'react';

import { useContentLanguage } from '../contexts/ContentContext';
import { Navigation } from '../../navigation/Navigation';
import styles from '../CookieConsent.module.scss';

export function LanguageSwitcher(): React.ReactElement {
  const { current, languageOptions, languageSelectorAriaLabel, onLanguageChange } = useContentLanguage();
  const setLanguage = (code: string, e: React.MouseEvent) => {
    e.preventDefault();
    onLanguageChange(code);
  };
  const currentOption = languageOptions.find((option) => option.code === current);
  return (
    <Navigation.LanguageSelector
      label={currentOption.label}
      buttonAriaLabel={languageSelectorAriaLabel}
      className={styles.languageSelectorOverride}
      id="cookie-consent-language-selector"
    >
      {languageOptions.map((option) => (
        <Navigation.Item
          href="#"
          onClick={(e: React.MouseEvent) => setLanguage(option.code, e)}
          label={option.label}
          active={current === option.code}
          key={option.code}
          lang={option.code}
        />
      ))}
    </Navigation.LanguageSelector>
  );
}
