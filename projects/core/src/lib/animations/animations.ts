import { trigger, transition, query, style, animate } from "@angular/animations";

export const GU_ANIMATION_DURATION = '300ms';
const TRANSITION = GU_ANIMATION_DURATION + ' ease-in-out';

export const guSlideInLeftList = trigger("guSlideInLeftList", [
    transition(":enter", [
        style({ transform: "translateX(-150%)" }),
        animate(TRANSITION, style({ transform: "translateX(0)" }))
    ]),
    transition(":leave", [
        style({ transform: "translateX(0)" }),
        animate(TRANSITION, style({ transform: "translateX(-150%)" }))
    ])
]);