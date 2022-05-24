import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho é o chupacu ?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Ovelha'),
        RespostaModel.errada('Beterraba'),
        RespostaModel.certa('Sua Tia'),
    ]),

    new QuestaoModel(202, 'No Pai de Família, qual a profissão do Urso ?', [
        RespostaModel.errada('Delicia'),
        RespostaModel.errada('Suco de Laranja'),
        RespostaModel.errada('Bolo de Murango'),
        RespostaModel.certa('Mecânico'),
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
]

export default questoes