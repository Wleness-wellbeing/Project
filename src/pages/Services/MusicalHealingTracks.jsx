import React, { useEffect, useState } from "react";
import ActivityHeader from "../../components/ActivityHeader";
import {
  musicHealingTrack1,
  musicHealingTrack2,
  musicHealingTrack3,
  musicHealingTrack4,
  ocdHeader,
} from "../../assets";
import MusicTracksCard from "../../components/Cards/MusicTracksCard";

export default function MusicalHealingTracks() {
  const musicHealingTracks = [
    {
      name: "Aadhyatma",
      desc: "Spirituality. (Through the notes of Raag Bhairavi)",
      audio: "https://api.wleness.com/static/audio/aadhyatama.mp3",
      image: musicHealingTrack1,
    },
    {
      name: "Mandar Ki Thaap",
      desc: "Folk Percussion instrument , along with humming",
      audio: "https://api.wleness.com/static/audio/mandar-ki-thaap.mp3",
      image: musicHealingTrack2,
    },
    {
      name: "Pain, Visualisation",
      desc: "The track is to deviate from any pain perception",
      audio:
        "https://api.wleness.com/static/audio/pain-visualization-sound.mp3",
      image: musicHealingTrack3,
    },
    {
      name: "To The Nature",
      desc: "Intermittent mandar sound from afar which takes you to forest",
      audio: "https://api.wleness.com/static/audio/to-the-nature.mp3",
      image: musicHealingTrack4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [audioElements, setAudioElements] = useState([]);

  if (audioElements.length == 0) {
    const allElements = musicHealingTracks.map(({ audio }) => {
      return new Audio(audio);
    });
    setAudioElements(allElements);
  }
  console.log(audioElements);

  const togglePlay = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        setActiveIndex(null); // Pause the currently playing audio
      }
      setActiveIndex(index);
    }
  };

  return (
    <>
      <ActivityHeader
        title={[
          {
            color: false,
            text: "Explore our ",
          },
          {
            color: true,
            text: "Music Healing ",
          },
          {
            color: false,
            text: "Bundles",
          },
        ]}
        image={ocdHeader}
        desc="An apparently simple, easy to process tracks, which takes you to the nature, peace and calm with intermittent mandar sound from afar. This can be experienced after a hectic, tiring day at work or when we wish to relax and feel fresh. It helps in creating an atmosphere of relaxation and inner reflection, aiding in achieving a deeper state of meditation."
        button={[""]}
      />

      <section className="container mx-auto mb-10 px-4 py-8">
        <div className="mb-6 text-center lg:py-4 xl:mb-10">
          <h2 className="subheading">
            Our <span className="heading-primary">Musical Healing</span> Tracks
          </h2>
        </div>

        <div className="grid gap-y-16 md:grid-cols-2 md:gap-x-4 xl:grid-cols-4 xl:gap-10">
          {musicHealingTracks.map((value, i) => {
            console.log(audioElements);
            return (
              <MusicTracksCard
                data={value}
                key={i}
                audio={audioElements[i]}
                isPlaying={i === activeIndex}
                togglePlay={() => togglePlay(i)}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
