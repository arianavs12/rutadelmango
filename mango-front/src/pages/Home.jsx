import AppAppBar from "../components/Nav";
import AppFooter from "../components/Footer";
//import ProductCTA from "../components/ProductCTA";
import ProductCategories from "../components/ProductCategories";
import ProductHero from "../components/ProductHero";
// import ProductHowItWorks from "../components/ProductHowItWorks";
//import ProductSmokingHero from "../components/ProductSmokingHero";
// import ProductValues from "../components/ProductValues";
// import withRoot from "../modules/withRoot";


function App(props) {
  return (
    <div className="App">
      <AppAppBar {...props}/>
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA />
      <ProductSmokingHero /> */}
      <AppFooter />
    </div>
  );
}
export default App;