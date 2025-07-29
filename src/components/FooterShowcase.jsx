import AnimatedOutline from "./AnimatedOutline.jsx";

export default function FooterShowcase() {
    return (
        <div className="relative w-full">
            <div className="absolute inset-0 z-10 pointer-events-none">
                <AnimatedOutline />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md space-y-6 z-0 relative">
                <img
                    src="/spider_footer.png"
                    alt="Bug Smasher Footer"
                    className="w-full rounded transition-transform duration-300 ease-in-out hover:scale-[1.015]"
                />
                <img
                    src="/alien_footer.png"
                    alt="Alienware Footer"
                    className="w-full rounded transition-transform duration-300 ease-in-out hover:scale-[1.015]"
                />
            </div>
        </div>
    );
}