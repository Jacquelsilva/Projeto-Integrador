let activeButton = null;
let activeHover = null

function hoverButton1() {
  document.getElementById('button1').style.opacity = 1;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  document.getElementById('button5').style.opacity = 0.6;
  document.getElementById('button6').style.opacity = 0.6;
  activeHover = 'button1';
}
function hoverButton2() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 1;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  document.getElementById('button5').style.opacity = 0.6;
  document.getElementById('button6').style.opacity = 0.6;
  activeHover = 'button2';
}
function hoverButton3() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 1;
  document.getElementById('button4').style.opacity = 0.6;
  document.getElementById('button5').style.opacity = 0.6;
  document.getElementById('button6').style.opacity = 0.6;
  activeHover = 'button3';
}
function hoverButton4() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 1;
  document.getElementById('button5').style.opacity = 0.6;
  document.getElementById('button6').style.opacity = 0.6;
  activeHover = 'button4';
}
function hoverButton5() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  document.getElementById('button5').style.opacity = 1;
  document.getElementById('button6').style.opacity = 0.6;
  activeHover = 'button5';
}
function hoverButton6() {
  document.getElementById('button1').style.opacity = 0.6;
  document.getElementById('button2').style.opacity = 0.6;
  document.getElementById('button3').style.opacity = 0.6;
  document.getElementById('button4').style.opacity = 0.6;
  document.getElementById('button5').style.opacity = 0.6;
  document.getElementById('button6').style.opacity = 1;
  activeHover = 'button6';
}




