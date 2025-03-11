document.addEventListener("DOMContentLoaded", async () => {
  const menuContainer = document.getElementById("menu-list");

  const response = await fetch("menu.json");
  const menuData = await response.json();

  menuData.forEach(category => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "category";

      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category.category;

      const itemList = document.createElement("ul");

      category.items.forEach(item => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
          itemList.appendChild(listItem);
      });

      categoryDiv.appendChild(categoryTitle);
      categoryDiv.appendChild(itemList);
      menuContainer.appendChild(categoryDiv);
  });
});
