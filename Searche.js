
/*################################################################################
#                            Build Search with RegExp                            #
################################################################################*/
function buildPattern(stringMap){
    let pattern = [];
    stringMap.forEach(function(word)
    {
        // "i" flag force RegExp to be Key insensitive
        pattern.push(new RegExp(word, 'i'))
    })

    return pattern;
}
function proofOfExistIn(text,pattern){
    let result = []
    buildPattern(pattern).forEach(function(regEx)
    {
        if (text.match(regEx) !== null)
            result.push(text.match(regEx));
    })

    return result;
}


let pattern= ['[Tt]echstarter', 'techstarter',"will","bei","System"]
let text = "Willkommen bei Techstarter"

console.log(proofOfExistIn(text,pattern));

/*################################################################################
#                            Build Test with RegExp                            #
################################################################################*/

const regex = new RegExp(/^a...s$/);
console.log(regex.test('aliax')); // true


/*Example 1: Regular Expressions*/

//Native usage
let string = 'Find me me me';
const pattern = /me/;

// search if the pattern is in string variable
let result1 = string.search(pattern);
console.log(result1); // 5

// replace the character with another character
console.log(string.replace(pattern, 'found you')); // Find found you

// splitting strings into array elements
const regex1 = /[\s,]+/;
let result2 = 'Hello world!'.split(regex1);
console.log(result2); // ['Hello', 'world!', '']

// searching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
let result3 = regex2.exec('My phone number is: 555 123-4567.');
console.log(result3); // ["555 123-4567", "555", "123", "4567"]

/*Example 2: Regular Expression Modifier*/

string = 'Hello hello hello';

// performing a replacement
result1 = string.replace(/hello/, 'world');
console.log(result1); // Hello world hello

// performing global replacement
result2 = string.replace(/hello/g, 'world');
console.log(result2); // Hello world world

// performing case-insensitive replacement
result3 = string.replace(/hello/i, 'world');
console.log(result3); // world hello hello

// performing global case-insensitive replacement
let result4 = string.replace(/hello/gi, 'world');
console.log(result4); // world world world






















