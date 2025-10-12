// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-conferences-amp-events",
          title: "Conferences &amp; Events",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences-events/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-reviewer-2025-amia-annual-symposium-november-2025",
        
          title: "Reviewer - 2025 AMIA Annual Symposium, November 2025",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2025/amia-2025-reviewer/";
          
        },
      },{id: "post-supporting-healthcare-planning-and-resource-management-for-gastritis-and-duodenitis-using-large-language-models",
        
          title: "Supporting Healthcare Planning and Resource Management for Gastritis and Duodenitis Using Large Language...",
        
        description: "AMIA 2025 Clinical Informatics Conference, Anaheim, CA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2025/amia-cic-2025-gastritis-duodenitis-planning/";
          
        },
      },{id: "post-using-large-language-models-for-child-friendly-narratives-in-pediatric-ibd-education",
        
          title: "Using Large Language Models for Child-Friendly Narratives in Pediatric IBD Education",
        
        description: "SBM 2025 Annual Meeting, San Francisco, CA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2025/sbm-2025-ibd-education/";
          
        },
      },{id: "post-enhancing-pediatric-ibd-management-with-large-language-models-personalized-nutritional-advice-psychological-support-and-educational-tools",
        
          title: "Enhancing Pediatric IBD Management with Large Language Models: Personalized Nutritional Advice, Psychological Support,...",
        
        description: "IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI&#39;24), Houston, TX",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2024/embs-bhi-2024-llm-ibd-management/";
          
        },
      },{id: "post-human-guided-iterative-prompt-engineering-for-precision-feedback-message-authoring-using-llms",
        
          title: "Human-Guided Iterative Prompt Engineering for Precision Feedback Message Authoring Using LLMs",
        
        description: "ADSA 2024 Annual Meeting, Ann Arbor, MI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2024/adsa-2024-precision-feedback-prompts/";
          
        },
      },{id: "post-iterative-prompt-engineering-using-llms-for-authoring-precision-feedback-messages",
        
          title: "Iterative Prompt Engineering Using LLMs for Authoring Precision Feedback Messages",
        
        description: "MCBK Global Meeting 2024, Virtual",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2024/mcbk-2024-iterative-prompt-engineering/";
          
        },
      },{id: "post-reviewer-2025-aspph-annual-meeting-for-academic-public-health-march-2025",
        
          title: "Reviewer - 2025 ASPPH Annual Meeting for Academic Public Health, March 2025",
        
        description: "Association of Schools and Programs of Public Health (ASPPH)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/conferences-events/2024/aspph-2025-reviewer/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%79%69%73%75%6E@%75%6E%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhiyiscottsun", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhiyi-sun-5939381b1", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=f50Hxw0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
