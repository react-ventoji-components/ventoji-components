module.exports = {
    hooks:{
        'pre-commit': 'lint-staged',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        'pre-push': 'ncu -e 2',
    }
}