function mudarButton1() {
  document.getElementById('nomejogador').innerHTML = "Desenvolvimento Web";
  document.getElementById('textidolos').innerHTML = "Desenvolvimento Web é o processo de criação, manutenção e otimização de sites e aplicações para a internet. Ele abrange tanto o front-end, que trata da interface e interação do usuário, quanto o back-end, que lida com a lógica do sistema, servidores e bancos de dados. <br> No front-end, são utilizadas linguagens como HTML, CSS e JavaScript para construir a aparência e a usabilidade dos sites. No back-end, linguagens como PHP, Python e Node.js são usadas para criar a infraestrutura e o funcionamento por trás do site. Além disso, o desenvolvimento web também envolve o uso de frameworks como React, Angular e Vue.js para otimizar a criação de interfaces dinâmicas e interativas.";
  document.getElementById('imagemidols').className = 'Dweb';
  document.getElementById('gol').innerHTML = "200h";
  document.getElementById('aulas').innerHTML = "240 aulas";
  document.getElementById('container-fatec').className = 'container-fatec DWeb-F';
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button5').className = 'cards inactive';
  document.getElementById('button6').className = 'cards inactive';
  document.getElementById('button1').className = 'cards active2';
  activeButton = 'button1';
}
function mudarButton2() {
  document.getElementById('nomejogador').innerHTML = "Engenharia de Software";
  document.getElementById('textidolos').innerHTML = "Engenharia de Software é a área focada no desenvolvimento, teste e manutenção de software, garantindo qualidade, eficiência e escalabilidade. Envolve etapas como definição de requisitos, projeto, codificação, testes e manutenção, sempre seguindo boas práticas como modularidade, reuso de código e metodologias ágeis. O objetivo é criar soluções confiáveis e adaptáveis, atendendo às necessidades dos usuários, enquanto evolui com novas tecnologias e padrões. É essencial para construir sistemas robustos, fáceis de manter e que acompanhem a inovação tecnológica.";
  document.getElementById('imagemidols').className = 'ES';
  document.getElementById('gol').innerHTML = "134h";
  document.getElementById('aulas').innerHTML = "160 aulas";
  document.getElementById('container-fatec').className = 'container-fatec ES-F';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button5').className = 'cards inactive';
  document.getElementById('button6').className = 'cards inactive';
  document.getElementById('button2').className = 'cards active2';
  activeButton = 'button2';
}
function mudarButton3() {
  document.getElementById('nomejogador').innerHTML = "Desing Digital";
  document.getElementById('textidolos').innerHTML = "Design digital é a criação de interfaces, produtos e experiências visuais para plataformas digitais, como sites, aplicativos e mídias sociais. Ele combina criatividade e tecnologia para resolver problemas, comunicar ideias e proporcionar uma experiência agradável aos usuários. Os elementos principais do design digital incluem tipografia, cores, imagens e layouts, organizados de maneira a transmitir uma mensagem clara e intuitiva. <br> Além da estética, o design digital foca na usabilidade e na navegação fluida, garantindo que os usuários possam interagir de forma eficiente com as plataformas. Ferramentas como Photoshop, Figma e Sketch são amplamente usadas pelos designers para criar protótipos e interfaces visuais.";
  document.getElementById('imagemidols').className = 'DD';
  document.getElementById('gol').innerHTML = "67h";
  document.getElementById('aulas').innerHTML = "80 aulas";
  document.getElementById('container-fatec').className = "container-fatec DD-F";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button5').className = 'cards inactive';
  document.getElementById('button3').className = 'cards active2';
  document.getElementById('button6').className = 'cards inactive';
  activeButton = 'button3';
}
function mudarButton4() {
  document.getElementById('nomejogador').innerHTML = "Algoritmo e Lógica de Programação";
  document.getElementById('textidolos').innerHTML = "Algoritmos e lógica de programação são fundamentais no desenvolvimento de software. Um algoritmo é uma sequência de instruções bem definidas que resolvem um problema ou realizam uma tarefa específica. A lógica de programação, por sua vez, envolve o raciocínio necessário para estruturar essas instruções de maneira eficiente e correta, usando conceitos como variáveis, condições, laços e funções. Juntos, algoritmos e lógica de programação formam a base para criar soluções computacionais otimizadas.";
  document.getElementById('imagemidols').className = "ALP";
  document.getElementById('gol').innerHTML = "67h";
  document.getElementById('aulas').innerHTML = "80 aulas";
  document.getElementById('container-fatec').className = "container-fatec ALP-F";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button5').className = 'cards inactive';
  document.getElementById('button6').className = 'cards inactive';
  document.getElementById('button4').className = 'cards active2';
  activeButton = 'button4';
}
function mudarButton5() {
  document.getElementById('nomejogador').innerHTML = "Sistemas Operacionais e Redes de Computadores";
  document.getElementById('textidolos').innerHTML = "Sistemas operacionais são responsáveis por gerenciar e controlar os recursos de um computador, como a memória, o processador, o armazenamento e os dispositivos periféricos, garantindo que diferentes programas possam rodar de maneira eficiente e segura. Já as redes de computadores conectam diversos dispositivos, como computadores, servidores e smartphones, permitindo o compartilhamento de dados e a comunicação entre eles. Essa conexão é fundamental para o funcionamento da internet.";
  document.getElementById('imagemidols').className = "SO";
  document.getElementById('gol').innerHTML = "67h";
  document.getElementById('aulas').innerHTML = "80 aulas";
  document.getElementById('container-fatec').className = "container-fatec SO-F";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button6').className = 'cards inactive';
  document.getElementById('button5').className = 'cards active2';
  activeButton = 'button5';
}
function mudarButton6() {
  document.getElementById('nomejogador').innerHTML = "Modelagem de Banco de Dados";
  document.getElementById('textidolos').innerHTML = "A modelagem de banco de dados é o processo de estruturar e organizar dados de forma eficiente para garantir que eles possam ser armazenados, gerenciados e acessados corretamente. Ela envolve a criação de um modelo conceitual, que define as entidades e suas relações, seguido de um modelo lógico que detalha as tabelas e campos. O objetivo é criar uma representação clara dos dados e suas interações, facilitando a integridade, consistência e desempenho no armazenamento e recuperação das informações em sistemas de banco de dados.";
  document.getElementById('imagemidols').className = "MBD";
  document.getElementById('gol').innerHTML = "200h";
  document.getElementById('aulas').innerHTML = "240 aulas";
  document.getElementById('container-fatec').className = "container-fatec MBD-F";
  document.getElementById('button2').className = 'cards inactive';
  document.getElementById('button3').className = 'cards inactive';
  document.getElementById('button1').className = 'cards inactive';
  document.getElementById('button4').className = 'cards inactive';
  document.getElementById('button5').className = 'cards inactive';
  document.getElementById('button6').className = 'cards active2';
  activeButton = 'button6';
}



