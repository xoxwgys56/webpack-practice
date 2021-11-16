/**
 * `square` 함수를 가져오지 않은 것을 확인하자.
 */
import { cube } from "./math.js";

function component() {
    const element = document.createElement("pre");

    element.innerHTML = [
        "Hello webpack",
        `5 cubed is equal to ${cube(5)}`
    ].join("\n\n");

    return element;
}

document.body.appendChild(component());