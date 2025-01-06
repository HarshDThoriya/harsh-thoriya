/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsh Thoriya",
  title: "Hi all, I'm Harsh",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Java and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ma4SSQtiezkGvbifvmHLj39dJ01Sv0DU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HarshDThoriya",
  linkedin: "https://www.linkedin.com/in/harsh-thoriya/",
  gmail: "harshthoriya.ce@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "",
  skills: [

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-next"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cpp"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/csulbLogo.png"),
      subHeader: "Master of Science in Computer Science (GPA: 4/4)",
      duration: "August 2024 - December 2025 (Exp)",
      desc: "",
      descBullets: [
        "Took courses about Software Engineering, Advanced Analysis of Algorithms, Advanced Topics in Programming Languages",
        "Volunteer for ASI Beach Pride Events",
        "Participation in badminton club"
      ]
    },
    {
      schoolName: "Charotar University of Science and Technolgy",
      logo: require("./assets/images/charusatLogo.png"),
      subHeader: "Bachelor of Technology in Computer Engineering (GPA: 9.33/10)",
      duration: "August 2017 - May 2021",
      descBullets: [
        "Worked on several projects. participated in events and workshops.",
        "Achieved Distinction with 3.73 GPA. Took courses about Software Engineering, Web Security, Operating Systems, Data Structures and Algorithms, Theory of Computation, Machine Learning, Internals of Operating System, etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Bacancy",
      companylogo: require("./assets/images/bacancyLogo.png"),
      date: "Jan 2021 – July 2024",
      desc: "",
      descBullets: [
        "Led two full-lifecycle projects using Java, Javascript, Node.js, React.js, Next.js ensuring high-quality delivery.",
        "Architected 4 scalable, high-performance software & optimized database designs for long-term growth & efficiency",
        "Enhanced server performance by up to 50% through advanced caching and clustering, resulting in faster load times and improved efficiency. Boosted application performance with expert query optimization, reducing execution time and providing high-impact solutions to complex challenges.",
        "Resolved critical bugs under tight deadlines, deployed seamless applications, and introduced key features to elevate user experience and functionality.",
        "Mentored junior developers and conducted technical sessions for a group of 10 developers, fostering continuous learning and growth within the team.",
        "Redefined project workflows by introducing Agile principles and daily stand-ups, which fostered collaboration and clarity; these changes contributed to the successful launch of 5 major projects within targeted deadlines"
      ]
    },
    {
      role: "Technical Content Writer",
      company: "GeeksForGeeks",
      companylogo: require("./assets/images/geeksforgeeksLogo.png"),
      date: "Mar 2020 – June 2020",
      descBullets: [
        "Published Technical Articles on geeksforgeeks.org platform.",
        "Topics ranging from education to software development.",
        "Able to garner more than 1,65,000 views on published articles."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "BISAG",
      companylogo: require("./assets/images/BISAGLogo.png"),
      date: "May 2019 – June 2019",
      descBullets: [
        "Constructed a powerful desktop application using PyQT5 & Elasticsearch that indexes the content of several PDF files, improving search speed and accuracy, and facilitating efficient data extraction during project workflows.",
        "Visualization of the search results on different graphs using matplotlib library of python."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Built projects using different tech stacks and in varierty of domains",
  projects: [
    {
      image: require("./assets/images/supplyChainManagement.png"),
      projectName: "Supply Chain Management Systen",
      projectDesc: "A Cloud based Solution for businesses to manage the lifecycle of the delivery until it reaches the end user.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/vetCloud+.png"),
      projectName: "Vet Cloud+",
      projectDesc: "A SaaS solution for Veterinary Hospitals and Clinics to manage the daily operations effectively.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/donative.png"),
      projectName: "Donative",
      projectDesc: "A donation site for people to donate to single or multiple charities and fundraisers.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/customerChurn.png"),
      projectName: "Customer Churn Prediction",
      projectDesc: "The machine learning based solution to predict the customer churn and ways to prevent it.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/audile.png"),
      projectName: "Audile",
      projectDesc: "An android application to read and hear news articles, build using Java.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/connectFour.png"),
      projectName: "Connect4",
      projectDesc: "A Desktop application of connect4 game build using JavaFX.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to share my knowledge with others and writing articles is one of the way to do it",
  displayMediumBlogs: false, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/video-to-audio-convert-using-python/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Audio Extraction",
      description:
        "Extract audio from a video file"
    },
    {
      url: "https://www.geeksforgeeks.org/speech-to-text-using-ibm-watson-studio/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Speech to Text",
      description:
        "Generate a text file containing the extracts of a speech from an audio file"
    }
    ,
    {
      url: "https://www.geeksforgeeks.org/grammar-checker-in-python-using-language-check/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Grammar Checker",
      description:
        "Python implementation to detect grammar errors from a text file"
    },
    {
      url: "https://www.geeksforgeeks.org/rabin-cryptosystem-with-implementation/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Rabin Cryptosystem",
      description:
        "Demontration of Rabin Cryptosystem in Java for asymmetric key encryption"
    },
    {
      url: "https://www.geeksforgeeks.org/power-of-two-free-lists-allocators-kernal-memory-allocators/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Power of two free lists",
      description:
        "An explaination of power of two free lists kernel memory allocator"
    },
    {
      url: "https://www.geeksforgeeks.org/balanced-ternary-number-system/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Balanced Ternary Number System",
      description:
        "Demonstration of balanced ternary number system and implementation in programming"
    },
    {
      url: "https://www.geeksforgeeks.org/ternary-number-system-or-base-3-numbers/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "Ternary number system",
      description:
        "Demonstration of ternary number system and implementation in programming"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "+1 562-702-3987",
  email_address: "harshthoriya.ce@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