function nothover() {
  if (activeButton === activeHover) {
    document.getElementById(activeButton).style.opacity = 1;
  }
  else if (activeButton === 'button1') {
    document.getElementById('button1').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button2') {
    document.getElementById('button2').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button3') {
    document.getElementById('button3').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button4') {
    document.getElementById('button4').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  }  
  else if (activeButton === 'button5') {
    document.getElementById('button5').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } 
  else if (activeButton === 'button6') {
    document.getElementById('button6').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else {
    document.getElementById('button1').style.opacity = 1;
    document.getElementById('button2').style.opacity = 1;
    document.getElementById('button3').style.opacity = 1;
    document.getElementById('button4').style.opacity = 1;
    document.getElementById('button5').style.opacity = 1;
  }
}

function mudarButton_pergunta1() {
  document.getElementById('titulo_pergunta').innerHTML = "O que é TI e qual a sua importância?";
  document.getElementById('textpergunta').innerHTML = "Tecnologia da Informação (TI) envolve o uso de sistemas computacionais, redes e software para processar, armazenar e transmitir dados. Ela é essencial para automatizar processos, melhorar a comunicação e apoiar a tomada de decisões, impactando diretamente na eficiência e inovação das organizações.<br>A TI é fundamental no mundo atual, pois facilita a comunicação, otimiza processos e cria novas oportunidades de negócio. Com o avanço de tecnologias como inteligência artificial e Big Data, ela tem sido crucial para a transformação digital e o crescimento econômico.";
  document.getElementById('button_pergunta2').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta3').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta4').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta5').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta6').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta1').className = 'cards_perguntas active';
  activeButton = 'button_pergunta1';
}

