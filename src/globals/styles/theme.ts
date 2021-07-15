const neutralColors = {
   dark: {
      'dark-darker': '#1E1E26',
      'dark-dark': '#2C2C36',
      'dark-default': '#3D3D4A',
   
      'dark-light': '#565666',
      'dark-lighter': 'rgba(114, 114, 133, 1)',
      'dark-disable': 'rgba(230, 230, 235, 1)',
   },
   light: {
      'light-darker': '#B2B2BD',
      'light-disabled': '#CECED6',
      'light-default': '#E6E6EB',

      'light-light': '#F0F0F5',
      'light-lighter': '#FAFAFC',
   }
};

const colors = {
   primary: '#0497f9',
   primaryLight: '#f2fafc',

   success: '#33cc95',
   successLight: '#f2fcf0',

   danger: '#e52e4d',
   dangerLight: '#fff5f7',
   
   text: '#969cb2',
   textCard: '#727285',
   textButtonSmall: '#747285',
   textButtonPrimary: '#FFFFFF',
   backgroundSelectedFilter: '#363F5F',
   title: '#363f5f',
   titleHeader: '#454F63',
   titleModal: '#2A2E43',
   titleButton: '#FFF',
   
   background: '#F0F0F5',
   white: '#FFFFFF',
   backgroundFilterItem: '#f0f0f5',
   shadowsCard: '#efefef',
   transparent: 'transparent',
}

const componentScale = {
   'total': 100,
   '1/4': 33.33,
   
   'card-width-default': 100,
   'card-width-small-x': 60,
   'card-width-small': 80,
   'card-width-medium': 136,
   'card-width-large': 247,
   
   'card-height-default': 100,
   'card-height-small-x': 72,
   'card-height-small': 80,
   'card-height-medium': 120,
   'card-height-large': 184,
   'card-border-color': 'rgba(240, 240, 245, 1)',
   

   'card-status-height': 184,
   'card-store-height': 256,

   'card-banner-width': 247,
   'card-banner-height': 120,

   'button-width-small': 88,
   'button-width': 160,
   'button-height': 48,
   'button-padding-vertical': 8,
   'button-padding-horizontal': 16,
   
   'radius-small': 6,
   'radius-medium': 12,
   'radius-large': 500,
}

const gridScale = {
   'total': 100,
   '1/4': 33.33,
   'xs': 16,
   'md': 20,
   'lg': 24,
   'xl': 28,
   'xxl': 32,
   'xxxl': 36,
   'display': 40,
};

const fontScale = {
   'tagline': 10,
   'caption': 11,
   'xxxs': 12,
   'xxs': 14,
   'xs': 16,
   'sm': 18,
   'md': 20,
   'lg': 24,
   'xl': 28,
   'xxl': 32,
   'xxxl': 36,
   'display': 40,
};

export const theme = {
   screen: {
      background: '#fff',
      paddingSmall: gridScale.xs,
      paddingDefault: gridScale.md,
      paddingLarge: gridScale.lg,
   },
   card: {
      widthDefault: componentScale["card-width-default"],
      widthSmallX: componentScale["card-width-small-x"],
      widthSmall: componentScale["card-width-small"],
      widthMedium: componentScale["card-width-medium"],
      widthLarge: componentScale["card-width-large"],
      
      heightDefault: componentScale["card-height-default"],
      heightSmallX: componentScale["card-height-small-x"],
      heightSmall: componentScale["card-height-small"],
      heightMedium: componentScale["card-height-medium"],
      heightLarge: componentScale["card-height-large"],

      paddingSmall: gridScale.xs,
      paddingDefault: gridScale.md,
      paddingLarge: gridScale.lg,
      
      borderRadius: componentScale["radius-medium"],
      borderRadiusSmall: componentScale["radius-small"],
      borderRadiusLarge: componentScale["radius-large"],
      borderColor: componentScale["card-border-color"],
      
      backgroundDefault: colors.white,

      borderColorDefault: '#E6E6EB',
   },
   fonts: {
      regular: 'Poppins_400Regular',
      medium: 'Poppins_500Medium',
      bold: 'Poppins_700Bold',
   },
   fontScale,
   colors,
   neutralColors,
}