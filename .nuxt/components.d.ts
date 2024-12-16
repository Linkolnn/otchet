
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'FooterContacts': typeof import("../components/Footer/contacts.vue")['default']
    'Footer': typeof import("../components/Footer/index.vue")['default']
    'FooterLogo': typeof import("../components/Footer/logo.vue")['default']
    'FooterProcurement': typeof import("../components/Footer/procurement.vue")['default']
    'FooterQuestion': typeof import("../components/Footer/question.vue")['default']
    'FooterRecifra': typeof import("../components/Footer/recifra.vue")['default']
    'FooterSlider': typeof import("../components/Footer/slider.vue")['default']
    'FooterSocials': typeof import("../components/Footer/socials.vue")['default']
    'FooterSuggestions': typeof import("../components/Footer/suggestions.vue")['default']
    'HeaderSearch': typeof import("../components/Header/Search.vue")['default']
    'Header': typeof import("../components/Header/index.vue")['default']
    'CardsHistory': typeof import("../components/cards/History.vue")['default']
    'ElementsBtn': typeof import("../components/elements/Btn.vue")['default']
    'ElementsButton': typeof import("../components/elements/Button.vue")['default']
    'ElementsInput': typeof import("../components/elements/Input.vue")['default']
    'ElementsPagination': typeof import("../components/elements/Pagination.vue")['default']
    'ElementsSocial': typeof import("../components/elements/Social.vue")['default']
    'MainCardsEventsCard': typeof import("../components/main/Cards/EventsCard.vue")['default']
    'MainCardsNewsCard': typeof import("../components/main/Cards/NewsCard.vue")['default']
    'MainCardsPartnersCard': typeof import("../components/main/Cards/PartnersCard.vue")['default']
    'MainCardsServicesCard': typeof import("../components/main/Cards/ServicesCard.vue")['default']
    'MainHistorySlider': typeof import("../components/main/HistorySlider.vue")['default']
    'MainLink': typeof import("../components/main/Link.vue")['default']
    'MainNewsSlider': typeof import("../components/main/NewsSlider.vue")['default']
    'MainPartnersSlider': typeof import("../components/main/PartnersSlider.vue")['default']
    'MainWelcomeSlider': typeof import("../components/main/WelcomeSlider.vue")['default']
    'Main': typeof import("../components/main/index.vue")['default']
    'IconCalendar': typeof import("../assets/icons/Calendar")['default']
    'IconCalendarPlus': typeof import("../assets/icons/CalendarPlus")['default']
    'IconArrow': typeof import("../assets/icons/IconArrow")['default']
    'IconArrowCard': typeof import("../assets/icons/IconArrowCard")['default']
    'IconArrowCaret': typeof import("../assets/icons/IconArrowCaret")['default']
    'IconArrowChevron': typeof import("../assets/icons/IconArrowChevron")['default']
    'IconFooterLogo': typeof import("../assets/icons/IconFooterLogo")['default']
    'IconPlay': typeof import("../assets/icons/IconPlay")['default']
    'IconRecifraLogo': typeof import("../assets/icons/IconRecifraLogo")['default']
    'IconTg': typeof import("../assets/icons/IconTg")['default']
    'IconVK': typeof import("../assets/icons/IconVK")['default']
    'IconMainRoundedCornerForPictures': typeof import("../assets/icons/MainRoundedCornerForPictures")['default']
    'IconMainRoundedCornerHeader': typeof import("../assets/icons/MainRoundedCornerHeader")['default']
    'IconMainRoundedCornerWelcomeSlider': typeof import("../assets/icons/MainRoundedCornerWelcomeSlider")['default']
    'IconRoundedCornerForPictures': typeof import("../assets/icons/RoundedCornerForPictures")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtIcon': typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyFooterContacts': typeof import("../components/Footer/contacts.vue")['default']
    'LazyFooter': typeof import("../components/Footer/index.vue")['default']
    'LazyFooterLogo': typeof import("../components/Footer/logo.vue")['default']
    'LazyFooterProcurement': typeof import("../components/Footer/procurement.vue")['default']
    'LazyFooterQuestion': typeof import("../components/Footer/question.vue")['default']
    'LazyFooterRecifra': typeof import("../components/Footer/recifra.vue")['default']
    'LazyFooterSlider': typeof import("../components/Footer/slider.vue")['default']
    'LazyFooterSocials': typeof import("../components/Footer/socials.vue")['default']
    'LazyFooterSuggestions': typeof import("../components/Footer/suggestions.vue")['default']
    'LazyHeaderSearch': typeof import("../components/Header/Search.vue")['default']
    'LazyHeader': typeof import("../components/Header/index.vue")['default']
    'LazyCardsHistory': typeof import("../components/cards/History.vue")['default']
    'LazyElementsBtn': typeof import("../components/elements/Btn.vue")['default']
    'LazyElementsButton': typeof import("../components/elements/Button.vue")['default']
    'LazyElementsInput': typeof import("../components/elements/Input.vue")['default']
    'LazyElementsPagination': typeof import("../components/elements/Pagination.vue")['default']
    'LazyElementsSocial': typeof import("../components/elements/Social.vue")['default']
    'LazyMainCardsEventsCard': typeof import("../components/main/Cards/EventsCard.vue")['default']
    'LazyMainCardsNewsCard': typeof import("../components/main/Cards/NewsCard.vue")['default']
    'LazyMainCardsPartnersCard': typeof import("../components/main/Cards/PartnersCard.vue")['default']
    'LazyMainCardsServicesCard': typeof import("../components/main/Cards/ServicesCard.vue")['default']
    'LazyMainHistorySlider': typeof import("../components/main/HistorySlider.vue")['default']
    'LazyMainLink': typeof import("../components/main/Link.vue")['default']
    'LazyMainNewsSlider': typeof import("../components/main/NewsSlider.vue")['default']
    'LazyMainPartnersSlider': typeof import("../components/main/PartnersSlider.vue")['default']
    'LazyMainWelcomeSlider': typeof import("../components/main/WelcomeSlider.vue")['default']
    'LazyMain': typeof import("../components/main/index.vue")['default']
    'LazyIconCalendar': typeof import("../assets/icons/Calendar")['default']
    'LazyIconCalendarPlus': typeof import("../assets/icons/CalendarPlus")['default']
    'LazyIconArrow': typeof import("../assets/icons/IconArrow")['default']
    'LazyIconArrowCard': typeof import("../assets/icons/IconArrowCard")['default']
    'LazyIconArrowCaret': typeof import("../assets/icons/IconArrowCaret")['default']
    'LazyIconArrowChevron': typeof import("../assets/icons/IconArrowChevron")['default']
    'LazyIconFooterLogo': typeof import("../assets/icons/IconFooterLogo")['default']
    'LazyIconPlay': typeof import("../assets/icons/IconPlay")['default']
    'LazyIconRecifraLogo': typeof import("../assets/icons/IconRecifraLogo")['default']
    'LazyIconTg': typeof import("../assets/icons/IconTg")['default']
    'LazyIconVK': typeof import("../assets/icons/IconVK")['default']
    'LazyIconMainRoundedCornerForPictures': typeof import("../assets/icons/MainRoundedCornerForPictures")['default']
    'LazyIconMainRoundedCornerHeader': typeof import("../assets/icons/MainRoundedCornerHeader")['default']
    'LazyIconMainRoundedCornerWelcomeSlider': typeof import("../assets/icons/MainRoundedCornerWelcomeSlider")['default']
    'LazyIconRoundedCornerForPictures': typeof import("../assets/icons/RoundedCornerForPictures")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtIcon': typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'LazyNuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'LazySwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const FooterContacts: typeof import("../components/Footer/contacts.vue")['default']
