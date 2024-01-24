import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useGSAP(() => {
        const tl = gsap.timeline()
        .to('.proj-inner .section:nth-child(1)', {yPercent: -100})
        .to('.proj-inner .section:nth-child(1) .img-wrap', {yPercent: 100}, '<')
        // .to('.proj-inner .section:nth-child(2)', {yPercent: 100}, '<')
        
        ScrollTrigger.create({
            trigger: '.proj-inner',
            start: 'top',
            end: '+=2400',
            animation: tl,
            pin: true,
            // pinSpacing: false,
            scrub: 1,
        })
    })

    return(
        <section id="project">
            <div className="proj-inner">
                <div className="section">
                    <div className="img-wrap">
                    <img src={`${process.env.PUBLIC_URL}/images/website2.jpg`} alt="" />
                    </div>
                </div>
                <div className="section">
                <div className="img-wrap">
                    <img src={`${process.env.PUBLIC_URL}/images/website3.jpg`} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;