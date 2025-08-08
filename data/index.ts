export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    description: "I’m Wisdom Dickson, a Software Engineering student at Southern Delta University, Nigeria (Final Year, Currently at CGPA: 4.70). I'm passionate about technology, with several personal projects built outside academic work. Although I don’t have much professional experience, I'm a strong problem solver, critical thinker, and capable of turning your ideas into scalable web applications. Trust me to bring your project to life with care and precision.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Student Collaboration App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:  "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
   title: "A School Web App",
   des: "An all-in-one platform for students to check results, access dashboards, receive announcements, register for classes, and manage school activities with ease.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://wizzcode01.github.io/Royal-foundation-WebApp/",
  },
  {
    id: 2,
    title: "wiedicJob Application Platform",
    des: "A user-friendly job portal where people can search and apply for jobs, manage applications, and connect with employers currently under development.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "wiedicjob.app.vercel",
  },
  {
    id: 3,
    title: "Landing Page Builder",
    des: "A sleek and responsive landing page project showcasing modern UI design, layout structure, and frontend development skills using the latest web technologies.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Wisdom was a seamless experience. He understood my ideas clearly and brought them to life even better than I imagined. I’m really impressed with his attention to detail and communication throughout the project.",
    name: "Chinonso Eze",
    title: "Founder, Noso's Kitchen"
  },
  {
    quote:
      "Wisdom is one of the most focused developers I’ve worked with. Despite being a student, he delivered my landing page faster than expected with a very clean and professional design.",
    name: "Amaka Udu",
    title: "Digital Marketer & Coach"
  },
  {
    quote:
      "From the first meeting, Wisdom showed great professionalism and clarity. He listened to my vision and transformed it into a functional and beautiful portfolio site. Highly recommended!",
    name: "Tunde Adewale",
    title: "Creative Director, TundeVisuals"
  },
  {
    quote:
      "I needed a simple but functional school web app and Wisdom delivered perfectly. His passion for development shows in the quality of his work. Looking forward to future collaborations.",
    name: "Grace Obot",
    title: "Administrator, Royal Minds Academy"
  },
  {
    quote:
      "Wisdom’s commitment to his craft is admirable. He created a professional web presence for my business and ensured everything worked well on both desktop and mobile. Great developer!",
    name: "Ibrahim Musa",
    title: "CEO, MusaTech Enterprises"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Assisting in the development of a web-based platform using React.js, node.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Petals Digital Solutions Intern",
    desc: "Designed and developed various web application for petals digital solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Founder and co developer in wiedic company",
    desc: "Developing a solution for students to collaborate and share resources effectively.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
