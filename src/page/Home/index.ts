import { PageType } from "@shared/types/index";

const HomePage = (): PageType => {
    
    function render() {
        return `<div>Home Page</div>`;
    }
    return { render }
};

export { HomePage };