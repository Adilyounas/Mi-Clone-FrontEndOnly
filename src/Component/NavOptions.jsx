import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.jsx"
import "../Style/NavOption.css"

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

const [miPhonesToggle, setMiPhonesToggle] = useState(false);
const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
const [tvToggle, setTvToggle] = useState(false);
const [laptopToggle, setLaptopToggle] = useState(false);
const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
const [homeToggle, setHomeToggle] = useState(false);
const [audioToggle, setAudioToggle] = useState(false);
const [accessoriesToggle, setAccessoriesToggle] = useState(false);



useEffect(() => {
  
if (window.location.pathname === "/miPhones") {
   return setMiPhonesToggle(true)
}

if (window.location.pathname === "/redmiPhones") {
   return setRedmiPhonesToggle(true)
}

if (window.location.pathname === "/tv") {
   return setTvToggle(true)
}


if (window.location.pathname === "/laptop") {
  return  setLaptopToggle(true)
}

if (window.location.pathname === "/fitnessAndLifeStyle") {
   return setFitnessAndLifeStyleToggle(true)
}

if (window.location.pathname === "/home") {
  return  setHomeToggle(true)
}

if (window.location.pathname === "/audio") {
  return  setAudioToggle(true)
}

if (window.location.pathname === "/accessories") {
   return setAccessoriesToggle(true)
}


}, [])



    return (
        <div className="navOptions">
            {
                miPhonesToggle ? miPhones.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }

            {
                redmiPhonesToggle ? redmiPhones.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }

            {
                tvToggle ? tv.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }

            {
                laptopToggle ? laptop.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }

            {
                fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }


            {
                homeToggle ? home.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }


            {
                audioToggle ? audio.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }


            {
                accessoriesToggle ? accessories.map((item, index) => {
                  return  <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                }) : null
            }
        </div>
    )
}

export default NavOptions