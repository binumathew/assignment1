
export function getSearchList (mockData =[],input) {   
    let first = mockData[0];
    let whichRegexOutput= whichRegex(input)
    console.log(whichRegexOutput);
    if(first && input !=="")
    {     
        let keys = Object.keys(first)
        return mockData.filter(data => whichRegexOutput.test(data[keys[1]]) || whichRegexOutput.test(data[keys[2]]));
    }
};
function whichRegex(input)
{
    var regex;
    if (/\s/.test(input) && /".*?"/.test(input) === false) {
        var removed_quotes = input.replace(/^"(.+(?="$))"$/, '$1')
         regex = new RegExp(input.split(" ").join('|'), 'i');
    } else {
        var removed_quotes = input.replace(/^"(.+(?="$))"$/, '$1')
        regex = new RegExp(removed_quotes, 'i');
    }
    
    return regex;
}