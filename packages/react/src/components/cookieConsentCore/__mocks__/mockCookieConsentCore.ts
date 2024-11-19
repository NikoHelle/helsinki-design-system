// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderResult } from '@testing-library/react';

import { CookieConsentCore, cookieEventType } from '../cookieConsentCore';
import { getLastMockCallArgs, getMockCalls } from '../../../utils/testHelpers';
import { defaultSettingsPageId } from '../../cookieConsent/hooks/useCookieConsent';

export function mockCookieConsentCore() {
  const innerState: {
    consents: ReturnType<CookieConsentCore['getAllConsentStatuses']>;
    readyEventDelay: number;
    isBannerNeeded: boolean;
    renderResult: RenderResult | null;
    renderPageTestId: string;
    bannerTestId: string;
  } = {
    consents: [],
    readyEventDelay: 0,
    isBannerNeeded: false,
    renderResult: null,
    renderPageTestId: 'rendered-page',
    bannerTestId: 'rendered-banner',
  };

  const trackers = {
    renderPage: jest.fn(),
    create: jest.fn(),
    openBanner: jest.fn(),
    setLanguage: jest.fn(),
  };

  const getRenderPageArgs = () => {
    return getLastMockCallArgs(trackers.renderPage);
  };

  const triggerReadyEvent = () => {
    window.dispatchEvent(new Event(cookieEventType.READY));
  };

  const triggerChangeEvent = (acceptedGroups: string[]) => {
    innerState.consents = acceptedGroups.map((group) => {
      return { group, consented: true };
    });
    window.dispatchEvent(new CustomEvent(cookieEventType.CHANGE, { detail: { acceptedGroups } }));
  };

  const triggerMonitorEvent = (storageType: string, keys: string, acceptedGroups: string[]) => {
    window.dispatchEvent(new CustomEvent(cookieEventType.MONITOR, { detail: { storageType, keys, acceptedGroups } }));
  };

  const openBanner = async (...args: Parameters<CookieConsentCore['openBanner']>) => {
    trackers.openBanner(...args);
    if (!innerState.renderResult) {
      throw new Error('Missing innerState.renderResult');
    }
    const page = document.createElement('div');
    page.innerHTML = 'banner';
    page.setAttribute('data-testid', innerState.bannerTestId);
    const target = innerState.renderResult.container;
    target.appendChild(page);
    return Promise.resolve();
  };

  const createInstance = (): Partial<CookieConsentCore> => {
    return {
      getAllConsentStatuses: () => {
        return innerState.consents;
      },
      setLanguage: trackers.setLanguage,
      openBannerIfNeeded: async (...args: Parameters<CookieConsentCore['openBannerIfNeeded']>) => {
        if (innerState.isBannerNeeded) {
          openBanner(...args);
        }
        return Promise.resolve(innerState.isBannerNeeded);
      },
      renderPage: async (...args: Parameters<CookieConsentCore['renderPage']>) => {
        trackers.renderPage(...args);
        if (!innerState.renderResult) {
          throw new Error('Missing innerState.renderResult');
        }
        const page = document.createElement('div');
        page.innerHTML = 'renderPage';
        page.setAttribute('data-testid', innerState.renderPageTestId);
        const targetId = getRenderPageArgs()[0] || defaultSettingsPageId;
        const target = innerState.renderResult.container.querySelector(targetId) as HTMLElement;
        target.appendChild(page);
        return Promise.resolve();
      },
      removePage: () => {
        return false;
      },
      removeBanner: () => {
        return undefined;
      },
      openBanner,
    };
  };

  return {
    triggerReadyEvent,
    triggerChangeEvent,
    triggerMonitorEvent,
    create: async (...args: Parameters<typeof CookieConsentCore.create>) => {
      trackers.create(args);
      const instance = createInstance();

      if (innerState.readyEventDelay) {
        await new Promise((resolve) => {
          setTimeout(resolve, innerState.readyEventDelay);
        });
      }
      window.hds = { cookieConsent: instance as CookieConsentCore };
      triggerReadyEvent();
      return Promise.resolve(instance);
    },
    setConsents: (consents: ReturnType<CookieConsentCore['getAllConsentStatuses']>) => {
      innerState.consents = consents;
    },
    setReadyEventDelay: (delay: number) => {
      innerState.readyEventDelay = delay;
    },
    setRenderResult: (result: RenderResult) => {
      innerState.renderResult = result;
    },
    setBannerNeeded: () => {
      innerState.isBannerNeeded = true;
    },
    reset: () => {
      innerState.consents = [];
      innerState.readyEventDelay = 0;
      innerState.isBannerNeeded = false;
      innerState.renderResult = null;
      Object.keys(trackers).forEach((key) => {
        trackers[key].mockReset();
      });
      if (window.hds) {
        // @ts-ignore
        window.hds.cookieConsent = undefined;
        // @ts-ignore
        window.hds = undefined;
      }
    },
    getRenderPageTestId: () => {
      return innerState.renderPageTestId;
    },
    getBannerTestId: () => {
      return innerState.bannerTestId;
    },
    getTrackerCallCounts: (key: keyof typeof trackers) => {
      return getMockCalls(trackers[key]).length;
    },
  };
}
