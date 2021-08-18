import {
  digit,
  digitPrefix,
  oneVariant,
  tents,
  tentPrefix,
  tenPowers,
  tenPowersPrefix,
  suffixIin,
  suffixN,
  suffixDahi,
  suffixDugaar,
  latinText,
  WordTransformation
} from './number_texts'

const hundredsPrefix = (num: number): string => {
  if (num < 10) {
    if (num === 0) {
      return digit[9]
    }
    return digitPrefix[num - 1]
  }
  if (num < 100) {
    if (num % 10 === 0) {
      return tentPrefix[(num / 10) - 1]
    }
    const base = Math.floor(num / 10)
    const remainder = num - base * 10 - 1;
    return `${tentPrefix[base - 1]} ${remainder === 0 ? oneVariant : digitPrefix[remainder]}`
  }
  if (num < 1000) {
    const divisor = 100;
    const remainder = num % divisor
    const divided = num / divisor
    if (remainder === 0) {
      return `${digitPrefix[divided - 1]} ${tenPowersPrefix[0]}`
    }
    const base = Math.floor(num / divisor)
    if (remainder < 10) {
      return `${digitPrefix[base - 1]} ${tenPowersPrefix[0]} ${remainder === 1 ? oneVariant : digitPrefix[remainder - 1]}`
    }
    return `${digitPrefix[base - 1]} ${tenPowersPrefix[0]} ${hundredsPrefix(remainder)}`
  }
  return ''
}

const toText = (num: number): string => {
  if (num < 10) {
    if (num === 0) {
      return digit[9]
    }
    return digit[num - 1]
  }
  if (num < 100) {
    if (num % 10 === 0) {
      return tents[(num / 10) - 1]
    }
    const base = Math.floor(num / 10)
    return `${tentPrefix[base - 1]} ${digit[num - base * 10 - 1]}`
  }

  if (num < 1000) {
    const divisor = 100;
    const remainder = num % divisor
    const divided = num / divisor
    if (remainder === 0) {
      return `${digitPrefix[divided - 1]} ${tenPowers[0]}`
    }
    const base = Math.floor(num / divisor)
    return `${digitPrefix[base - 1]} ${tenPowersPrefix[0]} ${toText(remainder)}`
  }

  if (num < 1000_000) {
    const divisor = 1000;
    const remainder = num % divisor
    const divided = Math.floor(num / divisor)
    if (remainder === 0)
      return `${hundredsPrefix(divided)} ${tenPowers[1]}`
    return `${hundredsPrefix(divided)} ${tenPowers[1]} ${toText(remainder)}`
  }

  if (num < 1000_000_000) {
    const divisor = 1000_000;
    const remainder = num % divisor
    const divided = Math.floor(num / divisor)
    if (remainder === 0)
      return `${hundredsPrefix(divided)} ${tenPowers[2]}`
    return `${hundredsPrefix(divided)} ${tenPowers[2]} ${toText(remainder)}`
  }
  if (num < 1000_000_000_000) {
    const divisor = 1000_000_000;
    const remainder = num % divisor
    const divided = Math.floor(num / divisor)
    if (remainder === 0)
      return `${hundredsPrefix(divided)} ${tenPowers[3]}`
    return `${hundredsPrefix(divided)} ${tenPowers[3]} ${toText(remainder)}`
  }
  if (num < 1000_000_000_000_000) {
    const divisor = 1000_000_000_000;
    const remainder = num % divisor
    const divided = Math.floor(num / divisor)
    if (remainder === 0)
      return `${hundredsPrefix(divided)} ${tenPowers[4]}`
    return `${hundredsPrefix(divided)} ${tenPowers[4]} ${toText(remainder)}`
  }
  return ''
}
export interface MonNumOptions {
  latin?: boolean
  suffix?: 'iin' | 'dahi' | 'dugaar' | 'n'
  ucFirst?: boolean
  upperCase?: boolean
}

export const toWords = (num: number, options?: MonNumOptions): string => {
  if (num >= 1000_000_000_000_000) {
    console.log('mon_num: The number exceeds the limit of 999999999999999');
    return '';
  }
  let result = toText(num)
  if (typeof options !== 'object' || !options) return result;

  const separated = result.split(' ')
  if (separated.length > 0 && options.suffix) {
    const lastWord = separated[separated.length - 1]
    let collection: WordTransformation[] = []

    if (options.suffix === 'iin') {
      collection = suffixIin;
    }
    if (options.suffix === 'n') {
      collection = suffixN;
    }
    if (options.suffix === 'dugaar') {
      collection = suffixDugaar;
    }
    if (options.suffix === 'dahi') {
      collection = suffixDahi;
    }

    const transformation = collection.find(suffix => suffix.word === lastWord)
    if (transformation) {
      separated.pop()
      if (options.suffix === 'n' && result === 'нэг') {
        separated.push('нэг')
      } else {
        separated.push(transformation.tf)
      }
      result = separated.join(' ')
    }
  }
  if (options.latin === true && separated.length > 0) {
    const transformedList = separated.map(word => latinText.find(latin => latin.word === word)?.tf)
    result = transformedList.join(' ')
  }
  if (options.ucFirst === true) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }
  if (options.upperCase === true) {
    result = result.toUpperCase()
  }
  return result
}
