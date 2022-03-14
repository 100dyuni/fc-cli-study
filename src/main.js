// @ts-check

// Github에 레포지토리 관리 CLI 만들어본다.
// 이슈, 풀 리퀘스트등의 라벨 관리

const { program } = require('commander');

program
    .command('list-bugs')
    .description('List isuues with bug lael')
    .action(async()=>{
        console.log('List bug!')
    })

program
    .command('check-prs')
    .description('check pull request stauts')
    .action(async()=>{
        console.log('Cehck PRS!')
    })

program.parseAsync()

