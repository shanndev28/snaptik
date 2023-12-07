const fs = require('fs')
const colors = require('colors')
const snaptik = require('snaptik')
const readline = require('readline-sync')

const date = () => new Date().toLocaleTimeString({ timeZone: 'Asia/Jakarta' })
const linktt = readline.question(`[ ${date()} ] Masukkan link video tiktok : `)

if (linktt) {
    const sneptik = new snaptik(linktt)
    sneptik.download().then(result => {
        try {
            console.log(result)
        } catch (e) {
            console.log(`[ ${date()} ] ${colors.red(`Error fetching video content : ${e}`)}`)
        }
    })
}

process.on('uncaughtException', (e) => console.log(`[ ${date()} ] ${colors.red(e.message)}`))