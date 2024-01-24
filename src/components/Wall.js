import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Wall = () => {

    const container = useRef();
    const inner = useRef();
    const front = useRef();
    const side = useRef();

    useGSAP(() => {
        const tl = gsap.timeline()
        .set(side.current, {
            x: front.current.offsetWidth / 2,
            rotationY: 90
        })
        .set(front.current, {
            z: side.current.offsetWidth / 2
        })
        .from('.wall-front .wall-label:not(.show) span', {
            opacity: 0,
            stagger: {
                each: 0.05,
                from: 'random'
            }
        })
        .to(inner.current, {
            rotationY: -90,
            duration: 5.5,
        })
        .to('.wall-side .wall-label:not(.show) span', {
            opacity: 0,
            stagger: {
                each: 0.05,
                from: 'random'
            }
        })
        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top',
            end: '+=3000',
            animation: tl,
            pin: true,
            scrub: 2,
            onUpdate: ({ progress }) => {
                if(progress > 0.9){
                    gsap.to('.wall-side .show', {
                        color: '#1bccf2'
                    })
                }
            }
        })
    }, { scope: container })

    return(
        <section id="wall" ref={container}>
            <h3 className="blind">자기소개</h3>
            <div className="wall-inner" ref={inner}>
                <div className="wall-front" ref={front}>
                    <div className="wall-label">
                        <span>H</span><span>T</span><span>M</span><span>L</span><span>/</span><span>C</span><span>S</span><span>S</span><span>/</span><span>J</span><span>S</span><span>/</span><span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
                    </div>
                    <div className="wall-label">
                        <span>H</span><span>T</span><span>M</span><span>L</span><span>/</span><span>C</span><span>S</span><span>S</span><span>/</span><span>J</span><span>S</span><span>/</span><span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
                    </div>
                    <div className="wall-label show">
                        <span>H</span><span>T</span><span>M</span><span>L</span><span>/</span><span>C</span><span>S</span><span>S</span><span>/</span><span>J</span><span>S</span><span>/</span><span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
                    </div>
                    <div className="wall-label">
                        <span>H</span><span>T</span><span>M</span><span>L</span><span>/</span><span>C</span><span>S</span><span>S</span><span>/</span><span>J</span><span>S</span><span>/</span><span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
                    </div>
                    <div className="wall-label">
                        <span>H</span><span>T</span><span>M</span><span>L</span><span>/</span><span>C</span><span>S</span><span>S</span><span>/</span><span>J</span><span>S</span><span>/</span><span>R</span><span>E</span><span>A</span><span>C</span><span>T</span>
                    </div>
                </div>
                <div className="wall-side" ref={side}>
                    <div className="wall-label">
                        <span>I</span><span>'</span><span>m</span><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>E</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>
                    <div className="wall-label">
                        <span>I</span><span>'</span><span>m</span><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>E</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>
                    <div className="wall-label show">
                        <span>I</span><span>'</span><span>m</span><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>E</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>
                    <div className="wall-label">
                        <span>I</span><span>'</span><span>m</span><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>E</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>
                    <div className="wall-label">
                        <span>I</span><span>'</span><span>m</span><span>F</span><span>r</span><span>o</span><span>n</span><span>t</span><span>E</span><span>n</span><span>d</span><span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wall;