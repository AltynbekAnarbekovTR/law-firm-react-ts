import HomePageText from "@/assets/HomePageText.png";
import HomePage from "@/assets/HomePage.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

import ActionButton from "@/UI/ActionButton";
import { SelectedPage } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}

        <div className="z-10 mt-32 md:basis-3/5">
          {" "}
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-10 before:z-[-1] md:before:content-companyname">
                <p className="font-montserrat text-6xl">VERITAS</p>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Юридическая компания Veritas cтремится содействовать развитию
              бизнеса посредством предоставления профессиональных юридических
              услуг по защите прав и законных интересов предпринимателей и
              оказания комплекса профессиональных услуг, который позволит
              предпринимателям сосредоточиться непосредственно на развитии
              бизнеса и решении бизнес задач, передав при этом решение всех
              юридических, бухгалтерских и налоговых вопросов опытным
              специалистам нашей компании.
            </p>
          </div>
          {/* Actions */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Связаться
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Reviews)}
              href={`#${SelectedPage.Reviews}`}
            >
              <p>Узнать больше</p>
            </AnchorLink>
          </div>
        </div>
        {/* Image */}
        <div
          className="mx-auto mt-8 flex max-w-[310px] basis-3/5
          justify-center md:z-10 md:ml-20 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePage} />
        </div>
      </div>
      {/* SPONSORS */}
      {/* {isAboveMediumScreens && ( */}
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className=" flex justify-center  md:mx-auto md:block md:w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="redbull-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
          </div>
        </div>
      </div>
      {/* )} */}
    </section>
  );
};

export default Home;
