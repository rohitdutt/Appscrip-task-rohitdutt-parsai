'use client';

import { useEffect, useState } from "react";

export default function Footer() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center px-20 pt-20 pb-4 mt-12 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1248px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="text-xl font-bold text-white uppercase max-md:max-w-full">
                  Be the first to know
                </div>
                <div className="hidden md:block mt-8 text-base text-white max-md:max-w-full">
                  Sign up for updates from mettā muse.
                </div>
                <div className="block md:hidden text-base text-white max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
                </div>
                <div className="flex gap-4 justify-center mt-14 text-lg whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="grow justify-center items-start self-start py-3.5 pr-16 pl-6 bg-white text-neutral-300 w-fit max-md:px-5">
                    Enter your e-mail...
                  </div>
                  <div className="grow justify-center px-12 py-3.5 font-medium text-white uppercase bg-black rounded-md border border-white border-solid max-md:px-5">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
                <div className="hidden md:block text-xl uppercase max-md:max-w-full">
                  CONTACT US
                </div>
                <div className="block md:hidden text-sm uppercase max-md:max-w-full">
                  CALL US
                </div>
                <div className="flex flex-row md:flex-col gap-2">
                  <div className="mt-6 text-xs md:text-lg max-md:max-w-full">+44 221 133 5360</div>
                  <div className="mt-6 text-xs md:text-lg max-md:max-w-full ">
                    customercare@mettamuse.com
                  </div>
                </div>
                <div className="block md:hidden shrink-0 self-end mt-4 md:mt-7 max-w-full h-px bg-white border border-white border-solid w-[1248px]" />
                <div className="mt-4 md:mt-8 text-xs md:text-xl uppercase max-md:max-w-full">
                  Currency
                </div>
                <div className="flex gap-1.5 items-center self-start mt-2 md:mt-6 tracking-wider whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d677b2cfb327e26b79fed9d3dd9ad011442f106166057c6ceeb172e7a40847?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                    className="shrink-0 self-stretch w-3 md:w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0826f0179bf48701b79e7d666903256ed26bf87485435f6304d930dbbb5aaa9?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                    className="shrink-0 self-stretch my-auto w-1 aspect-square fill-white"
                  />
                  <div className="grow self-stretch my-auto text-xs md:text-lg">USD</div>
                </div>
                <div className="md:mt-5 text-xs max-md:max-w-full hidden md:block">
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 self-end mt-4 md:mt-7 max-w-full h-px bg-white border border-white border-solid w-[1248px]" />
        <div className="mt-4 md:mt-16 w-full max-w-[1248px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-lg text-white mt-1 md:mt-10">
                <div className="text-sm md:text-2xl font-bold">mettā muse</div>
                {!isMobile && (
                  <>
                    <div className="mt-7">About Us</div>
                    <div className="mt-4">Stories</div>
                    <div className="mt-4">Artisans</div>
                    <div className="mt-4">Boutiques</div>
                    <div className="mt-4">Contact Us</div>
                    <div className="mt-4 whitespace-nowrap">EU Compliances Docs</div>
                  </>
                )}
              </div>
            </div>
            <div className="bloack md:hidden shrink-0 self-end mt-4 md:mt-7 max-w-full h-px bg-white border border-white border-solid w-[1248px]" />
            <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
              <div className="grow mt-1 md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-lg text-white max-md:mt-6">
                      <div className="text-sm md:text-xl font-bold uppercase">
                        Quick Links
                      </div>
                      {!isMobile && (
                        <>
                          <div className="mt-7">Orders & Shipping</div>
                          <div className="mt-4">Join/Login as a Seller</div>
                          <div className="mt-4">Payment & Pricing</div>
                          <div className="mt-4">Return & Refunds</div>
                          <div className="mt-4">FAQs</div>
                          <div className="mt-4">Privacy Policy</div>
                          <div className="mt-4">Terms & Conditions</div>
                          <div className="self-end mt-10 text-sm text-center">
                            Copyright © 2023 mettamuse. All rights reserved.
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="bloack md:hidden shrink-0 self-end mt-4 md:mt-7 max-w-full h-px bg-white border border-white border-solid w-[1248px]" />
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                      <div className="text-sm md:text-xl font-bold text-white uppercase max-md:max-w-full">
                        Follow Us
                      </div>
                      {!isMobile && (
                        <div className="flex gap-3 self-start pr-2.5 mt-8">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcfc156ea33855b0471004c913c247d26437790fec668fb456584625afe638ad?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                            className="shrink-0 w-8 aspect-square"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6024d617fb236ccf0aaa9fc3dae1f6d773c06f768d9720e47f17ce940659bd5?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                            className="shrink-0 w-8 aspect-square"
                          />
                        </div>
                      )}
                      <div className="bloack md:hidden shrink-0 self-end mt-4 md:mt-7 max-w-full h-px bg-white border border-white border-solid w-[1248px]" />
                      <div className="mt-4 md:mt-16 text-sm md:text-xl font-bold text-white uppercase max-md:max-w-full">
                        mettā muse <span className="uppercase">Accepts</span>
                      </div>
                      <div className="flex gap-2 justify-left md:justify-center pr-12 mt-6 max-md:flex-wrap max-md:pr-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/187244943b1ea6f050e97a182016e69061656fbf05cececb2c6e83e7f3fb52cf?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2151c8f4ec91b031e85cf83270c747e71e5d9d5c422a6b54fe87253a45147a5?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77f14b68a05e99db81e7ddc00ea01e37968be6dcb78fb5e8edae74d9387a02d6?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f76ef096423c699940496b88c121df7f7b9c19c039fd106f37d08017c792f1e8?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b669e1fdc3b4c144d41f715bbacc24f6b70645b412cc77bf487e7ece5e8c403?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa84db8fad7a9779f2dc8dfceb7da03864b0d22ad9c66fa27f71c78b4d0234?apiKey=4d3440ead6e94f62bde2c2fab7d4002b&"
                          className="shrink-0 w-12 md:w-14 aspect-[1.59]"
                        />
                      </div>
                    </div>
                    <div className="block md:hidden self-end text-sm mt-8 text-white text-center w-full">
                      Copyright © 2023 mettamuse. All rights reserved.
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}