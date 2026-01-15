-- =====================================================
-- Script de Inserção de Dados de Exemplo
-- Sistema de Gestão de Restaurantes (UTABLE)
-- =====================================================

DO $$
DECLARE
    v_id_usuario_admin INTEGER;
    v_id_restaurante INTEGER;
    v_id_papel_gerente INTEGER;
    v_id_item_1 INTEGER;
    v_id_item_2 INTEGER;
    v_id_ingred_1 INTEGER;
    v_id_ingred_2 INTEGER;
BEGIN
    -- 1. Inserir Usuário Administrador (Gerente)
    -- Senha: admin123 (hash fictício)
    INSERT INTO usuarios (nome_completo, email, telefone, senha_hash)
    VALUES ('Admin UTable', 'admin@utable.com', '+5511999999999', '$2b$10$SampleHashForAdmin123')
    RETURNING id_usuario INTO v_id_usuario_admin;

    -- 2. Inserir Restaurante
    INSERT INTO restaurantes (nome_fantasia, razao_social, cnpj, descricao, categoria_principal, logradouro, numero, bairro, cidade, estado, cep, latitude, longitude, destaque_nivel)
    VALUES ('The Gourmet Kitchen', 'Gourmet Kitchen LTDA', '12.345.678/0001-90', 'Premium Italian experience with modern touch.', 'Italian', 'Rua Gastronômica', '500', 'Bela Vista', 'São Paulo', 'SP', '01311-000', -23.561684, -46.655981, 'premium')
    RETURNING id_restaurante INTO v_id_restaurante;

    -- 3. Vincular Usuário ao Papel de GERENTE no Restaurante
    SELECT id_papel INTO v_id_papel_gerente FROM papeis WHERE nome = 'GERENTE';
    INSERT INTO usuarios_papeis (id_usuario, id_papel, id_restaurante)
    VALUES (v_id_usuario_admin, v_id_papel_gerente, v_id_restaurante);

    -- 4. Inserir Configuração de Pagamento
    INSERT INTO restaurantes_config_pagamento (id_restaurante, permite_pagar_antes, permite_pagar_depois, permite_ambos, reserva_mesa_paga, reserva_mesa_gratis, taxa_plataforma_percentual)
    VALUES (v_id_restaurante, true, true, true, false, true, 1.00);

    -- 5. Inserir Mesas
    INSERT INTO mesas (id_restaurante, identificador_mesa, capacidade) VALUES (v_id_restaurante, 'T01', 2);
    INSERT INTO mesas (id_restaurante, identificador_mesa, capacidade) VALUES (v_id_restaurante, 'T02', 4);
    INSERT INTO mesas (id_restaurante, identificador_mesa, capacidade) VALUES (v_id_restaurante, 'T03', 4);
    INSERT INTO mesas (id_restaurante, identificador_mesa, capacidade) VALUES (v_id_restaurante, 'T04', 6);
    INSERT INTO mesas (id_restaurante, identificador_mesa, capacidade) VALUES (v_id_restaurante, 'VIP1', 8);

    -- 6. Inserir Ingredientes
    INSERT INTO ingredientes (nome, preco, descricao) VALUES ('Wagyu Beef', 15.00, 'Premium Marbled Beef') RETURNING id_ingrediente INTO v_id_ingred_1;
    INSERT INTO ingredientes (nome, preco, descricao) VALUES ('Truffle Oil', 10.00, 'Black Truffle Essence') RETURNING id_ingrediente INTO v_id_ingred_2;
    INSERT INTO ingredientes (nome, preco, descricao) VALUES ('Parmesan Cheese', 5.00, 'Aged 24 months');

    -- 7. Inserir Alérgenos (Vincular aos Ingredientes)
    -- Gluten is id 1, Lactose is id 2 (baseado no script anterior)
    INSERT INTO ingredientes_alergenos (id_ingrediente, id_alergeno) VALUES (v_id_ingred_2, 1); -- Truffle Oil (Exemplo de glúten)
    -- Parmesan has Lactose (ID 2)
    INSERT INTO ingredientes_alergenos (id_ingrediente, id_alergeno)
    SELECT id_ingrediente, 2 FROM ingredientes WHERE nome = 'Parmesan Cheese';

    -- 8. Inserir Itens do Cardápio (Produtos)
    INSERT INTO cardapio_itens (id_restaurante, nome, descricao, preco, ativo)
    VALUES (v_id_restaurante, 'Wagyu Burger', 'Succulent 200g Wagyu patty with truffle mayo and aged cheddar.', 24.00, true)
    RETURNING id_item INTO v_id_item_1;

    INSERT INTO cardapio_itens (id_restaurante, nome, descricao, preco, ativo)
    VALUES (v_id_restaurante, 'Truffle Parmesan Fries', 'Hand-cut fries tossed in truffle oil and mountain-aged parmesan.', 14.00, true)
    RETURNING id_item INTO v_id_item_2;

    -- 9. Vincular Itens aos Ingredientes
    INSERT INTO cardapio_itens_ingredientes (id_item, id_ingrediente, quantidade) VALUES (v_id_item_1, v_id_ingred_1, '200g');
    INSERT INTO cardapio_itens_ingredientes (id_item, id_ingrediente, quantidade) VALUES (v_id_item_2, v_id_ingred_2, '10ml');

    RAISE NOTICE 'Dados de exemplo inseridos com sucesso para o restaurante %!', (SELECT nome_fantasia FROM restaurantes WHERE id_restaurante = v_id_restaurante);
END $$;
