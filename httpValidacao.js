import chalk from "chalk";
import fetch from "node-fetch";
import trataErro from "./index.js";

async function checaStatus(arrayUrl){
    const arrayStatus = await Promise.all(arrayUrl.map (async url =>{
        const res = await fetch(url);
        return res.status;
    }))
    return arrayStatus;
}

function geraArryDeUrl(arrayLinks) {
    try{
        return  arrayLinks.map(objetoLink => Object.values(objetoLink).join())
    }
    catch(erro){
        //trataErro(erro);
        console.log(chalk.red.bgBlack("Esse arquivo não apresenta nenhum link."));
    }
}

async function validaUrl(arrayLinks){
    const links = geraArryDeUrl(arrayLinks);
    const statusLinks = await checaStatus(links)
    return statusLinks;
}

export default validaUrl;