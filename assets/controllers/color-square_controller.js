import { Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ['colorSquare'] //toujours static pour utiliser la syntaxe
    selectColor(event) {
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected');
        });
        console.log(this.colorSquareTargets);
        event.currentTarget.classList.add('selected');

    }
}