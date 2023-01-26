import plantList from '../datas/plantList'
const numbers = [1, 2, 3, 4]
const doubles = numbers.map(x => x * 2) // [2, 4, 6, 8]
/*const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'pothos vert',
    'avocatier',
    'yucca',
    'palmier'
]*/
// key for loop(listName.map(function) : DBid *the best,other ways->substitution of id, element-index key={`${plant}-${index}`})

/***take categories as an array ***/
let plantCategories = []
console.log(plantList[0].category)
for(let i=0; i < plantList.length; i++) {
    plantCategories.push(plantList[i].category)}
console.log("plantCategories: "+ plantCategories)
function removeDuplicates(plantCategories) {
    return plantCategories.filter((item, index)=> plantCategories.indexOf(item) === index);
} 
let categoryList = removeDuplicates(plantCategories);
console.log(categoryList)
/*** fin: take categories as an array ***/
function ShoppingList() {   
    return (
        <div>
            <div>
                how to use "map forEach filter reduce" <br />
                map passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.<br />
                {doubles}
            </div>
            <button className="btn" id="btnAll">all</button>
            <button className="btn" id="btnClassic">classique</button>
            <button className="btn" id="btnOutside">extérieur</button>
            <button className="btn" id="btnInside">plante grasse</button>

            <div>
                <button>all</button>
                {categoryList.map((cat, index) => (
                    <button key={`${cat}-${index}`} id={`"btn" + ${cat}${index}`}>{cat}</button>
                ))}
            </div>

            <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>{plant.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default ShoppingList