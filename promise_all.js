function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return '멍';
}

const getCat = async () => {
  await sleep(500);
  return '냥';
}

async function process() {
  const start = Date.now();
  const [dog, cat] = await Promise.all([getDog(), getCat()]);
  console.log(dog);
  console.log(cat);
  console.log(Date.now() - start);
}

process();