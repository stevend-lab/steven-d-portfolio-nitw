const projects = [
    {
        title: "Best Calendar",
        description: "An awesome calendar app meant for an internship program",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/best-calendar"
    },
    {
        title: "Brain Music",
        description: "A live web version of MoodMusic, an app that plays music based on how you want to feel.",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/brain-music"
    },
    {
        title: "Bug Smasher",
        description: "A bug reporter built for Jeff",
        tech: "TypeScript",
        link: "https://github.com/stevend-lab/bug-smasher"
    },
    {
        title: "Bug Stomper",
        description: "A simple bug tracker",
        tech: "TypeScript",
        link: "https://github.com/stevend-lab/bug-stomper"
    },
    {
        title: "Bug Tester",
        description: "",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/bug-tester"
    },
    {
        title: "Cthulu",
        description: "",
        tech: "Python",
        link: "https://github.com/stevend-lab/cthulu"
    },
    {
        title: "Drag Burger",
        description: "",
        tech: "",
        link: "https://github.com/stevend-lab/drag-burger"
    },
    {
        title: "Eye Tracking",
        description: "",
        tech: "Python",
        link: "https://github.com/stevend-lab/eye-tracking"
    },
    {
        title: "Ideaboard",
        description: "react-rails-frontend",
        tech: "HTML",
        link: "https://github.com/stevend-lab/ideaboard"
    },
    {
        title: "Ideaboard Api",
        description: "ideaboard-backend",
        tech: "Ruby",
        link: "https://github.com/stevend-lab/ideaboard-api"
    },
    {
        title: "Image Scan",
        description: "image_Scanner",
        tech: "HTML",
        link: "https://github.com/stevend-lab/image-scan"
    },
    {
        title: "Kivy",
        description: "Learning kivy",
        tech: "Python",
        link: "https://github.com/stevend-lab/kivy"
    },
    {
        title: "Machine Learning Repo",
        description: "Using a Pycharm tutorial for machine learning on stack skills.",
        tech: "Python",
        link: "https://github.com/stevend-lab/machine-learning-repo"
    },
    {
        title: "Mario",
        description: "It's mario in java",
        tech: "Java",
        link: "https://github.com/stevend-lab/mario"
    },
    {
        title: "Math Buddy",
        description: "Working on a math app",
        tech: "",
        link: "https://github.com/stevend-lab/math-buddy"
    },
    {
        title: "Mood Music",
        description: "",
        tech: "Python",
        link: "https://github.com/stevend-lab/mood-music"
    },
    {
        title: "Mood Music Django",
        description: "An online music app that chooses music based on how you want to feel.",
        tech: "CSS",
        link: "https://github.com/stevend-lab/mood-music-django"
    },
    {
        title: "Mood Music UI",
        description: "The front end UI for mood music written in QT.",
        tech: "QMake",
        link: "https://github.com/stevend-lab/mood-music-ui"
    },
    {
        title: "My React App",
        description: "Experimenting with React",
        tech: "HTML",
        link: "https://github.com/stevend-lab/my-react-app"
    },
    {
        title: "Nukage Gm",
        description: "Nukage for GM",
        tech: "Yacc",
        link: "https://github.com/stevend-lab/nukage-gm"
    },
    {
        title: "Proto Inbetween Repo",
        description: "Prototype UE4 files for the inbetween level and the shop",
        tech: "",
        link: "https://github.com/stevend-lab/proto-inbetween-repo"
    },
    {
        title: "Scan My Cat",
        description: "A fun app for checking out what breed your cat actually is.",
        tech: "HTML",
        link: "https://github.com/stevend-lab/scan-my-cat"
    },
    {
        title: "Spintunnel",
        description: "",
        tech: "C#",
        link: "https://github.com/stevend-lab/spintunnel"
    },
    {
        title: "Thingamajic Engine",
        description: "Javascript Game Engine",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/thingamajic-engine"
    },
    {
        title: "Three JSEngine Repo",
        description: "",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/three-jsengine-repo"
    },
    {
        title: "Type Script Game Engine",
        description: "A game engine created in typescript and parcel, use npm start to boot it up",
        tech: "TypeScript",
        link: "https://github.com/stevend-lab/type-script-game-engine"
    },
    {
        title: "Unicorn Website",
        description: "",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/unicorn-website"
    },
    {
        title: "VTC App",
        description: "An app created for auto formatting dates",
        tech: "JavaScript",
        link: "https://github.com/stevend-lab/vtc-app"
    }
];
export default function ProjectsGrid() {
    return (
        <div className="bg-black py-12">
            <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((proj, idx) => {
                    const Card = (
                        <div className="bg-white rounded-xl shadow-md p-4 h-44 flex flex-col justify-between transform transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
                            <div>
                                <h3 className="text-lg font-semibold text-black">{proj.title}</h3>
                                <p className="text-sm text-gray-700">{proj.description}</p>
                            </div>
                            {proj.tech && (
                                <span className="text-xs text-gray-500 font-mono">{proj.tech}</span>
                            )}
                        </div>
                    );

                    return proj.link ? (
                        <a
                            key={idx}
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            {Card}
                        </a>
                    ) : (
                        <div key={idx}>{Card}</div>
                    );
                })}
            </div>
        </div>
    );
}