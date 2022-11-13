import PreNavbar from "./Component/PreNavbar";
import Navbar from "./Component/Navbar.jsx"
import Slider from "./Component/Slider.jsx"
import Offers from "./Component/Offers.jsx"
import Heading from "./Component/Heading.jsx"
import StarProduct from "./Component/StarProduct.jsx"
import HotAccessoriesMenu from "./Component/HotAccessoriesMenu.jsx"
import HotAccessories from "./Component/HotAccessories.jsx"
import ProductReview from "./Component/ProductReview.jsx"
import Video from "./Component/Video.jsx"
import Banner from "./Component/Banner.jsx"
import Footer from "./Component/Footer.jsx"
import NavOptions from "./Component/NavOptions.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Objects from "./data/data.json"

function App() {
  return (
    <>
      <BrowserRouter>

        <PreNavbar />
        <Navbar />

        <NavOptions miPhones={Objects.miPhones} redmiPhones={Objects.redmiPhones} tv={Objects.tv} laptop={Objects.laptop} fitnessAndLifeStyle={Objects.fitnessAndLifeStyle} home={Objects.home} audio={Objects.audio} accessories={Objects.accessories} />

        <Slider start={Objects.banner.start} />
        <Offers offer={Objects.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct startProduct={Objects.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route exact path="music"
            element={<HotAccessories
              music={Objects.hotAccessories.music}
              musicCover={Objects.hotAccessoriesCover.music}

            />}

          />

          <Route exact path="smartDevice"
            element={<HotAccessories
              smartDevice={Objects.hotAccessories.smartDevice}
              smartDeviceCover={Objects.hotAccessoriesCover.smartDevice}

            />} />

          <Route exact path="home"
            element={<HotAccessories
              home={Objects.hotAccessories.home}
              homeCover={Objects.hotAccessoriesCover.home}

            />} />

          <Route exact path="lifestyle"
            element={<HotAccessories
              lifeStyle={Objects.hotAccessories.lifeStyle}
              lifeStyleCover={Objects.hotAccessoriesCover.lifeStyle}

            />} />

          <Route exact path="mobileacessories"
            element={<HotAccessories
              mobileAccessories={Objects.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={Objects.hotAccessoriesCover.mobileAccessories}

            />} />
        </Routes>

        <Heading text="PRODUCT REVIEWS" />

        <ProductReview productReview={Objects.productReviews} />

        <Heading text="VIDEO" />


        <Video Videos={Objects.videos} />

        <Heading text="IN THE PRESS" />

        <Banner banner={Objects.banner} />
        <Footer footer={Objects.footer} />

      </BrowserRouter>
    </>
  );
}

export default App;
