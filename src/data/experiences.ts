import edunetLogo from "../assets/logos/edunet-logo.png";
import crowdsourceLogo from "../assets/logos/crowdsourcevbit.jpg";
import aashayLogo from "../assets/logos/Aashayvbit.jpg";
import uptoskillsLogo from "../assets/logos/uptoskills.png";

export const experiences = [

    {
        slug: "uptoskills-ai-research",

        title: "AI Research Intern",
        company: "UptoSkills",
        period: "Feb 2026 – Present",

        description:
            "Designing scalable and deployable backend systems for AI interview evaluation and automation.",

        /* impact: [
            "Built backend logic for AI interview evaluation reducing manual screening effort by ~70%",
            "Designed modular ML evaluation pipeline improving system scalability and deployment readiness"
        ], 
        */

        overview:
            "Worked on designing backend systems that power AI-driven interview evaluation platforms. The system integrates machine learning models to analyze responses and produce structured evaluation outputs.",

        responsibilities: [
            "Designing backend architecture for AI interview evaluation systems",
            "Developing ML evaluation pipelines",
            "Integrating scoring models into backend workflows",
            "Improving system scalability and modular deployment"
        ],

        skills: [
            "Python",
            "Machine Learning",
            "scikit-learn",
            "System Design",
            "Model Deployment",
            "Streamlit"
        ],

        results: [
            "Reduced manual screening workload",
            "Improved evaluation consistency",
            "Enabled scalable interview analysis pipeline"
        ],

        projectLink:
            "",

        linktype: "github",

        logo: uptoskillsLogo
    },

    {
        slug: "edunet-ai-engineer",

        title: "AI Engineer",
        company: "Tech Saksham Program (Edunet Foundation)",
        period: "Feb 2025 – Mar 2025",

        description:
            "Developed an AI decision-support system integrating ML models to predict disease risk.",

        /* impact: [
            "Built an ML-powered health risk prediction system",
            "Reduced manual medical evaluation effort by ~80%"
        ], */

        overview:
            "Designed and deployed an end-to-end AI system that analyzes health indicators and predicts disease risk using multiple machine learning models integrated into a Streamlit interface.",

        responsibilities: [
            "Training ML models for disease prediction",
            "Building a unified evaluation interface",
            "Deploying the system using Streamlit",
            "Designing the overall AI system architecture"
        ],

        skills: [
            "Python",
            "Machine Learning",
            "scikit-learn",
            "Streamlit",
            "Data Analysis"
        ],

        results: [
            "Reduced manual analysis workload",
            "Delivered real-time prediction interface",
            "Improved accessibility of ML-based diagnosis tools"
        ],

        projectLink: "https://aidiagnose.streamlit.app/",

        linktype: "live",

        logo: edunetLogo
    },

    {
        slug: "crowdsource-marketing",

        title: "Marketing Associate",
        company: "Google Crowdsource VBIT",
        period: "2023 – 2024",

        description:
            "Led data-driven event marketing initiatives to increase campus participation.",

        /* impact: [
            "Increased event reach by ~40%",
            "Improved repeat participation by ~25%"
        ], */

        overview:
            "Executed marketing campaigns focused on event growth, audience acquisition, and engagement optimization within the campus community.",

        responsibilities: [
            "Planning event marketing strategies",
            "Executing promotional campaigns",
            "Analyzing marketing performance",
            "Driving audience engagement"
        ],

        skills: [
            "Campaign Planning",
            "Marketing Strategy",
            "Audience Engagement",
            "Referral Marketing"
        ],

        results: [
            "Increased event participation",
            "Improved event engagement metrics"
        ],

        projectLink:
            "https://www.instagram.com/p/CstD5DVRwvl/?hl=en&img_index=1",

        linktype: "instagram",

        logo: crowdsourceLogo
    },

    {
        slug: "aashay-social-media",

        title: "Social Media & Promotions Associate",
        company: "Aashay VBIT",
        period: "2023 – 2024",

        description:
            "Managed social media promotions improving audience engagement and reach.",

        /* impact: [
            "Increased social reach by ~50%",
            "Improved engagement efficiency by ~30%"
        ], */

        overview:
            "Executed social media marketing strategies focused on content optimization, engagement growth, and audience outreach.",

        responsibilities: [
            "Managing social media campaigns",
            "Optimizing promotional content",
            "Tracking engagement performance",
            "Supporting event promotions"
        ],

        skills: [
            "Social Media Strategy",
            "Campaign Analytics",
            "Brand Promotion",
            "Audience Engagement"
        ],

        results: [
            "Expanded social audience reach",
            "Increased engagement metrics"
        ],

        projectLink:
            "https://www.instagram.com/p/CxVLnPTRs0a/?hl=en&img_index=4",

        linktype: "instagram",

        logo: aashayLogo
    }

];
