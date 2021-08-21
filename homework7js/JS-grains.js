function willThisWork() {
    let result = "18,446,744,073,709,551,615";
    let calculation = (2 ** 64) - 1
    if (result == calculation) {
        console.log("You should've known better, JavaScript can't handle such big numbers, you idiot, as such, just Google the answer pls.")
    } else {
        console.log("The result is supposed to be '" + result + "' but because of JavaScript's limitations, it approximates it to '" + calculation + "', so to properly calculate this number, a different language is to be used. Or just Google it pls.")
    }
}

willThisWork();