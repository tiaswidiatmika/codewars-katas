function presses(phrase) {
    const oncers = ["1", "a", "d", "g", "j", "m", "p", "t", "w", "*", " ", "#"];
    const twicers = ["0", "b", "e", "h", "k", "n", "q", "u", "x"];
    const thricers = ["c", "f", "i", "l", "o", "r", "v", "y"];
    const fourthers = ["2", "3", "4", "5", "6", "s", "8", "z"];
    let counter = 0;
    phrase
        .toLowerCase()
        .split("")
        .forEach((letter) => {
            if (oncers.includes(letter)) {
                counter += 1;
                return;
            }

            if (twicers.includes(letter)) {
                counter += 2;
                return;
            }

            if (thricers.includes(letter)) {
                counter += 3;
                return;
            }

            if (fourthers.includes(letter)) {
                counter += 4;
                return;
            }
            counter += 5;
        });
    return counter;
}
