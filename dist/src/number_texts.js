"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.latinText = exports.suffixDahi = exports.suffixDugaar = exports.suffixN = exports.suffixIin = exports.tenPowersPrefix = exports.tenPowers = exports.tentPrefix = exports.tents = exports.oneVariant = exports.digitPrefix = exports.digit = void 0;
exports.digit = ['нэг', 'хоёр', 'гурав', 'дөрөв', 'тав', 'зургаа', 'долоо', 'найм', 'ес', 'тэг'];
exports.digitPrefix = ['нэг', 'хоёр', 'гурван', 'дөрвөн', 'таван', 'зургаан', 'долоон', 'найман', 'есөн'];
exports.oneVariant = 'нэгэн';
exports.tents = ['арав', 'хорь', 'гуч', 'дөч', 'тавь', 'жар', 'дал', 'ная', 'ер'];
exports.tentPrefix = ['арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерэн'];
exports.tenPowers = ['зуу', 'мянга', 'сая', 'тэр бум', 'их наяд'];
exports.tenPowersPrefix = ['зуун', 'мянган', 'сая', 'тэр бум', 'их наяд'];
exports.suffixIin = [
    { word: 'тэг', tf: 'тэгийн' },
    { word: 'нэг', tf: 'нэгийн' },
    { word: 'хоёр', tf: 'хоёрын' },
    { word: 'гурав', tf: 'гурвын' },
    { word: 'дөрөв', tf: 'дөрвийн' },
    { word: 'тав', tf: 'тавын' },
    { word: 'зургаа', tf: 'зургаагийн' },
    { word: 'долоо', tf: 'долоогийн' },
    { word: 'найм', tf: 'наймын' },
    { word: 'ес', tf: 'есийн' },
    { word: 'арав', tf: 'арвын' },
    { word: 'хорь', tf: 'хорийн' },
    { word: 'гуч', tf: 'гучийн' },
    { word: 'дөч', tf: 'дөчийн' },
    { word: 'тавь', tf: 'тавийн' },
    { word: 'жар', tf: 'жарын' },
    { word: 'дал', tf: 'далын' },
    { word: 'ная', tf: 'наяын' },
    { word: 'ер', tf: 'ерийн' },
    { word: 'зуу', tf: 'зуугийн' },
    { word: 'мянга', tf: 'мянгын' },
    { word: 'сая', tf: 'саяын' },
    { word: 'бум', tf: 'бумын' },
    { word: 'наяд', tf: 'наядын' }
];
exports.suffixN = [
    { word: 'тэг', tf: 'тэг' },
    { word: 'нэг', tf: 'нэг' },
    { word: 'хоёр', tf: 'хоёр' },
    { word: 'гурав', tf: 'гурван' },
    { word: 'дөрөв', tf: 'дөрвөн' },
    { word: 'тав', tf: 'таван' },
    { word: 'зургаа', tf: 'зургаан' },
    { word: 'долоо', tf: 'долоон' },
    { word: 'найм', tf: 'найман' },
    { word: 'ес', tf: 'есөн' },
    { word: 'арав', tf: 'арван' },
    { word: 'хорь', tf: 'хорин' },
    { word: 'гуч', tf: 'гучин' },
    { word: 'дөч', tf: 'дөчин' },
    { word: 'тавь', tf: 'тавин' },
    { word: 'жар', tf: 'жаран' },
    { word: 'дал', tf: 'далан' },
    { word: 'ная', tf: 'наян' },
    { word: 'ер', tf: 'ерэн' },
    { word: 'зуу', tf: 'зуун' },
    { word: 'мянга', tf: 'мянган' },
    { word: 'сая', tf: 'сая' },
    { word: 'бум', tf: 'бум' },
    { word: 'наяд', tf: 'наяд' }
];
exports.suffixDugaar = [
    { word: 'тэг', tf: 'тэгдүгээр' },
    { word: 'нэг', tf: 'нэгдүгээр' },
    { word: 'хоёр', tf: 'хоёрдугаар' },
    { word: 'гурав', tf: 'гуравдугаар' },
    { word: 'дөрөв', tf: 'дөрөвдүгээр' },
    { word: 'тав', tf: 'тавдугаар' },
    { word: 'зургаа', tf: 'зургадугаар' },
    { word: 'долоо', tf: 'долдугаар' },
    { word: 'найм', tf: 'наймдугаар' },
    { word: 'ес', tf: 'есдүгээр' },
    { word: 'арав', tf: 'аравдугаар' },
    { word: 'хорь', tf: 'хорьдугаар' },
    { word: 'гуч', tf: 'гучдугаар' },
    { word: 'дөч', tf: 'дөчдүгээр' },
    { word: 'тавь', tf: 'тавьдугаар' },
    { word: 'жар', tf: 'жардугаар' },
    { word: 'дал', tf: 'далдугаар' },
    { word: 'ная', tf: 'наядугаар' },
    { word: 'ер', tf: 'ердүгээр' },
    { word: 'зуу', tf: 'зуудугаар' },
    { word: 'мянга', tf: 'мянгадугаар' },
    { word: 'сая', tf: 'саядугаар' },
    { word: 'бум', tf: 'бум дугаар' },
    { word: 'наяд', tf: 'наяд дугаар' }
];
exports.suffixDahi = [
    { word: 'тэг', tf: 'тэг дэх' },
    { word: 'нэг', tf: 'нэг дэх' },
    { word: 'хоёр', tf: 'хоёр дахь' },
    { word: 'гурав', tf: 'гурав дахь' },
    { word: 'дөрөв', tf: 'дөрөв дөх' },
    { word: 'тав', tf: 'тав дахь' },
    { word: 'зургаа', tf: 'зургаа дахь' },
    { word: 'долоо', tf: 'долоо дохь' },
    { word: 'найм', tf: 'найм дахь' },
    { word: 'ес', tf: 'ес дөх' },
    { word: 'арав', tf: 'арав дахь' },
    { word: 'хорь', tf: 'хорь дохь' },
    { word: 'гуч', tf: 'гуч дахь' },
    { word: 'дөч', tf: 'дөч дөх' },
    { word: 'тавь', tf: 'тавь дахь' },
    { word: 'жар', tf: 'жар дахь' },
    { word: 'дал', tf: 'дал дахь' },
    { word: 'ная', tf: 'ная дахь' },
    { word: 'ер', tf: 'ер дэх' },
    { word: 'зуу', tf: 'зуу дахь' },
    { word: 'мянга', tf: 'мянга дахь' },
    { word: 'сая', tf: 'сая дахь' },
    { word: 'бум', tf: 'бум дахь' },
    { word: 'наяд', tf: 'наяд дахь' }
];
exports.latinText = [
    { word: "нэг", tf: "neg" },
    { word: "хоёр", tf: "khoyor" },
    { word: "гурав", tf: "gurav" },
    { word: "дөрөв", tf: "duruv" },
    { word: "тав", tf: "tav" },
    { word: "зургаа", tf: "zurgaa" },
    { word: "долоо", tf: "doloo" },
    { word: "найм", tf: "naim" },
    { word: "ес", tf: "yes" },
    { word: "тэг", tf: "teg" },
    { word: "гурван", tf: "gurvan" },
    { word: "дөрвөн", tf: "durvun" },
    { word: "таван", tf: "tavan" },
    { word: "зургаан", tf: "zurgaan" },
    { word: "долоон", tf: "doloon" },
    { word: "найман", tf: "naiman" },
    { word: "есөн", tf: "yesun" },
    { word: "нэгэн", tf: "negen" },
    { word: "арав", tf: "arav" },
    { word: "хорь", tf: "khori" },
    { word: "гуч", tf: "guch" },
    { word: "дөч", tf: "duch" },
    { word: "тавь", tf: "tavi" },
    { word: "жар", tf: "jar" },
    { word: "дал", tf: "dal" },
    { word: "ная", tf: "nay" },
    { word: "ер", tf: "yer" },
    { word: "арван", tf: "arvan" },
    { word: "хорин", tf: "khorin" },
    { word: "гучин", tf: "guchin" },
    { word: "дөчин", tf: "duchin" },
    { word: "тавин", tf: "tavin" },
    { word: "жаран", tf: "jaran" },
    { word: "далан", tf: "dalan" },
    { word: "наян", tf: "nayan" },
    { word: "ерэн", tf: "yeren" },
    { word: "зуу", tf: "zuu" },
    { word: "мянга", tf: "myanga" },
    { word: "сая", tf: "say" },
    { word: "тэр", tf: "ter" },
    { word: "бум", tf: "bum" },
    { word: "их", tf: "ikh" },
    { word: "наяд", tf: "nayad" },
    { word: "зуун", tf: "zuun" },
    { word: "мянган", tf: "myangan" },
    { word: "тэгийн", tf: "tegiin" },
    { word: "нэгийн", tf: "negiin" },
    { word: "хоёрын", tf: "khoyoriin" },
    { word: "гурвын", tf: "gurviin" },
    { word: "дөрвийн", tf: "duruviin" },
    { word: "тавын", tf: "taviin" },
    { word: "зургаагийн", tf: "zurgaagiin" },
    { word: "долоогийн", tf: "doloogiin" },
    { word: "наймын", tf: "naimiin" },
    { word: "есийн", tf: "yesiin" },
    { word: "арвын", tf: "arviin" },
    { word: "хорийн", tf: "khoriin" },
    { word: "гучийн", tf: "guchiin" },
    { word: "дөчийн", tf: "duchiin" },
    { word: "тавийн", tf: "taviin" },
    { word: "жарын", tf: "jariin" },
    { word: "далын", tf: "daliin" },
    { word: "наяын", tf: "nayiin" },
    { word: "ерийн", tf: "yeriin" },
    { word: "зуугийн", tf: "zuugiin" },
    { word: "мянгын", tf: "myangiin" },
    { word: "саяын", tf: "sayiin" },
    { word: "бумын", tf: "bumiin" },
    { word: "наядын", tf: "naydiin" },
    { word: "бум", tf: "bum" },
    { word: "наяд", tf: "nayad" },
    { word: "тэгдүгээр", tf: "tegdugeer" },
    { word: "нэгдүгээр", tf: "negdugeer" },
    { word: "хоёрдугаар", tf: "khoyordugaar" },
    { word: "гуравдугаар", tf: "guravdugaar" },
    { word: "дөрөвдүгээр", tf: "duruvdugeer" },
    { word: "тавдугаар", tf: "tavdugaar" },
    { word: "зургадугаар", tf: "zurgadugaar" },
    { word: "долдугаар", tf: "doldugaar" },
    { word: "наймдугаар", tf: "naimdugaar" },
    { word: "есдүгээр", tf: "yesdugeer" },
    { word: "аравдугаар", tf: "aravdugaar" },
    { word: "хорьдугаар", tf: "khoridugaar" },
    { word: "гучдугаар", tf: "guchdugaar" },
    { word: "дөчдүгээр", tf: "duchdugeer" },
    { word: "тавьдугаар", tf: "tavidugaar" },
    { word: "жардугаар", tf: "jardugaar" },
    { word: "далдугаар", tf: "daldugaar" },
    { word: "наядугаар", tf: "naydugaar" },
    { word: "ердүгээр", tf: "yerdugeer" },
    { word: "зуудугаар", tf: "zuudugaar" },
    { word: "мянгадугаар", tf: "myangadugaar" },
    { word: "саядугаар", tf: "saydugaar" },
    { word: "бум", tf: "bum" },
    { word: "дугаар", tf: "dugaar" },
    { word: "дэх", tf: "dekh" },
    { word: "дахь", tf: "dakhi" },
    { word: "дөх", tf: "dukh" },
    { word: "дохь", tf: "dokhi" }
];
//# sourceMappingURL=number_texts.js.map