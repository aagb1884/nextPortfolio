'use client'

import { get } from 'http';
import {useState} from 'react';

interface JsonData{
    syllables: {
      single: [
          syllable: string
      ],
      syllables: [
        syllable: string
      ]
      }
  }
  

const SciFiNamePage: React.FC<JsonData> = ({syllables}) => {
    const [name, setName] = useState<String>("");
    const [noOfSyllables, setNumberOfSyllables] = useState(1);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfSyllables(e.target.valueAsNumber);
    } 

    function getRandomName(number: number) {
    if (number === 1) {
        const randomElement = syllables.single[Math.floor(Math.random() * syllables.single.length)];
        setName(randomElement)
    }
    else if (number > 1) {
        const randomElement = syllables.single[Math.floor(Math.random() * syllables.single.length)];
        const scrambled = syllables.syllables?.sort((a,b) => 0.5 - Math.random());
        const noSyllablesRequired = noOfSyllables - 1
        const getSyllables = scrambled?.slice(0, noSyllablesRequired);
        const joinSyllables = getSyllables.join("").toLowerCase()
        setName(randomElement + joinSyllables)
    }

    }
    //   const randomElement = syllables.single[Math.floor(Math.random() * syllables.single.length)];

    //   console.log('random', randomElement, 'no of syllables', noOfSyllables)

    return ( 
        <main>
            <input 
            value={noOfSyllables}
            onChange={handleChange}
            type='number'
            min={1}
            max={10}
            name='noOfSyllables'
            />
            <button
            onClick={() => {getRandomName(noOfSyllables)}}>
                Get Sci Fi Name
            </button>
            <div>
                {name}
            </div>
        </main>
     );
}
 
export default SciFiNamePage;