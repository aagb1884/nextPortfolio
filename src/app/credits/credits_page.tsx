"use client";
import styles from "../styles/credits.module.css";
import HomeFooter from "@/components/HomePage/Footer/HomeFooter";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import ExternalLink from "@/components/ExternalLink";

const CreditsPage = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();

  return (
    <section className={styles.creditsContainer}>
      <h1>Credits</h1>

      <ul className={styles.creditsUl}>
        <h4>Icons</h4>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/xUOnLwv6j89J/beard"
            text="Beard"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/pwQ5RLL0yJgu/email"
            text="Email"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/63777/github"
            text="Github"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/xuvGCOXi8Wyg/linkedin"
            text="LinkedIn"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.flaticon.com/free-icon/application_5996260?term=app&page=1&position=61&origin=tag&related_id=5996260"
            text="Apps Icon"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/18734/copy-to-clipboard"
            text="Copy to Clipboard"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/1OU2pduLotIA/blog"
            text="Blog"
          />
        </li>
        <li>
          <ExternalLink href="https://icons8.com/icon/13841/rs" text="RSS" />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/QqQ9t0fbQ4Yw/shuffle"
            text="Shuffle"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/iWO20ZvCeU53/audio"
            text="Audio"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/83271/multiple-choice"
            text="Multiple Choice"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/QcJO6lyhsxBi/image"
            text="Image"
          />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/2902/voice"
            text="Voice"
          />
        </li>
        <li>
          <ExternalLink href="https://icons8.com/icon/644/mute" text="Mute" />
        </li>
        <li>
          <ExternalLink href="https://icons8.com/icon/403/pause" text="Pause" />
        </li>
        <li>
          <ExternalLink href="https://icons8.com/icon/398/play" text="Play" />
        </li>
        <li>
          <ExternalLink
            href="https://icons8.com/icon/QHJ0cVJXSlCx/shop"
            text="Shop"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.flaticon.com/free-icons/external-link"
            text="External link icons created by Yudhi Restu - Flaticon"
          />
        </li>
      </ul>
      <ul className={styles.imagesUl}>
        <h4>Images</h4>
        <li>
          <ExternalLink
            href="https://www.publicdomainpictures.net/en/view-image.php?image=475095&picture=starry-stars-sky-night"
            text="Starry Stars Sky Night"
          />
        </li>
        <li>
          <ExternalLink
            href="https://commons.wikimedia.org/wiki/File:Next_Store_at_Castlepoint.jpg"
            text="Next Store at Castlepoint by Dorsetdude"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/photo/portrait-of-smiling-blonde-woman-19161819/"
            text="Smiling Blonde Woman by Karina Rymarchuk"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/photo/person-feeling-pain-in-the-knee-11349880/"
            text="Person feeling pain in the knee by Towfiqu barbhuiya"
          />
        </li>
        <li>
          <ExternalLink
            href="https://stocksnap.io/photo/heidelberg-germany-WXMQNKRE6Y"
            text="Heidelberg"
          />
        </li>
        <li>
          <ExternalLink
            href="https://commons.wikimedia.org/wiki/File:Progress_Live_2011_Tour,_Sunderland_Stadium_of_Light_Gary_Barlow_(5783550505).jpg"
            text="Progress Live 2011 Tour, Sunderland Stadium of Light Gary Barlow"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.flickr.com/photos/creative_stock/5227842611"
            text="electronic circuit board"
          />
        </li>
        <li>
          <ExternalLink
            href="https://commons.wikimedia.org/wiki/File:Doctor_Who_logo_1963-1967path.svg"
            text="Doctor Who logo 1963 - 1967"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.throup.org.uk/doctor_who.php"
            text="Doctor Who logo 2005"
          />
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>CSS</h4>
        <li>
          <ExternalLink
            href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/"
            text="Bouncing Text Animation"
          />
        </li>
        <li>
          <ExternalLink
            href="https://codepen.io/TajShireen/pen/LYyOzJL"
            text="Metallic Bordered Text"
          />
        </li>
        <li>
          <ExternalLink
            href="https://codepen.io/Linklvarotrigo/pen/PoKMyNO"
            text="text-color-animation"
          />
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Fonts</h4>
        <li>
          <ExternalLink
            href="https://www.1001fonts.com/digital-fonts.html"
            text="Digital-7 from Digital Fonts."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.fonts4free.net/torchwood-font.html"
            text="Torchwood Font by Sostopher."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.freefontdownload.org/en/opti-formula-one.font"
            text="OPTI Formula One from freefontdownload.org."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.whatfontis.com/FF_OPTIEnraged-BoldAD.font"
            text="OPTI Enraged Bold from WhatFontIs.com."
          />
        </li>
        <li>
          <ExternalLink
            href="https://freefonts.co/fonts/futura-bold"
            text="Futura Bold from freefonts.co."
          />
        </li>
        <li>
          <ExternalLink
            href="https://freefontsvault.com/eurostile-font/"
            text="Eurostile from freefrontsvault.com."
          />
        </li>
        <li>
          <ExternalLink
            href="https://fonts2u.com/postantiqua.font"
            text="Post Antiqua from fonts2u.com."
          />
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Music</h4>
        <li>
          <ExternalLink
            href="https://pixabay.com/users/lorenzobuczek-16982400/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147363"
            text="Vivaldi's Four Seasons"
          />
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Video</h4>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-man-is-standing-in-front-of-a-building-4782045/"
            text="A Man is Standing in front of a building - video by cottonbro studio."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-man-riding-a-bike-in-the-corridor-7969625/"
            text="Man riding bike in the corridor - video by cottonbro studio"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-woman-in-black-is-doing-a-skateboard-trick-4594927/"
            text="Woman doing a skateboard trick -  video by cottonbro studio"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/man-rapping-7972147/"
            text="Man rapping -  video by cottonbro studio"
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-hip-hop-dancer-2675513/"
            text="Hip hop dancer - video by Mixkit - Free Video Assets."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/neon-club-disco-led-18557111/"
            text="Neon lighting - video by Pachon in Motion."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/white-noise-and-random-patterns-flashing-8482774/"
            text="Distorted static with flashing lines and patterns - video by Davis Vidal."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-computer-hard-drive-part-spinning-in-operation-3289546/"
            text="A computer hard drive spinning - video by Paice Street."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/close-up-of-gears-on-a-machine-in-a-factory-10040029/"
            text="Gears on a machine - video by Los Muertos Crew."
          />
        </li>
        <li>
          <ExternalLink
            href="https://www.pexels.com/video/a-person-operating-audio-mixer-7586157/"
            text="Audio mixing - video by Los Muertos Crew."
          />
        </li>
        <li>
          <ExternalLink
            href="https://pixabay.com/videos/sound-recording-microphone-121114/"
            text="Sound recording - video by Black Market Music on Pixabay."
          />
        </li>
        <li>
          <ExternalLink
            href="https://pixabay.com/videos/dj-scratch-scratching-hang-up-7382/"
            text="DJ Scratching - video by Mr Ganso on Pixabay."
          />
        </li>
      </ul>
      <HomeFooter
        goToContactForm={goToContactForm}
        goToTab={goToTab}
        contact={contact}
        tabs={tabs}
      />
    </section>
  );
};

export default CreditsPage;
