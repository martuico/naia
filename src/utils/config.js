const APIV1 = '/api/v1'
const APIV2 = '/api/v2'

module.exports = {
  name: 'Mar Tuico',
  prefix: 'exam',
  footerText: 'CloudCraft',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [],
  openPages: ['/'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    dashboard: `${APIV1}/dashboard`
  },
}
