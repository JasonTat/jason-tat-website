import LinkedIn from "../../public/icons/2977346dcf8ee744bea80c79f503b44c.png"
import Github from "../../public/icons/946af03d916e146c2a87dfcf6116b163.png";
import Image from "next/image";


const myLinkedInUrl = "https://www.linkedin.com/in/jason-tat-4b66b3140/";
const myGithubUrl = "https://github.com/JasonTat";


const Socials = () => {
    return (
        <div className="flex flex-row ">
            <a href={myLinkedInUrl}>
                <Image src={LinkedIn} alt="LinkedIn" width={35} height={35}/>
            </a>
            <a href={myGithubUrl}>
                <Image src={Github} alt="LinkedIn" width={35} height={35}/>
            </a>

        </div>
    )
}

export default Socials;