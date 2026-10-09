import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Liberator42 game',
    description:
      'Liberator42 is a 2D game about a plane on a mission to liberate the Pacific during WW2.',
    technologies: ['Java'],
    image: '/projects/Liberator 1942 Screenshot.jpg',
    githubUrl: 'https://github.com/JaCorpz1805/Liberator-1942-made-with-Java-Swing',
  },
  {
    id: 2,
    title: 'Mouse Interactive Spinning Globe',
    description: 'Spinning Globe is a mouse-controlled GUI',
    technologies: ['Python', 'Tkinter'],
    image: '/projects/Mouse-Controlled-Spinning-Circle Screenshot.jpg',
    githubUrl: 'https://github.com/JaCorpz1805/The-3D-Globe-with-Tkinter',
  },
  {
    id: 3,
    title: 'Brick Breaker Game',
    description: 'A 2D brick breaker game made with Java Swing.',
    technologies: ['Java', 'Swing'],
    image: '/projects/Brick-Breaker-Java.jpg',
    githubUrl: 'https://github.com/JaCorpz1805/The-Brick-Breaker-Beginner-in-Java.git',
  },
]
