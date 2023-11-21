import UrlapModel from "../model/UrlapModel.js";
import UrlapView from "../View/Urlap/UrlapView.js";
import DataService from "../model/DataService.js";

class UrlapController {
    #dataService;
   
    constructor() {
       
        this.urlap()
        /* this.#dataService = new DataService();
        this.#dataService.getData(adatVegpont, feldolgoz); */
        this.asszinkronAdatok();
    }
    asszinkronAdatok() {
        let adatVegpont = "http://localhost:3000/adat";
        this.#dataService = new DataService();
        //this.#asszinkron.getData(adatVegpont, this.feldolgoz);
        this.#dataService.getAxiosData(adatVegpont, this.feldolgoz);
    }
    urlap() {
        const urlapModel = new UrlapModel();
        const urlapView = new UrlapView(urlapModel.adatLeiras, $(".urlap"));
    }
    feldolgoz(data) {
        console.log(data);
       
    }
}
export default UrlapController;
