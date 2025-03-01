import { useEffect, useState } from "react";


const chooseCountryFlag = () => {
    const [countryCode, setCountryCode] = useState("")


        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
            //   setIpAddress(data.ip);
                console.log("data: ", data.ip)
                fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_21EdwHCkBUXdxaxU7xThnUr2mQjZc&ipAddress=${data.ip}`)
                .then((res) => res.json())
                .then((data) => {      
                    console.log("detail----: ", data.location.country)
                    setCountryCode(data.location.country)
                })
                .catch((err) => console.error("Error fetching country:", err));
            })
            .catch((err) => console.error("Error fetching country:", err));

        return countryCode;

}

export default chooseCountryFlag