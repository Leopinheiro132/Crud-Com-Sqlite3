// Função para carregar o conteúdo da rota solicitada
function loadContent(route) {
    axios.get(`http://localhost:3000${route}`)
        .then(response => {
            document.getElementById('content').innerHTML = JSON.stringify(response.data, null, 2);
        })
        .catch(error => {
            document.getElementById('content').innerHTML = `Erro: ${error.message}`;
        });
}

// Roteamento baseado na URL
function handleRouting() {
    const route = window.location.hash;

    switch (route) {
        case '#/alunos':
            loadContent('/alunos');
            break;
        case '#/cadastro':
            // Implemente a lógica para cadastrar um aluno aqui
            break;
        case '#/atualizar/1':
            // Implemente a lógica para atualizar um aluno aqui
            break;
        case '#/deluser/1':
            // Implemente a lógica para deletar um aluno aqui
            break;
        default:
            // Página inicial
            document.getElementById('content').innerHTML = '<h2>Bem-vindo à página inicial</h2>';
    }
}

// Event listener para o hashchange (navegação baseada em âncoras)
window.addEventListener('hashchange', handleRouting);

// Carregar conteúdo inicial
handleRouting();