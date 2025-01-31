import { promises as fs } from 'fs';
import BarlowPage from './BarlowPage';

export default async function BarlowLandingPage () {

    const file = await fs.readFile(process.cwd() + '/src/app/apps/barlow/songs.json', 'utf8');
    const data = JSON.parse(file);

    return ( 
        <BarlowPage
        items={data} />
     );
}

