function conversor () {
    
    let valorWons = prompt("Digite um valor em Won (₩):");
    
    let valorReais = valorWons * 0.0037; // 1 Won = 0.0037 Reais
    
    alert("O valor em Reais (R$) é: " + valorReais.toFixed(2));
}
