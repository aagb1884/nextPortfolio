import Image from "next/image";
import drWhoLogo from "../../../../../public/images/drWhoQuiz/Doctor-Who-Quiz-Logo.png"

const Header = () => {
    return (
                <Image src={drWhoLogo} 
                     alt="dr-who-logo"
                     width ={400}
                     height={125} />
     );
}
 
export default Header;