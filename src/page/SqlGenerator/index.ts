import type { PageType } from "src/shared";  

const SqlGenerator = (): PageType => {
    
    function render() {
        return `<div>Sql Page</div>`;
    }
    
    return { render }
};

export { SqlGenerator };