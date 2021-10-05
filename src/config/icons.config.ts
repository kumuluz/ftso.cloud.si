import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faClipboard as regClipboard,
} from "@fortawesome/free-regular-svg-icons";
import {faClipboard as solidClipboard} from "@fortawesome/free-solid-svg-icons";

export function initializeIcons() {
    const icons = [
        regClipboard,
        solidClipboard,
    ];
    library.add(...icons);
}
