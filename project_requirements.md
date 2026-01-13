# Descrição do Negócio - Web App para Restaurantes

## Visão Geral
Plataforma conectando consumidores, garçons, cozinha e gerentes para facilitar reservas, pedidos, pagamentos e gestão.

## Atores
1.  **Consumidor**: Busca restaurantes, visualiza cardápio, reserva, faz pedidos, paga (split payment), acompanha status.
2.  **Garçom**: Gerencia mesas, lança pedidos, registra pagamentos, recebe notificações da cozinha.
3.  **Cozinha/Bar**: Fila de pedidos, status de preparo, notificações para garçons.
4.  **Gerente**: Relatórios financeiros, gestão de staff, cardápio, políticas de pagamento, analytics, compra de destaque.

## Funcionalidades Principais

### Consumidor
*   **Geolocalização**: Mapa com estabelecimentos próximos. Busca por filtros.
*   **Cardápio Digital**: Detalhes, ingredientes, alérgenos, preços.
*   **Reservas**: Mesas ou itens. Reembolsável até 2h antes.
*   **Pagamentos**: Stripe API. Split payment (valor ou %). Pré ou pós-consumo. OTP (email/telefone).
*   **Sessão**: Acompanhamento em tempo real, histórico.
*   **Acesso**: "Mini app" via QR Code ou busca.

### Operacional (Garçom/Cozinha)
*   Fluxo de pedidos: Mesa -> Cozinha -> Entrega.
*   Notificações em tempo real.

### Gestão (Gerente)
*   Analytics: Dias movimentados, itens populares.
*   Configurações: Pagamento antecipado/tardio, taxas de reserva.
*   Monetização Interna: Compra de destaque no mapa.

## Modelo de Negócio
*   Taxa por transação (Custo API + 1%).

## Fluxo do Usuário
1.  Home: Mapa/Busca, QR Code, Perfil.
2.  Restaurante: Contexto específico (subdomínio/url).
3.  Consumo: Seleção de itens -> Pagamento/Divisão -> Acompanhamento.
