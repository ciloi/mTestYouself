export {
    TYPE,
    DIFFICULTY,
    DIFFICULTYCLASS
}
const TYPE = (val) => {
    if (val === 'single') {
        return '单选题'
    } else if (val === 'multiple') {
        return '多选题'
    } else if (val === 'gapFilling') {
        return '填空题'
    }
}
const DIFFICULTY = (val) => {
    if (val <= 1) {
        return '简单'
    } else if (val <= 4) {
        return '普通'
    } else if (val <= 7) {
        return '进阶'
    } else if (val <= 10) {
        return '深度'
    }
}

const DIFFICULTYCLASS = (val) => {
    if (val <= 1) {
        return 'simple'
    } else if (val <= 4) {
        return 'ordinary'
    } else if (val <= 7) {
        return 'advanced'
    } else if (val <= 10) {
        return 'deeply'
    }
}