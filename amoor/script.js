// Data de início do relacionamento
const startDate = new Date("2023-07-09T00:00:00"); // Relacionamento começou em 9 de julho de 2023

function updateTime() {
  const now = new Date();

  // Calcula a diferença total em milissegundos
  const diff = now - startDate;

  // Extrai anos, meses e dias com precisão
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  // Ajusta os valores se necessário
  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += previousMonth;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Extrai horas, minutos e segundos
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Atualiza o conteúdo na página
  document.getElementById("timeTogether").innerText = 
    `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateTime, 1000);
