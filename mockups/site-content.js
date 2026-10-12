const siteContent = {
  "research": [
    {
      "id": "scipe",
      "title": "SCIPE & research cyberinfrastructure",
      "label": "Research facilitation / UMCES",
      "description": "As a Research Facilitator at the University of Maryland Center for Environmental Science (UMCES), I contribute to the Chesapeake Global Collaboratory through the National Science Foundation's Strengthening the Cyberinfrastructure Professionals Ecosystem (SCIPE) program. Working with colleagues at UMCES and the University of Maryland, Baltimore County (UMBC), I help build institutional knowledge and capability in high-performance computing, AI, open science, and data visualization through practical training and collaborative research support.",
      "detail": "",
      "image": "assets/research/scipe-spatial-join.png",
      "alt": "Spatial joining of channel geometry and elevation datasets",
      "figureCredit": "Spatial data integration example / Fisher et al. (2013), Fig. 3; predates SCIPE",
      "figureSource": "https://doi.org/10.1016/j.geomorph.2013.04.011",
      "figurePosition": "50% 40%",
      "papers": [],
      "products": [
        {"newsId": "ai-assisted-coding-webinar", "type": "Webinar", "title": "Introduction to AI-Assisted Coding: Prompt Engineering with LLMs in Google Colab", "venue": "NAIRR Pilot"},
        {"newsId": "sustainable-ai-podcast", "type": "Podcast", "title": "Sustainable AI: Balancing Innovation with Environmental Responsibility", "venue": "AI, Unscripted / Moving the Needle"}
      ],
      "links": [
        {"label": "CGC-SCIPE project", "url": "https://scipe.umces.edu/"},
        {"label": "My SCIPE profile", "url": "https://scipe.umces.edu/team-member/burch-fisher/"},
        {"label": "CGC-UMCES on GitHub", "url": "https://github.com/CGC-UMCES"}
      ]
    },
    {
      "id": "geomorphology",
      "title": "Geomorphology & landscape evolution",
      "label": "Climate / Tectonics / Sediment",
      "description": "I investigate how landscapes record the interplay of climate, tectonics, and erosion. My work spans the Himalaya and eastern Tibet, the Central Andes, and river systems in North America, connecting modern topography and river processes with longer-term sedimentary archives.",
      "detail": "These studies examine orbital-scale erosion signals, monsoonal controls on river incision, glacial contributions to sediment, and the movement and storage of material through landscapes. Field observations, geochronology, geochemistry, remote sensing, and models provide complementary ways to reconstruct how landscapes evolve.",
      "image": "assets/research/andes-landscape.png",
      "alt": "Relief and geological maps of the south-central Andes study area",
      "figureCredit": "Amidon et al. (2017) / Fig. 1",
      "figureSource": "https://doi.org/10.1073/pnas.1700327114",
      "papers": ["10.1038/s41467-023-36022-0", "10.1002/2016JF004011", "10.1130/G35342.1"],
      "links": []
    },
    {
      "id": "remote-sensing",
      "title": "Remote sensing & conservation",
      "label": "LiDAR / Forest structure / Habitat",
      "description": "I use remote sensing and machine learning to connect the structure of landscapes with ecological processes and conservation needs. Airborne LiDAR reveals three-dimensional forest structure that can be difficult to characterize from conventional imagery alone.",
      "detail": "Recent collaborations map timber harvest activity and forest-bird habitat, and combine passive acoustic monitoring with LiDAR to inform conservation planning. Ongoing work with the BioSCape project in South Africa uses Harmonized Landsat-Sentinel (HLS) data and an interactive phenology dashboard to explore seasonal vegetation dynamics and support research on biodiversity and environmental change.",
      "image": "assets/research/forest-lidar.png",
      "alt": "Airborne LiDAR point heights showing mature forest and overstory removal",
      "figureCredit": "Fisher et al. (2024) / Fig. 2A",
      "figureSource": "https://doi.org/10.1080/15481603.2024.2379198",
      "papers": ["10.1002/jav.03587", "10.1080/15481603.2024.2379198", "10.1016/j.foreco.2023.121002"],
      "links": [
        { "label": "Open BioSCape dashboard", "url": "http://149.165.155.71/" },
        { "label": "BioSCape Phenology Explorer code", "url": "https://github.com/stephenconklin/BioSCape_Phenology_Explorer" }
      ]
    },
    {
      "id": "marine",
      "title": "Marine science & oil-spill forensics",
      "label": "Seafloor / Hydrocarbons / Biogeochemistry",
      "description": "My marine research follows the fate of hydrocarbons and examines the environmental processes that shape the seafloor. Collaborations on Deepwater Horizon investigated the spatial footprint of submerged oil and its persistence and biodegradation after deposition on the ocean floor.",
      "detail": "Other work draws on a decade of observations at the MC20 oil-release site and uses autonomous marine robotic observations to characterize an extensive benthic bacterial community in the Santa Barbara Basin. Spatial analysis connects these observations with questions about contamination, microbial processes, and regional biogeochemistry.",
      "image": "assets/research/deepwater-sampling.png",
      "alt": "Northern Gulf of Mexico bathymetry and Deepwater Horizon sediment sampling locations",
      "figureCredit": "Valentine et al. (2014) / Fig. 1",
      "figureSource": "https://doi.org/10.1073/pnas.1414873111",
      "papers": ["10.1073/pnas.1414873111", "10.1073/pnas.1610110114", "10.1016/j.marpolbul.2020.111056", "10.1021/acs.est.6b03584"],
      "links": []
    },
    {
      "id": "environmental",
      "title": "Environmental change & watershed processes",
      "label": "Water / Soils / Human influence",
      "description": "I am interested in how environmental systems respond to both natural variability and human activity. Collaborative work on freshwater salinization examines how urbanization relates to geographically variable changes in water chemistry across the northeastern United States.",
      "detail": "This broader interest also includes flood responses in an arid Andean watershed, the role of large woody debris in river systems, and mineralogical change during soil development. Across these settings, the aim is to understand the processes linking landscape form, material transport, and environmental conditions.",
      "image": "assets/research/watershed-salinization.png",
      "alt": "Northeastern United States monitoring locations, conductance trends, and watershed impervious cover",
      "figureCredit": "Utz et al. (2022) / Fig. 6",
      "figureSource": "https://doi.org/10.1002/jeq2.20379",
      "papers": ["10.1002/jeq2.20379", "10.1016/j.geomorph.2008.05.025", "10.1016/j.geomorph.2007.08.016"],
      "links": []
    },
    {
      "id": "methods",
      "title": "Computational tools across scales",
      "label": "Spatial analysis / Image processing / Software",
      "description": "A recurring thread through my research is developing computational methods that make complex spatial observations useful. ChanGeom extracts channel geometry from high-resolution imagery, while related work combines imagery and elevation data to study river widths, erosion proxies, landslides, and faults.",
      "detail": "Current collaborations with Stephen Conklin extend this work to vegetation-index processing, phenology analysis, automated imagery acquisition, and research dashboard deployment. These approaches also extend beyond earth science: a collaboration on zebrafish retinal regeneration developed a MATLAB analysis platform, RpEGEN. From river networks to biological images, the common challenge is turning detailed observations into quantitative, reproducible measurements.",
      "image": "assets/research/rpegen-workflow.png",
      "alt": "RpEGEN image-processing workflow for quantitative retinal analysis",
      "figureCredit": "Leach et al. (2022) / Fig. 4",
      "figureSource": "https://doi.org/10.3791/63658",
      "papers": ["10.1016/j.geomorph.2013.04.011", "10.1130/2012.2492(01)", "10.3791/63658"],
      "links": [
        { "label": "HLS Vegetation Index Pipeline", "url": "https://github.com/stephenconklin/HLS_VI_Pipeline" },
        { "label": "Vegetation Index Phenology", "url": "https://github.com/stephenconklin/VI_Phenology" },
        { "label": "NAIP Harvest M2M", "url": "https://github.com/stephenconklin/NAIP-Harvest-M2M" },
        { "label": "Jetstream2 Dashboard Deploy", "url": "https://github.com/stephenconklin/Jetstream2_Dashboard_Deploy" }
      ]
    }
  ],
  "tutorials": [
    {
      "title": "Introduction to AI-Assisted Coding",
      "label": "NAIRR Pilot / Tutorial & webinar",
      "image": "assets/teaching/llm-coding-thumbnail.png",
      "description": "A hands-on introduction to prompt engineering with Gemini and Google Colab, using Python, U.S. Census data, and satellite vegetation observations to explore environmental justice.",
      "url": "https://github.com/CGC-UMCES/NAIRR-2026-Tutorial-Intro-Colab-LLM-Coding",
      "video": "https://www.youtube.com/watch?v=oIAQbEPmJOk"
    },
    {
      "title": "Interactive Data Dashboards with R Shiny",
      "label": "SCIPE / UMCES / Workshop",
      "image": "assets/teaching/shiny-dashboard-thumbnail.png",
      "description": "A hands-on workshop on interactive maps, time series, and reactive dashboards using Chesapeake Bay environmental data, with exercises in extending applications using AI-assisted coding.",
      "url": "https://github.com/CGC-UMCES/WORKSHOP-interactive-shiny-dashboards"
    }
  ],
  "software": [
    {
      "title": "BioSCape Phenology Explorer",
      "type": "Visualization",
      "area": "Remote sensing & biodiversity",
      "description": "An interactive dashboard for exploring seasonal vegetation dynamics in the BioSCape study region in South Africa.",
      "url": "https://github.com/stephenconklin/BioSCape_Phenology_Explorer",
      "dashboard": "http://149.165.155.71/"
    },
    {
      "title": "HLS Vegetation Index Pipeline",
      "type": "Code",
      "area": "Remote sensing",
      "description": "Processing Harmonized Landsat-Sentinel imagery for vegetation-index analysis.",
      "url": "https://github.com/stephenconklin/HLS_VI_Pipeline"
    },
    {
      "title": "Vegetation Index Phenology",
      "type": "Code",
      "area": "Vegetation dynamics",
      "description": "Tools for analyzing seasonal patterns in vegetation-index observations.",
      "url": "https://github.com/stephenconklin/VI_Phenology"
    },
    {
      "title": "NAIP Harvest M2M",
      "type": "Code",
      "area": "Aerial imagery",
      "description": "Tools for automated acquisition of NAIP aerial imagery.",
      "url": "https://github.com/stephenconklin/NAIP-Harvest-M2M"
    },
    {
      "title": "Jetstream2 Dashboard Deploy",
      "type": "Code",
      "area": "Cyberinfrastructure",
      "description": "Tools for deploying interactive research dashboards on Jetstream2.",
      "url": "https://github.com/stephenconklin/Jetstream2_Dashboard_Deploy"
    }
  ],
  "team": [
    {
      "title": "G. BURCH FISHER",
      "image": "assets/team/burch-fisher.jpg",
      "role": "Associate Research Scientist / University of Maryland Center for Environmental Science",
      "text": "I'm an earth systems scientist interested in how landscapes and environments evolve in response to climate, tectonics, organisms, hydrocarbons, and human activity. My work spans spatial scales from zebrafish retinas to the Himalaya and timescales from days to millions of years. I combine geospatial analysis, machine learning, computational methods, geochemistry, mineralogy, and sensor-based observations to investigate forest structure and habitat, vegetation phenology, landscape evolution, retinal regeneration, and the fate of oil in marine environments. At UMCES, I also help build institutional capability in high-performance computing, AI, open science, and data visualization through research support and training.",
      "links": [
        {"label": "UMCES profile", "url": "https://www.umces.edu/directory/g-burch-fisher/"},
        {"label": "SCIPE profile", "url": "https://scipe.umces.edu/team-member/burch-fisher/"}
      ]
    },
    {
      "title": "CURRENT MEMBERS",
      "text": ""
    },
    {
      "title": "JEFF LARKIN",
      "initials": "JL",
      "role": "Ph.D. student / University of Massachusetts Amherst",
      "text": "Jeff is a Ph.D. student in the Environmental Conservation Department at the University of Massachusetts Amherst, studying how forest LiDAR metrics can inform forest and wildlife management. I serve on his Ph.D. thesis committee."
    },
    {
      "title": "STEPHEN CONKLIN",
      "image": "assets/team/stephen-conklin.jpg",
      "role": "Research collaborator / Fort Lewis College graduate, class of 2026",
      "text": "Stephen started working with me as a Fort Lewis College intern and, after graduating in 2026, continues to collaborate on remote sensing and research software projects. Collaborative projects include Harmonized Landsat-Sentinel vegetation-index processing, phenology analysis and an interactive dashboard for the BioSCape project in South Africa, automated acquisition of NAIP aerial imagery, and tools for deploying research dashboards on Jetstream2. He also works on integrating satellite imagery and airborne LiDAR for studies in Pennsylvania.",
      "links": [
        {
          "label": "Stephen's GitHub",
          "url": "https://github.com/stephenconklin"
        },
        {
          "label": "Open BioSCape dashboard",
          "url": "http://149.165.155.71/"
        }
      ],
      "projects": [
        {
          "label": "BioSCape Phenology Explorer",
          "url": "https://github.com/stephenconklin/BioSCape_Phenology_Explorer"
        },
        {
          "label": "HLS Vegetation Index Pipeline",
          "url": "https://github.com/stephenconklin/HLS_VI_Pipeline"
        },
        {
          "label": "Vegetation Index Phenology",
          "url": "https://github.com/stephenconklin/VI_Phenology"
        },
        {
          "label": "NAIP Harvest M2M",
          "url": "https://github.com/stephenconklin/NAIP-Harvest-M2M"
        },
        {
          "label": "Jetstream2 Dashboard Deploy",
          "url": "https://github.com/stephenconklin/Jetstream2_Dashboard_Deploy"
        }
      ]
    },
    {
      "title": "PAST MEMBERS",
      "text": ""
    },
    {
      "title": "SAMANTHA BIDLACK",
      "initials": "SB",
      "role": "M.S. / Chatham University / 2021",
      "text": "I served on Samantha's M.S. thesis committee in 2021 for her research on freshwater salinization trends in the eastern United States. Her primary advisor was Ryan Utz at the Falk School of Sustainability and Environment at Chatham University.",
      "papers": ["10.1002/jeq2.20379"]
    },
    {
      "title": "JUSTIN TRAN",
      "image": "assets/team/img-7520_orig.jpg",
      "text": "I co-advised Justin's M.S. thesis at UC Santa Barbara with David Valentine, investigating the morphology of hydrocarbon-induced topography using high-resolution bathymetry from autonomous underwater vehicles. Justin was supported by the Department of Defense's Science, Mathematics, and Research for Transformation (SMART) Scholarship for Service Program.",
      "role": "M.S. graduate / UC Santa Barbara / 2018"
    },
    {
      "title": "MICHAEL CHRISTOFFERSEN",
      "papers": [
        "10.1073/pnas.1700327114"
      ],
      "image": "assets/team/postcave.png",
      "text": "Michael worked with me from 2015 to 2016 as an undergraduate research assistant at the University of Texas at Austin, where he studied geophysics and computer science (class of 2019). His work included paleomagnetic analyses of samples from Argentina in the UT Paleomagnetics Laboratory.",
      "role": "Undergraduate research assistant / University of Texas at Austin / Class of 2019"
    },
    {
      "title": "INTEGRAL MEMBERS",
      "text": ""
    },
    {
      "title": "LYNDSAY AKA \"MOTHER OF MUFFINS\"",
      "image": "assets/team/img-0002_orig.jpg",
      "text": "Lyndsay works on curing your future eye diseases using stem cells and zebrafish as well as making her husband a slightly less ridiculous person. She is also the mother of Rufus and Jade, which means I am constantly surrounded by gingers and hairballs! We once even survived working on a paper together.",
      "papers": ["10.3791/63658"]
    },
    {
      "title": "RUFUS MUFFIN FISHER AKA \"THE GREAT ORANGE BEAR\"",
      "image": "assets/team/rufus_orig.jpg",
      "text": "Rufus is a 13-year-old Ragamuffin that has yet to get a job. Ever. He is mainly interested in treats and naps and more treats. On the other hand, he is by far the cutest and softest creature that has ever lived so we continue to enable his lifestyle."
    },
    {
      "title": "LADY JADE LAGERTHA FISHER AKA \"SWEET BABY JADE\"",
      "image": "assets/team/img-4556_orig.jpeg",
      "text": "Jade is a 10-year-old Ragamuffin. Her main interests are following her brother Rufus around, belly rubs, and eating as much food as she can get her squishy lil paws on. Her academic goals are two pronged: 1) figuring out how to grow thumbs so she can open the fridge and eat a months worth of food in one sitting; and 2) creating a detailed GIS map of the best places and positions to sleep in throughout the house."
    }
  ],
  "press": [
    {
      "title": "INSIGHTS INTO THE ONGOING RELEASE AT MC20 - Bryant et al., 2020",
      "publication": "10.1016/j.marpolbul.2020.111056",
      "links": [
        {
          "label": "Taylor Energy: Study Discredits Theories of Actively Flowing Wells at MC-20 (press release, PR Newswire)",
          "url": "https://www.prnewswire.com/news-releases/taylor-energy-company-new-peer-reviewed-study-discredits-theories-of-actively-flowing-wells-at-mc-20-site-301056906.html"
        }
      ]
    },
    {
      "title": "BIODEGRADATION OF OIL FOLLOWING DEEPWATER HORIZON - Bagby et al., 2017",
      "publication": "10.1073/pnas.1610110114",
      "links": [
        {
          "label": "Scientist Should Be Active but Apolitical (Huffington Post)",
          "url": "http://www.huffingtonpost.com/entry/scientists-should-be-active-but-apolitical-with-david_us_586ac375e4b068764965c3be"
        },
        {
          "label": "What Happened to Deepwater Horizon Oil? (WHOI Oceanus Magazine)",
          "url": "https://www.whoi.edu/oceanus/feature/what-happened-to-deepwater-horizon-oil/"
        },
        {
          "label": "The Deepwater Horizon Aftermath (UCSB Current)",
          "url": "http://www.news.ucsb.edu/2016/017495/deepwater-horizon-aftermath"
        },
        {
          "label": "Deep Oil Spill Study Released (Santa Barbara Independent)",
          "url": "https://www.independent.com/2016/12/28/deep-oil-spill-study-released/"
        },
        {
          "label": "Deepwater Horizon Disaster Half a Decade Later (Nature World News)",
          "url": "http://www.natureworldnews.com/articles/34433/20161221/deepwater-horizon-disaster-half-decade-later-biodegradation-oil-spill.htm"
        },
        {
          "label": "Phys.org, Technology.org, etc",
          "url": "https://pnas.altmetric.com/details/14860920/news"
        }
      ]
    },
    {
      "title": "SANTA BARBARA BASIN BENTHIC BACTERIAL MAT - Valentine et al., 2016",
      "publication": "10.1021/acs.est.6b03584",
      "links": [
        {
          "label": "Deep Sea Bacterial Takeover (UCSB Current)",
          "url": "http://www.news.ucsb.edu/2016/017219/deep-sea-bacterial-takeover"
        }
      ]
    },
    {
      "title": "FALLOUT PLUME FROM DEEPWATER HORIZON - Valentine et al., 2014",
      "publication": "10.1073/pnas.1414873111",
      "links": [
        {
          "label": "Deepwater Horizon gunk settled far and wide (Nature)",
          "url": "http://www.nature.com/news/deepwater-horizon-gunk-settled-far-and-wide-1.16225"
        },
        {
          "label": "Where Did Deepwater Horizon Oil Go? (WHOI Oceanus Magazine)",
          "url": "http://www.whoi.edu/oceanus/feature/where-did-deepwater-horizon-oil-go"
        },
        {
          "label": "Study Provides Some Answers to Fate of Deepwater Horizon Oil (WHOI)",
          "url": "http://www.whoi.edu/news-release/seafloor-oil"
        },
        {
          "label": "Deepwater Horizon Oil Coats Gulf Floor (US News & World Report)",
          "url": "http://www.usnews.com/news/articles/2014/10/27/oil-fallout-from-bp-deepwater-horizon-spill-coats-miles-of-gulf-floor-study-says"
        },
        {
          "label": "Where did the Deepwater Horizon oil go? (NSF release via EurekAlert!)",
          "url": "https://www.eurekalert.org/news-releases/525217"
        },
        {
          "label": "Where Did All the Oil Go? (UCSB Current)",
          "url": "http://www.news.ucsb.edu/2014/014454/where-did-all-oil-go"
        },
        {
          "label": "BP spill left big oily 'bathtub ring' on seafloor (AP, via HeraldNet)",
          "url": "https://www.heraldnet.com/2014/10/27/bp-spill-left-big-oily-bathtub-ring-on-sea-floor/"
        },
        {
          "label": "Researchers: A massive amount BP oil is coating the bottom of the Gulf (Salon)",
          "url": "http://www.salon.com/2014/10/27/researchers_a_massive_amount_bp_oil_is_coating_the_bottom_of_the_gulf/"
        },
        {
          "label": "Huge \"Bathtub Ring\" Left By Oil Spill (I Fucking Love Science)",
          "url": "http://www.iflscience.com/environment/huge-bathtub-ring-left-oil-spill"
        },
        {
          "label": "Arise America Interview with Dave Valentine",
          "url": "https://www.youtube.com/watch?v=gSAFXGykDzY&feature=youtu.be"
        },
        {
          "label": "International Business Times",
          "url": "http://www.ibtimes.com/bp-oil-spill-2010-study-says-deepwater-horizon-event-left-huge-oily-bathtub-ring-gulf-1714475"
        },
        {
          "label": "CBS News",
          "url": "http://www.cbsnews.com/news/bp-oil-spill-left-a-bathtub-ring-the-size-of-rhode-island-study-says/"
        },
        {
          "label": "El Pais",
          "url": "http://elpais.com/elpais/2014/10/27/ciencia/1414433375_742196.html"
        },
        {
          "label": "Der Spiegel",
          "url": "http://www.spiegel.de/wissenschaft/natur/folgen-der-deepwater-horizon-havarie-oel-am-meeresboden-a-999651.html"
        },
        {
          "label": "Die Zeit",
          "url": "http://www.zeit.de/wissen/umwelt/2014-10/oelkatastrophe-meeresgrund-studie"
        },
        {
          "label": "Die Welt",
          "url": "http://www.welt.de/wissenschaft/umwelt/article133717737/Die-Reste-der-Oelkatastrophe-liegen-am-Meeresboden.html"
        },
        {
          "label": "Science Daily,",
          "url": "http://www.sciencedaily.com/releases/2014/10/141027182948.htm?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+sciencedaily+%28Latest+Science+News+--+ScienceDaily%29"
        },
        {
          "label": "Reddit (front page)",
          "url": "http://www.reddit.com/r/worldnews/comments/2kl913/scientists_discover_huge_bathtub_ring_of_oil_on/"
        },
        {
          "label": "Houston Chronicle",
          "url": "http://www.houstonchronicle.com/business/energy/article/Study-suggests-sprawling-footprint-of-Macondo-5851760.php"
        },
        {
          "label": "Yale Environment 360",
          "url": "https://e360.yale.edu/digest/scientists_find_seafloor_fallout_plume_of_oil_from_deepwater_horizon_spill"
        },
        {
          "label": "Science 2.0",
          "url": "http://www.science20.com/news_articles/where_did_all_the_oil_from_the_deepwater_horizon_spill_go-147816"
        },
        {
          "label": "Maritime Executive",
          "url": "http://www.maritime-executive.com/article/Macondo-Accident-25-Miles-of-Seafloor-Oil-2014-10-27"
        },
        {
          "label": "R&D Magazine",
          "url": "http://www.rdmag.com/news/2014/10/where-did-deepwater-horizon-oil-go"
        },
        {
          "label": "Yahoo News",
          "url": "https://uk.news.yahoo.com/oil-bp-spill-coats-miles-gulf-seafloor-142651334.html#rMPo8fq"
        },
        {
          "label": "The Times Picayune",
          "url": "http://www.nola.com/environment/index.ssf/2014/10/bp_spill_left_bathtub_ring_of.html"
        },
        {
          "label": "edhat",
          "url": "http://www.edhat.com/site/tidbit.cfm?nid=142904"
        },
        {
          "label": "Noozhawk",
          "url": "http://www.noozhawk.com/article/where_did_all_the_oil_go"
        },
        {
          "label": "Examiner",
          "url": "http://www.examiner.com/article/forty-percent-of-deepwater-horizon-oil-found-on-ocean-floor"
        },
        {
          "label": "UPI",
          "url": "http://www.upi.com/Science_News/2014/10/27/Hundreds-of-thousands-of-gallons-of-oil-from-BP-spill-may-be-on-the-ocean-floor/7541414454953/"
        },
        {
          "label": "Newser",
          "url": "http://www.newser.com/story/197835/bp-spill-left-huge-oily-bathtub-ring.html"
        },
        {
          "label": "YLE",
          "url": "http://yle.fi/uutiset/nelja_vuotta_meksikonlahden_oljyturmasta__merenpohjassa_kaksi_miljoonaa_barrelia_oljya/7555090"
        },
        {
          "label": "Grist",
          "url": "http://grist.org/business-technology/there-are-still-tons-of-bp-oil-on-the-bottom-of-the-gulf-of-mexico/?utm_source=syndication&utm_medium=rss&utm_campaign=feed"
        },
        {
          "label": "The Times",
          "url": "http://www.thetimes.co.uk/tto/news/world/americas/article4250128.ece"
        },
        {
          "label": "Vice News",
          "url": "https://news.vice.com/article/scientists-say-an-area-the-size-of-rhode-island-is-coated-with-oil-from-the-bp-well-explosion"
        },
        {
          "label": "Fox News",
          "url": "https://www.foxnews.com/science/study-claims-2010-bp-oil-spill-left-bathtub-ring-on-sea-floor"
        },
        {
          "label": "Sail World",
          "url": "http://www.sail-world.com/USA/Where-is-the-Deepwater-Horizon-oil?/128320"
        },
        {
          "label": "Outside",
          "url": "http://www.outsideonline.com/news-from-the-field/Study-Deepwater-Horizon-Spill-Left-Rhode-Island-Sized-Ring-on-Gulf-Seafloor.html?280701872&utm_campaign=googlenews&utm_source=googlenews&utm_medium=xmlfeed"
        },
        {
          "label": "LiveScience",
          "url": "http://www.livescience.com/48490-deepwater-horizon-oil-found.html"
        },
        {
          "label": "Science World Report",
          "url": "http://www.scienceworldreport.com/articles/18400/20141028/where-deepwater-horizon-spills-oil-go-contaminated-deep-ocean.htm"
        },
        {
          "label": "South China Morning Post",
          "url": "http://www.scmp.com/news/world/article/1626912/bp-oil-spill-deepwater-horizon-spread-over-huge-area-ocean-floor"
        },
        {
          "label": "News.com.au",
          "url": "http://www.news.com.au/technology/environment/bps-gulf-of-mexico-deepwater-horizon-oil-spill-left-a-bathtub-ring-on-the-sea-floor-scientist-david-valentine-says/story-e6frflp0-1227105384738"
        },
        {
          "label": "Smithsonian",
          "url": "http://www.smithsonianmag.com/smart-news/weve-found-millions-gallons-missing-oil-deepwater-horizon-180953173/?no-ist"
        },
        {
          "label": "The Verge",
          "url": "http://www.theverge.com/2014/10/28/7082965/deepwater-horizon-spill-left-an-oil-ring-the-size-of-rhode-island-at"
        },
        {
          "label": "StateImpact",
          "url": "http://stateimpact.npr.org/texas/2014/10/28/deepwater-horizon-oil-may-sit-on-ocean-floor-but-how-did-it-get-there/"
        },
        {
          "label": "Gizmodo",
          "url": "http://gizmodo.com/where-deepwater-horizons-oil-went-and-how-we-found-it-1651663554"
        },
        {
          "label": "NBC News",
          "url": "http://www.nbcnews.com/science/environment/bp-oil-spill-left-rhode-island-sized-bathtub-ring-seafloor-n234961"
        },
        {
          "label": "Time",
          "url": "http://time.com/3542186/bp-oil-spill-seafloor-damage/"
        },
        {
          "label": "Phys.org",
          "url": "http://phys.org/news/2014-10-million-barrels-oil-ocean-floor.html"
        },
        {
          "label": "Mother Jones / Climate Desk",
          "url": "http://www.motherjones.com/environment/2014/10/bp-deepwater-horizon-study-oil-ocean-floor"
        },
        {
          "label": "Fuel Fix",
          "url": "http://fuelfix.com/blog/2014/10/27/researchers-find-oil-footprint-from-2010-gulf-oil-spill/"
        },
        {
          "label": "Ocean News & Technology",
          "url": "http://enews.oceannews.com/enews-articles/study-provides-some-answers-to-fate-of-deepwater-horizon-oil?utm_source=+Ocean+E-news+October+29%2C+2014&utm_campaign=Ocean+E-news+10-29-14&utm_medium=email"
        },
        {
          "label": "ScienceNews",
          "url": "https://www.sciencenews.org/article/oil-bp-spill-may-be-sitting-seafloor"
        },
        {
          "label": "EarthSky",
          "url": "http://earthsky.org/earth/where-is-the-missing-deepwater-horizon-oil"
        },
        {
          "label": "Digital Journal",
          "url": "http://www.digitaljournal.com/news/environment/where-did-all-that-bp-oil-go-scientists-finds-out/article/411411"
        },
        {
          "label": "ACS Chemical & Engineering News",
          "url": "http://cen.acs.org/articles/92/web/2014/10/Oil-Rose-Fell-Deepwater-Horizon.html?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+cen_latestnews+%28Chemical+%26+Engineering+News%3A+Latest+News%29"
        },
        {
          "label": "RT",
          "url": "http://rt.com/usa/200167-bp-oil-ring-spill-deepwater/"
        },
        {
          "label": "Jackson School of Geosciences",
          "url": "http://www.jsg.utexas.edu/news/2014/10/deepwater-horizon-oil-may-sit-on-ocean-floor-but-how-did-it-get-there/"
        },
        {
          "label": "ChemEurope",
          "url": "http://www.chemeurope.com/en/news/150269/where-did-all-the-oil-go.html"
        },
        {
          "label": "AL.com",
          "url": "http://www.al.com/business/index.ssf/2014/10/researchers_say_a_bathtub_ring.html"
        },
        {
          "label": "Nature World News",
          "url": "http://www.natureworldnews.com/articles/9962/20141030/miles-of-gulf-seafloor-slick-with-oil-from-bp-spill.htm"
        },
        {
          "label": "Galileo",
          "url": "https://www.galileonet.it/deepwater-horizon-un-quinto-del-petrolio-e-sul-fondo-del-mare/"
        },
        {
          "label": "Wired (Italy)",
          "url": "http://www.wired.it/attualita/ambiente/2014/10/29/disastro-deepwater-horizon-petrolio-fondo-mare/"
        },
        {
          "label": "Southern California Public Radio",
          "url": "http://www.scpr.org/programs/take-two/2014/10/30/40084/yosemite-sized-bathtub-ring-of-oil-still-left-from/"
        },
        {
          "label": "Slashdot",
          "url": "http://news.slashdot.org/story/14/10/28/2127223/location-of-spilled-oil-from-2010-deepwater-horizon-event-found"
        },
        {
          "label": "Tages Anzeiger",
          "url": "http://www.tagesanzeiger.ch/wissen/natur/3200-Quadratkilometer-Meeresboden-mit-Oel-bedeckt-/story/23349444"
        },
        {
          "label": "Der Bund",
          "url": "http://www.derbund.ch/wissen/natur/3200-Quadratkilometer-Meeresboden-mit-Oel-bedeckt-/story/23349444"
        },
        {
          "label": "Berner Zeitung",
          "url": "http://www.bernerzeitung.ch/wissen/natur/3200-Quadratkilometer-Meeresboden-mit-Oel-bedeckt-/story/23349444"
        },
        {
          "label": "Basler Zeitung",
          "url": "http://bazonline.ch/wissen/natur/3200-Quadratkilometer-Meeresboden-mit-Oel-bedeckt-/story/23349444"
        },
        {
          "label": "Homeland Security News Wire",
          "url": "http://www.homelandsecuritynewswire.com/dr20141029-resting-place-of-2-million-barrels-of-oil-missing-from-deepwater-horizon-accident-found"
        },
        {
          "label": "ThinkProgress",
          "url": "http://thinkprogress.org/climate/2014/10/28/3585245/bp-oil-spill-bathtub-ring/"
        },
        {
          "label": "National Geographic",
          "url": "http://voices.nationalgeographic.com/2014/10/30/epa-refines-pollution-rules/"
        },
        {
          "label": "Scientific American",
          "url": "http://www.scientificamerican.com/article/deepwater-horizon-gunk-settled-far-and-wide/"
        },
        {
          "label": "Earth Island Journal",
          "url": "http://www.earthisland.org/journal/index.php/elist/eListRead/bp_oil_spill_left_rhode_island-sized_bathtub_ring_on_ocean_floor/"
        },
        {
          "label": "Rappler",
          "url": "http://www.rappler.com/science-nature/environment/73367-2-million-barrels-oil-ocean-floor-bp-spill"
        }
      ]
    },
    {
      "title": "1872 OWENS VALLEY FAULT RUPTURE EXTENT - Amos et al., 2013",
      "publication": "10.1785/0120120024",
      "links": [
        {
          "label": "Historic California Quake Released Surprising Energy (LiveScience)",
          "url": "http://www.livescience.com/28069-owens-valley-california-earthquake-risk.html"
        }
      ]
    },
    {
      "title": "WHY I AM A GEOLOGIST",
      "links": [
        {
          "label": "CRMS Newsletter (page 11)",
          "url": "downloads/crms_alumni2011_page11.pdf"
        }
      ]
    },
    {
      "title": "NEW LAKE CHAMPLAIN BATHYMETRY - Manley et al., 2005",
      "publication": "Bathymetry of Lake Champlain",
      "links": [
        {
          "label": "Middlebury College #1",
          "url": "http://www.middlebury.edu/newsroom/archive/2005/node/112667"
        },
        {
          "label": "Middlebury College #2",
          "url": "http://www.middlebury.edu/newsroom/archive/2005/node/112254"
        }
      ]
    }
  ],
  "headers": {
    "index": "assets/headers/438070463.jpg",
    "research": "assets/headers/850284233.jpg",
    "pubs": "assets/headers/1667036285.jpg",
    "news": "assets/headers/1942484483.jpg",
    "teaching": "assets/headers/1265219731.jpg",
    "team": "assets/headers/257074268.jpg",
    "contact": "assets/headers/34347891.jpg",
    "cv": "assets/headers/1120403758.jpg",
    "press": "assets/headers/201294519.jpg",
    "data": "assets/headers/1834342027.jpg"
  },
  "gallery": [
    {
      "image": "assets/headers/438070463.jpg",
      "pages": [
        "index"
      ],
      "label": "Mountain valley"
    },
    {
      "image": "assets/headers/850284233.jpg",
      "pages": [
        "research"
      ],
      "label": "Mountain ranges from above"
    },
    {
      "image": "assets/headers/1667036285.jpg",
      "pages": [
        "pubs"
      ],
      "label": "From the archive"
    },
    {
      "image": "assets/headers/1942484483.jpg",
      "pages": [
        "news"
      ],
      "label": "River channels and coastline"
    },
    {
      "image": "assets/headers/1265219731.jpg",
      "pages": [
        "teaching"
      ],
      "label": "Learning and mentorship"
    },
    {
      "image": "assets/headers/257074268.jpg",
      "pages": [
        "team"
      ],
      "label": "Marine life"
    },
    {
      "image": "assets/headers/34347891.jpg",
      "pages": [
        "contact"
      ],
      "label": "Cratered terrain"
    },
    {
      "image": "assets/headers/1120403758.jpg",
      "pages": [
        "cv"
      ],
      "label": "Point-cloud landscape"
    },
    {
      "image": "assets/headers/201294519.jpg",
      "pages": [
        "press"
      ],
      "label": "Dune patterns"
    },
    {
      "image": "assets/headers/1834342027.jpg",
      "pages": [
        "data"
      ],
      "label": "Glaciers and mountain lakes"
    }
  ],
  "courses": [
    {
      "code": "EARTH 176",
      "title": "Geological Applications of GIS",
      "description": "This course provides an intensive introduction to Geographic Information Systems (GIS) with an emphasis on solving common geological problems. The ultimate goal of this course is to provide a solid GIS foundation and toolset with which the students can then tackle more complex problems on their own. Topics covered include topographic analysis, hydrological modeling, vector topology, geologic mapping, projections and datums, python scripting, etc.",
      "image": "assets/teaching/244964.jpg"
    },
    {
      "code": "EARTH 6",
      "title": "Mountains, Boots, & Backpacks",
      "description": "This course is designed to serve as an introductory field experience for non-majors to introduce both the scientific method and basic geological concepts using numerous field techniques and the wonderful diversity of landforms and processes available in the Owens Valley and high Sierra Nevada landscapes. This is a 10-day field and writing intensive course based out of the Sierra Nevada Aquatic Research Lab. It is loads of fun also!!",
      "image": "assets/teaching/1410053939.jpg"
    },
    {
      "code": "EARTH 1",
      "title": "Geology and the Environment",
      "description": "This course is designed to serve as an introduction to the complex linkages and interactions that take place between society and earth processes. Our population has grown exponentially over the last century while the earth and the resources on which we depend have remained finite. Understanding how we interact with and rely on such resources and earth processes is imperative to protect our livelihood and safety as a society, and ensure the future success of generations to come.",
      "image": "assets/teaching/1410054133.jpg"
    }
  ],
  "news": [
    {
      "id": "ai-assisted-coding-webinar",
      "date": "2026-09-29",
      "title": "Webinar: Introduction to AI-Assisted Coding",
      "summary": "A hands-on introduction to prompt engineering with LLMs in Google Colab, using Python and geospatial data to explore environmental inequity.",
      "media": {"label": "Watch webinar", "url": "https://www.youtube.com/watch?v=oIAQbEPmJOk"},
      "body": "<p>My webinar, <em>Introduction to AI-Assisted Coding: Prompt Engineering with LLMs in Google Colab</em>, is available on the NAIRR Pilot YouTube channel. The recording was published September 29, 2026.</p><p>The tutorial uses Gemini and Python in Google Colab to combine census and satellite data for geospatial analysis in the Baltimore region, with an emphasis on verifying generated code and retaining scientific oversight.</p><p><a href=\"https://www.youtube.com/watch?v=oIAQbEPmJOk\">Watch the webinar on YouTube</a></p><p><a href=\"https://github.com/CGC-UMCES/NAIRR-2026-Tutorial-Intro-Colab-LLM-Coding\">Tutorial materials on GitHub</a></p>"
    },
    {
      "id": "sustainable-ai-podcast",
      "date": "2026-04-13",
      "title": "Podcast: Sustainable AI",
      "summary": "I joined AI, Unscripted as a guest expert to discuss AI's environmental footprint and informed, responsible use in education.",
      "media": {"label": "Listen to podcast", "url": "https://needle.podbean.com/e/ai-unscripted-sustainable-ai-balancing-innovation-with-environmental-responsibility/"},
      "body": "<p>I joined hosts Jennifer Potter and Mary Crowley-Farrell as a guest expert for <em>AI, Unscripted - Sustainable AI: Balancing Innovation with Environmental Responsibility</em>, an episode of <em>Moving the Needle</em> published April 13, 2026.</p><p>We discuss the environmental impact of AI and how evidence-based decisions can support responsible AI use in education. The episode runs approximately 29 minutes.</p><p><a href=\"https://needle.podbean.com/e/ai-unscripted-sustainable-ai-balancing-innovation-with-environmental-responsibility/\">Listen to the episode on Podbean</a></p>"
    },
    {
      "id": "lidar-timber-harvest",
      "date": "2024-07-18",
      "title": "New paper: Mapping forest harvests with LiDAR",
      "summary": "Using a single airborne LiDAR survey campaign and machine learning, we mapped forest harvest types and broad age classes with 94.9% overall accuracy, providing a landscape-scale view of forest management to inform wildlife conservation in Pennsylvania.",
      "body": "<p>Using a single airborne LiDAR survey campaign and machine learning, we mapped forest harvest types and broad age classes with 94.9% overall accuracy, providing a landscape-scale view of forest management to inform wildlife conservation in Pennsylvania.</p><p>Published in <em>GIScience &amp; Remote Sensing</em> on July 18, 2024.</p><p><a href=\"https://doi.org/10.1080/15481603.2024.2379198\">Read the paper</a></p>"
    },
    {
      "id": "milankovitch-paced-erosion",
      "date": "2023-01-26",
      "title": "Paper out on orbital pacing of erosion in the Andes",
      "summary": "Milankovitch-paced erosion in the southern Central Andes, published in Nature Communications.",
      "body": "<p>Milankovitch-paced erosion in the southern Central Andes is published in Nature Communications.</p><p><a href=\"https://www.nature.com/articles/s41467-023-36022-0\">Read the paper</a></p>"
    },
    {
      "id": "freshwater-salinization",
      "date": "2022-06-28",
      "title": "Paper out on freshwater salinization in New England",
      "summary": "Urbanization drives geographically heterogeneous freshwater salinization in the northeastern United States.",
      "body": "<p>Urbanization drives geographically heterogeneous freshwater salinization in the northeastern United States is published in the Journal of Environmental Quality.</p><p><a href=\"downloads/utz_et_al._jofenvqual_2022.pdf\">Read the paper (PDF)</a></p>"
    },
    {
      "id": "rpe-regeneration",
      "date": "2022-03-20",
      "title": "Methods paper out on quantifying RPE regeneration",
      "summary": "Nitroreductase/metronidazole-mediated ablation and the RpEGEN MATLAB platform for studying zebrafish retinal pigment epithelium regeneration.",
      "body": "<p>Our methods paper describes nitroreductase/metronidazole-mediated ablation and the RpEGEN MATLAB platform for studying regeneration of the zebrafish retinal pigment epithelium.</p><p><a href=\"downloads/leach_etal_jove_2022.pdf\">Read the paper (PDF)</a></p>"
    },
    {
      "id": "new-paper-on-the-ongoing-mc20-oil-spill-in-the-gulf-of-mexico",
      "date": "2020-05-11",
      "title": "New paper on the ongoing MC20 Oil Spill in the Gulf of Mexico",
      "summary": "A new paper I have been working on with my co-authors exploring the nature of the ongoing oil spill at the MC20 lease block in the Gulf of Mexico has been published at Marine Pollution Bulletin. LINK",
      "body": "\n\t\t\t\t<p>A new paper I have been working on with my co-authors exploring the nature of the ongoing oil spill at the MC20 lease block in the Gulf of Mexico has been published at Marine Pollution Bulletin. <strong><a href=\"https://www.sciencedirect.com/science/article/pii/S0025326X20301740#s0150\">LINK</a></strong></p>   <a href=\"#research\"> <img src=\"assets/news/1-s2-0-s0025326x20301740-ga1-lrg_orig.jpg\" alt=\"Image accompanying New paper on the ongoing MC20 Oil Spill in the Gulf of Mexico\" loading=\"lazy\"> </a>  \n\n\t\t"
    },
    {
      "id": "how-do-evs-compare-to-gas-cars-in-the-us",
      "date": "2018-12-03",
      "title": "How do EVS Compare to GAS Cars in the US??",
      "summary": "This recent update by the Union of Concerned Scientists shows just how efficient new EVs are regardless of where you are on the national grid. Even on Oahu, where I believe diesel is predominantly used for electricity, one would need a gas ",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/2016-map-best-ev-logo_orig.jpg\" alt=\"Image accompanying How do EVS Compare to GAS Cars in the US??\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>This recent update by the Union of Concerned Scientists shows just how efficient new EVs are regardless of where you are on the national grid. Even on Oahu, where I believe diesel is predominantly used for electricity, one would need a gas car that gets ~47 mpg to best the efficiency of the newest EVs. As the grid continues to add renewable energy to the mix these numbers will only grow. See the original post and maps <a href=\"https://blog.ucsusa.org/dave-reichmuth/new-data-show-electric-vehicles-continue-to-get-cleaner\">HERE</a>. </p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "how-efficient-are-electric-cars-well-to-wheels",
      "date": "2018-12-03",
      "title": "How efficient are Electric Cars Well-to-wheels??",
      "summary": "ANSWER: MUCH MORE EFFICIENT. See the entire report and figure source HERE produced by the organization Transport & Environment (​https://www.transportenvironment.org). Also a good article by CleanTechnica HERE.",
      "body": "\n\t\t\t\t<p>ANSWER: MUCH MORE EFFICIENT.  See the entire report and figure source <a href=\"https://www.transportenvironment.org/sites/te/files/publications/Full_%20Roadmap%20freight%20buses%20Europe_2050_FINAL%20VERSION_corrected%20%282%29.pdf\">HERE</a> produced by the organization Transport &amp; Environment (https://www.transportenvironment.org).  Also a good article by CleanTechnica <a href=\"https://cleantechnica.com/2018/03/10/electric-car-myth-buster-efficiency/\">HERE</a>.</p>   <a href=\"#research\"> <img src=\"assets/news/screen-shot-2018-12-03-at-4-53-56-pm_orig.png\" alt=\"Image accompanying How efficient are Electric Cars Well-to-wheels??\" loading=\"lazy\"> </a>  \n\n\t\t"
    },
    {
      "id": "new-paper-out-in-pnas-from-the-andes",
      "date": "2018-07-01",
      "title": "New paper Out in PNAS from the Andes",
      "summary": "New paper entitled \"Mio-Pliocene aridity in the south-central Andes associated with Southern Hemisphere cold periods\" is now out in PNAS thanks to the hard work of Professor Amidon at Middlebury College. Have a look at it HERE.",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/screen-shot-2018-12-03-at-4-21-05-pm.png\" alt=\"Image accompanying New paper Out in PNAS from the Andes\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>New paper entitled &quot;Mio-Pliocene aridity in the south-central Andes associated with Southern Hemisphere cold periods&quot; is now out in PNAS thanks to the hard work of Professor Amidon at Middlebury College.  Have a look at it <a href=\"#publications\">HERE</a>.</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "deepwater-horizon-paper-2-is-out-in-pnas",
      "date": "2017-01-03",
      "title": "Deepwater Horizon Paper #2 is out in PNAS",
      "summary": "New paper (Bagby et al., 2017) entitled \"Persistence and biodegradation of oil at the ocean floor following Deepwater Horizon\" is now out in PNAS. We also got the cover photo (look left)!! Give it a read along with some good PRESS if you ar",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/1-cover_orig.gif\" alt=\"Image accompanying Deepwater Horizon Paper #2 is out in PNAS\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>New paper (<a href=\"http://www.pnas.org/content/114/1/E9.abstract\">Bagby et al., 2017</a>) entitled &quot;Persistence and biodegradation of oil at the ocean floor following Deepwater Horizon&quot; is now out in PNAS. We also got the cover photo (look left)!! Give it a read along with some good PRESS if you are interested.</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "explore-google-earth-engine-timelapse",
      "date": "2016-12-13",
      "title": "Explore Google Earth Engine Timelapse",
      "summary": "Check out the Timelapse searchable imagery time series video for the globe created using Google Earth Engine. Really cool for detecting land cover change across the globe over the past 33 years!!",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/untitled_orig.jpg\" alt=\"Image accompanying Explore Google Earth Engine Timelapse\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>Check out the <a href=\"https://earthengine.google.com/timelapse/\"><strong>Timelapse</strong></a> searchable imagery time series video for the globe created using Google Earth Engine. Really cool for detecting land cover change across the globe over the past 33 years!!</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "new-paper-out-on-the-santa-barbara-basin-bacterial-mat",
      "date": "2016-10-18",
      "title": "New Paper out on the S.B. Basin Bacterial Mat",
      "summary": "We have just published a new paper in Environmental Science and Technology that identifies an extensive bacterial mat along the seafloor in the Santa Barbara Basin. The discovery was made possible by an autonomous underwater vehicle armed w",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/mat_orig.jpg\" alt=\"Image accompanying New Paper out on the S.B. Basin Bacterial Mat\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>We have just published a new paper in <em><strong><a href=\"#publications\">Environmental Science and Technology</a> </strong></em>that identifies an extensive bacterial mat along the seafloor in the Santa Barbara Basin. The discovery was made possible by an autonomous underwater vehicle armed with two high resolution cameras and has implications for nitrogen and sulfur cycles in the basin. An interesting read if you get a chance! Also see some PRESS from UCSB here.</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "started-a-new-position-at-university-of-pittsburgh",
      "date": "2016-09-30",
      "title": "Started a New position at Pitt",
      "summary": "Started my new position as a postdoctoral associate in the Department of Geology and Environmental Science at the University of Pittsburgh. I will be working with Eitan Shelef on a host of new and interesting problems related to landscape e",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/image-2_orig.jpg\" alt=\"Image accompanying Started a New position at Pitt\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>Started my new position as a postdoctoral associate in the Department of Geology and Environmental Science at the University of Pittsburgh. I will be working with <a href=\"http://www.pitt.edu/~shelef/\"><strong>Eitan Shelef</strong></a> on a host of new and interesting problems related to landscape evolution across the globe. Exciting times in the &#x27;burgh and stop by if you are in the area!</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "new-paper-on-the-toro-negro-formation-argentina",
      "date": "2016-09-14",
      "title": "New Paper on the Toro Negro Formation, Argentina",
      "summary": "A new paper (Amidon et al.) on the age, provenance, and sedimentation rates of the Toro Negro Formation in northwest Argentina has recently been published in the Journal of South American Earth Sciences. A nice collaborative effort spearhea",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/toronegro_1_orig.jpg\" alt=\"Image accompanying New Paper on the Toro Negro Formation, Argentina\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>A new paper (<em><a href=\"#publications\">Amidon et al.</a></em>) on the age, provenance, and sedimentation rates of the Toro Negro Formation in northwest Argentina has recently been published in the <em><strong>Journal of South American Earth Sciences</strong></em>. A nice collaborative effort spearheaded by Professor William Amidon and Argentinean collaborators. Give it a read!</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "back-from-the-depths-of-the-gulf-of-mexico",
      "date": "2015-07-01",
      "title": "Back from the Depths of the gulf of Mexico...",
      "summary": "Just back from two weeks on the R/V Atlantis as part of the SEEPS '15 cruise in the Gulf of Mexico. Good times, good people, and great science. Check out the highlights movie by clicking on the following link for cool Alvin submarine footag",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/8847976.jpg\" alt=\"Image accompanying Back from the Depths of the gulf of Mexico...\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>Just back from two weeks on the R/V Atlantis as part of the SEEPS &#x27;15 cruise in the Gulf of Mexico. Good times, good people, and great science. Check out the highlights movie by clicking on the following link for cool Alvin submarine footage etc -<strong> <a href=\"https://www.dropbox.com/s/eheh88qrayc6a2n/SEEPS%202015%20Highlights_480p.mov?dl=0\">LINK</a></strong></p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "google-earth-pro-now-free",
      "date": "2015-02-02",
      "title": "Google Earth Pro now Free!!",
      "summary": "Google Earth Pro has now been made FREE!!! Tell your family and friends and look at all the cool ways you can use it in earth surface processes (Fisher et al., 2012). See press release from Google here.",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/1422911188.png\" alt=\"Image accompanying Google Earth Pro now Free!!\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>Google Earth Pro has now been made FREE!!! Tell your family and friends and look at all the cool ways you can use it in earth surface processes (<a href=\"downloads/2012_fisher_etal_googearth_gsasppap.pdf\">Fisher et al., 2012</a>). See press release from Google <a href=\"http://google-latlong.blogspot.com/2015/01/google-earth-pro-is-now-free.html\">here</a>.</p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "deepwater-horizon-paper-is-out",
      "date": "2014-10-27",
      "title": "Deepwater Horizon paper is out!",
      "summary": "Our PNAS paper on the Deepwater Horizon footprint has just come out in early view and is garnering plenty of attention from the press, as well as obvious criticism from BP (see Press for more info).",
      "body": "\n\t\t\t\t \t \t\t \t\t\t \t\t\t\t \t\t\t\t\t \t\t\t\t\t\t   <a href=\"#research\"> <img src=\"assets/news/5818411_orig.jpg\" alt=\"Image accompanying Deepwater Horizon paper is out!\" loading=\"lazy\"> </a>     \t\t\t\t\t \t\t\t\t\t\t\t\t \t\t\t\t\t \t\t\t\t\t\t  <p>Our <a href=\"http://www.pnas.org/content/early/2014/10/23/1414873111.abstract\">PNAS paper</a> on the Deepwater Horizon footprint has just come out in early view and is garnering plenty of attention from the press, as well as obvious criticism from BP (see Press for more info). </p>   \t\t\t\t\t \t\t\t\t\t\t\t \t\t \t \n\n\t\t"
    },
    {
      "id": "a-new-day-a-new-website",
      "date": "2014-09-06",
      "title": "A NEW DAY, A NEW WEBSITE",
      "summary": "As I ready to start my postdoctoral fellowship at the Jackson School of Geosciences in Austin, TX I figured it was time to make a new website, and today burchfisher.com is mostly, sort of, fully operational, similar to the Death Star. Hopef",
      "body": "\n\t\t\t\t<p>As I ready to start my postdoctoral fellowship at the Jackson School of Geosciences in Austin, TX I figured it was time to make a new website, and today burchfisher.com is mostly, sort of, fully operational, similar to the Death Star. Hopefully somebody doesn&#x27;t destroy it like the Death Star.</p>\n\n\t\t"
    }
  ]
};
