document.addEventListener('DOMContentLoaded', () => {
    // Dados brutos extraídos do arquivo CSV/Excel
    const rawData = [
        { "Item": "ASSISTÊNCIA SENHA DESBLOQUEIO(PDV)", "Total": 5, "Porcentagem": 0.52 },
        { "Item": "ASSISTÊNCIA TROCA PEÇA(PDV)", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "ASSISTÊNCIA TELA(PDV)", "Total": 5, "Porcentagem": 0.52 },
        { "Item": "CABO 120W 7A 2M(IRETO) MASAGER", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CABO DE DADOS H316-CC H'MASTON", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CABO DE DADOS SX215-3 H'MASTON", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "CABO HB 11 1.2 H'MASTON", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "CABO HB 11 3 H'MASTON", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "CABO KD 39M KAIDI", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "CAPA HONOR X7C", "Total": 4, "Porcentagem": 1.03 },
        { "Item": "CAPA REALME C61/C63", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CARREGADOR 120W XIAOMI", "Total": 3, "Porcentagem": 0.77 },
        { "Item": "CARREGADOR MOTOROLA 68W", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CARREGADOR MOTOROLA 78W", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CHIP CLARO FLEX", "Total": 19, "Porcentagem": 4.90 },
        { "Item": "CHIP CLARO PREZÃO", "Total": 13, "Porcentagem": 3.35 },
        { "Item": "CHIP CLARO PRÉ", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "CHIP TIM PRÉ RECARGA", "Total": 10, "Porcentagem": 2.58 },
        { "Item": "CHIP VIVO PRÉ S/RECARGA", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "COPO STANLEY (BRINDE)", "Total": 8, "Porcentagem": 2.06 },
        { "Item": "DESCONTO NA VENDA", "Total": 36, "Porcentagem": 9.28 },
        { "Item": "FONE BLUETOOTH KD 771 KAIDI", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "FONE BLUETOOTH KNZ 5602 KAIDI", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "FONE BLUETOOTH REDMI AIRDOTS (BRINDE)", "Total": 20, "Porcentagem": 5.15 },
        { "Item": "FONE COM FIO LE-0201 LELONG", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "FONTE CARREGADOR KD 301 KAIDI", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "HONOR X7B 8/256 EMERALD GREEN", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "HONOR X7C 8/256 FOREST GREEN", "Total": 3, "Porcentagem": 0.77 },
        { "Item": "HONOR X7C 8/256 MIDNIGHT BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "HONOR X7C 8/256 MOONLIGHT WHITE", "Total": 22, "Porcentagem": 5.67 },
        { "Item": "HONOR X8B 8/256 CYAN LAKE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "MOTO G35 5G 4/256 GRAY (SEMI NOVO)", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "MOTO G35 5G 8/256 LEAF GREEN", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "MOTO G35 5G 8/256 MIDNIGHT BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "MOTO G84 5G 8/256 MIDNIGHT BLUE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "OPPO A98 8/256 STARBY PURPLE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "PAGAMENTO NOVO(PDV)", "Total": 14, "Porcentagem": 3.61 },
        { "Item": "PAGAMENTO PAYJOY(PDV)", "Total": 54, "Porcentagem": 13.92 },
        { "Item": "PELICULA FOSCA HYDROGEL SUPER PREMIUM", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "PELICULA HD HYDROGEL PREMIUM", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "PELICULA HD HYDROGEL STANDARD", "Total": 45, "Porcentagem": 11.60 },
        { "Item": "PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "PEN DRIVE CHAVEIRO 128GB LEHIMOX", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "POCO C71 4/128 BLACK", "Total": 13, "Porcentagem": 3.35 },
        { "Item": "POCO C71 4/128 BLUE", "Total": 7, "Porcentagem": 1.80 },
        { "Item": "POCO C71 4/128 GOLD", "Total": 10, "Porcentagem": 2.58 },
        { "Item": "POCO C75 8/256 BLACK", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "POCO C75 8/256 GREEN", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "POCO X7 PRO 5G 12/512 PRETO", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "POCO X7 PRO 5G 12/512 YELLOW", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME 11X 5G 8/128 PURPLE DAWN", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME 12T 5G 8/256 OBSIDIAN BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME C61 8/256 DARK GREEN", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REALME C61 8/256 SPARKLE GOLD", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REALME C63 8/256 JADE GREEN", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME C63 8/256 LEATHER BLUE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME C65 6/128 STARLIGHT BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME C65 6/256 STARLIGHT BLACK", "Total": 3, "Porcentagem": 0.77 },
        { "Item": "REALME C65 8/256 STARLIGHT PURPLE", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REALME C75 8/256 LIGHTNIN GOLD", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REALME C75 8/256 STORM BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REALME C75X 8/256 CORAL PINK", "Total": 4, "Porcentagem": 1.03 },
        { "Item": "REALME C75X 8/256 OCEANIC BLUE", "Total": 5, "Porcentagem": 1.29 },
        { "Item": "REALME NOTE 60 4/128 VOYAGE BLUE", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REDMI A5 4/128 AZUL", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REDMI A5 4/128 GOLD", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REDMI A5 4/128 VERDE", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REDMI NOTE 14 4G 8/256 BLACK", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REDMI NOTE 14 4G 8/256 BLUE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "REDMI NOTE 14 PRO 5G 8/256 GOLD", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "REDMI NOTE 14 PRO 5G 8/256 PURPLE", "Total": 2, "Porcentagem": 0.52 },
        { "Item": "SAMSUNG GALAXY A06 4/128 BLUE", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "SAMSUNG GALAXY A16 4/128 5G AZUL ESCURO", "Total": 1, "Porcentagem": 0.26 },
        { "Item": "TAXA DE CARTÃO", "Total": 2, "Porcentagem": 0.52 }
    ];
    
    // Organizar os dados em ordem decrescente pela quantidade (Total)
    rawData.sort((a, b) => b.Total - a.Total);

    // Mapeamento dos dados para os rótulos e valores dos gráficos
    const labels = rawData.map(item => item.Item);
    const totals = rawData.map(item => item.Total);
    const percentages = rawData.map(item => item.Porcentagem);

    // Função para gerar cores aleatórias para os gráficos
    const generateColors = (num) => {
        const colors = [];
        for (let i = 0; i < num; i++) {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            colors.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
        }
        return colors;
    };

    const colors = generateColors(rawData.length);

    // Gráfico de Barras para as Vendas Totais
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Vendas Totais por Item',
                data: totals,
                backgroundColor: colors,
                borderColor: colors.map(c => c.replace('0.6', '1')),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Para barras horizontais, facilita a leitura
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Pizza para a Participação Percentual
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Porcentagem de Vendas',
                data: percentages,
                backgroundColor: generateColors(rawData.length), // Novas cores para o gráfico de pizza
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Popular a tabela com os dados
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    rawData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.Item}</td>
            <td>${item.Total}</td>
            <td>${item.Porcentagem}%</td>
        `;
        tableBody.appendChild(row);
    });
});