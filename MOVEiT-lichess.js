const piecetypes = {"p":"pawn", "r":"rook", "k":"king", "b":"bishop", "n":"knight", "q":"queen"}
const piececolors = {"w":"white","b":"black"}

let s = document.createElement("style");
let jss = ":root {"

for (const [ccode, color] of Object.entries(piececolors)) {
    for (const [tcode, type] of Object.entries(piecetypes)) {
        jss += `
        ---${color}-${type}: url('${browser.runtime.getURL(`pieces/${ccode}${tcode}.png`)}') !important;
        `
    }
}
jss += "}"
s.innerHTML = jss;
console.log(s)
document.body.appendChild(s);
