import { setCurrentDate } from "./js/helper";
import { fetchGeonames, primaryObject, postTrip } from "./js/app";
import { closeModal } from "./js/ui";

import "./fonts/fontawesome/css/all.min.css";
import "./styles/variables.scss";
import "./styles/card.scss";
import "./styles/base.scss";
import "./styles/tab-info.scss";
import "./styles/tab-weather.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/modal.scss";

document.getElementById("btn-submit").addEventListener("click", fetchGeonames);
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("btn-remove-trip").addEventListener("click", closeModal);
document.getElementById("btn-save-trip").addEventListener("click", postTrip);

//set default date
setCurrentDate();

// load primary Object
primaryObject();

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    const modal = this.document.getElementById("myModal")
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

