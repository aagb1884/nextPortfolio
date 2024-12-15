import Image from "next/image";
import styles from '../../../app/styles/tabs.module.css';
import ExternalLinkImage from '@/app/ui/ExternalLink';
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../Embla/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const images = [
  '/images/slideshow/lotr_fandom.png',
  '/images/slideshow/inside_out_review.png',
  '/images/slideshow/slate.png',
  '/images/slideshow/drwho_adams.png',
  '/images/slideshow/why_does_the_empire_keep_building_deathstars.png',
  '/images/slideshow/yonderland_interviews.png',
  '/images/slideshow/james_mcavoy_interview.png',
  '/images/slideshow/top_50_arseholes.png',
  '/images/slideshow/yr_heroes_r_terrible.png',
  '/images/slideshow/cultbox_fan_service.png',
];


const SecondTab = () => {
  // const [emblaRef, emblaApi] = useEmblaCarousel(images)
  const [emblaRef, emblaApi] = useEmblaCarousel(images, [Autoplay()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)  

  return (
    <section className={styles.SecondTab}>
      <summary>
      <p>I began blogging about <i>Doctor Who</i> around 2008 to get into the habit of writing regularly, and then submitted work elsewhere.</p>
      <p>Since then I&apos;ve covered film and TV festivals, filing reviews and interviews with actors, directors, writers and artists.</p>
      </summary>
      <br />
      <section className={styles.project}>
      <h2>Published Works</h2>
      <ul className={styles.projectDescription}>
        <li>My articles at <a href="https://www.denofgeek.com/author/andrew-blair/">Den of Geek <ExternalLinkImage/></a> (2011 - Present Day)</li>
        <li>My articles at <a href="https://cultbox.co.uk/author/andrew-blair">Cultbox <ExternalLinkImage/></a> (2013 - 2019)</li>
        <li>Movie Geek: The Den of Geek Guide to the Movieverse, 2017 (Cassell) <a href="https://www.octopusbooks.co.uk/titles/den-of-geek/movie-geek/9781844039357/">[Buy Here <ExternalLinkImage/>]</a></li>
      </ul>
      </section>
      <section className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
              <div className={styles.emblaSlideNumber}>
                <Image src={image} 
                width={575}
                height={400}
                alt={`slide${index + 1}`}
                /></div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaControls}>
        <div className={styles.emblaButtons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.emblaDots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={styles.embla__dot.concat(
                index === selectedIndex ? '_embla__dot__selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};
export default SecondTab;
