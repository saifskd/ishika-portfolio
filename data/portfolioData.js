export const profile = { name: 'ISHIKA', role: 'Graphic Designer • Content Designer • AI Visual Creator', longRole: 'Graphic & Textile Designer | Content Designer | AI Visual Creator' };
export const contact = { email: 'ishikashakya0123@gmail.com', phone: '+91-8882531022', emailHref: 'mailto:ishikashakya0123@gmail.com', phoneHref: 'tel:+918882531022', heading: "Let’s create something together.", intro: 'Have a brand, campaign or creative idea in mind? Let’s turn it into something visually memorable.', socialLinks: { behance: 'https://www.behance.net/ishikashakya', instagram: 'https://www.instagram.com/ilikaranjan/', youtube: 'https://www.youtube.com/@IlikaRanjan', linkedin: 'https://www.linkedin.com/in/ishika-shakya-830078215/' } };
export const socialLinks = contact.socialLinks;
export const navigation = [{title:'Home',href:'/'},{title:'About',href:'/about'},{title:'Work',href:'/#work'},{title:'Experience',href:'/about#experience'},{title:'Contact',href:'/#contact'}];
export const about = { intro: 'I’m Ishika, a multidisciplinary Graphic Designer creating bold brand visuals, engaging digital content and AI-powered visual experiences. My work brings design and storytelling together to turn ideas into something memorable.', philosophy: 'Every composition starts with an idea worth communicating. I use thoughtful typography, expressive imagery and a clear visual hierarchy to give that idea a voice — across a poster, a screen or a textile.', short: 'A thoughtful eye. A curious mind. A love for making ideas visible.' };
export const experience = [
 {company:'Beta Soft Technology',context:'IT Company',role:'Senior Graphic Designer / Content Designer',description:'Branding, marketing visuals and promotional content. AI-powered video production from concepts and scripts through storyboarding, character and environment generation, editing and final delivery. Reels, advertisements and YouTube content, in collaboration with clients and teams.'},
 {company:'MIMF Media',context:'Social Media Marketing Agency',role:'Senior Graphic Designer / Content Designer',description:'Social media calendars and branded design grids, alongside posters, banners, logos, videos and customized client creatives.'},
 {company:'Yavi Home Furnishing and Spa Essentials',context:'Textile & surface design',role:'Textile Designer / Merchandiser',description:'Textile patterns and CAD designs using Photoshop and Illustrator. Coordination with sampling teams and follow-up on deliveries and shipments.'},
 {company:'Freelance',context:'Remote',role:'Graphic Designer',description:'Branding, presentations and promotional materials, from client communication and requirement analysis through creative project execution.'}
];
export const education = [{title:'Bachelor of Arts (English)',period:'2018 – 2021'},{title:'CBSE Board — Class 12',period:'2017 – 2018'},{title:'CBSE Board — Class 10',period:'2015 – 2016'}];
export const skills = {'Design':['Adobe Photoshop','Adobe Illustrator','Adobe InDesign','Canva','Visual Branding','Promotional Design'],'Video & content':['CapCut','Video Editing','Reels','YouTube Content Design','Social Media Content','Digital Advertising'],'AI creative':['AI Design Tools','AI Image Generation','AI Video Generation','Character & Environment Creation','Storyboarding','Concept Development'],'Content & marketing':['Social Media Management','Content Planning','Client Communication','Microsoft Office / PowerPoint'],'Textile design':['Textile Patterns','CAD Design','Photoshop','Illustrator']};
export const tools = ['Photoshop','Illustrator','InDesign','CapCut','Canva','AI Design Tools'];
export const expertise = [
 ['Brand & promotional design','Posters, advertising concepts and marketing visuals with a clear point of view.'],
 ['Social media design','Branded graphics, advertisements and content made for the feed.'],
 ['Editorial design','Magazine covers, presentation layouts and thoughtful visual structure.'],
 ['AI visual creation','Characters, environments and creative scenes shaped through AI-assisted storytelling.'],
 ['Video & motion content','Reels, promotional videos and platform-focused visual storytelling.'],
 ['Textile design','Patterns, textile CAD development and expressive surface design.']
];
export const languages = ['English','Hindi'];
export const interests = ['Exploring new design tools & trends','Reading','Traveling'];
export const resume = { href:'/files/ishika-cv-2026.pdf', label:'Download Resume' };
export const seo = {title:'Ishika | Graphic Designer & Visual Creator',description:'Portfolio of Ishika, a Graphic Designer and Content Designer specializing in product advertising, social media creatives, editorial design, video editing, AI-powered visual content and textile design.'};
const project = (id,title,category,filter,subtitle,description,file,alt,featured=false) => ({id,title,category,filter,subtitle,description,thumbnail:file ? `/images/projects/${file}` : null,images:file ? [{src:`/images/projects/${file}`,alt,width:2160,height:2700}] : [],tools:[],featured,orientation:'portrait'});
export const projects = [
  ...[
  {
    "id": "lakshmi-akarshan-sindoor",
    "title": "Lakshmi Akarshan Sindoor",
    "category": "Product Advertising",
    "filter": "Product Ads",
    "description": "A promotional design concept pairing red packaging with gold ceremonial styling and a clear typographic hierarchy.",
    "subtitle": "Product Advertising Concept",
    "thumbnail": "/images/projects/lakshmi-akarshan-sindoor-concept.jpg",
    "images": [
      {
        "src": "/images/projects/lakshmi-akarshan-sindoor-concept.jpg",
        "title": "Lakshmi Akarshan Sindoor",
        "alt": "Lakshmi Akarshan Sindoor promotional concept with red packaging and gold ceremonial styling",
        "width": 2000,
        "height": 2000
      }
    ],
    "tools": [],
    "featured": false,
    "orientation": "square",
    "showAllArtworks": false
  },
  {
    "id": "oishi-flavours",
    "title": "Oishi Flavours — Food & Social Design",
    "category": "Social Media Design",
    "filter": "Social Media",
    "description": "A collection of sauce product visuals, cookie promotions and menu layouts. Peach and pink compositions sit alongside expressive food imagery and bold typography. Presented as portfolio design concepts, without a confirmed client commission.",
    "subtitle": "Design Concept Collection",
    "thumbnail": "/images/projects/oishi-sauce-product-visual.jpg",
    "images": [
      {
        "src": "/images/projects/oishi-sauce-product-visual.jpg",
        "title": "Sauce â€” Product Spotlight",
        "alt": "Oishi Flavours sauce jar floating between rose-toned display platforms",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-sauce-taste-the-love.jpg",
        "title": "Taste the Love",
        "alt": "Oishi Flavours sauce promotional poster with warm food photography",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-cookie-flavour-selection.jpg",
        "title": "Bite Me, Iâ€™m Delicious",
        "alt": "Oishi Flavours cookie flavour selection poster in peach and pink",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-apple-cinnamon-cookie.jpg",
        "title": "Apple Cinnamon",
        "alt": "Oishi Flavours apple cinnamon cookie poster with ingredient callouts",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-sweeten-your-day.jpg",
        "title": "Sweeten Your Day",
        "alt": "Oishi Flavours stacked chocolate chip cookies promotional poster",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-playful-cookie-poster.jpg",
        "title": "Cookies with Character",
        "alt": "Playful cookie advertising concept with a cartoon face and oversized typography",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-gourmet-menu.jpg",
        "title": "Gourmet Sauce & Cookies Menu",
        "alt": "Oishi Flavours sauce and cookie menu design in pink and cream",
        "width": 2160,
        "height": 2700
      },
      {
        "src": "/images/projects/oishi-dark-chocolate-cookie.jpg",
        "title": "Dark Chocolate Cookies",
        "alt": "Dark chocolate cookie advertising concept with chocolate splashes and bold lettering",
        "width": 2160,
        "height": 2700
      }
    ],
    "tools": [],
    "featured": false,
    "orientation": "portrait",
    "showAllArtworks": true
  },
  {
    "id": "oud-dominian",
    "title": "Oud Dominian",
    "category": "Product Advertising",
    "filter": "Product Ads",
    "description": "A fragrance advertising concept exploring amber light, sculptural glass and a rich, atmospheric brown palette.",
    "subtitle": "Product Advertising Concept",
    "thumbnail": "/images/projects/oud-dominian-perfume-concept.jpg",
    "images": [
      {
        "src": "/images/projects/oud-dominian-perfume-concept.jpg",
        "title": "Oud Dominian",
        "alt": "Oud Dominian fragrance advertising concept with amber lighting and sculptural glass",
        "width": 2160,
        "height": 2700
      }
    ],
    "tools": [],
    "featured": false,
    "orientation": "portrait",
    "showAllArtworks": false
  },
  {
    "id": "velour-strawberry",
    "title": "Velour — Strawberry Elixir",
    "category": "Product Advertising",
    "filter": "Product Ads",
    "description": "A body lotion advertising concept combining vivid strawberry reds, oversized lettering and a prominent product composition.",
    "subtitle": "Product Advertising Concept",
    "thumbnail": "/images/projects/velour-strawberry-lotion-concept.jpg",
    "images": [
      {
        "src": "/images/projects/velour-strawberry-lotion-concept.jpg",
        "title": "Velour â€” Strawberry Elixir",
        "alt": "Velour strawberry body lotion advertising concept with vivid red styling",
        "width": 2160,
        "height": 2700
      }
    ],
    "tools": [],
    "featured": false,
    "orientation": "portrait",
    "showAllArtworks": false
  }
],
 project('nu-ice-blackberry','Nü Ice — Blackberry','Product Advertising','Product Ads','Ice Cream Promotional Poster','A vibrant product advertising concept combining bold food imagery, playful composition and contrasting blackberry tones.','nu-ice-blackberry-poster.jpg','Nü Ice blackberry ice cream promotional poster',true),
 project('thundra-energy','Thundra Energy','Product Advertising','Product Ads','Energy Drink Campaign Visual','A high-impact beverage advertising concept using dramatic lighting, water effects and energetic electric-blue visuals.','thundra-energy-drink-poster.jpg','Thundra energy drink promotional poster',true),
 project('glidr-conquer-peaks','GLIDR — Conquer Peaks','Promotional Design','Promotional','Mountain Bike Advertisement','A bold outdoor product composition built around strong typography, dynamic scale and an adventurous visual identity.','glidr-mountain-bike-poster.jpg','GLIDR mountain bike promotional poster'),
 project('zyra-premium-fashion','ZYRA — Premium Fashion','Fashion Advertising','Fashion','Fashion Product Poster','A luxury-inspired product advertisement combining editorial typography, floral styling and a refined monochromatic palette.','zyra-fashion-bag-poster.jpg','ZYRA fashion handbag promotional design'),
 {...project('chasing-the-yeti','Chasing the Yeti','Book Cover Design','Entertainment','Adventure Book Cover Concept','A cinematic adventure book-cover concept featuring snowy landscapes, fantasy storytelling and bold title treatment.',null,''), assetPending:true},
 {...project('shadow-ethos','Shadow Ethos','Editorial Design','Editorial','Magazine Cover & Presentation Mockup','A monochrome editorial cover exploring portrait photography, dramatic typography, negative space and the relationship between light and shadow.','shadow-ethos-magazine-cover.jpg','Shadow Ethos editorial magazine cover',true),images:[{src:'/images/projects/shadow-ethos-magazine-cover.jpg',alt:'Shadow Ethos editorial magazine cover',width:2550,height:3300},{src:'/images/projects/shadow-ethos-magazine-mockup.jpg',alt:'Shadow Ethos magazine presented on a table',width:4500,height:3000}]},
 project('vybe-frequency','VYBE — Live in the Frequency','Product Advertising','Product Ads','Headphone Promotional Poster','A clean technology product advertisement using oversized editorial typography, minimal composition and monochrome product styling.','vybe-headphone-poster.jpg','VYBE headphone promotional poster'),
 project('scarlet-horizon','Scarlet Horizon','Entertainment Design','Entertainment','Cinematic Poster Concept','A cinematic poster composition combining portrait imagery, atmospheric storytelling and strong title hierarchy.','scarlet-horizon-movie-poster.jpg','Scarlet Horizon cinematic poster design'),
 project('scent-of-greatness','The Scent of Greatness','Product Advertising','Product Ads','Fragrance Advertising Concept','A fragrance advertising concept using rich amber lighting, elegant typography and cinematic product styling. An independent portfolio concept, not an official brand campaign.','fragrance-advertising-concept.jpg','Bella Vita fragrance advertising concept in amber lighting',true)
];
export const availableProjects = projects.filter(p => p.thumbnail && !p.assetPending);
export const filters = ['All','Product Ads','Editorial','Fashion','Entertainment','Promotional','Social Media'];
