/* Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1
"Fundamentals" --> "Fund4m3nt41s"
"Seven" --> "S3v3n"
"Los Angeles" --> "Los 4ng313s"
"Seoijselawuue" --> "S3oijs314wuu3" */

function nerdy(str) {
  str = str.replace(/[aA]/g, "4");
  str = str.replace(/[eE]/g, "3");
  str = str.replace(/[l]/g, "1");
  return str;
}
console.log(nerdy("Fundamentals"));

// gi is ignoring case sensitive
function nerdy(str) {
  str = str.replace(/[a]/gi, "4");
  str = str.replace(/[e]/gi, "3");
  str = str.replace(/[l]/g, "1");
  return str;
}

console.log(nerdy("Seven"));

function nerdy(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let word = str.charAt(i);

    switch (word) {
      case "a":
      case "A":
        result += "4";
        break;
      case "e":
      case "E":
        result += "3";
        break;
      case "l":
        result += "1";
        break;
      default:
        result += word;
    }
  }
  return result;
}

console.log(nerdy("Los Angeles"));

function nerdy(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let word = str.charAt(i);

    switch (word.toLowerCase()) {
      case "a":
        result += "4";
        break;
      case "e":
        result += "3";
        break;
      case "l":
        result += "1";
        break;
      default:
        result += word;
    }
  }
  return result;
}

console.log(nerdy("Seoijselawuue"));
