import type { PageType } from "src/shared";  

const HomePage = (): PageType => {
    
    function render() {
        return `<div>Home Page</div>`;
    }
    return { render }
};

export { HomePage };