const FontStyle = {
    NORMAL: 'normal',
    ITALIC: 'italic',
};
  
const FontDisplay = {
    SWAP: 'swap',
};
  
const FontVariant = {
    Light: '300',
    Regular: '400',
    Medium: '500',
    Semibold: '600',
};

const path = require('path');

/** Helper to auto-prefix a font src url with the path to local fonts. */
const getFontUrl = (src) => path.join('/src/fonts', src);
const getBuildUrl = (src) => path.join('/fonts', src);

const fonts = {
    body: {
      family: 'Public Sans',
      fallbacks: [
        `-apple-system`,
        `BlinkMacSystemFont`,
        `Segoe UI`,
        `Roboto`,
        `Oxygen`,
        `Ubuntu`,
        `Cantarell`,
        `Open Sans`,
        `Helvetica Neue`,
        `sans-serif`,
      ],
      weights: {
        regular: {
          variant: FontVariant.Regular,
          weight: '1 999',
          style: FontStyle.NORMAL,
          url: getFontUrl('PublicSans-VariableFont_wght.woff2'),
          buildUrl: getBuildUrl('PublicSans-VariableFont_wght.woff2'),
          display: FontDisplay.SWAP,
        }
      },
    },
    serif: {
      family: 'Crimson Pro',
      fallbacks: [`Monaco`, `Consolas`, `Courier New`, `monospace`],
      weights: {
        medium: {
          variant: FontVariant.Regular,
          weight: 500,
          style: FontStyle.NORMAL,
          url: getFontUrl('CrimsonPro-Medium.woff2'),
          buildUrl: getBuildUrl('CrimsonPro-Medium.woff2'),
          display: FontDisplay.SWAP,
        }
      },
    },
  };
  
  module.exports = fonts;