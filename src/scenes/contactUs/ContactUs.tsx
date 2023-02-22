import { useForm } from "react-hook-form";
import { SelectedPage } from "@/types/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/UI/Header";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            СВЯЖИТЕСЬ С НАМИ ПРЯМО{" "}
            <span className="text-primary-500"> СЕЙЧАС</span>
          </HText>
          <p className="my-5">
            Вы можете получить профессиональную юридическую консультацию
            относительно регистрации бизнеса в Кыргызстане, задав интересующий
            вопрос юристу нашей компании. Предлагаем заполнить простую форму
            ниже. Консультация предоставляется бесплатно.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/el/wacapo"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Ваше имя"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Ваш E-mail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className=" text-red-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="Текст сообщения"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Отправить
              </button>
            </form>
          </div>

          <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-companyname">
              <img
                className="mx-auto md:w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
