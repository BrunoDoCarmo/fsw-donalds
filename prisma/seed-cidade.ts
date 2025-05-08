/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
    await prismaClient.$transaction(async (tx: any) => {
        await tx.cidade.deleteMany();
        await tx.cidade.createMany({
            data: [
                
                {
                    nome: "Alta Floresta D'Oeste",
                    uf: "RO",
                    ibge: "1100015"
                },
                {
                    nome: "Ariquemes",
                    uf: "RO",
                    ibge: "1100023"
                },
                {
                    nome: "Cabixi",
                    uf: "RO",
                    ibge: "1100031"
                },
                {
                    nome: "Cacoal",
                    uf: "RO",
                    ibge: "1100049"
                },
                {
                    nome: "Cerejeiras",
                    uf: "RO",
                    ibge: "1100056"
                },
                {
                    nome: "Colorado do Oeste",
                    uf: "RO",
                    ibge: "1100064"
                },
                {
                    nome: "Corumbiara",
                    uf: "RO",
                    ibge: "1100072"
                },
                {
                    nome: "Costa Marques",
                    uf: "RO",
                    ibge: "1100080"
                },
                {
                    nome: "Espigão D'Oeste",
                    uf: "RO",
                    ibge: "1100098"
                },
                {
                    nome: "Guajará-Mirim",
                    uf: "RO",
                    ibge: "1100106"
                },
                {
                    nome: "Jaru",
                    uf: "RO",
                    ibge: "1100114"
                },
                {
                    nome: "Ji-Paraná",
                    uf: "RO",
                    ibge: "1100122"
                },
                {
                    nome: "Machadinho D'Oeste",
                    uf: "RO",
                    ibge: "1100130"
                },
                {
                    nome: "Nova Brasilândia D'Oeste",
                    uf: "RO",
                    ibge: "1100148"
                },
                {
                    nome: "Ouro Preto do Oeste",
                    uf: "RO",
                    ibge: "1100155"
                },
                {
                    nome: "Pimenta Bueno",
                    uf: "RO",
                    ibge: "1100189"
                },
                {
                    nome: "Porto Velho",
                    uf: "RO",
                    ibge: "1100205"
                },
                {
                    nome: "Presidente Médici",
                    uf: "RO",
                    ibge: "1100254"
                },
                {
                    nome: "Rio Crespo",
                    uf: "RO",
                    ibge: "1100262"
                },
                {
                    nome: "Rolim de Moura",
                    uf: "RO",
                    ibge: "1100288"
                },
                {
                    nome: "Santa Luzia D'Oeste",
                    uf: "RO",
                    ibge: "1100296"
                },
                {
                    nome: "Vilhena",
                    uf: "RO",
                    ibge: "1100304"
                },
                {
                    nome: "São Miguel do Guaporé",
                    uf: "RO",
                    ibge: "1100320"
                },
                {
                    nome: "Nova Mamoré",
                    uf: "RO",
                    ibge: "1100338"
                },
                {
                    nome: "Alvorada D'Oeste",
                    uf: "RO",
                    ibge: "1100346"
                },
                {
                    nome: "Alto Alegre dos Parecis",
                    uf: "RO",
                    ibge: "1100379"
                },
                {
                    nome: "Alto Paraíso",
                    uf: "RO",
                    ibge: "1100403"
                },
                {
                    nome: "Buritis",
                    uf: "RO",
                    ibge: "1100452"
                },
                {
                    nome: "Novo Horizonte do Oeste",
                    uf: "RO",
                    ibge: "1100502"
                },
                {
                    nome: "Cacaulândia",
                    uf: "RO",
                    ibge: "1100601"
                },
                {
                    nome: "Campo Novo de Rondônia",
                    uf: "RO",
                    ibge: "1100700"
                },
                {
                    nome: "Candeias do Jamari",
                    uf: "RO",
                    ibge: "1100809"
                },
                {
                    nome: "Castanheiras",
                    uf: "RO",
                    ibge: "1100908"
                },
                {
                    nome: "Chupinguaia",
                    uf: "RO",
                    ibge: "1100924"
                },
                {
                    nome: "Cujubim",
                    uf: "RO",
                    ibge: "1100940"
                },
                {
                    nome: "Governador Jorge Teixeira",
                    uf: "RO",
                    ibge: "1101005"
                },
                {
                    nome: "Itapuã do Oeste",
                    uf: "RO",
                    ibge: "1101104"
                },
                {
                    nome: "Ministro Andreazza",
                    uf: "RO",
                    ibge: "1101203"
                },
                {
                    nome: "Mirante da Serra",
                    uf: "RO",
                    ibge: "1101302"
                },
                {
                    nome: "Monte Negro",
                    uf: "RO",
                    ibge: "1101401"
                },
                {
                    nome: "Nova União",
                    uf: "RO",
                    ibge: "1101435"
                },
                {
                    nome: "Parecis",
                    uf: "RO",
                    ibge: "1101450"
                },
                {
                    nome: "Pimenteiras do Oeste",
                    uf: "RO",
                    ibge: "1101468"
                },
                {
                    nome: "Primavera de Rondônia",
                    uf: "RO",
                    ibge: "1101476"
                },
                {
                    nome: "São Felipe D'Oeste",
                    uf: "RO",
                    ibge: "1101484"
                },
                {
                    nome: "São Francisco do Guaporé",
                    uf: "RO",
                    ibge: "1101492"
                },
                {
                    nome: "Seringueiras",
                    uf: "RO",
                    ibge: "1101500"
                },
                {
                    nome: "Teixeirópolis",
                    uf: "RO",
                    ibge: "1101559"
                },
                {
                    nome: "Theobroma",
                    uf: "RO",
                    ibge: "1101609"
                },
                {
                    nome: "Urupá",
                    uf: "RO",
                    ibge: "1101708"
                },
                {
                    nome: "Vale do Anari",
                    uf: "RO",
                    ibge: "1101757"
                },
                {
                    nome: "Vale do Paraíso",
                    uf: "RO",
                    ibge: "1101807"
                },
                {
                    nome: "Acrelândia",
                    uf: "AC",
                    ibge: "1200013"
                },
                {
                    nome: "Assis Brasil",
                    uf: "AC",
                    ibge: "1200054"
                },
                {
                    nome: "Brasiléia",
                    uf: "AC",
                    ibge: "1200104"
                },
                {
                    nome: "Bujari",
                    uf: "AC",
                    ibge: "1200138"
                },
                {
                    nome: "Capixaba",
                    uf: "AC",
                    ibge: "1200179"
                },
                {
                    nome: "Cruzeiro do Sul",
                    uf: "AC",
                    ibge: "1200203"
                },
                {
                    nome: "Epitaciolândia",
                    uf: "AC",
                    ibge: "1200252"
                },
                {
                    nome: "Feijó",
                    uf: "AC",
                    ibge: "1200302"
                },
                {
                    nome: "Jordão",
                    uf: "AC",
                    ibge: "1200328"
                },
                {
                    nome: "Mâncio Lima",
                    uf: "AC",
                    ibge: "1200336"
                },
                {
                    nome: "Manoel Urbano",
                    uf: "AC",
                    ibge: "1200344"
                },
                {
                    nome: "Marechal Thaumaturgo",
                    uf: "AC",
                    ibge: "1200351"
                },
                {
                    nome: "Plácido de Castro",
                    uf: "AC",
                    ibge: "1200385"
                },
                {
                    nome: "Porto Walter",
                    uf: "AC",
                    ibge: "1200393"
                },
                {
                    nome: "Rio Branco",
                    uf: "AC",
                    ibge: "1200401"
                },
                {
                    nome: "Rodrigues Alves",
                    uf: "AC",
                    ibge: "1200427"
                },
                {
                    nome: "Santa Rosa do Purus",
                    uf: "AC",
                    ibge: "1200435"
                },
                {
                    nome: "Senador Guiomard",
                    uf: "AC",
                    ibge: "1200450"
                },
                {
                    nome: "Sena Madureira",
                    uf: "AC",
                    ibge: "1200500"
                },
                {
                    nome: "Tarauacá",
                    uf: "AC",
                    ibge: "1200609"
                },
                {
                    nome: "Xapuri",
                    uf: "AC",
                    ibge: "1200708"
                },
                {
                    nome: "Porto Acre",
                    uf: "AC",
                    ibge: "1200807"
                },
                {
                    nome: "Alvarães",
                    uf: "AM",
                    ibge: "1300029"
                },
                {
                    nome: "Amaturá",
                    uf: "AM",
                    ibge: "1300060"
                },
                {
                    nome: "Anamã",
                    uf: "AM",
                    ibge: "1300086"
                },
                {
                    nome: "Anori",
                    uf: "AM",
                    ibge: "1300102"
                },
                {
                    nome: "Apuí",
                    uf: "AM",
                    ibge: "1300144"
                },
                {
                    nome: "Atalaia do Norte",
                    uf: "AM",
                    ibge: "1300201"
                },
                {
                    nome: "Autazes",
                    uf: "AM",
                    ibge: "1300300"
                },
                {
                    nome: "Barcelos",
                    uf: "AM",
                    ibge: "1300409"
                },
                {
                    nome: "Barreirinha",
                    uf: "AM",
                    ibge: "1300508"
                },
                {
                    nome: "Benjamin Constant",
                    uf: "AM",
                    ibge: "1300607"
                },
                {
                    nome: "Beruri",
                    uf: "AM",
                    ibge: "1300631"
                },
                {
                    nome: "Boa Vista do Ramos",
                    uf: "AM",
                    ibge: "1300680"
                },
                {
                    nome: "Boca do Acre",
                    uf: "AM",
                    ibge: "1300706"
                },
                {
                    nome: "Borba",
                    uf: "AM",
                    ibge: "1300805"
                },
                {
                    nome: "Caapiranga",
                    uf: "AM",
                    ibge: "1300839"
                },
                {
                    nome: "Canutama",
                    uf: "AM",
                    ibge: "1300904"
                },
                {
                    nome: "Carauari",
                    uf: "AM",
                    ibge: "1301001"
                },
                {
                    nome: "Careiro",
                    uf: "AM",
                    ibge: "1301100"
                },
                {
                    nome: "Careiro da Várzea",
                    uf: "AM",
                    ibge: "1301159"
                },
                {
                    nome: "Coari",
                    uf: "AM",
                    ibge: "1301209"
                },
                {
                    nome: "Codajás",
                    uf: "AM",
                    ibge: "1301308"
                },
                {
                    nome: "Eirunepé",
                    uf: "AM",
                    ibge: "1301407"
                },
                {
                    nome: "Envira",
                    uf: "AM",
                    ibge: "1301506"
                },
                {
                    nome: "Fonte Boa",
                    uf: "AM",
                    ibge: "1301605"
                },
                {
                    nome: "Guajará",
                    uf: "AM",
                    ibge: "1301654"
                },
                {
                    nome: "Humaitá",
                    uf: "AM",
                    ibge: "1301704"
                },
                {
                    nome: "Ipixuna",
                    uf: "AM",
                    ibge: "1301803"
                },
                {
                    nome: "Iranduba",
                    uf: "AM",
                    ibge: "1301852"
                },
                {
                    nome: "Itacoatiara",
                    uf: "AM",
                    ibge: "1301902"
                },
                {
                    nome: "Itamarati",
                    uf: "AM",
                    ibge: "1301951"
                },
                {
                    nome: "Itapiranga",
                    uf: "AM",
                    ibge: "1302009"
                },
                {
                    nome: "Japurá",
                    uf: "AM",
                    ibge: "1302108"
                },
                {
                    nome: "Juruá",
                    uf: "AM",
                    ibge: "1302207"
                },
                {
                    nome: "Jutaí",
                    uf: "AM",
                    ibge: "1302306"
                },
                {
                    nome: "Lábrea",
                    uf: "AM",
                    ibge: "1302405"
                },
                {
                    nome: "Manacapuru",
                    uf: "AM",
                    ibge: "1302504"
                },
                {
                    nome: "Manaquiri",
                    uf: "AM",
                    ibge: "1302553"
                },
                {
                    nome: "Manaus",
                    uf: "AM",
                    ibge: "1302603"
                },
                {
                    nome: "Manicoré",
                    uf: "AM",
                    ibge: "1302702"
                },
                {
                    nome: "Maraã",
                    uf: "AM",
                    ibge: "1302801"
                },
                {
                    nome: "Maués",
                    uf: "AM",
                    ibge: "1302900"
                },
                {
                    nome: "Nhamundá",
                    uf: "AM",
                    ibge: "1303007"
                },
                {
                    nome: "Nova Olinda do Norte",
                    uf: "AM",
                    ibge: "1303106"
                },
                {
                    nome: "Novo Airão",
                    uf: "AM",
                    ibge: "1303205"
                },
                {
                    nome: "Novo Aripuanã",
                    uf: "AM",
                    ibge: "1303304"
                },
                {
                    nome: "Parintins",
                    uf: "AM",
                    ibge: "1303403"
                },
                {
                    nome: "Pauini",
                    uf: "AM",
                    ibge: "1303502"
                },
                {
                    nome: "Presidente Figueiredo",
                    uf: "AM",
                    ibge: "1303536"
                },
                {
                    nome: "Rio Preto da Eva",
                    uf: "AM",
                    ibge: "1303569"
                },
                {
                    nome: "Santa Isabel do Rio Negro",
                    uf: "AM",
                    ibge: "1303601"
                },
                {
                    nome: "Santo Antônio do Içá",
                    uf: "AM",
                    ibge: "1303700"
                },
                {
                    nome: "São Gabriel da Cachoeira",
                    uf: "AM",
                    ibge: "1303809"
                },
                {
                    nome: "São Paulo de Olivença",
                    uf: "AM",
                    ibge: "1303908"
                },
                {
                    nome: "São Sebastião do Uatumã",
                    uf: "AM",
                    ibge: "1303957"
                },
                {
                    nome: "Silves",
                    uf: "AM",
                    ibge: "1304005"
                },
                {
                    nome: "Tabatinga",
                    uf: "AM",
                    ibge: "1304062"
                },
                {
                    nome: "Tapauá",
                    uf: "AM",
                    ibge: "1304104"
                },
                {
                    nome: "Tefé",
                    uf: "AM",
                    ibge: "1304203"
                },
                {
                    nome: "Tonantins",
                    uf: "AM",
                    ibge: "1304237"
                },
                {
                    nome: "Uarini",
                    uf: "AM",
                    ibge: "1304260"
                },
                {
                    nome: "Urucará",
                    uf: "AM",
                    ibge: "1304302"
                },
                {
                    nome: "Urucurituba",
                    uf: "AM",
                    ibge: "1304401"
                },
                {
                    nome: "Amajari",
                    uf: "RR",
                    ibge: "1400027"
                },
                {
                    nome: "Alto Alegre",
                    uf: "RR",
                    ibge: "1400050"
                },
                {
                    nome: "Boa Vista",
                    uf: "RR",
                    ibge: "1400100"
                },
                {
                    nome: "Bonfim",
                    uf: "RR",
                    ibge: "1400159"
                },
                {
                    nome: "Cantá",
                    uf: "RR",
                    ibge: "1400175"
                },
                {
                    nome: "Caracaraí",
                    uf: "RR",
                    ibge: "1400209"
                },
                {
                    nome: "Caroebe",
                    uf: "RR",
                    ibge: "1400233"
                },
                {
                    nome: "Iracema",
                    uf: "RR",
                    ibge: "1400282"
                },
                {
                    nome: "Mucajaí",
                    uf: "RR",
                    ibge: "1400308"
                },
                {
                    nome: "Normandia",
                    uf: "RR",
                    ibge: "1400407"
                },
                {
                    nome: "Pacaraima",
                    uf: "RR",
                    ibge: "1400456"
                },
                {
                    nome: "Rorainópolis",
                    uf: "RR",
                    ibge: "1400472"
                },
                {
                    nome: "São João da Baliza",
                    uf: "RR",
                    ibge: "1400506"
                },
                {
                    nome: "São Luiz",
                    uf: "RR",
                    ibge: "1400605"
                },
                {
                    nome: "Uiramutã",
                    uf: "RR",
                    ibge: "1400704"
                },
                {
                    nome: "Abaetetuba",
                    uf: "PA",
                    ibge: "1500107"
                },
                {
                    nome: "Abel Figueiredo",
                    uf: "PA",
                    ibge: "1500131"
                },
                {
                    nome: "Acará",
                    uf: "PA",
                    ibge: "1500206"
                },
                {
                    nome: "Afuá",
                    uf: "PA",
                    ibge: "1500305"
                },
                {
                    nome: "Água Azul do Norte",
                    uf: "PA",
                    ibge: "1500347"
                },
                {
                    nome: "Alenquer",
                    uf: "PA",
                    ibge: "1500404"
                },
                {
                    nome: "Almeirim",
                    uf: "PA",
                    ibge: "1500503"
                },
                {
                    nome: "Altamira",
                    uf: "PA",
                    ibge: "1500602"
                },
                {
                    nome: "Anajás",
                    uf: "PA",
                    ibge: "1500701"
                },
                {
                    nome: "Ananindeua",
                    uf: "PA",
                    ibge: "1500800"
                },
                {
                    nome: "Anapu",
                    uf: "PA",
                    ibge: "1500859"
                },
                {
                    nome: "Augusto Corrêa",
                    uf: "PA",
                    ibge: "1500909"
                },
                {
                    nome: "Aurora do Pará",
                    uf: "PA",
                    ibge: "1500958"
                },
                {
                    nome: "Aveiro",
                    uf: "PA",
                    ibge: "1501006"
                },
                {
                    nome: "Bagre",
                    uf: "PA",
                    ibge: "1501105"
                },
                {
                    nome: "Baião",
                    uf: "PA",
                    ibge: "1501204"
                },
                {
                    nome: "Bannach",
                    uf: "PA",
                    ibge: "1501253"
                },
                {
                    nome: "Barcarena",
                    uf: "PA",
                    ibge: "1501303"
                },
                {
                    nome: "Belém",
                    uf: "PA",
                    ibge: "1501402"
                },
                {
                    nome: "Belterra",
                    uf: "PA",
                    ibge: "1501451"
                },
                {
                    nome: "Benevides",
                    uf: "PA",
                    ibge: "1501501"
                },
                {
                    nome: "Bom Jesus do Tocantins",
                    uf: "PA",
                    ibge: "1501576"
                },
                {
                    nome: "Bonito",
                    uf: "PA",
                    ibge: "1501600"
                },
                {
                    nome: "Bragança",
                    uf: "PA",
                    ibge: "1501709"
                },
                {
                    nome: "Brasil Novo",
                    uf: "PA",
                    ibge: "1501725"
                },
                {
                    nome: "Brejo Grande do Araguaia",
                    uf: "PA",
                    ibge: "1501758"
                },
                {
                    nome: "Breu Branco",
                    uf: "PA",
                    ibge: "1501782"
                },
                {
                    nome: "Breves",
                    uf: "PA",
                    ibge: "1501808"
                },
                {
                    nome: "Bujaru",
                    uf: "PA",
                    ibge: "1501907"
                },
                {
                    nome: "Cachoeira do Piriá",
                    uf: "PA",
                    ibge: "1501956"
                },
                {
                    nome: "Cachoeira do Arari",
                    uf: "PA",
                    ibge: "1502004"
                },
                {
                    nome: "Cametá",
                    uf: "PA",
                    ibge: "1502103"
                },
                {
                    nome: "Canaã dos Carajás",
                    uf: "PA",
                    ibge: "1502152"
                },
                {
                    nome: "Capanema",
                    uf: "PA",
                    ibge: "1502202"
                },
                {
                    nome: "Capitão Poço",
                    uf: "PA",
                    ibge: "1502301"
                },
                {
                    nome: "Castanhal",
                    uf: "PA",
                    ibge: "1502400"
                },
                {
                    nome: "Chaves",
                    uf: "PA",
                    ibge: "1502509"
                },
                {
                    nome: "Colares",
                    uf: "PA",
                    ibge: "1502608"
                },
                {
                    nome: "Conceição do Araguaia",
                    uf: "PA",
                    ibge: "1502707"
                },
                {
                    nome: "Concórdia do Pará",
                    uf: "PA",
                    ibge: "1502756"
                },
                {
                    nome: "Cumaru do Norte",
                    uf: "PA",
                    ibge: "1502764"
                },
                {
                    nome: "Curionópolis",
                    uf: "PA",
                    ibge: "1502772"
                },
                {
                    nome: "Curralinho",
                    uf: "PA",
                    ibge: "1502806"
                },
                {
                    nome: "Curuá",
                    uf: "PA",
                    ibge: "1502855"
                },
                {
                    nome: "Curuçá",
                    uf: "PA",
                    ibge: "1502905"
                },
                {
                    nome: "Dom Eliseu",
                    uf: "PA",
                    ibge: "1502939"
                },
                {
                    nome: "Eldorado dos Carajás",
                    uf: "PA",
                    ibge: "1502954"
                },
                {
                    nome: "Faro",
                    uf: "PA",
                    ibge: "1503002"
                },
                {
                    nome: "Floresta do Araguaia",
                    uf: "PA",
                    ibge: "1503044"
                },
                {
                    nome: "Garrafão do Norte",
                    uf: "PA",
                    ibge: "1503077"
                },
                {
                    nome: "Goianésia do Pará",
                    uf: "PA",
                    ibge: "1503093"
                },
                {
                    nome: "Gurupá",
                    uf: "PA",
                    ibge: "1503101"
                },
                {
                    nome: "Igarapé-Açu",
                    uf: "PA",
                    ibge: "1503200"
                },
                {
                    nome: "Igarapé-Miri",
                    uf: "PA",
                    ibge: "1503309"
                },
                {
                    nome: "Inhangapi",
                    uf: "PA",
                    ibge: "1503408"
                },
                {
                    nome: "Ipixuna do Pará",
                    uf: "PA",
                    ibge: "1503457"
                },
                {
                    nome: "Irituia",
                    uf: "PA",
                    ibge: "1503507"
                },
                {
                    nome: "Itaituba",
                    uf: "PA",
                    ibge: "1503606"
                },
                {
                    nome: "Itupiranga",
                    uf: "PA",
                    ibge: "1503705"
                },
                {
                    nome: "Jacareacanga",
                    uf: "PA",
                    ibge: "1503754"
                },
                {
                    nome: "Jacundá",
                    uf: "PA",
                    ibge: "1503804"
                },
                {
                    nome: "Juruti",
                    uf: "PA",
                    ibge: "1503903"
                },
                {
                    nome: "Limoeiro do Ajuru",
                    uf: "PA",
                    ibge: "1504000"
                },
                {
                    nome: "Mãe do Rio",
                    uf: "PA",
                    ibge: "1504059"
                },
                {
                    nome: "Magalhães Barata",
                    uf: "PA",
                    ibge: "1504109"
                },
                {
                    nome: "Marabá",
                    uf: "PA",
                    ibge: "1504208"
                },
                {
                    nome: "Maracanã",
                    uf: "PA",
                    ibge: "1504307"
                },
                {
                    nome: "Marapanim",
                    uf: "PA",
                    ibge: "1504406"
                },
                {
                    nome: "Marituba",
                    uf: "PA",
                    ibge: "1504422"
                },
                {
                    nome: "Medicilândia",
                    uf: "PA",
                    ibge: "1504455"
                },
                {
                    nome: "Melgaço",
                    uf: "PA",
                    ibge: "1504505"
                },
                {
                    nome: "Mocajuba",
                    uf: "PA",
                    ibge: "1504604"
                },
                {
                    nome: "Moju",
                    uf: "PA",
                    ibge: "1504703"
                },
                {
                    nome: "Mojuí dos Campos",
                    uf: "PA",
                    ibge: "1504752"
                },
                {
                    nome: "Monte Alegre",
                    uf: "PA",
                    ibge: "1504802"
                },
                {
                    nome: "Muaná",
                    uf: "PA",
                    ibge: "1504901"
                },
                {
                    nome: "Nova Esperança do Piriá",
                    uf: "PA",
                    ibge: "1504950"
                },
                {
                    nome: "Nova Ipixuna",
                    uf: "PA",
                    ibge: "1504976"
                },
                {
                    nome: "Nova Timboteua",
                    uf: "PA",
                    ibge: "1505007"
                },
                {
                    nome: "Novo Progresso",
                    uf: "PA",
                    ibge: "1505031"
                },
                {
                    nome: "Novo Repartimento",
                    uf: "PA",
                    ibge: "1505064"
                },
                {
                    nome: "Óbidos",
                    uf: "PA",
                    ibge: "1505106"
                },
                {
                    nome: "Oeiras do Pará",
                    uf: "PA",
                    ibge: "1505205"
                },
                {
                    nome: "Oriximiná",
                    uf: "PA",
                    ibge: "1505304"
                },
                {
                    nome: "Ourém",
                    uf: "PA",
                    ibge: "1505403"
                },
                {
                    nome: "Ourilândia do Norte",
                    uf: "PA",
                    ibge: "1505437"
                },
                {
                    nome: "Pacajá",
                    uf: "PA",
                    ibge: "1505486"
                },
                {
                    nome: "Palestina do Pará",
                    uf: "PA",
                    ibge: "1505494"
                },
                {
                    nome: "Paragominas",
                    uf: "PA",
                    ibge: "1505502"
                },
                {
                    nome: "Parauapebas",
                    uf: "PA",
                    ibge: "1505536"
                },
                {
                    nome: "Pau D'Arco",
                    uf: "PA",
                    ibge: "1505551"
                },
                {
                    nome: "Peixe-Boi",
                    uf: "PA",
                    ibge: "1505601"
                },
                {
                    nome: "Piçarra",
                    uf: "PA",
                    ibge: "1505635"
                },
                {
                    nome: "Placas",
                    uf: "PA",
                    ibge: "1505650"
                },
                {
                    nome: "Ponta de Pedras",
                    uf: "PA",
                    ibge: "1505700"
                },
                {
                    nome: "Portel",
                    uf: "PA",
                    ibge: "1505809"
                },
                {
                    nome: "Porto de Moz",
                    uf: "PA",
                    ibge: "1505908"
                },
                {
                    nome: "Prainha",
                    uf: "PA",
                    ibge: "1506005"
                },
                {
                    nome: "Primavera",
                    uf: "PA",
                    ibge: "1506104"
                },
                {
                    nome: "Quatipuru",
                    uf: "PA",
                    ibge: "1506112"
                },
                {
                    nome: "Redenção",
                    uf: "PA",
                    ibge: "1506138"
                },
                {
                    nome: "Rio Maria",
                    uf: "PA",
                    ibge: "1506161"
                },
                {
                    nome: "Rondon do Pará",
                    uf: "PA",
                    ibge: "1506187"
                },
                {
                    nome: "Rurópolis",
                    uf: "PA",
                    ibge: "1506195"
                },
                {
                    nome: "Salinópolis",
                    uf: "PA",
                    ibge: "1506203"
                },
                {
                    nome: "Salvaterra",
                    uf: "PA",
                    ibge: "1506302"
                },
                {
                    nome: "Santa Bárbara do Pará",
                    uf: "PA",
                    ibge: "1506351"
                },
                {
                    nome: "Santa Cruz do Arari",
                    uf: "PA",
                    ibge: "1506401"
                },
                {
                    nome: "Santa Isabel do Pará",
                    uf: "PA",
                    ibge: "1506500"
                },
                {
                    nome: "Santa Luzia do Pará",
                    uf: "PA",
                    ibge: "1506559"
                },
                {
                    nome: "Santa Maria das Barreiras",
                    uf: "PA",
                    ibge: "1506583"
                },
                {
                    nome: "Santa Maria do Pará",
                    uf: "PA",
                    ibge: "1506609"
                },
                {
                    nome: "Santana do Araguaia",
                    uf: "PA",
                    ibge: "1506708"
                },
                {
                    nome: "Santarém",
                    uf: "PA",
                    ibge: "1506807"
                },
                {
                    nome: "Santarém Novo",
                    uf: "PA",
                    ibge: "1506906"
                },
                {
                    nome: "Santo Antônio do Tauá",
                    uf: "PA",
                    ibge: "1507003"
                },
                {
                    nome: "São Caetano de Odivelas",
                    uf: "PA",
                    ibge: "1507102"
                },
                {
                    nome: "São Domingos do Araguaia",
                    uf: "PA",
                    ibge: "1507151"
                },
                {
                    nome: "São Domingos do Capim",
                    uf: "PA",
                    ibge: "1507201"
                },
                {
                    nome: "São Félix do Xingu",
                    uf: "PA",
                    ibge: "1507300"
                },
                {
                    nome: "São Francisco do Pará",
                    uf: "PA",
                    ibge: "1507409"
                },
                {
                    nome: "São Geraldo do Araguaia",
                    uf: "PA",
                    ibge: "1507458"
                },
                {
                    nome: "São João da Ponta",
                    uf: "PA",
                    ibge: "1507466"
                },
                {
                    nome: "São João de Pirabas",
                    uf: "PA",
                    ibge: "1507474"
                },
                {
                    nome: "São João do Araguaia",
                    uf: "PA",
                    ibge: "1507508"
                },
                {
                    nome: "São Miguel do Guamá",
                    uf: "PA",
                    ibge: "1507607"
                },
                {
                    nome: "São Sebastião da Boa Vista",
                    uf: "PA",
                    ibge: "1507706"
                },
                {
                    nome: "Sapucaia",
                    uf: "PA",
                    ibge: "1507755"
                },
                {
                    nome: "Senador José Porfírio",
                    uf: "PA",
                    ibge: "1507805"
                },
                {
                    nome: "Soure",
                    uf: "PA",
                    ibge: "1507904"
                },
                {
                    nome: "Tailândia",
                    uf: "PA",
                    ibge: "1507953"
                },
                {
                    nome: "Terra Alta",
                    uf: "PA",
                    ibge: "1507961"
                },
                {
                    nome: "Terra Santa",
                    uf: "PA",
                    ibge: "1507979"
                },
                {
                    nome: "Tomé-Açu",
                    uf: "PA",
                    ibge: "1508001"
                },
                {
                    nome: "Tracuateua",
                    uf: "PA",
                    ibge: "1508035"
                },
                {
                    nome: "Trairão",
                    uf: "PA",
                    ibge: "1508050"
                },
                {
                    nome: "Tucumã",
                    uf: "PA",
                    ibge: "1508084"
                },
                {
                    nome: "Tucuruí",
                    uf: "PA",
                    ibge: "1508100"
                },
                {
                    nome: "Ulianópolis",
                    uf: "PA",
                    ibge: "1508126"
                },
                {
                    nome: "Uruará",
                    uf: "PA",
                    ibge: "1508159"
                },
                {
                    nome: "Vigia",
                    uf: "PA",
                    ibge: "1508209"
                },
                {
                    nome: "Viseu",
                    uf: "PA",
                    ibge: "1508308"
                },
                {
                    nome: "Vitória do Xingu",
                    uf: "PA",
                    ibge: "1508357"
                },
                {
                    nome: "Xinguara",
                    uf: "PA",
                    ibge: "1508407"
                },
                {
                    nome: "Serra do Navio",
                    uf: "AP",
                    ibge: "1600055"
                },
                {
                    nome: "Amapá",
                    uf: "AP",
                    ibge: "1600105"
                },
                {
                    nome: "Pedra Branca do Amapari",
                    uf: "AP",
                    ibge: "1600154"
                },
                {
                    nome: "Calçoene",
                    uf: "AP",
                    ibge: "1600204"
                },
                {
                    nome: "Cutias",
                    uf: "AP",
                    ibge: "1600212"
                },
                {
                    nome: "Ferreira Gomes",
                    uf: "AP",
                    ibge: "1600238"
                },
                {
                    nome: "Itaubal",
                    uf: "AP",
                    ibge: "1600253"
                },
                {
                    nome: "Laranjal do Jari",
                    uf: "AP",
                    ibge: "1600279"
                },
                {
                    nome: "Macapá",
                    uf: "AP",
                    ibge: "1600303"
                },
                {
                    nome: "Mazagão",
                    uf: "AP",
                    ibge: "1600402"
                },
                {
                    nome: "Oiapoque",
                    uf: "AP",
                    ibge: "1600501"
                },
                {
                    nome: "Porto Grande",
                    uf: "AP",
                    ibge: "1600535"
                },
                {
                    nome: "Pracuúba",
                    uf: "AP",
                    ibge: "1600550"
                },
                {
                    nome: "Santana",
                    uf: "AP",
                    ibge: "1600600"
                },
                {
                    nome: "Tartarugalzinho",
                    uf: "AP",
                    ibge: "1600709"
                },
                {
                    nome: "Vitória do Jari",
                    uf: "AP",
                    ibge: "1600808"
                },
                {
                    nome: "Abreulândia",
                    uf: "TO",
                    ibge: "1700251"
                },
                {
                    nome: "Aguiarnópolis",
                    uf: "TO",
                    ibge: "1700301"
                },
                {
                    nome: "Aliança do Tocantins",
                    uf: "TO",
                    ibge: "1700350"
                },
                {
                    nome: "Almas",
                    uf: "TO",
                    ibge: "1700400"
                },
                {
                    nome: "Alvorada",
                    uf: "TO",
                    ibge: "1700707"
                },
                {
                    nome: "Ananás",
                    uf: "TO",
                    ibge: "1701002"
                },
                {
                    nome: "Angico",
                    uf: "TO",
                    ibge: "1701051"
                },
                {
                    nome: "Aparecida do Rio Negro",
                    uf: "TO",
                    ibge: "1701101"
                },
                {
                    nome: "Aragominas",
                    uf: "TO",
                    ibge: "1701309"
                },
                {
                    nome: "Araguacema",
                    uf: "TO",
                    ibge: "1701903"
                },
                {
                    nome: "Araguaçu",
                    uf: "TO",
                    ibge: "1702000"
                },
                {
                    nome: "Araguaína",
                    uf: "TO",
                    ibge: "1702109"
                },
                {
                    nome: "Araguanã",
                    uf: "TO",
                    ibge: "1702158"
                },
                {
                    nome: "Araguatins",
                    uf: "TO",
                    ibge: "1702208"
                },
                {
                    nome: "Arapoema",
                    uf: "TO",
                    ibge: "1702307"
                },
                {
                    nome: "Arraias",
                    uf: "TO",
                    ibge: "1702406"
                },
                {
                    nome: "Augustinópolis",
                    uf: "TO",
                    ibge: "1702554"
                },
                {
                    nome: "Aurora do Tocantins",
                    uf: "TO",
                    ibge: "1702703"
                },
                {
                    nome: "Axixá do Tocantins",
                    uf: "TO",
                    ibge: "1702901"
                },
                {
                    nome: "Babaçulândia",
                    uf: "TO",
                    ibge: "1703008"
                },
                {
                    nome: "Bandeirantes do Tocantins",
                    uf: "TO",
                    ibge: "1703057"
                },
                {
                    nome: "Barra do Ouro",
                    uf: "TO",
                    ibge: "1703073"
                },
                {
                    nome: "Barrolândia",
                    uf: "TO",
                    ibge: "1703107"
                },
                {
                    nome: "Bernardo Sayão",
                    uf: "TO",
                    ibge: "1703206"
                },
                {
                    nome: "Bom Jesus do Tocantins",
                    uf: "TO",
                    ibge: "1703305"
                },
                {
                    nome: "Brasilândia do Tocantins",
                    uf: "TO",
                    ibge: "1703602"
                },
                {
                    nome: "Brejinho de Nazaré",
                    uf: "TO",
                    ibge: "1703701"
                },
                {
                    nome: "Buriti do Tocantins",
                    uf: "TO",
                    ibge: "1703800"
                },
                {
                    nome: "Cachoeirinha",
                    uf: "TO",
                    ibge: "1703826"
                },
                {
                    nome: "Campos Lindos",
                    uf: "TO",
                    ibge: "1703842"
                },
                {
                    nome: "Cariri do Tocantins",
                    uf: "TO",
                    ibge: "1703867"
                },
                {
                    nome: "Carmolândia",
                    uf: "TO",
                    ibge: "1703883"
                },
                {
                    nome: "Carrasco Bonito",
                    uf: "TO",
                    ibge: "1703891"
                },
                {
                    nome: "Caseara",
                    uf: "TO",
                    ibge: "1703909"
                },
                {
                    nome: "Centenário",
                    uf: "TO",
                    ibge: "1704105"
                },
                {
                    nome: "Chapada de Areia",
                    uf: "TO",
                    ibge: "1704600"
                },
                {
                    nome: "Chapada da Natividade",
                    uf: "TO",
                    ibge: "1705102"
                },
                {
                    nome: "Colinas do Tocantins",
                    uf: "TO",
                    ibge: "1705508"
                },
                {
                    nome: "Combinado",
                    uf: "TO",
                    ibge: "1705557"
                },
                {
                    nome: "Conceição do Tocantins",
                    uf: "TO",
                    ibge: "1705607"
                },
                {
                    nome: "Couto Magalhães",
                    uf: "TO",
                    ibge: "1706001"
                },
                {
                    nome: "Cristalândia",
                    uf: "TO",
                    ibge: "1706100"
                },
                {
                    nome: "Crixás do Tocantins",
                    uf: "TO",
                    ibge: "1706258"
                },
                {
                    nome: "Darcinópolis",
                    uf: "TO",
                    ibge: "1706506"
                },
                {
                    nome: "Dianópolis",
                    uf: "TO",
                    ibge: "1707009"
                },
                {
                    nome: "Divinópolis do Tocantins",
                    uf: "TO",
                    ibge: "1707108"
                },
                {
                    nome: "Dois Irmãos do Tocantins",
                    uf: "TO",
                    ibge: "1707207"
                },
                {
                    nome: "Dueré",
                    uf: "TO",
                    ibge: "1707306"
                },
                {
                    nome: "Esperantina",
                    uf: "TO",
                    ibge: "1707405"
                },
                {
                    nome: "Fátima",
                    uf: "TO",
                    ibge: "1707553"
                },
                {
                    nome: "Figueirópolis",
                    uf: "TO",
                    ibge: "1707652"
                },
                {
                    nome: "Filadélfia",
                    uf: "TO",
                    ibge: "1707702"
                },
                {
                    nome: "Formoso do Araguaia",
                    uf: "TO",
                    ibge: "1708205"
                },
                {
                    nome: "Fortaleza do Tabocão",
                    uf: "TO",
                    ibge: "1708254"
                },
                {
                    nome: "Goianorte",
                    uf: "TO",
                    ibge: "1708304"
                },
                {
                    nome: "Goiatins",
                    uf: "TO",
                    ibge: "1709005"
                },
                {
                    nome: "Guaraí",
                    uf: "TO",
                    ibge: "1709302"
                },
                {
                    nome: "Gurupi",
                    uf: "TO",
                    ibge: "1709500"
                },
                {
                    nome: "Ipueiras",
                    uf: "TO",
                    ibge: "1709807"
                },
                {
                    nome: "Itacajá",
                    uf: "TO",
                    ibge: "1710508"
                },
                {
                    nome: "Itaguatins",
                    uf: "TO",
                    ibge: "1710706"
                },
                {
                    nome: "Itapiratins",
                    uf: "TO",
                    ibge: "1710904"
                },
                {
                    nome: "Itaporã do Tocantins",
                    uf: "TO",
                    ibge: "1711100"
                },
                {
                    nome: "Jaú do Tocantins",
                    uf: "TO",
                    ibge: "1711506"
                },
                {
                    nome: "Juarina",
                    uf: "TO",
                    ibge: "1711803"
                },
                {
                    nome: "Lagoa da Confusão",
                    uf: "TO",
                    ibge: "1711902"
                },
                {
                    nome: "Lagoa do Tocantins",
                    uf: "TO",
                    ibge: "1711951"
                },
                {
                    nome: "Lajeado",
                    uf: "TO",
                    ibge: "1712009"
                },
                {
                    nome: "Lavandeira",
                    uf: "TO",
                    ibge: "1712157"
                },
                {
                    nome: "Lizarda",
                    uf: "TO",
                    ibge: "1712405"
                },
                {
                    nome: "Luzinópolis",
                    uf: "TO",
                    ibge: "1712454"
                },
                {
                    nome: "Marianópolis do Tocantins",
                    uf: "TO",
                    ibge: "1712504"
                },
                {
                    nome: "Mateiros",
                    uf: "TO",
                    ibge: "1712702"
                },
                {
                    nome: "Maurilândia do Tocantins",
                    uf: "TO",
                    ibge: "1712801"
                },
                {
                    nome: "Miracema do Tocantins",
                    uf: "TO",
                    ibge: "1713205"
                },
                {
                    nome: "Miranorte",
                    uf: "TO",
                    ibge: "1713304"
                },
                {
                    nome: "Monte do Carmo",
                    uf: "TO",
                    ibge: "1713601"
                },
                {
                    nome: "Monte Santo do Tocantins",
                    uf: "TO",
                    ibge: "1713700"
                },
                {
                    nome: "Palmeiras do Tocantins",
                    uf: "TO",
                    ibge: "1713809"
                },
                {
                    nome: "Muricilândia",
                    uf: "TO",
                    ibge: "1713957"
                },
                {
                    nome: "Natividade",
                    uf: "TO",
                    ibge: "1714203"
                },
                {
                    nome: "Nazaré",
                    uf: "TO",
                    ibge: "1714302"
                },
                {
                    nome: "Nova Olinda",
                    uf: "TO",
                    ibge: "1714880"
                },
                {
                    nome: "Nova Rosalândia",
                    uf: "TO",
                    ibge: "1715002"
                },
                {
                    nome: "Novo Acordo",
                    uf: "TO",
                    ibge: "1715101"
                },
                {
                    nome: "Novo Alegre",
                    uf: "TO",
                    ibge: "1715150"
                },
                {
                    nome: "Novo Jardim",
                    uf: "TO",
                    ibge: "1715259"
                },
                {
                    nome: "Oliveira de Fátima",
                    uf: "TO",
                    ibge: "1715507"
                },
                {
                    nome: "Palmeirante",
                    uf: "TO",
                    ibge: "1715705"
                },
                {
                    nome: "Palmeirópolis",
                    uf: "TO",
                    ibge: "1715754"
                },
                {
                    nome: "Paraíso do Tocantins",
                    uf: "TO",
                    ibge: "1716109"
                },
                {
                    nome: "Paranã",
                    uf: "TO",
                    ibge: "1716208"
                },
                {
                    nome: "Pau D'Arco",
                    uf: "TO",
                    ibge: "1716307"
                },
                {
                    nome: "Pedro Afonso",
                    uf: "TO",
                    ibge: "1716505"
                },
                {
                    nome: "Peixe",
                    uf: "TO",
                    ibge: "1716604"
                },
                {
                    nome: "Pequizeiro",
                    uf: "TO",
                    ibge: "1716653"
                },
                {
                    nome: "Colméia",
                    uf: "TO",
                    ibge: "1716703"
                },
                {
                    nome: "Pindorama do Tocantins",
                    uf: "TO",
                    ibge: "1717008"
                },
                {
                    nome: "Piraquê",
                    uf: "TO",
                    ibge: "1717206"
                },
                {
                    nome: "Pium",
                    uf: "TO",
                    ibge: "1717503"
                },
                {
                    nome: "Ponte Alta do Bom Jesus",
                    uf: "TO",
                    ibge: "1717800"
                },
                {
                    nome: "Ponte Alta do Tocantins",
                    uf: "TO",
                    ibge: "1717909"
                },
                {
                    nome: "Porto Alegre do Tocantins",
                    uf: "TO",
                    ibge: "1718006"
                },
                {
                    nome: "Porto Nacional",
                    uf: "TO",
                    ibge: "1718204"
                },
                {
                    nome: "Praia Norte",
                    uf: "TO",
                    ibge: "1718303"
                },
                {
                    nome: "Presidente Kennedy",
                    uf: "TO",
                    ibge: "1718402"
                },
                {
                    nome: "Pugmil",
                    uf: "TO",
                    ibge: "1718451"
                },
                {
                    nome: "Recursolândia",
                    uf: "TO",
                    ibge: "1718501"
                },
                {
                    nome: "Riachinho",
                    uf: "TO",
                    ibge: "1718550"
                },
                {
                    nome: "Rio da Conceição",
                    uf: "TO",
                    ibge: "1718659"
                },
                {
                    nome: "Rio dos Bois",
                    uf: "TO",
                    ibge: "1718709"
                },
                {
                    nome: "Rio Sono",
                    uf: "TO",
                    ibge: "1718758"
                },
                {
                    nome: "Sampaio",
                    uf: "TO",
                    ibge: "1718808"
                },
                {
                    nome: "Sandolândia",
                    uf: "TO",
                    ibge: "1718840"
                },
                {
                    nome: "Santa Fé do Araguaia",
                    uf: "TO",
                    ibge: "1718865"
                },
                {
                    nome: "Santa Maria do Tocantins",
                    uf: "TO",
                    ibge: "1718881"
                },
                {
                    nome: "Santa Rita do Tocantins",
                    uf: "TO",
                    ibge: "1718899"
                },
                {
                    nome: "Santa Rosa do Tocantins",
                    uf: "TO",
                    ibge: "1718907"
                },
                {
                    nome: "Santa Tereza do Tocantins",
                    uf: "TO",
                    ibge: "1719004"
                },
                {
                    nome: "Santa Terezinha do Tocantins",
                    uf: "TO",
                    ibge: "1720002"
                },
                {
                    nome: "São Bento do Tocantins",
                    uf: "TO",
                    ibge: "1720101"
                },
                {
                    nome: "São Félix do Tocantins",
                    uf: "TO",
                    ibge: "1720150"
                },
                {
                    nome: "São Miguel do Tocantins",
                    uf: "TO",
                    ibge: "1720200"
                },
                {
                    nome: "São Salvador do Tocantins",
                    uf: "TO",
                    ibge: "1720259"
                },
                {
                    nome: "São Sebastião do Tocantins",
                    uf: "TO",
                    ibge: "1720309"
                },
                {
                    nome: "São Valério",
                    uf: "TO",
                    ibge: "1720499"
                },
                {
                    nome: "Silvanópolis",
                    uf: "TO",
                    ibge: "1720655"
                },
                {
                    nome: "Sítio Novo do Tocantins",
                    uf: "TO",
                    ibge: "1720804"
                },
                {
                    nome: "Sucupira",
                    uf: "TO",
                    ibge: "1720853"
                },
                {
                    nome: "Taguatinga",
                    uf: "TO",
                    ibge: "1720903"
                },
                {
                    nome: "Taipas do Tocantins",
                    uf: "TO",
                    ibge: "1720937"
                },
                {
                    nome: "Talismã",
                    uf: "TO",
                    ibge: "1720978"
                },
                {
                    nome: "Palmas",
                    uf: "TO",
                    ibge: "1721000"
                },
                {
                    nome: "Tocantínia",
                    uf: "TO",
                    ibge: "1721109"
                },
                {
                    nome: "Tocantinópolis",
                    uf: "TO",
                    ibge: "1721208"
                },
                {
                    nome: "Tupirama",
                    uf: "TO",
                    ibge: "1721257"
                },
                {
                    nome: "Tupiratins",
                    uf: "TO",
                    ibge: "1721307"
                },
                {
                    nome: "Wanderlândia",
                    uf: "TO",
                    ibge: "1722081"
                },
                {
                    nome: "Xambioá",
                    uf: "TO",
                    ibge: "1722107"
                },
                {
                    nome: "Açailândia",
                    uf: "MA",
                    ibge: "2100055"
                },
                {
                    nome: "Afonso Cunha",
                    uf: "MA",
                    ibge: "2100105"
                },
                {
                    nome: "Água Doce do Maranhão",
                    uf: "MA",
                    ibge: "2100154"
                },
                {
                    nome: "Alcântara",
                    uf: "MA",
                    ibge: "2100204"
                },
                {
                    nome: "Aldeias Altas",
                    uf: "MA",
                    ibge: "2100303"
                },
                {
                    nome: "Altamira do Maranhão",
                    uf: "MA",
                    ibge: "2100402"
                },
                {
                    nome: "Alto Alegre do Maranhão",
                    uf: "MA",
                    ibge: "2100436"
                },
                {
                    nome: "Alto Alegre do Pindaré",
                    uf: "MA",
                    ibge: "2100477"
                },
                {
                    nome: "Alto Parnaíba",
                    uf: "MA",
                    ibge: "2100501"
                },
                {
                    nome: "Amapá do Maranhão",
                    uf: "MA",
                    ibge: "2100550"
                },
                {
                    nome: "Amarante do Maranhão",
                    uf: "MA",
                    ibge: "2100600"
                },
                {
                    nome: "Anajatuba",
                    uf: "MA",
                    ibge: "2100709"
                },
                {
                    nome: "Anapurus",
                    uf: "MA",
                    ibge: "2100808"
                },
                {
                    nome: "Apicum-Açu",
                    uf: "MA",
                    ibge: "2100832"
                },
                {
                    nome: "Araguanã",
                    uf: "MA",
                    ibge: "2100873"
                },
                {
                    nome: "Araioses",
                    uf: "MA",
                    ibge: "2100907"
                },
                {
                    nome: "Arame",
                    uf: "MA",
                    ibge: "2100956"
                },
                {
                    nome: "Arari",
                    uf: "MA",
                    ibge: "2101004"
                },
                {
                    nome: "Axixá",
                    uf: "MA",
                    ibge: "2101103"
                },
                {
                    nome: "Bacabal",
                    uf: "MA",
                    ibge: "2101202"
                },
                {
                    nome: "Bacabeira",
                    uf: "MA",
                    ibge: "2101251"
                },
                {
                    nome: "Bacuri",
                    uf: "MA",
                    ibge: "2101301"
                },
                {
                    nome: "Bacurituba",
                    uf: "MA",
                    ibge: "2101350"
                },
                {
                    nome: "Balsas",
                    uf: "MA",
                    ibge: "2101400"
                },
                {
                    nome: "Barão de Grajaú",
                    uf: "MA",
                    ibge: "2101509"
                },
                {
                    nome: "Barra do Corda",
                    uf: "MA",
                    ibge: "2101608"
                },
                {
                    nome: "Barreirinhas",
                    uf: "MA",
                    ibge: "2101707"
                },
                {
                    nome: "Belágua",
                    uf: "MA",
                    ibge: "2101731"
                },
                {
                    nome: "Bela Vista do Maranhão",
                    uf: "MA",
                    ibge: "2101772"
                },
                {
                    nome: "Benedito Leite",
                    uf: "MA",
                    ibge: "2101806"
                },
                {
                    nome: "Bequimão",
                    uf: "MA",
                    ibge: "2101905"
                },
                {
                    nome: "Bernardo do Mearim",
                    uf: "MA",
                    ibge: "2101939"
                },
                {
                    nome: "Boa Vista do Gurupi",
                    uf: "MA",
                    ibge: "2101970"
                },
                {
                    nome: "Bom Jardim",
                    uf: "MA",
                    ibge: "2102002"
                },
                {
                    nome: "Bom Jesus das Selvas",
                    uf: "MA",
                    ibge: "2102036"
                },
                {
                    nome: "Bom Lugar",
                    uf: "MA",
                    ibge: "2102077"
                },
                {
                    nome: "Brejo",
                    uf: "MA",
                    ibge: "2102101"
                },
                {
                    nome: "Brejo de Areia",
                    uf: "MA",
                    ibge: "2102150"
                },
                {
                    nome: "Buriti",
                    uf: "MA",
                    ibge: "2102200"
                },
                {
                    nome: "Buriti Bravo",
                    uf: "MA",
                    ibge: "2102309"
                },
                {
                    nome: "Buriticupu",
                    uf: "MA",
                    ibge: "2102325"
                },
                {
                    nome: "Buritirana",
                    uf: "MA",
                    ibge: "2102358"
                },
                {
                    nome: "Cachoeira Grande",
                    uf: "MA",
                    ibge: "2102374"
                },
                {
                    nome: "Cajapió",
                    uf: "MA",
                    ibge: "2102408"
                },
                {
                    nome: "Cajari",
                    uf: "MA",
                    ibge: "2102507"
                },
                {
                    nome: "Campestre do Maranhão",
                    uf: "MA",
                    ibge: "2102556"
                },
                {
                    nome: "Cândido Mendes",
                    uf: "MA",
                    ibge: "2102606"
                },
                {
                    nome: "Cantanhede",
                    uf: "MA",
                    ibge: "2102705"
                },
                {
                    nome: "Capinzal do Norte",
                    uf: "MA",
                    ibge: "2102754"
                },
                {
                    nome: "Carolina",
                    uf: "MA",
                    ibge: "2102804"
                },
                {
                    nome: "Carutapera",
                    uf: "MA",
                    ibge: "2102903"
                },
                {
                    nome: "Caxias",
                    uf: "MA",
                    ibge: "2103000"
                },
                {
                    nome: "Cedral",
                    uf: "MA",
                    ibge: "2103109"
                },
                {
                    nome: "Central do Maranhão",
                    uf: "MA",
                    ibge: "2103125"
                },
                {
                    nome: "Centro do Guilherme",
                    uf: "MA",
                    ibge: "2103158"
                },
                {
                    nome: "Centro Novo do Maranhão",
                    uf: "MA",
                    ibge: "2103174"
                },
                {
                    nome: "Chapadinha",
                    uf: "MA",
                    ibge: "2103208"
                },
                {
                    nome: "Cidelândia",
                    uf: "MA",
                    ibge: "2103257"
                },
                {
                    nome: "Codó",
                    uf: "MA",
                    ibge: "2103307"
                },
                {
                    nome: "Coelho Neto",
                    uf: "MA",
                    ibge: "2103406"
                },
                {
                    nome: "Colinas",
                    uf: "MA",
                    ibge: "2103505"
                },
                {
                    nome: "Conceição do Lago-Açu",
                    uf: "MA",
                    ibge: "2103554"
                },
                {
                    nome: "Coroatá",
                    uf: "MA",
                    ibge: "2103604"
                },
                {
                    nome: "Cururupu",
                    uf: "MA",
                    ibge: "2103703"
                },
                {
                    nome: "Davinópolis",
                    uf: "MA",
                    ibge: "2103752"
                },
                {
                    nome: "Dom Pedro",
                    uf: "MA",
                    ibge: "2103802"
                },
                {
                    nome: "Duque Bacelar",
                    uf: "MA",
                    ibge: "2103901"
                },
                {
                    nome: "Esperantinópolis",
                    uf: "MA",
                    ibge: "2104008"
                },
                {
                    nome: "Estreito",
                    uf: "MA",
                    ibge: "2104057"
                },
                {
                    nome: "Feira Nova do Maranhão",
                    uf: "MA",
                    ibge: "2104073"
                },
                {
                    nome: "Fernando Falcão",
                    uf: "MA",
                    ibge: "2104081"
                },
                {
                    nome: "Formosa da Serra Negra",
                    uf: "MA",
                    ibge: "2104099"
                },
                {
                    nome: "Fortaleza dos Nogueiras",
                    uf: "MA",
                    ibge: "2104107"
                },
                {
                    nome: "Fortuna",
                    uf: "MA",
                    ibge: "2104206"
                },
                {
                    nome: "Godofredo Viana",
                    uf: "MA",
                    ibge: "2104305"
                },
                {
                    nome: "Gonçalves Dias",
                    uf: "MA",
                    ibge: "2104404"
                },
                {
                    nome: "Governador Archer",
                    uf: "MA",
                    ibge: "2104503"
                },
                {
                    nome: "Governador Edison Lobão",
                    uf: "MA",
                    ibge: "2104552"
                },
                {
                    nome: "Governador Eugênio Barros",
                    uf: "MA",
                    ibge: "2104602"
                },
                {
                    nome: "Governador Luiz Rocha",
                    uf: "MA",
                    ibge: "2104628"
                },
                {
                    nome: "Governador Newton Bello",
                    uf: "MA",
                    ibge: "2104651"
                },
                {
                    nome: "Governador Nunes Freire",
                    uf: "MA",
                    ibge: "2104677"
                },
                {
                    nome: "Graça Aranha",
                    uf: "MA",
                    ibge: "2104701"
                },
                {
                    nome: "Grajaú",
                    uf: "MA",
                    ibge: "2104800"
                },
                {
                    nome: "Guimarães",
                    uf: "MA",
                    ibge: "2104909"
                },
                {
                    nome: "Humberto de Campos",
                    uf: "MA",
                    ibge: "2105005"
                },
                {
                    nome: "Icatu",
                    uf: "MA",
                    ibge: "2105104"
                },
                {
                    nome: "Igarapé do Meio",
                    uf: "MA",
                    ibge: "2105153"
                },
                {
                    nome: "Igarapé Grande",
                    uf: "MA",
                    ibge: "2105203"
                },
                {
                    nome: "Imperatriz",
                    uf: "MA",
                    ibge: "2105302"
                },
                {
                    nome: "Itaipava do Grajaú",
                    uf: "MA",
                    ibge: "2105351"
                },
                {
                    nome: "Itapecuru Mirim",
                    uf: "MA",
                    ibge: "2105401"
                },
                {
                    nome: "Itinga do Maranhão",
                    uf: "MA",
                    ibge: "2105427"
                },
                {
                    nome: "Jatobá",
                    uf: "MA",
                    ibge: "2105450"
                },
                {
                    nome: "Jenipapo dos Vieiras",
                    uf: "MA",
                    ibge: "2105476"
                },
                {
                    nome: "João Lisboa",
                    uf: "MA",
                    ibge: "2105500"
                },
                {
                    nome: "Joselândia",
                    uf: "MA",
                    ibge: "2105609"
                },
                {
                    nome: "Junco do Maranhão",
                    uf: "MA",
                    ibge: "2105658"
                },
                {
                    nome: "Lago da Pedra",
                    uf: "MA",
                    ibge: "2105708"
                },
                {
                    nome: "Lago do Junco",
                    uf: "MA",
                    ibge: "2105807"
                },
                {
                    nome: "Lago Verde",
                    uf: "MA",
                    ibge: "2105906"
                },
                {
                    nome: "Lagoa do Mato",
                    uf: "MA",
                    ibge: "2105922"
                },
                {
                    nome: "Lago dos Rodrigues",
                    uf: "MA",
                    ibge: "2105948"
                },
                {
                    nome: "Lagoa Grande do Maranhão",
                    uf: "MA",
                    ibge: "2105963"
                },
                {
                    nome: "Lajeado Novo",
                    uf: "MA",
                    ibge: "2105989"
                },
                {
                    nome: "Lima Campos",
                    uf: "MA",
                    ibge: "2106003"
                },
                {
                    nome: "Loreto",
                    uf: "MA",
                    ibge: "2106102"
                },
                {
                    nome: "Luís Domingues",
                    uf: "MA",
                    ibge: "2106201"
                },
                {
                    nome: "Magalhães de Almeida",
                    uf: "MA",
                    ibge: "2106300"
                },
                {
                    nome: "Maracaçumé",
                    uf: "MA",
                    ibge: "2106326"
                },
                {
                    nome: "Marajá do Sena",
                    uf: "MA",
                    ibge: "2106359"
                },
                {
                    nome: "Maranhãozinho",
                    uf: "MA",
                    ibge: "2106375"
                },
                {
                    nome: "Mata Roma",
                    uf: "MA",
                    ibge: "2106409"
                },
                {
                    nome: "Matinha",
                    uf: "MA",
                    ibge: "2106508"
                },
                {
                    nome: "Matões",
                    uf: "MA",
                    ibge: "2106607"
                },
                {
                    nome: "Matões do Norte",
                    uf: "MA",
                    ibge: "2106631"
                },
                {
                    nome: "Milagres do Maranhão",
                    uf: "MA",
                    ibge: "2106672"
                },
                {
                    nome: "Mirador",
                    uf: "MA",
                    ibge: "2106706"
                },
                {
                    nome: "Miranda do Norte",
                    uf: "MA",
                    ibge: "2106755"
                },
                {
                    nome: "Mirinzal",
                    uf: "MA",
                    ibge: "2106805"
                },
                {
                    nome: "Monção",
                    uf: "MA",
                    ibge: "2106904"
                },
                {
                    nome: "Montes Altos",
                    uf: "MA",
                    ibge: "2107001"
                },
                {
                    nome: "Morros",
                    uf: "MA",
                    ibge: "2107100"
                },
                {
                    nome: "Nina Rodrigues",
                    uf: "MA",
                    ibge: "2107209"
                },
                {
                    nome: "Nova Colinas",
                    uf: "MA",
                    ibge: "2107258"
                },
                {
                    nome: "Nova Iorque",
                    uf: "MA",
                    ibge: "2107308"
                },
                {
                    nome: "Nova Olinda do Maranhão",
                    uf: "MA",
                    ibge: "2107357"
                },
                {
                    nome: "Olho D'Água das Cunhãs",
                    uf: "MA",
                    ibge: "2107407"
                },
                {
                    nome: "Olinda Nova do Maranhão",
                    uf: "MA",
                    ibge: "2107456"
                },
                {
                    nome: "Paço do Lumiar",
                    uf: "MA",
                    ibge: "2107506"
                },
                {
                    nome: "Palmeirândia",
                    uf: "MA",
                    ibge: "2107605"
                },
                {
                    nome: "Paraibano",
                    uf: "MA",
                    ibge: "2107704"
                },
                {
                    nome: "Parnarama",
                    uf: "MA",
                    ibge: "2107803"
                },
                {
                    nome: "Passagem Franca",
                    uf: "MA",
                    ibge: "2107902"
                },
                {
                    nome: "Pastos Bons",
                    uf: "MA",
                    ibge: "2108009"
                },
                {
                    nome: "Paulino Neves",
                    uf: "MA",
                    ibge: "2108058"
                },
                {
                    nome: "Paulo Ramos",
                    uf: "MA",
                    ibge: "2108108"
                },
                {
                    nome: "Pedreiras",
                    uf: "MA",
                    ibge: "2108207"
                },
                {
                    nome: "Pedro do Rosário",
                    uf: "MA",
                    ibge: "2108256"
                },
                {
                    nome: "Penalva",
                    uf: "MA",
                    ibge: "2108306"
                },
                {
                    nome: "Peri Mirim",
                    uf: "MA",
                    ibge: "2108405"
                },
                {
                    nome: "Peritoró",
                    uf: "MA",
                    ibge: "2108454"
                },
                {
                    nome: "Pindaré-Mirim",
                    uf: "MA",
                    ibge: "2108504"
                },
                {
                    nome: "Pinheiro",
                    uf: "MA",
                    ibge: "2108603"
                },
                {
                    nome: "Pio XII",
                    uf: "MA",
                    ibge: "2108702"
                },
                {
                    nome: "Pirapemas",
                    uf: "MA",
                    ibge: "2108801"
                },
                {
                    nome: "Poção de Pedras",
                    uf: "MA",
                    ibge: "2108900"
                },
                {
                    nome: "Porto Franco",
                    uf: "MA",
                    ibge: "2109007"
                },
                {
                    nome: "Porto Rico do Maranhão",
                    uf: "MA",
                    ibge: "2109056"
                },
                {
                    nome: "Presidente Dutra",
                    uf: "MA",
                    ibge: "2109106"
                },
                {
                    nome: "Presidente Juscelino",
                    uf: "MA",
                    ibge: "2109205"
                },
                {
                    nome: "Presidente Médici",
                    uf: "MA",
                    ibge: "2109239"
                },
                {
                    nome: "Presidente Sarney",
                    uf: "MA",
                    ibge: "2109270"
                },
                {
                    nome: "Presidente Vargas",
                    uf: "MA",
                    ibge: "2109304"
                },
                {
                    nome: "Primeira Cruz",
                    uf: "MA",
                    ibge: "2109403"
                },
                {
                    nome: "Raposa",
                    uf: "MA",
                    ibge: "2109452"
                },
                {
                    nome: "Riachão",
                    uf: "MA",
                    ibge: "2109502"
                },
                {
                    nome: "Ribamar Fiquene",
                    uf: "MA",
                    ibge: "2109551"
                },
                {
                    nome: "Rosário",
                    uf: "MA",
                    ibge: "2109601"
                },
                {
                    nome: "Sambaíba",
                    uf: "MA",
                    ibge: "2109700"
                },
                {
                    nome: "Santa Filomena do Maranhão",
                    uf: "MA",
                    ibge: "2109759"
                },
                {
                    nome: "Santa Helena",
                    uf: "MA",
                    ibge: "2109809"
                },
                {
                    nome: "Santa Inês",
                    uf: "MA",
                    ibge: "2109908"
                },
                {
                    nome: "Santa Luzia",
                    uf: "MA",
                    ibge: "2110005"
                },
                {
                    nome: "Santa Luzia do Paruá",
                    uf: "MA",
                    ibge: "2110039"
                },
                {
                    nome: "Santa Quitéria do Maranhão",
                    uf: "MA",
                    ibge: "2110104"
                },
                {
                    nome: "Santa Rita",
                    uf: "MA",
                    ibge: "2110203"
                },
                {
                    nome: "Santana do Maranhão",
                    uf: "MA",
                    ibge: "2110237"
                },
                {
                    nome: "Santo Amaro do Maranhão",
                    uf: "MA",
                    ibge: "2110278"
                },
                {
                    nome: "Santo Antônio dos Lopes",
                    uf: "MA",
                    ibge: "2110302"
                },
                {
                    nome: "São Benedito do Rio Preto",
                    uf: "MA",
                    ibge: "2110401"
                },
                {
                    nome: "São Bento",
                    uf: "MA",
                    ibge: "2110500"
                },
                {
                    nome: "São Bernardo",
                    uf: "MA",
                    ibge: "2110609"
                },
                {
                    nome: "São Domingos do Azeitão",
                    uf: "MA",
                    ibge: "2110658"
                },
                {
                    nome: "São Domingos do Maranhão",
                    uf: "MA",
                    ibge: "2110708"
                },
                {
                    nome: "São Félix de Balsas",
                    uf: "MA",
                    ibge: "2110807"
                },
                {
                    nome: "São Francisco do Brejão",
                    uf: "MA",
                    ibge: "2110856"
                },
                {
                    nome: "São Francisco do Maranhão",
                    uf: "MA",
                    ibge: "2110906"
                },
                {
                    nome: "São João Batista",
                    uf: "MA",
                    ibge: "2111003"
                },
                {
                    nome: "São João do Carú",
                    uf: "MA",
                    ibge: "2111029"
                },
                {
                    nome: "São João do Paraíso",
                    uf: "MA",
                    ibge: "2111052"
                },
                {
                    nome: "São João do Soter",
                    uf: "MA",
                    ibge: "2111078"
                },
                {
                    nome: "São João dos Patos",
                    uf: "MA",
                    ibge: "2111102"
                },
                {
                    nome: "São José de Ribamar",
                    uf: "MA",
                    ibge: "2111201"
                },
                {
                    nome: "São José dos Basílios",
                    uf: "MA",
                    ibge: "2111250"
                },
                {
                    nome: "São Luís",
                    uf: "MA",
                    ibge: "2111300"
                },
                {
                    nome: "São Luís Gonzaga do Maranhão",
                    uf: "MA",
                    ibge: "2111409"
                },
                {
                    nome: "São Mateus do Maranhão",
                    uf: "MA",
                    ibge: "2111508"
                },
                {
                    nome: "São Pedro da Água Branca",
                    uf: "MA",
                    ibge: "2111532"
                },
                {
                    nome: "São Pedro dos Crentes",
                    uf: "MA",
                    ibge: "2111573"
                },
                {
                    nome: "São Raimundo das Mangabeiras",
                    uf: "MA",
                    ibge: "2111607"
                },
                {
                    nome: "São Raimundo do Doca Bezerra",
                    uf: "MA",
                    ibge: "2111631"
                },
                {
                    nome: "São Roberto",
                    uf: "MA",
                    ibge: "2111672"
                },
                {
                    nome: "São Vicente Ferrer",
                    uf: "MA",
                    ibge: "2111706"
                },
                {
                    nome: "Satubinha",
                    uf: "MA",
                    ibge: "2111722"
                },
                {
                    nome: "Senador Alexandre Costa",
                    uf: "MA",
                    ibge: "2111748"
                },
                {
                    nome: "Senador La Rocque",
                    uf: "MA",
                    ibge: "2111763"
                },
                {
                    nome: "Serrano do Maranhão",
                    uf: "MA",
                    ibge: "2111789"
                },
                {
                    nome: "Sítio Novo",
                    uf: "MA",
                    ibge: "2111805"
                },
                {
                    nome: "Sucupira do Norte",
                    uf: "MA",
                    ibge: "2111904"
                },
                {
                    nome: "Sucupira do Riachão",
                    uf: "MA",
                    ibge: "2111953"
                },
                {
                    nome: "Tasso Fragoso",
                    uf: "MA",
                    ibge: "2112001"
                },
                {
                    nome: "Timbiras",
                    uf: "MA",
                    ibge: "2112100"
                },
                {
                    nome: "Timon",
                    uf: "MA",
                    ibge: "2112209"
                },
                {
                    nome: "Trizidela do Vale",
                    uf: "MA",
                    ibge: "2112233"
                },
                {
                    nome: "Tufilândia",
                    uf: "MA",
                    ibge: "2112274"
                },
                {
                    nome: "Tuntum",
                    uf: "MA",
                    ibge: "2112308"
                },
                {
                    nome: "Turiaçu",
                    uf: "MA",
                    ibge: "2112407"
                },
                {
                    nome: "Turilândia",
                    uf: "MA",
                    ibge: "2112456"
                },
                {
                    nome: "Tutóia",
                    uf: "MA",
                    ibge: "2112506"
                },
                {
                    nome: "Urbano Santos",
                    uf: "MA",
                    ibge: "2112605"
                },
                {
                    nome: "Vargem Grande",
                    uf: "MA",
                    ibge: "2112704"
                },
                {
                    nome: "Viana",
                    uf: "MA",
                    ibge: "2112803"
                },
                {
                    nome: "Vila Nova dos Martírios",
                    uf: "MA",
                    ibge: "2112852"
                },
                {
                    nome: "Vitória do Mearim",
                    uf: "MA",
                    ibge: "2112902"
                },
                {
                    nome: "Vitorino Freire",
                    uf: "MA",
                    ibge: "2113009"
                },
                {
                    nome: "Zé Doca",
                    uf: "MA",
                    ibge: "2114007"
                },
                {
                    nome: "Acauã",
                    uf: "PI",
                    ibge: "2200053"
                },
                {
                    nome: "Agricolândia",
                    uf: "PI",
                    ibge: "2200103"
                },
                {
                    nome: "Água Branca",
                    uf: "PI",
                    ibge: "2200202"
                },
                {
                    nome: "Alagoinha do Piauí",
                    uf: "PI",
                    ibge: "2200251"
                },
                {
                    nome: "Alegrete do Piauí",
                    uf: "PI",
                    ibge: "2200277"
                },
                {
                    nome: "Alto Longá",
                    uf: "PI",
                    ibge: "2200301"
                },
                {
                    nome: "Altos",
                    uf: "PI",
                    ibge: "2200400"
                },
                {
                    nome: "Alvorada do Gurguéia",
                    uf: "PI",
                    ibge: "2200459"
                },
                {
                    nome: "Amarante",
                    uf: "PI",
                    ibge: "2200509"
                },
                {
                    nome: "Angical do Piauí",
                    uf: "PI",
                    ibge: "2200608"
                },
                {
                    nome: "Anísio de Abreu",
                    uf: "PI",
                    ibge: "2200707"
                },
                {
                    nome: "Antônio Almeida",
                    uf: "PI",
                    ibge: "2200806"
                },
                {
                    nome: "Aroazes",
                    uf: "PI",
                    ibge: "2200905"
                },
                {
                    nome: "Aroeiras do Itaim",
                    uf: "PI",
                    ibge: "2200954"
                },
                {
                    nome: "Arraial",
                    uf: "PI",
                    ibge: "2201002"
                },
                {
                    nome: "Assunção do Piauí",
                    uf: "PI",
                    ibge: "2201051"
                },
                {
                    nome: "Avelino Lopes",
                    uf: "PI",
                    ibge: "2201101"
                },
                {
                    nome: "Baixa Grande do Ribeiro",
                    uf: "PI",
                    ibge: "2201150"
                },
                {
                    nome: "Barra D'Alcântara",
                    uf: "PI",
                    ibge: "2201176"
                },
                {
                    nome: "Barras",
                    uf: "PI",
                    ibge: "2201200"
                },
                {
                    nome: "Barreiras do Piauí",
                    uf: "PI",
                    ibge: "2201309"
                },
                {
                    nome: "Barro Duro",
                    uf: "PI",
                    ibge: "2201408"
                },
                {
                    nome: "Batalha",
                    uf: "PI",
                    ibge: "2201507"
                },
                {
                    nome: "Bela Vista do Piauí",
                    uf: "PI",
                    ibge: "2201556"
                },
                {
                    nome: "Belém do Piauí",
                    uf: "PI",
                    ibge: "2201572"
                },
                {
                    nome: "Beneditinos",
                    uf: "PI",
                    ibge: "2201606"
                },
                {
                    nome: "Bertolínia",
                    uf: "PI",
                    ibge: "2201705"
                },
                {
                    nome: "Betânia do Piauí",
                    uf: "PI",
                    ibge: "2201739"
                },
                {
                    nome: "Boa Hora",
                    uf: "PI",
                    ibge: "2201770"
                },
                {
                    nome: "Bocaina",
                    uf: "PI",
                    ibge: "2201804"
                },
                {
                    nome: "Bom Jesus",
                    uf: "PI",
                    ibge: "2201903"
                },
                {
                    nome: "Bom Princípio do Piauí",
                    uf: "PI",
                    ibge: "2201919"
                },
                {
                    nome: "Bonfim do Piauí",
                    uf: "PI",
                    ibge: "2201929"
                },
                {
                    nome: "Boqueirão do Piauí",
                    uf: "PI",
                    ibge: "2201945"
                },
                {
                    nome: "Brasileira",
                    uf: "PI",
                    ibge: "2201960"
                },
                {
                    nome: "Brejo do Piauí",
                    uf: "PI",
                    ibge: "2201988"
                },
                {
                    nome: "Buriti dos Lopes",
                    uf: "PI",
                    ibge: "2202000"
                },
                {
                    nome: "Buriti dos Montes",
                    uf: "PI",
                    ibge: "2202026"
                },
                {
                    nome: "Cabeceiras do Piauí",
                    uf: "PI",
                    ibge: "2202059"
                },
                {
                    nome: "Cajazeiras do Piauí",
                    uf: "PI",
                    ibge: "2202075"
                },
                {
                    nome: "Cajueiro da Praia",
                    uf: "PI",
                    ibge: "2202083"
                },
                {
                    nome: "Caldeirão Grande do Piauí",
                    uf: "PI",
                    ibge: "2202091"
                },
                {
                    nome: "Campinas do Piauí",
                    uf: "PI",
                    ibge: "2202109"
                },
                {
                    nome: "Campo Alegre do Fidalgo",
                    uf: "PI",
                    ibge: "2202117"
                },
                {
                    nome: "Campo Grande do Piauí",
                    uf: "PI",
                    ibge: "2202133"
                },
                {
                    nome: "Campo Largo do Piauí",
                    uf: "PI",
                    ibge: "2202174"
                },
                {
                    nome: "Campo Maior",
                    uf: "PI",
                    ibge: "2202208"
                },
                {
                    nome: "Canavieira",
                    uf: "PI",
                    ibge: "2202251"
                },
                {
                    nome: "Canto do Buriti",
                    uf: "PI",
                    ibge: "2202307"
                },
                {
                    nome: "Capitão de Campos",
                    uf: "PI",
                    ibge: "2202406"
                },
                {
                    nome: "Capitão Gervásio Oliveira",
                    uf: "PI",
                    ibge: "2202455"
                },
                {
                    nome: "Caracol",
                    uf: "PI",
                    ibge: "2202505"
                },
                {
                    nome: "Caraúbas do Piauí",
                    uf: "PI",
                    ibge: "2202539"
                },
                {
                    nome: "Caridade do Piauí",
                    uf: "PI",
                    ibge: "2202554"
                },
                {
                    nome: "Castelo do Piauí",
                    uf: "PI",
                    ibge: "2202604"
                },
                {
                    nome: "Caxingó",
                    uf: "PI",
                    ibge: "2202653"
                },
                {
                    nome: "Cocal",
                    uf: "PI",
                    ibge: "2202703"
                },
                {
                    nome: "Cocal de Telha",
                    uf: "PI",
                    ibge: "2202711"
                },
                {
                    nome: "Cocal dos Alves",
                    uf: "PI",
                    ibge: "2202729"
                },
                {
                    nome: "Coivaras",
                    uf: "PI",
                    ibge: "2202737"
                },
                {
                    nome: "Colônia do Gurguéia",
                    uf: "PI",
                    ibge: "2202752"
                },
                {
                    nome: "Colônia do Piauí",
                    uf: "PI",
                    ibge: "2202778"
                },
                {
                    nome: "Conceição do Canindé",
                    uf: "PI",
                    ibge: "2202802"
                },
                {
                    nome: "Coronel José Dias",
                    uf: "PI",
                    ibge: "2202851"
                },
                {
                    nome: "Corrente",
                    uf: "PI",
                    ibge: "2202901"
                },
                {
                    nome: "Cristalândia do Piauí",
                    uf: "PI",
                    ibge: "2203008"
                },
                {
                    nome: "Cristino Castro",
                    uf: "PI",
                    ibge: "2203107"
                },
                {
                    nome: "Curimatá",
                    uf: "PI",
                    ibge: "2203206"
                },
                {
                    nome: "Currais",
                    uf: "PI",
                    ibge: "2203230"
                },
                {
                    nome: "Curralinhos",
                    uf: "PI",
                    ibge: "2203255"
                },
                {
                    nome: "Curral Novo do Piauí",
                    uf: "PI",
                    ibge: "2203271"
                },
                {
                    nome: "Demerval Lobão",
                    uf: "PI",
                    ibge: "2203305"
                },
                {
                    nome: "Dirceu Arcoverde",
                    uf: "PI",
                    ibge: "2203354"
                },
                {
                    nome: "Dom Expedito Lopes",
                    uf: "PI",
                    ibge: "2203404"
                },
                {
                    nome: "Domingos Mourão",
                    uf: "PI",
                    ibge: "2203420"
                },
                {
                    nome: "Dom Inocêncio",
                    uf: "PI",
                    ibge: "2203453"
                },
                {
                    nome: "Elesbão Veloso",
                    uf: "PI",
                    ibge: "2203503"
                },
                {
                    nome: "Eliseu Martins",
                    uf: "PI",
                    ibge: "2203602"
                },
                {
                    nome: "Esperantina",
                    uf: "PI",
                    ibge: "2203701"
                },
                {
                    nome: "Fartura do Piauí",
                    uf: "PI",
                    ibge: "2203750"
                },
                {
                    nome: "Flores do Piauí",
                    uf: "PI",
                    ibge: "2203800"
                },
                {
                    nome: "Floresta do Piauí",
                    uf: "PI",
                    ibge: "2203859"
                },
                {
                    nome: "Floriano",
                    uf: "PI",
                    ibge: "2203909"
                },
                {
                    nome: "Francinópolis",
                    uf: "PI",
                    ibge: "2204006"
                },
                {
                    nome: "Francisco Ayres",
                    uf: "PI",
                    ibge: "2204105"
                },
                {
                    nome: "Francisco Macedo",
                    uf: "PI",
                    ibge: "2204154"
                },
                {
                    nome: "Francisco Santos",
                    uf: "PI",
                    ibge: "2204204"
                },
                {
                    nome: "Fronteiras",
                    uf: "PI",
                    ibge: "2204303"
                },
                {
                    nome: "Geminiano",
                    uf: "PI",
                    ibge: "2204352"
                },
                {
                    nome: "Gilbués",
                    uf: "PI",
                    ibge: "2204402"
                },
                {
                    nome: "Guadalupe",
                    uf: "PI",
                    ibge: "2204501"
                },
                {
                    nome: "Guaribas",
                    uf: "PI",
                    ibge: "2204550"
                },
                {
                    nome: "Hugo Napoleão",
                    uf: "PI",
                    ibge: "2204600"
                },
                {
                    nome: "Ilha Grande",
                    uf: "PI",
                    ibge: "2204659"
                },
                {
                    nome: "Inhuma",
                    uf: "PI",
                    ibge: "2204709"
                },
                {
                    nome: "Ipiranga do Piauí",
                    uf: "PI",
                    ibge: "2204808"
                },
                {
                    nome: "Isaías Coelho",
                    uf: "PI",
                    ibge: "2204907"
                },
                {
                    nome: "Itainópolis",
                    uf: "PI",
                    ibge: "2205003"
                },
                {
                    nome: "Itaueira",
                    uf: "PI",
                    ibge: "2205102"
                },
                {
                    nome: "Jacobina do Piauí",
                    uf: "PI",
                    ibge: "2205151"
                },
                {
                    nome: "Jaicós",
                    uf: "PI",
                    ibge: "2205201"
                },
                {
                    nome: "Jardim do Mulato",
                    uf: "PI",
                    ibge: "2205250"
                },
                {
                    nome: "Jatobá do Piauí",
                    uf: "PI",
                    ibge: "2205276"
                },
                {
                    nome: "Jerumenha",
                    uf: "PI",
                    ibge: "2205300"
                },
                {
                    nome: "João Costa",
                    uf: "PI",
                    ibge: "2205359"
                },
                {
                    nome: "Joaquim Pires",
                    uf: "PI",
                    ibge: "2205409"
                },
                {
                    nome: "Joca Marques",
                    uf: "PI",
                    ibge: "2205458"
                },
                {
                    nome: "José de Freitas",
                    uf: "PI",
                    ibge: "2205508"
                },
                {
                    nome: "Juazeiro do Piauí",
                    uf: "PI",
                    ibge: "2205516"
                },
                {
                    nome: "Júlio Borges",
                    uf: "PI",
                    ibge: "2205524"
                },
                {
                    nome: "Jurema",
                    uf: "PI",
                    ibge: "2205532"
                },
                {
                    nome: "Lagoinha do Piauí",
                    uf: "PI",
                    ibge: "2205540"
                },
                {
                    nome: "Lagoa Alegre",
                    uf: "PI",
                    ibge: "2205557"
                },
                {
                    nome: "Lagoa do Barro do Piauí",
                    uf: "PI",
                    ibge: "2205565"
                },
                {
                    nome: "Lagoa de São Francisco",
                    uf: "PI",
                    ibge: "2205573"
                },
                {
                    nome: "Lagoa do Piauí",
                    uf: "PI",
                    ibge: "2205581"
                },
                {
                    nome: "Lagoa do Sítio",
                    uf: "PI",
                    ibge: "2205599"
                },
                {
                    nome: "Landri Sales",
                    uf: "PI",
                    ibge: "2205607"
                },
                {
                    nome: "Luís Correia",
                    uf: "PI",
                    ibge: "2205706"
                },
                {
                    nome: "Luzilândia",
                    uf: "PI",
                    ibge: "2205805"
                },
                {
                    nome: "Madeiro",
                    uf: "PI",
                    ibge: "2205854"
                },
                {
                    nome: "Manoel Emídio",
                    uf: "PI",
                    ibge: "2205904"
                },
                {
                    nome: "Marcolândia",
                    uf: "PI",
                    ibge: "2205953"
                },
                {
                    nome: "Marcos Parente",
                    uf: "PI",
                    ibge: "2206001"
                },
                {
                    nome: "Massapê do Piauí",
                    uf: "PI",
                    ibge: "2206050"
                },
                {
                    nome: "Matias Olímpio",
                    uf: "PI",
                    ibge: "2206100"
                },
                {
                    nome: "Miguel Alves",
                    uf: "PI",
                    ibge: "2206209"
                },
                {
                    nome: "Miguel Leão",
                    uf: "PI",
                    ibge: "2206308"
                },
                {
                    nome: "Milton Brandão",
                    uf: "PI",
                    ibge: "2206357"
                },
                {
                    nome: "Monsenhor Gil",
                    uf: "PI",
                    ibge: "2206407"
                },
                {
                    nome: "Monsenhor Hipólito",
                    uf: "PI",
                    ibge: "2206506"
                },
                {
                    nome: "Monte Alegre do Piauí",
                    uf: "PI",
                    ibge: "2206605"
                },
                {
                    nome: "Morro Cabeça no Tempo",
                    uf: "PI",
                    ibge: "2206654"
                },
                {
                    nome: "Morro do Chapéu do Piauí",
                    uf: "PI",
                    ibge: "2206670"
                },
                {
                    nome: "Murici dos Portelas",
                    uf: "PI",
                    ibge: "2206696"
                },
                {
                    nome: "Nazaré do Piauí",
                    uf: "PI",
                    ibge: "2206704"
                },
                {
                    nome: "Nazária",
                    uf: "PI",
                    ibge: "2206720"
                },
                {
                    nome: "Nossa Senhora de Nazaré",
                    uf: "PI",
                    ibge: "2206753"
                },
                {
                    nome: "Nossa Senhora dos Remédios",
                    uf: "PI",
                    ibge: "2206803"
                },
                {
                    nome: "Novo Oriente do Piauí",
                    uf: "PI",
                    ibge: "2206902"
                },
                {
                    nome: "Novo Santo Antônio",
                    uf: "PI",
                    ibge: "2206951"
                },
                {
                    nome: "Oeiras",
                    uf: "PI",
                    ibge: "2207009"
                },
                {
                    nome: "Olho D'Água do Piauí",
                    uf: "PI",
                    ibge: "2207108"
                },
                {
                    nome: "Padre Marcos",
                    uf: "PI",
                    ibge: "2207207"
                },
                {
                    nome: "Paes Landim",
                    uf: "PI",
                    ibge: "2207306"
                },
                {
                    nome: "Pajeú do Piauí",
                    uf: "PI",
                    ibge: "2207355"
                },
                {
                    nome: "Palmeira do Piauí",
                    uf: "PI",
                    ibge: "2207405"
                },
                {
                    nome: "Palmeirais",
                    uf: "PI",
                    ibge: "2207504"
                },
                {
                    nome: "Paquetá",
                    uf: "PI",
                    ibge: "2207553"
                },
                {
                    nome: "Parnaguá",
                    uf: "PI",
                    ibge: "2207603"
                },
                {
                    nome: "Parnaíba",
                    uf: "PI",
                    ibge: "2207702"
                },
                {
                    nome: "Passagem Franca do Piauí",
                    uf: "PI",
                    ibge: "2207751"
                },
                {
                    nome: "Patos do Piauí",
                    uf: "PI",
                    ibge: "2207777"
                },
                {
                    nome: "Pau D'Arco do Piauí",
                    uf: "PI",
                    ibge: "2207793"
                },
                {
                    nome: "Paulistana",
                    uf: "PI",
                    ibge: "2207801"
                },
                {
                    nome: "Pavussu",
                    uf: "PI",
                    ibge: "2207850"
                },
                {
                    nome: "Pedro II",
                    uf: "PI",
                    ibge: "2207900"
                },
                {
                    nome: "Pedro Laurentino",
                    uf: "PI",
                    ibge: "2207934"
                },
                {
                    nome: "Nova Santa Rita",
                    uf: "PI",
                    ibge: "2207959"
                },
                {
                    nome: "Picos",
                    uf: "PI",
                    ibge: "2208007"
                },
                {
                    nome: "Pimenteiras",
                    uf: "PI",
                    ibge: "2208106"
                },
                {
                    nome: "Pio IX",
                    uf: "PI",
                    ibge: "2208205"
                },
                {
                    nome: "Piracuruca",
                    uf: "PI",
                    ibge: "2208304"
                },
                {
                    nome: "Piripiri",
                    uf: "PI",
                    ibge: "2208403"
                },
                {
                    nome: "Porto",
                    uf: "PI",
                    ibge: "2208502"
                },
                {
                    nome: "Porto Alegre do Piauí",
                    uf: "PI",
                    ibge: "2208551"
                },
                {
                    nome: "Prata do Piauí",
                    uf: "PI",
                    ibge: "2208601"
                },
                {
                    nome: "Queimada Nova",
                    uf: "PI",
                    ibge: "2208650"
                },
                {
                    nome: "Redenção do Gurguéia",
                    uf: "PI",
                    ibge: "2208700"
                },
                {
                    nome: "Regeneração",
                    uf: "PI",
                    ibge: "2208809"
                },
                {
                    nome: "Riacho Frio",
                    uf: "PI",
                    ibge: "2208858"
                },
                {
                    nome: "Ribeira do Piauí",
                    uf: "PI",
                    ibge: "2208874"
                },
                {
                    nome: "Ribeiro Gonçalves",
                    uf: "PI",
                    ibge: "2208908"
                },
                {
                    nome: "Rio Grande do Piauí",
                    uf: "PI",
                    ibge: "2209005"
                },
                {
                    nome: "Santa Cruz do Piauí",
                    uf: "PI",
                    ibge: "2209104"
                },
                {
                    nome: "Santa Cruz dos Milagres",
                    uf: "PI",
                    ibge: "2209153"
                },
                {
                    nome: "Santa Filomena",
                    uf: "PI",
                    ibge: "2209203"
                },
                {
                    nome: "Santa Luz",
                    uf: "PI",
                    ibge: "2209302"
                },
                {
                    nome: "Santana do Piauí",
                    uf: "PI",
                    ibge: "2209351"
                },
                {
                    nome: "Santa Rosa do Piauí",
                    uf: "PI",
                    ibge: "2209377"
                },
                {
                    nome: "Santo Antônio de Lisboa",
                    uf: "PI",
                    ibge: "2209401"
                },
                {
                    nome: "Santo Antônio dos Milagres",
                    uf: "PI",
                    ibge: "2209450"
                },
                {
                    nome: "Santo Inácio do Piauí",
                    uf: "PI",
                    ibge: "2209500"
                },
                {
                    nome: "São Braz do Piauí",
                    uf: "PI",
                    ibge: "2209559"
                },
                {
                    nome: "São Félix do Piauí",
                    uf: "PI",
                    ibge: "2209609"
                },
                {
                    nome: "São Francisco de Assis do Piauí",
                    uf: "PI",
                    ibge: "2209658"
                },
                {
                    nome: "São Francisco do Piauí",
                    uf: "PI",
                    ibge: "2209708"
                },
                {
                    nome: "São Gonçalo do Gurguéia",
                    uf: "PI",
                    ibge: "2209757"
                },
                {
                    nome: "São Gonçalo do Piauí",
                    uf: "PI",
                    ibge: "2209807"
                },
                {
                    nome: "São João da Canabrava",
                    uf: "PI",
                    ibge: "2209856"
                },
                {
                    nome: "São João da Fronteira",
                    uf: "PI",
                    ibge: "2209872"
                },
                {
                    nome: "São João da Serra",
                    uf: "PI",
                    ibge: "2209906"
                },
                {
                    nome: "São João da Varjota",
                    uf: "PI",
                    ibge: "2209955"
                },
                {
                    nome: "São João do Arraial",
                    uf: "PI",
                    ibge: "2209971"
                },
                {
                    nome: "São João do Piauí",
                    uf: "PI",
                    ibge: "2210003"
                },
                {
                    nome: "São José do Divino",
                    uf: "PI",
                    ibge: "2210052"
                },
                {
                    nome: "São José do Peixe",
                    uf: "PI",
                    ibge: "2210102"
                },
                {
                    nome: "São José do Piauí",
                    uf: "PI",
                    ibge: "2210201"
                },
                {
                    nome: "São Julião",
                    uf: "PI",
                    ibge: "2210300"
                },
                {
                    nome: "São Lourenço do Piauí",
                    uf: "PI",
                    ibge: "2210359"
                },
                {
                    nome: "São Luis do Piauí",
                    uf: "PI",
                    ibge: "2210375"
                },
                {
                    nome: "São Miguel da Baixa Grande",
                    uf: "PI",
                    ibge: "2210383"
                },
                {
                    nome: "São Miguel do Fidalgo",
                    uf: "PI",
                    ibge: "2210391"
                },
                {
                    nome: "São Miguel do Tapuio",
                    uf: "PI",
                    ibge: "2210409"
                },
                {
                    nome: "São Pedro do Piauí",
                    uf: "PI",
                    ibge: "2210508"
                },
                {
                    nome: "São Raimundo Nonato",
                    uf: "PI",
                    ibge: "2210607"
                },
                {
                    nome: "Sebastião Barros",
                    uf: "PI",
                    ibge: "2210623"
                },
                {
                    nome: "Sebastião Leal",
                    uf: "PI",
                    ibge: "2210631"
                },
                {
                    nome: "Sigefredo Pacheco",
                    uf: "PI",
                    ibge: "2210656"
                },
                {
                    nome: "Simões",
                    uf: "PI",
                    ibge: "2210706"
                },
                {
                    nome: "Simplício Mendes",
                    uf: "PI",
                    ibge: "2210805"
                },
                {
                    nome: "Socorro do Piauí",
                    uf: "PI",
                    ibge: "2210904"
                },
                {
                    nome: "Sussuapara",
                    uf: "PI",
                    ibge: "2210938"
                },
                {
                    nome: "Tamboril do Piauí",
                    uf: "PI",
                    ibge: "2210953"
                },
                {
                    nome: "Tanque do Piauí",
                    uf: "PI",
                    ibge: "2210979"
                },
                {
                    nome: "Teresina",
                    uf: "PI",
                    ibge: "2211001"
                },
                {
                    nome: "União",
                    uf: "PI",
                    ibge: "2211100"
                },
                {
                    nome: "Uruçuí",
                    uf: "PI",
                    ibge: "2211209"
                },
                {
                    nome: "Valença do Piauí",
                    uf: "PI",
                    ibge: "2211308"
                },
                {
                    nome: "Várzea Branca",
                    uf: "PI",
                    ibge: "2211357"
                },
                {
                    nome: "Várzea Grande",
                    uf: "PI",
                    ibge: "2211407"
                },
                {
                    nome: "Vera Mendes",
                    uf: "PI",
                    ibge: "2211506"
                },
                {
                    nome: "Vila Nova do Piauí",
                    uf: "PI",
                    ibge: "2211605"
                },
                {
                    nome: "Wall Ferraz",
                    uf: "PI",
                    ibge: "2211704"
                },
                {
                    nome: "Abaiara",
                    uf: "CE",
                    ibge: "2300101"
                },
                {
                    nome: "Acarape",
                    uf: "CE",
                    ibge: "2300150"
                },
                {
                    nome: "Acaraú",
                    uf: "CE",
                    ibge: "2300200"
                },
                {
                    nome: "Acopiara",
                    uf: "CE",
                    ibge: "2300309"
                },
                {
                    nome: "Aiuaba",
                    uf: "CE",
                    ibge: "2300408"
                },
                {
                    nome: "Alcântaras",
                    uf: "CE",
                    ibge: "2300507"
                },
                {
                    nome: "Altaneira",
                    uf: "CE",
                    ibge: "2300606"
                },
                {
                    nome: "Alto Santo",
                    uf: "CE",
                    ibge: "2300705"
                },
                {
                    nome: "Amontada",
                    uf: "CE",
                    ibge: "2300754"
                },
                {
                    nome: "Antonina do Norte",
                    uf: "CE",
                    ibge: "2300804"
                },
                {
                    nome: "Apuiarés",
                    uf: "CE",
                    ibge: "2300903"
                },
                {
                    nome: "Aquiraz",
                    uf: "CE",
                    ibge: "2301000"
                },
                {
                    nome: "Aracati",
                    uf: "CE",
                    ibge: "2301109"
                },
                {
                    nome: "Aracoiaba",
                    uf: "CE",
                    ibge: "2301208"
                },
                {
                    nome: "Ararendá",
                    uf: "CE",
                    ibge: "2301257"
                },
                {
                    nome: "Araripe",
                    uf: "CE",
                    ibge: "2301307"
                },
                {
                    nome: "Aratuba",
                    uf: "CE",
                    ibge: "2301406"
                },
                {
                    nome: "Arneiroz",
                    uf: "CE",
                    ibge: "2301505"
                },
                {
                    nome: "Assaré",
                    uf: "CE",
                    ibge: "2301604"
                },
                {
                    nome: "Aurora",
                    uf: "CE",
                    ibge: "2301703"
                },
                {
                    nome: "Baixio",
                    uf: "CE",
                    ibge: "2301802"
                },
                {
                    nome: "Banabuiú",
                    uf: "CE",
                    ibge: "2301851"
                },
                {
                    nome: "Barbalha",
                    uf: "CE",
                    ibge: "2301901"
                },
                {
                    nome: "Barreira",
                    uf: "CE",
                    ibge: "2301950"
                },
                {
                    nome: "Barro",
                    uf: "CE",
                    ibge: "2302008"
                },
                {
                    nome: "Barroquinha",
                    uf: "CE",
                    ibge: "2302057"
                },
                {
                    nome: "Baturité",
                    uf: "CE",
                    ibge: "2302107"
                },
                {
                    nome: "Beberibe",
                    uf: "CE",
                    ibge: "2302206"
                },
                {
                    nome: "Bela Cruz",
                    uf: "CE",
                    ibge: "2302305"
                },
                {
                    nome: "Boa Viagem",
                    uf: "CE",
                    ibge: "2302404"
                },
                {
                    nome: "Brejo Santo",
                    uf: "CE",
                    ibge: "2302503"
                },
                {
                    nome: "Camocim",
                    uf: "CE",
                    ibge: "2302602"
                },
                {
                    nome: "Campos Sales",
                    uf: "CE",
                    ibge: "2302701"
                },
                {
                    nome: "Canindé",
                    uf: "CE",
                    ibge: "2302800"
                },
                {
                    nome: "Capistrano",
                    uf: "CE",
                    ibge: "2302909"
                },
                {
                    nome: "Caridade",
                    uf: "CE",
                    ibge: "2303006"
                },
                {
                    nome: "Cariré",
                    uf: "CE",
                    ibge: "2303105"
                },
                {
                    nome: "Caririaçu",
                    uf: "CE",
                    ibge: "2303204"
                },
                {
                    nome: "Cariús",
                    uf: "CE",
                    ibge: "2303303"
                },
                {
                    nome: "Carnaubal",
                    uf: "CE",
                    ibge: "2303402"
                },
                {
                    nome: "Cascavel",
                    uf: "CE",
                    ibge: "2303501"
                },
                {
                    nome: "Catarina",
                    uf: "CE",
                    ibge: "2303600"
                },
                {
                    nome: "Catunda",
                    uf: "CE",
                    ibge: "2303659"
                },
                {
                    nome: "Caucaia",
                    uf: "CE",
                    ibge: "2303709"
                },
                {
                    nome: "Cedro",
                    uf: "CE",
                    ibge: "2303808"
                },
                {
                    nome: "Chaval",
                    uf: "CE",
                    ibge: "2303907"
                },
                {
                    nome: "Choró",
                    uf: "CE",
                    ibge: "2303931"
                },
                {
                    nome: "Chorozinho",
                    uf: "CE",
                    ibge: "2303956"
                },
                {
                    nome: "Coreaú",
                    uf: "CE",
                    ibge: "2304004"
                },
                {
                    nome: "Crateús",
                    uf: "CE",
                    ibge: "2304103"
                },
                {
                    nome: "Crato",
                    uf: "CE",
                    ibge: "2304202"
                },
                {
                    nome: "Croatá",
                    uf: "CE",
                    ibge: "2304236"
                },
                {
                    nome: "Cruz",
                    uf: "CE",
                    ibge: "2304251"
                },
                {
                    nome: "Deputado Irapuan Pinheiro",
                    uf: "CE",
                    ibge: "2304269"
                },
                {
                    nome: "Ererê",
                    uf: "CE",
                    ibge: "2304277"
                },
                {
                    nome: "Eusébio",
                    uf: "CE",
                    ibge: "2304285"
                },
                {
                    nome: "Farias Brito",
                    uf: "CE",
                    ibge: "2304301"
                },
                {
                    nome: "Forquilha",
                    uf: "CE",
                    ibge: "2304350"
                },
                {
                    nome: "Fortaleza",
                    uf: "CE",
                    ibge: "2304400"
                },
                {
                    nome: "Fortim",
                    uf: "CE",
                    ibge: "2304459"
                },
                {
                    nome: "Frecheirinha",
                    uf: "CE",
                    ibge: "2304509"
                },
                {
                    nome: "General Sampaio",
                    uf: "CE",
                    ibge: "2304608"
                },
                {
                    nome: "Graça",
                    uf: "CE",
                    ibge: "2304657"
                },
                {
                    nome: "Granja",
                    uf: "CE",
                    ibge: "2304707"
                },
                {
                    nome: "Granjeiro",
                    uf: "CE",
                    ibge: "2304806"
                },
                {
                    nome: "Groaíras",
                    uf: "CE",
                    ibge: "2304905"
                },
                {
                    nome: "Guaiúba",
                    uf: "CE",
                    ibge: "2304954"
                },
                {
                    nome: "Guaraciaba do Norte",
                    uf: "CE",
                    ibge: "2305001"
                },
                {
                    nome: "Guaramiranga",
                    uf: "CE",
                    ibge: "2305100"
                },
                {
                    nome: "Hidrolândia",
                    uf: "CE",
                    ibge: "2305209"
                },
                {
                    nome: "Horizonte",
                    uf: "CE",
                    ibge: "2305233"
                },
                {
                    nome: "Ibaretama",
                    uf: "CE",
                    ibge: "2305266"
                },
                {
                    nome: "Ibiapina",
                    uf: "CE",
                    ibge: "2305308"
                },
                {
                    nome: "Ibicuitinga",
                    uf: "CE",
                    ibge: "2305332"
                },
                {
                    nome: "Icapuí",
                    uf: "CE",
                    ibge: "2305357"
                },
                {
                    nome: "Icó",
                    uf: "CE",
                    ibge: "2305407"
                },
                {
                    nome: "Iguatu",
                    uf: "CE",
                    ibge: "2305506"
                },
                {
                    nome: "Independência",
                    uf: "CE",
                    ibge: "2305605"
                },
                {
                    nome: "Ipaporanga",
                    uf: "CE",
                    ibge: "2305654"
                },
                {
                    nome: "Ipaumirim",
                    uf: "CE",
                    ibge: "2305704"
                },
                {
                    nome: "Ipu",
                    uf: "CE",
                    ibge: "2305803"
                },
                {
                    nome: "Ipueiras",
                    uf: "CE",
                    ibge: "2305902"
                },
                {
                    nome: "Iracema",
                    uf: "CE",
                    ibge: "2306009"
                },
                {
                    nome: "Irauçuba",
                    uf: "CE",
                    ibge: "2306108"
                },
                {
                    nome: "Itaiçaba",
                    uf: "CE",
                    ibge: "2306207"
                },
                {
                    nome: "Itaitinga",
                    uf: "CE",
                    ibge: "2306256"
                },
                {
                    nome: "Itapagé",
                    uf: "CE",
                    ibge: "2306306"
                },
                {
                    nome: "Itapipoca",
                    uf: "CE",
                    ibge: "2306405"
                },
                {
                    nome: "Itapiúna",
                    uf: "CE",
                    ibge: "2306504"
                },
                {
                    nome: "Itarema",
                    uf: "CE",
                    ibge: "2306553"
                },
                {
                    nome: "Itatira",
                    uf: "CE",
                    ibge: "2306603"
                },
                {
                    nome: "Jaguaretama",
                    uf: "CE",
                    ibge: "2306702"
                },
                {
                    nome: "Jaguaribara",
                    uf: "CE",
                    ibge: "2306801"
                },
                {
                    nome: "Jaguaribe",
                    uf: "CE",
                    ibge: "2306900"
                },
                {
                    nome: "Jaguaruana",
                    uf: "CE",
                    ibge: "2307007"
                },
                {
                    nome: "Jardim",
                    uf: "CE",
                    ibge: "2307106"
                },
                {
                    nome: "Jati",
                    uf: "CE",
                    ibge: "2307205"
                },
                {
                    nome: "Jijoca de Jericoacoara",
                    uf: "CE",
                    ibge: "2307254"
                },
                {
                    nome: "Juazeiro do Norte",
                    uf: "CE",
                    ibge: "2307304"
                },
                {
                    nome: "Jucás",
                    uf: "CE",
                    ibge: "2307403"
                },
                {
                    nome: "Lavras da Mangabeira",
                    uf: "CE",
                    ibge: "2307502"
                },
                {
                    nome: "Limoeiro do Norte",
                    uf: "CE",
                    ibge: "2307601"
                },
                {
                    nome: "Madalena",
                    uf: "CE",
                    ibge: "2307635"
                },
                {
                    nome: "Maracanaú",
                    uf: "CE",
                    ibge: "2307650"
                },
                {
                    nome: "Maranguape",
                    uf: "CE",
                    ibge: "2307700"
                },
                {
                    nome: "Marco",
                    uf: "CE",
                    ibge: "2307809"
                },
                {
                    nome: "Martinópole",
                    uf: "CE",
                    ibge: "2307908"
                },
                {
                    nome: "Massapê",
                    uf: "CE",
                    ibge: "2308005"
                },
                {
                    nome: "Mauriti",
                    uf: "CE",
                    ibge: "2308104"
                },
                {
                    nome: "Meruoca",
                    uf: "CE",
                    ibge: "2308203"
                },
                {
                    nome: "Milagres",
                    uf: "CE",
                    ibge: "2308302"
                },
                {
                    nome: "Milhã",
                    uf: "CE",
                    ibge: "2308351"
                },
                {
                    nome: "Miraíma",
                    uf: "CE",
                    ibge: "2308377"
                },
                {
                    nome: "Missão Velha",
                    uf: "CE",
                    ibge: "2308401"
                },
                {
                    nome: "Mombaça",
                    uf: "CE",
                    ibge: "2308500"
                },
                {
                    nome: "Monsenhor Tabosa",
                    uf: "CE",
                    ibge: "2308609"
                },
                {
                    nome: "Morada Nova",
                    uf: "CE",
                    ibge: "2308708"
                },
                {
                    nome: "Moraújo",
                    uf: "CE",
                    ibge: "2308807"
                },
                {
                    nome: "Morrinhos",
                    uf: "CE",
                    ibge: "2308906"
                },
                {
                    nome: "Mucambo",
                    uf: "CE",
                    ibge: "2309003"
                },
                {
                    nome: "Mulungu",
                    uf: "CE",
                    ibge: "2309102"
                },
                {
                    nome: "Nova Olinda",
                    uf: "CE",
                    ibge: "2309201"
                },
                {
                    nome: "Nova Russas",
                    uf: "CE",
                    ibge: "2309300"
                },
                {
                    nome: "Novo Oriente",
                    uf: "CE",
                    ibge: "2309409"
                },
                {
                    nome: "Ocara",
                    uf: "CE",
                    ibge: "2309458"
                },
                {
                    nome: "Orós",
                    uf: "CE",
                    ibge: "2309508"
                },
                {
                    nome: "Pacajus",
                    uf: "CE",
                    ibge: "2309607"
                },
                {
                    nome: "Pacatuba",
                    uf: "CE",
                    ibge: "2309706"
                },
                {
                    nome: "Pacoti",
                    uf: "CE",
                    ibge: "2309805"
                },
                {
                    nome: "Pacujá",
                    uf: "CE",
                    ibge: "2309904"
                },
                {
                    nome: "Palhano",
                    uf: "CE",
                    ibge: "2310001"
                },
                {
                    nome: "Palmácia",
                    uf: "CE",
                    ibge: "2310100"
                },
                {
                    nome: "Paracuru",
                    uf: "CE",
                    ibge: "2310209"
                },
                {
                    nome: "Paraipaba",
                    uf: "CE",
                    ibge: "2310258"
                },
                {
                    nome: "Parambu",
                    uf: "CE",
                    ibge: "2310308"
                },
                {
                    nome: "Paramoti",
                    uf: "CE",
                    ibge: "2310407"
                },
                {
                    nome: "Pedra Branca",
                    uf: "CE",
                    ibge: "2310506"
                },
                {
                    nome: "Penaforte",
                    uf: "CE",
                    ibge: "2310605"
                },
                {
                    nome: "Pentecoste",
                    uf: "CE",
                    ibge: "2310704"
                },
                {
                    nome: "Pereiro",
                    uf: "CE",
                    ibge: "2310803"
                },
                {
                    nome: "Pindoretama",
                    uf: "CE",
                    ibge: "2310852"
                },
                {
                    nome: "Piquet Carneiro",
                    uf: "CE",
                    ibge: "2310902"
                },
                {
                    nome: "Pires Ferreira",
                    uf: "CE",
                    ibge: "2310951"
                },
                {
                    nome: "Poranga",
                    uf: "CE",
                    ibge: "2311009"
                },
                {
                    nome: "Porteiras",
                    uf: "CE",
                    ibge: "2311108"
                },
                {
                    nome: "Potengi",
                    uf: "CE",
                    ibge: "2311207"
                },
                {
                    nome: "Potiretama",
                    uf: "CE",
                    ibge: "2311231"
                },
                {
                    nome: "Quiterianópolis",
                    uf: "CE",
                    ibge: "2311264"
                },
                {
                    nome: "Quixadá",
                    uf: "CE",
                    ibge: "2311306"
                },
                {
                    nome: "Quixelô",
                    uf: "CE",
                    ibge: "2311355"
                },
                {
                    nome: "Quixeramobim",
                    uf: "CE",
                    ibge: "2311405"
                },
                {
                    nome: "Quixeré",
                    uf: "CE",
                    ibge: "2311504"
                },
                {
                    nome: "Redenção",
                    uf: "CE",
                    ibge: "2311603"
                },
                {
                    nome: "Reriutaba",
                    uf: "CE",
                    ibge: "2311702"
                },
                {
                    nome: "Russas",
                    uf: "CE",
                    ibge: "2311801"
                },
                {
                    nome: "Saboeiro",
                    uf: "CE",
                    ibge: "2311900"
                },
                {
                    nome: "Salitre",
                    uf: "CE",
                    ibge: "2311959"
                },
                {
                    nome: "Santana do Acaraú",
                    uf: "CE",
                    ibge: "2312007"
                },
                {
                    nome: "Santana do Cariri",
                    uf: "CE",
                    ibge: "2312106"
                },
                {
                    nome: "Santa Quitéria",
                    uf: "CE",
                    ibge: "2312205"
                },
                {
                    nome: "São Benedito",
                    uf: "CE",
                    ibge: "2312304"
                },
                {
                    nome: "São Gonçalo do Amarante",
                    uf: "CE",
                    ibge: "2312403"
                },
                {
                    nome: "São João do Jaguaribe",
                    uf: "CE",
                    ibge: "2312502"
                },
                {
                    nome: "São Luís do Curu",
                    uf: "CE",
                    ibge: "2312601"
                },
                {
                    nome: "Senador Pompeu",
                    uf: "CE",
                    ibge: "2312700"
                },
                {
                    nome: "Senador Sá",
                    uf: "CE",
                    ibge: "2312809"
                },
                {
                    nome: "Sobral",
                    uf: "CE",
                    ibge: "2312908"
                },
                {
                    nome: "Solonópole",
                    uf: "CE",
                    ibge: "2313005"
                },
                {
                    nome: "Tabuleiro do Norte",
                    uf: "CE",
                    ibge: "2313104"
                },
                {
                    nome: "Tamboril",
                    uf: "CE",
                    ibge: "2313203"
                },
                {
                    nome: "Tarrafas",
                    uf: "CE",
                    ibge: "2313252"
                },
                {
                    nome: "Tauá",
                    uf: "CE",
                    ibge: "2313302"
                },
                {
                    nome: "Tejuçuoca",
                    uf: "CE",
                    ibge: "2313351"
                },
                {
                    nome: "Tianguá",
                    uf: "CE",
                    ibge: "2313401"
                },
                {
                    nome: "Trairi",
                    uf: "CE",
                    ibge: "2313500"
                },
                {
                    nome: "Tururu",
                    uf: "CE",
                    ibge: "2313559"
                },
                {
                    nome: "Ubajara",
                    uf: "CE",
                    ibge: "2313609"
                },
                {
                    nome: "Umari",
                    uf: "CE",
                    ibge: "2313708"
                },
                {
                    nome: "Umirim",
                    uf: "CE",
                    ibge: "2313757"
                },
                {
                    nome: "Uruburetama",
                    uf: "CE",
                    ibge: "2313807"
                },
                {
                    nome: "Uruoca",
                    uf: "CE",
                    ibge: "2313906"
                },
                {
                    nome: "Varjota",
                    uf: "CE",
                    ibge: "2313955"
                },
                {
                    nome: "Várzea Alegre",
                    uf: "CE",
                    ibge: "2314003"
                },
                {
                    nome: "Viçosa do Ceará",
                    uf: "CE",
                    ibge: "2314102"
                },
                {
                    nome: "Acari",
                    uf: "RN",
                    ibge: "2400109"
                },
                {
                    nome: "Açu",
                    uf: "RN",
                    ibge: "2400208"
                },
                {
                    nome: "Afonso Bezerra",
                    uf: "RN",
                    ibge: "2400307"
                },
                {
                    nome: "Água Nova",
                    uf: "RN",
                    ibge: "2400406"
                },
                {
                    nome: "Alexandria",
                    uf: "RN",
                    ibge: "2400505"
                },
                {
                    nome: "Almino Afonso",
                    uf: "RN",
                    ibge: "2400604"
                },
                {
                    nome: "Alto do Rodrigues",
                    uf: "RN",
                    ibge: "2400703"
                },
                {
                    nome: "Angicos",
                    uf: "RN",
                    ibge: "2400802"
                },
                {
                    nome: "Antônio Martins",
                    uf: "RN",
                    ibge: "2400901"
                },
                {
                    nome: "Apodi",
                    uf: "RN",
                    ibge: "2401008"
                },
                {
                    nome: "Areia Branca",
                    uf: "RN",
                    ibge: "2401107"
                },
                {
                    nome: "Arês",
                    uf: "RN",
                    ibge: "2401206"
                },
                {
                    nome: "Augusto Severo",
                    uf: "RN",
                    ibge: "2401305"
                },
                {
                    nome: "Baía Formosa",
                    uf: "RN",
                    ibge: "2401404"
                },
                {
                    nome: "Baraúna",
                    uf: "RN",
                    ibge: "2401453"
                },
                {
                    nome: "Barcelona",
                    uf: "RN",
                    ibge: "2401503"
                },
                {
                    nome: "Bento Fernandes",
                    uf: "RN",
                    ibge: "2401602"
                },
                {
                    nome: "Bodó",
                    uf: "RN",
                    ibge: "2401651"
                },
                {
                    nome: "Bom Jesus",
                    uf: "RN",
                    ibge: "2401701"
                },
                {
                    nome: "Brejinho",
                    uf: "RN",
                    ibge: "2401800"
                },
                {
                    nome: "Caiçara do Norte",
                    uf: "RN",
                    ibge: "2401859"
                },
                {
                    nome: "Caiçara do Rio do Vento",
                    uf: "RN",
                    ibge: "2401909"
                },
                {
                    nome: "Caicó",
                    uf: "RN",
                    ibge: "2402006"
                },
                {
                    nome: "Campo Redondo",
                    uf: "RN",
                    ibge: "2402105"
                },
                {
                    nome: "Canguaretama",
                    uf: "RN",
                    ibge: "2402204"
                },
                {
                    nome: "Caraúbas",
                    uf: "RN",
                    ibge: "2402303"
                },
                {
                    nome: "Carnaúba dos Dantas",
                    uf: "RN",
                    ibge: "2402402"
                },
                {
                    nome: "Carnaubais",
                    uf: "RN",
                    ibge: "2402501"
                },
                {
                    nome: "Ceará-Mirim",
                    uf: "RN",
                    ibge: "2402600"
                },
                {
                    nome: "Cerro Corá",
                    uf: "RN",
                    ibge: "2402709"
                },
                {
                    nome: "Coronel Ezequiel",
                    uf: "RN",
                    ibge: "2402808"
                },
                {
                    nome: "Coronel João Pessoa",
                    uf: "RN",
                    ibge: "2402907"
                },
                {
                    nome: "Cruzeta",
                    uf: "RN",
                    ibge: "2403004"
                },
                {
                    nome: "Currais Novos",
                    uf: "RN",
                    ibge: "2403103"
                },
                {
                    nome: "Doutor Severiano",
                    uf: "RN",
                    ibge: "2403202"
                },
                {
                    nome: "Parnamirim",
                    uf: "RN",
                    ibge: "2403251"
                },
                {
                    nome: "Encanto",
                    uf: "RN",
                    ibge: "2403301"
                },
                {
                    nome: "Equador",
                    uf: "RN",
                    ibge: "2403400"
                },
                {
                    nome: "Espírito Santo",
                    uf: "RN",
                    ibge: "2403509"
                },
                {
                    nome: "Extremoz",
                    uf: "RN",
                    ibge: "2403608"
                },
                {
                    nome: "Felipe Guerra",
                    uf: "RN",
                    ibge: "2403707"
                },
                {
                    nome: "Fernando Pedroza",
                    uf: "RN",
                    ibge: "2403756"
                },
                {
                    nome: "Florânia",
                    uf: "RN",
                    ibge: "2403806"
                },
                {
                    nome: "Francisco Dantas",
                    uf: "RN",
                    ibge: "2403905"
                },
                {
                    nome: "Frutuoso Gomes",
                    uf: "RN",
                    ibge: "2404002"
                },
                {
                    nome: "Galinhos",
                    uf: "RN",
                    ibge: "2404101"
                },
                {
                    nome: "Goianinha",
                    uf: "RN",
                    ibge: "2404200"
                },
                {
                    nome: "Governador Dix-Sept Rosado",
                    uf: "RN",
                    ibge: "2404309"
                },
                {
                    nome: "Grossos",
                    uf: "RN",
                    ibge: "2404408"
                },
                {
                    nome: "Guamaré",
                    uf: "RN",
                    ibge: "2404507"
                },
                {
                    nome: "Ielmo Marinho",
                    uf: "RN",
                    ibge: "2404606"
                },
                {
                    nome: "Ipanguaçu",
                    uf: "RN",
                    ibge: "2404705"
                },
                {
                    nome: "Ipueira",
                    uf: "RN",
                    ibge: "2404804"
                },
                {
                    nome: "Itajá",
                    uf: "RN",
                    ibge: "2404853"
                },
                {
                    nome: "Itaú",
                    uf: "RN",
                    ibge: "2404903"
                },
                {
                    nome: "Jaçanã",
                    uf: "RN",
                    ibge: "2405009"
                },
                {
                    nome: "Jandaíra",
                    uf: "RN",
                    ibge: "2405108"
                },
                {
                    nome: "Janduís",
                    uf: "RN",
                    ibge: "2405207"
                },
                {
                    nome: "Januário Cicco",
                    uf: "RN",
                    ibge: "2405306"
                },
                {
                    nome: "Japi",
                    uf: "RN",
                    ibge: "2405405"
                },
                {
                    nome: "Jardim de Angicos",
                    uf: "RN",
                    ibge: "2405504"
                },
                {
                    nome: "Jardim de Piranhas",
                    uf: "RN",
                    ibge: "2405603"
                },
                {
                    nome: "Jardim do Seridó",
                    uf: "RN",
                    ibge: "2405702"
                },
                {
                    nome: "João Câmara",
                    uf: "RN",
                    ibge: "2405801"
                },
                {
                    nome: "João Dias",
                    uf: "RN",
                    ibge: "2405900"
                },
                {
                    nome: "José da Penha",
                    uf: "RN",
                    ibge: "2406007"
                },
                {
                    nome: "Jucurutu",
                    uf: "RN",
                    ibge: "2406106"
                },
                {
                    nome: "Jundiá",
                    uf: "RN",
                    ibge: "2406155"
                },
                {
                    nome: "Lagoa D'Anta",
                    uf: "RN",
                    ibge: "2406205"
                },
                {
                    nome: "Lagoa de Pedras",
                    uf: "RN",
                    ibge: "2406304"
                },
                {
                    nome: "Lagoa de Velhos",
                    uf: "RN",
                    ibge: "2406403"
                },
                {
                    nome: "Lagoa Nova",
                    uf: "RN",
                    ibge: "2406502"
                },
                {
                    nome: "Lagoa Salgada",
                    uf: "RN",
                    ibge: "2406601"
                },
                {
                    nome: "Lajes",
                    uf: "RN",
                    ibge: "2406700"
                },
                {
                    nome: "Lajes Pintadas",
                    uf: "RN",
                    ibge: "2406809"
                },
                {
                    nome: "Lucrécia",
                    uf: "RN",
                    ibge: "2406908"
                },
                {
                    nome: "Luís Gomes",
                    uf: "RN",
                    ibge: "2407005"
                },
                {
                    nome: "Macaíba",
                    uf: "RN",
                    ibge: "2407104"
                },
                {
                    nome: "Macau",
                    uf: "RN",
                    ibge: "2407203"
                },
                {
                    nome: "Major Sales",
                    uf: "RN",
                    ibge: "2407252"
                },
                {
                    nome: "Marcelino Vieira",
                    uf: "RN",
                    ibge: "2407302"
                },
                {
                    nome: "Martins",
                    uf: "RN",
                    ibge: "2407401"
                },
                {
                    nome: "Maxaranguape",
                    uf: "RN",
                    ibge: "2407500"
                },
                {
                    nome: "Messias Targino",
                    uf: "RN",
                    ibge: "2407609"
                },
                {
                    nome: "Montanhas",
                    uf: "RN",
                    ibge: "2407708"
                },
                {
                    nome: "Monte Alegre",
                    uf: "RN",
                    ibge: "2407807"
                },
                {
                    nome: "Monte das Gameleiras",
                    uf: "RN",
                    ibge: "2407906"
                },
                {
                    nome: "Mossoró",
                    uf: "RN",
                    ibge: "2408003"
                },
                {
                    nome: "Natal",
                    uf: "RN",
                    ibge: "2408102"
                },
                {
                    nome: "Nísia Floresta",
                    uf: "RN",
                    ibge: "2408201"
                },
                {
                    nome: "Nova Cruz",
                    uf: "RN",
                    ibge: "2408300"
                },
                {
                    nome: "Olho-D'Água do Borges",
                    uf: "RN",
                    ibge: "2408409"
                },
                {
                    nome: "Ouro Branco",
                    uf: "RN",
                    ibge: "2408508"
                },
                {
                    nome: "Paraná",
                    uf: "RN",
                    ibge: "2408607"
                },
                {
                    nome: "Paraú",
                    uf: "RN",
                    ibge: "2408706"
                },
                {
                    nome: "Parazinho",
                    uf: "RN",
                    ibge: "2408805"
                },
                {
                    nome: "Parelhas",
                    uf: "RN",
                    ibge: "2408904"
                },
                {
                    nome: "Rio do Fogo",
                    uf: "RN",
                    ibge: "2408953"
                },
                {
                    nome: "Passa e Fica",
                    uf: "RN",
                    ibge: "2409100"
                },
                {
                    nome: "Passagem",
                    uf: "RN",
                    ibge: "2409209"
                },
                {
                    nome: "Patu",
                    uf: "RN",
                    ibge: "2409308"
                },
                {
                    nome: "Santa Maria",
                    uf: "RN",
                    ibge: "2409332"
                },
                {
                    nome: "Pau dos Ferros",
                    uf: "RN",
                    ibge: "2409407"
                },
                {
                    nome: "Pedra Grande",
                    uf: "RN",
                    ibge: "2409506"
                },
                {
                    nome: "Pedra Preta",
                    uf: "RN",
                    ibge: "2409605"
                },
                {
                    nome: "Pedro Avelino",
                    uf: "RN",
                    ibge: "2409704"
                },
                {
                    nome: "Pedro Velho",
                    uf: "RN",
                    ibge: "2409803"
                },
                {
                    nome: "Pendências",
                    uf: "RN",
                    ibge: "2409902"
                },
                {
                    nome: "Pilões",
                    uf: "RN",
                    ibge: "2410009"
                },
                {
                    nome: "Poço Branco",
                    uf: "RN",
                    ibge: "2410108"
                },
                {
                    nome: "Portalegre",
                    uf: "RN",
                    ibge: "2410207"
                },
                {
                    nome: "Porto do Mangue",
                    uf: "RN",
                    ibge: "2410256"
                },
                {
                    nome: "Presidente Juscelino",
                    uf: "RN",
                    ibge: "2410306"
                },
                {
                    nome: "Pureza",
                    uf: "RN",
                    ibge: "2410405"
                },
                {
                    nome: "Rafael Fernandes",
                    uf: "RN",
                    ibge: "2410504"
                },
                {
                    nome: "Rafael Godeiro",
                    uf: "RN",
                    ibge: "2410603"
                },
                {
                    nome: "Riacho da Cruz",
                    uf: "RN",
                    ibge: "2410702"
                },
                {
                    nome: "Riacho de Santana",
                    uf: "RN",
                    ibge: "2410801"
                },
                {
                    nome: "Riachuelo",
                    uf: "RN",
                    ibge: "2410900"
                },
                {
                    nome: "Rodolfo Fernandes",
                    uf: "RN",
                    ibge: "2411007"
                },
                {
                    nome: "Tibau",
                    uf: "RN",
                    ibge: "2411056"
                },
                {
                    nome: "Ruy Barbosa",
                    uf: "RN",
                    ibge: "2411106"
                },
                {
                    nome: "Santa Cruz",
                    uf: "RN",
                    ibge: "2411205"
                },
                {
                    nome: "Santana do Matos",
                    uf: "RN",
                    ibge: "2411403"
                },
                {
                    nome: "Santana do Seridó",
                    uf: "RN",
                    ibge: "2411429"
                },
                {
                    nome: "Santo Antônio",
                    uf: "RN",
                    ibge: "2411502"
                },
                {
                    nome: "São Bento do Norte",
                    uf: "RN",
                    ibge: "2411601"
                },
                {
                    nome: "São Bento do Trairí",
                    uf: "RN",
                    ibge: "2411700"
                },
                {
                    nome: "São Fernando",
                    uf: "RN",
                    ibge: "2411809"
                },
                {
                    nome: "São Francisco do Oeste",
                    uf: "RN",
                    ibge: "2411908"
                },
                {
                    nome: "São Gonçalo do Amarante",
                    uf: "RN",
                    ibge: "2412005"
                },
                {
                    nome: "São João do Sabugi",
                    uf: "RN",
                    ibge: "2412104"
                },
                {
                    nome: "São José de Mipibu",
                    uf: "RN",
                    ibge: "2412203"
                },
                {
                    nome: "São José do Campestre",
                    uf: "RN",
                    ibge: "2412302"
                },
                {
                    nome: "São José do Seridó",
                    uf: "RN",
                    ibge: "2412401"
                },
                {
                    nome: "São Miguel",
                    uf: "RN",
                    ibge: "2412500"
                },
                {
                    nome: "São Miguel do Gostoso",
                    uf: "RN",
                    ibge: "2412559"
                },
                {
                    nome: "São Paulo do Potengi",
                    uf: "RN",
                    ibge: "2412609"
                },
                {
                    nome: "São Pedro",
                    uf: "RN",
                    ibge: "2412708"
                },
                {
                    nome: "São Rafael",
                    uf: "RN",
                    ibge: "2412807"
                },
                {
                    nome: "São Tomé",
                    uf: "RN",
                    ibge: "2412906"
                },
                {
                    nome: "São Vicente",
                    uf: "RN",
                    ibge: "2413003"
                },
                {
                    nome: "Senador Elói de Souza",
                    uf: "RN",
                    ibge: "2413102"
                },
                {
                    nome: "Senador Georgino Avelino",
                    uf: "RN",
                    ibge: "2413201"
                },
                {
                    nome: "Serra de São Bento",
                    uf: "RN",
                    ibge: "2413300"
                },
                {
                    nome: "Serra do Mel",
                    uf: "RN",
                    ibge: "2413359"
                },
                {
                    nome: "Serra Negra do Norte",
                    uf: "RN",
                    ibge: "2413409"
                },
                {
                    nome: "Serrinha",
                    uf: "RN",
                    ibge: "2413508"
                },
                {
                    nome: "Serrinha dos Pintos",
                    uf: "RN",
                    ibge: "2413557"
                },
                {
                    nome: "Severiano Melo",
                    uf: "RN",
                    ibge: "2413607"
                },
                {
                    nome: "Sítio Novo",
                    uf: "RN",
                    ibge: "2413706"
                },
                {
                    nome: "Taboleiro Grande",
                    uf: "RN",
                    ibge: "2413805"
                },
                {
                    nome: "Taipu",
                    uf: "RN",
                    ibge: "2413904"
                },
                {
                    nome: "Tangará",
                    uf: "RN",
                    ibge: "2414001"
                },
                {
                    nome: "Tenente Ananias",
                    uf: "RN",
                    ibge: "2414100"
                },
                {
                    nome: "Tenente Laurentino Cruz",
                    uf: "RN",
                    ibge: "2414159"
                },
                {
                    nome: "Tibau do Sul",
                    uf: "RN",
                    ibge: "2414209"
                },
                {
                    nome: "Timbaúba dos Batistas",
                    uf: "RN",
                    ibge: "2414308"
                },
                {
                    nome: "Touros",
                    uf: "RN",
                    ibge: "2414407"
                },
                {
                    nome: "Triunfo Potiguar",
                    uf: "RN",
                    ibge: "2414456"
                },
                {
                    nome: "Umarizal",
                    uf: "RN",
                    ibge: "2414506"
                },
                {
                    nome: "Upanema",
                    uf: "RN",
                    ibge: "2414605"
                },
                {
                    nome: "Várzea",
                    uf: "RN",
                    ibge: "2414704"
                },
                {
                    nome: "Venha-Ver",
                    uf: "RN",
                    ibge: "2414753"
                },
                {
                    nome: "Vera Cruz",
                    uf: "RN",
                    ibge: "2414803"
                },
                {
                    nome: "Viçosa",
                    uf: "RN",
                    ibge: "2414902"
                },
                {
                    nome: "Vila Flor",
                    uf: "RN",
                    ibge: "2415008"
                },
                {
                    nome: "Água Branca",
                    uf: "PB",
                    ibge: "2500106"
                },
                {
                    nome: "Aguiar",
                    uf: "PB",
                    ibge: "2500205"
                },
                {
                    nome: "Alagoa Grande",
                    uf: "PB",
                    ibge: "2500304"
                },
                {
                    nome: "Alagoa Nova",
                    uf: "PB",
                    ibge: "2500403"
                },
                {
                    nome: "Alagoinha",
                    uf: "PB",
                    ibge: "2500502"
                },
                {
                    nome: "Alcantil",
                    uf: "PB",
                    ibge: "2500536"
                },
                {
                    nome: "Algodão de Jandaíra",
                    uf: "PB",
                    ibge: "2500577"
                },
                {
                    nome: "Alhandra",
                    uf: "PB",
                    ibge: "2500601"
                },
                {
                    nome: "São João do Rio do Peixe",
                    uf: "PB",
                    ibge: "2500700"
                },
                {
                    nome: "Amparo",
                    uf: "PB",
                    ibge: "2500734"
                },
                {
                    nome: "Aparecida",
                    uf: "PB",
                    ibge: "2500775"
                },
                {
                    nome: "Araçagi",
                    uf: "PB",
                    ibge: "2500809"
                },
                {
                    nome: "Arara",
                    uf: "PB",
                    ibge: "2500908"
                },
                {
                    nome: "Araruna",
                    uf: "PB",
                    ibge: "2501005"
                },
                {
                    nome: "Areia",
                    uf: "PB",
                    ibge: "2501104"
                },
                {
                    nome: "Areia de Baraúnas",
                    uf: "PB",
                    ibge: "2501153"
                },
                {
                    nome: "Areial",
                    uf: "PB",
                    ibge: "2501203"
                },
                {
                    nome: "Aroeiras",
                    uf: "PB",
                    ibge: "2501302"
                },
                {
                    nome: "Assunção",
                    uf: "PB",
                    ibge: "2501351"
                },
                {
                    nome: "Baía da Traição",
                    uf: "PB",
                    ibge: "2501401"
                },
                {
                    nome: "Bananeiras",
                    uf: "PB",
                    ibge: "2501500"
                },
                {
                    nome: "Baraúna",
                    uf: "PB",
                    ibge: "2501534"
                },
                {
                    nome: "Barra de Santana",
                    uf: "PB",
                    ibge: "2501575"
                },
                {
                    nome: "Barra de Santa Rosa",
                    uf: "PB",
                    ibge: "2501609"
                },
                {
                    nome: "Barra de São Miguel",
                    uf: "PB",
                    ibge: "2501708"
                },
                {
                    nome: "Bayeux",
                    uf: "PB",
                    ibge: "2501807"
                },
                {
                    nome: "Belém",
                    uf: "PB",
                    ibge: "2501906"
                },
                {
                    nome: "Belém do Brejo do Cruz",
                    uf: "PB",
                    ibge: "2502003"
                },
                {
                    nome: "Bernardino Batista",
                    uf: "PB",
                    ibge: "2502052"
                },
                {
                    nome: "Boa Ventura",
                    uf: "PB",
                    ibge: "2502102"
                },
                {
                    nome: "Boa Vista",
                    uf: "PB",
                    ibge: "2502151"
                },
                {
                    nome: "Bom Jesus",
                    uf: "PB",
                    ibge: "2502201"
                },
                {
                    nome: "Bom Sucesso",
                    uf: "PB",
                    ibge: "2502300"
                },
                {
                    nome: "Bonito de Santa Fé",
                    uf: "PB",
                    ibge: "2502409"
                },
                {
                    nome: "Boqueirão",
                    uf: "PB",
                    ibge: "2502508"
                },
                {
                    nome: "Igaracy",
                    uf: "PB",
                    ibge: "2502607"
                },
                {
                    nome: "Borborema",
                    uf: "PB",
                    ibge: "2502706"
                },
                {
                    nome: "Brejo do Cruz",
                    uf: "PB",
                    ibge: "2502805"
                },
                {
                    nome: "Brejo dos Santos",
                    uf: "PB",
                    ibge: "2502904"
                },
                {
                    nome: "Caaporã",
                    uf: "PB",
                    ibge: "2503001"
                },
                {
                    nome: "Cabaceiras",
                    uf: "PB",
                    ibge: "2503100"
                },
                {
                    nome: "Cabedelo",
                    uf: "PB",
                    ibge: "2503209"
                },
                {
                    nome: "Cachoeira dos Índios",
                    uf: "PB",
                    ibge: "2503308"
                },
                {
                    nome: "Cacimba de Areia",
                    uf: "PB",
                    ibge: "2503407"
                },
                {
                    nome: "Cacimba de Dentro",
                    uf: "PB",
                    ibge: "2503506"
                },
                {
                    nome: "Cacimbas",
                    uf: "PB",
                    ibge: "2503555"
                },
                {
                    nome: "Caiçara",
                    uf: "PB",
                    ibge: "2503605"
                },
                {
                    nome: "Cajazeiras",
                    uf: "PB",
                    ibge: "2503704"
                },
                {
                    nome: "Cajazeirinhas",
                    uf: "PB",
                    ibge: "2503753"
                },
                {
                    nome: "Caldas Brandão",
                    uf: "PB",
                    ibge: "2503803"
                },
                {
                    nome: "Camalaú",
                    uf: "PB",
                    ibge: "2503902"
                },
                {
                    nome: "Campina Grande",
                    uf: "PB",
                    ibge: "2504009"
                },
                {
                    nome: "Capim",
                    uf: "PB",
                    ibge: "2504033"
                },
                {
                    nome: "Caraúbas",
                    uf: "PB",
                    ibge: "2504074"
                },
                {
                    nome: "Carrapateira",
                    uf: "PB",
                    ibge: "2504108"
                },
                {
                    nome: "Casserengue",
                    uf: "PB",
                    ibge: "2504157"
                },
                {
                    nome: "Catingueira",
                    uf: "PB",
                    ibge: "2504207"
                },
                {
                    nome: "Catolé do Rocha",
                    uf: "PB",
                    ibge: "2504306"
                },
                {
                    nome: "Caturité",
                    uf: "PB",
                    ibge: "2504355"
                },
                {
                    nome: "Conceição",
                    uf: "PB",
                    ibge: "2504405"
                },
                {
                    nome: "Condado",
                    uf: "PB",
                    ibge: "2504504"
                },
                {
                    nome: "Conde",
                    uf: "PB",
                    ibge: "2504603"
                },
                {
                    nome: "Congo",
                    uf: "PB",
                    ibge: "2504702"
                },
                {
                    nome: "Coremas",
                    uf: "PB",
                    ibge: "2504801"
                },
                {
                    nome: "Coxixola",
                    uf: "PB",
                    ibge: "2504850"
                },
                {
                    nome: "Cruz do Espírito Santo",
                    uf: "PB",
                    ibge: "2504900"
                },
                {
                    nome: "Cubati",
                    uf: "PB",
                    ibge: "2505006"
                },
                {
                    nome: "Cuité",
                    uf: "PB",
                    ibge: "2505105"
                },
                {
                    nome: "Cuitegi",
                    uf: "PB",
                    ibge: "2505204"
                },
                {
                    nome: "Cuité de Mamanguape",
                    uf: "PB",
                    ibge: "2505238"
                },
                {
                    nome: "Curral de Cima",
                    uf: "PB",
                    ibge: "2505279"
                },
                {
                    nome: "Curral Velho",
                    uf: "PB",
                    ibge: "2505303"
                },
                {
                    nome: "Damião",
                    uf: "PB",
                    ibge: "2505352"
                },
                {
                    nome: "Desterro",
                    uf: "PB",
                    ibge: "2505402"
                },
                {
                    nome: "Vista Serrana",
                    uf: "PB",
                    ibge: "2505501"
                },
                {
                    nome: "Diamante",
                    uf: "PB",
                    ibge: "2505600"
                },
                {
                    nome: "Dona Inês",
                    uf: "PB",
                    ibge: "2505709"
                },
                {
                    nome: "Duas Estradas",
                    uf: "PB",
                    ibge: "2505808"
                },
                {
                    nome: "Emas",
                    uf: "PB",
                    ibge: "2505907"
                },
                {
                    nome: "Esperança",
                    uf: "PB",
                    ibge: "2506004"
                },
                {
                    nome: "Fagundes",
                    uf: "PB",
                    ibge: "2506103"
                },
                {
                    nome: "Frei Martinho",
                    uf: "PB",
                    ibge: "2506202"
                },
                {
                    nome: "Gado Bravo",
                    uf: "PB",
                    ibge: "2506251"
                },
                {
                    nome: "Guarabira",
                    uf: "PB",
                    ibge: "2506301"
                },
                {
                    nome: "Gurinhém",
                    uf: "PB",
                    ibge: "2506400"
                },
                {
                    nome: "Gurjão",
                    uf: "PB",
                    ibge: "2506509"
                },
                {
                    nome: "Ibiara",
                    uf: "PB",
                    ibge: "2506608"
                },
                {
                    nome: "Imaculada",
                    uf: "PB",
                    ibge: "2506707"
                },
                {
                    nome: "Ingá",
                    uf: "PB",
                    ibge: "2506806"
                },
                {
                    nome: "Itabaiana",
                    uf: "PB",
                    ibge: "2506905"
                },
                {
                    nome: "Itaporanga",
                    uf: "PB",
                    ibge: "2507002"
                },
                {
                    nome: "Itapororoca",
                    uf: "PB",
                    ibge: "2507101"
                },
                {
                    nome: "Itatuba",
                    uf: "PB",
                    ibge: "2507200"
                },
                {
                    nome: "Jacaraú",
                    uf: "PB",
                    ibge: "2507309"
                },
                {
                    nome: "Jericó",
                    uf: "PB",
                    ibge: "2507408"
                },
                {
                    nome: "João Pessoa",
                    uf: "PB",
                    ibge: "2507507"
                },
                {
                    nome: "Juarez Távora",
                    uf: "PB",
                    ibge: "2507606"
                },
                {
                    nome: "Juazeirinho",
                    uf: "PB",
                    ibge: "2507705"
                },
                {
                    nome: "Junco do Seridó",
                    uf: "PB",
                    ibge: "2507804"
                },
                {
                    nome: "Juripiranga",
                    uf: "PB",
                    ibge: "2507903"
                },
                {
                    nome: "Juru",
                    uf: "PB",
                    ibge: "2508000"
                },
                {
                    nome: "Lagoa",
                    uf: "PB",
                    ibge: "2508109"
                },
                {
                    nome: "Lagoa de Dentro",
                    uf: "PB",
                    ibge: "2508208"
                },
                {
                    nome: "Lagoa Seca",
                    uf: "PB",
                    ibge: "2508307"
                },
                {
                    nome: "Lastro",
                    uf: "PB"
     ,               ibge: "2508406"
                },
                {
                    nome: "Livramento",
                    uf: "PB",
                    ibge: "2508505"
                },
                {
                    nome: "Logradouro",
                    uf: "PB",
                    ibge: "2508554"
                },
                {
                    nome: "Lucena",
                    uf: "PB",
                    ibge: "2508604"
                },
                {
                    nome: "Mãe D'Água",
                    uf: "PB",
                    ibge: "2508703"
                },
                {
                    nome: "Malta",
                    uf: "PB",
                    ibge: "2508802"
                },
                {
                    nome: "Mamanguape",
                    uf: "PB",
                    ibge: "2508901"
                },
                {
                    nome: "Manaíra",
                    uf: "PB",
                    ibge: "2509008"
                },
                {
                    nome: "Marcação",
                    uf: "PB",
                    ibge: "2509057"
                },
                {
                    nome: "Mari",
                    uf: "PB",
                    ibge: "2509107"
                },
                {
                    nome: "Marizópolis",
                    uf: "PB",
                    ibge: "2509156"
                },
                {
                    nome: "Massaranduba",
                    uf: "PB",
                    ibge: "2509206"
                },
                {
                    nome: "Mataraca",
                    uf: "PB",
                    ibge: "2509305"
                },
                {
                    nome: "Matinhas",
                    uf: "PB",
                    ibge: "2509339"
                },
                {
                    nome: "Mato Grosso",
                    uf: "PB",
                    ibge: "2509370"
                },
                {
                    nome: "Maturéia",
                    uf: "PB",
                    ibge: "2509396"
                },
                {
                    nome: "Mogeiro",
                    uf: "PB",
                    ibge: "2509404"
                },
                {
                    nome: "Montadas",
                    uf: "PB",
                    ibge: "2509503"
                },
                {
                    nome: "Monte Horebe",
                    uf: "PB",
                    ibge: "2509602"
                },
                {
                    nome: "Monteiro",
                    uf: "PB",
                    ibge: "2509701"
                },
                {
                    nome: "Mulungu",
                    uf: "PB",
                    ibge: "2509800"
                },
                {
                    nome: "Natuba",
                    uf: "PB",
                    ibge: "2509909"
                },
                {
                    nome: "Nazarezinho",
                    uf: "PB",
                    ibge: "2510006"
                },
                {
                    nome: "Nova Floresta",
                    uf: "PB",
                    ibge: "2510105"
                },
                {
                    nome: "Nova Olinda",
                    uf: "PB",
                    ibge: "2510204"
                },
                {
                    nome: "Nova Palmeira",
                    uf: "PB",
                    ibge: "2510303"
                },
                {
                    nome: "Olho D'Água",
                    uf: "PB",
                    ibge: "2510402"
                },
                {
                    nome: "Olivedos",
                    uf: "PB",
                    ibge: "2510501"
                },
                {
                    nome: "Ouro Velho",
                    uf: "PB",
                    ibge: "2510600"
                },
                {
                    nome: "Parari",
                    uf: "PB",
                    ibge: "2510659"
                },
                {
                    nome: "Passagem",
                    uf: "PB",
                    ibge: "2510709"
                },
                {
                    nome: "Patos",
                    uf: "PB",
                    ibge: "2510808"
                },
                {
                    nome: "Paulista",
                    uf: "PB",
                    ibge: "2510907"
                },
                {
                    nome: "Pedra Branca",
                    uf: "PB",
                    ibge: "2511004"
                },
                {
                    nome: "Pedra Lavrada",
                    uf: "PB",
                    ibge: "2511103"
                },
                {
                    nome: "Pedras de Fogo",
                    uf: "PB",
                    ibge: "2511202"
                },
                {
                    nome: "Piancó",
                    uf: "PB",
                    ibge: "2511301"
                },
                {
                    nome: "Picuí",
                    uf: "PB",
                    ibge: "2511400"
                },
                {
                    nome: "Pilar",
                    uf: "PB",
                    ibge: "2511509"
                },
                {
                    nome: "Pilões",
                    uf: "PB",
                    ibge: "2511608"
                },
                {
                    nome: "Pilõezinhos",
                    uf: "PB",
                    ibge: "2511707"
                },
                {
                    nome: "Pirpirituba",
                    uf: "PB",
                    ibge: "2511806"
                },
                {
                    nome: "Pitimbu",
                    uf: "PB",
                    ibge: "2511905"
                },
                {
                    nome: "Pocinhos",
                    uf: "PB",
                    ibge: "2512002"
                },
                {
                    nome: "Poço Dantas",
                    uf: "PB",
                    ibge: "2512036"
                },
                {
                    nome: "Poço de José de Moura",
                    uf: "PB",
                    ibge: "2512077"
                },
                {
                    nome: "Pombal",
                    uf: "PB",
                    ibge: "2512101"
                },
                {
                    nome: "Prata",
                    uf: "PB",
                    ibge: "2512200"
                },
                {
                    nome: "Princesa Isabel",
                    uf: "PB",
                    ibge: "2512309"
                },
                {
                    nome: "Puxinanã",
                    uf: "PB",
                    ibge: "2512408"
                },
                {
                    nome: "Queimadas",
                    uf: "PB",
                    ibge: "2512507"
                },
                {
                    nome: "Quixabá",
                    uf: "PB",
                    ibge: "2512606"
                },
                {
                    nome: "Remígio",
                    uf: "PB",
                    ibge: "2512705"
                },
                {
                    nome: "Pedro Régis",
                    uf: "PB",
                    ibge: "2512721"
                },
                {
                    nome: "Riachão",
                    uf: "PB",
                    ibge: "2512747"
                },
                {
                    nome: "Riachão do Bacamarte",
                    uf: "PB",
                    ibge: "2512754"
                },
                {
                    nome: "Riachão do Poço",
                    uf: "PB",
                    ibge: "2512762"
                },
                {
                    nome: "Riacho de Santo Antônio",
                    uf: "PB",
                    ibge: "2512788"
                },
                {
                    nome: "Riacho dos Cavalos",
                    uf: "PB",
                    ibge: "2512804"
                },
                {
                    nome: "Rio Tinto",
                    uf: "PB",
                    ibge: "2512903"
                },
                {
                    nome: "Salgadinho",
                    uf: "PB",
                    ibge: "2513000"
                },
                {
                    nome: "Salgado de São Félix",
                    uf: "PB",
                    ibge: "2513109"
                },
                {
                    nome: "Santa Cecília",
                    uf: "PB",
                    ibge: "2513158"
                },
                {
                    nome: "Santa Cruz",
                    uf: "PB",
                    ibge: "2513208"
                },
                {
                    nome: "Santa Helena",
                    uf: "PB",
                    ibge: "2513307"
                },
                {
                    nome: "Santa Inês",
                    uf: "PB",
                    ibge: "2513356"
                },
                {
                    nome: "Santa Luzia",
                    uf: "PB",
                    ibge: "2513406"
                },
                {
                    nome: "Santana de Mangueira",
                    uf: "PB",
                    ibge: "2513505"
                },
                {
                    nome: "Santana dos Garrotes",
                    uf: "PB",
                    ibge: "2513604"
                },
                {
                    nome: "Joca Claudino",
                    uf: "PB",
                    ibge: "2513653"
                },
                {
                    nome: "Santa Rita",
                    uf: "PB",
                    ibge: "2513703"
                },
                {
                    nome: "Santa Teresinha",
                    uf: "PB",
                    ibge: "2513802"
                },
                {
                    nome: "Santo André",
                    uf: "PB",
                    ibge: "2513851"
                },
                {
                    nome: "São Bento",
                    uf: "PB",
                    ibge: "2513901"
                },
                {
                    nome: "São Bentinho",
                    uf: "PB",
                    ibge: "2513927"
                },
                {
                    nome: "São Domingos do Cariri",
                    uf: "PB",
                    ibge: "2513943"
                },
                {
                    nome: "São Domingos",
                    uf: "PB",
                    ibge: "2513968"
                },
                {
                    nome: "São Francisco",
                    uf: "PB",
                    ibge: "2513984"
                },
                {
                    nome: "São João do Cariri",
                    uf: "PB",
                    ibge: "2514008"
                },
                {
                    nome: "São João do Tigre",
                    uf: "PB",
                    ibge: "2514107"
                },
                {
                    nome: "São José da Lagoa Tapada",
                    uf: "PB",
                    ibge: "2514206"
                },
                {
                    nome: "São José de Caiana",
                    uf: "PB",
                    ibge: "2514305"
                },
                {
                    nome: "São José de Espinharas",
                    uf: "PB",
                    ibge: "2514404"
                },
                {
                    nome: "São José dos Ramos",
                    uf: "PB",
                    ibge: "2514453"
                },
                {
                    nome: "São José de Piranhas",
                    uf: "PB",
                    ibge: "2514503"
                },
                {
                    nome: "São José de Princesa",
                    uf: "PB",
                    ibge: "2514552"
                },
                {
                    nome: "São José do Bonfim",
                    uf: "PB",
                    ibge: "2514602"
                },
                {
                    nome: "São José do Brejo do Cruz",
                    uf: "PB",
                    ibge: "2514651"
                },
                {
                    nome: "São José do Sabugi",
                    uf: "PB",
                    ibge: "2514701"
                },
                {
                    nome: "São José dos Cordeiros",
                    uf: "PB",
                    ibge: "2514800"
                },
                {
                    nome: "São Mamede",
                    uf: "PB",
                    ibge: "2514909"
                },
                {
                    nome: "São Miguel de Taipu",
                    uf: "PB",
                    ibge: "2515005"
                },
                {
                    nome: "São Sebastião de Lagoa de Roça",
                    uf: "PB",
                    ibge: "2515104"
                },
                {
                    nome: "São Sebastião do Umbuzeiro",
                    uf: "PB",
                    ibge: "2515203"
                },
                {
                    nome: "Sapé",
                    uf: "PB",
                    ibge: "2515302"
                },
                {
                    nome: "São Vicente do Seridó",
                    uf: "PB",
                    ibge: "2515401"
                },
                {
                    nome: "Serra Branca",
                    uf: "PB",
                    ibge: "2515500"
                },
                {
                    nome: "Serra da Raiz",
                    uf: "PB",
                    ibge: "2515609"
                },
                {
                    nome: "Serra Grande",
                    uf: "PB",
                    ibge: "2515708"
                },
                {
                    nome: "Serra Redonda",
                    uf: "PB",
                    ibge: "2515807"
                },
                {
                    nome: "Serraria",
                    uf: "PB",
                    ibge: "2515906"
                },
                {
                    nome: "Sertãozinho",
                    uf: "PB",
                    ibge: "2515930"
                },
                {
                    nome: "Sobrado",
                    uf: "PB",
                    ibge: "2515971"
                },
                {
                    nome: "Solânea",
                    uf: "PB",
                    ibge: "2516003"
                },
                {
                    nome: "Soledade",
                    uf: "PB",
                    ibge: "2516102"
                },
                {
                    nome: "Sossêgo",
                    uf: "PB",
                    ibge: "2516151"
                },
                {
                    nome: "Sousa",
                    uf: "PB",
                    ibge: "2516201"
                },
                {
                    nome: "Sumé",
                    uf: "PB",
                    ibge: "2516300"
                },
                {
                    nome: "Tacima",
                    uf: "PB",
                    ibge: "2516409"
                },
                {
                    nome: "Taperoá",
                    uf: "PB",
                    ibge: "2516508"
                },
                {
                    nome: "Tavares",
                    uf: "PB",
                    ibge: "2516607"
                },
                {
                    nome: "Teixeira",
                    uf: "PB",
                    ibge: "2516706"
                },
                {
                    nome: "Tenório",
                    uf: "PB",
                    ibge: "2516755"
                },
                {
                    nome: "Triunfo",
                    uf: "PB",
                    ibge: "2516805"
                },
                {
                    nome: "Uiraúna",
                    uf: "PB",
                    ibge: "2516904"
                },
                {
                    nome: "Umbuzeiro",
                    uf: "PB",
                    ibge: "2517001"
                },
                {
                    nome: "Várzea",
                    uf: "PB",
                    ibge: "2517100"
                },
                {
                    nome: "Vieirópolis",
                    uf: "PB",
                    ibge: "2517209"
                },
                {
                    nome: "Zabelê",
                    uf: "PB",
                    ibge: "2517407"
                },
                {
                    nome: "Abreu e Lima",
                    uf: "PE",
                    ibge: "2600054"
                },
                {
                    nome: "Afogados da Ingazeira",
                    uf: "PE",
                    ibge: "2600104"
                },
                {
                    nome: "Afrânio",
                    uf: "PE",
                    ibge: "2600203"
                },
                {
                    nome: "Agrestina",
                    uf: "PE",
                    ibge: "2600302"
                },
                {
                    nome: "Água Preta",
                    uf: "PE",
                    ibge: "2600401"
                },
                {
                    nome: "Águas Belas",
                    uf: "PE",
                    ibge: "2600500"
                },
                {
                    nome: "Alagoinha",
                    uf: "PE",
                    ibge: "2600609"
                },
                {
                    nome: "Aliança",
                    uf: "PE",
                    ibge: "2600708"
                },
                {
                    nome: "Altinho",
                    uf: "PE",
                    ibge: "2600807"
                },
                {
                    nome: "Amaraji",
                    uf: "PE",
                    ibge: "2600906"
                },
                {
                    nome: "Angelim",
                    uf: "PE",
                    ibge: "2601003"
                },
                {
                    nome: "Araçoiaba",
                    uf: "PE",
                    ibge: "2601052"
                },
                {
                    nome: "Araripina",
                    uf: "PE",
                    ibge: "2601102"
                },
                {
                    nome: "Arcoverde",
                    uf: "PE",
                    ibge: "2601201"
                },
                {
                    nome: "Barra de Guabiraba",
                    uf: "PE",
                    ibge: "2601300"
                },
                {
                    nome: "Barreiros",
                    uf: "PE",
                    ibge: "2601409"
                },
                {
                    nome: "Belém de Maria",
                    uf: "PE",
                    ibge: "2601508"
                },
                {
                    nome: "Belém do São Francisco",
                    uf: "PE",
                    ibge: "2601607"
                },
                {
                    nome: "Belo Jardim",
                    uf: "PE",
                    ibge: "2601706"
                },
                {
                    nome: "Betânia",
                    uf: "PE",
                    ibge: "2601805"
                },
                {
                    nome: "Bezerros",
                    uf: "PE",
                    ibge: "2601904"
                },
                {
                    nome: "Bodocó",
                    uf: "PE",
                    ibge: "2602001"
                },
                {
                    nome: "Bom Conselho",
                    uf: "PE",
                    ibge: "2602100"
                },
                {
                    nome: "Bom Jardim",
                    uf: "PE",
                    ibge: "2602209"
                },
                {
                    nome: "Bonito",
                    uf: "PE",
                    ibge: "2602308"
                },
                {
                    nome: "Brejão",
                    uf: "PE",
                    ibge: "2602407"
                },
                {
                    nome: "Brejinho",
                    uf: "PE",
                    ibge: "2602506"
                },
                {
                    nome: "Brejo da Madre de Deus",
                    uf: "PE",
                    ibge: "2602605"
                },
                {
                    nome: "Buenos Aires",
                    uf: "PE",
                    ibge: "2602704"
                },
                {
                    nome: "Buíque",
                    uf: "PE",
                    ibge: "2602803"
                },
                {
                    nome: "Cabo de Santo Agostinho",
                    uf: "PE",
                    ibge: "2602902"
                },
                {
                    nome: "Cabrobó",
                    uf: "PE",
                    ibge: "2603009"
                },
                {
                    nome: "Cachoeirinha",
                    uf: "PE",
                    ibge: "2603108"
                },
                {
                    nome: "Caetés",
                    uf: "PE",
                    ibge: "2603207"
                },
                {
                    nome: "Calçado",
                    uf: "PE",
                    ibge: "2603306"
                },
                {
                    nome: "Calumbi",
                    uf: "PE",
                    ibge: "2603405"
                },
                {
                    nome: "Camaragibe",
                    uf: "PE",
                    ibge: "2603454"
                },
                {
                    nome: "Camocim de São Félix",
                    uf: "PE",
                    ibge: "2603504"
                },
                {
                    nome: "Camutanga",
                    uf: "PE",
                    ibge: "2603603"
                },
                {
                    nome: "Canhotinho",
                    uf: "PE",
                    ibge: "2603702"
                },
                {
                    nome: "Capoeiras",
                    uf: "PE",
                    ibge: "2603801"
                },
                {
                    nome: "Carnaíba",
                    uf: "PE",
                    ibge: "2603900"
                },
                {
                    nome: "Carnaubeira da Penha",
                    uf: "PE",
                    ibge: "2603926"
                },
                {
                    nome: "Carpina",
                    uf: "PE",
                    ibge: "2604007"
                },
                {
                    nome: "Caruaru",
                    uf: "PE",
                    ibge: "2604106"
                },
                {
                    nome: "Casinhas",
                    uf: "PE",
                    ibge: "2604155"
                },
                {
                    nome: "Catende",
                    uf: "PE",
                    ibge: "2604205"
                },
                {
                    nome: "Cedro",
                    uf: "PE",
                    ibge: "2604304"
                },
                {
                    nome: "Chã de Alegria",
                    uf: "PE",
                    ibge: "2604403"
                },
                {
                    nome: "Chã Grande",
                    uf: "PE",
                    ibge: "2604502"
                },
                {
                    nome: "Condado",
                    uf: "PE",
                    ibge: "2604601"
                },
                {
                    nome: "Correntes",
                    uf: "PE",
                    ibge: "2604700"
                },
                {
                    nome: "Cortês",
                    uf: "PE",
                    ibge: "2604809"
                },
                {
                    nome: "Cumaru",
                    uf: "PE",
                    ibge: "2604908"
                },
                {
                    nome: "Cupira",
                    uf: "PE",
                    ibge: "2605004"
                },
                {
                    nome: "Custódia",
                    uf: "PE",
                    ibge: "2605103"
                },
                {
                    nome: "Dormentes",
                    uf: "PE",
                    ibge: "2605152"
                },
                {
                    nome: "Escada",
                    uf: "PE",
                    ibge: "2605202"
                },
                {
                    nome: "Exu",
                    uf: "PE",
                    ibge: "2605301"
                },
                {
                    nome: "Feira Nova",
                    uf: "PE",
                    ibge: "2605400"
                },
                {
                    nome: "Fernando de Noronha",
                    uf: "PE",
                    ibge: "2605459"
                },
                {
                    nome: "Ferreiros",
                    uf: "PE",
                    ibge: "2605509"
                },
                {
                    nome: "Flores",
                    uf: "PE",
                    ibge: "2605608"
                },
                {
                    nome: "Floresta",
                    uf: "PE",
                    ibge: "2605707"
                },
                {
                    nome: "Frei Miguelinho",
                    uf: "PE",
                    ibge: "2605806"
                },
                {
                    nome: "Gameleira",
                    uf: "PE",
                    ibge: "2605905"
                },
                {
                    nome: "Garanhuns",
                    uf: "PE",
                    ibge: "2606002"
                },
                {
                    nome: "Glória do Goitá",
                    uf: "PE",
                    ibge: "2606101"
                },
                {
                    nome: "Goiana",
                    uf: "PE",
                    ibge: "2606200"
                },
                {
                    nome: "Granito",
                    uf: "PE",
                    ibge: "2606309"
                },
                {
                    nome: "Gravatá",
                    uf: "PE",
                    ibge: "2606408"
                },
                {
                    nome: "Iati",
                    uf: "PE",
                    ibge: "2606507"
                },
                {
                    nome: "Ibimirim",
                    uf: "PE",
                    ibge: "2606606"
                },
                {
                    nome: "Ibirajuba",
                    uf: "PE",
                    ibge: "2606705"
                },
                {
                    nome: "Igarassu",
                    uf: "PE",
                    ibge: "2606804"
                },
                {
                    nome: "Iguaraci",
                    uf: "PE",
                    ibge: "2606903"
                },
                {
                    nome: "Inajá",
                    uf: "PE",
                    ibge: "2607000"
                },
                {
                    nome: "Ingazeira",
                    uf: "PE",
                    ibge: "2607109"
                },
                {
                    nome: "Ipojuca",
                    uf: "PE",
                    ibge: "2607208"
                },
                {
                    nome: "Ipubi",
                    uf: "PE",
                    ibge: "2607307"
                },
                {
                    nome: "Itacuruba",
                    uf: "PE",
                    ibge: "2607406"
                },
                {
                    nome: "Itaíba",
                    uf: "PE",
                    ibge: "2607505"
                },
                {
                    nome: "Ilha de Itamaracá",
                    uf: "PE",
                    ibge: "2607604"
                },
                {
                    nome: "Itambé",
                    uf: "PE",
                    ibge: "2607653"
                },
                {
                    nome: "Itapetim",
                    uf: "PE",
                    ibge: "2607703"
                },
                {
                    nome: "Itapissuma",
                    uf: "PE",
                    ibge: "2607752"
                },
                {
                    nome: "Itaquitinga",
                    uf: "PE",
                    ibge: "2607802"
                },
                {
                    nome: "Jaboatão dos Guararapes",
                    uf: "PE",
                    ibge: "2607901"
                },
                {
                    nome: "Jaqueira",
                    uf: "PE",
                    ibge: "2607950"
                },
                {
                    nome: "Jataúba",
                    uf: "PE",
                    ibge: "2608008"
                },
                {
                    nome: "Jatobá",
                    uf: "PE",
                    ibge: "2608057"
                },
                {
                    nome: "João Alfredo",
                    uf: "PE",
                    ibge: "2608107"
                },
                {
                    nome: "Joaquim Nabuco",
                    uf: "PE",
                    ibge: "2608206"
                },
                {
                    nome: "Jucati",
                    uf: "PE",
                    ibge: "2608255"
                },
                {
                    nome: "Jupi",
                    uf: "PE",
                    ibge: "2608305"
                },
                {
                    nome: "Jurema",
                    uf: "PE",
                    ibge: "2608404"
                },
                {
                    nome: "Lagoa do Carro",
                    uf: "PE",
                    ibge: "2608453"
                },
                {
                    nome: "Lagoa de Itaenga",
                    uf: "PE",
                    ibge: "2608503"
                },
                {
                    nome: "Lagoa do Ouro",
                    uf: "PE",
                    ibge: "2608602"
                },
                {
                    nome: "Lagoa dos Gatos",
                    uf: "PE",
                    ibge: "2608701"
                },
                {
                    nome: "Lagoa Grande",
                    uf: "PE",
                    ibge: "2608750"
                },
                {
                    nome: "Lajedo",
                    uf: "PE",
                    ibge: "2608800"
                },
                {
                    nome: "Limoeiro",
                    uf: "PE",
                    ibge: "2608909"
                },
                {
                    nome: "Macaparana",
                    uf: "PE",
                    ibge: "2609006"
                },
                {
                    nome: "Machados",
                    uf: "PE",
                    ibge: "2609105"
                },
                {
                    nome: "Manari",
                    uf: "PE",
                    ibge: "2609154"
                },
                {
                    nome: "Maraial",
                    uf: "PE",
                    ibge: "2609204"
                },
                {
                    nome: "Mirandiba",
                    uf: "PE",
                    ibge: "2609303"
                },
                {
                    nome: "Moreno",
                    uf: "PE",
                    ibge: "2609402"
                },
                {
                    nome: "Nazaré da Mata",
                    uf: "PE",
                    ibge: "2609501"
                },
                {
                    nome: "Olinda",
                    uf: "PE",
                    ibge: "2609600"
                },
                {
                    nome: "Orobó",
                    uf: "PE",
                    ibge: "2609709"
                },
                {
                    nome: "Orocó",
                    uf: "PE",
                    ibge: "2609808"
                },
                {
                    nome: "Ouricuri",
                    uf: "PE",
                    ibge: "2609907"
                },
                {
                    nome: "Palmares",
                    uf: "PE",
                    ibge: "2610004"
                },
                {
                    nome: "Palmeirina",
                    uf: "PE",
                    ibge: "2610103"
                },
                {
                    nome: "Panelas",
                    uf: "PE",
                    ibge: "2610202"
                },
                {
                    nome: "Paranatama",
                    uf: "PE",
                    ibge: "2610301"
                },
                {
                    nome: "Parnamirim",
                    uf: "PE",
                    ibge: "2610400"
                },
                {
                    nome: "Passira",
                    uf: "PE",
                    ibge: "2610509"
                },
                {
                    nome: "Paudalho",
                    uf: "PE",
                    ibge: "2610608"
                },
                {
                    nome: "Paulista",
                    uf: "PE",
                    ibge: "2610707"
                },
                {
                    nome: "Pedra",
                    uf: "PE",
                    ibge: "2610806"
                },
                {
                    nome: "Pesqueira",
                    uf: "PE",
                    ibge: "2610905"
                },
                {
                    nome: "Petrolândia",
                    uf: "PE",
                    ibge: "2611002"
                },
                {
                    nome: "Petrolina",
                    uf: "PE",
                    ibge: "2611101"
                },
                {
                    nome: "Poção",
                    uf: "PE",
                    ibge: "2611200"
                },
                {
                    nome: "Pombos",
                    uf: "PE",
                    ibge: "2611309"
                },
                {
                    nome: "Primavera",
                    uf: "PE",
                    ibge: "2611408"
                },
                {
                    nome: "Quipapá",
                    uf: "PE",
                    ibge: "2611507"
                },
                {
                    nome: "Quixaba",
                    uf: "PE",
                    ibge: "2611533"
                },
                {
                    nome: "Recife",
                    uf: "PE",
                    ibge: "2611606"
                },
                {
                    nome: "Riacho das Almas",
                    uf: "PE",
                    ibge: "2611705"
                },
                {
                    nome: "Ribeirão",
                    uf: "PE",
                    ibge: "2611804"
                },
                {
                    nome: "Rio Formoso",
                    uf: "PE",
                    ibge: "2611903"
                },
                {
                    nome: "Sairé",
                    uf: "PE",
                    ibge: "2612000"
                },
                {
                    nome: "Salgadinho",
                    uf: "PE",
                    ibge: "2612109"
                },
                {
                    nome: "Salgueiro",
                    uf: "PE",
                    ibge: "2612208"
                },
                {
                    nome: "Saloá",
                    uf: "PE",
                    ibge: "2612307"
                },
                {
                    nome: "Sanharó",
                    uf: "PE",
                    ibge: "2612406"
                },
                {
                    nome: "Santa Cruz",
                    uf: "PE",
                    ibge: "2612455"
                },
                {
                    nome: "Santa Cruz da Baixa Verde",
                    uf: "PE",
                    ibge: "2612471"
                },
                {
                    nome: "Santa Cruz do Capibaribe",
                    uf: "PE",
                    ibge: "2612505"
                },
                {
                    nome: "Santa Filomena",
                    uf: "PE",
                    ibge: "2612554"
                },
                {
                    nome: "Santa Maria da Boa Vista",
                    uf: "PE",
                    ibge: "2612604"
                },
                {
                    nome: "Santa Maria do Cambucá",
                    uf: "PE",
                    ibge: "2612703"
                },
                {
                    nome: "Santa Terezinha",
                    uf: "PE",
                    ibge: "2612802"
                },
                {
                    nome: "São Benedito do Sul",
                    uf: "PE",
                    ibge: "2612901"
                },
                {
                    nome: "São Bento do Una",
                    uf: "PE",
                    ibge: "2613008"
                },
                {
                    nome: "São Caitano",
                    uf: "PE",
                    ibge: "2613107"
                },
                {
                    nome: "São João",
                    uf: "PE",
                    ibge: "2613206"
                },
                {
                    nome: "São Joaquim do Monte",
                    uf: "PE",
                    ibge: "2613305"
                },
                {
                    nome: "São José da Coroa Grande",
                    uf: "PE",
                    ibge: "2613404"
                },
                {
                    nome: "São José do Belmonte",
                    uf: "PE",
                    ibge: "2613503"
                },
                {
                    nome: "São José do Egito",
                    uf: "PE",
                    ibge: "2613602"
                },
                {
                    nome: "São Lourenço da Mata",
                    uf: "PE",
                    ibge: "2613701"
                },
                {
                    nome: "São Vicente Ferrer",
                    uf: "PE",
                    ibge: "2613800"
                },
                {
                    nome: "Serra Talhada",
                    uf: "PE",
                    ibge: "2613909"
                },
                {
                    nome: "Serrita",
                    uf: "PE",
                    ibge: "2614006"
                },
                {
                    nome: "Sertânia",
                    uf: "PE",
                    ibge: "2614105"
                },
                {
                    nome: "Sirinhaém",
                    uf: "PE",
                    ibge: "2614204"
                },
                {
                    nome: "Moreilândia",
                    uf: "PE",
                    ibge: "2614303"
                },
                {
                    nome: "Solidão",
                    uf: "PE",
                    ibge: "2614402"
                },
                {
                    nome: "Surubim",
                    uf: "PE",
                    ibge: "2614501"
                },
                {
                    nome: "Tabira",
                    uf: "PE",
                    ibge: "2614600"
                },
                {
                    nome: "Tacaimbó",
                    uf: "PE",
                    ibge: "2614709"
                },
                {
                    nome: "Tacaratu",
                    uf: "PE",
                    ibge: "2614808"
                },
                {
                    nome: "Tamandaré",
                    uf: "PE",
                    ibge: "2614857"
                },
                {
                    nome: "Taquaritinga do Norte",
                    uf: "PE",
                    ibge: "2615003"
                },
                {
                    nome: "Terezinha",
                    uf: "PE",
                    ibge: "2615102"
                },
                {
                    nome: "Terra Nova",
                    uf: "PE",
                    ibge: "2615201"
                },
                {
                    nome: "Timbaúba",
                    uf: "PE",
                    ibge: "2615300"
                },
                {
                    nome: "Toritama",
                    uf: "PE",
                    ibge: "2615409"
                },
                {
                    nome: "Tracunhaém",
                    uf: "PE",
                    ibge: "2615508"
                },
                {
                    nome: "Trindade",
                    uf: "PE",
                    ibge: "2615607"
                },
                {
                    nome: "Triunfo",
                    uf: "PE",
                    ibge: "2615706"
                },
                {
                    nome: "Tupanatinga",
                    uf: "PE",
                    ibge: "2615805"
                },
                {
                    nome: "Tuparetama",
                    uf: "PE",
                    ibge: "2615904"
                },
                {
                    nome: "Venturosa",
                    uf: "PE",
                    ibge: "2616001"
                },
                {
                    nome: "Verdejante",
                    uf: "PE",
                    ibge: "2616100"
                },
                {
                    nome: "Vertente do Lério",
                    uf: "PE",
                    ibge: "2616183"
                },
                {
                    nome: "Vertentes",
                    uf: "PE",
                    ibge: "2616209"
                },
                {
                    nome: "Vicência",
                    uf: "PE",
                    ibge: "2616308"
                },
                {
                    nome: "Vitória de Santo Antão",
                    uf: "PE",
                    ibge: "2616407"
                },
                {
                    nome: "Xexéu",
                    uf: "PE",
                    ibge: "2616506"
                },
                {
                    nome: "Água Branca",
                    uf: "AL",
                    ibge: "2700102"
                },
                {
                    nome: "Anadia",
                    uf: "AL",
                    ibge: "2700201"
                },
                {
                    nome: "Arapiraca",
                    uf: "AL",
                    ibge: "2700300"
                },
                {
                    nome: "Atalaia",
                    uf: "AL",
                    ibge: "2700409"
                },
                {
                    nome: "Barra de Santo Antônio",
                    uf: "AL",
                    ibge: "2700508"
                },
                {
                    nome: "Barra de São Miguel",
                    uf: "AL",
                    ibge: "2700607"
                },
                {
                    nome: "Batalha",
                    uf: "AL",
                    ibge: "2700706"
                },
                {
                    nome: "Belém",
                    uf: "AL",
                    ibge: "2700805"
                },
                {
                    nome: "Belo Monte",
                    uf: "AL",
                    ibge: "2700904"
                },
                {
                    nome: "Boca da Mata",
                    uf: "AL",
                    ibge: "2701001"
                },
                {
                    nome: "Branquinha",
                    uf: "AL",
                    ibge: "2701100"
                },
                {
                    nome: "Cacimbinhas",
                    uf: "AL",
                    ibge: "2701209"
                },
                {
                    nome: "Cajueiro",
                    uf: "AL",
                    ibge: "2701308"
                },
                {
                    nome: "Campestre",
                    uf: "AL",
                    ibge: "2701357"
                },
                {
                    nome: "Campo Alegre",
                    uf: "AL",
                    ibge: "2701407"
                },
                {
                    nome: "Campo Grande",
                    uf: "AL",
                    ibge: "2701506"
                },
                {
                    nome: "Canapi",
                    uf: "AL",
                    ibge: "2701605"
                },
                {
                    nome: "Capela",
                    uf: "AL",
                    ibge: "2701704"
                },
                {
                    nome: "Carneiros",
                    uf: "AL",
                    ibge: "2701803"
                },
                {
                    nome: "Chã Preta",
                    uf: "AL",
                    ibge: "2701902"
                },
                {
                    nome: "Coité do Nóia",
                    uf: "AL",
                    ibge: "2702009"
                },
                {
                    nome: "Colônia Leopoldina",
                    uf: "AL",
                    ibge: "2702108"
                },
                {
                    nome: "Coqueiro Seco",
                    uf: "AL",
                    ibge: "2702207"
                },
                {
                    nome: "Coruripe",
                    uf: "AL",
                    ibge: "2702306"
                },
                {
                    nome: "Craíbas",
                    uf: "AL",
                    ibge: "2702355"
                },
                {
                    nome: "Delmiro Gouveia",
                    uf: "AL",
                    ibge: "2702405"
                },
                {
                    nome: "Dois Riachos",
                    uf: "AL",
                    ibge: "2702504"
                },
                {
                    nome: "Estrela de Alagoas",
                    uf: "AL",
                    ibge: "2702553"
                },
                {
                    nome: "Feira Grande",
                    uf: "AL",
                    ibge: "2702603"
                },
                {
                    nome: "Feliz Deserto",
                    uf: "AL",
                    ibge: "2702702"
                },
                {
                    nome: "Flexeiras",
                    uf: "AL",
                    ibge: "2702801"
                },
                {
                    nome: "Girau do Ponciano",
                    uf: "AL",
                    ibge: "2702900"
                },
                {
                    nome: "Ibateguara",
                    uf: "AL",
                    ibge: "2703007"
                },
                {
                    nome: "Igaci",
                    uf: "AL",
                    ibge: "2703106"
                },
                {
                    nome: "Igreja Nova",
                    uf: "AL",
                    ibge: "2703205"
                },
                {
                    nome: "Inhapi",
                    uf: "AL",
                    ibge: "2703304"
                },
                {
                    nome: "Jacaré dos Homens",
                    uf: "AL",
                    ibge: "2703403"
                },
                {
                    nome: "Jacuípe",
                    uf: "AL",
                    ibge: "2703502"
                },
                {
                    nome: "Japaratinga",
                    uf: "AL",
                    ibge: "2703601"
                },
                {
                    nome: "Jaramataia",
                    uf: "AL",
                    ibge: "2703700"
                },
                {
                    nome: "Jequiá da Praia",
                    uf: "AL",
                    ibge: "2703759"
                },
                {
                    nome: "Joaquim Gomes",
                    uf: "AL",
                    ibge: "2703809"
                },
                {
                    nome: "Jundiá",
                    uf: "AL",
                    ibge: "2703908"
                },
                {
                    nome: "Junqueiro",
                    uf: "AL",
                    ibge: "2704005"
                },
                {
                    nome: "Lagoa da Canoa",
                    uf: "AL",
                    ibge: "2704104"
                },
                {
                    nome: "Limoeiro de Anadia",
                    uf: "AL",
                    ibge: "2704203"
                },
                {
                    nome: "Maceió",
                    uf: "AL",
                    ibge: "2704302"
                },
                {
                    nome: "Major Isidoro",
                    uf: "AL",
                    ibge: "2704401"
                },
                {
                    nome: "Maragogi",
                    uf: "AL",
                    ibge: "2704500"
                },
                {
                    nome: "Maravilha",
                    uf: "AL",
                    ibge: "2704609"
                },
                {
                    nome: "Marechal Deodoro",
                    uf: "AL",
                    ibge: "2704708"
                },
                {
                    nome: "Maribondo",
                    uf: "AL",
                    ibge: "2704807"
                },
                {
                    nome: "Mar Vermelho",
                    uf: "AL",
                    ibge: "2704906"
                },
                {
                    nome: "Mata Grande",
                    uf: "AL",
                    ibge: "2705002"
                },
                {
                    nome: "Matriz de Camaragibe",
                    uf: "AL",
                    ibge: "2705101"
                },
                {
                    nome: "Messias",
                    uf: "AL",
                    ibge: "2705200"
                },
                {
                    nome: "Minador do Negrão",
                    uf: "AL",
                    ibge: "2705309"
                },
                {
                    nome: "Monteirópolis",
                    uf: "AL",
                    ibge: "2705408"
                },
                {
                    nome: "Murici",
                    uf: "AL",
                    ibge: "2705507"
                },
                {
                    nome: "Novo Lino",
                    uf: "AL",
                    ibge: "2705606"
                },
                {
                    nome: "Olho D'Água das Flores",
                    uf: "AL",
                    ibge: "2705705"
                },
                {
                    nome: "Olho D'Água do Casado",
                    uf: "AL",
                    ibge: "2705804"
                },
                {
                    nome: "Olho D'Água Grande",
                    uf: "AL",
                    ibge: "2705903"
                },
                {
                    nome: "Olivença",
                    uf: "AL",
                    ibge: "2706000"
                },
                {
                    nome: "Ouro Branco",
                    uf: "AL",
                    ibge: "2706109"
                },
                {
                    nome: "Palestina",
                    uf: "AL",
                    ibge: "2706208"
                },
                {
                    nome: "Palmeira dos Índios",
                    uf: "AL",
                    ibge: "2706307"
                },
                {
                    nome: "Pão de Açúcar",
                    uf: "AL",
                    ibge: "2706406"
                },
                {
                    nome: "Pariconha",
                    uf: "AL",
                    ibge: "2706422"
                },
                {
                    nome: "Paripueira",
                    uf: "AL",
                    ibge: "2706448"
                },
                {
                    nome: "Passo de Camaragibe",
                    uf: "AL",
                    ibge: "2706505"
                },
                {
                    nome: "Paulo Jacinto",
                    uf: "AL",
                    ibge: "2706604"
                },
                {
                    nome: "Penedo",
                    uf: "AL",
                    ibge: "2706703"
                },
                {
                    nome: "Piaçabuçu",
                    uf: "AL",
                    ibge: "2706802"
                },
                {
                    nome: "Pilar",
                    uf: "AL",
                    ibge: "2706901"
                },
                {
                    nome: "Pindoba",
                    uf: "AL",
                    ibge: "2707008"
                },
                {
                    nome: "Piranhas",
                    uf: "AL",
                    ibge: "2707107"
                },
                {
                    nome: "Poço das Trincheiras",
                    uf: "AL",
                    ibge: "2707206"
                },
                {
                    nome: "Porto Calvo",
                    uf: "AL",
                    ibge: "2707305"
                },
                {
                    nome: "Porto de Pedras",
                    uf: "AL",
                    ibge: "2707404"
                },
                {
                    nome: "Porto Real do Colégio",
                    uf: "AL",
                    ibge: "2707503"
                },
                {
                    nome: "Quebrangulo",
                    uf: "AL",
                    ibge: "2707602"
                },
                {
                    nome: "Rio Largo",
                    uf: "AL",
                    ibge: "2707701"
                },
                {
                    nome: "Roteiro",
                    uf: "AL",
                    ibge: "2707800"
                },
                {
                    nome: "Santa Luzia do Norte",
                    uf: "AL",
                    ibge: "2707909"
                },
                {
                    nome: "Santana do Ipanema",
                    uf: "AL",
                    ibge: "2708006"
                },
                {
                    nome: "Santana do Mundaú",
                    uf: "AL",
                    ibge: "2708105"
                },
                {
                    nome: "São Brás",
                    uf: "AL",
                    ibge: "2708204"
                },
                {
                    nome: "São José da Laje",
                    uf: "AL",
                    ibge: "2708303"
                },
                {
                    nome: "São José da Tapera",
                    uf: "AL",
                    ibge: "2708402"
                },
                {
                    nome: "São Luís do Quitunde",
                    uf: "AL",
                    ibge: "2708501"
                },
                {
                    nome: "São Miguel dos Campos",
                    uf: "AL",
                    ibge: "2708600"
                },
                {
                    nome: "São Miguel dos Milagres",
                    uf: "AL",
                    ibge: "2708709"
                },
                {
                    nome: "São Sebastião",
                    uf: "AL",
                    ibge: "2708808"
                },
                {
                    nome: "Satuba",
                    uf: "AL",
                    ibge: "2708907"
                },
                {
                    nome: "Senador Rui Palmeira",
                    uf: "AL",
                    ibge: "2708956"
                },
                {
                    nome: "Tanque D'Arca",
                    uf: "AL",
                    ibge: "2709004"
                },
                {
                    nome: "Taquarana",
                    uf: "AL",
                    ibge: "2709103"
                },
                {
                    nome: "Teotônio Vilela",
                    uf: "AL",
                    ibge: "2709152"
                },
                {
                    nome: "Traipu",
                    uf: "AL",
                    ibge: "2709202"
                },
                {
                    nome: "União dos Palmares",
                    uf: "AL",
                    ibge: "2709301"
                },
                {
                    nome: "Viçosa",
                    uf: "AL",
                    ibge: "2709400"
                },
                {
                    nome: "Amparo de São Francisco",
                    uf: "SE",
                    ibge: "2800100"
                },
                {
                    nome: "Aquidabã",
                    uf: "SE",
                    ibge: "2800209"
                },
                {
                    nome: "Aracaju",
                    uf: "SE",
                    ibge: "2800308"
                },
                {
                    nome: "Arauá",
                    uf: "SE",
                    ibge: "2800407"
                },
                {
                    nome: "Areia Branca",
                    uf: "SE",
                    ibge: "2800506"
                },
                {
                    nome: "Barra dos Coqueiros",
                    uf: "SE",
                    ibge: "2800605"
                },
                {
                    nome: "Boquim",
                    uf: "SE",
                    ibge: "2800670"
                },
                {
                    nome: "Brejo Grande",
                    uf: "SE",
                    ibge: "2800704"
                },
                {
                    nome: "Campo do Brito",
                    uf: "SE",
                    ibge: "2801009"
                },
                {
                    nome: "Canhoba",
                    uf: "SE",
                    ibge: "2801108"
                },
                {
                    nome: "Canindé de São Francisco",
                    uf: "SE",
                    ibge: "2801207"
                },
                {
                    nome: "Capela",
                    uf: "SE",
                    ibge: "2801306"
                },
                {
                    nome: "Carira",
                    uf: "SE",
                    ibge: "2801405"
                },
                {
                    nome: "Carmópolis",
                    uf: "SE",
                    ibge: "2801504"
                },
                {
                    nome: "Cedro de São João",
                    uf: "SE",
                    ibge: "2801603"
                },
                {
                    nome: "Cristinápolis",
                    uf: "SE",
                    ibge: "2801702"
                },
                {
                    nome: "Cumbe",
                    uf: "SE",
                    ibge: "2801900"
                },
                {
                    nome: "Divina Pastora",
                    uf: "SE",
                    ibge: "2802007"
                },
                {
                    nome: "Estância",
                    uf: "SE",
                    ibge: "2802106"
                },
                {
                    nome: "Feira Nova",
                    uf: "SE",
                    ibge: "2802205"
                },
                {
                    nome: "Frei Paulo",
                    uf: "SE",
                    ibge: "2802304"
                },
                {
                    nome: "Gararu",
                    uf: "SE",
                    ibge: "2802403"
                },
                {
                    nome: "General Maynard",
                    uf: "SE",
                    ibge: "2802502"
                },
                {
                    nome: "Gracho Cardoso",
                    uf: "SE",
                    ibge: "2802601"
                },
                {
                    nome: "Ilha das Flores",
                    uf: "SE",
                    ibge: "2802700"
                },
                {
                    nome: "Indiaroba",
                    uf: "SE",
                    ibge: "2802809"
                },
                {
                    nome: "Itabaiana",
                    uf: "SE",
                    ibge: "2802908"
                },
                {
                    nome: "Itabaianinha",
                    uf: "SE",
                    ibge: "2803005"
                },
                {
                    nome: "Itabi",
                    uf: "SE",
                    ibge: "2803104"
                },
                {
                    nome: "Itaporanga D'Ajuda",
                    uf: "SE",
                    ibge: "2803203"
                },
                {
                    nome: "Japaratuba",
                    uf: "SE",
                    ibge: "2803302"
                },
                {
                    nome: "Japoatã",
                    uf: "SE",
                    ibge: "2803401"
                },
                {
                    nome: "Lagarto",
                    uf: "SE",
                    ibge: "2803500"
                },
                {
                    nome: "Laranjeiras",
                    uf: "SE",
                    ibge: "2803609"
                },
                {
                    nome: "Macambira",
                    uf: "SE",
                    ibge: "2803708"
                },
                {
                    nome: "Malhada dos Bois",
                    uf: "SE",
                    ibge: "2803807"
                },
                {
                    nome: "Malhador",
                    uf: "SE",
                    ibge: "2803906"
                },
                {
                    nome: "Maruim",
                    uf: "SE",
                    ibge: "2804003"
                },
                {
                    nome: "Moita Bonita",
                    uf: "SE",
                    ibge: "2804102"
                },
                {
                    nome: "Monte Alegre de Sergipe",
                    uf: "SE",
                    ibge: "2804201"
                },
                {
                    nome: "Muribeca",
                    uf: "SE",
                    ibge: "2804300"
                },
                {
                    nome: "Neópolis",
                    uf: "SE",
                    ibge: "2804409"
                },
                {
                    nome: "Nossa Senhora Aparecida",
                    uf: "SE",
                    ibge: "2804458"
                },
                {
                    nome: "Nossa Senhora da Glória",
                    uf: "SE",
                    ibge: "2804508"
                },
                {
                    nome: "Nossa Senhora das Dores",
                    uf: "SE",
                    ibge: "2804607"
                },
                {
                    nome: "Nossa Senhora de Lourdes",
                    uf: "SE",
                    ibge: "2804706"
                },
                {
                    nome: "Nossa Senhora do Socorro",
                    uf: "SE",
                    ibge: "2804805"
                },
                {
                    nome: "Pacatuba",
                    uf: "SE",
                    ibge: "2804904"
                },
                {
                    nome: "Pedra Mole",
                    uf: "SE",
                    ibge: "2805000"
                },
                {
                    nome: "Pedrinhas",
                    uf: "SE",
                    ibge: "2805109"
                },
                {
                    nome: "Pinhão",
                    uf: "SE",
                    ibge: "2805208"
                },
                {
                    nome: "Pirambu",
                    uf: "SE",
                    ibge: "2805307"
                },
                {
                    nome: "Poço Redondo",
                    uf: "SE",
                    ibge: "2805406"
                },
                {
                    nome: "Poço Verde",
                    uf: "SE",
                    ibge: "2805505"
                },
                {
                    nome: "Porto da Folha",
                    uf: "SE",
                    ibge: "2805604"
                },
                {
                    nome: "Propriá",
                    uf: "SE",
                    ibge: "2805703"
                },
                {
                    nome: "Riachão do Dantas",
                    uf: "SE",
                    ibge: "2805802"
                },
                {
                    nome: "Riachuelo",
                    uf: "SE",
                    ibge: "2805901"
                },
                {
                    nome: "Ribeirópolis",
                    uf: "SE",
                    ibge: "2806008"
                },
                {
                    nome: "Rosário do Catete",
                    uf: "SE",
                    ibge: "2806107"
                },
                {
                    nome: "Salgado",
                    uf: "SE",
                    ibge: "2806206"
                },
                {
                    nome: "Santa Luzia do Itanhy",
                    uf: "SE",
                    ibge: "2806305"
                },
                {
                    nome: "Santana do São Francisco",
                    uf: "SE",
                    ibge: "2806404"
                },
                {
                    nome: "Santa Rosa de Lima",
                    uf: "SE",
                    ibge: "2806503"
                },
                {
                    nome: "Santo Amaro das Brotas",
                    uf: "SE",
                    ibge: "2806602"
                },
                {
                    nome: "São Cristóvão",
                    uf: "SE",
                    ibge: "2806701"
                },
                {
                    nome: "São Domingos",
                    uf: "SE",
                    ibge: "2806800"
                },
                {
                    nome: "São Francisco",
                    uf: "SE",
                    ibge: "2806909"
                },
                {
                    nome: "São Miguel do Aleixo",
                    uf: "SE",
                    ibge: "2807006"
                },
                {
                    nome: "Simão Dias",
                    uf: "SE",
                    ibge: "2807105"
                },
                {
                    nome: "Siriri",
                    uf: "SE",
                    ibge: "2807204"
                },
                {
                    nome: "Telha",
                    uf: "SE",
                    ibge: "2807303"
                },
                {
                    nome: "Tobias Barreto",
                    uf: "SE",
                    ibge: "2807402"
                },
                {
                    nome: "Tomar do Geru",
                    uf: "SE",
                    ibge: "2807501"
                },
                {
                    nome: "Umbaúba",
                    uf: "SE",
                    ibge: "2807600"
                },
                {
                    nome: "Abaíra",
                    uf: "BA",
                    ibge: "2900108"
                },
                {
                    nome: "Abaré",
                    uf: "BA",
                    ibge: "2900207"
                },
                {
                    nome: "Acajutiba",
                    uf: "BA",
                    ibge: "2900306"
                },
                {
                    nome: "Adustina",
                    uf: "BA",
                    ibge: "2900355"
                },
                {
                    nome: "Água Fria",
                    uf: "BA",
                    ibge: "2900405"
                },
                {
                    nome: "Érico Cardoso",
                    uf: "BA",
                    ibge: "2900504"
                },
                {
                    nome: "Aiquara",
                    uf: "BA",
                    ibge: "2900603"
                },
                {
                    nome: "Alagoinhas",
                    uf: "BA",
                    ibge: "2900702"
                },
                {
                    nome: "Alcobaça",
                    uf: "BA",
                    ibge: "2900801"
                },
                {
                    nome: "Almadina",
                    uf: "BA",
                    ibge: "2900900"
                },
                {
                    nome: "Amargosa",
                    uf: "BA",
                    ibge: "2901007"
                },
                {
                    nome: "Amélia Rodrigues",
                    uf: "BA",
                    ibge: "2901106"
                },
                {
                    nome: "América Dourada",
                    uf: "BA",
                    ibge: "2901155"
                },
                {
                    nome: "Anagé",
                    uf: "BA",
                    ibge: "2901205"
                },
                {
                    nome: "Andaraí",
                    uf: "BA",
                    ibge: "2901304"
                },
                {
                    nome: "Andorinha",
                    uf: "BA",
                    ibge: "2901353"
                },
                {
                    nome: "Angical",
                    uf: "BA",
                    ibge: "2901403"
                },
                {
                    nome: "Anguera",
                    uf: "BA",
                    ibge: "2901502"
                },
                {
                    nome: "Antas",
                    uf: "BA",
                    ibge: "2901601"
                },
                {
                    nome: "Antônio Cardoso",
                    uf: "BA",
                    ibge: "2901700"
                },
                {
                    nome: "Antônio Gonçalves",
                    uf: "BA",
                    ibge: "2901809"
                },
                {
                    nome: "Aporá",
                    uf: "BA",
                    ibge: "2901908"
                },
                {
                    nome: "Apuarema",
                    uf: "BA",
                    ibge: "2901957"
                },
                {
                    nome: "Aracatu",
                    uf: "BA",
                    ibge: "2902005"
                },
                {
                    nome: "Araças",
                    uf: "BA",
                    ibge: "2902054"
                },
                {
                    nome: "Araci",
                    uf: "BA",
                    ibge: "2902104"
                },
                {
                    nome: "Aramari",
                    uf: "BA",
                    ibge: "2902203"
                },
                {
                    nome: "Arataca",
                    uf: "BA",
                    ibge: "2902252"
                },
                {
                    nome: "Aratuípe",
                    uf: "BA",
                    ibge: "2902302"
                },
                {
                    nome: "Aurelino Leal",
                    uf: "BA",
                    ibge: "2902401"
                },
                {
                    nome: "Baianópolis",
                    uf: "BA",
                    ibge: "2902500"
                },
                {
                    nome: "Baixa Grande",
                    uf: "BA",
                    ibge: "2902609"
                },
                {
                    nome: "Banzaê",
                    uf: "BA",
                    ibge: "2902658"
                },
                {
                    nome: "Barra",
                    uf: "BA",
                    ibge: "2902708"
                },
                {
                    nome: "Barra da Estiva",
                    uf: "BA",
                    ibge: "2902807"
                },
                {
                    nome: "Barra do Choça",
                    uf: "BA",
                    ibge: "2902906"
                },
                {
                    nome: "Barra do Mendes",
                    uf: "BA",
                    ibge: "2903003"
                },
                {
                    nome: "Barra do Rocha",
                    uf: "BA",
                    ibge: "2903102"
                },
                {
                    nome: "Barreiras",
                    uf: "BA",
                    ibge: "2903201"
                },
                {
                    nome: "Barro Alto",
                    uf: "BA",
                    ibge: "2903235"
                },
                {
                    nome: "Barrocas",
                    uf: "BA",
                    ibge: "2903276"
                },
                {
                    nome: "Barro Preto",
                    uf: "BA",
                    ibge: "2903300"
                },
                {
                    nome: "Belmonte",
                    uf: "BA",
                    ibge: "2903409"
                },
                {
                    nome: "Belo Campo",
                    uf: "BA",
                    ibge: "2903508"
                },
                {
                    nome: "Biritinga",
                    uf: "BA",
                    ibge: "2903607"
                },
                {
                    nome: "Boa Nova",
                    uf: "BA",
                    ibge: "2903706"
                },
                {
                    nome: "Boa Vista do Tupim",
                    uf: "BA",
                    ibge: "2903805"
                },
                {
                    nome: "Bom Jesus da Lapa",
                    uf: "BA",
                    ibge: "2903904"
                },
                {
                    nome: "Bom Jesus da Serra",
                    uf: "BA",
                    ibge: "2903953"
                },
                {
                    nome: "Boninal",
                    uf: "BA",
                    ibge: "2904001"
                },
                {
                    nome: "Bonito",
                    uf: "BA",
                    ibge: "2904050"
                },
                {
                    nome: "Boquira",
                    uf: "BA",
                    ibge: "2904100"
                },
                {
                    nome: "Botuporã",
                    uf: "BA",
                    ibge: "2904209"
                },
                {
                    nome: "Brejões",
                    uf: "BA",
                    ibge: "2904308"
                },
                {
                    nome: "Brejolândia",
                    uf: "BA",
                    ibge: "2904407"
                },
                {
                    nome: "Brotas de Macaúbas",
                    uf: "BA",
                    ibge: "2904506"
                },
                {
                    nome: "Brumado",
                    uf: "BA",
                    ibge: "2904605"
                },
                {
                    nome: "Buerarema",
                    uf: "BA",
                    ibge: "2904704"
                },
                {
                    nome: "Buritirama",
                    uf: "BA",
                    ibge: "2904753"
                },
                {
                    nome: "Caatiba",
                    uf: "BA",
                    ibge: "2904803"
                },
                {
                    nome: "Cabaceiras do Paraguaçu",
                    uf: "BA",
                    ibge: "2904852"
                },
                {
                    nome: "Cachoeira",
                    uf: "BA",
                    ibge: "2904902"
                },
                {
                    nome: "Caculé",
                    uf: "BA",
                    ibge: "2905008"
                },
                {
                    nome: "Caém",
                    uf: "BA",
                    ibge: "2905107"
                },
                {
                    nome: "Caetanos",
                    uf: "BA",
                    ibge: "2905156"
                },
                {
                    nome: "Caetité",
                    uf: "BA",
                    ibge: "2905206"
                },
                {
                    nome: "Cafarnaum",
                    uf: "BA",
                    ibge: "2905305"
                },
                {
                    nome: "Cairu",
                    uf: "BA",
                    ibge: "2905404"
                },
                {
                    nome: "Caldeirão Grande",
                    uf: "BA",
                    ibge: "2905503"
                },
                {
                    nome: "Camacan",
                    uf: "BA",
                    ibge: "2905602"
                },
                {
                    nome: "Camaçari",
                    uf: "BA",
                    ibge: "2905701"
                },
                {
                    nome: "Camamu",
                    uf: "BA",
                    ibge: "2905800"
                },
                {
                    nome: "Campo Alegre de Lourdes",
                    uf: "BA",
                    ibge: "2905909"
                },
                {
                    nome: "Campo Formoso",
                    uf: "BA",
                    ibge: "2906006"
                },
                {
                    nome: "Canápolis",
                    uf: "BA",
                    ibge: "2906105"
                },
                {
                    nome: "Canarana",
                    uf: "BA",
                    ibge: "2906204"
                },
                {
                    nome: "Canavieiras",
                    uf: "BA",
                    ibge: "2906303"
                },
                {
                    nome: "Candeal",
                    uf: "BA",
                    ibge: "2906402"
                },
                {
                    nome: "Candeias",
                    uf: "BA",
                    ibge: "2906501"
                },
                {
                    nome: "Candiba",
                    uf: "BA",
                    ibge: "2906600"
                },
                {
                    nome: "Cândido Sales",
                    uf: "BA",
                    ibge: "2906709"
                },
                {
                    nome: "Cansanção",
                    uf: "BA",
                    ibge: "2906808"
                },
                {
                    nome: "Canudos",
                    uf: "BA",
                    ibge: "2906824"
                },
                {
                    nome: "Capela do Alto Alegre",
                    uf: "BA",
                    ibge: "2906857"
                },
                {
                    nome: "Capim Grosso",
                    uf: "BA",
                    ibge: "2906873"
                },
                {
                    nome: "Caraíbas",
                    uf: "BA",
                    ibge: "2906899"
                },
                {
                    nome: "Caravelas",
                    uf: "BA",
                    ibge: "2906907"
                },
                {
                    nome: "Cardeal da Silva",
                    uf: "BA",
                    ibge: "2907004"
                },
                {
                    nome: "Carinhanha",
                    uf: "BA",
                    ibge: "2907103"
                },
                {
                    nome: "Casa Nova",
                    uf: "BA",
                    ibge: "2907202"
                },
                {
                    nome: "Castro Alves",
                    uf: "BA",
                    ibge: "2907301"
                },
                {
                    nome: "Catolândia",
                    uf: "BA",
                    ibge: "2907400"
                },
                {
                    nome: "Catu",
                    uf: "BA",
                    ibge: "2907509"
                },
                {
                    nome: "Caturama",
                    uf: "BA",
                    ibge: "2907558"
                },
                {
                    nome: "Central",
                    uf: "BA",
                    ibge: "2907608"
                },
                {
                    nome: "Chorrochó",
                    uf: "BA",
                    ibge: "2907707"
                },
                {
                    nome: "Cícero Dantas",
                    uf: "BA",
                    ibge: "2907806"
                },
                {
                    nome: "Cipó",
                    uf: "BA",
                    ibge: "2907905"
                },
                {
                    nome: "Coaraci",
                    uf: "BA",
                    ibge: "2908002"
                },
                {
                    nome: "Cocos",
                    uf: "BA",
                    ibge: "2908101"
                },
                {
                    nome: "Conceição da Feira",
                    uf: "BA",
                    ibge: "2908200"
                },
                {
                    nome: "Conceição do Almeida",
                    uf: "BA",
                    ibge: "2908309"
                },
                {
                    nome: "Conceição do Coité",
                    uf: "BA",
                    ibge: "2908408"
                },
                {
                    nome: "Conceição do Jacuípe",
                    uf: "BA",
                    ibge: "2908507"
                },
                {
                    nome: "Conde",
                    uf: "BA",
                    ibge: "2908606"
                },
                {
                    nome: "Condeúba",
                    uf: "BA",
                    ibge: "2908705"
                },
                {
                    nome: "Contendas do Sincorá",
                    uf: "BA",
                    ibge: "2908804"
                },
                {
                    nome: "Coração de Maria",
                    uf: "BA",
                    ibge: "2908903"
                },
                {
                    nome: "Cordeiros",
                    uf: "BA",
                    ibge: "2909000"
                },
                {
                    nome: "Coribe",
                    uf: "BA",
                    ibge: "2909109"
                },
                {
                    nome: "Coronel João Sá",
                    uf: "BA",
                    ibge: "2909208"
                },
                {
                    nome: "Correntina",
                    uf: "BA",
                    ibge: "2909307"
                },
                {
                    nome: "Cotegipe",
                    uf: "BA",
                    ibge: "2909406"
                },
                {
                    nome: "Cravolândia",
                    uf: "BA",
                    ibge: "2909505"
                },
                {
                    nome: "Crisópolis",
                    uf: "BA",
                    ibge: "2909604"
                },
                {
                    nome: "Cristópolis",
                    uf: "BA",
                    ibge: "2909703"
                },
                {
                    nome: "Cruz das Almas",
                    uf: "BA",
                    ibge: "2909802"
                },
                {
                    nome: "Curaçá",
                    uf: "BA",
                    ibge: "2909901"
                },
                {
                    nome: "Dário Meira",
                    uf: "BA",
                    ibge: "2910008"
                },
                {
                    nome: "Dias D'Ávila",
                    uf: "BA",
                    ibge: "2910057"
                },
                {
                    nome: "Dom Basílio",
                    uf: "BA",
                    ibge: "2910107"
                },
                {
                    nome: "Dom Macedo Costa",
                    uf: "BA",
                    ibge: "2910206"
                },
                {
                    nome: "Elísio Medrado",
                    uf: "BA",
                    ibge: "2910305"
                },
                {
                    nome: "Encruzilhada",
                    uf: "BA",
                    ibge: "2910404"
                },
                {
                    nome: "Entre Rios",
                    uf: "BA",
                    ibge: "2910503"
                },
                {
                    nome: "Esplanada",
                    uf: "BA",
                    ibge: "2910602"
                },
                {
                    nome: "Euclides da Cunha",
                    uf: "BA",
                    ibge: "2910701"
                },
                {
                    nome: "Eunápolis",
                    uf: "BA",
                    ibge: "2910727"
                },
                {
                    nome: "Fátima",
                    uf: "BA",
                    ibge: "2910750"
                },
                {
                    nome: "Feira da Mata",
                    uf: "BA",
                    ibge: "2910776"
                },
                {
                    nome: "Feira de Santana",
                    uf: "BA",
                    ibge: "2910800"
                },
                {
                    nome: "Filadélfia",
                    uf: "BA",
                    ibge: "2910859"
                },
                {
                    nome: "Firmino Alves",
                    uf: "BA",
                    ibge: "2910909"
                },
                {
                    nome: "Floresta Azul",
                    uf: "BA",
                    ibge: "2911006"
                },
                {
                    nome: "Formosa do Rio Preto",
                    uf: "BA",
                    ibge: "2911105"
                },
                {
                    nome: "Gandu",
                    uf: "BA",
                    ibge: "2911204"
                },
                {
                    nome: "Gavião",
                    uf: "BA",
                    ibge: "2911253"
                },
                {
                    nome: "Gentio do Ouro",
                    uf: "BA",
                    ibge: "2911303"
                },
                {
                    nome: "Glória",
                    uf: "BA",
                    ibge: "2911402"
                },
                {
                    nome: "Gongogi",
                    uf: "BA",
                    ibge: "2911501"
                },
                {
                    nome: "Governador Mangabeira",
                    uf: "BA",
                    ibge: "2911600"
                },
                {
                    nome: "Guajeru",
                    uf: "BA",
                    ibge: "2911659"
                },
                {
                    nome: "Guanambi",
                    uf: "BA",
                    ibge: "2911709"
                },
                {
                    nome: "Guaratinga",
                    uf: "BA",
                    ibge: "2911808"
                },
                {
                    nome: "Heliópolis",
                    uf: "BA",
                    ibge: "2911857"
                },
                {
                    nome: "Iaçu",
                    uf: "BA",
                    ibge: "2911907"
                },
                {
                    nome: "Ibiassucê",
                    uf: "BA",
                    ibge: "2912004"
                },
                {
                    nome: "Ibicaraí",
                    uf: "BA",
                    ibge: "2912103"
                },
                {
                    nome: "Ibicoara",
                    uf: "BA",
                    ibge: "2912202"
                },
                {
                    nome: "Ibicuí",
                    uf: "BA",
                    ibge: "2912301"
                },
                {
                    nome: "Ibipeba",
                    uf: "BA",
                    ibge: "2912400"
                },
                {
                    nome: "Ibipitanga",
                    uf: "BA",
                    ibge: "2912509"
                },
                {
                    nome: "Ibiquera",
                    uf: "BA",
                    ibge: "2912608"
                },
                {
                    nome: "Ibirapitanga",
                    uf: "BA",
                    ibge: "2912707"
                },
                {
                    nome: "Ibirapuã",
                    uf: "BA",
                    ibge: "2912806"
                },
                {
                    nome: "Ibirataia",
                    uf: "BA",
                    ibge: "2912905"
                },
                {
                    nome: "Ibitiara",
                    uf: "BA",
                    ibge: "2913002"
                },
                {
                    nome: "Ibititá",
                    uf: "BA",
                    ibge: "2913101"
                },
                {
                    nome: "Ibotirama",
                    uf: "BA",
                    ibge: "2913200"
                },
                {
                    nome: "Ichu",
                    uf: "BA",
                    ibge: "2913309"
                },
                {
                    nome: "Igaporã",
                    uf: "BA",
                    ibge: "2913408"
                },
                {
                    nome: "Igrapiúna",
                    uf: "BA",
                    ibge: "2913457"
                },
                {
                    nome: "Iguaí",
                    uf: "BA",
                    ibge: "2913507"
                },
                {
                    nome: "Ilhéus",
                    uf: "BA",
                    ibge: "2913606"
                },
                {
                    nome: "Inhambupe",
                    uf: "BA",
                    ibge: "2913705"
                },
                {
                    nome: "Ipecaetá",
                    uf: "BA",
                    ibge: "2913804"
                },
                {
                    nome: "Ipiaú",
                    uf: "BA",
                    ibge: "2913903"
                },
                {
                    nome: "Ipirá",
                    uf: "BA",
                    ibge: "2914000"
                },
                {
                    nome: "Ipupiara",
                    uf: "BA",
                    ibge: "2914109"
                },
                {
                    nome: "Irajuba",
                    uf: "BA",
                    ibge: "2914208"
                },
                {
                    nome: "Iramaia",
                    uf: "BA",
                    ibge: "2914307"
                },
                {
                    nome: "Iraquara",
                    uf: "BA",
                    ibge: "2914406"
                },
                {
                    nome: "Irará",
                    uf: "BA",
                    ibge: "2914505"
                },
                {
                    nome: "Irecê",
                    uf: "BA",
                    ibge: "2914604"
                },
                {
                    nome: "Itabela",
                    uf: "BA",
                    ibge: "2914653"
                },
                {
                    nome: "Itaberaba",
                    uf: "BA",
                    ibge: "2914703"
                },
                {
                    nome: "Itabuna",
                    uf: "BA",
                    ibge: "2914802"
                },
                {
                    nome: "Itacaré",
                    uf: "BA",
                    ibge: "2914901"
                },
                {
                    nome: "Itaeté",
                    uf: "BA",
                    ibge: "2915007"
                },
                {
                    nome: "Itagi",
                    uf: "BA",
                    ibge: "2915106"
                },
                {
                    nome: "Itagibá",
                    uf: "BA",
                    ibge: "2915205"
                },
                {
                    nome: "Itagimirim",
                    uf: "BA",
                    ibge: "2915304"
                },
                {
                    nome: "Itaguaçu da Bahia",
                    uf: "BA",
                    ibge: "2915353"
                },
                {
                    nome: "Itaju do Colônia",
                    uf: "BA",
                    ibge: "2915403"
                },
                {
                    nome: "Itajuípe",
                    uf: "BA",
                    ibge: "2915502"
                },
                {
                    nome: "Itamaraju",
                    uf: "BA",
                    ibge: "2915601"
                },
                {
                    nome: "Itamari",
                    uf: "BA",
                    ibge: "2915700"
                },
                {
                    nome: "Itambé",
                    uf: "BA",
                    ibge: "2915809"
                },
                {
                    nome: "Itanagra",
                    uf: "BA",
                    ibge: "2915908"
                },
                {
                    nome: "Itanhém",
                    uf: "BA",
                    ibge: "2916005"
                },
                {
                    nome: "Itaparica",
                    uf: "BA",
                    ibge: "2916104"
                },
                {
                    nome: "Itapé",
                    uf: "BA",
                    ibge: "2916203"
                },
                {
                    nome: "Itapebi",
                    uf: "BA",
                    ibge: "2916302"
                },
                {
                    nome: "Itapetinga",
                    uf: "BA",
                    ibge: "2916401"
                },
                {
                    nome: "Itapicuru",
                    uf: "BA",
                    ibge: "2916500"
                },
                {
                    nome: "Itapitanga",
                    uf: "BA",
                    ibge: "2916609"
                },
                {
                    nome: "Itaquara",
                    uf: "BA",
                    ibge: "2916708"
                },
                {
                    nome: "Itarantim",
                    uf: "BA",
                    ibge: "2916807"
                },
                {
                    nome: "Itatim",
                    uf: "BA",
                    ibge: "2916856"
                },
                {
                    nome: "Itiruçu",
                    uf: "BA",
                    ibge: "2916906"
                },
                {
                    nome: "Itiúba",
                    uf: "BA",
                    ibge: "2917003"
                },
                {
                    nome: "Itororó",
                    uf: "BA",
                    ibge: "2917102"
                },
                {
                    nome: "Ituaçu",
                    uf: "BA",
                    ibge: "2917201"
                },
                {
                    nome: "Ituberá",
                    uf: "BA",
                    ibge: "2917300"
                },
                {
                    nome: "Iuiú",
                    uf: "BA",
                    ibge: "2917334"
                },
                {
                    nome: "Jaborandi",
                    uf: "BA",
                    ibge: "2917359"
                },
                {
                    nome: "Jacaraci",
                    uf: "BA",
                    ibge: "2917409"
                },
                {
                    nome: "Jacobina",
                    uf: "BA",
                    ibge: "2917508"
                },
                {
                    nome: "Jaguaquara",
                    uf: "BA",
                    ibge: "2917607"
                },
                {
                    nome: "Jaguarari",
                    uf: "BA",
                    ibge: "2917706"
                },
                {
                    nome: "Jaguaripe",
                    uf: "BA",
                    ibge: "2917805"
                },
                {
                    nome: "Jandaíra",
                    uf: "BA",
                    ibge: "2917904"
                },
                {
                    nome: "Jequié",
                    uf: "BA",
                    ibge: "2918001"
                },
                {
                    nome: "Jeremoabo",
                    uf: "BA",
                    ibge: "2918100"
                },
                {
                    nome: "Jiquiriçá",
                    uf: "BA",
                    ibge: "2918209"
                },
                {
                    nome: "Jitaúna",
                    uf: "BA",
                    ibge: "2918308"
                },
                {
                    nome: "João Dourado",
                    uf: "BA",
                    ibge: "2918357"
                },
                {
                    nome: "Juazeiro",
                    uf: "BA",
                    ibge: "2918407"
                },
                {
                    nome: "Jucuruçu",
                    uf: "BA",
                    ibge: "2918456"
                },
                {
                    nome: "Jussara",
                    uf: "BA",
                    ibge: "2918506"
                },
                {
                    nome: "Jussari",
                    uf: "BA",
                    ibge: "2918555"
                },
                {
                    nome: "Jussiape",
                    uf: "BA",
                    ibge: "2918605"
                },
                {
                    nome: "Lafaiete Coutinho",
                    uf: "BA",
                    ibge: "2918704"
                },
                {
                    nome: "Lagoa Real",
                    uf: "BA",
                    ibge: "2918753"
                },
                {
                    nome: "Laje",
                    uf: "BA",
                    ibge: "2918803"
                },
                {
                    nome: "Lajedão",
                    uf: "BA",
                    ibge: "2918902"
                },
                {
                    nome: "Lajedinho",
                    uf: "BA",
                    ibge: "2919009"
                },
                {
                    nome: "Lajedo do Tabocal",
                    uf: "BA",
                    ibge: "2919058"
                },
                {
                    nome: "Lamarão",
                    uf: "BA",
                    ibge: "2919108"
                },
                {
                    nome: "Lapão",
                    uf: "BA",
                    ibge: "2919157"
                },
                {
                    nome: "Lauro de Freitas",
                    uf: "BA",
                    ibge: "2919207"
                },
                {
                    nome: "Lençóis",
                    uf: "BA",
                    ibge: "2919306"
                },
                {
                    nome: "Licínio de Almeida",
                    uf: "BA",
                    ibge: "2919405"
                },
                {
                    nome: "Livramento de Nossa Senhora",
                    uf: "BA",
                    ibge: "2919504"
                },
                {
                    nome: "Luís Eduardo Magalhães",
                    uf: "BA",
                    ibge: "2919553"
                },
                {
                    nome: "Macajuba",
                    uf: "BA",
                    ibge: "2919603"
                },
                {
                    nome: "Macarani",
                    uf: "BA",
                    ibge: "2919702"
                },
                {
                    nome: "Macaúbas",
                    uf: "BA",
                    ibge: "2919801"
                },
                {
                    nome: "Macururé",
                    uf: "BA",
                    ibge: "2919900"
                },
                {
                    nome: "Madre de Deus",
                    uf: "BA",
                    ibge: "2919926"
                },
                {
                    nome: "Maetinga",
                    uf: "BA",
                    ibge: "2919959"
                },
                {
                    nome: "Maiquinique",
                    uf: "BA",
                    ibge: "2920007"
                },
                {
                    nome: "Mairi",
                    uf: "BA",
                    ibge: "2920106"
                },
                {
                    nome: "Malhada",
                    uf: "BA",
                    ibge: "2920205"
                },
                {
                    nome: "Malhada de Pedras",
                    uf: "BA",
                    ibge: "2920304"
                },
                {
                    nome: "Manoel Vitorino",
                    uf: "BA",
                    ibge: "2920403"
                },
                {
                    nome: "Mansidão",
                    uf: "BA",
                    ibge: "2920452"
                },
                {
                    nome: "Maracás",
                    uf: "BA",
                    ibge: "2920502"
                },
                {
                    nome: "Maragogipe",
                    uf: "BA",
                    ibge: "2920601"
                },
                {
                    nome: "Maraú",
                    uf: "BA",
                    ibge: "2920700"
                },
                {
                    nome: "Marcionílio Souza",
                    uf: "BA",
                    ibge: "2920809"
                },
                {
                    nome: "Mascote",
                    uf: "BA",
                    ibge: "2920908"
                },
                {
                    nome: "Mata de São João",
                    uf: "BA",
                    ibge: "2921005"
                },
                {
                    nome: "Matina",
                    uf: "BA",
                    ibge: "2921054"
                },
                {
                    nome: "Medeiros Neto",
                    uf: "BA",
                    ibge: "2921104"
                },
                {
                    nome: "Miguel Calmon",
                    uf: "BA",
                    ibge: "2921203"
                },
                {
                    nome: "Milagres",
                    uf: "BA",
                    ibge: "2921302"
                },
                {
                    nome: "Mirangaba",
                    uf: "BA",
                    ibge: "2921401"
                },
                {
                    nome: "Mirante",
                    uf: "BA",
                    ibge: "2921450"
                },
                {
                    nome: "Monte Santo",
                    uf: "BA",
                    ibge: "2921500"
                },
                {
                    nome: "Morpará",
                    uf: "BA",
                    ibge: "2921609"
                },
                {
                    nome: "Morro do Chapéu",
                    uf: "BA",
                    ibge: "2921708"
                },
                {
                    nome: "Mortugaba",
                    uf: "BA",
                    ibge: "2921807"
                },
                {
                    nome: "Mucugê",
                    uf: "BA",
                    ibge: "2921906"
                },
                {
                    nome: "Mucuri",
                    uf: "BA",
                    ibge: "2922003"
                },
                {
                    nome: "Mulungu do Morro",
                    uf: "BA",
                    ibge: "2922052"
                },
                {
                    nome: "Mundo Novo",
                    uf: "BA",
                    ibge: "2922102"
                },
                {
                    nome: "Muniz Ferreira",
                    uf: "BA",
                    ibge: "2922201"
                },
                {
                    nome: "Muquém de São Francisco",
                    uf: "BA",
                    ibge: "2922250"
                },
                {
                    nome: "Muritiba",
                    uf: "BA",
                    ibge: "2922300"
                },
                {
                    nome: "Mutuípe",
                    uf: "BA",
                    ibge: "2922409"
                },
                {
                    nome: "Nazaré",
                    uf: "BA",
                    ibge: "2922508"
                },
                {
                    nome: "Nilo Peçanha",
                    uf: "BA",
                    ibge: "2922607"
                },
                {
                    nome: "Nordestina",
                    uf: "BA",
                    ibge: "2922656"
                },
                {
                    nome: "Nova Canaã",
                    uf: "BA",
                    ibge: "2922706"
                },
                {
                    nome: "Nova Fátima",
                    uf: "BA",
                    ibge: "2922730"
                },
                {
                    nome: "Nova Ibiá",
                    uf: "BA",
                    ibge: "2922755"
                },
                {
                    nome: "Nova Itarana",
                    uf: "BA",
                    ibge: "2922805"
                },
                {
                    nome: "Nova Redenção",
                    uf: "BA",
                    ibge: "2922854"
                },
                {
                    nome: "Nova Soure",
                    uf: "BA",
                    ibge: "2922904"
                },
                {
                    nome: "Nova Viçosa",
                    uf: "BA",
                    ibge: "2923001"
                },
                {
                    nome: "Novo Horizonte",
                    uf: "BA",
                    ibge: "2923035"
                },
                {
                    nome: "Novo Triunfo",
                    uf: "BA",
                    ibge: "2923050"
                },
                {
                    nome: "Olindina",
                    uf: "BA",
                    ibge: "2923100"
                },
                {
                    nome: "Oliveira dos Brejinhos",
                    uf: "BA",
                    ibge: "2923209"
                },
                {
                    nome: "Ouriçangas",
                    uf: "BA",
                    ibge: "2923308"
                },
                {
                    nome: "Ourolândia",
                    uf: "BA",
                    ibge: "2923357"
                },
                {
                    nome: "Palmas de Monte Alto",
                    uf: "BA",
                    ibge: "2923407"
                },
                {
                    nome: "Palmeiras",
                    uf: "BA",
                    ibge: "2923506"
                },
                {
                    nome: "Paramirim",
                    uf: "BA",
                    ibge: "2923605"
                },
                {
                    nome: "Paratinga",
                    uf: "BA",
                    ibge: "2923704"
                },
                {
                    nome: "Paripiranga",
                    uf: "BA",
                    ibge: "2923803"
                },
                {
                    nome: "Pau Brasil",
                    uf: "BA",
                    ibge: "2923902"
                },
                {
                    nome: "Paulo Afonso",
                    uf: "BA",
                    ibge: "2924009"
                },
                {
                    nome: "Pé de Serra",
                    uf: "BA",
                    ibge: "2924058"
                },
                {
                    nome: "Pedrão",
                    uf: "BA",
                    ibge: "2924108"
                },
                {
                    nome: "Pedro Alexandre",
                    uf: "BA",
                    ibge: "2924207"
                },
                {
                    nome: "Piatã",
                    uf: "BA",
                    ibge: "2924306"
                },
                {
                    nome: "Pilão Arcado",
                    uf: "BA",
                    ibge: "2924405"
                },
                {
                    nome: "Pindaí",
                    uf: "BA",
                    ibge: "2924504"
                },
                {
                    nome: "Pindobaçu",
                    uf: "BA",
                    ibge: "2924603"
                },
                {
                    nome: "Pintadas",
                    uf: "BA",
                    ibge: "2924652"
                },
                {
                    nome: "Piraí do Norte",
                    uf: "BA",
                    ibge: "2924678"
                },
                {
                    nome: "Piripá",
                    uf: "BA",
                    ibge: "2924702"
                },
                {
                    nome: "Piritiba",
                    uf: "BA",
                    ibge: "2924801"
                },
                {
                    nome: "Planaltino",
                    uf: "BA",
                    ibge: "2924900"
                },
                {
                    nome: "Planalto",
                    uf: "BA",
                    ibge: "2925006"
                },
                {
                    nome: "Poções",
                    uf: "BA",
                    ibge: "2925105"
                },
                {
                    nome: "Pojuca",
                    uf: "BA",
                    ibge: "2925204"
                },
                {
                    nome: "Ponto Novo",
                    uf: "BA",
                    ibge: "2925253"
                },
                {
                    nome: "Porto Seguro",
                    uf: "BA",
                    ibge: "2925303"
                },
                {
                    nome: "Potiraguá",
                    uf: "BA",
                    ibge: "2925402"
                },
                {
                    nome: "Prado",
                    uf: "BA",
                    ibge: "2925501"
                },
                {
                    nome: "Presidente Dutra",
                    uf: "BA",
                    ibge: "2925600"
                },
                {
                    nome: "Presidente Jânio Quadros",
                    uf: "BA",
                    ibge: "2925709"
                },
                {
                    nome: "Presidente Tancredo Neves",
                    uf: "BA",
                    ibge: "2925758"
                },
                {
                    nome: "Queimadas",
                    uf: "BA",
                    ibge: "2925808"
                },
                {
                    nome: "Quijingue",
                    uf: "BA",
                    ibge: "2925907"
                },
                {
                    nome: "Quixabeira",
                    uf: "BA",
                    ibge: "2925931"
                },
                {
                    nome: "Rafael Jambeiro",
                    uf: "BA",
                    ibge: "2925956"
                },
                {
                    nome: "Remanso",
                    uf: "BA",
                    ibge: "2926004"
                },
                {
                    nome: "Retirolândia",
                    uf: "BA",
                    ibge: "2926103"
                },
                {
                    nome: "Riachão das Neves",
                    uf: "BA",
                    ibge: "2926202"
                },
                {
                    nome: "Riachão do Jacuípe",
                    uf: "BA",
                    ibge: "2926301"
                },
                {
                    nome: "Riacho de Santana",
                    uf: "BA",
                    ibge: "2926400"
                },
                {
                    nome: "Ribeira do Amparo",
                    uf: "BA",
                    ibge: "2926509"
                },
                {
                    nome: "Ribeira do Pombal",
                    uf: "BA",
                    ibge: "2926608"
                },
                {
                    nome: "Ribeirão do Largo",
                    uf: "BA",
                    ibge: "2926657"
                },
                {
                    nome: "Rio de Contas",
                    uf: "BA",
                    ibge: "2926707"
                },
                {
                    nome: "Rio do Antônio",
                    uf: "BA",
                    ibge: "2926806"
                },
                {
                    nome: "Rio do Pires",
                    uf: "BA",
                    ibge: "2926905"
                },
                {
                    nome: "Rio Real",
                    uf: "BA",
                    ibge: "2927002"
                },
                {
                    nome: "Rodelas",
                    uf: "BA",
                    ibge: "2927101"
                },
                {
                    nome: "Ruy Barbosa",
                    uf: "BA",
                    ibge: "2927200"
                },
                {
                    nome: "Salinas da Margarida",
                    uf: "BA",
                    ibge: "2927309"
                },
                {
                    nome: "Salvador",
                    uf: "BA",
                    ibge: "2927408"
                },
                {
                    nome: "Santa Bárbara",
                    uf: "BA",
                    ibge: "2927507"
                },
                {
                    nome: "Santa Brígida",
                    uf: "BA",
                    ibge: "2927606"
                },
                {
                    nome: "Santa Cruz Cabrália",
                    uf: "BA",
                    ibge: "2927705"
                },
                {
                    nome: "Santa Cruz da Vitória",
                    uf: "BA",
                    ibge: "2927804"
                },
                {
                    nome: "Santa Inês",
                    uf: "BA",
                    ibge: "2927903"
                },
                {
                    nome: "Santaluz",
                    uf: "BA",
                    ibge: "2928000"
                },
                {
                    nome: "Santa Luzia",
                    uf: "BA",
                    ibge: "2928059"
                },
                {
                    nome: "Santa Maria da Vitória",
                    uf: "BA",
                    ibge: "2928109"
                },
                {
                    nome: "Santana",
                    uf: "BA",
                    ibge: "2928208"
                },
                {
                    nome: "Santanópolis",
                    uf: "BA",
                    ibge: "2928307"
                },
                {
                    nome: "Santa Rita de Cássia",
                    uf: "BA",
                    ibge: "2928406"
                },
                {
                    nome: "Santa Teresinha",
                    uf: "BA",
                    ibge: "2928505"
                },
                {
                    nome: "Santo Amaro",
                    uf: "BA",
                    ibge: "2928604"
                },
                {
                    nome: "Santo Antônio de Jesus",
                    uf: "BA",
                    ibge: "2928703"
                },
                {
                    nome: "Santo Estêvão",
                    uf: "BA",
                    ibge: "2928802"
                },
                {
                    nome: "São Desidério",
                    uf: "BA",
                    ibge: "2928901"
                },
                {
                    nome: "São Domingos",
                    uf: "BA",
                    ibge: "2928950"
                },
                {
                    nome: "São Félix",
                    uf: "BA",
                    ibge: "2929008"
                },
                {
                    nome: "São Félix do Coribe",
                    uf: "BA",
                    ibge: "2929057"
                },
                {
                    nome: "São Felipe",
                    uf: "BA",
                    ibge: "2929107"
                },
                {
                    nome: "São Francisco do Conde",
                    uf: "BA",
                    ibge: "2929206"
                },
                {
                    nome: "São Gabriel",
                    uf: "BA",
                    ibge: "2929255"
                },
                {
                    nome: "São Gonçalo dos Campos",
                    uf: "BA",
                    ibge: "2929305"
                },
                {
                    nome: "São José da Vitória",
                    uf: "BA",
                    ibge: "2929354"
                },
                {
                    nome: "São José do Jacuípe",
                    uf: "BA",
                    ibge: "2929370"
                },
                {
                    nome: "São Miguel das Matas",
                    uf: "BA",
                    ibge: "2929404"
                },
                {
                    nome: "São Sebastião do Passé",
                    uf: "BA",
                    ibge: "2929503"
                },
                {
                    nome: "Sapeaçu",
                    uf: "BA",
                    ibge: "2929602"
                },
                {
                    nome: "Sátiro Dias",
                    uf: "BA",
                    ibge: "2929701"
                },
                {
                    nome: "Saubara",
                    uf: "BA",
                    ibge: "2929750"
                },
                {
                    nome: "Saúde",
                    uf: "BA",
                    ibge: "2929800"
                },
                {
                    nome: "Seabra",
                    uf: "BA",
                    ibge: "2929909"
                },
                {
                    nome: "Sebastião Laranjeiras",
                    uf: "BA",
                    ibge: "2930006"
                },
                {
                    nome: "Senhor do Bonfim",
                    uf: "BA",
                    ibge: "2930105"
                },
                {
                    nome: "Serra do Ramalho",
                    uf: "BA",
                    ibge: "2930154"
                },
                {
                    nome: "Sento Sé",
                    uf: "BA",
                    ibge: "2930204"
                },
                {
                    nome: "Serra Dourada",
                    uf: "BA",
                    ibge: "2930303"
                },
                {
                    nome: "Serra Preta",
                    uf: "BA",
                    ibge: "2930402"
                },
                {
                    nome: "Serrinha",
                    uf: "BA",
                    ibge: "2930501"
                },
                {
                    nome: "Serrolândia",
                    uf: "BA",
                    ibge: "2930600"
                },
                {
                    nome: "Simões Filho",
                    uf: "BA",
                    ibge: "2930709"
                },
                {
                    nome: "Sítio do Mato",
                    uf: "BA",
                    ibge: "2930758"
                },
                {
                    nome: "Sítio do Quinto",
                    uf: "BA",
                    ibge: "2930766"
                },
                {
                    nome: "Sobradinho",
                    uf: "BA",
                    ibge: "2930774"
                },
                {
                    nome: "Souto Soares",
                    uf: "BA",
                    ibge: "2930808"
                },
                {
                    nome: "Tabocas do Brejo Velho",
                    uf: "BA",
                    ibge: "2930907"
                },
                {
                    nome: "Tanhaçu",
                    uf: "BA",
                    ibge: "2931004"
                },
                {
                    nome: "Tanque Novo",
                    uf: "BA",
                    ibge: "2931053"
                },
                {
                    nome: "Tanquinho",
                    uf: "BA",
                    ibge: "2931103"
                },
                {
                    nome: "Taperoá",
                    uf: "BA",
                    ibge: "2931202"
                },
                {
                    nome: "Tapiramutá",
                    uf: "BA",
                    ibge: "2931301"
                },
                {
                    nome: "Teixeira de Freitas",
                    uf: "BA",
                    ibge: "2931350"
                },
                {
                    nome: "Teodoro Sampaio",
                    uf: "BA",
                    ibge: "2931400"
                },
                {
                    nome: "Teofilândia",
                    uf: "BA",
                    ibge: "2931509"
                },
                {
                    nome: "Teolândia",
                    uf: "BA",
                    ibge: "2931608"
                },
                {
                    nome: "Terra Nova",
                    uf: "BA",
                    ibge: "2931707"
                },
                {
                    nome: "Tremedal",
                    uf: "BA",
                    ibge: "2931806"
                },
                {
                    nome: "Tucano",
                    uf: "BA",
                    ibge: "2931905"
                },
                {
                    nome: "Uauá",
                    uf: "BA",
                    ibge: "2932002"
                },
                {
                    nome: "Ubaíra",
                    uf: "BA",
                    ibge: "2932101"
                },
                {
                    nome: "Ubaitaba",
                    uf: "BA",
                    ibge: "2932200"
                },
                {
                    nome: "Ubatã",
                    uf: "BA",
                    ibge: "2932309"
                },
                {
                    nome: "Uibaí",
                    uf: "BA",
                    ibge: "2932408"
                },
                {
                    nome: "Umburanas",
                    uf: "BA",
                    ibge: "2932457"
                },
                {
                    nome: "Una",
                    uf: "BA",
                    ibge: "2932507"
                },
                {
                    nome: "Urandi",
                    uf: "BA",
                    ibge: "2932606"
                },
                {
                    nome: "Uruçuca",
                    uf: "BA",
                    ibge: "2932705"
                },
                {
                    nome: "Utinga",
                    uf: "BA",
                    ibge: "2932804"
                },
                {
                    nome: "Valença",
                    uf: "BA",
                    ibge: "2932903"
                },
                {
                    nome: "Valente",
                    uf: "BA",
                    ibge: "2933000"
                },
                {
                    nome: "Várzea da Roça",
                    uf: "BA",
                    ibge: "2933059"
                },
                {
                    nome: "Várzea do Poço",
                    uf: "BA",
                    ibge: "2933109"
                },
                {
                    nome: "Várzea Nova",
                    uf: "BA",
                    ibge: "2933158"
                },
                {
                    nome: "Varzedo",
                    uf: "BA",
                    ibge: "2933174"
                },
                {
                    nome: "Vera Cruz",
                    uf: "BA",
                    ibge: "2933208"
                },
                {
                    nome: "Vereda",
                    uf: "BA",
                    ibge: "2933257"
                },
                {
                    nome: "Vitória da Conquista",
                    uf: "BA",
                    ibge: "2933307"
                },
                {
                    nome: "Wagner",
                    uf: "BA",
                    ibge: "2933406"
                },
                {
                    nome: "Wanderley",
                    uf: "BA",
                    ibge: "2933455"
                },
                {
                    nome: "Wenceslau Guimarães",
                    uf: "BA",
                    ibge: "2933505"
                },
                {
                    nome: "Xique-Xique",
                    uf: "BA",
                    ibge: "2933604"
                },
                {
                    nome: "Abadia dos Dourados",
                    uf: "MG",
                    ibge: "3100104"
                },
                {
                    nome: "Abaeté",
                    uf: "MG",
                    ibge: "3100203"
                },
                {
                    nome: "Abre Campo",
                    uf: "MG",
                    ibge: "3100302"
                },
                {
                    nome: "Acaiaca",
                    uf: "MG",
                    ibge: "3100401"
                },
                {
                    nome: "Açucena",
                    uf: "MG",
                    ibge: "3100500"
                },
                {
                    nome: "Água Boa",
                    uf: "MG",
                    ibge: "3100609"
                },
                {
                    nome: "Água Comprida",
                    uf: "MG",
                    ibge: "3100708"
                },
                {
                    nome: "Aguanil",
                    uf: "MG",
                    ibge: "3100807"
                },
                {
                    nome: "Águas Formosas",
                    uf: "MG",
                    ibge: "3100906"
                },
                {
                    nome: "Águas Vermelhas",
                    uf: "MG",
                    ibge: "3101003"
                },
                {
                    nome: "Aimorés",
                    uf: "MG",
                    ibge: "3101102"
                },
                {
                    nome: "Aiuruoca",
                    uf: "MG",
                    ibge: "3101201"
                },
                {
                    nome: "Alagoa",
                    uf: "MG",
                    ibge: "3101300"
                },
                {
                    nome: "Albertina",
                    uf: "MG",
                    ibge: "3101409"
                },
                {
                    nome: "Além Paraíba",
                    uf: "MG",
                    ibge: "3101508"
                },
                {
                    nome: "Alfenas",
                    uf: "MG",
                    ibge: "3101607"
                },
                {
                    nome: "Alfredo Vasconcelos",
                    uf: "MG",
                    ibge: "3101631"
                },
                {
                    nome: "Almenara",
                    uf: "MG",
                    ibge: "3101706"
                },
                {
                    nome: "Alpercata",
                    uf: "MG",
                    ibge: "3101805"
                },
                {
                    nome: "Alpinópolis",
                    uf: "MG",
                    ibge: "3101904"
                },
                {
                    nome: "Alterosa",
                    uf: "MG",
                    ibge: "3102001"
                },
                {
                    nome: "Alto Caparaó",
                    uf: "MG",
                    ibge: "3102050"
                },
                {
                    nome: "Alto Rio Doce",
                    uf: "MG",
                    ibge: "3102100"
                },
                {
                    nome: "Alvarenga",
                    uf: "MG",
                    ibge: "3102209"
                },
                {
                    nome: "Alvinópolis",
                    uf: "MG",
                    ibge: "3102308"
                },
                {
                    nome: "Alvorada de Minas",
                    uf: "MG",
                    ibge: "3102407"
                },
                {
                    nome: "Amparo do Serra",
                    uf: "MG",
                    ibge: "3102506"
                },
                {
                    nome: "Andradas",
                    uf: "MG",
                    ibge: "3102605"
                },
                {
                    nome: "Cachoeira de Pajeú",
                    uf: "MG",
                    ibge: "3102704"
                },
                {
                    nome: "Andrelândia",
                    uf: "MG",
                    ibge: "3102803"
                },
                {
                    nome: "Angelândia",
                    uf: "MG",
                    ibge: "3102852"
                },
                {
                    nome: "Antônio Carlos",
                    uf: "MG",
                    ibge: "3102902"
                },
                {
                    nome: "Antônio Dias",
                    uf: "MG",
                    ibge: "3103009"
                },
                {
                    nome: "Antônio Prado de Minas",
                    uf: "MG",
                    ibge: "3103108"
                },
                {
                    nome: "Araçaí",
                    uf: "MG",
                    ibge: "3103207"
                },
                {
                    nome: "Aracitaba",
                    uf: "MG",
                    ibge: "3103306"
                },
                {
                    nome: "Araçuaí",
                    uf: "MG",
                    ibge: "3103405"
                },
                {
                    nome: "Araguari",
                    uf: "MG",
                    ibge: "3103504"
                },
                {
                    nome: "Arantina",
                    uf: "MG",
                    ibge: "3103603"
                },
                {
                    nome: "Araponga",
                    uf: "MG",
                    ibge: "3103702"
                },
                {
                    nome: "Araporã",
                    uf: "MG",
                    ibge: "3103751"
                },
                {
                    nome: "Arapuá",
                    uf: "MG",
                    ibge: "3103801"
                },
                {
                    nome: "Araújos",
                    uf: "MG",
                    ibge: "3103900"
                },
                {
                    nome: "Araxá",
                    uf: "MG",
                    ibge: "3104007"
                },
                {
                    nome: "Arceburgo",
                    uf: "MG",
                    ibge: "3104106"
                },
                {
                    nome: "Arcos",
                    uf: "MG",
                    ibge: "3104205"
                },
                {
                    nome: "Areado",
                    uf: "MG",
                    ibge: "3104304"
                },
                {
                    nome: "Argirita",
                    uf: "MG",
                    ibge: "3104403"
                },
                {
                    nome: "Aricanduva",
                    uf: "MG",
                    ibge: "3104452"
                },
                {
                    nome: "Arinos",
                    uf: "MG",
                    ibge: "3104502"
                },
                {
                    nome: "Astolfo Dutra",
                    uf: "MG",
                    ibge: "3104601"
                },
                {
                    nome: "Ataléia",
                    uf: "MG",
                    ibge: "3104700"
                },
                {
                    nome: "Augusto de Lima",
                    uf: "MG",
                    ibge: "3104809"
                },
                {
                    nome: "Baependi",
                    uf: "MG",
                    ibge: "3104908"
                },
                {
                    nome: "Baldim",
                    uf: "MG",
                    ibge: "3105004"
                },
                {
                    nome: "Bambuí",
                    uf: "MG",
                    ibge: "3105103"
                },
                {
                    nome: "Bandeira",
                    uf: "MG",
                    ibge: "3105202"
                },
                {
                    nome: "Bandeira do Sul",
                    uf: "MG",
                    ibge: "3105301"
                },
                {
                    nome: "Barão de Cocais",
                    uf: "MG",
                    ibge: "3105400"
                },
                {
                    nome: "Barão de Monte Alto",
                    uf: "MG",
                    ibge: "3105509"
                },
                {
                    nome: "Barbacena",
                    uf: "MG",
                    ibge: "3105608"
                },
                {
                    nome: "Barra Longa",
                    uf: "MG",
                    ibge: "3105707"
                },
                {
                    nome: "Barroso",
                    uf: "MG",
                    ibge: "3105905"
                },
                {
                    nome: "Bela Vista de Minas",
                    uf: "MG",
                    ibge: "3106002"
                },
                {
                    nome: "Belmiro Braga",
                    uf: "MG",
                    ibge: "3106101"
                },
                {
                    nome: "Belo Horizonte",
                    uf: "MG",
                    ibge: "3106200"
                },
                {
                    nome: "Belo Oriente",
                    uf: "MG",
                    ibge: "3106309"
                },
                {
                    nome: "Belo Vale",
                    uf: "MG",
                    ibge: "3106408"
                },
                {
                    nome: "Berilo",
                    uf: "MG",
                    ibge: "3106507"
                },
                {
                    nome: "Bertópolis",
                    uf: "MG",
                    ibge: "3106606"
                },
                {
                    nome: "Berizal",
                    uf: "MG",
                    ibge: "3106655"
                },
                {
                    nome: "Betim",
                    uf: "MG",
                    ibge: "3106705"
                },
                {
                    nome: "Bias Fortes",
                    uf: "MG",
                    ibge: "3106804"
                },
                {
                    nome: "Bicas",
                    uf: "MG",
                    ibge: "3106903"
                },
                {
                    nome: "Biquinhas",
                    uf: "MG",
                    ibge: "3107000"
                },
                {
                    nome: "Boa Esperança",
                    uf: "MG",
                    ibge: "3107109"
                },
                {
                    nome: "Bocaina de Minas",
                    uf: "MG",
                    ibge: "3107208"
                },
                {
                    nome: "Bocaiúva",
                    uf: "MG",
                    ibge: "3107307"
                },
                {
                    nome: "Bom Despacho",
                    uf: "MG",
                    ibge: "3107406"
                },
                {
                    nome: "Bom Jardim de Minas",
                    uf: "MG",
                    ibge: "3107505"
                },
                {
                    nome: "Bom Jesus da Penha",
                    uf: "MG",
                    ibge: "3107604"
                },
                {
                    nome: "Bom Jesus do Amparo",
                    uf: "MG",
                    ibge: "3107703"
                },
                {
                    nome: "Bom Jesus do Galho",
                    uf: "MG",
                    ibge: "3107802"
                },
                {
                    nome: "Bom Repouso",
                    uf: "MG",
                    ibge: "3107901"
                },
                {
                    nome: "Bom Sucesso",
                    uf: "MG",
                    ibge: "3108008"
                },
                {
                    nome: "Bonfim",
                    uf: "MG",
                    ibge: "3108107"
                },
                {
                    nome: "Bonfinópolis de Minas",
                    uf: "MG",
                    ibge: "3108206"
                },
                {
                    nome: "Bonito de Minas",
                    uf: "MG",
                    ibge: "3108255"
                },
                {
                    nome: "Borda da Mata",
                    uf: "MG",
                    ibge: "3108305"
                },
                {
                    nome: "Botelhos",
                    uf: "MG",
                    ibge: "3108404"
                },
                {
                    nome: "Botumirim",
                    uf: "MG",
                    ibge: "3108503"
                },
                {
                    nome: "Brasilândia de Minas",
                    uf: "MG",
                    ibge: "3108552"
                },
                {
                    nome: "Brasília de Minas",
                    uf: "MG",
                    ibge: "3108602"
                },
                {
                    nome: "Brás Pires",
                    uf: "MG",
                    ibge: "3108701"
                },
                {
                    nome: "Braúnas",
                    uf: "MG",
                    ibge: "3108800"
                },
                {
                    nome: "Brazópolis",
                    uf: "MG",
                    ibge: "3108909"
                },
                {
                    nome: "Brumadinho",
                    uf: "MG",
                    ibge: "3109006"
                },
                {
                    nome: "Bueno Brandão",
                    uf: "MG",
                    ibge: "3109105"
                },
                {
                    nome: "Buenópolis",
                    uf: "MG",
                    ibge: "3109204"
                },
                {
                    nome: "Bugre",
                    uf: "MG",
                    ibge: "3109253"
                },
                {
                    nome: "Buritis",
                    uf: "MG",
                    ibge: "3109303"
                },
                {
                    nome: "Buritizeiro",
                    uf: "MG",
                    ibge: "3109402"
                },
                {
                    nome: "Cabeceira Grande",
                    uf: "MG",
                    ibge: "3109451"
                },
                {
                    nome: "Cabo Verde",
                    uf: "MG",
                    ibge: "3109501"
                },
                {
                    nome: "Cachoeira da Prata",
                    uf: "MG",
                    ibge: "3109600"
                },
                {
                    nome: "Cachoeira de Minas",
                    uf: "MG",
                    ibge: "3109709"
                },
                {
                    nome: "Cachoeira Dourada",
                    uf: "MG",
                    ibge: "3109808"
                },
                {
                    nome: "Caetanópolis",
                    uf: "MG",
                    ibge: "3109907"
                },
                {
                    nome: "Caeté",
                    uf: "MG",
                    ibge: "3110004"
                },
                {
                    nome: "Caiana",
                    uf: "MG",
                    ibge: "3110103"
                },
                {
                    nome: "Cajuri",
                    uf: "MG",
                    ibge: "3110202"
                },
                {
                    nome: "Caldas",
                    uf: "MG",
                    ibge: "3110301"
                },
                {
                    nome: "Camacho",
                    uf: "MG",
                    ibge: "3110400"
                },
                {
                    nome: "Camanducaia",
                    uf: "MG",
                    ibge: "3110509"
                },
                {
                    nome: "Cambuí",
                    uf: "MG",
                    ibge: "3110608"
                },
                {
                    nome: "Cambuquira",
                    uf: "MG",
                    ibge: "3110707"
                },
                {
                    nome: "Campanário",
                    uf: "MG",
                    ibge: "3110806"
                },
                {
                    nome: "Campanha",
                    uf: "MG",
                    ibge: "3110905"
                },
                {
                    nome: "Campestre",
                    uf: "MG",
                    ibge: "3111002"
                },
                {
                    nome: "Campina Verde",
                    uf: "MG",
                    ibge: "3111101"
                },
                {
                    nome: "Campo Azul",
                    uf: "MG",
                    ibge: "3111150"
                },
                {
                    nome: "Campo Belo",
                    uf: "MG",
                    ibge: "3111200"
                },
                {
                    nome: "Campo do Meio",
                    uf: "MG",
                    ibge: "3111309"
                },
                {
                    nome: "Campo Florido",
                    uf: "MG",
                    ibge: "3111408"
                },
                {
                    nome: "Campos Altos",
                    uf: "MG",
                    ibge: "3111507"
                },
                {
                    nome: "Campos Gerais",
                    uf: "MG",
                    ibge: "3111606"
                },
                {
                    nome: "Canaã",
                    uf: "MG",
                    ibge: "3111705"
                },
                {
                    nome: "Canápolis",
                    uf: "MG",
                    ibge: "3111804"
                },
                {
                    nome: "Cana Verde",
                    uf: "MG",
                    ibge: "3111903"
                },
                {
                    nome: "Candeias",
                    uf: "MG",
                    ibge: "3112000"
                },
                {
                    nome: "Cantagalo",
                    uf: "MG",
                    ibge: "3112059"
                },
                {
                    nome: "Caparaó",
                    uf: "MG",
                    ibge: "3112109"
                },
                {
                    nome: "Capela Nova",
                    uf: "MG",
                    ibge: "3112208"
                },
                {
                    nome: "Capelinha",
                    uf: "MG",
                    ibge: "3112307"
                },
                {
                    nome: "Capetinga",
                    uf: "MG",
                    ibge: "3112406"
                },
                {
                    nome: "Capim Branco",
                    uf: "MG",
                    ibge: "3112505"
                },
                {
                    nome: "Capinópolis",
                    uf: "MG",
                    ibge: "3112604"
                },
                {
                    nome: "Capitão Andrade",
                    uf: "MG",
                    ibge: "3112653"
                },
                {
                    nome: "Capitão Enéas",
                    uf: "MG",
                    ibge: "3112703"
                },
                {
                    nome: "Capitólio",
                    uf: "MG",
                    ibge: "3112802"
                },
                {
                    nome: "Caputira",
                    uf: "MG",
                    ibge: "3112901"
                },
                {
                    nome: "Caraí",
                    uf: "MG",
                    ibge: "3113008"
                },
                {
                    nome: "Caranaíba",
                    uf: "MG",
                    ibge: "3113107"
                },
                {
                    nome: "Carandaí",
                    uf: "MG",
                    ibge: "3113206"
                },
                {
                    nome: "Carangola",
                    uf: "MG",
                    ibge: "3113305"
                },
                {
                    nome: "Caratinga",
                    uf: "MG",
                    ibge: "3113404"
                },
                {
                    nome: "Carbonita",
                    uf: "MG",
                    ibge: "3113503"
                },
                {
                    nome: "Careaçu",
                    uf: "MG",
                    ibge: "3113602"
                },
                {
                    nome: "Carlos Chagas",
                    uf: "MG",
                    ibge: "3113701"
                },
                {
                    nome: "Carmésia",
                    uf: "MG",
                    ibge: "3113800"
                },
                {
                    nome: "Carmo da Cachoeira",
                    uf: "MG",
                    ibge: "3113909"
                },
                {
                    nome: "Carmo da Mata",
                    uf: "MG",
                    ibge: "3114006"
                },
                {
                    nome: "Carmo de Minas",
                    uf: "MG",
                    ibge: "3114105"
                },
                {
                    nome: "Carmo do Cajuru",
                    uf: "MG",
                    ibge: "3114204"
                },
                {
                    nome: "Carmo do Paranaíba",
                    uf: "MG",
                    ibge: "3114303"
                },
                {
                    nome: "Carmo do Rio Claro",
                    uf: "MG",
                    ibge: "3114402"
                },
                {
                    nome: "Carmópolis de Minas",
                    uf: "MG",
                    ibge: "3114501"
                },
                {
                    nome: "Carneirinho",
                    uf: "MG",
                    ibge: "3114550"
                },
                {
                    nome: "Carrancas",
                    uf: "MG",
                    ibge: "3114600"
                },
                {
                    nome: "Carvalhópolis",
                    uf: "MG",
                    ibge: "3114709"
                },
                {
                    nome: "Carvalhos",
                    uf: "MG",
                    ibge: "3114808"
                },
                {
                    nome: "Casa Grande",
                    uf: "MG",
                    ibge: "3114907"
                },
                {
                    nome: "Cascalho Rico",
                    uf: "MG",
                    ibge: "3115003"
                },
                {
                    nome: "Cássia",
                    uf: "MG",
                    ibge: "3115102"
                },
                {
                    nome: "Conceição da Barra de Minas",
                    uf: "MG",
                    ibge: "3115201"
                },
                {
                    nome: "Cataguases",
                    uf: "MG",
                    ibge: "3115300"
                },
                {
                    nome: "Catas Altas",
                    uf: "MG",
                    ibge: "3115359"
                },
                {
                    nome: "Catas Altas da Noruega",
                    uf: "MG",
                    ibge: "3115409"
                },
                {
                    nome: "Catuji",
                    uf: "MG",
                    ibge: "3115458"
                },
                {
                    nome: "Catuti",
                    uf: "MG",
                    ibge: "3115474"
                },
                {
                    nome: "Caxambu",
                    uf: "MG",
                    ibge: "3115508"
                },
                {
                    nome: "Cedro do Abaeté",
                    uf: "MG",
                    ibge: "3115607"
                },
                {
                    nome: "Central de Minas",
                    uf: "MG",
                    ibge: "3115706"
                },
                {
                    nome: "Centralina",
                    uf: "MG",
                    ibge: "3115805"
                },
                {
                    nome: "Chácara",
                    uf: "MG",
                    ibge: "3115904"
                },
                {
                    nome: "Chalé",
                    uf: "MG",
                    ibge: "3116001"
                },
                {
                    nome: "Chapada do Norte",
                    uf: "MG",
                    ibge: "3116100"
                },
                {
                    nome: "Chapada Gaúcha",
                    uf: "MG",
                    ibge: "3116159"
                },
                {
                    nome: "Chiador",
                    uf: "MG",
                    ibge: "3116209"
                },
                {
                    nome: "Cipotânea",
                    uf: "MG",
                    ibge: "3116308"
                },
                {
                    nome: "Claraval",
                    uf: "MG",
                    ibge: "3116407"
                },
                {
                    nome: "Claro dos Poções",
                    uf: "MG",
                    ibge: "3116506"
                },
                {
                    nome: "Cláudio",
                    uf: "MG",
                    ibge: "3116605"
                },
                {
                    nome: "Coimbra",
                    uf: "MG",
                    ibge: "3116704"
                },
                {
                    nome: "Coluna",
                    uf: "MG",
                    ibge: "3116803"
                },
                {
                    nome: "Comendador Gomes",
                    uf: "MG",
                    ibge: "3116902"
                },
                {
                    nome: "Comercinho",
                    uf: "MG",
                    ibge: "3117009"
                },
                {
                    nome: "Conceição da Aparecida",
                    uf: "MG",
                    ibge: "3117108"
                },
                {
                    nome: "Conceição das Pedras",
                    uf: "MG",
                    ibge: "3117207"
                },
                {
                    nome: "Conceição das Alagoas",
                    uf: "MG",
                    ibge: "3117306"
                },
                {
                    nome: "Conceição de Ipanema",
                    uf: "MG",
                    ibge: "3117405"
                },
                {
                    nome: "Conceição do Mato Dentro",
                    uf: "MG",
                    ibge: "3117504"
                },
                {
                    nome: "Conceição do Pará",
                    uf: "MG",
                    ibge: "3117603"
                },
                {
                    nome: "Conceição do Rio Verde",
                    uf: "MG",
                    ibge: "3117702"
                },
                {
                    nome: "Conceição dos Ouros",
                    uf: "MG",
                    ibge: "3117801"
                },
                {
                    nome: "Cônego Marinho",
                    uf: "MG",
                    ibge: "3117836"
                },
                {
                    nome: "Confins",
                    uf: "MG",
                    ibge: "3117876"
                },
                {
                    nome: "Congonhal",
                    uf: "MG",
                    ibge: "3117900"
                },
                {
                    nome: "Congonhas",
                    uf: "MG",
                    ibge: "3118007"
                },
                {
                    nome: "Congonhas do Norte",
                    uf: "MG",
                    ibge: "3118106"
                },
                {
                    nome: "Conquista",
                    uf: "MG",
                    ibge: "3118205"
                },
                {
                    nome: "Conselheiro Lafaiete",
                    uf: "MG",
                    ibge: "3118304"
                },
                {
                    nome: "Conselheiro Pena",
                    uf: "MG",
                    ibge: "3118403"
                },
                {
                    nome: "Consolação",
                    uf: "MG",
                    ibge: "3118502"
                },
                {
                    nome: "Contagem",
                    uf: "MG",
                    ibge: "3118601"
                },
                {
                    nome: "Coqueiral",
                    uf: "MG",
                    ibge: "3118700"
                },
                {
                    nome: "Coração de Jesus",
                    uf: "MG",
                    ibge: "3118809"
                },
                {
                    nome: "Cordisburgo",
                    uf: "MG",
                    ibge: "3118908"
                },
                {
                    nome: "Cordislândia",
                    uf: "MG",
                    ibge: "3119005"
                },
                {
                    nome: "Corinto",
                    uf: "MG",
                    ibge: "3119104"
                },
                {
                    nome: "Coroaci",
                    uf: "MG",
                    ibge: "3119203"
                },
                {
                    nome: "Coromandel",
                    uf: "MG",
                    ibge: "3119302"
                },
                {
                    nome: "Coronel Fabriciano",
                    uf: "MG",
                    ibge: "3119401"
                },
                {
                    nome: "Coronel Murta",
                    uf: "MG",
                    ibge: "3119500"
                },
                {
                    nome: "Coronel Pacheco",
                    uf: "MG",
                    ibge: "3119609"
                },
                {
                    nome: "Coronel Xavier Chaves",
                    uf: "MG",
                    ibge: "3119708"
                },
                {
                    nome: "Córrego Danta",
                    uf: "MG",
                    ibge: "3119807"
                },
                {
                    nome: "Córrego do Bom Jesus",
                    uf: "MG",
                    ibge: "3119906"
                },
                {
                    nome: "Córrego Fundo",
                    uf: "MG",
                    ibge: "3119955"
                },
                {
                    nome: "Córrego Novo",
                    uf: "MG",
                    ibge: "3120003"
                },
                {
                    nome: "Couto de Magalhães de Minas",
                    uf: "MG",
                    ibge: "3120102"
                },
                {
                    nome: "Crisólita",
                    uf: "MG",
                    ibge: "3120151"
                },
                {
                    nome: "Cristais",
                    uf: "MG",
                    ibge: "3120201"
                },
                {
                    nome: "Cristália",
                    uf: "MG",
                    ibge: "3120300"
                },
                {
                    nome: "Cristiano Otoni",
                    uf: "MG",
                    ibge: "3120409"
                },
                {
                    nome: "Cristina",
                    uf: "MG",
                    ibge: "3120508"
                },
                {
                    nome: "Crucilândia",
                    uf: "MG",
                    ibge: "3120607"
                },
                {
                    nome: "Cruzeiro da Fortaleza",
                    uf: "MG",
                    ibge: "3120706"
                },
                {
                    nome: "Cruzília",
                    uf: "MG",
                    ibge: "3120805"
                },
                {
                    nome: "Cuparaque",
                    uf: "MG",
                    ibge: "3120839"
                },
                {
                    nome: "Curral de Dentro",
                    uf: "MG",
                    ibge: "3120870"
                },
                {
                    nome: "Curvelo",
                    uf: "MG",
                    ibge: "3120904"
                },
                {
                    nome: "Datas",
                    uf: "MG",
                    ibge: "3121001"
                },
                {
                    nome: "Delfim Moreira",
                    uf: "MG",
                    ibge: "3121100"
                },
                {
                    nome: "Delfinópolis",
                    uf: "MG",
                    ibge: "3121209"
                },
                {
                    nome: "Delta",
                    uf: "MG",
                    ibge: "3121258"
                },
                {
                    nome: "Descoberto",
                    uf: "MG",
                    ibge: "3121308"
                },
                {
                    nome: "Desterro de Entre Rios",
                    uf: "MG",
                    ibge: "3121407"
                },
                {
                    nome: "Desterro do Melo",
                    uf: "MG",
                    ibge: "3121506"
                },
                {
                    nome: "Diamantina",
                    uf: "MG",
                    ibge: "3121605"
                },
                {
                    nome: "Diogo de Vasconcelos",
                    uf: "MG",
                    ibge: "3121704"
                },
                {
                    nome: "Dionísio",
                    uf: "MG",
                    ibge: "3121803"
                },
                {
                    nome: "Divinésia",
                    uf: "MG",
                    ibge: "3121902"
                },
                {
                    nome: "Divino",
                    uf: "MG",
                    ibge: "3122009"
                },
                {
                    nome: "Divino das Laranjeiras",
                    uf: "MG",
                    ibge: "3122108"
                },
                {
                    nome: "Divinolândia de Minas",
                    uf: "MG",
                    ibge: "3122207"
                },
                {
                    nome: "Divinópolis",
                    uf: "MG",
                    ibge: "3122306"
                },
                {
                    nome: "Divisa Alegre",
                    uf: "MG",
                    ibge: "3122355"
                },
                {
                    nome: "Divisa Nova",
                    uf: "MG",
                    ibge: "3122405"
                },
                {
                    nome: "Divisópolis",
                    uf: "MG",
                    ibge: "3122454"
                },
                {
                    nome: "Dom Bosco",
                    uf: "MG",
                    ibge: "3122470"
                },
                {
                    nome: "Dom Cavati",
                    uf: "MG",
                    ibge: "3122504"
                },
                {
                    nome: "Dom Joaquim",
                    uf: "MG",
                    ibge: "3122603"
                },
                {
                    nome: "Dom Silvério",
                    uf: "MG",
                    ibge: "3122702"
                },
                {
                    nome: "Dom Viçoso",
                    uf: "MG",
                    ibge: "3122801"
                },
                {
                    nome: "Dona Eusébia",
                    uf: "MG",
                    ibge: "3122900"
                },
                {
                    nome: "Dores de Campos",
                    uf: "MG",
                    ibge: "3123007"
                },
                {
                    nome: "Dores de Guanhães",
                    uf: "MG",
                    ibge: "3123106"
                },
                {
                    nome: "Dores do Indaiá",
                    uf: "MG",
                    ibge: "3123205"
                },
                {
                    nome: "Dores do Turvo",
                    uf: "MG",
                    ibge: "3123304"
                },
                {
                    nome: "Doresópolis",
                    uf: "MG",
                    ibge: "3123403"
                },
                {
                    nome: "Douradoquara",
                    uf: "MG",
                    ibge: "3123502"
                },
                {
                    nome: "Durandé",
                    uf: "MG",
                    ibge: "3123528"
                },
                {
                    nome: "Elói Mendes",
                    uf: "MG",
                    ibge: "3123601"
                },
                {
                    nome: "Engenheiro Caldas",
                    uf: "MG",
                    ibge: "3123700"
                },
                {
                    nome: "Engenheiro Navarro",
                    uf: "MG",
                    ibge: "3123809"
                },
                {
                    nome: "Entre Folhas",
                    uf: "MG",
                    ibge: "3123858"
                },
                {
                    nome: "Entre Rios de Minas",
                    uf: "MG",
                    ibge: "3123908"
                },
                {
                    nome: "Ervália",
                    uf: "MG",
                    ibge: "3124005"
                },
                {
                    nome: "Esmeraldas",
                    uf: "MG",
                    ibge: "3124104"
                },
                {
                    nome: "Espera Feliz",
                    uf: "MG",
                    ibge: "3124203"
                },
                {
                    nome: "Espinosa",
                    uf: "MG",
                    ibge: "3124302"
                },
                {
                    nome: "Espírito Santo do Dourado",
                    uf: "MG",
                    ibge: "3124401"
                },
                {
                    nome: "Estiva",
                    uf: "MG",
                    ibge: "3124500"
                },
                {
                    nome: "Estrela Dalva",
                    uf: "MG",
                    ibge: "3124609"
                },
                {
                    nome: "Estrela do Indaiá",
                    uf: "MG",
                    ibge: "3124708"
                },
                {
                    nome: "Estrela do Sul",
                    uf: "MG",
                    ibge: "3124807"
                },
                {
                    nome: "Eugenópolis",
                    uf: "MG",
                    ibge: "3124906"
                },
                {
                    nome: "Ewbank da Câmara",
                    uf: "MG",
                    ibge: "3125002"
                },
                {
                    nome: "Extrema",
                    uf: "MG",
                    ibge: "3125101"
                },
                {
                    nome: "Fama",
                    uf: "MG",
                    ibge: "3125200"
                },
                {
                    nome: "Faria Lemos",
                    uf: "MG",
                    ibge: "3125309"
                },
                {
                    nome: "Felício dos Santos",
                    uf: "MG",
                    ibge: "3125408"
                },
                {
                    nome: "São Gonçalo do Rio Preto",
                    uf: "MG",
                    ibge: "3125507"
                },
                {
                    nome: "Felisburgo",
                    uf: "MG",
                    ibge: "3125606"
                },
                {
                    nome: "Felixlândia",
                    uf: "MG",
                    ibge: "3125705"
                },
                {
                    nome: "Fernandes Tourinho",
                    uf: "MG",
                    ibge: "3125804"
                },
                {
                    nome: "Ferros",
                    uf: "MG",
                    ibge: "3125903"
                },
                {
                    nome: "Fervedouro",
                    uf: "MG",
                    ibge: "3125952"
                },
                {
                    nome: "Florestal",
                    uf: "MG",
                    ibge: "3126000"
                },
                {
                    nome: "Formiga",
                    uf: "MG",
                    ibge: "3126109"
                },
                {
                    nome: "Formoso",
                    uf: "MG",
                    ibge: "3126208"
                },
                {
                    nome: "Fortaleza de Minas",
                    uf: "MG",
                    ibge: "3126307"
                },
                {
                    nome: "Fortuna de Minas",
                    uf: "MG",
                    ibge: "3126406"
                },
                {
                    nome: "Francisco Badaró",
                    uf: "MG",
                    ibge: "3126505"
                },
                {
                    nome: "Francisco Dumont",
                    uf: "MG",
                    ibge: "3126604"
                },
                {
                    nome: "Francisco Sá",
                    uf: "MG",
                    ibge: "3126703"
                },
                {
                    nome: "Franciscópolis",
                    uf: "MG",
                    ibge: "3126752"
                },
                {
                    nome: "Frei Gaspar",
                    uf: "MG",
                    ibge: "3126802"
                },
                {
                    nome: "Frei Inocêncio",
                    uf: "MG",
                    ibge: "3126901"
                },
                {
                    nome: "Frei Lagonegro",
                    uf: "MG",
                    ibge: "3126950"
                },
                {
                    nome: "Fronteira",
                    uf: "MG",
                    ibge: "3127008"
                },
                {
                    nome: "Fronteira dos Vales",
                    uf: "MG",
                    ibge: "3127057"
                },
                {
                    nome: "Fruta de Leite",
                    uf: "MG",
                    ibge: "3127073"
                },
                {
                    nome: "Frutal",
                    uf: "MG",
                    ibge: "3127107"
                },
                {
                    nome: "Funilândia",
                    uf: "MG",
                    ibge: "3127206"
                },
                {
                    nome: "Galiléia",
                    uf: "MG",
                    ibge: "3127305"
                },
                {
                    nome: "Gameleiras",
                    uf: "MG",
                    ibge: "3127339"
                },
                {
                    nome: "Glaucilândia",
                    uf: "MG",
                    ibge: "3127354"
                },
                {
                    nome: "Goiabeira",
                    uf: "MG",
                    ibge: "3127370"
                },
                {
                    nome: "Goianá",
                    uf: "MG",
                    ibge: "3127388"
                },
                {
                    nome: "Gonçalves",
                    uf: "MG",
                    ibge: "3127404"
                },
                {
                    nome: "Gonzaga",
                    uf: "MG",
                    ibge: "3127503"
                },
                {
                    nome: "Gouveia",
                    uf: "MG",
                    ibge: "3127602"
                },
                {
                    nome: "Governador Valadares",
                    uf: "MG",
                    ibge: "3127701"
                },
                {
                    nome: "Grão Mogol",
                    uf: "MG",
                    ibge: "3127800"
                },
                {
                    nome: "Grupiara",
                    uf: "MG",
                    ibge: "3127909"
                },
                {
                    nome: "Guanhães",
                    uf: "MG",
                    ibge: "3128006"
                },
                {
                    nome: "Guapé",
                    uf: "MG",
                    ibge: "3128105"
                },
                {
                    nome: "Guaraciaba",
                    uf: "MG",
                    ibge: "3128204"
                },
                {
                    nome: "Guaraciama",
                    uf: "MG",
                    ibge: "3128253"
                },
                {
                    nome: "Guaranésia",
                    uf: "MG",
                    ibge: "3128303"
                },
                {
                    nome: "Guarani",
                    uf: "MG",
                    ibge: "3128402"
                },
                {
                    nome: "Guarará",
                    uf: "MG",
                    ibge: "3128501"
                },
                {
                    nome: "Guarda-Mor",
                    uf: "MG",
                    ibge: "3128600"
                },
                {
                    nome: "Guaxupé",
                    uf: "MG",
                    ibge: "3128709"
                },
                {
                    nome: "Guidoval",
                    uf: "MG",
                    ibge: "3128808"
                },
                {
                    nome: "Guimarânia",
                    uf: "MG",
                    ibge: "3128907"
                },
                {
                    nome: "Guiricema",
                    uf: "MG",
                    ibge: "3129004"
                },
                {
                    nome: "Gurinhatã",
                    uf: "MG",
                    ibge: "3129103"
                },
                {
                    nome: "Heliodora",
                    uf: "MG",
                    ibge: "3129202"
                },
                {
                    nome: "Iapu",
                    uf: "MG",
                    ibge: "3129301"
                },
                {
                    nome: "Ibertioga",
                    uf: "MG",
                    ibge: "3129400"
                },
                {
                    nome: "Ibiá",
                    uf: "MG",
                    ibge: "3129509"
                },
                {
                    nome: "Ibiaí",
                    uf: "MG",
                    ibge: "3129608"
                },
                {
                    nome: "Ibiracatu",
                    uf: "MG",
                    ibge: "3129657"
                },
                {
                    nome: "Ibiraci",
                    uf: "MG",
                    ibge: "3129707"
                },
                {
                    nome: "Ibirité",
                    uf: "MG",
                    ibge: "3129806"
                },
                {
                    nome: "Ibitiúra de Minas",
                    uf: "MG",
                    ibge: "3129905"
                },
                {
                    nome: "Ibituruna",
                    uf: "MG",
                    ibge: "3130002"
                },
                {
                    nome: "Icaraí de Minas",
                    uf: "MG",
                    ibge: "3130051"
                },
                {
                    nome: "Igarapé",
                    uf: "MG",
                    ibge: "3130101"
                },
                {
                    nome: "Igaratinga",
                    uf: "MG",
                    ibge: "3130200"
                },
                {
                    nome: "Iguatama",
                    uf: "MG",
                    ibge: "3130309"
                },
                {
                    nome: "Ijaci",
                    uf: "MG",
                    ibge: "3130408"
                },
                {
                    nome: "Ilicínea",
                    uf: "MG",
                    ibge: "3130507"
                },
                {
                    nome: "Imbé de Minas",
                    uf: "MG",
                    ibge: "3130556"
                },
                {
                    nome: "Inconfidentes",
                    uf: "MG",
                    ibge: "3130606"
                },
                {
                    nome: "Indaiabira",
                    uf: "MG",
                    ibge: "3130655"
                },
                {
                    nome: "Indianópolis",
                    uf: "MG",
                    ibge: "3130705"
                },
                {
                    nome: "Ingaí",
                    uf: "MG",
                    ibge: "3130804"
                },
                {
                    nome: "Inhapim",
                    uf: "MG",
                    ibge: "3130903"
                },
                {
                    nome: "Inhaúma",
                    uf: "MG",
                    ibge: "3131000"
                },
                {
                    nome: "Inimutaba",
                    uf: "MG",
                    ibge: "3131109"
                },
                {
                    nome: "Ipaba",
                    uf: "MG",
                    ibge: "3131158"
                },
                {
                    nome: "Ipanema",
                    uf: "MG",
                    ibge: "3131208"
                },
                {
                    nome: "Ipatinga",
                    uf: "MG",
                    ibge: "3131307"
                },
                {
                    nome: "Ipiaçu",
                    uf: "MG",
                    ibge: "3131406"
                },
                {
                    nome: "Ipuiúna",
                    uf: "MG",
                    ibge: "3131505"
                },
                {
                    nome: "Iraí de Minas",
                    uf: "MG",
                    ibge: "3131604"
                },
                {
                    nome: "Itabira",
                    uf: "MG",
                    ibge: "3131703"
                },
                {
                    nome: "Itabirinha",
                    uf: "MG",
                    ibge: "3131802"
                },
                {
                    nome: "Itabirito",
                    uf: "MG",
                    ibge: "3131901"
                },
                {
                    nome: "Itacambira",
                    uf: "MG",
                    ibge: "3132008"
                },
                {
                    nome: "Itacarambi",
                    uf: "MG",
                    ibge: "3132107"
                },
                {
                    nome: "Itaguara",
                    uf: "MG",
                    ibge: "3132206"
                },
                {
                    nome: "Itaipé",
                    uf: "MG",
                    ibge: "3132305"
                },
                {
                    nome: "Itajubá",
                    uf: "MG",
                    ibge: "3132404"
                },
                {
                    nome: "Itamarandiba",
                    uf: "MG",
                    ibge: "3132503"
                },
                {
                    nome: "Itamarati de Minas",
                    uf: "MG",
                    ibge: "3132602"
                },
                {
                    nome: "Itambacuri",
                    uf: "MG",
                    ibge: "3132701"
                },
                {
                    nome: "Itambé do Mato Dentro",
                    uf: "MG",
                    ibge: "3132800"
                },
                {
                    nome: "Itamogi",
                    uf: "MG",
                    ibge: "3132909"
                },
                {
                    nome: "Itamonte",
                    uf: "MG",
                    ibge: "3133006"
                },
                {
                    nome: "Itanhandu",
                    uf: "MG",
                    ibge: "3133105"
                },
                {
                    nome: "Itanhomi",
                    uf: "MG",
                    ibge: "3133204"
                },
                {
                    nome: "Itaobim",
                    uf: "MG",
                    ibge: "3133303"
                },
                {
                    nome: "Itapagipe",
                    uf: "MG",
                    ibge: "3133402"
                },
                {
                    nome: "Itapecerica",
                    uf: "MG",
                    ibge: "3133501"
                },
                {
                    nome: "Itapeva",
                    uf: "MG",
                    ibge: "3133600"
                },
                {
                    nome: "Itatiaiuçu",
                    uf: "MG",
                    ibge: "3133709"
                },
                {
                    nome: "Itaú de Minas",
                    uf: "MG",
                    ibge: "3133758"
                },
                {
                    nome: "Itaúna",
                    uf: "MG",
                    ibge: "3133808"
                },
                {
                    nome: "Itaverava",
                    uf: "MG",
                    ibge: "3133907"
                },
                {
                    nome: "Itinga",
                    uf: "MG",
                    ibge: "3134004"
                },
                {
                    nome: "Itueta",
                    uf: "MG",
                    ibge: "3134103"
                },
                {
                    nome: "Ituiutaba",
                    uf: "MG",
                    ibge: "3134202"
                },
                {
                    nome: "Itumirim",
                    uf: "MG",
                    ibge: "3134301"
                },
                {
                    nome: "Iturama",
                    uf: "MG",
                    ibge: "3134400"
                },
                {
                    nome: "Itutinga",
                    uf: "MG",
                    ibge: "3134509"
                },
                {
                    nome: "Jaboticatubas",
                    uf: "MG",
                    ibge: "3134608"
                },
                {
                    nome: "Jacinto",
                    uf: "MG",
                    ibge: "3134707"
                },
                {
                    nome: "Jacuí",
                    uf: "MG",
                    ibge: "3134806"
                },
                {
                    nome: "Jacutinga",
                    uf: "MG",
                    ibge: "3134905"
                },
                {
                    nome: "Jaguaraçu",
                    uf: "MG",
                    ibge: "3135001"
                },
                {
                    nome: "Jaíba",
                    uf: "MG",
                    ibge: "3135050"
                },
                {
                    nome: "Jampruca",
                    uf: "MG",
                    ibge: "3135076"
                },
                {
                    nome: "Janaúba",
                    uf: "MG",
                    ibge: "3135100"
                },
                {
                    nome: "Januária",
                    uf: "MG",
                    ibge: "3135209"
                },
                {
                    nome: "Japaraíba",
                    uf: "MG",
                    ibge: "3135308"
                },
                {
                    nome: "Japonvar",
                    uf: "MG",
                    ibge: "3135357"
                },
                {
                    nome: "Jeceaba",
                    uf: "MG",
                    ibge: "3135407"
                },
                {
                    nome: "Jenipapo de Minas",
                    uf: "MG",
                    ibge: "3135456"
                },
                {
                    nome: "Jequeri",
                    uf: "MG",
                    ibge: "3135506"
                },
                {
                    nome: "Jequitaí",
                    uf: "MG",
                    ibge: "3135605"
                },
                {
                    nome: "Jequitibá",
                    uf: "MG",
                    ibge: "3135704"
                },
                {
                    nome: "Jequitinhonha",
                    uf: "MG",
                    ibge: "3135803"
                },
                {
                    nome: "Jesuânia",
                    uf: "MG",
                    ibge: "3135902"
                },
                {
                    nome: "Joaíma",
                    uf: "MG",
                    ibge: "3136009"
                },
                {
                    nome: "Joanésia",
                    uf: "MG",
                    ibge: "3136108"
                },
                {
                    nome: "João Monlevade",
                    uf: "MG",
                    ibge: "3136207"
                },
                {
                    nome: "João Pinheiro",
                    uf: "MG",
                    ibge: "3136306"
                },
                {
                    nome: "Joaquim Felício",
                    uf: "MG",
                    ibge: "3136405"
                },
                {
                    nome: "Jordânia",
                    uf: "MG",
                    ibge: "3136504"
                },
                {
                    nome: "José Gonçalves de Minas",
                    uf: "MG",
                    ibge: "3136520"
                },
                {
                    nome: "José Raydan",
                    uf: "MG",
                    ibge: "3136553"
                },
                {
                    nome: "Josenópolis",
                    uf: "MG",
                    ibge: "3136579"
                },
                {
                    nome: "Nova União",
                    uf: "MG",
                    ibge: "3136603"
                },
                {
                    nome: "Juatuba",
                    uf: "MG",
                    ibge: "3136652"
                },
                {
                    nome: "Juiz de Fora",
                    uf: "MG",
                    ibge: "3136702"
                },
                {
                    nome: "Juramento",
                    uf: "MG",
                    ibge: "3136801"
                },
                {
                    nome: "Juruaia",
                    uf: "MG",
                    ibge: "3136900"
                },
                {
                    nome: "Juvenília",
                    uf: "MG",
                    ibge: "3136959"
                },
                {
                    nome: "Ladainha",
                    uf: "MG",
                    ibge: "3137007"
                },
                {
                    nome: "Lagamar",
                    uf: "MG",
                    ibge: "3137106"
                },
                {
                    nome: "Lagoa da Prata",
                    uf: "MG",
                    ibge: "3137205"
                },
                {
                    nome: "Lagoa dos Patos",
                    uf: "MG",
                    ibge: "3137304"
                },
                {
                    nome: "Lagoa Dourada",
                    uf: "MG",
                    ibge: "3137403"
                },
                {
                    nome: "Lagoa Formosa",
                    uf: "MG",
                    ibge: "3137502"
                },
                {
                    nome: "Lagoa Grande",
                    uf: "MG",
                    ibge: "3137536"
                },
                {
                    nome: "Lagoa Santa",
                    uf: "MG",
                    ibge: "3137601"
                },
                {
                    nome: "Lajinha",
                    uf: "MG",
                    ibge: "3137700"
                },
                {
                    nome: "Lambari",
                    uf: "MG",
                    ibge: "3137809"
                },
                {
                    nome: "Lamim",
                    uf: "MG",
                    ibge: "3137908"
                },
                {
                    nome: "Laranjal",
                    uf: "MG",
                    ibge: "3138005"
                },
                {
                    nome: "Lassance",
                    uf: "MG",
                    ibge: "3138104"
                },
                {
                    nome: "Lavras",
                    uf: "MG",
                    ibge: "3138203"
                },
                {
                    nome: "Leandro Ferreira",
                    uf: "MG",
                    ibge: "3138302"
                },
                {
                    nome: "Leme do Prado",
                    uf: "MG",
                    ibge: "3138351"
                },
                {
                    nome: "Leopoldina",
                    uf: "MG",
                    ibge: "3138401"
                },
                {
                    nome: "Liberdade",
                    uf: "MG",
                    ibge: "3138500"
                },
                {
                    nome: "Lima Duarte",
                    uf: "MG",
                    ibge: "3138609"
                },
                {
                    nome: "Limeira do Oeste",
                    uf: "MG",
                    ibge: "3138625"
                },
                {
                    nome: "Lontra",
                    uf: "MG",
                    ibge: "3138658"
                },
                {
                    nome: "Luisburgo",
                    uf: "MG",
                    ibge: "3138674"
                },
                {
                    nome: "Luislândia",
                    uf: "MG",
                    ibge: "3138682"
                },
                {
                    nome: "Luminárias",
                    uf: "MG",
                    ibge: "3138708"
                },
                {
                    nome: "Luz",
                    uf: "MG",
                    ibge: "3138807"
                },
                {
                    nome: "Machacalis",
                    uf: "MG",
                    ibge: "3138906"
                },
                {
                    nome: "Machado",
                    uf: "MG",
                    ibge: "3139003"
                },
                {
                    nome: "Madre de Deus de Minas",
                    uf: "MG",
                    ibge: "3139102"
                },
                {
                    nome: "Malacacheta",
                    uf: "MG",
                    ibge: "3139201"
                },
                {
                    nome: "Mamonas",
                    uf: "MG",
                    ibge: "3139250"
                },
                {
                    nome: "Manga",
                    uf: "MG",
                    ibge: "3139300"
                },
                {
                    nome: "Manhuaçu",
                    uf: "MG",
                    ibge: "3139409"
                },
                {
                    nome: "Manhumirim",
                    uf: "MG",
                    ibge: "3139508"
                },
                {
                    nome: "Mantena",
                    uf: "MG",
                    ibge: "3139607"
                },
                {
                    nome: "Maravilhas",
                    uf: "MG",
                    ibge: "3139706"
                },
                {
                    nome: "Mar de Espanha",
                    uf: "MG",
                    ibge: "3139805"
                },
                {
                    nome: "Maria da Fé",
                    uf: "MG",
                    ibge: "3139904"
                },
                {
                    nome: "Mariana",
                    uf: "MG",
                    ibge: "3140001"
                },
                {
                    nome: "Marilac",
                    uf: "MG",
                    ibge: "3140100"
                },
                {
                    nome: "Mário Campos",
                    uf: "MG",
                    ibge: "3140159"
                },
                {
                    nome: "Maripá de Minas",
                    uf: "MG",
                    ibge: "3140209"
                },
                {
                    nome: "Marliéria",
                    uf: "MG",
                    ibge: "3140308"
                },
                {
                    nome: "Marmelópolis",
                    uf: "MG",
                    ibge: "3140407"
                },
                {
                    nome: "Martinho Campos",
                    uf: "MG",
                    ibge: "3140506"
                },
                {
                    nome: "Martins Soares",
                    uf: "MG",
                    ibge: "3140530"
                },
                {
                    nome: "Mata Verde",
                    uf: "MG",
                    ibge: "3140555"
                },
                {
                    nome: "Materlândia",
                    uf: "MG",
                    ibge: "3140605"
                },
                {
                    nome: "Mateus Leme",
                    uf: "MG",
                    ibge: "3140704"
                },
                {
                    nome: "Matias Barbosa",
                    uf: "MG",
                    ibge: "3140803"
                },
                {
                    nome: "Matias Cardoso",
                    uf: "MG",
                    ibge: "3140852"
                },
                {
                    nome: "Matipó",
                    uf: "MG",
                    ibge: "3140902"
                },
                {
                    nome: "Mato Verde",
                    uf: "MG",
                    ibge: "3141009"
                },
                {
                    nome: "Matozinhos",
                    uf: "MG",
                    ibge: "3141108"
                },
                {
                    nome: "Matutina",
                    uf: "MG",
                    ibge: "3141207"
                },
                {
                    nome: "Medeiros",
                    uf: "MG",
                    ibge: "3141306"
                },
                {
                    nome: "Medina",
                    uf: "MG",
                    ibge: "3141405"
                },
                {
                    nome: "Mendes Pimentel",
                    uf: "MG",
                    ibge: "3141504"
                },
                {
                    nome: "Mercês",
                    uf: "MG",
                    ibge: "3141603"
                },
                {
                    nome: "Mesquita",
                    uf: "MG",
                    ibge: "3141702"
                },
                {
                    nome: "Minas Novas",
                    uf: "MG",
                    ibge: "3141801"
                },
                {
                    nome: "Minduri",
                    uf: "MG",
                    ibge: "3141900"
                },
                {
                    nome: "Mirabela",
                    uf: "MG",
                    ibge: "3142007"
                },
                {
                    nome: "Miradouro",
                    uf: "MG",
                    ibge: "3142106"
                },
                {
                    nome: "Miraí",
                    uf: "MG",
                    ibge: "3142205"
                },
                {
                    nome: "Miravânia",
                    uf: "MG",
                    ibge: "3142254"
                },
                {
                    nome: "Moeda",
                    uf: "MG",
                    ibge: "3142304"
                },
                {
                    nome: "Moema",
                    uf: "MG",
                    ibge: "3142403"
                },
                {
                    nome: "Monjolos",
                    uf: "MG",
                    ibge: "3142502"
                },
                {
                    nome: "Monsenhor Paulo",
                    uf: "MG",
                    ibge: "3142601"
                },
                {
                    nome: "Montalvânia",
                    uf: "MG",
                    ibge: "3142700"
                },
                {
                    nome: "Monte Alegre de Minas",
                    uf: "MG",
                    ibge: "3142809"
                },
                {
                    nome: "Monte Azul",
                    uf: "MG",
                    ibge: "3142908"
                },
                {
                    nome: "Monte Belo",
                    uf: "MG",
                    ibge: "3143005"
                },
                {
                    nome: "Monte Carmelo",
                    uf: "MG",
                    ibge: "3143104"
                },
                {
                    nome: "Monte Formoso",
                    uf: "MG",
                    ibge: "3143153"
                },
                {
                    nome: "Monte Santo de Minas",
                    uf: "MG",
                    ibge: "3143203"
                },
                {
                    nome: "Montes Claros",
                    uf: "MG",
                    ibge: "3143302"
                },
                {
                    nome: "Monte Sião",
                    uf: "MG",
                    ibge: "3143401"
                },
                {
                    nome: "Montezuma",
                    uf: "MG",
                    ibge: "3143450"
                },
                {
                    nome: "Morada Nova de Minas",
                    uf: "MG",
                    ibge: "3143500"
                },
                {
                    nome: "Morro da Garça",
                    uf: "MG",
                    ibge: "3143609"
                },
                {
                    nome: "Morro do Pilar",
                    uf: "MG",
                    ibge: "3143708"
                },
                {
                    nome: "Munhoz",
                    uf: "MG",
                    ibge: "3143807"
                },
                {
                    nome: "Muriaé",
                    uf: "MG",
                    ibge: "3143906"
                },
                {
                    nome: "Mutum",
                    uf: "MG",
                    ibge: "3144003"
                },
                {
                    nome: "Muzambinho",
                    uf: "MG",
                    ibge: "3144102"
                },
                {
                    nome: "Nacip Raydan",
                    uf: "MG",
                    ibge: "3144201"
                },
                {
                    nome: "Nanuque",
                    uf: "MG",
                    ibge: "3144300"
                },
                {
                    nome: "Naque",
                    uf: "MG",
                    ibge: "3144359"
                },
                {
                    nome: "Natalândia",
                    uf: "MG",
                    ibge: "3144375"
                },
                {
                    nome: "Natércia",
                    uf: "MG",
                    ibge: "3144409"
                },
                {
                    nome: "Nazareno",
                    uf: "MG",
                    ibge: "3144508"
                },
                {
                    nome: "Nepomuceno",
                    uf: "MG",
                    ibge: "3144607"
                },
                {
                    nome: "Ninheira",
                    uf: "MG",
                    ibge: "3144656"
                },
                {
                    nome: "Nova Belém",
                    uf: "MG",
                    ibge: "3144672"
                },
                {
                    nome: "Nova Era",
                    uf: "MG",
                    ibge: "3144706"
                },
                {
                    nome: "Nova Lima",
                    uf: "MG",
                    ibge: "3144805"
                },
                {
                    nome: "Nova Módica",
                    uf: "MG",
                    ibge: "3144904"
                },
                {
                    nome: "Nova Ponte",
                    uf: "MG",
                    ibge: "3145000"
                },
                {
                    nome: "Nova Porteirinha",
                    uf: "MG",
                    ibge: "3145059"
                },
                {
                    nome: "Nova Resende",
                    uf: "MG",
                    ibge: "3145109"
                },
                {
                    nome: "Nova Serrana",
                    uf: "MG",
                    ibge: "3145208"
                },
                {
                    nome: "Novo Cruzeiro",
                    uf: "MG",
                    ibge: "3145307"
                },
                {
                    nome: "Novo Oriente de Minas",
                    uf: "MG",
                    ibge: "3145356"
                },
                {
                    nome: "Novorizonte",
                    uf: "MG",
                    ibge: "3145372"
                },
                {
                    nome: "Olaria",
                    uf: "MG",
                    ibge: "3145406"
                },
                {
                    nome: "Olhos-D'Água",
                    uf: "MG",
                    ibge: "3145455"
                },
                {
                    nome: "Olímpio Noronha",
                    uf: "MG",
                    ibge: "3145505"
                },
                {
                    nome: "Oliveira",
                    uf: "MG",
                    ibge: "3145604"
                },
                {
                    nome: "Oliveira Fortes",
                    uf: "MG",
                    ibge: "3145703"
                },
                {
                    nome: "Onça de Pitangui",
                    uf: "MG",
                    ibge: "3145802"
                },
                {
                    nome: "Oratórios",
                    uf: "MG",
                    ibge: "3145851"
                },
                {
                    nome: "Orizânia",
                    uf: "MG",
                    ibge: "3145877"
                },
                {
                    nome: "Ouro Branco",
                    uf: "MG",
                    ibge: "3145901"
                },
                {
                    nome: "Ouro Fino",
                    uf: "MG",
                    ibge: "3146008"
                },
                {
                    nome: "Ouro Preto",
                    uf: "MG",
                    ibge: "3146107"
                },
                {
                    nome: "Ouro Verde de Minas",
                    uf: "MG",
                    ibge: "3146206"
                },
                {
                    nome: "Padre Carvalho",
                    uf: "MG",
                    ibge: "3146255"
                },
                {
                    nome: "Padre Paraíso",
                    uf: "MG",
                    ibge: "3146305"
                },
                {
                    nome: "Paineiras",
                    uf: "MG",
                    ibge: "3146404"
                },
                {
                    nome: "Pains",
                    uf: "MG",
                    ibge: "3146503"
                },
                {
                    nome: "Pai Pedro",
                    uf: "MG",
                    ibge: "3146552"
                },
                {
                    nome: "Paiva",
                    uf: "MG",
                    ibge: "3146602"
                },
                {
                    nome: "Palma",
                    uf: "MG",
                    ibge: "3146701"
                },
                {
                    nome: "Palmópolis",
                    uf: "MG",
                    ibge: "3146750"
                },
                {
                    nome: "Papagaios",
                    uf: "MG",
                    ibge: "3146909"
                },
                {
                    nome: "Paracatu",
                    uf: "MG",
                    ibge: "3147006"
                },
                {
                    nome: "Pará de Minas",
                    uf: "MG",
                    ibge: "3147105"
                },
                {
                    nome: "Paraguaçu",
                    uf: "MG",
                    ibge: "3147204"
                },
                {
                    nome: "Paraisópolis",
                    uf: "MG",
                    ibge: "3147303"
                },
                {
                    nome: "Paraopeba",
                    uf: "MG",
                    ibge: "3147402"
                },
                {
                    nome: "Passabém",
                    uf: "MG",
                    ibge: "3147501"
                },
                {
                    nome: "Passa Quatro",
                    uf: "MG",
                    ibge: "3147600"
                },
                {
                    nome: "Passa Tempo",
                    uf: "MG",
                    ibge: "3147709"
                },
                {
                    nome: "Passa-Vinte",
                    uf: "MG",
                    ibge: "3147808"
                },
                {
                    nome: "Passos",
                    uf: "MG",
                    ibge: "3147907"
                },
                {
                    nome: "Patis",
                    uf: "MG",
                    ibge: "3147956"
                },
                {
                    nome: "Patos de Minas",
                    uf: "MG",
                    ibge: "3148004"
                },
                {
                    nome: "Patrocínio",
                    uf: "MG",
                    ibge: "3148103"
                },
                {
                    nome: "Patrocínio do Muriaé",
                    uf: "MG",
                    ibge: "3148202"
                },
                {
                    nome: "Paula Cândido",
                    uf: "MG",
                    ibge: "3148301"
                },
                {
                    nome: "Paulistas",
                    uf: "MG",
                    ibge: "3148400"
                },
                {
                    nome: "Pavão",
                    uf: "MG",
                    ibge: "3148509"
                },
                {
                    nome: "Peçanha",
                    uf: "MG",
                    ibge: "3148608"
                },
                {
                    nome: "Pedra Azul",
                    uf: "MG",
                    ibge: "3148707"
                },
                {
                    nome: "Pedra Bonita",
                    uf: "MG",
                    ibge: "3148756"
                },
                {
                    nome: "Pedra do Anta",
                    uf: "MG",
                    ibge: "3148806"
                },
                {
                    nome: "Pedra do Indaiá",
                    uf: "MG",
                    ibge: "3148905"
                },
                {
                    nome: "Pedra Dourada",
                    uf: "MG",
                    ibge: "3149002"
                },
                {
                    nome: "Pedralva",
                    uf: "MG",
                    ibge: "3149101"
                },
                {
                    nome: "Pedras de Maria da Cruz",
                    uf: "MG",
                    ibge: "3149150"
                },
                {
                    nome: "Pedrinópolis",
                    uf: "MG",
                    ibge: "3149200"
                },
                {
                    nome: "Pedro Leopoldo",
                    uf: "MG",
                    ibge: "3149309"
                },
                {
                    nome: "Pedro Teixeira",
                    uf: "MG",
                    ibge: "3149408"
                },
                {
                    nome: "Pequeri",
                    uf: "MG",
                    ibge: "3149507"
                },
                {
                    nome: "Pequi",
                    uf: "MG",
                    ibge: "3149606"
                },
                {
                    nome: "Perdigão",
                    uf: "MG",
                    ibge: "3149705"
                },
                {
                    nome: "Perdizes",
                    uf: "MG",
                    ibge: "3149804"
                },
                {
                    nome: "Perdões",
                    uf: "MG",
                    ibge: "3149903"
                },
                {
                    nome: "Periquito",
                    uf: "MG",
                    ibge: "3149952"
                },
                {
                    nome: "Pescador",
                    uf: "MG",
                    ibge: "3150000"
                },
                {
                    nome: "Piau",
                    uf: "MG",
                    ibge: "3150109"
                },
                {
                    nome: "Piedade de Caratinga",
                    uf: "MG",
                    ibge: "3150158"
                },
                {
                    nome: "Piedade de Ponte Nova",
                    uf: "MG",
                    ibge: "3150208"
                },
                {
                    nome: "Piedade do Rio Grande",
                    uf: "MG",
                    ibge: "3150307"
                },
                {
                    nome: "Piedade dos Gerais",
                    uf: "MG",
                    ibge: "3150406"
                },
                {
                    nome: "Pimenta",
                    uf: "MG",
                    ibge: "3150505"
                },
                {
                    nome: "Pingo-D'Água",
                    uf: "MG",
                    ibge: "3150539"
                },
                {
                    nome: "Pintópolis",
                    uf: "MG",
                    ibge: "3150570"
                },
                {
                    nome: "Piracema",
                    uf: "MG",
                    ibge: "3150604"
                },
                {
                    nome: "Pirajuba",
                    uf: "MG",
                    ibge: "3150703"
                },
                {
                    nome: "Piranga",
                    uf: "MG",
                    ibge: "3150802"
                },
                {
                    nome: "Piranguçu",
                    uf: "MG",
                    ibge: "3150901"
                },
                {
                    nome: "Piranguinho",
                    uf: "MG",
                    ibge: "3151008"
                },
                {
                    nome: "Pirapetinga",
                    uf: "MG",
                    ibge: "3151107"
                },
                {
                    nome: "Pirapora",
                    uf: "MG",
                    ibge: "3151206"
                },
                {
                    nome: "Piraúba",
                    uf: "MG",
                    ibge: "3151305"
                },
                {
                    nome: "Pitangui",
                    uf: "MG",
                    ibge: "3151404"
                },
                {
                    nome: "Piumhi",
                    uf: "MG",
                    ibge: "3151503"
                },
                {
                    nome: "Planura",
                    uf: "MG",
                    ibge: "3151602"
                },
                {
                    nome: "Poço Fundo",
                    uf: "MG",
                    ibge: "3151701"
                },
                {
                    nome: "Poços de Caldas",
                    uf: "MG",
                    ibge: "3151800"
                },
                {
                    nome: "Pocrane",
                    uf: "MG",
                    ibge: "3151909"
                },
                {
                    nome: "Pompéu",
                    uf: "MG",
                    ibge: "3152006"
                },
                {
                    nome: "Ponte Nova",
                    uf: "MG",
                    ibge: "3152105"
                },
                {
                    nome: "Ponto Chique",
                    uf: "MG",
                    ibge: "3152131"
                },
                {
                    nome: "Ponto dos Volantes",
                    uf: "MG",
                    ibge: "3152170"
                },
                {
                    nome: "Porteirinha",
                    uf: "MG",
                    ibge: "3152204"
                },
                {
                    nome: "Porto Firme",
                    uf: "MG",
                    ibge: "3152303"
                },
                {
                    nome: "Poté",
                    uf: "MG",
                    ibge: "3152402"
                },
                {
                    nome: "Pouso Alegre",
                    uf: "MG",
                    ibge: "3152501"
                },
                {
                    nome: "Pouso Alto",
                    uf: "MG",
                    ibge: "3152600"
                },
                {
                    nome: "Prados",
                    uf: "MG",
                    ibge: "3152709"
                },
                {
                    nome: "Prata",
                    uf: "MG",
                    ibge: "3152808"
                },
                {
                    nome: "Pratápolis",
                    uf: "MG",
                    ibge: "3152907"
                },
                {
                    nome: "Pratinha",
                    uf: "MG",
                    ibge: "3153004"
                },
                {
                    nome: "Presidente Bernardes",
                    uf: "MG",
                    ibge: "3153103"
                },
                {
                    nome: "Presidente Juscelino",
                    uf: "MG",
                    ibge: "3153202"
                },
                {
                    nome: "Presidente Kubitschek",
                    uf: "MG",
                    ibge: "3153301"
                },
                {
                    nome: "Presidente Olegário",
                    uf: "MG",
                    ibge: "3153400"
                },
                {
                    nome: "Alto Jequitibá",
                    uf: "MG",
                    ibge: "3153509"
                },
                {
                    nome: "Prudente de Morais",
                    uf: "MG",
                    ibge: "3153608"
                },
                {
                    nome: "Quartel Geral",
                    uf: "MG",
                    ibge: "3153707"
                },
                {
                    nome: "Queluzito",
                    uf: "MG",
                    ibge: "3153806"
                },
                {
                    nome: "Raposos",
                    uf: "MG",
                    ibge: "3153905"
                },
                {
                    nome: "Raul Soares",
                    uf: "MG",
                    ibge: "3154002"
                },
                {
                    nome: "Recreio",
                    uf: "MG",
                    ibge: "3154101"
                },
                {
                    nome: "Reduto",
                    uf: "MG",
                    ibge: "3154150"
                },
                {
                    nome: "Resende Costa",
                    uf: "MG",
                    ibge: "3154200"
                },
                {
                    nome: "Resplendor",
                    uf: "MG",
                    ibge: "3154309"
                },
                {
                    nome: "Ressaquinha",
                    uf: "MG",
                    ibge: "3154408"
                },
                {
                    nome: "Riachinho",
                    uf: "MG",
                    ibge: "3154457"
                },
                {
                    nome: "Riacho dos Machados",
                    uf: "MG",
                    ibge: "3154507"
                },
                {
                    nome: "Ribeirão das Neves",
                    uf: "MG",
                    ibge: "3154606"
                },
                {
                    nome: "Ribeirão Vermelho",
                    uf: "MG",
                    ibge: "3154705"
                },
                {
                    nome: "Rio Acima",
                    uf: "MG",
                    ibge: "3154804"
                },
                {
                    nome: "Rio Casca",
                    uf: "MG",
                    ibge: "3154903"
                },
                {
                    nome: "Rio Doce",
                    uf: "MG",
                    ibge: "3155009"
                },
                {
                    nome: "Rio do Prado",
                    uf: "MG",
                    ibge: "3155108"
                },
                {
                    nome: "Rio Espera",
                    uf: "MG",
                    ibge: "3155207"
                },
                {
                    nome: "Rio Manso",
                    uf: "MG",
                    ibge: "3155306"
                },
                {
                    nome: "Rio Novo",
                    uf: "MG",
                    ibge: "3155405"
                },
                {
                    nome: "Rio Paranaíba",
                    uf: "MG",
                    ibge: "3155504"
                },
                {
                    nome: "Rio Pardo de Minas",
                    uf: "MG",
                    ibge: "3155603"
                },
                {
                    nome: "Rio Piracicaba",
                    uf: "MG",
                    ibge: "3155702"
                },
                {
                    nome: "Rio Pomba",
                    uf: "MG",
                    ibge: "3155801"
                },
                {
                    nome: "Rio Preto",
                    uf: "MG",
                    ibge: "3155900"
                },
                {
                    nome: "Rio Vermelho",
                    uf: "MG",
                    ibge: "3156007"
                },
                {
                    nome: "Ritápolis",
                    uf: "MG",
                    ibge: "3156106"
                },
                {
                    nome: "Rochedo de Minas",
                    uf: "MG",
                    ibge: "3156205"
                },
                {
                    nome: "Rodeiro",
                    uf: "MG",
                    ibge: "3156304"
                },
                {
                    nome: "Romaria",
                    uf: "MG",
                    ibge: "3156403"
                },
                {
                    nome: "Rosário da Limeira",
                    uf: "MG",
                    ibge: "3156452"
                },
                {
                    nome: "Rubelita",
                    uf: "MG",
                    ibge: "3156502"
                },
                {
                    nome: "Rubim",
                    uf: "MG",
                    ibge: "3156601"
                },
                {
                    nome: "Sabará",
                    uf: "MG",
                    ibge: "3156700"
                },
                {
                    nome: "Sabinópolis",
                    uf: "MG",
                    ibge: "3156809"
                },
                {
                    nome: "Sacramento",
                    uf: "MG",
                    ibge: "3156908"
                },
                {
                    nome: "Salinas",
                    uf: "MG",
                    ibge: "3157005"
                },
                {
                    nome: "Salto da Divisa",
                    uf: "MG",
                    ibge: "3157104"
                },
                {
                    nome: "Santa Bárbara",
                    uf: "MG",
                    ibge: "3157203"
                },
                {
                    nome: "Santa Bárbara do Leste",
                    uf: "MG",
                    ibge: "3157252"
                },
                {
                    nome: "Santa Bárbara do Monte Verde",
                    uf: "MG",
                    ibge: "3157278"
                },
                {
                    nome: "Santa Bárbara do Tugúrio",
                    uf: "MG",
                    ibge: "3157302"
                },
                {
                    nome: "Santa Cruz de Minas",
                    uf: "MG",
                    ibge: "3157336"
                },
                {
                    nome: "Santa Cruz de Salinas",
                    uf: "MG",
                    ibge: "3157377"
                },
                {
                    nome: "Santa Cruz do Escalvado",
                    uf: "MG",
                    ibge: "3157401"
                },
                {
                    nome: "Santa Efigênia de Minas",
                    uf: "MG",
                    ibge: "3157500"
                },
                {
                    nome: "Santa Fé de Minas",
                    uf: "MG",
                    ibge: "3157609"
                },
                {
                    nome: "Santa Helena de Minas",
                    uf: "MG",
                    ibge: "3157658"
                },
                {
                    nome: "Santa Juliana",
                    uf: "MG",
                    ibge: "3157708"
                },
                {
                    nome: "Santa Luzia",
                    uf: "MG",
                    ibge: "3157807"
                },
                {
                    nome: "Santa Margarida",
                    uf: "MG",
                    ibge: "3157906"
                },
                {
                    nome: "Santa Maria de Itabira",
                    uf: "MG",
                    ibge: "3158003"
                },
                {
                    nome: "Santa Maria do Salto",
                    uf: "MG",
                    ibge: "3158102"
                },
                {
                    nome: "Santa Maria do Suaçuí",
                    uf: "MG",
                    ibge: "3158201"
                },
                {
                    nome: "Santana da Vargem",
                    uf: "MG",
                    ibge: "3158300"
                },
                {
                    nome: "Santana de Cataguases",
                    uf: "MG",
                    ibge: "3158409"
                },
                {
                    nome: "Santana de Pirapama",
                    uf: "MG",
                    ibge: "3158508"
                },
                {
                    nome: "Santana do Deserto",
                    uf: "MG",
                    ibge: "3158607"
                },
                {
                    nome: "Santana do Garambéu",
                    uf: "MG",
                    ibge: "3158706"
                },
                {
                    nome: "Santana do Jacaré",
                    uf: "MG",
                    ibge: "3158805"
                },
                {
                    nome: "Santana do Manhuaçu",
                    uf: "MG",
                    ibge: "3158904"
                },
                {
                    nome: "Santana do Paraíso",
                    uf: "MG",
                    ibge: "3158953"
                },
                {
                    nome: "Santana do Riacho",
                    uf: "MG",
                    ibge: "3159001"
                },
                {
                    nome: "Santana dos Montes",
                    uf: "MG",
                    ibge: "3159100"
                },
                {
                    nome: "Santa Rita de Caldas",
                    uf: "MG",
                    ibge: "3159209"
                },
                {
                    nome: "Santa Rita de Jacutinga",
                    uf: "MG",
                    ibge: "3159308"
                },
                {
                    nome: "Santa Rita de Minas",
                    uf: "MG",
                    ibge: "3159357"
                },
                {
                    nome: "Santa Rita de Ibitipoca",
                    uf: "MG",
                    ibge: "3159407"
                },
                {
                    nome: "Santa Rita do Itueto",
                    uf: "MG",
                    ibge: "3159506"
                },
                {
                    nome: "Santa Rita do Sapucaí",
                    uf: "MG",
                    ibge: "3159605"
                },
                {
                    nome: "Santa Rosa da Serra",
                    uf: "MG",
                    ibge: "3159704"
                },
                {
                    nome: "Santa Vitória",
                    uf: "MG",
                    ibge: "3159803"
                },
                {
                    nome: "Santo Antônio do Amparo",
                    uf: "MG",
                    ibge: "3159902"
                },
                {
                    nome: "Santo Antônio do Aventureiro",
                    uf: "MG",
                    ibge: "3160009"
                },
                {
                    nome: "Santo Antônio do Grama",
                    uf: "MG",
                    ibge: "3160108"
                },
                {
                    nome: "Santo Antônio do Itambé",
                    uf: "MG",
                    ibge: "3160207"
                },
                {
                    nome: "Santo Antônio do Jacinto",
                    uf: "MG",
                    ibge: "3160306"
                },
                {
                    nome: "Santo Antônio do Monte",
                    uf: "MG",
                    ibge: "3160405"
                },
                {
                    nome: "Santo Antônio do Retiro",
                    uf: "MG",
                    ibge: "3160454"
                },
                {
                    nome: "Santo Antônio do Rio Abaixo",
                    uf: "MG",
                    ibge: "3160504"
                },
                {
                    nome: "Santo Hipólito",
                    uf: "MG",
                    ibge: "3160603"
                },
                {
                    nome: "Santos Dumont",
                    uf: "MG",
                    ibge: "3160702"
                },
                {
                    nome: "São Bento Abade",
                    uf: "MG",
                    ibge: "3160801"
                },
                {
                    nome: "São Brás do Suaçuí",
                    uf: "MG",
                    ibge: "3160900"
                },
                {
                    nome: "São Domingos das Dores",
                    uf: "MG",
                    ibge: "3160959"
                },
                {
                    nome: "São Domingos do Prata",
                    uf: "MG",
                    ibge: "3161007"
                },
                {
                    nome: "São Félix de Minas",
                    uf: "MG",
                    ibge: "3161056"
                },
                {
                    nome: "São Francisco",
                    uf: "MG",
                    ibge: "3161106"
                },
                {
                    nome: "São Francisco de Paula",
                    uf: "MG",
                    ibge: "3161205"
                },
                {
                    nome: "São Francisco de Sales",
                    uf: "MG",
                    ibge: "3161304"
                },
                {
                    nome: "São Francisco do Glória",
                    uf: "MG",
                    ibge: "3161403"
                },
                {
                    nome: "São Geraldo",
                    uf: "MG",
                    ibge: "3161502"
                },
                {
                    nome: "São Geraldo da Piedade",
                    uf: "MG",
                    ibge: "3161601"
                },
                {
                    nome: "São Geraldo do Baixio",
                    uf: "MG",
                    ibge: "3161650"
                },
                {
                    nome: "São Gonçalo do Abaeté",
                    uf: "MG",
                    ibge: "3161700"
                },
                {
                    nome: "São Gonçalo do Pará",
                    uf: "MG",
                    ibge: "3161809"
                },
                {
                    nome: "São Gonçalo do Rio Abaixo",
                    uf: "MG",
                    ibge: "3161908"
                },
                {
                    nome: "São Gonçalo do Sapucaí",
                    uf: "MG",
                    ibge: "3162005"
                },
                {
                    nome: "São Gotardo",
                    uf: "MG",
                    ibge: "3162104"
                },
                {
                    nome: "São João Batista do Glória",
                    uf: "MG",
                    ibge: "3162203"
                },
                {
                    nome: "São João da Lagoa",
                    uf: "MG",
                    ibge: "3162252"
                },
                {
                    nome: "São João da Mata",
                    uf: "MG",
                    ibge: "3162302"
                },
                {
                    nome: "São João da Ponte",
                    uf: "MG",
                    ibge: "3162401"
                },
                {
                    nome: "São João das Missões",
                    uf: "MG",
                    ibge: "3162450"
                },
                {
                    nome: "São João del Rei",
                    uf: "MG",
                    ibge: "3162500"
                },
                {
                    nome: "São João do Manhuaçu",
                    uf: "MG",
                    ibge: "3162559"
                },
                {
                    nome: "São João do Manteninha",
                    uf: "MG",
                    ibge: "3162575"
                },
                {
                    nome: "São João do Oriente",
                    uf: "MG",
                    ibge: "3162609"
                },
                {
                    nome: "São João do Pacuí",
                    uf: "MG",
                    ibge: "3162658"
                },
                {
                    nome: "São João do Paraíso",
                    uf: "MG",
                    ibge: "3162708"
                },
                {
                    nome: "São João Evangelista",
                    uf: "MG",
                    ibge: "3162807"
                },
                {
                    nome: "São João Nepomuceno",
                    uf: "MG",
                    ibge: "3162906"
                },
                {
                    nome: "São Joaquim de Bicas",
                    uf: "MG",
                    ibge: "3162922"
                },
                {
                    nome: "São José da Barra",
                    uf: "MG",
                    ibge: "3162948"
                },
                {
                    nome: "São José da Lapa",
                    uf: "MG",
                    ibge: "3162955"
                },
                {
                    nome: "São José da Safira",
                    uf: "MG",
                    ibge: "3163003"
                },
                {
                    nome: "São José da Varginha",
                    uf: "MG",
                    ibge: "3163102"
                },
                {
                    nome: "São José do Alegre",
                    uf: "MG",
                    ibge: "3163201"
                },
                {
                    nome: "São José do Divino",
                    uf: "MG",
                    ibge: "3163300"
                },
                {
                    nome: "São José do Goiabal",
                    uf: "MG",
                    ibge: "3163409"
                },
                {
                    nome: "São José do Jacuri",
                    uf: "MG",
                    ibge: "3163508"
                },
                {
                    nome: "São José do Mantimento",
                    uf: "MG",
                    ibge: "3163607"
                },
                {
                    nome: "São Lourenço",
                    uf: "MG",
                    ibge: "3163706"
                },
                {
                    nome: "São Miguel do Anta",
                    uf: "MG",
                    ibge: "3163805"
                },
                {
                    nome: "São Pedro da União",
                    uf: "MG",
                    ibge: "3163904"
                },
                {
                    nome: "São Pedro dos Ferros",
                    uf: "MG",
                    ibge: "3164001"
                },
                {
                    nome: "São Pedro do Suaçuí",
                    uf: "MG",
                    ibge: "3164100"
                },
                {
                    nome: "São Romão",
                    uf: "MG",
                    ibge: "3164209"
                },
                {
                    nome: "São Roque de Minas",
                    uf: "MG",
                    ibge: "3164308"
                },
                {
                    nome: "São Sebastião da Bela Vista",
                    uf: "MG",
                    ibge: "3164407"
                },
                {
                    nome: "São Sebastião da Vargem Alegre",
                    uf: "MG",
                    ibge: "3164431"
                },
                {
                    nome: "São Sebastião do Anta",
                    uf: "MG",
                    ibge: "3164472"
                },
                {
                    nome: "São Sebastião do Maranhão",
                    uf: "MG",
                    ibge: "3164506"
                },
                {
                    nome: "São Sebastião do Oeste",
                    uf: "MG",
                    ibge: "3164605"
                },
                {
                    nome: "São Sebastião do Paraíso",
                    uf: "MG",
                    ibge: "3164704"
                },
                {
                    nome: "São Sebastião do Rio Preto",
                    uf: "MG",
                    ibge: "3164803"
                },
                {
                    nome: "São Sebastião do Rio Verde",
                    uf: "MG",
                    ibge: "3164902"
                },
                {
                    nome: "São Tiago",
                    uf: "MG",
                    ibge: "3165008"
                },
                {
                    nome: "São Tomás de Aquino",
                    uf: "MG",
                    ibge: "3165107"
                },
                {
                    nome: "São Thomé das Letras",
                    uf: "MG",
                    ibge: "3165206"
                },
                {
                    nome: "São Vicente de Minas",
                    uf: "MG",
                    ibge: "3165305"
                },
                {
                    nome: "Sapucaí-Mirim",
                    uf: "MG",
                    ibge: "3165404"
                },
                {
                    nome: "Sardoá",
                    uf: "MG",
                    ibge: "3165503"
                },
                {
                    nome: "Sarzedo",
                    uf: "MG",
                    ibge: "3165537"
                },
                {
                    nome: "Setubinha",
                    uf: "MG",
                    ibge: "3165552"
                },
                {
                    nome: "Sem-Peixe",
                    uf: "MG",
                    ibge: "3165560"
                },
                {
                    nome: "Senador Amaral",
                    uf: "MG",
                    ibge: "3165578"
                },
                {
                    nome: "Senador Cortes",
                    uf: "MG",
                    ibge: "3165602"
                },
                {
                    nome: "Senador Firmino",
                    uf: "MG",
                    ibge: "3165701"
                },
                {
                    nome: "Senador José Bento",
                    uf: "MG",
                    ibge: "3165800"
                },
                {
                    nome: "Senador Modestino Gonçalves",
                    uf: "MG",
                    ibge: "3165909"
                },
                {
                    nome: "Senhora de Oliveira",
                    uf: "MG",
                    ibge: "3166006"
                },
                {
                    nome: "Senhora do Porto",
                    uf: "MG",
                    ibge: "3166105"
                },
                {
                    nome: "Senhora dos Remédios",
                    uf: "MG",
                    ibge: "3166204"
                },
                {
                    nome: "Sericita",
                    uf: "MG",
                    ibge: "3166303"
                },
                {
                    nome: "Seritinga",
                    uf: "MG",
                    ibge: "3166402"
                },
                {
                    nome: "Serra Azul de Minas",
                    uf: "MG",
                    ibge: "3166501"
                },
                {
                    nome: "Serra da Saudade",
                    uf: "MG",
                    ibge: "3166600"
                },
                {
                    nome: "Serra dos Aimorés",
                    uf: "MG",
                    ibge: "3166709"
                },
                {
                    nome: "Serra do Salitre",
                    uf: "MG",
                    ibge: "3166808"
                },
                {
                    nome: "Serrania",
                    uf: "MG",
                    ibge: "3166907"
                },
                {
                    nome: "Serranópolis de Minas",
                    uf: "MG",
                    ibge: "3166956"
                },
                {
                    nome: "Serranos",
                    uf: "MG",
                    ibge: "3167004"
                },
                {
                    nome: "Serro",
                    uf: "MG",
                    ibge: "3167103"
                },
                {
                    nome: "Sete Lagoas",
                    uf: "MG",
                    ibge: "3167202"
                },
                {
                    nome: "Silveirânia",
                    uf: "MG",
                    ibge: "3167301"
                },
                {
                    nome: "Silvianópolis",
                    uf: "MG",
                    ibge: "3167400"
                },
                {
                    nome: "Simão Pereira",
                    uf: "MG",
                    ibge: "3167509"
                },
                {
                    nome: "Simonésia",
                    uf: "MG",
                    ibge: "3167608"
                },
                {
                    nome: "Sobrália",
                    uf: "MG",
                    ibge: "3167707"
                },
                {
                    nome: "Soledade de Minas",
                    uf: "MG",
                    ibge: "3167806"
                },
                {
                    nome: "Tabuleiro",
                    uf: "MG",
                    ibge: "3167905"
                },
                {
                    nome: "Taiobeiras",
                    uf: "MG",
                    ibge: "3168002"
                },
                {
                    nome: "Taparuba",
                    uf: "MG",
                    ibge: "3168051"
                },
                {
                    nome: "Tapira",
                    uf: "MG",
                    ibge: "3168101"
                },
                {
                    nome: "Tapiraí",
                    uf: "MG",
                    ibge: "3168200"
                },
                {
                    nome: "Taquaraçu de Minas",
                    uf: "MG",
                    ibge: "3168309"
                },
                {
                    nome: "Tarumirim",
                    uf: "MG",
                    ibge: "3168408"
                },
                {
                    nome: "Teixeiras",
                    uf: "MG",
                    ibge: "3168507"
                },
                {
                    nome: "Teófilo Otoni",
                    uf: "MG",
                    ibge: "3168606"
                },
                {
                    nome: "Timóteo",
                    uf: "MG",
                    ibge: "3168705"
                },
                {
                    nome: "Tiradentes",
                    uf: "MG",
                    ibge: "3168804"
                },
                {
                    nome: "Tiros",
                    uf: "MG",
                    ibge: "3168903"
                },
                {
                    nome: "Tocantins",
                    uf: "MG",
                    ibge: "3169000"
                },
                {
                    nome: "Tocos do Moji",
                    uf: "MG",
                    ibge: "3169059"
                },
                {
                    nome: "Toledo",
                    uf: "MG",
                    ibge: "3169109"
                },
                {
                    nome: "Tombos",
                    uf: "MG",
                    ibge: "3169208"
                },
                {
                    nome: "Três Corações",
                    uf: "MG",
                    ibge: "3169307"
                },
                {
                    nome: "Três Marias",
                    uf: "MG",
                    ibge: "3169356"
                },
                {
                    nome: "Três Pontas",
                    uf: "MG",
                    ibge: "3169406"
                },
                {
                    nome: "Tumiritinga",
                    uf: "MG",
                    ibge: "3169505"
                },
                {
                    nome: "Tupaciguara",
                    uf: "MG",
                    ibge: "3169604"
                },
                {
                    nome: "Turmalina",
                    uf: "MG",
                    ibge: "3169703"
                },
                {
                    nome: "Turvolândia",
                    uf: "MG",
                    ibge: "3169802"
                },
                {
                    nome: "Ubá",
                    uf: "MG",
                    ibge: "3169901"
                },
                {
                    nome: "Ubaí",
                    uf: "MG",
                    ibge: "3170008"
                },
                {
                    nome: "Ubaporanga",
                    uf: "MG",
                    ibge: "3170057"
                },
                {
                    nome: "Uberaba",
                    uf: "MG",
                    ibge: "3170107"
                },
                {
                    nome: "Uberlândia",
                    uf: "MG",
                    ibge: "3170206"
                },
                {
                    nome: "Umburatiba",
                    uf: "MG",
                    ibge: "3170305"
                },
                {
                    nome: "Unaí",
                    uf: "MG",
                    ibge: "3170404"
                },
                {
                    nome: "União de Minas",
                    uf: "MG",
                    ibge: "3170438"
                },
                {
                    nome: "Uruana de Minas",
                    uf: "MG",
                    ibge: "3170479"
                },
                {
                    nome: "Urucânia",
                    uf: "MG",
                    ibge: "3170503"
                },
                {
                    nome: "Urucuia",
                    uf: "MG",
                    ibge: "3170529"
                },
                {
                    nome: "Vargem Alegre",
                    uf: "MG",
                    ibge: "3170578"
                },
                {
                    nome: "Vargem Bonita",
                    uf: "MG",
                    ibge: "3170602"
                },
                {
                    nome: "Vargem Grande do Rio Pardo",
                    uf: "MG",
                    ibge: "3170651"
                },
                {
                    nome: "Varginha",
                    uf: "MG",
                    ibge: "3170701"
                },
                {
                    nome: "Varjão de Minas",
                    uf: "MG",
                    ibge: "3170750"
                },
                {
                    nome: "Várzea da Palma",
                    uf: "MG",
                    ibge: "3170800"
                },
                {
                    nome: "Varzelândia",
                    uf: "MG",
                    ibge: "3170909"
                },
                {
                    nome: "Vazante",
                    uf: "MG",
                    ibge: "3171006"
                },
                {
                    nome: "Verdelândia",
                    uf: "MG",
                    ibge: "3171030"
                },
                {
                    nome: "Veredinha",
                    uf: "MG",
                    ibge: "3171071"
                },
                {
                    nome: "Veríssimo",
                    uf: "MG",
                    ibge: "3171105"
                },
                {
                    nome: "Vermelho Novo",
                    uf: "MG",
                    ibge: "3171154"
                },
                {
                    nome: "Vespasiano",
                    uf: "MG",
                    ibge: "3171204"
                },
                {
                    nome: "Viçosa",
                    uf: "MG",
                    ibge: "3171303"
                },
                {
                    nome: "Vieiras",
                    uf: "MG",
                    ibge: "3171402"
                },
                {
                    nome: "Mathias Lobato",
                    uf: "MG",
                    ibge: "3171501"
                },
                {
                    nome: "Virgem da Lapa",
                    uf: "MG",
                    ibge: "3171600"
                },
                {
                    nome: "Virgínia",
                    uf: "MG",
                    ibge: "3171709"
                },
                {
                    nome: "Virginópolis",
                    uf: "MG",
                    ibge: "3171808"
                },
                {
                    nome: "Virgolândia",
                    uf: "MG",
                    ibge: "3171907"
                },
                {
                    nome: "Visconde do Rio Branco",
                    uf: "MG",
                    ibge: "3172004"
                },
                {
                    nome: "Volta Grande",
                    uf: "MG",
                    ibge: "3172103"
                },
                {
                    nome: "Wenceslau Braz",
                    uf: "MG",
                    ibge: "3172202"
                },
                {
                    nome: "Afonso Cláudio",
                    uf: "ES",
                    ibge: "3200102"
                },
                {
                    nome: "Águia Branca",
                    uf: "ES",
                    ibge: "3200136"
                },
                {
                    nome: "Água Doce do Norte",
                    uf: "ES",
                    ibge: "3200169"
                },
                {
                    nome: "Alegre",
                    uf: "ES",
                    ibge: "3200201"
                },
                {
                    nome: "Alfredo Chaves",
                    uf: "ES",
                    ibge: "3200300"
                },
                {
                    nome: "Alto Rio Novo",
                    uf: "ES",
                    ibge: "3200359"
                },
                {
                    nome: "Anchieta",
                    uf: "ES",
                    ibge: "3200409"
                },
                {
                    nome: "Apiacá",
                    uf: "ES",
                    ibge: "3200508"
                },
                {
                    nome: "Aracruz",
                    uf: "ES",
                    ibge: "3200607"
                },
                {
                    nome: "Atilio Vivacqua",
                    uf: "ES",
                    ibge: "3200706"
                },
                {
                    nome: "Baixo Guandu",
                    uf: "ES",
                    ibge: "3200805"
                },
                {
                    nome: "Barra de São Francisco",
                    uf: "ES",
                    ibge: "3200904"
                },
                {
                    nome: "Boa Esperança",
                    uf: "ES",
                    ibge: "3201001"
                },
                {
                    nome: "Bom Jesus do Norte",
                    uf: "ES",
                    ibge: "3201100"
                },
                {
                    nome: "Brejetuba",
                    uf: "ES",
                    ibge: "3201159"
                },
                {
                    nome: "Cachoeiro de Itapemirim",
                    uf: "ES",
                    ibge: "3201209"
                },
                {
                    nome: "Cariacica",
                    uf: "ES",
                    ibge: "3201308"
                },
                {
                    nome: "Castelo",
                    uf: "ES",
                    ibge: "3201407"
                },
                {
                    nome: "Colatina",
                    uf: "ES",
                    ibge: "3201506"
                },
                {
                    nome: "Conceição da Barra",
                    uf: "ES",
                    ibge: "3201605"
                },
                {
                    nome: "Conceição do Castelo",
                    uf: "ES",
                    ibge: "3201704"
                },
                {
                    nome: "Divino de São Lourenço",
                    uf: "ES",
                    ibge: "3201803"
                },
                {
                    nome: "Domingos Martins",
                    uf: "ES",
                    ibge: "3201902"
                },
                {
                    nome: "Dores do Rio Preto",
                    uf: "ES",
                    ibge: "3202009"
                },
                {
                    nome: "Ecoporanga",
                    uf: "ES",
                    ibge: "3202108"
                },
                {
                    nome: "Fundão",
                    uf: "ES",
                    ibge: "3202207"
                },
                {
                    nome: "Governador Lindenberg",
                    uf: "ES",
                    ibge: "3202256"
                },
                {
                    nome: "Guaçuí",
                    uf: "ES",
                    ibge: "3202306"
                },
                {
                    nome: "Guarapari",
                    uf: "ES",
                    ibge: "3202405"
                },
                {
                    nome: "Ibatiba",
                    uf: "ES",
                    ibge: "3202454"
                },
                {
                    nome: "Ibiraçu",
                    uf: "ES",
                    ibge: "3202504"
                },
                {
                    nome: "Ibitirama",
                    uf: "ES",
                    ibge: "3202553"
                },
                {
                    nome: "Iconha",
                    uf: "ES",
                    ibge: "3202603"
                },
                {
                    nome: "Irupi",
                    uf: "ES",
                    ibge: "3202652"
                },
                {
                    nome: "Itaguaçu",
                    uf: "ES",
                    ibge: "3202702"
                },
                {
                    nome: "Itapemirim",
                    uf: "ES",
                    ibge: "3202801"
                },
                {
                    nome: "Itarana",
                    uf: "ES",
                    ibge: "3202900"
                },
                {
                    nome: "Iúna",
                    uf: "ES",
                    ibge: "3203007"
                },
                {
                    nome: "Jaguaré",
                    uf: "ES",
                    ibge: "3203056"
                },
                {
                    nome: "Jerônimo Monteiro",
                    uf: "ES",
                    ibge: "3203106"
                },
                {
                    nome: "João Neiva",
                    uf: "ES",
                    ibge: "3203130"
                },
                {
                    nome: "Laranja da Terra",
                    uf: "ES",
                    ibge: "3203163"
                },
                {
                    nome: "Linhares",
                    uf: "ES",
                    ibge: "3203205"
                },
                {
                    nome: "Mantenópolis",
                    uf: "ES",
                    ibge: "3203304"
                },
                {
                    nome: "Marataízes",
                    uf: "ES",
                    ibge: "3203320"
                },
                {
                    nome: "Marechal Floriano",
                    uf: "ES",
                    ibge: "3203346"
                },
                {
                    nome: "Marilândia",
                    uf: "ES",
                    ibge: "3203353"
                },
                {
                    nome: "Mimoso do Sul",
                    uf: "ES",
                    ibge: "3203403"
                },
                {
                    nome: "Montanha",
                    uf: "ES",
                    ibge: "3203502"
                },
                {
                    nome: "Mucurici",
                    uf: "ES",
                    ibge: "3203601"
                },
                {
                    nome: "Muniz Freire",
                    uf: "ES",
                    ibge: "3203700"
                },
                {
                    nome: "Muqui",
                    uf: "ES",
                    ibge: "3203809"
                },
                {
                    nome: "Nova Venécia",
                    uf: "ES",
                    ibge: "3203908"
                },
                {
                    nome: "Pancas",
                    uf: "ES",
                    ibge: "3204005"
                },
                {
                    nome: "Pedro Canário",
                    uf: "ES",
                    ibge: "3204054"
                },
                {
                    nome: "Pinheiros",
                    uf: "ES",
                    ibge: "3204104"
                },
                {
                    nome: "Piúma",
                    uf: "ES",
                    ibge: "3204203"
                },
                {
                    nome: "Ponto Belo",
                    uf: "ES",
                    ibge: "3204252"
                },
                {
                    nome: "Presidente Kennedy",
                    uf: "ES",
                    ibge: "3204302"
                },
                {
                    nome: "Rio Bananal",
                    uf: "ES",
                    ibge: "3204351"
                },
                {
                    nome: "Rio Novo do Sul",
                    uf: "ES",
                    ibge: "3204401"
                },
                {
                    nome: "Santa Leopoldina",
                    uf: "ES",
                    ibge: "3204500"
                },
                {
                    nome: "Santa Maria de Jetibá",
                    uf: "ES",
                    ibge: "3204559"
                },
                {
                    nome: "Santa Teresa",
                    uf: "ES",
                    ibge: "3204609"
                },
                {
                    nome: "São Domingos do Norte",
                    uf: "ES",
                    ibge: "3204658"
                },
                {
                    nome: "São Gabriel da Palha",
                    uf: "ES",
                    ibge: "3204708"
                },
                {
                    nome: "São José do Calçado",
                    uf: "ES",
                    ibge: "3204807"
                },
                {
                    nome: "São Mateus",
                    uf: "ES",
                    ibge: "3204906"
                },
                {
                    nome: "São Roque do Canaã",
                    uf: "ES",
                    ibge: "3204955"
                },
                {
                    nome: "Serra",
                    uf: "ES",
                    ibge: "3205002"
                },
                {
                    nome: "Sooretama",
                    uf: "ES",
                    ibge: "3205010"
                },
                {
                    nome: "Vargem Alta",
                    uf: "ES",
                    ibge: "3205036"
                },
                {
                    nome: "Venda Nova do Imigrante",
                    uf: "ES",
                    ibge: "3205069"
                },
                {
                    nome: "Viana",
                    uf: "ES",
                    ibge: "3205101"
                },
                {
                    nome: "Vila Pavão",
                    uf: "ES",
                    ibge: "3205150"
                },
                {
                    nome: "Vila Valério",
                    uf: "ES",
                    ibge: "3205176"
                },
                {
                    nome: "Vila Velha",
                    uf: "ES",
                    ibge: "3205200"
                },
                {
                    nome: "Vitória",
                    uf: "ES",
                    ibge: "3205309"
                },
                {
                    nome: "Angra dos Reis",
                    uf: "RJ",
                    ibge: "3300100"
                },
                {
                    nome: "Aperibé",
                    uf: "RJ",
                    ibge: "3300159"
                },
                {
                    nome: "Araruama",
                    uf: "RJ",
                    ibge: "3300209"
                },
                {
                    nome: "Areal",
                    uf: "RJ",
                    ibge: "3300225"
                },
                {
                    nome: "Armação dos Búzios",
                    uf: "RJ",
                    ibge: "3300233"
                },
                {
                    nome: "Arraial do Cabo",
                    uf: "RJ",
                    ibge: "3300258"
                },
                {
                    nome: "Barra do Piraí",
                    uf: "RJ",
                    ibge: "3300308"
                },
                {
                    nome: "Barra Mansa",
                    uf: "RJ",
                    ibge: "3300407"
                },
                {
                    nome: "Belford Roxo",
                    uf: "RJ",
                    ibge: "3300456"
                },
                {
                    nome: "Bom Jardim",
                    uf: "RJ",
                    ibge: "3300506"
                },
                {
                    nome: "Bom Jesus do Itabapoana",
                    uf: "RJ",
                    ibge: "3300605"
                },
                {
                    nome: "Cabo Frio",
                    uf: "RJ",
                    ibge: "3300704"
                },
                {
                    nome: "Cachoeiras de Macacu",
                    uf: "RJ",
                    ibge: "3300803"
                },
                {
                    nome: "Cambuci",
                    uf: "RJ",
                    ibge: "3300902"
                },
                {
                    nome: "Carapebus",
                    uf: "RJ",
                    ibge: "3300936"
                },
                {
                    nome: "Comendador Levy Gasparian",
                    uf: "RJ",
                    ibge: "3300951"
                },
                {
                    nome: "Campos dos Goytacazes",
                    uf: "RJ",
                    ibge: "3301009"
                },
                {
                    nome: "Cantagalo",
                    uf: "RJ",
                    ibge: "3301108"
                },
                {
                    nome: "Cardoso Moreira",
                    uf: "RJ",
                    ibge: "3301157"
                },
                {
                    nome: "Carmo",
                    uf: "RJ",
                    ibge: "3301207"
                },
                {
                    nome: "Casimiro de Abreu",
                    uf: "RJ",
                    ibge: "3301306"
                },
                {
                    nome: "Conceição de Macabu",
                    uf: "RJ",
                    ibge: "3301405"
                },
                {
                    nome: "Cordeiro",
                    uf: "RJ",
                    ibge: "3301504"
                },
                {
                    nome: "Duas Barras",
                    uf: "RJ",
                    ibge: "3301603"
                },
                {
                    nome: "Duque de Caxias",
                    uf: "RJ",
                    ibge: "3301702"
                },
                {
                    nome: "Engenheiro Paulo de Frontin",
                    uf: "RJ",
                    ibge: "3301801"
                },
                {
                    nome: "Guapimirim",
                    uf: "RJ",
                    ibge: "3301850"
                },
                {
                    nome: "Iguaba Grande",
                    uf: "RJ",
                    ibge: "3301876"
                },
                {
                    nome: "Itaboraí",
                    uf: "RJ",
                    ibge: "3301900"
                },
                {
                    nome: "Itaguaí",
                    uf: "RJ",
                    ibge: "3302007"
                },
                {
                    nome: "Italva",
                    uf: "RJ",
                    ibge: "3302056"
                },
                {
                    nome: "Itaocara",
                    uf: "RJ",
                    ibge: "3302106"
                },
                {
                    nome: "Itaperuna",
                    uf: "RJ",
                    ibge: "3302205"
                },
                {
                    nome: "Itatiaia",
                    uf: "RJ",
                    ibge: "3302254"
                },
                {
                    nome: "Japeri",
                    uf: "RJ",
                    ibge: "3302270"
                },
                {
                    nome: "Laje do Muriaé",
                    uf: "RJ",
                    ibge: "3302304"
                },
                {
                    ibge: "3302403",
                    nome: "Macaé",
                    uf: "RJ"
                },
                {
                    nome: "Macuco",
                    uf: "RJ",
                    ibge: "3302452"
                },
                {
                    nome: "Magé",
                    uf: "RJ",
                    ibge: "3302502"
                },
                {
                    nome: "Mangaratiba",
                    uf: "RJ",
                    ibge: "3302601"
                },
                {
                    nome: "Maricá",
                    uf: "RJ",
                    ibge: "3302700"
                },
                {
                    nome: "Mendes",
                    uf: "RJ",
                    ibge: "3302809"
                },
                {
                    nome: "Mesquita",
                    uf: "RJ",
                    ibge: "3302858"
                },
                {
                    nome: "Miguel Pereira",
                    uf: "RJ",
                    ibge: "3302908"
                },
                {
                    nome: "Miracema",
                    uf: "RJ",
                    ibge: "3303005"
                },
                {
                    nome: "Natividade",
                    uf: "RJ",
                    ibge: "3303104"
                },
                {
                    nome: "Nilópolis",
                    uf: "RJ",
                    ibge: "3303203"
                },
                {
                    nome: "Niterói",
                    uf: "RJ",
                    ibge: "3303302"
                },
                {
                    nome: "Nova Friburgo",
                    uf: "RJ",
                    ibge: "3303401"
                },
                {
                    nome: "Nova Iguaçu",
                    uf: "RJ",
                    ibge: "3303500"
                },
                {
                    nome: "Paracambi",
                    uf: "RJ",
                    ibge: "3303609"
                },
                {
                    nome: "Paraíba do Sul",
                    uf: "RJ",
                    ibge: "3303708"
                },
                {
                    nome: "Paraty",
                    uf: "RJ",
                    ibge: "3303807"
                },
                {
                    nome: "Paty do Alferes",
                    uf: "RJ",
                    ibge: "3303856"
                },
                {
                    nome: "Petrópolis",
                    uf: "RJ",
                    ibge: "3303906"
                },
                {
                    nome: "Pinheiral",
                    uf: "RJ",
                    ibge: "3303955"
                },
                {
                    nome: "Piraí",
                    uf: "RJ",
                    ibge: "3304003"
                },
                {
                    nome: "Porciúncula",
                    uf: "RJ",
                    ibge: "3304102"
                },
                {
                    nome: "Porto Real",
                    uf: "RJ",
                    ibge: "3304110"
                },
                {
                    nome: "Quatis",
                    uf: "RJ",
                    ibge: "3304128"
                },
                {
                    nome: "Queimados",
                    uf: "RJ",
                    ibge: "3304144"
                },
                {
                    nome: "Quissamã",
                    uf: "RJ",
                    ibge: "3304151"
                },
                {
                    nome: "Resende",
                    uf: "RJ",
                    ibge: "3304201"
                },
                {
                    nome: "Rio Bonito",
                    uf: "RJ",
                    ibge: "3304300"
                },
                {
                    nome: "Rio Claro",
                    uf: "RJ",
                    ibge: "3304409"
                },
                {
                    nome: "Rio das Flores",
                    uf: "RJ",
                    ibge: "3304508"
                },
                {
                    nome: "Rio das Ostras",
                    uf: "RJ",
                    ibge: "3304524"
                },
                {
                    nome: "Rio de Janeiro",
                    uf: "RJ",
                    ibge: "3304557"
                },
                {
                    nome: "Santa Maria Madalena",
                    uf: "RJ",
                    ibge: "3304607"
                },
                {
                    nome: "Santo Antônio de Pádua",
                    uf: "RJ",
                    ibge: "3304706"
                },
                {
                    nome: "São Francisco de Itabapoana",
                    uf: "RJ",
                    ibge: "3304755"
                },
                {
                    nome: "São Fidélis",
                    uf: "RJ",
                    ibge: "3304805"
                },
                {
                    nome: "São Gonçalo",
                    uf: "RJ",
                    ibge: "3304904"
                },
                {
                    nome: "São João da Barra",
                    uf: "RJ",
                    ibge: "3305000"
                },
                {
                    nome: "São João de Meriti",
                    uf: "RJ",
                    ibge: "3305109"
                },
                {
                    nome: "São José de Ubá",
                    uf: "RJ",
                    ibge: "3305133"
                },
                {
                    nome: "São José do Vale do Rio Preto",
                    uf: "RJ",
                    ibge: "3305158"
                },
                {
                    nome: "São Pedro da Aldeia",
                    uf: "RJ",
                    ibge: "3305208"
                },
                {
                    nome: "São Sebastião do Alto",
                    uf: "RJ",
                    ibge: "3305307"
                },
                {
                    nome: "Sapucaia",
                    uf: "RJ",
                    ibge: "3305406"
                },
                {
                    nome: "Saquarema",
                    uf: "RJ",
                    ibge: "3305505"
                },
                {
                    nome: "Seropédica",
                    uf: "RJ",
                    ibge: "3305554"
                },
                {
                    nome: "Silva Jardim",
                    uf: "RJ",
                    ibge: "3305604"
                },
                {
                    nome: "Sumidouro",
                    uf: "RJ",
                    ibge: "3305703"
                },
                {
                    nome: "Tanguá",
                    uf: "RJ",
                    ibge: "3305752"
                },
                {
                    nome: "Teresópolis",
                    uf: "RJ",
                    ibge: "3305802"
                },
                {
                    nome: "Trajano de Moraes",
                    uf: "RJ",
                    ibge: "3305901"
                },
                {
                    nome: "Três Rios",
                    uf: "RJ",
                    ibge: "3306008"
                },
                {
                    nome: "Valença",
                    uf: "RJ",
                    ibge: "3306107"
                },
                {
                    nome: "Varre-Sai",
                    uf: "RJ",
                    ibge: "3306156"
                },
                {
                    nome: "Vassouras",
                    uf: "RJ",
                    ibge: "3306206"
                },
                {
                    nome: "Volta Redonda",
                    uf: "RJ",
                    ibge: "3306305"
                },
                {
                    nome: "Adamantina",
                    uf: "SP",
                    ibge: "3500105"
                },
                {
                    nome: "Adolfo",
                    uf: "SP",
                    ibge: "3500204"
                },
                {
                    nome: "Aguaí",
                    uf: "SP",
                    ibge: "3500303"
                },
                {
                    nome: "Águas da Prata",
                    uf: "SP",
                    ibge: "3500402"
                },
                {
                    nome: "Águas de Lindóia",
                    uf: "SP",
                    ibge: "3500501"
                },
                {
                    nome: "Águas de Santa Bárbara",
                    uf: "SP",
                    ibge: "3500550"
                },
                {
                    nome: "Águas de São Pedro",
                    uf: "SP",
                    ibge: "3500600"
                },
                {
                    nome: "Agudos",
                    uf: "SP",
                    ibge: "3500709"
                },
                {
                    nome: "Alambari",
                    uf: "SP",
                    ibge: "3500758"
                },
                {
                    nome: "Alfredo Marcondes",
                    uf: "SP",
                    ibge: "3500808"
                },
                {
                    nome: "Altair",
                    uf: "SP",
                    ibge: "3500907"
                },
                {
                    nome: "Altinópolis",
                    uf: "SP",
                    ibge: "3501004"
                },
                {
                    nome: "Alto Alegre",
                    uf: "SP",
                    ibge: "3501103"
                },
                {
                    nome: "Alumínio",
                    uf: "SP",
                    ibge: "3501152"
                },
                {
                    nome: "Álvares Florence",
                    uf: "SP",
                    ibge: "3501202"
                },
                {
                    nome: "Álvares Machado",
                    uf: "SP",
                    ibge: "3501301"
                },
                {
                    nome: "Álvaro de Carvalho",
                    uf: "SP",
                    ibge: "3501400"
                },
                {
                    nome: "Alvinlândia",
                    uf: "SP",
                    ibge: "3501509"
                },
                {
                    nome: "Americana",
                    uf: "SP",
                    ibge: "3501608"
                },
                {
                    nome: "Américo Brasiliense",
                    uf: "SP",
                    ibge: "3501707"
                },
                {
                    nome: "Américo de Campos",
                    uf: "SP",
                    ibge: "3501806"
                },
                {
                    nome: "Amparo",
                    uf: "SP",
                    ibge: "3501905"
                },
                {
                    nome: "Analândia",
                    uf: "SP",
                    ibge: "3502002"
                },
                {
                    nome: "Andradina",
                    uf: "SP",
                    ibge: "3502101"
                },
                {
                    nome: "Angatuba",
                    uf: "SP",
                    ibge: "3502200"
                },
                {
                    nome: "Anhembi",
                    uf: "SP",
                    ibge: "3502309"
                },
                {
                    nome: "Anhumas",
                    uf: "SP",
                    ibge: "3502408"
                },
                {
                    nome: "Aparecida",
                    uf: "SP",
                    ibge: "3502507"
                },
                {
                    nome: "Aparecida D'Oeste",
                    uf: "SP",
                    ibge: "3502606"
                },
                {
                    nome: "Apiaí",
                    uf: "SP",
                    ibge: "3502705"
                },
                {
                    nome: "Araçariguama",
                    uf: "SP",
                    ibge: "3502754"
                },
                {
                    nome: "Araçatuba",
                    uf: "SP",
                    ibge: "3502804"
                },
                {
                    nome: "Araçoiaba da Serra",
                    uf: "SP",
                    ibge: "3502903"
                },
                {
                    nome: "Aramina",
                    uf: "SP",
                    ibge: "3503000"
                },
                {
                    nome: "Arandu",
                    uf: "SP",
                    ibge: "3503109"
                },
                {
                    nome: "Arapeí",
                    uf: "SP",
                    ibge: "3503158"
                },
                {
                    nome: "Araraquara",
                    uf: "SP",
                    ibge: "3503208"
                },
                {
                    nome: "Araras",
                    uf: "SP",
                    ibge: "3503307"
                },
                {
                    nome: "Arco-Íris",
                    uf: "SP",
                    ibge: "3503356"
                },
                {
                    nome: "Arealva",
                    uf: "SP",
                    ibge: "3503406"
                },
                {
                    nome: "Areias",
                    uf: "SP",
                    ibge: "3503505"
                },
                {
                    nome: "Areiópolis",
                    uf: "SP",
                    ibge: "3503604"
                },
                {
                    nome: "Ariranha",
                    uf: "SP",
                    ibge: "3503703"
                },
                {
                    nome: "Artur Nogueira",
                    uf: "SP",
                    ibge: "3503802"
                },
                {
                    nome: "Arujá",
                    uf: "SP",
                    ibge: "3503901"
                },
                {
                    nome: "Aspásia",
                    uf: "SP",
                    ibge: "3503950"
                },
                {
                    nome: "Assis",
                    uf: "SP",
                    ibge: "3504008"
                },
                {
                    nome: "Atibaia",
                    uf: "SP",
                    ibge: "3504107"
                },
                {
                    nome: "Auriflama",
                    uf: "SP",
                    ibge: "3504206"
                },
                {
                    nome: "Avaí",
                    uf: "SP",
                    ibge: "3504305"
                },
                {
                    nome: "Avanhandava",
                    uf: "SP",
                    ibge: "3504404"
                },
                {
                    nome: "Avaré",
                    uf: "SP",
                    ibge: "3504503"
                },
                {
                    nome: "Bady Bassitt",
                    uf: "SP",
                    ibge: "3504602"
                },
                {
                    nome: "Balbinos",
                    uf: "SP",
                    ibge: "3504701"
                },
                {
                    nome: "Bálsamo",
                    uf: "SP",
                    ibge: "3504800"
                },
                {
                    nome: "Bananal",
                    uf: "SP",
                    ibge: "3504909"
                },
                {
                    nome: "Barão de Antonina",
                    uf: "SP",
                    ibge: "3505005"
                },
                {
                    nome: "Barbosa",
                    uf: "SP",
                    ibge: "3505104"
                },
                {
                    nome: "Bariri",
                    uf: "SP",
                    ibge: "3505203"
                },
                {
                    nome: "Barra Bonita",
                    uf: "SP",
                    ibge: "3505302"
                },
                {
                    nome: "Barra do Chapéu",
                    uf: "SP",
                    ibge: "3505351"
                },
                {
                    nome: "Barra do Turvo",
                    uf: "SP",
                    ibge: "3505401"
                },
                {
                    nome: "Barretos",
                    uf: "SP",
                    ibge: "3505500"
                },
                {
                    nome: "Barrinha",
                    uf: "SP",
                    ibge: "3505609"
                },
                {
                    nome: "Barueri",
                    uf: "SP",
                    ibge: "3505708"
                },
                {
                    nome: "Bastos",
                    uf: "SP",
                    ibge: "3505807"
                },
                {
                    nome: "Batatais",
                    uf: "SP",
                    ibge: "3505906"
                },
                {
                    nome: "Bauru",
                    uf: "SP",
                    ibge: "3506003"
                },
                {
                    nome: "Bebedouro",
                    uf: "SP",
                    ibge: "3506102"
                },
                {
                    nome: "Bento de Abreu",
                    uf: "SP",
                    ibge: "3506201"
                },
                {
                    nome: "Bernardino de Campos",
                    uf: "SP",
                    ibge: "3506300"
                },
                {
                    nome: "Bertioga",
                    uf: "SP",
                    ibge: "3506359"
                },
                {
                    nome: "Bilac",
                    uf: "SP",
                    ibge: "3506409"
                },
                {
                    nome: "Birigui",
                    uf: "SP",
                    ibge: "3506508"
                },
                {
                    nome: "Biritiba-Mirim",
                    uf: "SP",
                    ibge: "3506607"
                },
                {
                    nome: "Boa Esperança do Sul",
                    uf: "SP",
                    ibge: "3506706"
                },
                {
                    nome: "Bocaina",
                    uf: "SP",
                    ibge: "3506805"
                },
                {
                    nome: "Bofete",
                    uf: "SP",
                    ibge: "3506904"
                },
                {
                    nome: "Boituva",
                    uf: "SP",
                    ibge: "3507001"
                },
                {
                    nome: "Bom Jesus dos Perdões",
                    uf: "SP",
                    ibge: "3507100"
                },
                {
                    nome: "Bom Sucesso de Itararé",
                    uf: "SP",
                    ibge: "3507159"
                },
                {
                    nome: "Borá",
                    uf: "SP",
                    ibge: "3507209"
                },
                {
                    nome: "Boracéia",
                    uf: "SP",
                    ibge: "3507308"
                },
                {
                    nome: "Borborema",
                    uf: "SP",
                    ibge: "3507407"
                },
                {
                    nome: "Borebi",
                    uf: "SP",
                    ibge: "3507456"
                },
                {
                    nome: "Botucatu",
                    uf: "SP",
                    ibge: "3507506"
                },
                {
                    nome: "Bragança Paulista",
                    uf: "SP",
                    ibge: "3507605"
                },
                {
                    nome: "Braúna",
                    uf: "SP",
                    ibge: "3507704"
                },
                {
                    nome: "Brejo Alegre",
                    uf: "SP",
                    ibge: "3507753"
                },
                {
                    nome: "Brodowski",
                    uf: "SP",
                    ibge: "3507803"
                },
                {
                    nome: "Brotas",
                    uf: "SP",
                    ibge: "3507902"
                },
                {
                    nome: "Buri",
                    uf: "SP",
                    ibge: "3508009"
                },
                {
                    nome: "Buritama",
                    uf: "SP",
                    ibge: "3508108"
                },
                {
                    nome: "Buritizal",
                    uf: "SP",
                    ibge: "3508207"
                },
                {
                    nome: "Cabrália Paulista",
                    uf: "SP",
                    ibge: "3508306"
                },
                {
                    nome: "Cabreúva",
                    uf: "SP",
                    ibge: "3508405"
                },
                {
                    nome: "Caçapava",
                    uf: "SP",
                    ibge: "3508504"
                },
                {
                    nome: "Cachoeira Paulista",
                    uf: "SP",
                    ibge: "3508603"
                },
                {
                    nome: "Caconde",
                    uf: "SP",
                    ibge: "3508702"
                },
                {
                    nome: "Cafelândia",
                    uf: "SP",
                    ibge: "3508801"
                },
                {
                    nome: "Caiabu",
                    uf: "SP",
                    ibge: "3508900"
                },
                {
                    nome: "Caieiras",
                    uf: "SP",
                    ibge: "3509007"
                },
                {
                    nome: "Caiuá",
                    uf: "SP",
                    ibge: "3509106"
                },
                {
                    nome: "Cajamar",
                    uf: "SP",
                    ibge: "3509205"
                },
                {
                    nome: "Cajati",
                    uf: "SP",
                    ibge: "3509254"
                },
                {
                    nome: "Cajobi",
                    uf: "SP",
                    ibge: "3509304"
                },
                {
                    nome: "Cajuru",
                    uf: "SP",
                    ibge: "3509403"
                },
                {
                    nome: "Campina do Monte Alegre",
                    uf: "SP",
                    ibge: "3509452"
                },
                {
                    nome: "Campinas",
                    uf: "SP",
                    ibge: "3509502"
                },
                {
                    nome: "Campo Limpo Paulista",
                    uf: "SP",
                    ibge: "3509601"
                },
                {
                    nome: "Campos do Jordão",
                    uf: "SP",
                    ibge: "3509700"
                },
                {
                    nome: "Campos Novos Paulista",
                    uf: "SP",
                    ibge: "3509809"
                },
                {
                    nome: "Cananéia",
                    uf: "SP",
                    ibge: "3509908"
                },
                {
                    nome: "Canas",
                    uf: "SP",
                    ibge: "3509957"
                },
                {
                    nome: "Cândido Mota",
                    uf: "SP",
                    ibge: "3510005"
                },
                {
                    nome: "Cândido Rodrigues",
                    uf: "SP",
                    ibge: "3510104"
                },
                {
                    nome: "Canitar",
                    uf: "SP",
                    ibge: "3510153"
                },
                {
                    nome: "Capão Bonito",
                    uf: "SP",
                    ibge: "3510203"
                },
                {
                    nome: "Capela do Alto",
                    uf: "SP",
                    ibge: "3510302"
                },
                {
                    nome: "Capivari",
                    uf: "SP",
                    ibge: "3510401"
                },
                {
                    nome: "Caraguatatuba",
                    uf: "SP",
                    ibge: "3510500"
                },
                {
                    nome: "Carapicuíba",
                    uf: "SP",
                    ibge: "3510609"
                },
                {
                    nome: "Cardoso",
                    uf: "SP",
                    ibge: "3510708"
                },
                {
                    nome: "Casa Branca",
                    uf: "SP",
                    ibge: "3510807"
                },
                {
                    nome: "Cássia dos Coqueiros",
                    uf: "SP",
                    ibge: "3510906"
                },
                {
                    nome: "Castilho",
                    uf: "SP",
                    ibge: "3511003"
                },
                {
                    nome: "Catanduva",
                    uf: "SP",
                    ibge: "3511102"
                },
                {
                    nome: "Catiguá",
                    uf: "SP",
                    ibge: "3511201"
                },
                {
                    nome: "Cedral",
                    uf: "SP",
                    ibge: "3511300"
                },
                {
                    nome: "Cerqueira César",
                    uf: "SP",
                    ibge: "3511409"
                },
                {
                    nome: "Cerquilho",
                    uf: "SP",
                    ibge: "3511508"
                },
                {
                    nome: "Cesário Lange",
                    uf: "SP",
                    ibge: "3511607"
                },
                {
                    nome: "Charqueada",
                    uf: "SP",
                    ibge: "3511706"
                },
                {
                    nome: "Clementina",
                    uf: "SP",
                    ibge: "3511904"
                },
                {
                    nome: "Colina",
                    uf: "SP",
                    ibge: "3512001"
                },
                {
                    nome: "Colômbia",
                    uf: "SP",
                    ibge: "3512100"
                },
                {
                    nome: "Conchal",
                    uf: "SP",
                    ibge: "3512209"
                },
                {
                    nome: "Conchas",
                    uf: "SP",
                    ibge: "3512308"
                },
                {
                    nome: "Cordeirópolis",
                    uf: "SP",
                    ibge: "3512407"
                },
                {
                    nome: "Coroados",
                    uf: "SP",
                    ibge: "3512506"
                },
                {
                    nome: "Coronel Macedo",
                    uf: "SP",
                    ibge: "3512605"
                },
                {
                    nome: "Corumbataí",
                    uf: "SP",
                    ibge: "3512704"
                },
                {
                    nome: "Cosmópolis",
                    uf: "SP",
                    ibge: "3512803"
                },
                {
                    nome: "Cosmorama",
                    uf: "SP",
                    ibge: "3512902"
                },
                {
                    nome: "Cotia",
                    uf: "SP",
                    ibge: "3513009"
                },
                {
                    nome: "Cravinhos",
                    uf: "SP",
                    ibge: "3513108"
                },
                {
                    nome: "Cristais Paulista",
                    uf: "SP",
                    ibge: "3513207"
                },
                {
                    nome: "Cruzália",
                    uf: "SP",
                    ibge: "3513306"
                },
                {
                    nome: "Cruzeiro",
                    uf: "SP",
                    ibge: "3513405"
                },
                {
                    nome: "Cubatão",
                    uf: "SP",
                    ibge: "3513504"
                },
                {
                    nome: "Cunha",
                    uf: "SP",
                    ibge: "3513603"
                },
                {
                    nome: "Descalvado",
                    uf: "SP",
                    ibge: "3513702"
                },
                {
                    nome: "Diadema",
                    uf: "SP",
                    ibge: "3513801"
                },
                {
                    nome: "Dirce Reis",
                    uf: "SP",
                    ibge: "3513850"
                },
                {
                    nome: "Divinolândia",
                    uf: "SP",
                    ibge: "3513900"
                },
                {
                    nome: "Dobrada",
                    uf: "SP",
                    ibge: "3514007"
                },
                {
                    nome: "Dois Córregos",
                    uf: "SP",
                    ibge: "3514106"
                },
                {
                    nome: "Dolcinópolis",
                    uf: "SP",
                    ibge: "3514205"
                },
                {
                    nome: "Dourado",
                    uf: "SP",
                    ibge: "3514304"
                },
                {
                    nome: "Dracena",
                    uf: "SP",
                    ibge: "3514403"
                },
                {
                    nome: "Duartina",
                    uf: "SP",
                    ibge: "3514502"
                },
                {
                    nome: "Dumont",
                    uf: "SP",
                    ibge: "3514601"
                },
                {
                    nome: "Echaporã",
                    uf: "SP",
                    ibge: "3514700"
                },
                {
                    nome: "Eldorado",
                    uf: "SP",
                    ibge: "3514809"
                },
                {
                    nome: "Elias Fausto",
                    uf: "SP",
                    ibge: "3514908"
                },
                {
                    nome: "Elisiário",
                    uf: "SP",
                    ibge: "3514924"
                },
                {
                    nome: "Embaúba",
                    uf: "SP",
                    ibge: "3514957"
                },
                {
                    nome: "Embu das Artes",
                    uf: "SP",
                    ibge: "3515004"
                },
                {
                    nome: "Embu-Guaçu",
                    uf: "SP",
                    ibge: "3515103"
                },
                {
                    nome: "Emilianópolis",
                    uf: "SP",
                    ibge: "3515129"
                },
                {
                    nome: "Engenheiro Coelho",
                    uf: "SP",
                    ibge: "3515152"
                },
                {
                    nome: "Espírito Santo do Pinhal",
                    uf: "SP",
                    ibge: "3515186"
                },
                {
                    nome: "Espírito Santo do Turvo",
                    uf: "SP",
                    ibge: "3515194"
                },
                {
                    nome: "Estrela D'Oeste",
                    uf: "SP",
                    ibge: "3515202"
                },
                {
                    nome: "Estrela do Norte",
                    uf: "SP",
                    ibge: "3515301"
                },
                {
                    nome: "Euclides da Cunha Paulista",
                    uf: "SP",
                    ibge: "3515350"
                },
                {
                    nome: "Fartura",
                    uf: "SP",
                    ibge: "3515400"
                },
                {
                    nome: "Fernandópolis",
                    uf: "SP",
                    ibge: "3515509"
                },
                {
                    nome: "Fernando Prestes",
                    uf: "SP",
                    ibge: "3515608"
                },
                {
                    nome: "Fernão",
                    uf: "SP",
                    ibge: "3515657"
                },
                {
                    nome: "Ferraz de Vasconcelos",
                    uf: "SP",
                    ibge: "3515707"
                },
                {
                    nome: "Flora Rica",
                    uf: "SP",
                    ibge: "3515806"
                },
                {
                    nome: "Floreal",
                    uf: "SP",
                    ibge: "3515905"
                },
                {
                    nome: "Flórida Paulista",
                    uf: "SP",
                    ibge: "3516002"
                },
                {
                    nome: "Florínia",
                    uf: "SP",
                    ibge: "3516101"
                },
                {
                    nome: "Franca",
                    uf: "SP",
                    ibge: "3516200"
                },
                {
                    nome: "Francisco Morato",
                    uf: "SP",
                    ibge: "3516309"
                },
                {
                    nome: "Franco da Rocha",
                    uf: "SP",
                    ibge: "3516408"
                },
                {
                    nome: "Gabriel Monteiro",
                    uf: "SP",
                    ibge: "3516507"
                },
                {
                    nome: "Gália",
                    uf: "SP",
                    ibge: "3516606"
                },
                {
                    nome: "Garça",
                    uf: "SP",
                    ibge: "3516705"
                },
                {
                    nome: "Gastão Vidigal",
                    uf: "SP",
                    ibge: "3516804"
                },
                {
                    nome: "Gavião Peixoto",
                    uf: "SP",
                    ibge: "3516853"
                },
                {
                    nome: "General Salgado",
                    uf: "SP",
                    ibge: "3516903"
                },
                {
                    nome: "Getulina",
                    uf: "SP",
                    ibge: "3517000"
                },
                {
                    nome: "Glicério",
                    uf: "SP",
                    ibge: "3517109"
                },
                {
                    nome: "Guaiçara",
                    uf: "SP",
                    ibge: "3517208"
                },
                {
                    nome: "Guaimbê",
                    uf: "SP",
                    ibge: "3517307"
                },
                {
                    nome: "Guaíra",
                    uf: "SP",
                    ibge: "3517406"
                },
                {
                    nome: "Guapiaçu",
                    uf: "SP",
                    ibge: "3517505"
                },
                {
                    nome: "Guapiara",
                    uf: "SP",
                    ibge: "3517604"
                },
                {
                    nome: "Guará",
                    uf: "SP",
                    ibge: "3517703"
                },
                {
                    nome: "Guaraçaí",
                    uf: "SP",
                    ibge: "3517802"
                },
                {
                    nome: "Guaraci",
                    uf: "SP",
                    ibge: "3517901"
                },
                {
                    nome: "Guarani D'Oeste",
                    uf: "SP",
                    ibge: "3518008"
                },
                {
                    nome: "Guarantã",
                    uf: "SP",
                    ibge: "3518107"
                },
                {
                    nome: "Guararapes",
                    uf: "SP",
                    ibge: "3518206"
                },
                {
                    nome: "Guararema",
                    uf: "SP",
                    ibge: "3518305"
                },
                {
                    nome: "Guaratinguetá",
                    uf: "SP",
                    ibge: "3518404"
                },
                {
                    nome: "Guareí",
                    uf: "SP",
                    ibge: "3518503"
                },
                {
                    nome: "Guariba",
                    uf: "SP",
                    ibge: "3518602"
                },
                {
                    nome: "Guarujá",
                    uf: "SP",
                    ibge: "3518701"
                },
                {
                    nome: "Guarulhos",
                    uf: "SP",
                    ibge: "3518800"
                },
                {
                    nome: "Guatapará",
                    uf: "SP",
                    ibge: "3518859"
                },
                {
                    nome: "Guzolândia",
                    uf: "SP",
                    ibge: "3518909"
                },
                {
                    nome: "Herculândia",
                    uf: "SP",
                    ibge: "3519006"
                },
                {
                    nome: "Holambra",
                    uf: "SP",
                    ibge: "3519055"
                },
                {
                    nome: "Hortolândia",
                    uf: "SP",
                    ibge: "3519071"
                },
                {
                    nome: "Iacanga",
                    uf: "SP",
                    ibge: "3519105"
                },
                {
                    nome: "Iacri",
                    uf: "SP",
                    ibge: "3519204"
                },
                {
                    nome: "Iaras",
                    uf: "SP",
                    ibge: "3519253"
                },
                {
                    nome: "Ibaté",
                    uf: "SP",
                    ibge: "3519303"
                },
                {
                    nome: "Ibirá",
                    uf: "SP",
                    ibge: "3519402"
                },
                {
                    nome: "Ibirarema",
                    uf: "SP",
                    ibge: "3519501"
                },
                {
                    nome: "Ibitinga",
                    uf: "SP",
                    ibge: "3519600"
                },
                {
                    nome: "Ibiúna",
                    uf: "SP",
                    ibge: "3519709"
                },
                {
                    nome: "Icém",
                    uf: "SP",
                    ibge: "3519808"
                },
                {
                    nome: "Iepê",
                    uf: "SP",
                    ibge: "3519907"
                },
                {
                    nome: "Igaraçu do Tietê",
                    uf: "SP",
                    ibge: "3520004"
                },
                {
                    nome: "Igarapava",
                    uf: "SP",
                    ibge: "3520103"
                },
                {
                    nome: "Igaratá",
                    uf: "SP",
                    ibge: "3520202"
                },
                {
                    nome: "Iguape",
                    uf: "SP",
                    ibge: "3520301"
                },
                {
                    nome: "Ilhabela",
                    uf: "SP",
                    ibge: "3520400"
                },
                {
                    nome: "Ilha Comprida",
                    uf: "SP",
                    ibge: "3520426"
                },
                {
                    nome: "Ilha Solteira",
                    uf: "SP",
                    ibge: "3520442"
                },
                {
                    nome: "Indaiatuba",
                    uf: "SP",
                    ibge: "3520509"
                },
                {
                    nome: "Indiana",
                    uf: "SP",
                    ibge: "3520608"
                },
                {
                    nome: "Indiaporã",
                    uf: "SP",
                    ibge: "3520707"
                },
                {
                    nome: "Inúbia Paulista",
                    uf: "SP",
                    ibge: "3520806"
                },
                {
                    nome: "Ipaussu",
                    uf: "SP",
                    ibge: "3520905"
                },
                {
                    nome: "Iperó",
                    uf: "SP",
                    ibge: "3521002"
                },
                {
                    nome: "Ipeúna",
                    uf: "SP",
                    ibge: "3521101"
                },
                {
                    nome: "Ipiguá",
                    uf: "SP",
                    ibge: "3521150"
                },
                {
                    nome: "Iporanga",
                    uf: "SP",
                    ibge: "3521200"
                },
                {
                    nome: "Ipuã",
                    uf: "SP",
                    ibge: "3521309"
                },
                {
                    nome: "Iracemápolis",
                    uf: "SP",
                    ibge: "3521408"
                },
                {
                    nome: "Irapuã",
                    uf: "SP",
                    ibge: "3521507"
                },
                {
                    nome: "Irapuru",
                    uf: "SP",
                    ibge: "3521606"
                },
                {
                    nome: "Itaberá",
                    uf: "SP",
                    ibge: "3521705"
                },
                {
                    nome: "Itaí",
                    uf: "SP",
                    ibge: "3521804"
                },
                {
                    nome: "Itajobi",
                    uf: "SP",
                    ibge: "3521903"
                },
                {
                    nome: "Itaju",
                    uf: "SP",
                    ibge: "3522000"
                },
                {
                    nome: "Itanhaém",
                    uf: "SP",
                    ibge: "3522109"
                },
                {
                    nome: "Itaóca",
                    uf: "SP",
                    ibge: "3522158"
                },
                {
                    nome: "Itapecerica da Serra",
                    uf: "SP",
                    ibge: "3522208"
                },
                {
                    nome: "Itapetininga",
                    uf: "SP",
                    ibge: "3522307"
                },
                {
                    nome: "Itapeva",
                    uf: "SP",
                    ibge: "3522406"
                },
                {
                    nome: "Itapevi",
                    uf: "SP",
                    ibge: "3522505"
                },
                {
                    nome: "Itapira",
                    uf: "SP",
                    ibge: "3522604"
                },
                {
                    nome: "Itapirapuã Paulista",
                    uf: "SP",
                    ibge: "3522653"
                },
                {
                    nome: "Itápolis",
                    uf: "SP",
                    ibge: "3522703"
                },
                {
                    nome: "Itaporanga",
                    uf: "SP",
                    ibge: "3522802"
                },
                {
                    nome: "Itapuí",
                    uf: "SP",
                    ibge: "3522901"
                },
                {
                    nome: "Itapura",
                    uf: "SP",
                    ibge: "3523008"
                },
                {
                    nome: "Itaquaquecetuba",
                    uf: "SP",
                    ibge: "3523107"
                },
                {
                    nome: "Itararé",
                    uf: "SP",
                    ibge: "3523206"
                },
                {
                    nome: "Itariri",
                    uf: "SP",
                    ibge: "3523305"
                },
                {
                    nome: "Itatiba",
                    uf: "SP",
                    ibge: "3523404"
                },
                {
                    nome: "Itatinga",
                    uf: "SP",
                    ibge: "3523503"
                },
                {
                    nome: "Itirapina",
                    uf: "SP",
                    ibge: "3523602"
                },
                {
                    nome: "Itirapuã",
                    uf: "SP",
                    ibge: "3523701"
                },
                {
                    nome: "Itobi",
                    uf: "SP",
                    ibge: "3523800"
                },
                {
                    nome: "Itu",
                    uf: "SP",
                    ibge: "3523909"
                },
                {
                    nome: "Itupeva",
                    uf: "SP",
                    ibge: "3524006"
                },
                {
                    nome: "Ituverava",
                    uf: "SP",
                    ibge: "3524105"
                },
                {
                    nome: "Jaborandi",
                    uf: "SP",
                    ibge: "3524204"
                },
                {
                    nome: "Jaboticabal",
                    uf: "SP",
                    ibge: "3524303"
                },
                {
                    nome: "Jacareí",
                    uf: "SP",
                    ibge: "3524402"
                },
                {
                    nome: "Jaci",
                    uf: "SP",
                    ibge: "3524501"
                },
                {
                    nome: "Jacupiranga",
                    uf: "SP",
                    ibge: "3524600"
                },
                {
                    nome: "Jaguariúna",
                    uf: "SP",
                    ibge: "3524709"
                },
                {
                    nome: "Jales",
                    uf: "SP",
                    ibge: "3524808"
                },
                {
                    nome: "Jambeiro",
                    uf: "SP",
                    ibge: "3524907"
                },
                {
                    nome: "Jandira",
                    uf: "SP",
                    ibge: "3525003"
                },
                {
                    nome: "Jardinópolis",
                    uf: "SP",
                    ibge: "3525102"
                },
                {
                    nome: "Jarinu",
                    uf: "SP",
                    ibge: "3525201"
                },
                {
                    nome: "Jaú",
                    uf: "SP",
                    ibge: "3525300"
                },
                {
                    nome: "Jeriquara",
                    uf: "SP",
                    ibge: "3525409"
                },
                {
                    nome: "Joanópolis",
                    uf: "SP",
                    ibge: "3525508"
                },
                {
                    nome: "João Ramalho",
                    uf: "SP",
                    ibge: "3525607"
                },
                {
                    nome: "José Bonifácio",
                    uf: "SP",
                    ibge: "3525706"
                },
                {
                    nome: "Júlio Mesquita",
                    uf: "SP",
                    ibge: "3525805"
                },
                {
                    nome: "Jumirim",
                    uf: "SP",
                    ibge: "3525854"
                },
                {
                    nome: "Jundiaí",
                    uf: "SP",
                    ibge: "3525904"
                },
                {
                    nome: "Junqueirópolis",
                    uf: "SP",
                    ibge: "3526001"
                },
                {
                    nome: "Juquiá",
                    uf: "SP",
                    ibge: "3526100"
                },
                {
                    nome: "Juquitiba",
                    uf: "SP",
                    ibge: "3526209"
                },
                {
                    nome: "Lagoinha",
                    uf: "SP",
                    ibge: "3526308"
                },
                {
                    nome: "Laranjal Paulista",
                    uf: "SP",
                    ibge: "3526407"
                },
                {
                    nome: "Lavínia",
                    uf: "SP",
                    ibge: "3526506"
                },
                {
                    nome: "Lavrinhas",
                    uf: "SP",
                    ibge: "3526605"
                },
                {
                    nome: "Leme",
                    uf: "SP",
                    ibge: "3526704"
                },
                {
                    nome: "Lençóis Paulista",
                    uf: "SP",
                    ibge: "3526803"
                },
                {
                    nome: "Limeira",
                    uf: "SP",
                    ibge: "3526902"
                },
                {
                    nome: "Lindóia",
                    uf: "SP",
                    ibge: "3527009"
                },
                {
                    nome: "Lins",
                    uf: "SP",
                    ibge: "3527108"
                },
                {
                    nome: "Lorena",
                    uf: "SP",
                    ibge: "3527207"
                },
                {
                    nome: "Lourdes",
                    uf: "SP",
                    ibge: "3527256"
                },
                {
                    nome: "Louveira",
                    uf: "SP",
                    ibge: "3527306"
                },
                {
                    nome: "Lucélia",
                    uf: "SP",
                    ibge: "3527405"
                },
                {
                    nome: "Lucianópolis",
                    uf: "SP",
                    ibge: "3527504"
                },
                {
                    nome: "Luís Antônio",
                    uf: "SP",
                    ibge: "3527603"
                },
                {
                    nome: "Luiziânia",
                    uf: "SP",
                    ibge: "3527702"
                },
                {
                    nome: "Lupércio",
                    uf: "SP",
                    ibge: "3527801"
                },
                {
                    nome: "Lutécia",
                    uf: "SP",
                    ibge: "3527900"
                },
                {
                    nome: "Macatuba",
                    uf: "SP",
                    ibge: "3528007"
                },
                {
                    nome: "Macaubal",
                    uf: "SP",
                    ibge: "3528106"
                },
                {
                    nome: "Macedônia",
                    uf: "SP",
                    ibge: "3528205"
                },
                {
                    nome: "Magda",
                    uf: "SP",
                    ibge: "3528304"
                },
                {
                    nome: "Mairinque",
                    uf: "SP",
                    ibge: "3528403"
                },
                {
                    nome: "Mairiporã",
                    uf: "SP",
                    ibge: "3528502"
                },
                {
                    nome: "Manduri",
                    uf: "SP",
                    ibge: "3528601"
                },
                {
                    nome: "Marabá Paulista",
                    uf: "SP",
                    ibge: "3528700"
                },
                {
                    nome: "Maracaí",
                    uf: "SP",
                    ibge: "3528809"
                },
                {
                    nome: "Marapoama",
                    uf: "SP",
                    ibge: "3528858"
                },
                {
                    nome: "Mariápolis",
                    uf: "SP",
                    ibge: "3528908"
                },
                {
                    nome: "Marília",
                    uf: "SP",
                    ibge: "3529005"
                },
                {
                    nome: "Marinópolis",
                    uf: "SP",
                    ibge: "3529104"
                },
                {
                    nome: "Martinópolis",
                    uf: "SP",
                    ibge: "3529203"
                },
                {
                    nome: "Matão",
                    uf: "SP",
                    ibge: "3529302"
                },
                {
                    nome: "Mauá",
                    uf: "SP",
                    ibge: "3529401"
                },
                {
                    nome: "Mendonça",
                    uf: "SP",
                    ibge: "3529500"
                },
                {
                    nome: "Meridiano",
                    uf: "SP",
                    ibge: "3529609"
                },
                {
                    nome: "Mesópolis",
                    uf: "SP",
                    ibge: "3529658"
                },
                {
                    nome: "Miguelópolis",
                    uf: "SP",
                    ibge: "3529708"
                },
                {
                    nome: "Mineiros do Tietê",
                    uf: "SP",
                    ibge: "3529807"
                },
                {
                    nome: "Miracatu",
                    uf: "SP",
                    ibge: "3529906"
                },
                {
                    nome: "Mira Estrela",
                    uf: "SP",
                    ibge: "3530003"
                },
                {
                    nome: "Mirandópolis",
                    uf: "SP",
                    ibge: "3530102"
                },
                {
                    nome: "Mirante do Paranapanema",
                    uf: "SP",
                    ibge: "3530201"
                },
                {
                    nome: "Mirassol",
                    uf: "SP",
                    ibge: "3530300"
                },
                {
                    nome: "Mirassolândia",
                    uf: "SP",
                    ibge: "3530409"
                },
                {
                    nome: "Mococa",
                    uf: "SP",
                    ibge: "3530508"
                },
                {
                    nome: "Mogi das Cruzes",
                    uf: "SP",
                    ibge: "3530607"
                },
                {
                    nome: "Mogi Guaçu",
                    uf: "SP",
                    ibge: "3530706"
                },
                {
                    nome: "Moji Mirim",
                    uf: "SP",
                    ibge: "3530805"
                },
                {
                    nome: "Mombuca",
                    uf: "SP",
                    ibge: "3530904"
                },
                {
                    nome: "Monções",
                    uf: "SP",
                    ibge: "3531001"
                },
                {
                    nome: "Mongaguá",
                    uf: "SP",
                    ibge: "3531100"
                },
                {
                    nome: "Monte Alegre do Sul",
                    uf: "SP",
                    ibge: "3531209"
                },
                {
                    nome: "Monte Alto",
                    uf: "SP",
                    ibge: "3531308"
                },
                {
                    nome: "Monte Aprazível",
                    uf: "SP",
                    ibge: "3531407"
                },
                {
                    nome: "Monte Azul Paulista",
                    uf: "SP",
                    ibge: "3531506"
                },
                {
                    nome: "Monte Castelo",
                    uf: "SP",
                    ibge: "3531605"
                },
                {
                    nome: "Monteiro Lobato",
                    uf: "SP",
                    ibge: "3531704"
                },
                {
                    nome: "Monte Mor",
                    uf: "SP",
                    ibge: "3531803"
                },
                {
                    nome: "Morro Agudo",
                    uf: "SP",
                    ibge: "3531902"
                },
                {
                    nome: "Morungaba",
                    uf: "SP",
                    ibge: "3532009"
                },
                {
                    nome: "Motuca",
                    uf: "SP",
                    ibge: "3532058"
                },
                {
                    nome: "Murutinga do Sul",
                    uf: "SP",
                    ibge: "3532108"
                },
                {
                    nome: "Nantes",
                    uf: "SP",
                    ibge: "3532157"
                },
                {
                    nome: "Narandiba",
                    uf: "SP",
                    ibge: "3532207"
                },
                {
                    nome: "Natividade da Serra",
                    uf: "SP",
                    ibge: "3532306"
                },
                {
                    nome: "Nazaré Paulista",
                    uf: "SP",
                    ibge: "3532405"
                },
                {
                    nome: "Neves Paulista",
                    uf: "SP",
                    ibge: "3532504"
                },
                {
                    nome: "Nhandeara",
                    uf: "SP",
                    ibge: "3532603"
                },
                {
                    nome: "Nipoã",
                    uf: "SP",
                    ibge: "3532702"
                },
                {
                    nome: "Nova Aliança",
                    uf: "SP",
                    ibge: "3532801"
                },
                {
                    nome: "Nova Campina",
                    uf: "SP",
                    ibge: "3532827"
                },
                {
                    nome: "Nova Canaã Paulista",
                    uf: "SP",
                    ibge: "3532843"
                },
                {
                    nome: "Nova Castilho",
                    uf: "SP",
                    ibge: "3532868"
                },
                {
                    nome: "Nova Europa",
                    uf: "SP",
                    ibge: "3532900"
                },
                {
                    nome: "Nova Granada",
                    uf: "SP",
                    ibge: "3533007"
                },
                {
                    nome: "Nova Guataporanga",
                    uf: "SP",
                    ibge: "3533106"
                },
                {
                    nome: "Nova Independência",
                    uf: "SP",
                    ibge: "3533205"
                },
                {
                    nome: "Novais",
                    uf: "SP",
                    ibge: "3533254"
                },
                {
                    nome: "Nova Luzitânia",
                    uf: "SP",
                    ibge: "3533304"
                },
                {
                    nome: "Nova Odessa",
                    uf: "SP",
                    ibge: "3533403"
                },
                {
                    nome: "Novo Horizonte",
                    uf: "SP",
                    ibge: "3533502"
                },
                {
                    nome: "Nuporanga",
                    uf: "SP",
                    ibge: "3533601"
                },
                {
                    nome: "Ocauçu",
                    uf: "SP",
                    ibge: "3533700"
                },
                {
                    nome: "Óleo",
                    uf: "SP",
                    ibge: "3533809"
                },
                {
                    nome: "Olímpia",
                    uf: "SP",
                    ibge: "3533908"
                },
                {
                    nome: "Onda Verde",
                    uf: "SP",
                    ibge: "3534005"
                },
                {
                    nome: "Oriente",
                    uf: "SP",
                    ibge: "3534104"
                },
                {
                    nome: "Orindiúva",
                    uf: "SP",
                    ibge: "3534203"
                },
                {
                    nome: "Orlândia",
                    uf: "SP",
                    ibge: "3534302"
                },
                {
                    nome: "Osasco",
                    uf: "SP",
                    ibge: "3534401"
                },
                {
                    nome: "Oscar Bressane",
                    uf: "SP",
                    ibge: "3534500"
                },
                {
                    nome: "Osvaldo Cruz",
                    uf: "SP",
                    ibge: "3534609"
                },
                {
                    nome: "Ourinhos",
                    uf: "SP",
                    ibge: "3534708"
                },
                {
                    nome: "Ouroeste",
                    uf: "SP",
                    ibge: "3534757"
                },
                {
                    nome: "Ouro Verde",
                    uf: "SP",
                    ibge: "3534807"
                },
                {
                    nome: "Pacaembu",
                    uf: "SP",
                    ibge: "3534906"
                },
                {
                    nome: "Palestina",
                    uf: "SP",
                    ibge: "3535002"
                },
                {
                    nome: "Palmares Paulista",
                    uf: "SP",
                    ibge: "3535101"
                },
                {
                    nome: "Palmeira D'Oeste",
                    uf: "SP",
                    ibge: "3535200"
                },
                {
                    nome: "Palmital",
                    uf: "SP",
                    ibge: "3535309"
                },
                {
                    nome: "Panorama",
                    uf: "SP",
                    ibge: "3535408"
                },
                {
                    nome: "Paraguaçu Paulista",
                    uf: "SP",
                    ibge: "3535507"
                },
                {
                    nome: "Paraibuna",
                    uf: "SP",
                    ibge: "3535606"
                },
                {
                    nome: "Paraíso",
                    uf: "SP",
                    ibge: "3535705"
                },
                {
                    nome: "Paranapanema",
                    uf: "SP",
                    ibge: "3535804"
                },
                {
                    nome: "Paranapuã",
                    uf: "SP",
                    ibge: "3535903"
                },
                {
                    nome: "Parapuã",
                    uf: "SP",
                    ibge: "3536000"
                },
                {
                    nome: "Pardinho",
                    uf: "SP",
                    ibge: "3536109"
                },
                {
                    nome: "Pariquera-Açu",
                    uf: "SP",
                    ibge: "3536208"
                },
                {
                    nome: "Parisi",
                    uf: "SP",
                    ibge: "3536257"
                },
                {
                    nome: "Patrocínio Paulista",
                    uf: "SP",
                    ibge: "3536307"
                },
                {
                    nome: "Paulicéia",
                    uf: "SP",
                    ibge: "3536406"
                },
                {
                    nome: "Paulínia",
                    uf: "SP",
                    ibge: "3536505"
                },
                {
                    nome: "Paulistânia",
                    uf: "SP",
                    ibge: "3536570"
                },
                {
                    nome: "Paulo de Faria",
                    uf: "SP",
                    ibge: "3536604"
                },
                {
                    nome: "Pederneiras",
                    uf: "SP",
                    ibge: "3536703"
                },
                {
                    nome: "Pedra Bela",
                    uf: "SP",
                    ibge: "3536802"
                },
                {
                    nome: "Pedranópolis",
                    uf: "SP",
                    ibge: "3536901"
                },
                {
                    nome: "Pedregulho",
                    uf: "SP",
                    ibge: "3537008"
                },
                {
                    nome: "Pedreira",
                    uf: "SP",
                    ibge: "3537107"
                },
                {
                    nome: "Pedrinhas Paulista",
                    uf: "SP",
                    ibge: "3537156"
                },
                {
                    nome: "Pedro de Toledo",
                    uf: "SP",
                    ibge: "3537206"
                },
                {
                    nome: "Penápolis",
                    uf: "SP",
                    ibge: "3537305"
                },
                {
                    nome: "Pereira Barreto",
                    uf: "SP",
                    ibge: "3537404"
                },
                {
                    nome: "Pereiras",
                    uf: "SP",
                    ibge: "3537503"
                },
                {
                    nome: "Peruíbe",
                    uf: "SP",
                    ibge: "3537602"
                },
                {
                    nome: "Piacatu",
                    uf: "SP",
                    ibge: "3537701"
                },
                {
                    nome: "Piedade",
                    uf: "SP",
                    ibge: "3537800"
                },
                {
                    nome: "Pilar do Sul",
                    uf: "SP",
                    ibge: "3537909"
                },
                {
                    nome: "Pindamonhangaba",
                    uf: "SP",
                    ibge: "3538006"
                },
                {
                    nome: "Pindorama",
                    uf: "SP",
                    ibge: "3538105"
                },
                {
                    nome: "Pinhalzinho",
                    uf: "SP",
                    ibge: "3538204"
                },
                {
                    nome: "Piquerobi",
                    uf: "SP",
                    ibge: "3538303"
                },
                {
                    nome: "Piquete",
                    uf: "SP",
                    ibge: "3538501"
                },
                {
                    nome: "Piracaia",
                    uf: "SP",
                    ibge: "3538600"
                },
                {
                    nome: "Piracicaba",
                    uf: "SP",
                    ibge: "3538709"
                },
                {
                    nome: "Piraju",
                    uf: "SP",
                    ibge: "3538808"
                },
                {
                    nome: "Pirajuí",
                    uf: "SP",
                    ibge: "3538907"
                },
                {
                    nome: "Pirangi",
                    uf: "SP",
                    ibge: "3539004"
                },
                {
                    nome: "Pirapora do Bom Jesus",
                    uf: "SP",
                    ibge: "3539103"
                },
                {
                    nome: "Pirapozinho",
                    uf: "SP",
                    ibge: "3539202"
                },
                {
                    nome: "Pirassununga",
                    uf: "SP",
                    ibge: "3539301"
                },
                {
                    nome: "Piratininga",
                    uf: "SP",
                    ibge: "3539400"
                },
                {
                    nome: "Pitangueiras",
                    uf: "SP",
                    ibge: "3539509"
                },
                {
                    nome: "Planalto",
                    uf: "SP",
                    ibge: "3539608"
                },
                {
                    nome: "Platina",
                    uf: "SP",
                    ibge: "3539707"
                },
                {
                    nome: "Poá",
                    uf: "SP",
                    ibge: "3539806"
                },
                {
                    nome: "Poloni",
                    uf: "SP",
                    ibge: "3539905"
                },
                {
                    nome: "Pompéia",
                    uf: "SP",
                    ibge: "3540002"
                },
                {
                    nome: "Pongaí",
                    uf: "SP",
                    ibge: "3540101"
                },
                {
                    nome: "Pontal",
                    uf: "SP",
                    ibge: "3540200"
                },
                {
                    nome: "Pontalinda",
                    uf: "SP",
                    ibge: "3540259"
                },
                {
                    nome: "Pontes Gestal",
                    uf: "SP",
                    ibge: "3540309"
                },
                {
                    nome: "Populina",
                    uf: "SP",
                    ibge: "3540408"
                },
                {
                    nome: "Porangaba",
                    uf: "SP",
                    ibge: "3540507"
                },
                {
                    nome: "Porto Feliz",
                    uf: "SP",
                    ibge: "3540606"
                },
                {
                    nome: "Porto Ferreira",
                    uf: "SP",
                    ibge: "3540705"
                },
                {
                    nome: "Potim",
                    uf: "SP",
                    ibge: "3540754"
                },
                {
                    nome: "Potirendaba",
                    uf: "SP",
                    ibge: "3540804"
                },
                {
                    nome: "Pracinha",
                    uf: "SP",
                    ibge: "3540853"
                },
                {
                    nome: "Pradópolis",
                    uf: "SP",
                    ibge: "3540903"
                },
                {
                    nome: "Praia Grande",
                    uf: "SP",
                    ibge: "3541000"
                },
                {
                    nome: "Pratânia",
                    uf: "SP",
                    ibge: "3541059"
                },
                {
                    nome: "Presidente Alves",
                    uf: "SP",
                    ibge: "3541109"
                },
                {
                    nome: "Presidente Bernardes",
                    uf: "SP",
                    ibge: "3541208"
                },
                {
                    nome: "Presidente Epitácio",
                    uf: "SP",
                    ibge: "3541307"
                },
                {
                    nome: "Presidente Prudente",
                    uf: "SP",
                    ibge: "3541406"
                },
                {
                    nome: "Presidente Venceslau",
                    uf: "SP",
                    ibge: "3541505"
                },
                {
                    nome: "Promissão",
                    uf: "SP",
                    ibge: "3541604"
                },
                {
                    nome: "Quadra",
                    uf: "SP",
                    ibge: "3541653"
                },
                {
                    nome: "Quatá",
                    uf: "SP",
                    ibge: "3541703"
                },
                {
                    nome: "Queiroz",
                    uf: "SP",
                    ibge: "3541802"
                },
                {
                    nome: "Queluz",
                    uf: "SP",
                    ibge: "3541901"
                },
                {
                    nome: "Quintana",
                    uf: "SP",
                    ibge: "3542008"
                },
                {
                    nome: "Rafard",
                    uf: "SP",
                    ibge: "3542107"
                },
                {
                    nome: "Rancharia",
                    uf: "SP",
                    ibge: "3542206"
                },
                {
                    nome: "Redenção da Serra",
                    uf: "SP",
                    ibge: "3542305"
                },
                {
                    nome: "Regente Feijó",
                    uf: "SP",
                    ibge: "3542404"
                },
                {
                    nome: "Reginópolis",
                    uf: "SP",
                    ibge: "3542503"
                },
                {
                    nome: "Registro",
                    uf: "SP",
                    ibge: "3542602"
                },
                {
                    nome: "Restinga",
                    uf: "SP",
                    ibge: "3542701"
                },
                {
                    nome: "Ribeira",
                    uf: "SP",
                    ibge: "3542800"
                },
                {
                    nome: "Ribeirão Bonito",
                    uf: "SP",
                    ibge: "3542909"
                },
                {
                    nome: "Ribeirão Branco",
                    uf: "SP",
                    ibge: "3543006"
                },
                {
                    nome: "Ribeirão Corrente",
                    uf: "SP",
                    ibge: "3543105"
                },
                {
                    nome: "Ribeirão do Sul",
                    uf: "SP",
                    ibge: "3543204"
                },
                {
                    nome: "Ribeirão dos Índios",
                    uf: "SP",
                    ibge: "3543238"
                },
                {
                    nome: "Ribeirão Grande",
                    uf: "SP",
                    ibge: "3543253"
                },
                {
                    nome: "Ribeirão Pires",
                    uf: "SP",
                    ibge: "3543303"
                },
                {
                    nome: "Ribeirão Preto",
                    uf: "SP",
                    ibge: "3543402"
                },
                {
                    nome: "Riversul",
                    uf: "SP",
                    ibge: "3543501"
                },
                {
                    nome: "Rifaina",
                    uf: "SP",
                    ibge: "3543600"
                },
                {
                    nome: "Rincão",
                    uf: "SP",
                    ibge: "3543709"
                },
                {
                    nome: "Rinópolis",
                    uf: "SP",
                    ibge: "3543808"
                },
                {
                    nome: "Rio Claro",
                    uf: "SP",
                    ibge: "3543907"
                },
                {
                    nome: "Rio das Pedras",
                    uf: "SP",
                    ibge: "3544004"
                },
                {
                    nome: "Rio Grande da Serra",
                    uf: "SP",
                    ibge: "3544103"
                },
                {
                    nome: "Riolândia",
                    uf: "SP",
                    ibge: "3544202"
                },
                {
                    nome: "Rosana",
                    uf: "SP",
                    ibge: "3544251"
                },
                {
                    nome: "Roseira",
                    uf: "SP",
                    ibge: "3544301"
                },
                {
                    nome: "Rubiácea",
                    uf: "SP",
                    ibge: "3544400"
                },
                {
                    nome: "Rubinéia",
                    uf: "SP",
                    ibge: "3544509"
                },
                {
                    nome: "Sabino",
                    uf: "SP",
                    ibge: "3544608"
                },
                {
                    nome: "Sagres",
                    uf: "SP",
                    ibge: "3544707"
                },
                {
                    nome: "Sales",
                    uf: "SP",
                    ibge: "3544806"
                },
                {
                    nome: "Sales Oliveira",
                    uf: "SP",
                    ibge: "3544905"
                },
                {
                    nome: "Salesópolis",
                    uf: "SP",
                    ibge: "3545001"
                },
                {
                    nome: "Salmourão",
                    uf: "SP",
                    ibge: "3545100"
                },
                {
                    nome: "Saltinho",
                    uf: "SP",
                    ibge: "3545159"
                },
                {
                    nome: "Salto",
                    uf: "SP",
                    ibge: "3545209"
                },
                {
                    nome: "Salto de Pirapora",
                    uf: "SP",
                    ibge: "3545308"
                },
                {
                    nome: "Salto Grande",
                    uf: "SP",
                    ibge: "3545407"
                },
                {
                    nome: "Sandovalina",
                    uf: "SP",
                    ibge: "3545506"
                },
                {
                    nome: "Santa Adélia",
                    uf: "SP",
                    ibge: "3545605"
                },
                {
                    nome: "Santa Albertina",
                    uf: "SP",
                    ibge: "3545704"
                },
                {
                    nome: "Santa Bárbara D'Oeste",
                    uf: "SP",
                    ibge: "3545803"
                },
                {
                    nome: "Santa Branca",
                    uf: "SP",
                    ibge: "3546009"
                },
                {
                    nome: "Santa Clara D'Oeste",
                    uf: "SP",
                    ibge: "3546108"
                },
                {
                    nome: "Santa Cruz da Conceição",
                    uf: "SP",
                    ibge: "3546207"
                },
                {
                    nome: "Santa Cruz da Esperança",
                    uf: "SP",
                    ibge: "3546256"
                },
                {
                    nome: "Santa Cruz das Palmeiras",
                    uf: "SP",
                    ibge: "3546306"
                },
                {
                    nome: "Santa Cruz do Rio Pardo",
                    uf: "SP",
                    ibge: "3546405"
                },
                {
                    nome: "Santa Ernestina",
                    uf: "SP",
                    ibge: "3546504"
                },
                {
                    nome: "Santa Fé do Sul",
                    uf: "SP",
                    ibge: "3546603"
                },
                {
                    nome: "Santa Gertrudes",
                    uf: "SP",
                    ibge: "3546702"
                },
                {
                    nome: "Santa Isabel",
                    uf: "SP",
                    ibge: "3546801"
                },
                {
                    nome: "Santa Lúcia",
                    uf: "SP",
                    ibge: "3546900"
                },
                {
                    nome: "Santa Maria da Serra",
                    uf: "SP",
                    ibge: "3547007"
                },
                {
                    nome: "Santa Mercedes",
                    uf: "SP",
                    ibge: "3547106"
                },
                {
                    nome: "Santana da Ponte Pensa",
                    uf: "SP",
                    ibge: "3547205"
                },
                {
                    nome: "Santana de Parnaíba",
                    uf: "SP",
                    ibge: "3547304"
                },
                {
                    nome: "Santa Rita D'Oeste",
                    uf: "SP",
                    ibge: "3547403"
                },
                {
                    nome: "Santa Rita do Passa Quatro",
                    uf: "SP",
                    ibge: "3547502"
                },
                {
                    nome: "Santa Rosa de Viterbo",
                    uf: "SP",
                    ibge: "3547601"
                },
                {
                    nome: "Santa Salete",
                    uf: "SP",
                    ibge: "3547650"
                },
                {
                    nome: "Santo Anastácio",
                    uf: "SP",
                    ibge: "3547700"
                },
                {
                    nome: "Santo André",
                    uf: "SP",
                    ibge: "3547809"
                },
                {
                    nome: "Santo Antônio da Alegria",
                    uf: "SP",
                    ibge: "3547908"
                },
                {
                    nome: "Santo Antônio de Posse",
                    uf: "SP",
                    ibge: "3548005"
                },
                {
                    nome: "Santo Antônio do Aracanguá",
                    uf: "SP",
                    ibge: "3548054"
                },
                {
                    nome: "Santo Antônio do Jardim",
                    uf: "SP",
                    ibge: "3548104"
                },
                {
                    nome: "Santo Antônio do Pinhal",
                    uf: "SP",
                    ibge: "3548203"
                },
                {
                    nome: "Santo Expedito",
                    uf: "SP",
                    ibge: "3548302"
                },
                {
                    nome: "Santópolis do Aguapeí",
                    uf: "SP",
                    ibge: "3548401"
                },
                {
                    nome: "Santos",
                    uf: "SP",
                    ibge: "3548500"
                },
                {
                    nome: "São Bento do Sapucaí",
                    uf: "SP",
                    ibge: "3548609"
                },
                {
                    nome: "São Bernardo do Campo",
                    uf: "SP",
                    ibge: "3548708"
                },
                {
                    nome: "São Caetano do Sul",
                    uf: "SP",
                    ibge: "3548807"
                },
                {
                    nome: "São Carlos",
                    uf: "SP",
                    ibge: "3548906"
                },
                {
                    nome: "São Francisco",
                    uf: "SP",
                    ibge: "3549003"
                },
                {
                    nome: "São João da Boa Vista",
                    uf: "SP",
                    ibge: "3549102"
                },
                {
                    nome: "São João das Duas Pontes",
                    uf: "SP",
                    ibge: "3549201"
                },
                {
                    nome: "São João de Iracema",
                    uf: "SP",
                    ibge: "3549250"
                },
                {
                    nome: "São João do Pau D'Alho",
                    uf: "SP",
                    ibge: "3549300"
                },
                {
                    nome: "São Joaquim da Barra",
                    uf: "SP",
                    ibge: "3549409"
                },
                {
                    nome: "São José da Bela Vista",
                    uf: "SP",
                    ibge: "3549508"
                },
                {
                    nome: "São José do Barreiro",
                    uf: "SP",
                    ibge: "3549607"
                },
                {
                    nome: "São José do Rio Pardo",
                    uf: "SP",
                    ibge: "3549706"
                },
                {
                    nome: "São José do Rio Preto",
                    uf: "SP",
                    ibge: "3549805"
                },
                {
                    nome: "São José dos Campos",
                    uf: "SP",
                    ibge: "3549904"
                },
                {
                    nome: "São Lourenço da Serra",
                    uf: "SP",
                    ibge: "3549953"
                },
                {
                    nome: "São Luís do Paraitinga",
                    uf: "SP",
                    ibge: "3550001"
                },
                {
                    nome: "São Manuel",
                    uf: "SP",
                    ibge: "3550100"
                },
                {
                    nome: "São Miguel Arcanjo",
                    uf: "SP",
                    ibge: "3550209"
                },
                {
                    nome: "São Paulo",
                    uf: "SP",
                    ibge: "3550308"
                },
                {
                    nome: "São Pedro",
                    uf: "SP",
                    ibge: "3550407"
                },
                {
                    nome: "São Pedro do Turvo",
                    uf: "SP",
                    ibge: "3550506"
                },
                {
                    nome: "São Roque",
                    uf: "SP",
                    ibge: "3550605"
                },
                {
                    nome: "São Sebastião",
                    uf: "SP",
                    ibge: "3550704"
                },
                {
                    nome: "São Sebastião da Grama",
                    uf: "SP",
                    ibge: "3550803"
                },
                {
                    nome: "São Simão",
                    uf: "SP",
                    ibge: "3550902"
                },
                {
                    nome: "São Vicente",
                    uf: "SP",
                    ibge: "3551009"
                },
                {
                    nome: "Sarapuí",
                    uf: "SP",
                    ibge: "3551108"
                },
                {
                    nome: "Sarutaiá",
                    uf: "SP",
                    ibge: "3551207"
                },
                {
                    nome: "Sebastianópolis do Sul",
                    uf: "SP",
                    ibge: "3551306"
                },
                {
                    nome: "Serra Azul",
                    uf: "SP",
                    ibge: "3551405"
                },
                {
                    nome: "Serrana",
                    uf: "SP",
                    ibge: "3551504"
                },
                {
                    nome: "Serra Negra",
                    uf: "SP",
                    ibge: "3551603"
                },
                {
                    nome: "Sertãozinho",
                    uf: "SP",
                    ibge: "3551702"
                },
                {
                    nome: "Sete Barras",
                    uf: "SP",
                    ibge: "3551801"
                },
                {
                    nome: "Severínia",
                    uf: "SP",
                    ibge: "3551900"
                },
                {
                    nome: "Silveiras",
                    uf: "SP",
                    ibge: "3552007"
                },
                {
                    nome: "Socorro",
                    uf: "SP",
                    ibge: "3552106"
                },
                {
                    nome: "Sorocaba",
                    uf: "SP",
                    ibge: "3552205"
                },
                {
                    nome: "Sud Mennucci",
                    uf: "SP",
                    ibge: "3552304"
                },
                {
                    nome: "Sumaré",
                    uf: "SP",
                    ibge: "3552403"
                },
                {
                    nome: "Suzano",
                    uf: "SP",
                    ibge: "3552502"
                },
                {
                    nome: "Suzanápolis",
                    uf: "SP",
                    ibge: "3552551"
                },
                {
                    nome: "Tabapuã",
                    uf: "SP",
                    ibge: "3552601"
                },
                {
                    nome: "Tabatinga",
                    uf: "SP",
                    ibge: "3552700"
                },
                {
                    nome: "Taboão da Serra",
                    uf: "SP",
                    ibge: "3552809"
                },
                {
                    nome: "Taciba",
                    uf: "SP",
                    ibge: "3552908"
                },
                {
                    nome: "Taguaí",
                    uf: "SP",
                    ibge: "3553005"
                },
                {
                    nome: "Taiaçu",
                    uf: "SP",
                    ibge: "3553104"
                },
                {
                    nome: "Taiúva",
                    uf: "SP",
                    ibge: "3553203"
                },
                {
                    nome: "Tambaú",
                    uf: "SP",
                    ibge: "3553302"
                },
                {
                    nome: "Tanabi",
                    uf: "SP",
                    ibge: "3553401"
                },
                {
                    nome: "Tapiraí",
                    uf: "SP",
                    ibge: "3553500"
                },
                {
                    nome: "Tapiratiba",
                    uf: "SP",
                    ibge: "3553609"
                },
                {
                    nome: "Taquaral",
                    uf: "SP",
                    ibge: "3553658"
                },
                {
                    nome: "Taquaritinga",
                    uf: "SP",
                    ibge: "3553708"
                },
                {
                    nome: "Taquarituba",
                    uf: "SP",
                    ibge: "3553807"
                },
                {
                    nome: "Taquarivaí",
                    uf: "SP",
                    ibge: "3553856"
                },
                {
                    nome: "Tarabai",
                    uf: "SP",
                    ibge: "3553906"
                },
                {
                    nome: "Tarumã",
                    uf: "SP",
                    ibge: "3553955"
                },
                {
                    nome: "Tatuí",
                    uf: "SP",
                    ibge: "3554003"
                },
                {
                    nome: "Taubaté",
                    uf: "SP",
                    ibge: "3554102"
                },
                {
                    nome: "Tejupá",
                    uf: "SP",
                    ibge: "3554201"
                },
                {
                    nome: "Teodoro Sampaio",
                    uf: "SP",
                    ibge: "3554300"
                },
                {
                    nome: "Terra Roxa",
                    uf: "SP",
                    ibge: "3554409"
                },
                {
                    nome: "Tietê",
                    uf: "SP",
                    ibge: "3554508"
                },
                {
                    nome: "Timburi",
                    uf: "SP",
                    ibge: "3554607"
                },
                {
                    nome: "Torre de Pedra",
                    uf: "SP",
                    ibge: "3554656"
                },
                {
                    nome: "Torrinha",
                    uf: "SP",
                    ibge: "3554706"
                },
                {
                    nome: "Trabiju",
                    uf: "SP",
                    ibge: "3554755"
                },
                {
                    nome: "Tremembé",
                    uf: "SP",
                    ibge: "3554805"
                },
                {
                    nome: "Três Fronteiras",
                    uf: "SP",
                    ibge: "3554904"
                },
                {
                    nome: "Tuiuti",
                    uf: "SP",
                    ibge: "3554953"
                },
                {
                    nome: "Tupã",
                    uf: "SP",
                    ibge: "3555000"
                },
                {
                    nome: "Tupi Paulista",
                    uf: "SP",
                    ibge: "3555109"
                },
                {
                    nome: "Turiúba",
                    uf: "SP",
                    ibge: "3555208"
                },
                {
                    nome: "Turmalina",
                    uf: "SP",
                    ibge: "3555307"
                },
                {
                    nome: "Ubarana",
                    uf: "SP",
                    ibge: "3555356"
                },
                {
                    nome: "Ubatuba",
                    uf: "SP",
                    ibge: "3555406"
                },
                {
                    nome: "Ubirajara",
                    uf: "SP",
                    ibge: "3555505"
                },
                {
                    nome: "Uchoa",
                    uf: "SP",
                    ibge: "3555604"
                },
                {
                    nome: "União Paulista",
                    uf: "SP",
                    ibge: "3555703"
                },
                {
                    nome: "Urânia",
                    uf: "SP",
                    ibge: "3555802"
                },
                {
                    nome: "Uru",
                    uf: "SP",
                    ibge: "3555901"
                },
                {
                    nome: "Urupês",
                    uf: "SP",
                    ibge: "3556008"
                },
                {
                    nome: "Valentim Gentil",
                    uf: "SP",
                    ibge: "3556107"
                },
                {
                    nome: "Valinhos",
                    uf: "SP",
                    ibge: "3556206"
                },
                {
                    nome: "Valparaíso",
                    uf: "SP",
                    ibge: "3556305"
                },
                {
                    nome: "Vargem",
                    uf: "SP",
                    ibge: "3556354"
                },
                {
                    nome: "Vargem Grande do Sul",
                    uf: "SP",
                    ibge: "3556404"
                },
                {
                    nome: "Vargem Grande Paulista",
                    uf: "SP",
                    ibge: "3556453"
                },
                {
                    nome: "Várzea Paulista",
                    uf: "SP",
                    ibge: "3556503"
                },
                {
                    nome: "Vera Cruz",
                    uf: "SP",
                    ibge: "3556602"
                },
                {
                    nome: "Vinhedo",
                    uf: "SP",
                    ibge: "3556701"
                },
                {
                    nome: "Viradouro",
                    uf: "SP",
                    ibge: "3556800"
                },
                {
                    nome: "Vista Alegre do Alto",
                    uf: "SP",
                    ibge: "3556909"
                },
                {
                    nome: "Vitória Brasil",
                    uf: "SP",
                    ibge: "3556958"
                },
                {
                    nome: "Votorantim",
                    uf: "SP",
                    ibge: "3557006"
                },
                {
                    nome: "Votuporanga",
                    uf: "SP",
                    ibge: "3557105"
                },
                {
                    nome: "Zacarias",
                    uf: "SP",
                    ibge: "3557154"
                },
                {
                    nome: "Chavantes",
                    uf: "SP",
                    ibge: "3557204"
                },
                {
                    nome: "Estiva Gerbi",
                    uf: "SP",
                    ibge: "3557303"
                },
                {
                    nome: "Abatiá",
                    uf: "PR",
                    ibge: "4100103"
                },
                {
                    nome: "Adrianópolis",
                    uf: "PR",
                    ibge: "4100202"
                },
                {
                    nome: "Agudos do Sul",
                    uf: "PR",
                    ibge: "4100301"
                },
                {
                    nome: "Almirante Tamandaré",
                    uf: "PR",
                    ibge: "4100400"
                },
                {
                    nome: "Altamira do Paraná",
                    uf: "PR",
                    ibge: "4100459"
                },
                {
                    nome: "Altônia",
                    uf: "PR",
                    ibge: "4100509"
                },
                {
                    nome: "Alto Paraná",
                    uf: "PR",
                    ibge: "4100608"
                },
                {
                    nome: "Alto Piquiri",
                    uf: "PR",
                    ibge: "4100707"
                },
                {
                    nome: "Alvorada do Sul",
                    uf: "PR",
                    ibge: "4100806"
                },
                {
                    nome: "Amaporã",
                    uf: "PR",
                    ibge: "4100905"
                },
                {
                    nome: "Ampére",
                    uf: "PR",
                    ibge: "4101002"
                },
                {
                    nome: "Anahy",
                    uf: "PR",
                    ibge: "4101051"
                },
                {
                    nome: "Andirá",
                    uf: "PR",
                    ibge: "4101101"
                },
                {
                    nome: "Ângulo",
                    uf: "PR",
                    ibge: "4101150"
                },
                {
                    nome: "Antonina",
                    uf: "PR",
                    ibge: "4101200"
                },
                {
                    nome: "Antônio Olinto",
                    uf: "PR",
                    ibge: "4101309"
                },
                {
                    nome: "Apucarana",
                    uf: "PR",
                    ibge: "4101408"
                },
                {
                    nome: "Arapongas",
                    uf: "PR",
                    ibge: "4101507"
                },
                {
                    nome: "Arapoti",
                    uf: "PR",
                    ibge: "4101606"
                },
                {
                    nome: "Arapuã",
                    uf: "PR",
                    ibge: "4101655"
                },
                {
                    nome: "Araruna",
                    uf: "PR",
                    ibge: "4101705"
                },
                {
                    nome: "Araucária",
                    uf: "PR",
                    ibge: "4101804"
                },
                {
                    nome: "Ariranha do Ivaí",
                    uf: "PR",
                    ibge: "4101853"
                },
                {
                    nome: "Assaí",
                    uf: "PR",
                    ibge: "4101903"
                },
                {
                    nome: "Assis Chateaubriand",
                    uf: "PR",
                    ibge: "4102000"
                },
                {
                    nome: "Astorga",
                    uf: "PR",
                    ibge: "4102109"
                },
                {
                    nome: "Atalaia",
                    uf: "PR",
                    ibge: "4102208"
                },
                {
                    nome: "Balsa Nova",
                    uf: "PR",
                    ibge: "4102307"
                },
                {
                    nome: "Bandeirantes",
                    uf: "PR",
                    ibge: "4102406"
                },
                {
                    nome: "Barbosa Ferraz",
                    uf: "PR",
                    ibge: "4102505"
                },
                {
                    nome: "Barracão",
                    uf: "PR",
                    ibge: "4102604"
                },
                {
                    nome: "Barra do Jacaré",
                    uf: "PR",
                    ibge: "4102703"
                },
                {
                    nome: "Bela Vista da Caroba",
                    uf: "PR",
                    ibge: "4102752"
                },
                {
                    nome: "Bela Vista do Paraíso",
                    uf: "PR",
                    ibge: "4102802"
                },
                {
                    nome: "Bituruna",
                    uf: "PR",
                    ibge: "4102901"
                },
                {
                    nome: "Boa Esperança",
                    uf: "PR",
                    ibge: "4103008"
                },
                {
                    nome: "Boa Esperança do Iguaçu",
                    uf: "PR",
                    ibge: "4103024"
                },
                {
                    nome: "Boa Ventura de São Roque",
                    uf: "PR",
                    ibge: "4103040"
                },
                {
                    nome: "Boa Vista da Aparecida",
                    uf: "PR",
                    ibge: "4103057"
                },
                {
                    nome: "Bocaiúva do Sul",
                    uf: "PR",
                    ibge: "4103107"
                },
                {
                    nome: "Bom Jesus do Sul",
                    uf: "PR",
                    ibge: "4103156"
                },
                {
                    nome: "Bom Sucesso",
                    uf: "PR",
                    ibge: "4103206"
                },
                {
                    nome: "Bom Sucesso do Sul",
                    uf: "PR",
                    ibge: "4103222"
                },
                {
                    nome: "Borrazópolis",
                    uf: "PR",
                    ibge: "4103305"
                },
                {
                    nome: "Braganey",
                    uf: "PR",
                    ibge: "4103354"
                },
                {
                    nome: "Brasilândia do Sul",
                    uf: "PR",
                    ibge: "4103370"
                },
                {
                    nome: "Cafeara",
                    uf: "PR",
                    ibge: "4103404"
                },
                {
                    nome: "Cafelândia",
                    uf: "PR",
                    ibge: "4103453"
                },
                {
                    nome: "Cafezal do Sul",
                    uf: "PR",
                    ibge: "4103479"
                },
                {
                    nome: "Califórnia",
                    uf: "PR",
                    ibge: "4103503"
                },
                {
                    nome: "Cambará",
                    uf: "PR",
                    ibge: "4103602"
                },
                {
                    nome: "Cambé",
                    uf: "PR",
                    ibge: "4103701"
                },
                {
                    nome: "Cambira",
                    uf: "PR",
                    ibge: "4103800"
                },
                {
                    nome: "Campina da Lagoa",
                    uf: "PR",
                    ibge: "4103909"
                },
                {
                    nome: "Campina do Simão",
                    uf: "PR",
                    ibge: "4103958"
                },
                {
                    nome: "Campina Grande do Sul",
                    uf: "PR",
                    ibge: "4104006"
                },
                {
                    nome: "Campo Bonito",
                    uf: "PR",
                    ibge: "4104055"
                },
                {
                    nome: "Campo do Tenente",
                    uf: "PR",
                    ibge: "4104105"
                },
                {
                    nome: "Campo Largo",
                    uf: "PR",
                    ibge: "4104204"
                },
                {
                    nome: "Campo Magro",
                    uf: "PR",
                    ibge: "4104253"
                },
                {
                    nome: "Campo Mourão",
                    uf: "PR",
                    ibge: "4104303"
                },
                {
                    nome: "Cândido de Abreu",
                    uf: "PR",
                    ibge: "4104402"
                },
                {
                    nome: "Candói",
                    uf: "PR",
                    ibge: "4104428"
                },
                {
                    nome: "Cantagalo",
                    uf: "PR",
                    ibge: "4104451"
                },
                {
                    nome: "Capanema",
                    uf: "PR",
                    ibge: "4104501"
                },
                {
                    nome: "Capitão Leônidas Marques",
                    uf: "PR",
                    ibge: "4104600"
                },
                {
                    nome: "Carambeí",
                    uf: "PR",
                    ibge: "4104659"
                },
                {
                    nome: "Carlópolis",
                    uf: "PR",
                    ibge: "4104709"
                },
                {
                    nome: "Cascavel",
                    uf: "PR",
                    ibge: "4104808"
                },
                {
                    nome: "Castro",
                    uf: "PR",
                    ibge: "4104907"
                },
                {
                    nome: "Catanduvas",
                    uf: "PR",
                    ibge: "4105003"
                },
                {
                    nome: "Centenário do Sul",
                    uf: "PR",
                    ibge: "4105102"
                },
                {
                    nome: "Cerro Azul",
                    uf: "PR",
                    ibge: "4105201"
                },
                {
                    nome: "Céu Azul",
                    uf: "PR",
                    ibge: "4105300"
                },
                {
                    nome: "Chopinzinho",
                    uf: "PR",
                    ibge: "4105409"
                },
                {
                    nome: "Cianorte",
                    uf: "PR",
                    ibge: "4105508"
                },
                {
                    nome: "Cidade Gaúcha",
                    uf: "PR",
                    ibge: "4105607"
                },
                {
                    nome: "Clevelândia",
                    uf: "PR",
                    ibge: "4105706"
                },
                {
                    nome: "Colombo",
                    uf: "PR",
                    ibge: "4105805"
                },
                {
                    nome: "Colorado",
                    uf: "PR",
                    ibge: "4105904"
                },
                {
                    nome: "Congonhinhas",
                    uf: "PR",
                    ibge: "4106001"
                },
                {
                    nome: "Conselheiro Mairinck",
                    uf: "PR",
                    ibge: "4106100"
                },
                {
                    nome: "Contenda",
                    uf: "PR",
                    ibge: "4106209"
                },
                {
                    nome: "Corbélia",
                    uf: "PR",
                    ibge: "4106308"
                },
                {
                    nome: "Cornélio Procópio",
                    uf: "PR",
                    ibge: "4106407"
                },
                {
                    nome: "Coronel Domingos Soares",
                    uf: "PR",
                    ibge: "4106456"
                },
                {
                    nome: "Coronel Vivida",
                    uf: "PR",
                    ibge: "4106506"
                },
                {
                    nome: "Corumbataí do Sul",
                    uf: "PR",
                    ibge: "4106555"
                },
                {
                    nome: "Cruzeiro do Iguaçu",
                    uf: "PR",
                    ibge: "4106571"
                },
                {
                    nome: "Cruzeiro do Oeste",
                    uf: "PR",
                    ibge: "4106605"
                },
                {
                    nome: "Cruzeiro do Sul",
                    uf: "PR",
                    ibge: "4106704"
                },
                {
                    nome: "Cruz Machado",
                    uf: "PR",
                    ibge: "4106803"
                },
                {
                    nome: "Cruzmaltina",
                    uf: "PR",
                    ibge: "4106852"
                },
                {
                    nome: "Curitiba",
                    uf: "PR",
                    ibge: "4106902"
                },
                {
                    nome: "Curiúva",
                    uf: "PR",
                    ibge: "4107009"
                },
                {
                    nome: "Diamante do Norte",
                    uf: "PR",
                    ibge: "4107108"
                },
                {
                    nome: "Diamante do Sul",
                    uf: "PR",
                    ibge: "4107124"
                },
                {
                    nome: "Diamante D'Oeste",
                    uf: "PR",
                    ibge: "4107157"
                },
                {
                    nome: "Dois Vizinhos",
                    uf: "PR",
                    ibge: "4107207"
                },
                {
                    nome: "Douradina",
                    uf: "PR",
                    ibge: "4107256"
                },
                {
                    nome: "Doutor Camargo",
                    uf: "PR",
                    ibge: "4107306"
                },
                {
                    nome: "Enéas Marques",
                    uf: "PR",
                    ibge: "4107405"
                },
                {
                    nome: "Engenheiro Beltrão",
                    uf: "PR",
                    ibge: "4107504"
                },
                {
                    nome: "Esperança Nova",
                    uf: "PR",
                    ibge: "4107520"
                },
                {
                    nome: "Entre Rios do Oeste",
                    uf: "PR",
                    ibge: "4107538"
                },
                {
                    nome: "Espigão Alto do Iguaçu",
                    uf: "PR",
                    ibge: "4107546"
                },
                {
                    nome: "Farol",
                    uf: "PR",
                    ibge: "4107553"
                },
                {
                    nome: "Faxinal",
                    uf: "PR",
                    ibge: "4107603"
                },
                {
                    nome: "Fazenda Rio Grande",
                    uf: "PR",
                    ibge: "4107652"
                },
                {
                    nome: "Fênix",
                    uf: "PR",
                    ibge: "4107702"
                },
                {
                    nome: "Fernandes Pinheiro",
                    uf: "PR",
                    ibge: "4107736"
                },
                {
                    nome: "Figueira",
                    uf: "PR",
                    ibge: "4107751"
                },
                {
                    nome: "Floraí",
                    uf: "PR",
                    ibge: "4107801"
                },
                {
                    nome: "Flor da Serra do Sul",
                    uf: "PR",
                    ibge: "4107850"
                },
                {
                    nome: "Floresta",
                    uf: "PR",
                    ibge: "4107900"
                },
                {
                    nome: "Florestópolis",
                    uf: "PR",
                    ibge: "4108007"
                },
                {
                    nome: "Flórida",
                    uf: "PR",
                    ibge: "4108106"
                },
                {
                    nome: "Formosa do Oeste",
                    uf: "PR",
                    ibge: "4108205"
                },
                {
                    nome: "Foz do Iguaçu",
                    uf: "PR",
                    ibge: "4108304"
                },
                {
                    nome: "Francisco Alves",
                    uf: "PR",
                    ibge: "4108320"
                },
                {
                    nome: "Francisco Beltrão",
                    uf: "PR",
                    ibge: "4108403"
                },
                {
                    nome: "Foz do Jordão",
                    uf: "PR",
                    ibge: "4108452"
                },
                {
                    nome: "General Carneiro",
                    uf: "PR",
                    ibge: "4108502"
                },
                {
                    nome: "Godoy Moreira",
                    uf: "PR",
                    ibge: "4108551"
                },
                {
                    nome: "Goioerê",
                    uf: "PR",
                    ibge: "4108601"
                },
                {
                    nome: "Goioxim",
                    uf: "PR",
                    ibge: "4108650"
                },
                {
                    nome: "Grandes Rios",
                    uf: "PR",
                    ibge: "4108700"
                },
                {
                    nome: "Guaíra",
                    uf: "PR",
                    ibge: "4108809"
                },
                {
                    nome: "Guairaçá",
                    uf: "PR",
                    ibge: "4108908"
                },
                {
                    nome: "Guamiranga",
                    uf: "PR",
                    ibge: "4108957"
                },
                {
                    nome: "Guapirama",
                    uf: "PR",
                    ibge: "4109005"
                },
                {
                    nome: "Guaporema",
                    uf: "PR",
                    ibge: "4109104"
                },
                {
                    nome: "Guaraci",
                    uf: "PR",
                    ibge: "4109203"
                },
                {
                    nome: "Guaraniaçu",
                    uf: "PR",
                    ibge: "4109302"
                },
                {
                    nome: "Guarapuava",
                    uf: "PR",
                    ibge: "4109401"
                },
                {
                    nome: "Guaraqueçaba",
                    uf: "PR",
                    ibge: "4109500"
                },
                {
                    nome: "Guaratuba",
                    uf: "PR",
                    ibge: "4109609"
                },
                {
                    nome: "Honório Serpa",
                    uf: "PR",
                    ibge: "4109658"
                },
                {
                    nome: "Ibaiti",
                    uf: "PR",
                    ibge: "4109708"
                },
                {
                    nome: "Ibema",
                    uf: "PR",
                    ibge: "4109757"
                },
                {
                    nome: "Ibiporã",
                    uf: "PR",
                    ibge: "4109807"
                },
                {
                    nome: "Icaraíma",
                    uf: "PR",
                    ibge: "4109906"
                },
                {
                    nome: "Iguaraçu",
                    uf: "PR",
                    ibge: "4110003"
                },
                {
                    nome: "Iguatu",
                    uf: "PR",
                    ibge: "4110052"
                },
                {
                    nome: "Imbaú",
                    uf: "PR",
                    ibge: "4110078"
                },
                {
                    nome: "Imbituva",
                    uf: "PR",
                    ibge: "4110102"
                },
                {
                    nome: "Inácio Martins",
                    uf: "PR",
                    ibge: "4110201"
                },
                {
                    nome: "Inajá",
                    uf: "PR",
                    ibge: "4110300"
                },
                {
                    nome: "Indianópolis",
                    uf: "PR",
                    ibge: "4110409"
                },
                {
                    nome: "Ipiranga",
                    uf: "PR",
                    ibge: "4110508"
                },
                {
                    nome: "Iporã",
                    uf: "PR",
                    ibge: "4110607"
                },
                {
                    nome: "Iracema do Oeste",
                    uf: "PR",
                    ibge: "4110656"
                },
                {
                    nome: "Irati",
                    uf: "PR",
                    ibge: "4110706"
                },
                {
                    nome: "Iretama",
                    uf: "PR",
                    ibge: "4110805"
                },
                {
                    nome: "Itaguajé",
                    uf: "PR",
                    ibge: "4110904"
                },
                {
                    nome: "Itaipulândia",
                    uf: "PR",
                    ibge: "4110953"
                },
                {
                    nome: "Itambaracá",
                    uf: "PR",
                    ibge: "4111001"
                },
                {
                    nome: "Itambé",
                    uf: "PR",
                    ibge: "4111100"
                },
                {
                    nome: "Itapejara D'Oeste",
                    uf: "PR",
                    ibge: "4111209"
                },
                {
                    nome: "Itaperuçu",
                    uf: "PR",
                    ibge: "4111258"
                },
                {
                    nome: "Itaúna do Sul",
                    uf: "PR",
                    ibge: "4111308"
                },
                {
                    nome: "Ivaí",
                    uf: "PR",
                    ibge: "4111407"
                },
                {
                    nome: "Ivaiporã",
                    uf: "PR",
                    ibge: "4111506"
                },
                {
                    nome: "Ivaté",
                    uf: "PR",
                    ibge: "4111555"
                },
                {
                    nome: "Ivatuba",
                    uf: "PR",
                    ibge: "4111605"
                },
                {
                    nome: "Jaboti",
                    uf: "PR",
                    ibge: "4111704"
                },
                {
                    nome: "Jacarezinho",
                    uf: "PR",
                    ibge: "4111803"
                },
                {
                    nome: "Jaguapitã",
                    uf: "PR",
                    ibge: "4111902"
                },
                {
                    nome: "Jaguariaíva",
                    uf: "PR",
                    ibge: "4112009"
                },
                {
                    nome: "Jandaia do Sul",
                    uf: "PR",
                    ibge: "4112108"
                },
                {
                    nome: "Janiópolis",
                    uf: "PR",
                    ibge: "4112207"
                },
                {
                    nome: "Japira",
                    uf: "PR",
                    ibge: "4112306"
                },
                {
                    nome: "Japurá",
                    uf: "PR",
                    ibge: "4112405"
                },
                {
                    nome: "Jardim Alegre",
                    uf: "PR",
                    ibge: "4112504"
                },
                {
                    nome: "Jardim Olinda",
                    uf: "PR",
                    ibge: "4112603"
                },
                {
                    nome: "Jataizinho",
                    uf: "PR",
                    ibge: "4112702"
                },
                {
                    nome: "Jesuítas",
                    uf: "PR",
                    ibge: "4112751"
                },
                {
                    nome: "Joaquim Távora",
                    uf: "PR",
                    ibge: "4112801"
                },
                {
                    nome: "Jundiaí do Sul",
                    uf: "PR",
                    ibge: "4112900"
                },
                {
                    nome: "Juranda",
                    uf: "PR",
                    ibge: "4112959"
                },
                {
                    nome: "Jussara",
                    uf: "PR",
                    ibge: "4113007"
                },
                {
                    nome: "Kaloré",
                    uf: "PR",
                    ibge: "4113106"
                },
                {
                    nome: "Lapa",
                    uf: "PR",
                    ibge: "4113205"
                },
                {
                    nome: "Laranjal",
                    uf: "PR",
                    ibge: "4113254"
                },
                {
                    nome: "Laranjeiras do Sul",
                    uf: "PR",
                    ibge: "4113304"
                },
                {
                    nome: "Leópolis",
                    uf: "PR",
                    ibge: "4113403"
                },
                {
                    nome: "Lidianópolis",
                    uf: "PR",
                    ibge: "4113429"
                },
                {
                    nome: "Lindoeste",
                    uf: "PR",
                    ibge: "4113452"
                },
                {
                    nome: "Loanda",
                    uf: "PR",
                    ibge: "4113502"
                },
                {
                    nome: "Lobato",
                    uf: "PR",
                    ibge: "4113601"
                },
                {
                    nome: "Londrina",
                    uf: "PR",
                    ibge: "4113700"
                },
                {
                    nome: "Luiziana",
                    uf: "PR",
                    ibge: "4113734"
                },
                {
                    nome: "Lunardelli",
                    uf: "PR",
                    ibge: "4113759"
                },
                {
                    nome: "Lupionópolis",
                    uf: "PR",
                    ibge: "4113809"
                },
                {
                    nome: "Mallet",
                    uf: "PR",
                    ibge: "4113908"
                },
                {
                    nome: "Mamborê",
                    uf: "PR",
                    ibge: "4114005"
                },
                {
                    nome: "Mandaguaçu",
                    uf: "PR",
                    ibge: "4114104"
                },
                {
                    nome: "Mandaguari",
                    uf: "PR",
                    ibge: "4114203"
                },
                {
                    nome: "Mandirituba",
                    uf: "PR",
                    ibge: "4114302"
                },
                {
                    nome: "Manfrinópolis",
                    uf: "PR",
                    ibge: "4114351"
                },
                {
                    nome: "Mangueirinha",
                    uf: "PR",
                    ibge: "4114401"
                },
                {
                    nome: "Manoel Ribas",
                    uf: "PR",
                    ibge: "4114500"
                },
                {
                    nome: "Marechal Cândido Rondon",
                    uf: "PR",
                    ibge: "4114609"
                },
                {
                    nome: "Maria Helena",
                    uf: "PR",
                    ibge: "4114708"
                },
                {
                    nome: "Marialva",
                    uf: "PR",
                    ibge: "4114807"
                },
                {
                    nome: "Marilândia do Sul",
                    uf: "PR",
                    ibge: "4114906"
                },
                {
                    nome: "Marilena",
                    uf: "PR",
                    ibge: "4115002"
                },
                {
                    nome: "Mariluz",
                    uf: "PR",
                    ibge: "4115101"
                },
                {
                    nome: "Maringá",
                    uf: "PR",
                    ibge: "4115200"
                },
                {
                    nome: "Mariópolis",
                    uf: "PR",
                    ibge: "4115309"
                },
                {
                    nome: "Maripá",
                    uf: "PR",
                    ibge: "4115358"
                },
                {
                    nome: "Marmeleiro",
                    uf: "PR",
                    ibge: "4115408"
                },
                {
                    nome: "Marquinho",
                    uf: "PR",
                    ibge: "4115457"
                },
                {
                    nome: "Marumbi",
                    uf: "PR",
                    ibge: "4115507"
                },
                {
                    nome: "Matelândia",
                    uf: "PR",
                    ibge: "4115606"
                },
                {
                    nome: "Matinhos",
                    uf: "PR",
                    ibge: "4115705"
                },
                {
                    nome: "Mato Rico",
                    uf: "PR",
                    ibge: "4115739"
                },
                {
                    nome: "Mauá da Serra",
                    uf: "PR",
                    ibge: "4115754"
                },
                {
                    nome: "Medianeira",
                    uf: "PR",
                    ibge: "4115804"
                },
                {
                    nome: "Mercedes",
                    uf: "PR",
                    ibge: "4115853"
                },
                {
                    nome: "Mirador",
                    uf: "PR",
                    ibge: "4115903"
                },
                {
                    nome: "Miraselva",
                    uf: "PR",
                    ibge: "4116000"
                },
                {
                    nome: "Missal",
                    uf: "PR",
                    ibge: "4116059"
                },
                {
                    nome: "Moreira Sales",
                    uf: "PR",
                    ibge: "4116109"
                },
                {
                    nome: "Morretes",
                    uf: "PR",
                    ibge: "4116208"
                },
                {
                    nome: "Munhoz de Melo",
                    uf: "PR",
                    ibge: "4116307"
                },
                {
                    nome: "Nossa Senhora das Graças",
                    uf: "PR",
                    ibge: "4116406"
                },
                {
                    nome: "Nova Aliança do Ivaí",
                    uf: "PR",
                    ibge: "4116505"
                },
                {
                    nome: "Nova América da Colina",
                    uf: "PR",
                    ibge: "4116604"
                },
                {
                    nome: "Nova Aurora",
                    uf: "PR",
                    ibge: "4116703"
                },
                {
                    nome: "Nova Cantu",
                    uf: "PR",
                    ibge: "4116802"
                },
                {
                    nome: "Nova Esperança",
                    uf: "PR",
                    ibge: "4116901"
                },
                {
                    nome: "Nova Esperança do Sudoeste",
                    uf: "PR",
                    ibge: "4116950"
                },
                {
                    nome: "Nova Fátima",
                    uf: "PR",
                    ibge: "4117008"
                },
                {
                    nome: "Nova Laranjeiras",
                    uf: "PR",
                    ibge: "4117057"
                },
                {
                    nome: "Nova Londrina",
                    uf: "PR",
                    ibge: "4117107"
                },
                {
                    nome: "Nova Olímpia",
                    uf: "PR",
                    ibge: "4117206"
                },
                {
                    nome: "Nova Santa Bárbara",
                    uf: "PR",
                    ibge: "4117214"
                },
                {
                    nome: "Nova Santa Rosa",
                    uf: "PR",
                    ibge: "4117222"
                },
                {
                    nome: "Nova Prata do Iguaçu",
                    uf: "PR",
                    ibge: "4117255"
                },
                {
                    nome: "Nova Tebas",
                    uf: "PR",
                    ibge: "4117271"
                },
                {
                    nome: "Novo Itacolomi",
                    uf: "PR",
                    ibge: "4117297"
                },
                {
                    nome: "Ortigueira",
                    uf: "PR",
                    ibge: "4117305"
                },
                {
                    nome: "Ourizona",
                    uf: "PR",
                    ibge: "4117404"
                },
                {
                    nome: "Ouro Verde do Oeste",
                    uf: "PR",
                    ibge: "4117453"
                },
                {
                    nome: "Paiçandu",
                    uf: "PR",
                    ibge: "4117503"
                },
                {
                    nome: "Palmas",
                    uf: "PR",
                    ibge: "4117602"
                },
                {
                    nome: "Palmeira",
                    uf: "PR",
                    ibge: "4117701"
                },
                {
                    nome: "Palmital",
                    uf: "PR",
                    ibge: "4117800"
                },
                {
                    nome: "Palotina",
                    uf: "PR",
                    ibge: "4117909"
                },
                {
                    nome: "Paraíso do Norte",
                    uf: "PR",
                    ibge: "4118006"
                },
                {
                    nome: "Paranacity",
                    uf: "PR",
                    ibge: "4118105"
                },
                {
                    nome: "Paranaguá",
                    uf: "PR",
                    ibge: "4118204"
                },
                {
                    nome: "Paranapoema",
                    uf: "PR",
                    ibge: "4118303"
                },
                {
                    nome: "Paranavaí",
                    uf: "PR",
                    ibge: "4118402"
                },
                {
                    nome: "Pato Bragado",
                    uf: "PR",
                    ibge: "4118451"
                },
                {
                    nome: "Pato Branco",
                    uf: "PR",
                    ibge: "4118501"
                },
                {
                    nome: "Paula Freitas",
                    uf: "PR",
                    ibge: "4118600"
                },
                {
                    nome: "Paulo Frontin",
                    uf: "PR",
                    ibge: "4118709"
                },
                {
                    nome: "Peabiru",
                    uf: "PR",
                    ibge: "4118808"
                },
                {
                    nome: "Perobal",
                    uf: "PR",
                    ibge: "4118857"
                },
                {
                    nome: "Pérola",
                    uf: "PR",
                    ibge: "4118907"
                },
                {
                    nome: "Pérola D'Oeste",
                    uf: "PR",
                    ibge: "4119004"
                },
                {
                    nome: "Piên",
                    uf: "PR",
                    ibge: "4119103"
                },
                {
                    nome: "Pinhais",
                    uf: "PR",
                    ibge: "4119152"
                },
                {
                    nome: "Pinhalão",
                    uf: "PR",
                    ibge: "4119202"
                },
                {
                    nome: "Pinhal de São Bento",
                    uf: "PR",
                    ibge: "4119251"
                },
                {
                    nome: "Pinhão",
                    uf: "PR",
                    ibge: "4119301"
                },
                {
                    nome: "Piraí do Sul",
                    uf: "PR",
                    ibge: "4119400"
                },
                {
                    nome: "Piraquara",
                    uf: "PR",
                    ibge: "4119509"
                },
                {
                    nome: "Pitanga",
                    uf: "PR",
                    ibge: "4119608"
                },
                {
                    nome: "Pitangueiras",
                    uf: "PR",
                    ibge: "4119657"
                },
                {
                    nome: "Planaltina do Paraná",
                    uf: "PR",
                    ibge: "4119707"
                },
                {
                    nome: "Planalto",
                    uf: "PR",
                    ibge: "4119806"
                },
                {
                    nome: "Ponta Grossa",
                    uf: "PR",
                    ibge: "4119905"
                },
                {
                    nome: "Pontal do Paraná",
                    uf: "PR",
                    ibge: "4119954"
                },
                {
                    nome: "Porecatu",
                    uf: "PR",
                    ibge: "4120002"
                },
                {
                    nome: "Porto Amazonas",
                    uf: "PR",
                    ibge: "4120101"
                },
                {
                    nome: "Porto Barreiro",
                    uf: "PR",
                    ibge: "4120150"
                },
                {
                    nome: "Porto Rico",
                    uf: "PR",
                    ibge: "4120200"
                },
                {
                    nome: "Porto Vitória",
                    uf: "PR",
                    ibge: "4120309"
                },
                {
                    nome: "Prado Ferreira",
                    uf: "PR",
                    ibge: "4120333"
                },
                {
                    nome: "Pranchita",
                    uf: "PR",
                    ibge: "4120358"
                },
                {
                    nome: "Presidente Castelo Branco",
                    uf: "PR",
                    ibge: "4120408"
                },
                {
                    nome: "Primeiro de Maio",
                    uf: "PR",
                    ibge: "4120507"
                },
                {
                    nome: "Prudentópolis",
                    uf: "PR",
                    ibge: "4120606"
                },
                {
                    nome: "Quarto Centenário",
                    uf: "PR",
                    ibge: "4120655"
                },
                {
                    nome: "Quatiguá",
                    uf: "PR",
                    ibge: "4120705"
                },
                {
                    nome: "Quatro Barras",
                    uf: "PR",
                    ibge: "4120804"
                },
                {
                    nome: "Quatro Pontes",
                    uf: "PR",
                    ibge: "4120853"
                },
                {
                    nome: "Quedas do Iguaçu",
                    uf: "PR",
                    ibge: "4120903"
                },
                {
                    nome: "Querência do Norte",
                    uf: "PR",
                    ibge: "4121000"
                },
                {
                    nome: "Quinta do Sol",
                    uf: "PR",
                    ibge: "4121109"
                },
                {
                    nome: "Quitandinha",
                    uf: "PR",
                    ibge: "4121208"
                },
                {
                    nome: "Ramilândia",
                    uf: "PR",
                    ibge: "4121257"
                },
                {
                    nome: "Rancho Alegre",
                    uf: "PR",
                    ibge: "4121307"
                },
                {
                    nome: "Rancho Alegre D'Oeste",
                    uf: "PR",
                    ibge: "4121356"
                },
                {
                    nome: "Realeza",
                    uf: "PR",
                    ibge: "4121406"
                },
                {
                    nome: "Rebouças",
                    uf: "PR",
                    ibge: "4121505"
                },
                {
                    nome: "Renascença",
                    uf: "PR",
                    ibge: "4121604"
                },
                {
                    nome: "Reserva",
                    uf: "PR",
                    ibge: "4121703"
                },
                {
                    nome: "Reserva do Iguaçu",
                    uf: "PR",
                    ibge: "4121752"
                },
                {
                    nome: "Ribeirão Claro",
                    uf: "PR",
                    ibge: "4121802"
                },
                {
                    nome: "Ribeirão do Pinhal",
                    uf: "PR",
                    ibge: "4121901"
                },
                {
                    nome: "Rio Azul",
                    uf: "PR",
                    ibge: "4122008"
                },
                {
                    nome: "Rio Bom",
                    uf: "PR",
                    ibge: "4122107"
                },
                {
                    nome: "Rio Bonito do Iguaçu",
                    uf: "PR",
                    ibge: "4122156"
                },
                {
                    nome: "Rio Branco do Ivaí",
                    uf: "PR",
                    ibge: "4122172"
                },
                {
                    nome: "Rio Branco do Sul",
                    uf: "PR",
                    ibge: "4122206"
                },
                {
                    nome: "Rio Negro",
                    uf: "PR",
                    ibge: "4122305"
                },
                {
                    nome: "Rolândia",
                    uf: "PR",
                    ibge: "4122404"
                },
                {
                    nome: "Roncador",
                    uf: "PR",
                    ibge: "4122503"
                },
                {
                    nome: "Rondon",
                    uf: "PR",
                    ibge: "4122602"
                },
                {
                    nome: "Rosário do Ivaí",
                    uf: "PR",
                    ibge: "4122651"
                },
                {
                    nome: "Sabáudia",
                    uf: "PR",
                    ibge: "4122701"
                },
                {
                    nome: "Salgado Filho",
                    uf: "PR",
                    ibge: "4122800"
                },
                {
                    nome: "Salto do Itararé",
                    uf: "PR",
                    ibge: "4122909"
                },
                {
                    nome: "Salto do Lontra",
                    uf: "PR",
                    ibge: "4123006"
                },
                {
                    nome: "Santa Amélia",
                    uf: "PR",
                    ibge: "4123105"
                },
                {
                    nome: "Santa Cecília do Pavão",
                    uf: "PR",
                    ibge: "4123204"
                },
                {
                    nome: "Santa Cruz de Monte Castelo",
                    uf: "PR",
                    ibge: "4123303"
                },
                {
                    nome: "Santa Fé",
                    uf: "PR",
                    ibge: "4123402"
                },
                {
                    nome: "Santa Helena",
                    uf: "PR",
                    ibge: "4123501"
                },
                {
                    nome: "Santa Inês",
                    uf: "PR",
                    ibge: "4123600"
                },
                {
                    nome: "Santa Isabel do Ivaí",
                    uf: "PR",
                    ibge: "4123709"
                },
                {
                    nome: "Santa Izabel do Oeste",
                    uf: "PR",
                    ibge: "4123808"
                },
                {
                    nome: "Santa Lúcia",
                    uf: "PR",
                    ibge: "4123824"
                },
                {
                    nome: "Santa Maria do Oeste",
                    uf: "PR",
                    ibge: "4123857"
                },
                {
                    nome: "Santa Mariana",
                    uf: "PR",
                    ibge: "4123907"
                },
                {
                    nome: "Santa Mônica",
                    uf: "PR",
                    ibge: "4123956"
                },
                {
                    nome: "Santana do Itararé",
                    uf: "PR",
                    ibge: "4124004"
                },
                {
                    nome: "Santa Tereza do Oeste",
                    uf: "PR",
                    ibge: "4124020"
                },
                {
                    nome: "Santa Terezinha de Itaipu",
                    uf: "PR",
                    ibge: "4124053"
                },
                {
                    nome: "Santo Antônio da Platina",
                    uf: "PR",
                    ibge: "4124103"
                },
                {
                    nome: "Santo Antônio do Caiuá",
                    uf: "PR",
                    ibge: "4124202"
                },
                {
                    nome: "Santo Antônio do Paraíso",
                    uf: "PR",
                    ibge: "4124301"
                },
                {
                    nome: "Santo Antônio do Sudoeste",
                    uf: "PR",
                    ibge: "4124400"
                },
                {
                    nome: "Santo Inácio",
                    uf: "PR",
                    ibge: "4124509"
                },
                {
                    nome: "São Carlos do Ivaí",
                    uf: "PR",
                    ibge: "4124608"
                },
                {
                    nome: "São Jerônimo da Serra",
                    uf: "PR",
                    ibge: "4124707"
                },
                {
                    nome: "São João",
                    uf: "PR",
                    ibge: "4124806"
                },
                {
                    nome: "São João do Caiuá",
                    uf: "PR",
                    ibge: "4124905"
                },
                {
                    nome: "São João do Ivaí",
                    uf: "PR",
                    ibge: "4125001"
                },
                {
                    nome: "São João do Triunfo",
                    uf: "PR",
                    ibge: "4125100"
                },
                {
                    nome: "São Jorge D'Oeste",
                    uf: "PR",
                    ibge: "4125209"
                },
                {
                    nome: "São Jorge do Ivaí",
                    uf: "PR",
                    ibge: "4125308"
                },
                {
                    nome: "São Jorge do Patrocínio",
                    uf: "PR",
                    ibge: "4125357"
                },
                {
                    nome: "São José da Boa Vista",
                    uf: "PR",
                    ibge: "4125407"
                },
                {
                    nome: "São José das Palmeiras",
                    uf: "PR",
                    ibge: "4125456"
                },
                {
                    nome: "São José dos Pinhais",
                    uf: "PR",
                    ibge: "4125506"
                },
                {
                    nome: "São Manoel do Paraná",
                    uf: "PR",
                    ibge: "4125555"
                },
                {
                    nome: "São Mateus do Sul",
                    uf: "PR",
                    ibge: "4125605"
                },
                {
                    nome: "São Miguel do Iguaçu",
                    uf: "PR",
                    ibge: "4125704"
                },
                {
                    nome: "São Pedro do Iguaçu",
                    uf: "PR",
                    ibge: "4125753"
                },
                {
                    nome: "São Pedro do Ivaí",
                    uf: "PR",
                    ibge: "4125803"
                },
                {
                    nome: "São Pedro do Paraná",
                    uf: "PR",
                    ibge: "4125902"
                },
                {
                    nome: "São Sebastião da Amoreira",
                    uf: "PR",
                    ibge: "4126009"
                },
                {
                    nome: "São Tomé",
                    uf: "PR",
                    ibge: "4126108"
                },
                {
                    nome: "Sapopema",
                    uf: "PR",
                    ibge: "4126207"
                },
                {
                    nome: "Sarandi",
                    uf: "PR",
                    ibge: "4126256"
                },
                {
                    nome: "Saudade do Iguaçu",
                    uf: "PR",
                    ibge: "4126272"
                },
                {
                    nome: "Sengés",
                    uf: "PR",
                    ibge: "4126306"
                },
                {
                    nome: "Serranópolis do Iguaçu",
                    uf: "PR",
                    ibge: "4126355"
                },
                {
                    nome: "Sertaneja",
                    uf: "PR",
                    ibge: "4126405"
                },
                {
                    nome: "Sertanópolis",
                    uf: "PR",
                    ibge: "4126504"
                },
                {
                    nome: "Siqueira Campos",
                    uf: "PR",
                    ibge: "4126603"
                },
                {
                    nome: "Sulina",
                    uf: "PR",
                    ibge: "4126652"
                },
                {
                    nome: "Tamarana",
                    uf: "PR",
                    ibge: "4126678"
                },
                {
                    nome: "Tamboara",
                    uf: "PR",
                    ibge: "4126702"
                },
                {
                    nome: "Tapejara",
                    uf: "PR",
                    ibge: "4126801"
                },
                {
                    nome: "Tapira",
                    uf: "PR",
                    ibge: "4126900"
                },
                {
                    nome: "Teixeira Soares",
                    uf: "PR",
                    ibge: "4127007"
                },
                {
                    nome: "Telêmaco Borba",
                    uf: "PR",
                    ibge: "4127106"
                },
                {
                    nome: "Terra Boa",
                    uf: "PR",
                    ibge: "4127205"
                },
                {
                    nome: "Terra Rica",
                    uf: "PR",
                    ibge: "4127304"
                },
                {
                    nome: "Terra Roxa",
                    uf: "PR",
                    ibge: "4127403"
                },
                {
                    nome: "Tibagi",
                    uf: "PR",
                    ibge: "4127502"
                },
                {
                    nome: "Tijucas do Sul",
                    uf: "PR",
                    ibge: "4127601"
                },
                {
                    nome: "Toledo",
                    uf: "PR",
                    ibge: "4127700"
                },
                {
                    nome: "Tomazina",
                    uf: "PR",
                    ibge: "4127809"
                },
                {
                    nome: "Três Barras do Paraná",
                    uf: "PR",
                    ibge: "4127858"
                },
                {
                    nome: "Tunas do Paraná",
                    uf: "PR",
                    ibge: "4127882"
                },
                {
                    nome: "Tuneiras do Oeste",
                    uf: "PR",
                    ibge: "4127908"
                },
                {
                    nome: "Tupãssi",
                    uf: "PR",
                    ibge: "4127957"
                },
                {
                    nome: "Turvo",
                    uf: "PR",
                    ibge: "4127965"
                },
                {
                    nome: "Ubiratã",
                    uf: "PR",
                    ibge: "4128005"
                },
                {
                    nome: "Umuarama",
                    uf: "PR",
                    ibge: "4128104"
                },
                {
                    nome: "União da Vitória",
                    uf: "PR",
                    ibge: "4128203"
                },
                {
                    nome: "Uniflor",
                    uf: "PR",
                    ibge: "4128302"
                },
                {
                    nome: "Uraí",
                    uf: "PR",
                    ibge: "4128401"
                },
                {
                    nome: "Wenceslau Braz",
                    uf: "PR",
                    ibge: "4128500"
                },
                {
                    nome: "Ventania",
                    uf: "PR",
                    ibge: "4128534"
                },
                {
                    nome: "Vera Cruz do Oeste",
                    uf: "PR",
                    ibge: "4128559"
                },
                {
                    nome: "Verê",
                    uf: "PR",
                    ibge: "4128609"
                },
                {
                    nome: "Alto Paraíso",
                    uf: "PR",
                    ibge: "4128625"
                },
                {
                    nome: "Doutor Ulysses",
                    uf: "PR",
                    ibge: "4128633"
                },
                {
                    nome: "Virmond",
                    uf: "PR",
                    ibge: "4128658"
                },
                {
                    nome: "Vitorino",
                    uf: "PR",
                    ibge: "4128708"
                },
                {
                    nome: "Xambrê",
                    uf: "PR",
                    ibge: "4128807"
                },
                {
                    nome: "Abdon Batista",
                    uf: "SC",
                    ibge: "4200051"
                },
                {
                    nome: "Abelardo Luz",
                    uf: "SC",
                    ibge: "4200101"
                },
                {
                    nome: "Agrolândia",
                    uf: "SC",
                    ibge: "4200200"
                },
                {
                    nome: "Agronômica",
                    uf: "SC",
                    ibge: "4200309"
                },
                {
                    nome: "Água Doce",
                    uf: "SC",
                    ibge: "4200408"
                },
                {
                    nome: "Águas de Chapecó",
                    uf: "SC",
                    ibge: "4200507"
                },
                {
                    nome: "Águas Frias",
                    uf: "SC",
                    ibge: "4200556"
                },
                {
                    nome: "Águas Mornas",
                    uf: "SC",
                    ibge: "4200606"
                },
                {
                    nome: "Alfredo Wagner",
                    uf: "SC",
                    ibge: "4200705"
                },
                {
                    nome: "Alto Bela Vista",
                    uf: "SC",
                    ibge: "4200754"
                },
                {
                    nome: "Anchieta",
                    uf: "SC",
                    ibge: "4200804"
                },
                {
                    nome: "Angelina",
                    uf: "SC",
                    ibge: "4200903"
                },
                {
                    nome: "Anita Garibaldi",
                    uf: "SC",
                    ibge: "4201000"
                },
                {
                    nome: "Anitápolis",
                    uf: "SC",
                    ibge: "4201109"
                },
                {
                    nome: "Antônio Carlos",
                    uf: "SC",
                    ibge: "4201208"
                },
                {
                    nome: "Apiúna",
                    uf: "SC",
                    ibge: "4201257"
                },
                {
                    nome: "Arabutã",
                    uf: "SC",
                    ibge: "4201273"
                },
                {
                    nome: "Araquari",
                    uf: "SC",
                    ibge: "4201307"
                },
                {
                    nome: "Araranguá",
                    uf: "SC",
                    ibge: "4201406"
                },
                {
                    nome: "Armazém",
                    uf: "SC",
                    ibge: "4201505"
                },
                {
                    nome: "Arroio Trinta",
                    uf: "SC",
                    ibge: "4201604"
                },
                {
                    nome: "Arvoredo",
                    uf: "SC",
                    ibge: "4201653"
                },
                {
                    nome: "Ascurra",
                    uf: "SC",
                    ibge: "4201703"
                },
                {
                    nome: "Atalanta",
                    uf: "SC",
                    ibge: "4201802"
                },
                {
                    nome: "Aurora",
                    uf: "SC",
                    ibge: "4201901"
                },
                {
                    nome: "Balneário Arroio do Silva",
                    uf: "SC",
                    ibge: "4201950"
                },
                {
                    nome: "Balneário Camboriú",
                    uf: "SC",
                    ibge: "4202008"
                },
                {
                    nome: "Balneário Barra do Sul",
                    uf: "SC",
                    ibge: "4202057"
                },
                {
                    nome: "Balneário Gaivota",
                    uf: "SC",
                    ibge: "4202073"
                },
                {
                    nome: "Bandeirante",
                    uf: "SC",
                    ibge: "4202081"
                },
                {
                    nome: "Barra Bonita",
                    uf: "SC",
                    ibge: "4202099"
                },
                {
                    nome: "Barra Velha",
                    uf: "SC",
                    ibge: "4202107"
                },
                {
                    nome: "Bela Vista do Toldo",
                    uf: "SC",
                    ibge: "4202131"
                },
                {
                    nome: "Belmonte",
                    uf: "SC",
                    ibge: "4202156"
                },
                {
                    nome: "Benedito Novo",
                    uf: "SC",
                    ibge: "4202206"
                },
                {
                    nome: "Biguaçu",
                    uf: "SC",
                    ibge: "4202305"
                },
                {
                    nome: "Blumenau",
                    uf: "SC",
                    ibge: "4202404"
                },
                {
                    nome: "Bocaina do Sul",
                    uf: "SC",
                    ibge: "4202438"
                },
                {
                    nome: "Bombinhas",
                    uf: "SC",
                    ibge: "4202453"
                },
                {
                    nome: "Bom Jardim da Serra",
                    uf: "SC",
                    ibge: "4202503"
                },
                {
                    nome: "Bom Jesus",
                    uf: "SC",
                    ibge: "4202537"
                },
                {
                    nome: "Bom Jesus do Oeste",
                    uf: "SC",
                    ibge: "4202578"
                },
                {
                    nome: "Bom Retiro",
                    uf: "SC",
                    ibge: "4202602"
                },
                {
                    nome: "Botuverá",
                    uf: "SC",
                    ibge: "4202701"
                },
                {
                    nome: "Braço do Norte",
                    uf: "SC",
                    ibge: "4202800"
                },
                {
                    nome: "Braço do Trombudo",
                    uf: "SC",
                    ibge: "4202859"
                },
                {
                    nome: "Brunópolis",
                    uf: "SC",
                    ibge: "4202875"
                },
                {
                    nome: "Brusque",
                    uf: "SC",
                    ibge: "4202909"
                },
                {
                    nome: "Caçador",
                    uf: "SC",
                    ibge: "4203006"
                },
                {
                    nome: "Caibi",
                    uf: "SC",
                    ibge: "4203105"
                },
                {
                    nome: "Calmon",
                    uf: "SC",
                    ibge: "4203154"
                },
                {
                    nome: "Camboriú",
                    uf: "SC",
                    ibge: "4203204"
                },
                {
                    nome: "Capão Alto",
                    uf: "SC",
                    ibge: "4203253"
                },
                {
                    nome: "Campo Alegre",
                    uf: "SC",
                    ibge: "4203303"
                },
                {
                    nome: "Campo Belo do Sul",
                    uf: "SC",
                    ibge: "4203402"
                },
                {
                    nome: "Campo Erê",
                    uf: "SC",
                    ibge: "4203501"
                },
                {
                    nome: "Campos Novos",
                    uf: "SC",
                    ibge: "4203600"
                },
                {
                    nome: "Canelinha",
                    uf: "SC",
                    ibge: "4203709"
                },
                {
                    nome: "Canoinhas",
                    uf: "SC",
                    ibge: "4203808"
                },
                {
                    nome: "Capinzal",
                    uf: "SC",
                    ibge: "4203907"
                },
                {
                    nome: "Capivari de Baixo",
                    uf: "SC",
                    ibge: "4203956"
                },
                {
                    nome: "Catanduvas",
                    uf: "SC",
                    ibge: "4204004"
                },
                {
                    nome: "Caxambu do Sul",
                    uf: "SC",
                    ibge: "4204103"
                },
                {
                    nome: "Celso Ramos",
                    uf: "SC",
                    ibge: "4204152"
                },
                {
                    nome: "Cerro Negro",
                    uf: "SC",
                    ibge: "4204178"
                },
                {
                    nome: "Chapadão do Lageado",
                    uf: "SC",
                    ibge: "4204194"
                },
                {
                    nome: "Chapecó",
                    uf: "SC",
                    ibge: "4204202"
                },
                {
                    nome: "Cocal do Sul",
                    uf: "SC",
                    ibge: "4204251"
                },
                {
                    nome: "Concórdia",
                    uf: "SC",
                    ibge: "4204301"
                },
                {
                    nome: "Cordilheira Alta",
                    uf: "SC",
                    ibge: "4204350"
                },
                {
                    nome: "Coronel Freitas",
                    uf: "SC",
                    ibge: "4204400"
                },
                {
                    nome: "Coronel Martins",
                    uf: "SC",
                    ibge: "4204459"
                },
                {
                    nome: "Corupá",
                    uf: "SC",
                    ibge: "4204509"
                },
                {
                    nome: "Correia Pinto",
                    uf: "SC",
                    ibge: "4204558"
                },
                {
                    nome: "Criciúma",
                    uf: "SC",
                    ibge: "4204608"
                },
                {
                    nome: "Cunha Porã",
                    uf: "SC",
                    ibge: "4204707"
                },
                {
                    nome: "Cunhataí",
                    uf: "SC",
                    ibge: "4204756"
                },
                {
                    nome: "Curitibanos",
                    uf: "SC",
                    ibge: "4204806"
                },
                {
                    nome: "Descanso",
                    uf: "SC",
                    ibge: "4204905"
                },
                {
                    nome: "Dionísio Cerqueira",
                    uf: "SC",
                    ibge: "4205001"
                },
                {
                    nome: "Dona Emma",
                    uf: "SC",
                    ibge: "4205100"
                },
                {
                    nome: "Doutor Pedrinho",
                    uf: "SC",
                    ibge: "4205159"
                },
                {
                    nome: "Entre Rios",
                    uf: "SC",
                    ibge: "4205175"
                },
                {
                    nome: "Ermo",
                    uf: "SC",
                    ibge: "4205191"
                },
                {
                    nome: "Erval Velho",
                    uf: "SC",
                    ibge: "4205209"
                },
                {
                    nome: "Faxinal dos Guedes",
                    uf: "SC",
                    ibge: "4205308"
                },
                {
                    nome: "Flor do Sertão",
                    uf: "SC",
                    ibge: "4205357"
                },
                {
                    nome: "Florianópolis",
                    uf: "SC",
                    ibge: "4205407"
                },
                {
                    nome: "Formosa do Sul",
                    uf: "SC",
                    ibge: "4205431"
                },
                {
                    nome: "Forquilhinha",
                    uf: "SC",
                    ibge: "4205456"
                },
                {
                    nome: "Fraiburgo",
                    uf: "SC",
                    ibge: "4205506"
                },
                {
                    nome: "Frei Rogério",
                    uf: "SC",
                    ibge: "4205555"
                },
                {
                    nome: "Galvão",
                    uf: "SC",
                    ibge: "4205605"
                },
                {
                    nome: "Garopaba",
                    uf: "SC",
                    ibge: "4205704"
                },
                {
                    nome: "Garuva",
                    uf: "SC",
                    ibge: "4205803"
                },
                {
                    nome: "Gaspar",
                    uf: "SC",
                    ibge: "4205902"
                },
                {
                    nome: "Governador Celso Ramos",
                    uf: "SC",
                    ibge: "4206009"
                },
                {
                    nome: "Grão Pará",
                    uf: "SC",
                    ibge: "4206108"
                },
                {
                    nome: "Gravatal",
                    uf: "SC",
                    ibge: "4206207"
                },
                {
                    nome: "Guabiruba",
                    uf: "SC",
                    ibge: "4206306"
                },
                {
                    nome: "Guaraciaba",
                    uf: "SC",
                    ibge: "4206405"
                },
                {
                    nome: "Guaramirim",
                    uf: "SC",
                    ibge: "4206504"
                },
                {
                    nome: "Guarujá do Sul",
                    uf: "SC",
                    ibge: "4206603"
                },
                {
                    nome: "Guatambú",
                    uf: "SC",
                    ibge: "4206652"
                },
                {
                    nome: "Herval D'Oeste",
                    uf: "SC",
                    ibge: "4206702"
                },
                {
                    nome: "Ibiam",
                    uf: "SC",
                    ibge: "4206751"
                },
                {
                    nome: "Ibicaré",
                    uf: "SC",
                    ibge: "4206801"
                },
                {
                    nome: "Ibirama",
                    uf: "SC",
                    ibge: "4206900"
                },
                {
                    nome: "Içara",
                    uf: "SC",
                    ibge: "4207007"
                },
                {
                    nome: "Ilhota",
                    uf: "SC",
                    ibge: "4207106"
                },
                {
                    nome: "Imaruí",
                    uf: "SC",
                    ibge: "4207205"
                },
                {
                    nome: "Imbituba",
                    uf: "SC",
                    ibge: "4207304"
                },
                {
                    nome: "Imbuia",
                    uf: "SC",
                    ibge: "4207403"
                },
                {
                    nome: "Indaial",
                    uf: "SC",
                    ibge: "4207502"
                },
                {
                    nome: "Iomerê",
                    uf: "SC",
                    ibge: "4207577"
                },
                {
                    nome: "Ipira",
                    uf: "SC",
                    ibge: "4207601"
                },
                {
                    nome: "Iporã do Oeste",
                    uf: "SC",
                    ibge: "4207650"
                },
                {
                    nome: "Ipuaçu",
                    uf: "SC",
                    ibge: "4207684"
                },
                {
                    nome: "Ipumirim",
                    uf: "SC",
                    ibge: "4207700"
                },
                {
                    nome: "Iraceminha",
                    uf: "SC",
                    ibge: "4207759"
                },
                {
                    nome: "Irani",
                    uf: "SC",
                    ibge: "4207809"
                },
                {
                    nome: "Irati",
                    uf: "SC",
                    ibge: "4207858"
                },
                {
                    nome: "Irineópolis",
                    uf: "SC",
                    ibge: "4207908"
                },
                {
                    nome: "Itá",
                    uf: "SC",
                    ibge: "4208005"
                },
                {
                    nome: "Itaiópolis",
                    uf: "SC",
                    ibge: "4208104"
                },
                {
                    nome: "Itajaí",
                    uf: "SC",
                    ibge: "4208203"
                },
                {
                    nome: "Itapema",
                    uf: "SC",
                    ibge: "4208302"
                },
                {
                    nome: "Itapiranga",
                    uf: "SC",
                    ibge: "4208401"
                },
                {
                    nome: "Itapoá",
                    uf: "SC",
                    ibge: "4208450"
                },
                {
                    nome: "Ituporanga",
                    uf: "SC",
                    ibge: "4208500"
                },
                {
                    nome: "Jaborá",
                    uf: "SC",
                    ibge: "4208609"
                },
                {
                    nome: "Jacinto Machado",
                    uf: "SC",
                    ibge: "4208708"
                },
                {
                    nome: "Jaguaruna",
                    uf: "SC",
                    ibge: "4208807"
                },
                {
                    nome: "Jaraguá do Sul",
                    uf: "SC",
                    ibge: "4208906"
                },
                {
                    nome: "Jardinópolis",
                    uf: "SC",
                    ibge: "4208955"
                },
                {
                    nome: "Joaçaba",
                    uf: "SC",
                    ibge: "4209003"
                },
                {
                    nome: "Joinville",
                    uf: "SC",
                    ibge: "4209102"
                },
                {
                    nome: "José Boiteux",
                    uf: "SC",
                    ibge: "4209151"
                },
                {
                    nome: "Jupiá",
                    uf: "SC",
                    ibge: "4209177"
                },
                {
                    nome: "Lacerdópolis",
                    uf: "SC",
                    ibge: "4209201"
                },
                {
                    nome: "Lages",
                    uf: "SC",
                    ibge: "4209300"
                },
                {
                    nome: "Laguna",
                    uf: "SC",
                    ibge: "4209409"
                },
                {
                    nome: "Lajeado Grande",
                    uf: "SC",
                    ibge: "4209458"
                },
                {
                    nome: "Laurentino",
                    uf: "SC",
                    ibge: "4209508"
                },
                {
                    nome: "Lauro Muller",
                    uf: "SC",
                    ibge: "4209607"
                },
                {
                    nome: "Lebon Régis",
                    uf: "SC",
                    ibge: "4209706"
                },
                {
                    nome: "Leoberto Leal",
                    uf: "SC",
                    ibge: "4209805"
                },
                {
                    nome: "Lindóia do Sul",
                    uf: "SC",
                    ibge: "4209854"
                },
                {
                    nome: "Lontras",
                    uf: "SC",
                    ibge: "4209904"
                },
                {
                    nome: "Luiz Alves",
                    uf: "SC",
                    ibge: "4210001"
                },
                {
                    nome: "Luzerna",
                    uf: "SC",
                    ibge: "4210035"
                },
                {
                    nome: "Macieira",
                    uf: "SC",
                    ibge: "4210050"
                },
                {
                    nome: "Mafra",
                    uf: "SC",
                    ibge: "4210100"
                },
                {
                    nome: "Major Gercino",
                    uf: "SC",
                    ibge: "4210209"
                },
                {
                    nome: "Major Vieira",
                    uf: "SC",
                    ibge: "4210308"
                },
                {
                    nome: "Maracajá",
                    uf: "SC",
                    ibge: "4210407"
                },
                {
                    nome: "Maravilha",
                    uf: "SC",
                    ibge: "4210506"
                },
                {
                    nome: "Marema",
                    uf: "SC",
                    ibge: "4210555"
                },
                {
                    nome: "Massaranduba",
                    uf: "SC",
                    ibge: "4210605"
                },
                {
                    nome: "Matos Costa",
                    uf: "SC",
                    ibge: "4210704"
                },
                {
                    nome: "Meleiro",
                    uf: "SC",
                    ibge: "4210803"
                },
                {
                    nome: "Mirim Doce",
                    uf: "SC",
                    ibge: "4210852"
                },
                {
                    nome: "Modelo",
                    uf: "SC",
                    ibge: "4210902"
                },
                {
                    nome: "Mondaí",
                    uf: "SC",
                    ibge: "4211009"
                },
                {
                    nome: "Monte Carlo",
                    uf: "SC",
                    ibge: "4211058"
                },
                {
                    nome: "Monte Castelo",
                    uf: "SC",
                    ibge: "4211108"
                },
                {
                    nome: "Morro da Fumaça",
                    uf: "SC",
                    ibge: "4211207"
                },
                {
                    nome: "Morro Grande",
                    uf: "SC",
                    ibge: "4211256"
                },
                {
                    nome: "Navegantes",
                    uf: "SC",
                    ibge: "4211306"
                },
                {
                    nome: "Nova Erechim",
                    uf: "SC",
                    ibge: "4211405"
                },
                {
                    nome: "Nova Itaberaba",
                    uf: "SC",
                    ibge: "4211454"
                },
                {
                    nome: "Nova Trento",
                    uf: "SC",
                    ibge: "4211504"
                },
                {
                    nome: "Nova Veneza",
                    uf: "SC",
                    ibge: "4211603"
                },
                {
                    nome: "Novo Horizonte",
                    uf: "SC",
                    ibge: "4211652"
                },
                {
                    nome: "Orleans",
                    uf: "SC",
                    ibge: "4211702"
                },
                {
                    nome: "Otacílio Costa",
                    uf: "SC",
                    ibge: "4211751"
                },
                {
                    nome: "Ouro",
                    uf: "SC",
                    ibge: "4211801"
                },
                {
                    nome: "Ouro Verde",
                    uf: "SC",
                    ibge: "4211850"
                },
                {
                    nome: "Paial",
                    uf: "SC",
                    ibge: "4211876"
                },
                {
                    nome: "Painel",
                    uf: "SC",
                    ibge: "4211892"
                },
                {
                    nome: "Palhoça",
                    uf: "SC",
                    ibge: "4211900"
                },
                {
                    nome: "Palma Sola",
                    uf: "SC",
                    ibge: "4212007"
                },
                {
                    nome: "Palmeira",
                    uf: "SC",
                    ibge: "4212056"
                },
                {
                    nome: "Palmitos",
                    uf: "SC",
                    ibge: "4212106"
                },
                {
                    nome: "Papanduva",
                    uf: "SC",
                    ibge: "4212205"
                },
                {
                    nome: "Paraíso",
                    uf: "SC",
                    ibge: "4212239"
                },
                {
                    nome: "Passo de Torres",
                    uf: "SC",
                    ibge: "4212254"
                },
                {
                    nome: "Passos Maia",
                    uf: "SC",
                    ibge: "4212270"
                },
                {
                    nome: "Paulo Lopes",
                    uf: "SC",
                    ibge: "4212304"
                },
                {
                    nome: "Pedras Grandes",
                    uf: "SC",
                    ibge: "4212403"
                },
                {
                    nome: "Penha",
                    uf: "SC",
                    ibge: "4212502"
                },
                {
                    nome: "Peritiba",
                    uf: "SC",
                    ibge: "4212601"
                },
                {
                    nome: "Pescaria Brava",
                    uf: "SC",
                    ibge: "4212650"
                },
                {
                    nome: "Petrolândia",
                    uf: "SC",
                    ibge: "4212700"
                },
                {
                    nome: "Balneário Piçarras",
                    uf: "SC",
                    ibge: "4212809"
                },
                {
                    nome: "Pinhalzinho",
                    uf: "SC",
                    ibge: "4212908"
                },
                {
                    nome: "Pinheiro Preto",
                    uf: "SC",
                    ibge: "4213005"
                },
                {
                    nome: "Piratuba",
                    uf: "SC",
                    ibge: "4213104"
                },
                {
                    nome: "Planalto Alegre",
                    uf: "SC",
                    ibge: "4213153"
                },
                {
                    nome: "Pomerode",
                    uf: "SC",
                    ibge: "4213203"
                },
                {
                    nome: "Ponte Alta",
                    uf: "SC",
                    ibge: "4213302"
                },
                {
                    nome: "Ponte Alta do Norte",
                    uf: "SC",
                    ibge: "4213351"
                },
                {
                    nome: "Ponte Serrada",
                    uf: "SC",
                    ibge: "4213401"
                },
                {
                    nome: "Porto Belo",
                    uf: "SC",
                    ibge: "4213500"
                },
                {
                    nome: "Porto União",
                    uf: "SC",
                    ibge: "4213609"
                },
                {
                    nome: "Pouso Redondo",
                    uf: "SC",
                    ibge: "4213708"
                },
                {
                    nome: "Praia Grande",
                    uf: "SC",
                    ibge: "4213807"
                },
                {
                    nome: "Presidente Castello Branco",
                    uf: "SC",
                    ibge: "4213906"
                },
                {
                    nome: "Presidente Getúlio",
                    uf: "SC",
                    ibge: "4214003"
                },
                {
                    nome: "Presidente Nereu",
                    uf: "SC",
                    ibge: "4214102"
                },
                {
                    nome: "Princesa",
                    uf: "SC",
                    ibge: "4214151"
                },
                {
                    nome: "Quilombo",
                    uf: "SC",
                    ibge: "4214201"
                },
                {
                    nome: "Rancho Queimado",
                    uf: "SC",
                    ibge: "4214300"
                },
                {
                    nome: "Rio das Antas",
                    uf: "SC",
                    ibge: "4214409"
                },
                {
                    nome: "Rio do Campo",
                    uf: "SC",
                    ibge: "4214508"
                },
                {
                    nome: "Rio do Oeste",
                    uf: "SC",
                    ibge: "4214607"
                },
                {
                    nome: "Rio dos Cedros",
                    uf: "SC",
                    ibge: "4214706"
                },
                {
                    nome: "Rio do Sul",
                    uf: "SC",
                    ibge: "4214805"
                },
                {
                    nome: "Rio Fortuna",
                    uf: "SC",
                    ibge: "4214904"
                },
                {
                    nome: "Rio Negrinho",
                    uf: "SC",
                    ibge: "4215000"
                },
                {
                    nome: "Rio Rufino",
                    uf: "SC",
                    ibge: "4215059"
                },
                {
                    nome: "Riqueza",
                    uf: "SC",
                    ibge: "4215075"
                },
                {
                    nome: "Rodeio",
                    uf: "SC",
                    ibge: "4215109"
                },
                {
                    nome: "Romelândia",
                    uf: "SC",
                    ibge: "4215208"
                },
                {
                    nome: "Salete",
                    uf: "SC",
                    ibge: "4215307"
                },
                {
                    nome: "Saltinho",
                    uf: "SC",
                    ibge: "4215356"
                },
                {
                    nome: "Salto Veloso",
                    uf: "SC",
                    ibge: "4215406"
                },
                {
                    nome: "Sangão",
                    uf: "SC",
                    ibge: "4215455"
                },
                {
                    nome: "Santa Cecília",
                    uf: "SC",
                    ibge: "4215505"
                },
                {
                    nome: "Santa Helena",
                    uf: "SC",
                    ibge: "4215554"
                },
                {
                    nome: "Santa Rosa de Lima",
                    uf: "SC",
                    ibge: "4215604"
                },
                {
                    nome: "Santa Rosa do Sul",
                    uf: "SC",
                    ibge: "4215653"
                },
                {
                    nome: "Santa Terezinha",
                    uf: "SC",
                    ibge: "4215679"
                },
                {
                    nome: "Santa Terezinha do Progresso",
                    uf: "SC",
                    ibge: "4215687"
                },
                {
                    nome: "Santiago do Sul",
                    uf: "SC",
                    ibge: "4215695"
                },
                {
                    nome: "Santo Amaro da Imperatriz",
                    uf: "SC",
                    ibge: "4215703"
                },
                {
                    nome: "São Bernardino",
                    uf: "SC",
                    ibge: "4215752"
                },
                {
                    nome: "São Bento do Sul",
                    uf: "SC",
                    ibge: "4215802"
                },
                {
                    nome: "São Bonifácio",
                    uf: "SC",
                    ibge: "4215901"
                },
                {
                    nome: "São Carlos",
                    uf: "SC",
                    ibge: "4216008"
                },
                {
                    nome: "São Cristovão do Sul",
                    uf: "SC",
                    ibge: "4216057"
                },
                {
                    nome: "São Domingos",
                    uf: "SC",
                    ibge: "4216107"
                },
                {
                    nome: "São Francisco do Sul",
                    uf: "SC",
                    ibge: "4216206"
                },
                {
                    nome: "São João do Oeste",
                    uf: "SC",
                    ibge: "4216255"
                },
                {
                    nome: "São João Batista",
                    uf: "SC",
                    ibge: "4216305"
                },
                {
                    nome: "São João do Itaperiú",
                    uf: "SC",
                    ibge: "4216354"
                },
                {
                    nome: "São João do Sul",
                    uf: "SC",
                    ibge: "4216404"
                },
                {
                    nome: "São Joaquim",
                    uf: "SC",
                    ibge: "4216503"
                },
                {
                    nome: "São José",
                    uf: "SC",
                    ibge: "4216602"
                },
                {
                    nome: "São José do Cedro",
                    uf: "SC",
                    ibge: "4216701"
                },
                {
                    nome: "São José do Cerrito",
                    uf: "SC",
                    ibge: "4216800"
                },
                {
                    nome: "São Lourenço do Oeste",
                    uf: "SC",
                    ibge: "4216909"
                },
                {
                    nome: "São Ludgero",
                    uf: "SC",
                    ibge: "4217006"
                },
                {
                    nome: "São Martinho",
                    uf: "SC",
                    ibge: "4217105"
                },
                {
                    nome: "São Miguel da Boa Vista",
                    uf: "SC",
                    ibge: "4217154"
                },
                {
                    nome: "São Miguel do Oeste",
                    uf: "SC",
                    ibge: "4217204"
                },
                {
                    nome: "São Pedro de Alcântara",
                    uf: "SC",
                    ibge: "4217253"
                },
                {
                    nome: "Saudades",
                    uf: "SC",
                    ibge: "4217303"
                },
                {
                    nome: "Schroeder",
                    uf: "SC",
                    ibge: "4217402"
                },
                {
                    nome: "Seara",
                    uf: "SC",
                    ibge: "4217501"
                },
                {
                    nome: "Serra Alta",
                    uf: "SC",
                    ibge: "4217550"
                },
                {
                    nome: "Siderópolis",
                    uf: "SC",
                    ibge: "4217600"
                },
                {
                    nome: "Sombrio",
                    uf: "SC",
                    ibge: "4217709"
                },
                {
                    nome: "Sul Brasil",
                    uf: "SC",
                    ibge: "4217758"
                },
                {
                    nome: "Taió",
                    uf: "SC",
                    ibge: "4217808"
                },
                {
                    nome: "Tangará",
                    uf: "SC",
                    ibge: "4217907"
                },
                {
                    nome: "Tigrinhos",
                    uf: "SC",
                    ibge: "4217956"
                },
                {
                    nome: "Tijucas",
                    uf: "SC",
                    ibge: "4218004"
                },
                {
                    nome: "Timbé do Sul",
                    uf: "SC",
                    ibge: "4218103"
                },
                {
                    nome: "Timbó",
                    uf: "SC",
                    ibge: "4218202"
                },
                {
                    nome: "Timbó Grande",
                    uf: "SC",
                    ibge: "4218251"
                },
                {
                    nome: "Três Barras",
                    uf: "SC",
                    ibge: "4218301"
                },
                {
                    nome: "Treviso",
                    uf: "SC",
                    ibge: "4218350"
                },
                {
                    nome: "Treze de Maio",
                    uf: "SC",
                    ibge: "4218400"
                },
                {
                    nome: "Treze Tílias",
                    uf: "SC",
                    ibge: "4218509"
                },
                {
                    nome: "Trombudo Central",
                    uf: "SC",
                    ibge: "4218608"
                },
                {
                    nome: "Tubarão",
                    uf: "SC",
                    ibge: "4218707"
                },
                {
                    nome: "Tunápolis",
                    uf: "SC",
                    ibge: "4218756"
                },
                {
                    nome: "Turvo",
                    uf: "SC",
                    ibge: "4218806"
                },
                {
                    nome: "União do Oeste",
                    uf: "SC",
                    ibge: "4218855"
                },
                {
                    nome: "Urubici",
                    uf: "SC",
                    ibge: "4218905"
                },
                {
                    nome: "Urupema",
                    uf: "SC",
                    ibge: "4218954"
                },
                {
                    nome: "Urussanga",
                    uf: "SC",
                    ibge: "4219002"
                },
                {
                    nome: "Vargeão",
                    uf: "SC",
                    ibge: "4219101"
                },
                {
                    nome: "Vargem",
                    uf: "SC",
                    ibge: "4219150"
                },
                {
                    nome: "Vargem Bonita",
                    uf: "SC",
                    ibge: "4219176"
                },
                {
                    nome: "Vidal Ramos",
                    uf: "SC",
                    ibge: "4219200"
                },
                {
                    nome: "Videira",
                    uf: "SC",
                    ibge: "4219309"
                },
                {
                    nome: "Vitor Meireles",
                    uf: "SC",
                    ibge: "4219358"
                },
                {
                    nome: "Witmarsum",
                    uf: "SC",
                    ibge: "4219408"
                },
                {
                    nome: "Xanxerê",
                    uf: "SC",
                    ibge: "4219507"
                },
                {
                    nome: "Xavantina",
                    uf: "SC",
                    ibge: "4219606"
                },
                {
                    nome: "Xaxim",
                    uf: "SC",
                    ibge: "4219705"
                },
                {
                    nome: "Zortéa",
                    uf: "SC",
                    ibge: "4219853"
                },
                {
                    nome: "Balneário Rincão",
                    uf: "SC",
                    ibge: "4220000"
                },
                {
                    nome: "Aceguá",
                    uf: "RS",
                    ibge: "4300034"
                },
                {
                    nome: "Água Santa",
                    uf: "RS",
                    ibge: "4300059"
                },
                {
                    nome: "Agudo",
                    uf: "RS",
                    ibge: "4300109"
                },
                {
                    nome: "Ajuricaba",
                    uf: "RS",
                    ibge: "4300208"
                },
                {
                    nome: "Alecrim",
                    uf: "RS",
                    ibge: "4300307"
                },
                {
                    nome: "Alegrete",
                    uf: "RS",
                    ibge: "4300406"
                },
                {
                    nome: "Alegria",
                    uf: "RS",
                    ibge: "4300455"
                },
                {
                    nome: "Almirante Tamandaré do Sul",
                    uf: "RS",
                    ibge: "4300471"
                },
                {
                    nome: "Alpestre",
                    uf: "RS",
                    ibge: "4300505"
                },
                {
                    nome: "Alto Alegre",
                    uf: "RS",
                    ibge: "4300554"
                },
                {
                    nome: "Alto Feliz",
                    uf: "RS",
                    ibge: "4300570"
                },
                {
                    nome: "Alvorada",
                    uf: "RS",
                    ibge: "4300604"
                },
                {
                    nome: "Amaral Ferrador",
                    uf: "RS",
                    ibge: "4300638"
                },
                {
                    nome: "Ametista do Sul",
                    uf: "RS",
                    ibge: "4300646"
                },
                {
                    nome: "André da Rocha",
                    uf: "RS",
                    ibge: "4300661"
                },
                {
                    nome: "Anta Gorda",
                    uf: "RS",
                    ibge: "4300703"
                },
                {
                    nome: "Antônio Prado",
                    uf: "RS",
                    ibge: "4300802"
                },
                {
                    nome: "Arambaré",
                    uf: "RS",
                    ibge: "4300851"
                },
                {
                    nome: "Araricá",
                    uf: "RS",
                    ibge: "4300877"
                },
                {
                    nome: "Aratiba",
                    uf: "RS",
                    ibge: "4300901"
                },
                {
                    nome: "Arroio do Meio",
                    uf: "RS",
                    ibge: "4301008"
                },
                {
                    nome: "Arroio do Sal",
                    uf: "RS",
                    ibge: "4301057"
                },
                {
                    nome: "Arroio do Padre",
                    uf: "RS",
                    ibge: "4301073"
                },
                {
                    nome: "Arroio dos Ratos",
                    uf: "RS",
                    ibge: "4301107"
                },
                {
                    nome: "Arroio do Tigre",
                    uf: "RS",
                    ibge: "4301206"
                },
                {
                    nome: "Arroio Grande",
                    uf: "RS",
                    ibge: "4301305"
                },
                {
                    nome: "Arvorezinha",
                    uf: "RS",
                    ibge: "4301404"
                },
                {
                    nome: "Augusto Pestana",
                    uf: "RS",
                    ibge: "4301503"
                },
                {
                    nome: "Áurea",
                    uf: "RS",
                    ibge: "4301552"
                },
                {
                    nome: "Bagé",
                    uf: "RS",
                    ibge: "4301602"
                },
                {
                    nome: "Balneário Pinhal",
                    uf: "RS",
                    ibge: "4301636"
                },
                {
                    nome: "Barão",
                    uf: "RS",
                    ibge: "4301651"
                },
                {
                    nome: "Barão de Cotegipe",
                    uf: "RS",
                    ibge: "4301701"
                },
                {
                    nome: "Barão do Triunfo",
                    uf: "RS",
                    ibge: "4301750"
                },
                {
                    nome: "Barracão",
                    uf: "RS",
                    ibge: "4301800"
                },
                {
                    nome: "Barra do Guarita",
                    uf: "RS",
                    ibge: "4301859"
                },
                {
                    nome: "Barra do Quaraí",
                    uf: "RS",
                    ibge: "4301875"
                },
                {
                    nome: "Barra do Ribeiro",
                    uf: "RS",
                    ibge: "4301909"
                },
                {
                    nome: "Barra do Rio Azul",
                    uf: "RS",
                    ibge: "4301925"
                },
                {
                    nome: "Barra Funda",
                    uf: "RS",
                    ibge: "4301958"
                },
                {
                    nome: "Barros Cassal",
                    uf: "RS",
                    ibge: "4302006"
                },
                {
                    nome: "Benjamin Constant do Sul",
                    uf: "RS",
                    ibge: "4302055"
                },
                {
                    nome: "Bento Gonçalves",
                    uf: "RS",
                    ibge: "4302105"
                },
                {
                    nome: "Boa Vista das Missões",
                    uf: "RS",
                    ibge: "4302154"
                },
                {
                    nome: "Boa Vista do Buricá",
                    uf: "RS",
                    ibge: "4302204"
                },
                {
                    nome: "Boa Vista do Cadeado",
                    uf: "RS",
                    ibge: "4302220"
                },
                {
                    nome: "Boa Vista do Incra",
                    uf: "RS",
                    ibge: "4302238"
                },
                {
                    nome: "Boa Vista do Sul",
                    uf: "RS",
                    ibge: "4302253"
                },
                {
                    nome: "Bom Jesus",
                    uf: "RS",
                    ibge: "4302303"
                },
                {
                    nome: "Bom Princípio",
                    uf: "RS",
                    ibge: "4302352"
                },
                {
                    nome: "Bom Progresso",
                    uf: "RS",
                    ibge: "4302378"
                },
                {
                    nome: "Bom Retiro do Sul",
                    uf: "RS",
                    ibge: "4302402"
                },
                {
                    nome: "Boqueirão do Leão",
                    uf: "RS",
                    ibge: "4302451"
                },
                {
                    nome: "Bossoroca",
                    uf: "RS",
                    ibge: "4302501"
                },
                {
                    nome: "Bozano",
                    uf: "RS",
                    ibge: "4302584"
                },
                {
                    nome: "Braga",
                    uf: "RS",
                    ibge: "4302600"
                },
                {
                    nome: "Brochier",
                    uf: "RS",
                    ibge: "4302659"
                },
                {
                    nome: "Butiá",
                    uf: "RS",
                    ibge: "4302709"
                },
                {
                    nome: "Caçapava do Sul",
                    uf: "RS",
                    ibge: "4302808"
                },
                {
                    nome: "Cacequi",
                    uf: "RS",
                    ibge: "4302907"
                },
                {
                    nome: "Cachoeira do Sul",
                    uf: "RS",
                    ibge: "4303004"
                },
                {
                    nome: "Cachoeirinha",
                    uf: "RS",
                    ibge: "4303103"
                },
                {
                    nome: "Cacique Doble",
                    uf: "RS",
                    ibge: "4303202"
                },
                {
                    nome: "Caibaté",
                    uf: "RS",
                    ibge: "4303301"
                },
                {
                    nome: "Caiçara",
                    uf: "RS",
                    ibge: "4303400"
                },
                {
                    nome: "Camaquã",
                    uf: "RS",
                    ibge: "4303509"
                },
                {
                    nome: "Camargo",
                    uf: "RS",
                    ibge: "4303558"
                },
                {
                    nome: "Cambará do Sul",
                    uf: "RS",
                    ibge: "4303608"
                },
                {
                    nome: "Campestre da Serra",
                    uf: "RS",
                    ibge: "4303673"
                },
                {
                    nome: "Campina das Missões",
                    uf: "RS",
                    ibge: "4303707"
                },
                {
                    nome: "Campinas do Sul",
                    uf: "RS",
                    ibge: "4303806"
                },
                {
                    nome: "Campo Bom",
                    uf: "RS",
                    ibge: "4303905"
                },
                {
                    nome: "Campo Novo",
                    uf: "RS",
                    ibge: "4304002"
                },
                {
                    nome: "Campos Borges",
                    uf: "RS",
                    ibge: "4304101"
                },
                {
                    nome: "Candelária",
                    uf: "RS",
                    ibge: "4304200"
                },
                {
                    nome: "Cândido Godói",
                    uf: "RS",
                    ibge: "4304309"
                },
                {
                    nome: "Candiota",
                    uf: "RS",
                    ibge: "4304358"
                },
                {
                    nome: "Canela",
                    uf: "RS",
                    ibge: "4304408"
                },
                {
                    nome: "Canguçu",
                    uf: "RS",
                    ibge: "4304507"
                },
                {
                    nome: "Canoas",
                    uf: "RS",
                    ibge: "4304606"
                },
                {
                    nome: "Canudos do Vale",
                    uf: "RS",
                    ibge: "4304614"
                },
                {
                    nome: "Capão Bonito do Sul",
                    uf: "RS",
                    ibge: "4304622"
                },
                {
                    nome: "Capão da Canoa",
                    uf: "RS",
                    ibge: "4304630"
                },
                {
                    nome: "Capão do Cipó",
                    uf: "RS",
                    ibge: "4304655"
                },
                {
                    nome: "Capão do Leão",
                    uf: "RS",
                    ibge: "4304663"
                },
                {
                    nome: "Capivari do Sul",
                    uf: "RS",
                    ibge: "4304671"
                },
                {
                    nome: "Capela de Santana",
                    uf: "RS",
                    ibge: "4304689"
                },
                {
                    nome: "Capitão",
                    uf: "RS",
                    ibge: "4304697"
                },
                {
                    nome: "Carazinho",
                    uf: "RS",
                    ibge: "4304705"
                },
                {
                    nome: "Caraá",
                    uf: "RS",
                    ibge: "4304713"
                },
                {
                    nome: "Carlos Barbosa",
                    uf: "RS",
                    ibge: "4304804"
                },
                {
                    nome: "Carlos Gomes",
                    uf: "RS",
                    ibge: "4304853"
                },
                {
                    nome: "Casca",
                    uf: "RS",
                    ibge: "4304903"
                },
                {
                    nome: "Caseiros",
                    uf: "RS",
                    ibge: "4304952"
                },
                {
                    nome: "Catuípe",
                    uf: "RS",
                    ibge: "4305009"
                },
                {
                    nome: "Caxias do Sul",
                    uf: "RS",
                    ibge: "4305108"
                },
                {
                    nome: "Centenário",
                    uf: "RS",
                    ibge: "4305116"
                },
                {
                    nome: "Cerrito",
                    uf: "RS",
                    ibge: "4305124"
                },
                {
                    nome: "Cerro Branco",
                    uf: "RS",
                    ibge: "4305132"
                },
                {
                    nome: "Cerro Grande",
                    uf: "RS",
                    ibge: "4305157"
                },
                {
                    nome: "Cerro Grande do Sul",
                    uf: "RS",
                    ibge: "4305173"
                },
                {
                    nome: "Cerro Largo",
                    uf: "RS",
                    ibge: "4305207"
                },
                {
                    nome: "Chapada",
                    uf: "RS",
                    ibge: "4305306"
                },
                {
                    nome: "Charqueadas",
                    uf: "RS",
                    ibge: "4305355"
                },
                {
                    nome: "Charrua",
                    uf: "RS",
                    ibge: "4305371"
                },
                {
                    nome: "Chiapetta",
                    uf: "RS",
                    ibge: "4305405"
                },
                {
                    nome: "Chuí",
                    uf: "RS",
                    ibge: "4305439"
                },
                {
                    nome: "Chuvisca",
                    uf: "RS",
                    ibge: "4305447"
                },
                {
                    nome: "Cidreira",
                    uf: "RS",
                    ibge: "4305454"
                },
                {
                    nome: "Ciríaco",
                    uf: "RS",
                    ibge: "4305504"
                },
                {
                    nome: "Colinas",
                    uf: "RS",
                    ibge: "4305587"
                },
                {
                    nome: "Colorado",
                    uf: "RS",
                    ibge: "4305603"
                },
                {
                    nome: "Condor",
                    uf: "RS",
                    ibge: "4305702"
                },
                {
                    nome: "Constantina",
                    uf: "RS",
                    ibge: "4305801"
                },
                {
                    nome: "Coqueiro Baixo",
                    uf: "RS",
                    ibge: "4305835"
                },
                {
                    nome: "Coqueiros do Sul",
                    uf: "RS",
                    ibge: "4305850"
                },
                {
                    nome: "Coronel Barros",
                    uf: "RS",
                    ibge: "4305871"
                },
                {
                    nome: "Coronel Bicaco",
                    uf: "RS",
                    ibge: "4305900"
                },
                {
                    nome: "Coronel Pilar",
                    uf: "RS",
                    ibge: "4305934"
                },
                {
                    nome: "Cotiporã",
                    uf: "RS",
                    ibge: "4305959"
                },
                {
                    nome: "Coxilha",
                    uf: "RS",
                    ibge: "4305975"
                },
                {
                    nome: "Crissiumal",
                    uf: "RS",
                    ibge: "4306007"
                },
                {
                    nome: "Cristal",
                    uf: "RS",
                    ibge: "4306056"
                },
                {
                    nome: "Cristal do Sul",
                    uf: "RS",
                    ibge: "4306072"
                },
                {
                    nome: "Cruz Alta",
                    uf: "RS",
                    ibge: "4306106"
                },
                {
                    nome: "Cruzaltense",
                    uf: "RS",
                    ibge: "4306130"
                },
                {
                    nome: "Cruzeiro do Sul",
                    uf: "RS",
                    ibge: "4306205"
                },
                {
                    nome: "David Canabarro",
                    uf: "RS",
                    ibge: "4306304"
                },
                {
                    nome: "Derrubadas",
                    uf: "RS",
                    ibge: "4306320"
                },
                {
                    nome: "Dezesseis de Novembro",
                    uf: "RS",
                    ibge: "4306353"
                },
                {
                    nome: "Dilermando de Aguiar",
                    uf: "RS",
                    ibge: "4306379"
                },
                {
                    nome: "Dois Irmãos",
                    uf: "RS",
                    ibge: "4306403"
                },
                {
                    nome: "Dois Irmãos das Missões",
                    uf: "RS",
                    ibge: "4306429"
                },
                {
                    nome: "Dois Lajeados",
                    uf: "RS",
                    ibge: "4306452"
                },
                {
                    nome: "Dom Feliciano",
                    uf: "RS",
                    ibge: "4306502"
                },
                {
                    nome: "Dom Pedro de Alcântara",
                    uf: "RS",
                    ibge: "4306551"
                },
                {
                    nome: "Dom Pedrito",
                    uf: "RS",
                    ibge: "4306601"
                },
                {
                    nome: "Dona Francisca",
                    uf: "RS",
                    ibge: "4306700"
                },
                {
                    nome: "Doutor Maurício Cardoso",
                    uf: "RS",
                    ibge: "4306734"
                },
                {
                    nome: "Doutor Ricardo",
                    uf: "RS",
                    ibge: "4306759"
                },
                {
                    nome: "Eldorado do Sul",
                    uf: "RS",
                    ibge: "4306767"
                },
                {
                    nome: "Encantado",
                    uf: "RS",
                    ibge: "4306809"
                },
                {
                    nome: "Encruzilhada do Sul",
                    uf: "RS",
                    ibge: "4306908"
                },
                {
                    nome: "Engenho Velho",
                    uf: "RS",
                    ibge: "4306924"
                },
                {
                    nome: "Entre-Ijuís",
                    uf: "RS",
                    ibge: "4306932"
                },
                {
                    nome: "Entre Rios do Sul",
                    uf: "RS",
                    ibge: "4306957"
                },
                {
                    nome: "Erebango",
                    uf: "RS",
                    ibge: "4306973"
                },
                {
                    nome: "Erechim",
                    uf: "RS",
                    ibge: "4307005"
                },
                {
                    nome: "Ernestina",
                    uf: "RS",
                    ibge: "4307054"
                },
                {
                    nome: "Herval",
                    uf: "RS",
                    ibge: "4307104"
                },
                {
                    nome: "Erval Grande",
                    uf: "RS",
                    ibge: "4307203"
                },
                {
                    nome: "Erval Seco",
                    uf: "RS",
                    ibge: "4307302"
                },
                {
                    nome: "Esmeralda",
                    uf: "RS",
                    ibge: "4307401"
                },
                {
                    nome: "Esperança do Sul",
                    uf: "RS",
                    ibge: "4307450"
                },
                {
                    nome: "Espumoso",
                    uf: "RS",
                    ibge: "4307500"
                },
                {
                    nome: "Estação",
                    uf: "RS",
                    ibge: "4307559"
                },
                {
                    nome: "Estância Velha",
                    uf: "RS",
                    ibge: "4307609"
                },
                {
                    nome: "Esteio",
                    uf: "RS",
                    ibge: "4307708"
                },
                {
                    nome: "Estrela",
                    uf: "RS",
                    ibge: "4307807"
                },
                {
                    nome: "Estrela Velha",
                    uf: "RS",
                    ibge: "4307815"
                },
                {
                    nome: "Eugênio de Castro",
                    uf: "RS",
                    ibge: "4307831"
                },
                {
                    nome: "Fagundes Varela",
                    uf: "RS",
                    ibge: "4307864"
                },
                {
                    nome: "Farroupilha",
                    uf: "RS",
                    ibge: "4307906"
                },
                {
                    nome: "Faxinal do Soturno",
                    uf: "RS",
                    ibge: "4308003"
                },
                {
                    nome: "Faxinalzinho",
                    uf: "RS",
                    ibge: "4308052"
                },
                {
                    nome: "Fazenda Vilanova",
                    uf: "RS",
                    ibge: "4308078"
                },
                {
                    nome: "Feliz",
                    uf: "RS",
                    ibge: "4308102"
                },
                {
                    nome: "Flores da Cunha",
                    uf: "RS",
                    ibge: "4308201"
                },
                {
                    nome: "Floriano Peixoto",
                    uf: "RS",
                    ibge: "4308250"
                },
                {
                    nome: "Fontoura Xavier",
                    uf: "RS",
                    ibge: "4308300"
                },
                {
                    nome: "Formigueiro",
                    uf: "RS",
                    ibge: "4308409"
                },
                {
                    nome: "Forquetinha",
                    uf: "RS",
                    ibge: "4308433"
                },
                {
                    nome: "Fortaleza dos Valos",
                    uf: "RS",
                    ibge: "4308458"
                },
                {
                    nome: "Frederico Westphalen",
                    uf: "RS",
                    ibge: "4308508"
                },
                {
                    nome: "Garibaldi",
                    uf: "RS",
                    ibge: "4308607"
                },
                {
                    nome: "Garruchos",
                    uf: "RS",
                    ibge: "4308656"
                },
                {
                    nome: "Gaurama",
                    uf: "RS",
                    ibge: "4308706"
                },
                {
                    nome: "General Câmara",
                    uf: "RS",
                    ibge: "4308805"
                },
                {
                    nome: "Gentil",
                    uf: "RS",
                    ibge: "4308854"
                },
                {
                    nome: "Getúlio Vargas",
                    uf: "RS",
                    ibge: "4308904"
                },
                {
                    nome: "Giruá",
                    uf: "RS",
                    ibge: "4309001"
                },
                {
                    nome: "Glorinha",
                    uf: "RS",
                    ibge: "4309050"
                },
                {
                    nome: "Gramado",
                    uf: "RS",
                    ibge: "4309100"
                },
                {
                    nome: "Gramado dos Loureiros",
                    uf: "RS",
                    ibge: "4309126"
                },
                {
                    nome: "Gramado Xavier",
                    uf: "RS",
                    ibge: "4309159"
                },
                {
                    nome: "Gravataí",
                    uf: "RS",
                    ibge: "4309209"
                },
                {
                    nome: "Guabiju",
                    uf: "RS",
                    ibge: "4309258"
                },
                {
                    nome: "Guaíba",
                    uf: "RS",
                    ibge: "4309308"
                },
                {
                    nome: "Guaporé",
                    uf: "RS",
                    ibge: "4309407"
                },
                {
                    nome: "Guarani das Missões",
                    uf: "RS",
                    ibge: "4309506"
                },
                {
                    nome: "Harmonia",
                    uf: "RS",
                    ibge: "4309555"
                },
                {
                    nome: "Herveiras",
                    uf: "RS",
                    ibge: "4309571"
                },
                {
                    nome: "Horizontina",
                    uf: "RS",
                    ibge: "4309605"
                },
                {
                    nome: "Hulha Negra",
                    uf: "RS",
                    ibge: "4309654"
                },
                {
                    nome: "Humaitá",
                    uf: "RS",
                    ibge: "4309704"
                },
                {
                    nome: "Ibarama",
                    uf: "RS",
                    ibge: "4309753"
                },
                {
                    nome: "Ibiaçá",
                    uf: "RS",
                    ibge: "4309803"
                },
                {
                    nome: "Ibiraiaras",
                    uf: "RS",
                    ibge: "4309902"
                },
                {
                    nome: "Ibirapuitã",
                    uf: "RS",
                    ibge: "4309951"
                },
                {
                    nome: "Ibirubá",
                    uf: "RS",
                    ibge: "4310009"
                },
                {
                    nome: "Igrejinha",
                    uf: "RS",
                    ibge: "4310108"
                },
                {
                    nome: "Ijuí",
                    uf: "RS",
                    ibge: "4310207"
                },
                {
                    nome: "Ilópolis",
                    uf: "RS",
                    ibge: "4310306"
                },
                {
                    nome: "Imbé",
                    uf: "RS",
                    ibge: "4310330"
                },
                {
                    nome: "Imigrante",
                    uf: "RS",
                    ibge: "4310363"
                },
                {
                    nome: "Independência",
                    uf: "RS",
                    ibge: "4310405"
                },
                {
                    nome: "Inhacorá",
                    uf: "RS",
                    ibge: "4310413"
                },
                {
                    nome: "Ipê",
                    uf: "RS",
                    ibge: "4310439"
                },
                {
                    nome: "Ipiranga do Sul",
                    uf: "RS",
                    ibge: "4310462"
                },
                {
                    nome: "Iraí",
                    uf: "RS",
                    ibge: "4310504"
                },
                {
                    nome: "Itaara",
                    uf: "RS",
                    ibge: "4310538"
                },
                {
                    nome: "Itacurubi",
                    uf: "RS",
                    ibge: "4310553"
                },
                {
                    nome: "Itapuca",
                    uf: "RS",
                    ibge: "4310579"
                },
                {
                    nome: "Itaqui",
                    uf: "RS",
                    ibge: "4310603"
                },
                {
                    nome: "Itati",
                    uf: "RS",
                    ibge: "4310652"
                },
                {
                    nome: "Itatiba do Sul",
                    uf: "RS",
                    ibge: "4310702"
                },
                {
                    nome: "Ivorá",
                    uf: "RS",
                    ibge: "4310751"
                },
                {
                    nome: "Ivoti",
                    uf: "RS",
                    ibge: "4310801"
                },
                {
                    nome: "Jaboticaba",
                    uf: "RS",
                    ibge: "4310850"
                },
                {
                    nome: "Jacuizinho",
                    uf: "RS",
                    ibge: "4310876"
                },
                {
                    nome: "Jacutinga",
                    uf: "RS",
                    ibge: "4310900"
                },
                {
                    nome: "Jaguarão",
                    uf: "RS",
                    ibge: "4311007"
                },
                {
                    nome: "Jaguari",
                    uf: "RS",
                    ibge: "4311106"
                },
                {
                    nome: "Jaquirana",
                    uf: "RS",
                    ibge: "4311122"
                },
                {
                    nome: "Jari",
                    uf: "RS",
                    ibge: "4311130"
                },
                {
                    nome: "Jóia",
                    uf: "RS",
                    ibge: "4311155"
                },
                {
                    nome: "Júlio de Castilhos",
                    uf: "RS",
                    ibge: "4311205"
                },
                {
                    nome: "Lagoa Bonita do Sul",
                    uf: "RS",
                    ibge: "4311239"
                },
                {
                    nome: "Lagoão",
                    uf: "RS",
                    ibge: "4311254"
                },
                {
                    nome: "Lagoa dos Três Cantos",
                    uf: "RS",
                    ibge: "4311270"
                },
                {
                    nome: "Lagoa Vermelha",
                    uf: "RS",
                    ibge: "4311304"
                },
                {
                    nome: "Lajeado",
                    uf: "RS",
                    ibge: "4311403"
                },
                {
                    nome: "Lajeado do Bugre",
                    uf: "RS",
                    ibge: "4311429"
                },
                {
                    nome: "Lavras do Sul",
                    uf: "RS",
                    ibge: "4311502"
                },
                {
                    nome: "Liberato Salzano",
                    uf: "RS",
                    ibge: "4311601"
                },
                {
                    nome: "Lindolfo Collor",
                    uf: "RS",
                    ibge: "4311627"
                },
                {
                    nome: "Linha Nova",
                    uf: "RS",
                    ibge: "4311643"
                },
                {
                    nome: "Machadinho",
                    uf: "RS",
                    ibge: "4311700"
                },
                {
                    nome: "Maçambará",
                    uf: "RS",
                    ibge: "4311718"
                },
                {
                    nome: "Mampituba",
                    uf: "RS",
                    ibge: "4311734"
                },
                {
                    nome: "Manoel Viana",
                    uf: "RS",
                    ibge: "4311759"
                },
                {
                    nome: "Maquiné",
                    uf: "RS",
                    ibge: "4311775"
                },
                {
                    nome: "Maratá",
                    uf: "RS",
                    ibge: "4311791"
                },
                {
                    nome: "Marau",
                    uf: "RS",
                    ibge: "4311809"
                },
                {
                    nome: "Marcelino Ramos",
                    uf: "RS",
                    ibge: "4311908"
                },
                {
                    nome: "Mariana Pimentel",
                    uf: "RS",
                    ibge: "4311981"
                },
                {
                    nome: "Mariano Moro",
                    uf: "RS",
                    ibge: "4312005"
                },
                {
                    nome: "Marques de Souza",
                    uf: "RS",
                    ibge: "4312054"
                },
                {
                    nome: "Mata",
                    uf: "RS",
                    ibge: "4312104"
                },
                {
                    nome: "Mato Castelhano",
                    uf: "RS",
                    ibge: "4312138"
                },
                {
                    nome: "Mato Leitão",
                    uf: "RS",
                    ibge: "4312153"
                },
                {
                    nome: "Mato Queimado",
                    uf: "RS",
                    ibge: "4312179"
                },
                {
                    nome: "Maximiliano de Almeida",
                    uf: "RS",
                    ibge: "4312203"
                },
                {
                    nome: "Minas do Leão",
                    uf: "RS",
                    ibge: "4312252"
                },
                {
                    nome: "Miraguaí",
                    uf: "RS",
                    ibge: "4312302"
                },
                {
                    nome: "Montauri",
                    uf: "RS",
                    ibge: "4312351"
                },
                {
                    nome: "Monte Alegre dos Campos",
                    uf: "RS",
                    ibge: "4312377"
                },
                {
                    nome: "Monte Belo do Sul",
                    uf: "RS",
                    ibge: "4312385"
                },
                {
                    nome: "Montenegro",
                    uf: "RS",
                    ibge: "4312401"
                },
                {
                    nome: "Mormaço",
                    uf: "RS",
                    ibge: "4312427"
                },
                {
                    nome: "Morrinhos do Sul",
                    uf: "RS",
                    ibge: "4312443"
                },
                {
                    nome: "Morro Redondo",
                    uf: "RS",
                    ibge: "4312450"
                },
                {
                    nome: "Morro Reuter",
                    uf: "RS",
                    ibge: "4312476"
                },
                {
                    nome: "Mostardas",
                    uf: "RS",
                    ibge: "4312500"
                },
                {
                    nome: "Muçum",
                    uf: "RS",
                    ibge: "4312609"
                },
                {
                    nome: "Muitos Capões",
                    uf: "RS",
                    ibge: "4312617"
                },
                {
                    nome: "Muliterno",
                    uf: "RS",
                    ibge: "4312625"
                },
                {
                    nome: "Não-Me-Toque",
                    uf: "RS",
                    ibge: "4312658"
                },
                {
                    nome: "Nicolau Vergueiro",
                    uf: "RS",
                    ibge: "4312674"
                },
                {
                    nome: "Nonoai",
                    uf: "RS",
                    ibge: "4312708"
                },
                {
                    nome: "Nova Alvorada",
                    uf: "RS",
                    ibge: "4312757"
                },
                {
                    nome: "Nova Araçá",
                    uf: "RS",
                    ibge: "4312807"
                },
                {
                    nome: "Nova Bassano",
                    uf: "RS",
                    ibge: "4312906"
                },
                {
                    nome: "Nova Boa Vista",
                    uf: "RS",
                    ibge: "4312955"
                },
                {
                    nome: "Nova Bréscia",
                    uf: "RS",
                    ibge: "4313003"
                },
                {
                    nome: "Nova Candelária",
                    uf: "RS",
                    ibge: "4313011"
                },
                {
                    nome: "Nova Esperança do Sul",
                    uf: "RS",
                    ibge: "4313037"
                },
                {
                    nome: "Nova Hartz",
                    uf: "RS",
                    ibge: "4313060"
                },
                {
                    nome: "Nova Pádua",
                    uf: "RS",
                    ibge: "4313086"
                },
                {
                    nome: "Nova Palma",
                    uf: "RS",
                    ibge: "4313102"
                },
                {
                    nome: "Nova Petrópolis",
                    uf: "RS",
                    ibge: "4313201"
                },
                {
                    nome: "Nova Prata",
                    uf: "RS",
                    ibge: "4313300"
                },
                {
                    nome: "Nova Ramada",
                    uf: "RS",
                    ibge: "4313334"
                },
                {
                    nome: "Nova Roma do Sul",
                    uf: "RS",
                    ibge: "4313359"
                },
                {
                    nome: "Nova Santa Rita",
                    uf: "RS",
                    ibge: "4313375"
                },
                {
                    nome: "Novo Cabrais",
                    uf: "RS",
                    ibge: "4313391"
                },
                {
                    nome: "Novo Hamburgo",
                    uf: "RS",
                    ibge: "4313409"
                },
                {
                    nome: "Novo Machado",
                    uf: "RS",
                    ibge: "4313425"
                },
                {
                    nome: "Novo Tiradentes",
                    uf: "RS",
                    ibge: "4313441"
                },
                {
                    nome: "Novo Xingu",
                    uf: "RS",
                    ibge: "4313466"
                },
                {
                    nome: "Novo Barreiro",
                    uf: "RS",
                    ibge: "4313490"
                },
                {
                    nome: "Osório",
                    uf: "RS",
                    ibge: "4313508"
                },
                {
                    nome: "Paim Filho",
                    uf: "RS",
                    ibge: "4313607"
                },
                {
                    nome: "Palmares do Sul",
                    uf: "RS",
                    ibge: "4313656"
                },
                {
                    nome: "Palmeira das Missões",
                    uf: "RS",
                    ibge: "4313706"
                },
                {
                    nome: "Palmitinho",
                    uf: "RS",
                    ibge: "4313805"
                },
                {
                    nome: "Panambi",
                    uf: "RS",
                    ibge: "4313904"
                },
                {
                    nome: "Pantano Grande",
                    uf: "RS",
                    ibge: "4313953"
                },
                {
                    nome: "Paraí",
                    uf: "RS",
                    ibge: "4314001"
                },
                {
                    nome: "Paraíso do Sul",
                    uf: "RS",
                    ibge: "4314027"
                },
                {
                    nome: "Pareci Novo",
                    uf: "RS",
                    ibge: "4314035"
                },
                {
                    nome: "Parobé",
                    uf: "RS",
                    ibge: "4314050"
                },
                {
                    nome: "Passa Sete",
                    uf: "RS",
                    ibge: "4314068"
                },
                {
                    nome: "Passo do Sobrado",
                    uf: "RS",
                    ibge: "4314076"
                },
                {
                    nome: "Passo Fundo",
                    uf: "RS",
                    ibge: "4314100"
                },
                {
                    nome: "Paulo Bento",
                    uf: "RS",
                    ibge: "4314134"
                },
                {
                    nome: "Paverama",
                    uf: "RS",
                    ibge: "4314159"
                },
                {
                    nome: "Pedras Altas",
                    uf: "RS",
                    ibge: "4314175"
                },
                {
                    nome: "Pedro Osório",
                    uf: "RS",
                    ibge: "4314209"
                },
                {
                    nome: "Pejuçara",
                    uf: "RS",
                    ibge: "4314308"
                },
                {
                    nome: "Pelotas",
                    uf: "RS",
                    ibge: "4314407"
                },
                {
                    nome: "Picada Café",
                    uf: "RS",
                    ibge: "4314423"
                },
                {
                    nome: "Pinhal",
                    uf: "RS",
                    ibge: "4314456"
                },
                {
                    nome: "Pinhal da Serra",
                    uf: "RS",
                    ibge: "4314464"
                },
                {
                    nome: "Pinhal Grande",
                    uf: "RS",
                    ibge: "4314472"
                },
                {
                    nome: "Pinheirinho do Vale",
                    uf: "RS",
                    ibge: "4314498"
                },
                {
                    nome: "Pinheiro Machado",
                    uf: "RS",
                    ibge: "4314506"
                },
                {
                    nome: "Pinto Bandeira",
                    uf: "RS",
                    ibge: "4314548"
                },
                {
                    nome: "Pirapó",
                    uf: "RS",
                    ibge: "4314555"
                },
                {
                    nome: "Piratini",
                    uf: "RS",
                    ibge: "4314605"
                },
                {
                    nome: "Planalto",
                    uf: "RS",
                    ibge: "4314704"
                },
                {
                    nome: "Poço das Antas",
                    uf: "RS",
                    ibge: "4314753"
                },
                {
                    nome: "Pontão",
                    uf: "RS",
                    ibge: "4314779"
                },
                {
                    nome: "Ponte Preta",
                    uf: "RS",
                    ibge: "4314787"
                },
                {
                    nome: "Portão",
                    uf: "RS",
                    ibge: "4314803"
                },
                {
                    nome: "Porto Alegre",
                    uf: "RS",
                    ibge: "4314902"
                },
                {
                    nome: "Porto Lucena",
                    uf: "RS",
                    ibge: "4315008"
                },
                {
                    nome: "Porto Mauá",
                    uf: "RS",
                    ibge: "4315057"
                },
                {
                    nome: "Porto Vera Cruz",
                    uf: "RS",
                    ibge: "4315073"
                },
                {
                    nome: "Porto Xavier",
                    uf: "RS",
                    ibge: "4315107"
                },
                {
                    nome: "Pouso Novo",
                    uf: "RS",
                    ibge: "4315131"
                },
                {
                    nome: "Presidente Lucena",
                    uf: "RS",
                    ibge: "4315149"
                },
                {
                    nome: "Progresso",
                    uf: "RS",
                    ibge: "4315156"
                },
                {
                    nome: "Protásio Alves",
                    uf: "RS",
                    ibge: "4315172"
                },
                {
                    nome: "Putinga",
                    uf: "RS",
                    ibge: "4315206"
                },
                {
                    nome: "Quaraí",
                    uf: "RS",
                    ibge: "4315305"
                },
                {
                    nome: "Quatro Irmãos",
                    uf: "RS",
                    ibge: "4315313"
                },
                {
                    nome: "Quevedos",
                    uf: "RS",
                    ibge: "4315321"
                },
                {
                    nome: "Quinze de Novembro",
                    uf: "RS",
                    ibge: "4315354"
                },
                {
                    nome: "Redentora",
                    uf: "RS",
                    ibge: "4315404"
                },
                {
                    nome: "Relvado",
                    uf: "RS",
                    ibge: "4315453"
                },
                {
                    nome: "Restinga Seca",
                    uf: "RS",
                    ibge: "4315503"
                },
                {
                    nome: "Rio dos Índios",
                    uf: "RS",
                    ibge: "4315552"
                },
                {
                    nome: "Rio Grande",
                    uf: "RS",
                    ibge: "4315602"
                },
                {
                    nome: "Rio Pardo",
                    uf: "RS",
                    ibge: "4315701"
                },
                {
                    nome: "Riozinho",
                    uf: "RS",
                    ibge: "4315750"
                },
                {
                    nome: "Roca Sales",
                    uf: "RS",
                    ibge: "4315800"
                },
                {
                    nome: "Rodeio Bonito",
                    uf: "RS",
                    ibge: "4315909"
                },
                {
                    nome: "Rolador",
                    uf: "RS",
                    ibge: "4315958"
                },
                {
                    nome: "Rolante",
                    uf: "RS",
                    ibge: "4316006"
                },
                {
                    nome: "Ronda Alta",
                    uf: "RS",
                    ibge: "4316105"
                },
                {
                    nome: "Rondinha",
                    uf: "RS",
                    ibge: "4316204"
                },
                {
                    nome: "Roque Gonzales",
                    uf: "RS",
                    ibge: "4316303"
                },
                {
                    nome: "Rosário do Sul",
                    uf: "RS",
                    ibge: "4316402"
                },
                {
                    nome: "Sagrada Família",
                    uf: "RS",
                    ibge: "4316428"
                },
                {
                    nome: "Saldanha Marinho",
                    uf: "RS",
                    ibge: "4316436"
                },
                {
                    nome: "Salto do Jacuí",
                    uf: "RS",
                    ibge: "4316451"
                },
                {
                    nome: "Salvador das Missões",
                    uf: "RS",
                    ibge: "4316477"
                },
                {
                    nome: "Salvador do Sul",
                    uf: "RS",
                    ibge: "4316501"
                },
                {
                    nome: "Sananduva",
                    uf: "RS",
                    ibge: "4316600"
                },
                {
                    nome: "Santa Bárbara do Sul",
                    uf: "RS",
                    ibge: "4316709"
                },
                {
                    nome: "Santa Cecília do Sul",
                    uf: "RS",
                    ibge: "4316733"
                },
                {
                    nome: "Santa Clara do Sul",
                    uf: "RS",
                    ibge: "4316758"
                },
                {
                    nome: "Santa Cruz do Sul",
                    uf: "RS",
                    ibge: "4316808"
                },
                {
                    nome: "Santa Maria",
                    uf: "RS",
                    ibge: "4316907"
                },
                {
                    nome: "Santa Maria do Herval",
                    uf: "RS",
                    ibge: "4316956"
                },
                {
                    nome: "Santa Margarida do Sul",
                    uf: "RS",
                    ibge: "4316972"
                },
                {
                    nome: "Santana da Boa Vista",
                    uf: "RS",
                    ibge: "4317004"
                },
                {
                    nome: "Sant'Ana do Livramento",
                    uf: "RS",
                    ibge: "4317103"
                },
                {
                    nome: "Santa Rosa",
                    uf: "RS",
                    ibge: "4317202"
                },
                {
                    nome: "Santa Tereza",
                    uf: "RS",
                    ibge: "4317251"
                },
                {
                    nome: "Santa Vitória do Palmar",
                    uf: "RS",
                    ibge: "4317301"
                },
                {
                    nome: "Santiago",
                    uf: "RS",
                    ibge: "4317400"
                },
                {
                    nome: "Santo Ângelo",
                    uf: "RS",
                    ibge: "4317509"
                },
                {
                    nome: "Santo Antônio do Palma",
                    uf: "RS",
                    ibge: "4317558"
                },
                {
                    nome: "Santo Antônio da Patrulha",
                    uf: "RS",
                    ibge: "4317608"
                },
                {
                    nome: "Santo Antônio das Missões",
                    uf: "RS",
                    ibge: "4317707"
                },
                {
                    nome: "Santo Antônio do Planalto",
                    uf: "RS",
                    ibge: "4317756"
                },
                {
                    nome: "Santo Augusto",
                    uf: "RS",
                    ibge: "4317806"
                },
                {
                    nome: "Santo Cristo",
                    uf: "RS",
                    ibge: "4317905"
                },
                {
                    nome: "Santo Expedito do Sul",
                    uf: "RS",
                    ibge: "4317954"
                },
                {
                    nome: "São Borja",
                    uf: "RS",
                    ibge: "4318002"
                },
                {
                    nome: "São Domingos do Sul",
                    uf: "RS",
                    ibge: "4318051"
                },
                {
                    nome: "São Francisco de Assis",
                    uf: "RS",
                    ibge: "4318101"
                },
                {
                    nome: "São Francisco de Paula",
                    uf: "RS",
                    ibge: "4318200"
                },
                {
                    nome: "São Gabriel",
                    uf: "RS",
                    ibge: "4318309"
                },
                {
                    nome: "São Jerônimo",
                    uf: "RS",
                    ibge: "4318408"
                },
                {
                    nome: "São João da Urtiga",
                    uf: "RS",
                    ibge: "4318424"
                },
                {
                    nome: "São João do Polêsine",
                    uf: "RS",
                    ibge: "4318432"
                },
                {
                    nome: "São Jorge",
                    uf: "RS",
                    ibge: "4318440"
                },
                {
                    nome: "São José das Missões",
                    uf: "RS",
                    ibge: "4318457"
                },
                {
                    nome: "São José do Herval",
                    uf: "RS",
                    ibge: "4318465"
                },
                {
                    nome: "São José do Hortêncio",
                    uf: "RS",
                    ibge: "4318481"
                },
                {
                    nome: "São José do Inhacorá",
                    uf: "RS",
                    ibge: "4318499"
                },
                {
                    nome: "São José do Norte",
                    uf: "RS",
                    ibge: "4318507"
                },
                {
                    nome: "São José do Ouro",
                    uf: "RS",
                    ibge: "4318606"
                },
                {
                    nome: "São José do Sul",
                    uf: "RS",
                    ibge: "4318614"
                },
                {
                    nome: "São José dos Ausentes",
                    uf: "RS",
                    ibge: "4318622"
                },
                {
                    nome: "São Leopoldo",
                    uf: "RS",
                    ibge: "4318705"
                },
                {
                    nome: "São Lourenço do Sul",
                    uf: "RS",
                    ibge: "4318804"
                },
                {
                    nome: "São Luiz Gonzaga",
                    uf: "RS",
                    ibge: "4318903"
                },
                {
                    nome: "São Marcos",
                    uf: "RS",
                    ibge: "4319000"
                },
                {
                    nome: "São Martinho",
                    uf: "RS",
                    ibge: "4319109"
                },
                {
                    nome: "São Martinho da Serra",
                    uf: "RS",
                    ibge: "4319125"
                },
                {
                    nome: "São Miguel das Missões",
                    uf: "RS",
                    ibge: "4319158"
                },
                {
                    nome: "São Nicolau",
                    uf: "RS",
                    ibge: "4319208"
                },
                {
                    nome: "São Paulo das Missões",
                    uf: "RS",
                    ibge: "4319307"
                },
                {
                    nome: "São Pedro da Serra",
                    uf: "RS",
                    ibge: "4319356"
                },
                {
                    nome: "São Pedro das Missões",
                    uf: "RS",
                    ibge: "4319364"
                },
                {
                    nome: "São Pedro do Butiá",
                    uf: "RS",
                    ibge: "4319372"
                },
                {
                    nome: "São Pedro do Sul",
                    uf: "RS",
                    ibge: "4319406"
                },
                {
                    nome: "São Sebastião do Caí",
                    uf: "RS",
                    ibge: "4319505"
                },
                {
                    nome: "São Sepé",
                    uf: "RS",
                    ibge: "4319604"
                },
                {
                    nome: "São Valentim",
                    uf: "RS",
                    ibge: "4319703"
                },
                {
                    nome: "São Valentim do Sul",
                    uf: "RS",
                    ibge: "4319711"
                },
                {
                    nome: "São Valério do Sul",
                    uf: "RS",
                    ibge: "4319737"
                },
                {
                    nome: "São Vendelino",
                    uf: "RS",
                    ibge: "4319752"
                },
                {
                    nome: "São Vicente do Sul",
                    uf: "RS",
                    ibge: "4319802"
                },
                {
                    nome: "Sapiranga",
                    uf: "RS",
                    ibge: "4319901"
                },
                {
                    nome: "Sapucaia do Sul",
                    uf: "RS",
                    ibge: "4320008"
                },
                {
                    nome: "Sarandi",
                    uf: "RS",
                    ibge: "4320107"
                },
                {
                    nome: "Seberi",
                    uf: "RS",
                    ibge: "4320206"
                },
                {
                    nome: "Sede Nova",
                    uf: "RS",
                    ibge: "4320230"
                },
                {
                    nome: "Segredo",
                    uf: "RS",
                    ibge: "4320263"
                },
                {
                    nome: "Selbach",
                    uf: "RS",
                    ibge: "4320305"
                },
                {
                    nome: "Senador Salgado Filho",
                    uf: "RS",
                    ibge: "4320321"
                },
                {
                    nome: "Sentinela do Sul",
                    uf: "RS",
                    ibge: "4320354"
                },
                {
                    nome: "Serafina Corrêa",
                    uf: "RS",
                    ibge: "4320404"
                },
                {
                    nome: "Sério",
                    uf: "RS",
                    ibge: "4320453"
                },
                {
                    nome: "Sertão",
                    uf: "RS",
                    ibge: "4320503"
                },
                {
                    nome: "Sertão Santana",
                    uf: "RS",
                    ibge: "4320552"
                },
                {
                    nome: "Sete de Setembro",
                    uf: "RS",
                    ibge: "4320578"
                },
                {
                    nome: "Severiano de Almeida",
                    uf: "RS",
                    ibge: "4320602"
                },
                {
                    nome: "Silveira Martins",
                    uf: "RS",
                    ibge: "4320651"
                },
                {
                    nome: "Sinimbu",
                    uf: "RS",
                    ibge: "4320677"
                },
                {
                    nome: "Sobradinho",
                    uf: "RS",
                    ibge: "4320701"
                },
                {
                    nome: "Soledade",
                    uf: "RS",
                    ibge: "4320800"
                },
                {
                    nome: "Tabaí",
                    uf: "RS",
                    ibge: "4320859"
                },
                {
                    nome: "Tapejara",
                    uf: "RS",
                    ibge: "4320909"
                },
                {
                    nome: "Tapera",
                    uf: "RS",
                    ibge: "4321006"
                },
                {
                    nome: "Tapes",
                    uf: "RS",
                    ibge: "4321105"
                },
                {
                    nome: "Taquara",
                    uf: "RS",
                    ibge: "4321204"
                },
                {
                    nome: "Taquari",
                    uf: "RS",
                    ibge: "4321303"
                },
                {
                    nome: "Taquaruçu do Sul",
                    uf: "RS",
                    ibge: "4321329"
                },
                {
                    nome: "Tavares",
                    uf: "RS",
                    ibge: "4321352"
                },
                {
                    nome: "Tenente Portela",
                    uf: "RS",
                    ibge: "4321402"
                },
                {
                    nome: "Terra de Areia",
                    uf: "RS",
                    ibge: "4321436"
                },
                {
                    nome: "Teutônia",
                    uf: "RS",
                    ibge: "4321451"
                },
                {
                    nome: "Tio Hugo",
                    uf: "RS",
                    ibge: "4321469"
                },
                {
                    nome: "Tiradentes do Sul",
                    uf: "RS",
                    ibge: "4321477"
                },
                {
                    nome: "Toropi",
                    uf: "RS",
                    ibge: "4321493"
                },
                {
                    nome: "Torres",
                    uf: "RS",
                    ibge: "4321501"
                },
                {
                    nome: "Tramandaí",
                    uf: "RS",
                    ibge: "4321600"
                },
                {
                    nome: "Travesseiro",
                    uf: "RS",
                    ibge: "4321626"
                },
                {
                    nome: "Três Arroios",
                    uf: "RS",
                    ibge: "4321634"
                },
                {
                    nome: "Três Cachoeiras",
                    uf: "RS",
                    ibge: "4321667"
                },
                {
                    nome: "Três Coroas",
                    uf: "RS",
                    ibge: "4321709"
                },
                {
                    nome: "Três de Maio",
                    uf: "RS",
                    ibge: "4321808"
                },
                {
                    nome: "Três Forquilhas",
                    uf: "RS",
                    ibge: "4321832"
                },
                {
                    nome: "Três Palmeiras",
                    uf: "RS",
                    ibge: "4321857"
                },
                {
                    nome: "Três Passos",
                    uf: "RS",
                    ibge: "4321907"
                },
                {
                    nome: "Trindade do Sul",
                    uf: "RS",
                    ibge: "4321956"
                },
                {
                    nome: "Triunfo",
                    uf: "RS",
                    ibge: "4322004"
                },
                {
                    nome: "Tucunduva",
                    uf: "RS",
                    ibge: "4322103"
                },
                {
                    nome: "Tunas",
                    uf: "RS",
                    ibge: "4322152"
                },
                {
                    nome: "Tupanci do Sul",
                    uf: "RS",
                    ibge: "4322186"
                },
                {
                    nome: "Tupanciretã",
                    uf: "RS",
                    ibge: "4322202"
                },
                {
                    nome: "Tupandi",
                    uf: "RS",
                    ibge: "4322251"
                },
                {
                    nome: "Tuparendi",
                    uf: "RS",
                    ibge: "4322301"
                },
                {
                    nome: "Turuçu",
                    uf: "RS",
                    ibge: "4322327"
                },
                {
                    nome: "Ubiretama",
                    uf: "RS",
                    ibge: "4322343"
                },
                {
                    nome: "União da Serra",
                    uf: "RS",
                    ibge: "4322350"
                },
                {
                    nome: "Unistalda",
                    uf: "RS",
                    ibge: "4322376"
                },
                {
                    nome: "Uruguaiana",
                    uf: "RS",
                    ibge: "4322400"
                },
                {
                    nome: "Vacaria",
                    uf: "RS",
                    ibge: "4322509"
                },
                {
                    nome: "Vale Verde",
                    uf: "RS",
                    ibge: "4322525"
                },
                {
                    nome: "Vale do Sol",
                    uf: "RS",
                    ibge: "4322533"
                },
                {
                    nome: "Vale Real",
                    uf: "RS",
                    ibge: "4322541"
                },
                {
                    nome: "Vanini",
                    uf: "RS",
                    ibge: "4322558"
                },
                {
                    nome: "Venâncio Aires",
                    uf: "RS",
                    ibge: "4322608"
                },
                {
                    nome: "Vera Cruz",
                    uf: "RS",
                    ibge: "4322707"
                },
                {
                    nome: "Veranópolis",
                    uf: "RS",
                    ibge: "4322806"
                },
                {
                    nome: "Vespasiano Correa",
                    uf: "RS",
                    ibge: "4322855"
                },
                {
                    nome: "Viadutos",
                    uf: "RS",
                    ibge: "4322905"
                },
                {
                    nome: "Viamão",
                    uf: "RS",
                    ibge: "4323002"
                },
                {
                    nome: "Vicente Dutra",
                    uf: "RS",
                    ibge: "4323101"
                },
                {
                    nome: "Victor Graeff",
                    uf: "RS",
                    ibge: "4323200"
                },
                {
                    nome: "Vila Flores",
                    uf: "RS",
                    ibge: "4323309"
                },
                {
                    nome: "Vila Lângaro",
                    uf: "RS",
                    ibge: "4323358"
                },
                {
                    nome: "Vila Maria",
                    uf: "RS",
                    ibge: "4323408"
                },
                {
                    nome: "Vila Nova do Sul",
                    uf: "RS",
                    ibge: "4323457"
                },
                {
                    nome: "Vista Alegre",
                    uf: "RS",
                    ibge: "4323507"
                },
                {
                    nome: "Vista Alegre do Prata",
                    uf: "RS",
                    ibge: "4323606"
                },
                {
                    nome: "Vista Gaúcha",
                    uf: "RS",
                    ibge: "4323705"
                },
                {
                    nome: "Vitória das Missões",
                    uf: "RS",
                    ibge: "4323754"
                },
                {
                    nome: "Westfalia",
                    uf: "RS",
                    ibge: "4323770"
                },
                {
                    nome: "Xangri-lá",
                    uf: "RS",
                    ibge: "4323804"
                },
                {
                    nome: "Água Clara",
                    uf: "MS",
                    ibge: "5000203"
                },
                {
                    nome: "Alcinópolis",
                    uf: "MS",
                    ibge: "5000252"
                },
                {
                    nome: "Amambai",
                    uf: "MS",
                    ibge: "5000609"
                },
                {
                    nome: "Anastácio",
                    uf: "MS",
                    ibge: "5000708"
                },
                {
                    nome: "Anaurilândia",
                    uf: "MS",
                    ibge: "5000807"
                },
                {
                    nome: "Angélica",
                    uf: "MS",
                    ibge: "5000856"
                },
                {
                    nome: "Antônio João",
                    uf: "MS",
                    ibge: "5000906"
                },
                {
                    nome: "Aparecida do Taboado",
                    uf: "MS",
                    ibge: "5001003"
                },
                {
                    nome: "Aquidauana",
                    uf: "MS",
                    ibge: "5001102"
                },
                {
                    nome: "Aral Moreira",
                    uf: "MS",
                    ibge: "5001243"
                },
                {
                    nome: "Bandeirantes",
                    uf: "MS",
                    ibge: "5001508"
                },
                {
                    nome: "Bataguassu",
                    uf: "MS",
                    ibge: "5001904"
                },
                {
                    nome: "Batayporã",
                    uf: "MS",
                    ibge: "5002001"
                },
                {
                    nome: "Bela Vista",
                    uf: "MS",
                    ibge: "5002100"
                },
                {
                    nome: "Bodoquena",
                    uf: "MS",
                    ibge: "5002159"
                },
                {
                    nome: "Bonito",
                    uf: "MS",
                    ibge: "5002209"
                },
                {
                    nome: "Brasilândia",
                    uf: "MS",
                    ibge: "5002308"
                },
                {
                    nome: "Caarapó",
                    uf: "MS",
                    ibge: "5002407"
                },
                {
                    nome: "Camapuã",
                    uf: "MS",
                    ibge: "5002605"
                },
                {
                    nome: "Campo Grande",
                    uf: "MS",
                    ibge: "5002704"
                },
                {
                    nome: "Caracol",
                    uf: "MS",
                    ibge: "5002803"
                },
                {
                    nome: "Cassilândia",
                    uf: "MS",
                    ibge: "5002902"
                },
                {
                    nome: "Chapadão do Sul",
                    uf: "MS",
                    ibge: "5002951"
                },
                {
                    nome: "Corguinho",
                    uf: "MS",
                    ibge: "5003108"
                },
                {
                    nome: "Coronel Sapucaia",
                    uf: "MS",
                    ibge: "5003157"
                },
                {
                    nome: "Corumbá",
                    uf: "MS",
                    ibge: "5003207"
                },
                {
                    nome: "Costa Rica",
                    uf: "MS",
                    ibge: "5003256"
                },
                {
                    nome: "Coxim",
                    uf: "MS",
                    ibge: "5003306"
                },
                {
                    nome: "Deodápolis",
                    uf: "MS",
                    ibge: "5003454"
                },
                {
                    nome: "Dois Irmãos do Buriti",
                    uf: "MS",
                    ibge: "5003488"
                },
                {
                    nome: "Douradina",
                    uf: "MS",
                    ibge: "5003504"
                },
                {
                    nome: "Dourados",
                    uf: "MS",
                    ibge: "5003702"
                },
                {
                    nome: "Eldorado",
                    uf: "MS",
                    ibge: "5003751"
                },
                {
                    nome: "Fátima do Sul",
                    uf: "MS",
                    ibge: "5003801"
                },
                {
                    nome: "Figueirão",
                    uf: "MS",
                    ibge: "5003900"
                },
                {
                    nome: "Glória de Dourados",
                    uf: "MS",
                    ibge: "5004007"
                },
                {
                    nome: "Guia Lopes da Laguna",
                    uf: "MS",
                    ibge: "5004106"
                },
                {
                    nome: "Iguatemi",
                    uf: "MS",
                    ibge: "5004304"
                },
                {
                    nome: "Inocência",
                    uf: "MS",
                    ibge: "5004403"
                },
                {
                    nome: "Itaporã",
                    uf: "MS",
                    ibge: "5004502"
                },
                {
                    nome: "Itaquiraí",
                    uf: "MS",
                    ibge: "5004601"
                },
                {
                    nome: "Ivinhema",
                    uf: "MS",
                    ibge: "5004700"
                },
                {
                    nome: "Japorã",
                    uf: "MS",
                    ibge: "5004809"
                },
                {
                    nome: "Jaraguari",
                    uf: "MS",
                    ibge: "5004908"
                },
                {
                    nome: "Jardim",
                    uf: "MS",
                    ibge: "5005004"
                },
                {
                    nome: "Jateí",
                    uf: "MS",
                    ibge: "5005103"
                },
                {
                    nome: "Juti",
                    uf: "MS",
                    ibge: "5005152"
                },
                {
                    nome: "Ladário",
                    uf: "MS",
                    ibge: "5005202"
                },
                {
                    nome: "Laguna Carapã",
                    uf: "MS",
                    ibge: "5005251"
                },
                {
                    nome: "Maracaju",
                    uf: "MS",
                    ibge: "5005400"
                },
                {
                    nome: "Miranda",
                    uf: "MS",
                    ibge: "5005608"
                },
                {
                    nome: "Mundo Novo",
                    uf: "MS",
                    ibge: "5005681"
                },
                {
                    nome: "Naviraí",
                    uf: "MS",
                    ibge: "5005707"
                },
                {
                    nome: "Nioaque",
                    uf: "MS",
                    ibge: "5005806"
                },
                {
                    nome: "Nova Alvorada do Sul",
                    uf: "MS",
                    ibge: "5006002"
                },
                {
                    nome: "Nova Andradina",
                    uf: "MS",
                    ibge: "5006200"
                },
                {
                    nome: "Novo Horizonte do Sul",
                    uf: "MS",
                    ibge: "5006259"
                },
                {
                    nome: "Paraíso das Águas",
                    uf: "MS",
                    ibge: "5006275"
                },
                {
                    nome: "Paranaíba",
                    uf: "MS",
                    ibge: "5006309"
                },
                {
                    nome: "Paranhos",
                    uf: "MS",
                    ibge: "5006358"
                },
                {
                    nome: "Pedro Gomes",
                    uf: "MS",
                    ibge: "5006408"
                },
                {
                    nome: "Ponta Porã",
                    uf: "MS",
                    ibge: "5006606"
                },
                {
                    nome: "Porto Murtinho",
                    uf: "MS",
                    ibge: "5006903"
                },
                {
                    nome: "Ribas do Rio Pardo",
                    uf: "MS",
                    ibge: "5007109"
                },
                {
                    nome: "Rio Brilhante",
                    uf: "MS",
                    ibge: "5007208"
                },
                {
                    nome: "Rio Negro",
                    uf: "MS",
                    ibge: "5007307"
                },
                {
                    nome: "Rio Verde de Mato Grosso",
                    uf: "MS",
                    ibge: "5007406"
                },
                {
                    nome: "Rochedo",
                    uf: "MS",
                    ibge: "5007505"
                },
                {
                    nome: "Santa Rita do Pardo",
                    uf: "MS",
                    ibge: "5007554"
                },
                {
                    nome: "São Gabriel do Oeste",
                    uf: "MS",
                    ibge: "5007695"
                },
                {
                    nome: "Sete Quedas",
                    uf: "MS",
                    ibge: "5007703"
                },
                {
                    nome: "Selvíria",
                    uf: "MS",
                    ibge: "5007802"
                },
                {
                    nome: "Sidrolândia",
                    uf: "MS",
                    ibge: "5007901"
                },
                {
                    nome: "Sonora",
                    uf: "MS",
                    ibge: "5007935"
                },
                {
                    nome: "Tacuru",
                    uf: "MS",
                    ibge: "5007950"
                },
                {
                    nome: "Taquarussu",
                    uf: "MS",
                    ibge: "5007976"
                },
                {
                    nome: "Terenos",
                    uf: "MS",
                    ibge: "5008008"
                },
                {
                    nome: "Três Lagoas",
                    uf: "MS",
                    ibge: "5008305"
                },
                {
                    nome: "Vicentina",
                    uf: "MS",
                    ibge: "5008404"
                },
                {
                    nome: "Acorizal",
                    uf: "MT",
                    ibge: "5100102"
                },
                {
                    nome: "Água Boa",
                    uf: "MT",
                    ibge: "5100201"
                },
                {
                    nome: "Alta Floresta",
                    uf: "MT",
                    ibge: "5100250"
                },
                {
                    nome: "Alto Araguaia",
                    uf: "MT",
                    ibge: "5100300"
                },
                {
                    nome: "Alto Boa Vista",
                    uf: "MT",
                    ibge: "5100359"
                },
                {
                    nome: "Alto Garças",
                    uf: "MT",
                    ibge: "5100409"
                },
                {
                    nome: "Alto Paraguai",
                    uf: "MT",
                    ibge: "5100508"
                },
                {
                    nome: "Alto Taquari",
                    uf: "MT",
                    ibge: "5100607"
                },
                {
                    nome: "Apiacás",
                    uf: "MT",
                    ibge: "5100805"
                },
                {
                    nome: "Araguaiana",
                    uf: "MT",
                    ibge: "5101001"
                },
                {
                    nome: "Araguainha",
                    uf: "MT",
                    ibge: "5101209"
                },
                {
                    nome: "Araputanga",
                    uf: "MT",
                    ibge: "5101258"
                },
                {
                    nome: "Arenápolis",
                    uf: "MT",
                    ibge: "5101308"
                },
                {
                    nome: "Aripuanã",
                    uf: "MT",
                    ibge: "5101407"
                },
                {
                    nome: "Barão de Melgaço",
                    uf: "MT",
                    ibge: "5101605"
                },
                {
                    nome: "Barra do Bugres",
                    uf: "MT",
                    ibge: "5101704"
                },
                {
                    nome: "Barra do Garças",
                    uf: "MT",
                    ibge: "5101803"
                },
                {
                    nome: "Bom Jesus do Araguaia",
                    uf: "MT",
                    ibge: "5101852"
                },
                {
                    nome: "Brasnorte",
                    uf: "MT",
                    ibge: "5101902"
                },
                {
                    nome: "Cáceres",
                    uf: "MT",
                    ibge: "5102504"
                },
                {
                    nome: "Campinápolis",
                    uf: "MT",
                    ibge: "5102603"
                },
                {
                    nome: "Campo Novo do Parecis",
                    uf: "MT",
                    ibge: "5102637"
                },
                {
                    nome: "Campo Verde",
                    uf: "MT",
                    ibge: "5102678"
                },
                {
                    nome: "Campos de Júlio",
                    uf: "MT",
                    ibge: "5102686"
                },
                {
                    nome: "Canabrava do Norte",
                    uf: "MT",
                    ibge: "5102694"
                },
                {
                    nome: "Canarana",
                    uf: "MT",
                    ibge: "5102702"
                },
                {
                    nome: "Carlinda",
                    uf: "MT",
                    ibge: "5102793"
                },
                {
                    nome: "Castanheira",
                    uf: "MT",
                    ibge: "5102850"
                },
                {
                    nome: "Chapada dos Guimarães",
                    uf: "MT",
                    ibge: "5103007"
                },
                {
                    nome: "Cláudia",
                    uf: "MT",
                    ibge: "5103056"
                },
                {
                    nome: "Cocalinho",
                    uf: "MT",
                    ibge: "5103106"
                },
                {
                    nome: "Colíder",
                    uf: "MT",
                    ibge: "5103205"
                },
                {
                    nome: "Colniza",
                    uf: "MT",
                    ibge: "5103254"
                },
                {
                    nome: "Comodoro",
                    uf: "MT",
                    ibge: "5103304"
                },
                {
                    nome: "Confresa",
                    uf: "MT",
                    ibge: "5103353"
                },
                {
                    nome: "Conquista D'Oeste",
                    uf: "MT",
                    ibge: "5103361"
                },
                {
                    nome: "Cotriguaçu",
                    uf: "MT",
                    ibge: "5103379"
                },
                {
                    nome: "Cuiabá",
                    uf: "MT",
                    ibge: "5103403"
                },
                {
                    nome: "Curvelândia",
                    uf: "MT",
                    ibge: "5103437"
                },
                {
                    nome: "Denise",
                    uf: "MT",
                    ibge: "5103452"
                },
                {
                    nome: "Diamantino",
                    uf: "MT",
                    ibge: "5103502"
                },
                {
                    nome: "Dom Aquino",
                    uf: "MT",
                    ibge: "5103601"
                },
                {
                    nome: "Feliz Natal",
                    uf: "MT",
                    ibge: "5103700"
                },
                {
                    nome: "Figueirópolis D'Oeste",
                    uf: "MT",
                    ibge: "5103809"
                },
                {
                    nome: "Gaúcha do Norte",
                    uf: "MT",
                    ibge: "5103858"
                },
                {
                    nome: "General Carneiro",
                    uf: "MT",
                    ibge: "5103908"
                },
                {
                    nome: "Glória D'Oeste",
                    uf: "MT",
                    ibge: "5103957"
                },
                {
                    nome: "Guarantã do Norte",
                    uf: "MT",
                    ibge: "5104104"
                },
                {
                    nome: "Guiratinga",
                    uf: "MT",
                    ibge: "5104203"
                },
                {
                    nome: "Indiavaí",
                    uf: "MT",
                    ibge: "5104500"
                },
                {
                    nome: "Ipiranga do Norte",
                    uf: "MT",
                    ibge: "5104526"
                },
                {
                    nome: "Itanhangá",
                    uf: "MT",
                    ibge: "5104542"
                },
                {
                    nome: "Itaúba",
                    uf: "MT",
                    ibge: "5104559"
                },
                {
                    nome: "Itiquira",
                    uf: "MT",
                    ibge: "5104609"
                },
                {
                    nome: "Jaciara",
                    uf: "MT",
                    ibge: "5104807"
                },
                {
                    nome: "Jangada",
                    uf: "MT",
                    ibge: "5104906"
                },
                {
                    nome: "Jauru",
                    uf: "MT",
                    ibge: "5105002"
                },
                {
                    nome: "Juara",
                    uf: "MT",
                    ibge: "5105101"
                },
                {
                    nome: "Juína",
                    uf: "MT",
                    ibge: "5105150"
                },
                {
                    nome: "Juruena",
                    uf: "MT",
                    ibge: "5105176"
                },
                {
                    nome: "Juscimeira",
                    uf: "MT",
                    ibge: "5105200"
                },
                {
                    nome: "Lambari D'Oeste",
                    uf: "MT",
                    ibge: "5105234"
                },
                {
                    nome: "Lucas do Rio Verde",
                    uf: "MT",
                    ibge: "5105259"
                },
                {
                    nome: "Luciara",
                    uf: "MT",
                    ibge: "5105309"
                },
                {
                    nome: "Vila Bela da Santíssima Trindade",
                    uf: "MT",
                    ibge: "5105507"
                },
                {
                    nome: "Marcelândia",
                    uf: "MT",
                    ibge: "5105580"
                },
                {
                    nome: "Matupá",
                    uf: "MT",
                    ibge: "5105606"
                },
                {
                    nome: "Mirassol D'Oeste",
                    uf: "MT",
                    ibge: "5105622"
                },
                {
                    nome: "Nobres",
                    uf: "MT",
                    ibge: "5105903"
                },
                {
                    nome: "Nortelândia",
                    uf: "MT",
                    ibge: "5106000"
                },
                {
                    nome: "Nossa Senhora do Livramento",
                    uf: "MT",
                    ibge: "5106109"
                },
                {
                    nome: "Nova Bandeirantes",
                    uf: "MT",
                    ibge: "5106158"
                },
                {
                    nome: "Nova Nazaré",
                    uf: "MT",
                    ibge: "5106174"
                },
                {
                    nome: "Nova Lacerda",
                    uf: "MT",
                    ibge: "5106182"
                },
                {
                    nome: "Nova Santa Helena",
                    uf: "MT",
                    ibge: "5106190"
                },
                {
                    nome: "Nova Brasilândia",
                    uf: "MT",
                    ibge: "5106208"
                },
                {
                    nome: "Nova Canaã do Norte",
                    uf: "MT",
                    ibge: "5106216"
                },
                {
                    nome: "Nova Mutum",
                    uf: "MT",
                    ibge: "5106224"
                },
                {
                    nome: "Nova Olímpia",
                    uf: "MT",
                    ibge: "5106232"
                },
                {
                    nome: "Nova Ubiratã",
                    uf: "MT",
                    ibge: "5106240"
                },
                {
                    nome: "Nova Xavantina",
                    uf: "MT",
                    ibge: "5106257"
                },
                {
                    nome: "Novo Mundo",
                    uf: "MT",
                    ibge: "5106265"
                },
                {
                    nome: "Novo Horizonte do Norte",
                    uf: "MT",
                    ibge: "5106273"
                },
                {
                    nome: "Novo São Joaquim",
                    uf: "MT",
                    ibge: "5106281"
                },
                {
                    nome: "Paranaíta",
                    uf: "MT",
                    ibge: "5106299"
                },
                {
                    nome: "Paranatinga",
                    uf: "MT",
                    ibge: "5106307"
                },
                {
                    nome: "Novo Santo Antônio",
                    uf: "MT",
                    ibge: "5106315"
                },
                {
                    nome: "Pedra Preta",
                    uf: "MT",
                    ibge: "5106372"
                },
                {
                    nome: "Peixoto de Azevedo",
                    uf: "MT",
                    ibge: "5106422"
                },
                {
                    nome: "Planalto da Serra",
                    uf: "MT",
                    ibge: "5106455"
                },
                {
                    nome: "Poconé",
                    uf: "MT",
                    ibge: "5106505"
                },
                {
                    nome: "Pontal do Araguaia",
                    uf: "MT",
                    ibge: "5106653"
                },
                {
                    nome: "Ponte Branca",
                    uf: "MT",
                    ibge: "5106703"
                },
                {
                    nome: "Pontes e Lacerda",
                    uf: "MT",
                    ibge: "5106752"
                },
                {
                    nome: "Porto Alegre do Norte",
                    uf: "MT",
                    ibge: "5106778"
                },
                {
                    nome: "Porto dos Gaúchos",
                    uf: "MT",
                    ibge: "5106802"
                },
                {
                    nome: "Porto Esperidião",
                    uf: "MT",
                    ibge: "5106828"
                },
                {
                    nome: "Porto Estrela",
                    uf: "MT",
                    ibge: "5106851"
                },
                {
                    nome: "Poxoréo",
                    uf: "MT",
                    ibge: "5107008"
                },
                {
                    nome: "Primavera do Leste",
                    uf: "MT",
                    ibge: "5107040"
                },
                {
                    nome: "Querência",
                    uf: "MT",
                    ibge: "5107065"
                },
                {
                    nome: "São José dos Quatro Marcos",
                    uf: "MT",
                    ibge: "5107107"
                },
                {
                    nome: "Reserva do Cabaçal",
                    uf: "MT",
                    ibge: "5107156"
                },
                {
                    nome: "Ribeirão Cascalheira",
                    uf: "MT",
                    ibge: "5107180"
                },
                {
                    nome: "Ribeirãozinho",
                    uf: "MT",
                    ibge: "5107198"
                },
                {
                    nome: "Rio Branco",
                    uf: "MT",
                    ibge: "5107206"
                },
                {
                    nome: "Santa Carmem",
                    uf: "MT",
                    ibge: "5107248"
                },
                {
                    nome: "Santo Afonso",
                    uf: "MT",
                    ibge: "5107263"
                },
                {
                    nome: "São José do Povo",
                    uf: "MT",
                    ibge: "5107297"
                },
                {
                    nome: "São José do Rio Claro",
                    uf: "MT",
                    ibge: "5107305"
                },
                {
                    nome: "São José do Xingu",
                    uf: "MT",
                    ibge: "5107354"
                },
                {
                    nome: "São Pedro da Cipa",
                    uf: "MT",
                    ibge: "5107404"
                },
                {
                    nome: "Rondolândia",
                    uf: "MT",
                    ibge: "5107578"
                },
                {
                    nome: "Rondonópolis",
                    uf: "MT",
                    ibge: "5107602"
                },
                {
                    nome: "Rosário Oeste",
                    uf: "MT",
                    ibge: "5107701"
                },
                {
                    nome: "Santa Cruz do Xingu",
                    uf: "MT",
                    ibge: "5107743"
                },
                {
                    nome: "Salto do Céu",
                    uf: "MT",
                    ibge: "5107750"
                },
                {
                    nome: "Santa Rita do Trivelato",
                    uf: "MT",
                    ibge: "5107768"
                },
                {
                    nome: "Santa Terezinha",
                    uf: "MT",
                    ibge: "5107776"
                },
                {
                    nome: "Santo Antônio do Leste",
                    uf: "MT",
                    ibge: "5107792"
                },
                {
                    nome: "Santo Antônio do Leverger",
                    uf: "MT",
                    ibge: "5107800"
                },
                {
                    nome: "São Félix do Araguaia",
                    uf: "MT",
                    ibge: "5107859"
                },
                {
                    nome: "Sapezal",
                    uf: "MT",
                    ibge: "5107875"
                },
                {
                    nome: "Serra Nova Dourada",
                    uf: "MT",
                    ibge: "5107883"
                },
                {
                    nome: "Sinop",
                    uf: "MT",
                    ibge: "5107909"
                },
                {
                    nome: "Sorriso",
                    uf: "MT",
                    ibge: "5107925"
                },
                {
                    nome: "Tabaporã",
                    uf: "MT",
                    ibge: "5107941"
                },
                {
                    nome: "Tangará da Serra",
                    uf: "MT",
                    ibge: "5107958"
                },
                {
                    nome: "Tapurah",
                    uf: "MT",
                    ibge: "5108006"
                },
                {
                    nome: "Terra Nova do Norte",
                    uf: "MT",
                    ibge: "5108055"
                },
                {
                    nome: "Tesouro",
                    uf: "MT",
                    ibge: "5108105"
                },
                {
                    nome: "Torixoréu",
                    uf: "MT",
                    ibge: "5108204"
                },
                {
                    nome: "União do Sul",
                    uf: "MT",
                    ibge: "5108303"
                },
                {
                    nome: "Vale de São Domingos",
                    uf: "MT",
                    ibge: "5108352"
                },
                {
                    nome: "Várzea Grande",
                    uf: "MT",
                    ibge: "5108402"
                },
                {
                    nome: "Vera",
                    uf: "MT",
                    ibge: "5108501"
                },
                {
                    nome: "Vila Rica",
                    uf: "MT",
                    ibge: "5108600"
                },
                {
                    nome: "Nova Guarita",
                    uf: "MT",
                    ibge: "5108808"
                },
                {
                    nome: "Nova Marilândia",
                    uf: "MT",
                    ibge: "5108857"
                },
                {
                    nome: "Nova Maringá",
                    uf: "MT",
                    ibge: "5108907"
                },
                {
                    nome: "Nova Monte Verde",
                    uf: "MT",
                    ibge: "5108956"
                },
                {
                    nome: "Abadia de Goiás",
                    uf: "GO",
                    ibge: "5200050"
                },
                {
                    nome: "Abadiânia",
                    uf: "GO",
                    ibge: "5200100"
                },
                {
                    nome: "Acreúna",
                    uf: "GO",
                    ibge: "5200134"
                },
                {
                    nome: "Adelândia",
                    uf: "GO",
                    ibge: "5200159"
                },
                {
                    nome: "Água Fria de Goiás",
                    uf: "GO",
                    ibge: "5200175"
                },
                {
                    nome: "Água Limpa",
                    uf: "GO",
                    ibge: "5200209"
                },
                {
                    nome: "Águas Lindas de Goiás",
                    uf: "GO",
                    ibge: "5200258"
                },
                {
                    nome: "Alexânia",
                    uf: "GO",
                    ibge: "5200308"
                },
                {
                    nome: "Aloândia",
                    uf: "GO",
                    ibge: "5200506"
                },
                {
                    nome: "Alto Horizonte",
                    uf: "GO",
                    ibge: "5200555"
                },
                {
                    nome: "Alto Paraíso de Goiás",
                    uf: "GO",
                    ibge: "5200605"
                },
                {
                    nome: "Alvorada do Norte",
                    uf: "GO",
                    ibge: "5200803"
                },
                {
                    nome: "Amaralina",
                    uf: "GO",
                    ibge: "5200829"
                },
                {
                    nome: "Americano do Brasil",
                    uf: "GO",
                    ibge: "5200852"
                },
                {
                    nome: "Amorinópolis",
                    uf: "GO",
                    ibge: "5200902"
                },
                {
                    nome: "Anápolis",
                    uf: "GO",
                    ibge: "5201108"
                },
                {
                    nome: "Anhanguera",
                    uf: "GO",
                    ibge: "5201207"
                },
                {
                    nome: "Anicuns",
                    uf: "GO",
                    ibge: "5201306"
                },
                {
                    nome: "Aparecida de Goiânia",
                    uf: "GO",
                    ibge: "5201405"
                },
                {
                    nome: "Aparecida do Rio Doce",
                    uf: "GO",
                    ibge: "5201454"
                },
                {
                    nome: "Aporé",
                    uf: "GO",
                    ibge: "5201504"
                },
                {
                    nome: "Araçu",
                    uf: "GO",
                    ibge: "5201603"
                },
                {
                    nome: "Aragarças",
                    uf: "GO",
                    ibge: "5201702"
                },
                {
                    nome: "Aragoiânia",
                    uf: "GO",
                    ibge: "5201801"
                },
                {
                    nome: "Araguapaz",
                    uf: "GO",
                    ibge: "5202155"
                },
                {
                    nome: "Arenópolis",
                    uf: "GO",
                    ibge: "5202353"
                },
                {
                    nome: "Aruanã",
                    uf: "GO",
                    ibge: "5202502"
                },
                {
                    nome: "Aurilândia",
                    uf: "GO",
                    ibge: "5202601"
                },
                {
                    nome: "Avelinópolis",
                    uf: "GO",
                    ibge: "5202809"
                },
                {
                    nome: "Baliza",
                    uf: "GO",
                    ibge: "5203104"
                },
                {
                    nome: "Barro Alto",
                    uf: "GO",
                    ibge: "5203203"
                },
                {
                    nome: "Bela Vista de Goiás",
                    uf: "GO",
                    ibge: "5203302"
                },
                {
                    nome: "Bom Jardim de Goiás",
                    uf: "GO",
                    ibge: "5203401"
                },
                {
                    nome: "Bom Jesus de Goiás",
                    uf: "GO",
                    ibge: "5203500"
                },
                {
                    nome: "Bonfinópolis",
                    uf: "GO",
                    ibge: "5203559"
                },
                {
                    nome: "Bonópolis",
                    uf: "GO",
                    ibge: "5203575"
                },
                {
                    nome: "Brazabrantes",
                    uf: "GO",
                    ibge: "5203609"
                },
                {
                    nome: "Britânia",
                    uf: "GO",
                    ibge: "5203807"
                },
                {
                    nome: "Buriti Alegre",
                    uf: "GO",
                    ibge: "5203906"
                },
                {
                    nome: "Buriti de Goiás",
                    uf: "GO",
                    ibge: "5203939"
                },
                {
                    nome: "Buritinópolis",
                    uf: "GO",
                    ibge: "5203962"
                },
                {
                    nome: "Cabeceiras",
                    uf: "GO",
                    ibge: "5204003"
                },
                {
                    nome: "Cachoeira Alta",
                    uf: "GO",
                    ibge: "5204102"
                },
                {
                    nome: "Cachoeira de Goiás",
                    uf: "GO",
                    ibge: "5204201"
                },
                {
                    nome: "Cachoeira Dourada",
                    uf: "GO",
                    ibge: "5204250"
                },
                {
                    nome: "Caçu",
                    uf: "GO",
                    ibge: "5204300"
                },
                {
                    nome: "Caiapônia",
                    uf: "GO",
                    ibge: "5204409"
                },
                {
                    nome: "Caldas Novas",
                    uf: "GO",
                    ibge: "5204508"
                },
                {
                    nome: "Caldazinha",
                    uf: "GO",
                    ibge: "5204557"
                },
                {
                    nome: "Campestre de Goiás",
                    uf: "GO",
                    ibge: "5204607"
                },
                {
                    nome: "Campinaçu",
                    uf: "GO",
                    ibge: "5204656"
                },
                {
                    nome: "Campinorte",
                    uf: "GO",
                    ibge: "5204706"
                },
                {
                    nome: "Campo Alegre de Goiás",
                    uf: "GO",
                    ibge: "5204805"
                },
                {
                    nome: "Campo Limpo de Goiás",
                    uf: "GO",
                    ibge: "5204854"
                },
                {
                    nome: "Campos Belos",
                    uf: "GO",
                    ibge: "5204904"
                },
                {
                    nome: "Campos Verdes",
                    uf: "GO",
                    ibge: "5204953"
                },
                {
                    nome: "Carmo do Rio Verde",
                    uf: "GO",
                    ibge: "5205000"
                },
                {
                    nome: "Castelândia",
                    uf: "GO",
                    ibge: "5205059"
                },
                {
                    nome: "Catalão",
                    uf: "GO",
                    ibge: "5205109"
                },
                {
                    nome: "Caturaí",
                    uf: "GO",
                    ibge: "5205208"
                },
                {
                    nome: "Cavalcante",
                    uf: "GO",
                    ibge: "5205307"
                },
                {
                    nome: "Ceres",
                    uf: "GO",
                    ibge: "5205406"
                },
                {
                    nome: "Cezarina",
                    uf: "GO",
                    ibge: "5205455"
                },
                {
                    nome: "Chapadão do Céu",
                    uf: "GO",
                    ibge: "5205471"
                },
                {
                    nome: "Cidade Ocidental",
                    uf: "GO",
                    ibge: "5205497"
                },
                {
                    nome: "Cocalzinho de Goiás",
                    uf: "GO",
                    ibge: "5205513"
                },
                {
                    nome: "Colinas do Sul",
                    uf: "GO",
                    ibge: "5205521"
                },
                {
                    nome: "Córrego do Ouro",
                    uf: "GO",
                    ibge: "5205703"
                },
                {
                    nome: "Corumbá de Goiás",
                    uf: "GO",
                    ibge: "5205802"
                },
                {
                    nome: "Corumbaíba",
                    uf: "GO",
                    ibge: "5205901"
                },
                {
                    nome: "Cristalina",
                    uf: "GO",
                    ibge: "5206206"
                },
                {
                    nome: "Cristianópolis",
                    uf: "GO",
                    ibge: "5206305"
                },
                {
                    nome: "Crixás",
                    uf: "GO",
                    ibge: "5206404"
                },
                {
                    nome: "Cromínia",
                    uf: "GO",
                    ibge: "5206503"
                },
                {
                    nome: "Cumari",
                    uf: "GO",
                    ibge: "5206602"
                },
                {
                    nome: "Damianópolis",
                    uf: "GO",
                    ibge: "5206701"
                },
                {
                    nome: "Damolândia",
                    uf: "GO",
                    ibge: "5206800"
                },
                {
                    nome: "Davinópolis",
                    uf: "GO",
                    ibge: "5206909"
                },
                {
                    nome: "Diorama",
                    uf: "GO",
                    ibge: "5207105"
                },
                {
                    nome: "Doverlândia",
                    uf: "GO",
                    ibge: "5207253"
                },
                {
                    nome: "Edealina",
                    uf: "GO",
                    ibge: "5207352"
                },
                {
                    nome: "Edéia",
                    uf: "GO",
                    ibge: "5207402"
                },
                {
                    nome: "Estrela do Norte",
                    uf: "GO",
                    ibge: "5207501"
                },
                {
                    nome: "Faina",
                    uf: "GO",
                    ibge: "5207535"
                },
                {
                    nome: "Fazenda Nova",
                    uf: "GO",
                    ibge: "5207600"
                },
                {
                    nome: "Firminópolis",
                    uf: "GO",
                    ibge: "5207808"
                },
                {
                    nome: "Flores de Goiás",
                    uf: "GO",
                    ibge: "5207907"
                },
                {
                    nome: "Formosa",
                    uf: "GO",
                    ibge: "5208004"
                },
                {
                    nome: "Formoso",
                    uf: "GO",
                    ibge: "5208103"
                },
                {
                    nome: "Gameleira de Goiás",
                    uf: "GO",
                    ibge: "5208152"
                },
                {
                    nome: "Divinópolis de Goiás",
                    uf: "GO",
                    ibge: "5208301"
                },
                {
                    nome: "Goianápolis",
                    uf: "GO",
                    ibge: "5208400"
                },
                {
                    nome: "Goiandira",
                    uf: "GO",
                    ibge: "5208509"
                },
                {
                    nome: "Goianésia",
                    uf: "GO",
                    ibge: "5208608"
                },
                {
                    nome: "Goiânia",
                    uf: "GO",
                    ibge: "5208707"
                },
                {
                    nome: "Goianira",
                    uf: "GO",
                    ibge: "5208806"
                },
                {
                    nome: "Goiás",
                    uf: "GO",
                    ibge: "5208905"
                },
                {
                    nome: "Goiatuba",
                    uf: "GO",
                    ibge: "5209101"
                },
                {
                    nome: "Gouvelândia",
                    uf: "GO",
                    ibge: "5209150"
                },
                {
                    nome: "Guapó",
                    uf: "GO",
                    ibge: "5209200"
                },
                {
                    nome: "Guaraíta",
                    uf: "GO",
                    ibge: "5209291"
                },
                {
                    nome: "Guarani de Goiás",
                    uf: "GO",
                    ibge: "5209408"
                },
                {
                    nome: "Guarinos",
                    uf: "GO",
                    ibge: "5209457"
                },
                {
                    nome: "Heitoraí",
                    uf: "GO",
                    ibge: "5209606"
                },
                {
                    nome: "Hidrolândia",
                    uf: "GO",
                    ibge: "5209705"
                },
                {
                    nome: "Hidrolina",
                    uf: "GO",
                    ibge: "5209804"
                },
                {
                    nome: "Iaciara",
                    uf: "GO",
                    ibge: "5209903"
                },
                {
                    nome: "Inaciolândia",
                    uf: "GO",
                    ibge: "5209937"
                },
                {
                    nome: "Indiara",
                    uf: "GO",
                    ibge: "5209952"
                },
                {
                    nome: "Inhumas",
                    uf: "GO",
                    ibge: "5210000"
                },
                {
                    nome: "Ipameri",
                    uf: "GO",
                    ibge: "5210109"
                },
                {
                    nome: "Ipiranga de Goiás",
                    uf: "GO",
                    ibge: "5210158"
                },
                {
                    nome: "Iporá",
                    uf: "GO",
                    ibge: "5210208"
                },
                {
                    nome: "Israelândia",
                    uf: "GO",
                    ibge: "5210307"
                },
                {
                    nome: "Itaberaí",
                    uf: "GO",
                    ibge: "5210406"
                },
                {
                    nome: "Itaguari",
                    uf: "GO",
                    ibge: "5210562"
                },
                {
                    nome: "Itaguaru",
                    uf: "GO",
                    ibge: "5210604"
                },
                {
                    nome: "Itajá",
                    uf: "GO",
                    ibge: "5210802"
                },
                {
                    nome: "Itapaci",
                    uf: "GO",
                    ibge: "5210901"
                },
                {
                    nome: "Itapirapuã",
                    uf: "GO",
                    ibge: "5211008"
                },
                {
                    nome: "Itapuranga",
                    uf: "GO",
                    ibge: "5211206"
                },
                {
                    nome: "Itarumã",
                    uf: "GO",
                    ibge: "5211305"
                },
                {
                    nome: "Itauçu",
                    uf: "GO",
                    ibge: "5211404"
                },
                {
                    nome: "Itumbiara",
                    uf: "GO",
                    ibge: "5211503"
                },
                {
                    nome: "Ivolândia",
                    uf: "GO",
                    ibge: "5211602"
                },
                {
                    nome: "Jandaia",
                    uf: "GO",
                    ibge: "5211701"
                },
                {
                    nome: "Jaraguá",
                    uf: "GO",
                    ibge: "5211800"
                },
                {
                    nome: "Jataí",
                    uf: "GO",
                    ibge: "5211909"
                },
                {
                    nome: "Jaupaci",
                    uf: "GO",
                    ibge: "5212006"
                },
                {
                    nome: "Jesúpolis",
                    uf: "GO",
                    ibge: "5212055"
                },
                {
                    nome: "Joviânia",
                    uf: "GO",
                    ibge: "5212105"
                },
                {
                    nome: "Jussara",
                    uf: "GO",
                    ibge: "5212204"
                },
                {
                    nome: "Lagoa Santa",
                    uf: "GO",
                    ibge: "5212253"
                },
                {
                    nome: "Leopoldo de Bulhões",
                    uf: "GO",
                    ibge: "5212303"
                },
                {
                    nome: "Luziânia",
                    uf: "GO",
                    ibge: "5212501"
                },
                {
                    nome: "Mairipotaba",
                    uf: "GO",
                    ibge: "5212600"
                },
                {
                    nome: "Mambaí",
                    uf: "GO",
                    ibge: "5212709"
                },
                {
                    nome: "Mara Rosa",
                    uf: "GO",
                    ibge: "5212808"
                },
                {
                    nome: "Marzagão",
                    uf: "GO",
                    ibge: "5212907"
                },
                {
                    nome: "Matrinchã",
                    uf: "GO",
                    ibge: "5212956"
                },
                {
                    nome: "Maurilândia",
                    uf: "GO",
                    ibge: "5213004"
                },
                {
                    nome: "Mimoso de Goiás",
                    uf: "GO",
                    ibge: "5213053"
                },
                {
                    nome: "Minaçu",
                    uf: "GO",
                    ibge: "5213087"
                },
                {
                    nome: "Mineiros",
                    uf: "GO",
                    ibge: "5213103"
                },
                {
                    nome: "Moiporá",
                    uf: "GO",
                    ibge: "5213400"
                },
                {
                    nome: "Monte Alegre de Goiás",
                    uf: "GO",
                    ibge: "5213509"
                },
                {
                    nome: "Montes Claros de Goiás",
                    uf: "GO",
                    ibge: "5213707"
                },
                {
                    nome: "Montividiu",
                    uf: "GO",
                    ibge: "5213756"
                },
                {
                    nome: "Montividiu do Norte",
                    uf: "GO",
                    ibge: "5213772"
                },
                {
                    nome: "Morrinhos",
                    uf: "GO",
                    ibge: "5213806"
                },
                {
                    nome: "Morro Agudo de Goiás",
                    uf: "GO",
                    ibge: "5213855"
                },
                {
                    nome: "Mossâmedes",
                    uf: "GO",
                    ibge: "5213905"
                },
                {
                    nome: "Mozarlândia",
                    uf: "GO",
                    ibge: "5214002"
                },
                {
                    nome: "Mundo Novo",
                    uf: "GO",
                    ibge: "5214051"
                },
                {
                    nome: "Mutunópolis",
                    uf: "GO",
                    ibge: "5214101"
                },
                {
                    nome: "Nazário",
                    uf: "GO",
                    ibge: "5214408"
                },
                {
                    nome: "Nerópolis",
                    uf: "GO",
                    ibge: "5214507"
                },
                {
                    nome: "Niquelândia",
                    uf: "GO",
                    ibge: "5214606"
                },
                {
                    nome: "Nova América",
                    uf: "GO",
                    ibge: "5214705"
                },
                {
                    nome: "Nova Aurora",
                    uf: "GO",
                    ibge: "5214804"
                },
                {
                    nome: "Nova Crixás",
                    uf: "GO",
                    ibge: "5214838"
                },
                {
                    nome: "Nova Glória",
                    uf: "GO",
                    ibge: "5214861"
                },
                {
                    nome: "Nova Iguaçu de Goiás",
                    uf: "GO",
                    ibge: "5214879"
                },
                {
                    nome: "Nova Roma",
                    uf: "GO",
                    ibge: "5214903"
                },
                {
                    nome: "Nova Veneza",
                    uf: "GO",
                    ibge: "5215009"
                },
                {
                    nome: "Novo Brasil",
                    uf: "GO",
                    ibge: "5215207"
                },
                {
                    nome: "Novo Gama",
                    uf: "GO",
                    ibge: "5215231"
                },
                {
                    nome: "Novo Planalto",
                    uf: "GO",
                    ibge: "5215256"
                },
                {
                    nome: "Orizona",
                    uf: "GO",
                    ibge: "5215306"
                },
                {
                    nome: "Ouro Verde de Goiás",
                    uf: "GO",
                    ibge: "5215405"
                },
                {
                    nome: "Ouvidor",
                    uf: "GO",
                    ibge: "5215504"
                },
                {
                    nome: "Padre Bernardo",
                    uf: "GO",
                    ibge: "5215603"
                },
                {
                    nome: "Palestina de Goiás",
                    uf: "GO",
                    ibge: "5215652"
                },
                {
                    nome: "Palmeiras de Goiás",
                    uf: "GO",
                    ibge: "5215702"
                },
                {
                    nome: "Palmelo",
                    uf: "GO",
                    ibge: "5215801"
                },
                {
                    nome: "Palminópolis",
                    uf: "GO",
                    ibge: "5215900"
                },
                {
                    nome: "Panamá",
                    uf: "GO",
                    ibge: "5216007"
                },
                {
                    nome: "Paranaiguara",
                    uf: "GO",
                    ibge: "5216304"
                },
                {
                    nome: "Paraúna",
                    uf: "GO",
                    ibge: "5216403"
                },
                {
                    nome: "Perolândia",
                    uf: "GO",
                    ibge: "5216452"
                },
                {
                    nome: "Petrolina de Goiás",
                    uf: "GO",
                    ibge: "5216809"
                },
                {
                    nome: "Pilar de Goiás",
                    uf: "GO",
                    ibge: "5216908"
                },
                {
                    nome: "Piracanjuba",
                    uf: "GO",
                    ibge: "5217104"
                },
                {
                    nome: "Piranhas",
                    uf: "GO",
                    ibge: "5217203"
                },
                {
                    nome: "Pirenópolis",
                    uf: "GO",
                    ibge: "5217302"
                },
                {
                    nome: "Pires do Rio",
                    uf: "GO",
                    ibge: "5217401"
                },
                {
                    nome: "Planaltina",
                    uf: "GO",
                    ibge: "5217609"
                },
                {
                    nome: "Pontalina",
                    uf: "GO",
                    ibge: "5217708"
                },
                {
                    nome: "Porangatu",
                    uf: "GO",
                    ibge: "5218003"
                },
                {
                    nome: "Porteirão",
                    uf: "GO",
                    ibge: "5218052"
                },
                {
                    nome: "Portelândia",
                    uf: "GO",
                    ibge: "5218102"
                },
                {
                    nome: "Posse",
                    uf: "GO",
                    ibge: "5218300"
                },
                {
                    nome: "Professor Jamil",
                    uf: "GO",
                    ibge: "5218391"
                },
                {
                    nome: "Quirinópolis",
                    uf: "GO",
                    ibge: "5218508"
                },
                {
                    nome: "Rialma",
                    uf: "GO",
                    ibge: "5218607"
                },
                {
                    nome: "Rianápolis",
                    uf: "GO",
                    ibge: "5218706"
                },
                {
                    nome: "Rio Quente",
                    uf: "GO",
                    ibge: "5218789"
                },
                {
                    nome: "Rio Verde",
                    uf: "GO",
                    ibge: "5218805"
                },
                {
                    nome: "Rubiataba",
                    uf: "GO",
                    ibge: "5218904"
                },
                {
                    nome: "Sanclerlândia",
                    uf: "GO",
                    ibge: "5219001"
                },
                {
                    nome: "Santa Bárbara de Goiás",
                    uf: "GO",
                    ibge: "5219100"
                },
                {
                    nome: "Santa Cruz de Goiás",
                    uf: "GO",
                    ibge: "5219209"
                },
                {
                    nome: "Santa Fé de Goiás",
                    uf: "GO",
                    ibge: "5219258"
                },
                {
                    nome: "Santa Helena de Goiás",
                    uf: "GO",
                    ibge: "5219308"
                },
                {
                    nome: "Santa Isabel",
                    uf: "GO",
                    ibge: "5219357"
                },
                {
                    nome: "Santa Rita do Araguaia",
                    uf: "GO",
                    ibge: "5219407"
                },
                {
                    nome: "Santa Rita do Novo Destino",
                    uf: "GO",
                    ibge: "5219456"
                },
                {
                    nome: "Santa Rosa de Goiás",
                    uf: "GO",
                    ibge: "5219506"
                },
                {
                    nome: "Santa Tereza de Goiás",
                    uf: "GO",
                    ibge: "5219605"
                },
                {
                    nome: "Santa Terezinha de Goiás",
                    uf: "GO",
                    ibge: "5219704"
                },
                {
                    nome: "Santo Antônio da Barra",
                    uf: "GO",
                    ibge: "5219712"
                },
                {
                    nome: "Santo Antônio de Goiás",
                    uf: "GO",
                    ibge: "5219738"
                },
                {
                    nome: "Santo Antônio do Descoberto",
                    uf: "GO",
                    ibge: "5219753"
                },
                {
                    nome: "São Domingos",
                    uf: "GO",
                    ibge: "5219803"
                },
                {
                    nome: "São Francisco de Goiás",
                    uf: "GO",
                    ibge: "5219902"
                },
                {
                    nome: "São João D'Aliança",
                    uf: "GO",
                    ibge: "5220009"
                },
                {
                    nome: "São João da Paraúna",
                    uf: "GO",
                    ibge: "5220058"
                },
                {
                    nome: "São Luís de Montes Belos",
                    uf: "GO",
                    ibge: "5220108"
                },
                {
                    nome: "São Luíz do Norte",
                    uf: "GO",
                    ibge: "5220157"
                },
                {
                    nome: "São Miguel do Araguaia",
                    uf: "GO",
                    ibge: "5220207"
                },
                {
                    nome: "São Miguel do Passa Quatro",
                    uf: "GO",
                    ibge: "5220264"
                },
                {
                    nome: "São Patrício",
                    uf: "GO",
                    ibge: "5220280"
                },
                {
                    nome: "São Simão",
                    uf: "GO",
                    ibge: "5220405"
                },
                {
                    nome: "Senador Canedo",
                    uf: "GO",
                    ibge: "5220454"
                },
                {
                    nome: "Serranópolis",
                    uf: "GO",
                    ibge: "5220504"
                },
                {
                    nome: "Silvânia",
                    uf: "GO",
                    ibge: "5220603"
                },
                {
                    nome: "Simolândia",
                    uf: "GO",
                    ibge: "5220686"
                },
                {
                    nome: "Sítio D'Abadia",
                    uf: "GO",
                    ibge: "5220702"
                },
                {
                    nome: "Taquaral de Goiás",
                    uf: "GO",
                    ibge: "5221007"
                },
                {
                    nome: "Teresina de Goiás",
                    uf: "GO",
                    ibge: "5221080"
                },
                {
                    nome: "Terezópolis de Goiás",
                    uf: "GO",
                    ibge: "5221197"
                },
                {
                    nome: "Três Ranchos",
                    uf: "GO",
                    ibge: "5221304"
                },
                {
                    nome: "Trindade",
                    uf: "GO",
                    ibge: "5221403"
                },
                {
                    nome: "Trombas",
                    uf: "GO",
                    ibge: "5221452"
                },
                {
                    nome: "Turvânia",
                    uf: "GO",
                    ibge: "5221502"
                },
                {
                    nome: "Turvelândia",
                    uf: "GO",
                    ibge: "5221551"
                },
                {
                    nome: "Uirapuru",
                    uf: "GO",
                    ibge: "5221577"
                },
                {
                    nome: "Uruaçu",
                    uf: "GO",
                    ibge: "5221601"
                },
                {
                    nome: "Uruana",
                    uf: "GO",
                    ibge: "5221700"
                },
                {
                    nome: "Urutaí",
                    uf: "GO",
                    ibge: "5221809"
                },
                {
                    nome: "Valparaíso de Goiás",
                    uf: "GO",
                    ibge: "5221858"
                },
                {
                    nome: "Varjão",
                    uf: "GO",
                    ibge: "5221908"
                },
                {
                    nome: "Vianópolis",
                    uf: "GO",
                    ibge: "5222005"
                },
                {
                    nome: "Vicentinópolis",
                    uf: "GO",
                    ibge: "5222054"
                },
                {
                    nome: "Vila Boa",
                    uf: "GO",
                    ibge: "5222203"
                },
                {
                    nome: "Vila Propício",
                    uf: "GO",
                    ibge: "5222302"
                },
                {
                    nome: "Brasília",
                    uf: "DF",
                    ibge: "5300108"
                }
            ]
        })
    });
};

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prismaClient.$disconnect();
    });