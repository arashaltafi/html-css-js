const text = 'i love javascript';
console.log('text[0] ===>', text[0]);
console.log('text.charAt(0) ===>', text.charAt(0));
console.log('text.charCodeAt(0) ===>', text.charCodeAt(0));
console.log('text + & react ===>', text + ' & react');
console.log('text concat & react ===>', text.concat(' & react'));
console.log('text trimEnd ===>', "  i love js   ".trimEnd())
console.log('text trimStart ===>', "  i love js   ".trimStart())
console.log('text trim ===>', "  i love js   ".trim())
console.log('text toLowerCase ===>', text.toLowerCase());
console.log('text toUpperCase ===>', text.toUpperCase());
console.log('text include love ===>', text.includes('love'));
console.log('text include js ===>', text.includes('js'));
console.log('text slice(0, 6) ===>', text.slice(0, 6));
console.log('text slice(0) ===>', text.slice(0));
console.log('text substring(0, 6) ===>', text.substring(0, 6));
console.log('text substring(0) ===>', text.substring(0));


console.log('Math.pow(2, 3) ===>', Math.pow(2, 3));
console.log('Math.sqrt(16) ===>', Math.sqrt(16));
console.log('Math.sqrt(16) ===>', Math.sqrt(16));
console.log('Math.abs(10) ===>', Math.abs(10));
console.log('Math.abs(-10) ===>', Math.abs(-10));
console.log('Math.min(213, 12, 43, 45, 46) ===>', Math.min(213, 12, 43, 45, 46));
console.log('Math.max(213, 12, 43, 45, 46) ===>', Math.max(213, 12, 43, 45, 46));
console.log('Math.floor(1.6) ===>', Math.floor(1.6));
console.log('Math.round(1.6) ===>', Math.round(1.6));
console.log('Math.ceil(1.6) ===>', Math.ceil(1.6));
console.log('Math.random() ===>', Math.random());
console.log('Math.random() * 10 ===>', Math.floor((Math.random() * 10)));


const arraySample = ['arash', 'amir', 'reza', 'ali'];
console.log('arraySample.length ===>', arraySample.length);
console.log('arraySample[0] ===>', arraySample[0]);
console.log('arraySample push ===>', arraySample.push('test push'), arraySample);
console.log('arraySample pop ===>', arraySample.pop(), arraySample);
console.log('arraySample shift ===>', arraySample.shift(), arraySample);
console.log('arraySample unshift ===>', arraySample.unshift('test unshift'), arraySample);
console.log('arraySample includes(reza) ===>', arraySample.includes('reza'), arraySample);
console.log('arraySample splice(1, 2) ===>', arraySample.splice(1, 2), arraySample);