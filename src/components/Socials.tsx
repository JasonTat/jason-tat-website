import LinkedIn from "../../public/icons/2977346dcf8ee744bea80c79f503b44c.png"
import Github from "../../public/icons/946af03d916e146c2a87dfcf6116b163.png";
import Email from "../../public/icons/email-icon.png";
import Image from "next/image";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const myLinkedInUrl = "https://www.linkedin.com/in/jason-tat-4b66b3140/";
const myGithubUrl = "https://github.com/JasonTat";
const emailAddress = "jason.t123@live.ca"

const Socials = () => {
    return (
        <div className="flex flex-row">
            <a className="mr-2" href={myLinkedInUrl}>
                <Image src={LinkedIn} alt="LinkedIn" width={35} height={35}/>
            </a>
            <a className="mr-2 ml-2" href={myGithubUrl}>
                <Image src={Github} alt="LinkedIn" width={35} height={35}/>
            </a>
            <a className="ml-2" href={`mailto:${emailAddress}`}>
                <Image src={Email} alt="Email" width={35} height={40} />
            </a>

        </div>
    )
}

export default Socials;