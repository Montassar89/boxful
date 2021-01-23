import '../styles/tailwind.css'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
const MyApp = ({ Component, pageProps }) => {
  
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );

}

export default MyApp
