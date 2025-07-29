import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Intro() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-1">👋 Hi, my name is Steven de León</h1>
            <div className="flex gap-3 text-[#58a6ff] mb-2">
                <a href="https://github.com/stevend-lab" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            </div>
            <p className="text-gray-300">
                🚀 Passionate fullstack web developer from Dell, creating robust and scalable web applications.
                Skilled in both front-end and back-end technologies, with a keen eye for user experience and performance optimization.
            </p>
        </div>
    );
}