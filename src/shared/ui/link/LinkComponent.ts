import "./LinkComponent.css"

function LinkComponent () {
    const createLink = (href: string, text: string, className: string) => {
        const link = document.createElement("a");
        link.href = href;
        link.innerText = text;
        link.classList.add(className);
        return link;
    }

    return {
        createLink
    }
}

export const linkComponent = LinkComponent();