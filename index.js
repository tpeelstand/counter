// Variables
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

// Add people to count
function increment() {
    count += 1
    countEl.textContent = count
};

// subtract people from count
function decrement() {
    count -= 1
    countEl.textContent = count
};

// Save Button
function save() {
   let saveCount = count + ", ";
   saveEl.textContent += saveCount;
  
   // Reset count to 0 after save
   count = 0
   countEl.textContent = count
}