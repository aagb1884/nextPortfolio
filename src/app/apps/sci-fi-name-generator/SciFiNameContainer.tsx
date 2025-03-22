import { promises as fs } from 'fs';
import SciFiNamePage from './SciFiNamePage';

export default async function SciFiNameContainer () {

    const file = await fs.readFile(process.cwd() + '/src/app/apps/sci-fi-name-generator/syllables.json', 'utf8');
    const data = JSON.parse(file);

    return ( 
        <SciFiNamePage
        syllables={data} />
     );
}
 