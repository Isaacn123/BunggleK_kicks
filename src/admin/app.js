import AuthLogo from './extensions/my-logo.png';
import MenuLogo from './extensions/logo.png';
import favicon from './extensions/favicon.ico';
export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: favicon,
      title: "Admin"
    },
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
    locales: [
      'en',
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        'Auth.form.email.label': 'Email',
        // Users: 'Utilisateurs',
        // City: 'CITY (FRENCH)',
        // // Customize the label of the Content Manager table.
        // Id: 'ID french',
        "Auth.form.welcome.subtitle": "Log in to your BunggleKicks account",
        "Auth.form.welcome.title": "Welcome to BunggleKicks!",
        "HomePage.welcome.congrats.content": "You are logged in as the first administrator.",
        "HomePage.welcome.congrats.content.bold": "we recommend you to create your first Collection-Type.",
        "Settings.application.strapi-version": "BunggleKicks version",
        "Settings.application.strapiVersion": "BunggleKicks version",
        "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the admin panel",
        "admin.pages.MarketPlacePage.offline.subtitle": "You need to be connected to the Internet to access Market.",
        "app.components.LeftMenu.navbrand.title": "Kicks Dashboard",
      },
    },
    theme: {
      colors: {
        primary100: '#ecfcf2',
        primary500: '#73e6b4',
        primary600: '#36e8b6',
        primary700: '#12d1b4',
        danger700:  '#b72b1a',
        neutral150: '#f8dbac', // DISABLED BUTTON BG
        secondary100: '#241b2e', // INFO BOX COLOR
        success100: '#241b2e', // SUCCESS BOX BG
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
