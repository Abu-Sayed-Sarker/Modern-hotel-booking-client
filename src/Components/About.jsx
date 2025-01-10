
const About = () => {
    return (
        <div className="w-11/12 mx-auto pb- mt-16">
            <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>About us</h1>
            <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>Please read the description below to know more about our journey.</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Our Story</h1>
                    <p>At Hotel Master, we are passionate about creating unforgettable experiences for travelers. With a wide range of premium accommodations, personalized services, and unbeatable locations, we aim to make every stay as comfortable and enjoyable as possible. Whether you&apos;re here for business or leisure, we offer the perfect environment to relax, work, and explore</p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Experience Hospitality Like Never Before</h1>
                    <p>At Hotel master, we take pride in offering top-tier accommodations and a seamless booking experience. Our state-of-the-art facilities, diverse room options, and dedicated customer service ensure that every guest feels valued and well cared for. Let us be your trusted partner for unforgettable stays around the world</p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Your Ideal Travel Partner</h1>
                    <p>At Hotel Master, we believe that every journey should be an unforgettable one. Our carefully curated spaces, attentive staff, and cutting-edge booking technology ensure a seamless and pleasant stay. Whether you&apos;re here for a quick getaway or an extended stay, we provide the perfect setting for relaxation and productivity.</p>
                </div>
            </div>
        </div>
    );
};

export default About;