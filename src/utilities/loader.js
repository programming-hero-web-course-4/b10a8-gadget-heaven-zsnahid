export const loader = async () => {
  const [gadgetsRes, categoriesRes] = await Promise.all([
    fetch("gadgets-data.json"),
    fetch("categories.json"),
  ]);
  const gadgetsData = await gadgetsRes.json();
  const categoriesData = await categoriesRes.json();
  return { gadgetsData, categoriesData };
};
