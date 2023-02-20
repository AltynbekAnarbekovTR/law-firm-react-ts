import ActionButton from "@/UI/ActionButton";
import HText from "@/UI/Header";
import { BenefitType, SelectedPage } from "@/types/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Reasons from "@/assets/Reasons.jpg";
import ReviewItem from "./ReviewsItem";
import useMediaQuery from "@/hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Банк 'Центральная Азия'",
    description:
      "Выражаем свою признательность коллективу Юридической компании Veritas consult. Юристы и бухгалтеры компании провели профессиональную работу: зарегистрировали филиал, оказали комплексное правовое сопровождение при получении соответствующих лицензий, а также осуществляют текущее бухгалтерское сопровождение деятельности филиала и остаются нашими надежными  и доверенными партнерами.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Банк 'KSB'",
    description:
      "Специалисты Юридической компании Veritas представляют интересы Швейцарского Банка в судебных органах, а также предоставляют юридические заключения по различным вопросам банковского и гражданского законодательства. Качественное предоставление услуг - один из важнейших признаков надежной компании. Мы всегда чувствуем это особенное внимание к поставленным задачам, с которыми юристы этой компании превосходно справляются. ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Компания 'Nature Republic'",
    description:
      "Юридическая Veritas – одна из лучших в Беларуси. Мы можем с уверенностью об этом говорить, так как компания NATURE REPUBLIC сотрудничает с Veritas с момента своей регистрации. Юристы этой компании осуществляют защиту прав на наш товарный знак и самое главное - проводят специализированную правовую работу по борьбе с недобросовестными конкурентами. Мы благодарны за вашу отзывчивость и клиентоориентированность.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Reviews = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");
  return (
    <section
      id={SelectedPage.Reviews}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <div>
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>НАДЕЖНЫЙ ПАРТНЁР</HText>
          <p className="my-5 text-sm">
            Принятие целей клиента, как своих собственных, один из основных
            принципов построения отношений с клиентами. Мы хотим расти и
            развиваться вместе с нашими клиентами. Мы ценим отзывы наших
            клиентов, они делают нас лучше и мотивируют нас к новым победам.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <ReviewItem
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          {isAboveMediumScreens && (
            <div className="mb-8 basis-2/6">
              <img
                className="mx-auto"
                alt="benefits-page-graphic"
                src={Reasons}
              />
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="basis-4/6">
            {/* TITLE */}
            <div className="relative">
              <div className=" before:absolute before:-top-20 before:-left-20 before:z-[1] before:max-w-[10px] before:content-abstractwaves">
                <div>
                  <HText>
                    ПОЧЕМУ <span className="text-primary-500">VERITAS</span>
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPT */}
            <div className="">
              <p className="my-5">
                1. {"  "}Сосредоточенность на четкой специализации. Как
                результат, наши специалисты регулярно отслеживают последние
                изменения в законодательстве, а также судебную и
                административную практику по вопросам регулирования бизнеса в
                Кыргызстане. 3. Большой практический опыт работы наших ведущих
                юристов и адвокатов непосредственно по своей специализации, а
                также постоянная практика в качестве лекторов и тренеров. Как
                результат, глубокое понимание как теоретических основ, так и
                практических особенностей правового регулирования бизнеса в
                Кыргызстане.
              </p>
              <p className="mb-5">
                2. Мы всегда практикуем комплексный подход к оказанию услуг,
                который учитывает одновременно и юридические, и налоговые нюансы
                в решении поставленных задач. Как результат, более эффективное
                управление правовыми и налоговыми рисками клиента.
              </p>
              <p className="mb-5">
                3. Большой практический опыт работы наших ведущих юристов и
                адвокатов непосредственно по своей специализации, а также
                постоянная практика в качестве лекторов и тренеров. Как
                результат, глубокое понимание как теоретических основ, так и
                практических особенностей правового регулирования бизнеса в
                Кыргызстане.
              </p>
            </div>

            {/* BUTTON */}
            <div className="relative mt-12">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
