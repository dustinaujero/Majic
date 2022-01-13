import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LandingVideoSection() {
    const videoRef = useRef()
    useEffect(() => {
        console.log("video ref", videoRef)
        if (videoRef.current?.paused) {
            videoRef.current.play()
        }
    }, [videoRef])
    const navigate = useNavigate()
    return (
        <section style={{ height: 'calc(100vh - var(--header-height))' }}>
            <div className="video-container d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-white fw-bold" style={{ fontSize: '10em' }}>Juicebox</h1>
                {/* <h4 className="text-white fw-bold mb-5" style={{  }}>The Majic Sauce</h4> */}
                <button className="rounded-pill border-0 bg-white px-5 py-3" onClick={() => navigate('/products')}>
                    <h5 className="fw-bold my-0" >Try Juicebox now.</h5>
                </button>
            </div>
            <video 
                autoPlay="autoplay" 
                muted="muted" 
                loop="loop" 
                playsInline="" 
                src="https://majicbucket.s3.amazonaws.com/DMTNT_Cut01_720.mov" 
                // data-object-fit="cover" 
                // data-object-position="50% 50%" 
                className="splash-video" 
                style={{ objectPosition: '50% 50%', display: 'block' }}
                ref={videoRef}
            ></video>
        </section>
    )
}
export default LandingVideoSection;