function mudarButton_pergunta2() {
  document.getElementById('titulo_pergunta').innerHTML = "Quais são as principais áreas de atuação em TI?";
  document.getElementById('textpergunta').innerHTML = "Existem diversas áreas e sub-áreas de atuação no mercado da Tecnologia da informação, porém os mais conhecidos são.<br>Programador Front-End<br>Programador Back-End<br>Analista de Dados<br>Gestor de Segurança.";
  document.getElementById('button_pergunta2').className = 'cards_perguntas active';
  document.getElementById('button_pergunta3').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta4').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta5').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta6').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta1').className = 'cards_perguntas inactive';
  activeButton = 'button_pergunta2';
}
function mudarButton_pergunta3() {
  document.getElementById('titulo_pergunta').innerHTML = "O que faz um desenvolvedor de software?";
  document.getElementById('textpergunta').innerHTML = "Um desenvolvedor de software é um profissional responsável por criar, testar e manter programas de computador. Ele escreve o código que possibilita o funcionamento de sistemas, aplicativos ou sites.<br> As principais funções de um desenvolvedor de software incluem:";
  document.getElementById('button_pergunta2').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta3').className = 'cards_perguntas active';
  document.getElementById('button_pergunta4').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta5').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta6').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta1').className = 'cards_perguntas inactive';
  activeButton = 'button_pergunta3';
}
function mudarButton_pergunta4() {
  document.getElementById('titulo_pergunta').innerHTML = "Como posso começar?";
  document.getElementById('textpergunta').innerHTML = "Pode começar entrando em contato com o suporte FATEC e se inscrever para poder realizar o vestibular referente ao curso de DSM (Desenvolvimento de Software Multiplataforma).<br>fatecindaiatuba@hotmail.com<br>+55 11 98898-5343";
  document.getElementById('button_pergunta2').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta3').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta4').className = 'cards_perguntas active';
  document.getElementById('button_pergunta5').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta6').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta1').className = 'cards_perguntas inactive';
  activeButton = 'button_pergunta4';
}
function mudarButton_pergunta5() {
  document.getElementById('titulo_pergunta').innerHTML = "Quais as principais linguagens de programação?";
  document.getElementById('textpergunta').innerHTML = "As principais linguagens de programação variam de acordo com o tipo de projeto e as necessidades específicas, mas algumas se destacam devido à sua popularidade, versatilidade e uso generalizado. Aqui estão algumas das mais importantes:<br>Python: Muito popular pela sua simplicidade e legibilidade, é amplamente usada em ciência de dados, automação, desenvolvimento web, inteligência artificial e aprendizado de máquina.<br><br>JavaScript: Essencial para o desenvolvimento web, especialmente em sites dinâmicos. É executada no navegador, mas também pode ser usada no back-end com o Node.js.<br><br>Java: Uma das linguagens mais antigas e ainda muito usada em sistemas corporativos, aplicativos Android, e grandes plataformas. Ela é conhecida pela portabilidade e robustez<br><br>C/C++: São linguagens de baixo nível, extremamente rápidas e eficientes. O C é utilizado para sistemas operacionais, enquanto o C++ é amplamente usado em jogos, sistemas embarcados e aplicações de alto desempenho.<br><br>C#: Principalmente usada no desenvolvimento de software para o ecossistema Microsoft, incluindo aplicativos Windows e jogos (com o Unity).";
  document.getElementById('button_pergunta2').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta3').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta4').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta5').className = 'cards_perguntas active';
  document.getElementById('button_pergunta6').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta1').className = 'cards_perguntas inactive';
  activeButton = 'button_pergunta5';
}
function mudarButton_pergunta6() {
  document.getElementById('titulo_pergunta').innerHTML = "O que é Inteligência Artificial (IA) e como ela impacta a area de TI?";
  document.getElementById('textpergunta').innerHTML = "A Inteligência Artificial (IA) envolve a criação de sistemas capazes de aprender, tomar decisões e resolver problemas de forma autônoma, utilizando algoritmos e dados. Ela simula processos cognitivos humanos, como reconhecimento de padrões e análise preditiva.<br>Na área de TI, a IA melhora a automação de tarefas, otimiza o processamento de dados e contribui para a personalização de serviços. Ela também fortalece a segurança cibernética, identificando padrões de ataques e prevenindo ameaças de forma mais eficiente.";
  document.getElementById('button_pergunta2').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta3').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta4').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta5').className = 'cards_perguntas inactive';
  document.getElementById('button_pergunta6').className = 'cards_perguntas active';
  document.getElementById('button_pergunta1').className = 'cards_perguntas inactive';
  activeButton = 'button_pergunta6';
}

function nothover_perguntas() {
  if (activeButton === activeHover) {
    document.getElementById(activeButton).style.opacity = 1;
  }
  else if (activeButton === 'button_pergunta1') {
    document.getElementById('button_pergunta1').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button_pergunta2') {
    document.getElementById('button_pergunta2').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button_pergunta3') {
    document.getElementById('button_pergunta3').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else if (activeButton === 'button_pergunta4') {
    document.getElementById('button_pergunta4').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  }  
  else if (activeButton === 'button_pergunta5') {
    document.getElementById('button_pergunta5').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } 
  else if (activeButton === 'button_pergunta6') {
    document.getElementById('button_pergunta6').style.opacity = 1;
    document.getElementById(activeHover).style.opacity = 0.6;
  } else {
    document.getElementById('button_pergunta1').style.opacity = 1;
    document.getElementById('button_pergunta2').style.opacity = 1;
    document.getElementById('button_pergunta3').style.opacity = 1;
    document.getElementById('button_pergunta4').style.opacity = 1;
    document.getElementById('button_pergunta5').style.opacity = 1;
  }
}