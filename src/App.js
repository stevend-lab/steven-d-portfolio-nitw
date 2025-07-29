import './index.css';
import Banner from './components/Banner';
import Intro from './components/Intro';
import RapidFire from './components/RapidFire';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import LanguageChart from './components/LanguageChart';
import Support from './components/Support';
import FooterShowcase from './components/FooterShowcase';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
    return (
        <div className="p-4 max-w-6xl mx-auto space-y-6 text-sm">
            <Banner />
            <Intro />
            <RapidFire />
            <Skills />
            <GitHubStats />
            <Support />
            <FooterShowcase />
            <ProjectsGrid />
            <p className="text-xs text-gray-500 text-center mt-12 mb-4">
                © 2025 Steven DeLeon Labs · Built with caffeine & keyboard mashing
            </p>
        </div>
    );
}

export default App;