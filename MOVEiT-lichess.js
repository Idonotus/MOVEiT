const piecetypes = {"p":"pawn", "r":"rook", "k":"king", "b":"bishop", "n":"knight", "q":"queen"}
const piececolors = {"w":"white","b":"black"}

let s = document.querySelector(":root");

for (const [ccode, color] of Object.entries(piececolors)) {
    for (const [tcode, type] of Object.entries(piecetypes)) {
        s.style.setProperty(`---${color}-${type}`,`url('${browser.runtime.getURL(`pieces/${ccode}${tcode}.png`)}')`);
    }
}
