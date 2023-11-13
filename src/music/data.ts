import song1 from './All Cats Are Grey.mp3'
import song2 from './Barrel Of A Gun.mp3'
import song3 from './Disorder.mp3'
import song4 from './One Hundred Years.mp3'
import song5 from './Sunrise.mp3'


type Song = {
    id: number;
    title: string;
    image: string;
    author: string;
    audio: string
  };


export const songs: Song[] = [
    {
        id: 1,
        title: 'All Cats Are Grey',
        author: 'The Cure',
        audio: song1,
        image: 'https://i.discogs.com/ZS17c_nSTcY8QZnpQAKqaJCsAoR6YtF-IOxMFO8BFiQ/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjA1/NTk4LTE1NDk5MDg1/MzItMTkyMC5qcGVn.jpeg',
        
    },
    {
        id: 2,
        title: 'Barrel Of A Gun',
        author: 'Depeche Mode',
        audio: song2,
        image: 'https://cdn.bensound.com/image/cover/slowmotion.webp',
        
    },
    {
        id: 3,
        title: 'Disorder',
        author: 'Joy Division',
        audio: song3,
        image: 'https://i1.sndcdn.com/artworks-000179728588-6xvczg-t500x500.jpg',
        
    },
    {
        id: 4,
        title: 'One Hundred Years',
        author: 'The Cure',
        audio: song4,
        image: 'https://i1.sndcdn.com/artworks-Jap1XPv1Oe3c-0-t500x500.jpg',
        
    },
    {
        id: 5,
        title: 'Sunrise',
        author: 'New Order',
        audio: song5,
        image: 'https://cdn.bensound.com/image/cover/newdawn.webp',
        
    },

    
]