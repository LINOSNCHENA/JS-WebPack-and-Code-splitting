
/*  CSS & SCSS */
import '../config/config';
// =================================
//  TEN COMPUATIONS USING RxJS
// =================================

import { from, interval, Observable, of } from 'rxjs';  
import { filter, first, map } from 'rxjs/operators';  
import { sample } from 'rxjs/operators';

const numbers = [10, 20, 30, 40, 50,6,7,8,9,4];

// 1. Of
console.log('Point # 01!');
map((x: number) => x * x)(of(1,3,5,6))
.subscribe((v) => console.log(`Of usage demonstrated : ${v}`));   

// 2. Map
console.log('Point # 02!');
var printables = numbers.map((x) => x * x);
console.log(printables);

// 3. forEach
console.log('Point # 03!');
const arrayIn4Each = [
  { id: 1, name: "Nikolas" },
  { id: 2, name: "Lorena" },
  { id: 3, name: "Leon" },
];
arrayIn4Each.forEach((element) => console.log(element.id, element.name));

// 4. Filter
console.log('Point # 04!');
const filteredArr = numbers.filter(v => v % 2 === 0); // [2]
(console.log(filteredArr));

// 5. Pipe
console.log('Point # 05!');
const number$ = from(numbers);
const numbersMultipliedByTen$ = number$.pipe(map(number => number * 10));
numbersMultipliedByTen$.subscribe(console.log);

//6. Create array
console.log('Point # 06!');
const observable$ = from([1, 2, 3, 4, 5, 6]) 
observable$.pipe(
    filter(val => val % 2 == 0)
).subscribe(console.log)

//7.  take first
console.log('Point # 07!');
observable$.pipe(
    first()
).subscribe(console.log)


// 8. Observable 
console.log('Point # 08!');
const wrapArrayIntoObservable = arr => {
    return new Observable(subscriber => {
        for(let item of arr) {
            subscriber.next(item);
        }
    });
}
const observable = wrapArrayIntoObservable(numbers); 
observable.subscribe(val => console.log('Subscriber 1: ' + val));
observable.subscribe(val => console.log('Subscriber 2: ' + val));

//10. emit value every 1s
console.log('Point # 09!');
const source = interval(1000);
//sample last emitted value from source every 2s
const example = source.pipe(sample(interval(2000)));
//output: 2..4..6..8..
const subscribe = example.subscribe(val => console.log(val));
console.log('======================|EndOfTypeScript|======================!');


