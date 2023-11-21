export const adat = [
    { nev: "Lackffy János", szul: 1969 },
    { nev: "József Attila", szul: 1905 },
];
/* 
export const tipus = { nev: "text", szul: "number" };
export const kulcs = { nev: "Név", szul: "Születési idő" };
export const pattern = { nev: "[A-Za-z]{3}", szul: { min: 1000, max: 2023 } }; */
export const adatLeiras = {
    vnev: {
        megjelenes: "Vezetéknév",
        tipus: "text",
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
    knev: {
        megjelenes: "Keresztnév",
        tipus: "text",
        placeholder: "Valaki Vagyok",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required: true,
    },
    szul: {
        megjelenes: "Születési idő",
        tipus: "date",
        value:"2000-01-01",
        pattern: { min: "1000-01-01", max: "2023-12-30" },
        szoveg: "1000 és 2023 közötti számot adhat meg!",
    },
};
