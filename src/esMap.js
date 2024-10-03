export const ESMAP = {
    "hr": "Holiday Rhapsody",
    "ftgi": "Fantastic! The Great Ize-athelon!",
    "nvacs": "Natural vs. Artificial: Chocolate Showdown!",
    "rog": "Rose of Garden",
    "hd": "HIGHEST DREAM",
    "clbg": "Clever & Lucky Bunny Girls!",
    "sulp": "Shadows Unite! Let's party!",
    "ts": "Truth Seekers",
    "mt": "Midsummer Triangle",
    "dss": "Dreamy Summer Sunset",
    "i": "Interlude",
    "lshn": "Let's Smile! Halloween Night!",
    "ana": "Amnesia?! Noob Again!",
    "agfms": "A Gift from Miss Santa!",
    "rtgi2": "Run! The Great Ize-athlon 2.0!",
    "m": "Masquerade",
    "bmsv": "Be Mine! Sweet Valentine",
    "tghms": "Trash-Game Hunter Meets Shadow",
    "hd2": "HIGHEST DREAM II",
    "tpis": "The Producer in Shadow!",
    "ssitw": "Stranded! Summer in the Wild?!",
    "adswy": "A Dreamy Summer with You",
    "bheif": "Blazing Hero! Eminence in Flames!"
};

const ESMAPREVERSE = {};
for (const key in ESMAP) {
    const value = ESMAP[key];
    ESMAPREVERSE[value] = key;
}

export { ESMAPREVERSE };