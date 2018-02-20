class Sorter {
  constructor() {
	this.storage = [];
	this.compareFunction = (left, right) => left - right;
  }

  add(element) {
	this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
	return this.storage.length;
  }

  toArray() {
	return this.storage;
  }

  sort(indices) {
	let indicesSort = indices.sort(); 
	let arr = indicesSort.map(item => this.storage[item]);
	arr.sort(this.compareFunction);
	indicesSort.forEach((item, i) => {this.storage[item] = arr[i]});
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;