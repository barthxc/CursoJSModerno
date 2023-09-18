//WeakSet

const weakset = new WeakSet(); //Solo puedes agregar objetos

const cliente ={
    nombre:'Juan',
    saldo:100
}

weakset.add(cliente);

console.log(weakset)

console.log(weakset.has(cliente))
console.log(weakset.delete(cliente))
//WeakSet no tiene .size Y NO SON ITERABLES