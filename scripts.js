// Script para manipulação de usuários e produtos

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const productForm = document.getElementById('productForm');
    const productCatalog = document.getElementById('productCatalog');
    const openOverlayBtn = document.getElementById("openOverlayBtn");
    const openOverlayBtn2 = document.getElementById("openOverlayBtn-2");
    const closeOverlayBtn = document.getElementById("closeOverlayBtn");
    const signupForm = document.getElementById('signupForm');
    const overlay = document.getElementById("overlay");


    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            // Lógica de login
            console.log('Login:', email, password);
            alert('Login realizado com sucesso!');
            window.location.href = 'product.html';
        });
    }

    // Lógica de sucesso de cadastro

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        // Lógica de cadastro (aqui você pode adicionar o que desejar para salvar o cadastro)
        console.log('Cadastro:', email, password);
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'sucessForm.html';
    });


    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const senha = document.getElementById('senha').value;
            const confirmSenha = document.getElementById('confirmSenha').value;
            const errorMessage = document.getElementById('errorMessage');
            // Lógica de registro
            if (senha !== confirmSenha) {
                errorMessage.textContent = 'As senhas não coincidem';
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                console.log('Registrado com sucesso!');
                alert('Registro realizado com sucesso!');
            }
        });
    }

    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('productName').value;
            const description = document.getElementById('productDescription').value;
            const price = document.getElementById('productPrice').value;
            // Lógica de cadastro de produto
            console.log('Produto:', name, description, price);
            alert('Produto cadastrado com sucesso!');
        });
    }

    if (productCatalog) {
        // Lógica para exibir produtos cadastrados
        console.log('Exibir catálogo de produtos');
    }

    // Lógica para abrir o overlay
    if (openOverlayBtn && openOverlayBtn2 && closeOverlayBtn && overlay) {
        openOverlayBtn.addEventListener("click", function() {
            overlay.style.display = "flex";
        });

        openOverlayBtn2.addEventListener("click", function() {
            overlay.style.display = "flex";
        });

        closeOverlayBtn.addEventListener("click", function() {
            overlay.style.display = "none";
        });

        // Fechar o overlay ao clicar fora do conteúdo
        window.addEventListener("click", function(event) {
            if (event.target === overlay) {
                overlay.style.display = "none";
            }
        });
    }
});
