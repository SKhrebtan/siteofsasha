import { useState } from "react";
import CustomAccordion from "./NewCoolAccordion";
import Screen from '../../img/acc/how-it-works.jpeg'
import Abs1 from '../../img/acc/how-it-works.jpeg'
import Abs2 from '../../img/acc/abs1.jpeg';
import Abs3 from '../../img/acc/abs2.jpeg';
import Abs4 from '../../img/acc/abs3.jpeg';
import Abs5 from '../../img/acc/abs4.jpeg';
import Abs6 from '../../img/acc/abs5.jpeg';

const HowItWorks = () => {

  const points = [
    {
      title:'Order placement',
      subpoints: [
        {
          title: 'a) Selection of the appropriate service package',
          src: Abs1,
        },
        {
          title:'b) Registration and payment',
          src: Abs2,
        },
      ],
    },
    {
      title: 'Manage your profile',
      subpoints: [
        {
          title: 'a) Uploading and deleting material',
          src: Abs3,
        },
        {
          title:'b) Ability to expand your own gallery',
          src: Abs4,
        },
        {
          title: 'c) Assistance on favorable terms',
          src: Abs5,
        },
      ],
    },
    {
      title: 'Share your info',
      subpoints: [
        {
          title: 'Opportunity to contribute a piece of your soul to your order',
          src: Abs6,
        },
      ],
    },
  ];
  const [activePoint, setActivePoint] = useState(null);
  const [activeSubpoint, setActiveSubpoint] = useState(null);
  const [isBlinking, setIsBlinking] = useState(false);

  const toggleBlink = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 500); 
  };

  const handleAccordionChange = (index, subpoint) => {
    if (index !== activePoint) {
      setActivePoint(index);
      setActiveSubpoint(subpoint);
      toggleBlink();
    } else {
      setActivePoint(null);
      setActiveSubpoint(subpoint);
      toggleBlink();
    }
  };

  const handleSubpointClick = (subpoint) => {
    if (subpoint.title !== activeSubpoint?.title) {
      setActiveSubpoint(subpoint);
      toggleBlink();
    }
  };

  return (
      <section
        className="max-w-[1250px] w-full relative flex flex-col-reverse lg:flex-row gap-[56px] lg:gap-[24px] px-[24px] lg:px-[44px] justify-between xl:px-[88px] pt-[96px] lg:pt-[104px] pb-[120px] bg-50"
      >
            <div className={`flex flex-col`}>
            {points.map((point, ind) => {
             
              const isActive = activePoint === ind;
              const isLast = points[ind + 1] === undefined;

              return (
                <CustomAccordion
                  key={ind}
                  isActive={isActive}
                  isLast={isLast}
                  point={point}
                  ind={ind}
                  handleAccordionChange={handleAccordionChange}
                  activePoint={activePoint}
                  handleSubpointClick={handleSubpointClick}
                  activeSubpoint={activeSubpoint}
                />
              );
            })}
          </div>
       <div
          className={`m-auto lg:m-0 w-full max-w-[344px] h-[222px] lg:max-w-[525px] lg:h-[342px] bg-cover bg-no-repeat bg-center rounded-[8px] border-2 border-100 ${
            isBlinking ? "blink-animation" : ""
          }`}
          style={{
            backgroundImage: `url(${activeSubpoint?.src || Screen.src})`,
            backgroundColor: "#D9D9D9",
            boxShadow: "0px 8px 44px 16px rgba(105, 71, 38, 0.05)",
          }}
          />
          </section>
      );
};

export default HowItWorks;