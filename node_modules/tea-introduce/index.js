const figlet = require('figlet');
const cowsay = require('cowsay');

const teaInfo = {
    green: {
        description: "绿茶，未经过发酵处理，保留了茶叶的自然色泽和清新口感。",
        recommendation: "适合希望提神醒脑，享受自然清香的人群。"
    },
    black: {
        description: "红茶，完全发酵茶，色泽红润，口感醇厚。",
        recommendation: "适合喜欢醇厚口感和浓郁香气的人群。"
    },
    oolong: {
        description: "乌龙茶，部分发酵茶，介于绿茶和红茶之间，具有独特的香气和味道。",
        recommendation: "适合追求茶香层次丰富，口感回甘的人群。"
    }
};

function getTeaDescription(type) {
    if (teaInfo[type]) {
        console.log(`【${type}】: ${teaInfo[type].description}`);
    } else {
        console.log("未找到该类型的茶，请输入正确的茶的种类。");
    }
}

function getTeaRecommendation(type) {
    if (teaInfo[type]) {
        console.log(`【${type}】推荐: ${teaInfo[type].recommendation}`);
    } else {
        console.log("未找到该类型的茶，请输入正确的茶的种类。");
    }
}

module.exports = {
    getTeaDescription,
    getTeaRecommendation
};