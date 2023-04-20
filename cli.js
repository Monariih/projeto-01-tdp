import pegaLink from "./index.js";
import trataErro from "./index.js";
import fs from "fs";
import chalk from "chalk";
import validaUrl from "./httpValidacao.js";

const caminho = process.argv;

async function lerArquivo(caminhoDoArquivo){
    try{
        const conteudo = await fs.promises.readFile(caminhoDoArquivo, 'utf-8')
        return (chalk.green.bgBlack(conteudo));
    }
    catch(erro){
        trataErro(erro);
    }
}

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaLink(caminhoDoArquivo[2]);
    if(caminho[3] === 'leitura'){
       // let texto = await pegaArquivo(caminhoDoArquivo[2]);
        console.log(chalk.green.bgBlack("Leitura do arquivo: "), await lerArquivo(caminhoDoArquivo[2]));

    }
    else if(caminho[3] === 'links'){
        console.log(chalk.green.bgBlack("Leitura do arquivo: "), await pegaLink(caminhoDoArquivo[2]));
    }
    else if(caminho[3] === 'valida'){
        console.log(chalk.bgYellow.black("LINKS VALIDADOS"), await validaUrl(resultado));
    }
}
processaTexto(caminho);