# Rodapé Responsivo - AluCar

## Descrição
Este projeto consiste em um rodapé responsivo, desenvolvido para o site fictício da empresa AluCar. Ele é composto por diferentes seções, como links úteis, informações de contato e ícones de redes sociais. A estrutura foi projetada para ser responsiva e acessível em dispositivos de diferentes tamanhos de tela.

## Funcionalidades
- **Seção de Links úteis:** Inclui links para páginas importantes do site, como "Sobre nós", "Termos de uso", entre outros.
- **Informações de Contato:** Apresenta e-mail, telefone e um campo para cadastro de e-mail.
- **Ícones de Redes Sociais:** Links para as redes sociais da AluCar.
- **Botão "Voltar ao Topo":** Permite que o usuário retorne rapidamente ao topo da página com animação suave.
- **Design Responsivo:** Adapta-se a diferentes tamanhos de tela, garantindo uma experiência consistente.

## Tecnologias Utilizadas
- **HTML5:** Para a estrutura do conteúdo.
- **CSS3:** Para estilização e responsividade.
- **JS:** Para estilização do botão.
- **Font Awesome & Bootstrap Icons:** Para os ícones.

## Estrutura do Projeto
### Arquivos Principais:
1. `index.html`: Contém a estrutura do rodapé.
2. `styles.css`: Responsável pela estilização e responsividade.

### Estrutura HTML
- **Seção Testimonials:** Espaço reservado para depoimentos futuros.
- **Rodapé:** Contém três colunas principais:
  - Logo e redes sociais.
  - Links úteis.
  - Informações de contato.
- **Footer Bottom:** Texto de copyright e botão "Voltar ao Topo".

### Estilização (CSS)
O CSS foi otimizado para:
- Garantir um layout limpo e responsivo.
- Reduzir espaços desnecessários entre elementos.
- Centralizar corretamente os elementos em telas menores.



## Customização
### Alterar Logos e Links:
- Substitua a imagem do logotipo em:
  ```html
  <img src="img/logo2.png" alt="AluCar Logo">
  ```
- Atualize os links das redes sociais em:
  ```html
  <a href="#"><i class="fab fa-linkedin"></i></a>
  ```

### Alterar Estilos:
- Edite o arquivo `styles.css` para personalizar cores, fontes ou espaçamentos.

## Responsividade
- **Breakpoints:** Foram definidos pontos de quebra no CSS para telas com largura de até 768px e 480px.
- **Centralização:** Todos os elementos são centralizados corretamente em telas menores.

## Melhorias Futuras
- Implementar os depoimentos reais na seção "Testimonials".
- Adicionar suporte a dark mode.
- Melhorar a acessibilidade com suporte a leitores de tela.

## Contribuição
1. Fork este repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request.



## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

