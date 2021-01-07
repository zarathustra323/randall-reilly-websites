const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  company: 'Randall-Reilly, LLC',
  logos: {
    navbar: {
      src: 'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps-logo.svg?h=45',
      srcset: [
        'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps-logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps-logo.svg?h=60',
      srcset: [
        'https://img.truckpartsandservice.com/files/base/randallreilly/all/image/static/tps-logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/truckpartsandservice/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/tpsmagazine', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/truck-parts-and-service-partner-solutions/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCcBeotmXyiX_LLp7CYcjY_Q', target: '_blank' },
  ],
  gcse: {
    id: '281101e8295e963ba',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-MWZ279J',
  },
  newsletterSignupBanner: {
    href: '#',
    description: 'Sign up for the <span class="newsletter-name">TPS Daily</span> to keep up with...',
  },
  newsletterSignupBannerLarge: {
    href: '#',
    name: 'TPS Daily',
    description: 'Sign up for the TPS Daily to keep up with...',
  },
  newsletterSignupFooter: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'TPS Daily',
    description: 'Sign up for the <span class="newsletter-name">TPS Daily</span> to keep up with...',
  },
  newsletterPushdown: {
    action: 'https://randallreilly.dragonforms.com/loading.do',
    hiddenInputs: [
      { name: 'omedasite', value: 'ov_subscriptions' },
    ],
    name: 'TPS Daily',
    description: 'Sign up for the <span class="newsletter-name">TPS Daily</span> to keep up with...',
  },
  wufoo: {
    userName: 'randallreilly',
  },
};
