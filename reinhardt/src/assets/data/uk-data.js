const data = [
  ["gb-ay", 18],
  ["gb-3270", 4],
  ["gb-hi", 144],
  ["gb-ab", 144],
  ["gb-ps", 200],
  ["gb-wi", 6],
  ["gb-my", 0],
  ["gb-7398", 0],
  ["gb-eb", 799],
  ["gb-lc", 427],
  ["gb-2393", 581],
  ["gb-db", 803],
  ["gb-de", 379],
  ["gb-an", 0],
  ["gb-bl", 0],
  ["gb-ng", 339],
  ["gb-do", 460],
  ["gb-2458", 712],
  ["gb-er", 1314],
  ["gb-ea", 364],
  ["gb-gg", 1314],
  ["gb-ed", 1314],
  ["gb-ic", 1314],
  ["gb-2446", 364],
  ["gb-nn", 662],
  ["gb-rf", 1314],
  ["gb-sa", 364],
  ["gb-sl", 662],
  ["gb-wd", 1314],
  ["gb-ar", 251],
  ["gb-as", 251],
  ["gb-fk", 799],
  ["gb-zg", 302],
  ["gb-cc", 302],
  ["gb-du", 712],
  ["gb-fi", 333],
  ["gb-ml", 799],
  ["gb-wh", 799],
  ["gb-bo", 177],
  ["gb-dh", 770],
  ["gb-da", 157],
  ["gb-hp", 79],
  ["gb-mb", 325],
  ["gb-rc", 195],
  ["gb-zt", 217],
  ["gb-ha", 1858],
  ["gb-zh", 301],
  ["gb-2318", 145],
  ["gb-gc", 768],
  ["gb-mk", 331],
  ["gb-bu", 542],
  ["gb-bn", 139],
  ["gb-bs", 374],
  ["gb-ns", 127],
  ["gb-sj", 223],
  ["gb-2389", 259],
  ["gb-ds", 212],
  ["gb-2391", 0],
  ["gb-ht", 1609],
  ["gb-cm", 441],
  ["gb-kh", 175],
  ["gb-ne", 86],
  ["gb-ba", 355],
  ["gb-xb", 462],
  ["gb-ke", 1958],
  ["gb-bz", 815],
  ["gb-be", 1086],
  ["gb-cn", 455],
  ["gb-eg", 802],
  ["gb-ef", 570],
  ["gb-gr", 509],
  ["gb-hf", 405],
  ["gb-hu", 509],
  ["gb-it", 337],
  ["gb-kc", 376],
  ["gb-cy", 1050],
  ["gb-me", 526],
  ["gb-rb", 548],
  ["gb-ru", 297],
  ["gb-su", 500],
  ["gb-th", 517],
  ["gb-wf", 586],
  ["gb-ww", 766],
  ["gb-we", 510],
  ["gb-li", 531],
  ["gb-bf", 3],
  ["gb-ld", 0],
  ["gb-nm", 0],
  ["gb-am", 0],
  ["gb-bb", 0],
  ["gb-cr", 0],
  ["gb-dn", 0],
  ["gb-2347", 0],
  ["gb-lb", 0],
  ["gb-mf", 0],
  ["gb-om", 0],
  ["gb-lr", 0],
  ["gb-cf", 0],
  ["gb-nw", 0],
  ["gb-2354", 0],
  ["gb-dw", 0],
  ["gb-cl", 0],
  ["gb-by", 0],
  ["gb-cs", 0],
  ["gb-pe", 79],
  ["gb-2301", 26],
  ["gb-gd", 37],
  ["gb-sp", 287],
  ["gb-po", 69],
  ["gb-mt", 454],
  ["gb-bj", 406],
  ["gb-cp", 337],
  ["gb-rt", 454],
  ["gb-ca", 875],
  ["gb-vg", 267],
  ["gb-np", 202],
  ["gb-sw", 172],
  ["gb-7122", 447],
  ["gb-bw", 188],
  ["gb-la", 1769],
  ["gb-ey", 272],
  ["gb-yk", 153],
  ["gb-di", 74],
  ["gb-fl", 90],
  ["gb-wx", 75],
  ["gb-bg", 203],
  ["gb-no", 483],
  ["gb-tf", 203],
  ["gb-lm", 0],
  ["gb-sb", 0],
  ["gb-fe", 0],
  ["gb-ny", 542],
  ["gb-2420", 176],
  ["gb-tb", 107],
  ["gb-ex", 1647],
  ["gb-nf", 786],
  ["gb-bh", 233],
  ["gb-hv", 505],
  ["gb-tr", 207],
  ["gb-ss", 229],
  ["gb-ws", 679],
  ["gb-wr", 742],
  ["gb-hd", 554],
  ["gb-kt", 317],
  ["gb-sr", 1739],
  ["gb-es", 383],
  ["gb-ox", 1015],
  ["gb-sn", 200],
  ["gb-na", 784],
  ["gb-rl", 12],
  ["gb-hk", 524],
  ["gb-hy", 428],
  ["gb-hr", 696],
  ["gb-lt", 950],
  ["gb-lw", 732],
  ["gb-nh", 809],
  ["gb-sq", 1001],
  ["gb-he", 127],
  ["gb-st", 1051],
  ["gb-wc", 718],
  ["gb-tk", 143],
  ["gb-6338", 470],
  ["gb-nb", 502],
  ["gb-2367", 638],
  ["gb-7113", 339],
  ["gb-7114", 251],
  ["gb-7115", 729],
  ["gb-7116", 492],
  ["gb-2364", 339],
  ["gb-7118", 560],
  ["gb-7119", 1010],
  ["gb-wt", 372],
  ["gb-ms", 5],
  ["gb-7117", 190],
  ["gb-3265", 381],
  ["gb-7130", 168],
  ["gb-7131", 460],
  ["gb-7132", 743],
  ["gb-7133", 344],
  ["gb-3266", 379],
  ["gb-7121", 354],
  ["gb-7123", 262],
  ["gb-7124", 278],
  ["gb-7125", 378],
  ["gb-7126", 320],
  ["gb-7127", 549],
  ["gb-7128", 744],
  ["gb-7129", 402],
  ["gb-2366", 477],
  ["gb-nt", 755],
  ["gb-3267", 407],
  ["gb-7134", 1412],
  ["gb-7135", 415],
  ["gb-nl", 142],
  ["gb-7136", 239],
  ["gb-2377", 1982],
  ["gb-7137", 624],
  ["gb-7138", 490],
  ["gb-7139", 501],
  ["gb-7140", 609],
  ["gb-7141", 372],
  ["gb-7142", 459],
  ["gb-2381", 309],
  ["gb-bd", 244],
  ["gb-2388", 246],
  ["gb-7143", 186],
  ["gb-7144", 201],
  ["gb-7145", 139],
  ["gb-7146", 163],
  ["gb-7147", 262],
  ["gb-7149", 1001],
  ["gb-so", 240],
  ["gb-7150", 473],
  ["gb-7151", 227],
  ["gb-pb", 113],
  ["gb-iw", 55],
  ["gb-mo", 251],
  ["gb-ag", 712],
  ["gb-el", 799],
  ["gb-sm", 248],
  ["gb-ci", 172],
  ["gb-hl", 623],
  ["gb-co", 349],
  ["gb-cw", 36],
  ["gb-nd", 0],
  ["gb-dg", 164],
  ["gb-cu", 1345],
  ["gb-sf", 527],
  ["gb-mw", 428],
  ["gb-lu", 387],
  ["gb-wl", 271],
  ["gb-3271", 43]
];

export default data;
