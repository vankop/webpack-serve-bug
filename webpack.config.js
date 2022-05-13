const path = require("path");

module.exports = [
    {
        mode: "production",
        name: "build1",
        entry: "./src1",
        output: { filename: "build1.js", path: path.resolve(__dirname, "src2") }
    },
    {
        mode: "production",
        name: "app",
        dependencies: ["build1"],
        entry: "./src2",
    }
];
