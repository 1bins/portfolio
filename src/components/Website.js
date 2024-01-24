import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Website = () => {
    const container = useRef();
    const inner = useRef();
    const slider = useRef();
    const text = useRef();
    const last = useRef();

    useGSAP(() => {
        let mm = gsap.matchMedia();
        let options = {
            isMobile: '(max-width: 500px)',
            isDesktop: '(min-width: 501px)'
        }

        mm.add(options, (context) => {
            const { isMobile, isDesktop } = context.conditions;

            if(isDesktop){
                const tl = gsap.timeline({defaults: {ease: 'none'}})
                .from('.webpage-desc .right-cont', {xPercent: 100}, 0)
                .from('.webpage-desc .small-img', {xPercent: 15}, 0)
                .to('.webpage-desc', {scale: 0.5})
                .from(text.current, {
                    yPercent: 100,
                    opacity: 0,
                }, '<')

                const tl2 = gsap.timeline({defaults: {ease: 'none'}})
                .from(inner.current, {xPercent: 100})
                .from('.webpage-desc .left-bg img', {scale: 1.4}, 0)
                .add(tl)
                .to(slider.current, {
                    xPercent: -85,
                    duration: 4,
                })

                ScrollTrigger.create({
                    trigger: container.current,
                    start: 'top top',
                    end: '+=5000',
                    animation: tl2,
                    pin: true,
                    scrub: 1,
                })
            }
        })
    }, { scope: container })


    return(
        <section id="website" ref={container}>
            <h3 className="blind">이전 회사 웹사이트</h3>
            <div className="web-inner" ref={inner}>
                <div className="website-list" ref={slider}>
                    <article className="webpage webpage-desc">
                        <div className="left-bg">
                            <img src={`${process.env.PUBLIC_URL}/images/website_intro_bg.jpg`} alt="웹사이트 인트로 이미지" />
                        </div>
                        <div className="right-cont">
                            <div className="small-img">
                            <img src={`${process.env.PUBLIC_URL}/images/website_intro_middle.jpg`} alt="웹사이트 인트로 이미지" />
                            </div>
                            <p className="title ff-en">
                                <span className="upper">PREV COMPANY</span>
                                <span className="lower">PROJECTS</span>
                            </p>
                            <p className="cont">이전 회사에서 작업했었던 웹사이트들 입니다</p>
                        </div>
                    </article>
                    <article className="webpage">
                        <a href="http://eggkorea.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website1.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="http://sbdh.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website2.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="http://kkck.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website3.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="https://www.hwahonghospital.com/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website4.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="http://www.davidtoy.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website5.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="https://cubebio.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website6.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage">
                        <a href="http://joosin.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website7.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                    <article className="webpage" ref={last}>
                        <a href="http://wbins.dothome.co.kr/" target="_blank" title="새 창으로 열기">
                            <div className="site-img">
                                <img src={`${process.env.PUBLIC_URL}/images/website8.jpg`} alt="웹사이트 캡처 이미지" />
                            </div>
                        </a>
                    </article>
                </div>
                <div className="website-text" ref={text}>
                    <p className="title">PREV COMPANY WEBSITES</p>
                    <p className="cont">이전 회사에서 작업했었던 대표적인 웹사이트입니다. (디자인&퍼블리싱)</p>
                </div>
            </div>
        </section>
    )
}

export default Website;