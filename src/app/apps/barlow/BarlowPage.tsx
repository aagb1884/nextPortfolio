'use client'

import { useState, useEffect } from 'react';
import Modal from './components/modal';
import LoseModal from './components/lose';
import RestartBtn from './components/restart';
import Countdown from './components/countdown';
import StartModal from './components/startModal';
import Score from './components/score';
import BarlowFlicker from './components/flickerImg';
import styles from '@/app/styles/barlow.module.css';

interface Song {
    title: string,
    artist: string,
    chart_position: number,
    year_released: number
}

interface JsonData{
  items: {
    songs: [
        song: Song
    ]
    }
}

const BarlowPage: React.FC<JsonData> = ({items}) => {
  const [startModal, setStartModal] = useState(true);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [previousAnswers, setPreviousAnswers] = useState<Song[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [livesLeft, setLivesLeft] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [timeVisible, setTimeVisible] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | string>(60);
  const [timeLeft, setTimeLeft] = useState<number>(50);
  const [isActive, setIsActive] = useState<boolean>(false);

    //timer
    const handleSetDuration = (): void => {
      if (typeof duration === "number" && duration > 0) {
        setTimeLeft(duration);
        setIsActive(false);
      }
    };
  
  useEffect(() => {
    handleSetDuration();
  }, [duration])
  
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      setTimeVisible(true);
      const timerId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      
      return () => clearInterval(timerId);
    } else if (isActive && timeLeft === 0) {
      setModalOpen(false);
      setLost(!lost)
    }
    }, [isActive, timeLeft]);
   
  useEffect(() => {
    if (livesLeft === 0){
    setLost(true)
    setTimeLeft(0)
    } else if (livesLeft < 0){
      reset()
    }
  }, [livesLeft, timeLeft])
   
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setUserAnswer(e.target.value);
    } 
      
  const checkAnswer = (e: React.FormEvent) => {
      e.preventDefault();
      setIsCorrect(false)
      setIsIncorrect(false)

  const userSong = items.songs.find(song => song.title.toLowerCase() === userAnswer.toLowerCase())

    if (!userSong || currentSong && userSong && previousAnswers.includes(userSong) === true ||
      currentSong && currentSong.chart_position < userSong.chart_position) {
      setIsIncorrect(true);
      setLivesLeft(prev => prev - 1);
      setUserAnswer('');
      return;
    }

    setCurrentSong(userSong);
    setUserAnswer('');

    if (userSong && currentSong && previousAnswers.includes(userSong) === false &&
      userSong.chart_position >= currentSong.chart_position) {
      setIsCorrect(true)
      setPreviousAnswers([...previousAnswers, userSong])
      setScore(score + 1)
      setCurrentSong(userSong);
    }

    else {
      setIsCorrect(true)
      setPreviousAnswers([...previousAnswers, userSong])
      setScore(score + 1)
    }
  }

  const reset = () => {
    setCurrentSong(null);
    setLivesLeft(3);
    setIsCorrect(false);
    setIsIncorrect(false);
    setPreviousAnswers([]);
    setUserAnswer("");
    setModalOpen(false);
    setLost(false);
    setScore(0);
    setTimeLeft(60);
    setLost(false);
    setStartModal(false);
    setIsActive(true);
  }

  const openInstructions = () => {
    setStartModal(false)
    setLost(false)
    setModalOpen(!modalOpen)
  }
        
    
  return (
    <div className={styles.barlowPage}>
      {!startModal && (
        <>
           <h1 className={styles.barlowTitle}>Setting the Gary Bar Low</h1>
           <h2 className={styles.barlowSubtitle}>Demo Version</h2>
        </>
      )}
      {/* modals */}
      {startModal && (
        <StartModal
        setStartModal={setStartModal}
        setIsActive={setIsActive}
        />
      )}
      {modalOpen && (
        <Modal
        setModalOpen={setModalOpen}
        />
      )}
      {lost && (
        <LoseModal
        setLost={setLost}
        reset={reset}
        isActive={isActive}
        score={score}
        />
      )}
      
      <main className={styles.gameUI}>
      <div className={styles.btns}>
      <button className={styles.barlowBtn}
      onClick={() => {openInstructions()}}
      disabled={!isActive}
      >What do I do here?</button>
      <RestartBtn
      isActive={isActive}
      reset={reset}
      />
      </div>
      {timeVisible && (
        <div className='flex-row'>
       <Countdown 
       timeLeft={timeLeft}
      />
      <Score 
      score={score}
      />
      </div>
      )}
      
      <form 
      className={styles.form}
      onSubmit={checkAnswer}>
          <input
            className={styles.barlowInput}
            name="userAnswer"
            value={userAnswer}
            onChange={handleChange}
            placeholder="Enter Song title..."
          />
          <button
            className={styles.barlowBtn}
            type="submit"
            disabled={userAnswer.length === 0}
          >
            Set the Gary Bar
          </button>
        </form>
        {isCorrect && (
          <div>
          <p>Correct!</p>
          You have set the Gary Bar.
          </div>          
        )}
        {isIncorrect && (
          <div>
          <p>Wrong!</p>
          You have {livesLeft} wrong answers left.
          </div>          
        )}
      </main>
      {isActive && (
      <BarlowFlicker />
      )}
     
    </div>
  );
}

export default BarlowPage;