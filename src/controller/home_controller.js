import readline from 'readline';

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const usuario = {
    "Nome" : '',
    "Ferramentas" : []
}

    rl.question(

    ` 
        --------------------------------------------------------

             <<<  Seja bem-vind(@) ao organizador CSS  >>>

        --------------------------------------------------------
            
          Qual é seu nome? ` , (nome) => { usuario.Nome = nome;

          rl.setPrompt(
        
        ` 
        --------------------------------------------------------

        ${usuario.Nome}, digite suas ferramentas css: 
        
    `)

        rl.prompt();
    })

rl.on('line', (input) => {

    if(input.trim() === 'sair'){
        usuario.Ferramentas.sort()

        console.log(
            
            `
            -------------------------------------------------------

            Obrigado, ${usuario.Nome} por utilizar nosso programa!
            
                        <<<< Suas ferramentas >>>>

            `
            
        );

        console.table(usuario.Ferramentas);

        console.log('---------------------------------------------');

        process.exit();
    }

    usuario.Ferramentas.push(input.trim());

    rl.setPrompt(
        
        `
            ---------------------------------------------------------

            ${usuario.Nome}, digite suas ferramentas css:
            
            ----------------------------------------------------------
        
        `
    );

    rl.prompt();
})

