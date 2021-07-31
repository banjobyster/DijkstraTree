const DsAlgos = [
    {name: 'Arrays'},{name: 'DisjointSet'},{name: 'Graphs'},{name: 'Heaps'},{name: 'LinkedLists'},
    {name: 'Maps'}, {name: 'Queues'},{name: 'Stacks'},{name:'Trees'},{name: 'Tries'},{name: 'BitManipulation'},
    {name: 'ConstructiveAlgorithms'},{name: 'DynamicProgramming'},{name: 'GameTheory'},{name: 'Greedy'},{name: 'Implementation'},
    {name: 'NPComplete'},{name: 'Recursion'},{name: 'Search'},{name: 'Sortings'},{name: 'Strings'}
];

const list = document.getElementById('list');

function setList(group)
{
    clearList();

    for (const element of group)
    {
        const item = document.createElement('li');
        const text = document.createTextNode(element.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0)
    {
        setNoResults();
    }
}

function setNoResults()
{
    const item = document.createElement('li');
    const text = document.createTextNode("No Results Found");
    item.appendChild(text);
    list.appendChild(item);
}

function clearList()
{
    while (list.firstChild)
    {
        list.removeChild(list.firstChild);
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0)
    {
        value = value.trim().toLowerCase();

        setList(DsAlgos.filter(element => {
            return element.name.toLowerCase().includes(value);
        }));
    }
    else
    {
        clearList();
    }

});