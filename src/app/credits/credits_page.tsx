"use client";
import styles from "../styles/credits.module.css";
import Link from "next/link";
import ExternalLinkImage from "../ui/ExternalLink";
import HomeFooter from "@/components/HomePage/Footer/HomeFooter";
import { useGlobalState } from "@/app/context/GlobalStateContext";

const CreditsPage = () => {
  const { goToContactForm, goToTab, contact, tabs } = useGlobalState();

  return (
    <section className={styles.creditsContainer}>
      <h1>Credits</h1>

      <ul className={styles.creditsUl}>
        <h4>Icons</h4>
        <li>
          <Link
            target="_blank"
            href="https://icons8.com/icon/xUOnLwv6j89J/beard"
          >
            Beard <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://icons8.com/icon/pwQ5RLL0yJgu/email"
          >
            Email <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://icons8.com/icon/63777/github">
            GitHub <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://icons8.com/icon/xuvGCOXi8Wyg/linkedin"
          >
            LinkedIn <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.flaticon.com/free-icon/application_5996260?term=app&page=1&position=61&origin=tag&related_id=5996260"
          >
            Apps Icon <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://www.flaticon.com/authors/anggara">
            FlatIcon <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://icons8.com/icon/18734/copy-to-clipboard"
          >
            Copy to Clipboard <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://icons8.com/icon/1OU2pduLotIA/blog"
          >
            Blog <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://icons8.com/icon/13841/rss">
            RSS <ExternalLinkImage />{" "}
          </Link>{" "}
          icon by{" "}
          <Link target="_blank" href="https://icons8.com">
            Icons8 <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://www.flaticon.com/free-icons/external-link"
            title="external link icons"
          >
            External link icons created by Yudhi Restu - Flaticon{" "}
            <ExternalLinkImage />{" "}
          </Link>
        </li>
      </ul>
      <ul className={styles.imagesUl}>
        <h4>Images</h4>
        <li>
          <Link
            target="_blank"
            href="https://www.publicdomainpictures.net/en/view-image.php?image=475095&picture=starry-stars-sky-night"
          >
            Starry Stars Sky Night <ExternalLinkImage />{" "}
          </Link>{" "}
          image by{" "}
          <Link
            target="_blank"
            href="https://www.publicdomainpictures.net/en/browse-author.php?a=149229"
          >
            Andrea Stöckel <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://commons.wikimedia.org/wiki/File:Next_Store_at_Castlepoint.jpg"
          >
            Next Store at Castlepoint by Dorsetdude <ExternalLinkImage />.{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/photo/portrait-of-smiling-blonde-woman-19161819/"
          >
            Smiling Blonde Woman by Karina Rymarchuk <ExternalLinkImage />.{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/photo/person-feeling-pain-in-the-knee-11349880/"
          >
            Person feeling pain in the knee by Towfiqu barbhuiya{" "}
            <ExternalLinkImage />.{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://stocksnap.io/photo/heidelberg-germany-WXMQNKRE6Y"
          >
            Heidelberg <ExternalLinkImage />.{" "}
          </Link>{" "}
          <Link target="_blank" href="https://stocksnap.io/author/29367">
            Roman Kraft <ExternalLinkImage />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://commons.wikimedia.org/wiki/File:Progress_Live_2011_Tour,_Sunderland_Stadium_of_Light_Gary_Barlow_(5783550505).jpg"
          >
            Progress Live 2011 Tour, Sunderland Stadium of Light Gary Barlow{" "}
            <ExternalLinkImage />.{" "}
          </Link>{" "}
          <Link
            target="_blank"
            href="https://www.flickr.com/people/22017657@N05"
          >
            vagueonthehow <ExternalLinkImage />
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.flickr.com/photos/creative_stock/5227842611"
          >
            electronic circuit board <ExternalLinkImage />.{" "}
          </Link>{" "}
          <Link
            target="_blank"
            href="https://www.flickr.com/photos/creative_stock/"
          >
            Creativity103 <ExternalLinkImage />
          </Link>
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>CSS</h4>
        <li>
          <Link
            target="_blank"
            href="https://lenadesign.org/2021/05/18/css-bouncing-text-animation/"
          >
            Bouncing Text Animation <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://codepen.io/TajShireen/pen/LYyOzJL"
          >
            Metallic Bordered Text <ExternalLinkImage />{" "}
          </Link>{" "}
          by{" "}
          <Link target="_blank" href="https://codepen.io/TajShireen">
            Shireen Taj <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://codepen.io/Linklvarotrigo/pen/PoKMyNO"
          >
            text-color-animation <ExternalLinkImage />{" "}
          </Link>{" "}
          by{" "}
          <Link target="_blank" href="https://codepen.io/Linklvarotrigo">
            Alvaro <ExternalLinkImage />{" "}
          </Link>
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Fonts</h4>
        <li>
          <Link
            target="_blank"
            href="https://www.1001fonts.com/digital-fonts.html"
          >
            Digital-7 from Digital Fonts. <ExternalLinkImage />{" "}
          </Link>
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Music</h4>
        <li>
          <Link
            target="_blank"
            href="https://pixabay.com/users/lorenzobuczek-16982400/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147363"
          >
            Vivaldi&apos;s Four Seasons
          </Link>{" "}
          from{" "}
          <Link href="https://pixabay.com/users/lorenzobuczek-16982400/">
            Lorenzo Buczek on Pixabay <ExternalLinkImage />{" "}
          </Link>
        </li>
      </ul>
      <ul className={styles.cssUl}>
        <h4>Video</h4>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-man-is-standing-in-front-of-a-building-4782045/"
          >
            A Man is Standing in front of a building
          </Link>
          . Video by cottonbro studio.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-man-riding-a-bike-in-the-corridor-7969625/"
          >
            Man riding bike in the corridor
          </Link>
          . Video by cottonbro studio.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-woman-in-black-is-doing-a-skateboard-trick-4594927/"
          >
            Woman doing a skateboard trick
          </Link>
          . Video by cottonbro studio.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/man-rapping-7972147/"
          >
            Man rapping
          </Link>
          . Video by cottonbro studio.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-hip-hop-dancer-2675513/"
          >
            A hip hop dancer
          </Link>
          . Video by Mixkit - Free Video Assets.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/neon-club-disco-led-18557111/"
          >
            Neon lighting
          </Link>
          . Video by Pachon in Motion.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/white-noise-and-random-patterns-flashing-8482774/"
          >
            A hip hop dancer
          </Link>
          . Video by Davis Vidal.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-computer-hard-drive-part-spinning-in-operation-3289546/"
          >
            A computer hard drive spinning
          </Link>
          . Video by Paice Street.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/close-up-of-gears-on-a-machine-in-a-factory-10040029/"
          >
            Gears on a machine
          </Link>
          . Video by Los Muertos Crew.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.pexels.com/video/a-person-operating-audio-mixer-7586157/"
          >
            Audio mixing
          </Link>
          . Video by Los Muertos Crew.
          <ExternalLinkImage />
        </li>
        <li>
          <Link
            target="_blank"
            href="https://pixabay.com/videos/sound-recording-microphone-121114/"
          >
            Sound recording
          </Link>{" "}
          from{" "}
          <Link href="https://pixabay.com/users/blackmarketmusic-2976878/">
            {" "}
            Black Market Music on Pixabay <ExternalLinkImage />{" "}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://pixabay.com/videos/dj-scratch-scratching-hang-up-7382/"
          >
            DJ Scratching
          </Link>{" "}
          from{" "}
          <Link href="https://pixabay.com/users/mrganso-607585/">
            {" "}
            Mr Ganso on Pixabay <ExternalLinkImage />{" "}
          </Link>
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
