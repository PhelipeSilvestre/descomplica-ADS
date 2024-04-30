Introdução ao Markdown

O que é o Markdown?

O Markdown é uma linguagem de marcação usada para formatar documentos de todos os tipos, criada por John Gruber e Aaron Swartz em 2004, hoje é uma das linguagens mais populares entre programadores.

Um arquivo Markdown ou MD é composto por texto simples, é fácil de entender e não tem toda aquela marcação HTML poluindo o conteúdo.

NOTA: MD é a abreviação de Markdown.
Com o Markdown você pode adicionar formatação ao seu documento usando uma marcação de símbolos.

É importante ressaltar que, a formatação Markdown é diferente de uma formatação usada por algum editor WYSIWYG.

NOTA: WYSIWYG é a abreviatura de What You See Is What You Get. Basicamente, a formatação do conteúdo acontece em tempo real, ou seja, é visível imediatamente. Para saber mais você pode consultar esse artigo da Wikipedia.
Por exemplo, no Microsoft Word, que é um editor WYSIWYG, a formatação do texto ocorre ao selecionar um determinado conteúdo e pressionar um botão específico, uma combinação de teclas ou alguma opção do menu.

Tutorial de Markdown - Janela do Microsoft Word WYSIWYG
photo

Janela do Microsoft Word - WYSIWYG

No Markdown a formatação é aplicada através do uso de símbolos como, a cerquilha #, o asterisco \* e o sublinhado \_.
Essa simbologia é usada pelo processador Markdown para saber quais palavras/frases devem ser formatadas ao converter o seu arquivo para HTML.

Por exemplo, **eu quero que esse texto fique em negrito** e _esse texto em itálico_

Muito confuso? Vamos simplificar um pouco.

Ao cercar o conteúdo com dois asteriscos \*\* você enfatiza ele em negrito, já no segundo exemplo, nós usamos um sublinhado \_ para aplicar o itálico.

**Principais comandos**

Títulos:

# Título 1

## Título 2

### Título 3

Negrito e Itálico:

**Negrito**
_Itálico_

Listas:

Lista não ordenada:

- Item 1
- Item 2

Lista ordenada:

1. Item 1
2. Item 2

Links:

bash

[Texto do link](URL)

Imagens:

![Texto alternativo](URL_da_imagem)

Citações:

> Texto da citação

Código:

Inline:

go

`Código`

Em bloco:

css

