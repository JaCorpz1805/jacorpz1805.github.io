export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  liveUrl?: string
  githubUrl: string
}

export interface Skill {
  name: string
  category: 'Programming' | 'Embedded' | 'Tools' | 'IT Support'
}

export interface Experience {
  role: string
  organization: string
  startDate: string
  endDate: string
  description: string
}

export interface SocialLink {
  label: string
  url: string
}

export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  image?: string
  credentialUrl?: string
}
