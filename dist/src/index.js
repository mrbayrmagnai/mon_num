"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWords = void 0;
const number_texts_1 = require("./number_texts");
const hundredsPrefix = (num) => {
    if (num < 10) {
        if (num === 0) {
            return number_texts_1.digit[9];
        }
        return number_texts_1.digitPrefix[num - 1];
    }
    if (num < 100) {
        if (num % 10 === 0) {
            return number_texts_1.tentPrefix[(num / 10) - 1];
        }
        const base = Math.floor(num / 10);
        const remainder = num - base * 10 - 1;
        return `${number_texts_1.tentPrefix[base - 1]} ${remainder === 0 ? number_texts_1.oneVariant : number_texts_1.digitPrefix[remainder]}`;
    }
    if (num < 1000) {
        const divisor = 100;
        const remainder = num % divisor;
        const divided = num / divisor;
        if (remainder === 0) {
            return `${number_texts_1.digitPrefix[divided - 1]} ${number_texts_1.tenPowersPrefix[0]}`;
        }
        const base = Math.floor(num / divisor);
        if (remainder < 10) {
            return `${number_texts_1.digitPrefix[base - 1]} ${number_texts_1.tenPowersPrefix[0]} ${remainder === 1 ? number_texts_1.oneVariant : number_texts_1.digitPrefix[remainder - 1]}`;
        }
        return `${number_texts_1.digitPrefix[base - 1]} ${number_texts_1.tenPowersPrefix[0]} ${hundredsPrefix(remainder)}`;
    }
    return '';
};
const toText = (num) => {
    if (num < 10) {
        if (num === 0) {
            return number_texts_1.digit[9];
        }
        return number_texts_1.digit[num - 1];
    }
    if (num < 100) {
        if (num % 10 === 0) {
            return number_texts_1.tents[(num / 10) - 1];
        }
        const base = Math.floor(num / 10);
        return `${number_texts_1.tentPrefix[base - 1]} ${number_texts_1.digit[num - base * 10 - 1]}`;
    }
    if (num < 1000) {
        const divisor = 100;
        const remainder = num % divisor;
        const divided = num / divisor;
        if (remainder === 0) {
            return `${number_texts_1.digitPrefix[divided - 1]} ${number_texts_1.tenPowers[0]}`;
        }
        const base = Math.floor(num / divisor);
        return `${number_texts_1.digitPrefix[base - 1]} ${number_texts_1.tenPowersPrefix[0]} ${toText(remainder)}`;
    }
    if (num < 1000000) {
        const divisor = 1000;
        const remainder = num % divisor;
        const divided = Math.floor(num / divisor);
        if (remainder === 0)
            return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[1]}`;
        return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[1]} ${toText(remainder)}`;
    }
    if (num < 1000000000) {
        const divisor = 1000000;
        const remainder = num % divisor;
        const divided = Math.floor(num / divisor);
        if (remainder === 0)
            return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[2]}`;
        return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[2]} ${toText(remainder)}`;
    }
    if (num < 1000000000000) {
        const divisor = 1000000000;
        const remainder = num % divisor;
        const divided = Math.floor(num / divisor);
        if (remainder === 0)
            return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[3]}`;
        return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[3]} ${toText(remainder)}`;
    }
    if (num < 1000000000000000) {
        const divisor = 1000000000000;
        const remainder = num % divisor;
        const divided = Math.floor(num / divisor);
        if (remainder === 0)
            return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[4]}`;
        return `${hundredsPrefix(divided)} ${number_texts_1.tenPowers[4]} ${toText(remainder)}`;
    }
    return '';
};
const toWords = (num, options) => {
    if (num >= 1000000000000000) {
        console.log('mon_num: The number exceeds the limit of 999999999999999');
        return '';
    }
    let result = toText(num);
    if (typeof options !== 'object' || !options)
        return result;
    const separated = result.split(' ');
    if (separated.length > 0 && options.suffix) {
        const lastWord = separated[separated.length - 1];
        let collection = [];
        if (options.suffix === 'iin') {
            collection = number_texts_1.suffixIin;
        }
        if (options.suffix === 'n') {
            collection = number_texts_1.suffixN;
        }
        if (options.suffix === 'dugaar') {
            collection = number_texts_1.suffixDugaar;
        }
        if (options.suffix === 'dahi') {
            collection = number_texts_1.suffixDahi;
        }
        const transformation = collection.find(suffix => suffix.word === lastWord);
        if (transformation) {
            separated.pop();
            if (options.suffix === 'n' && result === 'нэг') {
                separated.push('нэг');
            }
            else {
                separated.push(transformation.tf);
            }
            result = separated.join(' ');
        }
    }
    if (options.latin === true && separated.length > 0) {
        const transformedList = separated.map(word => { var _a; return (_a = number_texts_1.latinText.find(latin => latin.word === word)) === null || _a === void 0 ? void 0 : _a.tf; });
        result = transformedList.join(' ');
    }
    if (options.ucFirst === true) {
        result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    if (options.upperCase === true) {
        result = result.toUpperCase();
    }
    return result;
};
exports.toWords = toWords;
//# sourceMappingURL=index.js.map