// Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
// Description:
// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

// Notes:
// Words are separated with spaces
// Each word will include at least 1 letter
// There will be no exclamation marks in the middle of a word
function remove(s) {
    s = s.split(" ");
    s = s
        .map((item) => {
            let pre = item.match(/^[!]+/g);
            let post = item.match(/[!]+$/g);
            item = item.replace(/[!]+/g, "");
            if (pre == null || post == null) return item;
            return pre[0].length < post[0].length
                ? pre[0] + item + pre[0]
                : post[0] + item + post[0];
        })
        .join(" ");
    return s;
}
