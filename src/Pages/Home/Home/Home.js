import React from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Services></Services>

            <div>


                <h2 className='text-5xl font-semibold text-center my-10'>My Natural Photos</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 ml-28 my-20'>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i5f18bffcfae8e73e/version/1606405693/best-natural-wonders-in-germany-lake-hintersee-copyright-claudiu-maxim-european-best-destinations.jpg">
                                    <img className='w-full rounded-xl' src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i5f18bffcfae8e73e/version/1606405693/best-natural-wonders-in-germany-lake-hintersee-copyright-claudiu-maxim-european-best-destinations.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://static.toiimg.com/photo/msid-89747605,width-96,height-65.cms">
                                    <img className='w-full rounded-xl' src="https://static.toiimg.com/photo/msid-89747605,width-96,height-65.cms" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg">
                                    <img className='w-full rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://www.capetownetc.com/wp-content/uploads/2022/09/pexels-jonathan-petersson-1237119.jpg">
                                    <img className='w-full rounded-xl' src="https://www.capetownetc.com/wp-content/uploads/2022/09/pexels-jonathan-petersson-1237119.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ieccbbbdaa5045432/version/1606406042/best-natural-wonders-in-germany-bastei-bridge-copyright-vlada-photo-european-best-destinations.jpg">
                                    <img className='w-full rounded-xl' src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ieccbbbdaa5045432/version/1606406042/best-natural-wonders-in-germany-bastei-bridge-copyright-vlada-photo-european-best-destinations.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181025124811/Candy-Skies.jpg">
                                    <img className='w-full rounded-xl' src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181025124811/Candy-Skies.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-5xl font-semibold text-center my-10 text-blue-700'>Award Wining Photos</h2>
                <p className='font-semibold text-center m-10 p-5'>sports photographer needs a camera that can capture fast-moving subjects. That means you'll need a fast shutter speed and burst mode. Sports photography gear also includes lenses that get you close to the action. Many photographers use telephoto lenses</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 ml-28 my-20'>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://www.si.com/.image/t_share/MTg1ODgyMTMxNzMyMzc1MjM1/sports_illustrated_2021_year_in_pictures_00007.jpg">
                                    <img className='w-full rounded-xl' src="https://www.si.com/.image/t_share/MTg1ODgyMTMxNzMyMzc1MjM1/sports_illustrated_2021_year_in_pictures_00007.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/12/143856.jpg">
                                    <img className='w-full rounded-xl' src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/12/143856.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://i1.adis.ws/i/canon/canon-pro-british-sports-photographer-award-2019-1?w=1140&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)">
                                    <img className='w-full rounded-xl' src="https://i1.adis.ws/i/canon/canon-pro-british-sports-photographer-award-2019-1?w=1140&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://images.singletracks.com/blog/wp-content/uploads/2019/11/AP-2289BNAFH2111_hires_jpeg_24bit_rgb_news-1170x780.jpg">
                                    <img className='w-full rounded-xl' src="https://images.singletracks.com/blog/wp-content/uploads/2019/11/AP-2289BNAFH2111_hires_jpeg_24bit_rgb_news-1170x780.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://storage.googleapis.com/orms-blog/1/2022/06/nicbothma-05.jpg">
                                    <img className='w-full rounded-xl' src="https://storage.googleapis.com/orms-blog/1/2022/06/nicbothma-05.jpg" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>

                    </div>
                    <div className=" w-5/6 bg-base-100 shadow-xl mb-10">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src="https://www.cricket.com.au/~/-/media/News/2015/04/Winner-Lewis_1.ashx?w=1600">
                                    <img className='w-full rounded-xl' src="https://www.cricket.com.au/~/-/media/News/2015/04/Winner-Lewis_1.ashx?w=1600" alt="" />
                                </PhotoView>
                            </PhotoProvider>

                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;