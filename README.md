# ❄️ snowid

![npm version](https://img.shields.io/npm/v/snowid)
[![npm downloads](https://img.shields.io/npm/dw/snowid)](https://www.npmjs.com/package/snowid)
![license](https://img.shields.io/npm/l/snowid)
![node version](https://img.shields.io/node/v/snowid)

A fast **Snowflake-style distributed unique ID generator** for Node.js.

`snowid` generates **10-character Base62 IDs** using a **60-bit structure** designed for high performance, distributed systems, and chronological sorting.

---

## ✨ Features

* ⚡ **Fast** — ~1M+ IDs/sec
* 🔢 **Short IDs** — fixed 10 characters
* 🧩 **Snowflake-style design**
* 🌍 **Distributed safe**
* ⏱ **Time sortable**
* 🔒 **Collision resistant**
* 🧠 **Clock rollback protection**
* 🔍 **Decode IDs for debugging**


---

## 📦 Installation

```bash
npm install snowid
```

---

## 🚀 Usage

```javascript
const { generateId } = require("snowid");

const id = generateId();

console.log(id);
```

Example output:

```
2woKbfHQkC
```

---

## 🔍 Decode an ID

You can inspect any ID to retrieve its internal components.

```javascript
const { generateId, decodeId } = require("snowid");

const id = generateId();

console.log(id);

console.log(decodeId(id));
```

Example output:

```json
{
  "timestamp": 1737049234001,
  "machineId": 2,
  "sequence": 14
}
```

---

## 🧠 ID Structure

`snowid` uses a **60-bit layout**.

```
| timestamp | machineId | sequence |
| 40 bits   | 6 bits    | 14 bits  |
```

Meaning:

| Component  | Description                         |
| ---------- | ----------------------------------- |
| Timestamp  | Milliseconds since custom epoch     |
| Machine ID | Identifies generating node          |
| Sequence   | Counter within the same millisecond |

---

## 🕒 Custom Epoch

Default epoch:

```
Jan 1, 2025
```

This allows the timestamp field to work for about **34 years**.

---

## ⚡ Performance

Example benchmark:

```
Generated: 1,000,000 IDs
Time: ~1 second
Rate: ~1,000,000 IDs/sec
```

---

## 📁 Project Structure

```
snowid
│
├── src
│   ├── base62.js
│   ├── decode.js
│   ├── generator.js
│   ├── index.js
│   └── machineId.js
│
├── tests
│
├── scripts
│
├── benchmark
│
└── package.json
```

---

## 🛣 Roadmap

Future versions may include:

* custom alphabets
* configurable ID length
* browser support
* worker-safe generators
* batch ID generation

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve `snowid`, feel free to open an issue or submit a pull request.

---

## 📜 License

MIT License

---

## 👤 Author

Arman Hansda