```linguagem
Código em bloco

Tabelas:

lua

| Cabeçalho 1  | Cabeçalho 2  |
|--------------|--------------|
| Dado 1       | Dado 2       |

Linhas Horizontais:

yaml

---

Escape de caracteres especiais:

markdown

\*Texto\*



**Como editar um arquivo Markdown**

Um arquivo Markdown nada mais é do que texto, sendo assim, qualquer editor de texto simples já é o suficiente para a tarefa.

Porém, é interessante levarmos em consideração:

Um editor que permita converter o nosso documento Markdown para um outro formato.

Um editor que possa destacar a sintaxe do Markdown.

Um editor que mostre a conversão para HTML em tempo real

A boa notícia é que:

Existem diversos aplicativos Markdown para vários sistemas operacionais, incluindo, para Windows, para Linux, para Android e até, para iOS.
Em se tratando de Web, a coisa fica melhor ainda, diversos sites oferecem, de graça, aplicações Markdown para você editar seus documentos online, e o melhor, muitos possuem um conversor em tempo real, ou seja, enquanto você digita o aplicativo já vai convertendo para HTML.

Markdown vs WYSIWYG
Se um editor WYSIWYG (que oferece formatação em tempo real) é extremamente conveniente, por qual motivo eu devo usar o Markdown?
Tutorial de Markdown - Markdown vs WYSIWYG Microsoft Word
photo

Comparação entre a formatação Markdown e a formatação WYSIWYG.
Se usando um editor WYSIWYG eu posso pressionar um botão e ter a formatação que eu quero, por que vou digitar um documento com marcação Markdown?

Vamos analisar algumas razões para usar Markdown:

O Markdown pode ser usado para criar praticamente qualquer tipo de documento, seja ele, sites, livros, apresentações, e-mails, documentação técnica e muito mais.
A portabilidade do Markdown é excepcional. Por ser um documento de texto simples, esse, pode ser editado em qualquer aplicativo de texto. Se contrastarmos com o Microsoft Word, o formato docx é proprietário e necessita de programa específico para ser aberto, o que não acontece com o md.
Liberdade para escolher qual programa usar ao editar seus documentos, um arquivo MD pode ser editado em qualquer lugar.
Não importa o sistema operacional que você use, Windows, Mac ou Android, Markdown é compatível.
Ter seu documento acessível mesmo em caso de catástrofe. Seu editor de texto favorito não funciona mais? O suporte terminou? O programa se tornou pago? Sem problema, basta escolher qualquer outro editor de texto e continuar editando e acessando o seu documento, extremamente importante para arquivos como documentação técnica, livros e TCCs.
A comunidade gigante do Markdown o tornou acessível em diversos sites como linguagem padrão para formatar postagens. O GitHub e o Reddit são exemplos de sites famosos que utilizam o Markdown.
Um grande número de pessoas já utiliza o Markdown, sendo assim, seus documentos formatados serão entendidos por mais e mais pessoas.
Praticando
A melhor maneira de aprender é praticando!

É interessante que você tenha um editor de Markdown disponível enquanto aprende a sintaxe da linguagem.

A forma mais rápida de começar a praticar o Markdown é utilizando editores online. Com os aplicativos da Web você não precisa baixar nada, basta acessar o site e começar a editar o seu arquivo md.
Tutorial de Markdown - Editores online, StackEdit, Dillinger e Editor.md
photo

Editores online, StackEdit, Dillinger e Editor.md
StackEdit, Dillinger e Editor.md (Markeditor) são boas opções para iniciar.

NOTA: Abra um dos editores online em uma outra aba do seu navegador para treinar a sintaxe do Markdown em tempo real.
StackEdit
O StackEdit é um dos aplicativos mais completos. Além do editor ele também fornece um conversor em tempo real que renderiza o HTML no painel à direita.

Tutorial de Markdown - Interface do StackEdit
photo

Interface Web do editor Markdown StackEdit
Veja mais informações sobre o StackEdit na seção de ferramentas.

Dillinger
O Dillinger tem uma interface bem simples, porém oferece diversas opções para a edição do seu documento Markdown. Além da conversão em tempo real você também pode exportar o arquivo para os formatos HTML e PDF

Tutorial de Markdown - Interface Web do Dillinger
photo

Interface Web do editor Markdown Dillinger
Para mais informações sobre o Dillinger clique aqui.

Editor.md (Markeditor)
Já o Editor.md é uma ferramenta de código aberto, possui um conversor de MD para HTML em tempo real e botões que permitem criar elemento Markdown com apenas um clique.
Tutorial de Markdown - Interface Web do Editor.md
photo

Interface Web do editor Markdown Editor.md
E depois?
Após adquirir mais experiência você pode baixar algum aplicativo para o seu sistema operacional e começar a editar documentos de forma local.

Na seção de ferramentas você encontra uma lista extensa de aplicativos com instruções de como utilizá-los e informações sobre compatibilidade com elementos Markdown.

Bom, agora que você tem um editor disponível para praticar o Markdown vamos entender como funciona a conversão de um formato para o outro.

Como converter um arquivo Markdown
Vamos entender o procedimento usado por aplicativos Markdown para converter o seu arquivo md em um outro formato, normalmente HTML ou PDF.

Tutorial de Markdown - Como converter um arquivo Markdown
photo

Como converter um arquivo Markdown
A simplicidade do Markdown
Como você identifica um arquivo Markdown? Pela extensão, correto? Normalmente md ou markdown.

Tutorial de Markdown - Extensões do arquivo Markdown
photo

Extensões do arquivo Markdown
Um arquivo Markdown é um texto simples, não possui nenhuma formatação, não é um arquivo criptografado e menos ainda, compilado.

NOTA: Essa simplicidade permite que programas analisem o seu texto em busca de símbolos que identifiquem elementos Markdown.
Vários aplicativos Markdown, além do editor, também possuem um conversor integrado. O conversor é responsável por traduzir as sintaxe do Markdown para um outro formato.

Tutorial de Markdown - Arquivos gerados a partir do formatado Markdown
photo

Arquivos gerados a partir do formatado Markdown
Como é feita a conversão
O conversor Markdown usa um Parser para varrer o seu conteúdo em busca de marcações que sejam compatíveis com o Markdown; Ao encontrar uma marcação compatível, o Parser verifica se há uma correspondência no formato de saída, por exemplo, uma tag HTML que produza a mesma formatação.
Abaixo você pode visualizar uma tabela exemplo de correspondência entre um marcador Markdown e uma tag HTML.

Tutorial de Markdown - Comparação sintaxe Markdown com HTML - tabela
photo

Tabela de Comparação entre sintaxe Markdown & HTML.
Note que, o formato HTML é um dos mais utilizados quando falamos em converter Markdown. O seu arquivo convertido para HTML pode ser visualizado em qualquer navegador da Web como o Google Chrome, Mozilla Firefox e o Microsoft Edge.

Na imagem abaixo você confere uma versão simplificada do processo de conversão.

Tutorial de Markdown - Processo de conversão de Markdown em HTML
photo

Diagrama simples de como é feito a coversão entre Markdown e HTML.
NOTA: É importante ressaltar que, em um aplicativo mais robusto, os componentes podem estar separados, inclusive, podem ser independentes uns dos outros. O editor, o conversor, o parser, etc. A imagem acima é apenas uma representação singela de como o procedimento ocorre.
Vamos resumir a conversão em quatro etapas.

Primeiro nós temos que criar um arquivo Markdown, para isso, adicionamos a extensão md ou markdown ao salvar o documento. Durante a edição, qualquer editor de texto serve.
Em seguida, carregamos o arquivo em algum aplicativo Markdown.
Chegou a hora de fazer a conversão para outro formato, no nosso caso, HTML. Nessa etapa, um aplicativo dedicado ao Markdown é essencial.
Visualizar o resultado da conversão. Se for HTML, basta abrir o arquivo em um navegador.
Alguns pontos devem ser ressaltados

Esse procedimento pode variar dependendo de onde você está editando o seu arquivo Markdown.
Quando falamos em edição simples, ou seja, usando qualquer editor genérico, essas etapas ficam mais evidentes.
Em se tratando de editores online como, Dillinger, StackEdit e Editor.md, há uma mesclagem das etapas 2,3 e 4 diretamente na interface gráfica desses aplicativos.
Uso do Markdown
A criação de conteúdo para a Web é a forma mais popular de utilização do Markdown. Não somente na geração de páginas HTML, mas também na criação e edição de postagens de todos os tipos, desde a criação de simples comentários até a elaboração de documentação técnica.

Tutorial de Markdown - Postagem no Reddit usando o Markdown
photo

Postagem no Reddit usando o Markdown
Você pode também formatar listas de tarefas, mensagens de e-mails, listas de compras e muito mais.

Abaixo você confere alguns exemplos de documentos que podem ser criados usando o Markdown.

Websites
John Gruber e Aaron Swartz desenvolveram o Markdown pensando na Internet, logo, a criação de conteúdo para a Web se tornou um dos maiores atrativos da linguagem.

Muitos aplicativos, compatíveis com Markdown, já convertem, automaticamente, o seu conteúdo em HTML.

Tutorial de Markdown - Conversão automática de Markdown para HTML online
photo

Conversão automática de Markdown para HTML
Você pode criar sites completos usando como base a formatação do Markdown. Se é isso que pretende fazer, ferramentas como o Jekyll e o MkDocs, podem suprir as suas necessidades.

Jekyll e MkDocs são ferramentas que geram sites estáticos a partir de documentos Markdown. Saiba que, na criação de sites, é interessante que você tenha o mínimo de familiaridade com HTML, CSS e até versionamento de arquivos usando o Git.

O GitHub Pages fornece hospedagem gratuita para o seu site estático.

Se precisar de algo mais robusto como um gerenciado de conteúdo, o famoso CMS, dá uma olhadinha no Ghost.

O Ghost é uma plataforma gratuita e de código aberto para os bloggers. A ferramenta também conta com um editor Markdown embutido.

Utiliza o WordPress? Sites hospedados no WordPress.com já contam com suporte ao Markdown, mesmo assim, você pode usar o plugin Jetpack para sites que estejam em outros servidores de hospedagem.

Formatar texto
A simplicidade do Markdown dispensa todas as opções espalhafatosas de um editor WYSIWYG, como o Microsoft Word, mesmo assim, ainda oferece formatações suficientes para você editar seus documentos.

Negrito, itálico, e tachado são suportados pela linguagem, além, é claro, de listas, títulos, blockquotes e muito mais.

Tutorial de Markdown - Formatando em negrito, itálico e tachado no Markdown
photo

Formatando em negrito, itálico e tachado no Markdown
Outra vantagem de formatar documentos usando o Markdown é a possibilidade de convertê-los para basicamente qualquer outro formato de arquivo de texto.

Abaixo, segue uma lista de aplicativos para criar/editar documentos Markdown:

Windows: ghostwriter ou Markdown Monster
Linux: ReText ou ghostwriter
Mac: MacDown, iA Writer ou Marked
Web: Dillinger ou StackEdit
iOS / Android: iA Writer
Anotações
O Markdown é a linguagem perfeita para anotações.

Segue uma lista com aplicativos compatíveis com Markdown.

Notable: se destaca pela compatibilidade com diversas plataformas.
Bear: entramos no território da Apple, o Bear é compatível com Mac e iOS, não usa o Markdown por padrão, mas você pode ativá-lo. O Bear é bem semelhante ao Evernote.
Simplenote: é grátis, é simples e armazena anotações. Disponível em todas as plataformas.
Boostnote: mais voltado para programadores, além de ter o código fonte aberto.
E o Evernote? OneNote? Alguém...?

Pois é...

Quando falamos em aplicativos de anotações, o Evernote e o OneNote são, sem dúvidas, os mais populares. Infelizmente os dois programas, por padrão, não fornecem suporte ao Markdown.

No caso do Evernote você pode usar o Markdown Here ou o Marxico.

NOTA: Markdown Here é uma extensão para o seu navegador que permite criar emails usando a sintaxe do Markdown. Você pode usar essa mesma extensão no site do Evernote.
Livros
Como assim escrever livros usando o Markdown?

Isso mesmo, serviços como o Leanpub utiliza como base arquivos Markdown, a conversão é feita para EPUB, MOBI e PDF.

Não curte muito e-book?

Com o arquivo do seu livro eletrônico gerado você pode carregá-lo em outros serviços como o Kindle Direct Publishing e produzir cópias físicas.

Apresentações de slides
Sim, você leu direito, é possível criar apresentações de slides usando Markdown.

O Remark, Cleaver e o Landslide são ferramentas que geram apresentações de slides diretamente no seu navegador, todas utilizam arquivos md como base.

Prefere usar aplicativos? No macOS você pode consultar o Marked ou Deckset. No Windows nos podemos converter Markdown em slides usando o Pandoc.

Pode parecer perda de tempo gerar apresentações usando marcação Markdown, porém, com um pouco de prática você perceberá que é bem mais fácil e rápido do que usar uma ferramenta como o PowerPoint ou o Keynote.

E-mails
A maioria dos provedores de e-mail fornecem um editor WYSIWYG integrado a interface, mas convenhamos, muitos deixam a desejar, por um lado há muito complexidade, por outro faltam opções de formatação.

Tutorial de Markdown - Interface de criação de email do Gmail
photo

Interface de criação de email do Gmail
E agora?

Markdown Here é a solução para esses casos. Uma extensão para o seu navegador que permite que você escreva os seus e-mails usando a formatação do Markdown.

É grátis?

Sim, o Markdown Here é gratuito, código fonte aberto e faz a conversão de Markdown em HTML instantaneamente.

Documentação técnica
Markdown e documentação técnica andam lado a lado. Inúmeras empresas utilizam arquivos md para armazenar suas documentações.

O GitHub migrou seus docs para Markdown com a apoio da ferramenta Jekyll. Além disso, um dos arquivos mais famosos do mundo, o README.md do GitHub é composto por Markdown.

Tutorial de Markdown - Documentação do GitHub
photo

Documentação do GitHub
NOTA: O GitHub usa uma pequena variante do Markdown chamada GitHub-flavored Markdown.
Para a criação de documentação técnica, as ferramentas abaixo podem te ajudar:

Jekyll: Gera documentação a partir de arquivos Markdown, é a escolha do GitHub Pages.
MkDocs: Simples, rápido e fácil de usar. A base para a documentação são arquivos .md, a configuração usa arquivos YAML.
Docusaurus: Gerador de sites estáticos, uma das melhores ferramentas para criar docs. O Docusaurus foi desenvolvido pelo Facebook, suporta versionamento, pesquisa nos documentos e até traduções.
Read The Docs: Gera sites de documentação usando como base arquivos Markdown.
VuePress: Pelo nome você entende que tem alguma relação com o Vue, pois é, VuePress é um gerador de sites estáticos voltado para escrita de documentação técnica.
Sabores do Markdown
Imagine todos os dialetos diferentes que existem em um idioma, gírias, pronuncias, sotaques. Mesmo para os fluentes nativos, as vezes, fica difícil entender algumas coisas.

Tutorial de Markdown - Sabores do Markdown
photo

Variações da sintaxe do Markdown
Pois é, assim como acontece com idiomas, implementações do Markdown em diferentes programas podem variar também, mesmo que a diferença seja sutil, ainda pode causar confusão.

As variações do Markdown são chamadas de Flavors, por exemplo, o GitHub utiliza uma versão um pouco mais robusta do Markdown chamada GitHub-flavored Markdown ou GFM.

Alguns aplicativos usam somente a sintaxe básica, outros, usam uma combinação entre sintaxe básica e a sintaxe estendida, e por fim, há os que esporadicamente implementam elementos de ambas.

O que fazer?

A melhor maneira de entender um aplicativo é consultando sua documentação. Você pode também usar a velha e boa tática da tentativa e erro. Veja também a nossa lista de ferramentas onde listamos quais elementos do Markdown são compatíveis com cada aplicativo.

No final do dia, a melhor opção é utilizar um programa que ofereça a maior compatibilidade o possível como o Dillinger ou o StackEdit.

Alguns exemplos de sabores do Markdown são, GFM (GitHub-flavored Markdown); MultiMarkdown; Markdown Extra, Kramdown.

Conclusão
Nesse artigo você aprendeu os aspectos básicos do Markdown, o que você pode fazer com ele e suas diferentes implementações.

O próximo passo é aprender a sintaxe básica da linguagem ou, se já estiver confiante, consulte as seção de ferramentas para começar a utilizar o Markdown.
```
