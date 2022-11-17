export const burger = () => {
    const burgerTarget = document.querySelector(".burger");
    const burgerMenu = document.querySelector(".burger__menu");

    burgerTarget.addEventListener("click", () => {
        const isActive = burgerMenu.classList.contains("burger__menu_active");
        if (!isActive) {
            burgerMenu.classList.add("burger__menu_active");
            burgerTarget.classList.add("burger_active");
            return;
        }
        burgerMenu.classList.remove("burger__menu_active");
        burgerTarget.classList.remove("burger_active");
    });
};
