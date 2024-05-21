import React from "react"
import { BarChart } from '@mui/x-charts/BarChart';
import { Container } from "@mui/material";
import Selectproduct from "./Selectproducts";
import { useEffect,useState } from "react";

export default function Barcomponent(){

    const [dadosProduto, setDadosProduto] = useState(null);

    const rotas = {
        'Mesa': '/caminho_ler_mesas',
        'Cadeira': '/caminho_ler_cadeiras',
        'Lixeira': '/caminho_ler_lixeiras',
        'Teclado': '/caminho_ler_teclados',
        'Computador': '/caminho_ler_computadores'
    };

    const carregarDadosProduto = async (rota) => {
        try {
            const response = await fetch(rota, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Erro ao obter os dados do produto');
            }

            const dados = await response.json();
            setDadosProduto(dados);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container fluid maxWidth="lg" sx={{ backgroundColor: "white", opacity: ".30", borderRadius: "15px" }}>
            <Selectproduct rotas={rotas} onChange={carregarDadosProduto} />
            {dadosProduto && (
                <div>
                    <h2>{dadosProduto.nome}</h2>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Junho', 'julho', 'ago', 'set', 'out', 'nov'] }]}
                        series={[
                            { data: Array.isArray(dadosProduto) ? dadosProduto.map(item => item.quantidade) : [], name: 'Quantidade' },
                            { data: Array.isArray(dadosProduto) ? dadosProduto.map(item => item.media_vendas) : [], name: 'Média de Vendas' }
                        ]}
                        width={700}
                        height={300}
                    />
                </div>
            )}
        </Container>
    );

}

