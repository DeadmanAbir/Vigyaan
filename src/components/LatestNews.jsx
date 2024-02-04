import React from 'react'
import speaker from "../assets/speaker.jpg"
import movie from "../assets/movie.jpg"
import exhibition from "../assets/exhibition.jpg"
import StandUp from "../assets/stand up.jpg"
function LatestNews() {
    return (
        <div className="page-component__bg_image_box bg-custom-color" id="posts-05-299441">
            <div className="page-component__bg_overlay_box" style={{ backgroundColor: '#f6e3da' }} />
            <div className="page-component__wrapper" style={{ zIndex: 111, paddingTop: '60px', paddingBottom: '120px' }}>
                <div className="posts-05">
                    <div className="container container--small">
                        <div className="title-box title-box--center">
                            <h2 className="heading">Latest Events</h2>
                            <div className="title-box__text content_box">
                                Stay updated with our latest events
                            </div>
                        </div>
                    </div>
                    <div className="container container--large">
                        <div className="posts-05__wrapper">
                            <div className="posts-05__item">
                                <img src={speaker} className='posts-05__img_box posts-05__img_box--small' alt='speaker' />
                                <div className="posts-05__text">
                                    <h3 className="posts-05__title">
                                        Speaker Session<span className="posts-05__title_info">Vigyaan 2022</span>
                                    </h3>
                                    <div className="posts-05__info content_box">
                                        A Speaker Session unveiling cuttingedge science. Engage with experts,
                                        discussions, Q&A, and emerging
                                        technologies exploration.
                                    </div>

                                </div>
                            </div>
                            <div className="posts-05__item">
                                <img src={exhibition} className='posts-05__img_box posts-05__img_box--small' alt='sceince exhibition' />

                                <div className="posts-05__text">
                                    <h3 className="posts-05__title">
                                        Science Exhibition
                                        <span className="posts-05__title_info">Learn from cool projects</span>
                                    </h3>
                                    <div className="posts-05__info content_box">
                                        Express research findings in a
                                        concise, engaging manner. Share
                                        insights, encourage discussion, and
                                        showcase knowledge. Interactive
                                        Q&A session included.
                                    </div>

                                </div>
                            </div>
                            <div className="posts-05__item">
                                <img src={StandUp} className='posts-05__img_box posts-05__img_box--small' alt='movie screening' />

                                <div className="posts-05__text">
                                    <h3 className="posts-05__title">
                                        Stand Up

                                        <span className="posts-05__title_info">Enjoying the show with speakers</span>
                                    </h3>
                                    <div className="posts-05__info content_box">
                                        Live, comedic stand-up show.
                                        Humorous anecdotes, jokes, and
                                        audience interaction. Laughterpacked entertainment for a
                                        memorable and enjoyable
                                        experience
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default LatestNews