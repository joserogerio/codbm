angular.module('starter.config', [])
.constant('DB_CONFIG', {
    name: 'cod_bm',
    tables: [
		{
         name: 'type',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'code', type: 'text'}
            ]
      },
		{
            name: 'local',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'type_id', type: 'integer'},
                {name: 'code', type: 'text'}
            ]
      },
		{
      name: '_group',
      columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'code', type: 'text'}
            ]
      },        
		{
            name: 'subgroup',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'name', type: 'text'},
                {name: 'group_id', type: 'integer'},
                {name: 'code', type: 'text'}
            ]
        },        
		{
			name: 'natureza',
			columns: [
				{name: 'id', type: 'integer primary key'},
				{name: 'name', type: 'text'},
				{name: 'subgroup_id', type: 'integer'},
				{name: 'code', type: 'text'}
			]		
		},
      {
         name: 'configuration',
         columns: [
            {name: 'version', type: 'text'}
         ]
      }
    ],
   inserts: [
      {value: "INSERT INTO configuration(version) VALUES('201601272154');"},
      {value: "INSERT INTO type(id, name, code) VALUES(1453722786317,'LOGRADOURO PÚBLICO','1');"},
      {value: "INSERT INTO type(id, name, code) VALUES(1453722809795,'MEIO AQUÁTICO','2');"},
      {value: "INSERT INTO type(id, name, code) VALUES(1453722821518,'VEGETAÇÃO','3');"},
      {value: "INSERT INTO type(id, name, code) VALUES(1453722833917,'EDIFICAÇÃO','4');"},
      {value: "INSERT INTO type(id, name, code) VALUES(1453723022203,'MEIOS DE TRANSPORTE','5');"},

      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453891522351,'BECO',1453722786317,'101');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453891522352,'ESCADARIA',1453722786317,'102');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453891522353,'FERROVIA',1453722786317,'103');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453891522354,'PRAÇA',1453722786317,'104');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079504,'ESTRADA',1453722786317,'105');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079532,'RODOVIA',1453722786317,'106');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079533,'VIA DE TRÂNSITO RÁPIDO',1453722786317,'107');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079534,'VIA ARTERIAL',1453722786317,'108');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079535,'VIA COLETORA',1453722786317,'109');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892079536,'VIA LOCAL',1453722786317,'110');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453892140358,'OUTRO/LOGRADOURO',1453722786317,'199');"},

      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399601,'AÇUDE, BARRAGEM OU REPRESA',1453722809795,'202');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399624,'CACIMBA',1453722809795,'203');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399625,'CORREGO',1453722809795,'204');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399626,'CISTERNA',1453722809795,'205');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399627,'LAGO OU LAGOA',1453722809795,'206');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893399628,'PISCINA',1453722809795,'207');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893493311,'RESERVATÓRIO ELEVADO (CAIXA D'ÁGUA)',1453722809795,'208');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893493342,'RIO OU RIACHO',1453722809795,'209');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453893493343,'OUTRO/MEIO AQUÁTICO',1453722809795,'299');"},

      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264354,'CULTURA AGRÍCOLA',1453722821518,'301');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264376,'VEGETAÇÃO NATIVA',1453722821518,'302');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264377,'VEGETAÇÃO ALTERADA',1453722821518,'303');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264378,'PARQUE(MUNICIPAL, ESTADUAL, NACIONAL)',1453722821518,'304');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264387,'BOSQUE',1453722821518,'305');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894264389,'OUTRA/VEGETAÇÃO',1453722821518,'399');"},

      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876871,'CONCENTRAÇÃO DE PÚBLICO',1453722833917,'401');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876903,'EDIFICAÇÃO COMERCIAL',1453722833917,'402');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876904,'EDIFICAÇÃO ESPECIAL',1453722833917,'403');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876905,'EDIFICAÇÃO HOSPITALAR',1453722833917,'404');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876906,'EDIFICAÇÃO RESIDENCIAL',1453722833917,'405');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876907,'EDIFICAÇÃO ESCOLAR',1453722833917,'406');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876908,'EDIFICAÇÃO TRANSITÓRIA',1453722833917,'407');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894876909,'DEPÓSITO',1453722833917,'408');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894952071,'EDIFICAÇÃO INDUSTRIAL',1453722833917,'409');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(1453894952102,'OUTRA/EDIFICAÇÃO',1453722833917,'499');"},

      {value: "INSERT INTO local(id, name, type_id, code) VALUES(,'AERONÁVES',1453723022203,'501');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(,'EMBARCAÇÕES',1453723022203,'502');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(,'VEÍCULO DE TRANSPORTE COLETIVO',1453723022203,'503');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(,'VEÍCULO DE PASSEIO',1453723022203,'504');"},
      {value: "INSERT INTO local(id, name, type_id, code) VALUES(,'OUTRO/VEICULOS',1453723022203,'599');"},


      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329434,'ACIDENTES COM VIATURAS','1');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329465,'AÇÕES PREVENTIVAS','2');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329469,'RESGATE','3');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329471,'BUSCA E SALVAMENTO','4');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329474,'DEFESA CIVIL','5');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329475,'INCÊNDIO URBANO','6');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329476,'INCÊNDIO FLORESTAL','7');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453920329478,'PRODUTOS PERIGOSOS','8');"},
      {value: "INSERT INTO _group(id, name, code) VALUES(1453923148390,'PRODUTIVIDADE','10');"},


      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921054430,'ADM.',1453920329434,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921123965,'OPERACIONAL',1453920329434,'02');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921123993,'DIVERSAS',1453920329465,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921123994,'COMUNITÁRIAS',1453920329465,'02');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982592,'ACIDENTE DE TRÂNSITO',1453920329469,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982613,'ACIDENTE ESPORTIVO',1453920329469,'02');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982614,'AGRESSÃO',1453920329469,'03');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982615,'EMERGÊNCIA CLÍNICA',1453920329469,'04');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982616,'EMINENCIA DE AFOGAMENTO',1453920329469,'05');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453921982617,'INTOXICAÇÃO EXÓGENA',1453920329469,'06');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024542,'LESÃO TÉRMICA',1453920329469,'07');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024564,'QUEDA DE ALTURA',1453920329469,'08');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024565,'TENTATIVA DE AUTO-EXTERMINIO',1453920329469,'09');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024566,'TRANSPORTE',1453920329469,'10');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024567,'ACIDENTES PESSOAIS',1453920329469,'11');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922024568,'ACIDENTES DIVERSOS',1453920329469,'12');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234514,'ANIMAIS',1453920329471,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234537,'BENS',1453920329471,'02');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234538,'PESSOAS',1453920329471,'03');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234539,'DIVERSOS',1453920329471,'04');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234540,'CADÁVER',1453920329471,'05');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922234541,'DEFESA CIVIL',1453920329474,'00');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597787,'CONCENTRAÇÃO DE PÚBLICO',1453920329475,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597814,'EDIFICAÇÃO COMERCIAL',1453920329475,'02');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597815,'EDIFICAÇÃO ESPECIAL',1453920329475,'03');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597816,'EDIFICAÇÃO HOSPITALAR',1453920329475,'04');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597817,'EDIFICAÇÃO RESIDENCIAL',1453920329475,'05');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922597818,'EDIFICAÇÃO ESCOLAR',1453920329475,'06');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922639291,'EDIFICAÇÃO TRANSITÓRIA',1453920329475,'07');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922639311,'DEPÓSITO',1453920329475,'08');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922639312,'EDIFICAÇÃO INDUSTRIAL',1453920329475,'09');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922639313,'VEÍCULOS',1453920329475,'10');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453922639314,'DIVERSOS',1453920329475,'11');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453923839705,'CULTURA AGRICOLA',1453920329476,'01');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453923839707,'VEGETAÇÃO',1453920329476,'02');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453924007322,'PRODUTOS PERIGOSOS',1453920329478,'01');"},

      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453924252584,'REGISTRO',1453923148390,'');"},
      {value: "INSERT INTO subgroup(id, name, group_id, code) VALUES(1453924252586,'DESPACHO',1453923148390,'');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453930377694,'ADMINISTRATIVA',1453921054430,'10101');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931134878,'APOIO (AT, AE, APA, ATC, AG)',1453921123965,'10201');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931134903,'INCÊNDIO',1453921123965,'10202');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931134905,'AERONAVE',1453921123965,'10203');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931134908,'RESGATE (UR,USA,MOB,AA)',1453921123965,'10204');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931167058,'SALVAMENTO',1453921123965,'10205');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931167083,'EMBARCAÇÃO (MN,BIS,BS.LS)',1453921123965,'10206');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453931167088,'MISTA',1453921123965,'10207');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933082608,'ABASTECIMENTO COM ÁGUA',1453921123993,'20101');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933082640,'BOMBEIROS MIRINS',1453921123993,'20102');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933082643,'CONDUÇÃO DE ATAÚDE',1453921123993,'20103');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933082645,'DESFILE COM EQUIPES ESPORTIVAS',1453921123993,'20104');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933140793,'DESFILE COM PERSONALIDADES',1453921123993,'20105');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933140818,'ENCHENTE (PROTEÇÃO)',1453921123993,'20106');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933140821,'ESCOAMENTO (PROTEÇÃO)',1453921123993,'20107');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933140823,'FUNERAIS',1453921123993,'20108');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933169249,'IDENTIFICAÇÃO/SINALIZAÇÃO DE ÁREA DE RISCO',1453921123993,'20109');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933169274,'INCLUSÃO SOCIAL',1453921123993,'20110');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933169276,'LIMPEZA DE PISTA',1453921123993,'20111');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933169279,'PARTICIPAÇÃO CÍVICO MILITAR',1453921123993,'20112');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200539,'REPARO OU COLOCAÇÃO DE OBJETO EM NÍVEL SUPERIOR',1453921123993,'20113');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200564,'REPLANTIO DE ÁRVORE',1453921123993,'20114');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200567,'TRANSPORTE DE BENS OU PRODUTOS',1453921123993,'20115');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200572,'ABASTECIMENTO DE AERONAVE',1453921123993,'20116');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200574,'BALIZAMENTO DE EMERGÊNCIA',1453921123993,'20117');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933200577,'EMBARQUE/DESEMBARQUE DE PASSAGEIROS',1453921123993,'20118');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933245500,'POSICIONAMENTO PARA INTERVENÇÃO',1453921123993,'20119');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933245525,'ACEIROS / QUEIMADA CONTROLADA',1453921123993,'20120');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933245530,'OUTRAS / A.P DIVERSAS',1453921123993,'20199');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273430,'AQUÁTICA',1453921123994,'20201');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273460,'TERRESTRE',1453921123994,'20202');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273463,'AÉREA',1453921123994,'20203');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273465,'RESGATE',1453921123994,'20204');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273468,'ACIDENTE DOMÉSTICO',1453921123994,'20205');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933273470,'ACIDENTE DE TRÁFEGO',1453921123994,'20206');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933316531,'ACIDENTE DE TRABALHO',1453921123994,'20207');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933316554,'DESABAMENTO / SOTERRAMENTO',1453921123994,'20208');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933316556,'INCÊNDIO URBANO',1453921123994,'20209');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933316559,'INCÊNDIO FLORESTAL',1453921123994,'20210');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933345194,'FESTAS E EVENTOS',1453921123994,'20211');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933345224,'ACEIRO / QUEIMADA CONTROLADA',1453921123994,'20212');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453933345227,'OUTRAS / A.P COMUNITÁRIAS',1453921123994,'20299');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934213465,'ATROPELAMENTO',1453921982592,'30101');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934213490,'BICICLETA X BICICLETA',1453921982592,'30102');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934213492,'BICICLETA X OBJETO FIXO',1453921982592,'30103');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934213495,'CAPOTAMENTO/ TOMBAMENTO',1453921982592,'30104');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934241563,'CARRO X BICICLETA',1453921982592,'30105');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934241590,'CARRO X CARRO',1453921982592,'30106');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934241593,'CARRO X MOTO',1453921982592,'30107');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934241595,'CARRO X OBJETO FIXO',1453921982592,'30108');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270308,'MOTO X BICICLETA',1453921982592,'30109');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270331,'MOTO X MOTO',1453921982592,'30110');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270333,'MOTO X OBJETO FIXO',1453921982592,'30111');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270336,'QUEDA DE BICICLETA',1453921982592,'30112');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270338,'QUEDA DE MOTO',1453921982592,'30113');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934270341,'VEÍCULO DE GRANDE PORTE X BICICLETA',1453921982592,'30114');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934307516,'VEÍCULO DE GRANDE PORTE X CARRO ',1453921982592,'30115');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934307544,'VEÍCULO DE GRANDE PORTE X MOTO',1453921982592,'30116');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934307546,'VEÍCULO DE GRANDE PORTE X OBJETO FIXO',1453921982592,'30117');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934307549,'VEÍCULO DE GRANDE PORTE X VEÍCULO DE GRANDE PORTE',1453921982592,'30118');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934333707,'ANIMAL X BICICLETA',1453921982592,'30119');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934333732,'ANIMAL X CARRO',1453921982592,'30120');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934333734,'ANIMAL X MOTO',1453921982592,'30121');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934333737,'ANIMAL X VEÍCULO DE GRANDE PORTE',1453921982592,'30122');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365532,'EMBARCAÇÃO',1453921982592,'30123');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365555,'EMBARCAÇÃO X EMBARCAÇÃO',1453921982592,'30124');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365557,'QUEDA DE EMBARCAÇÃO',1453921982592,'30125');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365560,'AERONÁUTICO',1453921982592,'30126');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365562,'VEÍCULO DE TRAÇÃO ANIMAL X BICICLETA',1453921982592,'30127');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365565,'VEÍCULO DE TRAÇÃO ANIMAL X CARRO',1453921982592,'30128');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365567,'VEÍCULO DE TRAÇÃO ANIMAL X MOTO',1453921982592,'30129');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934365570,'VEÍCULO DE TRAÇÃO ANIMAL X VEÍCULO DE GRANDE PORTE',1453921982592,'30130');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934416423,'VEÍCULO DE TRAÇÃO ANIMAL X VEÍCULO DE TRAÇÃO ANIMAL',1453921982592,'30131');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934416448,'VEÍCULO DE TRAÇÃO ANIMAL X OBJETO FIXO',1453921982592,'30132');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934416450,'SAÍDA DE PISTA / COLISÃO MISTERIOSA',1453921982592,'30133');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934416453,'OUTROS/ ACIDENTE DE TRÂNSITO',1453921982592,'30199');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835217,'ARTES MARCIAIS',1453921982613,'30201');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835237,'ATLETISMO',1453921982613,'30202');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835239,'BASQUETE',1453921982613,'30203');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835244,'ESPORTES RADICAIS',1453921982613,'30204');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835247,'FUTEBOL',1453921982613,'30205');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934835249,'HANDEBOL',1453921982613,'30206');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934870065,'HIPISMO',1453921982613,'30207');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934870087,'NATAÇÃO',1453921982613,'30208');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934870090,'VÔLEI',1453921982613,'30209');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453934870092,'OUTROS / ACIDENTE ESPORTIVO',1453921982613,'30299');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935197630,'FÍSICA',1453921982614,'30301');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935197655,'POR ANIMAL (PICADA, MORDIDA, ETC)',1453921982614,'30302');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935197657,'POR ARMA BRANCA',1453921982614,'30303');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935197660,'POR ARMA DE FOGO',1453921982614,'30304');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935225048,'POR OBJETO',1453921982614,'30305');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935225075,'SEXUAL',1453921982614,'30306');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935225078,'CEROL',1453921982614,'30307');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935225080,'OUTRA / AGRESSÃO',1453921982614,'30399');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932435,'ACIDENTE VASCULAR CEREBRAL (A.V.C)',1453921982615,'30401');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932473,'CONVULSÃO',1453921982615,'30402');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932475,'CRISE HIPERTENSIVA',1453921982615,'30403');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932477,'DESMAIO (SÍNCOPE)',1453921982615,'30404');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932479,'DISTÚRBIO MENTAL/PASCIENTE PSIQUIÁTRICO/QBU',1453921982615,'30405');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932480,'HEMORRAGIA',1453921982615,'30406');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932481,'OBSTÉTRICO (GRAVIDEZ, ASSISTÊNCIA AO PARTO)',1453921982615,'30407');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932484,'PARADA CARDIORRESPIRATÓRIA',1453921982615,'30408');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932485,'PROBLEMAS CARDIACOS',1453921982615,'30409');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453935932486,'PROBLEMAS RESPIRATÓRIOS',1453921982615,'30410');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041409,'PROBLEMAS NO SISTEMA DIGESTIVO',1453921982615,'30411');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041410,'PROBLEMAS NO SISTEMA URINÁRIO',1453921982615,'30412');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041411,'DOENÇAS CRÔNICAS DEGENERATIVAS',1453921982615,'30413');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041414,'PROBLEMAS OSTEOMUSCULARES',1453921982615,'30414');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041415,'OBSTRUÇÃO DE VIAS AÉREAS / ENGASGAMENTO',1453921982615,'30415');"},
      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(1453936041416,'OUTRO / EMERGÊNCIA CLÍNICA',1453921982615,'30499');"},

      {value: "INSERT INTO natureza(id, name, subgroup_id, code) VALUES(,'',,'');"},
   ]      
});