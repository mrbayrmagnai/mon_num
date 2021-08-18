# Тоог бичвэрт хөрвүүлэгч (mon_num)

Тоог бичвэрт хөрвүүлэх javascript ийн цогц сан юм.
typescript бүрэн дэмжинэ.

## Install

### Node.js or Browser

```bash
npm install mon_num
```

## Usage

```js
import { toWord } from 'mon_num'

console.log(toWords(247))
// хоёр зуун дөчин долоо

```

## Options

### "дугаар" дагавар авах

```js

console.log(`хэцүү анги киноны ${toWords(66, { suffix: 'dugaar' })} анги`)
// хэцүү анги киноны жаран зургадугаар анги

console.log(`${toWords(14, { suffix: 'dugaar' })} далай лам`)
// арван дөрөвдүгээр далай лам
```

### "н" дагавар авах

```js

console.log(`${toWords(60, { suffix: 'n' })} цагаан хонь`)
// жаран цагаан хонь

console.log(`${toWords(2021, { suffix: 'n' })} он`)
// хоёр мянга хорин нэгэн он

console.log(`${toWords(23498, { suffix: 'n' })} ширхэг`)
// хорин гурван мянга дөрвөн зуун ерэн найман ширхэг
```

### "ын" дагавар авах

```js

console.log(`${toWords(100, { suffix: 'iin' })} талыг наслах`)
// нэг зуугийн талыг наслах

console.log(`${toWords(24, { suffix: 'iin' })} хоёрт заасны дагуу`)
// хорин дөрвийн хоёрт заасны дагуу

console.log(`${toWords(2, { suffix: 'iin' })} хооронд ${toWords(3, { suffix: 'iin' })} дунд`)
// хоёрын хооронд гурвын дунд
```

### "дахь" дагавар авах

```js

console.log(`${toWords(22, { suffix: 'dahi' })} удаагийн уулзалт`)
// хорин хоёр дахь удаагийн уулзалт

console.log(`вакцины ${toWords(4, { suffix: 'dahi' })} тун`)
// вакцины дөрөв дөх тун

console.log(`${toWords(7, { suffix: 'dahi' })} долоо хоног`)
// долоо дохь долоо хоног
```

### эхний үсэг томоор

```js

console.log(`${toWords(247, { ucFirst: true })}`)
// Хоёр зуун дөчин долоо
```

### бүх үсэг томоор

```js

console.log(`${toWords(380, { upperCase: true })}`)
// ГУРВАН ЗУУН НАЯ
```

### латинаар

```js

console.log(`${toWords(3456, { latin: true })}`)
// gurvan myanga durvun zuun tavin zurgaa
```

### хамтад нь ашиглах

```js

console.log(`${toWords(234, { latin: true, suffix: 'dugaar', upperCase: true })}`)
// KHOYOR ZUUN GUCHIN DURUVDUGEER
```
