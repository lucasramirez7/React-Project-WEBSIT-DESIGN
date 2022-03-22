import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Presentation from "./components/Presentation";
import StickyFooter from "./components/StickyFooter";
import Layout from "./components/Layout";




function App() {
  
 

  
return(

    <Layout > {/* EL LAYOUT RODEA LOS COMPONENES */}
        <Banner/>     {/* ESTOS SERIAN LOS COMPONENTES DENTRO DE LA FUNCION MAIN DE LA APP (LOS CHILDREN)*/}
        <Explanation/>
        <Presentation/>
        <StickyFooter/>
    </Layout>

  );
}

export default App;
