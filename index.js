import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro){
    throw new Error(chalk.red.bgBlack(erro.code, "ERRO NO PROGRAMA"));
}


async function pegaLink(caminhoDoArquivo){
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        
        return extraiLinks(texto)
    }catch(erro){
        trataErro(erro);
    }
}



function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];

    let temp;
    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({[temp[1]]:[temp[2]]})
    }
    return arrayResultados.length === 0 ? chalk.red.bgBlack("Esse arquivo não apresenta nenhum link.") : arrayResultados;
    //return (arrayResultados);
}

//pegaArquivo('./arquivos/texto.md')
export default pegaLink; trataErro;

