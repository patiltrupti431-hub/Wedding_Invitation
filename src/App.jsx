import { useEffect, useState } from "react";
import { useWeddingData } from "./hooks/useWeddingData";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Couple from "./components/Couple";
import Events from "./components/Events";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Family from "./components/Family";
import Timeline from "./components/Timeline";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Blessings from "./components/Blessings";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const { data, loading } = useWeddingData();
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  const showLoader = loading || !loaderDone;

  return (
    <>
      <Loader show={showLoader} />

      <ScrollProgress />
      <Navbar />
      <MusicPlayer />

      <main>
        <Hero couple={data?.couple} />
        <Story />
        <Couple couple={data?.couple} />
        <Events events={data?.events} />
        <Countdown countdown={data?.countdown} />
        <Gallery gallery={data?.gallery} />
        <Family family={data?.family} />
        <Timeline schedule={data?.schedule} />
        <Venue venue={data?.venue} />
        <RSVP rsvp={data?.rsvp} />
        <Blessings blessings={data?.blessings} />
      </main>

      <Footer />
    </>
  );
}
