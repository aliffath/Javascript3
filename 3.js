const cekCrew = (crew) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataCrew = [
        "Luffy",
        "Zoro",
        "Sanji",
        "Nami",
        "God ussop",
        "Robin",
        "Chopper",
        "Franky",
        "Soul king",
        "Jinbei",
      ];
      let findCrew = dataCrew.find((data) => {
        return data.toLowerCase() === crew.toLowerCase();
      });
      if (findCrew) {
        resolve(findCrew);
      } else {
        reject(new Error("Bukan kru SHP"));
      }
    }, 2000);
  });
};

cekCrew("asdd")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err.message));

const cekYonkou = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const yonkou = ["Shirohige", "Kurohige", "Big Mom", "Shanks", "Kaido"];
      let findYonkou = yonkou.find((data) => {
        return data.toLowerCase() === name.toLowerCase();
      });
      if (findYonkou) {
        resolve(findYonkou);
      } else {
        reject(new Error("Yonkou Not Found"));
      }
    }, 2000);
  });
};

const getYonkou = async (name) => {
  try {
    const checker = await cekYonkou(name);
    console.log(checker);
  } catch (err) {
    console.log(err.message);
  }
};

getYonkou("sfesfrt");
