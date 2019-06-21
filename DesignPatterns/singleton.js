const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: 'Omer' };
  }

  function getInstance() {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }

  return { getInstance }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

console.log(instanceA);
console.log(instanceB);