import type { PageType } from "@shared/index";  

const SqlGeneratorPage = (): PageType => {
    
    function render() {
        return `<div>Sql Page</div>`;
    }
    
    return { render }
};

export { SqlGeneratorPage };