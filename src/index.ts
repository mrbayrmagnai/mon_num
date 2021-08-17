const digit = ['нэг', 'хоёр', 'гурав', 'дөрөв', 'тав', 'зургаа', 'долоо', 'найм', 'ес', 'тэг']

const digitPrefix = ['нэг', 'хоёр', 'гурван', 'дөрвөн', 'таван', 'зургаан', 'долоон', 'найман', 'есөн']
const oneVariant = 'нэгэн'

const tents = ['арав', 'хорь', 'гуч', 'дөч', 'тавь', 'жар', 'дал', 'ная', 'ер']

const tentPrefix = ['арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерэн']

const tenPowers = ['зуу', 'мянга', 'сая', 'тэр бум', 'их наяд']

const tenPowersPrefix = ['зуун', 'мянган', 'сая', 'тэр бум', 'их наяд']

const hundredsPrefix = (num: number) => {
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
}
// for (let i = 1; i < 1000; i++)
//   console.log(thousandsProcess(i))

//41687
//501000
//100222
//102222
//101222

console.log(toText(1_000_100_000_020))