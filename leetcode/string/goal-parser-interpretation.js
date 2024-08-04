/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    if(command.includes("()")){
        command = command.replace(/\(\)/g, "o");
    }
    if(command.includes("(al)")){
        command = command.replace(/\(al\)/g, "al");
    }
    return command
};

console.log(interpret("G()()()()(al)"))