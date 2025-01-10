import { Link } from "react-router-dom";




import img1 from "../assets/img4.jpg"


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[60vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[60vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-white/20 h-[60vh]'>

                            <h1 className='lg:pt-32 pt-16 uppercase lg:text-6xl md:text-4xl text-3xl font-bold text-teal-600 text-center'>Standard Room</h1>

                            <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>Indulge in a luxurious suite with a separate living area, large king bed, and stunning views. Perfect for longer stays or special occasions.</p>
                            <div className="flex justify-center mt-8">
                                <Link to={'/rooms'}><button className="border border-teal-500 rounded-full gap-3 py-3 px-12 bg-teal-200 hover:bg-teal-700">Booking now</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[60vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[60vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-white/20 h-[60vh]'>

                            <h1 className='lg:pt-32 pt-16 uppercase lg:text-6xl md:text-4xl text-3xl font-bold text-teal-600 text-center'>Executive Room</h1>

                            <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>Designed for business travelers, this room offers a large desk, fast Wi-Fi, and a quiet atmosphere to ensure productivity and comfort.</p>

                            <div className="flex justify-center mt-8">
                                <Link to={'/rooms'}><button className="border border-teal-500 rounded-full gap-3 py-3 px-12 bg-teal-200 hover:bg-teal-700">Booking now</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[60vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[60vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm bg-white/20 h-[60vh]'>

                            <h1 className='lg:pt-32 pt-16 uppercase lg:text-6xl md:text-4xl text-3xl font-bold text-teal-600 text-center'>Luxury Room</h1>


                            <p className='lg:text-2xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>Experience ultimate luxury with a spacious room, modern decor, and high-end amenities, including a jacuzzi and a stunning view of the city skyline.</p>

                            <div className="flex justify-center mt-8">
                                <Link to={'/rooms'}><button className="border border-teal-500 rounded-full gap-3 py-3 px-12 bg-teal-200 hover:bg-teal-700">Booking now</button></Link>
                            </div>


                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle border bg-transparent">❮</a>
                        <a href="#slide1" className="btn btn-circle border bg-transparent">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;