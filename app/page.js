"use client";
import Navbar from "@/components/global/navbar/Navbar";
import Carousel from "@/components/home/section_1/carousel/Carousel";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Popup from "@/components/home/section_2/popup/Popup";
import MultipleAI from "@/components/home/section_4/multipleAI/MultipleAI";
import SmartHome from "@/components/home/section_3/smarthome/SmartHome";
import Heading from "@/components/home/section_5/heading/Heading";
import Carousel3 from "@/components/home/section_6/carousel3/Carousel3";
import Customize from "@/components/home/section_7/Customize";
import BigCarousal from "@/components/home/section_7/BigCarousal";
import Recommendation from "@/components/home/section_9/recommendation/Recommendation";
import Innovative from "@/components/home/section_15/Innovative";
import InfoCards from "@/components/home/section_16/InfoCards";
import UserPermManagement from "@/components/home/section_13/UserPermManagement";
import GrandeurGateway from "@/components/home/section_12/GrandeurGateway";
import FlowCreation from "@/components/home/section_8/FlowCreation";
import AdvanceFlow from "@/components/home/section_10/AdvanceFlow";
import SmartSpeaker from "@/components/home/section_10_b/SmartSpeaker";
import Card_carousal_1 from "@/components/home/section_11/Card_carousal_1";
import Card_carousal_2 from "@/components/home/section_11/Card_carousal_2";
import Card_carousal_3 from "@/components/home/section_11/Card_carousal_3";
// import { ReactFlowProvider } from "reactflow";
// import Carousel3 from "@/components/home/section_8/carousel3/Carousel3";



const _Carousel = dynamic(() => import('@/components/home/section_1/carousel/Carousel'), { ssr: false });


export default function Home() {
  return (
    <div className=" flex flex-col place-items-center ">
      <Navbar/>
      <_Carousel/>
      <div className="bg-gradient-to-r to-[#5C755E] from-[#78A67C] w-[100%] h-[30px]"></div>
      <Popup/>
      <SmartHome/>
      <MultipleAI/>
      <Heading/>
      <Carousel3 />
      <div className="bg-gradient-to-r from-[#5C755E] to-[#78A67C] w-[100%] h-[5vh] mt-[-10px]"></div>
      <Customize/>
      <FlowCreation/>
      <Recommendation/>
      <AdvanceFlow/>
      <SmartSpeaker/>
      <Card_carousal_1/>
      <Card_carousal_2/>
      <Card_carousal_3/>
      <div className="bg-[#F5F5F5] h-[5vh]  mt-[-10px]"></div>
      <GrandeurGateway/>
      <UserPermManagement/>
      <Innovative/>
      <InfoCards/>

    </div>  
    );
}
