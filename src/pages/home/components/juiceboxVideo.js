function JuiceboxVideoSection() {
    return (
        <section style={{ height: '100vh' }}>
            <video 
                autoPlay="autoplay" 
                muted="muted" 
                loop="loop" 
                playsInline="" 
                src="assets/videos/juicebox-animation.mov" 
                className="full-video" 
                style={{ objectPosition: '50% 50%', display: 'block' }}
            ></video>
        </section>
    )
}
export default JuiceboxVideoSection;