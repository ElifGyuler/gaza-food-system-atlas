// =====================================================
// 01 — IPC CHART
// =====================================================

const chart = document.getElementById("ipc-chart");

ipcData.forEach(item => {

  const row = document.createElement("div");
  row.className = "ipc-row";

  row.innerHTML = `
    <div class="ipc-row-head">
      <span>${item.date}</span>
      <strong>${item.phase3plus}%</strong>
    </div>

    <div class="ipc-track">
      <div
        class="ipc-fill"
        style="width: ${item.phase3plus}%">
      </div>
    </div>
  `;

  chart.appendChild(row);

});



// =====================================================
// 02 — CREATE MAP
// =====================================================

const map = L.map("map", {
  preferCanvas: true
}).setView(
  [31.42, 34.37],
  10
);



// =====================================================
// 03 — OPENSTREETMAP BASEMAP
// =====================================================

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }
).addTo(map);



// =====================================================
// 04 — GAZA GOVERNORATE BOUNDARIES
// =====================================================

fetch(
  "https://www.geoboundaries.org/api/current/gbOpen/PSE/ADM2/"
)

  .then(response => response.json())

  .then(info =>
    fetch(info.gjDownloadURL)
  )

  .then(response =>
    response.json()
  )

  .then(data => {

    L.geoJSON(
      data,
      {

        style: {
          color: "#9a3b2e",
          weight: 2,
          fillColor: "#9a3b2e",
          fillOpacity: 0.08
        },

        onEachFeature: function(feature, layer) {

          const name =
            feature.properties.shapeName ||
            feature.properties.NAME_2 ||
            feature.properties.name;

          if (name) {
            layer.bindTooltip(name);
          }

        }

      }
    ).addTo(map);

  })

  .catch(error => {

    console.error(
      "Governorate boundaries could not be loaded:",
      error
    );

  });



// =====================================================
// 05 — EARLY AGRICULTURAL DAMAGE
//      NORTH GAZA — 15 OCT 2023
// =====================================================

function getEarlyDamageStyle(damage) {

  if (damage === "Destroyed") {

    return {
      radius: 6,
      color: "#4f120c",
      fillColor: "#6e1f14"
    };

  }

  if (damage === "Severe Damage") {

    return {
      radius: 5,
      color: "#7f291d",
      fillColor: "#9a3b2e"
    };

  }

  if (damage === "Moderate Damage") {

    return {
      radius: 4,
      color: "#b15e48",
      fillColor: "#c98268"
    };

  }

  // Impact crater
  return {
    radius: 3,
    color: "#8d6f63",
    fillColor: "#b49a8e"
  };

}


const earlyDamageLayer = L.layerGroup();


earlyDamagePoints.forEach(point => {

  const style =
    getEarlyDamageStyle(point.damage);

  L.circleMarker(
    [point.lat, point.lng],
    {
      radius: style.radius,
      color: style.color,
      fillColor: style.fillColor,
      fillOpacity: 0.85,
      weight: 1
    }
  )

  .bindPopup(
    `
      <strong>${point.damage}</strong>
      <br>
      15 Oct 2023 · North Gaza
    `
  )

  .addTo(earlyDamageLayer);

});



// =====================================================
// 06 — GREENHOUSE DAMAGE
//      23 DEC 2024
// =====================================================

function getGreenhouseStyle(damage) {

  if (damage === "Destroyed") {

    return {
      radius: 4,
      color: "#4f120c",
      fillColor: "#6e1f14"
    };

  }

  if (damage === "Severe Damage") {

    return {
      radius: 3.5,
      color: "#7f291d",
      fillColor: "#9a3b2e"
    };

  }

  // Moderate damage
  return {
    radius: 3,
    color: "#b15e48",
    fillColor: "#c98268"
  };

}


const greenhouseLayer = L.layerGroup();


greenhousePoints.forEach(point => {

  const style =
    getGreenhouseStyle(point.damage);

  L.circleMarker(
    [point.lat, point.lng],
    {
      radius: style.radius,
      color: style.color,
      fillColor: style.fillColor,
      fillOpacity: 0.75,
      weight: 0.6
    }
  )

  .bindPopup(
    `
      <strong>${point.damage}</strong>
      <br>
      ${point.governorate}
      <br>
      23 Dec 2024
    `
  )

  .addTo(greenhouseLayer);

});



// =====================================================
// 07 — MAP LEGENDS
// =====================================================

const mapLegendContent =
  document.getElementById("map-legend-content");


function showEarlyDamageLegend() {

  mapLegendContent.innerHTML = `

    <div class="legend-title">
      Early agricultural damage snapshot
      <br>
      15 Oct 2023 · North Gaza
    </div>

    <div class="legend-row">
      <span class="legend-dot destroyed"></span>
      Destroyed
    </div>

    <div class="legend-row">
      <span class="legend-dot severe"></span>
      Severe damage
    </div>

    <div class="legend-row">
      <span class="legend-dot moderate"></span>
      Moderate damage
    </div>

    <div class="legend-row">
      <span class="legend-dot impact"></span>
      Impact crater
    </div>

  `;

}



function showNoSpatialLegend() {

  mapLegendContent.innerHTML = `

    <div class="legend-title">
      Cropland damage estimate
    </div>

    <div class="legend-row">
      No matching point-level spatial assessment
      is available for this date.
    </div>

  `;

}



function showGreenhouseLegend() {

  mapLegendContent.innerHTML = `

    <div class="legend-title">
      Greenhouse damage snapshot
      <br>
      23 Dec 2024
    </div>

    <div class="legend-row">
      <span class="legend-dot destroyed"></span>
      Destroyed
    </div>

    <div class="legend-row">
      <span class="legend-dot severe"></span>
      Severe damage
    </div>

    <div class="legend-row">
      <span class="legend-dot moderate"></span>
      Moderate damage
    </div>

  `;

}



function showLatestGreenhouseContextLegend() {

  mapLegendContent.innerHTML = `

    <div class="legend-title">
      Latest available spatial snapshot
    </div>

    <div class="legend-row">
      23 Dec 2024 greenhouse assessment
      shown as spatial context.
    </div>

    <div class="legend-row">
      <span class="legend-dot destroyed"></span>
      Destroyed
    </div>

    <div class="legend-row">
      <span class="legend-dot severe"></span>
      Severe damage
    </div>

    <div class="legend-row">
      <span class="legend-dot moderate"></span>
      Moderate damage
    </div>

  `;

}



// =====================================================
// 08 — DAMAGE TIMELINE SLIDER
// =====================================================

const damageSlider =
  document.getElementById("damage-slider");

const damageReadout =
  document.getElementById("damage-readout");

damageSlider.max =
  damageData.length - 1;



// =====================================================
// 09 — UPDATE MAP FROM SLIDER
// =====================================================

function updateDamageMap() {

  const index =
    Number(damageSlider.value);

  const selected =
    damageData[index];


  // Update percentage / date
  damageReadout.textContent =
    selected.date +
    " — " +
    selected.damage.toFixed(1) +
    "% cropland damaged";


  // First remove both point layers
  if (map.hasLayer(earlyDamageLayer)) {
    map.removeLayer(earlyDamageLayer);
  }

  if (map.hasLayer(greenhouseLayer)) {
    map.removeLayer(greenhouseLayer);
  }



  // ---------------------------------------------
  // OCT 2023
  // ---------------------------------------------

  if (index === 0) {

    earlyDamageLayer.addTo(map);

    showEarlyDamageLegend();

    map.setView(
      [31.52, 34.48],
      10
    );

  }



  // ---------------------------------------------
  // NOV 2023 → OCT 2024
  // ---------------------------------------------

  else if (index < 13) {

    showNoSpatialLegend();

    map.setView(
      [31.42, 34.37],
      10
    );

  }



  // ---------------------------------------------
  // DEC 2024
  // ---------------------------------------------

  else if (index === 13) {

    greenhouseLayer.addTo(map);

    showGreenhouseLegend();

    map.setView(
      [31.42, 34.37],
      10
    );

  }



  // ---------------------------------------------
  // 2025
  // ---------------------------------------------

  else {

    greenhouseLayer.addTo(map);

    showLatestGreenhouseContextLegend();

    map.setView(
      [31.42, 34.37],
      10
    );

  }

}



// Slider movement
damageSlider.addEventListener(
  "input",
  updateDamageMap
);



// =====================================================
// 10 — INITIAL MAP STATE
// =====================================================

updateDamageMap();

// =====================================================
// 11 — INTERACTION CHART
// =====================================================

const interactionChart =
  document.getElementById("interaction-chart");

interactionData.forEach(item => {

  const row =
    document.createElement("div");

  row.className =
    "interaction-row";


  row.innerHTML = `
    <div class="interaction-date">
      ${item.date}
    </div>

    <div class="interaction-series">

      <div class="interaction-label">
        <span>IPC Phase 3+</span>
        <strong>${item.ipc}%</strong>
      </div>

      <div class="interaction-track">
        <div
          class="interaction-fill ipc"
          style="width: ${item.ipc}%">
        </div>
      </div>


      <div class="interaction-label damage-label">
        <span>Cropland damage</span>
        <strong>${item.damage.toFixed(1)}%</strong>
      </div>

      <div class="interaction-track">
        <div
          class="interaction-fill damage"
          style="width: ${item.damage}%">
        </div>
      </div>

    </div>
  `;

  interactionChart.appendChild(row);

});

// =====================================================
// 12 — PRIORITY MODEL
// =====================================================

const priorityRanking =
  document.getElementById("priority-ranking");


const scoredPriorityData =
  priorityData
    .map(item => {

      const destructionScore =
        item.destruction * 0.8;

      const rehabGapScore =
        item.rehabFocus ? 0 : 20;

      const priorityScore =
        destructionScore +
        rehabGapScore;

      return {
        ...item,
        priorityScore
      };

    })

    .sort(
      (a, b) =>
        b.priorityScore -
        a.priorityScore
    );


scoredPriorityData.forEach((item, index) => {

  const row =
    document.createElement("div");

  row.className =
    "priority-row";

  row.innerHTML = `

    <div class="priority-name">

      <span class="priority-rank">
        ${index + 1}
      </span>

      <div>
        <strong>
          ${item.governorate}
        </strong>

        <span>
          ${item.destruction}% destroyed
          ·
          ${item.sites.toLocaleString()} assessed sites
        </span>
      </div>

    </div>


    <div class="priority-score-area">

      <strong>
        ${item.priorityScore.toFixed(1)}
      </strong>

      <div class="priority-track">

        <div
          class="priority-fill"
          style="width: ${item.priorityScore}%">
        </div>

      </div>

    </div>

  `;

  priorityRanking.appendChild(row);

});

// =====================================================
// 13 — CROPLAND DAMAGE LINE CHART
// =====================================================

const damageLineChart =
  document.getElementById("damage-line-chart");

const SVG_NS =
  "http://www.w3.org/2000/svg";

function createSvgElement(tag, attributes = {}) {

  const element =
    document.createElementNS(SVG_NS, tag);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}


const chartWidth = 900;
const chartHeight = 250;

const chartLeft = 52;
const chartRight = 20;
const chartTop = 18;
const chartBottom = 42;

const plotWidth =
  chartWidth - chartLeft - chartRight;

const plotHeight =
  chartHeight - chartTop - chartBottom;


function damageX(index) {

  return chartLeft +
    (index / (damageData.length - 1)) *
    plotWidth;

}


function damageY(value) {

  return chartTop +
    plotHeight -
    (value / 100) *
    plotHeight;

}


// -----------------------------
// GRID
// -----------------------------

[0, 25, 50, 75, 100].forEach(value => {

  const y =
    damageY(value);

  damageLineChart.appendChild(
    createSvgElement("line", {
      x1: chartLeft,
      x2: chartWidth - chartRight,
      y1: y,
      y2: y,
      stroke: "#ddd8cd",
      "stroke-width": 1
    })
  );


  const label =
    createSvgElement("text", {
      x: chartLeft - 10,
      y: y + 4,
      "text-anchor": "end",
      "font-size": 11,
      fill: "#8b857b"
    });

  label.textContent =
    value + "%";

  damageLineChart.appendChild(label);

});


// -----------------------------
// AREA + LINE
// -----------------------------

const linePath =
  damageData
    .map((item, index) =>
      `${index === 0 ? "M" : "L"} ${damageX(index)} ${damageY(item.damage)}`
    )
    .join(" ");


const areaPath =
  linePath +
  ` L ${damageX(damageData.length - 1)} ${chartTop + plotHeight}` +
  ` L ${damageX(0)} ${chartTop + plotHeight} Z`;


damageLineChart.appendChild(
  createSvgElement("path", {
    d: areaPath,
    fill: "#9a3b2e",
    opacity: 0.07
  })
);


damageLineChart.appendChild(
  createSvgElement("path", {
    d: linePath,
    fill: "none",
    stroke: "#9a3b2e",
    "stroke-width": 3,
    "stroke-linejoin": "round",
    "stroke-linecap": "round"
  })
);


// -----------------------------
// POINTS
// -----------------------------

damageData.forEach((item, index) => {

  damageLineChart.appendChild(
    createSvgElement("circle", {
      cx: damageX(index),
      cy: damageY(item.damage),
      r: 3,
      fill: "#9a3b2e"
    })
  );

});


// -----------------------------
// X-AXIS LABELS
// -----------------------------

const damageChartLabels = [
  0,
  3,
  7,
  9,
  13,
  17
];

damageChartLabels.forEach(index => {

  const label =
    createSvgElement("text", {
      x: damageX(index),
      y: chartHeight - 12,
      "text-anchor": "middle",
      "font-size": 11,
      fill: "#6f685f"
    });

  label.textContent =
    damageData[index].date;

  damageLineChart.appendChild(label);

});


// -----------------------------
// ACTIVE SLIDER POINT
// -----------------------------

const activeDamageDot =
  createSvgElement("circle", {
    r: 7,
    fill: "#faf8f3",
    stroke: "#9a3b2e",
    "stroke-width": 3
  });

damageLineChart.appendChild(activeDamageDot);


const activeDamageText =
  createSvgElement("text", {
    "text-anchor": "middle",
    "font-size": 12,
    "font-weight": 600,
    fill: "#9a3b2e"
  });

damageLineChart.appendChild(activeDamageText);


function updateDamageChart(index) {

  const item =
    damageData[index];

  const x =
    damageX(index);

  const y =
    damageY(item.damage);


  activeDamageDot.setAttribute(
    "cx",
    x
  );

  activeDamageDot.setAttribute(
    "cy",
    y
  );


  activeDamageText.setAttribute(
    "x",
    x
  );

  activeDamageText.setAttribute(
    "y",
    Math.max(y - 14, 14)
  );

  activeDamageText.textContent =
    item.damage.toFixed(1) + "%";

}


damageSlider.addEventListener(
  "input",
  function () {

    updateDamageChart(
      Number(this.value)
    );

  }
);


updateDamageChart(
  Number(damageSlider.value)
);