import BfGenPage from "../components/bf_gen_page";

export const metadata = {
    title: 'The Big Finish Boxset Generator',
    openGraph: {
      title: 'The Big Finish Boxset Generator',
      description: 'Generate your own Big Finish boxset blurbs.'
    },
  }

const BigFinishGenerator = () => {
    return ( 
        <div >
        <BfGenPage />
        </div>
        
     );
}
 
export default BigFinishGenerator;