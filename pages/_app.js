import '../styles/tailwind.css'
// import Header from './layouts/header';
// import Footer from './layouts/footer';
const MyApp = ({ Component, pageProps }) => {

  return (

    <div>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );

}

export default MyApp
