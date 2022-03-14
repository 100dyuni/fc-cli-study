// @ts-check

// Github에 레포지토리 관리 CLI 만들어본다.
// 이슈, 풀 리퀘스트등의 라벨 관리
require('dotenv').config()

const { GITHUB_ACCESS_TOKEN } = process.env
const { program } = require('commander');
const { Octokit } = require('octokit')

program.version('0.0.1')
const octokit = new Octokit({auth: GITHUB_ACCESS_TOKEN})

program
    .command('me')
    .description('Check my profile')
    .action(async () =>{
        const{
            data : {login},
        } = await octokit.rest.users.getAuthenticated()
        console.log('Hello, %s', login)
    })

program
    .command('list-bugs')
    .description('List isuues with bug lael')
    .action(async()=>{
        const result = await octokit.rest.issues.listForRepo({
            owner : '100dyuni',
            repo:'fc-cli-study',
            labels : 'bug',
        })
    
        const issuesWithBugLable =result.data.filter(
            (issue)=>
            issue.labels.find((label) => label.name ==='bug') != undefined
        )

        const output = issuesWithBugLable.map(issue=>({
            title : issue.title,
            number : issue.number
        }))

        console.log(output)
    })
//풀 리퀘스트를 모두 검사해서, 마약 너무 diff가 큰 풀 리퀘스트가 잇으면 'too-big'이라는 레입르을 붙인다.
program
    .command('check-prs')
    .description('check pull request stauts')
    .action(async()=>{
        console.log('Cehck PRS!')
    })

program.parseAsync()

