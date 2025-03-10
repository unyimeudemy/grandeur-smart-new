import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import lorawancarousel from "/public/images/lorawancarousel.svg";
import blindcarousel from "/public/images/blindcarousel.svg";
import mpcarousel from "/public/images/mpcarousel.svg";
import soscarousel from "/public/images/soscarousel.svg";
import bulbsscarousel from "/public/images/bulbsscarousel.svg";
import gassensorcarousel from "/public/images/gassensorcarousel.svg";
import humansensorcarousel from "/public/images/humansensorcarousel.svg";

 
import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel.jsx"

// const images = [
//   {
//     images: 'lorawancarousel.svg',
//     text: 'LoRaWAN Ethernet'
//   },
//   {
//     images: 'blindcarousel.svg',
//     text: 'Curtain & Blind Control'
//   },
//   {
//     images: 'mpcarousel.svg',
//     text: 'Door & Window Sensor'
//   },
//   {
//     images: 'soscarousel.svg',
//     text: 'SOS'
//   },
//   {
//     images: 'bulbsscarousel.svg',
//     text: 'Smart Bulb'
//   },
//   {
//     images: 'gassensorcarousel.svg',
//     text: 'Human Presence Sensor'
//   },
//   {
//     images: 'humansensorcarousel.svg',
//     text: 'Gas Sensor'
//   },
//   {
//     images: 'lorawancarousel.svg',
//     text: 'LoRaWAN Ethernet'
//   },
//   {
//     images: 'blindcarousel.svg',
//     text: 'Curtain & Blind Control'
//   },
//   {
//     images: 'mpcarousel.svg',
//     text: 'Door & Window Sensor'
//   },
//   {
//     images: 'soscarousel.svg',
//     text: 'SOS'
//   },
//   {
//     images: 'bulbsscarousel.svg',
//     text: 'Smart Bulb'
//   },
//   {
//     images: 'gassensorcarousel.svg',
//     text: 'Human Presence Sensor'
//   },
//   {
//     images: 'humansensorcarousel.svg',
//     text: 'Gas Sensor'
//   },
//   {
//     images: 'lorawancarousel.svg',
//     text: 'LoRaWAN Ethernet'
//   },
//   {
//     images: 'blindcarousel.svg',
//     text: 'Curtain & Blind Control'
//   },
//   {
//     images: 'mpcarousel.svg',
//     text: 'Door & Window Sensor'
//   },
//   {
//     images: 'soscarousel.svg',
//     text: 'SOS'
//   },
//   {
//     images: 'bulbsscarousel.svg',
//     text: 'Smart Bulb'
//   },
//   {
//     images: 'gassensorcarousel.svg',
//     text: 'Human Presence Sensor'
//   },
//   {
//     images: 'humansensorcarousel.svg',
//     text: 'Gas Sensor'
//   },
// ]

const images = [
  { images: lorawancarousel, text: "LoRaWAN Ethernet" },
  { images: blindcarousel, text: "Curtain & Blind Control" },
  { images: mpcarousel, text: "Door & Window Sensor" },
  { images: soscarousel, text: "SOS" },
  { images: bulbsscarousel, text: "Smart Bulb" },
  { images: gassensorcarousel, text: "Human Presence Sensor" },
  { images: humansensorcarousel, text: "Gas Sensor" },
  { images: lorawancarousel, text: "LoRaWAN Ethernet" },
  { images: blindcarousel, text: "Curtain & Blind Control" },
  { images: mpcarousel, text: "Door & Window Sensor" },
  { images: soscarousel, text: "SOS" },
  { images: bulbsscarousel, text: "Smart Bulb" },
  { images: gassensorcarousel, text: "Human Presence Sensor" },
  { images: humansensorcarousel, text: "Gas Sensor" },
  { images: lorawancarousel, text: "LoRaWAN Ethernet" },
  { images: blindcarousel, text: "Curtain & Blind Control" },
  { images: mpcarousel, text: "Door & Window Sensor" },
  { images: soscarousel, text: "SOS" },
  { images: bulbsscarousel, text: "Smart Bulb" },
  { images: gassensorcarousel, text: "Human Presence Sensor" },
  { images: humansensorcarousel, text: "Gas Sensor" },
];

function MyCarousel1() {
  return (
    <div>
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        })
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >   
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem key={index} className="basis-[175px] ">
            <div>
              <Card className='flex justify-center rounded-[13px] '>
                <CardContent className="flex flex-col h-[160px]  aspect-square items-center justify-center">
                    <div className="h-[100%]">
                      <Image 
                        // src={`/images/${item.images}`}
                        src={item.images}
                        alt='Images'
                        width={100}
                        height={100}
                        unoptimized={true}
                        className="h-[95%] w-full object-contain"
                      />
                      <div>
                      <p className="text-[#212121] font-medium font-roboto text-[13px] text-nowrap text-center border-t pt-2">{item.text}</p>
                    </div>
                    </div>           
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    </div>
  )
}

export default MyCarousel1

