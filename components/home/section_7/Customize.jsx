import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import humanpopcorn from "/public/images/humanpopcorn.svg"
import drivercustomize from "/public/images/drivercustomize.svg"
import customizeYourHome from "/public/images/customize-your-home.svg"
import enhanceCustomization from "/public/images/enhance-customization.svg"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"



const images = [
  {
    images: humanpopcorn,
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'
  },
  {
    images: drivercustomize,
    htext: 'Enhance Customization',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: humanpopcorn,
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: drivercustomize,
    htext: 'Enhance Customization',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: humanpopcorn,
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: drivercustomize,
    htext: 'Enhance Customization',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: humanpopcorn,
    htext: 'Customize Your Home',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
  {
    images: drivercustomize,
    htext: 'Enhance Customization',
    ptext: 'Personalize automation options for each room, like setting up acustomized Movie Night mode where lights dim and the entertainment system turns on.'

  },
];

function Customize() {
  return (

      <div 
        className="
          xl:px-[40px] mobile-320-400:px-1 w-[100%] xl:mt-[80px] mb-[109px] 
           
        "
      >
          <Carousel
          className="block xl:hidden"
          plugins={[
              Autoplay({
              delay: 2200,
              })
          ]}
          opts={{
              align: "start",
              loop: true,
          }}
          >   
          <CarouselContent>
              {images.map((item, index) => (
              <CarouselItem key={index} 
                className="
                  basis-[500px]
                "
              >
              <div className="relative w-[350px] h-[460px]  xl:w-[579px] xl:h-[701px] flex flex-col items-center justify-center">
                  <Image 
                      // src={`/images/${item.images}`}
                      src={item.images}

                      width={479}
                      height={701}
                      alt="Customize Images"
                      className="
                        xl:rounded-[40px] 
                        
                        rounded-[20px]
                        w-[320px]
                        h-[400px]
                        xl:w-[480px] 
                        xl:h-[601px] 
                        mx-[100px]
                        object-cover
                        mobile-320-400:w-[400px]
                        mobile-320-400:h-[400px]
                        mobile-401-480:w-[500px]
                        mobile-401-480:h-[400px]
                        mobile-320-400:object-cover
                        "
                  />
                  {/* Text on top of the image */}
                  <div 
                    className="
                      absolute 
                      inset-0 
                      flex 
                      flex-col 
                      items-center 
                      justify-center
                      text-white 
                      text-center 
                      xl:px-4 
                      xl:top-[-50%]">
                      <h2 
                      className="
                        xl:text-[25px] 
                        text-[22px]
                        font-custom 
                        font-bold 
                        xl:mb-2 
                        tracking-widest
                        xl:mt-[100px]
                        ">{item.htext}</h2>
                      <p 
                        className="
                        xl:text-[16px] 
                        text-[11px]
                        text-center
                        xl:w-[400px] 
                        xl:mt-3 
                        leading-relaxed 
                        tracking-wide
                        "
                        >
                          {item.ptext}
                        </p>
                  </div>
              </div>
              </CarouselItem>
              ))}
          </CarouselContent>
          </Carousel>

          <div className="hidden   w-[100%] h-auto xl:flex items-center justify-center gap-[15px] ">
            
            <div className='h-[756px] w-[756px]  ml-[160px] '> 
                <Image 
                    src='/images/customize-your-home.svg'
                    alt='Moon'
                    width={556}
                    height={556}
                />
            </div>
            <div className='h-[756px] w-[756px]  mr-[150px] '>
                <Image 
                    src='/images/enhance-customization.svg'
                    alt='Moon'
                    width={556}
                    height={556}
                />
                <div className="relative">

                </div>
            </div>

          </div>
      </div>


  )
}

export default Customize

