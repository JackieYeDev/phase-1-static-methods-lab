class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  };
  static titleize(string) {
    const exceptionSet = new Set(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]);
    const wordArray = string.split(" ").map((word) => 
      exceptionSet.has(word)?word:(word.charAt(0).toUpperCase() + word.slice(1))
    );
    wordArray[0] = wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1);

    return wordArray.reduce((a,b) => a + " " + b);
  };
}