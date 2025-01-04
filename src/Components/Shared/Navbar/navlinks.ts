export const navlinks = [
    {
        label: "Home",
        action: () =>
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
        label: "Services",
        action: () =>
            document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
        label: "About Us",
        action: () =>
            document
                .getElementById("aboutUs")
                ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
        label: "Portfolio",
        action: () =>
            document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" }),
    },
];