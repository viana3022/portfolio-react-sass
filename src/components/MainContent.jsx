import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologiesContainer from './TecnologiesContainer';

import '../styles/components/maincontent.sass';

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TecnologiesContainer />
            <ProjectsContainer />
        </main>
    );
}

export default MainContent;