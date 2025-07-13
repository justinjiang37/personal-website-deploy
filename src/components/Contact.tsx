import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center flex-grow">
                <span className="text-2xl text-black mb-6 mt-12">
                    Reach out at justinyj [at] usc [dot] edu
                </span>
                <div className="flex space-x-8">
                    <a href="https://github.com/justinjiang37" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" className="text-black hover:text-gray-700 transition" />
                    </a>
                    <a href="https://www.instagram.com/justinjiang37" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="text-black hover:text-pink-500 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/justinjiang37/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-black hover:text-blue-700 transition" />
                    </a>
                </div>
            </div>
            <span className="text-2l text-black mb-12 text-center">
                Made by Justin Jiang using NextJS and Tailwind
            </span>
        </div>
    );
}