import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Sdata from "./Sdata";

function App() {

  console.log("data file",Sdata);
  const mapmethod=(val)=>{
    return(
      <>
      <Header name={val.name} title={val.title} id={val.id}/>
      </>
    )
  }

  return (
    <>
         {
      Sdata.map(mapmethod)
    }
    {/* <Header/> */}
      <Body/>
      <Footer/>
 
    

    </>
  );
}

export default App;
