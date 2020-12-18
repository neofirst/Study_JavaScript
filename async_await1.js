function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve, ms));
}

async function makeError(){
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process(){
  try{
    await makeError();
  }
  catch(e){
    console.error(e);
  }
  console.log('hi1');
  await sleep(1000);
  console.log('hi2');
  return true;
}

process()
.then(value=>{
  console.log(value);
});