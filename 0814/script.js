const p = new Promise(resolve => {
    const even = parseInt(prompt('짝수를 입력하세요'));
    if (even % 2 !== 0) {
        throw new Error('Error: 짝수가 아닙니다.');
    } else {
        resolve(even);
    }
});

p
    .then(even => {
        return '짝수입니다.';
    }, e => {
        return e.message;
    })
    .then(alert);