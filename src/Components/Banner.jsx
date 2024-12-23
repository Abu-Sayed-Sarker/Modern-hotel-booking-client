import { Link } from "react-router-dom";




import img1 from "../assets/img4.jpg"


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>

                            <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-teal-600 text-center'>Study Abroad</h1>

                            <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>If you want to study abroad, then to fulfill your dream, we have brought you all the best student visas that will make your dream of studying abroad come true.</p>
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
                <div id="slide2" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>

                            <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-teal-600 text-center'>Jov in avrode</h1>

                            <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>If you want to work abroad then to fulfill your dream we have brought you all the best office visas that will make your dream of working abroad come true.</p>

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
                <div id="slide3" className="carousel-item relative w-full h-[90vh]">
                    <div className="w-full relative">
                        <img
                            src={img1}
                            className="w-full  h-[90vh]" />
                        <div className='absolute top-0 w-full backdrop-blur-sm h-[90vh]'>

                            <h1 className='lg:pt-40 pt-56 uppercase lg:text-9xl text-5xl font-bold text-teal-600 text-center'>World tour</h1>


                            <p className='lg:text-4xl lg:px-0 px-4 text-xl text-center max-w-6xl text-teal-400 mx-auto'>To make your world tour dreams come true, we have brought you the opportunity to visit some of the best and most popular countries. So don&apos;t delay and book the tourist visa of your choice now</p>

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