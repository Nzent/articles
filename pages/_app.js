import '../styles/globals.css'
import "tailwindcss/tailwind.css";
// remix icons
import 'remixicon/fonts/remixicon.css'
import Router from 'next/router'
import nProgress from 'nprogress';
// NProgress
nProgress.configure({ easing: 'ease-in-out', speed: 300, showSpinner: false });
Router.onRouteChangeStart = () => nProgress.start();
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
