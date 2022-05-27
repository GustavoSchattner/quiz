import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual a verdadeira respiração do fogo?', [
        RespostaModel.errada('Respiração da tocha'),
        RespostaModel.errada('Respiração do raio'),
        RespostaModel.errada('Não tem'),
        RespostaModel.certa('Respiração do Chama no Zap BB'),
    ]),
    new QuestaoModel(202, 'Qual fruto do diabo que pertence a Monkey D Luffy', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Gomu Gomu No Mi'),
        RespostaModel.errada('Hito Hito No Mi: Modelo Pedinte'),
        RespostaModel.certa('Hito Hito No Mi: Modelo Nika'),
    ]),

    new QuestaoModel(203, 'Qual o coletivo de Capivara?', [
        RespostaModel.errada('Capivaras'),
        RespostaModel.errada('Capivarais'),
        RespostaModel.errada('Capimuitas'),
        RespostaModel.certa('Capivarias'),
    ]),

    new QuestaoModel(204, 'Qual o coletivo de lápis ?', [
        RespostaModel.errada('Capivarias'),
        RespostaModel.errada('Lapises'),
        RespostaModel.errada('Lapeses'),
        RespostaModel.certa('Não tem porquê lápis já coletivo.'),
    ]),
    new QuestaoModel(205, 'Quem compôs o Hino da Independência?', [
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Mc Poze do Rodo em 1986'),
    ]),
    new QuestaoModel(206, 'Qual é o antônimo de Antônimo', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Não Antônimo'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu o Xaropinho', [
        RespostaModel.errada('Argentina'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('São Paulo'),
        RespostaModel.certa('Brasil'),
    ]),
    new QuestaoModel(208, 'Qual a cor do sol de noite', [
        RespostaModel.errada('Preto claro'),
        RespostaModel.errada('Branco'),
        RespostaModel.errada('Roxo'),
        RespostaModel.certa('Azul escuro'),
    ]),
    new QuestaoModel(209, 'No céu tem...', [
        RespostaModel.errada('Farofa'),
        RespostaModel.errada('Farinha'),
        RespostaModel.errada('Biscoito'),
        RespostaModel.certa('Pão'),
    ]),
    new QuestaoModel(210, 'Biscoito ou Bolacha', [
        RespostaModel.errada('Bolacha'),
        RespostaModel.errada('Bolacha'),
        RespostaModel.errada('Bolacha'),
        RespostaModel.certa('Biscoito'),
    ]),
    new QuestaoModel(211, 'Que nome se dá à purificação por meio da água?', [
        RespostaModel.errada('Abrupção'),
        RespostaModel.errada('Abolição'),
        RespostaModel.errada('Abnegação'),
        RespostaModel.certa('Exorcizão'),
    ]),
    new QuestaoModel(212, 'Qual país tem letra d e não é a Dinamarca', [
        RespostaModel.errada('Brasil'),
        RespostaModel.errada('Reino Unido'),
        RespostaModel.errada('Canadá'),
        RespostaModel.certa('Distrito Federal'),
    ]),
    new QuestaoModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        RespostaModel.errada('Estômago'),
        RespostaModel.errada('Pâncreas'),
        RespostaModel.errada('Rim'),
        RespostaModel.certa('Epiglote'),
    ]),
    new QuestaoModel(214, 'A compensação por perda é chamada de...', [
        RespostaModel.errada('Déficit'),
        RespostaModel.errada('Indexação'),
        RespostaModel.errada('Indébito'),
        RespostaModel.certa('Lágrimas'),
    ]),
    new QuestaoModel(215, 'Qual dos seguintes é mais impossível', [
        RespostaModel.errada('Surfista Mineiro'),
        RespostaModel.errada('Surfista Paraguaio'),
        RespostaModel.errada('Canadense mal educado'),
        RespostaModel.certa('Mundial do Palmeiras'),
    ]),
    new QuestaoModel(216, 'Se Deus não existe quem abre a porta pro motorista do ônibus ?', [
        RespostaModel.errada('Ninguém'),
        RespostaModel.errada('Lince Negra'),
        RespostaModel.errada('Noturno'),
        RespostaModel.certa('Ele existe e ponto'),
    ]),
]

export default questoes