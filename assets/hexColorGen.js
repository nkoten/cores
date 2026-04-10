/**
 * Gera uma cor hexadecimal RRGGBB baseada em um valor inicial e offsets.
 * @param {string|number} valor - Número (0-255) ou Hexadecimal (00-FF).
 * @param {number} offsetR - Ajuste para o canal Vermelho (padrão 0).
 * @param {number} offsetG - Ajuste para o canal Verde (padrão -2).
 * @param {number} offsetB - Ajuste para o canal Azul (padrão +11).
 * @returns {string} Cor no formato #RRGGBB.
 */
export function hexColorGen({
  value,
  offsetR = 0,
  offsetG = -2,
  offsetB = 11,
}) {
  // 1. Converter entrada para número decimal (aceita hex ou decimal)
  const numBase = parseInt(value.toString(), 16);

  // Função interna para validar e formatar cada canal (0-255)
  const formatarCanal = (base, offset) => {
    // Soma o offsset (11, -2, etc) diretamente ao valor base
    let resultado = base + offset;
    // Garante que o valor esteja entre o range 00-FF (0 e 255)
    resultado = Math.max(0, Math.min(255, resultado));
    // Converte para hex, garante 2 dígitos e preenche com zero à esquerda se necessário
    return resultado.toString(16).padStart(2, "0");
  };

  const r = formatarCanal(numBase, offsetR);
  const g = formatarCanal(numBase, offsetG);
  const b = formatarCanal(numBase, offsetB);

  return {
    r,
    g,
    b,
    value: `#${r}${g}${b}`.toUpperCase(),
  };
}

// Exemplos de uso:
// Entrada 19 (Hex) -> vira 25 decimal.
// R: 25 + 0  = 25 -> Hex 19
// G: 25 - 2  = 23 -> Hex 17
// B: 25 + 11 = 36 -> Hex 24
// console.log(hexColorGen(19)); // RESULTADO: #191724
