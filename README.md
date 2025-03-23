# Linked List Implementation

This project implements a **singly linked list** in JavaScript. The implementation includes basic operations like insertion, deletion, searching, and traversal.

## 📂 Project Structure

```
📦 LinkedList-Project
┣ 📜 LinkedList.js   # Defines the LinkedList class
┣ 📜 Node.js         # Defines the Node class
┣ 📜 main.js         # Runs test cases for the LinkedList
┣ 📜 README.md       # Project documentation
```

## 🚀 Features
- **append(value)** → Adds a new node at the end.
- **prepend(value)** → Adds a new node at the beginning.
- **at(index)** → Retrieves a node at a given index.
- **pop()** → Removes the last node.
- **contains(value)** → Checks if a value exists in the list.
- **find(value)** → Returns the index of a value.
- **toString()** → Converts the list into a readable string format.
- **insertAt(value, index)** → Inserts a node at a specific index.
- **removeAt(index)** → Removes a node at a specific index.

## 🛠️ Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/AhmedMand0ur/linked-lists.git
   cd linked-lists
   ```
2. Run the test file:
   ```sh
   node main.js
   ```

## 📌 Example Usage (main.js)
```javascript
const LinkedList = require("./LinkedList");

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString());
// Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null
```

## 📝 License
This project is open-source and available for learning purposes. Feel free to use and modify it!

