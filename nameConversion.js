// Declaring Functions for string Coversion
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
            index === 0 ? letter.toLowerCase() : letter.toUpperCase()
        )
        .replace(/\s+/g, "");
}

function toPascalCase(str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
        .join("");
}

function toSnakeCase(str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join("_");
}

function toKebabCase(str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join("-");
}

// Declaring function for eventlistner
function myFunction() {
    let str = document.getElementById("text").value;

    document.getElementById("convert-btn").addEventListener("click", output)
    function output() {
        document.getElementById("camel-case").innerText = toCamelCase(str);
        document.getElementById("pascal-case").innerText = toPascalCase(str);
        document.getElementById("snake-case").innerText = toSnakeCase(str);
        document.getElementById("screaming-snake-case").innerText = toSnakeCase(str);
        document.getElementById("kebab-case").innerText = toKebabCase(str);
        document.getElementById("screaming-kebab-case").innerText = toKebabCase(str);
    }
}


document.getElementById("text").addEventListener("input", myFunction);