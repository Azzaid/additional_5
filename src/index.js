module.exports = function check(str, bracketsConfig) {
    var openBracketStack = "";
    var lastOpenBracket = "";
    var wasBrackets = 0;
    for (i in str) {
        console.log("symbol is " + str[i]);
        console.log("last open " + lastOpenBracket);
        console.log("stack is " + openBracketStack);
        switch (str[i]) {
            case "(" :
                lastOpenBracket = "(";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            case "{" :{
                lastOpenBracket = "{";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            }
            case "[" :{
                lastOpenBracket = "[";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            }
            case "1" :
                lastOpenBracket = "1";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            case "3" :
                lastOpenBracket = "3";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            case "5" :
                lastOpenBracket = "5";
                openBracketStack += str[i];
                wasBrackets = 1;
                break;
            case ")" :{
                if (lastOpenBracket == "(") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                    wasBrackets = 1;
                } else {
                    return (false);
                }
                break;
            }
            case "}" :{
                if (lastOpenBracket == "{") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                } else {
                    return (false);
                }
                break;
            }
            case "]" :{
                if (lastOpenBracket == "[") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                } else {
                    return (false);
                }
                break;
            }
            case "2" :{
                if (lastOpenBracket == "1") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                    wasBrackets = 1;
                } else {
                    return (false);
                }
                break;
            }
            case "4" :{
                if (lastOpenBracket == "3") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                    wasBrackets = 1;
                } else {
                    return (false);
                }
                break;
            }
            case "6" :{
                if (lastOpenBracket == "5") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                    wasBrackets = 1;
                } else {
                    return (false);
                }
                break;
            }
            case "|" :{
                if (lastOpenBracket == "|") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                } else {
                    lastOpenBracket = "|";
                    openBracketStack += str[i];
                    wasBrackets = 1;
                    break;
                }
                break;
            }
            case "7" :{
                if (lastOpenBracket == "7") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                } else {
                    lastOpenBracket = "7";
                    openBracketStack += str[i];
                    wasBrackets = 1;
                    break;
                }
                break;
            }
            case "8" :{
                if (lastOpenBracket == "8") {
                    openBracketStack = openBracketStack.slice(0,-1);
                    lastOpenBracket = openBracketStack[openBracketStack.length-1];
                } else {
                    lastOpenBracket = "8";
                    openBracketStack += str[i];
                    wasBrackets = 1;
                    break;
                }
                break;
            }

        }
    }
    if (openBracketStack == "" && wasBrackets == 1) {
        return (true);
    } else {
        return (false);
    }
};