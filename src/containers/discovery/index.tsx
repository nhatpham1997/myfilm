import React from "react";
import Slider from "react-slick";

export default function Discovery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-2/3 h-full bg-black flex flex-col align-center">
          <div className="w-[90%] h-[20rem] mt-10 mb-10 m-auto rounded-xl">
              <Slider {...settings}>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] bg-white rounded-lg" src="https://static.mservice.io/blogscontents/s770x370/momo-upload-api-210830131124-637659258849749831.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] rounded-lg" src="https://sportshub.cbsistatic.com/i/2022/01/21/39353431-b343-4e92-af41-aeaa29d54bd6/spider-man-no-way-home-international-japanese-poster.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] rounded-lg" src="https://genk.mediacdn.vn/k:2015/2-img-201508221718357424-1440489597953/xep-hang-15-phim-bom-tan-he-2015-tu-do-den-hay-nhat.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] rounded-lg" src="https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/review/phim/The-Rescue-2020-Doi-cuu-ho-khan-cap.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] rounded-lg" src="https://topreview.vn/wp-content/uploads/2019/09/hai-phuong-phim-chieu-rap-viet-nam-hay-nhat-2019.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                  <img className="object-contain w-[100%] h-[20rem] rounded-lg" src="http://data.voh.com.vn/voh/Image/2019/05/29/aladdin15524151455461280w_20190529150000.jpg" alt="" />
                </div>

              </Slider>
          </div>
          <div className="flex flex-col w-[90%] h-[20rem] m-auto text-white">
            <p>Trending Now</p>
            <div className="flex justify-between">
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white   rounded-xl"></div>
            </div>
          </div>

          <div className="flex flex-col w-[90%] h-[20rem] m-auto text-white">
            <p>Trending Now</p>
            <div className="flex justify-between">
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white   rounded-xl"></div>
            </div>
          </div>

          <div className="flex flex-col w-[90%] h-[20rem] m-auto text-white">
            <p>Trending Now</p>
            <div className="flex justify-between">
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white   rounded-xl"></div>
            </div>
          </div>

          <div className="flex flex-col w-[90%] h-[20rem] m-auto text-white">
            <p>Trending Now</p>
            <div className="flex justify-between">
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white rounded-xl"></div>
              <div className="w-[23%] h-[18.5rem] bg-white   rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 h-full bg-black">
          <div className="flex relative mx-auto w-3/4  max-w-md border-2 p-2 mt-10 rounded-lg">
            <input className="w-full bg-black text-white focus:outline-none" placeholder="Search..." />
            <button className="absolute top-2 right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="w-full h-full flex flex-col text-white">
            <p className="mt-5 mb-5 ml-[40%]">Top Search</p>
            <div className="flex flex-col">
              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>
              
              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex w-full justify-between">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>
              
              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>

              <div className="flex w-3/4 h-[5rem]  m-auto mb-4">
                <div className="flex">
                  <img className="w-[8rem] h-full bg-slate-600 rounded-lg" src="" alt="" />
                  <p>Euphoria</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}
