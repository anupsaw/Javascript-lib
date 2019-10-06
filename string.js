
/** string formatter */
function formatString(str, ...args) {
    args.forEach((item, index) => {
        const regex = new RegExp(`\\{[${index}]\\}`);
        str = str.replace(regex, item);
    });
    return str;
}