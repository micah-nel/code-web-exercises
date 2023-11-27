const getTools = () => {
    const url = "../data/inventory.json"
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then(response=>response.json())
        .then((data)=> data)
}

const createTableElement = (tools) => {
    const trow = document.createElement("tr")
    trow.innerHTML =
        `
        <th scope="row">1</th>
        <td>${tools.title}</td>
        <td>${tools.quantity}</td>
        <td>${tools.categories}</td>
        <td>${tools.price}</td>
    `;
    return trow;
}
const renderTableItems = (tools) => {
    const tbody = document.querySelector("#insertProducts");
    const toolFragment = document.createDocumentFragment();
    for(let tool of tools) {
        const tableItems = createTableElement(tool)
        toolFragment.appendChild(tableItems)
    }
    tbody.appendChild(toolFragment)
}
//MAIN
(async ()=>{
    const tools = await getTools();
    console.log(tools)
    renderTableItems(tools);
})()