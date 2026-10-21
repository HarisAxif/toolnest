import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const context=vm.createContext({TextEncoder,document:{getElementById:()=>null,querySelector:()=>null}});
vm.runInContext(fs.readFileSync('dist/app.js','utf8'),context);
const cases=[
 ['{"id":9007199254740993123,"small":1.0,"big":1e400}', '{"id":9007199254740993123,"small":1.0,"big":1e400}'],
 [' { "same": 1, "same": 2, "a": [ {}, [], true, false, null ] } ','{"same":1,"same":2,"a":[{},[],true,false,null]}'],
 ['{"text":"a \\"quoted\\" value","unicode":"\\u0041","slashes":"\\\\"}','{"text":"a \\"quoted\\" value","unicode":"\\u0041","slashes":"\\\\"}'],
 ['-2.50E+3','-2.50E+3'], ['"space : { [ , inside"','"space : { [ , inside"']
];
for(const [input,expected]of cases){context.input=input;const min=vm.runInContext('formatJSON(input,true)',context);assert.equal(min,expected);const pretty=vm.runInContext('formatJSON(input,false)',context);context.pretty=pretty;assert.equal(vm.runInContext('formatJSON(pretty,true)',context),expected);JSON.parse(pretty);}
for(const invalid of ['{"a":1,}','[1,,2]','{"a":"unterminated}','{"a":NaN}']){context.input=invalid;assert.throws(()=>vm.runInContext('formatJSON(input)',context));}
context.input='['.repeat(101)+'0'+']'.repeat(101);assert.throws(()=>vm.runInContext('formatJSON(input)',context));assert.equal(vm.runInContext('formatJSON(input,true)',context),context.input);
console.log('PASS: JSON numeric precision, decimal/exponent spelling, escaped text, duplicate keys, empty containers, syntax errors and nesting limit.');
