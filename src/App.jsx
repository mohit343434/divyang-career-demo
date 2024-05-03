// import { HelmetProvider } from "react-helmet-async";
import Router from "./routes/Router";
import { Suspense } from "react";
import Loader from "../Dashboard/DashboardComponents/GlobalComponents/Loader"

function App() {
   return (
      <Suspense fallback={<Loader/>}>
         {/* <HelmetProvider> */}


         <Router />
         {/* </HelmetProvider> */}
      </Suspense>
   );
}



export default App;

