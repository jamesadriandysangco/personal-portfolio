import Head from "next/head";

import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { FullName } from "../constants/constants";
import { Layout } from "../layout/Layout";
import { HeroVisual, ProfilePhoto } from "../components/Hero/HeroStyles";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{`${FullName} | Portfolio`}</title>
        <meta
          name="description"
          content={`Portfolio of ${FullName}, a BS Information Technology student at La Consolacion University of the Philippines. See the projects I've built, the tools I use, my certificates, and how to reach me.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section grid>
        <Hero />
        <HeroVisual>
          <BgAnimation />
          <ProfilePhoto
            src="/images/profile.jpg"
            alt={`Photo of ${FullName}`}
          />
        </HeroVisual>
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
