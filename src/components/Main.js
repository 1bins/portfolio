import '../assets/css/main.css'

import Intro from './Intro';
import Wall from './Wall';
import Company from './Company';
import Website from './Website';
import Projects from './Projects';

const Main = () => {
    return(
        <main>
        <div className="main">
            <h2 className="blind">인트로, 자기소개, 이전 회사에서 만들었던 웹사이트, 리액트로 만든 프로젝트</h2>
            <Intro></Intro>
            <Wall></Wall>
            <Company></Company>
            <Website></Website>
            <Projects></Projects>
        </div>
        </main>
    )
}

export default Main;