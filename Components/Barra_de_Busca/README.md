
## Barra de Busca Responsiva

### Descrição
Este projeto implementa uma barra de busca responsiva com diversos campos interativos, criada utilizando **HTML** e **CSS Vanilla**. O objetivo principal é fornecer uma interface limpa e funcional para pesquisas, permitindo aos usuários filtrar resultados com base em critérios específicos.

### Estrutura do Código

#### HTML
- **Cabeçalho (`<head>`)**:
  - Inclui metadados, links para a fonte personalizada `Outfit` e o ícone de busca da biblioteca **Font Awesome**.
- **Corpo (`<body>`)**:
  - Contém um contêiner principal com a classe `search-bar`, que engloba:
    - **Campo de Busca**: Um campo de texto combinado com um seletor dropdown e um botão de busca.
    - **Campo de Data de Retirada**: Um input para selecionar a data de retirada.
    - **Campo de Data de Devolução**: Um input para selecionar a data de devolução.
    - **Botão de Pesquisa**: Um botão estilizado que pode ser utilizado para enviar os critérios de busca.

#### CSS
- **Estilo Geral**:
  - Utiliza a fonte `Outfit` e centraliza o conteúdo na página.
  - O fundo da página tem um tom claro para destacar a barra de busca.
- **Barra de Busca (`.search-bar`)**:
  - Estilizada com `flexbox` para alinhamento horizontal e responsividade.
  - Adiciona sombras e bordas arredondadas para um design moderno.
- **Campos de Entrada e Botões**:
  - Estilizados com padding, bordas arredondadas e cores contrastantes para uma boa usabilidade.
  - Botões possuem transições suaves para realce ao passar o mouse.
- **Responsividade**:
  - Implementada com uma `media query` para telas menores que 768px:
    - A barra de busca é reorganizada em uma coluna vertical.
    - Campos e botões ajustam sua largura para ocupar o espaço disponível.

### Tecnologias Utilizadas
- **HTML**: Estrutura básica do projeto.
- **CSS Vanilla**: Estilo e responsividade personalizados.
- **Font Awesome**: Ícones para enriquecer a interface.

### Como Utilizar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador para visualizar a barra de busca.
3. Insira dados nos campos e experimente as funcionalidades.

### Futuras Melhorias
- Adicionar validação nos campos de entrada.
- Implementar a funcionalidade do botão de busca com JavaScript.
- Migrar o design para frameworks como Bootstrap, se necessário, para maior flexibilidade.
