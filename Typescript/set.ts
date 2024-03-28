let mySet = new Set<string>();
mySet.add('Arun');
mySet.add('Abi');
mySet.add('Bharani');
mySet.add('chandru'); 
mySet.add('Dhina');
console.log(mySet.has('Abi')); 

mySet.delete();
mySet.forEach(function(item) {
    console.log(item);
});
