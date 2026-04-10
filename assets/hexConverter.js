/**
 * Gera uma cor hexadecimal RRGGBB baseada em um valor inicial e offsets.
 * @param {string|number} valor - Número (0-255) ou Hexadecimal (00-FF).
 * @param {number} offsetR - Ajuste para o canal Vermelho (padrão 0).
 * @param {number} offsetG - Ajuste para o canal Verde (padrão -2).
 * @param {number} offsetB - Ajuste para o canal Azul (padrão +11).
 * @returns {string} Cor no formato #RRGGBB.
 */
export function hexConverter(valor, offsetR = 0, offsetG = -2, offsetB = 11) {
  // 1. Converter entrada para número decimal (aceita hex ou decimal)
  let numBase = typeof valor === "string" ? parseInt(valor, 16) : valor;

  // Função interna para validar e formatar cada canal (0-255)
  const formatarCanal = (base, offset) => {
    let resultado = base + offset;
    // Garante que o valor esteja entre 0 e 255
    resultado = Math.max(0, Math.min(255, resultado));
    // Converte para hex, garante 2 dígitos e preenche com zero à esquerda se necessário
    return resultado.toString(16).padStart(2, "0");
  };

  const r = formatarCanal(numBase, offsetR);
  const g = formatarCanal(numBase, offsetG);
  const b = formatarCanal(numBase, offsetB);

  return `#${r}${g}${b}`.toUpperCase();
}

// Exemplos de uso:

/**
 * Realiza cálculos hexadecimais diretos conforme o contexto solicitado.
 * @param {string|number} valor - O valor base em hexadecimal (ex: 19, "1a", "ff")
 * @param {string} offR - Offset hex para Vermelho (padrão "0")
 * @param {string} offG - Offset hex para Verde (padrão "-2")
 * @param {string} offB - Offset hex para Azul (padrão "11")
 */
export function calcularCorHex(valor, offR = "0", offG = "-2", offB = "11") {
    // Garante que a entrada seja tratada como string para o parseInt base 16
    const base = parseInt(valor.toString(), 16);

    const calcularCanal = (valorBase, offsetHex) => {
        // Converte o offset (que pode ser negativo como "-2") para decimal
        const isNegativo = offsetHex.startsWith('-');
        const valorOffset = parseInt(offsetHex.replace('-', ''), 16);
        
        let resultado = isNegativo 
            ? valorBase - valorOffset 
            : valorBase + valorOffset;

        // Clamping: garante que fique entre 0 (00) e 255 (FF)
        resultado = Math.max(0, Math.min(255, resultado));
        
        // Retorna em hex com 2 dígitos
        return resultado.toString(16).padStart(2, '0');
    };

    const r = calcularCanal(base, offR);
    const g = calcularCanal(base, offG);
    const b = calcularCanal(base, offB);

    return `#${r}${g}${b}`.toUpperCase();
}

export function gerarCorContexto(valor, offR = 0, offG = -2, offB = 11) {
    // Converte a entrada (ex: "19" ou 19) para o valor numérico que ela representa em Hex
    const base = parseInt(valor.toString(), 16);

    const calcular = (valorBase, offset) => {
        // Soma o offset (11, -2, etc) diretamente ao valor base
        let resultado = valorBase + offset;

        // Garante que o valor não saia do range 00-FF (0-255)
        resultado = Math.max(0, Math.min(255, resultado));

        // Retorna o resultado convertido para Hexadecimal com 2 dígitos
        return resultado.toString(16).padStart(2, '0');
    };

    const r = calcular(base, offR);
    const g = calcular(base, offG);
    const b = calcular(base, offB);

    return `#${r}${g}${b}`.toUpperCase();
}

// TESTE DO SEU CENÁRIO:
// Entrada 19 (Hex) -> vira 25 decimal.
// R: 25 + 0  = 25 -> Hex 19
// G: 25 - 2  = 23 -> Hex 17
// B: 25 + 11 = 36 -> Hex 24
// console.log(gerarCorContexto(19)); // RESULTADO: #191724

