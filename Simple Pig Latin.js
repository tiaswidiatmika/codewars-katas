function pigIt(str) {
    return str
        .split(" ")
        .map((item) => {
            if (item.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)) return item;
            return `${item.substring(1)}${item[0]}ay`;
        })
        .join(" ");
}
