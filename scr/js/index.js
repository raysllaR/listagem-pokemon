window.addEventListener("load", () => {
	const buttonTheme = document.querySelector("#botao-alterar-tema");
	const tagBody = document.querySelector("body");
	const themeSave = localStorage.getItem("theme");
	const imgTheme = document.querySelector(".imagem-botao");

	if (themeSave && themeSave === "dark") {
		tagBody.classList?.add("modo-escuro");
		imgTheme.setAttribute("src", "./imagens/moon.png");
	}

	buttonTheme.addEventListener("click", () => {
		if (!tagBody.classList?.contains("modo-escuro")) {
			tagBody.classList?.add("modo-escuro");
			localStorage.setItem("theme", "dark");
			imgTheme.setAttribute("src", "./imagens/moon.png");
		} else {
			localStorage.setItem("theme", "ligth");
			imgTheme.src = "./imagens/sun.png";
			tagBody.classList?.remove("modo-escuro");
		}
	});
});
