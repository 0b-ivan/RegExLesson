






const regex = new RegExp(/^a...s$/);
console.log(regex.test('alias')); // true

const regexFrom = (strings, flags) =>
    new RegExp(
        strings
            // Escape special characters
            .map(s => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, "\\$&"))
            // Sort for maximal munch
            .sort((a, b) => b.length - a.length)
            .join("|"),
        flags
    );


// Example
