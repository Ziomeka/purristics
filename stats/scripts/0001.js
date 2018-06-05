(function() {
    let data = [
        [2938, 504, 242, 234, 142, 103, 221, 24, 47, 253, 498, 201, 421, 3, 812, 342, 99, 220, 49, 139, 40, 1248, 496, 580, 620, 124, 1223, 215, 511, 158, 907, 15, 280, 520, 539, 3, 655, 123, 105, 657, 631, 554, 480, 437, 405, 138, 358, 553, 632, 135, 630, 529, 211, 640, 483, 803, 165, 283, 492, 1309, 5, 50, 4, 0, 0],
        [138, 5, 0, 25, 0, 0, 0, 0, 0, 20, 28, 0, 29, 2, 55, 6, 0, 0, 0, 3, 3, 70, 5, 38, 32, 99, 68, 0, 25, 0, 17, 0, 7, 27, 31, 0, 104, 0, 0, 36, 37, 0, 28, 12, 6, 0, 3, 33, 27, 0, 33, 32, 0, 32, 28, 47, 0, 0, 29, 22, 0, 0, 0, 0, 0],
        [58, 10, 5, 1, 0, 1, 1, 0, 0, 1, 12, 1, 9, 1, 25, 16, 0, 4, 0, 13, 5, 25, 12, 15, 9, 0, 27, 2, 13, 3, 12, 0, 7, 9, 10, 0, 12, 1, 2, 13, 10, 4, 9, 9, 12, 1, 6, 5, 13, 1, 15, 11, 2, 9, 8, 18, 0, 1, 9, 43, 0, 1, 0, 0, 0],
        [80, 15, 1, 2, 2, 0, 1, 0, 0, 3, 8, 3, 16, 0, 25, 13, 0, 6, 0, 14, 6, 33, 17, 15, 15, 1, 35, 5, 13, 3, 24, 0, 17, 11, 14, 0, 11, 1, 4, 21, 13, 11, 14, 8, 15, 7, 9, 8, 14, 0, 18, 20, 7, 23, 21, 29, 0, 4, 12, 47, 0, 5, 0, 0, 0],
        [135, 20, 13, 9, 6, 3, 5, 0, 0, 6, 21, 1, 20, 0, 40, 26, 0, 17, 0, 15, 5, 45, 20, 23, 26, 3, 59, 3, 19, 6, 37, 0, 16, 20, 26, 1, 21, 3, 8, 38, 33, 28, 28, 29, 34, 9, 27, 17, 19, 5, 23, 21, 12, 36, 19, 42, 3, 2, 30, 75, 1, 6, 0, 0, 0],
        [164, 29, 16, 8, 10, 3, 8, 0, 2, 7, 29, 7, 27, 0, 49, 29, 5, 25, 0, 19, 5, 69, 30, 34, 26, 0, 51, 10, 32, 9, 41, 0, 30, 33, 29, 1, 27, 4, 9, 34, 39, 27, 25, 18, 34, 6, 22, 28, 33, 6, 30, 29, 25, 40, 22, 51, 1, 8, 20, 89, 1, 11, 0, 0, 0],
        [194, 32, 17, 15, 11, 6, 11, 5, 2, 20, 30, 10, 27, 0, 56, 38, 3, 30, 0, 18, 5, 76, 32, 29, 34, 4, 71, 11, 39, 14, 54, 2, 35, 39, 31, 1, 34, 7, 6, 39, 35, 43, 40, 29, 52, 8, 21, 27, 39, 5, 38, 41, 16, 38, 23, 56, 5, 15, 20, 104, 0, 3, 0, 0, 0],
        [173, 44, 12, 7, 13, 7, 16, 0, 3, 16, 25, 11, 26, 0, 47, 25, 6, 20, 1, 12, 5, 79, 19, 39, 42, 3, 50, 12, 27, 7, 58, 1, 25, 35, 29, 0, 36, 8, 11, 34, 31, 35, 43, 26, 34, 8, 12, 36, 39, 6, 33, 30, 13, 29, 24, 41, 5, 14, 28, 78, 2, 6, 0, 0, 0],
        [188, 36, 16, 14, 14, 6, 14, 0, 8, 14, 25, 8, 26, 0, 63, 26, 7, 16, 2, 12, 1, 81, 32, 29, 38, 2, 70, 14, 34, 4, 60, 1, 21, 33, 36, 0, 39, 10, 7, 45, 41, 40, 29, 29, 37, 18, 23, 23, 34, 11, 33, 24, 23, 46, 29, 49, 8, 20, 39, 81, 0, 3, 0, 0, 0],
        [173, 39, 15, 6, 15, 3, 16, 0, 4, 16, 32, 17, 18, 0, 49, 27, 7, 15, 2, 7, 2, 64, 25, 32, 32, 1, 72, 7, 28, 7, 61, 1, 11, 33, 31, 0, 36, 11, 7, 49, 34, 33, 29, 27, 24, 12, 17, 28, 43, 9, 36, 36, 17, 38, 29, 47, 4, 17, 25, 73, 0, 1, 0, 0, 0],
        [186, 37, 15, 16, 4, 8, 13, 4, 3, 16, 26, 10, 31, 0, 44, 20, 4, 17, 1, 7, 1, 72, 33, 44, 40, 2, 84, 22, 31, 4, 70, 0, 15, 31, 35, 0, 39, 10, 9, 32, 37, 47, 27, 34, 19, 8, 18, 37, 48, 7, 45, 29, 14, 44, 36, 46, 14, 19, 28, 73, 1, 7, 0, 0, 0],
        [152, 17, 12, 16, 9, 5, 15, 0, 3, 7, 33, 7, 17, 0, 37, 18, 6, 16, 4, 5, 1, 63, 28, 21, 31, 1, 59, 11, 29, 15, 47, 1, 12, 19, 31, 0, 37, 8, 5, 36, 37, 25, 20, 28, 20, 8, 23, 35, 36, 9, 31, 20, 14, 34, 24, 41, 7, 20, 31, 68, 0, 2, 1, 0, 0],
        [162, 25, 10, 15, 14, 8, 15, 5, 5, 15, 32, 16, 16, 0, 48, 18, 3, 11, 7, 3, 0, 73, 19, 32, 27, 2, 60, 15, 33, 7, 57, 1, 14, 28, 32, 0, 35, 8, 4, 36, 34, 31, 26, 28, 23, 5, 25, 32, 49, 7, 40, 30, 16, 26, 28, 35, 15, 12, 26, 57, 0, 1, 1, 0, 0],
        [142, 26, 11, 14, 7, 4, 14, 3, 4, 13, 32, 7, 23, 0, 31, 17, 6, 8, 5, 3, 0, 71, 27, 33, 29, 1, 50, 7, 18, 12, 45, 0, 16, 27, 23, 0, 27, 9, 6, 26, 30, 31, 17, 27, 12, 5, 12, 29, 28, 10, 31, 33, 9, 26, 23, 38, 13, 20, 29, 60, 0, 1, 0, 0, 0],
        [127, 24, 13, 5, 4, 1, 8, 3, 5, 11, 19, 9, 15, 0, 29, 13, 9, 8, 2, 2, 1, 59, 24, 19, 26, 1, 50, 9, 21, 12, 36, 2, 10, 24, 23, 0, 17, 4, 6, 29, 27, 27, 21, 18, 10, 6, 25, 23, 27, 5, 36, 22, 10, 28, 24, 41, 6, 19, 22, 66, 0, 0, 0, 0, 0],
        [127, 21, 11, 6, 7, 7, 18, 1, 2, 18, 19, 11, 18, 0, 35, 12, 2, 6, 4, 2, 0, 56, 24, 24, 27, 0, 53, 10, 16, 9, 42, 1, 8, 20, 23, 0, 27, 6, 5, 39, 29, 18, 18, 16, 17, 7, 20, 31, 31, 12, 24, 23, 10, 22, 25, 33, 11, 13, 18, 46, 0, 2, 0, 0, 0],
        [103, 23, 10, 11, 0, 6, 5, 0, 3, 10, 18, 3, 20, 0, 27, 7, 3, 5, 3, 2, 0, 44, 19, 25, 26, 0, 51, 7, 20, 6, 41, 0, 6, 16, 22, 0, 20, 4, 3, 19, 18, 25, 15, 15, 8, 4, 17, 24, 23, 5, 20, 20, 2, 19, 11, 20, 8, 17, 21, 47, 0, 0, 0, 0, 0],
        [133, 21, 18, 12, 5, 4, 15, 0, 0, 9, 20, 15, 18, 0, 32, 8, 5, 5, 7, 1, 0, 53, 29, 25, 30, 1, 68, 14, 25, 10, 39, 1, 7, 23, 24, 0, 29, 10, 2, 25, 33, 25, 23, 15, 10, 4, 17, 29, 28, 5, 31, 23, 6, 36, 20, 30, 13, 25, 22, 59, 0, 0, 0, 0, 0],
        [132, 24, 10, 17, 8, 15, 12, 0, 1, 12, 29, 16, 13, 0, 29, 7, 6, 3, 2, 0, 0, 55, 28, 30, 30, 0, 62, 15, 36, 8, 54, 2, 5, 25, 24, 0, 26, 3, 4, 28, 32, 30, 10, 16, 12, 2, 17, 27, 21, 6, 30, 21, 3, 27, 26, 40, 9, 9, 24, 54, 0, 0, 1, 0, 0],
        [130, 25, 18, 13, 5, 8, 9, 1, 0, 14, 18, 16, 23, 0, 29, 2, 11, 1, 3, 1, 0, 60, 19, 28, 41, 1, 63, 12, 15, 8, 38, 0, 6, 20, 19, 0, 29, 3, 1, 31, 31, 20, 18, 18, 6, 7, 17, 36, 28, 8, 26, 25, 4, 29, 22, 39, 10, 15, 22, 68, 0, 0, 0, 0, 0],
        [90, 14, 11, 12, 5, 4, 11, 2, 1, 8, 12, 16, 11, 0, 21, 5, 5, 1, 4, 0, 0, 34, 24, 19, 19, 1, 48, 13, 17, 6, 24, 0, 5, 15, 18, 0, 15, 5, 2, 16, 17, 22, 13, 10, 10, 4, 6, 13, 27, 7, 16, 17, 4, 19, 13, 24, 10, 12, 11, 40, 0, 0, 1, 0, 0],
        [66, 11, 5, 4, 0, 2, 8, 0, 1, 9, 16, 10, 10, 0, 20, 4, 5, 1, 1, 0, 0, 33, 12, 14, 16, 1, 32, 6, 10, 1, 23, 1, 2, 15, 12, 0, 13, 5, 0, 16, 15, 10, 9, 12, 2, 2, 6, 16, 11, 6, 15, 11, 2, 16, 8, 14, 8, 10, 12, 24, 0, 0, 0, 0, 0],
        [44, 3, 2, 4, 2, 1, 0, 0, 0, 4, 9, 3, 7, 0, 10, 3, 3, 3, 0, 0, 0, 16, 10, 6, 14, 0, 21, 5, 4, 3, 15, 0, 1, 9, 8, 0, 12, 2, 2, 10, 9, 12, 11, 6, 3, 1, 9, 8, 6, 3, 11, 5, 1, 12, 7, 12, 9, 6, 9, 19, 0, 1, 0, 0, 0],
        [23, 1, 0, 2, 1, 0, 3, 0, 0, 2, 4, 2, 1, 0, 8, 0, 2, 1, 0, 0, 0, 10, 4, 3, 5, 0, 10, 2, 3, 2, 6, 1, 2, 5, 3, 0, 5, 1, 1, 2, 7, 4, 4, 5, 1, 3, 4, 5, 4, 0, 11, 5, 1, 8, 8, 5, 2, 2, 2, 11, 0, 0, 0, 0, 0],
        [10, 2, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 3, 3, 1, 2, 0, 6, 3, 2, 1, 5, 0, 1, 0, 3, 0, 3, 0, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2, 3, 1, 3, 0, 0, 3, 4, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 2, 2, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    let currentData = [];

    let attrInfo = {
        aquamarine: { index: 1, name: "aquamarine", color: "#ADD5D2", description: "none" },
        barkbrown: { index: 2, name: "barkbrown", color: "#906D69", description: "none" },
        beard: { index: 3, name: "beard", color: "#7289DA", description: "none" },
        bloodred: { index: 4, name: "bloodred", color: "#FF7A7A", description: "none" },
        bubblegum: { index: 5, name: "bubblegum", color: "#FADFF4", description: "none" },
        calicool: { index: 6, name: "calicool", color: "#FFD9FF", description: "none" },
        cerulian: { index: 7, name: "cerulian", color: "#385877", description: "none" },
        chartreux: { index: 8, name: "chartreux", color: "#7289DA", description: "none" },
        chestnut: { index: 9, name: "chestnut", color: "#A56429", description: "none" },
        chocolate: { index: 10, name: "chocolate", color: "#C47E33", description: "none" },
        cloudwhite: { index: 11, name: "cloudwhite", color: "#C2C0C8", description: "none" },
        coffee: { index: 12, name: "coffee", color: "#756650", description: "none" },
        cottoncandy: { index: 13, name: "cottoncandy", color: "#ECD1EB", description: "none" },
        crazy: { index: 14, name: "crazy", color: "#BE61D2", description: "none" },
        cymric: { index: 15, name: "cymric", color: "#F7C2B3", description: "none" },
        dali: { index: 16, name: "dali", color: "#546352", description: "none" },
        emeraldgreen: { index: 17, name: "emeraldgreen", color: "#8BE179", description: "none" },
        fabulous: { index: 18, name: "fabulous", color: "#9ACFEA", description: "none" },
        gold: { index: 19, name: "gold", color: "#FAF4CF", description: "none" },
        googly: { index: 20, name: "googly", color: "#DED0EE", description: "none" },
        granitegrey: { index: 21, name: "granitegrey", color: "#B1AEB9", description: "none" },
        greymatter: { index: 22, name: "greymatter", color: "#D1DADF", description: "none" },
        happygokitty: { index: 23, name: "happygokitty", color: "#E5D883", description: "none" },
        himalayan: { index: 24, name: "himalayan", color: "#D86767", description: "none" },
        jaguar: { index: 25, name: "jaguar", color: "#F29CB1", description: "none" },
        kittencream: { index: 26, name: "kittencream", color: "#F7EBDA", description: "none" },
        laperm: { index: 27, name: "laperm", color: "#F4A792", description: "none" },
        lemonade: { index: 28, name: "lemonade", color: "#FFEF85", description: "none" },
        limegreen: { index: 29, name: "limegreen", color: "#D9F5CB", description: "none" },
        luckystripe: { index: 30, name: "luckystripe", color: "#B75FC9", description: "none" },
        mainecoon: { index: 31, name: "mainecoon", color: "#FAD79B", description: "none" },
        mauveover: { index: 32, name: "mauveover", color: "#DED0EE", description: "none" },
        mintgreen: { index: 33, name: "mintgreen", color: "#CDF5D4", description: "none" },
        munchkin: { index: 34, name: "munchkin", color: "#F7C0B1", description: "none" },
        oldlace: { index: 35, name: "oldlace", color: "#F7EBDA", description: "none" },
        orangesoda: { index: 36, name: "orangesoda", color: "#F7BC56", description: "none" },
        otaku: { index: 37, name: "otaku", color: "#D9F5CB", description: "none" },
        peach: { index: 38, name: "peach", color: "#F9CFAD", description: "none" },
        pouty: { index: 39, name: "pouty", color: "#43EDAC", description: "none" },
        ragamuffin: { index: 40, name: "ragamuffin", color: "#ADD5D2", description: "none" },
        raisedbrow: { index: 41, name: "raisedbrow", color: "#B6A297", description: "none" },
        royalpurple: { index: 42, name: "royalpurple", color: "#CF5BE8", description: "none" },
        salmon: { index: 43, name: "salmon", color: "#F4A792", description: "none" },
        saycheese: { index: 44, name: "saycheese", color: "#F26C7F", description: "none" },
        scarlet: { index: 45, name: "scarlet", color: "#EA5F5A", description: "none" },
        shadowgrey: { index: 46, name: "shadowgrey", color: "#B1B1BE", description: "none" },
        simple: { index: 47, name: "simple", color: "#A8AFB6", description: "none" },
        sizzurp: { index: 48, name: "sizzurp", color: "#DFDFFA", description: "none" },
        skyblue: { index: 49, name: "skyblue", color: "#83D5FF", description: "none" },
        soserious: { index: 50, name: "soserious", color: "#8BE179", description: "none" },
        sphynx: { index: 51, name: "sphynx", color: "#DED0EE", description: "none" },
        spock: { index: 52, name: "spock", color: "#83D5FF", description: "none" },
        strawberry: { index: 53, name: "strawberry", color: "#FCDEDE", description: "none" },
        swampgreen: { index: 54, name: "swampgreen", color: "#4AE49B", description: "none" },
        thicccbrowz: { index: 55, name: "thicccbrowz", color: "#FCDEDE", description: "none" },
        tigerpunk: { index: 56, name: "tigerpunk", color: "#FF7A7A", description: "none" },
        tongue: { index: 57, name: "tongue", color: "#E188A0", description: "none" },
        topaz: { index: 58, name: "topaz", color: "#D1EEEB", description: "none" },
        totesbasic: { index: 59, name: "totesbasic", color: "#ADD5D2", description: "none" },
        violet: { index: 60, name: "violet", color: "#765BE8", description: "none" },
        whixtensions: { index: 61, name: "whixtensions", color: "#FAF4CF", description: "none" },
        wingtips: { index: 62, name: "wingtips", color: "#765BE8", description: "none" },
        gerbil: { index: 63, name: "gerbil", color: "#FFE888", description: "none" },
        wolfgrey: { index: 64, name: "wolfgrey", color: "#737184", description: "none" }
    }

    let currentAttrList = [],
        currentPopulation = 0;
    let submit = document.getElementById('submit'),
        attrSelect = document.getElementById("attrSelect"),
        populationSelect = document.getElementById("populationSelect");



    function getAttr() {
        currentAttrList = [];
        let lista = attrSelect.options;
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].selected) {
                currentAttrList.push(lista[i].value);
            }
        }
        currentPopulation = populationSelect.options[populationSelect.selectedIndex].value;
        currentPopulation = parseInt(currentPopulation);
    };

    function dataPrep(generacja) {
        currentData = JSON.parse(JSON.stringify(data[generacja]));
        for (let i = 1; i < currentData.length; i++) {
            currentData[i] = 100 * currentData[i] / currentData[0];
            currentData[i] = currentData[i].toFixed(2);
        }
    }

    function drawPlot(data, dataInfo) {
        //prepare
        let c = document.getElementById("attrPlot");
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.font = "18px Arial";
        let x = 0;
        for (let i = 0; i < dataInfo.length; i++) {
            let value = c.height * data[attrInfo[currentAttrList[i]].index] / 100;
            ctx.fillStyle = attrInfo[currentAttrList[i]].color;
            ctx.fillRect(x + 5, c.height - value, 20, value);
            ctx.save();
            ctx.translate(0, c.height);
            ctx.rotate(-Math.PI / 2);
            ctx.textAlign = "left";
            ctx.fillStyle = "#000000";
            ctx.fillText(currentAttrList[i] + ' - ' + data[attrInfo[currentAttrList[i]].index] + "%", value + 5, 20 + x);
            ctx.restore();
            x = x + 30;
        }
    }

    function summary() {
        let summary = document.getElementById("summary");
        summary.innerHTML = "<p>Data obtained by systematic sampling (2938 kittehs)</p><p> 08 Dec 2107, 16: 00 UTC </p>"
        summary.appendChild(document.createElement('p'));
        if (currentPopulation === 0) {
            summary.lastChild.innerHTML = "Analyzed - All kittehs";
        } else {
            summary.lastChild.innerHTML = "Analyzed - Genaration: " + (currentPopulation - 1);
        }
        summary.appendChild(document.createElement('p'));
        summary.lastChild.innerHTML = "Number of kittehs: " + currentData[0];

    }


    submit.addEventListener("click", function() {
        getAttr();
        dataPrep(currentPopulation);
        summary();
        drawPlot(currentData, currentAttrList);
    });
    populationSelect.addEventListener("click", function() {
        getAttr();
        dataPrep(currentPopulation);
        summary();
        drawPlot(currentData, currentAttrList);
    });

})();