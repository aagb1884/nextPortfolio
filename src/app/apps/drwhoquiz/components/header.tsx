import Image from "next/image";
import drWhoLogo from "../../../../../public/images/drWhoQuiz/Doctor-Who-Logo.png"

const Header = () => {
    return (<header>
                <Image 
                    src={drWhoLogo} 
                    width={100}
                     alt="dr-who-logo"
                     />
                     </header>
     );
}
 
export default Header;