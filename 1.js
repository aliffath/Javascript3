const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

//Menggunakan then catch
cekHariKerja("senin")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });

// const cekWorkingDay = async (day) => {
//   try {
//     const data = await cekHariKerja(day);
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// cekWorkingDay("minggu");
