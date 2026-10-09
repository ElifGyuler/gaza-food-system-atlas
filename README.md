# Gaza Food System Atlas

### An interactive data atlas exploring food insecurity, agricultural destruction, conflict context, and recovery priorities in the Gaza Strip

[View the live project](https://elifgyuler.github.io/gaza-food-system-atlas/)

Built for the **Women in Data Datathon 2026 — Sustain / Eat Track**.

---

## Overview

The **Gaza Food System Atlas** is an interactive web-based data storytelling project examining how food insecurity, conflict-related disruption, and the progressive loss of agricultural capacity have interacted in the Gaza Strip since October 2023.

The project brings together humanitarian, food-security, agricultural, geospatial, and conflict-related information in a single visual interface.

Rather than presenting food insecurity as the result of a single factor, the atlas highlights the interaction between:

- restrictions and disruptions affecting food access;
- acute food insecurity;
- progressive damage to cropland and agricultural infrastructure;
- loss of local food-producing capacity;
- uneven agricultural recovery;
- and conflict and security conditions.

The project also includes an illustrative decision-support model designed to identify areas that may warrant closer review when considering agricultural rehabilitation priorities.

---

## Live Demo

**Interactive atlas:**  
https://elifgyuler.github.io/gaza-food-system-atlas/

**Source code:**  
https://github.com/ElifGyuler/gaza-food-system-atlas

---

## Research Focus

The atlas is structured around several questions:

1. How did acute food insecurity evolve relative to agricultural destruction?
2. How has damage to cropland and agricultural infrastructure changed over time?
3. How does the loss of agricultural capacity affect local food production and livelihoods?
4. Where has agricultural rehabilitation been observed?
5. Which areas may warrant additional attention when recovery resources are limited?
6. How can conflict and security conditions help contextualise patterns of damage and recovery?

The project does not attempt to reduce Gaza's food crisis to agricultural destruction alone.

Instead, it visualises overlapping pressures affecting food availability, access, production capacity, livelihoods, recovery, and the broader conflict environment.

---

## Key Features

### 1. Crisis Timeline

A chronological overview introduces the early shock to the food system and the rapid deterioration of food access and food-security conditions.

### 2. IPC Food-Insecurity Visualisation

The project visualises acute food insecurity using the Integrated Food Security Phase Classification (IPC) framework.

IPC phases range from:

- Phase 1 — Minimal
- Phase 2 — Stressed
- Phase 3 — Crisis
- Phase 4 — Emergency
- Phase 5 — Catastrophe / Famine

### 3. Agricultural Damage Timeline

An interactive timeline allows users to examine changes in recorded cropland damage over time.

The map updates dynamically as the user moves through the timeline.

### 4. Interactive Geospatial Map

The atlas uses **Leaflet.js** to visualise spatial patterns in agricultural damage and related indicators across the Gaza Strip.

### 5. Food-System Interaction Analysis

The project compares the evolution of food insecurity with the progressive destruction of agricultural capacity.

This helps distinguish between the early deterioration in food access and the longer-term erosion of Gaza's ability to produce food locally.

### 6. Recovery Analysis

The recovery section compares recorded agricultural destruction with areas where rehabilitation activity has been observed.

This highlights potential mismatches between the scale of recorded damage and current recovery activity.

### 7. Conflict and Security Context

Conflict-event data and analysis are used as contextual information to better understand the security environment surrounding agricultural damage, displacement, humanitarian access, and recovery.

Conflict data are treated as contextual evidence rather than as a direct causal measure in the current version of the atlas.

### 8. Illustrative Priority Model

The atlas includes a transparent decision-support heuristic for agricultural rehabilitation.

The current score is calculated as:



Assessed-site counts are displayed separately as an indication of data coverage and are **not** converted into a confidence score.

The ranking is illustrative only. It is not an official humanitarian allocation model and should not be interpreted as a final funding recommendation.

---

## Data Sources

The Gaza Food System Atlas combines publicly available humanitarian, food-security, agricultural, geospatial, and conflict-related information.

### FAO / UNOSAT

Satellite-based assessments of cropland, greenhouse, and agricultural infrastructure damage in the Gaza Strip form the main basis of the agricultural-damage analysis.

- [Food and Agriculture Organization of the United Nations (FAO)](https://www.fao.org/)
- [United Nations Satellite Centre (UNOSAT)](https://unosat.org/)

These assessments are used to track the scale and progression of agricultural damage over time.

### IPC — Integrated Food Security Phase Classification

IPC assessments are used to represent the severity and evolution of acute food insecurity in the Gaza Strip.

- [IPC Global Initiative](https://www.ipcinfo.org/)

The IPC framework provides the basis for the food-security classifications displayed in the atlas.

### FAO Humanitarian and Agricultural Recovery Updates

FAO reporting on agricultural production, rehabilitation, farmer support, and humanitarian response is used to contextualise recovery and the restoration of local food-producing capacity.

- [FAO Emergencies and Resilience](https://www.fao.org/emergencies/)

### ACLED — Armed Conflict Location & Event Data

Conflict-event data and analysis from **ACLED (Armed Conflict Location & Event Data)** were consulted during project development to contextualise conflict and security dynamics affecting the Gaza Strip.

- [ACLED](https://acleddata.com/)
- [ACLED Palestine Country Profile](https://acleddata.com/country/palestine)

ACLED data were accessed during project development in **2026**.

ACLED information is used as a contextual conflict-data source and is **not included in the calculation of the priority score in the current public version of the atlas**.

---

## Methodology

The project follows a transparent exploratory workflow combining multiple forms of evidence.

### Data Integration

Information from agricultural-damage assessments, food-security classifications, humanitarian reporting, recovery updates, and conflict-related sources was reviewed and structured for comparison.

The project does not assume that all sources measure the same phenomenon. Instead, each source is used for a specific analytical purpose.

### Temporal Analysis

Damage estimates are organised chronologically to show how agricultural destruction accumulated over time.

This makes it possible to compare the pace of physical destruction with changes in food-security conditions.

### Spatial Analysis

Governorate-level and point-level information is displayed geographically where suitable spatial information is available.

The aim is to show how agricultural damage and recovery patterns vary across the Gaza Strip.

### Comparative Analysis

Food-security deterioration is compared with agricultural destruction to examine how the two processes evolved relative to one another.

The analysis does not assume that agricultural destruction alone caused the observed food-security outcomes.

### Conflict Context

ACLED conflict-event information is used to support contextual interpretation of the broader security environment.

In the current version of the project, ACLED data are not used as an input to the priority-score calculation.

### Recovery Analysis

Recorded destruction is compared with available information on rehabilitation activity to identify possible geographic gaps between damage and recovery.

### Decision-Support Heuristic

The priority model deliberately uses a small number of interpretable variables rather than presenting a complex model as an objective allocation mechanism.

The model is intended to support further investigation, not replace humanitarian needs assessments or operational decision-making.

---

## Data Interpretation and Limitations

This project should be interpreted with several limitations in mind.

- Assessment coverage differs across locations and periods.
- Satellite-based estimates depend on the imagery, methodology, and spatial coverage available at the time of assessment.
- Later map dates may retain the latest available spatial snapshot where updated point-level information is unavailable.
- Recorded site counts vary substantially between governorates.
- Conflict conditions affect both data availability and the ability to conduct field verification.
- Humanitarian need cannot be represented fully through a small number of quantitative indicators.
- Correlation between food insecurity, conflict conditions, and agricultural destruction should not automatically be interpreted as a single causal relationship.
- Conflict-event data are used for contextual interpretation rather than as a complete measure of violence exposure.
- The priority ranking is exploratory and has not been externally validated as an allocation tool.

These limitations are intentionally made visible because uncertainty, source coverage, and measurement quality are part of the analytical problem.

---

## Technology

The project is built as a lightweight static web application using:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Leaflet.js**
- **OpenStreetMap**
- **SVG-based custom visualisations**
- **GitHub Pages**

No backend or build framework is required.

---

## Repository Structure

```text
gaza-food-system-atlas/
│
├── index.html      # Page structure and narrative content
├── style.css       # Layout and visual design
├── data.js         # Structured project data
├── app.js          # Interactive maps, charts, timeline and priority model
└── README.md       # Project documentation
```

---

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/ElifGyuler/gaza-food-system-atlas.git
```

Enter the project directory:

```bash
cd gaza-food-system-atlas
```

Because the project is a static web application, it can be opened directly through `index.html`.

For local development, a lightweight local server can also be used.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Project Context

This project was developed for the **Women in Data Datathon 2026 — Sustain / Eat Track**.

The aim was to move beyond a static dashboard and create an interactive analytical narrative that connects humanitarian outcomes, agricultural capacity, conflict context, spatial patterns, and recovery priorities.

A central design principle was **interpretability**: users should be able to understand where the data come from, how indicators are used, and where uncertainty limits the conclusions that can be drawn.

The project also reflects an emphasis on **measurement validity and transparent analytical choices**. A numerical output is not automatically treated as a reliable representation of the underlying humanitarian or political reality simply because it can be computed.

---

## Author

**Elif Gyuler**

Research Data Scientist | Applied Data Science | NLP | Computational Social Science

- GitHub: [ElifGyuler](https://github.com/ElifGyuler)
- LinkedIn: [Elif Gyuler](https://www.linkedin.com/in/elifgyuler/)

---

## Data Attribution

This repository does not replace or supersede the original source datasets.

Users interested in reproducing or extending the analysis should obtain data directly from the relevant source organisations and comply with their applicable access, licensing, and attribution requirements.

### Source Organisations

- **FAO — Food and Agriculture Organization of the United Nations**
- **UNOSAT — United Nations Satellite Centre**
- **IPC — Integrated Food Security Phase Classification**
- **ACLED — Armed Conflict Location & Event Data**

ACLED-derived information should be cited and used in accordance with the **ACLED Terms of Use and Attribution Policy**.

---

## Disclaimer

This is an independent analytical and data-visualisation project developed for research and datathon purposes.

It is **not an official needs assessment, humanitarian allocation framework, conflict-monitoring product, or operational recommendation**.

The views, interpretations, analytical choices, and visualisations presented in this project are those of the author and do not imply endorsement by FAO, UNOSAT, IPC, ACLED, Women in Data, or any other organisation referenced in the project.
```.
