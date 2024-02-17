import "./LinkComponent.css"

function LinkComponent () {
    const createLink = (href: string, text: string, className: string) => {
        const link = document.createElement("a");
        link.href = href;
        link.innerText = text;
        link.classList.add(className);
        link.onclick = function(e:Event) {
            e.preventDefault();
            const thisElement = this as HTMLAnchorElement;
            history.pushState(null, null, thisElement.href);
            acitveOff();
            thisElement.classList.add("active");
        }
        return link;
    }

    const acitveOff = () => {
        const activeLinkArray = document.querySelectorAll("a.active");
        for (const activeLink of activeLinkArray) {
            activeLink.classList.remove("active");
        }
    }

    const activeOnLink = (href: string) => {
        const activeLinkArray = document.querySelectorAll(`a[href="${href}"]`);
        for (const activeLink of activeLinkArray) {
            activeLink.classList.add("active");
        }
    }

    return {
        createLink,
        activeOnLink
    }
}

export const linkComponent = LinkComponent();