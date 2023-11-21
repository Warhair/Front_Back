import { tagLst, tagTwo } from "../../htmlUtils.js";
import LoadingBar from "../LoadingBar.js";
import TablaSorView from "./SorView.js";

class TablaView
{
    #szuloElem;
    #sorok;

    constructor(szuloElem)
    {
        this.#szuloElem = szuloElem;
        new LoadingBar(this.#szuloElem);
    }

    adatBetolt(adatLista, primaryKey)
    {
        if (adatLista.length > 0)
        {
            this.#szuloElem.html(
                tagTwo("table", { class: "table table-bordered" }, [
                    tagTwo("thead", {}, [
                        tagTwo("tr", {}, [
                            tagLst(Object.keys(adatLista[0]), ertek => tagTwo("th", {}, [ertek])),
                            tagTwo("th", {}, ["Szerkesztés"]),
                            tagTwo("th", {}, ["Törlés"])
                        ])
                    ]),
                    tagTwo("tbody")
                ])
            );
            const SOR_SZULO_ELEM = this.#szuloElem.children("table").children("tbody");
            this.#sorok = [];
            adatLista.forEach((adat, index) => {
                this.#sorok.push(new TablaSorView(SOR_SZULO_ELEM, adat, primaryKey, index));
            });
        }
        else
        {
            this.#szuloElem.html(
                tagTwo("h5", { class: "text-center p-2 border rounded" }, ["Nincsenek adatok"])
            );
        }
    }

    hibaKiir(error)
    {
        this.#szuloElem.html(
            tagTwo("div", { class: "border rounded p-2" }, [
                tagTwo("h5", { class: "text-center text-danger" }, ["Hiba"]),
                tagTwo("p", {}, [error])
            ])
        );
    }

    szerkeszt(sorIndex)
    {
        this.toggleGombokDisabled();
        this.#sorok[sorIndex].szerkeszt();
    }

    toggleGombokDisabled()
    {
        this.#sorok.forEach(sor => {
            sor.toggleGombokDisabled();
        });
    }
}

export default TablaView;