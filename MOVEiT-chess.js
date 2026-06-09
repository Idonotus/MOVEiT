const piecetypes = "prkbnq"
const piececolors = "wb"

let s = document.createElement("style");
document.body.appendChild(s);

for (const c of piececolors) {
    for (const t of piecetypes) {
        s.sheet.insertRule(`
.${c}${t} {
    background-image: url('${browser.runtime.getURL(`pieces/${c}${t}.png`)}') !important;
}
`)
    }
}
