"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { useInView } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import { EmailGetCount, EmailPost } from "@/lib/api";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import {
  CheckIcon,
  ChevronRightIcon,
  Download,
  Heart,
  HomeIcon,
  Users,
} from "lucide-react";
import Ripple from "@/components/magicui/ripple";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Input } from "@/components/ui/input";
import { TextGenerateEffect } from "@/components/ui/text-generate";
import { WavyDotPattern } from "@/components/ui/wavy-dot-background";

// Separate HomeSection component
const HomeSection = ({ count }: { count: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.9 });
  return (
    <section
      id="home"
      ref={ref}
      className={`hero h-[97vh] rounded-md md:rounded-[50px] overflow-clip flex flex-col gap-4 items-center m-3 ${
        isInView ? "animate-inView" : "animate-outView"
      }`}
    >
      <div className="flex w-full px-3 justify-around">
        <div className="pt-10">
          <div className="bg-black/70 backdrop-blur-3xl px-6 py-10 rounded-[45px] flex flex-col gap-10 text-white items-center text-2xl">
            <a
              href="#home"
              className="cursor-pointer transition-all hover:bg-white hover:text-black rounded-full p-5"
            >
              <HomeIcon />
            </a>
            <a
              href="#team"
              className="cursor-pointer transition-all hover:bg-white hover:text-black rounded-full p-5"
            >
              <Users />
            </a>
            <a
              href="#"
              className="cursor-pointer transition-all hover:bg-white hover:text-black rounded-full p-5"
            >
              <Download />
            </a>
            <a
              href="#waitlist"
              className="cursor-pointer bg-white text-black rounded-full p-5"
            >
              <Heart />
            </a>
          </div>
        </div>
        <Image
          src="/hero-screenshot.webp"
          width={1920}
          height={1080}
          alt="Never gonna give you up, Never gonna let you down."
          className={`min-w-[660px] md:w-5/6 -top-20 -left-9 md:left-0 relative backdrop-blur-lg drop-shadow-md ${
            isInView ? "animate-imageInView" : "animate-imageOutView"
          }`}
        />
        <h1 className="pt-10 text-6xl text-white">
          <NumberTicker className="text-white" value={count} />
        </h1>
      </div>
      <div
        className={`transition-all ease-in-out duration-1000  flex flex-col gap-2 items-center relative  ${
          isInView ? "lg:-top-48" : "lg:top-32"
        }`}
      >
        <GradualSpacing
          className="w-full text-7xl md:text-8xl font-bold text-center text-neutral-50"
          text="PROJECT"
        />
        <GradualSpacing
          className="w-full text-7xl md:text-8xl font-bold text-center text-neutral-50"
          text="WEB"
        />
        <a href="#waitlist">
          <Button className="w-fit px-7 rounded-full bg-neutral-50 bg-opacity-40 text-lg text-neutral-50 backdrop-blur-lg font-bold">
            Join Waitlist
          </Button>
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [joinStatus, setJoinStatus] = useState<boolean>(false);
  useEffect(() => {
    EmailGetCount().then((data) => {
      setCount(data);
    });
  }, []);
  async function waitlistAction(formData: FormData) {
    formData.get("email") !== "" &&
      (await EmailPost(formData.get("email") as string).then(() => {
        setJoinStatus(true);
      }));
  }
  return (
    <main className="flex flex-col gap-0 overflow-hidden">
      <HomeSection count={count} />
      <section className="m-3 min-h-[100vh] flex flex-col gap-4 items-center">
        <h1 className="text-3xl lg:text-5xl py-20 text-center text-[#468795]">
          A browser made for developers, by developers
        </h1>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 w-full max-w-[1900px] lg:w-10/12">
          <div className="flex flex-col items-center min-h-44 max-h-52 md:max-h-72 rounded-xl split overflow-clip">
            <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-50 font-bold p-4 md:p-6 text-center h-1/2">
              Horizontal & Vertical Split Tabs
            </h2>
            <Image
              src="/split.webp"
              width={633}
              height={222}
              alt="split tabs"
              className="min-w-[400px] md:max-w-[800px] relative"
            />
          </div>
          <div className="flex flex-col items-center min-h-44 max-h-52 md:max-h-72 rounded-xl clipboard overflow-clip">
            <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-50 font-bold p-4 md:p-6 text-center h-1/2">
              Cloud Synced Clipboard
            </h2>
            <Image
              src="/milanote.webp"
              width={506}
              height={222}
              alt="clipboard"
              className="min-w-[300px] md:min-w-[600px] relative"
            />
          </div>
          <div className="flex flex-col col-span-2 md:row-start-2 items-center min-h-44 max-h-52 md:max-h-72 rounded-xl vscode overflow-clip">
            <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-50 font-bold p-4 md:p-6 text-center">
              VSCode Integration
            </h2>
            <Image
              src="/vscode.webp"
              width={1000}
              height={403}
              alt="vscode"
              className="w-5/6 relative md:top-3 drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center min-h-44 max-h-52 md:max-h-72 rounded-xl terminal overflow-clip">
            <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-50 font-bold p-4 md:p-6 text-center h-1/2">
              Access the Terminal
            </h2>
            <Image
              src="/terminal.webp"
              width={700}
              height={467}
              alt="terminal"
              className="min-w-[350px]"
            />
          </div>
          <div className="flex flex-col items-center min-h-44 max-h-52 md:max-h-72 rounded-xl custom overflow-clip">
            <h2 className="text-lg md:text-3xl lg:text-4xl text-neutral-50 font-bold p-4 md:p-6 text-center">
              Custom Widgets
            </h2>
            <Image
              src="/widget.webp"
              width={700}
              height={600}
              alt="widget"
              className="min-w-[100px] w-3/4"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col justify-center items-center mt-3">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 ">
          <h1 className="text-4xl text-center p-8 md:text-6xl md:w-3/5 z-10">
            <TextGenerateEffect
              words={
                "AI that does the boring shit so you can do the cool and creative stuff"
              }
            />
          </h1>
          <Ripple />
        </div>
      </section>

      <section
        id="team"
        className="mt-9 bg-neutral-950 p-7 gap-5 flex flex-col items-center"
      >
        <h2 className="text-neutral-50 text-4xl">Meet the Team</h2>
        <AvatarCircles
          avatarUrls={["/milan.webp", "/goutham.webp"]}
          socialUrls={[
            "https://x.com/milansbagels",
            "https://x.com/notfridge_ok",
          ]}
        />
      </section>

      <section
        id="waitlist"
        className="flex flex-col justify-center items-center w-full h-[100vh] wavy overflow-clip"
      >
        <div className="flex flex-col gap-5 w-full justify-center items-center text-center z-20">
          <h1 className="text-5xl">Stay up-to-date on developments!</h1>
          <form className="flex flex-row gap-4" action={waitlistAction}>
            <Input type="email" name="email" placeholder="john.doe@email.com" />
            <AnimatedSubscribeButton
              buttonColor="#000000"
              buttonTextColor="#ffffff"
              subscribeStatus={joinStatus}
              initialText={
                <span className="group inline-flex items-center">
                  Join Us!{" "}
                  <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4" />
                  Joined{" "}
                </span>
              }
            />
          </form>
        </div>
        <WavyDotPattern className="w-full h-full" />
      </section>
    </main>
  );
}
