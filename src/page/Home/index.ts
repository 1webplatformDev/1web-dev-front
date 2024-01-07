import type { PageType } from "src/shared";  

const HomePage = (): PageType => {
    
    function render() {
        return `<a href="/sql-generator">sql</a><div>Home Page</div>`;
    }
    return { render }
};

export { HomePage };