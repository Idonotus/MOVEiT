const piecetypes = "prkbnq"
const piececolors = "wb"

let s = document.createElement("style");
let jss = ""

for (const c of piececolors) {
    for (const t of piecetypes) {
        jss += `
.${c}${t} {
    background-image: url('${browser.runtime.getURL(`pieces/${c}${t}.png`)}') !important;
}
`
    }
}
s.innerHTML = jss;
console.log(s)
document.body.appendChild(s);