export const Footer: typeof import("../components/Footer/index.vue")['default']
export const FooterLogo: typeof import("../components/Footer/logo.vue")['default']
export const FooterProcurement: typeof import("../components/Footer/procurement.vue")['default']
export const FooterQuestion: typeof import("../components/Footer/question.vue")['default']
export const FooterRecifra: typeof import("../components/Footer/recifra.vue")['default']
export const FooterSlider: typeof import("../components/Footer/slider.vue")['default']
export const FooterSocials: typeof import("../components/Footer/socials.vue")['default']
export const FooterSuggestions: typeof import("../components/Footer/suggestions.vue")['default']
export const HeaderSearch: typeof import("../components/Header/Search.vue")['default']
export const Header: typeof import("../components/Header/index.vue")['default']
export const CardsHistory: typeof import("../components/cards/History.vue")['default']
export const ElementsBtn: typeof import("../components/elements/Btn.vue")['default']
export const ElementsButton: typeof import("../components/elements/Button.vue")['default']
export const ElementsInput: typeof import("../components/elements/Input.vue")['default']
export const ElementsPagination: typeof import("../components/elements/Pagination.vue")['default']
export const ElementsSocial: typeof import("../components/elements/Social.vue")['default']
export const MainCardsEventsCard: typeof import("../components/main/Cards/EventsCard.vue")['default']
export const MainCardsNewsCard: typeof import("../components/main/Cards/NewsCard.vue")['default']
export const MainCardsPartnersCard: typeof import("../components/main/Cards/PartnersCard.vue")['default']
export const MainCardsServicesCard: typeof import("../components/main/Cards/ServicesCard.vue")['default']
export const MainHistorySlider: typeof import("../components/main/HistorySlider.vue")['default']
export const MainLink: typeof import("../components/main/Link.vue")['default']
export const MainNewsSlider: typeof import("../components/main/NewsSlider.vue")['default']
export const MainPartnersSlider: typeof import("../components/main/PartnersSlider.vue")['default']
export const MainWelcomeSlider: typeof import("../components/main/WelcomeSlider.vue")['default']
export const Main: typeof import("../components/main/index.vue")['default']
export const IconCalendar: typeof import("../assets/icons/Calendar")['default']
export const IconCalendarPlus: typeof import("../assets/icons/CalendarPlus")['default']
export const IconArrow: typeof import("../assets/icons/IconArrow")['default']
export const IconArrowCard: typeof import("../assets/icons/IconArrowCard")['default']
export const IconArrowCaret: typeof import("../assets/icons/IconArrowCaret")['default']
export const IconArrowChevron: typeof import("../assets/icons/IconArrowChevron")['default']
export const IconFooterLogo: typeof import("../assets/icons/IconFooterLogo")['default']
export const IconPlay: typeof import("../assets/icons/IconPlay")['default']
export const IconRecifraLogo: typeof import("../assets/icons/IconRecifraLogo")['default']
export const IconTg: typeof import("../assets/icons/IconTg")['default']
export const IconVK: typeof import("../assets/icons/IconVK")['default']
export const IconMainRoundedCornerForPictures: typeof import("../assets/icons/MainRoundedCornerForPictures")['default']
export const IconMainRoundedCornerHeader: typeof import("../assets/icons/MainRoundedCornerHeader")['default']
export const IconMainRoundedCornerWelcomeSlider: typeof import("../assets/icons/MainRoundedCornerWelcomeSlider")['default']
export const IconRoundedCornerForPictures: typeof import("../assets/icons/RoundedCornerForPictures")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtIcon: typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyFooterContacts: typeof import("../components/Footer/contacts.vue")['default']
export const LazyFooter: typeof import("../components/Footer/index.vue")['default']
export const LazyFooterLogo: typeof import("../components/Footer/logo.vue")['default']
export const LazyFooterProcurement: typeof import("../components/Footer/procurement.vue")['default']
export const LazyFooterQuestion: typeof import("../components/Footer/question.vue")['default']
export const LazyFooterRecifra: typeof import("../components/Footer/recifra.vue")['default']
export const LazyFooterSlider: typeof import("../components/Footer/slider.vue")['default']
export const LazyFooterSocials: typeof import("../components/Footer/socials.vue")['default']
export const LazyFooterSuggestions: typeof import("../components/Footer/suggestions.vue")['default']
export const LazyHeaderSearch: typeof import("../components/Header/Search.vue")['default']
export const LazyHeader: typeof import("../components/Header/index.vue")['default']
export const LazyCardsHistory: typeof import("../components/cards/History.vue")['default']
export const LazyElementsBtn: typeof import("../components/elements/Btn.vue")['default']
export const LazyElementsButton: typeof import("../components/elements/Button.vue")['default']
export const LazyElementsInput: typeof import("../components/elements/Input.vue")['default']
export const LazyElementsPagination: typeof import("../components/elements/Pagination.vue")['default']
export const LazyElementsSocial: typeof import("../components/elements/Social.vue")['default']
export const LazyMainCardsEventsCard: typeof import("../components/main/Cards/EventsCard.vue")['default']
export const LazyMainCardsNewsCard: typeof import("../components/main/Cards/NewsCard.vue")['default']
export const LazyMainCardsPartnersCard: typeof import("../components/main/Cards/PartnersCard.vue")['default']
export const LazyMainCardsServicesCard: typeof import("../components/main/Cards/ServicesCard.vue")['default']
export const LazyMainHistorySlider: typeof import("../components/main/HistorySlider.vue")['default']
export const LazyMainLink: typeof import("../components/main/Link.vue")['default']
export const LazyMainNewsSlider: typeof import("../components/main/NewsSlider.vue")['default']
export const LazyMainPartnersSlider: typeof import("../components/main/PartnersSlider.vue")['default']
export const LazyMainWelcomeSlider: typeof import("../components/main/WelcomeSlider.vue")['default']
export const LazyMain: typeof import("../components/main/index.vue")['default']
export const LazyIconCalendar: typeof import("../assets/icons/Calendar")['default']
export const LazyIconCalendarPlus: typeof import("../assets/icons/CalendarPlus")['default']
export const LazyIconArrow: typeof import("../assets/icons/IconArrow")['default']
export const LazyIconArrowCard: typeof import("../assets/icons/IconArrowCard")['default']
export const LazyIconArrowCaret: typeof import("../assets/icons/IconArrowCaret")['default']
export const LazyIconArrowChevron: typeof import("../assets/icons/IconArrowChevron")['default']
export const LazyIconFooterLogo: typeof import("../assets/icons/IconFooterLogo")['default']
export const LazyIconPlay: typeof import("../assets/icons/IconPlay")['default']
export const LazyIconRecifraLogo: typeof import("../assets/icons/IconRecifraLogo")['default']
export const LazyIconTg: typeof import("../assets/icons/IconTg")['default']
export const LazyIconVK: typeof import("../assets/icons/IconVK")['default']
export const LazyIconMainRoundedCornerForPictures: typeof import("../assets/icons/MainRoundedCornerForPictures")['default']
export const LazyIconMainRoundedCornerHeader: typeof import("../assets/icons/MainRoundedCornerHeader")['default']
export const LazyIconMainRoundedCornerWelcomeSlider: typeof import("../assets/icons/MainRoundedCornerWelcomeSlider")['default']
export const LazyIconRoundedCornerForPictures: typeof import("../assets/icons/RoundedCornerForPictures")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtIcon: typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const LazyNuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const LazySwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]