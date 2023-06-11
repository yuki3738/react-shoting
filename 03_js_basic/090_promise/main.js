let a = 0;
// console.log(a);

init();
async function init() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        // resolve(a)
        reject(a)
      }, 2000);
    })
      console.log(result);
  } catch(e) {
    console.log(`catchが実行`, e)
  }
  // }).catch((c) => {
    // console.log(`catchが実行`, c)
  // })
}
