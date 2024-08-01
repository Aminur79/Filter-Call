import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


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



app.get("/api/classname", (req, res) => {
    console.log(req.query);

    const {
        query: { filter, value },
    } = req;

    if (!filter && !value) return res.send(mockUsers);

    if (filter && value) {

        const filteredUsers = mockUsers.filter((user) => user[filter].includes(value));

        return res.send(filteredUsers);
    }
});










app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
