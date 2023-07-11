const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "juli",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];
    if (!error) {
      callback(month);
    } else {
      callback(new Error("Sorry data not found"), []);
    }
  }, 4000);
};

const displayMonth = (error, month) => {
  if (error) {
    console.log(error);
  } else {
    const monthList = month.map((data) => {
      return data;
    });
    console.log(monthList);
  }
};

getMonth(displayMonth);
