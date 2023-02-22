import { SelectedPage, ClassType } from "@/types/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/UI/Header";
import Class from "./ServiceItem";
import { motion } from "framer-motion";

const classes: Array<ClassType> = [
  {
    name: "Юридическое сопровождение бизнеса",
    description:
      "VERITAS специализируется на предоставление юридических услуг для корпоративных клиентов.",
    image: image1,
  },
  {
    name: "Трудовое право",
    description:
      "VERITAS помогает работодателям грамотно оформить трудовые отношения. VERITAS помогает работникам защитить свои трудовые права.",
    image: image2,
  },
  {
    name: "Недвижимость и строительство",
    description:
      "VERITAS имеет многолетний опыт по вопросам земельного права, строительства и недвижимости.",
    image: image3,
  },
  {
    name: "Слияние и поглощение и корпоративное право",
    description:
      "Опыт работы в сфере слияния и поглощения (M&A) и корпоративного права VERITAS складывается на основе сопровождения сложных, комплексных и инновационных сделок по слиянию и поглощению.",
    image: image4,
  },
  {
    name: "Разрешение споров. Арбитраж. Медиация",
    description:
      "VERITAS за долгие годы накоплен огромный опыт представления интересов клиентов в судах всех инстанций, международных коммерческих арбитражах и третейских судах.",
    image: image5,
  },
  {
    name: "Семейное и наследственное право",
    description:
      "VERITAS помогает решить семейные вопросы и наследственные дела.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Services} className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>НАШИ УСЛУГИ</HText>
            <p className="py-5">
              Регистрация коммерческих и некоммерческих организаций, а также
              филиалов и представительств стала одним из основных направлений
              деятельности нашей компании. Поэтому наши юристы всегда в курсе
              последних изменений законодательства в этой области и знают все
              особенности процедур
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
