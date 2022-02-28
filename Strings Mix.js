function mix(s1, s2 = null) {
    s1 = sanitize(s1);
    s2 = sanitize(s2);
    return s1;
}
console.log(mix("my&friend&Paul has heavy hats! &"));
function sanitize(s) {
    return s.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").toLowerCase();
}
