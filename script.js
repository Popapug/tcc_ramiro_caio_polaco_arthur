// Usuários permitidos
const allowedUsers = {
    "ramiro@admin.com": {
        nome: "Ramiro",
        idade: "17",
        sala: "3º Ano A",
        media: "8,7"
    },
    "caio@admin.com": {
        nome: "Caio Okuma",
        idade: "17",
        sala: "3º Ano A",
        media: "8,4"
    },
    "arthur@admin.com": {
        nome: "Arthur Guimarães",
        idade: "17",
        sala: "3º Ano B",
        media: "8,1"
    },
    "gabriel@admin.com": {
        nome: "Gabriel",
        idade: "17",
        sala: "3º Ano B",
        media: "8,0"
    }
};

const allowedPassword = "12345";

document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.getElementById("login-screen");
    const app = document.getElementById("app");
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        if (allowedUsers[email] && password === allowedPassword) {
            // sucesso no login
            loginError.style.display = "none";
            loginScreen.style.display = "none";
            app.style.display = "block";

            preencherPerfil(allowedUsers[email]);
            preencherTurma();

        } else {
            loginError.style.display = "block";
        }
    });

    // Navegação do menu
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".content-section");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const sectionName = item.getAttribute("data-section");
            const targetId = `section-${sectionName}`;

            // atualizar estado visual do menu
            menuItems.forEach((btn) => btn.classList.remove("active"));
            item.classList.add("active");

            // mostrar seção correta
            sections.forEach((sec) => {
                if (sec.id === targetId) {
                    sec.classList.add("active");
                } else {
                    sec.classList.remove("active");
                }
            });
        });
    });
});

/**
 * Preenche as informações do perfil com base no usuário logado.
 */
function preencherPerfil(user) {
    const nome = document.getElementById("perfil-nome");
    const idade = document.getElementById("perfil-idade");
    const sala = document.getElementById("perfil-sala");
    const media = document.getElementById("perfil-media");

    if (nome) nome.textContent = user.nome;
    if (idade) idade.textContent = user.idade;
    if (sala) sala.textContent = user.sala;
    if (media) media.textContent = user.media;
}

/**
 * Preenche a lista da turma com alguns alunos.
 */
function preencherTurma() {
    const turmaList = document.getElementById("turma-list");
    if (!turmaList) return;

    const alunos = [
        "Ramiro",
        "Caio Okuma",
        "Arthur Guimarães",
        "Polaco",
        "Gabriel",
        "Ana Clara",
        "João Pedro",
        "Mariana"
    ];

    turmaList.innerHTML = "";

    alunos.forEach((nome) => {
        const item = document.createElement("div");
        item.className = "turma-item";

        const avatar = document.createElement("div");
        avatar.className = "turma-avatar";
        const avatarInner = document.createElement("div");
        avatarInner.className = "turma-avatar-inner";
        avatar.appendChild(avatarInner);

        const nomeEl = document.createElement("div");
        nomeEl.className = "turma-nome";
        nomeEl.textContent = nome;

        item.appendChild(avatar);
        item.appendChild(nomeEl);

        turmaList.appendChild(item);
    });
}
