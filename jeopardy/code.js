async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=3");
    let data = await response.json();
    return data;
}