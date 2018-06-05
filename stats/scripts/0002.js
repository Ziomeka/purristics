(function() {
    let data = [
        [19295, 3349, 1388, 1304, 972, 639, 1519, 209, 322, 1734, 3204, 1309, 2776, 35, 5336, 2406, 639, 1508, 332, 1153, 341, 8246, 3434, 3856, 4264, 260, 7930, 1529, 3363, 1140, 5924, 99, 1962, 3199, 3440, 9, 3430, 798, 642, 4392, 3941, 3598, 2988, 2985, 2974, 1041, 2789, 3346, 4051, 980, 3955, 3305, 1536, 4091, 3281, 5503, 1106, 1810, 3291, 8956, 62, 363, 51, 10, 10],
        [691, 126, 28, 10, 5, 2, 8, 0, 1, 31, 131, 10, 124, 8, 263, 148, 3, 45, 0, 80, 52, 303, 101, 169, 141, 6, 329, 21, 140, 17, 202, 0, 90, 133, 131, 0, 121, 5, 9, 180, 134, 50, 128, 123, 152, 18, 113, 52, 129, 15, 145, 116, 32, 170, 106, 270, 1, 18, 130, 443, 1, 12, 0, 2, 0],
        [906, 181, 45, 23, 20, 8, 26, 2, 5, 43, 142, 20, 163, 8, 305, 186, 5, 76, 1, 116, 49, 383, 117, 191, 194, 7, 408, 30, 168, 41, 253, 0, 122, 149, 179, 0, 162, 9, 19, 215, 159, 111, 171, 147, 224, 34, 149, 105, 169, 24, 184, 153, 77, 213, 154, 326, 3, 38, 167, 540, 3, 24, 0, 2, 0],
        [1276, 235, 74, 56, 55, 26, 52, 4, 9, 87, 216, 38, 215, 6, 389, 240, 12, 137, 4, 175, 51, 522, 203, 272, 276, 17, 514, 49, 209, 70, 356, 1, 174, 201, 224, 1, 200, 27, 48, 294, 258, 192, 226, 202, 318, 67, 217, 186, 231, 47, 225, 219, 161, 262, 198, 427, 19, 53, 224, 671, 19, 43, 0, 3, 1],
        [1595, 284, 94, 87, 75, 38, 80, 9, 28, 105, 259, 67, 242, 6, 443, 269, 28, 179, 10, 168, 54, 692, 257, 318, 343, 27, 576, 84, 280, 96, 465, 6, 238, 257, 288, 1, 255, 42, 73, 354, 308, 287, 275, 241, 345, 100, 246, 269, 320, 58, 305, 269, 177, 335, 262, 490, 42, 82, 275, 804, 12, 75, 0, 1, 3],
        [1598, 286, 126, 85, 82, 45, 87, 26, 36, 145, 249, 99, 231, 3, 414, 272, 34, 178, 16, 158, 43, 671, 294, 283, 351, 37, 594, 95, 272, 86, 448, 8, 221, 235, 285, 2, 237, 58, 73, 372, 262, 340, 278, 255, 366, 103, 202, 264, 337, 63, 274, 290, 179, 324, 241, 464, 54, 131, 269, 794, 9, 53, 0, 0, 1],
        [1521, 288, 85, 103, 90, 58, 122, 28, 41, 145, 227, 91, 246, 1, 431, 244, 53, 167, 30, 132, 39, 625, 257, 289, 312, 44, 571, 102, 273, 80, 463, 7, 208, 243, 250, 1, 247, 44, 69, 314, 277, 314, 223, 239, 319, 95, 190, 258, 308, 79, 268, 289, 151, 302, 255, 405, 59, 131, 254, 682, 10, 44, 1, 1, 1],
        [1377, 232, 99, 98, 103, 44, 119, 18, 45, 140, 221, 96, 189, 3, 392, 190, 56, 137, 31, 95, 27, 553, 249, 254, 289, 35, 526, 109, 232, 67, 396, 9, 163, 226, 250, 0, 245, 63, 58, 303, 273, 303, 184, 199, 239, 97, 191, 218, 271, 72, 265, 213, 143, 293, 260, 344, 76, 125, 241, 609, 5, 38, 0, 0, 1],
        [1292, 232, 96, 87, 108, 52, 111, 14, 28, 104, 197, 108, 187, 0, 365, 175, 51, 118, 18, 70, 16, 510, 220, 267, 282, 27, 506, 91, 227, 73, 408, 12, 125, 223, 225, 2, 222, 72, 50, 314, 263, 268, 178, 195, 171, 96, 187, 233, 269, 55, 268, 215, 118, 287, 238, 315, 74, 117, 213, 553, 2, 15, 4, 1, 1],
        [1169, 198, 109, 85, 85, 45, 113, 21, 26, 109, 172, 79, 160, 0, 327, 129, 43, 93, 16, 40, 5, 460, 216, 242, 259, 21, 481, 98, 193, 74, 393, 9, 110, 220, 206, 0, 225, 63, 50, 261, 254, 239, 161, 182, 160, 71, 159, 232, 262, 72, 250, 189, 86, 217, 209, 286, 77, 113, 203, 480, 1, 16, 2, 0, 1],
        [1086, 172, 72, 90, 73, 37, 113, 13, 26, 98, 186, 76, 155, 0, 297, 107, 34, 97, 26, 27, 3, 450, 196, 212, 233, 11, 429, 103, 185, 79, 356, 7, 99, 185, 209, 1, 197, 53, 38, 233, 248, 198, 150, 184, 131, 72, 161, 217, 225, 67, 247, 154, 86, 227, 186, 287, 84, 125, 208, 436, 0, 14, 6, 0, 1],
        [984, 159, 70, 67, 61, 37, 95, 17, 23, 97, 167, 87, 127, 0, 267, 94, 44, 60, 27, 25, 1, 449, 159, 192, 199, 7, 383, 101, 176, 62, 324, 8, 95, 161, 173, 1, 189, 47, 32, 216, 220, 187, 144, 151, 124, 50, 144, 176, 252, 62, 208, 167, 74, 213, 172, 278, 69, 124, 137, 416, 0, 10, 2, 0, 0],
        [911, 153, 71, 68, 44, 35, 88, 12, 16, 88, 162, 74, 127, 0, 248, 71, 35, 41, 15, 18, 0, 423, 180, 197, 212, 2, 373, 102, 153, 51, 286, 3, 69, 141, 155, 0, 175, 49, 30, 209, 206, 180, 121, 141, 74, 47, 119, 167, 205, 60, 216, 147, 52, 206, 158, 252, 76, 105, 167, 407, 0, 8, 1, 0, 0],
        [823, 133, 72, 83, 38, 28, 84, 10, 11, 89, 145, 74, 90, 0, 220, 55, 36, 44, 10, 14, 1, 354, 157, 159, 190, 4, 369, 78, 142, 60, 262, 11, 50, 131, 143, 0, 154, 41, 18, 192, 188, 161, 134, 119, 65, 39, 136, 157, 174, 48, 184, 147, 44, 182, 143, 228, 73, 101, 145, 356, 0, 3, 5, 0, 0],
        [761, 131, 57, 61, 28, 35, 79, 6, 4, 98, 114, 60, 92, 0, 169, 55, 29, 28, 22, 8, 0, 342, 137, 152, 181, 2, 343, 83, 116, 55, 262, 7, 42, 132, 128, 0, 157, 42, 20, 197, 169, 142, 138, 115, 56, 37, 119, 152, 152, 55, 171, 134, 35, 157, 146, 231, 67, 93, 124, 316, 0, 2, 3, 0, 0],
        [646, 113, 48, 56, 12, 33, 59, 5, 4, 69, 127, 48, 86, 0, 172, 46, 36, 25, 19, 7, 0, 290, 146, 131, 169, 0, 308, 55, 114, 45, 221, 3, 31, 107, 115, 0, 114, 31, 11, 148, 134, 120, 102, 88, 46, 19, 105, 136, 162, 32, 145, 120, 23, 127, 113, 166, 61, 82, 95, 282, 0, 2, 2, 0, 0],
        [650, 111, 60, 52, 24, 24, 65, 7, 4, 51, 136, 66, 80, 0, 164, 22, 31, 20, 30, 7, 0, 295, 141, 127, 149, 1, 302, 80, 122, 52, 198, 2, 30, 119, 121, 0, 117, 30, 9, 141, 149, 125, 95, 101, 53, 14, 84, 128, 134, 33, 150, 123, 27, 153, 103, 165, 68, 95, 110, 291, 0, 1, 8, 0, 0],
        [574, 100, 46, 60, 20, 25, 64, 6, 2, 66, 120, 61, 73, 0, 127, 27, 23, 13, 17, 2, 0, 249, 109, 128, 124, 1, 281, 72, 108, 38, 188, 2, 22, 105, 107, 0, 122, 29, 11, 122, 134, 122, 73, 89, 42, 19, 71, 110, 125, 23, 126, 106, 13, 115, 106, 162, 54, 73, 98, 254, 0, 0, 7, 0, 0],
        [486, 75, 56, 49, 17, 26, 46, 5, 2, 57, 73, 55, 69, 0, 116, 17, 27, 12, 13, 2, 0, 245, 91, 92, 135, 5, 207, 62, 90, 30, 145, 1, 28, 79, 83, 0, 92, 27, 5, 112, 102, 88, 58, 77, 22, 23, 71, 102, 117, 38, 115, 87, 19, 97, 76, 140, 42, 72, 79, 230, 0, 0, 2, 0, 0],
        [397, 64, 36, 41, 12, 17, 43, 3, 4, 43, 66, 51, 51, 0, 93, 25, 25, 17, 12, 3, 0, 173, 88, 73, 88, 3, 188, 51, 73, 28, 116, 1, 19, 60, 69, 0, 70, 31, 7, 90, 84, 71, 66, 49, 29, 9, 56, 72, 92, 27, 84, 75, 14, 93, 66, 113, 42, 55, 61, 179, 0, 0, 5, 0, 0],
        [260, 38, 24, 15, 5, 9, 34, 2, 2, 36, 39, 25, 39, 0, 68, 15, 19, 11, 8, 3, 0, 124, 57, 58, 69, 1, 116, 23, 41, 16, 82, 1, 12, 48, 52, 0, 49, 18, 4, 58, 56, 41, 36, 47, 15, 9, 33, 59, 55, 27, 55, 43, 6, 49, 44, 67, 33, 41, 45, 105, 0, 0, 0, 0, 0],
        [161, 19, 15, 19, 7, 9, 19, 0, 3, 19, 33, 10, 18, 0, 37, 8, 9, 6, 3, 1, 0, 75, 36, 27, 36, 1, 68, 27, 24, 12, 54, 0, 5, 26, 28, 0, 41, 8, 5, 36, 36, 31, 29, 25, 7, 5, 25, 35, 29, 13, 36, 23, 8, 36, 24, 45, 17, 25, 29, 62, 0, 2, 2, 0, 0],
        [82, 13, 2, 7, 6, 1, 7, 1, 1, 8, 15, 9, 10, 0, 17, 5, 5, 2, 3, 1, 0, 38, 15, 15, 17, 1, 34, 9, 17, 5, 31, 1, 5, 11, 9, 0, 23, 8, 2, 20, 21, 15, 8, 9, 7, 8, 8, 13, 21, 5, 23, 19, 6, 25, 16, 25, 9, 5, 10, 28, 0, 0, 1, 0, 0],
        [29, 4, 3, 0, 2, 2, 3, 0, 1, 5, 4, 3, 2, 0, 9, 2, 0, 1, 0, 1, 0, 11, 5, 5, 8, 0, 14, 4, 5, 2, 12, 0, 2, 3, 7, 0, 11, 0, 1, 6, 4, 6, 4, 3, 4, 4, 1, 3, 7, 3, 7, 3, 4, 6, 4, 11, 2, 6, 3, 8, 0, 1, 0, 0, 0],
        [10, 2, 0, 1, 0, 2, 0, 0, 0, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 5, 1, 1, 6, 0, 5, 0, 1, 0, 2, 0, 0, 2, 1, 0, 3, 1, 0, 4, 1, 4, 3, 2, 2, 2, 1, 0, 2, 2, 2, 1, 0, 1, 0, 4, 2, 0, 3, 6, 0, 0, 0, 0, 0],
        [9, 0, 0, 1, 0, 1, 2, 0, 0, 1, 1, 1, 0, 0, 2, 3, 1, 1, 1, 0, 0, 4, 2, 2, 1, 0, 4, 0, 2, 1, 0, 0, 2, 2, 2, 0, 2, 0, 0, 1, 1, 2, 2, 1, 2, 3, 1, 2, 2, 0, 2, 2, 1, 1, 1, 2, 2, 0, 1, 4, 0, 0, 0, 0, 0],
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
        summary.innerHTML = "<p>Data obtained by systematic sampling (19295 kittehs)</p><p>09 Dec 2107, 21:00 UTC</p>"
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