// async function : declaration creates a binding of a new async function to given name
// await keword is permitted within the function body, enabling asynchronous
// promise-based behavior to be written in a cleaner style and avoiding the need to
// explicitly configure promise chains.

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();