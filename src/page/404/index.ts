import { PageType } from "@shared/index";

const page404Page = (): PageType => {
    
    function render() {
        return `<div>Страница не найдена!</div>`;
    }

    return { render }
}

export {
    page404Page
}