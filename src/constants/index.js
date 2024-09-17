import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import cert1 from "../assets/certifications/cert1.png"
import cert2 from "../assets/certifications/cert2.png"
import cert3 from "../assets/certifications/cert3.png"

export const HERO_CONTENT = `I'm a passionate Full stack Developer and Data Scientist. I enjoy making personal projects, sports related projects and cool websites. I love working with data and want to explore and learn more about Machine learning and AI.`;

export const ABOUT_TEXT = `I am a Computer Science and Engineering student at Vellore Institute of Technology, Chennai, with a strong academic record and hands-on experience in software development. I have worked as a Software Developer Intern at Voiceback Analytics, where he integrated AI-powered chat functionality and improved data retrieval processes. I have developed projects like image encryption using chaos mapping and a business scraper with 99% accuracy. My technical skills span Python, JavaScript, React, and MongoDB, while also being proficient in cloud platforms like Azure and Google Cloud. I am passionate about web development, data analytics, and machine learning.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Project",
    company: "VIT Chennai",
    description: `Working on a research paper to evalaute the credit risk assessment of various companies and individuals using various ML models and technologies to find out which gives higher accuracy.`,
    technologies: ["Python", "Machine Learning", "Keras", "mongoDB"],
  },
  {
    year: "2023 - 2024",
    role: "Software Developer Intern",
    company: "Voiceback Analytics LTD.",
    description: `As a Software Developer Intern at Voiceback Analytics, I developed AI-powered chat functionality for enterprise systems using OpenAI and Azure, enhancing the user interface and experience. I streamlined data retrieval processes with Langchain and SQL, and customized chatbot frontend designs with React and Bootstrap to align with client branding, significantly improving customer satisfaction.`,
    technologies: ["React", "NodeJs", "OpenAI", "Azure"],
  },
  {
    year: "2022 - 2024",
    role: "Core Management Member",
    company: "Finance and Management Club",
    description: `Spearheaded cross-departmental initiatives that enhanced operational efficiency by 15% through strategic project management, resource allocation, and the implementation of data-driven decision-making frameworks.`,
    technologies: ["Finance", "Event management", "Business"]
  },
];

export const PROJECTS = [
  {
    title: "Gym Management System",
    image: project1,
    description:
      "A fully functional Gym management System with a frontend for users to check out the gym and buy plans and a CRUD for the Admin..",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
  },
  {
    title: "Movie Recommender System",
    image: project2,
    description:
      "A  movie recommender system whuich takes in the user input and suggests the Top-5 similar movies to the input.",
    technologies: ["Python", "Numpy", "Machine Learning", "Streamlit"],
  },
  {
    title: "VIT-Question-Papers",
    image: project3,
    description:
      "A website for students to view and download old exam papers of the VIT exams. Currently deployed on Vercel.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Certificate of Excellence - Data Analytics and Machine Learning",
    image: cert1,
    description: "Gained a strong foundation in data analytics, including data preprocessing, exploratory data analysis, and feature engineering.",
    date: "2024",
    technologies: ["Data Science", "Data analytics", "Machine Learning"],
  },
  {
    title: "Elements of AI",
    image: cert2,
    description: "Gained insights into the working of Artificial Intelligence.",
    date: "2023",
    technologies: ["Artificial Intelligence", "Problem Solving", "DSA"],
  },
  {
    title: "Fundamentals Of Reinforcement Learning",
    image: cert3,
    description: "Gained a deep understanding of reinforcement learning principles and applications through this comprehensive program.",
    date: "2023",
    technologies: ["Machine Learning", "Reinforcement Learning", "Python"],
  }

]

export const CONTACT = {
  address: "Vellore Institute of Technology, Chennai ",
  email: "hunterxyx16@gmail.com",
};
