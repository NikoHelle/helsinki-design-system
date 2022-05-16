import React, { useState } from 'react';

import { SupportedLanguage } from './CookieConsentContext';
import { ConsentsInModal } from './consentsInModal/ConsentsInModal';
import { ConsentsInPage } from './consentsInPage/ConsentsInPage';
import { getConsentStatus, hasHandledAllConsents } from './util';
import { ContentSource, pickConsentIdsFromContentSource } from './content.builder';

export default {
  component: ConsentsInModal,
  title: 'Components/CookieConsent',
  parameters: {
    controls: { expanded: true },
  },
  args: {},
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const ModalVersion = (args) => {
  const [language, setLanguage] = useState<SupportedLanguage>('fi');
  const onLanguageChange = (newLang) => setLanguage(newLang);
  const focusedElementAfterCloseId = 'focused-element-after-cookie-consent-closed';
  const contentSource: ContentSource = {
    siteName: 'Sivusto XXX',
    currentLanguage: language,
    groups: [
      {
        commonGroup: 'essential',
        required: true,
        cookies: [
          {
            commonCookie: 'tunnistamo',
          },
          {
            id: 'loadbalancer',
            name: 'Load balancer',
            hostName: 'Host name',
            path: 'Path',
            description:
              'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: '1h',
          },
          {
            commonCookie: 'language-i18n',
          },
        ],
      },
      {
        commonGroup: 'marketing',
        required: false,
        cookies: [
          {
            commonCookie: 'marketing',
          },
        ],
      },
      {
        commonGroup: 'preferences',
        required: false,
        cookies: [
          {
            id: 'preferences1',
            name: 'Preference 1',
            hostName: 'Host name',
            path: 'Path',
            description:
              'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: '1h',
          },
          {
            id: 'preferences2',
            name: 'Preference 2',
            hostName: 'Host name',
            path: 'Path',
            description:
              'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: '1 years',
          },
          {
            id: 'preferences3',
            name: 'Preference 3',
            hostName: 'Host name',
            path: 'Path',
            description:
              'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: '2h',
          },
        ],
      },
      {
        commonGroup: 'statistics',
        required: false,
        cookies: [
          {
            commonCookie: 'matomo',
          },
          {
            id: 'someOtherConsent',
            name: 'Other consent',
            hostName: 'Host name',
            path: 'Path',
            description:
              'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: '1h',
          },
        ],
      },
    ],
    language: {
      onLanguageChange,
    },
    onAllConsentsGiven: (consents) => {
      if (consents.matomo) {
        //  start tracking
        // window._paq.push(['setConsentGiven']);
        // window._paq.push(['setCookieConsentGiven']);
      }
      const focusEl = document.getElementById(focusedElementAfterCloseId);
      if (focusEl) {
        focusEl.focus();
      }
    },
    onConsentsParsed: (consents, hasUserHandledAllConsents) => {
      if (consents.matomo === undefined) {
        // tell matomo to wait for consent:
        // window._paq.push(['requireConsent']);
        // window._paq.push(['requireCookieConsent']);
      } else if (consents.matomo === false) {
        // tell matomo to forget conset
        // window._paq.push(['forgetConsentGiven']);
      }
      if (hasUserHandledAllConsents) {
        // cookie consent modal will not be shown
      }
    },
  };

  const MatomoCookieTracker = () => {
    const isMatomoCookieApproved = getConsentStatus('matomo');
    return (
      <div>
        <p>Example how to track single consent.</p>
        <p>Matomo cookie is {!isMatomoCookieApproved && <strong>NOT</strong>} set.*</p>
        <small>* This won&apos;t change in real time</small>
      </div>
    );
  };

  const ForcePageScrollBarForModalTesting = () => {
    return (
      <div>
        <div style={{ height: '100vh' }}>&nbsp;</div>
        <p style={{ opacity: '0' }}>Bottom page</p>
      </div>
    );
  };

  const Application = () => {
    const consentsInSource = pickConsentIdsFromContentSource(contentSource);
    const willRenderCookieConsentDialog = !hasHandledAllConsents(
      consentsInSource.required || [],
      consentsInSource.optional || [],
    );
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <h1 id={focusedElementAfterCloseId} tabIndex={0}>
          This is an example application with cookie consent modal
        </h1>
        <p>The modal will be shown when required. If user has given consents, it will not be shown.</p>
        {willRenderCookieConsentDialog ? (
          <>
            <p>Consents are not given. Modal is shown.</p>
          </>
        ) : (
          <>
            <p>Cookie consents have been given. Remove the cookie to see the modal again.</p>
          </>
        )}
        <MatomoCookieTracker />
        <ForcePageScrollBarForModalTesting />
      </div>
    );
  };

  return (
    <>
      <ConsentsInModal contentSource={contentSource} />
      <Application />
    </>
  );
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const SimpleModalVersion = (args) => {
  const [language, setLanguage] = useState<SupportedLanguage>('fi');
  const onLanguageChange = (newLang) => setLanguage(newLang);
  const focusedElementAfterCloseId = 'focused-element-after-cookie-consent-closed';
  const contentSource: ContentSource = {
    siteName: `Site title ${language}`,
    currentLanguage: language,
    cookies: [
      {
        commonCookie: 'tunnistamo',
        required: false,
        commonGroup: 'essential',
      },
    ],
    language: {
      onLanguageChange,
    },
  };

  const Application = () => {
    const consentsInSource = pickConsentIdsFromContentSource(contentSource);
    const willRenderCookieConsentDialog = !hasHandledAllConsents(
      consentsInSource.required || [],
      consentsInSource.optional || [],
    );
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <h1 id={focusedElementAfterCloseId} tabIndex={0}>
          Simplest cookie consent example
        </h1>
        <p>This is an example how the modal is shown with minimal content parameters.</p>
        <p>Note: it the cookie.required would be true, the modal would not be shown.</p>
        {!willRenderCookieConsentDialog && (
          <>
            <p>Cookie consents have been given. Remove the cookie to see the modal again.</p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <ConsentsInModal contentSource={contentSource} />
      <Application />
    </>
  );
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const PageVersion = (args) => {
  const contentSource: ContentSource = {
    siteName: 'Sivuston XXX',
    currentLanguage: 'fi',
    texts: {
      sections: {
        main: {
          title: 'Cookie consents as a page!',
        },
      },
    },
    groups: [
      {
        commonGroup: 'essential',
        required: true,
        cookies: [
          {
            commonCookie: 'tunnistamo',
          },
          {
            id: 'loadbalancer',
            name: 'Kuormanjako',
            hostName: 'Osoite',
            path: 'Polku',
            description:
              'Kuvaus lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
            expiration: 'Voimassaoloaika',
          },
          {
            commonCookie: 'language-i18n',
          },
        ],
      },
      {
        commonGroup: 'marketing',
        required: false,
        cookies: [
          {
            commonCookie: 'marketing',
          },
        ],
      },
      {
        commonGroup: 'preferences',
        required: false,
        cookies: [
          {
            id: 'preferences',
            name: 'Asetus 1',
            hostName: 'Osoite',
            path: 'Polku',
            description:
              'Proin sodales maximus est, pulvinar tempus felis tempus quis. Aenean at vestibulum lectus. Aliquam erat volutpat. Nullam venenatis feugiat sem vitae cursus. ',
            expiration: 'Voimassaoloaika',
          },
        ],
      },
      {
        commonGroup: 'statistics',
        required: false,
        cookies: [
          {
            commonCookie: 'matomo',
          },
          {
            id: 'someOtherConsent',
            name: 'Joku toinen',
            hostName: 'Osoite',
            path: 'Polku',
            description: 'Vel est molestie Quisque vel dui vel est molestie con con',
            expiration: 'Voimassaoloaika',
          },
        ],
      },
    ],
    onAllConsentsGiven: (consents) => {
      // called when consents are saved
      // handle changes like:
      if (!consents.matomo) {
        // stop matomo tracking
      }
    },
  };

  return (
    <main>
      <ConsentsInPage contentSource={contentSource} />
    </main>
  );
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const CustomContentVersion = (args) => {
  const contentSource: ContentSource = {
    siteName: 'Not shown if main title is overridden',
    currentLanguage: 'fi',
    texts: {
      sections: {
        main: {
          title: 'Custom main title',
          text: 'Custom main preferences',
        },
        details: {
          title: 'Custom details title',
          text: 'Custom details preferences',
        },
      },
      ui: {
        showSettings: 'Custom show settings',
        hideSettings: 'Custom hide settings',
        approveAllConsents: 'Custom approve all consents',
        approveRequiredAndSelectedConsents: 'Custom approve required and selected consents',
        approveOnlyRequiredConsents: 'Custom approve only required consents',
        settingsSaved: 'Custom settings saved text',
      },
      tableHeadings: {
        name: 'Cookie custom name',
        hostName: 'Host',
        path: 'Where its saved',
        description: 'Cookie purpose',
        expiration: 'Lifespan',
      },
    },
    requiredCookies: {
      title: 'Overridden title of required cookies',
      text: 'Overridden text of required cookies. The default text is not shown.',
      checkboxAriaDescription: 'This is the overridden checkbox aria description of required cookies',
      groups: [
        {
          commonGroup: 'essential',
          title: 'Essential cookies custom title',
          text: 'Essential cookies custom text',
          checkboxAriaDescription: 'Custom checkbox aria description for essential cookies group',
          expandAriaLabel: 'Custom expand button aria label for essential cookies group',
          cookies: [
            {
              commonCookie: 'tunnistamo',
              title: 'Tunnistamo cookie custom title',
              text: 'Tunnistamo cookie custom text',
            },
            {
              id: 'custom-cookie',
              name: 'Custom cookie',
              hostName: 'Host name',
              path: 'Path',
              description:
                'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
              expiration: '1000 years',
            },
          ],
        },
        {
          title: 'Custom cookie group title',
          text: 'Custom cookie group text',
          checkboxAriaDescription: 'Custom checkbox aria description for custom cookies group',
          expandAriaLabel: 'Custom expand button aria label for custom cookies group',
          cookies: [
            {
              commonCookie: 'marketing',
            },
          ],
        },
      ],
    },
    optionalCookies: {
      title: 'Overridden title of optional cookies',
      text: 'Overridden text of optional cookies. The default text is not shown.',
      checkboxAriaDescription: 'This is the overridden checkbox aria description of optional cookies',
      groups: [
        {
          title: 'Custom cookies group title',
          text: 'Custom cookies group text',
          checkboxAriaDescription: 'Custom checkbox aria description for custom cookies group',
          expandAriaLabel: 'Custom expand button aria label for custom cookies group',
          cookies: [
            {
              id: 'some-cookie',
              name: 'Setting 1',
              hostName: 'Host name',
              path: 'Path',
              description:
                'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
              expiration: 'Sessio',
            },
            {
              id: 'some-cookie2',
              name: 'Setting 2',
              hostName: 'Host name',
              path: 'Path',
              description:
                'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
              expiration: 'Sessio',
            },
          ],
        },
        {
          commonGroup: 'statistics',
          cookies: [
            {
              commonCookie: 'matomo',
              text: 'Custom matomo text',
            },
            {
              id: 'someOtherConsent',
              name: 'Other cookie',
              hostName: 'Host name',
              path: 'Path',
              description:
                'Description lectus lacinia sed. Phasellus purus nisi, imperdiet id volutpat vel, pellentesque in ex. In pretium maximus finibus',
              expiration: 'Sessio',
            },
          ],
        },
      ],
    },
  };

  return (
    <main>
      <ConsentsInPage contentSource={contentSource} />
    </main>
  );
};
