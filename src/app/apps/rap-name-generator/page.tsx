import RapNameGenerator from "./components/rap_name_generator";


export const metadata = {
    title: "Rap Name Generator",
    openGraph: {
      title: "Rap Name Generator",
    },
  }

const RapNameGeneratorLandingPage = () => {
    
    return ( 
        <RapNameGenerator />
     );
}
 
export default RapNameGeneratorLandingPage;