function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
}

//Isso serve para quando o usuário clicar sobre o ícone do menu realizar a ação de toggle, função usada para adicionar e remover um elemento
// Por padrão a classe vem com display none, assim quando o usuário estiver no mobile o mesmo não visualizar de primeira os itens do menu
// Ao clicar deixamos como o display show, assim vice e versa