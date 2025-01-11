import PoetryApp from "./poetryapp";

export const metadata = {
    title: 'poetRemixer Tool',
    openGraph: {
      title: 'poetRemixer Tool',
      description: 'An app for remixing and breaking texts into constituent words/letters.'
    },
  }

const Poetremixer = () => {
    return ( 
        <div >
        <PoetryApp />
        </div>
        
     );
}
 
export default Poetremixer;