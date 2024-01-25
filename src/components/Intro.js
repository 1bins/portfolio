import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

    const container = useRef();

    useGSAP(() => {
        let mm = gsap.matchMedia();
        let options = {
            isMobile: '(max-width: 500px)',
            isDesktop: '(min-width: 501px)'
        }

        mm.add(options, (context) => {
            const { isMobile: M, isDesktop: D } = context.conditions;

                const tl = gsap.timeline()
                .from('.name p:nth-child(1)', {xPercent: D ? -100 : 30, scale: D ? 8 : 6, duration: 1.5})
                .from('.name p:nth-child(2)', {y: '150vh', xPercent: -40, scale: 8, duration: 1.5}, '<')
                .from('.name p:nth-child(3)', {y: '-150vh', xPercent: 30, scale: 7, duration: 1.5}, '<')
                .from('.name p:nth-child(4)', {y: '150vh', scale: 10, duration: 2}, '<')
                .from('.name p:nth-child(5)', {y: '-150vh', x: 700, scale: 6, duration: 2}, '<')
                .from('.name p:nth-child(6)', {y: '-150vh', scale: 8, duration: 2}, '<')
                .from('.info', {y: 100, opacity: 0, duration: 0.7})
    
                ScrollTrigger.create({
                    trigger: container.current,
                    start: 'top top',
                    end: '+=2800',
                    animation: tl,
                    pin: true,
                    scrub: 2,
                })

        })

        
    }, { scope: container })

    return(
        <section id="intro">
            <h3 className="blind">인트로</h3>
            <div className="intro-inner" ref={container}>
                <div className="name ff-en">
                    <p>W</p>
                    <p>O</p>
                    <p>N</p>
                    <p>B</p>
                    <p>I</p>
                    <p>N</p>
                </div>
                <div className="info">
                    <p>항상 새로운 시도를 두려워하지 않는 개발자</p>
                    <p>"<b>서원빈</b>" 입니다</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;