

let url = "https://github.com/masai-codes/fswd_evaluations/tree/main/RCT-101/RCT-101.E3/B-17/solution";


let subs = "/tree/main/";
let gitUrl, projDir;

if(url.includes(subs)){
    parsedUrl = url.split(subs);
    gitUrl = parsedUrl[0];
    projDir = parsedUrl[1];
}

console.log(gitUrl);
console.log(projDir);