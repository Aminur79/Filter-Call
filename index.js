import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// mock data for users
const mockUsers = [
    { id: 1, name: "Mino", age: "22", },
    { id: 2, name: "Amir", age: "16", },
    { id: 3, name: "Hamzah", age: "48", },
    { id: 4, name: "Sarah", age: "19", },
    { id: 5, name: "Khairo;", age: "23", },
    { id: 6, name: "Wan", age: "26", },
    { id: 7, name: "Shaheera", age: "29", },
    { id: 8, name: "Imperial", age: "24", },
    { id: 9, name: "Lan", age: "23", },
    { id: 10, name: "Zyan", age: "23", },
    { id: 11, name: "Acai", age: "27", },
    { id: 12, name: "Nurul", age: "25", },
    { id: 13, name: "Zarina", age: "26", },
    { id: 14, name: "Aini", age: "25", },
    { id: 15, name: "Faris", age: "22", },
    { id: 16, name: "Pj", age: "23", },
    { id: 17, name: "Mad", age: "25", },
    { id: 18, name: "Isma", age: "26", },
    { id: 19, name: "Mashi", age: "25", },
    { id: 20, name: "Niqi", age: "25", },
    { id: 21, name: "Hafiz", age: "32", },
    { id: 22, name: "Yunus", age: "26", },
    { id: 23, name: "Adam", age: "27", },
    { id: 24, name: "Yatt", age: "30", },
    { id: 25, name: "Amir", age: "22", },
];

// Basic route
app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello World" });
});

// Get all users with optional filtering
//localhost:5000/api/users?filter=name&value=shi  (example find by string)
app.get("/api/classname", (req, res) => {
    console.log(req.query)

    const { filter, value } = req.query
    const validFilters = ["name", "age"]

    if (filter && !validFilters.includes(filter)) {
        return res.status(400).send({ msg: "Invalid filter parameter" });
    }
    if (!filter || !value) {
        return res.status(200).send(mockUsers);
    }

    const filteredUsers = mockUsers.filter(user =>
        user[filter] && user[filter].toLowerCase().includes(value.toLowerCase())
    )

    if (filteredUsers.length === 0) {
        return res.status(404).send({ msg: "Invalid not found" });
    }

    res.status(200).send(filteredUsers);
});

// Get user by ID
//localhost:5000/api/users/1 (example find by id)

app.get("/api/classname/:id", (req, res) => {
    console.log(req.params)

    const parseId = parseInt(req.params.id, 10)
    console.log(parseId)

    if (isNaN(parseId)) {
        return res.status(400).send({ msg: "Bad request. Invalid ID" })
    }

    const findUser = mockUsers.find(user => user.id === parseId)
    if (!findUser) {
        return res.status(404).send({ msg: "User not found" })
    }

    res.status(200).send(findUser);
})

// app.get("/api/products", (req, res) => {
//     res.status(200).send([
//         { id: 1, name: "iPhone", price: 1000, category: "Electronics" },
//         { id: 2, name: "Laptop", price: 2000, category: "Electronics" },
//         { id: 3, name: "Tablet", price: 3000, category: "Electronics" }
//     ]);
// });

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
