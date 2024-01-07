import { PageType } from "@shared/types/index";

const page404Page = (): PageType => {
    
    function render() {
        return `<div>Страница не найдена!</div>`;
    }

    return { render }
}

export {
    page404Page
}