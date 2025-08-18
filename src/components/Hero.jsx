const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full px-4 sm:px-12 gap-8">
            <div className="avatar mb-6 md:mb-0">
                <div className="w-40 h-40 md:w-56 md:h-56 max-w-60 rounded-full overflow-hidden">
                    <img src="./images/wife.jpg" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <section className="flex flex-row gap-2 mb-4">
                    <div className="badge badge-outline text-xs md:text-base">IPB University</div>
                    <div className="badge badge-outline text-xs md:text-base">M0403241082</div>
                    <div className="badge badge-outline text-xs md:text-base">Proxy Abelian</div>
                </section>
                <h1 className="hero-h1 m-0 p-0 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                    JULIUS CALVIN KURNIADI
                </h1>
            </div>
        </div>
    )
};

export default Hero;