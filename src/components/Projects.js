import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const Projects = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({defaults: {ease: 'none'}})
        .from('.intro img', {scale: 8})
        .from('.intro h4', {scale: 0}, '-=0.2')
        .from('.intro .top', {
            y: -30,
            opacity: 0,
            duration: 0.3
        }, '-=0.2')
        .from('.intro .left', {
            x: -30,
            opacity: 0,
            duration: 0.3
        }, '<')
        .from('.intro .right', {
            x: 30,
            opacity: 0,
            duration: 0.3
        }, '<')
        .from('.intro .proj-wrap', {delay: 0.5, scale: 1})
        .to('article:nth-child(1)', {yPercent: -100, duration: 1})
        .to('article:nth-child(1) .proj-screen', {yPercent: 100, duration: 1}, '<')
        .from('h3', {opacity: 0, y: 30}, '<')
        .to('article:nth-child(2)', {yPercent: -100, duration: 1})
        .to('article:nth-child(2) .proj-screen', {yPercent: 100, duration: 1}, '<')
        .to('article:nth-child(3)', {yPercent: -100, duration: 1})
        .to('article:nth-child(3) .proj-screen', {yPercent: 100, duration: 1}, '<')

        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top',
            end: '+=4500',
            animation: tl,
            pin: true,
            scrub: 2,
            // markers: true,
        })

    }, { scope: container })

    return(
        <section id="projects" ref={container}>
            <h3><span className="ff-en">REACT PROJECTS</span>
            <span>리액트를 공부하고 직접 만들어본 프로젝트들 입니다</span></h3>
            <div className="proj-inner">
                <article className="intro">
                    <div className="proj-screen">
                        <div className="proj-wrap">
                            <div className="side-text">
                                <p className="top">혼자서 만들어본 리액트 프로젝트<br/>마우스를 올리면 프로젝트 관련 설명과 깃허브/홈페이지 이동 버튼이 있습니다.</p>
                                <p className="left">@COPYRIHGT WONBINSEO</p>
                                <p className="right">I'M FRONTEND DEVELOPER</p>
                            </div>
                            <div className="middle-cont">
                                <div className="img-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/portfolio-intro.jpg`} alt="포트폴리오 인트로" />
                                </div>
                                <h4>REACT PROJECT</h4>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="proj-screen">
                        <div className="proj-wrap">
                            <div className="side-text">
                                <p className="top">DAILY DIARY</p>
                                <p className="left">@COPYRIHGT WONBINSEO</p>
                                <p className="right">I'M FRONTEND DEVELOPER</p>
                            </div>
                            <div className="middle-cont">
                                <div className="img-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/portfolio-intro1.jpg`} alt="포트폴리오 인트로" />
                                </div>
                                <h4>DAILY DIARY</h4>
                            </div>
                            <div className="hover-cont">
                                <p className="title">하루 하나, 감정다이어리</p>
                                <p className="txt">달력을 이용하여 하루에 한개 씩 나의 감정 일기장을 작성할 수 있는 리액트 앱입니다</p>
                                <ul className="btns">
                                    <li><a href="https://github.com/1bins/haru-diary" target="_blank" title="새 창으로 열기">깃허브 바로가기</a></li>
                                    <li><a href="#" onClick={() => {window.open('https://wonbin-haru-diary-project.web.app/', '_blank', 'width=400, height=800')}} target="_blank" title="새 창으로 열기">사이트 바로가기</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="proj-screen">
                        <div className="proj-wrap">
                            <div className="side-text">
                                <p className="top">MOMENTUM</p>
                                <p className="left">@COPYRIHGT WONBINSEO</p>
                                <p className="right">I'M FRONTEND DEVELOPER</p>
                            </div>
                            <div className="middle-cont">
                                <div className="img-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/portfolio-intro2.jpg`} alt="포트폴리오 인트로" />
                                </div>
                                <h4>MOMENTUM</h4>
                            </div>
                            <div className="hover-cont">
                                <p className="title">MOMENTUM</p>
                                <p className="txt">사용자의 이름을 저장하여 노출시키고, 할 일 목록과 날씨, 명언을 보여주는 리액트 앱입니다.</p>
                                <ul className="btns">
                                    <li><a href="https://github.com/1bins/momentum-react" target="_blank" title="새 창으로 열기">깃허브 바로가기</a></li>
                                    <li><a href="https://wonbin-momentum-project.web.app/" target="_blank" title="새 창으로 열기">사이트 바로가기</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="proj-screen">
                        <div className="proj-wrap">
                            <div className="side-text">
                                <p className="top">CATJJAL MAKER</p>
                                <p className="left">@COPYRIHGT WONBINSEO</p>
                                <p className="right">I'M FRONTEND DEVELOPER</p>
                            </div>
                            <div className="middle-cont">
                                <div className="img-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/portfolio-intro3.jpg`} alt="포트폴리오 인트로" />
                                </div>
                                <h4>CATJJAL MAKER</h4>
                            </div>
                            <div className="hover-cont">
                                <p className="title">갖고 싶어, 고양이짤</p>
                                <p className="txt">API를 사용하여 랜덤 고양이 짤을 불러온 후 내가 입력한 값이 해당 이미지에 저장되는 리액트 앱입니다.</p>
                                <ul className="btns">
                                    <li><a href="https://github.com/1bins/catjjal-maker" target="_blank" title="새 창으로 열기">깃허브 바로가기</a></li>
                                    <li><a href="https://1bins.github.io/catjjal-maker/" target="_blank" title="새 창으로 열기">사이트 바로가기</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects;