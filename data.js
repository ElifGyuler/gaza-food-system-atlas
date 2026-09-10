const ipcData = [
  { date: "Nov 2023", phase3plus: 90 },
  { date: "May 2024", phase3plus: 96 },
  { date: "Sep 2024", phase3plus: 86 },
  { date: "Apr 2025", phase3plus: 93 },
  { date: "Jul 2025", phase3plus: 100 }
];

const damageData = [
  { date: "Oct 2023", damage: 9.01 },
  { date: "Nov 2023", damage: 21.12 },
  { date: "Dec 2023", damage: 29.92 },

  { date: "Jan 2024", damage: 35.07 },
  { date: "Feb 2024", damage: 36.22 },
  { date: "Mar 2024", damage: 38.93 },
  { date: "Apr 2024", damage: 40.80 },
  { date: "May 2024", damage: 47.04 },
  { date: "Jun 2024", damage: 52.54 },
  { date: "Jul 2024", damage: 64.87 },
  { date: "Aug 2024", damage: 67.65 },
  { date: "Sep 2024", damage: 68.38 },
  { date: "Oct 2024", damage: 68.38 },
  { date: "Dec 2024", damage: 75.02 },

  { date: "Feb 2025", damage: 79.64 },
  { date: "Mar 2025", damage: 80.78 },
  { date: "Apr 2025", damage: 83.29 },
  { date: "Jul 2025", damage: 86.11 }
];

const interactionData = [
  {
    date: "Nov 2023",
    ipc: 90,
    damage: 21.12
  },
  {
    date: "May 2024",
    ipc: 96,
    damage: 47.04
  },
  {
    date: "Sep 2024",
    ipc: 86,
    damage: 68.38
  },
  {
    date: "Apr 2025",
    ipc: 93,
    damage: 83.29
  },
  {
    date: "Jul 2025",
    ipc: 100,
    damage: 86.11
  }
];

const priorityData = [

  {
    governorate: "Gaza",
    destruction: 99.7,
    sites: 303,
    rehabFocus: false
  },

  {
    governorate: "North Gaza",
    destruction: 86.0,
    sites: 471,
    rehabFocus: false
  },

  {
    governorate: "Rafah",
    destruction: 51.1,
    sites: 3099,
    rehabFocus: false
  },

  {
    governorate: "Deir al-Balah",
    destruction: 46.5,
    sites: 1487,
    rehabFocus: true
  },

  {
    governorate: "Khan Yunis",
    destruction: 45.4,
    sites: 3512,
    rehabFocus: true
  }

];

const earlyDamagePoints = [
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.577074569,
    "lng": 34.514538892
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.563984824,
    "lng": 34.527027526
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.574308145,
    "lng": 34.502058801
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.552652093,
    "lng": 34.526403322
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551566889,
    "lng": 34.530300325
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.552853019,
    "lng": 34.534728414
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.546657107,
    "lng": 34.52972026
  },
  {
    "damage": "Severe Damage",
    "lat": 31.545216545,
    "lng": 34.534786791
  },
  {
    "damage": "Severe Damage",
    "lat": 31.545387395,
    "lng": 34.534513417
  },
  {
    "damage": "Severe Damage",
    "lat": 31.545534946,
    "lng": 34.534217261
  },
  {
    "damage": "Destroyed",
    "lat": 31.544870962,
    "lng": 34.524735741
  },
  {
    "damage": "Destroyed",
    "lat": 31.544940855,
    "lng": 34.525460182
  },
  {
    "damage": "Destroyed",
    "lat": 31.545228194,
    "lng": 34.524389467
  },
  {
    "damage": "Destroyed",
    "lat": 31.546233872,
    "lng": 34.526776933
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542218862,
    "lng": 34.545175001
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541395647,
    "lng": 34.545799205
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.543372127,
    "lng": 34.557303693
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.544245803,
    "lng": 34.558096478
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.535116453,
    "lng": 34.557772985
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540212384,
    "lng": 34.542140301
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.530568919,
    "lng": 34.545958673
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.530922322,
    "lng": 34.545753643
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.531240772,
    "lng": 34.542596174
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.532456309,
    "lng": 34.540422851
  },
  {
    "damage": "Severe Damage",
    "lat": 31.53817237,
    "lng": 34.528800755
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.539767185,
    "lng": 34.517165115
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537859329,
    "lng": 34.515222932
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537169898,
    "lng": 34.514005563
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.536879789,
    "lng": 34.514458072
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.536750093,
    "lng": 34.515739513
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.531650848,
    "lng": 34.513100546
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.531449466,
    "lng": 34.512852267
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541391733,
    "lng": 34.485966044
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540159673,
    "lng": 34.467649454
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.53995831,
    "lng": 34.465987586
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.53936787,
    "lng": 34.465775347
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.519884206,
    "lng": 34.495104442
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.519600844,
    "lng": 34.494977346
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.518928827,
    "lng": 34.498323936
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527438811,
    "lng": 34.500486366
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527431985,
    "lng": 34.499841642
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527681162,
    "lng": 34.499665444
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527776737,
    "lng": 34.499317052
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524025353,
    "lng": 34.503485738
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524052661,
    "lng": 34.50427062
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.523881985,
    "lng": 34.50455494
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522834026,
    "lng": 34.508275122
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522854508,
    "lng": 34.50346972
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.521502726,
    "lng": 34.503818112
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527578761,
    "lng": 34.516071886
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522547286,
    "lng": 34.516264102
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522735033,
    "lng": 34.516336183
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.517286819,
    "lng": 34.525298258
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527012136,
    "lng": 34.545492959
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527274968,
    "lng": 34.545769269
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527978126,
    "lng": 34.550638743
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527435398,
    "lng": 34.546850485
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526715169,
    "lng": 34.551591815
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526370412,
    "lng": 34.547302993
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526063203,
    "lng": 34.546986638
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524308674,
    "lng": 34.546842476
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.525250799,
    "lng": 34.546594197
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.512502515,
    "lng": 34.513678446
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.512305146,
    "lng": 34.513741016
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.515788376,
    "lng": 34.499362353
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.515660358,
    "lng": 34.504017586
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.515505669,
    "lng": 34.503811104
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513894753,
    "lng": 34.4958459
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513894753,
    "lng": 34.496346463
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513030607,
    "lng": 34.495683217
  },
  {
    "damage": "Destroyed",
    "lat": 31.545541604,
    "lng": 34.535402
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.545444662,
    "lng": 34.534557418
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.545587484,
    "lng": 34.534313713
  },
  {
    "damage": "Severe Damage",
    "lat": 31.545298604,
    "lng": 34.534782918
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.543730842,
    "lng": 34.538511462
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.558597484,
    "lng": 34.529565823
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.551649709,
    "lng": 34.508332533
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.545725144,
    "lng": 34.526155459
  },
  {
    "damage": "Destroyed",
    "lat": 31.545230222,
    "lng": 34.524408659
  },
  {
    "damage": "Destroyed",
    "lat": 31.54489565,
    "lng": 34.524732938
  },
  {
    "damage": "Destroyed",
    "lat": 31.526321274,
    "lng": 34.548304822
  },
  {
    "damage": "Destroyed",
    "lat": 31.544928542,
    "lng": 34.525419713
  },
  {
    "damage": "Destroyed",
    "lat": 31.546215405,
    "lng": 34.526742467
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.546621935,
    "lng": 34.529775134
  },
  {
    "damage": "Destroyed",
    "lat": 31.560822505,
    "lng": 34.487406916
  },
  {
    "damage": "Severe Damage",
    "lat": 31.561043308,
    "lng": 34.487177285
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.561239974,
    "lng": 34.487317818
  },
  {
    "damage": "Severe Damage",
    "lat": 31.562279992,
    "lng": 34.487813726
  },
  {
    "damage": "Severe Damage",
    "lat": 31.562318409,
    "lng": 34.487175038
  },
  {
    "damage": "Severe Damage",
    "lat": 31.562630588,
    "lng": 34.487329564
  },
  {
    "damage": "Destroyed",
    "lat": 31.56123722,
    "lng": 34.487604176
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562695543,
    "lng": 34.486717831
  },
  {
    "damage": "Destroyed",
    "lat": 31.562920954,
    "lng": 34.488470443
  },
  {
    "damage": "Severe Damage",
    "lat": 31.563173965,
    "lng": 34.487852045
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562909609,
    "lng": 34.487493216
  },
  {
    "damage": "Severe Damage",
    "lat": 31.563016617,
    "lng": 34.486995534
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563922419,
    "lng": 34.486194488
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.564446967,
    "lng": 34.487093021
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563686527,
    "lng": 34.486762505
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563889281,
    "lng": 34.487267519
  },
  {
    "damage": "Severe Damage",
    "lat": 31.563736905,
    "lng": 34.487581136
  },
  {
    "damage": "Severe Damage",
    "lat": 31.564118066,
    "lng": 34.487842911
  },
  {
    "damage": "Severe Damage",
    "lat": 31.563598902,
    "lng": 34.487902217
  },
  {
    "damage": "Severe Damage",
    "lat": 31.563976521,
    "lng": 34.488113275
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.564130108,
    "lng": 34.486808143
  },
  {
    "damage": "Destroyed",
    "lat": 31.564211196,
    "lng": 34.487472866
  },
  {
    "damage": "Destroyed",
    "lat": 31.564214336,
    "lng": 34.488445151
  },
  {
    "damage": "Destroyed",
    "lat": 31.564142727,
    "lng": 34.48874075
  },
  {
    "damage": "Severe Damage",
    "lat": 31.564039886,
    "lng": 34.489057565
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563139628,
    "lng": 34.490090269
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563115347,
    "lng": 34.490401091
  },
  {
    "damage": "Severe Damage",
    "lat": 31.55828977,
    "lng": 34.478506273
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.558498138,
    "lng": 34.478707373
  },
  {
    "damage": "Severe Damage",
    "lat": 31.557963236,
    "lng": 34.479055959
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.557655731,
    "lng": 34.480623753
  },
  {
    "damage": "Destroyed",
    "lat": 31.560336391,
    "lng": 34.479171575
  },
  {
    "damage": "Severe Damage",
    "lat": 31.558023058,
    "lng": 34.484962465
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.55786222,
    "lng": 34.500665613
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.557984318,
    "lng": 34.50102445
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.557131618,
    "lng": 34.475766213
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.554642137,
    "lng": 34.486712859
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562090335,
    "lng": 34.483350768
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562328189,
    "lng": 34.482875243
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.5638781,
    "lng": 34.484035885
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.563429004,
    "lng": 34.484003413
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.564229244,
    "lng": 34.483901968
  },
  {
    "damage": "Severe Damage",
    "lat": 31.564132199,
    "lng": 34.485713654
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.564459386,
    "lng": 34.485399308
  },
  {
    "damage": "Severe Damage",
    "lat": 31.564221415,
    "lng": 34.485136865
  },
  {
    "damage": "Severe Damage",
    "lat": 31.5648629,
    "lng": 34.485243401
  },
  {
    "damage": "Severe Damage",
    "lat": 31.565975063,
    "lng": 34.482775725
  },
  {
    "damage": "Severe Damage",
    "lat": 31.565204222,
    "lng": 34.485581028
  },
  {
    "damage": "Destroyed",
    "lat": 31.565133247,
    "lng": 34.482785126
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562396053,
    "lng": 34.491441887
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.562153423,
    "lng": 34.491212055
  },
  {
    "damage": "Destroyed",
    "lat": 31.564354615,
    "lng": 34.472648092
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.554062411,
    "lng": 34.462502521
  },
  {
    "damage": "Severe Damage",
    "lat": 31.532187189,
    "lng": 34.491675274
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.574564951,
    "lng": 34.501944943
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.577927847,
    "lng": 34.501879201
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.574232821,
    "lng": 34.50182575
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.572019421,
    "lng": 34.494732383
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.574176464,
    "lng": 34.502570476
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.571185195,
    "lng": 34.520752189
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.563951046,
    "lng": 34.534873707
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555513794,
    "lng": 34.540722857
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.544108644,
    "lng": 34.558209957
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.580031358,
    "lng": 34.497474291
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.573419441,
    "lng": 34.517883776
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56540295,
    "lng": 34.480068216
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565308704,
    "lng": 34.480014639
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565171752,
    "lng": 34.479827981
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56339826,
    "lng": 34.475240057
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.563366046,
    "lng": 34.474961906
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559290908,
    "lng": 34.472931135
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559320822,
    "lng": 34.47339562
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.560153812,
    "lng": 34.47197516
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.560662346,
    "lng": 34.472609776
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.560577207,
    "lng": 34.472793409
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56051738,
    "lng": 34.471443162
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56132965,
    "lng": 34.473911414
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562654319,
    "lng": 34.473343635
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558886347,
    "lng": 34.471077752
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558444103,
    "lng": 34.470229628
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558253542,
    "lng": 34.468790771
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55823916,
    "lng": 34.468584014
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558052195,
    "lng": 34.468676844
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.557850847,
    "lng": 34.46852916
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.561101352,
    "lng": 34.476290971
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559120627,
    "lng": 34.474024835
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559113724,
    "lng": 34.473160677
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.560643938,
    "lng": 34.475434493
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.561428594,
    "lng": 34.476722628
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.561909509,
    "lng": 34.476533594
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558882751,
    "lng": 34.478643355
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.561055826,
    "lng": 34.477829831
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562252991,
    "lng": 34.485402502
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.561820426,
    "lng": 34.485481618
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562434141,
    "lng": 34.490835411
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562496269,
    "lng": 34.489801121
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56249857,
    "lng": 34.489477062
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562450248,
    "lng": 34.489620188
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559820489,
    "lng": 34.495239263
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558326126,
    "lng": 34.505043058
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558303655,
    "lng": 34.504713408
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55632936,
    "lng": 34.476892759
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.557394216,
    "lng": 34.478499891
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.557523655,
    "lng": 34.477900719
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558506233,
    "lng": 34.474235473
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558480921,
    "lng": 34.474078845
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55889512,
    "lng": 34.471075895
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556195892,
    "lng": 34.473382117
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556340866,
    "lng": 34.473282199
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556550271,
    "lng": 34.47230462
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556136062,
    "lng": 34.47192385
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555933559,
    "lng": 34.47258007
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555351361,
    "lng": 34.473093164
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556000293,
    "lng": 34.472039971
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555222495,
    "lng": 34.473152575
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556039413,
    "lng": 34.473916815
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556824108,
    "lng": 34.470489888
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556669931,
    "lng": 34.470303554
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556021004,
    "lng": 34.469974093
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555579178,
    "lng": 34.470470984
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555947366,
    "lng": 34.470319757
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555238603,
    "lng": 34.470689724
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55519488,
    "lng": 34.470549299
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555123543,
    "lng": 34.469382685
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555121242,
    "lng": 34.469266564
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55525241,
    "lng": 34.469236859
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.555521649,
    "lng": 34.469064027
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.554916436,
    "lng": 34.469704044
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556034811,
    "lng": 34.468286285
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556402997,
    "lng": 34.468213371
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556310951,
    "lng": 34.468326792
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55625112,
    "lng": 34.468526629
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556129159,
    "lng": 34.468586039
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556375383,
    "lng": 34.468664354
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.556699846,
    "lng": 34.468486121
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55787242,
    "lng": 34.468997527
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551733827,
    "lng": 34.465097001
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.553870536,
    "lng": 34.470588287
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.554845099,
    "lng": 34.477324839
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.554297412,
    "lng": 34.482367261
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.554477418,
    "lng": 34.482477681
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.552984178,
    "lng": 34.49744202
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55212198,
    "lng": 34.495348552
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551672335,
    "lng": 34.497346583
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.552343804,
    "lng": 34.505535695
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551612382,
    "lng": 34.502981874
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551912146,
    "lng": 34.508223187
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551726292,
    "lng": 34.5100383
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551219609,
    "lng": 34.543873435
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550128781,
    "lng": 34.549240053
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550922112,
    "lng": 34.489509046
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550140447,
    "lng": 34.482917141
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550968778,
    "lng": 34.484683197
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550280447,
    "lng": 34.483670111
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550099614,
    "lng": 34.483232019
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54909044,
    "lng": 34.482595418
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550599093,
    "lng": 34.470238592
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.551074871,
    "lng": 34.466015974
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.550659249,
    "lng": 34.466092982
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54692768,
    "lng": 34.465933499
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.547249866,
    "lng": 34.483557302
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.545787702,
    "lng": 34.528011641
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.544091888,
    "lng": 34.526547534
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54406353,
    "lng": 34.526421088
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.545250685,
    "lng": 34.535277844
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.545339891,
    "lng": 34.535241208
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54531759,
    "lng": 34.535105131
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.546105309,
    "lng": 34.532523753
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.546093966,
    "lng": 34.532776644
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.546831265,
    "lng": 34.536210641
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.543553078,
    "lng": 34.544902113
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541902598,
    "lng": 34.542952188
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541811849,
    "lng": 34.542772503
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541201642,
    "lng": 34.545741925
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540913566,
    "lng": 34.545619259
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54101811,
    "lng": 34.545788265
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540918212,
    "lng": 34.545946367
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541064574,
    "lng": 34.546085388
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541025079,
    "lng": 34.546172617
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54061852,
    "lng": 34.546622391
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540662661,
    "lng": 34.546330719
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540774174,
    "lng": 34.54627075
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540544177,
    "lng": 34.546794123
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540469835,
    "lng": 34.54636343
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540349028,
    "lng": 34.546041774
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540397815,
    "lng": 34.546175343
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54036529,
    "lng": 34.545919108
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.54024216,
    "lng": 34.545581097
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540439633,
    "lng": 34.545136775
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540381553,
    "lng": 34.546439755
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542157828,
    "lng": 34.521735945
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542237233,
    "lng": 34.521416504
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541772146,
    "lng": 34.519047312
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540881667,
    "lng": 34.522388138
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.543445315,
    "lng": 34.520784276
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542359177,
    "lng": 34.510244368
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542247514,
    "lng": 34.464705229
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541971014,
    "lng": 34.464543013
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541487137,
    "lng": 34.464212341
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.539907236,
    "lng": 34.468690013
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537020465,
    "lng": 34.475005972
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537115473,
    "lng": 34.518628045
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537342356,
    "lng": 34.520504764
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.539758631,
    "lng": 34.54320508
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.533127906,
    "lng": 34.540875818
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.534043625,
    "lng": 34.543531219
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.535487568,
    "lng": 34.533169291
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.535385468,
    "lng": 34.533096085
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.535521601,
    "lng": 34.532923055
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.536071802,
    "lng": 34.532829884
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.536198755,
    "lng": 34.53595474
  },
  {
    "damage": "Destroyed",
    "lat": 31.530156552,
    "lng": 34.52544759
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526380849,
    "lng": 34.553502566
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526510968,
    "lng": 34.552755669
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526912942,
    "lng": 34.552417657
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.52704306,
    "lng": 34.552341332
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527342796,
    "lng": 34.552363139
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527449679,
    "lng": 34.552553952
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527644855,
    "lng": 34.552676618
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527665767,
    "lng": 34.552033305
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527505443,
    "lng": 34.551940624
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527417149,
    "lng": 34.552979193
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526399437,
    "lng": 34.552973741
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526297201,
    "lng": 34.553183635
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526206582,
    "lng": 34.553077325
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526359937,
    "lng": 34.552870157
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.527302234,
    "lng": 34.497345252
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526542091,
    "lng": 34.499634583
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526411618,
    "lng": 34.4763819
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.526689582,
    "lng": 34.476894337
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522945507,
    "lng": 34.475749671
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.52473247,
    "lng": 34.486504204
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524545266,
    "lng": 34.494543483
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.520839001,
    "lng": 34.544477107
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.520701903,
    "lng": 34.544343537
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.521016188,
    "lng": 34.478088755
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.520919747,
    "lng": 34.478055758
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.520895637,
    "lng": 34.477004557
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.516739088,
    "lng": 34.500439842
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.515059766,
    "lng": 34.499375036
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.515320744,
    "lng": 34.499308486
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513381096,
    "lng": 34.501417067
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513660687,
    "lng": 34.495173049
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.513537231,
    "lng": 34.497123772
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.51688083,
    "lng": 34.498156505
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.514696303,
    "lng": 34.4992122
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.514580569,
    "lng": 34.497677118
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.514786856,
    "lng": 34.497786692
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.514782963,
    "lng": 34.497704511
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.516507188,
    "lng": 34.494047473
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.518457118,
    "lng": 34.484669751
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.518729561,
    "lng": 34.498334563
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524080943,
    "lng": 34.547063107
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.522325717,
    "lng": 34.544596826
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524544066,
    "lng": 34.533667665
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.520352521,
    "lng": 34.500411906
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524711412,
    "lng": 34.512647688
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.523419334,
    "lng": 34.508095794
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.524069267,
    "lng": 34.505009455
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.529084252,
    "lng": 34.544485698
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.529351674,
    "lng": 34.547104929
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.53213119,
    "lng": 34.554900824
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.534862004,
    "lng": 34.537840173
  },
  {
    "damage": "Destroyed",
    "lat": 31.535895154,
    "lng": 34.533637995
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.533221094,
    "lng": 34.513482754
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.537349649,
    "lng": 34.533937472
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.541283559,
    "lng": 34.52881785
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.540878426,
    "lng": 34.516943371
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542786585,
    "lng": 34.518583361
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.542551612,
    "lng": 34.518326667
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.543422629,
    "lng": 34.470277333
  },
  {
    "damage": "Moderate Damage",
    "lat": 31.547270827,
    "lng": 34.545570197
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.548494734,
    "lng": 34.509674933
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.55035916,
    "lng": 34.46637065
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.557054012,
    "lng": 34.484709761
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.562459868,
    "lng": 34.485725369
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.558769585,
    "lng": 34.494270795
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559116509,
    "lng": 34.494874791
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.559284251,
    "lng": 34.494865843
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565818355,
    "lng": 34.515773056
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565204611,
    "lng": 34.482687492
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565292289,
    "lng": 34.482709863
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.565170303,
    "lng": 34.482835136
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.56295164,
    "lng": 34.475918262
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.573174111,
    "lng": 34.506081408
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.587967333,
    "lng": 34.49393122
  },
  {
    "damage": "Impact Crater (Field)",
    "lat": 31.5878661,
    "lng": 34.495747093
  }
];

const greenhousePoints = [
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252026359,
    "lat": 31.296884589
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252338188,
    "lat": 31.29703582
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252069601,
    "lat": 31.297355078
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264344171,
    "lat": 31.301641608
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268741018,
    "lat": 31.302869223
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286465929,
    "lat": 31.265156128
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266136739,
    "lat": 31.245237789
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.297939912,
    "lat": 31.284948664
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.287775523,
    "lat": 31.287213192
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283316091,
    "lat": 31.29329214
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.299339572,
    "lat": 31.276352637
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.299223447,
    "lat": 31.276643026
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297738487,
    "lat": 31.273997234
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290039635,
    "lat": 31.272887023
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286412864,
    "lat": 31.292809117
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.264631935,
    "lat": 31.30889474
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293636717,
    "lat": 31.285987449
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26915574,
    "lat": 31.300191294
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269607093,
    "lat": 31.300372072
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270109305,
    "lat": 31.30069789
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269141635,
    "lat": 31.300781837
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264241168,
    "lat": 31.247927101
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26515442,
    "lat": 31.307584472
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266176662,
    "lat": 31.308000372
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267121217,
    "lat": 31.307577325
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26647414,
    "lat": 31.304747056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250588825,
    "lat": 31.30729334
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250513103,
    "lat": 31.307736969
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250696998,
    "lat": 31.305098272
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251059381,
    "lat": 31.299450934
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251383902,
    "lat": 31.299122805
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252238474,
    "lat": 31.30172932
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263986143,
    "lat": 31.301447413
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266003492,
    "lat": 31.306521675
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264880455,
    "lat": 31.308428515
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266948268,
    "lat": 31.307730969
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276613515,
    "lat": 31.307395902
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268306608,
    "lat": 31.305089996
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269215733,
    "lat": 31.304194424
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254006607,
    "lat": 31.305245349
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25141471,
    "lat": 31.30438024
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242287808,
    "lat": 31.302555566
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250723062,
    "lat": 31.299801733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252929918,
    "lat": 31.301145151
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257250936,
    "lat": 31.299405711
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.273237274,
    "lat": 31.299951003
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285930415,
    "lat": 31.298149054
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278249939,
    "lat": 31.296612183
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278417504,
    "lat": 31.296791921
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278242809,
    "lat": 31.297230604
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277700899,
    "lat": 31.296861989
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277362206,
    "lat": 31.296697482
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277558291,
    "lat": 31.296292308
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277248119,
    "lat": 31.296124754
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276952208,
    "lat": 31.295887131
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273312143,
    "lat": 31.29801048
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252427225,
    "lat": 31.298601476
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246922563,
    "lat": 31.298820813
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249457417,
    "lat": 31.296389794
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249029594,
    "lat": 31.296365422
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266566792,
    "lat": 31.294927496
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290606909,
    "lat": 31.293050847
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.289925956,
    "lat": 31.292840636
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289159439,
    "lat": 31.292462864
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295804964,
    "lat": 31.279599424
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269162255,
    "lat": 31.268833856
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269479558,
    "lat": 31.2690106
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306678812,
    "lat": 31.2582103
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.294033062,
    "lat": 31.257731815
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271269286,
    "lat": 31.258996593
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261710996,
    "lat": 31.254175107
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268264069,
    "lat": 31.234724411
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265920117,
    "lat": 31.235711392
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265467189,
    "lat": 31.235505568
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265113042,
    "lat": 31.23752756
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264405341,
    "lat": 31.237696819
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26502396,
    "lat": 31.23798879
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262762288,
    "lat": 31.238792764
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269613225,
    "lat": 31.24061852
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269888783,
    "lat": 31.242808298
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268310066,
    "lat": 31.241991665
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261233061,
    "lat": 31.242499417
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260683727,
    "lat": 31.243409133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260144291,
    "lat": 31.243612231
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2603373,
    "lat": 31.243273734
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260015618,
    "lat": 31.24431884
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260446177,
    "lat": 31.244526167
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262499993,
    "lat": 31.24414113
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261797242,
    "lat": 31.24442885
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266325536,
    "lat": 31.24340067
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.284836158,
    "lat": 31.249386379
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263704568,
    "lat": 31.248925645
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.300905126,
    "lat": 31.254237058
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264827571,
    "lat": 31.255321579
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.290091738,
    "lat": 31.258703004
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291497613,
    "lat": 31.256779411
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.297682634,
    "lat": 31.25885945
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307078708,
    "lat": 31.258365222
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307415619,
    "lat": 31.258418556
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307985456,
    "lat": 31.258553669
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308442989,
    "lat": 31.258663892
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308538656,
    "lat": 31.261238104
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308796538,
    "lat": 31.261284326
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308339005,
    "lat": 31.261202549
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30135538,
    "lat": 31.262347412
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27865756,
    "lat": 31.262045198
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260888624,
    "lat": 31.265017518
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266250084,
    "lat": 31.266265438
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.28732574,
    "lat": 31.263581145
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.28629421,
    "lat": 31.264103788
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.287612738,
    "lat": 31.265853022
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301384496,
    "lat": 31.264612207
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304183596,
    "lat": 31.2637903
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.30348499,
    "lat": 31.264039791
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303917567,
    "lat": 31.26416423
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.304283594,
    "lat": 31.264331333
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.304553955,
    "lat": 31.264398885
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303564019,
    "lat": 31.266318767
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306741797,
    "lat": 31.264299334
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306371611,
    "lat": 31.264167785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306600377,
    "lat": 31.2645411
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.320734002,
    "lat": 31.266916056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.313467539,
    "lat": 31.267904418
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308584409,
    "lat": 31.268558581
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306617015,
    "lat": 31.268508808
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308151832,
    "lat": 31.26933006
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308501221,
    "lat": 31.269461602
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304358463,
    "lat": 31.266745402
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30458723,
    "lat": 31.268594133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30472449,
    "lat": 31.266852061
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304113059,
    "lat": 31.266606746
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301255555,
    "lat": 31.26697294
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294604682,
    "lat": 31.267808427
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294733623,
    "lat": 31.267104486
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294384234,
    "lat": 31.266805842
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292054972,
    "lat": 31.266951609
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.29138531,
    "lat": 31.266702739
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294101395,
    "lat": 31.268775449
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.27095852,
    "lat": 31.268992316
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285312593,
    "lat": 31.270649025
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290574228,
    "lat": 31.272586556
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290241476,
    "lat": 31.272504789
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293302791,
    "lat": 31.270730793
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.301979289,
    "lat": 31.271146743
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307257562,
    "lat": 31.270688132
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306816666,
    "lat": 31.270588588
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.315152094,
    "lat": 31.272017744
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.31373374,
    "lat": 31.271626683
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309794793,
    "lat": 31.270304176
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.314120564,
    "lat": 31.270826782
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.314432519,
    "lat": 31.270929881
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.314744473,
    "lat": 31.271000983
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.31538918,
    "lat": 31.271253397
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.315060587,
    "lat": 31.271182295
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.316017248,
    "lat": 31.271491589
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.316270971,
    "lat": 31.271612463
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.316578767,
    "lat": 31.271712006
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.316857446,
    "lat": 31.271822214
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.317181879,
    "lat": 31.271935977
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.318105265,
    "lat": 31.272291485
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.318716696,
    "lat": 31.27251901
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.30097759,
    "lat": 31.27557718
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301149409,
    "lat": 31.273874328
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.300893508,
    "lat": 31.275336595
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294773836,
    "lat": 31.274658581
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295018769,
    "lat": 31.275021022
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294492345,
    "lat": 31.274955408
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.281905707,
    "lat": 31.275858381
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274356648,
    "lat": 31.274183656
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286808025,
    "lat": 31.278951547
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.286603305,
    "lat": 31.279588914
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.287078548,
    "lat": 31.27967952
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296539548,
    "lat": 31.277064416
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296053337,
    "lat": 31.27687695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295727978,
    "lat": 31.276711355
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295307571,
    "lat": 31.276427032
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295698732,
    "lat": 31.276455152
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296258057,
    "lat": 31.276692609
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296670736,
    "lat": 31.276875196
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296071616,
    "lat": 31.279195247
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296320205,
    "lat": 31.278801578
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296579761,
    "lat": 31.278492265
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296561482,
    "lat": 31.277967369
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296773514,
    "lat": 31.278104842
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.300056349,
    "lat": 31.276901946
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.300473101,
    "lat": 31.276995678
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301072639,
    "lat": 31.277151899
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301551538,
    "lat": 31.277217512
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.302282681,
    "lat": 31.277423723
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.309974313,
    "lat": 31.277208139
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.310698145,
    "lat": 31.277708044
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.310146132,
    "lat": 31.277692422
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.3099341,
    "lat": 31.277458092
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309491758,
    "lat": 31.277217512
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.310654277,
    "lat": 31.277217512
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.31059213,
    "lat": 31.277483087
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311495092,
    "lat": 31.277654929
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.315401658,
    "lat": 31.279973693
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.314977399,
    "lat": 31.281392042
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.314969081,
    "lat": 31.2818115
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.312523356,
    "lat": 31.282515331
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.312282111,
    "lat": 31.281349385
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290686531,
    "lat": 31.280005686
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291510092,
    "lat": 31.281520012
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280117508,
    "lat": 31.281253407
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.279847147,
    "lat": 31.279792398
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275184299,
    "lat": 31.2824613
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27578059,
    "lat": 31.281480768
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275961607,
    "lat": 31.281633195
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276062763,
    "lat": 31.281257815
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265838824,
    "lat": 31.285165691
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268536744,
    "lat": 31.28560932
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277449386,
    "lat": 31.28531565
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298926732,
    "lat": 31.283200579
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298495357,
    "lat": 31.283066237
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307905176,
    "lat": 31.283206827
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30980615,
    "lat": 31.285068842
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311740025,
    "lat": 31.285196933
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.313439934,
    "lat": 31.284740805
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310352173,
    "lat": 31.288764702
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30973721,
    "lat": 31.286744583
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.292854068,
    "lat": 31.286860126
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.29304161,
    "lat": 31.287020395
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270584545,
    "lat": 31.287419203
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250273309,
    "lat": 31.292536469
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250652755,
    "lat": 31.292812264
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278330466,
    "lat": 31.290192177
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279691236,
    "lat": 31.289405764
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277043841,
    "lat": 31.289920101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29065154,
    "lat": 31.292488018
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295545078,
    "lat": 31.292495472
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296535125,
    "lat": 31.291474277
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296043832,
    "lat": 31.293008264
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288384902,
    "lat": 31.294777092
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289174561,
    "lat": 31.294757439
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283424613,
    "lat": 31.292864136
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.280338808,
    "lat": 31.294403676
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278540991,
    "lat": 31.29340134
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271549054,
    "lat": 31.294741061
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268440249,
    "lat": 31.294439707
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.256162193,
    "lat": 31.293840273
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257373516,
    "lat": 31.295343766
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.256848354,
    "lat": 31.295478063
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.257488515,
    "lat": 31.295556677
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253463551,
    "lat": 31.295091547
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253248886,
    "lat": 31.29531101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250657576,
    "lat": 31.29536997
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250400745,
    "lat": 31.295189814
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250151581,
    "lat": 31.294953973
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250071082,
    "lat": 31.295396175
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250304913,
    "lat": 31.295638565
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24984875,
    "lat": 31.295219294
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247004443,
    "lat": 31.294010604
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248752427,
    "lat": 31.295425655
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251408903,
    "lat": 31.29587768
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23997034,
    "lat": 31.298733907
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240338336,
    "lat": 31.298209835
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247387773,
    "lat": 31.298828895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248691094,
    "lat": 31.296978255
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248986258,
    "lat": 31.296601571
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249243089,
    "lat": 31.296097141
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248978592,
    "lat": 31.295808894
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248706427,
    "lat": 31.296142998
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248549262,
    "lat": 31.296044732
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248576095,
    "lat": 31.296401765
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248273265,
    "lat": 31.296735867
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25020908,
    "lat": 31.298786314
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252888556,
    "lat": 31.296536061
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259305498,
    "lat": 31.298943535
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259010334,
    "lat": 31.298763386
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255656198,
    "lat": 31.298848547
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256963353,
    "lat": 31.296388663
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257155018,
    "lat": 31.296044732
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257630347,
    "lat": 31.296077488
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257963844,
    "lat": 31.296329703
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25833184,
    "lat": 31.296382112
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259922659,
    "lat": 31.297194438
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260110491,
    "lat": 31.296391938
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258788003,
    "lat": 31.299064726
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258811003,
    "lat": 31.299536386
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258611671,
    "lat": 31.299392268
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257461681,
    "lat": 31.299703432
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263683125,
    "lat": 31.299074552
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262640468,
    "lat": 31.299215395
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262717134,
    "lat": 31.29820656
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263272962,
    "lat": 31.297806953
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.263046798,
    "lat": 31.297502333
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26392079,
    "lat": 31.298049337
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266013771,
    "lat": 31.298828895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266236102,
    "lat": 31.298566859
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266734431,
    "lat": 31.298203284
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269153242,
    "lat": 31.296863612
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267826921,
    "lat": 31.298543931
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267585423,
    "lat": 31.298072266
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273024874,
    "lat": 31.296254366
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272664544,
    "lat": 31.297250121
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272430713,
    "lat": 31.29747613
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273465703,
    "lat": 31.297561292
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272576378,
    "lat": 31.296955326
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273573036,
    "lat": 31.297630077
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277084337,
    "lat": 31.296467275
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274845691,
    "lat": 31.296048008
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279464816,
    "lat": 31.297528537
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279825146,
    "lat": 31.297171509
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283551112,
    "lat": 31.297269774
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.282155791,
    "lat": 31.298792865
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.283834776,
    "lat": 31.296441071
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.283627778,
    "lat": 31.296712939
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.283313448,
    "lat": 31.297004459
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.283673778,
    "lat": 31.297541639
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265878526,
    "lat": 31.301582284
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.295099624,
    "lat": 31.285644127
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293932227,
    "lat": 31.286155808
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264915097,
    "lat": 31.301858514
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268458791,
    "lat": 31.265224511
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268512466,
    "lat": 31.265568196
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267804364,
    "lat": 31.265987997
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.310040791,
    "lat": 31.274352391
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308814364,
    "lat": 31.25658834
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241489043,
    "lat": 31.328217244
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.241277371,
    "lat": 31.336584702
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.241395506,
    "lat": 31.336711541
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.240993848,
    "lat": 31.336497656
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292416682,
    "lat": 31.294039797
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.228936896,
    "lat": 31.323693147
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.228565298,
    "lat": 31.323619789
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269421999,
    "lat": 31.315766376
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269169446,
    "lat": 31.315586315
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269043169,
    "lat": 31.315322069
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269564645,
    "lat": 31.315322069
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26861757,
    "lat": 31.315354808
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276259464,
    "lat": 31.311409142
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27654592,
    "lat": 31.311885028
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275815921,
    "lat": 31.311903509
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275238389,
    "lat": 31.312411736
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274753263,
    "lat": 31.31284604
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274402125,
    "lat": 31.312712052
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.274965795,
    "lat": 31.312194585
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274268137,
    "lat": 31.312277749
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.273995543,
    "lat": 31.312568825
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27394934,
    "lat": 31.311912749
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267578494,
    "lat": 31.303017713
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267163287,
    "lat": 31.303012619
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267196402,
    "lat": 31.303420184
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266951863,
    "lat": 31.303488961
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266788837,
    "lat": 31.303422731
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265608146,
    "lat": 31.301869563
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26596302,
    "lat": 31.301251068
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265746716,
    "lat": 31.300869157
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265604766,
    "lat": 31.301156435
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265435779,
    "lat": 31.301463993
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265381703,
    "lat": 31.301720854
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265530412,
    "lat": 31.302089247
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251726254,
    "lat": 31.331749353
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.300297088,
    "lat": 31.29261032
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305413662,
    "lat": 31.268110548
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.294649626,
    "lat": 31.284885864
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295799875,
    "lat": 31.259760797
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.289843668,
    "lat": 31.279620959
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262089234,
    "lat": 31.306637461
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242093037,
    "lat": 31.319545661
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.282657575,
    "lat": 31.261584032
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2839234,
    "lat": 31.247298902
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249104573,
    "lat": 31.292820742
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248721592,
    "lat": 31.292678189
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248525847,
    "lat": 31.292520741
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248300314,
    "lat": 31.292367549
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276775224,
    "lat": 31.282710799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27707871,
    "lat": 31.282356406
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273907832,
    "lat": 31.258494658
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269142084,
    "lat": 31.260075103
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269959176,
    "lat": 31.264060873
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244437765,
    "lat": 31.302793702
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24433947,
    "lat": 31.303086581
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2439162,
    "lat": 31.303178858
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24415291,
    "lat": 31.303351375
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246207264,
    "lat": 31.302778573
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263962031,
    "lat": 31.247787941
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269950215,
    "lat": 31.247173442
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263079793,
    "lat": 31.236709841
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264869322,
    "lat": 31.245782247
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267683942,
    "lat": 31.244441241
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.287091986,
    "lat": 31.281377214
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.288289613,
    "lat": 31.27998205
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292093088,
    "lat": 31.277639274
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304558752,
    "lat": 31.28603741
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.304030631,
    "lat": 31.286210446
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306172096,
    "lat": 31.262359842
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268106079,
    "lat": 31.266028055
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.274734645,
    "lat": 31.287277026
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297831463,
    "lat": 31.265939313
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297330165,
    "lat": 31.265744165
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267403842,
    "lat": 31.294189056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266459521,
    "lat": 31.294020624
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26709459,
    "lat": 31.29386876
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267464587,
    "lat": 31.293816298
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267398319,
    "lat": 31.293647866
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267166381,
    "lat": 31.293548464
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270401614,
    "lat": 31.293529766
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258368758,
    "lat": 31.302594592
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.258183605,
    "lat": 31.303099906
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.257632002,
    "lat": 31.303396922
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257466136,
    "lat": 31.302702598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257377417,
    "lat": 31.302490443
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257140835,
    "lat": 31.30236556
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2578403,
    "lat": 31.302521302
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25838033,
    "lat": 31.303724798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257377417,
    "lat": 31.303219484
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257539426,
    "lat": 31.302934039
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241269448,
    "lat": 31.328008222
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241279259,
    "lat": 31.327786486
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241579486,
    "lat": 31.32802392
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241840467,
    "lat": 31.328190712
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262541376,
    "lat": 31.326412619
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305501929,
    "lat": 31.273485357
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.306375896,
    "lat": 31.273414788
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.306381325,
    "lat": 31.273762204
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.306522462,
    "lat": 31.274125905
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307125012,
    "lat": 31.274565603
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.307960981,
    "lat": 31.27467417
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.30736386,
    "lat": 31.273740491
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.30836268,
    "lat": 31.274837022
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.310110616,
    "lat": 31.275070442
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.308661241,
    "lat": 31.274391895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308932659,
    "lat": 31.274663314
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.31500798,
    "lat": 31.277730778
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260492405,
    "lat": 31.3264564
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267679858,
    "lat": 31.293639287
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273457302,
    "lat": 31.258494029
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250508209,
    "lat": 31.299982763
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234415269,
    "lat": 31.329156851
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235431348,
    "lat": 31.322350667
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236472938,
    "lat": 31.301243625
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24023976,
    "lat": 31.29755059
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248295163,
    "lat": 31.29923207
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246267684,
    "lat": 31.337179603
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.246674164,
    "lat": 31.33727944
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264270019,
    "lat": 31.300794735
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265767101,
    "lat": 31.297396439
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248042384,
    "lat": 31.294129823
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246054259,
    "lat": 31.296396312
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288340993,
    "lat": 31.295844134
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248212131,
    "lat": 31.329811612
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243266592,
    "lat": 31.326001126
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243046011,
    "lat": 31.328676006
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266471305,
    "lat": 31.322295858
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278712028,
    "lat": 31.299323364
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279008924,
    "lat": 31.299281743
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263534183,
    "lat": 31.308402818
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259861303,
    "lat": 31.307532675
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249940807,
    "lat": 31.306960636
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256224121,
    "lat": 31.303088802
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245776122,
    "lat": 31.304017199
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239173031,
    "lat": 31.300798666
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274549062,
    "lat": 31.306232989
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276153477,
    "lat": 31.307047181
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2772197,
    "lat": 31.310319394
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27707853,
    "lat": 31.31022001
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.276618899,
    "lat": 31.313044125
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274196187,
    "lat": 31.318261706
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275360369,
    "lat": 31.307533932
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26017619,
    "lat": 31.300554965
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258518887,
    "lat": 31.301881755
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26500235,
    "lat": 31.302565571
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23802707,
    "lat": 31.330093733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238240143,
    "lat": 31.330180899
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238692876,
    "lat": 31.328677856
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238437976,
    "lat": 31.32913101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238161835,
    "lat": 31.329573544
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275581119,
    "lat": 31.304280383
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276789291,
    "lat": 31.298962182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24983997,
    "lat": 31.304445256
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.242739496,
    "lat": 31.332736925
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.242011364,
    "lat": 31.333285901
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.241832424,
    "lat": 31.333010609
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.24234722,
    "lat": 31.3334263
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235084782,
    "lat": 31.32994133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245341288,
    "lat": 31.330532038
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234687822,
    "lat": 31.304722952
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234476719,
    "lat": 31.304637442
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234158729,
    "lat": 31.30454258
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310192913,
    "lat": 31.289574458
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309685787,
    "lat": 31.269016094
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.315664051,
    "lat": 31.272464577
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.310638734,
    "lat": 31.284749499
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305078497,
    "lat": 31.28548066
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303063983,
    "lat": 31.276509761
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249170851,
    "lat": 31.294688583
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252934801,
    "lat": 31.297170298
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.264075552,
    "lat": 31.29718368
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263773355,
    "lat": 31.297108347
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.312399485,
    "lat": 31.264983255
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.302693657,
    "lat": 31.265983685
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289407968,
    "lat": 31.288419674
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254913074,
    "lat": 31.30716651
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256680291,
    "lat": 31.308433727
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256905999,
    "lat": 31.308535471
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267094007,
    "lat": 31.307079834
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269125445,
    "lat": 31.306550115
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26193563,
    "lat": 31.305504003
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286221138,
    "lat": 31.27152541
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.282676023,
    "lat": 31.280207969
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.28162341,
    "lat": 31.280585775
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276274562,
    "lat": 31.292105418
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263840928,
    "lat": 31.287298754
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270787235,
    "lat": 31.283455015
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271537041,
    "lat": 31.267983742
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239607513,
    "lat": 31.299033243
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260814437,
    "lat": 31.243902182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260971342,
    "lat": 31.243577624
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261076662,
    "lat": 31.244112821
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260648452,
    "lat": 31.265324054
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.314505918,
    "lat": 31.274136612
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256543558,
    "lat": 31.304925322
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.281515339,
    "lat": 31.292064389
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270754709,
    "lat": 31.30861737
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270363727,
    "lat": 31.308119849
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271353662,
    "lat": 31.307572574
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269357152,
    "lat": 31.299100062
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269107589,
    "lat": 31.298972115
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268882981,
    "lat": 31.299114278
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266986297,
    "lat": 31.299690035
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266819921,
    "lat": 31.299917493
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26662027,
    "lat": 31.300265788
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257045343,
    "lat": 31.303791312
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248768146,
    "lat": 31.299192467
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248501945,
    "lat": 31.299348846
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248352207,
    "lat": 31.299604738
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249699851,
    "lat": 31.299908164
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252746088,
    "lat": 31.301579434
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253157868,
    "lat": 31.302003245
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253396513,
    "lat": 31.301779345
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2536258,
    "lat": 31.301511465
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253850407,
    "lat": 31.301323548
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254070335,
    "lat": 31.301075657
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253878483,
    "lat": 31.300847757
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25341991,
    "lat": 31.300615859
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253068961,
    "lat": 31.300435937
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253237416,
    "lat": 31.300240021
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253724066,
    "lat": 31.300467923
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254089052,
    "lat": 31.300639848
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254617816,
    "lat": 31.30019604
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254000145,
    "lat": 31.299924157
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253607083,
    "lat": 31.299728241
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253948673,
    "lat": 31.299512332
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254388529,
    "lat": 31.300495911
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253616441,
    "lat": 31.300188044
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253976749,
    "lat": 31.300343977
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25424347,
    "lat": 31.300124071
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253766179,
    "lat": 31.299876178
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253246775,
    "lat": 31.301063663
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253101716,
    "lat": 31.301215596
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252914543,
    "lat": 31.301383521
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25259167,
    "lat": 31.301783343
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252451291,
    "lat": 31.303058764
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252161173,
    "lat": 31.303750442
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25190381,
    "lat": 31.304162248
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252296873,
    "lat": 31.304078288
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252582312,
    "lat": 31.304214224
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252736729,
    "lat": 31.30386239
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252858391,
    "lat": 31.303638495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253429268,
    "lat": 31.303550536
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252563594,
    "lat": 31.303522549
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252343666,
    "lat": 31.303254673
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25203951,
    "lat": 31.303114738
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23508692,
    "lat": 31.303636995
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235335509,
    "lat": 31.303324641
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261483168,
    "lat": 31.296926144
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261151823,
    "lat": 31.296685913
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254648241,
    "lat": 31.298694912
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25430766,
    "lat": 31.298491749
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254892432,
    "lat": 31.298447822
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255104492,
    "lat": 31.29825564
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254153434,
    "lat": 31.297931676
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253401584,
    "lat": 31.296959776
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253279489,
    "lat": 31.296624826
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253542958,
    "lat": 31.296284382
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254050617,
    "lat": 31.29611416
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253838557,
    "lat": 31.296460095
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253607218,
    "lat": 31.296657772
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253857835,
    "lat": 31.296921339
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253697183,
    "lat": 31.29720687
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254147008,
    "lat": 31.29664679
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254410477,
    "lat": 31.29637773
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254555449,
    "lat": 31.298121442
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253786377,
    "lat": 31.29765054
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253720574,
    "lat": 31.297868421
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253095446,
    "lat": 31.297770023
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253255841,
    "lat": 31.297548628
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250959679,
    "lat": 31.292643761
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268167565,
    "lat": 31.285906446
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272543249,
    "lat": 31.285344823
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271212243,
    "lat": 31.287434895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280337956,
    "lat": 31.285821136
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.273899212,
    "lat": 31.294337493
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275115087,
    "lat": 31.298273524
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275221567,
    "lat": 31.29589424
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259833697,
    "lat": 31.305395879
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280562563,
    "lat": 31.298972115
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288189887,
    "lat": 31.293697366
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305993236,
    "lat": 31.288367893
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305386386,
    "lat": 31.288455366
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306051727,
    "lat": 31.288055488
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305020815,
    "lat": 31.288467863
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305167043,
    "lat": 31.288130465
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306526971,
    "lat": 31.288461614
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306972968,
    "lat": 31.288480359
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267880587,
    "lat": 31.290508918
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290949378,
    "lat": 31.281886814
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.314433687,
    "lat": 31.284864419
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.315701134,
    "lat": 31.274438727
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.315443252,
    "lat": 31.274360517
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.315152094,
    "lat": 31.274268087
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.314802705,
    "lat": 31.274168547
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.31414552,
    "lat": 31.273891256
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272268729,
    "lat": 31.266823619
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289239062,
    "lat": 31.270535261
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.290470243,
    "lat": 31.271559136
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290703169,
    "lat": 31.271210735
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291684786,
    "lat": 31.259030117
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263675419,
    "lat": 31.244948985
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269290602,
    "lat": 31.241086975
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26710276,
    "lat": 31.236485073
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240760558,
    "lat": 31.322687162
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241317667,
    "lat": 31.322290569
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241204919,
    "lat": 31.322613509
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23356761,
    "lat": 31.331387446
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24624711,
    "lat": 31.297317643
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254156847,
    "lat": 31.306777939
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254194436,
    "lat": 31.306403249
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254272121,
    "lat": 31.306148459
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254710663,
    "lat": 31.306180575
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254620449,
    "lat": 31.306572395
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254450044,
    "lat": 31.306855018
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248316297,
    "lat": 31.297879825
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248112209,
    "lat": 31.297986499
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268680931,
    "lat": 31.317847609
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268490132,
    "lat": 31.317613118
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244976593,
    "lat": 31.332995133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242201705,
    "lat": 31.326673915
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242112422,
    "lat": 31.326838864
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245326006,
    "lat": 31.332067689
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270775737,
    "lat": 31.31906084
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240585772,
    "lat": 31.320925932
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.24186355,
    "lat": 31.330966519
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239809997,
    "lat": 31.329720978
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240533732,
    "lat": 31.329565665
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236123585,
    "lat": 31.329772749
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234030815,
    "lat": 31.329050998
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236321767,
    "lat": 31.327719119
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257703715,
    "lat": 31.299527564
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24246675,
    "lat": 31.319235043
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.237878652,
    "lat": 31.33457668
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.238904517,
    "lat": 31.333171615
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.239257271,
    "lat": 31.333374536
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239520036,
    "lat": 31.33351904
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239879989,
    "lat": 31.333980222
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240077963,
    "lat": 31.334121651
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.240148603,
    "lat": 31.335647567
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.244181197,
    "lat": 31.333067849
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243499537,
    "lat": 31.334612806
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243273442,
    "lat": 31.334448511
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.233281383,
    "lat": 31.331004023
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236891938,
    "lat": 31.332515487
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237158848,
    "lat": 31.332624376
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237529337,
    "lat": 31.332746876
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237776329,
    "lat": 31.332889792
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238102996,
    "lat": 31.332658404
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237812183,
    "lat": 31.332569932
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237529337,
    "lat": 31.332464446
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237099092,
    "lat": 31.332321529
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237674128,
    "lat": 31.332190182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238072273,
    "lat": 31.332243146
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237274377,
    "lat": 31.331157772
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236939742,
    "lat": 31.330919574
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237863971,
    "lat": 31.331048882
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238071126,
    "lat": 31.331099924
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237421776,
    "lat": 31.330657556
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244970972,
    "lat": 31.33051804
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245879266,
    "lat": 31.330759641
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248552358,
    "lat": 31.331212217
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24911805,
    "lat": 31.331038673
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249699677,
    "lat": 31.33076985
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249512441,
    "lat": 31.330511234
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248122114,
    "lat": 31.330888949
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248460732,
    "lat": 31.330694987
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248751546,
    "lat": 31.330504428
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249046343,
    "lat": 31.330293452
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.233799851,
    "lat": 31.328297498
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234188336,
    "lat": 31.328340316
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234998724,
    "lat": 31.328490182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234397199,
    "lat": 31.328946912
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234000359,
    "lat": 31.328882685
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234443149,
    "lat": 31.328782775
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.233841624,
    "lat": 31.32975689
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235671263,
    "lat": 31.330281409
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237596478,
    "lat": 31.328984307
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237377256,
    "lat": 31.328641759
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23700832,
    "lat": 31.329297166
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237267644,
    "lat": 31.329434184
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237762242,
    "lat": 31.32823037
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240165994,
    "lat": 31.329960275
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239969663,
    "lat": 31.329528527
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240011435,
    "lat": 31.329096776
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240220298,
    "lat": 31.329253777
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240334087,
    "lat": 31.329694518
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238507622,
    "lat": 31.330402726
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23870813,
    "lat": 31.32952139
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239100793,
    "lat": 31.329624868
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239990549,
    "lat": 31.32827252
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240387556,
    "lat": 31.328963754
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240767185,
    "lat": 31.329192119
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240761838,
    "lat": 31.328653178
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240481126,
    "lat": 31.32847962
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241085325,
    "lat": 31.328845004
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240727083,
    "lat": 31.328269523
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240978387,
    "lat": 31.328440797
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241280487,
    "lat": 31.328607504
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241400792,
    "lat": 31.328456783
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241176222,
    "lat": 31.328296927
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240906204,
    "lat": 31.328098248
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243887096,
    "lat": 31.330530323
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.244015422,
    "lat": 31.329842954
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.244266726,
    "lat": 31.330089585
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24437099,
    "lat": 31.329779013
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244395051,
    "lat": 31.329365675
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24468913,
    "lat": 31.329552933
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244892312,
    "lat": 31.329320002
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244670416,
    "lat": 31.328993441
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244940434,
    "lat": 31.328671447
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246256438,
    "lat": 31.330185069
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245909725,
    "lat": 31.32975689
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247538856,
    "lat": 31.330217182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247764428,
    "lat": 31.330038775
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248516335,
    "lat": 31.329596322
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248800389,
    "lat": 31.329392936
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24890482,
    "lat": 31.329856799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249130392,
    "lat": 31.329689095
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248533044,
    "lat": 31.330078025
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248136204,
    "lat": 31.330388454
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247802024,
    "lat": 31.330570429
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260764059,
    "lat": 31.328497318
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260842981,
    "lat": 31.325940157
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259379121,
    "lat": 31.326796802
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.256930672,
    "lat": 31.326799238
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.256580867,
    "lat": 31.325978158
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.257657659,
    "lat": 31.325978158
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241937703,
    "lat": 31.327934707
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242111085,
    "lat": 31.327791799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241846449,
    "lat": 31.327573541
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241685234,
    "lat": 31.327716448
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241429724,
    "lat": 31.327516378
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241606148,
    "lat": 31.327363076
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24177953,
    "lat": 31.327188988
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242056332,
    "lat": 31.327430633
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242275341,
    "lat": 31.327607319
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242258794,
    "lat": 31.327189508
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242447628,
    "lat": 31.327359127
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242580007,
    "lat": 31.32726434
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242330823,
    "lat": 31.327044833
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241953155,
    "lat": 31.326989956
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242525498,
    "lat": 31.326925101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24266469,
    "lat": 31.326697902
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24237572,
    "lat": 31.326438068
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2429129,
    "lat": 31.326487748
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24266761,
    "lat": 31.326081989
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243347024,
    "lat": 31.326223339
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243471615,
    "lat": 31.326371342
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.238865498,
    "lat": 31.327441026
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236617617,
    "lat": 31.327880142
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236173516,
    "lat": 31.327952895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236562865,
    "lat": 31.327399453
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236018385,
    "lat": 31.328223119
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234457948,
    "lat": 31.328054229
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.233949969,
    "lat": 31.3279451
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23236824,
    "lat": 31.327253947
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.231708172,
    "lat": 31.327038285
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.231458746,
    "lat": 31.32695254
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23099031,
    "lat": 31.327939903
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.223975569,
    "lat": 31.324165943
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276370354,
    "lat": 31.321465989
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240482017,
    "lat": 31.323475737
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240501029,
    "lat": 31.32305755
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241347026,
    "lat": 31.32305755
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242083709,
    "lat": 31.32306973
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242050439,
    "lat": 31.322643422
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242468685,
    "lat": 31.322351095
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242202528,
    "lat": 31.321977565
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241313756,
    "lat": 31.321953204
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.240876499,
    "lat": 31.32151065
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235739027,
    "lat": 31.321895094
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235798437,
    "lat": 31.321444673
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.231283284,
    "lat": 31.321457361
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244442579,
    "lat": 31.319465333
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242685982,
    "lat": 31.320066692
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241090375,
    "lat": 31.321084335
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241057105,
    "lat": 31.320747341
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242155616,
    "lat": 31.320793653
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244444135,
    "lat": 31.319900386
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244985574,
    "lat": 31.319565174
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269540591,
    "lat": 31.319342511
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26923166,
    "lat": 31.319090777
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270419858,
    "lat": 31.319374993
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27016796,
    "lat": 31.319188222
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270538678,
    "lat": 31.318786258
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269835265,
    "lat": 31.31882686
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269569108,
    "lat": 31.318567004
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269274435,
    "lat": 31.318311207
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268965504,
    "lat": 31.318039168
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270210735,
    "lat": 31.318522341
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269211462,
    "lat": 31.317527375
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269051829,
    "lat": 31.317294541
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269867515,
    "lat": 31.317186439
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270325,
    "lat": 31.316968571
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270194568,
    "lat": 31.316752366
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269713722,
    "lat": 31.316971897
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274445473,
    "lat": 31.317917359
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276249158,
    "lat": 31.321070378
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277734406,
    "lat": 31.31872307
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274964419,
    "lat": 31.316940346
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27517978,
    "lat": 31.316775395
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277778963,
    "lat": 31.317301969
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.278967162,
    "lat": 31.316845182
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279271637,
    "lat": 31.316654853
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27928649,
    "lat": 31.317206805
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.281425331,
    "lat": 31.312243489
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.281236218,
    "lat": 31.311977684
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278832662,
    "lat": 31.316126246
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278478838,
    "lat": 31.315891721
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278277525,
    "lat": 31.315709313
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278009108,
    "lat": 31.315469576
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277661385,
    "lat": 31.315125604
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277350265,
    "lat": 31.315365342
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277368566,
    "lat": 31.316089764
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276075282,
    "lat": 31.315568598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275983776,
    "lat": 31.315365342
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275538447,
    "lat": 31.315287167
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275770262,
    "lat": 31.315057852
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275506764,
    "lat": 31.314875976
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275794117,
    "lat": 31.314645426
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275244398,
    "lat": 31.315119334
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27494705,
    "lat": 31.314820473
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.275421807,
    "lat": 31.314434088
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275124459,
    "lat": 31.314282522
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274764643,
    "lat": 31.314604866
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277643084,
    "lat": 31.31275425
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277399068,
    "lat": 31.312514505
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277191654,
    "lat": 31.312238277
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275117519,
    "lat": 31.316141881
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.2778932,
    "lat": 31.314557527
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277246558,
    "lat": 31.314755573
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276679221,
    "lat": 31.314870231
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.273781532,
    "lat": 31.31210798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271493883,
    "lat": 31.316131457
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273226396,
    "lat": 31.316240902
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273464311,
    "lat": 31.316392039
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272036818,
    "lat": 31.312389421
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271750099,
    "lat": 31.312655225
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271438979,
    "lat": 31.312535353
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271811103,
    "lat": 31.31221743
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269956582,
    "lat": 31.316402463
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270267703,
    "lat": 31.312947088
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26961496,
    "lat": 31.312587471
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270304305,
    "lat": 31.312222641
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269377044,
    "lat": 31.312222641
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.282090274,
    "lat": 31.311790056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.281535138,
    "lat": 31.311727513
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280717685,
    "lat": 31.30976261
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280461468,
    "lat": 31.309585402
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279204786,
    "lat": 31.310158721
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278899766,
    "lat": 31.310309868
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278600846,
    "lat": 31.310507923
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278838762,
    "lat": 31.310763309
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279162083,
    "lat": 31.31063301
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279467103,
    "lat": 31.310434956
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277557678,
    "lat": 31.31147213
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277411269,
    "lat": 31.31114378
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277344164,
    "lat": 31.310705977
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277508875,
    "lat": 31.310575678
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275318832,
    "lat": 31.311034329
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278850963,
    "lat": 31.307964453
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278405634,
    "lat": 31.30800615
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278070112,
    "lat": 31.307724696
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27835073,
    "lat": 31.307599606
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27727706,
    "lat": 31.308053059
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276831731,
    "lat": 31.308115604
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27620339,
    "lat": 31.308204209
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276368101,
    "lat": 31.308824446
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27558725,
    "lat": 31.308819234
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27528833,
    "lat": 31.309012079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274031648,
    "lat": 31.31122717
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.27436107,
    "lat": 31.310883183
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27498331,
    "lat": 31.310210841
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27467829,
    "lat": 31.310012786
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274354969,
    "lat": 31.310361988
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.274092652,
    "lat": 31.310674705
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274458676,
    "lat": 31.309783458
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274788098,
    "lat": 31.308370996
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274495278,
    "lat": 31.308240694
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.275209025,
    "lat": 31.307479727
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275886169,
    "lat": 31.307443242
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277551578,
    "lat": 31.307422393
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27850324,
    "lat": 31.308761901
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271127859,
    "lat": 31.311711877
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271353573,
    "lat": 31.311868234
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271939212,
    "lat": 31.311560733
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271512184,
    "lat": 31.311393952
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272152726,
    "lat": 31.311148992
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272390641,
    "lat": 31.310904031
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271988015,
    "lat": 31.310732037
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271743999,
    "lat": 31.310997846
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272799368,
    "lat": 31.309251833
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270713032,
    "lat": 31.30978867
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272939677,
    "lat": 31.308511722
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272396741,
    "lat": 31.308313663
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272000216,
    "lat": 31.308688932
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2717562,
    "lat": 31.308470025
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271567087,
    "lat": 31.308704568
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271445079,
    "lat": 31.308287603
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271969714,
    "lat": 31.308115604
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271371875,
    "lat": 31.30891305
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272994581,
    "lat": 31.307933181
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272341838,
    "lat": 31.307693424
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273696126,
    "lat": 31.307568333
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274269564,
    "lat": 31.307604818
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274434274,
    "lat": 31.307667363
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274720993,
    "lat": 31.307349424
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267827543,
    "lat": 31.309653158
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268120362,
    "lat": 31.309408193
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269858976,
    "lat": 31.308073907
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269669864,
    "lat": 31.308324087
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26946855,
    "lat": 31.308621175
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269261137,
    "lat": 31.308824446
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270066389,
    "lat": 31.307849787
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269055061,
    "lat": 31.308516434
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269450249,
    "lat": 31.307974877
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269718667,
    "lat": 31.307641303
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269584946,
    "lat": 31.309671921
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268644021,
    "lat": 31.308394346
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26890951,
    "lat": 31.308077451
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268807999,
    "lat": 31.307570418
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266851968,
    "lat": 31.309358367
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26780851,
    "lat": 31.308194202
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268066191,
    "lat": 31.307860628
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26838634,
    "lat": 31.307473681
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267488361,
    "lat": 31.307947358
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267656244,
    "lat": 31.307683833
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267867074,
    "lat": 31.30749036
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265989127,
    "lat": 31.308994775
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265598702,
    "lat": 31.308998111
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265727542,
    "lat": 31.30878129
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265403489,
    "lat": 31.309628557
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265344925,
    "lat": 31.30978867
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265270744,
    "lat": 31.308377667
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261811575,
    "lat": 31.307823935
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262030213,
    "lat": 31.307503703
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260730096,
    "lat": 31.308464396
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260495841,
    "lat": 31.308184195
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259437788,
    "lat": 31.308137495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258325075,
    "lat": 31.308544454
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257876086,
    "lat": 31.308514432
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258270416,
    "lat": 31.308030751
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258434394,
    "lat": 31.307753884
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258660841,
    "lat": 31.307850621
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258141575,
    "lat": 31.307637133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258832628,
    "lat": 31.307520381
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259051266,
    "lat": 31.307330243
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255986426,
    "lat": 31.30885134
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255756075,
    "lat": 31.308721247
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255689703,
    "lat": 31.308324296
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254959607,
    "lat": 31.308811311
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254783916,
    "lat": 31.308134159
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255244618,
    "lat": 31.307717191
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254479384,
    "lat": 31.307900657
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254764395,
    "lat": 31.30751371
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254217799,
    "lat": 31.308137495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254026491,
    "lat": 31.308384339
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25358531,
    "lat": 31.308210881
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253837837,
    "lat": 31.307965637
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253865323,
    "lat": 31.307679564
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253522842,
    "lat": 31.307446995
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253390097,
    "lat": 31.307690505
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253202693,
    "lat": 31.308064109
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252894257,
    "lat": 31.308284267
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252554586,
    "lat": 31.308187531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252675618,
    "lat": 31.307693841
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253027001,
    "lat": 31.307817263
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252211012,
    "lat": 31.308190867
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25232814,
    "lat": 31.307857292
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252004087,
    "lat": 31.307643804
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251535576,
    "lat": 31.308080787
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251633182,
    "lat": 31.307740541
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251691746,
    "lat": 31.307413637
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234250952,
    "lat": 31.305040421
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235196514,
    "lat": 31.305009147
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235306321,
    "lat": 31.304618227
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235025702,
    "lat": 31.304513981
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23590416,
    "lat": 31.303560127
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23622138,
    "lat": 31.30370086
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236422694,
    "lat": 31.303898929
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235977365,
    "lat": 31.303909353
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237014432,
    "lat": 31.303236961
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236581304,
    "lat": 31.303252598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236306786,
    "lat": 31.303148351
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236617906,
    "lat": 31.302861671
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238136905,
    "lat": 31.302429042
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238002697,
    "lat": 31.302199696
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23728895,
    "lat": 31.301845251
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236636208,
    "lat": 31.301615903
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237758681,
    "lat": 31.301751427
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237734279,
    "lat": 31.301522079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237563468,
    "lat": 31.301245819
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238143006,
    "lat": 31.301647178
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238094203,
    "lat": 31.301334431
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238655439,
    "lat": 31.301219756
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.238563933,
    "lat": 31.30087052
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242431586,
    "lat": 31.304847567
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243163634,
    "lat": 31.304779807
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242992822,
    "lat": 31.304628651
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24249259,
    "lat": 31.304566104
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241894751,
    "lat": 31.304586953
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242309578,
    "lat": 31.304128271
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242181469,
    "lat": 31.304310701
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24204116,
    "lat": 31.303977114
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242577995,
    "lat": 31.303846805
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242388883,
    "lat": 31.303680011
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242608497,
    "lat": 31.303346421
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.242919618,
    "lat": 31.30347673
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243133132,
    "lat": 31.30378947
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243407649,
    "lat": 31.303883292
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243627264,
    "lat": 31.303997963
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243456453,
    "lat": 31.304269003
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243078228,
    "lat": 31.304138695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.243474754,
    "lat": 31.303492367
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244072593,
    "lat": 31.302767848
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241534827,
    "lat": 31.302444679
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241748341,
    "lat": 31.30227267
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241967956,
    "lat": 31.301428255
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241925253,
    "lat": 31.301162419
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246293138,
    "lat": 31.303591401
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246000319,
    "lat": 31.303351633
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245780704,
    "lat": 31.303492367
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24525607,
    "lat": 31.303252598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246097925,
    "lat": 31.30310144
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247629125,
    "lat": 31.303263023
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247318005,
    "lat": 31.303163988
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247128892,
    "lat": 31.302929432
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247226499,
    "lat": 31.302705299
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247824338,
    "lat": 31.302653175
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246829973,
    "lat": 31.300750633
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244627729,
    "lat": 31.302376918
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244499621,
    "lat": 31.300531708
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248727197,
    "lat": 31.305003935
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249117622,
    "lat": 31.305014359
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249111522,
    "lat": 31.304274215
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248916309,
    "lat": 31.303820744
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249050518,
    "lat": 31.303586189
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249404341,
    "lat": 31.303883292
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249660558,
    "lat": 31.304242941
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24984967,
    "lat": 31.303831168
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24923353,
    "lat": 31.304024024
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249288433,
    "lat": 31.304670349
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249599554,
    "lat": 31.304920539
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250233995,
    "lat": 31.303205687
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250435308,
    "lat": 31.302887733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251324122,
    "lat": 31.303603986
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250557014,
    "lat": 31.303345654
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249602501,
    "lat": 31.302807637
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251394086,
    "lat": 31.302675267
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25103427,
    "lat": 31.302660322
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251199185,
    "lat": 31.302384908
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252747359,
    "lat": 31.30476417
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252997475,
    "lat": 31.304331551
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253015777,
    "lat": 31.304837142
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253308596,
    "lat": 31.304967449
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253668519,
    "lat": 31.305097755
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25444937,
    "lat": 31.304487919
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254809294,
    "lat": 31.303893716
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255236321,
    "lat": 31.30453483
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255455936,
    "lat": 31.304758958
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255699952,
    "lat": 31.304441009
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255767056,
    "lat": 31.304295064
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255943968,
    "lat": 31.304910114
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256267289,
    "lat": 31.304482707
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255230221,
    "lat": 31.305212425
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255010607,
    "lat": 31.3049466
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254717788,
    "lat": 31.305379217
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255010607,
    "lat": 31.305592919
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255309526,
    "lat": 31.305811832
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255968369,
    "lat": 31.305895227
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256377096,
    "lat": 31.305931713
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256700417,
    "lat": 31.306129777
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256956634,
    "lat": 31.306228808
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25061832,
    "lat": 31.30585353
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251972608,
    "lat": 31.306531115
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252472841,
    "lat": 31.306260082
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25261315,
    "lat": 31.305801408
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252283729,
    "lat": 31.305671102
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252424038,
    "lat": 31.30536358
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251832299,
    "lat": 31.30692724
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252851066,
    "lat": 31.30707318
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252899869,
    "lat": 31.306817785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252991375,
    "lat": 31.30632784
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253418403,
    "lat": 31.306489418
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253650218,
    "lat": 31.305697163
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253253692,
    "lat": 31.307182635
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253516009,
    "lat": 31.306056806
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253760025,
    "lat": 31.306546752
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253912535,
    "lat": 31.305973411
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254998406,
    "lat": 31.306817785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255120414,
    "lat": 31.306458145
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25551694,
    "lat": 31.306499842
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255376631,
    "lat": 31.306833421
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255272924,
    "lat": 31.307370272
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254388366,
    "lat": 31.307391121
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254077246,
    "lat": 31.307234757
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255468137,
    "lat": 31.302981555
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253943037,
    "lat": 31.302491591
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254248057,
    "lat": 31.302246608
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254589679,
    "lat": 31.30192865
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254461571,
    "lat": 31.302455104
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254083346,
    "lat": 31.302825184
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256651614,
    "lat": 31.302262245
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256499104,
    "lat": 31.302486378
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256480803,
    "lat": 31.302194484
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.256880501,
    "lat": 31.303297216
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257067905,
    "lat": 31.303357263
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.256579873,
    "lat": 31.303734219
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256346594,
    "lat": 31.303716497
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256694317,
    "lat": 31.30319005
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256886279,
    "lat": 31.301908801
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256796325,
    "lat": 31.301379316
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257023709,
    "lat": 31.301522363
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257206116,
    "lat": 31.301174354
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256916264,
    "lat": 31.301050522
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25629658,
    "lat": 31.30094377
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255799335,
    "lat": 31.300977931
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256785823,
    "lat": 31.305076906
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257273854,
    "lat": 31.305092543
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257469067,
    "lat": 31.300823608
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257145746,
    "lat": 31.30059947
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256810293,
    "lat": 31.305817745
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257072293,
    "lat": 31.305451934
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257193707,
    "lat": 31.305839585
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257359854,
    "lat": 31.305490153
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257538781,
    "lat": 31.305211698
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257391805,
    "lat": 31.306096198
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257567537,
    "lat": 31.305752227
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257759244,
    "lat": 31.305525642
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257765634,
    "lat": 31.306120767
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257896635,
    "lat": 31.305855964
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258053196,
    "lat": 31.30562938
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258216147,
    "lat": 31.305367305
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257925391,
    "lat": 31.305282677
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258388683,
    "lat": 31.305724927
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258283244,
    "lat": 31.305940592
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257625049,
    "lat": 31.304919593
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258034025,
    "lat": 31.305012412
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258372708,
    "lat": 31.30509977
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260015001,
    "lat": 31.306270913
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261376123,
    "lat": 31.306590313
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261721197,
    "lat": 31.306625802
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261858587,
    "lat": 31.307005258
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26181066,
    "lat": 31.306270913
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263130246,
    "lat": 31.307016178
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.264692661,
    "lat": 31.306071629
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264839637,
    "lat": 31.305820475
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265044124,
    "lat": 31.306123497
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.264903539,
    "lat": 31.306557554
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265133588,
    "lat": 31.306557554
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265398783,
    "lat": 31.306262723
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.264318832,
    "lat": 31.307267328
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266290222,
    "lat": 31.305591161
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266402052,
    "lat": 31.305361845
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267098588,
    "lat": 31.305170749
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267034686,
    "lat": 31.305662139
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267066637,
    "lat": 31.306423788
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26778554,
    "lat": 31.306303672
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267919735,
    "lat": 31.306156256
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267801515,
    "lat": 31.306822355
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267574662,
    "lat": 31.307018908
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267437271,
    "lat": 31.30722638
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26804115,
    "lat": 31.306601233
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26817215,
    "lat": 31.306434708
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266092125,
    "lat": 31.307027097
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266804637,
    "lat": 31.306775947
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268411784,
    "lat": 31.306781406
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268782418,
    "lat": 31.30696704
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267983637,
    "lat": 31.307245489
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269264882,
    "lat": 31.305913293
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269546053,
    "lat": 31.305550211
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269638711,
    "lat": 31.305708548
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270022126,
    "lat": 31.307283707
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269776101,
    "lat": 31.306251803
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270162711,
    "lat": 31.306448357
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270421516,
    "lat": 31.306653101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270728248,
    "lat": 31.306341891
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270485419,
    "lat": 31.306156256
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270133955,
    "lat": 31.305967891
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271060541,
    "lat": 31.306538445
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270894394,
    "lat": 31.306803246
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27115959,
    "lat": 31.3069725
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271380053,
    "lat": 31.306770487
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271728321,
    "lat": 31.307048937
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271597321,
    "lat": 31.307297357
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.27155259,
    "lat": 31.305948782
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271920029,
    "lat": 31.306197205
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272249126,
    "lat": 31.305441014
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271987126,
    "lat": 31.305222618
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272325809,
    "lat": 31.305937862
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272514322,
    "lat": 31.305714008
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27299359,
    "lat": 31.305864154
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272859395,
    "lat": 31.306145337
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.273169322,
    "lat": 31.306429248
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273530371,
    "lat": 31.306781406
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273389785,
    "lat": 31.30695339
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273335468,
    "lat": 31.307084425
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273153346,
    "lat": 31.307313736
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273690127,
    "lat": 31.306563014
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274083127,
    "lat": 31.306879683
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.273955322,
    "lat": 31.307106264
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273811542,
    "lat": 31.307362874
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27391059,
    "lat": 31.306268183
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274009639,
    "lat": 31.305978811
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277354933,
    "lat": 31.306047059
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277048201,
    "lat": 31.306325511
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.276869274,
    "lat": 31.306183555
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.276556152,
    "lat": 31.306475657
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.276677567,
    "lat": 31.306623072
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276840518,
    "lat": 31.306740458
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27572542,
    "lat": 31.306636721
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276997079,
    "lat": 31.305375495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274434591,
    "lat": 31.307259138
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274642274,
    "lat": 31.306999799
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.275108761,
    "lat": 31.306751377
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27545703,
    "lat": 31.306328241
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.275763762,
    "lat": 31.305872344
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.277307006,
    "lat": 31.305290867
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277728762,
    "lat": 31.30722092
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277990762,
    "lat": 31.306860574
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277853372,
    "lat": 31.307420202
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278460445,
    "lat": 31.307250949
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278546714,
    "lat": 31.307051667
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277310201,
    "lat": 31.307084425
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.257641588,
    "lat": 31.303967005
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.257432807,
    "lat": 31.303676488
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.25791002,
    "lat": 31.303462423
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25885848,
    "lat": 31.304359455
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259055331,
    "lat": 31.304435906
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258703386,
    "lat": 31.304655066
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258995679,
    "lat": 31.304746807
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259049365,
    "lat": 31.30408423
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259407275,
    "lat": 31.304119908
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259675707,
    "lat": 31.304216746
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259616056,
    "lat": 31.304466487
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259514648,
    "lat": 31.304700937
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259222355,
    "lat": 31.303742747
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259651846,
    "lat": 31.303809005
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259800975,
    "lat": 31.303890553
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25866163,
    "lat": 31.302152538
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258822689,
    "lat": 31.301856919
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259270076,
    "lat": 31.301087287
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259962035,
    "lat": 31.302009825
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260373631,
    "lat": 31.302086278
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260576446,
    "lat": 31.301688722
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260767331,
    "lat": 31.302101569
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260445213,
    "lat": 31.303661198
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260564516,
    "lat": 31.304221843
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260236432,
    "lat": 31.30405365
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260815053,
    "lat": 31.303635714
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260725575,
    "lat": 31.303982295
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261178927,
    "lat": 31.303931327
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261381743,
    "lat": 31.304017972
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26164421,
    "lat": 31.303967005
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261256474,
    "lat": 31.304369649
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261053659,
    "lat": 31.304665259
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.25995607,
    "lat": 31.304731517
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260069408,
    "lat": 31.304420616
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260606272,
    "lat": 31.300776374
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260934356,
    "lat": 31.300949669
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261244544,
    "lat": 31.301041414
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.258786898,
    "lat": 31.301331939
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258667595,
    "lat": 31.303793714
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.264077995,
    "lat": 31.304655066
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263976587,
    "lat": 31.303523585
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.2631355,
    "lat": 31.303686682
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263308489,
    "lat": 31.303523585
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263708155,
    "lat": 31.303156615
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.263493409,
    "lat": 31.302932355
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262914789,
    "lat": 31.303436939
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262670217,
    "lat": 31.303686682
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262670217,
    "lat": 31.303248358
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262723904,
    "lat": 31.302509318
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262187039,
    "lat": 31.302208603
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262515123,
    "lat": 31.301989438
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262043875,
    "lat": 31.30187221
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261721757,
    "lat": 31.300939476
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261984224,
    "lat": 31.301046511
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262318273,
    "lat": 31.301128062
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262598635,
    "lat": 31.301235097
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26239582,
    "lat": 31.300868119
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262216865,
    "lat": 31.300786568
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261948433,
    "lat": 31.300623465
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262145283,
    "lat": 31.30142878
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264861063,
    "lat": 31.301119736
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265249552,
    "lat": 31.30072516
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.265931241,
    "lat": 31.300944369
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265014992,
    "lat": 31.300612423
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269351196,
    "lat": 31.304700937
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269589802,
    "lat": 31.304359455
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269857671,
    "lat": 31.303940175
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268567135,
    "lat": 31.303403912
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.268937452,
    "lat": 31.302992905
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269357399,
    "lat": 31.303146218
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269758258,
    "lat": 31.303309315
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26965518,
    "lat": 31.303498509
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269479566,
    "lat": 31.303746416
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269109249,
    "lat": 31.304460778
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.268945087,
    "lat": 31.304705422
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266976986,
    "lat": 31.300871299
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267235979,
    "lat": 31.30060616
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266798623,
    "lat": 31.300568581
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266911445,
    "lat": 31.30443081
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267231092,
    "lat": 31.304566464
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269647545,
    "lat": 31.300873387
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27009684,
    "lat": 31.302366606
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.269822443,
    "lat": 31.302820225
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.270621774,
    "lat": 31.302529705
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271528479,
    "lat": 31.303365584
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272178681,
    "lat": 31.303630617
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272661859,
    "lat": 31.304237133
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273508912,
    "lat": 31.303314616
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273669971,
    "lat": 31.303095453
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272858709,
    "lat": 31.302478737
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273198723,
    "lat": 31.30211686
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273717692,
    "lat": 31.30180595
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272667824,
    "lat": 31.30213215
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272948187,
    "lat": 31.3018875
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.27177305,
    "lat": 31.302076085
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271337594,
    "lat": 31.301918082
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271081092,
    "lat": 31.301693819
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.270490541,
    "lat": 31.301489943
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274519543,
    "lat": 31.302712637
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274829846,
    "lat": 31.30287965
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.274970376,
    "lat": 31.302305444
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.274976341,
    "lat": 31.301821241
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277226752,
    "lat": 31.303403651
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277268289,
    "lat": 31.302961069
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277451882,
    "lat": 31.303615327
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.278362998,
    "lat": 31.303083155
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.288839371,
    "lat": 31.295995322
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.279766364,
    "lat": 31.297631509
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277869443,
    "lat": 31.29702495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278603158,
    "lat": 31.296958687
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277624872,
    "lat": 31.300389005
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273944368,
    "lat": 31.297407235
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277410126,
    "lat": 31.300159642
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.275483379,
    "lat": 31.299308443
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276944843,
    "lat": 31.297529566
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.277070112,
    "lat": 31.297702868
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27569216,
    "lat": 31.298080053
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278805973,
    "lat": 31.297305293
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271606026,
    "lat": 31.299420578
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271325663,
    "lat": 31.299308443
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271104952,
    "lat": 31.299649943
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.271528479,
    "lat": 31.298232966
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271832702,
    "lat": 31.297896558
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.272047448,
    "lat": 31.297019853
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263278663,
    "lat": 31.299930278
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263057952,
    "lat": 31.299818144
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26276566,
    "lat": 31.299675428
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267686916,
    "lat": 31.300037314
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268176059,
    "lat": 31.300057702
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267979209,
    "lat": 31.30024629
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26614194,
    "lat": 31.300103575
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263720085,
    "lat": 31.299700913
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263857284,
    "lat": 31.299512324
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263994482,
    "lat": 31.299721301
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267519892,
    "lat": 31.300266678
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268551864,
    "lat": 31.299665234
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268623446,
    "lat": 31.299415481
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267967279,
    "lat": 31.299186115
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267776393,
    "lat": 31.299420578
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267603404,
    "lat": 31.299609167
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26744831,
    "lat": 31.299833435
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266988992,
    "lat": 31.300322745
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267108296,
    "lat": 31.29884971
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2666967,
    "lat": 31.298732478
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266660909,
    "lat": 31.299033204
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266279138,
    "lat": 31.299252376
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.26652371,
    "lat": 31.299440966
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266040532,
    "lat": 31.299542906
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.266237382,
    "lat": 31.299797756
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26576017,
    "lat": 31.299971054
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265861577,
    "lat": 31.300287066
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265694553,
    "lat": 31.300429781
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265420156,
    "lat": 31.300225902
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267847975,
    "lat": 31.298263548
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.267561648,
    "lat": 31.298492916
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269052938,
    "lat": 31.297295099
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.269303474,
    "lat": 31.297030047
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266607222,
    "lat": 31.297193156
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2661658,
    "lat": 31.29753976
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265891403,
    "lat": 31.297855781
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265479807,
    "lat": 31.297590732
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265951055,
    "lat": 31.29716767
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265157689,
    "lat": 31.298579566
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265455947,
    "lat": 31.298202383
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264936978,
    "lat": 31.298146315
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.264734162,
    "lat": 31.298396072
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264704336,
    "lat": 31.298722284
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264364322,
    "lat": 31.299466451
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26429274,
    "lat": 31.299695816
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26409589,
    "lat": 31.299257473
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262968475,
    "lat": 31.296617178
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262371959,
    "lat": 31.29731039
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.262121422,
    "lat": 31.29713199
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261864921,
    "lat": 31.29757544
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.263224977,
    "lat": 31.298324713
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263081813,
    "lat": 31.298589761
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262723904,
    "lat": 31.299012816
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262306342,
    "lat": 31.298696799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262157213,
    "lat": 31.298946554
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263433757,
    "lat": 31.298054568
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.263648503,
    "lat": 31.297764033
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263117604,
    "lat": 31.297988306
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.262884963,
    "lat": 31.297850684
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.263690259,
    "lat": 31.298401169
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262538984,
    "lat": 31.300001635
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262807416,
    "lat": 31.300236096
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263040057,
    "lat": 31.300322745
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261709826,
    "lat": 31.299848726
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261435429,
    "lat": 31.300113769
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261769478,
    "lat": 31.300236096
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261578593,
    "lat": 31.300480751
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265133828,
    "lat": 31.29902301
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.264942943,
    "lat": 31.299282958
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.265145758,
    "lat": 31.299787562
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265491737,
    "lat": 31.29936451
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265694553,
    "lat": 31.299201406
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26091353,
    "lat": 31.300251192
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260042303,
    "lat": 31.299822112
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259836596,
    "lat": 31.297826607
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259037971,
    "lat": 31.299863469
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260683623,
    "lat": 31.299723889
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260822777,
    "lat": 31.299491254
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260974032,
    "lat": 31.299253449
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259806345,
    "lat": 31.300158138
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259255778,
    "lat": 31.300426959
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258293798,
    "lat": 31.299718719
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258130443,
    "lat": 31.29999788
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.257761382,
    "lat": 31.29984796
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25802759,
    "lat": 31.299424048
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258209096,
    "lat": 31.299103528
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258432953,
    "lat": 31.298948437
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257797683,
    "lat": 31.298664104
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257658528,
    "lat": 31.298870892
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257477023,
    "lat": 31.299108698
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.25705956,
    "lat": 31.299579138
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25771298,
    "lat": 31.299253449
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257882385,
    "lat": 31.29906734
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258124393,
    "lat": 31.298814025
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25802759,
    "lat": 31.298302223
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258124393,
    "lat": 31.298048906
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258541856,
    "lat": 31.298116113
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258432953,
    "lat": 31.298441806
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258602358,
    "lat": 31.298586558
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258862516,
    "lat": 31.298333242
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259237628,
    "lat": 31.298431467
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259564338,
    "lat": 31.300602725
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259673241,
    "lat": 31.300380432
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260483967,
    "lat": 31.299956523
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260217758,
    "lat": 31.29954812
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260429515,
    "lat": 31.299253449
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257271316,
    "lat": 31.300292549
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26124629,
    "lat": 31.298757159
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259903148,
    "lat": 31.298297054
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.260078604,
    "lat": 31.298043736
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260241959,
    "lat": 31.297873135
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260550519,
    "lat": 31.297511251
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260030202,
    "lat": 31.297521591
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260387164,
    "lat": 31.297113178
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25963089,
    "lat": 31.297588798
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259431234,
    "lat": 31.297878305
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259189226,
    "lat": 31.297624986
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259437284,
    "lat": 31.297345818
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259745844,
    "lat": 31.296973593
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259927349,
    "lat": 31.296647895
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260369013,
    "lat": 31.296715103
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.259552237,
    "lat": 31.296534159
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259261828,
    "lat": 31.296854688
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.258892767,
    "lat": 31.297500912
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259116624,
    "lat": 31.297201064
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257646428,
    "lat": 31.297666344
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257525424,
    "lat": 31.297862795
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257434671,
    "lat": 31.298141962
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257053509,
    "lat": 31.297898984
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259286029,
    "lat": 31.296291177
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257374169,
    "lat": 31.297583628
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256085479,
    "lat": 31.299951353
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255589364,
    "lat": 31.299744567
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255565163,
    "lat": 31.299977201
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256248834,
    "lat": 31.299532611
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256478741,
    "lat": 31.299682531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255879773,
    "lat": 31.299387861
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255553063,
    "lat": 31.299217261
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255220302,
    "lat": 31.299088019
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256369838,
    "lat": 31.299201752
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25643034,
    "lat": 31.298984625
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256527143,
    "lat": 31.298622746
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256684448,
    "lat": 31.298405618
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256297236,
    "lat": 31.297904153
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256061278,
    "lat": 31.298188489
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256339587,
    "lat": 31.298214338
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255758769,
    "lat": 31.298023058
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.256067329,
    "lat": 31.29776974
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255746669,
    "lat": 31.297588798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255522812,
    "lat": 31.297831777
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255359456,
    "lat": 31.298069585
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254966194,
    "lat": 31.297821437
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255359456,
    "lat": 31.297449214
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255177951,
    "lat": 31.297278611
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255335256,
    "lat": 31.297035631
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255540962,
    "lat": 31.29678748
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254984345,
    "lat": 31.297144197
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254470079,
    "lat": 31.296885707
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254742337,
    "lat": 31.29706665
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254451928,
    "lat": 31.297247592
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254270422,
    "lat": 31.297108008
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254240172,
    "lat": 31.297325139
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254312774,
    "lat": 31.29776974
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253780357,
    "lat": 31.298710631
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253459697,
    "lat": 31.298602067
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253477848,
    "lat": 31.298891571
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25324189,
    "lat": 31.298793346
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252866779,
    "lat": 31.298653764
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253284242,
    "lat": 31.299372352
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252993833,
    "lat": 31.299191413
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252521918,
    "lat": 31.299010474
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253780357,
    "lat": 31.296094723
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253332643,
    "lat": 31.296053364
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249817483,
    "lat": 31.297263102
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253024084,
    "lat": 31.299677362
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252697373,
    "lat": 31.299486084
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252364613,
    "lat": 31.299336164
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252521918,
    "lat": 31.299760076
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252328312,
    "lat": 31.299682531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251971351,
    "lat": 31.29999271
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25195925,
    "lat": 31.29955846
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251233228,
    "lat": 31.300499333
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249750931,
    "lat": 31.300044406
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249151963,
    "lat": 31.298751989
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249490773,
    "lat": 31.298462485
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249998989,
    "lat": 31.299387861
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250289398,
    "lat": 31.299542951
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250519305,
    "lat": 31.299372352
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250622158,
    "lat": 31.299139716
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250210746,
    "lat": 31.299258619
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249938487,
    "lat": 31.299025983
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250392251,
    "lat": 31.299046662
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249859835,
    "lat": 31.298617576
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250216796,
    "lat": 31.298353921
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250525355,
    "lat": 31.298519352
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25067056,
    "lat": 31.29872614
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25099727,
    "lat": 31.298421127
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251269529,
    "lat": 31.298240187
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251814046,
    "lat": 31.298266035
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252062103,
    "lat": 31.298426297
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252146806,
    "lat": 31.29890708
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25164464,
    "lat": 31.299315485
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251499436,
    "lat": 31.299584308
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250852066,
    "lat": 31.298085094
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252098405,
    "lat": 31.296032684
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25258847,
    "lat": 31.298317733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252461416,
    "lat": 31.298090264
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252630821,
    "lat": 31.297883474
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252854678,
    "lat": 31.298043736
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252080254,
    "lat": 31.297919663
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251753544,
    "lat": 31.297656005
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251529687,
    "lat": 31.297526761
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251257428,
    "lat": 31.297712872
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251529687,
    "lat": 31.297950681
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251759594,
    "lat": 31.297273441
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252364613,
    "lat": 31.296653065
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25260662,
    "lat": 31.296839178
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252957531,
    "lat": 31.295970646
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252624771,
    "lat": 31.295939627
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252031853,
    "lat": 31.296441102
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252201258,
    "lat": 31.296244648
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251529687,
    "lat": 31.296947744
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251154575,
    "lat": 31.2973148
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250561657,
    "lat": 31.297423365
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250156294,
    "lat": 31.297857625
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249908236,
    "lat": 31.298074755
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249684379,
    "lat": 31.297888644
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249938487,
    "lat": 31.297583628
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250089742,
    "lat": 31.297438874
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250483004,
    "lat": 31.297102838
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250815765,
    "lat": 31.296756461
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251033571,
    "lat": 31.296560008
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251045672,
    "lat": 31.29617227
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250900467,
    "lat": 31.295986156
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250628209,
    "lat": 31.296280837
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250531406,
    "lat": 31.296554838
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250126043,
    "lat": 31.297004612
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249478673,
    "lat": 31.297407856
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249272966,
    "lat": 31.297630156
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24908541,
    "lat": 31.297790419
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248879704,
    "lat": 31.29797136
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248897855,
    "lat": 31.29680299
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250307549,
    "lat": 31.296777141
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248165782,
    "lat": 31.296937405
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24778462,
    "lat": 31.297743891
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24745791,
    "lat": 31.296420423
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247300605,
    "lat": 31.296218799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247512361,
    "lat": 31.295986156
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245848559,
    "lat": 31.296472121
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245261691,
    "lat": 31.297190725
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245116486,
    "lat": 31.297702533
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24554,
    "lat": 31.297847286
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245836459,
    "lat": 31.297687023
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246610883,
    "lat": 31.297671514
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24684079,
    "lat": 31.29775423
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.246713736,
    "lat": 31.297935172
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247058597,
    "lat": 31.297614647
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247330856,
    "lat": 31.298493503
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247712018,
    "lat": 31.298565879
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245267741,
    "lat": 31.299718719
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245007583,
    "lat": 31.299884148
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245679154,
    "lat": 31.300266701
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248583245,
    "lat": 31.298777837
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.239514011,
    "lat": 31.298162641
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.241093111,
    "lat": 31.299341333
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247167501,
    "lat": 31.295862079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247312705,
    "lat": 31.295634605
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24809923,
    "lat": 31.29582589
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24841989,
    "lat": 31.295603585
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249333468,
    "lat": 31.295029727
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249690429,
    "lat": 31.294797081
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249533124,
    "lat": 31.294590284
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249357669,
    "lat": 31.294383486
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249188264,
    "lat": 31.294223218
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248946256,
    "lat": 31.294502395
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248867604,
    "lat": 31.294311107
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247288504,
    "lat": 31.293685541
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.247409508,
    "lat": 31.293566631
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249508924,
    "lat": 31.293204731
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24748211,
    "lat": 31.291591674
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248407789,
    "lat": 31.291524463
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248589295,
    "lat": 31.29192773
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248825252,
    "lat": 31.292067322
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249049109,
    "lat": 31.292155213
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248867604,
    "lat": 31.291777798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249279017,
    "lat": 31.291881199
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249521024,
    "lat": 31.292088002
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249654128,
    "lat": 31.29190705
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249914286,
    "lat": 31.291710586
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250271248,
    "lat": 31.292000111
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249980838,
    "lat": 31.292346506
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251136425,
    "lat": 31.293287451
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251596239,
    "lat": 31.293406361
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251977401,
    "lat": 31.293530441
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250858116,
    "lat": 31.29395955
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250470904,
    "lat": 31.29379928
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250204695,
    "lat": 31.293618331
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251723293,
    "lat": 31.294124988
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252013702,
    "lat": 31.294243897
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251227177,
    "lat": 31.29483844
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250779463,
    "lat": 31.294471375
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251051722,
    "lat": 31.294621303
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250967019,
    "lat": 31.295557056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251166676,
    "lat": 31.295717323
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251693042,
    "lat": 31.295593246
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251511536,
    "lat": 31.295479508
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252122605,
    "lat": 31.295660454
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25226781,
    "lat": 31.295856909
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252570319,
    "lat": 31.295200334
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252866779,
    "lat": 31.295655284
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249170113,
    "lat": 31.291452081
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249533124,
    "lat": 31.291586504
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253695655,
    "lat": 31.295675964
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.254324874,
    "lat": 31.294926329
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.254597133,
    "lat": 31.295081426
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.255940275,
    "lat": 31.293990569
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.257416521,
    "lat": 31.294290427
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.263176301,
    "lat": 31.295769021
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.267205727,
    "lat": 31.295293392
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267272279,
    "lat": 31.295510528
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276208408,
    "lat": 31.295784531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274351,
    "lat": 31.29387166
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292269966,
    "lat": 31.294161385
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292637817,
    "lat": 31.293976094
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290573977,
    "lat": 31.293635289
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295651173,
    "lat": 31.289292362
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.281700501,
    "lat": 31.290879616
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.278800792,
    "lat": 31.289574035
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.282168196,
    "lat": 31.288770885
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.278506812,
    "lat": 31.290449499
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267010425,
    "lat": 31.290845359
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265803327,
    "lat": 31.289589261
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26549153,
    "lat": 31.289794805
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.261233279,
    "lat": 31.288409275
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.280324141,
    "lat": 31.287914437
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.280921009,
    "lat": 31.288017211
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.281326345,
    "lat": 31.288089534
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.285669226,
    "lat": 31.288660499
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.299904969,
    "lat": 31.287594695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29677364,
    "lat": 31.286947594
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296693464,
    "lat": 31.286696365
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304105315,
    "lat": 31.288687144
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304118678,
    "lat": 31.288439726
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303691071,
    "lat": 31.288413081
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303633166,
    "lat": 31.288078114
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30410977,
    "lat": 31.288066695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.302889309,
    "lat": 31.288329339
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301958373,
    "lat": 31.288196114
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306711044,
    "lat": 31.288051469
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305214421,
    "lat": 31.287179789
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305178787,
    "lat": 31.287613727
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305677661,
    "lat": 31.287404371
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304951621,
    "lat": 31.28681056
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306176536,
    "lat": 31.286833399
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.309530577,
    "lat": 31.288024824
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.308710997,
    "lat": 31.287670824
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.315236455,
    "lat": 31.284595154
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311477078,
    "lat": 31.286700172
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305891465,
    "lat": 31.285318402
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304238943,
    "lat": 31.285291756
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.294773688,
    "lat": 31.28503291
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291415193,
    "lat": 31.286441329
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.291041037,
    "lat": 31.285957901
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.290724786,
    "lat": 31.285832286
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280524582,
    "lat": 31.285626733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27598126,
    "lat": 31.286190099
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.276644941,
    "lat": 31.284538055
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268533775,
    "lat": 31.286113969
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268391239,
    "lat": 31.285466858
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26485012,
    "lat": 31.286330941
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.312165593,
    "lat": 31.283287508
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311895847,
    "lat": 31.282015621
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311528433,
    "lat": 31.281983823
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311272639,
    "lat": 31.281987798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310923829,
    "lat": 31.281987798
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310365734,
    "lat": 31.283744588
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310291321,
    "lat": 31.283514061
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.31028667,
    "lat": 31.284046658
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.299882832,
    "lat": 31.281657899
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.301352484,
    "lat": 31.281685722
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.290269629,
    "lat": 31.282691313
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298520147,
    "lat": 31.2828344
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.298431782,
    "lat": 31.282055367
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.297738813,
    "lat": 31.28183676
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.298236449,
    "lat": 31.281590329
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298575957,
    "lat": 31.28090668
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298148083,
    "lat": 31.280771539
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298003909,
    "lat": 31.281375696
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.297515575,
    "lat": 31.281236581
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.29783648,
    "lat": 31.280696019
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.288799977,
    "lat": 31.283088777
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285576973,
    "lat": 31.284146022
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285102591,
    "lat": 31.284014861
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.284074764,
    "lat": 31.28377241
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.284242193,
    "lat": 31.283812156
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.284591003,
    "lat": 31.283903572
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.286000195,
    "lat": 31.283756512
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.285832767,
    "lat": 31.283518036
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.28451659,
    "lat": 31.283100701
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.284335209,
    "lat": 31.283382899
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.284837496,
    "lat": 31.283176218
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.284130574,
    "lat": 31.282750933
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283921288,
    "lat": 31.282631693
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.276028881,
    "lat": 31.283748563
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272094305,
    "lat": 31.283132498
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271750146,
    "lat": 31.283001335
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.27130832,
    "lat": 31.282460783
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266666822,
    "lat": 31.283080827
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266369171,
    "lat": 31.282921842
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.266406378,
    "lat": 31.283235838
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.265704107,
    "lat": 31.282862223
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265857583,
    "lat": 31.282655541
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.265448313,
    "lat": 31.282432961
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.288770956,
    "lat": 31.28176776
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.287411434,
    "lat": 31.281721971
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290130477,
    "lat": 31.280474229
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289681768,
    "lat": 31.280645938
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.286313101,
    "lat": 31.280273902
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.286138975,
    "lat": 31.280062127
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.286005032,
    "lat": 31.280457058
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.293090618,
    "lat": 31.279300879
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293150893,
    "lat": 31.278013038
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292628515,
    "lat": 31.27791001
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290036717,
    "lat": 31.273096187
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289179482,
    "lat": 31.273056119
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289427276,
    "lat": 31.272649709
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289969746,
    "lat": 31.272151711
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.285971546,
    "lat": 31.271304536
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286547501,
    "lat": 31.271533503
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.286815388,
    "lat": 31.271619365
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.287056485,
    "lat": 31.271773917
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.288054361,
    "lat": 31.2717224
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.288241881,
    "lat": 31.271819711
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288536555,
    "lat": 31.27131026
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.28859683,
    "lat": 31.271184328
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288811139,
    "lat": 31.270961084
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288657104,
    "lat": 31.270783634
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.291155141,
    "lat": 31.270325695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291409633,
    "lat": 31.270434456
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291731096,
    "lat": 31.270537492
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.292079348,
    "lat": 31.270680598
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.292387417,
    "lat": 31.270325695
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.292065954,
    "lat": 31.270216935
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291684216,
    "lat": 31.270108174
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.29132257,
    "lat": 31.26998224
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.291054684,
    "lat": 31.269850582
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290833678,
    "lat": 31.27014252
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293304927,
    "lat": 31.271081292
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293592905,
    "lat": 31.270886669
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288282064,
    "lat": 31.271579296
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290016626,
    "lat": 31.26963306
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2898425,
    "lat": 31.269570093
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289601402,
    "lat": 31.269484228
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289494248,
    "lat": 31.269272429
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289273242,
    "lat": 31.269117873
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.288516464,
    "lat": 31.269346845
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.291731096,
    "lat": 31.266873915
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29329823,
    "lat": 31.263238819
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.289433974,
    "lat": 31.262334316
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.287377948,
    "lat": 31.261338209
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289915989,
    "lat": 31.263321079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289678981,
    "lat": 31.26321453
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289487618,
    "lat": 31.263465145
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289621045,
    "lat": 31.263589702
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289287478,
    "lat": 31.263688747
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289459528,
    "lat": 31.26376228
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2879606,
    "lat": 31.260868775
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.287203822,
    "lat": 31.260536735
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290699735,
    "lat": 31.257989149
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.290418455,
    "lat": 31.25787465
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290036717,
    "lat": 31.25778305
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.289726602,
    "lat": 31.256972679
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.290190195,
    "lat": 31.257164967
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.290908901,
    "lat": 31.257085238
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.291276483,
    "lat": 31.257132137
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.292816035,
    "lat": 31.257491074
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.291282387,
    "lat": 31.253609431
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298039606,
    "lat": 31.280090482
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298326323,
    "lat": 31.280150248
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298361288,
    "lat": 31.279857396
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298137509,
    "lat": 31.279713957
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298326323,
    "lat": 31.279397197
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298423515,
    "lat": 31.279166531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298610874,
    "lat": 31.278857717
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298657713,
    "lat": 31.278497432
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295318712,
    "lat": 31.277119187
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296362568,
    "lat": 31.276541576
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296817582,
    "lat": 31.276713144
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.29226744,
    "lat": 31.276821803
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.292126921,
    "lat": 31.276478668
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29830307,
    "lat": 31.276307099
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298456972,
    "lat": 31.275998275
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298998974,
    "lat": 31.27558079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298523886,
    "lat": 31.275449253
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297874821,
    "lat": 31.275220492
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297533561,
    "lat": 31.275048922
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297265905,
    "lat": 31.274728656
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297654006,
    "lat": 31.274717218
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297988575,
    "lat": 31.274900227
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295539528,
    "lat": 31.27332176
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295285255,
    "lat": 31.273813604
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294549203,
    "lat": 31.274334041
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294455523,
    "lat": 31.274562803
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294857006,
    "lat": 31.273847918
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295037674,
    "lat": 31.273533367
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29521165,
    "lat": 31.27312159
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297854747,
    "lat": 31.274442703
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298296379,
    "lat": 31.27433976
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296503087,
    "lat": 31.272452448
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296770743,
    "lat": 31.27200635
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296944719,
    "lat": 31.27171467
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297152152,
    "lat": 31.271177061
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297466647,
    "lat": 31.270507905
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294703105,
    "lat": 31.271445866
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.294903846,
    "lat": 31.266841761
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295586367,
    "lat": 31.266115379
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295927628,
    "lat": 31.265709288
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297439881,
    "lat": 31.266635858
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297667388,
    "lat": 31.266327003
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.29965473,
    "lat": 31.267104859
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298530577,
    "lat": 31.265612055
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298236156,
    "lat": 31.265474785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29671052,
    "lat": 31.26477699
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295900863,
    "lat": 31.265274598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296235432,
    "lat": 31.265474785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.293846607,
    "lat": 31.2635015
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.29584064,
    "lat": 31.263753167
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.298577417,
    "lat": 31.260612993
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297419807,
    "lat": 31.261310819
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297640623,
    "lat": 31.261562492
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.297995266,
    "lat": 31.261327979
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.300698586,
    "lat": 31.276089779
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.306045003,
    "lat": 31.274225378
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.306655161,
    "lat": 31.274452933
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.307529474,
    "lat": 31.274684843
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307439028,
    "lat": 31.274399055
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.306954764,
    "lat": 31.274262895
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.308166708,
    "lat": 31.273911515
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.309096007,
    "lat": 31.274460546
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.309096007,
    "lat": 31.274947352
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.308869036,
    "lat": 31.274105506
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.30984116,
    "lat": 31.274804605
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.309845443,
    "lat": 31.275068138
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.300671821,
    "lat": 31.268397459
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307115625,
    "lat": 31.268792099
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307503725,
    "lat": 31.268935084
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.3079119,
    "lat": 31.269083788
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305971398,
    "lat": 31.268609078
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308025653,
    "lat": 31.269735796
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308373605,
    "lat": 31.269821586
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308386988,
    "lat": 31.268992278
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30902267,
    "lat": 31.269221053
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308775089,
    "lat": 31.269118104
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309015978,
    "lat": 31.268712027
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30882862,
    "lat": 31.269655725
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308681409,
    "lat": 31.269970289
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309076201,
    "lat": 31.270073237
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306131991,
    "lat": 31.268305948
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.305054678,
    "lat": 31.268111487
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.304659886,
    "lat": 31.267962781
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307376589,
    "lat": 31.268002817
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30767101,
    "lat": 31.268060012
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308099259,
    "lat": 31.267934184
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308413754,
    "lat": 31.267997098
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.304700035,
    "lat": 31.264004834
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303575882,
    "lat": 31.263552977
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.303127559,
    "lat": 31.263821804
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.300993007,
    "lat": 31.264468129
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301729059,
    "lat": 31.264862785
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301802665,
    "lat": 31.264674036
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.301621997,
    "lat": 31.262677855
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308273235,
    "lat": 31.261671169
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30767101,
    "lat": 31.260979066
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.307269527,
    "lat": 31.260858949
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308473976,
    "lat": 31.27457996
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308273235,
    "lat": 31.268477531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.306386264,
    "lat": 31.262403306
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.314051984,
    "lat": 31.279765262
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.312760279,
    "lat": 31.280443726
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.314960214,
    "lat": 31.278408319
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.309100447,
    "lat": 31.268247873
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.308797703,
    "lat": 31.268092611
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.311556032,
    "lat": 31.267615324
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.31335231,
    "lat": 31.26821337
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.317180333,
    "lat": 31.276602864
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283044328,
    "lat": 31.279909005
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.281826626,
    "lat": 31.279661767
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.28101931,
    "lat": 31.28000675
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.280911668,
    "lat": 31.279794011
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.280077442,
    "lat": 31.280874951
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.281470062,
    "lat": 31.276068121
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.280608925,
    "lat": 31.273814116
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.284497496,
    "lat": 31.262830821
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.284726236,
    "lat": 31.26260079
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2855941,
    "lat": 31.254221554
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.283360526,
    "lat": 31.249022258
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285096255,
    "lat": 31.249545652
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272266661,
    "lat": 31.281173933
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272233023,
    "lat": 31.2808922
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.272656864,
    "lat": 31.280685213
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27312107,
    "lat": 31.275665624
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273336355,
    "lat": 31.275487374
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.273255623,
    "lat": 31.274780124
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274015845,
    "lat": 31.273635863
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274580967,
    "lat": 31.273032101
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.275018263,
    "lat": 31.273198855
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276054318,
    "lat": 31.272037324
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271863003,
    "lat": 31.267879845
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277971693,
    "lat": 31.264372009
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277722771,
    "lat": 31.264596285
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278260981,
    "lat": 31.264164986
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278361896,
    "lat": 31.264492773
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276955821,
    "lat": 31.265660148
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278442627,
    "lat": 31.263906205
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.278671991,
    "lat": 31.263626602
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.272085015,
    "lat": 31.261968204
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271802454,
    "lat": 31.262198236
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271546804,
    "lat": 31.262549034
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.271432435,
    "lat": 31.262065968
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27181591,
    "lat": 31.261720919
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.277318973,
    "lat": 31.260689263
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.27121715,
    "lat": 31.253209324
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270699123,
    "lat": 31.252985022
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25364087,
    "lat": 31.268020888
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26034449,
    "lat": 31.268142065
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259736907,
    "lat": 31.266536705
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261323486,
    "lat": 31.264471733
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261515218,
    "lat": 31.264164441
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260801018,
    "lat": 31.264631524
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260695565,
    "lat": 31.264774926
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266687178,
    "lat": 31.265750054
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.269654224,
    "lat": 31.263828468
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253975373,
    "lat": 31.262877904
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268743499,
    "lat": 31.255006698
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259770461,
    "lat": 31.253379928
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25982798,
    "lat": 31.253154554
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260000538,
    "lat": 31.253314365
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258428339,
    "lat": 31.253597105
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257555961,
    "lat": 31.253379928
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266902876,
    "lat": 31.249077251
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26279982,
    "lat": 31.248392903
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264702756,
    "lat": 31.248392903
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26492804,
    "lat": 31.248179811
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264530197,
    "lat": 31.248114245
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264865728,
    "lat": 31.246548825
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263887896,
    "lat": 31.246626687
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264434332,
    "lat": 31.245794792
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263734511,
    "lat": 31.245364499
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.264209047,
    "lat": 31.245667753
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266711144,
    "lat": 31.243811328
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26460689,
    "lat": 31.243639207
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266960395,
    "lat": 31.242930231
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268743499,
    "lat": 31.242213052
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261500838,
    "lat": 31.244958792
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26097837,
    "lat": 31.244766183
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260738705,
    "lat": 31.242409765
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262540982,
    "lat": 31.241057359
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262838166,
    "lat": 31.240684419
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26163505,
    "lat": 31.240733598
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270037687,
    "lat": 31.242471237
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.268580527,
    "lat": 31.240418033
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265162912,
    "lat": 31.238020523
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.267315099,
    "lat": 31.234647512
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.310454707,
    "lat": 31.286696491
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.233690171,
    "lat": 31.329177283
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23377645,
    "lat": 31.329353342
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.234049667,
    "lat": 31.329439324
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.23446189,
    "lat": 31.329508929
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25645703,
    "lat": 31.301739147
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245539954,
    "lat": 31.337567061
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.244598468,
    "lat": 31.338170706
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249094855,
    "lat": 31.325854934
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.24776275,
    "lat": 31.324566122
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236486013,
    "lat": 31.306769275
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235462858,
    "lat": 31.307097537
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.236092377,
    "lat": 31.305024404
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.235731693,
    "lat": 31.304871278
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.227771512,
    "lat": 31.325557197
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276956603,
    "lat": 31.313899282
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276294026,
    "lat": 31.313252653
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276387767,
    "lat": 31.312710776
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274848289,
    "lat": 31.318007943
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276080198,
    "lat": 31.318113079
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.271552467,
    "lat": 31.315601272
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.281866281,
    "lat": 31.311252799
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.276741588,
    "lat": 31.311620264
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.245657821,
    "lat": 31.329643326
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.237159051,
    "lat": 31.329525783
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.274311746,
    "lat": 31.306599675
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.270359046,
    "lat": 31.300385428
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.282138699,
    "lat": 31.290399495
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289657334,
    "lat": 31.271389783
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.289865628,
    "lat": 31.271004186
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295612179,
    "lat": 31.271184982
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.295794578,
    "lat": 31.27085873
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296030154,
    "lat": 31.270350954
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296286303,
    "lat": 31.269894193
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.296522528,
    "lat": 31.269434218
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265615956,
    "lat": 31.236199266
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265700175,
    "lat": 31.236315705
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26205545,
    "lat": 31.239966489
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261778884,
    "lat": 31.239851048
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.265328385,
    "lat": 31.241479422
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.263793132,
    "lat": 31.244821226
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26213632,
    "lat": 31.244965475
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262977044,
    "lat": 31.244547129
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26269648,
    "lat": 31.244323027
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.285176706,
    "lat": 31.265867887
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.280587584,
    "lat": 31.26127481
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.260997683,
    "lat": 31.264849254
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.252768339,
    "lat": 31.297385095
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248860324,
    "lat": 31.297317131
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251204972,
    "lat": 31.298880925
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255837574,
    "lat": 31.299822531
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255101117,
    "lat": 31.299991296
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254538234,
    "lat": 31.30090036
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.254691367,
    "lat": 31.300623606
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255440555,
    "lat": 31.301151841
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258971504,
    "lat": 31.30229011
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.25870169,
    "lat": 31.302962948
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259347378,
    "lat": 31.302780093
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.259440236,
    "lat": 31.302426135
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262562003,
    "lat": 31.302748859
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262392121,
    "lat": 31.303016479
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262242379,
    "lat": 31.303400918
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.262098617,
    "lat": 31.303769341
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.261675729,
    "lat": 31.303645841
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.2662246,
    "lat": 31.305108344
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.251674974,
    "lat": 31.302854123
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.250030497,
    "lat": 31.304595338
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.249840831,
    "lat": 31.304976971
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.266811431,
    "lat": 31.243127462
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.29195137,
    "lat": 31.286668177
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.248913019,
    "lat": 31.299481493
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.255648074,
    "lat": 31.305357966
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.25978294,
    "lat": 31.302730817
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.259864486,
    "lat": 31.302407029
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260277014,
    "lat": 31.302554578
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.26067515,
    "lat": 31.30329232
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.260828649,
    "lat": 31.30283738
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261236379,
    "lat": 31.302804591
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Rafah",
    "lng": 34.261389878,
    "lat": 31.302927548
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.26153858,
    "lat": 31.302907055
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.257864209,
    "lat": 31.302812788
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.258065675,
    "lat": 31.302546381
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.253139332,
    "lat": 31.295742489
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.290508062,
    "lat": 31.25690081
  },
  {
    "damage": "Severe Damage",
    "governorate": "Rafah",
    "lng": 34.270117838,
    "lat": 31.308450841
  },
  {
    "damage": "Destroyed",
    "governorate": "Rafah",
    "lng": 34.30437394,
    "lat": 31.286387587
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542182015,
    "lat": 31.542742814
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.524389467,
    "lat": 31.545228194
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494803026,
    "lat": 31.575551497
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.495103715,
    "lat": 31.575877932
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495448237,
    "lat": 31.576257572
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478773334,
    "lat": 31.569874885
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480276191,
    "lat": 31.570245818
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480273283,
    "lat": 31.569120861
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.485243711,
    "lat": 31.570107029
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480922518,
    "lat": 31.569277235
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483951125,
    "lat": 31.56218824
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486194488,
    "lat": 31.563922419
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485136865,
    "lat": 31.564221415
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.489057565,
    "lat": 31.564039886
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490436127,
    "lat": 31.560507246
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483654643,
    "lat": 31.555551529
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.495781454,
    "lat": 31.575386802
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.495475583,
    "lat": 31.575073245
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478694422,
    "lat": 31.570271873
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479584132,
    "lat": 31.56933104
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479508109,
    "lat": 31.569720189
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480134372,
    "lat": 31.569394251
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479014006,
    "lat": 31.570652598
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485469305,
    "lat": 31.564501893
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484664285,
    "lat": 31.561725945
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485783641,
    "lat": 31.564182356
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485410641,
    "lat": 31.563740095
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485655939,
    "lat": 31.563453899
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477070747,
    "lat": 31.571473177
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487419469,
    "lat": 31.560789459
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.489531696,
    "lat": 31.560565212
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.503824119,
    "lat": 31.555960106
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.47943123,
    "lat": 31.547892494
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479835629,
    "lat": 31.548214315
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545569803,
    "lat": 31.547315404
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.535402,
    "lat": 31.545541604
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.536767826,
    "lat": 31.526388709
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.539255187,
    "lat": 31.54333617
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.508332533,
    "lat": 31.551649709
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.509872572,
    "lat": 31.55003646
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506568467,
    "lat": 31.544216607
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488470443,
    "lat": 31.562920954
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486762505,
    "lat": 31.563686527
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490090269,
    "lat": 31.563139628
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490401091,
    "lat": 31.563115347
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484962465,
    "lat": 31.558023058
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.532089778,
    "lat": 31.543643298
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545457238,
    "lat": 31.547055667
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478952804,
    "lat": 31.569609158
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545710224,
    "lat": 31.547562076
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.503588881,
    "lat": 31.556794667
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.524079022,
    "lat": 31.562321963
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542194608,
    "lat": 31.551842868
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.536511336,
    "lat": 31.526640994
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542404868,
    "lat": 31.522488503
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.513182039,
    "lat": 31.532315292
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495872213,
    "lat": 31.519142208
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495860816,
    "lat": 31.518777475
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495487534,
    "lat": 31.518572313
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49534791,
    "lat": 31.518344355
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495689847,
    "lat": 31.519301779
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.499586945,
    "lat": 31.558022023
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498194649,
    "lat": 31.563653512
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.534269175,
    "lat": 31.530982242
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.534442678,
    "lat": 31.531361209
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.534919812,
    "lat": 31.531055296
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490329081,
    "lat": 31.549061964
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490017768,
    "lat": 31.549220779
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48011205,
    "lat": 31.56986907
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479420411,
    "lat": 31.570151534
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487279162,
    "lat": 31.577654214
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.493550049,
    "lat": 31.574106002
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494433179,
    "lat": 31.555153104
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.481750388,
    "lat": 31.555344481
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498546203,
    "lat": 31.572954063
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497895125,
    "lat": 31.573351449
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497448139,
    "lat": 31.571221077
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491957092,
    "lat": 31.547346867
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491227869,
    "lat": 31.552541985
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.550429184,
    "lat": 31.547218733
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.522690855,
    "lat": 31.559841142
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506624401,
    "lat": 31.561483657
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.509104697,
    "lat": 31.566653365
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.509822483,
    "lat": 31.55736153
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.516888149,
    "lat": 31.556968331
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.518146075,
    "lat": 31.565855292
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.522974838,
    "lat": 31.52470199
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.532748678,
    "lat": 31.520205782
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.528663916,
    "lat": 31.520117144
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526395289,
    "lat": 31.518144158
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.52972026,
    "lat": 31.546657107
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.528879042,
    "lat": 31.538123778
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486193875,
    "lat": 31.578991462
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.490881275,
    "lat": 31.577223481
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.491374166,
    "lat": 31.576983095
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.492141633,
    "lat": 31.576954812
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.491595176,
    "lat": 31.577234244
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491217038,
    "lat": 31.57785923
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497211161,
    "lat": 31.578233808
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478428265,
    "lat": 31.570682517
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478185216,
    "lat": 31.570826947
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479089388,
    "lat": 31.571238158
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.493908552,
    "lat": 31.580721082
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494063198,
    "lat": 31.581134461
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494881348,
    "lat": 31.58105715
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.500980055,
    "lat": 31.576732449
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.500600428,
    "lat": 31.576934941
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501342009,
    "lat": 31.577417898
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501633489,
    "lat": 31.577687622
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502451186,
    "lat": 31.577196585
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502070998,
    "lat": 31.579182779
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.487022149,
    "lat": 31.574217314
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495657524,
    "lat": 31.572348524
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496935599,
    "lat": 31.571030357
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501944943,
    "lat": 31.574564951
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502570476,
    "lat": 31.574176464
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502458726,
    "lat": 31.573898139
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.474946831,
    "lat": 31.567707386
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477464666,
    "lat": 31.568152486
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.476585793,
    "lat": 31.567693234
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.476877023,
    "lat": 31.567540295
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477360068,
    "lat": 31.567294438
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478264329,
    "lat": 31.56724261
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478007205,
    "lat": 31.566965529
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482504787,
    "lat": 31.568849947
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484852964,
    "lat": 31.567048218
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484365558,
    "lat": 31.565004655
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485121258,
    "lat": 31.565899687
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485524307,
    "lat": 31.565767706
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484292481,
    "lat": 31.566140041
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484759339,
    "lat": 31.568392554
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486682595,
    "lat": 31.56591495
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487317948,
    "lat": 31.565492342
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.505388037,
    "lat": 31.564052604
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.472951854,
    "lat": 31.564108778
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.473826703,
    "lat": 31.563724756
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477865702,
    "lat": 31.562825223
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483226457,
    "lat": 31.564659856
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483196463,
    "lat": 31.563821633
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482793484,
    "lat": 31.56372288
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483705139,
    "lat": 31.563201519
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484320887,
    "lat": 31.563709924
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483524344,
    "lat": 31.562463702
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48305058,
    "lat": 31.562706291
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483136769,
    "lat": 31.5528053
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480394242,
    "lat": 31.567316783
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480983987,
    "lat": 31.572596891
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487267519,
    "lat": 31.563889281
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.480407407,
    "lat": 31.572615876
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487240019,
    "lat": 31.562362023
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491912843,
    "lat": 31.547828668
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487208563,
    "lat": 31.561041353
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490079134,
    "lat": 31.560027679
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506488702,
    "lat": 31.555824208
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.492287045,
    "lat": 31.562076824
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490819693,
    "lat": 31.563007346
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49032433,
    "lat": 31.564389632
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.493673873,
    "lat": 31.56130215
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496083376,
    "lat": 31.561889275
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483839106,
    "lat": 31.555113394
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486835354,
    "lat": 31.557505185
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487550765,
    "lat": 31.557269317
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490944017,
    "lat": 31.555987043
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491803492,
    "lat": 31.55593087
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.50351594,
    "lat": 31.555242308
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.504656752,
    "lat": 31.555324365
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490231315,
    "lat": 31.552184389
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.493321748,
    "lat": 31.551399846
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.503139661,
    "lat": 31.555090536
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.481131984,
    "lat": 31.550017289
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494438509,
    "lat": 31.547389567
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485653892,
    "lat": 31.580335537
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490952386,
    "lat": 31.57760857
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.493706218,
    "lat": 31.580441645
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494108343,
    "lat": 31.580252338
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.491198478,
    "lat": 31.577461311
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491979792,
    "lat": 31.576642332
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491968483,
    "lat": 31.578318009
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495858874,
    "lat": 31.575985851
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496237313,
    "lat": 31.575703104
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497294662,
    "lat": 31.574541134
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496813941,
    "lat": 31.574979563
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498047166,
    "lat": 31.575275214
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497513059,
    "lat": 31.575646057
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49943851,
    "lat": 31.575340276
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49805449,
    "lat": 31.573670988
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498840178,
    "lat": 31.573226613
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.50094505,
    "lat": 31.577212853
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501277646,
    "lat": 31.577016839
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501974831,
    "lat": 31.57787239
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502592443,
    "lat": 31.57750438
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.503278855,
    "lat": 31.579528081
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.507784228,
    "lat": 31.570711325
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506119147,
    "lat": 31.575184788
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.50833163,
    "lat": 31.570691071
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506484731,
    "lat": 31.576654772
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.507203646,
    "lat": 31.576117063
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506068704,
    "lat": 31.576881468
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479818489,
    "lat": 31.569506363
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494835067,
    "lat": 31.572148723
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.495086617,
    "lat": 31.571742592
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49661343,
    "lat": 31.571871344
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496350035,
    "lat": 31.571570049
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497071189,
    "lat": 31.571805102
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497390061,
    "lat": 31.57150812
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501899003,
    "lat": 31.574185083
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.476952188,
    "lat": 31.568022592
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477871431,
    "lat": 31.567911948
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477673771,
    "lat": 31.568475198
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.477055688,
    "lat": 31.568359134
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482577601,
    "lat": 31.568242941
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482273509,
    "lat": 31.568015576
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485338985,
    "lat": 31.566991508
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482796184,
    "lat": 31.568665906
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48444114,
    "lat": 31.566473125
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484969793,
    "lat": 31.566528005
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482275216,
    "lat": 31.569191341
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484746186,
    "lat": 31.566152929
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485488181,
    "lat": 31.566257494
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485901073,
    "lat": 31.566130521
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484569578,
    "lat": 31.565115492
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485608384,
    "lat": 31.565255624
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486257335,
    "lat": 31.564880301
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486374081,
    "lat": 31.565197244
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486181667,
    "lat": 31.5656959
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487587629,
    "lat": 31.565520891
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486598276,
    "lat": 31.565610932
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487770774,
    "lat": 31.565378891
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487343629,
    "lat": 31.566308038
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487696166,
    "lat": 31.566115802
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488129327,
    "lat": 31.565227945
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488534892,
    "lat": 31.565173745
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486268992,
    "lat": 31.568407867
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484574186,
    "lat": 31.568017537
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488132878,
    "lat": 31.568315128
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.499709819,
    "lat": 31.569888055
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.472627133,
    "lat": 31.564367854
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.473300971,
    "lat": 31.563944869
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483044946,
    "lat": 31.563675621
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483433061,
    "lat": 31.563412166
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483061356,
    "lat": 31.563998586
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483658471,
    "lat": 31.564360914
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483836177,
    "lat": 31.564096146
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484105324,
    "lat": 31.563931646
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482924975,
    "lat": 31.562336023
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483408928,
    "lat": 31.5621646
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.484693567,
    "lat": 31.561222714
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48709628,
    "lat": 31.564448264
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486708365,
    "lat": 31.564175356
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487412756,
    "lat": 31.562686054
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487560056,
    "lat": 31.562963029
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487609019,
    "lat": 31.563744481
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.481231044,
    "lat": 31.57270935
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487753081,
    "lat": 31.563996195
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487017972,
    "lat": 31.563034269
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487446483,
    "lat": 31.564148003
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487873218,
    "lat": 31.562310338
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487987953,
    "lat": 31.563743892
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487960503,
    "lat": 31.563119351
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49265446,
    "lat": 31.545813433
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490917671,
    "lat": 31.544405454
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.492320214,
    "lat": 31.547892377
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.492694747,
    "lat": 31.547873936
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486635022,
    "lat": 31.5627403
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496984166,
    "lat": 31.562724984
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490469197,
    "lat": 31.564630195
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491759259,
    "lat": 31.563698641
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.489740331,
    "lat": 31.561977998
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494410492,
    "lat": 31.556477712
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490877087,
    "lat": 31.561811707
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.491876444,
    "lat": 31.56228393
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494430711,
    "lat": 31.554479875
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490434726,
    "lat": 31.561923823
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490336121,
    "lat": 31.561623166
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490855042,
    "lat": 31.561228514
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.493087773,
    "lat": 31.562800573
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.492829063,
    "lat": 31.562495815
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.493263477,
    "lat": 31.561407107
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497346744,
    "lat": 31.558006872
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.49343529,
    "lat": 31.560851118
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.493172953,
    "lat": 31.560632225
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490688915,
    "lat": 31.559381367
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502318966,
    "lat": 31.564221109
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.476712467,
    "lat": 31.558969953
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.47695028,
    "lat": 31.558661847
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.476219101,
    "lat": 31.559206264
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483280813,
    "lat": 31.557251773
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486429425,
    "lat": 31.558568016
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48716418,
    "lat": 31.557485422
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486619935,
    "lat": 31.555684015
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486662398,
    "lat": 31.55596065
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490603484,
    "lat": 31.556234702
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488933881,
    "lat": 31.557918932
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483909459,
    "lat": 31.552238569
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483966119,
    "lat": 31.552511041
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.492561997,
    "lat": 31.553892471
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.493154855,
    "lat": 31.547671316
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49307163,
    "lat": 31.548109778
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498402346,
    "lat": 31.558131584
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.498126778,
    "lat": 31.555632824
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.534716516,
    "lat": 31.545387997
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.534313713,
    "lat": 31.545587484
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.541836623,
    "lat": 31.542913414
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.538511462,
    "lat": 31.543730842
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.550763612,
    "lat": 31.545789421
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.550514829,
    "lat": 31.545930498
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.532078803,
    "lat": 31.529648681
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.541614478,
    "lat": 31.548472435
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.541496328,
    "lat": 31.548114236
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.548009901,
    "lat": 31.543000108
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545731798,
    "lat": 31.543876613
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545479361,
    "lat": 31.544118943
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.545226544,
    "lat": 31.544338331
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.546116975,
    "lat": 31.543560568
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.541950552,
    "lat": 31.542489885
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542929983,
    "lat": 31.54293368
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542431564,
    "lat": 31.543346138
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.5419976,
    "lat": 31.543256317
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542666708,
    "lat": 31.543215468
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.541697354,
    "lat": 31.542686327
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.546581426,
    "lat": 31.542822877
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.538581672,
    "lat": 31.543491121
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.539682927,
    "lat": 31.543578557
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.539884783,
    "lat": 31.543490117
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526155459,
    "lat": 31.545725144
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.524732938,
    "lat": 31.54489565
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.525419713,
    "lat": 31.544928542
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526708566,
    "lat": 31.546174723
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.521820559,
    "lat": 31.563088227
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.519642224,
    "lat": 31.562073604
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.519107445,
    "lat": 31.562067528
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.521856211,
    "lat": 31.560825056
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.522151409,
    "lat": 31.559982717
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526044603,
    "lat": 31.561503102
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.505670222,
    "lat": 31.556605387
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.505474136,
    "lat": 31.555921837
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.508294206,
    "lat": 31.556155764
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.487317818,
    "lat": 31.561239974
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.488445151,
    "lat": 31.564214336
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.48874075,
    "lat": 31.564142727
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478506273,
    "lat": 31.55828977
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.478707373,
    "lat": 31.558498138
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479055959,
    "lat": 31.557963236
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.500665613,
    "lat": 31.55786222
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.501122752,
    "lat": 31.557963505
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.475766213,
    "lat": 31.557131618
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486712859,
    "lat": 31.554642137
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482775725,
    "lat": 31.565975063
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.482785126,
    "lat": 31.565133247
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491441887,
    "lat": 31.562396053
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491212055,
    "lat": 31.562153423
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.479244322,
    "lat": 31.569867272
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.540186559,
    "lat": 31.543356995
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.494275646,
    "lat": 31.581348675
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506863849,
    "lat": 31.576484465
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.485776963,
    "lat": 31.566547738
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.486185713,
    "lat": 31.56569764
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506796372,
    "lat": 31.554060343
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490556421,
    "lat": 31.561389883
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.496094092,
    "lat": 31.551889412
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.490058942,
    "lat": 31.561473939
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.511869384,
    "lat": 31.558922127
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.505124034,
    "lat": 31.5486121
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542233445,
    "lat": 31.543539304
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.483453347,
    "lat": 31.544300119
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.4832594,
    "lat": 31.544606388
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.546751261,
    "lat": 31.544011552
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.512727884,
    "lat": 31.532836185
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.488508411,
    "lat": 31.522097801
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.504641949,
    "lat": 31.564218363
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.504465081,
    "lat": 31.563978272
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502783359,
    "lat": 31.563765263
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.502351464,
    "lat": 31.563905742
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.506449134,
    "lat": 31.561886013
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506429832,
    "lat": 31.561427956
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.511950345,
    "lat": 31.564827367
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.506959235,
    "lat": 31.565699358
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.508971039,
    "lat": 31.563595648
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.511390401,
    "lat": 31.564866574
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.511527518,
    "lat": 31.561742695
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510724994,
    "lat": 31.559857667
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.512321031,
    "lat": 31.568389284
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.511243655,
    "lat": 31.557908886
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.513050263,
    "lat": 31.558432016
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.511614189,
    "lat": 31.557561294
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.511815171,
    "lat": 31.556252247
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.509021874,
    "lat": 31.552833854
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.509962901,
    "lat": 31.55481673
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.516942179,
    "lat": 31.556541945
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.508887442,
    "lat": 31.555051987
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510568869,
    "lat": 31.550688348
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510095676,
    "lat": 31.550382704
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.509420061,
    "lat": 31.551558865
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.506054183,
    "lat": 31.550229037
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.519781669,
    "lat": 31.564376537
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.519761781,
    "lat": 31.563400445
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.520072939,
    "lat": 31.562079985
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.523836954,
    "lat": 31.554547629
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.523299315,
    "lat": 31.559902181
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.53381095,
    "lat": 31.543115251
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.548304822,
    "lat": 31.526321274
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.54245086,
    "lat": 31.522019497
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.546147441,
    "lat": 31.524023025
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.533230298,
    "lat": 31.524202124
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.534560989,
    "lat": 31.522282919
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.530935147,
    "lat": 31.524186486
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.530758723,
    "lat": 31.522174245
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.523331786,
    "lat": 31.524299796
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.522497233,
    "lat": 31.524274659
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.523246319,
    "lat": 31.525038828
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.523437362,
    "lat": 31.525300254
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.523643486,
    "lat": 31.525471187
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.503190271,
    "lat": 31.54603563
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.521809909,
    "lat": 31.532048273
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.542855601,
    "lat": 31.55004647
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.508890157,
    "lat": 31.553095599
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.50877195,
    "lat": 31.552631213
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497101094,
    "lat": 31.518721118
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.533659522,
    "lat": 31.51814117
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.531357295,
    "lat": 31.519616721
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.528906938,
    "lat": 31.520010569
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.529979607,
    "lat": 31.515818915
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.527403899,
    "lat": 31.517647542
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526990637,
    "lat": 31.518302858
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526734537,
    "lat": 31.518493751
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526654927,
    "lat": 31.517981264
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.533937787,
    "lat": 31.517923776
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.500177313,
    "lat": 31.558000146
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.53835923,
    "lat": 31.523299677
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49565915,
    "lat": 31.519085191
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.497080088,
    "lat": 31.518526061
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.49280175,
    "lat": 31.586281704
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.491217973,
    "lat": 31.558689319
  },
  {
    "damage": "Severe Damage",
    "governorate": "North Gaza",
    "lng": 34.521767375,
    "lat": 31.560510714
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.554968592,
    "lat": 31.529000032
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.543478693,
    "lat": 31.524638899
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.531042812,
    "lat": 31.544357581
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.533208287,
    "lat": 31.544740902
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.526954639,
    "lat": 31.546312676
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.523977803,
    "lat": 31.543169249
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.525490069,
    "lat": 31.530166751
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.525176007,
    "lat": 31.511553912
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.525501792,
    "lat": 31.511741848
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.537951493,
    "lat": 31.52013552
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510816131,
    "lat": 31.518357129
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510329541,
    "lat": 31.517985835
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.510410452,
    "lat": 31.518139652
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.505988243,
    "lat": 31.522321591
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.500758114,
    "lat": 31.52269788
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.507222897,
    "lat": 31.521896829
  },
  {
    "damage": "Moderate Damage",
    "governorate": "North Gaza",
    "lng": 34.523645953,
    "lat": 31.523366968
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.52760126,
    "lat": 31.517836202
  },
  {
    "damage": "Destroyed",
    "governorate": "North Gaza",
    "lng": 34.527228802,
    "lat": 31.517414084
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.474052207,
    "lat": 31.486930858
  },
  {
    "damage": "Severe Damage",
    "governorate": "Gaza",
    "lng": 34.489299502,
    "lat": 31.498619066
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435343167,
    "lat": 31.496782228
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431213244,
    "lat": 31.480965939
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.459367534,
    "lat": 31.469170333
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441382805,
    "lat": 31.480949999
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.456694036,
    "lat": 31.477189511
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445903277,
    "lat": 31.467285356
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445578845,
    "lat": 31.467613772
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.443243641,
    "lat": 31.461826795
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421574605,
    "lat": 31.491388013
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.408950532,
    "lat": 31.485707381
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433787717,
    "lat": 31.49124877
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433901806,
    "lat": 31.478479878
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433695285,
    "lat": 31.478347115
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435086842,
    "lat": 31.479335464
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434821315,
    "lat": 31.479158446
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434595126,
    "lat": 31.4790306
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434398439,
    "lat": 31.479025683
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434472197,
    "lat": 31.478845972
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434064072,
    "lat": 31.478845972
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429479257,
    "lat": 31.485364716
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441187839,
    "lat": 31.48768126
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.44096301,
    "lat": 31.487420933
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440750015,
    "lat": 31.487361767
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440588755,
    "lat": 31.48692002
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.446228733,
    "lat": 31.488320247
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445261402,
    "lat": 31.467852811
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.407395391,
    "lat": 31.470233932
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.402652015,
    "lat": 31.481535212
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433489265,
    "lat": 31.477633549
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430468836,
    "lat": 31.483898847
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.451722702,
    "lat": 31.478013285
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431245359,
    "lat": 31.495477837
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434910064,
    "lat": 31.491812561
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431195173,
    "lat": 31.492737884
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430954914,
    "lat": 31.492866594
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429770835,
    "lat": 31.493794994
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431101074,
    "lat": 31.490349255
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430543489,
    "lat": 31.490215022
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430584792,
    "lat": 31.48986395
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430342139,
    "lat": 31.490003346
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430176929,
    "lat": 31.488686826
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.427553856,
    "lat": 31.495189538
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.428876191,
    "lat": 31.478526848
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430674987,
    "lat": 31.484020982
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.427975426,
    "lat": 31.471100211
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445488926,
    "lat": 31.460896104
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421928746,
    "lat": 31.449074078
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420274413,
    "lat": 31.44634912
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421722315,
    "lat": 31.449258192
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421409879,
    "lat": 31.449408831
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421203448,
    "lat": 31.449615262
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421008175,
    "lat": 31.449810535
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429282063,
    "lat": 31.4788
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434604224,
    "lat": 31.455249761
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.451193976,
    "lat": 31.485396382
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42778685,
    "lat": 31.471320216
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434485698,
    "lat": 31.491652884
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430846307,
    "lat": 31.490114852
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431484199,
    "lat": 31.494958358
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421421804,
    "lat": 31.44847726
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421110658,
    "lat": 31.448609981
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420877298,
    "lat": 31.448815698
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420620603,
    "lat": 31.449014779
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420363907,
    "lat": 31.449140863
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.453176727,
    "lat": 31.540409675
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.453398208,
    "lat": 31.539764428
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.443584345,
    "lat": 31.467075757
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.453882752,
    "lat": 31.540098349
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.497361533,
    "lat": 31.501505862
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436760689,
    "lat": 31.49450833
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436324309,
    "lat": 31.494357546
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436409921,
    "lat": 31.493385598
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.408447329,
    "lat": 31.485869445
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.406981321,
    "lat": 31.485652976
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430483092,
    "lat": 31.480817565
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438269547,
    "lat": 31.477566309
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431989031,
    "lat": 31.478037334
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434347764,
    "lat": 31.477025436
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434652945,
    "lat": 31.476234883
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435462958,
    "lat": 31.475604868
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.446994227,
    "lat": 31.463687303
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.447266074,
    "lat": 31.464565239
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438647212,
    "lat": 31.48129674
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.447784082,
    "lat": 31.465899159
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.459497408,
    "lat": 31.465556819
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.443073633,
    "lat": 31.45350027
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444562896,
    "lat": 31.476066866
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.457129741,
    "lat": 31.485834606
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.442987951,
    "lat": 31.467515857
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.443500335,
    "lat": 31.467808388
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436046267,
    "lat": 31.462491007
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431197167,
    "lat": 31.463565243
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440248877,
    "lat": 31.462614429
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431472519,
    "lat": 31.46314255
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435308601,
    "lat": 31.46301238
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434477405,
    "lat": 31.463063601
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440505571,
    "lat": 31.462435007
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.439555446,
    "lat": 31.452847607
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440453875,
    "lat": 31.452283433
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441514521,
    "lat": 31.45166603
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.427955137,
    "lat": 31.495044398
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426482293,
    "lat": 31.495955778
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426533372,
    "lat": 31.492497804
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426238085,
    "lat": 31.495774908
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426749197,
    "lat": 31.495593739
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.427018782,
    "lat": 31.492222819
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426476434,
    "lat": 31.495569893
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432004794,
    "lat": 31.497515097
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432170107,
    "lat": 31.497717572
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422535388,
    "lat": 31.490322829
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421875633,
    "lat": 31.490951825
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422115445,
    "lat": 31.490377589
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422414769,
    "lat": 31.49055755
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422135138,
    "lat": 31.490736613
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.407585546,
    "lat": 31.486128772
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.409078386,
    "lat": 31.484696463
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.408876088,
    "lat": 31.484943697
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.407773139,
    "lat": 31.484693425
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.408020538,
    "lat": 31.483993221
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.407459056,
    "lat": 31.485179672
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.502955713,
    "lat": 31.504411019
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.502691556,
    "lat": 31.50453604
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.50235279,
    "lat": 31.504703407
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.49268375,
    "lat": 31.506174687
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445142943,
    "lat": 31.500249198
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.443936387,
    "lat": 31.498302749
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432850464,
    "lat": 31.498445455
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433522995,
    "lat": 31.496242651
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436000576,
    "lat": 31.493701075
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444259921,
    "lat": 31.494059112
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434966299,
    "lat": 31.493581416
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433839225,
    "lat": 31.493344911
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431897924,
    "lat": 31.495813143
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429834939,
    "lat": 31.49529379
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.4332764,
    "lat": 31.49837421
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431700397,
    "lat": 31.494333862
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430594696,
    "lat": 31.494329609
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43408686,
    "lat": 31.491888397
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434567377,
    "lat": 31.492077172
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435193766,
    "lat": 31.491502267
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433760794,
    "lat": 31.490867297
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43382944,
    "lat": 31.492128656
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.4335806,
    "lat": 31.49167388
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432645307,
    "lat": 31.491373557
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43320305,
    "lat": 31.491167621
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433460471,
    "lat": 31.491098975
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433632084,
    "lat": 31.490978846
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432988534,
    "lat": 31.491330653
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433657826,
    "lat": 31.492995304
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433348922,
    "lat": 31.493184079
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433151566,
    "lat": 31.492935239
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433022856,
    "lat": 31.492677819
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43294563,
    "lat": 31.492489044
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432782598,
    "lat": 31.49230885
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432731114,
    "lat": 31.491931301
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432018918,
    "lat": 31.492240205
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432319241,
    "lat": 31.492223043
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432713952,
    "lat": 31.493355692
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43230208,
    "lat": 31.493398596
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432533758,
    "lat": 31.493638854
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432120605,
    "lat": 31.493654095
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432842349,
    "lat": 31.494024642
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430930913,
    "lat": 31.491922623
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430800462,
    "lat": 31.493424338
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43103214,
    "lat": 31.493664596
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43175159,
    "lat": 31.489987857
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.436937648,
    "lat": 31.492702725
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426330026,
    "lat": 31.49536544
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426352481,
    "lat": 31.495114686
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.425712497,
    "lat": 31.495597482
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.425540337,
    "lat": 31.495717245
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.4267833,
    "lat": 31.491944523
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426419374,
    "lat": 31.492147893
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.425969817,
    "lat": 31.49213719
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426119669,
    "lat": 31.491876732
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426601337,
    "lat": 31.491716176
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422372457,
    "lat": 31.491981388
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.4216362,
    "lat": 31.490712392
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421139376,
    "lat": 31.491089499
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.418757016,
    "lat": 31.491095485
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.419892299,
    "lat": 31.491953574
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.424360246,
    "lat": 31.497799986
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.406987255,
    "lat": 31.488110922
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440221831,
    "lat": 31.483265314
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441316464,
    "lat": 31.482462583
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441827293,
    "lat": 31.48194512
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438165247,
    "lat": 31.483782777
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.439616791,
    "lat": 31.48368802
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444757833,
    "lat": 31.480762895
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43583706,
    "lat": 31.480615325
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432070629,
    "lat": 31.481119758
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435587128,
    "lat": 31.477469479
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434893532,
    "lat": 31.475540013
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434993102,
    "lat": 31.475439658
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.432229972,
    "lat": 31.478175014
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433562522,
    "lat": 31.478991263
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433365836,
    "lat": 31.478769991
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433174066,
    "lat": 31.477781642
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.434499551,
    "lat": 31.476155006
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438570775,
    "lat": 31.478649971
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43801408,
    "lat": 31.478543395
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429473505,
    "lat": 31.479259474
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426204041,
    "lat": 31.481132465
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438742611,
    "lat": 31.478803013
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43093911,
    "lat": 31.480774114
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431736621,
    "lat": 31.481275038
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430632927,
    "lat": 31.486615787
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431988433,
    "lat": 31.485349739
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431548043,
    "lat": 31.484462586
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431390373,
    "lat": 31.487056374
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.43139069,
    "lat": 31.484787444
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.431238413,
    "lat": 31.484625015
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.430989694,
    "lat": 31.484817899
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.437475277,
    "lat": 31.487742129
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440489687,
    "lat": 31.489101231
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438103839,
    "lat": 31.486810704
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441936862,
    "lat": 31.489164683
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.442039821,
    "lat": 31.488687073
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.441353502,
    "lat": 31.488414912
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.442051654,
    "lat": 31.48787059
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.442489478,
    "lat": 31.488698906
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.442987078,
    "lat": 31.487058228
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444967516,
    "lat": 31.48654524
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.446594947,
    "lat": 31.487997725
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.447506706,
    "lat": 31.487231603
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429525703,
    "lat": 31.470972541
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.428668491,
    "lat": 31.471647367
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429224767,
    "lat": 31.471227881
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.428323593,
    "lat": 31.471601771
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.428458748,
    "lat": 31.470635128
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429926951,
    "lat": 31.468601529
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42956218,
    "lat": 31.468382666
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.429173208,
    "lat": 31.468283816
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445345125,
    "lat": 31.465480664
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444242105,
    "lat": 31.466557083
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444753744,
    "lat": 31.466101258
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.44243291,
    "lat": 31.467952263
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.445195078,
    "lat": 31.471132967
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.444208871,
    "lat": 31.471909096
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.414533548,
    "lat": 31.482359837
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.415448779,
    "lat": 31.460691655
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.415263394,
    "lat": 31.46094656
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.414985316,
    "lat": 31.461108772
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.411347126,
    "lat": 31.46339133
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.407220747,
    "lat": 31.470608778
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.404160841,
    "lat": 31.470940799
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.403876063,
    "lat": 31.471147505
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.398772082,
    "lat": 31.47591019
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.402291112,
    "lat": 31.481756971
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.446038818,
    "lat": 31.46052249
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42225234,
    "lat": 31.449358618
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422575935,
    "lat": 31.449632
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421990117,
    "lat": 31.449626421
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42175579,
    "lat": 31.449765901
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422363924,
    "lat": 31.449860748
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.422107281,
    "lat": 31.450078337
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42154378,
    "lat": 31.449972332
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421677681,
    "lat": 31.448800697
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421487988,
    "lat": 31.448951336
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42111418,
    "lat": 31.449141029
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420863116,
    "lat": 31.449280509
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420706898,
    "lat": 31.449464623
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420651106,
    "lat": 31.45005602
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420422358,
    "lat": 31.450256872
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420344249,
    "lat": 31.449632
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420148976,
    "lat": 31.449827272
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420109922,
    "lat": 31.44934746
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421454513,
    "lat": 31.451060279
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421103022,
    "lat": 31.451367135
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42524618,
    "lat": 31.444104517
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.42242298,
    "lat": 31.43415035
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.424790734,
    "lat": 31.509757853
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.424432921,
    "lat": 31.509348923
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433416385,
    "lat": 31.492042047
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.433707816,
    "lat": 31.49182593
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.458180257,
    "lat": 31.487723351
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.480473921,
    "lat": 31.492572997
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.451737166,
    "lat": 31.485678811
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.451541173,
    "lat": 31.485512351
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.426512587,
    "lat": 31.495237631
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440390139,
    "lat": 31.486258882
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.464452524,
    "lat": 31.48090766
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.466884711,
    "lat": 31.475099267
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.437733403,
    "lat": 31.481773587
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435792731,
    "lat": 31.494482897
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.421507614,
    "lat": 31.491138197
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.438208985,
    "lat": 31.492363388
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435188726,
    "lat": 31.481569613
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.459885219,
    "lat": 31.472876542
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.446944777,
    "lat": 31.466511152
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.440760482,
    "lat": 31.45679209
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.417015932,
    "lat": 31.432822483
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.416568288,
    "lat": 31.432800812
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386258003,
    "lat": 31.428163668
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36715466,
    "lat": 31.3758174
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367330989,
    "lat": 31.37613592
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374620049,
    "lat": 31.400220126
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374809117,
    "lat": 31.400420061
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387523194,
    "lat": 31.461604797
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377320524,
    "lat": 31.459828616
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384959406,
    "lat": 31.462353978
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.398437557,
    "lat": 31.421721775
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397749267,
    "lat": 31.41956681
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.392466693,
    "lat": 31.419938822
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382784747,
    "lat": 31.43571098
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373277048,
    "lat": 31.432050097
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.384328119,
    "lat": 31.4137595
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.384039075,
    "lat": 31.413393945
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378490411,
    "lat": 31.429189643
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.32896727,
    "lat": 31.414602388
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.328687515,
    "lat": 31.414257357
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329215941,
    "lat": 31.414105046
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329523671,
    "lat": 31.413819075
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.329837618,
    "lat": 31.413837725
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.329315409,
    "lat": 31.414307092
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386249528,
    "lat": 31.408237715
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381385891,
    "lat": 31.398050908
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370942185,
    "lat": 31.404717882
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.350968602,
    "lat": 31.405045448
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.386361483,
    "lat": 31.41116216
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381667307,
    "lat": 31.404367071
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381957204,
    "lat": 31.404739236
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37277438,
    "lat": 31.387946853
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377027985,
    "lat": 31.399819077
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37655312,
    "lat": 31.403423976
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36575204,
    "lat": 31.384647574
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36696499,
    "lat": 31.380376786
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365726913,
    "lat": 31.409878924
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366743042,
    "lat": 31.41034175
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354232712,
    "lat": 31.390974691
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35390031,
    "lat": 31.391158159
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353535532,
    "lat": 31.391320043
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.344340322,
    "lat": 31.39367705
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.338353237,
    "lat": 31.388867356
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.330098,
    "lat": 31.40503563
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332441549,
    "lat": 31.40739163
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331990716,
    "lat": 31.407748847
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.331594082,
    "lat": 31.408071574
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354849631,
    "lat": 31.386762867
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355039955,
    "lat": 31.387046486
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353916673,
    "lat": 31.38597545
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354125656,
    "lat": 31.385688099
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354510035,
    "lat": 31.385971718
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354528694,
    "lat": 31.386520298
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.320084422,
    "lat": 31.394769754
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332191029,
    "lat": 31.392285477
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332567962,
    "lat": 31.392165356
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332808204,
    "lat": 31.391639307
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332472693,
    "lat": 31.391258233
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380133186,
    "lat": 31.405338613
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381266773,
    "lat": 31.405418946
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38073122,
    "lat": 31.405343076
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380472369,
    "lat": 31.40506191
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.380659813,
    "lat": 31.405981276
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.329973627,
    "lat": 31.397412965
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.330712568,
    "lat": 31.39822778
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.320173769,
    "lat": 31.399502789
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.319461085,
    "lat": 31.399508513
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367231483,
    "lat": 31.396315977
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355227672,
    "lat": 31.396755592
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35549692,
    "lat": 31.396586292
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355882436,
    "lat": 31.396337441
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343507784,
    "lat": 31.393470325
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.38149401,
    "lat": 31.405969106
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354930436,
    "lat": 31.386311396
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382515665,
    "lat": 31.402707074
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396932612,
    "lat": 31.409335384
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.348214057,
    "lat": 31.390866991
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367101752,
    "lat": 31.381925138
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381343395,
    "lat": 31.448940596
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383132501,
    "lat": 31.461349613
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.361636108,
    "lat": 31.438787692
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367849491,
    "lat": 31.439062645
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.417208507,
    "lat": 31.437533867
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396590551,
    "lat": 31.42647578
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.393785996,
    "lat": 31.422699792
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379187999,
    "lat": 31.431720056
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355955678,
    "lat": 31.434952484
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.347271529,
    "lat": 31.424270207
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377809377,
    "lat": 31.420366094
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370857329,
    "lat": 31.394014605
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370663046,
    "lat": 31.394431176
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372443524,
    "lat": 31.395517259
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.404101145,
    "lat": 31.416962965
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.405843356,
    "lat": 31.416843566
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.395235568,
    "lat": 31.418584434
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355750585,
    "lat": 31.435077702
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397111019,
    "lat": 31.415335644
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372318031,
    "lat": 31.426597431
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378411818,
    "lat": 31.411580616
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381331237,
    "lat": 31.403577696
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381057754,
    "lat": 31.403287582
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376272713,
    "lat": 31.404467954
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378668664,
    "lat": 31.402002527
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365354351,
    "lat": 31.409394708
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355382361,
    "lat": 31.400912973
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355656852,
    "lat": 31.401326695
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355588158,
    "lat": 31.401210297
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355757985,
    "lat": 31.401494615
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355859118,
    "lat": 31.401605289
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.348412564,
    "lat": 31.404319256
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383505892,
    "lat": 31.404879454
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.380909972,
    "lat": 31.409578736
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.380682767,
    "lat": 31.409347245
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377759445,
    "lat": 31.390694342
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370626342,
    "lat": 31.393128773
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366584534,
    "lat": 31.395956201
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362473435,
    "lat": 31.392610775
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36271523,
    "lat": 31.393726703
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363393169,
    "lat": 31.3902493
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363256128,
    "lat": 31.390453517
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.340796418,
    "lat": 31.400307938
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.324234699,
    "lat": 31.4040537
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373589661,
    "lat": 31.405203517
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377604151,
    "lat": 31.406794577
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376212083,
    "lat": 31.40935825
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375974542,
    "lat": 31.408952452
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374344971,
    "lat": 31.408369934
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374445627,
    "lat": 31.40861233
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374667481,
    "lat": 31.40821176
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36817357,
    "lat": 31.382848416
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361627859,
    "lat": 31.381367954
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.345124387,
    "lat": 31.402410655
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.345385105,
    "lat": 31.402216089
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366585601,
    "lat": 31.39843692
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375521967,
    "lat": 31.390007681
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.366112392,
    "lat": 31.392899351
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367423992,
    "lat": 31.392702444
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367804456,
    "lat": 31.39242544
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37106108,
    "lat": 31.39134685
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373276325,
    "lat": 31.393261445
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.324886174,
    "lat": 31.397612704
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329117913,
    "lat": 31.402894916
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.328639563,
    "lat": 31.405492605
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.328515419,
    "lat": 31.406237468
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.333733067,
    "lat": 31.400588003
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359993748,
    "lat": 31.385694948
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.335704228,
    "lat": 31.39461436
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382591863,
    "lat": 31.413105145
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381905016,
    "lat": 31.413195159
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353391771,
    "lat": 31.389269683
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353121649,
    "lat": 31.389144045
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353308012,
    "lat": 31.388966058
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353582321,
    "lat": 31.388804823
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353806375,
    "lat": 31.388959776
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353925731,
    "lat": 31.388708501
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365198757,
    "lat": 31.396801489
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364604866,
    "lat": 31.422303597
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.36499239,
    "lat": 31.414729562
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373791248,
    "lat": 31.411057591
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376416996,
    "lat": 31.403980309
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.399289877,
    "lat": 31.415120988
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367537376,
    "lat": 31.382195962
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368276222,
    "lat": 31.381602694
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366699873,
    "lat": 31.38236175
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374620559,
    "lat": 31.389740152
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376135003,
    "lat": 31.39046336
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369928704,
    "lat": 31.390413966
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381379707,
    "lat": 31.397414099
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380183894,
    "lat": 31.396816307
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359065133,
    "lat": 31.395571379
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385339645,
    "lat": 31.44485207
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372654158,
    "lat": 31.446461939
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382086038,
    "lat": 31.444176436
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38387095,
    "lat": 31.436536647
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385432351,
    "lat": 31.435377528
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377751554,
    "lat": 31.431102309
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346743525,
    "lat": 31.422077343
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35394808,
    "lat": 31.416531813
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356454688,
    "lat": 31.416288271
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.336814179,
    "lat": 31.398591225
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.337469886,
    "lat": 31.398239946
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3364627,
    "lat": 31.398463141
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361982844,
    "lat": 31.399978404
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366454549,
    "lat": 31.413509138
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374345517,
    "lat": 31.41239942
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365358889,
    "lat": 31.413008607
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376790132,
    "lat": 31.413647505
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374197096,
    "lat": 31.412497186
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374012229,
    "lat": 31.412649118
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370817597,
    "lat": 31.401477847
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357870297,
    "lat": 31.395517798
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.360291019,
    "lat": 31.392546094
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397570567,
    "lat": 31.427932363
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386928549,
    "lat": 31.430544838
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.39836172,
    "lat": 31.415762529
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399912398,
    "lat": 31.416468968
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36583896,
    "lat": 31.380314419
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368016318,
    "lat": 31.381795055
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372714083,
    "lat": 31.386623217
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376989282,
    "lat": 31.391945405
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38036958,
    "lat": 31.396518432
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380587546,
    "lat": 31.397324832
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374325582,
    "lat": 31.393218778
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374581464,
    "lat": 31.390270923
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372729449,
    "lat": 31.38944918
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373668078,
    "lat": 31.387294527
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365411915,
    "lat": 31.381402013
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.360816854,
    "lat": 31.388301301
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368658019,
    "lat": 31.390171293
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369678468,
    "lat": 31.390589675
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367859244,
    "lat": 31.390602514
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375415609,
    "lat": 31.394133502
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374355212,
    "lat": 31.400735346
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377795255,
    "lat": 31.401511563
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381462193,
    "lat": 31.402325378
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384393533,
    "lat": 31.405537354
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383975591,
    "lat": 31.404481109
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377608667,
    "lat": 31.409232144
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378477147,
    "lat": 31.407919039
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371971812,
    "lat": 31.402996518
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382126439,
    "lat": 31.444769633
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387123892,
    "lat": 31.436688982
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.367429664,
    "lat": 31.427167256
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.361204918,
    "lat": 31.416227026
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.40273945,
    "lat": 31.417696566
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374816836,
    "lat": 31.41166309
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377448129,
    "lat": 31.409597389
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382578268,
    "lat": 31.407150661
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382057942,
    "lat": 31.402897232
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346376781,
    "lat": 31.401225201
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362102828,
    "lat": 31.391128038
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.369236476,
    "lat": 31.389372304
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373180476,
    "lat": 31.386895362
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361301178,
    "lat": 31.385830075
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367337055,
    "lat": 31.38238473
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.414756504,
    "lat": 31.442422623
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.405597266,
    "lat": 31.456932114
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.407368567,
    "lat": 31.452103259
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.405953938,
    "lat": 31.457825258
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.405291153,
    "lat": 31.456149823
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.386262136,
    "lat": 31.445120235
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38532277,
    "lat": 31.445268316
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385553392,
    "lat": 31.445189567
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382891384,
    "lat": 31.448899584
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.380379404,
    "lat": 31.449320488
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379534547,
    "lat": 31.461119472
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37845696,
    "lat": 31.462485942
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378073248,
    "lat": 31.462001224
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378178773,
    "lat": 31.461203132
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383708766,
    "lat": 31.462538048
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382336225,
    "lat": 31.461222531
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382513272,
    "lat": 31.461720216
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380953787,
    "lat": 31.461236723
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.384494228,
    "lat": 31.462066292
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38339361,
    "lat": 31.461533577
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38585632,
    "lat": 31.459660465
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387090221,
    "lat": 31.460727399
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.375037567,
    "lat": 31.459709448
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.38192453,
    "lat": 31.461523969
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372034716,
    "lat": 31.447520249
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372142435,
    "lat": 31.448399359
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371762721,
    "lat": 31.449192096
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370672416,
    "lat": 31.44727525
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365715367,
    "lat": 31.449903337
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373302366,
    "lat": 31.451509143
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375385284,
    "lat": 31.454491371
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386437745,
    "lat": 31.462902407
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.369531945,
    "lat": 31.44426584
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377634821,
    "lat": 31.455516196
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.360781017,
    "lat": 31.442182224
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.361853779,
    "lat": 31.441938079
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.360250789,
    "lat": 31.438103538
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361418551,
    "lat": 31.437531793
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367454301,
    "lat": 31.439253723
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370519201,
    "lat": 31.440397825
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37232758,
    "lat": 31.440508486
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.398751977,
    "lat": 31.43038951
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.409543406,
    "lat": 31.432940507
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.39580405,
    "lat": 31.432017107
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.402163871,
    "lat": 31.43322194
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.410439006,
    "lat": 31.431536366
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.413346901,
    "lat": 31.439174724
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.411002761,
    "lat": 31.44005469
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.398877563,
    "lat": 31.425583526
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397836649,
    "lat": 31.426378468
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396228024,
    "lat": 31.426772303
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397048446,
    "lat": 31.42608911
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397442792,
    "lat": 31.425526496
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396109543,
    "lat": 31.425853331
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.392784595,
    "lat": 31.423286932
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.392703429,
    "lat": 31.421819175
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.393193016,
    "lat": 31.421570856
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.393772118,
    "lat": 31.421332177
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.394775334,
    "lat": 31.420387401
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.398018739,
    "lat": 31.422629664
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399323893,
    "lat": 31.421049718
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399054611,
    "lat": 31.420554391
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.391181019,
    "lat": 31.419812203
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.398710005,
    "lat": 31.418880711
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384772118,
    "lat": 31.435871036
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384249043,
    "lat": 31.436225687
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383444981,
    "lat": 31.435304169
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37732997,
    "lat": 31.429926427
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379512614,
    "lat": 31.430625261
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379303746,
    "lat": 31.429678707
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373474326,
    "lat": 31.433109015
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368547925,
    "lat": 31.432769704
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.36979148,
    "lat": 31.431572742
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365054567,
    "lat": 31.433200628
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.364095354,
    "lat": 31.431282201
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375936028,
    "lat": 31.431078189
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.362574284,
    "lat": 31.432294917
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370443465,
    "lat": 31.436585248
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365756207,
    "lat": 31.433672059
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356002856,
    "lat": 31.434850265
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358134375,
    "lat": 31.413053734
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36160246,
    "lat": 31.417774454
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364385693,
    "lat": 31.422172783
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364287209,
    "lat": 31.420948775
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363591209,
    "lat": 31.419717106
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362968262,
    "lat": 31.418498296
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369080369,
    "lat": 31.419310836
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369441498,
    "lat": 31.421206762
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365116558,
    "lat": 31.414856394
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.368795187,
    "lat": 31.415623545
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.369987506,
    "lat": 31.416076442
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375364973,
    "lat": 31.419719427
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374886439,
    "lat": 31.418633025
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378171511,
    "lat": 31.420844628
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376787642,
    "lat": 31.417779424
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379064735,
    "lat": 31.416857018
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378676114,
    "lat": 31.417117938
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377230466,
    "lat": 31.417880063
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355474679,
    "lat": 31.401035714
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3542494,
    "lat": 31.398129192
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369292948,
    "lat": 31.392593963
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.360065633,
    "lat": 31.386086323
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385927309,
    "lat": 31.459834937
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371127213,
    "lat": 31.450226686
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375289951,
    "lat": 31.459803031
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379188555,
    "lat": 31.461046513
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382482031,
    "lat": 31.461033962
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372253033,
    "lat": 31.438096113
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374169635,
    "lat": 31.454795876
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384212116,
    "lat": 31.461980561
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399654984,
    "lat": 31.420467957
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.395442232,
    "lat": 31.419636479
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.393517688,
    "lat": 31.421417772
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.404289084,
    "lat": 31.419314091
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.4044267,
    "lat": 31.418455179
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.395082177,
    "lat": 31.418392748
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.393351996,
    "lat": 31.416722921
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.393037418,
    "lat": 31.416894842
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.39275576,
    "lat": 31.416722921
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.393461733,
    "lat": 31.417128947
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399459336,
    "lat": 31.41674299
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.397368407,
    "lat": 31.416847537
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396197488,
    "lat": 31.417453906
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.395925667,
    "lat": 31.417007841
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.399549943,
    "lat": 31.415725405
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.39933388,
    "lat": 31.41588571
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.402841895,
    "lat": 31.415378548
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.404481271,
    "lat": 31.416734093
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.404911914,
    "lat": 31.416812391
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.393920452,
    "lat": 31.413790481
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.393241864,
    "lat": 31.414730064
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.391927397,
    "lat": 31.415010041
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.391519295,
    "lat": 31.414203328
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.391666401,
    "lat": 31.415252055
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.39113492,
    "lat": 31.414469069
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.39132948,
    "lat": 31.414321962
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.38449097,
    "lat": 31.436062867
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379314056,
    "lat": 31.430709947
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378088861,
    "lat": 31.43101024
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376386312,
    "lat": 31.424451645
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376508505,
    "lat": 31.423952689
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37483853,
    "lat": 31.422343811
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371875344,
    "lat": 31.42274094
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376797495,
    "lat": 31.421028614
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375230167,
    "lat": 31.419443676
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374318353,
    "lat": 31.420823693
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374107251,
    "lat": 31.420972246
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.370734073,
    "lat": 31.417924153
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376932501,
    "lat": 31.430053424
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379523109,
    "lat": 31.430048342
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37277701,
    "lat": 31.426799974
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371977157,
    "lat": 31.426824891
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.369850398,
    "lat": 31.428589593
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.36817764,
    "lat": 31.426560186
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365516648,
    "lat": 31.43083608
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368098654,
    "lat": 31.43306248
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.362723455,
    "lat": 31.419486466
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.362869667,
    "lat": 31.419602686
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.354062592,
    "lat": 31.420354897
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384219793,
    "lat": 31.41738631
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38407095,
    "lat": 31.41712997
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383037319,
    "lat": 31.416021918
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382326182,
    "lat": 31.416394025
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386989922,
    "lat": 31.414922135
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.393183436,
    "lat": 31.412061046
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385997637,
    "lat": 31.412921027
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386893793,
    "lat": 31.414055261
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387730493,
    "lat": 31.414684313
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38882565,
    "lat": 31.411275487
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.390710992,
    "lat": 31.411176259
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385096311,
    "lat": 31.411473944
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.385261692,
    "lat": 31.411655863
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.385865332,
    "lat": 31.411961818
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383277122,
    "lat": 31.41150702
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379862007,
    "lat": 31.414765024
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374125815,
    "lat": 31.41204717
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373959801,
    "lat": 31.411868135
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.368324154,
    "lat": 31.414009402
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.359851641,
    "lat": 31.412057323
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.337154649,
    "lat": 31.411535512
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.320003555,
    "lat": 31.407736254
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.320226457,
    "lat": 31.407309712
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.320314135,
    "lat": 31.407925704
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.326953762,
    "lat": 31.409154235
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331116763,
    "lat": 31.408966127
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.336883967,
    "lat": 31.410529563
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.346131222,
    "lat": 31.411161677
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346547576,
    "lat": 31.410913466
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364447811,
    "lat": 31.407908295
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36528229,
    "lat": 31.407977502
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.363272579,
    "lat": 31.409066429
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366296228,
    "lat": 31.411089045
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365603455,
    "lat": 31.41089208
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365555912,
    "lat": 31.410318166
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365963425,
    "lat": 31.410695115
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370981104,
    "lat": 31.408035903
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370031223,
    "lat": 31.411188332
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375494988,
    "lat": 31.408379082
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371817079,
    "lat": 31.407238338
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375540248,
    "lat": 31.407198304
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377221678,
    "lat": 31.40808706
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374163076,
    "lat": 31.406870025
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376404984,
    "lat": 31.408807674
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378350639,
    "lat": 31.41004873
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379607709,
    "lat": 31.408423347
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379879941,
    "lat": 31.409200007
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380928833,
    "lat": 31.407462529
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.380312308,
    "lat": 31.408807674
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381833603,
    "lat": 31.409512273
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383771252,
    "lat": 31.408055033
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383971422,
    "lat": 31.409328117
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.384499872,
    "lat": 31.409336123
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.3827704,
    "lat": 31.408711592
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38056052,
    "lat": 31.408191149
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.385804983,
    "lat": 31.411145663
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3871181,
    "lat": 31.408375306
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.389640246,
    "lat": 31.408607503
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385060349,
    "lat": 31.406998134
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396149786,
    "lat": 31.409728457
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.392290501,
    "lat": 31.410825391
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.396614181,
    "lat": 31.408311251
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3900952,
    "lat": 31.406288601
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.388563498,
    "lat": 31.40646579
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387898054,
    "lat": 31.405505031
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387606677,
    "lat": 31.405272717
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.388630436,
    "lat": 31.406150788
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377759816,
    "lat": 31.404424253
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384193698,
    "lat": 31.406247662
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383873207,
    "lat": 31.40644247
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383511869,
    "lat": 31.40622881
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384213267,
    "lat": 31.404300393
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381080494,
    "lat": 31.404709774
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381257932,
    "lat": 31.404459109
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382429581,
    "lat": 31.40453797
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375814221,
    "lat": 31.405904767
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375205865,
    "lat": 31.406313582
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374626709,
    "lat": 31.406625061
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382706954,
    "lat": 31.404325548
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.381786629,
    "lat": 31.402641834
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380805471,
    "lat": 31.402179288
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365750309,
    "lat": 31.406887443
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363665263,
    "lat": 31.404932897
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362278533,
    "lat": 31.406474557
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359341948,
    "lat": 31.404280367
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352021103,
    "lat": 31.405186271
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351823801,
    "lat": 31.405292141
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351616874,
    "lat": 31.405378761
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.349012671,
    "lat": 31.404226026
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346220984,
    "lat": 31.406482116
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.345250833,
    "lat": 31.406634568
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346165547,
    "lat": 31.40599704
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346401155,
    "lat": 31.405636698
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346692201,
    "lat": 31.40600397
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.347017894,
    "lat": 31.406322734
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346844653,
    "lat": 31.406627639
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346553607,
    "lat": 31.406828599
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346061602,
    "lat": 31.406987981
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.340587176,
    "lat": 31.406225719
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.333553579,
    "lat": 31.406904825
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331869597,
    "lat": 31.405891879
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331459025,
    "lat": 31.406211213
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331378314,
    "lat": 31.406839354
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.33101687,
    "lat": 31.405951535
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.330146597,
    "lat": 31.405330413
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329199122,
    "lat": 31.4047514
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331164255,
    "lat": 31.40205987
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.328570712,
    "lat": 31.404466327
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.328527052,
    "lat": 31.403360283
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.328068626,
    "lat": 31.403804156
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.323395841,
    "lat": 31.404840245
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.322157287,
    "lat": 31.4050684
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.322755474,
    "lat": 31.40502622
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.321650312,
    "lat": 31.40074922
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.320753656,
    "lat": 31.400591998
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.321340782,
    "lat": 31.401068576
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.330939782,
    "lat": 31.401478194
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.330355625,
    "lat": 31.401465308
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.331858969,
    "lat": 31.401529737
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.344347626,
    "lat": 31.403058305
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.342787874,
    "lat": 31.402142977
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346079647,
    "lat": 31.401038429
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.34659773,
    "lat": 31.401477415
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.346870613,
    "lat": 31.401299448
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.353433288,
    "lat": 31.400273059
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355214566,
    "lat": 31.400644709
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356549396,
    "lat": 31.401615419
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35716221,
    "lat": 31.401853736
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358736804,
    "lat": 31.401172831
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359060234,
    "lat": 31.400662152
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359017678,
    "lat": 31.401045161
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359255995,
    "lat": 31.400917491
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358796384,
    "lat": 31.40078131
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357434573,
    "lat": 31.402994253
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.360668874,
    "lat": 31.402100565
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361817902,
    "lat": 31.402900629
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362345603,
    "lat": 31.402577198
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371571872,
    "lat": 31.405454024
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372670198,
    "lat": 31.403998168
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373913792,
    "lat": 31.403662602
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.375733907,
    "lat": 31.4038834
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378236235,
    "lat": 31.40368367
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37891714,
    "lat": 31.406832858
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379215036,
    "lat": 31.40652645
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379666136,
    "lat": 31.406449848
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379895942,
    "lat": 31.40613493
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37377967,
    "lat": 31.400815417
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374582966,
    "lat": 31.39946762
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373385964,
    "lat": 31.397767307
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373211047,
    "lat": 31.398650426
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374537858,
    "lat": 31.398155538
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.375071142,
    "lat": 31.398744284
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37767331,
    "lat": 31.399804109
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.37784485,
    "lat": 31.400019531
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37812809,
    "lat": 31.39985597
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377581556,
    "lat": 31.400961006
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377194594,
    "lat": 31.400282825
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380592616,
    "lat": 31.401109149
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.378360575,
    "lat": 31.399685184
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386823768,
    "lat": 31.40161668
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379060862,
    "lat": 31.395949609
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.377110995,
    "lat": 31.397224114
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374680202,
    "lat": 31.397953579
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374641025,
    "lat": 31.399085777
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372066351,
    "lat": 31.399625754
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.371314916,
    "lat": 31.394616186
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369906648,
    "lat": 31.394809004
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369629798,
    "lat": 31.392412416
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370632241,
    "lat": 31.392744465
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369782838,
    "lat": 31.392708166
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370874237,
    "lat": 31.392277414
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36038403,
    "lat": 31.393111137
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357852308,
    "lat": 31.3914024
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35636569,
    "lat": 31.397040514
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351843,
    "lat": 31.394959341
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354358191,
    "lat": 31.394790912
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353387333,
    "lat": 31.393613565
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.349715753,
    "lat": 31.394304743
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351386408,
    "lat": 31.393247036
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351020135,
    "lat": 31.39338906
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351692882,
    "lat": 31.393060162
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351573282,
    "lat": 31.393650684
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.350063339,
    "lat": 31.396099206
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.350725196,
    "lat": 31.396209515
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343363874,
    "lat": 31.396121268
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.344197884,
    "lat": 31.394498447
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.340547304,
    "lat": 31.391245587
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.340363455,
    "lat": 31.392032461
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.341863664,
    "lat": 31.39190009
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.340921214,
    "lat": 31.392111083
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.338524963,
    "lat": 31.395268207
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.338804413,
    "lat": 31.39503288
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.343197583,
    "lat": 31.399838154
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.337518481,
    "lat": 31.397444982
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.337728623,
    "lat": 31.397665682
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.33787382,
    "lat": 31.398008347
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.335881715,
    "lat": 31.398873722
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3356494,
    "lat": 31.399303506
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.338530112,
    "lat": 31.398833067
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.333645148,
    "lat": 31.399851389
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.33468053,
    "lat": 31.399257902
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.331814968,
    "lat": 31.397926321
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329764333,
    "lat": 31.398038174
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.333801687,
    "lat": 31.39705813
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.32275766,
    "lat": 31.398398494
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.348562722,
    "lat": 31.399305456
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359111539,
    "lat": 31.396860923
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.369742619,
    "lat": 31.400008249
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369913236,
    "lat": 31.399719513
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.375745153,
    "lat": 31.39682754
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.378852904,
    "lat": 31.393330567
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376057412,
    "lat": 31.395411033
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376300668,
    "lat": 31.396088957
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377469393,
    "lat": 31.396440135
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375813383,
    "lat": 31.393427519
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376798166,
    "lat": 31.393050043
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.372373521,
    "lat": 31.395113806
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.350607412,
    "lat": 31.394225387
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.334471942,
    "lat": 31.394767565
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.33181789,
    "lat": 31.393729023
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.334325776,
    "lat": 31.393621323
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332671802,
    "lat": 31.394698329
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.332125606,
    "lat": 31.392728946
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331260513,
    "lat": 31.391629044
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.324909663,
    "lat": 31.393236677
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.324548097,
    "lat": 31.393205906
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.329185565,
    "lat": 31.391783014
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.338598154,
    "lat": 31.388268256
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.337908485,
    "lat": 31.387923421
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.338566805,
    "lat": 31.388592191
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352468153,
    "lat": 31.388545063
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352986197,
    "lat": 31.390095719
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352843648,
    "lat": 31.389782807
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352527259,
    "lat": 31.389522046
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357938414,
    "lat": 31.388768646
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.360260345,
    "lat": 31.390470914
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364061309,
    "lat": 31.390667589
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371367844,
    "lat": 31.388975139
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373480992,
    "lat": 31.39010291
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373343466,
    "lat": 31.38849305
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375195286,
    "lat": 31.385599975
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3761935,
    "lat": 31.387788061
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370669723,
    "lat": 31.386194261
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371185071,
    "lat": 31.386001553
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358752382,
    "lat": 31.38846527
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361496275,
    "lat": 31.386031204
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357307731,
    "lat": 31.386497411
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356578461,
    "lat": 31.386952653
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353975189,
    "lat": 31.387474191
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354280157,
    "lat": 31.387151544
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353179622,
    "lat": 31.386665364
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355582588,
    "lat": 31.385388957
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367240636,
    "lat": 31.381113227
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366740512,
    "lat": 31.381647194
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366068616,
    "lat": 31.381226488
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367476484,
    "lat": 31.383078376
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367969238,
    "lat": 31.378659837
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36237892,
    "lat": 31.379748227
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358714131,
    "lat": 31.380863258
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355723088,
    "lat": 31.382734523
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357464965,
    "lat": 31.384118407
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370373235,
    "lat": 31.382307496
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372165979,
    "lat": 31.382661429
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370816164,
    "lat": 31.387916498
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371411668,
    "lat": 31.387929101
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367550406,
    "lat": 31.381611816
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354780178,
    "lat": 31.388701285
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.38484501,
    "lat": 31.462064277
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382954008,
    "lat": 31.461733904
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.385663766,
    "lat": 31.459069075
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.405415548,
    "lat": 31.456541263
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3722333,
    "lat": 31.447723482
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.394884687,
    "lat": 31.429043631
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.406815883,
    "lat": 31.429584657
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.406916118,
    "lat": 31.429692779
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.406694843,
    "lat": 31.429494287
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363240376,
    "lat": 31.421123618
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363778135,
    "lat": 31.421790591
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36391842,
    "lat": 31.421921704
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364533002,
    "lat": 31.421169224
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.3908475,
    "lat": 31.419862166
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.387585666,
    "lat": 31.415114419
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383455145,
    "lat": 31.416112516
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383113038,
    "lat": 31.416267974
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381011051,
    "lat": 31.415246575
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383694419,
    "lat": 31.416522713
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376369053,
    "lat": 31.417196007
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.360371235,
    "lat": 31.416863234
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365778232,
    "lat": 31.412906048
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365200803,
    "lat": 31.412695489
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369765011,
    "lat": 31.410760653
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370467165,
    "lat": 31.411018705
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370853517,
    "lat": 31.410820866
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371162599,
    "lat": 31.410594353
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369801967,
    "lat": 31.411388579
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374093208,
    "lat": 31.413094206
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383699006,
    "lat": 31.409096595
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.382070637,
    "lat": 31.409182721
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38970333,
    "lat": 31.411339759
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3897492,
    "lat": 31.411551154
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387660033,
    "lat": 31.408320275
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386865678,
    "lat": 31.407168241
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.386375925,
    "lat": 31.407173338
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38717028,
    "lat": 31.407565847
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.387403211,
    "lat": 31.407953256
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.384452748,
    "lat": 31.407968549
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.384183981,
    "lat": 31.406928657
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383311982,
    "lat": 31.406745145
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.38454831,
    "lat": 31.406510658
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380528752,
    "lat": 31.407774844
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.383861461,
    "lat": 31.40587346
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.378026233,
    "lat": 31.408131668
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377596206,
    "lat": 31.408427321
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377703713,
    "lat": 31.407764649
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377428974,
    "lat": 31.407392532
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377847055,
    "lat": 31.40698473
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375147441,
    "lat": 31.408029719
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377130344,
    "lat": 31.4070459
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.376628646,
    "lat": 31.407249801
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377022837,
    "lat": 31.407774844
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364076236,
    "lat": 31.407592184
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364275323,
    "lat": 31.40780458
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364698382,
    "lat": 31.408220874
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36550966,
    "lat": 31.4073543
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365051761,
    "lat": 31.407163143
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36387715,
    "lat": 31.407384036
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365284294,
    "lat": 31.406995944
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359117322,
    "lat": 31.404043689
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362319297,
    "lat": 31.406606662
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.320197554,
    "lat": 31.407808828
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.320436458,
    "lat": 31.407991488
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.331060514,
    "lat": 31.40059594
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.329904219,
    "lat": 31.401131556
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.335080567,
    "lat": 31.399828472
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355017797,
    "lat": 31.400009342
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.354059225,
    "lat": 31.400510696
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353982403,
    "lat": 31.400390957
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357780123,
    "lat": 31.403488604
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369730295,
    "lat": 31.400459657
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370223035,
    "lat": 31.39972046
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371865499,
    "lat": 31.399796929
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372253718,
    "lat": 31.400718799
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369610843,
    "lat": 31.40128806
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.367488581,
    "lat": 31.39909783
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373627415,
    "lat": 31.401326294
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372925635,
    "lat": 31.401411258
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376992369,
    "lat": 31.400396157
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375533669,
    "lat": 31.40236285
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377509604,
    "lat": 31.404104578
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.374722591,
    "lat": 31.399628017
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383469429,
    "lat": 31.40296133
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383108914,
    "lat": 31.403968639
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382062987,
    "lat": 31.40011185
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381782321,
    "lat": 31.400472834
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.382032229,
    "lat": 31.400715677
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380862249,
    "lat": 31.399189606
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379982982,
    "lat": 31.397516824
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379586801,
    "lat": 31.397834941
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.373627415,
    "lat": 31.395998897
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374652711,
    "lat": 31.398658385
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.374592985,
    "lat": 31.398356753
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371462349,
    "lat": 31.397188453
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371188605,
    "lat": 31.396831588
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.371487235,
    "lat": 31.396580932
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.371586778,
    "lat": 31.395892686
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.371298102,
    "lat": 31.396049878
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.371183627,
    "lat": 31.395603791
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370964632,
    "lat": 31.395387119
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.371482257,
    "lat": 31.39535738
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.379311337,
    "lat": 31.396139095
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370257875,
    "lat": 31.39634302
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37047687,
    "lat": 31.396130598
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37067098,
    "lat": 31.396614919
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370865089,
    "lat": 31.396865575
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370422121,
    "lat": 31.39677211
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370068743,
    "lat": 31.396865575
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369794999,
    "lat": 31.397001524
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370098606,
    "lat": 31.397150218
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370063765,
    "lat": 31.395450846
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37037235,
    "lat": 31.395195937
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370541573,
    "lat": 31.395586797
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369819884,
    "lat": 31.395535815
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369217647,
    "lat": 31.395693008
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367132216,
    "lat": 31.395544312
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361569742,
    "lat": 31.398695491
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361855972,
    "lat": 31.398981294
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361580543,
    "lat": 31.399230218
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361283511,
    "lat": 31.398921368
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361024284,
    "lat": 31.399156463
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361299713,
    "lat": 31.399400777
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358982869,
    "lat": 31.396339893
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358766846,
    "lat": 31.396505847
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359625537,
    "lat": 31.396081741
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359398713,
    "lat": 31.39581437
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358934264,
    "lat": 31.395459409
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358491417,
    "lat": 31.395629975
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.358831653,
    "lat": 31.395888127
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357206082,
    "lat": 31.395777491
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357443707,
    "lat": 31.396312234
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.357505273,
    "lat": 31.39532941
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.354651612,
    "lat": 31.398769247
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353675622,
    "lat": 31.397391668
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356017956,
    "lat": 31.39716966
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355731726,
    "lat": 31.397294125
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.337188764,
    "lat": 31.3983682
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.332906329,
    "lat": 31.395131738
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.323404186,
    "lat": 31.392040464
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.324645917,
    "lat": 31.393009367
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.331984673,
    "lat": 31.393946843
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343949687,
    "lat": 31.393070107
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343813747,
    "lat": 31.393554991
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343663241,
    "lat": 31.39414348
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.343323389,
    "lat": 31.3936213
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.342988392,
    "lat": 31.393385075
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.336186494,
    "lat": 31.389203376
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.336074828,
    "lat": 31.389008585
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353251941,
    "lat": 31.38990789
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353049102,
    "lat": 31.389639674
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352800524,
    "lat": 31.38939013
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352711658,
    "lat": 31.390263531
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352357435,
    "lat": 31.390072555
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352873233,
    "lat": 31.391764637
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352518816,
    "lat": 31.391354342
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352271209,
    "lat": 31.391582284
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352004183,
    "lat": 31.391785359
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352256644,
    "lat": 31.391976
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.352543091,
    "lat": 31.392208084
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.350693324,
    "lat": 31.393646166
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351018611,
    "lat": 31.39399843
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.351295348,
    "lat": 31.393828515
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.3499942,
    "lat": 31.394131047
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.34797812,
    "lat": 31.393050042
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355514369,
    "lat": 31.382439322
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355936757,
    "lat": 31.382903538
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362092935,
    "lat": 31.384292025
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356834938,
    "lat": 31.386140547
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356563056,
    "lat": 31.386302187
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362593004,
    "lat": 31.384354196
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.35726218,
    "lat": 31.386836841
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362272572,
    "lat": 31.386455538
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362287137,
    "lat": 31.387545565
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362563873,
    "lat": 31.387765226
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359403249,
    "lat": 31.390231204
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.357572902,
    "lat": 31.390090293
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.359864104,
    "lat": 31.390719326
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.361840474,
    "lat": 31.390956479
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362583293,
    "lat": 31.391101534
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355713426,
    "lat": 31.391764637
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355931902,
    "lat": 31.391996722
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355490094,
    "lat": 31.392286827
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355276473,
    "lat": 31.392038165
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355218213,
    "lat": 31.393252457
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.355310458,
    "lat": 31.393637877
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.353572357,
    "lat": 31.393443095
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.364947693,
    "lat": 31.394284385
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.365603122,
    "lat": 31.390852869
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.366695504,
    "lat": 31.391101534
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36759854,
    "lat": 31.390202193
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367064486,
    "lat": 31.390612492
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.363944256,
    "lat": 31.39141999
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369394901,
    "lat": 31.388490521
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365540007,
    "lat": 31.388063634
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365219575,
    "lat": 31.388304017
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364923418,
    "lat": 31.388109224
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365326386,
    "lat": 31.387781805
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.370503859,
    "lat": 31.38923857
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365149857,
    "lat": 31.386894866
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.364786312,
    "lat": 31.386605738
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.362717774,
    "lat": 31.391844799
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367952957,
    "lat": 31.38228182
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368278244,
    "lat": 31.382024842
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368724907,
    "lat": 31.38207458
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368530705,
    "lat": 31.381854905
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.36846759,
    "lat": 31.381403119
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368982223,
    "lat": 31.381888064
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368928818,
    "lat": 31.381564767
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.365798624,
    "lat": 31.381426647
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368161723,
    "lat": 31.381125415
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.368681211,
    "lat": 31.380764812
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.369016208,
    "lat": 31.38052441
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.367389773,
    "lat": 31.380619742
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372006907,
    "lat": 31.38984577
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.375167532,
    "lat": 31.393903112
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.37489565,
    "lat": 31.393666887
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.373944064,
    "lat": 31.392887757
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.375822961,
    "lat": 31.391810225
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.376959038,
    "lat": 31.393787072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345890392,
    "lat": 31.299168208
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360569044,
    "lat": 31.29538822
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354768733,
    "lat": 31.294572835
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.352433127,
    "lat": 31.295284379
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351089846,
    "lat": 31.294863998
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350773191,
    "lat": 31.295179199
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.352139294,
    "lat": 31.294925801
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352486718,
    "lat": 31.296665866
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319929412,
    "lat": 31.286326023
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320833554,
    "lat": 31.288233606
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330034597,
    "lat": 31.291717097
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352275131,
    "lat": 31.296919885
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354847678,
    "lat": 31.29654623
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350821951,
    "lat": 31.2980552
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.337188757,
    "lat": 31.310195404
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.322367199,
    "lat": 31.279145257
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.325397789,
    "lat": 31.277720542
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324959103,
    "lat": 31.277551824
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324348598,
    "lat": 31.277358111
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324052485,
    "lat": 31.277795527
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32359552,
    "lat": 31.276973807
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324948136,
    "lat": 31.276561382
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331556749,
    "lat": 31.281470246
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333141478,
    "lat": 31.282550878
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324756138,
    "lat": 31.280496245
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322917685,
    "lat": 31.28042515
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322730512,
    "lat": 31.280755743
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320184962,
    "lat": 31.282874354
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.317358864,
    "lat": 31.284012872
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.316547295,
    "lat": 31.283478634
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319406067,
    "lat": 31.283758753
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.323036195,
    "lat": 31.284309669
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3263958,
    "lat": 31.285112581
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326205703,
    "lat": 31.28544374
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.326286129,
    "lat": 31.28468457
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.326505472,
    "lat": 31.284490872
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337713905,
    "lat": 31.285175064
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348139707,
    "lat": 31.288869061
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329511988,
    "lat": 31.289174684
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319171009,
    "lat": 31.288045366
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318939853,
    "lat": 31.288708795
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319371635,
    "lat": 31.28779192
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347838767,
    "lat": 31.290456798
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349544091,
    "lat": 31.292573739
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.344114096,
    "lat": 31.291638265
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347511659,
    "lat": 31.290356168
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354568472,
    "lat": 31.291407191
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35504387,
    "lat": 31.290889135
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355475652,
    "lat": 31.290132544
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358136132,
    "lat": 31.291720259
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362635896,
    "lat": 31.294806573
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362888894,
    "lat": 31.294547802
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363268391,
    "lat": 31.294174384
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363594221,
    "lat": 31.293958195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363874052,
    "lat": 31.29519309
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363881718,
    "lat": 31.29600215
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361961236,
    "lat": 31.295828547
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362382899,
    "lat": 31.296038181
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361041244,
    "lat": 31.295602534
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36115241,
    "lat": 31.295288081
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360903245,
    "lat": 31.295143956
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360596582,
    "lat": 31.294973627
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359657423,
    "lat": 31.295799067
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359875921,
    "lat": 31.295975946
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360209418,
    "lat": 31.29522257
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360312917,
    "lat": 31.294747612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359975587,
    "lat": 31.293964746
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360654081,
    "lat": 31.294393849
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360933912,
    "lat": 31.294544526
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361183076,
    "lat": 31.294767266
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36145524,
    "lat": 31.294921218
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361635405,
    "lat": 31.294515046
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361240576,
    "lat": 31.294249723
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361474407,
    "lat": 31.293925438
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361807904,
    "lat": 31.294154731
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362011069,
    "lat": 31.294311959
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360102086,
    "lat": 31.293208078
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360841913,
    "lat": 31.29348323
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356694284,
    "lat": 31.295147232
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355954457,
    "lat": 31.294747612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35674795,
    "lat": 31.293499609
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354298472,
    "lat": 31.293683043
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348387525,
    "lat": 31.293132738
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.338148785,
    "lat": 31.294714856
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.339053443,
    "lat": 31.293630633
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.338723779,
    "lat": 31.293430821
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336117136,
    "lat": 31.296211784
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.294223015,
    "lat": 31.295625463
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291189818,
    "lat": 31.298666465
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343631473,
    "lat": 31.297546922
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.346068879,
    "lat": 31.297045789
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344916726,
    "lat": 31.296185683
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345399216,
    "lat": 31.296416704
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345557273,
    "lat": 31.296576641
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348036273,
    "lat": 31.298321718
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350053579,
    "lat": 31.298186662
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350315621,
    "lat": 31.298417679
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.351130863,
    "lat": 31.299135602
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.350848024,
    "lat": 31.299089399
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.351659106,
    "lat": 31.297187955
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35548159,
    "lat": 31.298502977
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354354394,
    "lat": 31.297703303
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353776238,
    "lat": 31.296487787
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.353589065,
    "lat": 31.29687519
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.352952678,
    "lat": 31.297195063
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.352632404,
    "lat": 31.29743319
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354296163,
    "lat": 31.296452245
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354054918,
    "lat": 31.296654833
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.354337757,
    "lat": 31.296885853
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.354620595,
    "lat": 31.297049343
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.356055587,
    "lat": 31.297280362
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355693719,
    "lat": 31.297628667
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357328362,
    "lat": 31.297813481
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36105102,
    "lat": 31.297131089
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359636826,
    "lat": 31.296740132
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359857274,
    "lat": 31.296462908
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360061084,
    "lat": 31.296672603
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360302329,
    "lat": 31.297049343
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358971323,
    "lat": 31.29783836
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358788309,
    "lat": 31.297109764
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358488833,
    "lat": 31.297429636
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358721759,
    "lat": 31.296661941
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359033714,
    "lat": 31.296395379
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359254162,
    "lat": 31.296502004
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362315477,
    "lat": 31.297738845
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362885314,
    "lat": 31.298094256
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362136623,
    "lat": 31.29880152
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363055849,
    "lat": 31.298943683
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357702707,
    "lat": 31.297930767
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357432347,
    "lat": 31.298282623
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35727429,
    "lat": 31.298467436
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364403493,
    "lat": 31.299164035
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364253755,
    "lat": 31.299100062
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363817018,
    "lat": 31.299039643
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364108176,
    "lat": 31.298780195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364445087,
    "lat": 31.298481652
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36456155,
    "lat": 31.297952091
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363671439,
    "lat": 31.298005403
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362053435,
    "lat": 31.297870347
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363621527,
    "lat": 31.297276808
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364752882,
    "lat": 31.29811558
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366441597,
    "lat": 31.298126243
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365894532,
    "lat": 31.297248584
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365664344,
    "lat": 31.297119182
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365125222,
    "lat": 31.297688551
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364789027,
    "lat": 31.297569501
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364816286,
    "lat": 31.29617454
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364595185,
    "lat": 31.296060665
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363713897,
    "lat": 31.295351217
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363901905,
    "lat": 31.295618972
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36116127,
    "lat": 31.293638623
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355295391,
    "lat": 31.29473733
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357457413,
    "lat": 31.29436935
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357633343,
    "lat": 31.294548782
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356587214,
    "lat": 31.315209689
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364639937,
    "lat": 31.311602947
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359654324,
    "lat": 31.309888502
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362049802,
    "lat": 31.339920443
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365406043,
    "lat": 31.319233929
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361035961,
    "lat": 31.368812085
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.272681187,
    "lat": 31.3634451
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334714872,
    "lat": 31.381440851
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350992409,
    "lat": 31.381278779
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350727267,
    "lat": 31.381086329
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354946339,
    "lat": 31.350080143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.274085851,
    "lat": 31.3368072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297269984,
    "lat": 31.314974037
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361563749,
    "lat": 31.374465838
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357042066,
    "lat": 31.373650208
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355646595,
    "lat": 31.363669313
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355012432,
    "lat": 31.366165485
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355205945,
    "lat": 31.375929462
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352742855,
    "lat": 31.357749247
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357033748,
    "lat": 31.357971417
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345824055,
    "lat": 31.365862047
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337467124,
    "lat": 31.357578428
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337853874,
    "lat": 31.364590814
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331970225,
    "lat": 31.363096863
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334677082,
    "lat": 31.361025915
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33924802,
    "lat": 31.349781904
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333116702,
    "lat": 31.350459137
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325789395,
    "lat": 31.36486146
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328530437,
    "lat": 31.352381261
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328208059,
    "lat": 31.352241948
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315057902,
    "lat": 31.36036519
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315381215,
    "lat": 31.360092514
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315754503,
    "lat": 31.359765526
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316072811,
    "lat": 31.359496411
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314113719,
    "lat": 31.355874607
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314369642,
    "lat": 31.355653214
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314385891,
    "lat": 31.355240894
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319575227,
    "lat": 31.385031482
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327245475,
    "lat": 31.381274067
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326231761,
    "lat": 31.383618939
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330140914,
    "lat": 31.367339316
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324576557,
    "lat": 31.367740735
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32301491,
    "lat": 31.36665646
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316086447,
    "lat": 31.366357317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311320005,
    "lat": 31.363848778
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360729356,
    "lat": 31.370857664
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325292569,
    "lat": 31.35647445
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341484733,
    "lat": 31.356705898
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341694815,
    "lat": 31.356951952
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342044472,
    "lat": 31.356574956
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333202496,
    "lat": 31.356390743
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323116398,
    "lat": 31.385070781
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31875234,
    "lat": 31.384667787
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32094375,
    "lat": 31.385078076
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320966593,
    "lat": 31.384724772
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324711151,
    "lat": 31.384277142
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323957367,
    "lat": 31.384261438
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323295564,
    "lat": 31.384292846
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313443945,
    "lat": 31.357492736
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305819243,
    "lat": 31.360241686
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30599175,
    "lat": 31.360727842
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304784851,
    "lat": 31.358973794
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308192698,
    "lat": 31.359280691
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308421099,
    "lat": 31.320302377
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296555791,
    "lat": 31.321595531
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282065414,
    "lat": 31.34383325
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.290379825,
    "lat": 31.320480191
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327460086,
    "lat": 31.372912403
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327532958,
    "lat": 31.372550317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327708309,
    "lat": 31.372696062
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328227527,
    "lat": 31.373078645
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327990691,
    "lat": 31.37289874
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.332237109,
    "lat": 31.383575386
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.298220677,
    "lat": 31.387883202
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.298843328,
    "lat": 31.370161631
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297878063,
    "lat": 31.370167991
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.272258564,
    "lat": 31.355420911
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.272553751,
    "lat": 31.355636513
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309089412,
    "lat": 31.362855827
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276206052,
    "lat": 31.34536173
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361989068,
    "lat": 31.332645437
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307139765,
    "lat": 31.367710736
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309448407,
    "lat": 31.372198187
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337988197,
    "lat": 31.343175867
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345554064,
    "lat": 31.344870094
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347966322,
    "lat": 31.346497948
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.340765765,
    "lat": 31.333054027
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336862155,
    "lat": 31.338651019
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.334786598,
    "lat": 31.324505423
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318091252,
    "lat": 31.319520466
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365319418,
    "lat": 31.297395903
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364234251,
    "lat": 31.294075152
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359265607,
    "lat": 31.297199839
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353117472,
    "lat": 31.295318252
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361771323,
    "lat": 31.308871741
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355558373,
    "lat": 31.313485256
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324907797,
    "lat": 31.305635927
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.3245587,
    "lat": 31.306054843
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.328285439,
    "lat": 31.314340776
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327556985,
    "lat": 31.320029098
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329468529,
    "lat": 31.350235314
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32936879,
    "lat": 31.349930227
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329051969,
    "lat": 31.350000632
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328890625,
    "lat": 31.349719014
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32906957,
    "lat": 31.349548869
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328931695,
    "lat": 31.34919978
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33007355,
    "lat": 31.349570218
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362250688,
    "lat": 31.295542356
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362540685,
    "lat": 31.295267825
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362821016,
    "lat": 31.295550089
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364240051,
    "lat": 31.297275863
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358143592,
    "lat": 31.296306731
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282673754,
    "lat": 31.309887516
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318890631,
    "lat": 31.314336429
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279739565,
    "lat": 31.345441884
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313730095,
    "lat": 31.363200896
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313738287,
    "lat": 31.363675251
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345603839,
    "lat": 31.382226858
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346060658,
    "lat": 31.381976056
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345888231,
    "lat": 31.381837219
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344802168,
    "lat": 31.381982774
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345091038,
    "lat": 31.382229097
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345361994,
    "lat": 31.382444071
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348552112,
    "lat": 31.369747489
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308071351,
    "lat": 31.364263602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298986511,
    "lat": 31.304042601
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.286285298,
    "lat": 31.30672006
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.286035188,
    "lat": 31.30493557
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.284526618,
    "lat": 31.30366069
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.284929649,
    "lat": 31.305602566
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.283106851,
    "lat": 31.306394887
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.293803536,
    "lat": 31.299670366
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279198135,
    "lat": 31.304221855
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347715085,
    "lat": 31.297021043
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347500752,
    "lat": 31.297265033
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.326793256,
    "lat": 31.284175862
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323468912,
    "lat": 31.278633999
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335681368,
    "lat": 31.296164575
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.296081882,
    "lat": 31.296319829
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283266953,
    "lat": 31.304499181
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.282882803,
    "lat": 31.30599792
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.331891123,
    "lat": 31.313085836
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357633365,
    "lat": 31.315898664
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360452904,
    "lat": 31.315982358
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314728797,
    "lat": 31.35816701
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.287067857,
    "lat": 31.338158255
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358933455,
    "lat": 31.310011733
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359077878,
    "lat": 31.310428176
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358752926,
    "lat": 31.310744363
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359420884,
    "lat": 31.310150547
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367585731,
    "lat": 31.302140533
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364284349,
    "lat": 31.336781693
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36406744,
    "lat": 31.337090472
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351917093,
    "lat": 31.303857996
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353944362,
    "lat": 31.31526408
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335109418,
    "lat": 31.346765433
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329767097,
    "lat": 31.352475254
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348128115,
    "lat": 31.384184662
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347952547,
    "lat": 31.384675754
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351053142,
    "lat": 31.375443504
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318577333,
    "lat": 31.354306033
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318907819,
    "lat": 31.352075071
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327120611,
    "lat": 31.384770847
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324893105,
    "lat": 31.386025909
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317295564,
    "lat": 31.386351247
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.331441107,
    "lat": 31.384798105
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347106275,
    "lat": 31.37293451
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3453571,
    "lat": 31.373142361
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32912069,
    "lat": 31.376755793
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324109246,
    "lat": 31.383534615
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325273972,
    "lat": 31.381969485
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322692692,
    "lat": 31.376674389
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322997885,
    "lat": 31.376511014
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322474341,
    "lat": 31.383030893
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320008392,
    "lat": 31.370712183
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.30674174,
    "lat": 31.389044972
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355238504,
    "lat": 31.378429302
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318509217,
    "lat": 31.353198939
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.30057148,
    "lat": 31.382553962
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325364555,
    "lat": 31.386865037
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325280814,
    "lat": 31.386365105
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304749476,
    "lat": 31.364707137
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297159694,
    "lat": 31.332350256
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300653036,
    "lat": 31.332129149
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.286271698,
    "lat": 31.330672377
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326649275,
    "lat": 31.375830792
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328082706,
    "lat": 31.371474936
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335773483,
    "lat": 31.383781617
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.291837544,
    "lat": 31.378978668
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276948414,
    "lat": 31.359113073
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273435942,
    "lat": 31.355210006
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.287365817,
    "lat": 31.334319927
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305982661,
    "lat": 31.323801216
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.26440205,
    "lat": 31.336267463
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.249129039,
    "lat": 31.341588195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332459851,
    "lat": 31.347689374
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352550536,
    "lat": 31.346017484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359211298,
    "lat": 31.343623854
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360380368,
    "lat": 31.336661372
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.291623372,
    "lat": 31.379896689
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357313644,
    "lat": 31.332443434
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357061454,
    "lat": 31.33223583
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355504514,
    "lat": 31.331205475
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361529382,
    "lat": 31.318442815
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350779032,
    "lat": 31.329500691
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353865792,
    "lat": 31.327227012
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334227634,
    "lat": 31.33122455
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308369392,
    "lat": 31.328477867
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322730086,
    "lat": 31.34817653
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.277060723,
    "lat": 31.342850961
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.368116451,
    "lat": 31.301565568
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362595323,
    "lat": 31.297221657
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.355494858,
    "lat": 31.30361886
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360601466,
    "lat": 31.297341622
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364421999,
    "lat": 31.314711882
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354732456,
    "lat": 31.322742341
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367882781,
    "lat": 31.304656262
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.34706418,
    "lat": 31.319632978
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345087915,
    "lat": 31.316007819
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338637851,
    "lat": 31.321817327
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34095353,
    "lat": 31.321986216
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331239892,
    "lat": 31.348638656
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301984874,
    "lat": 31.302230256
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.292597847,
    "lat": 31.303891087
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355545313,
    "lat": 31.296607594
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362396682,
    "lat": 31.301819511
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363876028,
    "lat": 31.298143789
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280620818,
    "lat": 31.302890696
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.331610578,
    "lat": 31.310503509
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345799231,
    "lat": 31.316143216
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281522742,
    "lat": 31.345067322
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310092653,
    "lat": 31.384097997
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34850422,
    "lat": 31.37217406
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314416116,
    "lat": 31.384601963
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281901226,
    "lat": 31.308142811
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.285130916,
    "lat": 31.303361086
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.293016196,
    "lat": 31.295521973
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276833222,
    "lat": 31.359473629
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.308319434,
    "lat": 31.365320787
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.347924896,
    "lat": 31.304116898
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.343963574,
    "lat": 31.301815563
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316046368,
    "lat": 31.286013481
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316106954,
    "lat": 31.286813093
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.264288891,
    "lat": 31.353803243
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281727194,
    "lat": 31.308254891
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280429463,
    "lat": 31.306179495
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279946973,
    "lat": 31.305895191
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279614221,
    "lat": 31.306030235
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279356339,
    "lat": 31.306250571
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279381295,
    "lat": 31.305809899
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279048921,
    "lat": 31.305670211
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.344656114,
    "lat": 31.295396736
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.349350057,
    "lat": 31.297021105
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.349123402,
    "lat": 31.296883659
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326091303,
    "lat": 31.277346668
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340654468,
    "lat": 31.345435815
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330280057,
    "lat": 31.389800665
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353977467,
    "lat": 31.379259457
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365182861,
    "lat": 31.373273859
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360744506,
    "lat": 31.368430952
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338474606,
    "lat": 31.321584559
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363292031,
    "lat": 31.336458392
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359862354,
    "lat": 31.348689446
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356638142,
    "lat": 31.348011482
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35876951,
    "lat": 31.349549759
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353231183,
    "lat": 31.356321253
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350903718,
    "lat": 31.364824831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329029217,
    "lat": 31.378363539
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330390466,
    "lat": 31.378538453
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296313185,
    "lat": 31.316384576
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296666571,
    "lat": 31.316585152
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341048298,
    "lat": 31.344913215
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340707719,
    "lat": 31.345683533
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340375466,
    "lat": 31.344779904
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.354106168,
    "lat": 31.338295336
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340035957,
    "lat": 31.326581767
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.337788921,
    "lat": 31.322292775
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335726761,
    "lat": 31.321481805
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367827531,
    "lat": 31.372556131
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356298673,
    "lat": 31.365714089
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318007361,
    "lat": 31.353320671
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318142877,
    "lat": 31.358536381
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3606826,
    "lat": 31.370368867
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.368085985,
    "lat": 31.372964208
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363229363,
    "lat": 31.371212672
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329485943,
    "lat": 31.379155969
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329835602,
    "lat": 31.379414173
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359421878,
    "lat": 31.376222659
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350043194,
    "lat": 31.364279088
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306550125,
    "lat": 31.357466994
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357476421,
    "lat": 31.356754236
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355040004,
    "lat": 31.354120036
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355132606,
    "lat": 31.354802341
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354782221,
    "lat": 31.354450233
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353968952,
    "lat": 31.353638043
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354351343,
    "lat": 31.353429161
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35471728,
    "lat": 31.353696102
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354294466,
    "lat": 31.353917024
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356206303,
    "lat": 31.356253293
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345650415,
    "lat": 31.299652636
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330150672,
    "lat": 31.352106764
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346401774,
    "lat": 31.358786912
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.264805868,
    "lat": 31.355719125
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346220769,
    "lat": 31.315103261
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347027846,
    "lat": 31.30855286
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345660284,
    "lat": 31.309414419
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.331919957,
    "lat": 31.302086743
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335958912,
    "lat": 31.296376886
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.346912232,
    "lat": 31.299970937
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.301834034,
    "lat": 31.388747791
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318174168,
    "lat": 31.388783769
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318009129,
    "lat": 31.388267062
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326701699,
    "lat": 31.390084643
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328244892,
    "lat": 31.390279061
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344934396,
    "lat": 31.386973513
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333208548,
    "lat": 31.38575586
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33541913,
    "lat": 31.384491099
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332306719,
    "lat": 31.386140787
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329313684,
    "lat": 31.384286599
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328957638,
    "lat": 31.383301115
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329485349,
    "lat": 31.383708024
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327164692,
    "lat": 31.382976859
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326968203,
    "lat": 31.388198618
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326954473,
    "lat": 31.385200181
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325946405,
    "lat": 31.385574801
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325391286,
    "lat": 31.386017534
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325532273,
    "lat": 31.385090695
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324587556,
    "lat": 31.386402371
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324911091,
    "lat": 31.385608857
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324211403,
    "lat": 31.385098768
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323153783,
    "lat": 31.385520311
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323661223,
    "lat": 31.386422804
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322166149,
    "lat": 31.385588424
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32187667,
    "lat": 31.385986883
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321321551,
    "lat": 31.385966449
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321508849,
    "lat": 31.385584007
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322540769,
    "lat": 31.386470483
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321897103,
    "lat": 31.386460266
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32118192,
    "lat": 31.386330852
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319884373,
    "lat": 31.386344475
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323133349,
    "lat": 31.386865537
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323630572,
    "lat": 31.386845103
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3247953,
    "lat": 31.386916622
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326730382,
    "lat": 31.384739058
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325509344,
    "lat": 31.384719785
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324174188,
    "lat": 31.384717464
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319925921,
    "lat": 31.384240473
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318724413,
    "lat": 31.384203692
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317858019,
    "lat": 31.385041478
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317412562,
    "lat": 31.385854744
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.312295444,
    "lat": 31.384679555
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.311153766,
    "lat": 31.384726634
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309676646,
    "lat": 31.383414293
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311010944,
    "lat": 31.382296154
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310009994,
    "lat": 31.381785013
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311059607,
    "lat": 31.381843014
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309270585,
    "lat": 31.381460493
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307546298,
    "lat": 31.380048108
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307640457,
    "lat": 31.379500808
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308340257,
    "lat": 31.382721892
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307958244,
    "lat": 31.382319694
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298763266,
    "lat": 31.380321697
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279971464,
    "lat": 31.371058188
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.281724433,
    "lat": 31.371800619
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.29628443,
    "lat": 31.368788118
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296307564,
    "lat": 31.369219944
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296723968,
    "lat": 31.368055555
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.298713453,
    "lat": 31.368865229
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.300048417,
    "lat": 31.370221425
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.301845673,
    "lat": 31.370199926
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300482682,
    "lat": 31.369619473
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301867171,
    "lat": 31.369675369
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.301058836,
    "lat": 31.369301299
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300521379,
    "lat": 31.369318497
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302219743,
    "lat": 31.368841236
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302056356,
    "lat": 31.368454267
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301037338,
    "lat": 31.368428469
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301101833,
    "lat": 31.366282942
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302090753,
    "lat": 31.366450628
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302275638,
    "lat": 31.366024963
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.303135569,
    "lat": 31.366080858
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303216337,
    "lat": 31.365346107
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.302413227,
    "lat": 31.365736886
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303187165,
    "lat": 31.365668091
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.304756538,
    "lat": 31.363857937
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307069752,
    "lat": 31.363638655
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.304051395,
    "lat": 31.366442029
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304657646,
    "lat": 31.366067959
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304967221,
    "lat": 31.367663131
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305014517,
    "lat": 31.367246064
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3036474,
    "lat": 31.368510507
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305275764,
    "lat": 31.370064573
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3051767,
    "lat": 31.369674509
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305127168,
    "lat": 31.369234912
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303789804,
    "lat": 31.36963736
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305473892,
    "lat": 31.368912954
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305046679,
    "lat": 31.368485741
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309399304,
    "lat": 31.369965509
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309393113,
    "lat": 31.3696807
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309393113,
    "lat": 31.369278253
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308365323,
    "lat": 31.370564741
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307226087,
    "lat": 31.370522744
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3085334,
    "lat": 31.370167749
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306266405,
    "lat": 31.37005219
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306299555,
    "lat": 31.369712264
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306302219,
    "lat": 31.369327547
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307215021,
    "lat": 31.369758029
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308547976,
    "lat": 31.369768463
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307205869,
    "lat": 31.371000044
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306316946,
    "lat": 31.370526749
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305428481,
    "lat": 31.37047667
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30387253,
    "lat": 31.372942043
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307308323,
    "lat": 31.368499767
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307464485,
    "lat": 31.368087602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306437389,
    "lat": 31.368092952
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307336098,
    "lat": 31.367242388
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307266555,
    "lat": 31.366841179
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306415991,
    "lat": 31.367231689
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306362497,
    "lat": 31.366894673
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307330748,
    "lat": 31.364257391
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307576823,
    "lat": 31.364717444
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307699861,
    "lat": 31.364075509
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308169684,
    "lat": 31.363985957
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308630666,
    "lat": 31.362288791
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309491929,
    "lat": 31.362508118
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30642669,
    "lat": 31.361245647
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306699512,
    "lat": 31.361534517
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307373544,
    "lat": 31.361657555
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305025132,
    "lat": 31.359795944
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305319353,
    "lat": 31.36042718
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30539446,
    "lat": 31.360632611
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306212712,
    "lat": 31.358084117
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30514282,
    "lat": 31.358308795
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309475881,
    "lat": 31.359036321
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305886395,
    "lat": 31.357597317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310294091,
    "lat": 31.364996344
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310608382,
    "lat": 31.36360052
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311042844,
    "lat": 31.363193791
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.312022693,
    "lat": 31.366031656
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.312623544,
    "lat": 31.364238347
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315379755,
    "lat": 31.366610938
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315764916,
    "lat": 31.3660409
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316119264,
    "lat": 31.364361598
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315225691,
    "lat": 31.364554179
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315903574,
    "lat": 31.363984141
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315996013,
    "lat": 31.362897987
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314231976,
    "lat": 31.363822373
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316681599,
    "lat": 31.363352477
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315399626,
    "lat": 31.364026304
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314037034,
    "lat": 31.367557917
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317183894,
    "lat": 31.367002312
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31726501,
    "lat": 31.366885505
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318922491,
    "lat": 31.370429305
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32191274,
    "lat": 31.370245941
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322716722,
    "lat": 31.370664388
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323257411,
    "lat": 31.370993503
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324545663,
    "lat": 31.370810139
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324216548,
    "lat": 31.371694049
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323694665,
    "lat": 31.371087536
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325843694,
    "lat": 31.369945788
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323839663,
    "lat": 31.373881589
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325633813,
    "lat": 31.37360179
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325789531,
    "lat": 31.374055405
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325972331,
    "lat": 31.373804901
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326141591,
    "lat": 31.373642412
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326378554,
    "lat": 31.373446071
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326933724,
    "lat": 31.373527316
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327190999,
    "lat": 31.373703346
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324259427,
    "lat": 31.374786605
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328578925,
    "lat": 31.372789345
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329431992,
    "lat": 31.372288337
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329858526,
    "lat": 31.371056129
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329154407,
    "lat": 31.3708801
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328978377,
    "lat": 31.371130603
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329188259,
    "lat": 31.371387878
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32993977,
    "lat": 31.371523285
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328098229,
    "lat": 31.370419714
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329649696,
    "lat": 31.370356157
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347586445,
    "lat": 31.371785458
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.350933346,
    "lat": 31.371007383
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359269031,
    "lat": 31.369999951
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360911699,
    "lat": 31.370746227
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36063278,
    "lat": 31.371022013
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360482351,
    "lat": 31.371210048
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362638945,
    "lat": 31.369429074
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361339242,
    "lat": 31.369077072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361386508,
    "lat": 31.36936374
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363762002,
    "lat": 31.37259555
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364802428,
    "lat": 31.37165243
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364330868,
    "lat": 31.374010231
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361314379,
    "lat": 31.374144962
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354931605,
    "lat": 31.374373085
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.276885449,
    "lat": 31.369658383
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323297642,
    "lat": 31.376189887
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326683894,
    "lat": 31.375462337
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331456383,
    "lat": 31.377737802
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332167466,
    "lat": 31.377730317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329974337,
    "lat": 31.377805168
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330131523,
    "lat": 31.378044691
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339323205,
    "lat": 31.376121024
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346194512,
    "lat": 31.376180905
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349757411,
    "lat": 31.375933897
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350086755,
    "lat": 31.37570186
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353208035,
    "lat": 31.377490794
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352671915,
    "lat": 31.376606342
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352868163,
    "lat": 31.376543533
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357976032,
    "lat": 31.37574677
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356965546,
    "lat": 31.377939899
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357795725,
    "lat": 31.377772616
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363821882,
    "lat": 31.375327605
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356047413,
    "lat": 31.377632339
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354441144,
    "lat": 31.378867118
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35360682,
    "lat": 31.378578614
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354207222,
    "lat": 31.378297907
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354292993,
    "lat": 31.377915833
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355111723,
    "lat": 31.378290109
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355641947,
    "lat": 31.37867998
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352827078,
    "lat": 31.37798601
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353076596,
    "lat": 31.381962695
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352819281,
    "lat": 31.381487052
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349294846,
    "lat": 31.380754094
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352526011,
    "lat": 31.381897933
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347817235,
    "lat": 31.381034802
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347362385,
    "lat": 31.378728064
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343717091,
    "lat": 31.379605274
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343970507,
    "lat": 31.379143927
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.339974328,
    "lat": 31.378567784
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339714414,
    "lat": 31.37875189
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325746633,
    "lat": 31.382017277
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325294383,
    "lat": 31.381260927
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325372357,
    "lat": 31.380621538
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324257326,
    "lat": 31.381112776
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326744703,
    "lat": 31.381214142
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324483451,
    "lat": 31.382820411
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323153016,
    "lat": 31.383484492
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322196388,
    "lat": 31.383619863
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.299999576,
    "lat": 31.38493374
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326101425,
    "lat": 31.384286402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327129972,
    "lat": 31.384252747
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332848268,
    "lat": 31.38265016
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333857874,
    "lat": 31.384233943
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33735015,
    "lat": 31.382592724
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341507634,
    "lat": 31.383256699
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342558587,
    "lat": 31.382352911
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342213856,
    "lat": 31.382697642
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.346575453,
    "lat": 31.384211461
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34551227,
    "lat": 31.382901053
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.300986128,
    "lat": 31.378913279
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.286654314,
    "lat": 31.379743591
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352543181,
    "lat": 31.367313827
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358177906,
    "lat": 31.365964175
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354215735,
    "lat": 31.365924598
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355306699,
    "lat": 31.366241831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35523174,
    "lat": 31.366110146
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355835464,
    "lat": 31.365871088
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348509116,
    "lat": 31.367921286
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329595388,
    "lat": 31.3678225
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325256401,
    "lat": 31.367700917
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322270022,
    "lat": 31.368308831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322756354,
    "lat": 31.367199388
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322528386,
    "lat": 31.36654588
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323865797,
    "lat": 31.366485089
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322459996,
    "lat": 31.366105143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319066315,
    "lat": 31.36590757
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321643988,
    "lat": 31.363816362
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32023351,
    "lat": 31.364959224
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317953832,
    "lat": 31.365123361
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324920528,
    "lat": 31.363974403
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325339989,
    "lat": 31.364320915
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317570846,
    "lat": 31.363044295
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318364174,
    "lat": 31.362433341
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316830198,
    "lat": 31.362538084
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314377943,
    "lat": 31.362254195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317427716,
    "lat": 31.363284305
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318230715,
    "lat": 31.362628439
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314215721,
    "lat": 31.36235964
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314532054,
    "lat": 31.361816196
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316381384,
    "lat": 31.362035196
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316754495,
    "lat": 31.36221364
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32690148,
    "lat": 31.365149858
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328797386,
    "lat": 31.364728955
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321815821,
    "lat": 31.364346859
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321434599,
    "lat": 31.364046748
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321426488,
    "lat": 31.363608749
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321807709,
    "lat": 31.363268083
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.334688135,
    "lat": 31.364111637
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339116795,
    "lat": 31.363211305
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341347347,
    "lat": 31.362035196
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336318466,
    "lat": 31.361670196
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342191776,
    "lat": 31.363313843
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346432458,
    "lat": 31.364173827
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351356444,
    "lat": 31.363446527
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351161777,
    "lat": 31.363268083
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35450355,
    "lat": 31.362894972
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355870856,
    "lat": 31.363628916
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351003675,
    "lat": 31.360408527
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351275709,
    "lat": 31.360194039
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346026247,
    "lat": 31.358968174
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346434513,
    "lat": 31.359061735
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346023487,
    "lat": 31.359796531
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346855537,
    "lat": 31.358593931
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338278557,
    "lat": 31.360457221
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336015133,
    "lat": 31.360288199
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335882855,
    "lat": 31.360898148
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337205636,
    "lat": 31.358164401
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337698004,
    "lat": 31.357730823
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338249162,
    "lat": 31.357238455
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335272906,
    "lat": 31.357694079
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335808118,
    "lat": 31.360538716
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332693484,
    "lat": 31.359127091
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315945614,
    "lat": 31.361390516
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315761894,
    "lat": 31.361133309
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310316448,
    "lat": 31.360442523
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310213565,
    "lat": 31.361926977
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307202419,
    "lat": 31.361071804
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306402584,
    "lat": 31.361825558
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276407946,
    "lat": 31.35984731
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.277570969,
    "lat": 31.358749809
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.27314752,
    "lat": 31.354366174
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273579787,
    "lat": 31.354332047
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273630976,
    "lat": 31.354610745
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273539973,
    "lat": 31.354895131
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273232836,
    "lat": 31.355543531
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.272982577,
    "lat": 31.355822229
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303706243,
    "lat": 31.357250982
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303084843,
    "lat": 31.355977921
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304758047,
    "lat": 31.355544448
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304654013,
    "lat": 31.356050166
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304067381,
    "lat": 31.35583054
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304067381,
    "lat": 31.356110852
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304336134,
    "lat": 31.35646052
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304526861,
    "lat": 31.356648358
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305038359,
    "lat": 31.356454741
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315299782,
    "lat": 31.354567526
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31552953,
    "lat": 31.354407523
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315152087,
    "lat": 31.355228051
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315537735,
    "lat": 31.354903942
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31442592,
    "lat": 31.354345983
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314187967,
    "lat": 31.354739837
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313154101,
    "lat": 31.355006508
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31473772,
    "lat": 31.354034183
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31523414,
    "lat": 31.353993156
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315221832,
    "lat": 31.353435197
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314983879,
    "lat": 31.353718279
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314692591,
    "lat": 31.355022919
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313564365,
    "lat": 31.355892679
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311915596,
    "lat": 31.353731079
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31648277,
    "lat": 31.353784703
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316633684,
    "lat": 31.353276006
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31725625,
    "lat": 31.357937435
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317185356,
    "lat": 31.357204867
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316848611,
    "lat": 31.356980371
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316913597,
    "lat": 31.356708612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316470512,
    "lat": 31.356602272
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318698089,
    "lat": 31.358070475
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318632059,
    "lat": 31.358487146
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319835452,
    "lat": 31.356507707
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319729819,
    "lat": 31.356819324
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321335437,
    "lat": 31.358530575
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319434752,
    "lat": 31.353477888
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320346565,
    "lat": 31.354141752
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320938444,
    "lat": 31.35332192
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319950646,
    "lat": 31.353929796
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321290609,
    "lat": 31.352993755
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321331668,
    "lat": 31.352616015
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320243612,
    "lat": 31.352225958
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31987819,
    "lat": 31.352037088
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320436588,
    "lat": 31.353006073
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317641816,
    "lat": 31.352182715
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314959732,
    "lat": 31.352043806
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324957486,
    "lat": 31.356745679
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325529247,
    "lat": 31.356627598
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325127357,
    "lat": 31.35637072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324897409,
    "lat": 31.356217422
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313170096,
    "lat": 31.358248969
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.257584399,
    "lat": 31.351882647
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.262338953,
    "lat": 31.351855393
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303980043,
    "lat": 31.35364074
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304090439,
    "lat": 31.35389833
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304265232,
    "lat": 31.353484347
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304605618,
    "lat": 31.353171559
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305028801,
    "lat": 31.354965487
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305313989,
    "lat": 31.354753895
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313363664,
    "lat": 31.352104402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328493303,
    "lat": 31.353081127
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328735487,
    "lat": 31.353395966
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328251119,
    "lat": 31.352733997
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327867661,
    "lat": 31.352604832
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327560895,
    "lat": 31.353347529
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327589472,
    "lat": 31.351237138
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32823465,
    "lat": 31.35124295
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327909155,
    "lat": 31.351373941
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327740595,
    "lat": 31.351516134
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327455787,
    "lat": 31.351673069
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325671375,
    "lat": 31.350981392
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325886434,
    "lat": 31.35040015
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326177055,
    "lat": 31.349970031
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325834123,
    "lat": 31.350045593
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325316818,
    "lat": 31.350103717
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325473753,
    "lat": 31.350417587
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326915232,
    "lat": 31.349772409
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328682207,
    "lat": 31.350115342
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328368336,
    "lat": 31.349754972
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328124215,
    "lat": 31.349993281
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327792907,
    "lat": 31.350150216
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327566223,
    "lat": 31.350237402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327467412,
    "lat": 31.349673598
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327572035,
    "lat": 31.349917719
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327973092,
    "lat": 31.35073727
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329908626,
    "lat": 31.350574522
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326037557,
    "lat": 31.3495341
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326688548,
    "lat": 31.349470163
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327955654,
    "lat": 31.349464351
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329519194,
    "lat": 31.349272541
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329734254,
    "lat": 31.349586412
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330425931,
    "lat": 31.349446914
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330117873,
    "lat": 31.349080732
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330263184,
    "lat": 31.349778221
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330902549,
    "lat": 31.350719833
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330861863,
    "lat": 31.351556821
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330617741,
    "lat": 31.351295262
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33085605,
    "lat": 31.352562369
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331053672,
    "lat": 31.352364747
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331233857,
    "lat": 31.352207811
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331605852,
    "lat": 31.353713227
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331687226,
    "lat": 31.354794337
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333018269,
    "lat": 31.35437003
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332452913,
    "lat": 31.357221484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333563009,
    "lat": 31.356899129
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334025977,
    "lat": 31.356003552
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333830845,
    "lat": 31.356656402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344621293,
    "lat": 31.355580036
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34635888,
    "lat": 31.35194416
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349382081,
    "lat": 31.352366002
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349522695,
    "lat": 31.352687405
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350235808,
    "lat": 31.352325827
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350034931,
    "lat": 31.351994379
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352706597,
    "lat": 31.356714991
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351621322,
    "lat": 31.348221667
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35218208,
    "lat": 31.348151572
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351952679,
    "lat": 31.347922171
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351761511,
    "lat": 31.347622143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351621322,
    "lat": 31.34738053
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351143403,
    "lat": 31.347686398
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351379176,
    "lat": 31.347966777
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337143268,
    "lat": 31.348645028
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332786825,
    "lat": 31.349787675
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315190431,
    "lat": 31.350484462
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316313699,
    "lat": 31.349570313
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.26230376,
    "lat": 31.349626541
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.262645919,
    "lat": 31.349546138
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359593516,
    "lat": 31.348901884
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331207689,
    "lat": 31.348110615
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331401466,
    "lat": 31.34790829
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335643785,
    "lat": 31.347021863
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333359464,
    "lat": 31.347552893
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.260523328,
    "lat": 31.34460581
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.261305759,
    "lat": 31.344896661
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.261567934,
    "lat": 31.344609907
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280070096,
    "lat": 31.346653402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280112568,
    "lat": 31.346228677
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279985151,
    "lat": 31.345018212
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279277276,
    "lat": 31.344267866
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.278732213,
    "lat": 31.34419
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280063017,
    "lat": 31.344586409
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280770891,
    "lat": 31.346625087
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280749655,
    "lat": 31.34627115
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281018647,
    "lat": 31.345471252
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.278838394,
    "lat": 31.343772354
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.27942593,
    "lat": 31.343772354
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281379663,
    "lat": 31.344699669
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276566118,
    "lat": 31.343206054
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279730316,
    "lat": 31.343234369
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276176787,
    "lat": 31.342845038
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276127236,
    "lat": 31.342462786
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276679378,
    "lat": 31.342462786
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276594433,
    "lat": 31.342830881
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319214408,
    "lat": 31.346230943
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333959751,
    "lat": 31.346352238
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337717571,
    "lat": 31.345569528
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34511581,
    "lat": 31.344671354
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345013876,
    "lat": 31.344436906
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348128748,
    "lat": 31.347337195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348220619,
    "lat": 31.346937287
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350446953,
    "lat": 31.343183119
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353902511,
    "lat": 31.342958865
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356542599,
    "lat": 31.342591903
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352017685,
    "lat": 31.346505176
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358176653,
    "lat": 31.344253406
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355009323,
    "lat": 31.343756968
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359477494,
    "lat": 31.33945547
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361378333,
    "lat": 31.340275055
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359893689,
    "lat": 31.338994674
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359769537,
    "lat": 31.334297305
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360264151,
    "lat": 31.334315853
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.360023027,
    "lat": 31.335017587
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355994423,
    "lat": 31.338024448
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356060394,
    "lat": 31.33818247
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356006697,
    "lat": 31.338352765
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353989045,
    "lat": 31.338008823
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35282604,
    "lat": 31.337207667
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354309549,
    "lat": 31.3405695
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354587714,
    "lat": 31.340428921
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354046339,
    "lat": 31.340043079
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337887763,
    "lat": 31.342424093
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338798839,
    "lat": 31.342561455
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330757496,
    "lat": 31.341519756
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3184176,
    "lat": 31.341753507
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291631576,
    "lat": 31.340430809
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.292765024,
    "lat": 31.340286837
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291375046,
    "lat": 31.340336573
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.260960739,
    "lat": 31.344768496
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.326463173,
    "lat": 31.27828057
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.324188931,
    "lat": 31.305751484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326094377,
    "lat": 31.316306075
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326269995,
    "lat": 31.315959231
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314092854,
    "lat": 31.306066793
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317202445,
    "lat": 31.315734055
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316155384,
    "lat": 31.32013442
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320131508,
    "lat": 31.314853982
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319147632,
    "lat": 31.315661844
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.327224715,
    "lat": 31.299694966
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.32640539,
    "lat": 31.307905829
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327627202,
    "lat": 31.314580302
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329160966,
    "lat": 31.321878679
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329999337,
    "lat": 31.322411597
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329030986,
    "lat": 31.322171134
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329427425,
    "lat": 31.322255621
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329583401,
    "lat": 31.32200216
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328569557,
    "lat": 31.323659405
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.327393238,
    "lat": 31.327220857
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.327464727,
    "lat": 31.33175066
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.331552598,
    "lat": 31.337573764
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332241492,
    "lat": 31.31699793
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.329537908,
    "lat": 31.283697054
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.335088054,
    "lat": 31.299619604
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.333905236,
    "lat": 31.306034117
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334126202,
    "lat": 31.304675826
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335685962,
    "lat": 31.310726395
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.335932924,
    "lat": 31.313170019
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332850162,
    "lat": 31.321402285
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333647331,
    "lat": 31.322374375
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335472956,
    "lat": 31.32182147
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.336043264,
    "lat": 31.32325263
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.333638777,
    "lat": 31.330119411
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.333911735,
    "lat": 31.32960599
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335614473,
    "lat": 31.336150483
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335619166,
    "lat": 31.33823096
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336439727,
    "lat": 31.338671905
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.337652747,
    "lat": 31.321312732
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339149299,
    "lat": 31.321728751
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.337427694,
    "lat": 31.320695861
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.341950998,
    "lat": 31.310596415
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342353508,
    "lat": 31.319270204
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342814925,
    "lat": 31.318947844
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340267757,
    "lat": 31.334792192
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.343786152,
    "lat": 31.338040017
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.344024179,
    "lat": 31.304578341
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.341064473,
    "lat": 31.30303127
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348125048,
    "lat": 31.300841416
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348943922,
    "lat": 31.300568458
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.342925848,
    "lat": 31.295310767
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.344934039,
    "lat": 31.295635717
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.343904215,
    "lat": 31.291857576
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345375971,
    "lat": 31.315815112
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354770566,
    "lat": 31.349748208
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35463175,
    "lat": 31.349504135
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338429818,
    "lat": 31.349401493
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339960878,
    "lat": 31.349455973
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.26629571,
    "lat": 31.348485991
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.257570709,
    "lat": 31.348489478
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.253132676,
    "lat": 31.347701455
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.251372978,
    "lat": 31.348175664
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.251144339,
    "lat": 31.348025731
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.250760554,
    "lat": 31.346749543
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.251454634,
    "lat": 31.346895992
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.253161256,
    "lat": 31.346550791
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.254263619,
    "lat": 31.346219537
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.254010484,
    "lat": 31.346045192
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.250430334,
    "lat": 31.344631033
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.250728218,
    "lat": 31.344738152
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.256978699,
    "lat": 31.344573708
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.258669152,
    "lat": 31.344461428
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.261188093,
    "lat": 31.344336594
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.265152518,
    "lat": 31.345766239
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355154082,
    "lat": 31.341514371
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.249715874,
    "lat": 31.338527083
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.262584077,
    "lat": 31.337881701
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.275140509,
    "lat": 31.336374057
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.274622181,
    "lat": 31.336423248
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273585526,
    "lat": 31.337187596
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.275043045,
    "lat": 31.336737313
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.272672251,
    "lat": 31.338133563
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.275140509,
    "lat": 31.337104351
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.274458266,
    "lat": 31.337145974
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28978874,
    "lat": 31.338849996
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.289476284,
    "lat": 31.338591336
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.286447861,
    "lat": 31.336891553
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.288553336,
    "lat": 31.338016533
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.293949217,
    "lat": 31.336751443
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348771585,
    "lat": 31.338178162
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350558462,
    "lat": 31.335418251
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364839487,
    "lat": 31.331795309
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363552206,
    "lat": 31.330938215
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358515308,
    "lat": 31.333188071
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357940983,
    "lat": 31.33289486
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.35868721,
    "lat": 31.334985211
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.358594262,
    "lat": 31.33473982
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.356769096,
    "lat": 31.332011611
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357584505,
    "lat": 31.3322534
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357761952,
    "lat": 31.332531276
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354665085,
    "lat": 31.332170398
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352924418,
    "lat": 31.332856065
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333958748,
    "lat": 31.335230601
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333586955,
    "lat": 31.335024906
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334026347,
    "lat": 31.334747038
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334698109,
    "lat": 31.334508864
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333798201,
    "lat": 31.335371339
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333696803,
    "lat": 31.334451125
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335002303,
    "lat": 31.334227385
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300362684,
    "lat": 31.331576967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300792612,
    "lat": 31.33174788
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300687158,
    "lat": 31.331108109
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301333402,
    "lat": 31.331553871
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297584028,
    "lat": 31.332522705
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298561041,
    "lat": 31.332449402
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298627055,
    "lat": 31.332906137
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296551299,
    "lat": 31.332953502
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296787894,
    "lat": 31.332690062
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.29592601,
    "lat": 31.332928241
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288553524,
    "lat": 31.331484726
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288811244,
    "lat": 31.331340373
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.290222367,
    "lat": 31.334548559
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288401426,
    "lat": 31.333891774
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.286242756,
    "lat": 31.332398654
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.278435317,
    "lat": 31.327687916
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342560101,
    "lat": 31.329345092
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348725741,
    "lat": 31.329350721
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.350119378,
    "lat": 31.330196552
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350444866,
    "lat": 31.329957684
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350623655,
    "lat": 31.327745187
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351389238,
    "lat": 31.327185202
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351522184,
    "lat": 31.326899334
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35024774,
    "lat": 31.327408413
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354271638,
    "lat": 31.328849484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354534091,
    "lat": 31.328399152
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355891053,
    "lat": 31.327784347
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356331149,
    "lat": 31.327545472
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354820703,
    "lat": 31.327188335
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358064027,
    "lat": 31.32883382
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356684143,
    "lat": 31.330552896
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.355290505,
    "lat": 31.329914609
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359557946,
    "lat": 31.328347755
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364607875,
    "lat": 31.331162298
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365309851,
    "lat": 31.327644106
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.359269706,
    "lat": 31.326519481
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.359453079,
    "lat": 31.325395576
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357431389,
    "lat": 31.32615529
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.315897336,
    "lat": 31.325101871
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.315668119,
    "lat": 31.325450401
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308858093,
    "lat": 31.326591682
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309173266,
    "lat": 31.326016515
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305140486,
    "lat": 31.324499037
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305627572,
    "lat": 31.32459694
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.298206683,
    "lat": 31.326267386
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.291229043,
    "lat": 31.32350018
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.286906017,
    "lat": 31.326965906
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.287373619,
    "lat": 31.326703533
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.286685969,
    "lat": 31.32672703
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.287190246,
    "lat": 31.326456824
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283848267,
    "lat": 31.32686409
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.2840729,
    "lat": 31.327095134
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276319326,
    "lat": 31.325774807
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.361103983,
    "lat": 31.32097184
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.359698534,
    "lat": 31.321118374
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.360882652,
    "lat": 31.320286439
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.360921385,
    "lat": 31.320726042
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.359444004,
    "lat": 31.321288542
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.360644722,
    "lat": 31.319931918
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354071207,
    "lat": 31.32190776
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343946886,
    "lat": 31.320151248
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.339977103,
    "lat": 31.321682006
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.340387892,
    "lat": 31.321957298
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.340207286,
    "lat": 31.321446041
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335617778,
    "lat": 31.322167737
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333343607,
    "lat": 31.322257546
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334632857,
    "lat": 31.321510705
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.335739509,
    "lat": 31.319638847
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.333753068,
    "lat": 31.320111542
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306319155,
    "lat": 31.32333053
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305865427,
    "lat": 31.323141459
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307492206,
    "lat": 31.32165251
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307818669,
    "lat": 31.321345264
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308128531,
    "lat": 31.322059019
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307951467,
    "lat": 31.320730769
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305677296,
    "lat": 31.323519601
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.308073199,
    "lat": 31.319950826
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.297908596,
    "lat": 31.320934025
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.295025767,
    "lat": 31.321189277
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.294992567,
    "lat": 31.321676145
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291999072,
    "lat": 31.319788419
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291484479,
    "lat": 31.319435588
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291008618,
    "lat": 31.320432973
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28614698,
    "lat": 31.322597877
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.285473143,
    "lat": 31.32243225
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.284736555,
    "lat": 31.322126708
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.284952574,
    "lat": 31.322051078
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.284686977,
    "lat": 31.321872593
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.289652969,
    "lat": 31.318045849
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291091617,
    "lat": 31.316495367
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.290743022,
    "lat": 31.316348826
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.294433708,
    "lat": 31.317015349
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295130133,
    "lat": 31.317374607
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295894489,
    "lat": 31.316117197
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297062007,
    "lat": 31.316731723
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297875397,
    "lat": 31.31882108
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.29657508,
    "lat": 31.315469577
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298351257,
    "lat": 31.316367735
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308875522,
    "lat": 31.317800042
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.308814656,
    "lat": 31.31936941
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310922829,
    "lat": 31.316802629
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307177696,
    "lat": 31.315685892
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338589139,
    "lat": 31.3179324
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343535876,
    "lat": 31.317785861
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345223521,
    "lat": 31.315100857
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.346900099,
    "lat": 31.315805206
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.347126963,
    "lat": 31.315351398
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.347508758,
    "lat": 31.315663391
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346944365,
    "lat": 31.314424867
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352846142,
    "lat": 31.316914189
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352431812,
    "lat": 31.316717541
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352191004,
    "lat": 31.316396854
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356561175,
    "lat": 31.316613545
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.356173846,
    "lat": 31.317067347
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.355349833,
    "lat": 31.317458749
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354513868,
    "lat": 31.319095246
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359377605,
    "lat": 31.315786297
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358012203,
    "lat": 31.31506304
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36155771,
    "lat": 31.315635028
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361701575,
    "lat": 31.315219037
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362044637,
    "lat": 31.315261582
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361552177,
    "lat": 31.31797967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364363074,
    "lat": 31.316859355
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36705224,
    "lat": 31.315493213
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367478301,
    "lat": 31.313035054
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.368490888,
    "lat": 31.313205236
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367865629,
    "lat": 31.312623779
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367577899,
    "lat": 31.312420504
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.367367635,
    "lat": 31.312259775
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36596772,
    "lat": 31.31450523
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365707657,
    "lat": 31.314235778
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364750403,
    "lat": 31.313673236
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362819294,
    "lat": 31.314717954
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364274542,
    "lat": 31.314992132
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362703096,
    "lat": 31.312793962
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.358514416,
    "lat": 31.312860144
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.358265419,
    "lat": 31.312647415
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351359908,
    "lat": 31.313408509
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311537021,
    "lat": 31.314018325
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311835817,
    "lat": 31.314117597
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.312123547,
    "lat": 31.314216869
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303757254,
    "lat": 31.313914326
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300664161,
    "lat": 31.314183779
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.301408938,
    "lat": 31.313419855
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.284835573,
    "lat": 31.3131361
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.284673033,
    "lat": 31.312704143
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.284457236,
    "lat": 31.312316503
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282323818,
    "lat": 31.309731802
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282591489,
    "lat": 31.309548317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282890285,
    "lat": 31.30930633
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283179744,
    "lat": 31.309072319
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282750225,
    "lat": 31.308926063
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28314862,
    "lat": 31.309548317
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283391391,
    "lat": 31.309375469
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283643501,
    "lat": 31.308774487
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281483453,
    "lat": 31.309077638
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281838274,
    "lat": 31.308875537
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281912973,
    "lat": 31.309146777
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282193094,
    "lat": 31.30893404
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282071708,
    "lat": 31.308620252
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282317593,
    "lat": 31.308375603
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282625726,
    "lat": 31.308577705
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28252924,
    "lat": 31.310018994
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.282495003,
    "lat": 31.307785252
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283270005,
    "lat": 31.307431571
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281078834,
    "lat": 31.308710666
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281480341,
    "lat": 31.308415492
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280776925,
    "lat": 31.308402195
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28096056,
    "lat": 31.308192116
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281085059,
    "lat": 31.30796874
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281418092,
    "lat": 31.308011288
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281655404,
    "lat": 31.307875666
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281474116,
    "lat": 31.307673563
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280067284,
    "lat": 31.306942266
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279824512,
    "lat": 31.306721546
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279544391,
    "lat": 31.306966199
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280266482,
    "lat": 31.307625697
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281178432,
    "lat": 31.307482097
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281458968,
    "lat": 31.307365072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28113797,
    "lat": 31.30714437
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280733351,
    "lat": 31.306873125
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279668889,
    "lat": 31.306421047
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279864974,
    "lat": 31.30626149
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280926323,
    "lat": 31.306647086
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.27925182,
    "lat": 31.305968967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280216682,
    "lat": 31.306027472
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.27825272,
    "lat": 31.30530148
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.278495492,
    "lat": 31.303961174
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.278349206,
    "lat": 31.303801612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279756038,
    "lat": 31.302807006
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280885861,
    "lat": 31.30304901
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280954335,
    "lat": 31.304338802
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.280991685,
    "lat": 31.303929261
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281698213,
    "lat": 31.303652688
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28135273,
    "lat": 31.303963833
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281268694,
    "lat": 31.302440009
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281088171,
    "lat": 31.302644783
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281368292,
    "lat": 31.302894766
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281623514,
    "lat": 31.302642123
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281737703,
    "lat": 31.302174069
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282014906,
    "lat": 31.302298728
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28226293,
    "lat": 31.302444165
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28253527,
    "lat": 31.302635309
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282812474,
    "lat": 31.302805676
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282598492,
    "lat": 31.301608943
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.284188181,
    "lat": 31.30239214
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.284424728,
    "lat": 31.302495857
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.283206395,
    "lat": 31.303212894
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.283566273,
    "lat": 31.30466723
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28353223,
    "lat": 31.305257269
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28380457,
    "lat": 31.304899922
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281841386,
    "lat": 31.306982155
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282124216,
    "lat": 31.306836291
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281822712,
    "lat": 31.30663113
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281589277,
    "lat": 31.306556671
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281825824,
    "lat": 31.306062042
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281655404,
    "lat": 31.305899825
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28140253,
    "lat": 31.306216282
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.282526128,
    "lat": 31.306655064
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.281234457,
    "lat": 31.306434343
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.285482381,
    "lat": 31.306300215
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.288818549,
    "lat": 31.306969191
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288531619,
    "lat": 31.308057824
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.28614698,
    "lat": 31.309607651
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.286411256,
    "lat": 31.310276603
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.287211255,
    "lat": 31.308921035
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.292079823,
    "lat": 31.309128163
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.292515568,
    "lat": 31.308636208
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.292694534,
    "lat": 31.309410704
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.28806475,
    "lat": 31.298543908
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.291850279,
    "lat": 31.30106376
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.291340614,
    "lat": 31.300851004
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.289438123,
    "lat": 31.302021153
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.290103411,
    "lat": 31.302037774
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.289799946,
    "lat": 31.301728617
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.290052834,
    "lat": 31.301582349
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.290321283,
    "lat": 31.301854939
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.29110718,
    "lat": 31.301728617
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.292359945,
    "lat": 31.303630083
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.295775317,
    "lat": 31.29484619
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297046925,
    "lat": 31.298046573
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.299621709,
    "lat": 31.300913585
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.293584731,
    "lat": 31.305396541
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.292810012,
    "lat": 31.306209111
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288414522,
    "lat": 31.312061599
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295130133,
    "lat": 31.309039356
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295684488,
    "lat": 31.308938929
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295595368,
    "lat": 31.311716872
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304601774,
    "lat": 31.304342015
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304211743,
    "lat": 31.304383101
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302731762,
    "lat": 31.302785313
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306017352,
    "lat": 31.303572475
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.304933033,
    "lat": 31.299288347
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.30404077,
    "lat": 31.300601159
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301164625,
    "lat": 31.310991377
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302343364,
    "lat": 31.296206283
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.302141128,
    "lat": 31.296421412
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321675434,
    "lat": 31.290849054
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.321324617,
    "lat": 31.29046462
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317762795,
    "lat": 31.291526219
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.319772768,
    "lat": 31.28658492
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320515675,
    "lat": 31.286503797
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320829346,
    "lat": 31.28658492
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319576466,
    "lat": 31.283293442
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.31899607,
    "lat": 31.284748399
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.319157291,
    "lat": 31.284307505
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320008538,
    "lat": 31.283332021
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327489191,
    "lat": 31.276255321
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327205442,
    "lat": 31.276123042
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327340867,
    "lat": 31.275742736
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327598821,
    "lat": 31.275869505
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.325070876,
    "lat": 31.276404136
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325315932,
    "lat": 31.276001785
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325432011,
    "lat": 31.275753759
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321137085,
    "lat": 31.274094728
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331151615,
    "lat": 31.289854459
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.329376895,
    "lat": 31.289470021
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.335267407,
    "lat": 31.296617732
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335455971,
    "lat": 31.296909217
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335687385,
    "lat": 31.296675523
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.33660703,
    "lat": 31.295738177
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335963879,
    "lat": 31.29590767
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.336300482,
    "lat": 31.295576387
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.336306492,
    "lat": 31.29602837
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.335519084,
    "lat": 31.296393036
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.33652943,
    "lat": 31.298222758
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333200623,
    "lat": 31.300668613
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326425906,
    "lat": 31.303257094
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.332374242,
    "lat": 31.308037917
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333598793,
    "lat": 31.306848185
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333801719,
    "lat": 31.306686763
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.334620419,
    "lat": 31.307523763
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.338295473,
    "lat": 31.30595785
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339618339,
    "lat": 31.303745621
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343805868,
    "lat": 31.301456839
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.343412262,
    "lat": 31.300601159
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345046601,
    "lat": 31.299302905
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345291511,
    "lat": 31.298316354
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340806154,
    "lat": 31.298579436
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341072056,
    "lat": 31.298699018
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346921914,
    "lat": 31.297509168
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347859571,
    "lat": 31.297407522
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348391376,
    "lat": 31.297885856
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348559315,
    "lat": 31.297455356
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348804225,
    "lat": 31.297610814
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.349454987,
    "lat": 31.296002403
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.34328106,
    "lat": 31.294917158
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343554397,
    "lat": 31.294599505
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350573702,
    "lat": 31.297813359
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348146466,
    "lat": 31.302017362
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348788271,
    "lat": 31.303394172
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.349186845,
    "lat": 31.303608452
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346423697,
    "lat": 31.302200316
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348618093,
    "lat": 31.302280673
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348850968,
    "lat": 31.30134318
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348640485,
    "lat": 31.300455423
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348613615,
    "lat": 31.302931172
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.350198954,
    "lat": 31.303719419
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350812489,
    "lat": 31.303914566
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349880991,
    "lat": 31.304167109
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.348156822,
    "lat": 31.304886471
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353520627,
    "lat": 31.303266943
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353744416,
    "lat": 31.303368583
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347054865,
    "lat": 31.304139846
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.343911337,
    "lat": 31.305062484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357311165,
    "lat": 31.358198053
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357539554,
    "lat": 31.367114975
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357845692,
    "lat": 31.366492602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356023442,
    "lat": 31.368919833
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354871003,
    "lat": 31.370813942
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353748303,
    "lat": 31.370686486
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354600436,
    "lat": 31.374037475
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357340321,
    "lat": 31.37788967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357947738,
    "lat": 31.377561925
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356237253,
    "lat": 31.377478952
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352985668,
    "lat": 31.377628812
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349255851,
    "lat": 31.376375946
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351324575,
    "lat": 31.369880786
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351115664,
    "lat": 31.369656995
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350672366,
    "lat": 31.368619115
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349138658,
    "lat": 31.36667872
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352909238,
    "lat": 31.363211142
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351645584,
    "lat": 31.358268426
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352277411,
    "lat": 31.357637515
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352425177,
    "lat": 31.358011711
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352955096,
    "lat": 31.357433011
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347000637,
    "lat": 31.356499253
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347440877,
    "lat": 31.360679773
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347640616,
    "lat": 31.359997536
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347599853,
    "lat": 31.359492816
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346413649,
    "lat": 31.359701666
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346376962,
    "lat": 31.359370987
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.346429954,
    "lat": 31.36006019
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347494124,
    "lat": 31.361255406
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347601319,
    "lat": 31.36459293
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347962592,
    "lat": 31.364653815
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347705898,
    "lat": 31.364207328
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348670878,
    "lat": 31.367835987
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34719251,
    "lat": 31.374796612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348737428,
    "lat": 31.37499548
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346122951,
    "lat": 31.378270644
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345623823,
    "lat": 31.378493854
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345837735,
    "lat": 31.37865213
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34531484,
    "lat": 31.37882664
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345975589,
    "lat": 31.378161068
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344537474,
    "lat": 31.382174718
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344307078,
    "lat": 31.383095926
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344482961,
    "lat": 31.383282602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34477293,
    "lat": 31.382901134
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.346408167,
    "lat": 31.383489567
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344815712,
    "lat": 31.386610231
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344537474,
    "lat": 31.386829364
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344245281,
    "lat": 31.387056612
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344463946,
    "lat": 31.387283859
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.344131195,
    "lat": 31.387360961
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34325178,
    "lat": 31.361131788
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341081526,
    "lat": 31.36328837
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34433964,
    "lat": 31.365879004
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.340338064,
    "lat": 31.379115797
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340108465,
    "lat": 31.379316481
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.341874188,
    "lat": 31.382980066
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.343054981,
    "lat": 31.38513148
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335718759,
    "lat": 31.384300788
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.339277537,
    "lat": 31.375886117
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340359931,
    "lat": 31.357084562
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331834825,
    "lat": 31.376802573
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331848382,
    "lat": 31.377869676
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.331842915,
    "lat": 31.377472967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333209574,
    "lat": 31.382387368
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334149835,
    "lat": 31.384048778
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332575444,
    "lat": 31.383334749
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329639862,
    "lat": 31.389821485
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327830406,
    "lat": 31.390288139
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328683201,
    "lat": 31.39027414
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326223216,
    "lat": 31.390078145
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326212282,
    "lat": 31.389686155
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326912012,
    "lat": 31.389681488
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328858133,
    "lat": 31.384296121
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.328956533,
    "lat": 31.383764101
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32827867,
    "lat": 31.382900728
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326223216,
    "lat": 31.382933397
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326834564,
    "lat": 31.38294659
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32722361,
    "lat": 31.382014013
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324626959,
    "lat": 31.378905777
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323806964,
    "lat": 31.378845105
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324419227,
    "lat": 31.379335149
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324752691,
    "lat": 31.381161373
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326272415,
    "lat": 31.381332637
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325794203,
    "lat": 31.381312945
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324517626,
    "lat": 31.381869338
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324561359,
    "lat": 31.381486647
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325850283,
    "lat": 31.382916721
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323626565,
    "lat": 31.383577426
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321341512,
    "lat": 31.382886728
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322199773,
    "lat": 31.383026734
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325561753,
    "lat": 31.384272787
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325999084,
    "lat": 31.384711468
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326092017,
    "lat": 31.385122146
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323610165,
    "lat": 31.385098812
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323407899,
    "lat": 31.384730135
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324774558,
    "lat": 31.384716135
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324812824,
    "lat": 31.385098812
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324249761,
    "lat": 31.386895509
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323178301,
    "lat": 31.386410171
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324200561,
    "lat": 31.386433505
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32493309,
    "lat": 31.386452172
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32439736,
    "lat": 31.386018165
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324162295,
    "lat": 31.385574824
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326873745,
    "lat": 31.385980831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326890145,
    "lat": 31.385612158
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325982684,
    "lat": 31.386456838
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325949884,
    "lat": 31.386018165
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324616025,
    "lat": 31.388911502
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325594553,
    "lat": 31.388500841
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324976823,
    "lat": 31.388505507
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325605486,
    "lat": 31.38809951
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324954957,
    "lat": 31.38812751
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323331366,
    "lat": 31.390143477
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324566826,
    "lat": 31.390129477
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320849515,
    "lat": 31.38809951
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320772982,
    "lat": 31.38636817
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322412972,
    "lat": 31.385990165
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.321106447,
    "lat": 31.385593491
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319942054,
    "lat": 31.384683467
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320067786,
    "lat": 31.385056811
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322522305,
    "lat": 31.384254119
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317405536,
    "lat": 31.385458154
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318438729,
    "lat": 31.385509489
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318422329,
    "lat": 31.385915497
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320171652,
    "lat": 31.385952831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319488323,
    "lat": 31.38592483
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318367663,
    "lat": 31.386382171
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316771406,
    "lat": 31.38697951
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316722206,
    "lat": 31.386601507
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31668394,
    "lat": 31.386260836
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317588015,
    "lat": 31.387072844
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317487535,
    "lat": 31.386713508
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318252864,
    "lat": 31.387208178
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318230997,
    "lat": 31.386820842
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319214991,
    "lat": 31.387264178
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319422723,
    "lat": 31.386788175
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317881133,
    "lat": 31.38636817
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317588015,
    "lat": 31.388776171
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317416469,
    "lat": 31.388276842
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.320898714,
    "lat": 31.391123445
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295022076,
    "lat": 31.369283969
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295319461,
    "lat": 31.369277995
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295609848,
    "lat": 31.369277995
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296764401,
    "lat": 31.369292931
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297096773,
    "lat": 31.369280982
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297191236,
    "lat": 31.368859779
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296953328,
    "lat": 31.368859779
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.29671542,
    "lat": 31.368853804
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296463518,
    "lat": 31.368838868
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296008694,
    "lat": 31.368841855
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295777783,
    "lat": 31.368832894
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295539875,
    "lat": 31.368835881
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295287973,
    "lat": 31.368826919
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.295022076,
    "lat": 31.368823932
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.299114179,
    "lat": 31.369515107
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298911914,
    "lat": 31.369496437
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298660448,
    "lat": 31.369487102
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.29846365,
    "lat": 31.369487102
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297807654,
    "lat": 31.369496437
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.298184851,
    "lat": 31.36952911
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297266457,
    "lat": 31.368040145
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298476016,
    "lat": 31.37013865
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.300721867,
    "lat": 31.370159893
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30143839,
    "lat": 31.370129304
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301593636,
    "lat": 31.366308981
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.300435258,
    "lat": 31.366305582
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301772767,
    "lat": 31.368796967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303070469,
    "lat": 31.369306792
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303058527,
    "lat": 31.368851348
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303822818,
    "lat": 31.369316988
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303850682,
    "lat": 31.368861545
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303014739,
    "lat": 31.367264076
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303775049,
    "lat": 31.367247082
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304901582,
    "lat": 31.363300878
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.303846702,
    "lat": 31.365007181
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304503514,
    "lat": 31.367230087
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305546453,
    "lat": 31.367668544
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304392055,
    "lat": 31.367654949
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304491572,
    "lat": 31.368497868
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304491572,
    "lat": 31.368878539
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30447963,
    "lat": 31.369286399
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304499533,
    "lat": 31.369701055
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304515456,
    "lat": 31.370122506
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306370454,
    "lat": 31.370965403
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306274917,
    "lat": 31.368881938
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.307958745,
    "lat": 31.370156494
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.308794688,
    "lat": 31.369316988
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.299928707,
    "lat": 31.303642048
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.310800827,
    "lat": 31.307297857
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310357479,
    "lat": 31.30884315
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.313995273,
    "lat": 31.314920019
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313979837,
    "lat": 31.306759797
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316428329,
    "lat": 31.291628274
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31655428,
    "lat": 31.291301079
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.31694221,
    "lat": 31.286255246
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320143611,
    "lat": 31.286698685
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329412547,
    "lat": 31.287051384
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348644014,
    "lat": 31.288133965
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.332278638,
    "lat": 31.284734325
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325684643,
    "lat": 31.285148407
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325848478,
    "lat": 31.284864597
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325441104,
    "lat": 31.277125737
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353128573,
    "lat": 31.292925161
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355159759,
    "lat": 31.290661786
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356187813,
    "lat": 31.292759554
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3564495,
    "lat": 31.292573206
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356692495,
    "lat": 31.292306994
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356929259,
    "lat": 31.292072727
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358200307,
    "lat": 31.292925161
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364594181,
    "lat": 31.293741976
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362503779,
    "lat": 31.296437246
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362664181,
    "lat": 31.296239618
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362612342,
    "lat": 31.295837546
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361555627,
    "lat": 31.295868213
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36019411,
    "lat": 31.294090602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359888809,
    "lat": 31.294441995
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359764196,
    "lat": 31.294846628
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36020034,
    "lat": 31.295703806
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359265745,
    "lat": 31.2976098
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358511839,
    "lat": 31.296976248
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356723648,
    "lat": 31.293925553
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353813943,
    "lat": 31.294111898
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352954116,
    "lat": 31.294149167
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353240725,
    "lat": 31.293808421
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.35180768,
    "lat": 31.295198019
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.352808431,
    "lat": 31.294941804
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365933081,
    "lat": 31.298273005
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366234269,
    "lat": 31.298488249
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365730464,
    "lat": 31.299424086
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364361428,
    "lat": 31.300242937
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365582608,
    "lat": 31.3001166
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366009747,
    "lat": 31.300322482
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366184983,
    "lat": 31.30000898
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363310009,
    "lat": 31.298492928
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363233343,
    "lat": 31.297982892
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362503779,
    "lat": 31.300271011
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36285549,
    "lat": 31.299920077
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363112868,
    "lat": 31.299615932
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363556436,
    "lat": 31.299489595
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362384542,
    "lat": 31.299615932
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362176448,
    "lat": 31.299854569
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364542141,
    "lat": 31.297421382
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364208096,
    "lat": 31.297524326
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359394569,
    "lat": 31.30022422
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361064792,
    "lat": 31.29995751
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361595977,
    "lat": 31.300336519
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36191907,
    "lat": 31.300504967
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.358332197,
    "lat": 31.300715527
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.360320036,
    "lat": 31.300757639
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36201764,
    "lat": 31.300986915
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356284121,
    "lat": 31.29756176
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355386033,
    "lat": 31.298062439
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355736506,
    "lat": 31.298254288
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355123179,
    "lat": 31.298315118
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.357280778,
    "lat": 31.300799751
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351415831,
    "lat": 31.298637983
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351640353,
    "lat": 31.298436777
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351947017,
    "lat": 31.298137307
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36381375,
    "lat": 31.301049954
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.345726121,
    "lat": 31.299498953
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.355035941,
    "lat": 31.303719219
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.35542217,
    "lat": 31.303973068
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.355772748,
    "lat": 31.303846143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.356188687,
    "lat": 31.30496815
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.356521439,
    "lat": 31.304369071
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359438958,
    "lat": 31.302561658
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361049238,
    "lat": 31.302302728
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.359284466,
    "lat": 31.304643226
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362095029,
    "lat": 31.304438924
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364145016,
    "lat": 31.304602611
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363972698,
    "lat": 31.304348763
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364204436,
    "lat": 31.303399368
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363925163,
    "lat": 31.303043977
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362736764,
    "lat": 31.30148024
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363128935,
    "lat": 31.301267002
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359064612,
    "lat": 31.302993207
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364525304,
    "lat": 31.301353313
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366939329,
    "lat": 31.302290898
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366824855,
    "lat": 31.303282597
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365481965,
    "lat": 31.305079842
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.366890217,
    "lat": 31.304714303
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364899649,
    "lat": 31.301937179
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365071967,
    "lat": 31.301698556
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365600805,
    "lat": 31.302104723
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.364953127,
    "lat": 31.305582455
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.365701818,
    "lat": 31.30478538
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.36588882,
    "lat": 31.307677562
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320043358,
    "lat": 31.310955386
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.342955261,
    "lat": 31.311567645
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.347018422,
    "lat": 31.311769805
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.349391417,
    "lat": 31.310689688
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.34912099,
    "lat": 31.310499078
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355536864,
    "lat": 31.311065131
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.354813472,
    "lat": 31.31191998
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.357037732,
    "lat": 31.311758253
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35964735,
    "lat": 31.310389333
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359911016,
    "lat": 31.310631928
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.35924171,
    "lat": 31.310782105
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.361398363,
    "lat": 31.309199454
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362020344,
    "lat": 31.310065872
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363162897,
    "lat": 31.309436275
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363994459,
    "lat": 31.311573421
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362358378,
    "lat": 31.311723597
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.256128026,
    "lat": 31.352999297
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.261802054,
    "lat": 31.351447969
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.262535884,
    "lat": 31.351648981
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.260877152,
    "lat": 31.352734438
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.263754319,
    "lat": 31.351781412
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.263039873,
    "lat": 31.354349593
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.264711541,
    "lat": 31.358646545
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.266088397,
    "lat": 31.358151209
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.265707162,
    "lat": 31.357500399
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.265716614,
    "lat": 31.359685059
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.263542631,
    "lat": 31.359636631
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.264387019,
    "lat": 31.35932454
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.273140642,
    "lat": 31.354583016
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.312617928,
    "lat": 31.379659427
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313194506,
    "lat": 31.379656737
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313928619,
    "lat": 31.379619079
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.312564366,
    "lat": 31.380127463
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313191355,
    "lat": 31.380143602
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313941222,
    "lat": 31.380157051
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311822179,
    "lat": 31.379665311
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311059119,
    "lat": 31.37967792
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311004966,
    "lat": 31.380123428
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311827102,
    "lat": 31.380106616
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311846794,
    "lat": 31.380518499
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310931122,
    "lat": 31.380543716
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310881892,
    "lat": 31.380968205
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311827102,
    "lat": 31.380968205
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310074525,
    "lat": 31.380964003
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309168699,
    "lat": 31.3809598
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30915393,
    "lat": 31.380501687
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310089294,
    "lat": 31.380510093
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310104063,
    "lat": 31.380089805
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309262236,
    "lat": 31.380060384
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309163776,
    "lat": 31.379644297
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309921913,
    "lat": 31.379623282
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308218567,
    "lat": 31.380081399
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308184106,
    "lat": 31.380375601
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308218567,
    "lat": 31.37940473
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.308184106,
    "lat": 31.379736761
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311738489,
    "lat": 31.381829787
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309990835,
    "lat": 31.381438924
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309198237,
    "lat": 31.381770947
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311851717,
    "lat": 31.382262676
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307702836,
    "lat": 31.382725823
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316804223,
    "lat": 31.381628051
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316784531,
    "lat": 31.382367746
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317454055,
    "lat": 31.380800091
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.3167993,
    "lat": 31.382065144
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319587238,
    "lat": 31.380245312
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.303987583,
    "lat": 31.382975573
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.293945344,
    "lat": 31.38439879
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305096668,
    "lat": 31.354061099
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315531368,
    "lat": 31.350264604
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.317455267,
    "lat": 31.352004522
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314191124,
    "lat": 31.354187451
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313537214,
    "lat": 31.354778172
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313791212,
    "lat": 31.354404357
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326707277,
    "lat": 31.353767484
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327145018,
    "lat": 31.353287519
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326772128,
    "lat": 31.352973694
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327074764,
    "lat": 31.352682943
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.326966679,
    "lat": 31.351999907
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326361408,
    "lat": 31.352156821
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326058772,
    "lat": 31.352373732
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326420854,
    "lat": 31.352581411
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325804774,
    "lat": 31.352627562
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326691065,
    "lat": 31.352424498
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327431441,
    "lat": 31.35229989
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332127701,
    "lat": 31.356965652
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322767607,
    "lat": 31.354704332
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322378504,
    "lat": 31.355834999
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318341558,
    "lat": 31.358345491
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.314601844,
    "lat": 31.357482517
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30575515,
    "lat": 31.357436369
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305355238,
    "lat": 31.357187166
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.306786869,
    "lat": 31.358642335
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305917656,
    "lat": 31.359794226
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305547172,
    "lat": 31.361039387
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.305813161,
    "lat": 31.36086904
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.306183645,
    "lat": 31.360483731
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.306202644,
    "lat": 31.359851009
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.30721435,
    "lat": 31.361986627
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.313897312,
    "lat": 31.359579261
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.312984694,
    "lat": 31.360231861
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335554321,
    "lat": 31.362617013
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32047601,
    "lat": 31.365218074
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320743447,
    "lat": 31.365413012
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319993319,
    "lat": 31.364716805
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316751462,
    "lat": 31.363730967
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311852801,
    "lat": 31.365821889
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305979626,
    "lat": 31.363814736
  },
  {
    "damage": "Severe Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305962928,
    "lat": 31.363501048
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305958753,
    "lat": 31.364199715
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.301598879,
    "lat": 31.365947695
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320919564,
    "lat": 31.367484893
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319549765,
    "lat": 31.367768938
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.275925888,
    "lat": 31.365032641
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.272945148,
    "lat": 31.365585935
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.276599434,
    "lat": 31.359194591
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.280569262,
    "lat": 31.359639331
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.279550764,
    "lat": 31.37191335
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.318011143,
    "lat": 31.37085408
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319802298,
    "lat": 31.370868691
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.322203814,
    "lat": 31.369948175
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32941977,
    "lat": 31.371039156
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329037581,
    "lat": 31.372115513
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329208711,
    "lat": 31.371837902
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323065165,
    "lat": 31.375690295
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.299416983,
    "lat": 31.381961256
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329361777,
    "lat": 31.37815701
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.330060555,
    "lat": 31.378887515
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335554321,
    "lat": 31.384779035
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335177799,
    "lat": 31.384637002
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.304995802,
    "lat": 31.384834428
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.305638488,
    "lat": 31.385139596
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332699927,
    "lat": 31.386193941
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.418993532,
    "lat": 31.490002012
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.420886733,
    "lat": 31.490091804
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.439816865,
    "lat": 31.489869539
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435633375,
    "lat": 31.476989476
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.4356389,
    "lat": 31.476487729
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.435935264,
    "lat": 31.476756757
  },
  {
    "damage": "Destroyed",
    "governorate": "Gaza",
    "lng": 34.412252155,
    "lat": 31.463980587
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.380132949,
    "lat": 31.407841649
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.33220651,
    "lat": 31.406227374
  },
  {
    "damage": "Severe Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.332134484,
    "lat": 31.406146528
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.379732741,
    "lat": 31.400904005
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.377204803,
    "lat": 31.401254652
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.381607852,
    "lat": 31.400676304
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Deir al-Balah",
    "lng": 34.383239333,
    "lat": 31.402758158
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338405737,
    "lat": 31.383556126
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.326620888,
    "lat": 31.382927826
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.325639041,
    "lat": 31.382896136
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.298887218,
    "lat": 31.384152831
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296176627,
    "lat": 31.383437294
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.28474276,
    "lat": 31.371056919
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.297991544,
    "lat": 31.369466234
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.320304604,
    "lat": 31.370159827
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319393754,
    "lat": 31.367833101
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.342760465,
    "lat": 31.36105901
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348436753,
    "lat": 31.356243909
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315448954,
    "lat": 31.361348248
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313492718,
    "lat": 31.360129373
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309798053,
    "lat": 31.361623064
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.307993182,
    "lat": 31.361504654
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.311191339,
    "lat": 31.367482437
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310383996,
    "lat": 31.366676444
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310900518,
    "lat": 31.366229542
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31332679,
    "lat": 31.365480183
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310752811,
    "lat": 31.365092567
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.31038276,
    "lat": 31.364328452
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.309840734,
    "lat": 31.364256086
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324359833,
    "lat": 31.378472735
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32434724,
    "lat": 31.3788549
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.32452434,
    "lat": 31.38224834
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.388109294,
    "lat": 31.408772034
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.356850269,
    "lat": 31.403564623
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.304837857,
    "lat": 31.393203296
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329278951,
    "lat": 31.372589999
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.263681851,
    "lat": 31.35921182
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.263890853,
    "lat": 31.358935988
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.263695465,
    "lat": 31.358242072
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.262532615,
    "lat": 31.354766819
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.263995771,
    "lat": 31.35558094
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.266069794,
    "lat": 31.355964308
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349439279,
    "lat": 31.363670477
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.353368814,
    "lat": 31.363185774
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.26175418,
    "lat": 31.352457553
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.262824907,
    "lat": 31.349755096
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.340506459,
    "lat": 31.349544086
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.319551072,
    "lat": 31.34704337
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.354951762,
    "lat": 31.341400279
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.252166429,
    "lat": 31.338018463
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350365954,
    "lat": 31.335193272
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.355679963,
    "lat": 31.330841056
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363458212,
    "lat": 31.329742819
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.288173016,
    "lat": 31.301322313
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.296243655,
    "lat": 31.302580528
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.313224743,
    "lat": 31.311973189
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.351838953,
    "lat": 31.326408435
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.291717558,
    "lat": 31.32581728
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303675253,
    "lat": 31.323082161
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.303215062,
    "lat": 31.318899464
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.323761297,
    "lat": 31.275455781
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.324003068,
    "lat": 31.274907776
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.332207928,
    "lat": 31.281642968
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338303328,
    "lat": 31.296860136
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.338473042,
    "lat": 31.297316683
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.333836967,
    "lat": 31.298960938
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350904869,
    "lat": 31.300894143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.350366782,
    "lat": 31.300563143
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.347166874,
    "lat": 31.299589808
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.349164925,
    "lat": 31.302234808
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348336269,
    "lat": 31.302583204
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.345783944,
    "lat": 31.306836653
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.347530017,
    "lat": 31.31048092
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.335295708,
    "lat": 31.306663014
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.334650248,
    "lat": 31.308151726
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.329339224,
    "lat": 31.302842254
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.362823578,
    "lat": 31.303642304
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.358460158,
    "lat": 31.302911141
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363096115,
    "lat": 31.301557124
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.363359047,
    "lat": 31.297709256
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.359928481,
    "lat": 31.295529918
  },
  {
    "damage": "Moderate Damage",
    "governorate": "Khan Yunis",
    "lng": 34.34555025,
    "lat": 31.299816254
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315996666,
    "lat": 31.382746809
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.315198694,
    "lat": 31.382790221
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.316837665,
    "lat": 31.382720094
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.310834011,
    "lat": 31.382780037
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.327062722,
    "lat": 31.373432043
  },
  {
    "damage": "Destroyed",
    "governorate": "Khan Yunis",
    "lng": 34.348261172,
    "lat": 31.301370825
  },
  {
    "damage": "Destroyed",
    "governorate": "Deir al-Balah",
    "lng": 34.372871515,
    "lat": 31.404295251
  }
];
