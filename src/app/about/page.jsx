"use client";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import about from "./../../../public/app/Designer.png";
import Image from "next/image";

export default function About() {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Appbar />
 
      {/* Hero Section with Tagline - Centered */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center px-6 pt-16 lg:pt-32 pb-12 space-y-8 lg:space-y-0 lg:space-x-8">
      <h1 className="text-3xl underline opacity-80 font-mono lg:hidden">About Us</h1>
        <div className="flex flex-col w-[100%] lg:flex-row items-center justify-center text-left lg:text-left lg:px-0">
          <section className="max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              <span className="block lg:inline">Compete.</span>
              <span className="block lg:inline">Trade.</span>
              <span className="block lg:inline">Win.</span>
            </h1>

            <h1 className="text-2xl lg:text-4xl font-bold lg:font-extrabold text-white mb-2 lg:mb-6 leading-tight animate__animated animate__fadeInUp animate__delay-1s">
              – Where Crypto Skills Meet Their Match.
            </h1>
            <p className="text-sm lg:text-lg text-opacity-80 max-w-3xl mx-auto lg:mx-0 lg:mb-6 animate__animated animate__fadeInUp animate__delay-2s">
              Welcome to{" "}
              <span className="font-semibold text-yellow-400">ProfitONN</span>,
              the premier destination for crypto traders looking to engage in
              exciting head-to-head trading competitions. Whether you’re a
              seasoned trader or a newcomer, we offer a unique platform where
              you can challenge others, test your strategies, and make the most
              of your crypto knowledge.
            </p>
          </section>
        </div>

        <div className="w-full lg:w-[36%] px-6 lg:px-0 transform transition duration-500 hover:scale-105">
          <Image
            src={about}
            alt="about-image"
            className="w-full max-w-[250px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="bg-gradient-to-t lg:py-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold lg:font-extrabold text-white mb-6 lg:mb-12">
            What We Offer
          </h2>
          <div className="w-[90vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Competitive Trading",
                description:
                  "Battle against real-time players in a secure and fast-paced environment.",
              },
              {
                title: "Advanced Matching Algorithm",
                description:
                  "Our proprietary algorithm ensures you’re paired with an opponent of similar trading acumen, so every competition is fair and engaging.",
              },
              {
                title: "Crypto Trading Tools",
                description:
                  "Access to advanced charts, real-time market data, and a variety of trading pairs to help you make informed decisions.",
              },
              {
                title: "Fixed Amount to Compete",
                description:
                  "Both players start with the same fixed amount to compete, ensuring fairness and a level playing field.",
              },
              {
                title: "Secure and Transparent",
                description:
                  "Trade with confidence, knowing your funds and personal data are protected with cutting-edge security protocols.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 p-4 lg:p-8 rounded-xl shadow-lg hover:shadow-lg hover:shadow-gray-500 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="pt-8 lg:pt-16 px-6 bg-gradient-to-t flex justify-center">
        <div className="text-center">
          <h2 className="text-4xl text-center font-semibold lg:font-extrabold text-white mb-4 lg:mb-8">
            How It Works
          </h2>
          <p className="text-sm lg:text-lg max-w-4xl mx-auto lg:mb-6 text-opacity-80">
            At <span className="font-semibold text-yellow-400">ProfitONN</span>,
            two players compete against each other in simulated or real-time
            crypto trading contests. Both players are given the same fixed
            amount to trade, ensuring that the competition is fair and based on
            skill, not the size of the portfolio. Our algorithm matches you with
            an opponent who has a similar level of trading expertise, making
            each contest balanced and engaging.
          </p>
          <p className="text-sm lg:text-lg max-w-4xl mx-auto text-opacity-80">
            The goal is to outperform your opponent by making the best trades
            within a set period. The player with the highest profit at the end
            wins the match. The competition is all about strategy, skill, and
            real-time decision-making.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-center pt-12 lg:pt-20 pb-4 lg:pb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
          Are you ready to face off against the best?
        </h2>
        <p className="text-lg lg:text-xl text-white mb-8 text-opacity-80">
          Join us today and start trading!
        </p>
        <button
          onClick={() => {
            router.push("/signup");
          }}
          className="bg-yellow-400 text-black px-8 py-2 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-yellow-600 hover:scale-105 hover:text-white shadow-xl"
        >
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}
