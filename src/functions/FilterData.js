export function getSearchList (mockData =[],input) {
    let first = mockData[0];
    let whichRegexOutput= whichRegex(input)
  
    if(first)
    {
        let keys = Object.keys(first)
        return mockData.filter(data => whichRegexOutput.test(data[keys[1]]) || whichRegexOutput.test(data[keys[2]]));
    }
    else
    {
        return mockData;
    }
};
function whichRegex(input)
{
    
    if (/\s/.test(input) && /".*?"/.test(input) === false) {
        var regex = new RegExp(input.split(" ").join('|'), 'i');
    } else {
        var removed_quotes = input.replace(/^"(.+(?="$))"$/, '$1')
        var regex = new RegExp('(:?(' + removed_quotes + ')(([^_])|$))', 'i');
    }
    
    return regex;
}