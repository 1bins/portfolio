import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Company = () => {
    const container = useRef();
    const front = useRef();
    const back = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({defaults: {ease: 'none'}})
        .to(front.current, {
            yPercent: -100
        })
        .to(back.current, {
            yPercent: -20
        }, '<')

        ScrollTrigger.create({
            trigger: container.current,
            start: 'top top',
            end: '+=2000',
            animation: tl,
            pin: true,
            pinSpacing: false,
            scrub: 1,
        })


    }, { scope: container })

    return(
        <section id="company_project" ref={container}>
            <h3 className="blind">이전에 만들었던 웹사이트 이미지들</h3>
            <div className="comp-inner">
                <div className="pj-front" ref={front}>
                    <div className="front-wrap">
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company2.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company3.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items items-right">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company4.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company5.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company6.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company7.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company12.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company9.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company10.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company11.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company8.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company2.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company3.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items items-right">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company4.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company5.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company6.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company7.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pj-back" ref={back}>
                    <div className="back-wrap">
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back2.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back3.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back2.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                        <div className="items-row">
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company_back3.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                            <div className="items">
                                <img src={`${process.env.PUBLIC_URL}/images/prev_company1.jpg`} alt="이전 회사 포트폴리오 이미지" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company;