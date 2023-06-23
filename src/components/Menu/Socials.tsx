import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';

const Socials = () => {
    return (
        <ul className='flex space-x-8 mt-4 lg:mt-0 lg:mb-20'>
            <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noreferrer"><FaLinkedin className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
            <li><a href="https://github.com/ruthmatieu" target="_blank" rel="noreferrer"><FaGithub className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
            <li><a href="https://twitter.com/ruthmatieu" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
            <li><a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
        </ul>
    )
}

export default Socials;