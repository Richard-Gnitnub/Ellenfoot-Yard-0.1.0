// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Ellenfoot Yard',
    description: 'A blog to document my 3d printing, coding, electronics and modelling hobbies. Deployed through Github, hosted on Github pages, edited in Nuxt Studio',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://github.com/Richard-Gnitnub/Ellenfoot-Yard',

        text: 'Ellenfoot Yard'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: 'https://www.instagram.com/cumbrian_railway_modeller/',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'https://github.com/Richard-Gnitnub/Ellenfoot-Yard'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})