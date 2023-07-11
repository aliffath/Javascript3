const getName = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const resultName = await result.json();
    const names = resultName.map((data) => data.name);
    console.log(names);
  } catch (err) {
    console.log(err.message);
  }
};
getName();
