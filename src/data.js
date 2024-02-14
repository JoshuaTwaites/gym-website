import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Strength",
        info: "Want to get Stronger, this is the program for you!",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Hypertrophy",
        info: "Want to build muscel fast, this is the program for you!",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Fitness",
        info: "Want to get fitter, this is the program for you!",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Cross Fit",
        info: "Want to improve your functional strength, this is the program for you!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Inclusivity",
        desc: "Here Everyone Is Welcome"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Build A Better You",
        desc: "Here we are commited to helping you build a better version of yourself"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Integrity",
        desc: "We are all about empowering you and making you feel comfortable"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Passion",
        desc: "Here we love to work out and shape our futures"
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It's important to tailor your exercise routine to your individual needs and preferences. If you're just starting, begin with a manageable amount and gradually increase the duration and intensity. Always listen to your body, and consult with a healthcare professional or fitness expert if you have any health concerns or specific fitness goals."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out depends on your personal preferences, schedule, and individual body rhythms, there is no one-size-fits-all answer."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "It's crucial to listen to your body and progress gradually. If you're just starting, begin with shorter sessions and gradually increase the duration as your fitness level improves. Also, the quality of your workout is often more important than the quantity."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "The type of training you choose to do should be inline with your goals."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes lifting weights can be a great way to build strength"
    }
]





export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Joining this gym was a game-changer for me! The motivating atmosphere, top-notch equipment, and friendly staff make every workout an exhilarating experience.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "I've tried many gyms, but this one stands out. The diverse classes, personalized training plans, and fantastic community support have transformed my fitness journey in ways I never thought possible.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "As a busy professional, finding time for fitness was a challenge until I discovered this gym. The convenient hours, expert trainers, and state-of-the-art facilities have made staying active seamlessly integrated into my daily routine.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "This gym is a hidden gem! From the moment I walked in, I felt a sense of belonging. The knowledgeable trainers, innovative classes, and positive vibes keep me motivated and excited for every workout.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I've never enjoyed working out until I found this gym. The variety of classes, dedicated instructors, and friendly members create a welcoming environment that has not only improved my physical health but also made exercise something I genuinely look forward to.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]




export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]





const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]